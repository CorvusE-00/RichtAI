/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { applyLanguageMetadata } from './siteMetadata';

export type Language = 'tr' | 'en';

export const translations = {
  tr: {
    seo: {
      title: 'Richt Ai — Yapay Zekâ Otomasyonu ve Modern Web Çözümleri',
      description: 'İşletmeler, klinikler ve sağlık turizmi için yapay zekâ otomasyonu ve modern web çözümleri.',
    },
    nav: {
      links: [
        { label: 'Sorunlar', id: 'sorun' },
        { label: 'Çözüm', id: 'cozum' },
        { label: 'Nasıl çalışır?', id: 'nasil-calisir' },
        { label: 'Güven', id: 'guven' },
        { label: 'S.S.S.', id: 'sss' },
      ],
      cta: 'Ücretsiz tanışma görüşmesi',
      menu: 'Menü',
      switchLanguage: 'Switch to English',
    },
    hero: {
      badge: 'İşletmeler için modern web ve yapay zekâ çözümleri',
      headline: 'İşletmenizin dijital iletişimini',
      headlineAccent: 'daha akıllı hâle getirin.',
      subheadline: 'Web sitenizi ve müşteri iletişiminizi daha düzenli, hızlı ve anlaşılır hâle getirin.',
      cta: 'Ücretsiz tanışma görüşmesi',
      duration: 'İlk görüşme yaklaşık 30 dakika sürer.',
      noCommitment: 'Herhangi bir taahhüt yok',
      direct: 'Doğrudan Emre Kocaaliler ile',
    },
    workflow: {
      aria: 'Ziyaretçiden randevuya akıllı iletişim akışı',
      steps: [
        { label: 'Ziyaretçi', detail: 'İlk mesaj' },
        { label: 'Akıllı yanıt', detail: 'Anında yönlendirme' },
        { label: 'Randevu', detail: 'Net sonraki adım' },
      ],
    },
    problem: {
      label: 'Sorunlar',
      headline: 'İşletmenizin dijital tarafı neden',
      headlineAccent: 'hâlâ bu kadar yorucu?',
      description: 'Küçük bir klinik veya işletme yönetirken teknoloji işleri kolaylaştırmalı. Peki günlük işlerinizi zorlaştıran noktalar neler?',
      prompt: 'Bu durumlardan biri size de tanıdık geliyor mu?',
      cards: [
        { title: 'Randevu trafiği ekibinizi yoruyor', description: 'Telefonlar, mesajlar ve takvim arasında kaybolmak hem ekibinizi yoruyor hem de gün içinde önemli işlere ayıracağınız zamanı azaltıyor.' },
        { title: 'Web siteniz güven vermekte zorlanıyor', description: 'Yavaş, güncel olmayan veya mobilde iyi görünmeyen bir site, ziyaretçinin sizi tercih etmeden önce karar değiştirmesine neden olabiliyor.' },
        { title: 'Sorular mesai dışında cevapsız kalıyor', description: 'İlk mesajı zamanında yanıtlayamadığınızda potansiyel müşteriler beklemek yerine başka bir işletmeye yönelebiliyor.' },
        { title: 'Dijitalde rakipleriniz öne geçiyor', description: 'Daha düzenli iletişim kuran ve daha kolay ulaşılabilen işletmeler, müşterinin aklında daha uzun süre kalıyor.' },
      ],
    },
    solution: {
      label: 'Çözüm',
      headline: 'İşletmeniz için güven veren bir web sitesi',
      headlineAccent: 've akıllı otomasyon',
      description: 'Önce ihtiyacınızı dinliyor, sonra gerçekten işinize yarayacak iki temel alanı birlikte kuruyoruz: dijital görünürlük ve düzenli iletişim.',
      cards: [
        {
          eyebrow: 'Güven veren web siteleri',
          title: 'İlk izlenimi güvene dönüştüren bir web sitesi',
          description: 'İşletmenizi doğru anlatan, mobilde rahat kullanılan ve ziyaretçiyi bir sonraki adıma yönlendiren sade bir dijital yüz.',
          features: [
            ['Mobil öncelikli tasarım', 'Her ekranda sakin ve net bir deneyim.'],
            ['Arama motorları için sağlam temel', 'İnsanların sizi bulmasını kolaylaştıran yapı.'],
          ],
        },
        {
          eyebrow: 'Akıllı otomasyon sistemleri',
          title: 'Tekrarlayan iletişimi sizin için düzenleyen otomasyon',
          description: 'Soruları yanıtlayan, randevuya yönlendiren ve ekibinizin üzerindeki tekrar eden işleri azaltan anlaşılır bir sistem.',
          features: [
            ['Hızlı ilk yanıt', 'İlk soruyu cevapsız bırakmayan bir asistan.'],
            ['Randevu ve takip akışı', 'Hatırlatma ve yönlendirmeyi düzenli hâle getirir.'],
          ],
        },
      ],
    },
    how: {
      label: 'Nasıl çalışır?',
      headline: 'Üç adımda net',
      headlineAccent: 've sakin bir süreç',
      description: 'Karmaşık süreçler veya arada kaybolan iletişim yok. Birlikte çalışmaya başlamak bu kadar net.',
      steps: [
        { title: 'Tanışma görüşmesi', duration: '30 dakika', durationAlt: '30 minutes', description: 'İşletmenizin ihtiyaçlarını dinlerim. Kısa, samimi ve doğrudan bir görüşmeyle nereden başlayacağımızı birlikte netleştiririz.' },
        { title: 'Tasarım ve kurulum', duration: '1–2 hafta', durationAlt: '1–2 weeks', description: 'Size özel web sitesi ve otomasyon sistemini hazırlarım. Markanıza ve günlük işleyişinize uygun bir çözüm kurarız.' },
        { title: 'Sürekli destek ve gelişim', duration: 'Süresiz', durationAlt: 'Ongoing', description: 'Sistem yayına girdikten sonra da ulaşabileceğiniz kişi aynı kalır. Sorularınızı yanıtlar, ihtiyaç oldukça birlikte geliştiririz.' },
      ],
      needsBased: 'İhtiyaç oldukça',
    },
    stats: {
      aria: 'Richt Ai istatistikleri',
      metrics: [
        { label: 'Otomatik yanıt' },
        { label: 'Doğrudan destek' },
        { label: 'Randevu akışı', display: 'Akıllı' },
        { label: 'İletişim noktası', display: 'Tek' },
      ],
    },
    trust: {
      label: 'Güven',
      headline: 'Yakın iletişim,',
      headlineAccent: 'güçlü dijital çözümler',
      description: 'İhtiyacınızı dinleyen, çözümü kuran ve sonrasında da ulaşabileceğiniz tek bir kişiyle çalışın.',
      testimonials: [
        { name: 'Dr. A. Yilmaz', role: 'Diş kliniği sahibi', location: 'Kuşadası', text: 'Emre süreci baştan sona sade anlattı. Ne yapacağımızı bilerek, gereksiz bir karmaşa yaşamadan ilerledik.' },
        { name: 'S. Demir', role: 'Sağlık turizmi koordinatörü', location: 'İzmir', text: 'Yeni web sitemiz ve otomatik yanıt akışımız sayesinde sorular daha düzenli ilerliyor. Doğrudan iletişim kurabilmek bizim için önemliydi.' },
        { name: 'M. Kaya', role: 'Klinik yöneticisi', location: 'Aydın', text: 'Eskiden ekip olarak telefona yetişmekte zorlanıyorduk. Şimdi sık tekrarlanan sorular daha düzenli yanıtlanıyor ve biz randevulara odaklanabiliyoruz.' },
      ],
      testimonialsAria: '5 üzerinden 5 yıldız',
      clients: 'Birlikte çalıştığımız işletmeler',
      clientNames: ['Ege Klinik', 'Kuşadası Sağlık', 'Aydın Dental', 'Mavi Turizm', 'Yerel Marka'],
      founder: {
        name: 'Emre Kocaaliler',
        role: 'Kurucu ve yapay zekâ otomasyonu uzmanı',
        alt: 'Emre Kocaaliler, Richt Ai kurucusu',
        description: 'Richt Ai’yi küçük işletmelerin ve kliniklerin teknolojiyi karmaşıklaşmadan kullanabilmesi için kurdum. Her projede doğrudan çalışır, çözümü kendim kurar ve sonrasında da ulaşılabilir kalırım.',
        skills: ['Web deneyimi', 'Yapay zekâ otomasyonu', 'Birebir destek'],
      },
      whySolo: 'Neden tek kişilik bir ajans?',
      whySoloDescription: 'Çünkü projenizi anlatmak için üç farklı kişiye ihtiyaç duymamalısınız. Fikrinizi dinleyen, çözümü kuran ve sonrasında ulaşabildiğiniz kişi aynı olduğunda süreç daha sakin ilerler.',
    },
    faq: {
      label: 'S.S.S.',
      headline: 'Aklınızdaki sorulara',
      headlineAccent: 'sakin cevaplar',
      description: 'Karar vermeden önce merak etmeniz çok normal. En sık duyduğum soruları açıkça yanıtladım.',
      questions: [
        { question: 'Bütçemi aşar mı?', answer: 'İhtiyacınıza göre küçük ve net bir başlangıç kapsamı belirliyoruz. Gereksiz özellikler eklemeden, işletmenize en çok fayda sağlayacak adımlardan başlıyoruz.' },
        { question: 'Tek kişiyle çalışmak yeterli olur mu?', answer: 'Evet. Tasarım, geliştirme ve otomasyon tarafını doğrudan ben yürütüyorum. Böylece arada kaybolan mesajlar yerine tek bir iletişim noktası ve daha hızlı kararlar oluyor.' },
        { question: 'Ne kadar sürede hazır olur?', answer: 'İhtiyaca göre değişir; sade bir başlangıç sitesi genellikle birkaç hafta içinde yayına alınabilir. İlk görüşmede kapsamı ve gerçekçi takvimi birlikte netleştiriyoruz.' },
        { question: 'Mevcut web sitemi değiştirmem gerekir mi?', answer: 'Hayır. Mevcut yapınızı koruyup sadece ihtiyaç duyduğunuz bölümü iyileştirebiliriz. Yeni bir site gerekip gerekmediğine birlikte, veriye ve hedefinize göre karar veririz.' },
        { question: 'Şehir dışındaki işletmelerle de çalışıyor musunuz?', answer: 'Kesinlikle. Görüşmeler ve proje süreci çevrim içi yürüyebilir. Farklı şehirlerdeki işletmelerle de aynı doğrudan iletişim modeliyle çalışıyorum.' },
      ],
    },
    finalCta: {
      headline: 'İşletmeniz için doğru',
      headlineAccent: 'başlangıcı birlikte bulalım',
      description: 'Herhangi bir taahhüt yok, satış baskısı yok. İşletmeniz için hangi adımın doğru olduğunu birlikte değerlendirelim.',
      cta: 'Ücretsiz tanışma görüşmesi',
      trust: 'Herhangi bir taahhüt yok · Birebir iletişim',
      quote: '“İhtiyacınızı dinleyip, size gerçekten gerekli olan sistemi kurmak için buradayım.”',
    },
    footer: {
      prompt: 'Dijital yükünüzü biraz hafifletelim.',
      promptDescription: 'İlk görüşme kısa, sakin ve ücretsiz.',
      cta: 'Ücretsiz tanışma görüşmesi',
      brandDescription: 'Küçük ve orta ölçekli işletmeler, diş klinikleri ve sağlık turizmi için yapay zekâ otomasyonu ve modern web çözümleri.',
      sitemap: 'Site haritası',
      social: 'Sosyal',
      socialLabels: ['LinkedIn (yakında)', 'Instagram (yakında)', 'WhatsApp (yakında)'],
      contact: 'İletişim',
      location: 'Türkiye ve yurt dışı · Çevrim içi çalışma',
      contactButton: 'İletişime geç',
      rights: 'Tüm hakları saklıdır.',
      tagline: 'Modern web ve yapay zekâ çözümleri',
    },
    contact: {
      close: 'Kapat',
      successTitle: 'Teşekkürler!',
      successDescription: 'Mesajınız bana ulaştı. En kısa sürede sizinle iletişime geçeceğim.',
      badge: 'Ücretsiz tanışma görüşmesi',
      title: 'İşletmeniz için doğru başlangıcı birlikte bulalım',
      description: 'Herhangi bir taahhüt olmadan, işletmeniz için hangi adımın doğru olduğunu birlikte değerlendirelim.',
      name: 'Ad Soyad',
      namePlaceholder: 'Adınız Soyadınız',
      email: 'E-posta',
      emailPlaceholder: 'ornek@eposta.com',
      phone: 'Telefon',
      phonePlaceholder: '05XX XXX XX XX',
      business: 'İşletme / Klinik Adı',
      optional: 'Opsiyonel',
      message: 'Mesajınız',
      messagePlaceholder: 'İhtiyacınızdan kısaca bahsedin...',
      submit: 'Gönder',
      submitting: 'Gönderiliyor...',
      error: 'Bir sorun oluştu. Lütfen daha sonra tekrar deneyin.',
      privacy: 'Bilgileriniz gizli tutulur ve yalnızca sizinle iletişim için kullanılır.',
      direct: 'Mesajınız doğrudan bana ulaşır.',
    },
  },
  en: {
    seo: {
      title: 'Richt Ai — AI Automation and Modern Web Solutions',
      description: 'AI automation and modern web solutions for businesses, clinics, and medical tourism.',
    },
    nav: {
      links: [
        { label: 'Challenges', id: 'sorun' },
        { label: 'Solutions', id: 'cozum' },
        { label: 'How it works', id: 'nasil-calisir' },
        { label: 'Trust', id: 'guven' },
        { label: 'FAQ', id: 'sss' },
      ],
      cta: 'Book a free introduction call',
      menu: 'Menu',
      switchLanguage: 'Türkçeye geç',
    },
    hero: {
      badge: 'Modern web and AI solutions for ambitious businesses',
      headline: 'Make your business communication',
      headlineAccent: 'smarter by design.',
      subheadline: 'Make your website and customer communication clearer, faster, and easier to manage.',
      cta: 'Book a free introduction call',
      duration: 'The first call takes around 30 minutes.',
      noCommitment: 'No commitment required',
      direct: 'Direct access to Emre Kocaaliler',
    },
    workflow: {
      aria: 'Smart communication flow from visitor to appointment',
      steps: [
        { label: 'Visitor', detail: 'First message' },
        { label: 'Smart reply', detail: 'Instant guidance' },
        { label: 'Appointment', detail: 'Clear next step' },
      ],
    },
    problem: {
      label: 'Challenges',
      headline: 'Why does the digital side of your business',
      headlineAccent: 'still feel so exhausting?',
      description: 'Technology should make running a clinic or business easier. Where is it creating friction in your day-to-day work?',
      prompt: 'Does any of this sound familiar?',
      cards: [
        { title: 'Appointment traffic is exhausting your team', description: 'Managing calls, messages, and calendars at once drains your team and takes time away from the work that matters.' },
        { title: 'Your website is not building enough trust', description: 'A slow, outdated, or difficult-to-use mobile site can make visitors change their mind before choosing you.' },
        { title: 'Questions go unanswered after hours', description: 'When the first message is not answered in time, potential customers may move on instead of waiting.' },
        { title: 'Competitors are moving ahead digitally', description: 'Businesses that communicate clearly and stay easy to reach remain top of mind for longer.' },
      ],
    },
    solution: {
      label: 'Solutions',
      headline: 'A trustworthy website for your business',
      headlineAccent: 'and intelligent automation',
      description: 'We start by understanding your needs, then build the two essentials that create real momentum: digital visibility and organized communication.',
      cards: [
        {
          eyebrow: 'Trust-building websites',
          title: 'A website that turns first impressions into confidence',
          description: 'A clear digital presence that explains your business, feels effortless on mobile, and guides visitors to the next step.',
          features: [
            ['Mobile-first design', 'A calm, clear experience on every screen.'],
            ['A strong foundation for search', 'A structure that makes it easier for people to find you.'],
          ],
        },
        {
          eyebrow: 'Intelligent automation systems',
          title: 'Automation that organizes recurring communication for you',
          description: 'A straightforward system that answers questions, guides people toward appointments, and reduces repetitive work for your team.',
          features: [
            ['Fast first response', 'An assistant that never leaves the first question unanswered.'],
            ['Appointment and follow-up flow', 'Keeps reminders and guidance organized.'],
          ],
        },
      ],
    },
    how: {
      label: 'How it works',
      headline: 'A clear process in',
      headlineAccent: 'three calm steps',
      description: 'No complicated process or lost messages between teams. Starting together is this straightforward.',
      steps: [
        { title: 'Introduction call', duration: '30 minutes', durationAlt: '30 minutes', description: 'I listen to what your business needs. In a short, direct conversation, we clarify the best place to begin.' },
        { title: 'Design and build', duration: '1–2 weeks', durationAlt: '1–2 weeks', description: 'I prepare your website and automation system around your brand and the way your business works every day.' },
        { title: 'Ongoing support and growth', duration: 'Ongoing', durationAlt: 'Ongoing', description: 'The person you can reach stays the same after launch. I answer questions and improve the system as your needs evolve.' },
      ],
      needsBased: 'As needed',
    },
    stats: {
      aria: 'Richt Ai statistics',
      metrics: [
        { label: 'Automated replies' },
        { label: 'Direct support' },
        { label: 'Appointment flow', display: 'Smart' },
        { label: 'Communication point', display: 'One' },
      ],
    },
    trust: {
      label: 'Trust',
      headline: 'Close communication,',
      headlineAccent: 'strong digital solutions',
      description: 'Work with one person who listens to your needs, builds the solution, and remains available afterwards.',
      testimonials: [
        { name: 'Dr. A. Yilmaz', role: 'Dental clinic owner', location: 'Kuşadası', text: 'Emre explained the process clearly from start to finish. We always knew what we were doing and moved forward without unnecessary complexity.' },
        { name: 'S. Demir', role: 'Medical tourism coordinator', location: 'İzmir', text: 'Our new website and automated response flow keep questions much more organized. Being able to communicate directly was important to us.' },
        { name: 'M. Kaya', role: 'Clinic manager', location: 'Aydın', text: 'Our team used to struggle to keep up with phone calls. Now recurring questions are handled more consistently and we can focus on appointments.' },
      ],
      testimonialsAria: '5 out of 5 stars',
      clients: 'Businesses we work with',
      clientNames: ['Ege Clinic', 'Kuşadası Health', 'Aydın Dental', 'Mavi Tourism', 'Local Brand'],
      founder: {
        name: 'Emre Kocaaliler',
        role: 'Founder and AI automation specialist',
        alt: 'Emre Kocaaliler, founder of Richt Ai',
        description: 'I founded Richt Ai to help small businesses and clinics use technology without making their work more complicated. I work directly on every project, build the solution myself, and stay reachable after launch.',
        skills: ['Web experiences', 'AI automation', 'Direct support'],
      },
      whySolo: 'Why work with a one-person agency?',
      whySoloDescription: 'You should not need three different people to explain one project. When the person who listens to your idea also builds the solution and stays reachable, the process moves more calmly.',
    },
    faq: {
      label: 'FAQ',
      headline: 'Clear answers to',
      headlineAccent: 'the questions on your mind',
      description: 'It is natural to have questions before making a decision. Here are the ones I hear most often, answered clearly.',
      questions: [
        { question: 'Will it exceed my budget?', answer: 'We define a small, clear starting scope around your needs. We begin with the steps that create the most value instead of adding unnecessary features.' },
        { question: 'Is working with one person enough?', answer: 'Yes. I handle the design, development, and automation directly. That means one point of contact and faster decisions instead of messages getting lost between teams.' },
        { question: 'How quickly can it be ready?', answer: 'It depends on the scope; a focused starter website can usually launch within a few weeks. We define a realistic timeline together during the first call.' },
        { question: 'Do I need to replace my existing website?', answer: 'No. We can keep your current structure and improve only the parts that need attention. We decide together, based on your goals and the data, whether a new site is necessary.' },
        { question: 'Do you work with businesses outside your city?', answer: 'Absolutely. Calls and the project process can happen online. I work with businesses in different cities through the same direct communication model.' },
      ],
    },
    finalCta: {
      headline: 'Let’s find the right',
      headlineAccent: 'place to start for your business',
      description: 'No commitment and no sales pressure. Let’s decide together which next step is right for your business.',
      cta: 'Book a free introduction call',
      trust: 'No commitment required · Direct communication',
      quote: '“I am here to listen to what you need and build the system that genuinely helps.”',
    },
    footer: {
      prompt: 'Let’s make your digital workload lighter.',
      promptDescription: 'The first call is short, calm, and free.',
      cta: 'Book a free introduction call',
      brandDescription: 'AI automation and modern web solutions for small and mid-sized businesses, dental clinics, and medical tourism.',
      sitemap: 'Site map',
      social: 'Social',
      socialLabels: ['LinkedIn (coming soon)', 'Instagram (coming soon)', 'WhatsApp (coming soon)'],
      contact: 'Contact',
      location: 'Türkiye and worldwide · Remote collaboration',
      contactButton: 'Get in touch',
      rights: 'All rights reserved.',
      tagline: 'Modern web and AI solutions',
    },
    contact: {
      close: 'Close',
      successTitle: 'Thank you!',
      successDescription: 'Your message has reached me. I will get back to you as soon as possible.',
      badge: 'Free introduction call',
      title: 'Let’s find the right place to start for your business',
      description: 'With no commitment, let’s evaluate together which step is right for your business.',
      name: 'Full name',
      namePlaceholder: 'Your full name',
      email: 'Email',
      emailPlaceholder: 'you@example.com',
      phone: 'Phone',
      phonePlaceholder: '+1 (555) 000-0000',
      business: 'Business / Clinic name',
      optional: 'Optional',
      message: 'Message',
      messagePlaceholder: 'Tell me briefly what you need...',
      submit: 'Send message',
      submitting: 'Sending...',
      error: 'Something went wrong. Please try again later.',
      privacy: 'Your information is kept private and used only to contact you.',
      direct: 'Your message goes directly to me.',
    },
  },
} as const;

type TranslationSet = (typeof translations)[Language];

interface LanguageContextValue {
  language: Language;
  copy: TranslationSet;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'tr';
    return window.localStorage.getItem('richtai-language') === 'en' ? 'en' : 'tr';
  });

  const setLanguage = (nextLanguage: Language) => setLanguageState(nextLanguage);
  const toggleLanguage = () => setLanguageState((current) => (current === 'tr' ? 'en' : 'tr'));

  useEffect(() => {
    applyLanguageMetadata({
      language,
      title: translations[language].seo.title,
      description: translations[language].seo.description,
    });
    window.localStorage.setItem('richtai-language', language);
  }, [language]);

  const value = useMemo(
    () => ({ language, copy: translations[language], setLanguage, toggleLanguage }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}
