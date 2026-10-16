const configuredNumber = (import.meta.env.VITE_WHATSAPP_NUMBER ?? '').trim();
const normalizedNumber = configuredNumber.replace(/\D/g, '');

export const whatsappUrl = normalizedNumber.length >= 7
  ? `https://wa.me/${normalizedNumber}`
  : null;
