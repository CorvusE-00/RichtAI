import { useLanguage } from '@/lib/i18n';

export function ClinicPain() {
  const { copy } = useLanguage();

  return (
    <section id="sorun" className="chapter clinic-pain overflow-hidden">
      <div className="clinic-pain__stage">
        <img
          className="clinic-pain__art"
          src="/images/richtai-clinic-flow-section.png"
          width={1470}
          height={1070}
          alt=""
          aria-hidden="true"
        />

        <div className="clinic-pain__content">
          <div className="clinic-pain__top-copy">
            <span className="chapter-kicker chapter-kicker--dark">{copy.clinicPain.label}</span>
            <h2 className="clinic-pain__top-copy-heading whitespace-pre-line font-display font-semibold">
              {copy.clinicPain.headline}
            </h2>
            <p className="clinic-pain__top-copy-description">{copy.clinicPain.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
