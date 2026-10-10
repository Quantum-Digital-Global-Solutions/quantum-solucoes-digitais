/**
 * Navegação principal — site-novo.md, "Navegação principal".
 * Fonte única para o menu desktop, o menu mobile e o rodapé.
 * As páginas de solução ainda não existem nesta etapa; os destinos já
 * seguem as URLs previstas.
 */

import { CTA } from './site';

export interface NavLink {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavLink[];
}

export const SOLUTION_LINKS: NavLink[] = [
  { label: 'Sites para hospedagem', href: '/sites-para-hospedagem' },
  { label: 'Sites para saúde', href: '/sites-para-saude' },
  { label: 'Soluções sob medida', href: '/solucoes-sob-medida' },
];

export const NAV: NavItem[] = [
  { label: 'Soluções', children: SOLUTION_LINKS },
  // Fase 2: trocar por '/portfolio' quando houver cases reais.
  { label: 'Portfólio', href: '/#portfolio' },
  { label: 'Processo', href: '/#processo' },
  { label: 'Sobre', href: '/#sobre' },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: 'Portfólio', href: '/#portfolio' },
  { label: 'Processo', href: '/#processo' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Contato', href: CTA.headerHref },
];
