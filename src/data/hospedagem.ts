/**
 * Conteúdo da página /solucoes-para-hospedagem.
 * Fatos, preços, bônus e limites: briefing-quantum.md (§4.1).
 * Estrutura e ordem das seções: site-novo.md ("Página — Soluções para Hospedagem").
 *
 * Nada aqui pode ser inventado: sem números de mercado, clientes, resultados,
 * descontos, valores totais, fornecedores ou condições de domínio e vídeo.
 */

import type { IconName } from './icons';

export const PAGE = {
  path: '/solucoes-para-hospedagem',
  /** Canonical aprovado para esta página. */
  canonical: 'https://quantumsolucoesdigitais.com.br/solucoes-para-hospedagem',
  title: 'Soluções para hospedagem | Quantum Soluções Digitais',
  description:
    'Sites especializados, posicionamento digital estratégico e soluções personalizadas para hotéis, pousadas, imóveis de temporada e Airbnb.',
} as const;

/* 1. HERO */
export const hero = {
  eyebrow: 'Soluções para hospedagem',
  lines: ['Seu hóspede começa', 'a formar uma opinião'],
  accent: 'antes mesmo de chegar.',
  text: [
    'A presença digital do seu hotel, pousada, imóvel de temporada ou acomodação precisa despertar desejo, transmitir confiança e facilitar a decisão de reserva.',
    'Na Quantum, criamos soluções digitais pensadas para conectar o seu negócio às pessoas certas — do primeiro contato à reserva.',
  ],
  cta: 'Quero melhorar minha presença digital',
  complement: 'Sites especializados, posicionamento digital e soluções personalizadas para negócios de hospedagem.',
  /** Etapas ilustrativas da jornada — vêm do texto da seção 2. */
  steps: ['Encontra no Google', 'Avalia o site', 'Vê as redes sociais', 'Tira dúvidas', 'Chega à reserva'],
  /** Faixa da Hero: somente pontos de contato citados no briefing §4.1. */
  band: [
    'Site especializado',
    'Link da bio',
    'Capas de destaques',
    'Posts fixados',
    'Google Meu Negócio',
    'TripAdvisor',
    'Booking',
    'Hotéis.com',
    'Airbnb',
    'Automações de atendimento',
  ],
};

/* 2. IMPACTO DA PRESENÇA DIGITAL */
export const impact = {
  pill: 'Presença digital',
  title: 'Cada ponto de contato influencia a decisão.',
  intro: 'Quando alguém encontra sua acomodação online, não avalia apenas preço ou localização.',
  statement: 'Avalia o conjunto.',
  evaluated: [
    'As fotos.',
    'A forma como seus diferenciais são apresentados.',
    'A clareza das informações.',
    'A confiança que o site transmite.',
    'A presença nas redes sociais.',
    'O que encontra no Google.',
    'A facilidade para tirar dúvidas.',
    'A experiência até chegar à reserva.',
  ],
  outcomesTitle: 'Por isso, uma presença digital bem estruturada precisa ajudar o seu negócio a:',
  outcomes: [
    { title: 'Despertar desejo', text: 'Fazer com que a pessoa consiga se imaginar vivendo aquela experiência.', icon: 'sparkles' },
    { title: 'Transmitir confiança e autoridade', text: 'Mostrar profissionalismo e reduzir inseguranças antes da reserva.', icon: 'badge' },
    { title: 'Facilitar a decisão', text: 'Organizar as informações para que o hóspede encontre o que precisa sem esforço.', icon: 'check' },
    { title: 'Agilizar o atendimento', text: 'Diminuir atritos entre o interesse e a reserva.', icon: 'message' },
    { title: 'Automatizar tarefas repetitivas', text: 'Usar tecnologia onde ela realmente pode simplificar a operação.', icon: 'gauge' },
    {
      title: 'Ganhar tempo para o que importa',
      text: 'Porque sua equipe não deveria gastar energia com processos que poderiam funcionar de forma mais eficiente.',
      icon: 'trending',
    },
  ] satisfies { title: string; text: string; icon: IconName }[],
};

/* 3. AUTORIDADE — ROSELLE NUNES (briefing §4.1; sem cargo, sem títulos extras) */
export const authority = {
  pill: 'Experiência no setor',
  title: 'Soluções para hospedagem criadas por quem conhece a operação por dentro.',
  name: 'Roselle Nunes',
  image: {
    src: '/images/roselle-hospedagem.webp',
    alt: 'Retrato de Roselle Nunes',
    width: 1119,
    height: 1405,
  },
  /** Trechos entre marcadores [[ ]] são destacados na tela. */
  intro:
    'Sou Roselle Nunes, formada em Administração de Empresas pela [[UFRGS]], com trabalho de conclusão de curso voltado a hotéis de rede, experiência internacional no [[Four Seasons Sydney, na Austrália]], e [[mais de 10 anos de experiência na gestão de um pequeno hotel]].',
  statement: 'Isso muda a forma como pensamos uma solução digital.',
  lead: 'Porque, na hospedagem, não basta criar algo bonito.',
  text: 'É preciso entender quem você quer atrair, o que esse hóspede valoriza, quais dúvidas surgem antes da reserva, quais diferenciais precisam ficar claros e como os diferentes canais digitais influenciam a decisão.',
  closing: 'É a partir dessa visão que desenvolvemos nossas soluções.',
};

/* 4. TRÊS CAMINHOS */
export interface Path {
  id: string;
  n: string;
  icon: IconName;
  title: string;
  subtitle: string;
  paragraphs: string[];
  listLabel: string;
  list: string[];
  invest:
    | { kind: 'price'; installment: string; cash?: string; scope: string }
    | { kind: 'custom'; label: string; text: string };
  bonus: string[];
  more?: string;
  cta: string;
  featured?: boolean;
  badge?: string;
}

