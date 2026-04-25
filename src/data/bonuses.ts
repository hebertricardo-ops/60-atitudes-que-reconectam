export type SubstitutionRow = { wrong: string; right: string };

export type ScriptBox = { label: string; text: string };

export type ChecklistStep = { title: string; description?: string };

export type MessageCategory = { name: string; description?: string; messages: string[] };

export type BonusFeature =
  | { type: "interactive_table"; label: string; intro?: string; rows: SubstitutionRow[] }
  | { type: "script_box"; label: string; intro?: string; scripts: ScriptBox[] }
  | { type: "stepper_checklist"; label: string; intro?: string; steps: ChecklistStep[] }
  | { type: "tabs_messages"; label: string; intro?: string; categories: MessageCategory[] };

export type Bonus = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  intro: string;
  readingMin: number;
  features: BonusFeature[];
};

export const bonuses: Bonus[] = [
  {
    slug: "paz-armada",
    number: "01",
    title: "Guia Paz Armada",
    subtitle: "Como falar sem gerar defesa",
    intro:
      "Pequenas mudanças nas palavras que usamos transformam a forma como o outro escuta. Aqui você aprende a substituir frases que afastam por frases que abrem espaço para o diálogo.",
    readingMin: 6,
    features: [
      {
        type: "interactive_table",
        label: "Técnica da Substituição",
        intro:
          "Veja como reformular frases que costumam soar como acusação. A coluna da esquerda fecha a conversa. A da direita convida à conexão.",
        rows: [
          {
            wrong: "Você nunca me dá atenção",
            right: "Eu sinto falta de quando conversávamos mais à noite",
          },
          {
            wrong: "Você só fica nesse celular",
            right: "Eu adoro quando temos momentos só nossos, sem distrações",
          },
          {
            wrong: "Você não se importa com o que eu sinto",
            right: "Quando isso acontece, eu me sinto sozinha. Você consegue me escutar agora?",
          },
          {
            wrong: "Você sempre faz isso",
            right: "Hoje isso me machucou. Eu queria entender o que aconteceu",
          },
          {
            wrong: "Você nunca ajuda em nada aqui",
            right: "Eu tenho me sentido sobrecarregada. Será que podemos dividir melhor algumas coisas?",
          },
        ],
      },
      {
        type: "script_box",
        label: "Scripts prontos para conversas difíceis",
        intro: "Use estes scripts como ponto de partida. Adapte ao seu jeito de falar.",
        scripts: [
          {
            label: "Para abordar a distância emocional",
            text:
              "Ultimamente tenho sentido que a gente anda meio distante… e eu sinto saudade da nossa conexão. O que você acha disso?",
          },
          {
            label: "Para pedir mais presença",
            text:
              "Eu queria muito ter um momento só nosso hoje, sem pressa, sem celular. Topa a gente parar uns minutos depois do jantar?",
          },
          {
            label: "Para retomar uma conversa que esfriou",
            text:
              "Acho que a gente não terminou bem aquela conversa do outro dia. Posso falar com você sobre isso quando você puder me escutar com calma?",
          },
        ],
      },
    ],
  },
  {
    slug: "conversa-segura",
    number: "02",
    title: "Mapa da Conversa Segura",
    subtitle: "Checklist de 15 minutos",
    intro:
      "Antes de iniciar uma conversa importante, passe por este checklist rápido. Ele evita que pequenos detalhes transformem um diálogo em discussão.",
    readingMin: 5,
    features: [
      {
        type: "stepper_checklist",
        label: "Checklist em 4 passos",
        intro:
          "Marque cada item antes de começar a conversa. Demora menos de 15 minutos e muda totalmente o resultado.",
        steps: [
          {
            title: "Check de ambiente",
            description:
              "TV desligada, celular longe, sem crianças por perto. Um espaço sem ruído ajuda os dois a se ouvirem de verdade.",
          },
          {
            title: "O timing",
            description:
              "Ele está relaxado? Você está calma? Evite começar conversas importantes quando algum dos dois está cansado, com fome ou irritado.",
          },
          {
            title: "Palavras proibidas",
            description:
              "Elimine 'sempre' e 'nunca' da frase. Substitua por 'às vezes', 'hoje' ou 'nessa situação'. Isso tira o tom de acusação.",
          },
          {
            title: "Script de saída",
            description:
              "Combine antes: se a conversa esquentar, qualquer um dos dois pode dizer 'vamos pausar e voltar daqui a pouco'. Isso protege o diálogo.",
          },
        ],
      },
    ],
  },
  {
    slug: "conexao-no-bolso",
    number: "03",
    title: "Conexão no Bolso",
    subtitle: "50 mensagens prontas para enviar hoje",
    intro:
      "Mensagens curtas durante o dia mantêm a temperatura emocional do relacionamento. Escolha pela intensidade e envie agora — copiar e colar.",
    readingMin: 4,
    features: [
      {
        type: "tabs_messages",
        label: "Mensagens por intensidade",
        intro: "Toque em qualquer mensagem para copiar.",
        categories: [
          {
            name: "Carinho leve",
            description: "Para o dia a dia, sem pressão.",
            messages: [
              "Pensei em você agora e quis te mandar uma mensagem.",
              "Gosto muito da vida que estamos construindo juntos.",
              "Espero que seu dia esteja sendo mais leve do que ontem.",
              "Só queria te lembrar que você é importante pra mim.",
              "Bom te ter por perto, mesmo quando a rotina aperta.",
              "Tô torcendo por você hoje, em tudo.",
              "Obrigada por ser você. Sem grandes motivos, só por ser.",
              "Tava aqui pensando: a gente forma um bom time.",
              "Te admiro mais do que costumo dizer.",
              "Hoje quis começar o seu dia com uma mensagem boa.",
            ],
          },
          {
            name: "Nostalgia",
            description: "Lembranças que reativam a conexão.",
            messages: [
              "Lembrei daquele nosso passeio e fiquei com vontade de repetir.",
              "Hoje lembrei de quando nos conhecemos, foi tão especial.",
              "Lembrei de uma risada nossa antiga e sorri sozinha.",
              "Senti vontade de viver de novo aquele nosso fim de semana.",
              "Tava ouvindo uma música que me lembrou de você.",
              "Lembrei da primeira vez que a gente viajou juntos.",
              "Aquele lugar que a gente foi… deveríamos voltar.",
              "Hoje passei perto de onde a gente costumava se encontrar.",
              "Tô com saudade de coisas pequenas nossas que ninguém mais entende.",
              "Lembrei de quando a gente conversava até tarde sem ver a hora.",
            ],
          },
          {
            name: "Desejo sutil",
            description: "Para acender pequenas brasas, sem soar forçado.",
            messages: [
              "Hoje me deu vontade de ficar bem pertinho de você.",
              "Você ainda tem um jeito de me fazer sentir algo especial.",
              "Tô contando as horas pra te ver mais tarde.",
              "Tem coisas em você que eu nunca canso de olhar.",
              "Só de pensar em te abraçar mais tarde já melhorou meu dia.",
              "Você cheira tão bem que ainda sinto de longe.",
              "Tô com vontade de um beijo demorado seu.",
              "Sabe quando bate uma saudade boa? É isso agora.",
              "Você mexe comigo de um jeito que ninguém mexe.",
              "Vem cá hoje, quero ficar quietinha do seu lado.",
            ],
          },
        ],
      },
    ],
  },
];
