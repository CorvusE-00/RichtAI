export type ContactIntent = 'pilot' | 'starter' | 'pro' | 'general';

export type ContactSource =
  | 'navbar'
  | 'hero'
  | 'pricing-starter'
  | 'pricing-growth'
  | 'pricing-pro'
  | 'final-cta'
  | 'footer';

export type ContactChannel = 'web' | 'whatsapp' | 'web_whatsapp' | 'not_sure';

export interface ContactModalState {
  isOpen: boolean;
  intent: ContactIntent;
  source: ContactSource;
}
