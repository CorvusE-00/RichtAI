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
      headline: 'İşletmenizin dijital iletişimini',
      headlineAccent: 'daha akıllı hâle getirin.',
      subheadline: 'Manuel işleri azaltan, müşteri iletişimini düzenleyen ve dijital deneyimi iyileştiren yapay zekâ otomasyonları ile modern web çözümleri.',
      cta: 'Ücretsiz tanışma görüşmesi',
      duration: 'İlk görüşme yaklaşık 30 dakika sürer.',
      noCommitment: 'Herhangi bir taahhüt yok',
      direct: 'Doğrudan Emre Kocaaliler ile iletişim',
    },
    workflow: {
      aria: 'Örnek akış: yeni bir talep anlaşılır, sisteme işlenir ve randevuya dönüşür.',
      example: 'Örnek akış',
      status: 'Otomasyon çalışıyor',
      incoming: 'Yeni talep',
      source: 'Web sitesi',
      time: '14:32',
      message: 'Merhaba, implant tedavisi için bilgi ve uygun randevu saati almak istiyorum.',
      interpretation: 'Talep özeti',
      requestType: 'Talep türü',
      appointment: 'Randevu',
      topic: 'Konu',
      topicValue: 'İmplant',
      statusLabel: 'Durum',
      qualified: 'Nitelikli talep',
      actionTitle: 'Sistem işlemleri',
      actionCreated: 'CRM kaydı oluşturuldu',
      actionSlot: 'Uygun saat bulundu',
      completed: 'Randevu oluşturuldu',
      scheduled: 'Yarın · 14:30',
    },
    problem: {
      label: 'Sorunlar',
      headline: 'İşletmenizin dijital tarafı neden',
      headlineAccent: 'hâlâ bu kadar yorucu?',
      description: 'Dijital sistemler günlük işlerinizi kolaylaştırmalı, yeni yükler eklememeli. Hangi noktalarda hâlâ zaman kaybediyorsunuz?',
      prompt: 'Bu durumlardan biri size tanıdık geliyor mu?',
      exampleLabel: 'Günlük akışta sık karşılaşılan durumlar',
      incidents: [
        {
          label: 'Mesai dışı mesaj',
          title: 'Yeni soru sabaha kadar yanıtsız kalıyor',
          detail: '“Yarın için uygun randevu var mı?”',
          status: 'Bekliyor',
          timeStart: '22:47',
          timeStartLabel: 'Yeni mesaj',
          timeEnd: '23:18',
          timeEndLabel: 'Yanıt yok',
        },
        {
          label: 'Manuel aktarım',
          title: 'Randevu bilgisi dört ayrı adımda yeniden aktarılıyor',
          detail: 'Web sitesi → WhatsApp → Notlar → Takvim',
          status: 'Takip zorlaşıyor',
          timeStart: 'Web sitesi',
          timeStartLabel: 'Başlangıç',
          timeEnd: 'Takvim',
          timeEndLabel: 'Son adım',
        },
        {
          label: 'Mobil ziyaret',
          title: 'Ziyaretçi aradığı bilgiyi bulamıyor',
          detail: 'Hizmet bilgisi net değil · Randevu adımı belirsiz',
          status: 'Sonraki adım belirsiz',
          timeStart: 'İlk izlenim',
          timeStartLabel: 'Mobil deneyim',
          timeEnd: 'Sonraki adım',
          timeEndLabel: 'Belirsiz',
        },
        {
          label: 'Dijital deneyim farkı',
          title: 'Daha kolay ulaşılabilen seçenekler öne çıkıyor',
          detail: 'Net bilgi → kolay iletişim → net sonraki adım',
          status: 'Akış dağınık kalıyor',
          timeStart: 'Ziyaretçi',
          timeStartLabel: 'Soru',
          timeEnd: 'Yanıt',
          timeEndLabel: 'Gecikiyor',
        },
      ],
    },
    solution: {
      label: 'Çözüm',
      headline: 'Müşteri iletişiminden işleyen sistemlere',
      headlineAccent: 'kadar',
      description: 'Richt Ai üç alanı birlikte ele alır: müşterilerinizin gördüğü deneyim, ekibinizin yürüttüğü operasyon ve ikisini birbirine bağlayan dijital sistemler.',
      capabilities: [
        {
          label: 'Müşteri iletişimi',
          title: 'Müşteri sorularını anlayan ve doğru adıma yönlendiren yapay zekâ',
          description: 'Web sitenizdeki soruları yanıtlayan, ihtiyacı anlayan ve ziyaretçiyi randevuya ya da doğru bilgiye yönlendiren akışlar.',
          visualLabel: 'Örnek akış',
          visualItems: ['Yeni soru', 'İhtiyaç anlaşıldı', 'Sonraki adıma yönlendir'],
          visualMeta: 'Yanıt ve sonraki adım',
        },
        {
          label: 'Operasyon',
          title: 'Tekrarlayan işleri arka planda düzenleyen otomasyonlar',
          description: 'CRM güncellemeleri, takip, hatırlatmalar ve ekip içi aktarımlar gibi işleri daha düzenli ve tutarlı hâle getiren sistemler.',
          visualLabel: 'Örnek sistem akışı',
          visualItems: ['Yeni talep', 'CRM güncellendi', 'Takip oluşturuldu', 'Hatırlatma planlandı'],
          visualMeta: 'Düzenli takip',
        },
        {
          label: 'Dijital deneyim',
          title: 'İşletmenizi net ve güven veren biçimde anlatan web deneyimleri',
          description: 'Mobilde rahat kullanılan, hizmetlerinizi açıkça anlatan ve ziyaretçiyi net bir sonraki adıma yönlendiren modern web deneyimleri.',
          visualLabel: 'Ziyaretçi yolu',
          visualItems: ['Hizmet', 'Güven', 'Randevu'],
          visualMeta: 'Net sonraki adım',
        },
      ],
    },
    how: {
      label: 'Nasıl çalışır?',
      headline: 'İlk görüşmeden yayına kadar',
      headlineAccent: 'her adım net olsun',
      description: 'İlk görüşmeden yayına ve sonrasına kadar kapsamı, takvimi ve sonraki adımları netleştiriyoruz.',
      steps: [
        { title: 'İhtiyacı netleştirme', meta: 'Yaklaşık 30 dakika', description: 'Kısa bir görüşmede neyi çözmek istediğinizi, mevcut sistemi ve öncelikleri netleştiriyoruz.' },
        { title: 'Kapsam ve kurulum', meta: 'Kapsama göre', description: 'Ne yapılacağı, neyin yapılmayacağı ve gerçekçi teslim planı netleşir. Ardından sistem kurulup test edilir.' },
        { title: 'Yayın ve devam eden destek', meta: 'İhtiyaç oldukça', description: 'Sistem yayına alınır. Yayın sonrası sorularınız, düzeltmeler ve geliştirmeler için aynı iletişim noktası yanınızda kalır.' },
      ],
    },
    stats: {
      aria: 'Richt Ai istatistikleri',
      metrics: [
        { label: 'Otomatik yanıtlar' },
        { label: 'Doğrudan destek' },
        { label: 'Randevu akışı', display: 'Akıllı' },
        { label: 'İletişim noktası', display: 'Tek' },
      ],
    },
    trust: {
      label: 'Güven',
      headline: 'Yakın iletişim,',
      headlineAccent: 'güçlü dijital çözümler',
      description: 'İhtiyacınızı dinleyen, sistemi kuran ve yayın sonrasında da ulaşabildiğiniz kişi değişmez.',
      processLabel: 'Richt Ai ile çalışma biçimi',
      process: [
        { title: 'İhtiyacı netleştir', description: 'Mevcut akışı ve nerede zaman kaybettiğinizi birlikte netleştiririz.' },
        { title: 'Sistemi tasarla', description: 'Otomasyonun nerede devreye gireceğini ve hangi adımların insan kontrolünde kalacağını belirlerim.' },
        { title: 'Kur ve test et', description: 'Akışı kurar, gerçek senaryolarla test eder ve gereksiz karmaşıklığı azaltırım.' },
        { title: 'Aynı kişiyle devam', description: 'Yayın sonrası sorularınız ve geliştirmeleriniz için yeniden başka bir ekibe aktarılmazsınız.' },
      ],
      systemProof: {
        label: 'Örnek sistem akışı',
        items: ['Mesaj', 'Yorumlama', 'Sistem işlemi', 'Sonraki adım'],
        description: 'Gelen talep anlaşılır, doğru işlem seçilir ve sonraki adım netleşir.',
      },
      founder: {
        label: 'Kurucu',
        name: 'Emre Kocaaliler',
        role: 'Kurucu ve yapay zekâ otomasyonu uzmanı',
        alt: 'Emre Kocaaliler, Richt Ai kurucusu',
        statement: 'Richt Ai’yi, işletmelerin teknolojiyi karmaşıklaşmadan kullanabilmesi için kurdum. Projeyi ilk görüşmeden kurulum sonrasına kadar doğrudan ben yürütüyorum.',
        modelLabel: 'Tek iletişim noktası',
        modelDescription: 'İhtiyacı anlattığınız kişiyle sistemi kuran kişi değişmez; yayın sonrası bir sorunuz olduğunda yeniden başka bir ekibe aktarılmazsınız.',
      },
    },
    faq: {
      label: 'S.S.S.',
      headline: 'Aklınızdaki sorulara',
      headlineAccent: 'net cevaplar',
      description: 'Karar vermeden önce sorularınız olması çok normal. En sık karşılaştığım soruları burada net biçimde yanıtladım.',
      questions: [
        { question: 'Bütçeme uygun bir başlangıç yapabilir miyiz?', answer: 'İhtiyacınıza göre küçük ve net bir başlangıç kapsamı belirliyoruz. Gereksiz özellikler eklemeden, işletmenize en çok fayda sağlayacak adımlardan başlıyoruz.' },
        { question: 'Tek kişiyle çalışmak yeterli olur mu?', answer: 'Çoğu başlangıç projesinde evet. Tek iletişim noktası kararları sadeleştirir; ihtiyaç büyürse hangi ek desteğin gerektiğini de birlikte açıkça değerlendiririz.' },
        { question: 'Ne kadar sürede hazır olur?', answer: 'Süre seçtiğimiz kapsama ve gerekli adımlara göre değişir. İlk görüşmede başlangıç kapsamını ve gerçekçi takvimi birlikte netleştiriyoruz.' },
        { question: 'Mevcut web sitemi değiştirmem gerekir mi?', answer: 'Hayır. Mevcut yapınızı koruyup sadece ihtiyaç duyduğunuz bölümü iyileştirebiliriz. Yeni bir site gerekip gerekmediğine birlikte, veriye ve hedefinize göre karar veririz.' },
        { question: 'Şehir dışındaki işletmelerle de çalışıyor musunuz?', answer: 'Kesinlikle. Görüşmeler ve proje süreci çevrim içi yürüyebilir. Farklı şehirlerdeki işletmelerle de aynı doğrudan iletişim modeliyle çalışıyorum.' },
      ],
    },
    finalCta: {
      headline: 'İşletmeniz için doğru',
      headlineAccent: 'başlangıcı birlikte bulalım',
      description: 'Taahhüt ya da satış baskısı olmadan, işletmeniz için doğru sonraki adımı birlikte değerlendirelim.',
      cta: 'Ücretsiz tanışma görüşmesi',
      trust: 'Herhangi bir taahhüt yok · Birebir iletişim',
      quote: '“İhtiyacınızı dinleyip size gerçekten gereken sistemi kurmak için buradayım.”',
    },
    footer: {
      prompt: 'Dijital yükünüzü hafifletelim.',
      promptDescription: 'İlk görüşme kısa, net ve ücretsiz.',
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
      headline: 'Make your business communication',
      headlineAccent: 'smarter by design.',
      subheadline: 'AI automation, customer-facing systems, and modern web experiences that reduce manual work and keep every interaction moving.',
      cta: 'Book a free introduction call',
      duration: 'The first call takes around 30 minutes.',
      noCommitment: 'No commitment required',
      direct: 'Speak directly with Emre Kocaaliler',
    },
    workflow: {
      aria: 'Example workflow: a new enquiry is identified, structured, added to the system, and converted into an appointment.',
      example: 'Example workflow',
      status: 'Automation running',
      incoming: 'New enquiry',
      source: 'Website',
      time: '14:32',
      message: 'Hello, I’d like information about implant treatment and an available appointment time.',
      interpretation: 'Request summary',
      requestType: 'Request type',
      appointment: 'Appointment',
      topic: 'Topic',
      topicValue: 'Implant',
      statusLabel: 'Status',
      qualified: 'Qualified enquiry',
      actionTitle: 'System actions',
      actionCreated: 'CRM record created',
      actionSlot: 'Available time found',
      completed: 'Appointment created',
      scheduled: 'Tomorrow · 14:30',
    },
    problem: {
      label: 'Challenges',
      headline: 'Why does the digital side of your business',
      headlineAccent: 'still feel so exhausting?',
      description: 'Your digital setup should make daily work easier—not add more handoffs. Where does it still slow you down?',
      prompt: 'Does any of this sound familiar?',
      exampleLabel: 'Common day-to-day friction',
      incidents: [
        {
          label: 'After-hours message',
          title: 'A new question goes unanswered until morning',
          detail: '“Is there an appointment available tomorrow?”',
          status: 'Waiting',
          timeStart: '22:47',
          timeStartLabel: 'New message',
          timeEnd: '23:18',
          timeEndLabel: 'No reply',
        },
        {
          label: 'Manual handoff',
          title: 'Appointment details move through four separate steps',
          detail: 'Website → WhatsApp → Notes → Calendar',
          status: 'Harder to track',
          timeStart: 'Website',
          timeStartLabel: 'Starting point',
          timeEnd: 'Calendar',
          timeEndLabel: 'Last step',
        },
        {
          label: 'Mobile visit',
          title: 'A visitor cannot find the information they need',
          detail: 'Service information is hard to find · Next step is unclear',
          status: 'No clear next step',
          timeStart: 'First impression',
          timeStartLabel: 'Mobile experience',
          timeEnd: 'Next step',
          timeEndLabel: 'Unclear',
        },
        {
          label: 'Digital experience gap',
          title: 'Easier-to-reach options move ahead',
          detail: 'Clear information → easy contact → calm next step',
          status: 'Flow stays fragmented',
          timeStart: 'Visitor',
          timeStartLabel: 'Question',
          timeEnd: 'Reply',
          timeEndLabel: 'Delayed',
        },
      ],
    },
    solution: {
      label: 'Solutions',
      headline: 'From customer conversations to the systems',
      headlineAccent: 'behind them',
      description: 'Richt Ai connects three areas that shape how your business works: the experience customers see, the operations your team runs, and the digital systems that connect them.',
      capabilities: [
        {
          label: 'Customer-facing AI',
          title: 'AI that understands questions and guides people to the right next step',
          description: 'Systems that answer website questions, understand intent, and guide people toward an appointment or the information they need.',
          visualLabel: 'Example flow',
          visualItems: ['New question', 'Need understood', 'Guide to next step'],
          visualMeta: 'Answer and next step',
        },
        {
          label: 'Operational automation',
          title: 'Automation that keeps recurring work organized in the background',
          description: 'Systems for CRM updates, follow-up, reminders, and internal handoffs that keep recurring work consistent for your team.',
          visualLabel: 'Example system flow',
          visualItems: ['New enquiry', 'CRM updated', 'Follow-up created', 'Reminder scheduled'],
          visualMeta: 'Organized follow-up',
        },
        {
          label: 'Digital experience',
          title: 'Web experiences that explain your business clearly and build confidence',
          description: 'Modern, mobile-first experiences that present your services clearly and guide visitors to a clear next step.',
          visualLabel: 'Visitor path',
          visualItems: ['Service', 'Confidence', 'Appointment'],
          visualMeta: 'Clear next step',
        },
      ],
    },
    how: {
      label: 'How it works',
      headline: 'Know what to expect',
      headlineAccent: 'from first call to launch',
      description: 'From our first conversation through post-launch support, the scope, timeline, and next steps stay clear.',
      steps: [
        { title: 'First conversation', meta: 'Around 30 minutes', description: 'In a short conversation, we clarify what you want to solve, how things work today, and what matters most.' },
        { title: 'Scope and build', meta: 'Based on scope', description: 'We make clear what is included, what is not, and what a realistic delivery plan looks like. Then the system is built and tested.' },
        { title: 'Launch and ongoing support', meta: 'As needed', description: 'The system goes live, and the same point of contact remains available for questions, corrections, and improvements.' },
      ],
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
      description: 'The person who understands your needs is the person who builds the system and stays reachable after launch.',
      processLabel: 'How we work together',
      process: [
        { title: 'Understand the need', description: 'We start by understanding the current flow and where time or clarity gets lost.' },
        { title: 'Design the system', description: 'I define where automation should help and which decisions should stay with a person.' },
        { title: 'Build and test', description: 'I build the flow, test it against real scenarios, and remove unnecessary complexity.' },
        { title: 'Continue with the same point of contact', description: 'After launch, questions and improvements stay with the same person—not a new team.' },
      ],
      systemProof: {
        label: 'An example system flow Richt Ai can build',
        items: ['Message', 'Interpretation', 'System action', 'Next step'],
        description: 'The request is understood, the right action is selected, and the next step becomes clear.',
      },
      founder: {
        label: 'Founder',
        name: 'Emre Kocaaliler',
        role: 'Founder and AI automation specialist',
        alt: 'Emre Kocaaliler, founder of Richt Ai',
        statement: 'I built Richt Ai to help businesses use technology without making their work more complicated. I stay directly involved from the first conversation through implementation and after launch.',
        modelLabel: 'One point of contact',
        modelDescription: 'The person who understands the need also builds the system, so post-launch questions stay with the same point of contact.',
      },
    },
    faq: {
      label: 'FAQ',
      headline: 'Clear answers to',
      headlineAccent: 'common questions',
      description: 'Questions are natural before you decide. Here are the ones I hear most often, answered clearly.',
      questions: [
        { question: 'Can we start within my budget?', answer: 'We define a small, clear starting scope around your needs. We begin with the steps that create the most value instead of adding unnecessary features.' },
        { question: 'Is working with one person enough?', answer: 'For most focused starting projects, yes. One point of contact keeps decisions simple; if the scope grows, we will also be clear together about what extra support is needed.' },
        { question: 'How quickly can it be ready?', answer: 'The timeline depends on the scope and the steps involved. We define a realistic starting scope and schedule together during the first call.' },
        { question: 'Do I need to replace my existing website?', answer: 'No. We can keep your current structure and improve only the parts that need attention. We decide together, based on your goals and the data, whether a new site is necessary.' },
        { question: 'Do you work with businesses outside your city?', answer: 'Absolutely. Calls and the project process can happen online. I work with businesses in different cities through the same direct communication model.' },
      ],
    },
    finalCta: {
      headline: 'Let’s find the right',
      headlineAccent: 'first step for your business',
      description: 'With no commitment or sales pressure, let’s decide together on the right next step for your business.',
      cta: 'Book a free introduction call',
      trust: 'No commitment required · Direct communication',
      quote: '“I am here to listen to what you need and build the system that genuinely helps.”',
    },
    footer: {
      prompt: 'Let’s make your digital workload lighter.',
      promptDescription: 'The first call is short, clear, and free.',
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
