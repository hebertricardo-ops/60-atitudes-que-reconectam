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
        paragraphs: [
          "Renata tinha 38 anos e um casamento de 11 anos.",
          "Ela e o marido não brigavam. Não existia traição. Não existia crise grave. Mas toda noite, quando ela deitava na cama, sentia uma coisa estranha: ele estava ali, do lado, e parecia distante ao mesmo tempo. Ele no celular. Ela querendo dizer alguma coisa. E no final, nada era dito.",
          "“Se eu falar, ele vai achar que estou exagerando. Ou vira briga. Melhor deixar pra lá.”",
          "Ela ficou dois anos carregando esse sentimento sozinha — até que começou a fazer coisas pequenas, diferentes. Não grandes gestos. Não conversas dramáticas. Apenas pequenas atitudes conscientes, uma por vez.",
          "Em menos de três semanas, ele perguntou: “Você está diferente. O que aconteceu?”",
          "Este material foi criado para mulheres como a Renata. E como você.",
        ],
      },
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
        title: "— O silêncio que ninguém sabe nomear —",
        paragraphs: [
          "Juliana, 42 anos, dois filhos, casada há 13 anos.",
          "Ela descreveu assim: “A gente ainda dizia bom dia. Ainda jantava junto. Ainda dormia na mesma cama. Mas em algum momento eu percebi que a gente tinha parado de se ver de verdade.”",
          "Não era desamor. Não era crise. Era uma ausência sutil — como se o casamento tivesse virado um projeto muito bem administrado, mas tivesse perdido a alma no caminho.",
          "“Comecei a questionar tudo. Será que sou eu? Será que ele já não sente mais? Será que é normal ficar assim?”",
          "Ela parou de questionar quando entendeu o que estava acontecendo. E entender foi o primeiro passo para mudar.",
          "Se você reconheceu esse sentimento — este módulo existe para isso.",
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
      // Bloco 1 — Reconexão Emocional
      { id: "h1", title: "A Pergunta de Quebra de Padrão", desc: "Reconexão emocional", note: "A Tática: “Como foi o dia?” ativa resposta automática. Uma pergunta específica gera conversa real. Como fazer hoje: Na hora do jantar ou quando ele chegar, guarde o celular e use o script abaixo. O Script: “Amor, qual foi a melhor parte do seu dia hoje? Teve algo que te estressou muito?”" },
      { id: "h2", title: "Os 10 Minutos Sem Tela", desc: "Reconexão emocional", note: "A Tática: Atenção total, mesmo que breve, comunica ao cérebro do outro que ele importa mais do que qualquer notificação. Como fazer hoje: Proponha um momento depois do jantar — sem TV, sem celular — só para conversar sobre qualquer coisa leve. O Script: “Vem conversar comigo um pouquinho antes de a gente pegar o celular de volta.”" },
      { id: "h3", title: "A Memória Que Aproxima", desc: "Reconexão emocional", note: "A Tática: Reviver memórias positivas juntos reativa emoções que estavam adormecidas e reforça o vínculo afetivo. Como fazer hoje: Traga uma lembrança específica — uma viagem, um lugar, um momento engraçado — e peça a opinião dele sobre aquela época. O Script: “Lembro tanto daquele dia que a gente foi em [lugar]. Você ainda pensa naquilo às vezes?”" },
      { id: "h4", title: "O Obrigado Específico", desc: "Reconexão emocional", note: "A Tática: Gratidão genérica passa despercebida. Reconhecer uma atitude específica faz o outro sentir que foi realmente visto. Como fazer hoje: Pense em algo pequeno que ele fez hoje ou ontem e agradeça de forma direta, olhando nos olhos. O Script: “Obrigada por ter [atitude específica]. Você nem imagina como isso foi bom pra mim.”" },
      { id: "h5", title: "A Pergunta Sobre o Futuro", desc: "Reconexão emocional", note: "A Tática: Falar sobre sonhos juntos cria a sensação de que ainda há uma jornada sendo construída — não apenas uma rotina sendo administrada. Como fazer hoje: Em um momento tranquilo, faça uma pergunta sobre algo que ele gostaria de viver ou conquistar. O Script: “Se a gente pudesse fazer uma coisa diferente esse ano, o que você escolheria?”" },
      { id: "h6", title: "O Compartilhamento Pessoal", desc: "Reconexão emocional", note: "A Tática: Quando você se abre primeiro, cria segurança para o outro se abrir também. Vulnerabilidade gera reciprocidade. Como fazer hoje: Conte algo do seu dia — um pensamento, uma sensação, algo pequeno que aconteceu com você. O Script: “Hoje eu fiquei pensando em [algo pessoal]... você costuma sentir isso também?”" },
      { id: "h7", title: "O Interesse Ativo", desc: "Reconexão emocional", note: "A Tática: Perguntar sobre as preocupações do outro antes que ele peça demonstra cuidado proativo, não reativo. Como fazer hoje: Se ele parecer quieto ou cansado, pergunte diretamente sobre o que está sentindo. O Script: “Você está quieto hoje. Está com muita coisa na cabeça? Pode me contar se quiser.”" },
      { id: "h8", title: "O Contato Visual", desc: "Reconexão emocional", note: "A Tática: Olhar nos olhos enquanto o outro fala ativa a sensação de presença e cria conexão mesmo sem dizer nada. Como fazer hoje: Escolha uma conversa, qualquer uma, e mantenha o contato visual por alguns segundos a mais do que o normal. O Script: sem frase — sorria levemente ao fazer contato." },
      { id: "h9", title: "A Pergunta Sobre o Sentimento", desc: "Reconexão emocional", note: "A Tática: Muitas pessoas não falam sobre emoções espontaneamente. Ser convidada a falar cria alívio e proximidade. Como fazer hoje: No final do dia, pergunte de forma simples e sem pressão. O Script: “Como você está se sentindo hoje, de verdade? Estou aqui para ouvir.”" },
      { id: "h10", title: "A Admiração Verbalizada", desc: "Reconexão emocional", note: "A Tática: Admiração dita em voz alta reforça o valor do outro e ativa o desejo de corresponder ao que foi reconhecido. Como fazer hoje: Pense em algo genuíno que você admira nele — caráter, esforço, jeito de ser — e diga diretamente. O Script: “Sabe o que eu admiro muito em você? A forma como você [qualidade específica]. Isso é muito raro.”" },
      // Bloco 2 — Carinho Cotidiano
      { id: "h11", title: "O Abraço de 7 Segundos", desc: "Carinho cotidiano", note: "A Tática: Um abraço de 7 a 10 segundos libera ocitocina, o hormônio da conexão, e interrompe o estresse acumulado do dia. Como fazer hoje: Quando ele chegar do trabalho, vá até ele antes que ele se sente. Abrace devagar, conte mentalmente até 7. O Script: “Nada não, só senti saudade do seu cheiro hoje.”" },
      { id: "h12", title: "A Proximidade no Sofá", desc: "Carinho cotidiano", note: "A Tática: O contato físico passivo — encostar, sentar junto — mantém a conexão emocional ativa mesmo sem conversa. Como fazer hoje: Quando forem assistir algo juntos, sente mais perto do que o normal e encoste levemente no ombro dele. O Script: sem palavras — a proximidade já comunica." },
      { id: "h13", title: "A Mensagem do Dia", desc: "Carinho cotidiano", note: "A Tática: Uma mensagem inesperada no meio do dia mostra que você pensou nele mesmo sem precisar de motivo. Como fazer hoje: Em um momento aleatório da tarde, mande uma mensagem curta e genuína. O Script: “Lembrei de você agora sem motivo nenhum. Espero que seu dia esteja bom.”" },
      { id: "h14", title: "As Mãos ao Caminhar", desc: "Carinho cotidiano", note: "A Tática: Segurar a mão enquanto caminham é um gesto de escolha — não de obrigação — e sinaliza cumplicidade sem exigir conversa. Como fazer hoje: Na próxima vez que saírem juntos, ofereça sua mão primeiro, com naturalidade. O Script: gesto silencioso — se ele sorrir, sorria de volta." },
      { id: "h15", title: "O Elogio Espontâneo", desc: "Carinho cotidiano", note: "A Tática: Elogios inesperados têm muito mais impacto do que os esperados. O elemento surpresa amplifica o efeito emocional. Como fazer hoje: Perceba algo genuíno nele hoje — a roupa, o cheiro, uma atitude — e comente em voz alta. O Script: “Você está muito bem hoje. Reparou nisso?”" },
      { id: "h16", title: "O Beijo Inesperado", desc: "Carinho cotidiano", note: "A Tática: Gestos físicos espontâneos comunicam desejo sem precisar de contexto — e quebram o ciclo do modo automático. Como fazer hoje: Em um momento neutro — ele lendo, cozinhando, passando por você — dê um beijo rápido sem explicar. O Script: nenhum — o silêncio depois do gesto é poderoso." },
      { id: "h17", title: "O Gesto de Cuidado", desc: "Carinho cotidiano", note: "A Tática: Antecipar uma necessidade do outro — sem ser pedido — ativa o sentimento de que ele está sendo visto e cuidado. Como fazer hoje: Faça algo pequeno que você sabe que ele aprecia — um café, deixar a mochila dele pronta, guardar algo que ele estava procurando. O Script: “Fiz isso pensando em você. Não precisava de motivo.”" },
      { id: "h18", title: "O Toque Natural na Conversa", desc: "Carinho cotidiano", note: "A Tática: Contato físico leve durante a conversa — tocar o braço, a mão, o ombro — aumenta a sensação de intimidade e segurança. Como fazer hoje: Durante uma conversa, toque levemente o braço ou a mão dele por um segundo, de forma natural. O Script: o toque dispensa palavras — continue a conversa normalmente." },
      { id: "h19", title: "O Sorriso de Chegada", desc: "Carinho cotidiano", note: "A Tática: Ser recebida com alegria genuína ativa dopamina. Quando ele associa chegar em casa a um sorriso, o ambiente emocional muda. Como fazer hoje: Quando ele chegar, largue o que estiver fazendo por 5 segundos e sorria de verdade. O Script: “Oi! Que bom que você chegou.”" },
      { id: "h20", title: "O Carinho Sem Motivo", desc: "Carinho cotidiano", note: "A Tática: Carinho condicionado tem menos impacto do que o carinho gratuito, que comunica que o amor não precisa ser justificado. Como fazer hoje: Em um momento qualquer, demonstre carinho — um toque, um olhar, um gesto — sem nenhum motivo declarado. O Script: “Nada não. Só porque queria.”" },
      // Bloco 3 — Quebrando a Rotina
      { id: "h21", title: "O Jantar Diferente", desc: "Quebrando a rotina", note: "A Tática: Mudar o cenário, mesmo que levemente, sinaliza ao cérebro que aquele momento é especial — não mais um item da rotina. Como fazer hoje: Proponha um jantar diferente do habitual — uma mesa posta, uma comida que ele gosta, uma música de fundo. O Script: “Resolvi fazer uma coisa diferente hoje. Não é nada demais, mas queria que fosse especial.”" },
      { id: "h22", title: "A História do Começo", desc: "Quebrando a rotina", note: "A Tática: Revisitar o início do relacionamento reativa emoções originais e lembra ao casal o porquê de terem escolhido um ao outro. Como fazer hoje: Traga um detalhe específico de como vocês se conheceram ou de um momento marcante do começo. O Script: “Você se lembra quando [momento específico]? Eu penso naquilo às vezes e sorrio.”" },
      { id: "h23", title: "A Pergunta Inusitada", desc: "Quebrando a rotina", note: "A Tática: Perguntas inesperadas interrompem o piloto automático e criam conversas que o casal nunca teve — gerando novidade dentro da rotina. Como fazer hoje: Faça uma pergunta que nunca fizeram um ao outro — sobre infância, um sonho, um medo, uma preferência absurda. O Script: “Se você pudesse morar em qualquer lugar do mundo por um ano, para onde iria?”" },
      { id: "h24", title: "A Caminhada a Dois", desc: "Quebrando a rotina", note: "A Tática: Caminhar lado a lado, sem o peso do contato visual direto, facilita conversas mais abertas e menos ensaiadas. Como fazer hoje: Proponha uma caminhada curta — mesmo que seja só ao redor do quarteirão. O Script: “Vamos dar uma voltinha? Quero respirar um ar com você.”" },
      { id: "h25", title: "O Momento a Dois na Semana", desc: "Quebrando a rotina", note: "A Tática: Rituais simples e regulares constroem mais conexão do que grandes eventos ocasionais. Como fazer hoje: Proponha um momento fixo na semana — um café, uma conversa, um passeio — só de vocês dois. O Script: “E se a gente combinasse um dia na semana que fosse nosso? Não precisa ser nada elaborado.”" },
      { id: "h26", title: "Retomar o Que Era Nosso", desc: "Quebrando a rotina", note: "A Tática: Atividades abandonadas pela correria carregam memórias positivas. Retomá-las reativa o vínculo emocional original. Como fazer hoje: Lembre de algo que vocês faziam juntos no começo e proponha retomar — um jogo, um lugar, uma série, uma receita. O Script: “Saudade de quando a gente fazia [atividade]. Você teria vontade de fazer de novo?”" },
      { id: "h27", title: "O Refúgio de 15 Minutos", desc: "Quebrando a rotina", note: "A Tática: Proibir o celular gera resistência. Criar uma zona de presença disfarçada de momento gostoso, não. Como fazer hoje: Faça um café ou pegue uma sobremesa, sente à mesa, deixe o celular em outro cômodo e chame ele. O Script: “Fiz um café pra gente. Vem cá sentar comigo 10 minutinhos antes de a gente voltar pra correria.”" },
      { id: "h28", title: "A Série ou Filme do Casal", desc: "Quebrando a rotina", note: "A Tática: Experiências compartilhadas criam memória afetiva em comum — o que fortalece a identidade de casal. Como fazer hoje: Proponha escolher juntos algo para assistir, sem cada um ficar no celular. O Script: “Vamos escolher algo pra assistir juntos hoje? Sem ficar cada um no próprio celular.”" },
      { id: "h29", title: "Cozinhar Juntos", desc: "Quebrando a rotina", note: "A Tática: Atividades cooperativas simples liberam ocitocina e criam cumplicidade sem exigir conversa profunda. Como fazer hoje: Convide ele para ajudar a preparar algo — cortar, misturar, escolher o tempero — e transforme em um momento leve. O Script: “Vem cá me ajudar? Quero fazer [receita] e quero sua companhia na cozinha.”" },
      { id: "h30", title: "As Histórias de Antes", desc: "Quebrando a rotina", note: "A Tática: Conhecer o passado do outro cria intimidade verdadeira. Perguntar sobre infância ou histórias antigas mostra interesse genuíno pela pessoa, não só pelo parceiro. Como fazer hoje: Faça uma pergunta sobre a infância ou adolescência dele que você nunca perguntou. O Script: “Me conta uma história da sua infância que você nunca me contou. Pode ser qualquer uma.”" },
      // Bloco 4 — Reacender o Desejo
      { id: "h31", title: "O Elogio Físico Inesperado", desc: "Reacender o desejo", note: "A Tática: Homens também têm inseguranças com o próprio corpo. Um elogio físico direto reacende a atração de forma imediata. Como fazer hoje: Escolha um momento em que ele estiver se vestindo ou chegando do banho e solte um elogio casual, sem esperar reação. O Script: “Essa camisa fica muito bem em você. Seus ombros ficam ótimos.”" },
      { id: "h32", title: "O Sinal de Interesse", desc: "Reacender o desejo", note: "A Tática: Demonstrar desejo sem cobrar resposta imediata cria um ambiente de segurança que favorece a aproximação natural. Como fazer hoje: Em um momento tranquilo, dê um sinal claro e gentil de que ainda existe atração — um olhar, um toque, uma palavra. O Script: “Você sabe que ainda te acho muito gato, né?”" },
      { id: "h33", title: "A Memória Íntima", desc: "Reacender o desejo", note: "A Tática: Relembrar momentos de paixão juntos ativa os mesmos circuitos neurais que aqueles momentos criaram — e desperta sentimentos semelhantes. Como fazer hoje: Traga uma memória de um momento intenso entre vocês, com detalhes, como se estivesse revisitando aquela cena. O Script: “Lembro de [momento específico] e ainda sinto algo quando penso nisso. Você também?”" },
      { id: "h34", title: "A Aproximação Física", desc: "Reacender o desejo", note: "A Tática: Proximidade física consistente, mesmo sem cobrança de intimidade, mantém o canal de conexão corporal aberto. Como fazer hoje: Durante o dia, crie momentos de contato físico leve e natural — sem agenda, sem expectativa. O Script: gesto silencioso — encoste, abrace, toque, sem precisar explicar." },
      { id: "h35", title: "A Abertura para o Toque", desc: "Reacender o desejo", note: "A Tática: Mostrar que você está aberta ao contato — com linguagem corporal, não com cobrança verbal — comunica desejo de forma segura. Como fazer hoje: Fique próxima fisicamente durante o dia e responda ao toque quando ele acontecer, mesmo que seja algo pequeno. O Script: sua reação ao toque já é o script." },
      { id: "h36", title: "O Olhar com Presença", desc: "Reacender o desejo", note: "A Tática: Um olhar prolongado e intencional comunica algo que palavras raramente conseguem — que você o vê de verdade. Como fazer hoje: Durante uma conversa comum, desacelere o olhar por alguns segundos. Deixe que ele perceba que você está presente. O Script: sorria levemente — não precise explicar." },
      { id: "h37", title: "O Elogio ao Corpo", desc: "Reacender o desejo", note: "A Tática: Reconhecimento do corpo do parceiro reforça a identidade física e sexual dentro da relação — não apenas a identidade de companheiro. Como fazer hoje: Elogie algo físico específico — as mãos, o jeito de andar, o sorriso — de forma genuína e direta. O Script: “Já te falei como você tem um sorriso que muda o ambiente? Porque tem.”" },
      { id: "h38", title: "O Ambiente de Intimidade", desc: "Reacender o desejo", note: "A Tática: Contexto influencia conexão. Um ambiente sem distrações, mesmo que simples, facilita a proximidade emocional e física. Como fazer hoje: Crie um momento de intenção — apague uma luz, coloque uma música, desligue o celular. O Script: “Quero só um momento calmo com você hoje. Só isso.”" },
      { id: "h39", title: "A Conversa Sobre Desejo", desc: "Reacender o desejo", note: "A Tática: Casais que falam abertamente sobre o que os atrai fortalecem a intimidade e reduzem inseguranças silenciosas. Como fazer hoje: Em um momento de leveza, abra uma conversa curiosa sobre o que cada um acha atraente no outro. O Script: “Posso te perguntar uma coisa? O que você ainda acha mais atraente em mim? Quero saber a resposta honesta.”" },
      { id: "h40", title: "O Convite com Leveza", desc: "Reacender o desejo", note: "A Tática: Convites gentis, sem cobrar resposta, têm muito mais chance de gerar proximidade do que pedidos carregados de expectativa. Como fazer hoje: Proponha um momento íntimo de forma leve, como um convite — não como uma demanda. O Script: “Hoje eu queria só ficar pertinho de você. Sem pressa. Você topa?”" },
      // Bloco 5 — Segurança Emocional
      { id: "h41", title: "A Abertura do Sentimento", desc: "Segurança emocional", note: "A Tática: Compartilhar emoções voluntariamente cria segurança para que o outro faça o mesmo — a vulnerabilidade abre portas que o silêncio fecha. Como fazer hoje: Compartilhe como você está se sentindo sobre algo da relação — de forma calma, sem cobrança. O Script: “Quero te contar uma coisa que estou sentindo, não para resolver nada, só para que você saiba.”" },
      { id: "h42", title: "A Pergunta Sobre o Que Falta", desc: "Segurança emocional", note: "A Tática: Perguntar diretamente o que o parceiro sente falta demonstra maturidade emocional e abre espaço para necessidades não ditas. Como fazer hoje: Em um momento de tranquilidade, faça a pergunta com genuína curiosidade — e ouça sem se defender. O Script: “Tem alguma coisa que você sente falta na nossa relação? Pode falar com honestidade.”" },
      { id: "h43", title: "O Espaço Seguro", desc: "Segurança emocional", note: "A Tática: Saber que pode falar sem ser julgado é uma das necessidades emocionais mais profundas. Criar esse espaço transforma a dinâmica da comunicação. Como fazer hoje: Diga explicitamente que ele pode falar sobre o que quiser sem medo de reação. O Script: “Você pode me contar qualquer coisa. Não vou reagir, só vou ouvir. Pode confiar nisso.”" },
      { id: "h44", title: "A Validação do Sentimento", desc: "Segurança emocional", note: "A Tática: Validar o sentimento do outro — mesmo sem concordar — reduz conflito e cria conexão emocional imediata. Como fazer hoje: Na próxima vez que ele expressar algo difícil, resista ao impulso de resolver ou discordar. Valide primeiro. O Script: “Faz sentido você se sentir assim. Eu entendo.”" },
      { id: "h45", title: "A Escuta Total", desc: "Segurança emocional", note: "A Tática: Ouvir sem interromper é um ato de respeito profundo. Poucos fazem isso — por isso quem faz é lembrado. Como fazer hoje: Escolha uma conversa e ouça até o final sem formular resposta enquanto ele fala. O Script: “Pode continuar. Estou ouvindo.”" },
      { id: "h46", title: "A Compreensão Ativa", desc: "Segurança emocional", note: "A Tática: Tentar entender a perspectiva do outro — mesmo que diferente da sua — reduz o impulso defensivo e abre espaço para diálogo. Como fazer hoje: Durante uma conversa difícil, antes de responder, pergunte para entender melhor. O Script: “Me ajuda a entender melhor. O que você quis dizer com isso?”" },
      { id: "h47", title: "O Cuidado com o Tom", desc: "Segurança emocional", note: "A Tática: Em momentos sensíveis, ironias e provocações — mesmo leves — podem destruir em segundos o que levou semanas para construir. Como fazer hoje: Preste atenção ao tom da sua voz quando o assunto for sensível. Antes de responder, respire. O Script: sem frase — o exercício é fazer uma pausa antes de falar." },
      { id: "h48", title: "O Pedido de Desculpas Real", desc: "Segurança emocional", note: "A Tática: Assumir responsabilidade com clareza — sem justificativas — é sinal de maturidade e gera mais respeito do que qualquer explicação. Como fazer hoje: Se há algo pelo qual você poderia pedir desculpas, faça — sem esperar que ele também faça. O Script: “Eu errei em [situação específica]. Me desculpa de verdade.”" },
      { id: "h49", title: "O Apoio nos Momentos Difíceis", desc: "Segurança emocional", note: "A Tática: Estar presente nos momentos de dificuldade do parceiro cria um vínculo de confiança que nenhum bom momento consegue substituir. Como fazer hoje: Se ele estiver passando por algo difícil, ofereça presença — não soluções. O Script: “Não precisa resolver nada agora. Só quero que você saiba que estou aqui.”" },
      { id: "h50", title: "A Reafirmação da Relação", desc: "Segurança emocional", note: "A Tática: Dizer em voz alta que você valoriza a relação — sem esperar uma crise para fazer isso — alimenta a segurança emocional de ambos. Como fazer hoje: Diga algo simples e verdadeiro sobre o que a relação significa para você. O Script: “Você sabe que eu valorizo muito o que a gente tem, né? Quero que você saiba isso.”" },
      // Bloco 6 — Continuidade da Conexão
      { id: "h51", title: "O Ritual Noturno", desc: "Continuidade", note: "A Tática: Rituais consistentes antes de dormir criam ancoragem emocional — um momento do dia que pertence só ao casal. Como fazer hoje: Proponha alguns minutos de conversa antes de dormir — sem celular, sem TV. O Script: “Antes de dormir, me conta uma coisa boa que aconteceu hoje. Qualquer coisa.”" },
      { id: "h52", title: "O Check-in Semanal", desc: "Continuidade", note: "A Tática: Perguntar regularmente como o outro está sentindo — sobre a relação, não só sobre o dia — demonstra cuidado emocional ativo. Como fazer hoje: Uma vez por semana, pergunte sobre como ele está se sentindo na relação. O Script: “Como você está se sentindo com a gente ultimamente? Estou curiosa.”" },
      { id: "h53", title: "O Encontro Semanal", desc: "Continuidade", note: "A Tática: Um momento reservado exclusivamente para os dois, mesmo que simples, sinaliza que a relação é prioridade dentro da rotina. Como fazer hoje: Proponha escolher um dia fixo na semana para um momento de vocês dois. O Script: “E se a gente escolhesse um dia por semana que fosse nosso? Sem cancelar.”" },
      { id: "h54", title: "O Carinho Consistente", desc: "Continuidade", note: "A Tática: A constância do carinho — mesmo que pequeno — cria mais segurança emocional do que um único gesto grandioso. Como fazer hoje: Escolha um gesto de carinho pequeno e repita-o hoje com intenção. O Script: o gesto repetido com presença é mais poderoso do que qualquer frase." },
      { id: "h55", title: "A Celebração Pequena", desc: "Continuidade", note: "A Tática: Celebrar pequenas vitórias juntos reforça a parceria e cria memória positiva associada ao estar junto. Como fazer hoje: Identifique algo que ele conquistou recentemente — por menor que seja — e celebre. O Script: “Eu fico tão orgulhosa de você por [conquista]. Isso não é qualquer coisa.”" },
      { id: "h56", title: "O Orgulho Verbalizado", desc: "Continuidade", note: "A Tática: Sentir que o parceiro tem orgulho de você é uma das necessidades emocionais mais profundas do ser humano — e raramente é dita em voz alta. Como fazer hoje: Diga algo específico pelo qual você sente orgulho dele — para ele, não para outras pessoas. O Script: “Quero que você saiba que tenho muito orgulho de você por [razão específica].”" },
      { id: "h57", title: "A Memória Compartilhada", desc: "Continuidade", note: "A Tática: Recordar momentos felizes juntos — com detalhes — fortalece o vínculo afetivo e lembra ao casal a história que construíram. Como fazer hoje: Traga uma lembrança específica e positiva de vocês dois em conversa. O Script: “Você lembra de [momento]? Ainda penso nisso com tanto carinho.”" },
      { id: "h58", title: "A Pequena Surpresa", desc: "Continuidade", note: "A Tática: Pequenos gestos inesperados comunicam que você pensou nele quando não precisava pensar. Isso tem mais impacto emocional do que presentes caros. Como fazer hoje: Faça algo pequeno e inesperado que você sabe que ele aprecia. O Script: “Vi isso e lembrei de você. Não é nada demais — só quis.”" },
      { id: "h59", title: "A Gratidão pela Relação", desc: "Continuidade", note: "A Tática: Gratidão dita em voz alta — pela relação, não só por ações — fortalece o sentimento de que o que foi construído tem valor. Como fazer hoje: Expresse gratidão genuína por algo que ele traz para a sua vida. O Script: “Sou muito grata por ter você. Não como obrigação — como escolha.”" },
      { id: "h60", title: "O Compromisso dos Dois", desc: "Continuidade", note: "A Tática: Relacionamentos que duram são aqueles em que ambos percebem que a relação é uma escolha diária — e decidem cuidar dela juntos. Como fazer hoje: Diga a ele, de forma simples e verdadeira, que você está comprometida a cuidar do que vocês têm. O Script: “Eu quero cuidar da gente. Não só quando é fácil. Sempre. E quero que a gente faça isso juntos.”" },
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
