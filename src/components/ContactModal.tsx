import { useEffect, useRef, useState } from 'react';
import { Check, MessageCircle, Sparkles, X } from 'lucide-react';
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
      className="contact-modal fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby={state === 'success' ? 'contact-modal-success-title' : 'contact-modal-title'}
      aria-describedby={state === 'success' ? undefined : 'contact-modal-description'}
    >
      <div className="contact-modal__backdrop absolute inset-0" onClick={onClose} />

      <div className="contact-modal__shell relative w-full animate-fade-in-up">
        <button
          type="button"
          onClick={onClose}
          className="contact-modal__close absolute"
          aria-label={copy.contact.close}
        >
          <X aria-hidden="true" />
        </button>

        {state === 'success' ? (
          <div className="contact-modal__success" aria-live="polite">
            <div className="contact-modal__success-icon">
              <Check aria-hidden="true" />
            </div>
            <span className="contact-modal__success-badge">{variant.badge}</span>
            <h2 id="contact-modal-success-title" className="contact-modal__success-title">
              {variant.successTitle}
            </h2>
            <p className="contact-modal__success-description">
              {variant.successDescription}
            </p>
            <button type="button" onClick={onClose} className="contact-modal__success-close">
              {copy.contact.close}
            </button>
          </div>
        ) : (
          <div className="contact-modal__layout">
            <aside className="contact-modal__context">
              <div className="contact-modal__context-main">
                <div className="contact-modal__badge">
                  <Sparkles aria-hidden="true" />
                  {variant.badge}
                </div>
                <h2 id="contact-modal-title" className="contact-modal__title">
                  {variant.title}
                </h2>
                <p id="contact-modal-description" className="contact-modal__description">
                  {variant.description}
                </p>
              </div>

              <div className="contact-modal__steps" aria-label={copy.contact.nextStep}>
                <p className="contact-modal__steps-title">{copy.contact.nextStep}</p>
                <Step number="01" label={copy.contact.steps.first} />
                <Step number="02" label={copy.contact.steps.second} />
                <Step number="03" label={copy.contact.steps[intent]} />
              </div>
            </aside>

            <section className="contact-modal__form-panel" aria-labelledby="contact-form-title">
              <div className="contact-modal__form-header">
                <h3 id="contact-form-title">{copy.contact.contactDetails}</h3>
                <p>{copy.contact.requiredHint}</p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form__grid">
                  <Field label={copy.contact.name} name="name" type="text" required autoComplete="name" placeholder={copy.contact.namePlaceholder} />
                  <Field label={copy.contact.business} name="businessName" type="text" required autoComplete="organization" placeholder={copy.contact.businessPlaceholder} />
                  <Field label={copy.contact.email} name="email" type="email" required autoComplete="email" placeholder={copy.contact.emailPlaceholder} />
                  <Field label={copy.contact.phone} name="phone" type="tel" autoComplete="tel" placeholder={copy.contact.phonePlaceholder} />
                </div>

                <ChannelField
                  label={copy.contact.priorityChannel}
                  options={channelOptions.map((value) => ({ value, label: copy.contact.channels[value] }))}
                />

                <div className="contact-field contact-field--message">
                  <label htmlFor="contact-message" className="contact-label">
                    {variant.message}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder={variant.messagePlaceholder}
                    className="contact-control contact-textarea"
                  />
                </div>

                {state === 'error' && (
                  <p className="contact-form__error" role="alert" aria-live="polite">
                    {errorMessage}
                  </p>
                )}

                <button type="submit" disabled={state === 'submitting'} className="contact-submit">
                  {state === 'submitting' ? (
                    <>
                      <span className="contact-submit__spinner" />
                      {copy.contact.submitting}
                    </>
                  ) : (
                    variant.submit
                  )}
                </button>

                <p className="contact-privacy">
                  {copy.contact.privacyPrefix}
                  <a href="/gizlilik-politikasi">{copy.contact.privacyPolicy}</a>
                  {copy.contact.privacyConnector}
                  <a href="/kvkk">{copy.contact.kvkk}</a>
                  {copy.contact.privacySuffix}
                </p>

                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-secondary__action"
                  >
                    <MessageCircle aria-hidden="true" />
                    {copy.contact.whatsapp}
                  </a>
                )}
              </form>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

function Step({ number, label }: { number: string; label: string }) {
  return (
    <div className="contact-modal__step">
      <span>{number}</span>
      <p>{label}</p>
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
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete: string;
  placeholder?: string;
}) {
  return (
    <div className="contact-field">
      <label htmlFor={`contact-${name}`} className="contact-label">
        {label} {required && <span className="contact-label__required">*</span>}
      </label>
      <input
        id={`contact-${name}`}
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="contact-control"
      />
    </div>
  );
}

function ChannelField({
  label,
  options,
}: {
  label: string;
  options: Array<{ value: ContactChannel; label: string }>;
}) {
  return (
    <fieldset className="contact-channel">
      <legend className="contact-label">{label}</legend>
      <div className="contact-channel__grid">
        {options.map((option) => (
          <label key={option.value} className="contact-channel__option">
            <input className="contact-channel__input" type="radio" name="channelInterest" value={option.value} />
            <span className="contact-channel__label">{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
