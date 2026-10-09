/**
 * Conteúdo da Home — ordem e marcações de site-novo.md, fatos de briefing-quantum.md.
 *
 * Copy final de todas as seções: [INFORMAÇÃO A DEFINIR] (briefing §16).
 * Títulos marcados como "direção" são direções aprovadas, não slogans finais.
 * Textos de apoio [CONTEÚDO NOVO NECESSÁRIO] foram escritos apenas a partir
 * dos fatos do briefing — sem números, clientes, resultados ou promessas.
 */

import type { IconName } from './icons';

/* 1. HERO — briefing §2, §11, §13.1 */
export const hero = {
  eyebrow: 'Quantum Soluções Digitais',
  /** Direção aprovada [ADAPTAR]. */
  titleLead: 'Seu negócio pode vender mais.',
  titleTail: 'E tomar menos',
  titleAccent: 'do seu tempo.',
  /** [ADAPTAR] a partir das direções do briefing §2. */
  subtitle:
    'Unimos posicionamento digital estratégico e soluções inteligentes para ajudar seu negócio a conquistar clientes, simplificar processos e ganhar tempo.',
  /** Opções exibidas na interface ilustrativa da Hero. */
  options: ['Sites especializados', 'Posicionamento digital estratégico', 'Soluções digitais inteligentes'],
  secondary: { label: 'Conheça as nossas soluções', href: '/#solucoes' },
  /** Faixa da Hero (ds3). */
  band: [
    'Posicionamento Estratégico',
    'Experiências Digitais',
    'Soluções Inteligentes',
    'Automação de Processos',
    'Mais Oportunidades',
    'Mais Eficiência',
    'Design Estratégico',
    'Tecnologia Sob Medida',
  ],
};

/* 2. FAIXA DE IMPACTO — briefing §13.2 [USAR]; sem números ou promessas */
export const impact = {
  pill: 'Impacto',
  title: 'Seu negócio tem potencial para ir além.',
  text: 'Para conquistar os clientes certos, seu negócio precisa despertar desejo, transmitir confiança e facilitar a decisão de compra. Para crescer sem sobrecarregar sua rotina, precisa também de processos mais inteligentes.',
  items: [
    { text: 'Despertar desejo', icon: 'sparkles' },
    { text: 'Transmitir confiança e autoridade', icon: 'badge' },
    { text: 'Facilitar a decisão de compra', icon: 'check' },
    { text: 'Agilizar o atendimento', icon: 'message' },
    { text: 'Automatizar tarefas repetitivas', icon: 'gauge' },
    { text: 'Ganhar tempo para o que importa', icon: 'trending' },
  ] satisfies { text: string; icon: IconName }[],
};

/* 3. MANIFESTO — briefing §2, §8, §13.3 */
export const manifesto = {
  pill: 'Manifesto',
  text: 'A solução certa começa com as perguntas certas.',
  intro:
    'Antes de criar, buscamos entender seu negócio, seus clientes e o que está impedindo você de alcançar melhores resultados.',
  examples: [
    {
      title: 'Entender seu público',
      text: 'Quem são seus clientes, o que desejam e o que influencia suas decisões de compra?',
    },
    {
      title: 'Identificar oportunidades',
      text: 'O que pode ser melhorado para despertar desejo, comunicar valor e conquistar mais clientes?',
    },
    {
      title: 'Simplificar processos',
      text: 'Quais tarefas consomem tempo, atrasam o atendimento ou dificultam o crescimento do negócio?',
    },
    {
      title: 'Desenvolver a solução certa',
      text: 'Unimos estratégia, design e tecnologia para transformar essas necessidades em soluções digitais inteligentes.',
    },
  ],
};

/* 4. SOLUÇÕES */
export const solutions = {
  pill: 'Soluções',
  title: 'Tudo comunica.',
  accent: 'Sua marca precisa ser lembrada para ser escolhida.',
  text: 'Do primeiro contato à decisão de compra, cada experiência influencia a percepção do cliente. Criamos soluções digitais que conectam estratégia, comunicação e tecnologia para fortalecer sua presença e impulsionar seu negócio.',
  items: [
    {
      title: 'Sites especializados',
      tag: 'Presença estratégica',
      icon: 'window',
      text: 'Muito mais do que uma presença online. Desenvolvemos sites estratégicos que valorizam seu negócio, comunicam seus diferenciais e facilitam a decisão de compra.',
      href: '/#especializacao',
      cta: 'Conheça nossos sites',
    },
    {
      title: 'Posicionamento Digital Estratégico',
      tag: 'Comunicação integrada',
      icon: 'layers',
      text: 'Sua marca precisa transmitir a mesma mensagem em todos os pontos de contato. Criamos experiências digitais integradas que despertam desejo, fortalecem sua autoridade e tornam seu negócio mais memorável.',
      href: '/padronizacao-digital',
      cta: 'Conheça a solução',
    },
    {
      title: 'Soluções Digitais Personalizadas',
      tag: 'Tecnologia sob medida',
      icon: 'sparkles',
      text: 'Além de fortalecer sua presença digital, desenvolvemos ferramentas e automações sob medida para simplificar processos, agilizar o atendimento e devolver tempo ao seu negócio.',
      href: '/solucoes-sob-medida',
      cta: 'Explore as possibilidades',
    },
  ] satisfies { title: string; tag: string; icon: IconName; text: string; href: string; cta: string }[],
};

