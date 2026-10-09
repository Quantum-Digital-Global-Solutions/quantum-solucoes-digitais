/**
 * Portfólio — [INFORMAÇÃO A DEFINIR] projetos específicos (briefing §10 e §16).
 *
 * Não inventar cases, clientes, resultados, métricas, nomes ou imagens.
 * Enquanto `projects` estiver vazio, a Home exibe o componente de portfólio
 * do ds2 com placeholders visuais claramente identificados ("Em breve").
 *
 * Lógica obrigatória de cada case: problema → solução criada → impacto.
 * Imagens: colocar em public/assets/images/portfolio/ e referenciar abaixo.
 */

export interface Project {
  slug: string;
  title: string;
  /** Ex.: 'Site para hospedagem', 'Solução sob medida', 'Padronização digital'. */
  category: string;
  image: { src: string; alt: string };
  problem: string;
  solution: string;
  /** Apenas o que o cliente confirmar; sem números não verificados. */
  impact: string;
  /** Exibe o projeto no bloco de destaque. */
  featured?: boolean;
}

export const projects: Project[] = [];
