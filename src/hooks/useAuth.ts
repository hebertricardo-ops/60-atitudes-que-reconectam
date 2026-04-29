import { useState, useEffect, useCallback } from 'react'

const AUTH_KEY = 'reconectar:auth'
const SESSION_DURATION_DAYS = 30

interface AuthState {
  verified: boolean
  email: string | null
  expiresAt: number | null
}

interface UseAuthReturn {
  isVerified: boolean
  email: string | null
  isLoading: boolean
  error: string | null
  verifyEmail: (email: string) => Promise<boolean>
  logout: () => void
}

function loadSession(): AuthState {
  if (typeof window === 'undefined') {
    return { verified: false, email: null, expiresAt: null }
  }
  try {
    const raw = localStorage.getItem(AUTH_KEY)
    if (!raw) return { verified: false, email: null, expiresAt: null }
    const parsed: AuthState = JSON.parse(raw)
    if (parsed.expiresAt && Date.now() > parsed.expiresAt) {
      localStorage.removeItem(AUTH_KEY)
      return { verified: false, email: null, expiresAt: null }
    }
    return parsed
  } catch {
    return { verified: false, email: null, expiresAt: null }
  }
}

function saveSession(email: string) {
  const expiresAt = Date.now() + SESSION_DURATION_DAYS * 24 * 60 * 60 * 1000
  localStorage.setItem(AUTH_KEY, JSON.stringify({ verified: true, email, expiresAt }))
}

export function useAuth(): UseAuthReturn {
  const [state, setState] = useState<AuthState>(() => loadSession())
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setState(loadSession())
  }, [])

  const verifyEmail = useCallback(async (email: string): Promise<boolean> => {
    const normalizedEmail = email.toLowerCase().trim()
    if (!normalizedEmail || !normalizedEmail.includes('@')) {
      setError('Por favor, informe um e-mail válido.')
      return false
    }
    setIsLoading(true)
    setError(null)
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
      const res = await fetch(`${supabaseUrl}/functions/v1/verify-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
        },
        body: JSON.stringify({ email: normalizedEmail }),
      })
      if (!res.ok) throw new Error('Erro ao verificar e-mail. Tente novamente.')
      const data: { valid: boolean } = await res.json()
      if (data.valid) {
        saveSession(normalizedEmail)
        setState({ verified: true, email: normalizedEmail, expiresAt: null })
        return true
      } else {
        setError('E-mail não encontrado. Verifique se é o mesmo e-mail utilizado na compra.')
        return false
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro de conexão. Tente novamente.')
      return false
    } finally {
      setIsLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_KEY)
    setState({ verified: false, email: null, expiresAt: null })
  }, [])

  return { isVerified: state.verified, email: state.email, isLoading, error, verifyEmail, logout }
}
