import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Mapeamento: ID do produto na Hotmart → slug do order bump no app
const PRODUCT_SLUG_MAP: Record<string, string> = {
  [Deno.env.get('HOTMART_PRODUCT_ID_OB1') ?? 'OB1_ID_PLACEHOLDER']: 'sos-anti-briga',
  [Deno.env.get('HOTMART_PRODUCT_ID_OB2') ?? 'OB2_ID_PLACEHOLDER']: 'plano-7-dias',
  [Deno.env.get('HOTMART_PRODUCT_ID_OB3') ?? 'OB3_ID_PLACEHOLDER']: 'kit-mensagens',
}

interface HotmartPayload {
  event: string
  hottok?: string
  data: {
    buyer: {
      email: string
      name?: string
    }
    product: {
      id: string | number
      name?: string
    }
    purchase: {
      status: string
    }
  }
}

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

  // Só processar compras aprovadas
  const EVENTOS_APROVADOS = ['PURCHASE_APPROVED', 'PURCHASE_COMPLETE']
  if (!EVENTOS_APROVADOS.includes(body.event)) {
    return json({ ok: true, message: 'Evento ignorado' })
  }

  const email = body.data?.buyer?.email?.toLowerCase().trim()
  if (!email) {
    return json({ error: 'E-mail não encontrado no payload' }, 400)
  }

  // Identificar o bump pelo ID do produto
  const productId = String(body.data?.product?.id ?? '')
  const bumpSlug = PRODUCT_SLUG_MAP[productId]

  if (!bumpSlug) {
    console.warn(`[webhook-order-bump] Produto não mapeado: ${productId}`)
    return json({ ok: true, message: 'Produto não reconhecido como order bump' })
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!
  const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  const supabase = createClient(supabaseUrl, supabaseKey)

  const { data: existing } = await supabase
    .from('buyers')
    .select('email, full_name, purchased_extras')
    .eq('email', email)
    .maybeSingle()

  const currentExtras: string[] = existing?.purchased_extras ?? []
  const updatedExtras = Array.from(new Set([...currentExtras, bumpSlug]))

  const { error } = await supabase
    .from('buyers')
    .upsert(
      {
        email,
        full_name: body.data.buyer.name ?? existing?.full_name ?? '',
        purchased_extras: updatedExtras,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'email' },
    )

  if (error) {
    console.error('[webhook-order-bump] Erro ao salvar comprador:', error.message)
    return json({ error: 'Erro interno' }, 500)
  }

  console.log(`[webhook-order-bump] Acesso liberado: ${email} → ${bumpSlug}`)
  return json({ ok: true, bump: bumpSlug })
})

function json(data: object, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}
