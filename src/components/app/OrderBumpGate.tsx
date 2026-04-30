import { type ReactNode } from 'react'
import { useAuth } from '@/hooks/useAuth'

interface OrderBumpGateProps {
  children: ReactNode
  bumpSlug: string
  bumpTitle: string
  hotmartCheckoutUrl: string
}

export function OrderBumpGate({ children, bumpSlug, bumpTitle, hotmartCheckoutUrl }: OrderBumpGateProps) {
  const { hasExtra } = useAuth()

  if (hasExtra(bumpSlug)) return <>{children}</>

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
      <p style={{ fontSize: '36px', marginBottom: '1rem' }}>🔒</p>
      <h2 style={{
        fontFamily: 'Georgia, serif',
        fontSize: 'clamp(1.15rem, 4vw, 1.45rem)',
        fontWeight: 400,
        color: '#4A4A4A',
        marginBottom: '0.75rem',
        lineHeight: 1.4,
        maxWidth: '300px',
      }}>
        {bumpTitle}
      </h2>
      <p style={{
        fontSize: '15px',
        color: '#6B5F5A',
        marginBottom: '2rem',
        lineHeight: 1.6,
        maxWidth: '300px',
      }}>
        Este conteúdo foi adquirido separadamente. Para ter acesso, complete a compra no link abaixo.
      </p>
      <a
        href={hotmartCheckoutUrl}
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
          marginBottom: '1.25rem',
        }}
      >
        Adquirir este conteúdo
      </a>
      <p style={{ fontSize: '12px', color: '#B0A09A', lineHeight: 1.6 }}>
        Já comprou?{' '}
        <a href="mailto:suporte@seudominio.com.br" style={{ color: '#9A7060', textDecoration: 'underline' }}>
          Entre em contato
        </a>
        {' '}para liberar o acesso.
      </p>
    </div>
  )
}
