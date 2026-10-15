/**
 * Conteúdo da página /solucoes-para-saude.
 * Fatos, preços, bônus e limites: briefing-quantum.md (§4.2).
 * Estrutura e ordem das seções: site-novo.md ("Página — Soluções para Saúde").
 *
 * Página institucional e profissional: sem promessas clínicas ou de resultado, sem
 * depoimentos, antes/depois, especialidades, conselhos profissionais ou claims de tratamento.
 * Doctoralia e vídeo institucional NÃO fazem parte da oferta de Saúde.
 */

import type { IconName } from './icons';
import type { Path } from './hospedagem';

export const PAGE = {
  path: '/solucoes-para-saude',
  canonical: 'https://quantumsolucoesdigitais.com.br/solucoes-para-saude',
  title: 'Soluções para saúde | Quantum Soluções Digitais',
  description:
    'Sites especializados, posicionamento digital estratégico e soluções personalizadas para médicos, fisioterapeutas, dentistas e outros profissionais da saúde.',
} as const;

/* 1. HERO */
export const hero = {
  eyebrow: 'Soluções para saúde',
  lines: ['Sua presença digital', 'começa a construir confiança'],
  accentLines: ['antes mesmo', 'do primeiro contato.'],
  text: [
    'Quando um paciente encontra você online, ele precisa entender com clareza quem você é, como pode ajudá-lo e qual é o próximo passo para entrar em contato ou agendar.',
    'Na Quantum, criamos soluções digitais para profissionais da saúde que querem transmitir mais confiança, fortalecer seu posicionamento e tornar a jornada do paciente mais simples.',
  ],
  cta: 'Quero melhorar minha presença digital',
  complement: 'Sites especializados, posicionamento digital e soluções personalizadas para profissionais da saúde.',
  /** Interface ilustrativa: o que o paciente precisa perceber. Vem do texto da seção 2. */
  steps: ['Atuação explicada com clareza', 'Informações organizadas', 'Contato e agendamento'],
  /** Faixa da Hero: somente itens aprovados no briefing §4.2. */
  band: [
    'Site especializado',
    'Link da bio',
    'Capas de destaques',
    'Posts fixados',
    'Google Meu Negócio',
    'Formulários personalizados',
    'Acompanhamento de pacientes',
    'Automações de atendimento',
    'Organização de processos',
  ],
};

/* 2. PERCEPÇÃO E CONFIANÇA */
export const perception = {
  pill: 'Percepção e confiança',
  title: 'Antes de entrar em contato, o paciente já está formando uma percepção.',
  lines: [
    'Ele observa como você se apresenta.',
    'Se entende com clareza sua atuação.',
    'Se encontra as informações que procura.',
    'Se sua presença digital parece profissional.',
    'O que aparece quando pesquisa seu nome ou seu serviço no Google.',
    'Se é fácil encontrar contato, agendamento ou o próximo passo.',
  ],
  closing: 'E, principalmente, se aquilo que vê transmite confiança suficiente para continuar.',
  goals: [
    { title: 'Transmitir confiança', text: 'Apresentar seu trabalho de forma profissional e coerente.', icon: 'badge' },
    {
      title: 'Comunicar sua atuação com clareza',
      text: 'Facilitar a compreensão sobre como você trabalha e para quem seu atendimento é indicado.',
      icon: 'message',
    },
    {
      title: 'Fortalecer sua autoridade profissional',
      text: 'Criar uma presença digital compatível com a qualidade do trabalho que você entrega.',
      icon: 'trending',
    },
    { title: 'Facilitar o contato', text: 'Diminuir atritos entre a busca por informação e o primeiro atendimento.', icon: 'mail' },
    {
      title: 'Organizar a jornada do paciente',
      text: 'Deixar mais claro o caminho entre descobrir seu trabalho, entender sua atuação e entrar em contato.',
      icon: 'compass',
    },
    {
      title: 'Ganhar tempo com processos mais eficientes',
      text: 'Usar tecnologia para reduzir tarefas repetitivas e simplificar a rotina.',
      icon: 'gauge',
    },
  ] satisfies { title: string; text: string; icon: IconName }[],
};

/* 3. TECNOLOGIA SEM PERDER O LADO HUMANO */
export const human = {
  pill: 'Tecnologia e cuidado',
  title: 'Tecnologia sem perder',
  accent: 'o lado humano.',
  text: [
    'Uma boa solução digital para a área da saúde não deve transformar o atendimento em uma experiência fria ou excessivamente comercial.',
    'Ela deve facilitar o acesso à informação, transmitir profissionalismo e tornar a experiência mais simples para quem procura atendimento.',
    'Ao mesmo tempo, precisa fazer sentido para a rotina de quem atende.',
  ],
  bridge: 'Por isso, pensamos cada projeto considerando os dois lados:',
  sides: [
    { text: 'quem está procurando ajuda', icon: 'compass' },
    { text: 'quem precisa atender, organizar e acompanhar.', icon: 'layers' },
  ] satisfies { text: string; icon: IconName }[],
  join: 'e',
};

