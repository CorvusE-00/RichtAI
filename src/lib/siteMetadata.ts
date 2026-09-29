export const siteMetadata = {
  imagePath: '/images/og-richtai.png',
  logoPath: '/images/mermaid-mark.png',
  themeColor: '#050d1a',
};

function configuredSiteUrl() {
  return (import.meta.env.VITE_SITE_URL || '').trim().replace(/\/+$/, '');
}

export function getSiteUrl() {
  const configuredUrl = configuredSiteUrl();
  if (configuredUrl) return configuredUrl;
  if (typeof window !== 'undefined') return window.location.origin;
  return '';
}

export function getAbsoluteSiteUrl(path: string) {
  const siteUrl = getSiteUrl();
  return siteUrl ? new URL(path, `${siteUrl}/`).toString() : path;
}

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function setCanonicalUrl(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.rel = 'canonical';
    document.head.appendChild(element);
  }
  element.href = url;
}

export function applyLanguageMetadata({
  title,
  description,
  language,
}: {
  title: string;
  description: string;
  language: 'tr' | 'en';
}) {
  const imageUrl = getAbsoluteSiteUrl(siteMetadata.imagePath);
  const pageUrl = getAbsoluteSiteUrl('/');
  const locale = language === 'tr' ? 'tr_TR' : 'en_US';

  document.documentElement.lang = language;
  document.title = title;
  setCanonicalUrl(pageUrl);

  setMeta('name', 'description', description);
  setMeta('name', 'theme-color', siteMetadata.themeColor);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:url', pageUrl);
  setMeta('property', 'og:image', imageUrl);
  setMeta('property', 'og:image:secure_url', imageUrl);
  setMeta('property', 'og:locale', locale);
  setMeta('property', 'og:locale:alternate', language === 'tr' ? 'en_US' : 'tr_TR');
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);
  setMeta('name', 'twitter:image', imageUrl);

  const structuredData = document.getElementById('richt-ai-structured-data');
  if (structuredData) {
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${pageUrl}#organization`,
          name: 'Richt Ai',
          url: pageUrl,
          logo: getAbsoluteSiteUrl(siteMetadata.logoPath),
          description,
          founder: { '@type': 'Person', name: 'Emre Kocaaliler' },
          knowsLanguage: ['tr', 'en'],
        },
        {
          '@type': 'WebSite',
          '@id': `${pageUrl}#website`,
          name: 'Richt Ai',
          url: pageUrl,
          description,
          publisher: { '@id': `${pageUrl}#organization` },
          inLanguage: language,
        },
      ],
    });
  }
}
