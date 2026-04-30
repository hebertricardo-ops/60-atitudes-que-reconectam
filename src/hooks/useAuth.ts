import { useState, useEffect, useCallback } from 'react'

const AUTH_KEY = 'reconectar:auth'
const SESSION_DURATION_DAYS = 30

interface AuthState {
  verified: boolean
  email: string | null
  plan: string | null
  purchasedExtras: string[]
  expiresAt: number | null
}

interface UseAuthReturn {
  isVerified: boolean
  email: string | null
  plan: string | null
  hasFullAccess: boolean
  purchasedExtras: string[]
  hasExtra: (slug: string) => boolean
  isLoading: boolean
  error: string | null
  verifyEmail: (email: string) => Promise<boolean>
  logout: () => void
}

const EMPTY_STATE: AuthState = { verified: false, email: null, plan: null, purchasedExtras: [], expiresAt: null }

function loadSession(): AuthState {
  if (typeof window === 'undefined') return EMPTY_STATE
  try {
    const raw = localStorage.getItem(AUTH_KEY)
    if (!raw) return EMPTY_STATE
    const parsed: AuthState = JSON.parse(raw)
    if (parsed.expiresAt && Date.now() > parsed.expiresAt) {
      localStorage.removeItem(AUTH_KEY)
      return EMPTY_STATE
    }
    return { ...parsed, purchasedExtras: parsed.purchasedExtras ?? [] }
  } catch {
    return EMPTY_STATE
  }
}

function saveSession(email: string, plan: string, purchasedExtras: string[]) {
  const expiresAt = Date.now() + SESSION_DURATION_DAYS * 24 * 60 * 60 * 1000
  const state: AuthState = { verified: true, email, plan, purchasedExtras, expiresAt }
  localStorage.setItem(AUTH_KEY, JSON.stringify(state))
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
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ email: normalizedEmail }),
      })
      if (!res.ok) throw new Error('Erro ao verificar e-mail. Tente novamente.')
      const data: { valid: boolean; plan: string | null; purchasedExtras?: string[] } = await res.json()
      if (data.valid) {
        const plan = data.plan ?? 'PLANO BASICO'
        const purchasedExtras = data.purchasedExtras ?? []
        saveSession(normalizedEmail, plan, purchasedExtras)
        setState({ verified: true, email: normalizedEmail, plan, purchasedExtras, expiresAt: null })
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
    setState(EMPTY_STATE)
  }, [])

  const hasExtra = useCallback((slug: string) => state.purchasedExtras.includes(slug), [state.purchasedExtras])

  return {
    isVerified: state.verified,
    email: state.email,
    plan: state.plan,
    hasFullAccess: state.plan === 'PLANO COMPLETO',
    purchasedExtras: state.purchasedExtras,
    hasExtra,
    isLoading,
    error,
    verifyEmail,
    logout,
  }
}
