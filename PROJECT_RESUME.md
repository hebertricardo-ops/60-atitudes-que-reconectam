# 📘 Reconectar — Resumo do Projeto

> **Produto:** *60 Atitudes Simples Que Reconectam um Casal em 30 Minutos*
> Aplicação web mobile-first, voltada a mulheres de 30-50 anos, com conteúdo acolhedor sobre reconexão conjugal.

---

## 1. Visão geral

App de conteúdo estruturado em **módulos**, **aulas** e **bônus interativos**, com progresso salvo localmente, exportação em PDF por módulo e identidade visual minimalista (paleta pastel: rosa seco, areia, sálvia).

- **Preview:** https://id-preview--e9588363-3b3e-4a47-aea5-b6b260bb3b30.lovable.app
- **Publicado:** https://atitudes-que-reconectam.lovable.app

---

## 2. Stack técnica

| Camada | Tecnologia |
|---|---|
| Framework | TanStack Start v1 (React 19, SSR/Edge) |
| Build | Vite 7 |
| Estilo | Tailwind CSS v4 + design tokens em `src/styles.css` (oklch) |
| UI | shadcn/ui (Radix) + lucide-react |
| Roteamento | File-based routing (`src/routes/`) |
| Persistência local | `useProgress` (localStorage) |
| PDF | `jspdf` (geração 100% client-side) |
| Deploy | Cloudflare Workers |

> **Lovable Cloud:** desabilitado — projeto totalmente frontend, sem backend/DB.

---

## 3. Design System

- **Paleta:** `#FDF5F2` (fundo sereno), `#E8D5CC` (rosa seco), `#4A4A4A` (texto), tons sálvia/areia/clay como acentos
- **Tipografia:** display serifada (estilo Fraunces) + corpo sans elegante, mínimo 16px
- **Tom:** minimalista, acolhedor, espaçoso
- **Tokens semânticos** definidos em `src/styles.css` (`--primary`, `--blush`, `--sage`, `--sand`, `--clay`, etc.)

---

## 4. Estrutura de rotas

```
src/routes/
├── __root.tsx                              # Layout raiz + footer
├── index.tsx                               # Home — lista de módulos + acesso a bônus
├── modulo.$slug.tsx                        # Página de cada módulo (com export PDF)
├── modulo_.$slug.aula.$lessonId.tsx        # Aula individual de um módulo
├── modulo_.$slug.bloco.$blockId.tsx        # Bloco de hábitos
├── bonus.tsx                               # Hub dos 3 bônus
└── bonus_.$slug.tsx                        # Detalhe interativo de cada bônus
```

---

## 5. Conteúdo principal — Módulos

Definidos em `src/data/modules.ts`. Cada módulo contém: título, subtítulo, tempo de leitura, introdução, seções, hábitos (categorizados) e exercício prático.

- **Módulo 0 — Introdução**
- **Módulo 1**
- **Módulo 2**
- **Módulo 3** (com lista de hábitos marcáveis)
- **Módulo 4**
- **Módulo 5**

### Funcionalidades por módulo
- Marcar como lido (estado salvo via `useProgress`)
- Hábitos checáveis (módulo 3)
- **Exportar módulo em PDF** (`src/lib/exportModulePdf.ts`)
  - Inclui cabeçalho, seções, hábitos com ✓, exercício prático e numeração de página
  - Conteúdo das aulas incorporado
  - Arquivo: `reconectar-modulo-{n}-{slug}.pdf`

---

## 6. Bônus interativos

Definidos em `src/data/bonuses.ts`. Hub em `/bonus`, detalhe em `/bonus/{slug}`.

| # | Bônus | Tipo de interação |
|---|---|---|
| 01 | Substituições de fala | `interactive_table` — pares "Evite / Prefira" |
| 02 | Scripts prontos | `script_box` — cards com botão **Copiar** |
| 02 | Checklist guiado | `stepper_checklist` — barra de progresso + steps |
| 03 | Mensagens por categoria | `tabs_messages` — abas (Carinho, Nostalgia, Desejo) com cards copiáveis |

### Ajustes UX já aplicados
- Bônus 03: navegação de categorias em **grid 3 colunas** (sem rolagem horizontal mobile)
- **Removido** link de suporte WhatsApp do hub `/bonus`
- Footer global com padding lateral 20px

---

## 7. Componentes-chave

```
src/components/app/
├── TopBar.tsx           # Cabeçalho com navegação (Início / Bônus)
├── ModuleCard.tsx       # Card de módulo na home
└── ProgressRing.tsx     # Anel de progresso visual
```

---

## 8. Estado e persistência

- **`src/hooks/useProgress.tsx`** — hook que persiste em `localStorage`:
  - módulos lidos
  - hábitos concluídos por módulo
- Sem autenticação, sem banco — dados ficam no dispositivo da usuária.

---

## 9. SEO e metadados

- Cada rota possui `head()` com `title`, `description`, `og:title`, `og:description` próprios.
- Sem `og:image` global em `__root.tsx` (segue convenção TanStack: imagem só no leaf-route quando houver).

---

## 10. Edições visuais recentes

- Título principal atualizado para **"60 Atitudes Simples Que Reconectam um Casal em 30 Minutos"**
- Tamanho do título de card ajustado de `text-xl` para `text-lg`
- Footer global com `pl-[20px] pr-[20px]`
- Bônus 03 reorganizado em grid responsivo

---

## 11. Arquivos PDF gerados (raiz do projeto)

- `reconectar-modulo-00-introducao.pdf`
- `reconectar-modulo-01-modulo-1.pdf`
- `reconectar-modulo-02-modulo-2.pdf`
- `reconectar-modulo-03-modulo-3.pdf`
- `reconectar-modulo-04-modulo-4.pdf`
- `reconectar-modulo-05-modulo-5.pdf`

---

## 12. Próximos passos sugeridos

- [ ] Adicionar imagens de capa por módulo (e usar como `og:image`)
- [ ] Upsell "Plano de 7 Dias" (banner final dos bônus)
- [ ] Modo offline / PWA
- [ ] Compartilhar progresso (export JSON / QR)
- [ ] Tema escuro opcional

---

*Documento gerado automaticamente — snapshot do estado atual do projeto.*
