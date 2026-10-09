/**
 * Dados institucionais centralizados.
 * Fonte factual: briefing-quantum.md. Nada aqui deve ser inventado:
 * campos marcados [INFORMAÇÃO A DEFINIR] ficam `null` até o cliente confirmar.
 *
 * Domínio do site: definido em astro.config.mjs (SITE_URL) — canonical,
 * og:url, sitemap.xml e robots.txt leem esse valor automaticamente.
 */

export const SITE = {
  name: 'Quantum Soluções Digitais',
  shortName: 'Quantum',
  lang: 'pt-BR',
  locale: 'pt_BR',
  /** [ADAPTAR] direção de mensagem do briefing §2 — não é slogan oficial. */
  tagline: 'Posicionamento digital estratégico e soluções inteligentes para o seu negócio.',
  /** Briefing §1 — fato confirmado. */
  serviceArea: 'Atendimento remoto · Brasil e exterior',
  /** SEO da Home — [CONTEÚDO NOVO NECESSÁRIO] revisar com o cliente. */
  seo: {
    title: 'Quantum Soluções Digitais — Estratégia, design e tecnologia para o seu negócio',
    description:
      'A Quantum resolve problemas de negócio com estratégia, design e tecnologia: sites especializados para hospedagem e saúde, soluções digitais sob medida e padronização digital.',
  },
} as const;

/**
 * Logo oficial. `light` é usada sobre fundos escuros (todo o site hoje).
 * `dark` é a versão antiga, mantida em public/brand/ e sem uso.
 */
export const LOGO = {
  dark: '/brand/logo-quantum-servicos-digitais.webp',
  /** logo.webp é preto sobre branco: nos fundos escuros é invertida via CSS (filter: invert(1)). */
  light: '/images/logo.webp',
  width: 1357,
  height: 399,
  alt: 'Quantum Soluções Digitais',
} as const;

/** Contatos — todos [INFORMAÇÃO A DEFINIR] (briefing §11 e §16). */
export const CONTACT = {
  /** Somente dígitos, com DDI. Ex.: '55DDNNNNNNNNN'. */
  whatsapp: '5555976038751' as string | null,
  whatsappMessage: 'Olá! Gostaria de conversar com a Quantum sobre uma necessidade do meu negócio.',
  email: 'quantumdigital.info@gmail.com' as string | null,
};

export const whatsappUrl = CONTACT.whatsapp
  ? `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`
  : null;

export const emailUrl = CONTACT.email ? `mailto:${CONTACT.email}` : null;

/** [INFORMAÇÃO A DEFINIR] Redes sociais. */
export const SOCIAL: { label: string; href: string }[] = [];

/**
 * CTA oficial (briefing §11). O destino `/contato` ainda não existe nesta etapa
 * (site-novo.md: destino provisório [INFORMAÇÃO A DEFINIR]) — trocar aqui se
 * a decisão for apontar para `/#contato` enquanto a página não for construída.
 */
export const CTA = {
  label: 'Entre em contato com a Quantum',
  /** [INFORMAÇÃO A DEFINIR] aprovar a versão curta do header. */
  short: 'Entre em contato',
  href: whatsappUrl ?? '/contato',
  /** Botão "Entre em contato" do topo: abre o e-mail em vez do WhatsApp. */
  headerHref: emailUrl ?? whatsappUrl ?? '/contato',
} as const;
