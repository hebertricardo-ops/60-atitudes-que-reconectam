import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return json({ error: 'Método não permitido' }, 405)
  }

  let body: { email?: string }
  try {
    body = await req.json()
  } catch {
    return json({ error: 'Payload inválido' }, 400)
  }

  const email = body.email?.toLowerCase().trim()
  if (!email || !email.includes('@')) {
    return json({ error: 'E-mail inválido' }, 400)
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!
  const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

  const supabase = createClient(supabaseUrl, supabaseKey)

  const { data, error } = await supabase
    .from('buyers')
    .select('email')
    .eq('email', email)
    .maybeSingle()

  if (error) {
    console.error('[verify-email] Erro ao consultar Supabase:', error.message)
    return json({ error: 'Erro interno' }, 500)
  }

  return json({ valid: data !== null })
})

function json(data: object, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  })
}
