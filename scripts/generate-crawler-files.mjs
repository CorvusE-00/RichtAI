import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const siteUrl = (process.env.VITE_SITE_URL || '').trim().replace(/\/+$/, '');
const publicDirectory = resolve(process.cwd(), 'public');

mkdirSync(publicDirectory, { recursive: true });

if (!siteUrl) {
  console.warn('VITE_SITE_URL is not set; keeping robots.txt without a sitemap URL.');
  process.exit(0);
}

const origin = new URL(siteUrl).origin;
const sitemapUrl = `${origin}/sitemap.xml`;

writeFileSync(
  resolve(publicDirectory, 'robots.txt'),
  `User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\n`,
);

writeFileSync(
  resolve(publicDirectory, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${origin}/</loc>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`,
);

console.log(`Generated crawler files for ${origin}`);
