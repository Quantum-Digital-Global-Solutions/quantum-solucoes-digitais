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
  titleLead: 'Seu negócio não precisa de mais uma ferramenta.',
  titleTail: 'Precisa da',
  titleAccent: 'solução certa.',
  /** [ADAPTAR] a partir das direções do briefing §2. */
  subtitle:
    'Soluções digitais especializadas, com design sofisticado e tecnologia sob medida para a realidade do seu negócio.',
  secondary: { label: 'Conheça as soluções', href: '/#solucoes' },
  /** Faixa da Hero (ds3): apenas frentes reais da Quantum. */
  band: [
    'Sites para hospedagem',
    'Sites para saúde',
    'Soluções sob medida',
    'Padronização digital',
    'Estratégia',
    'Design',
    'Tecnologia',
    'Atendimento remoto',
  ],
};

/* 2. FAIXA DE IMPACTO — briefing §13.2 [USAR]; sem números ou promessas */
export const impact = {
  pill: 'Impacto',
  title: 'O resultado vem antes da ferramenta.',
  text: 'Cada solução parte de um objetivo de negócio. Estes são os tipos de impacto que procuramos gerar.',
  items: [
    { lead: 'Mais', word: 'eficiência', icon: 'gauge' },
    { lead: 'Mais', word: 'autoridade', icon: 'badge' },
    { lead: 'Melhor', word: 'experiência', icon: 'sparkles' },
    { lead: 'Mais', word: 'oportunidades', icon: 'trending' },
    { lead: 'Mais', word: 'organização', icon: 'grid' },
    { lead: 'Melhor', word: 'presença digital', icon: 'globe' },
  ] satisfies { lead: string; word: string; icon: IconName }[],
};

/* 3. MANIFESTO — briefing §2, §8, §13.3 */
export const manifesto = {
  pill: 'Manifesto',
  /** Direção aprovada [ADAPTAR]. */
  text: 'Antes de pensar no site, sistema ou dashboard, entendemos o que precisa ser resolvido.',
  /** Exemplos de lógica do briefing §8, encurtados [ADAPTAR]. */
  examples: [
    'Um hotel pode precisar de um site.',
    'Um profissional de saúde pode precisar de uma presença digital com mais autoridade.',
    'Uma empresa pode precisar de um dashboard.',
    'Um negócio pode descobrir que precisa de um processo digital interno, e não de um novo site.',
  ],
};

/* 4. TRÊS CAMINHOS — briefing §4, §5, §6 */
export const solutions = {
  pill: 'Soluções',
  title: 'Três caminhos.',
  accent: 'Uma mesma lógica.',
  text: 'Cada caminho começa pelo problema a ser resolvido, e não pela ferramenta.',
  items: [
    {
      title: 'Sites especializados',
      tag: 'Hospedagem · Saúde',
      icon: 'window',
      // [CONTEÚDO NOVO NECESSÁRIO] texto derivado do briefing §4.
      text: 'Hospedagem e saúde falam com públicos específicos. Criamos sites pensados para o contexto de cada segmento, e não sites genéricos.',
      href: '/#especializacao',
      cta: 'Ver segmentos',
    },
    {
      title: 'Soluções digitais sob medida',
      tag: 'Sem catálogo fechado',
      icon: 'sparkles',
      // [CONTEÚDO NOVO NECESSÁRIO] texto derivado do briefing §5.
      text: 'Quando a operação pede uma ferramenta própria, partimos da necessidade do negócio para desenvolver a solução digital adequada.',
      href: '/solucoes-sob-medida',
      cta: 'Saiba mais',
    },
    {
      title: 'Posicionamento e padronização digital',
      tag: 'A partir da identidade existente',
      icon: 'layers',
      // [CONTEÚDO NOVO NECESSÁRIO] texto derivado do briefing §6.
      text: 'Quando a presença digital perde coerência, organizamos a identidade existente para o ambiente digital: cores, tipografia, componentes e padrões.',
      href: '/padronizacao-digital',
      cta: 'Saiba mais',
    },
  ] satisfies { title: string; tag: string; icon: IconName; text: string; href: string; cta: string }[],
};

/* 5. ESPECIALIZAÇÃO — briefing §4 */
export const specialization = {
  pill: 'Especialização',
  title: 'Sites pensados para o contexto de cada segmento.',
  text: 'Neste momento, a Quantum tem dois focos principais na criação de sites. Cada um com público, linguagem e necessidades próprias.',
  segments: [
    {
      title: 'Hospedagem',
      icon: 'bed',
      audience: ['Pequenos hotéis', 'Pousadas', 'Imóveis de temporada', 'Airbnb'],
      // [CONTEÚDO NOVO NECESSÁRIO] problema típico e impacto buscado — sem dados de mercado.
      text: 'Para quem recebe hóspedes, a presença digital faz parte da experiência. O site precisa apresentar o lugar com clareza e transmitir confiança.',
      href: '/sites-para-hospedagem',
      cta: 'Sites para hospedagem',
    },
    {
      title: 'Saúde',
      icon: 'stethoscope',
      audience: ['Médicos', 'Fisioterapeutas', 'Dentistas', 'Outros profissionais da saúde'],
      // [CONTEÚDO NOVO NECESSÁRIO] derivado do briefing §8 (autoridade).
      text: 'Para profissionais da saúde, a presença digital precisa transmitir autoridade e clareza, de forma adequada ao contexto da área.',
      href: '/sites-para-saude',
      cta: 'Sites para saúde',
    },
  ] satisfies { title: string; icon: IconName; audience: string[]; text: string; href: string; cta: string }[],
};