/* 5. ESPECIALIZAÇÃO — briefing §4 */
export const specialization = {
  pill: 'Especialização',
  title: 'Negócios diferentes exigem estratégias diferentes.',
  text: 'Cada segmento tem seu público, seus desafios e suas particularidades. Por isso, desenvolvemos experiências digitais que consideram o comportamento do cliente, valorizam os diferenciais de cada negócio e facilitam a decisão de compra.',
  segments: [
    {
      title: 'Hospedagem',
      icon: 'bed',
      audience: ['Pequenos hotéis', 'Pousadas', 'Imóveis de temporada', 'Airbnb'],
      // [CONTEÚDO NOVO NECESSÁRIO] problema típico e impacto buscado — sem dados de mercado.
      text: 'Uma hospedagem não vende apenas um lugar para dormir. Vende experiências, conforto e expectativas. Criamos sites que despertam o desejo de estar ali, valorizam cada diferencial e facilitam o caminho até a reserva.',
      href: '/sites-para-hospedagem',
      cta: 'Sites para hospedagem',
    },
    {
      title: 'Saúde',
      icon: 'stethoscope',
      audience: ['Médicos', 'Fisioterapeutas', 'Dentistas', 'Outros profissionais da saúde'],
      // [CONTEÚDO NOVO NECESSÁRIO] derivado do briefing §8 (autoridade).
      text: 'Na área da saúde, a confiança começa antes da primeira consulta. Desenvolvemos sites que comunicam profissionalismo, apresentam informações com clareza e facilitam o contato entre pacientes e profissionais.',
      href: '/sites-para-saude',
      cta: 'Sites para saúde',
    },
  ] satisfies { title: string; icon: IconName; audience: string[]; text: string; href: string; cta: string }[],
};

/* 6. SOLUÇÕES INTELIGENTES */
export const custom = {
  pill: 'Soluções inteligentes',
  title: 'Menos tarefas manuais.',
  accent: 'Mais tempo para o que importa.',
  text: 'Seu tempo é um dos recursos mais valiosos do seu negócio. Desenvolvemos soluções digitais personalizadas que automatizam tarefas, simplificam processos e tornam sua operação mais ágil e eficiente.',
  examples: [
    { title: 'Atendimento inteligente', text: 'Agilize respostas, organize solicitações e reduza o tempo de espera dos seus clientes.' },
    { title: 'Automação de processos', text: 'Elimine tarefas repetitivas e reduza o trabalho manual da sua equipe.' },
    { title: 'Sistemas de gestão', text: 'Centralize informações e simplifique o controle das operações do seu negócio.' },
    { title: 'Dashboards personalizados', text: 'Transforme dados em informações claras para acompanhar resultados e tomar decisões.' },
    { title: 'Ferramentas sob medida', text: 'Tenha funcionalidades desenvolvidas especificamente para as necessidades da sua operação.' },
    { title: 'Experiências digitais interativas', text: 'Facilite pedidos, agendamentos, cadastros e outras interações com seus clientes.' },
  ],
  more: { label: 'Explore as possibilidades', href: '/solucoes-sob-medida' },
};

/* 7. PORTFÓLIO — briefing §10; conteúdo em src/data/portfolio.ts */
export const portfolio = {
  pill: 'Portfólio',
  title: 'Soluções que fazem',
  accent: 'a diferença.',
  text: 'Cada projeto nasce de um desafio real. Conheça como transformamos necessidades de negócios em experiências digitais, ferramentas e soluções desenvolvidas com propósito.',
  feature: {
    pill: 'Estrutura dos cases',
    title: 'Problema, solução criada e impacto.',
    text: 'Os projetos da Quantum entram aqui assim que forem definidos, sempre nessa ordem: o que precisava ser resolvido, o que foi construído e o que mudou.',
    rows: ['Problema', 'Solução criada', 'Impacto'],
  },
};