/* 4. TRÊS CAMINHOS */
export const paths = {
  pill: 'Soluções',
  title: 'Escolha o que o seu trabalho',
  accent: 'precisa agora.',
  text: 'Nem todo profissional da saúde precisa da mesma solução. Por isso, organizamos nossa atuação em três caminhos.',
  items: [
    {
      id: 'sites',
      n: '01',
      icon: 'window',
      title: 'Sites Especializados',
      subtitle: 'Um site pensado para transmitir confiança, explicar sua atuação e facilitar o próximo passo.',
      paragraphs: [
        'Antes de construir o site, entendemos quem você precisa atingir, quais informações essas pessoas procuram, quais dúvidas costumam surgir e o que precisa ficar claro antes do primeiro contato.',
      ],
      listLabel: 'A partir disso, estruturamos o site para:',
      list: [
        'apresentar sua atuação com clareza;',
        'transmitir profissionalismo e confiança;',
        'organizar informações importantes;',
        'facilitar contato ou agendamento;',
        'funcionar bem no celular e em diferentes dispositivos;',
        'utilizar boas práticas de SEO para ampliar as possibilidades de descoberta orgânica;',
        'estruturar conteúdo de forma clara para facilitar a leitura e compreensão por mecanismos de inteligência artificial.',
      ],
      invest: { kind: 'price', installment: '12x de R$ 102,00', cash: 'R$ 997,00', scope: 'Para sites de uma página.' },
      bonus: ['1 ano de domínio e hospedagem grátis.'],
      more: 'Para projetos com mais páginas, consulte uma proposta personalizada.',
      cta: 'Quero meu site especializado',
    },
    {
      id: 'posicionamento',
      n: '02',
      icon: 'layers',
      title: 'Posicionamento Digital Estratégico',
      subtitle: 'Sua autoridade não é construída em um único canal.',
      paragraphs: [
        'Usamos o mesmo mapeamento estratégico realizado para o site e aplicamos essa lógica aos principais pontos de contato da sua presença digital.',
        'Assim, quem encontra você no site, nas redes sociais ou no Google percebe uma comunicação mais coerente, profissional e alinhada.',
      ],
      listLabel: 'Pode incluir',
      list: [
        'site especializado;',
        'link da bio para redes sociais;',
        'capas para destaques;',
        '3 posts fixados para Instagram;',
        'organização dos principais pontos de contato digitais;',
        'otimização do Google Meu Negócio.',
      ],
      invest: { kind: 'price', installment: '12x de R$ 182,86', cash: 'R$ 1.797,00', scope: 'Para projetos com site de uma página.' },
      bonus: ['1 ano de domínio e hospedagem grátis.'],
      more: 'Para projetos com mais páginas, consulte uma proposta personalizada.',
      cta: 'Quero fortalecer meu posicionamento',
      featured: true,
      badge: 'Mais escolhido',
    },
    {
      id: 'personalizadas',
      n: '03',
      icon: 'sparkles',
      title: 'Soluções Digitais Personalizadas',
      subtitle: 'Existe algum ponto da sua rotina que poderia funcionar melhor?',
      paragraphs: [
        'Nem sempre o problema está na presença digital.',
        'Você pode já ter um bom site e boas redes sociais, mas ainda perder tempo com processos manuais, informações desorganizadas ou tarefas repetitivas.',
        'É aí que entramos. Analisamos a necessidade e desenvolvemos uma solução específica para ela.',
      ],
      listLabel: 'Alguns exemplos',
      list: [
        'sistemas simples para acompanhamento de pacientes;',
        'controle de evolução ou reabilitação;',
        'formulários personalizados;',
        'organização de informações;',
        'dashboards;',
        'áreas administrativas;',
        'automações de atendimento;',
        'organização de processos;',
        'soluções utilizando inteligência artificial;',
        'outras ferramentas desenvolvidas conforme a necessidade.',
      ],
      invest: { kind: 'custom', label: 'Projeto sob medida', text: 'O investimento depende do problema, do escopo e da solução necessária.' },
      bonus: [],
      cta: 'Conte o que você precisa resolver',
    },
  ] satisfies Path[],
};

/* 5. JORNADA DO PACIENTE */
export const journey = {
  pill: 'Jornada do paciente',
  title: 'Onde podemos tornar a jornada do paciente mais clara e eficiente',
  lead: 'Cada profissional ou clínica tem necessidades diferentes.',
  cases: [
    'Em alguns casos, o problema está em ser encontrado.',
    'Em outros, em transmitir confiança.',
    'Em outros, em facilitar o contato.',
  ],
  backstage: 'E muitas vezes o maior gargalo está na própria rotina de atendimento.',
  stagesLabel: 'Podemos atuar em diferentes momentos:',
  stages: [
    {
      n: '01',
      title: 'Antes do contato',
      lines: ['Como você é encontrado.', 'Como sua atuação é apresentada.', 'Clareza das informações.', 'Confiança.', 'Autoridade percebida.'],
    },
    {
      n: '02',
      title: 'Na decisão',
      lines: ['Dúvidas.', 'Informações sobre atendimento.', 'Facilidade de contato.', 'Agendamento.', 'Próximo passo claro.'],
      dark: true,
    },
    {
      n: '03',
      title: 'Na rotina',
      lines: ['Atendimento.', 'Formulários.', 'Acompanhamento.', 'Organização de informações.', 'Automações.', 'Processos que consomem tempo.'],
    },
  ],
};

/* 6. CTA FINAL */
export const finalCta = {
  pill: 'Contato',
  title: 'Sua presença digital deve transmitir a qualidade do seu trabalho.',
  text: 'Se o que aparece online ainda não representa a forma como você trabalha ou se existem processos que poderiam ser mais simples, podemos começar entendendo onde está o problema.',
  highlight: 'Conte para nós o que você gostaria de melhorar.',
  cta: 'Entre em contato com a Quantum',
  small: 'Vamos entender o cenário antes de indicar a solução.',
};
