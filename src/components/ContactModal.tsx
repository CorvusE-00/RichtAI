import { useEffect, useState } from 'react';
import { Check, Sparkles, X } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [state, setState] = useState<SubmitState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const businessName = formData.get('businessName') as string;
    const message = formData.get('message') as string;

    try {
      if (!supabase) {
        throw new Error('Supabase is not configured for this local preview.');
      }

      const { error } = await supabase.from('leads').insert({
        name,
        email,
        phone: phone || null,
        business_name: businessName || null,
        message: message || null,
      });

      if (error) throw error;

      setState('success');
    } catch {
      setState('error');
      setErrorMessage('Bir sorun oluştu. Lütfen daha sonra tekrar deneyin.');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="absolute inset-0 bg-navy-950/80 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg rounded-2xl bg-navy-850 border border-navy-600/60 shadow-[0_0_80px_rgba(10,22,40,0.85),0_0_30px_rgba(20,184,166,0.08)] animate-fade-in-up max-h-[90vh] overflow-y-auto scrollbar-hide">
        {/* Glow accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg text-snow-400 hover:text-snow-100 hover:bg-navy-700/60 transition-colors duration-200"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>

          {state === 'success' ? (
            <div className="text-center py-8">
              <div className="success-check inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500/15 border border-teal-500/30 mb-6">
                <Check className="w-8 h-8 text-teal-300" strokeWidth={2.5} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-snow-50 mb-3">
                Teşekkürler!
              </h3>
              <p className="text-snow-400 text-sm leading-relaxed max-w-sm mx-auto">
                Mesajınız bana ulaştı. En kısa sürede sizinle iletişime geçeceğim.
              </p>
              <button
                onClick={onClose}
                className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-navy-700/60 border border-navy-600 text-snow-200 font-display text-sm hover:bg-navy-700 transition-colors duration-200"
              >
                Kapat
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-medium font-display mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  Ücretsiz tanışma görüşmesi
                </div>
                <h2
                  id="contact-modal-title"
                  className="font-display text-2xl sm:text-3xl font-semibold text-snow-50 leading-tight"
                >
                  İşletmeniz için doğru başlangıcı birlikte bulalım
                </h2>
                <p className="mt-3 text-snow-400 text-sm leading-relaxed">
                  Herhangi bir taahhüt olmadan, işletmeniz için hangi adımın doğru olduğunu birlikte değerlendirelim.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field
                    label="Ad Soyad"
                    name="name"
                    type="text"
                    required
                    placeholder="Adınız Soyadınız"
                  />
                  <Field
                    label="E-posta"
                    name="email"
                    type="email"
                    required
                    placeholder="ornek@eposta.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field
                    label="Telefon"
                    name="phone"
                    type="tel"
                    placeholder="05XX XXX XX XX"
                  />
                  <Field
                    label="İşletme / Klinik Adı"
                    name="businessName"
                    type="text"
                    placeholder="Opsiyonel"
                  />
                </div>

                <div>
                  <label className="block text-snow-300 text-sm font-medium mb-2 font-display">
                    Mesajınız
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="İhtiyacınızdan kısaca bahsedin..."
                    className="input-premium px-4 py-3 rounded-xl text-sm resize-none"
                  />
                </div>

                {state === 'error' && (
                  <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === 'submitting'}
                  className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state === 'submitting' ? (
                    <>
                      <span className="w-5 h-5 border-2 border-navy-950/30 border-t-navy-950 rounded-full animate-spin" />
                      Gönderiliyor...
                    </>
                  ) : (
                    'Gönder'
                  )}
                </button>

                <p className="text-center text-snow-500 text-xs">
                  Bilgileriniz gizli tutulur ve yalnızca sizinle iletişim için
                  kullanılır.
                </p>
                <p className="text-center text-teal-300/80 text-xs font-display">
                  Mesajınız doğrudan bana ulaşır.
                </p>
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
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-snow-300 text-sm font-medium mb-2 font-display">
        {label} {required && <span className="text-teal-400">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="input-premium px-4 py-3 rounded-xl text-sm"
      />
    </div>
  );
}