/* 6. SOB MEDIDA — briefing §5 */
export const custom = {
  pill: 'Sob medida',
  /** Direção aprovada [ADAPTAR]. */
  title: 'E se o problema',
  accent: 'não for o site?',
  /** [USAR] briefing §5. */
  text: 'A Quantum não trabalha com um catálogo fechado de sistemas. Você apresenta a necessidade, e a Quantum desenvolve a solução digital adequada para aquela demanda.',
  note: 'Exemplos — não um catálogo fechado',
  /** Seleção curta [USAR]; a lista completa vive em /solucoes-sob-medida. */
  examples: [
    'Cardápios digitais',
    'Controles internos',
    'Sistemas simples de gestão',
    'Acompanhamento de pacientes',
    'Dashboards financeiros',
    'Formulários e fluxos personalizados',
  ],
  more: { label: 'Soluções sob medida', href: '/solucoes-sob-medida' },
};

/* 7. PORTFÓLIO — briefing §10; conteúdo em src/data/portfolio.ts */
export const portfolio = {
  pill: 'Portfólio',
  /** Direção aprovada [ADAPTAR]. */
  title: 'Projetos pensados',
  accent: 'para negócios reais.',
  text: 'Cada projeto será apresentado a partir do problema do negócio, da solução criada e do impacto gerado.',
  feature: {
    pill: 'Estrutura dos cases',
    title: 'Problema, solução criada e impacto.',
    text: 'Os projetos da Quantum entram aqui assim que forem definidos, sempre nessa ordem: o que precisava ser resolvido, o que foi construído e o que mudou.',
    rows: ['Problema', 'Solução criada', 'Impacto'],
  },
};

/* 8. DA NECESSIDADE À SOLUÇÃO — briefing §9 [USAR] */
export const process = {
  pill: 'Processo',
  title: 'Da necessidade à solução.',
  text: 'Seis etapas para entender o problema antes de definir qualquer ferramenta.',
  steps: [
    { title: 'Diagnóstico', text: 'Entender o negócio, a necessidade, o público e o problema que precisa ser resolvido.' },
    { title: 'Estratégia', text: 'Definir qual é a solução digital mais adequada para o caso, sem partir de uma ferramenta pronta.' },
    { title: 'Estrutura e experiência', text: 'Organizar arquitetura, fluxos, conteúdos, funcionalidades e jornada do usuário.' },
    { title: 'Design', text: 'Transformar a estratégia em uma interface visual sofisticada, consistente e alinhada à identidade da empresa.' },
    { title: 'Desenvolvimento', text: 'Construir o site, sistema ou solução digital com foco em performance, usabilidade e manutenção.' },
    { title: 'Entrega e evolução', text: 'Publicar, validar o funcionamento e deixar o projeto preparado para ajustes e novas necessidades ao longo do tempo.' },
  ],
};

/* 9. POR QUE QUANTUM — briefing §2, §13.9 */
export const why = {
  pill: 'Por que Quantum',
  title: 'Três fundamentos.',
  accent: 'Em cada solução.',
  items: [
    // [CONTEÚDO NOVO NECESSÁRIO] apoio derivado do briefing §4 — sem credenciais ou números.
    { title: 'Especialização', text: 'Entender o contexto de cada segmento e de cada negócio antes de propor qualquer solução.' },
    // derivado do briefing §9.4
    { title: 'Sofisticação', text: 'Interfaces com design cuidadoso, consistente e alinhado à identidade de cada empresa.' },
    // derivado do briefing §9.5
    { title: 'Tecnologia', text: 'Soluções construídas com foco em performance, usabilidade e manutenção.' },
  ],
};

/* 10. SOBRE — briefing §1, §2. Texto institucional final: [INFORMAÇÃO A DEFINIR] */
export const about = {
  pill: 'Sobre a Quantum',
  title: 'Não vendemos ferramentas isoladas.',
  /** [USAR] princípio central de posicionamento (briefing §2). */
  text: 'A Quantum Soluções Digitais resolve problemas de negócio com estratégia, design e tecnologia, sempre a partir da necessidade de cada cliente.',
  facts: [
    { term: 'Empresa', value: 'Quantum Soluções Digitais' },
    { term: 'Atendimento', value: 'Remoto' },
    { term: 'Atuação', value: 'Brasil e exterior' },
    { term: 'Frentes', value: 'Sites · Sob medida · Padronização' },
  ],
};

/* 11. CTA FINAL — briefing §11, §13.11 */
export const finalCta = {
  pill: 'Contato',
  /** Direção aprovada [ADAPTAR]. */
  title: 'Existe alguma coisa no seu negócio que poderia funcionar melhor com a solução digital certa?',
  /** [ADAPTAR] objetivo do CTA (briefing §11). */
  text: 'Conte qual é a necessidade do seu negócio. Não é preciso saber, antes, qual solução procurar.',
};