/* 7.1 CASE REAL — Sítio Hotel (capturas e mensagens reais; sem dados inventados) */
export const portfolioCase = {
  pill: 'Case real · Sítio Hotel',
  title: 'Tecnologia que simplifica.',
  accent: 'Experiências que encantam.',
  text: [
    'Como tornar a experiência dos hóspedes mais prática e facilitar o dia a dia de um hotel?',
    'Para o Sítio Hotel, desenvolvemos duas soluções digitais integradas à sua identidade visual: um guia de informações para hóspedes e um cardápio interativo que simplifica a realização de pedidos.',
    'Tudo acessível pelo celular, com navegação intuitiva e sem necessidade de instalar aplicativos.',
  ],
  rows: [
    { term: 'Desafio', value: 'Facilitar o acesso às informações e aos serviços do hotel.' },
    { term: 'Soluções desenvolvidas', value: 'Guia Digital + Cardápio Interativo.' },
    { term: 'Experiência', value: 'Informações centralizadas e pedidos enviados pelo WhatsApp.' },
  ],
  cta: 'Quero uma solução personalizada',
  phones: [
    { src: '/images/guia.jpg', alt: 'Guia digital do Sítio Hotel & Eventos no celular, com boas-vindas, clima e acesso rápido', width: 1170, height: 2007 },
    { src: '/images/cardapio.jpg', alt: 'Cardápio interativo do Sítio Hotel & Eventos com o pedido sendo enviado pelo WhatsApp', width: 1170, height: 1983 },
  ],
  feedback: {
    title: 'Quem usa, aprova.',
    /** Capturas originais do WhatsApp; os textos dos alts reproduzem as mensagens. */
    shots: [
      { src: '/images/Feedback1.webp', alt: 'Mensagens da gestora no WhatsApp: "Que NOJO DE MARAVILHA! Até já vou fazer um pedido.", "Já pedi" e "Estamos amando isso!!!!!!!!!!"', width: 1226, height: 1283 },
      { src: '/images/Feedback2.jpg', alt: 'Mensagem da gestora no WhatsApp: "Bom dia! Cada vez mai " CHIQUE" esse aplicativo"', width: 1170, height: 323 },
      { src: '/images/Feedback3.jpg', alt: 'Mensagens da gestora no WhatsApp: "NOSSA!!!! MUITO BACANA!!!" e "Até os telefones úteis"', width: 1170, height: 657 },
    ],
  },
};

/* 8. DA NECESSIDADE À SOLUÇÃO — briefing §9 [USAR] */
export const process = {
  pill: 'Processo',
  title: 'Da necessidade à solução.',
  text: 'Cada projeto começa com uma análise do seu negócio. Unimos estratégia, comunicação, design e tecnologia em seis etapas para desenvolver soluções alinhadas aos seus objetivos.',
  steps: [
    { title: 'Diagnóstico', text: 'Entendemos seu negócio, seu público, seus desafios e as oportunidades de melhoria para identificar o que realmente precisa ser resolvido.' },
    { title: 'Estratégia', text: 'Definimos os objetivos, o posicionamento e a melhor abordagem para conectar as necessidades do negócio às expectativas dos seus clientes.' },
    { title: 'Estrutura e experiência', text: 'Organizamos informações, funcionalidades e jornadas para criar experiências intuitivas, que comunicam valor e facilitam a ação.' },
    { title: 'Design', text: 'Transformamos a estratégia em interfaces sofisticadas, consistentes com a identidade da sua marca e pensadas para despertar desejo e transmitir confiança.' },
    { title: 'Desenvolvimento', text: 'Utilizamos tecnologia para transformar o projeto em uma solução funcional, responsiva e eficiente, adequada às necessidades do seu negócio.' },
    { title: 'Entrega e evolução', text: 'Validamos, implementamos e entregamos a solução, deixando tudo preparado para ajustes e novas necessidades.' },
  ],
};

/* 9. POR QUE QUANTUM */
export const why = {
  pill: 'Por que Quantum',
  title: 'Três fundamentos.',
  accent: 'Em cada solução.',
  items: [
    { title: 'Estratégia', text: 'Não começamos pela ferramenta, mas pelas pessoas. Entendemos seu negócio, seu público e seus objetivos para desenvolver soluções que comunicam valor e atendem necessidades reais.' },
    { title: 'Sofisticação', text: 'Cada detalhe comunica. Criamos experiências digitais que unem estética, clareza e funcionalidade para valorizar sua marca, transmitir confiança e despertar desejo.' },
    { title: 'Tecnologia', text: 'Utilizamos tecnologia e inteligência artificial para desenvolver soluções inteligentes, simplificar processos e transformar necessidades em funcionalidades que fazem a diferença no dia a dia.' },
  ],
};

/* 10. SOBRE */
export const about = {
  pill: 'Sobre a Quantum',
  title: 'A tecnologia é o meio.',
  accent: 'A transformação é o propósito.',
  text: ['Unimos estratégia, design e tecnologia para criar experiências digitais que valorizam marcas, aproximam negócios de seus clientes e simplificam processos.'],
  facts: [
    { term: 'Empresa', value: 'Quantum Soluções Digitais' },
    { term: 'Atendimento', value: 'Remoto' },
    { term: 'Atuação', value: 'Brasil e exterior' },
    { term: 'Especialidades', value: 'Posicionamento · Design · Tecnologia' },
  ],
};

/* 11. CTA FINAL */
export const finalCta = {
  pill: 'Contato',
  title: 'Seu negócio pode ir mais longe.',
  accent: 'Vamos fazer isso acontecer?',
  text: 'Quer atrair mais clientes, fortalecer sua presença digital ou simplificar processos? Conte o que seu negócio precisa. Nós ajudamos a encontrar a solução.',
  cta: 'Vamos conversar',
  area: 'Atendimento remoto · Brasil e exterior',
};
