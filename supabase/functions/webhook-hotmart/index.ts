import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface HotmartPayload {
  event: string
  hottok?: string
  data: {
    buyer: {
      email: string
      name?: string
      phone?: string
      phone_local_code?: string
      phone_number?: string
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

  const hottok = Deno.env.get('HOTMART_HOTTOK')
  if (hottok && body.hottok !== hottok) {
    return json({ error: 'Não autorizado' }, 401)
  }

  const EVENTOS_APROVADOS = ['PURCHASE_APPROVED', 'PURCHASE_COMPLETE']
  if (!EVENTOS_APROVADOS.includes(body.event)) {
    return json({ ok: true, message: 'Evento ignorado' })
  }

  const email = body.data?.buyer?.email?.toLowerCase().trim()
  if (!email) {
    return json({ error: 'E-mail não encontrado no payload' }, 400)
  }

  const buyer = body.data.buyer
  const phone =
    buyer.phone ??
    (buyer.phone_local_code && buyer.phone_number
      ? `+${buyer.phone_local_code}${buyer.phone_number}`
      : '')

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!
  const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

  const supabase = createClient(supabaseUrl, supabaseKey)

  const { error } = await supabase.from('buyers').upsert(
    {
      email,
      full_name: buyer.name ?? '',
      phone,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'email' },
  )

  if (error) {
    console.error('[webhook-hotmart] Erro ao salvar comprador:', error.message)
    return json({ error: 'Erro interno' }, 500)
  }

  console.log(`[webhook-hotmart] Comprador registrado: ${email}`)
  return json({ ok: true })
})

function json(data: object, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}
