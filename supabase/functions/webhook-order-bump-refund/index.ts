import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface HotmartPayload {
  event: string
  version: string
  data: {
    product: {
      id: string | number
      name?: string
    }
    buyer: {
      email: string
      name?: string
    }
    purchase: {
      status: string
      transaction?: string
    }
  }
}

const EVENTOS_REEMBOLSO = [
  'PURCHASE_REFUNDED',
  'PURCHASE_CHARGEBACK',
  'PURCHASE_CANCELED',
  'PURCHASE_EXPIRED',
]

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return json({ error: 'Método não permitido' }, 405)
  }

  let body: HotmartPayload
  try {
    body = await req.json()
  } catch {
    return json({ error: 'Payload inválido' }, 400)
  }

  // Validar hottok via query param
  const url = new URL(req.url)
  const hottok = Deno.env.get('HOTMART_HOTTOK')
  if (hottok && url.searchParams.get('hottok') !== hottok) {
    return json({ error: 'Não autorizado' }, 401)
  }

  if (!EVENTOS_REEMBOLSO.includes(body.event)) {
    return json({ ok: true, message: 'Evento ignorado', event: body.event })
  }

  const email = body.data?.buyer?.email?.toLowerCase().trim()
  if (!email) {
    return json({ error: 'E-mail não encontrado no payload' }, 400)
  }

  // Mapeamento construído a cada chamada para garantir leitura fresca dos secrets
  const ob1 = Deno.env.get('HOTMART_PRODUCT_ID_OB1') ?? ''
  const ob2 = Deno.env.get('HOTMART_PRODUCT_ID_OB2') ?? ''
  const ob3 = Deno.env.get('HOTMART_PRODUCT_ID_OB3') ?? ''
  const PRODUCT_SLUG_MAP: Record<string, string> = {}
  if (ob1) PRODUCT_SLUG_MAP[ob1] = 'sos-anti-briga'
  if (ob2) PRODUCT_SLUG_MAP[ob2] = 'plano-7-dias'
  if (ob3) PRODUCT_SLUG_MAP[ob3] = 'kit-mensagens'

  const productId = String(body.data?.product?.id ?? '')
  const bumpSlug = PRODUCT_SLUG_MAP[productId]

  if (!bumpSlug) {
    console.warn(`[webhook-order-bump-refund] Produto não mapeado: "${productId}"`)
    return json({
      ok: true,
      message: 'Produto não reconhecido como order bump',
      debug: {
        received_event: body.event,
        received_product_id: productId,
        configured_ids: [ob1, ob2, ob3].filter(Boolean),
      },
    })
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!
  const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  const supabase = createClient(supabaseUrl, supabaseKey)

  const { data: existing, error: fetchError } = await supabase
    .from('buyers')
    .select('email, purchased_extras')
    .eq('email', email)
    .maybeSingle()

  if (fetchError) {
    console.error('[webhook-order-bump-refund] Erro ao consultar comprador:', fetchError.message)
    return json({ error: 'Erro interno' }, 500)
  }

  if (!existing) {
    console.warn(`[webhook-order-bump-refund] Comprador não encontrado: ${email}`)
    return json({ ok: true, message: 'Comprador não encontrado' })
  }

  const updatedExtras = (existing.purchased_extras ?? []).filter(
    (slug: string) => slug !== bumpSlug,
  )

  const { error: updateError } = await supabase
    .from('buyers')
    .update({
      purchased_extras: updatedExtras,
      updated_at: new Date().toISOString(),
    })
    .eq('email', email)

  if (updateError) {
    console.error('[webhook-order-bump-refund] Erro ao remover acesso:', updateError.message)
    return json({ error: 'Erro interno' }, 500)
  }

  console.log(`[webhook-order-bump-refund] Acesso removido: ${email} → ${bumpSlug}`)
  return json({ ok: true, removed: bumpSlug, email })
})

function json(data: object, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}
