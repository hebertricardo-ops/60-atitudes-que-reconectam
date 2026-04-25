import intro from "@/assets/intro.jpg";
import m1 from "@/assets/modulo1.jpg";
import m2 from "@/assets/modulo2.jpg";
import m3 from "@/assets/modulo3.jpg";
import m4 from "@/assets/modulo4.jpg";
import m5 from "@/assets/modulo5.jpg";

export type Section = { title?: string; paragraphs: string[] };

export type Habit = { id: string; title: string; desc: string; note?: string };

export type Lesson = {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  readingMin?: number;
  sections: Section[];
};

export type HabitBlock = {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  intro?: string;
  habitIds: string[];
};

export type Module = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  image: string;
  readingMin: number;
  intro: string;
  sections: Section[];
  habits?: Habit[];
  habitBlocks?: HabitBlock[];
  lessons?: Lesson[];
  exercise?: { title: string; paragraphs: string[]; questions: string[] };
  finalReflection?: { title: string; paragraphs: string[] };
};

export const modules: Module[] = [
  {
    slug: "introducao",
    number: "00",
    title: "Antes de começarmos",
    subtitle: "Um novo olhar sobre o seu relacionamento",
    image: intro,
    readingMin: 4,
    intro:
      "Se você começou a ler este material, provavelmente existe um sentimento dentro de você que tem sido difícil ignorar.",
    sections: [
      {
        title: "O objetivo deste material",
        paragraphs: [
          "Este não é um livro cheio de teorias complicadas sobre relacionamento.",
          "A proposta aqui é simples e prática.",
          "Este guia foi criado para ajudar você a:",
          "• entender melhor por que alguns relacionamentos começam a esfriar",
          "• aprender formas mais saudáveis de se comunicar com seu parceiro",
          "• criar pequenos momentos de reconexão no dia a dia",
          "• trazer de volta mais carinho, proximidade e diálogo para a relação",
          "Porque, na maioria das vezes, a reconexão não acontece com grandes mudanças.",
          "Ela começa com pequenas atitudes conscientes.",
        ],
      },
      {
        title: "Uma verdade importante sobre relacionamentos",
        paragraphs: [
          "Relacionamentos de longo prazo passam por fases.",
          "Com o tempo, responsabilidades, rotina e preocupações do dia a dia podem ocupar o espaço que antes era preenchido por conexão emocional.",
          "Isso não significa que o amor acabou.",
          "Muitas vezes significa apenas que a conexão deixou de ser alimentada com a mesma atenção de antes.",
          "E quando pequenas atitudes começam a mudar, a proximidade também pode voltar a crescer.",
        ],
      },
      {
        title: "O que você vai encontrar aqui",
        paragraphs: [
          "Ao longo deste guia, você vai descobrir:",
          "✔ Como entender melhor os sinais de distância emocional no relacionamento",
          "✔ Como iniciar conversas importantes sem gerar discussões",
          "✔ Pequenas atitudes que ajudam a aproximar o casal novamente",
          "✔ Perguntas e diálogos que fortalecem a conexão",
          "✔ Maneiras naturais de trazer mais carinho e proximidade para a relação",
          "São atitudes simples que podem ser aplicadas no dia a dia e que ajudam a reconstruir a conexão entre o casal.",
        ],
      },
      {
        title: "Um convite antes de continuar",
        paragraphs: [
          "Antes de seguir para os próximos módulos, faça um pequeno compromisso com você mesma.",
          "Leia este material com abertura e curiosidade.",
          "Não procurando culpados, mas buscando novas formas de criar conexão dentro da relação.",
          "Relacionamentos não se fortalecem apenas com grandes gestos.",
          "Eles se fortalecem com pequenas atitudes repetidas ao longo do tempo.",
          "Agora vamos começar.",
          "No próximo módulo, você vai entender por que muitos relacionamentos não acabam… mas acabam esfriando com o tempo — e como perceber os sinais dessa distância emocional.",
        ],
      },
    ],
  },
  {
    slug: "modulo-1",
    number: "01",
    title: "Entendendo a distância",
    subtitle: "Sem se culpar",
    image: m1,
    readingMin: 8,
    intro:
      "Se você chegou até aqui, é muito provável que exista um sentimento silencioso dentro de você. Não é exatamente falta de amor. Não é necessariamente uma crise enorme. Mas existe uma sensação difícil de explicar.",
    sections: [
      {
        paragraphs: [
          "Talvez você olhe para o seu relacionamento e pense: “A gente ainda está junto… mas algo mudou.”",
          "Às vezes vocês dividem a mesma casa, a mesma rotina, a mesma cama… mas a conexão emocional que existia no começo parece ter diminuído.",
          "E quando isso acontece, muitas mulheres começam a se questionar: “Será que ele ainda me deseja?”, “Será que eu estou exagerando?”, “Será que o problema sou eu?”",
          "A verdade é que essa sensação é muito mais comum do que parece. Relacionamentos não costumam esfriar de forma repentina. Na maioria das vezes, a distância surge de maneira silenciosa e gradual.",
        ],
      },
      {
        title: "Neste módulo você vai entender",
        paragraphs: [
          "• por que muitos relacionamentos entram no “modo automático”",
          "• quais são os sinais silenciosos de desconexão",
          "• por que tantas mulheres guardam seus sentimentos",
          "• e por que algumas conversas acabam afastando ainda mais o casal",
          "O objetivo aqui não é apontar culpados. É ajudar você a compreender o que está acontecendo — porque quando entendemos a dinâmica da relação, fica muito mais fácil reconstruir a conexão.",
        ],
      },
    ],
    lessons: [
      {
        id: "aula-1",
        number: "Aula 1",
        title: "Quando o relacionamento não acaba, mas esfria",
        readingMin: 4,
        sections: [
          {
            paragraphs: [
              "Muitas pessoas imaginam que relacionamentos terminam apenas quando existe uma grande briga, traição ou conflito grave.",
              "Mas na realidade, muitos relacionamentos passam por algo muito mais sutil. Eles não acabam… eles apenas esfriam.",
              "Isso acontece quando a rotina começa a ocupar o espaço que antes era preenchido por conexão emocional.",
            ],
          },
          {
            title: "No início, tudo parece intenso",
            paragraphs: [
              "As conversas são longas. Os olhares são mais atentos. Existe curiosidade sobre o outro. O toque acontece com naturalidade.",
              "Com o passar do tempo, porém, a vida começa a trazer outras prioridades:",
              "• trabalho",
              "• contas",
              "• responsabilidades",
              "• filhos",
              "• preocupações do dia a dia",
              "E, quase sem perceber, o casal entra em um modo automático de convivência.",
            ],
          },
          {
            title: "O que começa a diminuir",
            paragraphs: [
              "Vocês continuam juntos, mas algumas coisas começam a diminuir:",
              "• as conversas profundas",
              "• os elogios",
              "• os momentos de carinho",
              "• o interesse em saber como o outro está se sentindo",
              "A relação continua existindo, mas a conexão emocional vai ficando mais fraca.",
              "É nesse momento que muitas mulheres começam a sentir algo difícil de explicar. Uma sensação de que o relacionamento ainda existe… mas já não tem a mesma energia de antes.",
              "E isso não significa que o amor acabou. Na maioria das vezes, significa apenas que a conexão precisa ser alimentada novamente.",
            ],
          },
        ],
      },
      {
        id: "aula-2",
        number: "Aula 2",
        title: "7 sinais silenciosos de desconexão",
        readingMin: 5,
        sections: [
          {
            paragraphs: [
              "A distância emocional raramente aparece de forma evidente. Ela costuma surgir através de pequenos comportamentos do dia a dia. Coisas que parecem simples, mas que ao longo do tempo vão criando uma sensação de afastamento.",
            ],
          },
          {
            title: "1. Conversas cada vez mais curtas",
            paragraphs: [
              "As conversas que antes duravam horas passam a ser rápidas e superficiais. Muitas vezes limitadas a assuntos práticos como tarefas da casa, compromissos, contas e rotina.",
            ],
          },
          {
            title: "2. Falta de elogios ou admiração",
            paragraphs: [
              "No começo do relacionamento é comum que exista mais reconhecimento. Com o tempo, os elogios podem diminuir e a admiração deixa de ser verbalizada.",
            ],
          },
          {
            title: "3. Diminuição do toque espontâneo",
            paragraphs: [
              "Pequenos gestos como abraçar, segurar a mão e encostar no outro passam a acontecer com menos frequência.",
            ],
          },
          {
            title: "4. O celular sempre presente",
            paragraphs: [
              "Momentos que poderiam ser de conexão acabam sendo preenchidos por telas. Às vezes o casal está no mesmo ambiente, mas cada um está em seu próprio mundo.",
            ],
          },
          {
            title: "5. Falta de interesse sobre o dia do outro",
            paragraphs: [
              "Perguntas simples como “Como foi seu dia?” podem deixar de existir. E quando deixam de existir, o casal começa a compartilhar menos sobre a própria vida.",
            ],
          },
          {
            title: "6. Intimidade cada vez mais rara",
            paragraphs: [
              "A intimidade física muitas vezes diminui quando a conexão emocional enfraquece. E quando isso acontece, muitas mulheres começam a se questionar sobre o próprio desejo do parceiro.",
            ],
          },
          {
            title: "7. Sensação de solidão mesmo estando acompanhada",
            paragraphs: [
              "Esse talvez seja um dos sinais mais dolorosos. Estar dentro de um relacionamento… e ainda assim sentir que algo importante está faltando.",
              "Essa sensação costuma ser o primeiro sinal de que a conexão emocional precisa ser reconstruída.",
            ],
          },
        ],
      },
      {
        id: "aula-3",
        number: "Aula 3",
        title: "Por que muitas mulheres guardam tudo para si",
        readingMin: 4,
        sections: [
          {
            paragraphs: [
              "Mesmo percebendo esses sinais, muitas mulheres escolhem ficar em silêncio. Não porque não se importam. Mas porque têm medo das consequências de abrir a conversa.",
              "Pensamentos como estes costumam aparecer:",
              "• “Não quero começar uma discussão.”",
              "• “Ele vai achar que estou exagerando.”",
              "• “Talvez seja só coisa da minha cabeça.”",
              "• “Não quero parecer carente.”",
              "Então, em vez de falar, elas guardam. Guardam dúvidas. Guardam sentimentos. Guardam inseguranças.",
              "E quanto mais tempo passa, mais difícil parece trazer esse assunto à tona.",
              "O problema é que guardar tudo dentro de si pode gerar três consequências importantes.",
            ],
          },
          {
            title: "1. Aumenta a insegurança",
            paragraphs: [
              "Quando não existe diálogo, a mente começa a preencher os espaços com suposições. E muitas dessas suposições não correspondem à realidade.",
            ],
          },
          {
            title: "2. Cria ressentimento silencioso",
            paragraphs: [
              "Pequenas frustrações acumuladas podem transformar pequenas situações em grandes reações.",
            ],
          },
          {
            title: "3. Amplia a distância emocional",
            paragraphs: [
              "Sem comunicação verdadeira, o casal vai perdendo oportunidades de se reconectar.",
              "Por isso, aprender como falar sobre o que sentimos é um dos passos mais importantes para reconstruir a proximidade.",
            ],
          },
        ],
      },
      {
        id: "aula-4",
        number: "Aula 4",
        title: "O erro de tentar resolver tudo com cobrança",
        readingMin: 4,
        sections: [
          {
            paragraphs: [
              "Quando sentimentos ficam guardados por muito tempo, é comum que a conversa finalmente aconteça… mas de forma carregada.",
              "Muitas conversas começam assim:",
              "❌ “Você nunca me dá atenção.”",
              "❌ “Você não liga mais para mim.”",
              "❌ “Parece que você prefere o celular do que ficar comigo.”",
              "Essas frases geralmente nascem de uma dor real. Mas, para quem escuta, elas podem soar como acusações.",
              "E quando alguém se sente acusado, a reação mais comum é se defender. Isso faz com que a conversa rapidamente se transforme em justificativas, explicações ou até discussões.",
              "Em vez de aproximar, o diálogo acaba aumentando ainda mais a distância.",
            ],
          },
          {
            title: "A boa notícia",
            paragraphs: [
              "Isso não significa que você deve guardar seus sentimentos. Muito pelo contrário.",
              "Significa apenas que a forma como iniciamos a conversa faz toda a diferença.",
              "Ao longo deste guia, você vai aprender maneiras mais inteligentes e sensíveis de abrir essas conversas. Formas que aumentam as chances de diálogo em vez de conflito.",
            ],
          },
        ],
      },
    ],
    exercise: {
      title: "Exercício Prático de Reflexão",
      paragraphs: [
        "Antes de seguir para os próximos módulos, reserve alguns minutos para refletir sobre o seu relacionamento. Responda para si mesma, com sinceridade.",
        "Sobre a primeira pergunta, pode ser: mais carinho, mais conversas, mais atenção, mais intimidade, mais tempo juntos.",
        "Lembrar dos momentos de conexão ajuda a perceber que ela existiu — e que pode ser reconstruída. Reconectar um relacionamento não significa voltar ao passado: significa criar novas formas de proximidade, diálogo e carinho dentro da relação que vocês têm hoje.",
      ],
      questions: [
        "O que eu sinto falta no nosso relacionamento hoje?",
        "Quando foi a última vez que me senti realmente conectada com ele?",
        "O que eu gostaria de voltar a viver dentro da nossa relação?",
      ],
    },
  },
  {
    slug: "modulo-2",
    number: "02",
    title: "Como falar sem fazer ele se fechar",
    subtitle: "Diálogos que aproximam em vez de afastar",
    image: m2,
    readingMin: 9,
    intro:
      "Um dos maiores desafios dentro de um relacionamento não é apenas o que sentimos, mas como conseguimos falar sobre isso.",
    sections: [
      {
        paragraphs: [
          "Muitas mulheres sabem exatamente o que estão sentindo:",
          "• sentem falta de carinho",
          "• sentem falta de atenção",
          "• sentem falta de conexão",
          "Mas quando chega o momento de transformar esse sentimento em palavras, surge o medo. Medo de parecer carente. Medo de começar uma discussão. Medo de ser mal interpretada.",
          "E por causa desse medo, muitas conversas importantes acabam acontecendo de duas formas: ou elas nunca acontecem… ou acontecem no momento errado e da forma errada.",
          "Quando isso acontece, o parceiro pode reagir com defesa, silêncio ou afastamento.",
        ],
      },
      {
        title: "A boa notícia",
        paragraphs: [
          "Muitas vezes não é o assunto que cria o problema, mas a forma como ele é apresentado.",
          "Neste módulo, você vai aprender maneiras simples e mais inteligentes de iniciar conversas importantes, abrir espaço para diálogo e expressar o que sente sem transformar a conversa em um confronto.",
        ],
      },
    ],
    lessons: [
      {
        id: "aula-1",
        number: "Aula 1",
        title: "Como iniciar uma conversa importante",
        readingMin: 4,
        sections: [
          {
            paragraphs: [
              "Quando existe algo que precisa ser falado no relacionamento, a forma de iniciar a conversa faz toda a diferença.",
              "Muitas discussões começam porque a primeira frase já soa como uma acusação. Frases como:",
              "❌ “Você nunca me dá atenção.”",
              "❌ “Você não liga mais para mim.”",
              "❌ “Você só fica no celular.”",
              "Essas frases geralmente nascem de uma dor real. Mas para quem escuta, elas podem soar como críticas diretas. E quando alguém se sente criticado, a reação mais comum é se defender.",
            ],
          },
          {
            title: "Uma estrutura simples",
            paragraphs: [
              "Uma forma mais saudável de iniciar conversas importantes é usar uma estrutura simples:",
              "1. Começar falando sobre o que você sente",
              "2. Evitar acusações",
              "3. Explicar o que você sente falta",
              "4. Convidar para diálogo",
            ],
          },
          {
            title: "Veja a diferença",
            paragraphs: [
              "❌ Forma que gera defesa: “Você nunca me dá atenção.”",
              "✔ Forma que abre diálogo: “Eu sinto falta de quando a gente conversava mais à noite.”",
              "Perceba que a segunda frase não acusa. Ela apenas expressa um sentimento. Isso cria um espaço muito mais seguro para o outro escutar.",
            ],
          },
        ],
      },
      {
        id: "aula-2",
        number: "Aula 2",
        title: "Como falar sobre distância emocional",
        readingMin: 3,
        sections: [
          {
            paragraphs: [
              "Quando a sensação de distância aparece no relacionamento, muitas mulheres não sabem como trazer esse assunto sem parecer que estão reclamando.",
              "Mas falar sobre essa sensação pode ser importante para que o parceiro também perceba o que está acontecendo.",
              "Uma forma saudável de iniciar esse tipo de conversa é compartilhar o sentimento de forma simples e honesta. Por exemplo:",
              "“Ultimamente tenho sentido que a gente anda meio distante… e eu sinto falta da nossa conexão.”",
            ],
          },
          {
            title: "Por que essa frase funciona",
            paragraphs: [
              "Essa frase faz três coisas importantes:",
              "• expressa um sentimento",
              "• não coloca culpa no parceiro",
              "• abre espaço para conversa",
              "Quando uma conversa começa dessa forma, as chances de diálogo aumentam muito.",
            ],
          },
        ],
      },
      {
        id: "aula-3",
        number: "Aula 3",
        title: "Como pedir mais carinho sem parecer carente",
        readingMin: 3,
        sections: [
          {
            paragraphs: [
              "Muitas mulheres sentem vontade de pedir mais carinho, mas evitam fazer isso por medo de parecer carentes.",
              "O problema é que, quando o pedido vem carregado de cobrança, ele pode gerar resistência. Por exemplo:",
              "❌ “Você nunca me abraça mais.”",
              "Essa frase pode fazer o parceiro se sentir criticado.",
            ],
          },
          {
            title: "Reforço positivo",
            paragraphs: [
              "Uma forma mais eficaz é usar o que chamamos de reforço positivo. Em vez de cobrar, você valoriza aquilo que gostaria de receber mais. Por exemplo:",
              "“Eu adoro quando você me abraça do nada… faz eu me sentir muito bem.”",
              "Esse tipo de frase comunica algo importante: ela mostra o que faz você se sentir bem, sem criar pressão.",
              "E muitas vezes, quando um comportamento é valorizado, ele tende a acontecer com mais frequência.",
            ],
          },
        ],
      },
      {
        id: "aula-4",
        number: "Aula 4",
        title: "Como falar sobre insegurança",
        readingMin: 3,
        sections: [
          {
            paragraphs: [
              "Sentimentos de insegurança são muito comuns dentro de relacionamentos de longo prazo.",
              "Mas muitas mulheres têm medo de falar sobre isso. Elas pensam que demonstrar insegurança pode parecer fraqueza ou gerar conflito.",
              "Na realidade, quando esse sentimento é expresso de forma tranquila, ele pode abrir espaço para mais compreensão. Por exemplo:",
              "“Às vezes fico pensando se você ainda sente atração por mim… e eu queria poder falar disso com você.”",
            ],
          },
          {
            title: "Vulnerabilidade aproxima",
            paragraphs: [
              "Essa frase não acusa. Ela não cria confronto. Ela apenas mostra vulnerabilidade.",
              "E vulnerabilidade, quando é expressa com calma, muitas vezes aproxima em vez de afastar.",
            ],
          },
        ],
      },
      {
        id: "aula-5",
        number: "Aula 5",
        title: "Como abordar assuntos delicados",
        readingMin: 4,
        sections: [
          {
            paragraphs: [
              "Algumas conversas dentro de um relacionamento exigem mais cuidado. Por exemplo, quando o assunto envolve:",
              "• sentimentos guardados",
              "• inseguranças",
              "• intimidade",
              "• ou comportamentos que incomodam",
              "Para essas conversas, alguns cuidados ajudam muito.",
            ],
          },
          {
            title: "1. Escolha um momento calmo",
            paragraphs: [
              "Evite iniciar conversas importantes quando alguém está estressado, cansado ou com pressa. Momentos tranquilos favorecem o diálogo.",
            ],
          },
          {
            title: "2. Evite falar no meio de uma discussão",
            paragraphs: [
              "Quando uma conversa começa no calor de um conflito, as emoções costumam falar mais alto do que a escuta.",
            ],
          },
          {
            title: "3. Use frases curtas e claras",
            paragraphs: [
              "Expressar sentimentos de forma simples evita interpretações erradas.",
            ],
          },
          {
            title: "4. Escute a resposta",
            paragraphs: [
              "Conversas importantes não são apenas sobre falar. Também são sobre ouvir.",
              "Muitas vezes, ouvir o outro com atenção já cria um espaço de aproximação.",
            ],
          },
        ],
      },
      {
        id: "aula-6",
        number: "Aula 6",
        title: "Frases que aproximam",
        readingMin: 3,
        sections: [
          {
            paragraphs: [
              "Algumas frases simples podem abrir portas importantes dentro do relacionamento. São frases que expressam sentimento, saudade ou desejo de proximidade.",
              "Veja alguns exemplos:",
              "“Eu sinto saudade da gente.”",
              "“Eu gosto muito quando a gente se conecta.”",
              "“Queria que a gente tivesse mais momentos só nossos.”",
            ],
          },
          {
            title: "O que essas frases têm em comum",
            paragraphs: [
              "Elas não acusam. Elas convidam.",
              "E quando um diálogo começa com convite em vez de crítica, a chance de aproximação se torna muito maior.",
            ],
          },
          {
            title: "Reflexão antes de seguir",
            paragraphs: [
              "Muitas vezes o que separa um conflito de uma reconexão é apenas a forma como a conversa começa.",
              "Aprender a expressar sentimentos de maneira mais clara, calma e aberta pode transformar completamente a dinâmica de um relacionamento.",
              "No próximo módulo, você vai conhecer 60 atitudes simples que ajudam a reconstruir a proximidade no dia a dia. Pequenos gestos que, quando repetidos com intenção, podem trazer de volta a conexão entre o casal.",
            ],
          },
        ],
      },
    ],
    exercise: {
      title: "Carinho no Dia a Dia",
      paragraphs: [
        "O carinho cotidiano é uma das formas mais simples de aproximar o casal. Reserve um momento para refletir sobre as perguntas abaixo.",
        "Depois, escolha uma dessas atitudes para aplicar nas próximas 24 horas. Pode ser algo simples como: um abraço mais demorado, um elogio espontâneo, um gesto de cuidado, ou uma mensagem carinhosa durante o dia.",
        "O objetivo não é fazer algo grande. É reativar pequenos gestos que criam proximidade emocional.",
      ],
      questions: [
        "Como o carinho costuma aparecer no nosso relacionamento hoje?",
        "Existe algum gesto simples que costumávamos fazer mais no início da relação?",
        "Qual pequeno gesto de carinho eu poderia iniciar hoje?",
      ],
    },
  },
  {
    slug: "modulo-3",
    number: "03",
    title: "60 atitudes simples que reconectam o casal",
    subtitle: "Pequenos gestos que voltam a aproximar",
    image: m3,
    readingMin: 12,
    intro:
      "Relacionamentos não se fortalecem apenas com grandes gestos. Na maioria das vezes, a conexão volta a crescer quando o casal começa a fazer pequenos movimentos de aproximação juntos.",
    sections: [
      {
        paragraphs: [
          "Essas atitudes não são tarefas para apenas uma pessoa. São convites para criar novos hábitos dentro da relação.",
          "Você pode iniciar algumas dessas atitudes, sugerir outras ou até propor pequenos acordos para que ambos participem.",
          "O importante é entender que reconexão é construída em parceria. Marque cada atitude conforme for colocando em prática — ela vai contar no seu progresso.",
        ],
      },
    ],
    habitBlocks: [
      {
        id: "bloco-1",
        number: "Bloco 1",
        title: "Atitudes de Reconexão Emocional",
        intro:
          "Essas atitudes ajudam o casal a voltar a se enxergar emocionalmente e a se interessar novamente pela vida um do outro.",
        habitIds: ["h1","h2","h3","h4","h5","h6","h7","h8","h9","h10"],
      },
      {
        id: "bloco-2",
        number: "Bloco 2",
        title: "Atitudes de Carinho Cotidiano",
        intro:
          "O carinho não precisa acontecer apenas em momentos especiais. Pequenos gestos diários ajudam a manter a proximidade.",
        habitIds: ["h11","h12","h13","h14","h15","h16","h17","h18","h19","h20"],
      },
      {
        id: "bloco-3",
        number: "Bloco 3",
        title: "Atitudes que Quebram a Rotina",
        intro:
          "Relacionamentos de longo prazo precisam de pequenos momentos diferentes para manter a conexão viva.",
        habitIds: ["h21","h22","h23","h24","h25","h26","h27","h28","h29","h30"],
      },
      {
        id: "bloco-4",
        number: "Bloco 4",
        title: "Atitudes que Reacendem o Desejo",
        intro:
          "O desejo dentro de um relacionamento também precisa ser cuidado e nutrido.",
        habitIds: ["h31","h32","h33","h34","h35","h36","h37","h38","h39","h40"],
      },
      {
        id: "bloco-5",
        number: "Bloco 5",
        title: "Atitudes de Segurança Emocional",
        intro:
          "Relacionamentos saudáveis são construídos sobre confiança e segurança emocional.",
        habitIds: ["h41","h42","h43","h44","h45","h46","h47","h48","h49","h50"],
      },
      {
        id: "bloco-6",
        number: "Bloco 6",
        title: "Atitudes de Continuidade da Conexão",
        intro:
          "Essas atitudes ajudam o casal a manter a conexão ao longo do tempo.",
        habitIds: ["h51","h52","h53","h54","h55","h56","h57","h58","h59","h60"],
      },
    ],
    finalReflection: {
      title: "Reflexão final",
      paragraphs: [
        "Reconectar um relacionamento não depende de um grande gesto isolado. Depende de pequenos movimentos consistentes feitos pelos dois.",
        "Quando o casal começa a criar novos hábitos de atenção, carinho e diálogo, a sensação de distância começa a diminuir.",
        "Escolha algumas dessas atitudes e comece a colocá-las em prática. Pequenas mudanças no dia a dia podem abrir espaço para mais proximidade, mais carinho e mais conexão dentro da relação.",
      ],
    },
    habits: [
      // Bloco 1
      // Bloco 1 — Reconexão Emocional
      { id: "h1", title: "Criar o hábito de perguntar como foi o dia, com atenção real", desc: "Reconexão emocional", note: "Não pergunte apenas por costume. Pare por alguns minutos, escute de verdade e mostre interesse. Esse simples gesto faz o outro sentir que sua vida importa." },
      { id: "h2", title: "Reservar alguns minutos para conversar sem celular ou distrações", desc: "Reconexão emocional", note: "Proponham um pequeno momento do dia para conversar sem televisão, celular ou outras interrupções. Mesmo 10 minutos de atenção total já fortalecem a conexão." },
      { id: "h3", title: "Relembrar juntos momentos felizes do relacionamento", desc: "Reconexão emocional", note: "Às vezes uma simples lembrança pode despertar sentimentos positivos. Relembrar viagens, histórias engraçadas ou momentos especiais ajuda o casal a reconectar emoções boas." },
      { id: "h4", title: "Criar o hábito de agradecer pequenas atitudes", desc: "Reconexão emocional", note: "Quando um faz algo pelo outro, mesmo que seja algo simples, reconheça. Frases como “Obrigado por ter feito isso” criam um ambiente de valorização." },
      { id: "h5", title: "Perguntar sobre sonhos ou planos para o futuro", desc: "Reconexão emocional", note: "Relacionamentos se fortalecem quando o casal também fala sobre o que deseja viver juntos no futuro. Perguntar sobre sonhos mostra interesse pela vida do parceiro." },
      { id: "h6", title: "Compartilhar algo pessoal do seu dia", desc: "Reconexão emocional", note: "Conte algo que aconteceu com você, algo que sentiu ou aprendeu. Isso cria proximidade emocional e abre espaço para que o outro também compartilhe." },
      { id: "h7", title: "Demonstrar interesse pelas preocupações do outro", desc: "Reconexão emocional", note: "Quando o parceiro estiver passando por algo difícil, pergunte como ele está lidando com aquilo. Demonstrar interesse cria apoio emocional." },
      { id: "h8", title: "Olhar nos olhos durante a conversa", desc: "Reconexão emocional", note: "O contato visual transmite presença. Muitas vezes estamos juntos, mas distraídos. Olhar nos olhos mostra que você está realmente ali." },
      { id: "h9", title: "Perguntar como o outro está se sentindo", desc: "Reconexão emocional", note: "Nem sempre as pessoas falam espontaneamente sobre emoções. Perguntar “Como você está se sentindo hoje?” pode abrir uma conversa importante." },
      { id: "h10", title: "Dizer algo que você admira no parceiro", desc: "Reconexão emocional", note: "Admiração fortalece vínculos. Pode ser algo sobre o caráter, o esforço no trabalho ou a forma como ele lida com situações difíceis." },
      // Bloco 2 — Carinho Cotidiano
      { id: "h11", title: "Criar o hábito de se abraçar ao chegar ou sair de casa", desc: "Carinho cotidiano", note: "Abraços curtos, mas presentes, criam sensação de acolhimento e conexão." },
      { id: "h12", title: "Sentar próximos ao assistir algo juntos", desc: "Carinho cotidiano", note: "Estar fisicamente próximo aumenta a sensação de intimidade e conforto." },
      { id: "h13", title: "Enviar mensagens carinhosas durante o dia", desc: "Carinho cotidiano", note: "Uma mensagem simples como “Pensei em você agora” pode mudar completamente o clima do dia." },
      { id: "h14", title: "Segurar as mãos ao caminhar juntos", desc: "Carinho cotidiano", note: "Gestos simples reforçam o vínculo emocional e físico." },
      { id: "h15", title: "Trocar elogios espontâneos", desc: "Carinho cotidiano", note: "Elogiar algo que você percebeu no parceiro faz com que ele se sinta valorizado." },
      { id: "h16", title: "Dar um beijo inesperado durante o dia", desc: "Carinho cotidiano", note: "Pequenos gestos inesperados mantêm a leveza e o carinho na relação." },
      { id: "h17", title: "Criar gestos de cuidado um pelo outro", desc: "Carinho cotidiano", note: "Pode ser preparar algo que o outro gosta ou ajudar em uma tarefa que ele costuma fazer." },
      { id: "h18", title: "Encostar ou tocar naturalmente durante a conversa", desc: "Carinho cotidiano", note: "Contato físico leve transmite proximidade e conforto emocional." },
      { id: "h19", title: "Receber o outro com um sorriso", desc: "Carinho cotidiano", note: "Um sorriso ao se encontrar cria um clima positivo dentro da relação." },
      { id: "h20", title: "Demonstrar carinho sem precisar de um motivo", desc: "Carinho cotidiano", note: "O carinho mais sincero é aquele que aparece de forma natural." },
      // Bloco 3 — Quebrando a Rotina
      { id: "h21", title: "Combinar um jantar diferente juntos", desc: "Quebrando a rotina", note: "Pode ser algo simples em casa ou em um lugar novo. O importante é criar um momento especial." },
      { id: "h22", title: "Conversar sobre histórias do início do relacionamento", desc: "Quebrando a rotina", note: "Relembrar como vocês se conheceram ou momentos marcantes reacende emoções positivas." },
      { id: "h23", title: "Fazer perguntas curiosas um ao outro", desc: "Quebrando a rotina", note: "Perguntas diferentes podem gerar conversas interessantes e inesperadas." },
      { id: "h24", title: "Sugerir uma caminhada juntos", desc: "Quebrando a rotina", note: "Caminhar lado a lado muitas vezes facilita conversas leves e naturais." },
      { id: "h25", title: "Planejar pequenos momentos a dois durante a semana", desc: "Quebrando a rotina", note: "Pode ser um café, uma conversa tranquila ou um tempo para relaxar juntos." },
      { id: "h26", title: "Retomar atividades que gostavam de fazer juntos", desc: "Quebrando a rotina", note: "Às vezes algo que fazia parte do relacionamento no início pode trazer novamente a sensação de proximidade." },
      { id: "h27", title: "Criar momentos sem celular", desc: "Quebrando a rotina", note: "Proponham períodos em que os dois estejam presentes de verdade, sem distrações digitais." },
      { id: "h28", title: "Assistir algo que ambos gostem", desc: "Quebrando a rotina", note: "Compartilhar experiências cria memórias e momentos em comum." },
      { id: "h29", title: "Cozinhar algo juntos", desc: "Quebrando a rotina", note: "Atividades simples feitas em parceria podem gerar momentos divertidos e próximos." },
      { id: "h30", title: "Conversar sobre histórias da infância ou passado", desc: "Quebrando a rotina", note: "Essas conversas revelam partes importantes da história pessoal de cada um." },
      // Bloco 4 — Reacender o Desejo
      { id: "h31", title: "Trocar elogios mais íntimos", desc: "Reacender o desejo", note: "Falar algo que você acha atraente no parceiro fortalece a sensação de desejo." },
      { id: "h32", title: "Demonstrar desejo de forma natural", desc: "Reacender o desejo", note: "Pequenos gestos ou comentários podem mostrar que ainda existe interesse." },
      { id: "h33", title: "Relembrar momentos de paixão do casal", desc: "Reacender o desejo", note: "Memórias de momentos intensos ajudam a despertar sentimentos semelhantes." },
      { id: "h34", title: "Criar momentos de proximidade física", desc: "Reacender o desejo", note: "Abraços, toques e proximidade física ajudam a fortalecer a intimidade." },
      { id: "h35", title: "Demonstrar interesse pelo toque", desc: "Reacender o desejo", note: "Mostrar abertura para o contato físico ajuda a manter a conexão." },
      { id: "h36", title: "Trocar olhares com presença", desc: "Reacender o desejo", note: "Olhares atentos podem transmitir carinho e desejo ao mesmo tempo." },
      { id: "h37", title: "Elogiar algo físico que você admira", desc: "Reacender o desejo", note: "Esse tipo de reconhecimento fortalece a atração dentro da relação." },
      { id: "h38", title: "Criar momentos mais íntimos sem distrações", desc: "Reacender o desejo", note: "Ambientes tranquilos favorecem proximidade emocional e física." },
      { id: "h39", title: "Conversar sobre o que cada um acha atraente no outro", desc: "Reacender o desejo", note: "Esse tipo de conversa pode aumentar a intimidade do casal." },
      { id: "h40", title: "Sugerir momentos de intimidade com leveza", desc: "Reacender o desejo", note: "Convites gentis são mais eficazes do que cobranças." },
      // Bloco 5 — Segurança Emocional
      { id: "h41", title: "Compartilhar sentimentos com o parceiro", desc: "Segurança emocional", note: "Falar sobre o que você sente fortalece a transparência na relação." },
      { id: "h42", title: "Perguntar o que o outro sente falta na relação", desc: "Segurança emocional", note: "Essa pergunta pode revelar necessidades importantes." },
      { id: "h43", title: "Criar um espaço seguro para conversa", desc: "Segurança emocional", note: "Mostrar que o parceiro pode falar sem medo de julgamento fortalece o vínculo." },
      { id: "h44", title: "Validar sentimentos", desc: "Segurança emocional", note: "Mesmo que você pense diferente, reconhecer o sentimento do outro demonstra respeito." },
      { id: "h45", title: "Escutar com atenção", desc: "Segurança emocional", note: "Ouvir sem interromper é um gesto poderoso de respeito emocional." },
      { id: "h46", title: "Demonstrar compreensão", desc: "Segurança emocional", note: "Tentar entender a perspectiva do outro ajuda a reduzir conflitos." },
      { id: "h47", title: "Evitar ironias em momentos sensíveis", desc: "Segurança emocional", note: "Respeito emocional é essencial para manter confiança." },
      { id: "h48", title: "Reconhecer erros e pedir desculpas", desc: "Segurança emocional", note: "Assumir responsabilidades fortalece a maturidade do relacionamento." },
      { id: "h49", title: "Oferecer apoio em momentos difíceis", desc: "Segurança emocional", note: "Saber que pode contar com o parceiro cria segurança emocional." },
      { id: "h50", title: "Reafirmar que o relacionamento é importante", desc: "Segurança emocional", note: "Dizer claramente que você valoriza a relação traz tranquilidade ao parceiro." },
      // Bloco 6 — Continuidade da Conexão
      { id: "h51", title: "Criar um pequeno ritual de conversa antes de dormir", desc: "Continuidade", note: "Alguns minutos de conversa antes de dormir podem se tornar um hábito de proximidade." },
      { id: "h52", title: "Perguntar regularmente como o outro está se sentindo", desc: "Continuidade", note: "Esse gesto demonstra cuidado emocional contínuo." },
      { id: "h53", title: "Reservar um momento semanal para estarem juntos", desc: "Continuidade", note: "Um pequeno encontro semanal ajuda a manter a conexão viva." },
      { id: "h54", title: "Manter gestos de carinho diariamente", desc: "Continuidade", note: "A constância do carinho é mais importante do que grandes gestos ocasionais." },
      { id: "h55", title: "Celebrar pequenas conquistas juntos", desc: "Continuidade", note: "Valorizar momentos positivos fortalece o sentimento de parceria." },
      { id: "h56", title: "Demonstrar orgulho pelo parceiro", desc: "Continuidade", note: "Reconhecer conquistas gera admiração mútua." },
      { id: "h57", title: "Relembrar momentos felizes do relacionamento", desc: "Continuidade", note: "Memórias positivas ajudam a fortalecer o vínculo emocional." },
      { id: "h58", title: "Fazer pequenas surpresas", desc: "Continuidade", note: "Pequenos gestos inesperados podem trazer alegria ao relacionamento." },
      { id: "h59", title: "Expressar gratidão pela relação", desc: "Continuidade", note: "A gratidão ajuda o casal a valorizar o que já construíram juntos." },
      { id: "h60", title: "Assumir juntos o compromisso de cuidar da relação", desc: "Continuidade", note: "Relacionamentos saudáveis são construídos quando ambos decidem cuidar da conexão diariamente." },
    ],
    exercise: {
      title: "Quebrando a Rotina",
      paragraphs: [
        "A rotina é natural em relacionamentos longos, mas quando ela domina completamente o relacionamento, a conexão pode enfraquecer. Reflita sobre as perguntas abaixo.",
        "Agora escolha uma pequena mudança para os próximos dias. Algumas ideias simples: sugerir uma caminhada juntos, assistir algo que os dois gostam, preparar um jantar simples diferente, criar um momento sem celular.",
        "Não precisa ser algo elaborado. O objetivo é criar momentos novos dentro da rotina.",
      ],
      questions: [
        "Quando foi a última vez que fizemos algo diferente juntos?",
        "O que costumávamos fazer no início do relacionamento que hoje não fazemos mais?",
        "Existe alguma atividade simples que poderíamos retomar juntos?",
      ],
    },
  },
  {
    slug: "modulo-4",
    number: "04",
    title: "Conversas que Aproximam o Casal",
    subtitle: "Perguntas como pontes de reconexão",
    image: m4,
    readingMin: 10,
    intro:
      "Em muitos relacionamentos, o casal continua convivendo todos os dias, mas as conversas vão ficando cada vez mais superficiais.",
    sections: [
      {
        paragraphs: [
          "Fala-se sobre trabalho, contas, tarefas da casa e compromissos do dia a dia. Mas raramente se fala sobre sentimentos, expectativas ou desejos dentro da relação.",
          "Com o tempo, essa falta de conversa emocional pode criar uma sensação de distância.",
          "Por isso, este módulo propõe algo muito simples e ao mesmo tempo muito poderoso: usar perguntas como pontes de reconexão.",
        ],
      },
      {
        title: "Perguntas bem feitas têm a capacidade de",
        paragraphs: [
          "• abrir conversas mais profundas",
          "• revelar sentimentos que estavam guardados",
          "• trazer novas perspectivas sobre o relacionamento",
          "• criar momentos de escuta e compreensão",
          "Não é necessário fazer todas as perguntas de uma vez. A ideia é usar algumas delas em momentos tranquilos, quando vocês estiverem conversando ou passando um tempo juntos.",
          "Essas conversas podem criar momentos de conexão emocional que muitas vezes estavam faltando na relação.",
        ],
      },
    ],
    lessons: [
      {
        id: "aula-1",
        number: "Bloco 1",
        title: "Perguntas de Conexão Emocional",
        subtitle: "Voltar a falar sobre sentimentos, lembranças e experiências compartilhadas",
        readingMin: 3,
        sections: [
          {
            paragraphs: [
              "Essas perguntas ajudam o casal a voltar a falar sobre sentimentos, lembranças e experiências compartilhadas.",
            ],
          },
          {
            title: "Qual momento nosso você guarda com mais carinho?",
            paragraphs: [
              "Essa pergunta convida o parceiro a lembrar de momentos felizes da relação. Quando o casal revive memórias positivas, emoções importantes voltam à tona.",
              "Você também pode compartilhar sua resposta depois. Por exemplo: “Eu sempre lembro com carinho daquele dia em que viajamos juntos...”",
              "Esse tipo de conversa ajuda o casal a lembrar por que escolheram estar juntos.",
            ],
          },
          {
            title: "O que você mais admira em mim hoje?",
            paragraphs: [
              "Com o tempo, muitas qualidades deixam de ser mencionadas. Essa pergunta abre espaço para reconhecimento e admiração.",
              "Ouvir o que o parceiro admira em você pode fortalecer a autoestima e o vínculo emocional.",
              "Depois da resposta, você também pode retribuir dizendo algo que admira nele.",
            ],
          },
          {
            title: "O que você gostaria que a gente fizesse mais juntos?",
            paragraphs: [
              "Essa pergunta ajuda a identificar pequenas coisas que podem fortalecer o relacionamento.",
              "Talvez ele sinta falta de conversar mais, sair juntos, assistir algo juntos ou passar mais tempo sem distrações.",
              "Essa conversa pode trazer ideias simples para melhorar a convivência.",
            ],
          },
        ],
      },
      {
        id: "aula-2",
        number: "Bloco 2",
        title: "Perguntas Sobre Relacionamento",
        subtitle: "Refletir sobre a evolução da relação ao longo do tempo",
        readingMin: 3,
        sections: [
          {
            paragraphs: [
              "Essas perguntas ajudam o casal a refletir sobre a evolução da relação ao longo do tempo.",
            ],
          },
          {
            title: "O que você acha que mudou na nossa relação com o tempo?",
            paragraphs: [
              "Essa pergunta pode trazer percepções importantes. Talvez ele mencione mudanças na rotina, novas responsabilidades ou menos tempo juntos.",
              "O objetivo dessa pergunta não é procurar culpados, mas entender como cada um percebe a relação hoje.",
            ],
          },
          {
            title: "O que faz você se sentir mais amado?",
            paragraphs: [
              "Cada pessoa se sente amada de maneiras diferentes. Alguns valorizam mais palavras de carinho, tempo juntos, gestos de cuidado ou toque físico.",
              "Quando você descobre o que faz o parceiro se sentir amado, fica muito mais fácil fortalecer o vínculo.",
            ],
          },
        ],
      },
      {
        id: "aula-3",
        number: "Bloco 3",
        title: "Perguntas Sobre Intimidade",
        subtitle: "Falar sobre proximidade emocional e física de maneira natural",
        readingMin: 3,
        sections: [
          {
            paragraphs: [
              "Essas perguntas ajudam o casal a falar sobre proximidade emocional e física de maneira natural.",
            ],
          },
          {
            title: "O que faz você se sentir mais próximo de mim?",
            paragraphs: [
              "Essa pergunta permite entender quais momentos criam mais conexão entre vocês.",
              "Talvez ele diga que se sente mais próximo quando conversam com calma, fazem algo juntos, recebem carinho ou passam tempo sem distrações.",
              "Esse tipo de resposta pode trazer insights importantes.",
            ],
          },
          {
            title: "Existe algo que você gostaria que fizéssemos mais juntos?",
            paragraphs: [
              "Essa pergunta abre espaço para desejos que talvez nunca tenham sido falados.",
              "Pode ser algo simples como passear mais, conversar mais, ter mais momentos de intimidade ou dividir melhor o tempo.",
              "Quando esses desejos são compartilhados, o casal pode encontrar formas de se aproximar.",
            ],
          },
        ],
      },
      {
        id: "aula-4",
        number: "Bloco 4",
        title: "Perguntas Sobre o Futuro",
        subtitle: "Lembrar que ainda existe uma jornada sendo construída juntos",
        readingMin: 3,
        sections: [
          {
            paragraphs: [
              "Conversar sobre o futuro ajuda o casal a lembrar que ainda existe uma jornada sendo construída juntos.",
            ],
          },
          {
            title: "Como você imagina nosso relacionamento daqui a alguns anos?",
            paragraphs: [
              "Essa pergunta convida o parceiro a pensar sobre o futuro da relação.",
              "Ele pode falar sobre estabilidade, companheirismo, planos de vida e sonhos que gostaria de realizar ao seu lado.",
              "Esse tipo de conversa cria uma visão de futuro compartilhada.",
            ],
          },
          {
            title: "O que podemos fazer para fortalecer nossa relação?",
            paragraphs: [
              "Essa é uma pergunta muito poderosa. Ela transforma o relacionamento em um projeto conjunto.",
              "Em vez de pensar apenas em problemas, o casal passa a pensar em soluções e crescimento juntos.",
              "As respostas podem trazer ideias simples que fazem grande diferença no dia a dia.",
            ],
          },
        ],
      },
      {
        id: "aula-5",
        number: "Aula extra",
        title: "Como usar essas perguntas",
        subtitle: "Criar espaço de escuta, não interrogatório",
        readingMin: 2,
        sections: [
          {
            paragraphs: [
              "Não transforme essas perguntas em um interrogatório.",
              "Use-as em momentos tranquilos, como durante uma conversa à noite, em um passeio, durante um jantar ou em um momento de calma.",
              "Você pode fazer uma pergunta e ouvir com atenção. Depois, compartilhe também sua própria resposta.",
              "O mais importante não é a pergunta em si. O mais importante é o espaço de escuta e conexão que ela cria.",
            ],
          },
        ],
      },
    ],
    exercise: {
      title: "Três perguntas para começar",
      paragraphs: [
        "Escolha três perguntas deste módulo e experimente usá-las em um momento tranquilo com seu parceiro.",
        "Algumas sugestões para começar: “Qual momento nosso você guarda com mais carinho?”, “O que faz você se sentir mais amado?”, “O que você gostaria que fizéssemos mais juntos?”",
        "Depois da conversa, reflita sobre o que descobriu. Muitas vezes, tudo o que um relacionamento precisa é de mais conversas verdadeiras.",
      ],
      questions: [
        "O que eu descobri sobre ele que eu não sabia antes?",
        "Essa conversa nos aproximou emocionalmente?",
      ],
    },
  },
  {
    slug: "modulo-5",
    number: "05",
    title: "Reconstruindo Desejo e Proximidade",
    subtitle: "Quando o amor não acabou, só adormeceu",
    image: m5,
    readingMin: 12,
    intro:
      "Uma das dores mais silenciosas dentro de muitos relacionamentos acontece quando o casal começa a perceber que o desejo e a proximidade já não são como antes.",
    sections: [
      {
        paragraphs: [
          "Não necessariamente porque o amor acabou. Mas porque, com o tempo, a relação pode entrar em um ritmo onde:",
          "• o carinho acontece menos",
          "• os elogios ficam raros",
          "• o toque espontâneo diminui",
          "• e o casal passa a funcionar mais como parceiros de rotina do que como um casal apaixonado",
          "Quando isso acontece, é comum surgirem dúvidas e inseguranças. Um pode pensar: “Será que ainda existe atração entre nós?”, “Será que a rotina mudou a forma como nos vemos?”, “Será que é normal o relacionamento ficar assim?”",
        ],
      },
      {
        title: "Uma verdade importante",
        paragraphs: [
          "O desejo dentro de relacionamentos de longo prazo raramente desaparece de repente. Na maioria das vezes ele apenas fica adormecido pela rotina, pelo estresse e pela falta de momentos de conexão entre o casal.",
          "E assim como o desejo pode diminuir com o tempo, ele também pode ser reconstruído.",
          "Na maioria das vezes isso acontece quando o casal começa a criar novamente momentos de proximidade, gestos de carinho, conversas mais abertas e pequenas atitudes que reativam a conexão emocional e física.",
        ],
      },
    ],
    lessons: [
      {
        id: "aula-1",
        number: "Aula 1",
        title: "Por que o desejo diminui no relacionamento",
        readingMin: 4,
        sections: [
          {
            paragraphs: [
              "Muitas pessoas acreditam que quando o desejo diminui significa que algo está errado com o relacionamento. Mas, na realidade, isso costuma acontecer por motivos muito comuns da vida adulta.",
              "Com o passar dos anos, a vida cotidiana passa a ocupar grande parte da energia do casal. Entre trabalho, responsabilidades, tarefas domésticas e preocupações, muitas vezes o relacionamento acaba funcionando no modo automático.",
            ],
          },
          {
            title: "Excesso de rotina",
            paragraphs: [
              "Quando os dias seguem sempre o mesmo padrão, o relacionamento pode perder a sensação de novidade que existia no início.",
              "O casal continua junto, mas muitas interações passam a ser práticas e funcionais.",
            ],
          },
          {
            title: "Falta de novidade",
            paragraphs: [
              "No começo do relacionamento existe descoberta, curiosidade e surpresa.",
              "Com o tempo, quando tudo se torna previsível, o cérebro passa a associar menos emoção ao relacionamento.",
            ],
          },
          {
            title: "Pouca comunicação emocional",
            paragraphs: [
              "O desejo costuma estar ligado à proximidade emocional.",
              "Quando o casal para de conversar sobre sentimentos, sonhos e experiências pessoais, a intimidade também pode diminuir.",
            ],
          },
          {
            title: "Estresse do dia a dia",
            paragraphs: [
              "Cansaço físico e mental impactam diretamente a disposição emocional.",
              "Quando ambos estão sobrecarregados, a energia para nutrir a relação também diminui.",
              "Nada disso significa que o relacionamento perdeu valor. Significa apenas que o desejo precisa voltar a ser cuidado e nutrido como parte da relação.",
            ],
          },
        ],
      },
      {
        id: "aula-2",
        number: "Aula 2",
        title: "Como manter o equilíbrio entre rotina e atração",
        readingMin: 4,
        sections: [
          {
            paragraphs: [
              "Em muitos relacionamentos, ambos acabam assumindo papéis importantes dentro da vida cotidiana.",
              "Podem surgir responsabilidades como organizar a casa, cuidar da família, administrar tarefas e lidar com compromissos.",
              "Esses papéis fazem parte da construção de uma vida em comum. O desafio aparece quando o relacionamento passa a existir apenas nesses papéis funcionais.",
            ],
          },
          {
            title: "Quando o casal só se vê como parceiros de rotina",
            paragraphs: [
              "Quando isso acontece, o casal pode começar a se enxergar apenas como parceiros de rotina, pessoas que dividem responsabilidades, colegas de vida.",
              "E não mais como duas pessoas que também se admiram, se desejam e se sentem atraídas uma pela outra.",
            ],
          },
          {
            title: "Voltar a se enxergar como casal",
            paragraphs: [
              "Reconstruir o desejo dentro da relação envolve algo importante para ambos: voltar a se enxergar também como homem e mulher dentro do relacionamento, e não apenas como parceiros de responsabilidades.",
              "Isso pode começar com pequenas mudanças na forma como o casal interage: valorizando momentos de leveza, demonstrando admiração e permitindo que o carinho e a atração voltem a aparecer naturalmente.",
            ],
          },
        ],
      },
      {
        id: "aula-3",
        number: "Aula 3",
        title: "Pequenos gestos que despertam atração",
        readingMin: 4,
        sections: [
          {
            paragraphs: [
              "A atração dentro de um relacionamento raramente retorna através de grandes mudanças. Ela costuma reaparecer através de pequenos gestos que criam proximidade novamente entre o casal.",
            ],
          },
          {
            title: "Manter contato visual nas conversas",
            paragraphs: [
              "Quando o casal olha nos olhos enquanto conversa, cria-se uma sensação de presença e conexão emocional.",
              "Esse tipo de atenção mostra que ambos estão realmente presentes naquele momento.",
            ],
          },
          {
            title: "Trocar elogios de forma sincera",
            paragraphs: [
              "Com o tempo, muitos elogios desaparecem da rotina do casal.",
              "Reintroduzir pequenas palavras de admiração pode despertar novamente a sensação de valorização e atração. Por exemplo: elogiar algo na aparência, reconhecer algo que o outro fez bem, demonstrar admiração por alguma qualidade.",
            ],
          },
          {
            title: "Criar proximidade física natural",
            paragraphs: [
              "Gestos simples como abraçar, encostar, sentar mais próximos e segurar as mãos podem ajudar a reativar a sensação de intimidade.",
              "A proximidade física muitas vezes nasce naturalmente quando existe proximidade emocional.",
            ],
          },
        ],
      },
      {
        id: "aula-4",
        number: "Aula 4",
        title: "Criando momentos de reconexão",
        readingMin: 4,
        sections: [
          {
            paragraphs: [
              "Muitos casais não têm falta de amor. Eles têm falta de momentos reais de presença juntos.",
              "Quando a rotina ocupa todo o espaço da relação, a conexão pode ficar em segundo plano.",
              "Criar pequenos momentos de reconexão pode trazer novamente leveza para o relacionamento.",
            ],
          },
          {
            title: "Jantar sem celular",
            paragraphs: [
              "Combinar um jantar ou refeição onde ambos deixem os celulares de lado e estejam realmente presentes na conversa.",
            ],
          },
          {
            title: "Conversa antes de dormir",
            paragraphs: [
              "Alguns minutos de conversa antes de dormir podem se tornar um pequeno ritual de conexão diária.",
            ],
          },
          {
            title: "Passeio curto juntos",
            paragraphs: [
              "Uma caminhada, um café ou um passeio simples pode abrir espaço para conversas leves e proximidade.",
            ],
          },
          {
            title: "Relembrar momentos importantes da relação",
            paragraphs: [
              "Conversar sobre histórias do início do relacionamento pode despertar emoções positivas que estavam adormecidas.",
              "Esses momentos ajudam o casal a lembrar que, além da rotina, existe uma história compartilhada entre os dois.",
            ],
          },
        ],
      },
      {
        id: "aula-5",
        number: "Aula 5",
        title: "Mantendo a conexão viva",
        readingMin: 3,
        sections: [
          {
            paragraphs: [
              "Reconectar o relacionamento é importante. Mas manter essa conexão ao longo do tempo é ainda mais importante.",
              "Relacionamentos fortes não dependem apenas de grandes momentos. Eles são construídos através de pequenas atitudes repetidas diariamente pelos dois.",
            ],
          },
          {
            title: "Os gestos que sustentam a relação",
            paragraphs: [
              "Gestos simples como demonstrar carinho, manter conversas sinceras, criar momentos a dois e reconhecer e valorizar o parceiro são o que sustentam a proximidade ao longo dos anos.",
              "A reconexão raramente acontece com um único grande gesto. Ela acontece através de pequenos movimentos consistentes que mostram ao outro:",
              "“Nossa relação continua sendo importante para mim.”",
            ],
          },
        ],
      },
    ],
    exercise: {
      title: "Proximidade no Dia a Dia",
      paragraphs: [
        "Reserve alguns minutos para refletir sobre a proximidade dentro do relacionamento.",
        "Agora escolha uma atitude simples deste módulo para experimentar juntos. Pode ser: reservar alguns minutos para conversar antes de dormir, planejar um passeio curto, trocar elogios de forma mais presente ou criar um momento sem celular.",
        "O mais importante é lembrar que o desejo e a proximidade não dependem apenas de grandes mudanças. Eles voltam a aparecer quando atenção, presença e carinho voltam a fazer parte do dia a dia do casal.",
      ],
      questions: [
        "Em quais momentos nós dois nos sentimos mais próximos um do outro?",
        "O que costuma trazer mais leveza e carinho para a nossa relação?",
        "Existe algum pequeno hábito que poderíamos criar juntos para fortalecer nossa conexão?",
      ],
    },
  },
];
