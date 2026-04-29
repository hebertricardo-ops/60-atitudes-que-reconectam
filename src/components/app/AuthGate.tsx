import { useState, type ReactNode } from 'react'
import { useAuth } from '@/hooks/useAuth'
import capa from '@/assets/capa-login.jpg'

interface AuthGateProps {
  children: ReactNode
}

export function AuthGate({ children }: AuthGateProps) {
  const { isVerified, isLoading, error, verifyEmail } = useAuth()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (isVerified) return <>{children}</>

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    await verifyEmail(email)
  }

  return (
    <div
      style={{
        minHeight: '100dvh',
        background: '#FDF5F2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.25rem',
      }}
    >
      <div style={{ width: '100%', maxWidth: '380px', marginBottom: '2rem' }}>
        <img
          src={capa}
          alt="60 Atitudes Simples: Reconecte seu Casamento com 30 Minutos por Dia"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '16px',
            display: 'block',
          }}
        />
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: '380px',
          background: '#fff',
          borderRadius: '16px',
          border: '1px solid #EDE0DA',
          padding: '2rem 1.75rem',
        }}
      >
        <p
          style={{
            fontSize: '15px',
            color: '#6B5F5A',
            marginBottom: '1.5rem',
            lineHeight: 1.6,
            textAlign: 'center',
          }}
        >
          Para acessar o conteúdo, informe o e-mail utilizado na sua compra.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="auth-email"
              style={{
                display: 'block',
                fontSize: '13px',
                color: '#9A8880',
                marginBottom: '6px',
                letterSpacing: '0.04em',
              }}
            >
              Seu e-mail
            </label>
            <input
              id="auth-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemplo@email.com"
              required
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '12px 14px',
                fontSize: '15px',
                color: '#4A4A4A',
                background: '#FDF5F2',
                border: '1px solid #EDE0DA',
                borderRadius: '10px',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {submitted && error && (
            <p
              style={{
                fontSize: '13px',
                color: '#B85C50',
                marginBottom: '1rem',
                lineHeight: 1.5,
                padding: '10px 12px',
                background: '#FDF0EE',
                borderRadius: '8px',
                border: '1px solid #F0C4BC',
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading || !email}
            style={{
              width: '100%',
              padding: '13px',
              fontSize: '15px',
              fontWeight: 500,
              color: '#fff',
              background: isLoading || !email ? '#C9A99A' : '#B8846F',
              border: 'none',
              borderRadius: '10px',
              cursor: isLoading || !email ? 'not-allowed' : 'pointer',
            }}
          >
            {isLoading ? 'Verificando...' : 'Acessar meu conteúdo'}
          </button>
        </form>
      </div>

      <p
        style={{
          marginTop: '1.75rem',
          fontSize: '12px',
          color: '#B0A09A',
          textAlign: 'center',
          lineHeight: 1.6,
        }}
      >
        Comprou com outro e-mail?{' '}
        <a
          href="mailto:suporte@seudominio.com.br"
          style={{ color: '#9A7060', textDecoration: 'underline' }}
        >
          Entre em contato
        </a>
      </p>
    </div>
  )
}
