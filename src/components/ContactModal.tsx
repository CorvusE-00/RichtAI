import { useEffect, useRef, useState } from 'react';
import { Check, Sparkles, X } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useLanguage } from '@/lib/i18n';
import { whatsappUrl } from '@/lib/whatsapp';
import type { ContactChannel, ContactIntent, ContactSource } from '@/types/contact';

interface ContactModalProps {
  isOpen: boolean;
  intent: ContactIntent;
  source: ContactSource;
  onClose: () => void;
}

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

const channelOptions: ContactChannel[] = ['web', 'whatsapp', 'web_whatsapp', 'not_sure'];

export function ContactModal({ isOpen, intent, source, onClose }: ContactModalProps) {
  const { copy, language } = useLanguage();
  const [state, setState] = useState<SubmitState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const variant = copy.contact.variants[intent];

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (isOpen) {
      setState('idle');
      setErrorMessage('');
      formRef.current?.reset();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, intent]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const channelInterest = formData.get('channelInterest') as ContactChannel | null;

    try {
      if (!supabase) {
        throw new Error('Supabase is not configured for this local preview.');
      }

      const { error } = await supabase.from('leads').insert({
        name: String(formData.get('name') || ''),
        email: String(formData.get('email') || ''),
        phone: String(formData.get('phone') || '') || null,
        business_name: String(formData.get('businessName') || '') || null,
        message: String(formData.get('message') || '') || null,
        intent,
        source,
        channel_interest: channelInterest || null,
        locale: language,
      });

      if (error) throw error;

      formRef.current?.reset();
      setState('success');
    } catch {
      setState('error');
      setErrorMessage(copy.contact.error);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-description"
    >
      <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-[44rem] rounded-2xl border border-navy-600/60 bg-navy-850 shadow-[0_20px_60px_rgba(0,0,0,0.35)] animate-fade-in-up max-h-[90vh] overflow-y-auto scrollbar-hide">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-snow-50/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="relative p-6 sm:p-8">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 rounded-lg p-2 text-snow-400 transition-colors duration-200 hover:bg-navy-700/60 hover:text-snow-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-300 focus-visible:outline-offset-2"
            aria-label={copy.contact.close}
          >
            <X className="w-5 h-5" />
          </button>

          {state === 'success' ? (
            <div className="py-8 text-center" aria-live="polite">
              <div className="success-check mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-teal-500/30 bg-teal-500/15">
                <Check className="h-8 w-8 text-teal-300" strokeWidth={2.5} />
              </div>
              <h3 className="mb-3 font-display text-2xl font-semibold text-snow-50">
                {variant.successTitle}
              </h3>
              <p className="mx-auto max-w-sm text-sm leading-relaxed text-snow-400">
                {variant.successDescription}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-8 inline-flex items-center justify-center rounded-xl border border-navy-600 bg-navy-700/60 px-6 py-3 font-display text-sm text-snow-200 transition-colors duration-200 hover:bg-navy-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-300 focus-visible:outline-offset-2"
              >
                {copy.contact.close}
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6 pr-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 font-display text-xs font-medium text-teal-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  {variant.badge}
                </div>
                <h2 id="contact-modal-title" className="font-display text-2xl font-semibold leading-tight text-snow-50 sm:text-3xl">
                  {variant.title}
                </h2>
                <p id="contact-modal-description" className="mt-3 text-sm leading-relaxed text-snow-400">
                  {variant.description}
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label={copy.contact.name} name="name" type="text" required autoComplete="name" placeholder={copy.contact.namePlaceholder} autoFocus />
                  <Field label={copy.contact.business} name="businessName" type="text" required autoComplete="organization" placeholder={copy.contact.businessPlaceholder} />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label={copy.contact.email} name="email" type="email" required autoComplete="email" placeholder={copy.contact.emailPlaceholder} />
                  <Field label={copy.contact.phone} name="phone" type="tel" autoComplete="tel" placeholder={copy.contact.phonePlaceholder} />
                </div>

                <SelectField label={copy.contact.priorityChannel} name="channelInterest" options={channelOptions.map((value) => ({ value, label: copy.contact.channels[value] }))} />

                <div>
                  <label htmlFor="contact-message" className="mb-2 block font-display text-sm font-medium text-snow-300">
                    {variant.message}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder={variant.messagePlaceholder}
                    className="input-premium min-h-28 resize-y rounded-xl px-4 py-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-300 focus-visible:outline-offset-2"
                  />
                </div>

                {state === 'error' && (
                  <p className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400" role="alert" aria-live="polite">
                    {errorMessage}
                  </p>
                )}

                <button type="submit" disabled={state === 'submitting'} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
                  {state === 'submitting' ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-navy-950/30 border-t-navy-950" />
                      {copy.contact.submitting}
                    </>
                  ) : (
                    variant.submit
                  )}
                </button>

                <p className="text-center text-xs leading-relaxed text-snow-500">
                  {copy.contact.privacyPrefix}
                  <a className="text-snow-300 underline decoration-snow-500/50 underline-offset-2 transition-colors hover:text-teal-300" href="/gizlilik-politikasi">
                    {copy.contact.privacyPolicy}
                  </a>
                  {copy.contact.privacyConnector}
                  <a className="text-snow-300 underline decoration-snow-500/50 underline-offset-2 transition-colors hover:text-teal-300" href="/kvkk">
                    {copy.contact.kvkk}
                  </a>
                  {copy.contact.privacySuffix}
                </p>

                {whatsappUrl && (
                  <div className="border-t border-navy-700/70 pt-4">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-xl border border-teal-400/30 bg-transparent px-4 py-3 font-display text-sm font-medium text-teal-200 transition-colors hover:border-teal-300/50 hover:bg-teal-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-300 focus-visible:outline-offset-2"
                    >
                      {copy.contact.whatsapp}
                    </a>
                  </div>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  required,
  autoComplete,
  placeholder,
  autoFocus,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete: string;
  placeholder?: string;
  autoFocus?: boolean;
}) {
  return (
    <div>
      <label htmlFor={`contact-${name}`} className="mb-2 block font-display text-sm font-medium text-snow-300">
        {label} {required && <span className="text-teal-400">*</span>}
      </label>
      <input
        id={`contact-${name}`}
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className="input-premium rounded-xl px-4 py-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-300 focus-visible:outline-offset-2"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: Array<{ value: string; label: string }> }) {
  return (
    <div>
      <label htmlFor={`contact-${name}`} className="mb-2 block font-display text-sm font-medium text-snow-300">
        {label}
      </label>
      <select
        id={`contact-${name}`}
        name={name}
        defaultValue=""
        className="input-premium w-full appearance-none rounded-xl px-4 py-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-300 focus-visible:outline-offset-2"
      >
        <option value="" className="bg-navy-850">—</option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-navy-850">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
