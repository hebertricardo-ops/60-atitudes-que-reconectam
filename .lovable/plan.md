# Exportar Módulo em PDF

Adicionar um botão em cada página de módulo que permite à usuária baixar o conteúdo completo daquele módulo em um PDF formatado (acolhedor, legível, com a identidade visual do app).

## O que será adicionado

1. **Botão "Baixar este módulo em PDF"**
  - Localização: na página de cada módulo (`/modulo/$slug`), logo acima do botão "Marcar como lido".
  - Estilo discreto, em harmonia com o design pastel atual (botão outline com ícone de download).
  - Estado de loading enquanto o PDF é gerado ("Gerando PDF...").
2. **Geração do PDF (client-side)**
  - Biblioteca: `jspdf` (leve, roda 100% no navegador, sem servidor).
  - Conteúdo incluído por módulo:
    - Cabeçalho: "Reconectar" + número do módulo + tempo de leitura
    - Título e subtítulo (em fonte serifada similar à Fraunces)
    - Texto de introdução
    - Todas as seções (título + parágrafos)
    - Lista de hábitos agrupados por categoria (módulo 3) — com indicação ✓ para os marcados como concluídos
    - Bloco de exercício prático (título, parágrafos e perguntas)
    - Rodapé com numeração de página
  - Paleta de cores aplicada ao PDF (terracota / sage) para manter identidade.
  - Margens generosas, tipografia legível (~12pt corpo, ~22pt títulos), quebras de página automáticas.
  - Nome do arquivo: `reconectar-modulo-{numero}-{slug}.pdf`.

## Arquivos

- **Novo:** `src/lib/exportModulePdf.ts` — função `exportModuleToPdf(module, completedHabits)` que monta e dispara o download.
- **Editado:** `src/routes/modulo.$slug.tsx` — adiciona o botão e chama a função, passando o módulo atual e o estado de hábitos concluídos.
- **Dependência nova:** `jspdf`.

## Notas técnicas

- Geração 100% no cliente — sem chamadas de servidor, sem custo.
- Imagens dos módulos **não** serão embutidas no PDF para manter o arquivo leve e o foco no texto (pode ser adicionado depois se desejado).
- Acentuação portuguesa funciona nativamente nas fontes padrão do jsPDF (Helvetica/Times).