export const paths = {
  pill: 'Soluções',
  title: 'Escolha o que o seu negócio',
  accent: 'precisa agora.',
  text: 'Nem todo negócio precisa da mesma solução. Por isso, organizamos nossa atuação em três caminhos.',
  items: [
    {
      id: 'sites',
      n: '01',
      icon: 'window',
      title: 'Sites Especializados',
      subtitle: 'Um site pensado para conversar com o hóspede certo — e não apenas para estar online.',
      paragraphs: [
        'Antes de construir o site, entendemos quem o seu negócio precisa atingir, o que essas pessoas procuram, quais diferenciais precisam perceber e o que pode facilitar ou impedir a decisão de reserva.',
      ],
      listLabel: 'A partir disso, estruturamos o site para:',
      list: [
        'apresentar seus diferenciais com clareza;',
        'despertar desejo pela experiência;',
        'transmitir confiança;',
        'organizar as informações importantes;',
        'facilitar o contato e a reserva;',
        'funcionar bem no celular e em diferentes dispositivos;',
        'SEO para ampliar as possibilidades de descoberta orgânica;',
        'estrutura de conteúdo pensada para facilitar a leitura e compreensão por mecanismos de inteligência artificial.',
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
      subtitle: 'Seu negócio não existe em um único canal. Sua estratégia também não deveria.',
      paragraphs: [
        'Usamos o mesmo mapeamento estratégico realizado para o site e levamos essa lógica para os principais pontos de contato da sua presença digital.',
        'Assim, o hóspede encontra uma comunicação mais coerente quando passa pelo site, pelas redes sociais, pelo Google ou por outros canais importantes para o negócio.',
      ],
      listLabel: 'Pode incluir',
      list: [
        'site especializado;',
        'link da bio para redes sociais;',
        'capas para destaques;',
        '3 posts fixados para Instagram;',
        'organização dos principais pontos de contato digitais;',
        'otimização do Google Meu Negócio;',
        'otimização do TripAdvisor, quando aplicável.',
      ],
      invest: { kind: 'price', installment: '12x de R$ 182,86', cash: 'R$ 1.797,00', scope: 'Para projetos com site de uma página.' },
      bonus: ['1 ano de domínio e hospedagem grátis', '1 vídeo institucional da sua acomodação produzido a partir de fotos.'],
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
      subtitle: 'Existe algo no seu negócio que poderia funcionar melhor?',
      paragraphs: [
        'Nem sempre o problema está no site.',
        'Você pode já ter uma boa presença digital e ainda precisar melhorar um processo específico, organizar um canal de vendas, facilitar reservas, automatizar atendimento ou criar uma solução que ainda não existe no seu negócio.',
        'É aí que entramos. Analisamos a necessidade e desenvolvemos uma solução específica para ela.',
      ],
      listLabel: 'Alguns exemplos',
      list: [
        'implantação ou otimização de Booking;',
        'implantação ou otimização de Airbnb;',
        'implantação ou otimização de Hotéis.com;',
        'outras plataformas digitais de reserva;',
        'automações de atendimento;',
        'soluções utilizando inteligência artificial;',
        'ferramentas para agilizar reservas;',
        'cardápios digitais;',
        'dashboards;',
        'controles internos;',
        'sistemas simples de gestão;',
        'outras soluções digitais desenvolvidas de acordo com a necessidade.',
      ],
      invest: { kind: 'custom', label: 'Projeto sob medida', text: 'O investimento depende do problema, do escopo e da solução necessária.' },
      bonus: [],
      cta: 'Conte o que você precisa resolver',
    },
  ] satisfies Path[],
};

/* 5. JORNADA E OPERAÇÃO */
export const journey = {
  pill: 'Jornada e operação',
  title: 'Onde podemos ajudar a melhorar sua operação e sua presença digital',
  lead: 'Cada negócio tem gargalos diferentes.',
  cases: [
    'Em alguns casos, o maior problema está em atrair o hóspede certo.',
    'Em outros, em transmitir confiança.',
    'Em outros, em transformar interesse em reserva.',
  ],
  backstage:
    'E muitas vezes o problema está nos bastidores: atendimento lento, processos repetitivos, plataformas mal configuradas ou informações espalhadas.',
  timelineLabel: 'Podemos atuar em diferentes pontos da jornada:',
  stages: [
    {
      n: '01',
      title: 'Antes da decisão',
      lines: [
        'Como seu negócio aparece.',
        'Como seus diferenciais são comunicados.',
        'Como o hóspede encontra você.',
        'Como a experiência desperta interesse e confiança.',
      ],
    },
    {
      n: '02',
      title: 'Durante a decisão',
      lines: ['Clareza das informações.', 'Contato.', 'Dúvidas.', 'Comparação de opções.', 'Reserva.'],
      dark: true,
    },
    {
      n: '03',
      title: 'Na operação',
      lines: ['Atendimento.', 'Automação.', 'Organização de informações.', 'Processos internos.', 'Ferramentas que economizam tempo.'],
    },
  ],
};

/* 6. CTA FINAL */
export const finalCta = {
  pill: 'Contato',
  title: 'Sua presença digital deve trabalhar a favor do seu negócio.',
  text: 'Se você sente que o que aparece online ainda não representa a qualidade do que entrega, que seus canais não conversam entre si ou que existem processos que poderiam funcionar melhor, podemos começar por aí.',
  highlight: 'Conte para nós o que você gostaria de melhorar no seu negócio.',
  cta: 'Entre em contato com a Quantum',
  small: 'Vamos entender o cenário antes de indicar a solução.',
};
