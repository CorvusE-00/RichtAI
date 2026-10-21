export const socialLinks = [
  { key: 'linkedin', url: (import.meta.env.VITE_LINKEDIN_URL ?? '').trim() },
  { key: 'instagram', url: (import.meta.env.VITE_INSTAGRAM_URL ?? '').trim() },
  { key: 'tiktok', url: (import.meta.env.VITE_TIKTOK_URL ?? '').trim() },
] as const;
