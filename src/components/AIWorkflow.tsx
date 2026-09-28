import { ArrowRight, CalendarCheck, MessageCircle, Sparkles } from 'lucide-react';

const steps = [
  { label: 'Ziyaretçi', detail: 'İlk mesaj', icon: MessageCircle },
  { label: 'Akıllı yanıt', detail: 'Anında yönlendirme', icon: Sparkles },
  { label: 'Randevu', detail: 'Net sonraki adım', icon: CalendarCheck },
];

export function AIWorkflow() {
  return (
    <div
      className="workflow-shell mx-auto mt-9 max-w-3xl p-3 sm:p-4 animate-fade-in-up animate-delay-200"
      aria-label="Ziyaretçiden randevuya akıllı iletişim akışı"
    >
      <div className="workflow-grid">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.label} className="contents">
              <div className="workflow-node" style={{ '--workflow-delay': `${index * 180}ms` } as React.CSSProperties}>
                <span className="workflow-icon">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-xs sm:text-sm font-medium text-snow-100">{step.label}</span>
                  <span className="mt-0.5 block truncate text-[10px] sm:text-xs text-snow-500">{step.detail}</span>
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="workflow-connector" aria-hidden="true">
                  <ArrowRight className="hidden h-4 w-4 text-teal-400/80 sm:block" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
