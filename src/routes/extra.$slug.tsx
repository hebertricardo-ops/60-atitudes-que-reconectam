import { createFileRoute, notFound } from '@tanstack/react-router'
import { getOrderBump, type OrderBump, type OrderBumpSection, type OrderBumpStep } from '@/data/orderBumps'
import { OrderBumpGate } from '@/components/app/OrderBumpGate'

const CHECKOUT_URLS: Record<string, string> = {
  'sos-anti-briga': 'https://pay.hotmart.com/D105629618X?checkoutMode=10',
  'plano-7-dias': 'https://pay.hotmart.com/V105630295A?checkoutMode=10',
  'kit-mensagens': 'https://pay.hotmart.com/J105629927M?checkoutMode=10',
}

export const Route = createFileRoute('/extra/$slug')({
  loader: ({ params }) => {
    const bump = getOrderBump(params.slug)
    if (!bump) throw notFound()
    return bump
  },
  component: ExtraPage,
})

function ExtraPage() {
  const bump = Route.useLoaderData()
  const checkoutUrl = CHECKOUT_URLS[bump.slug] ?? 'https://pay.hotmart.com/PLACEHOLDER'

  return (
    <OrderBumpGate bumpSlug={bump.slug} bumpTitle={bump.title} hotmartCheckoutUrl={checkoutUrl}>
      <BumpContent bump={bump} />
    </OrderBumpGate>
  )
}

function BumpContent({ bump }: { bump: OrderBump }) {
  return (
    <article style={{ maxWidth: '640px', margin: '0 auto', padding: '2rem 1.25rem 4rem' }}>
      <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <p style={{ fontSize: '56px', marginBottom: '1rem' }}>{bump.coverEmoji}</p>
        <p style={{
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.24em',
          color: 'var(--primary)',
          marginBottom: '0.5rem',
        }}>
          {bump.badge} · {bump.readTime} de leitura
        </p>
        <h1 style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(1.5rem, 5vw, 2rem)',
          fontWeight: 400,
          lineHeight: 1.25,
          color: '#4A4A4A',
          marginBottom: '0.75rem',
        }}>
          {bump.title}
        </h1>
        <p style={{ fontSize: '15px', color: '#6B5F5A', lineHeight: 1.6, maxWidth: '400px', margin: '0 auto' }}>
          {bump.subtitle}
        </p>
        <hr style={{ margin: '2rem auto', maxWidth: '80px', borderColor: '#e8d8d0' }} />
      </header>

      {bump.sections.map((section, i) => (
        <BumpSection key={i} section={section} />
      ))}
    </article>
  )
}

function BumpSection({ section }: { section: OrderBumpSection }) {
  if (section.type === 'intro') {
    return (
      <section style={{ marginBottom: '2.5rem' }}>
        {section.title && (
          <p style={{
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.22em',
            color: 'var(--primary)',
            marginBottom: '1rem',
          }}>
            {section.title}
          </p>
        )}
        {section.paragraphs?.map((p, i) => (
          <p key={i} style={{ fontSize: '15px', color: '#4A4A4A', lineHeight: 1.8, marginBottom: '1rem' }}>{p}</p>
        ))}
      </section>
    )
  }

  if (section.type === 'steps') {
    return (
      <section style={{ marginBottom: '2.5rem' }}>
        {section.title && (
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.25rem',
            fontWeight: 400,
            color: '#4A4A4A',
            marginBottom: '1rem',
          }}>
            {section.title}
          </h2>
        )}
        {section.paragraphs?.map((p, i) => (
          <p key={i} style={{ fontSize: '14px', color: '#6B5F5A', lineHeight: 1.7, marginBottom: '1.25rem' }}>{p}</p>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {section.steps?.map((step) => (
            <BumpStep key={step.number} step={step} />
          ))}
        </div>
      </section>
    )
  }

  if (section.type === 'exercise') {
    return (
      <section style={{ background: '#FDF5F2', borderRadius: '16px', padding: '1.5rem', marginBottom: '2rem' }}>
        {section.title && (
          <p style={{
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.22em',
            color: 'var(--primary)',
            marginBottom: '1rem',
          }}>
            {section.title}
          </p>
        )}
        {section.paragraphs?.map((p, i) => (
          <p key={i} style={{ fontSize: '14px', color: '#6B5F5A', lineHeight: 1.7, marginBottom: '1rem' }}>{p}</p>
        ))}
        {section.questions && (
          <ol style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {section.questions.map((q, i) => (
              <li key={i} style={{ fontSize: '14px', color: '#4A4A4A', lineHeight: 1.7 }}>{q}</li>
            ))}
          </ol>
        )}
        {section.closing && (
          <p style={{
            marginTop: '1.25rem',
            fontSize: '14px',
            fontStyle: 'italic',
            color: '#6B5F5A',
            lineHeight: 1.7,
            borderTop: '1px solid #e8d8d0',
            paddingTop: '1rem',
            marginBottom: 0,
          }}>
            {section.closing}
          </p>
        )}
      </section>
    )
  }

  return null
}

function BumpStep({ step }: { step: OrderBumpStep }) {
  return (
    <div style={{ borderLeft: '3px solid #B8846F', paddingLeft: '1.25rem' }}>
      <p style={{
        fontSize: '11px',
        textTransform: 'uppercase',
        letterSpacing: '0.22em',
        color: '#B8846F',
        marginBottom: '0.25rem',
      }}>
        Passo {step.number}
      </p>
      <h3 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '1.1rem',
        fontWeight: 400,
        color: '#4A4A4A',
        marginBottom: '0.125rem',
      }}>
        {step.title}
      </h3>
      {step.subtitle && (
        <p style={{ fontSize: '13px', color: '#9A7060', marginBottom: '0.75rem', fontStyle: 'italic' }}>
          {step.subtitle}
        </p>
      )}
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {step.bullets.map((b, i) => (
          <li key={i} style={{ fontSize: '14px', color: '#4A4A4A', lineHeight: 1.7 }}>{b}</li>
        ))}
      </ul>
      {step.script && (
        <blockquote style={{
          margin: '1rem 0 0',
          padding: '0.75rem 1rem',
          background: '#fff',
          borderRadius: '10px',
          border: '1px solid #e8d8d0',
        }}>
          <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#4A4A4A', lineHeight: 1.7, margin: 0 }}>
            "{step.script}"
          </p>
          {step.scriptNote && (
            <p style={{ fontSize: '12px', color: '#9A7060', lineHeight: 1.6, marginTop: '0.5rem', marginBottom: 0 }}>
              {step.scriptNote}
            </p>
          )}
        </blockquote>
      )}
    </div>
  )
}
