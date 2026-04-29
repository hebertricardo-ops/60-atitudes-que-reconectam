import { type ReactNode } from 'react'
import { useAuth } from '@/hooks/useAuth'

interface BonusGateProps {
  children: ReactNode
}

export function BonusGate({ children }: BonusGateProps) {
  const { hasFullAccess } = useAuth()

  if (hasFullAccess) return <>{children}</>

  return (
    <div style={{
      minHeight: '60dvh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1.25rem',
      textAlign: 'center',
    }}>
      <p style={{ fontSize: '32px', marginBottom: '1rem' }}>🔒</p>
      <h2 style={{
        fontFamily: 'Georgia, serif',
        fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
        fontWeight: 400,
        color: '#4A4A4A',
        marginBottom: '0.75rem',
        lineHeight: 1.4,
      }}>
        Os bônus fazem parte do Plano Completo
      </h2>
      <p style={{
        fontSize: '15px',
        color: '#6B5F5A',
        marginBottom: '2rem',
        lineHeight: 1.6,
        maxWidth: '320px',
      }}>
        Faça o upgrade para o Plano Completo e desbloqueie os 3 bônus interativos.
      </p>
      <a
        href="https://pay.hotmart.com/SEU_LINK_DE_UPGRADE"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '13px 28px',
          fontSize: '15px',
          fontWeight: 500,
          color: '#fff',
          background: '#B8846F',
          borderRadius: '10px',
          textDecoration: 'none',
        }}
      >
        Fazer upgrade agora
      </a>
    </div>
  )
}
