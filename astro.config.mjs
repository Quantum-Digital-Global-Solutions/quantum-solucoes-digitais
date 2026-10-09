// @ts-check
import { defineConfig } from 'astro/config';

/**
 * [INFORMAÇÃO A DEFINIR] Domínio final do site (site-novo.md › Diretrizes de SEO).
 * Ex.: 'https://www.seudominio.com.br'
 * Ponto único de configuração: canonical, og:url, sitemap.xml e robots.txt
 * passam a usar este valor automaticamente. Enquanto for `undefined`,
 * nenhum canonical é emitido (evita canonical incorreto).
 */
const SITE_URL = undefined;

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
});
