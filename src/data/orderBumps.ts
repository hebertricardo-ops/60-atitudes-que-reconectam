export interface OrderBumpStep {
  number: number
  title: string
  subtitle: string
  bullets: string[]
  script?: string
  scriptNote?: string
}

export interface OrderBumpSection {
  type: 'intro' | 'steps' | 'exercise'
  title?: string
  paragraphs?: string[]
  steps?: OrderBumpStep[]
  questions?: string[]
  closing?: string
}

export interface OrderBump {
  slug: string
  title: string
  subtitle: string
  badge: string
  readTime: string
  coverEmoji: string
  sections: OrderBumpSection[]
}

export const orderBumps: OrderBump[] = [
  {
    slug: 'sos-anti-briga',
    title: 'Guia SOS Anti-Briga',
    subtitle: 'O Plano de Emergência se a Conversa Sair do Controle',
    badge: 'Guia de Emergência',
    readTime: '5 min',
    coverEmoji: '🚨',
    sections: [
      {
        type: 'intro',
        title: 'Antes de começar',
        paragraphs: [
          'Você tentou se aproximar. Iniciou uma conversa. Talvez tenha aplicado uma das atitudes do guia principal. E em vez de proximidade, o que veio foi o oposto — o clima esquentou, ele se fechou ou levantou a voz.',
          'Esse momento tem nome: é a resistência natural que aparece quando um padrão começa a mudar. Não significa que o método não funciona. Significa que ele sentiu algo diferente e não soube como responder.',
          'Seu instinto nessas horas vai gritar para você se defender, explicar ou atacar de volta. Não faça isso. Existe um caminho mais inteligente — e ele está neste guia.',
          'Os 3 passos abaixo foram criados para os próximos 24 minutos depois que a conversa sair do controle. Não precisa de coragem. Só precisa de método.',
        ],
      },
      {
        type: 'steps',
        title: 'Os 3 Passos da Saída Segura',
        steps: [
          {
            number: 1,
            title: 'O Silêncio de Ouro',
            subtitle: 'A pausa de 3 segundos',
            bullets: [
              'Assim que ele disser algo que te ofenda ou que eleve o tom da conversa, não responda imediatamente.',
              'Conte mentalmente até 3. Esse silêncio quebra o ritmo da briga — ele espera que você reaja, e quando você não reage, algo muda.',
              'Esses 3 segundos não são fraqueza. São a diferença entre alimentar o conflito e interrompê-lo.',
            ],
          },
          {
            number: 2,
            title: 'O Roteiro de Saída',
            subtitle: 'Sem pedir desculpas pelo que não fez',
            bullets: [
              'Você não vai se explicar. Não vai se justificar. E não vai pedir desculpas por algo que não foi culpa sua.',
              'Em vez disso, vai usar uma frase que encerra o assunto colocando a pausa no "momento" — não nele nem em você.',
              'Memorize esta frase e use ela exatamente assim:',
            ],
            script: 'Eu valorizo muito a gente para continuar essa conversa assim agora. Vamos fazer uma pausa e retomar com calma?',
            scriptNote: 'Esta frase funciona porque faz três coisas ao mesmo tempo: demonstra amor ("valorizo muito a gente"), impõe um limite claro ("continuar assim") e não cria vencedor nem perdedor. Ele não tem como refutar sem parecer que está contra a relação.',
          },
          {
            number: 3,
            title: 'A Retirada Física',
            subtitle: 'Esfriando a cabeça com intenção',
            bullets: [
              'Após dizer a frase do Passo 2, vire-se e saia do ambiente. Não espere a resposta dele.',
              'Beba uma água. Tome um banho. Vá para outro cômodo. O que importa é sair do campo de tensão antes que ele escale.',
              'No dia seguinte, a guarda dele estará naturalmente mais baixa. É nesse momento que o método de reconexão volta a funcionar — e com muito mais eficiência do que se você tivesse tentado forçar a conversa.',
            ],
          },
        ],
      },
      {
        type: 'exercise',
        title: 'Para fixar antes de precisar',
        paragraphs: [
          'Métodos de emergência só funcionam quando você já os praticou antes da emergência acontecer. Reserve 2 minutos agora para internalizar.',
        ],
        questions: [
          'Escreva a frase do Passo 2 com suas próprias palavras — o que ela significa para você?',
          'Pense na última vez que uma conversa escalou. Qual passo teria feito mais diferença?',
          'Qual é o seu sinal pessoal de que a conversa está saindo do controle? Como você vai usá-lo como gatilho para o Passo 1?',
        ],
        closing: 'Você não precisa ganhar a discussão. Você precisa preservar a conexão. Esses são objetivos completamente diferentes — e o segundo vale muito mais.',
      },
    ],
  },
  // Order Bump 2 — conteúdo a ser inserido em prompt futuro
  {
    slug: 'plano-7-dias',
    title: 'Detox de Insegurança: 5 Minutos Diários para Voltar a se Sentir Desejável',
    subtitle: 'Reconecte com sua autoconfiança e presença em poucos minutos por dia',
    badge: 'Plano Guiado',
    readTime: '10 min',
    coverEmoji: '📅',
    sections: [],
  },
  // Order Bump 3 — conteúdo a ser inserido em prompt futuro
  {
    slug: 'kit-mensagens',
    title: 'O Poder do Toque Invisível: 15 Gestos que Acendem o Desejo sem Dizer uma Palavra',
    subtitle: 'Gestos silenciosos que criam proximidade e reacendem o desejo no dia a dia',
    badge: 'Kit Prático',
    readTime: '8 min',
    coverEmoji: '💬',
    sections: [],
  },
]

export function getOrderBump(slug: string): OrderBump | undefined {
  return orderBumps.find((b) => b.slug === slug)
}
