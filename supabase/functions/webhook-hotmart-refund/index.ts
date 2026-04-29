import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface HotmartRefundPayload {
  event: string
  data: {
    buyer: {
      email: string
    }
    purchase: {
      status: string
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

  // hottok vem como query param na URL configurada na Hotmart
  const url = new URL(req.url)
  const hottok = Deno.env.get('HOTMART_HOTTOK')
  if (hottok && url.searchParams.get('hottok') !== hottok) {
    return json({ error: 'Não autorizado' }, 401)
  }

  let body: HotmartRefundPayload
  try {
    body = await req.json()
  } catch {
    return json({ error: 'Payload inválido' }, 400)
  }

  if (!EVENTOS_REEMBOLSO.includes(body.event)) {
    return json({ ok: true, message: 'Evento ignorado' })
  }

  const email = body.data?.buyer?.email?.toLowerCase().trim()
  if (!email) {
    return json({ error: 'E-mail não encontrado no payload' }, 400)
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!
  const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

  const supabase = createClient(supabaseUrl, supabaseKey)

  const { error } = await supabase.from('buyers').delete().eq('email', email)

  if (error) {
    console.error('[webhook-hotmart-refund] Erro ao remover comprador:', error.message)
    return json({ error: 'Erro interno' }, 500)
  }

  console.log(`[webhook-hotmart-refund] Acesso removido: ${email} (evento: ${body.event})`)
  return json({ ok: true })
})

function json(data: object, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}
