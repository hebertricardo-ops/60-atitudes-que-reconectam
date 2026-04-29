# Deploy na Hostinger — Guia

## Configuração no hPanel

1. Acessar hPanel → Hosting → Websites → Add website
2. Escolher **Node.js** como tipo de aplicação
3. Conectar o repositório GitHub do projeto
4. Configurar:
   - **Build command:** `npm run build`
   - **Start command:** `npm run start` (ou `node server-node.mjs`)
   - **Node.js version:** 20.x ou superior

## Variáveis de ambiente

Adicionar no painel da Hostinger (hPanel → Node.js → Environment Variables):

| Variável | Valor |
|---|---|
| VITE_SUPABASE_URL | https://xxxx.supabase.co |
| VITE_SUPABASE_ANON_KEY | eyJ... (anon key do Supabase) |

> A variável `PORT` é definida automaticamente pela Hostinger — não precisa configurar.

## Deploy automático

Após conectar o GitHub, cada push na branch `main` faz redeploy automático.

## Output do build

O build gera os arquivos em `dist/`:
- `dist/server/server.js` — handler SSR (Fetch API)
- `dist/client/` — assets estáticos (JS, CSS, imagens)

O servidor Node.js (`server-node.mjs`) serve os estáticos diretamente e passa as demais requisições para o handler SSR.

## Domínio customizado

Para apontar o domínio da Hostinger para a aplicação:
hPanel → Domains → apontar para a aplicação Node.js criada
