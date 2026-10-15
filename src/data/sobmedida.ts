/**
 * Conteúdo da página /solucoes-sob-medida.
 * Fatos e escopo: briefing-quantum.md (§5, §8, §9, §11). Estrutura: site-novo.md ("Página — Soluções Sob Medida").
 *
 * Os títulos das seis seções são os aprovados. Os textos de apoio foram escritos apenas a partir do briefing
 * (público, capacidades, exemplos, lógica "problema → solução" e processo): sem preços, prazos, números, clientes,
 * resultados ou promessas. Esta oferta não tem preço fixo e nunca é apresentada como catálogo fechado.
 */

export const PAGE = {
  path: '/solucoes-sob-medida',
  canonical: 'https://quantumsolucoesdigitais.com.br/solucoes-sob-medida',
  title: 'Soluções sob medida | Quantum Soluções Digitais',
  description:
    'Presença digital, jornada de venda, automações e soluções digitais desenvolvidas conforme a necessidade de empresas, profissionais e empreendedores.',
} as const;

/* 1. HERO */
export const hero = {
  eyebrow: 'Soluções sob medida',
  lines: ['Seu negócio merece', 'uma presença digital'],
  accent: 'à altura do seu potencial.',
  text: [
    'Cada negócio tem um momento, um público e um objetivo. Na Quantum, entendemos o seu cenário e desenvolvemos a solução digital adequada para ele.',
  ],
  cta: 'Quero conversar sobre o meu projeto',
  complement: 'Presença digital, jornada de venda, automações e soluções específicas, desenvolvidas conforme a sua necessidade.',
  /** Módulos da interface ilustrativa — capacidades do briefing §5. */
  modules: ['Presença digital', 'Jornada de venda', 'Automações', 'Pontos de contato'],
  /** Faixa da Hero: capacidades e exemplos do briefing §5. */
  band: [
    'Presença digital',
    'Jornada de venda',
    'Organização de funil',
    'Pontos de contato',
    'Automações',
    'Cardápios digitais',
    'Controles internos',
    'Sistemas simples de gestão',
    'Dashboards',
    'Áreas administrativas',
    'Formulários e fluxos personalizados',
  ],
};

/* 2. SEU MOMENTO */
export const moment = {
  pill: 'Seu momento',
  title: 'Onde você está hoje não limita onde pode chegar.',
  text: 'Seja para evoluir o que já existe ou para dar os primeiros passos no digital, tudo começa em entender onde você está.',
  paths: [
    {
      label: 'Já atuo no digital',
      title: 'Quero evoluir',
      lines: ['Melhorar o que já existe', 'Conectar canais e processos', 'Ganhar tempo com automações'],
    },
    {
      label: 'Estou começando',
      title: 'Quero estruturar',
      lines: ['Definir a minha presença digital', 'Organizar a jornada de quem me procura', 'Escolher o caminho certo para começar'],
    },
  ],
  audienceLabel: 'Para quem',
  audience: [
    'Empresas de outros segmentos',
    'Profissionais liberais',
    'Prestadores de serviços',
    'Especialistas',
    'Quem vende serviços',
    'Quem vende cursos ou produtos digitais',
    'Quem quer se posicionar no mercado digital',
  ],
};

/* 3. POSSIBILIDADES DIGITAIS */
export const possibilities = {
  pill: 'Possibilidades digitais',
  title: 'Sua necessidade define a solução.',
  accent: 'Não o contrário.',
  text: 'Não trabalhamos com pacotes fechados. Estruturamos o que o seu negócio precisa a partir do problema identificado.',
  items: [
    { title: 'Presença digital', text: 'Sites e canais que comunicam o seu negócio com clareza.' },
    { title: 'Jornada de venda', text: 'O caminho entre o primeiro contato e a decisão.' },
    { title: 'Organização de funil', text: 'Etapas claras para acompanhar quem demonstra interesse.' },
    { title: 'Pontos de contato', text: 'Canais coerentes entre si, do primeiro olhar ao atendimento.' },
    { title: 'Automações', text: 'Tarefas repetitivas resolvidas pela tecnologia.' },
    { title: 'Soluções específicas', text: 'Ferramentas desenvolvidas conforme o problema identificado.' },
  ],
  examplesLabel: 'Alguns exemplos',
  examples: [
    'Cardápios digitais',
    'Controles internos',
    'Sistemas simples de gestão',
    'Dashboards financeiros',
    'Áreas administrativas',
    'Formulários e fluxos personalizados',
    'Outras ferramentas, conforme a operação',
  ],
  note: 'São exemplos, não um catálogo fechado. Se a sua necessidade é outra, vamos entendê-la.',
};

/* 4. NOSSA ABORDAGEM */
export const approach = {
  pill: 'Nossa abordagem',
  title: 'Não começamos pela ferramenta.',
  accent: 'Começamos pelo seu objetivo.',
  from: 'Qual site você quer?',
  to: 'O que o seu negócio precisa fazer melhor?',
  lead: 'Antes de decidir qualquer coisa, buscamos entender:',
  points: [
    { n: '01', text: 'Quem o seu negócio precisa atingir' },
    { n: '02', text: 'Qual ação essas pessoas devem tomar' },
    { n: '03', text: 'Quais pontos da presença ou da operação precisam melhorar' },
  ],
  closing: 'Só depois a ferramenta é definida.',
};

/* 5. COMO TRABALHAMOS — processo completo vive na Home (#processo) */
export const process = {
  pill: 'Como trabalhamos',
  title: 'Uma boa solução começa com uma boa conversa.',
  steps: [
    { n: '01', title: 'Conversa', text: 'Entendemos o seu negócio, o seu público e o que precisa melhorar.' },
    { n: '02', title: 'Solução', text: 'Definimos o caminho mais adequado, sem partir de uma ferramenta pronta.' },
    { n: '03', title: 'Construção e evolução', text: 'Desenvolvemos, validamos a entrega e deixamos tudo preparado para novas necessidades.' },
  ],
  link: { label: 'Conheça o processo completo', href: '/#processo' },
};

/* 6. CTA FINAL */
export const finalCta = {
  pill: 'Contato',
  title: 'Você traz a ideia. Nós ajudamos a transformá-la em realidade digital.',
  text: 'Não é preciso saber qual solução procurar nem ter tudo definido. Conte o que você tem em mente, e começamos por aí.',
  highlight: 'Conte o que você gostaria de construir ou melhorar.',
  cta: 'Entre em contato com a Quantum',
  small: 'Vamos entender o cenário antes de indicar a solução.',
};
