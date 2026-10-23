export const siteMetadata = {
  siteUrl: 'https://getrichtai.com',
  imagePath: '/images/og-richtai.png',
  logoPath: '/images/mermaid-mark-transparent.png',
  themeColor: '#121416',
};

function configuredSiteUrl() {
  return (import.meta.env.VITE_SITE_URL || '').trim().replace(/\/+$/, '');
}

export function getSiteUrl() {
  const configuredUrl = configuredSiteUrl();
  if (configuredUrl) return configuredUrl;
  if (typeof window !== 'undefined') return window.location.origin;
  return siteMetadata.siteUrl;
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
  pathname = '/',
  structuredDataDescription = description,
}: {
  title: string;
  description: string;
  language: 'tr' | 'en';
  pathname?: string;
  structuredDataDescription?: string;
}) {
  const imageUrl = getAbsoluteSiteUrl(siteMetadata.imagePath);
  const siteRootUrl = getAbsoluteSiteUrl('/');
  const pageUrl = getAbsoluteSiteUrl(pathname);
  const locale = language === 'tr' ? 'tr_TR' : 'en_US';
  const imageAlt = language === 'tr'
    ? 'Richt AI — diş klinikleri için yapay zekâ hasta iletişim asistanı'
    : 'Richt AI — AI patient communication assistant for dental clinics';

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
  setMeta('property', 'og:image:alt', imageAlt);
  setMeta('property', 'og:locale', locale);
  setMeta('property', 'og:locale:alternate', language === 'tr' ? 'en_US' : 'tr_TR');
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);
  setMeta('name', 'twitter:image', imageUrl);
  setMeta('name', 'twitter:image:alt', imageAlt);

  const structuredData = document.getElementById('richt-ai-structured-data');
  if (structuredData) {
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${siteRootUrl}#organization`,
          name: 'Richt AI',
          url: siteRootUrl,
          logo: getAbsoluteSiteUrl(siteMetadata.logoPath),
          description: structuredDataDescription,
          founder: { '@type': 'Person', name: 'Emre Kocaaliler' },
          knowsLanguage: ['tr', 'en'],
        },
        {
          '@type': 'WebSite',
          '@id': `${siteRootUrl}#website`,
          name: 'Richt AI',
          url: siteRootUrl,
          description: structuredDataDescription,
          publisher: { '@id': `${siteRootUrl}#organization` },
          inLanguage: language,
        },
      ],
    });
  }
}
