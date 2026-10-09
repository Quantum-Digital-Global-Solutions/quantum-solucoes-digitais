import type { APIRoute } from 'astro';

/**
 * Sitemap com apenas as páginas implementadas nesta etapa.
 * Acrescentar as páginas internas aqui quando forem construídas.
 * Sem domínio definido (astro.config.mjs), o sitemap sai vazio — URLs de sitemap precisam ser absolutas.
 */
const PAGES = ['/'];

export const GET: APIRoute = ({ site }) => {
  const urls = site ? PAGES.map((p) => `  <url><loc>${new URL(p, site).href}</loc></url>`).join('\n') : '';
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
