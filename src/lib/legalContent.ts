export type LegalPageSlug = 'privacy' | 'kvkk' | 'cookies';

export const legalCopy = {
  tr: {
    backHome: 'Ana sayfaya dön',
    lastUpdated: 'Son güncelleme: 21 Ekim 2026',
    privacy: {
      title: 'Gizlilik Politikası',
      intro: 'Bu sayfa, mevcut Richt AI web sitesi ve pilot/iletişim formu kapsamında işlenen bilgiler hakkında genel bilgi verir. Metin, repository’deki mevcut işleyişe göre hazırlanmış bir uygulama taslağıdır.',
      sections: [
        { heading: 'İşlenen bilgiler', paragraphs: ['Formu doldururken ad soyad, e-posta, telefon, klinik veya işletme adı ve gönüllü olarak paylaştığınız mevcut durum ya da mesaj bilgisi işlenebilir.'] },
        { heading: 'Kullanım amaçları', paragraphs: ['Bu bilgiler başvurulara yanıt vermek, mevcut durumu değerlendirmek ve Richt AI hizmetleri veya pilot başvurusu hakkında sizinle iletişim kurmak için kullanılır.'] },
        { heading: 'Hizmet sağlayıcılar', paragraphs: ['Form gönderimleri, mevcut uygulamadaki Supabase hizmeti üzerinden saklanabilir. Web sitesinin çalışması için gerekli teknik hizmet sağlayıcılar, hizmeti sunmak için gereken ölçüde devreye girebilir.'] },
        { heading: 'Saklama ve talepler', paragraphs: ['Bilgiler meşru operasyonel ve iletişim amaçlarıyla gerektiği ölçüde saklanır. Gizlilikle ilgili taleplerinizi sitenin İletişime geç formu üzerinden başlatabilirsiniz.'] },
      ],
    },
    kvkk: {
      title: 'KVKK Aydınlatma Metni',
      intro: 'Bu metin, mevcut Richt AI web sitesi ve pilot/iletişim formu için hazırlanmış kısa bir uygulama taslağıdır. Resmî hukuki inceleme yerine geçmez; repository’de bulunmayan kurumsal bilgiler tamamlanmak üzere bırakılmıştır.',
      sections: [
        { heading: 'İşlenen veri kategorileri', paragraphs: ['Kimlik ve iletişim bilgileri, klinik veya işletme bilgisi ve başvuru sırasında gönüllü olarak paylaşılan mevcut durum ya da mesaj bilgisi işlenebilir.'] },
        { heading: 'İşleme amaçları', paragraphs: ['Veriler; başvuruya yanıt vermek, pilot veya hizmet kapsamını değerlendirmek, iletişim kurmak ve gerekli operasyonel kayıtları yönetmek amacıyla kullanılabilir.'] },
        { heading: 'Hizmet sağlayıcılar ve saklama', paragraphs: ['Form verileri mevcut uygulamada Supabase üzerinden saklanabilir. Teknik hizmet sağlayıcılar, hizmetin işletilmesi için gereken ölçüde kullanılabilir. Saklama süresi, ilgili operasyonel ve iletişim ihtiyacıyla sınırlı tutulacak şekilde ayrıca belirlenmelidir.'] },
        { heading: 'Başvurular', paragraphs: ['Kişisel verilerinizle ilgili taleplerinizi sitenin İletişime geç formu üzerinden iletebilirsiniz. Veri sorumlusu bilgileri, resmî adres ve diğer zorunlu kurumsal bilgiler mevcut repository’de yer almadığı için bu taslakta ayrıca tamamlanmak üzere bırakılmıştır.'] },
      ],
    },
    cookies: {
      title: 'Çerez Politikası',
      intro: 'Bu kısa politika, mevcut Richt AI web sitesinin bilinen tarayıcı saklama davranışını açıklar.',
      sections: [
        { heading: 'Dil tercihi', paragraphs: ['Site, seçtiğiniz dil tercihini tarayıcıda yerel olarak saklar. Bu tercih, sonraki ziyaretlerde sayfanın aynı dilde açılmasına yardımcı olur.'] },
        { heading: 'Analitik ve reklam', paragraphs: ['Şu anda analitik veya reklam amaçlı çerez ya da izleme teknolojisi uygulanmıyor. Site, pazarlama amacıyla kullanıcı davranışını izleyen bir çerez sistemi kullanmıyor.'] },
        { heading: 'Gelecekteki değişiklikler', paragraphs: ['Bu davranış değişirse politika güncellenir ve gerekiyorsa uygun bilgilendirme veya onay davranışı eklenir.'] },
      ],
    },
  },
  en: {
    backHome: 'Back to home',
    lastUpdated: 'Last updated: October 21, 2026',
    privacy: {
      title: 'Privacy Policy',
      intro: 'This page gives general information about information processed through the current Richt AI website and pilot/contact form. It is an implementation draft based on the behavior currently present in the repository.',
      sections: [
        { heading: 'Information we may process', paragraphs: ['When you submit the form, we may process your name, email, phone number, clinic or business name, and any current-situation or message details you choose to share.'] },
        { heading: 'How it is used', paragraphs: ['This information is used to respond to applications, assess the current situation, and contact you about Richt AI services or a pilot application.'] },
        { heading: 'Service providers', paragraphs: ['Form submissions may be stored through the Supabase service used by the current application. Technical service providers required to operate the website may be involved only to the extent needed to provide the service.'] },
        { heading: 'Retention and requests', paragraphs: ['Information is retained only as needed for legitimate operational and contact purposes. You can start a privacy-related request through the site’s Get in touch form.'] },
      ],
    },
    kvkk: {
      title: 'KVKK Privacy Notice',
      intro: 'This is a short implementation draft for the current Richt AI website and pilot/contact form. It is not a substitute for formal legal review; organisational details not present in the repository are intentionally left to be completed.',
      sections: [
        { heading: 'Data categories', paragraphs: ['Identity and contact details, clinic or business information, and current-situation or message details voluntarily shared during an application may be processed.'] },
        { heading: 'Purposes', paragraphs: ['Data may be used to respond to applications, assess pilot or service scope, communicate with you, and manage necessary operational records.'] },
        { heading: 'Service providers and retention', paragraphs: ['Form data may be stored through Supabase in the current application. Technical service providers may be used to the extent needed to operate the service. Retention periods should be defined separately in line with the relevant operational and contact need.'] },
        { heading: 'Requests', paragraphs: ['You can submit requests about your personal data through the site’s Get in touch form. Controller details, official address, and other required organisational information are not present in the current repository and are left for completion in this draft.'] },
      ],
    },
    cookies: {
      title: 'Cookie Policy',
      intro: 'This short policy explains the known browser-storage behavior of the current Richt AI website.',
      sections: [
        { heading: 'Language preference', paragraphs: ['The site stores your selected language preference locally in the browser. This helps the page open in the same language on later visits.'] },
        { heading: 'Analytics and advertising', paragraphs: ['There are currently no analytics or advertising cookies or tracking technologies in use. The site does not use cookies to track user behavior for marketing purposes.'] },
        { heading: 'Future changes', paragraphs: ['If this behavior changes, the policy will be updated and appropriate notice or consent behavior will be added where required.'] },
      ],
    },
  },
} as const;
