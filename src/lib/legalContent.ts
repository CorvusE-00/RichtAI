export type LegalPageSlug = 'privacy' | 'kvkk' | 'cookies';

export const legalRoutes: Record<string, LegalPageSlug> = {
  '/gizlilik-politikasi': 'privacy',
  '/kvkk': 'kvkk',
  '/cerez-politikasi': 'cookies',
};

export const legalCopy = {
  tr: {
    backHome: 'Ana sayfaya dön',
    lastUpdated: 'Son güncelleme: 23 Ekim 2026',
    privacy: {
      title: 'Gizlilik Politikası',
      metaTitle: 'Gizlilik Politikası | Richt AI',
      metaDescription: 'Richt AI web sitesi ve iletişim formunda kişisel bilgilerin nasıl işlendiği, saklandığı ve taleplerin nasıl iletileceği hakkında bilgi.',
      intro: 'Bu politika, Richt AI markası altında Emre Kocaaliler tarafından işletilen getrichtai.com web sitesindeki mevcut iletişim ve pilot başvuru akışında kişisel bilgilerin nasıl işlendiğini açıklar.',
      sections: [
        { heading: 'Veri sorumlusu ve iletişim', paragraphs: ['Veri sorumlusu: Richt AI markası altında faaliyet gösteren Emre Kocaaliler. Bu sayfada şu an bir şirket tüzel kişiliği veya posta adresi beyan edilmemektedir. Gizlilik ve kişisel veri talepleri için privacy@getrichtai.com adresini kullanın. Genel iletişim için hello@getrichtai.com adresi kullanılabilir.'] },
        { heading: 'İşlenen bilgiler ve hassas veri uyarısı', paragraphs: ['Form gönderildiğinde ad soyad, e-posta, telefon, klinik veya işletme adı, öncelikli kanal, dil tercihi ve gönüllü olarak yazdığınız mevcut durum ya da mesaj bilgisi işlenebilir. Formun mesaj alanına hasta adı, sağlık bilgisi veya üçüncü kişilere ait başka hassas bilgiler yazmayın.'] },
        { heading: 'Amaçlar ve akış', paragraphs: ['Bilgiler; başvuruyu almak, başvuruya yanıt vermek, pilot veya hizmet kapsamını değerlendirmek, sizinle iletişim kurmak, başvuruyu operasyonel olarak kaydetmek ve ekip bildirimini yönetmek için kullanılır. Akış şu şekildedir: web sitesi formu → Vercel web/API katmanı → Supabase veritabanı → Resend e-posta bildirimi → Gmail bildirim adresi.'] },
        { heading: 'Hizmetler ve roller', paragraphs: ['Vercel web sitesini ve API katmanını çalıştırır. Supabase başvuru kaydının veritabanında tutulduğu hizmettir. Resend, ekip bildirim e-postasının gönderilmesinde kullanılır. Gmail, bildirimin ulaştığı e-posta hedefidir. ImprovMX, hello@getrichtai.com ve privacy@getrichtai.com gibi gelen e-posta takma adlarını yönlendirir; web sitesi form gönderimlerini işlemez. Google Fonts kullanıldığında tarayıcınız yazı tipini almak için Google Fonts alan adlarına istek gönderebilir.'] },
        { heading: 'Saklama', paragraphs: ['Müşteri olmayan başvurular için amaçlanan azami saklama süresi 12 aydır; uygulanabilir hukuki yükümlülükler saklıdır ve amaç daha önce sona ererse daha erken silme değerlendirilir. Web sitesi şu anda otomatik silme çalıştırdığını iddia etmez. Aktif müşterilere ait kayıtlar sözleşmesel veya hukuki gerekliliklere göre ayrıca değerlendirilebilir. Gmail, Resend ve sağlayıcı yedeklerindeki saklama süreleri sağlayıcı ayarları ve koşullarına bağlıdır.'] },
        { heading: 'Yurt dışı hizmetler', paragraphs: ['Kullanılan hizmetlerden bazıları Türkiye dışında işleme veya barındırma yapabilir. Sağlayıcıların güncel bölge, alt işleyen ve aktarım mekanizması ayrıntıları ayrıca doğrulanmalıdır; bu politika belirli bir uluslararası aktarım uyumluluğu iddiasında bulunmaz.'] },
        { heading: 'Talepler', paragraphs: ['Kişisel verilerinizle ilgili gizlilik veya silme taleplerini privacy@getrichtai.com adresine gönderin; satış formunu kullanmanız gerekmez. Bu adrese e-posta göndermek tek başına otomatik olarak resmî KVKK başvurusu anlamına gelmez. Uygulanabilir başvuru usulü ve kimlik doğrulaması gerekebilir; talep değerlendirilirken kimliğinizi doğrulamanız istenebilir.'] },
      ],
    },
    kvkk: {
      title: 'KVKK Aydınlatma Metni',
      metaTitle: 'KVKK Aydınlatma Metni | Richt AI',
      metaDescription: 'Richt AI iletişim ve pilot başvuru formu kapsamında kişisel verilerin işlenmesi, saklanması ve ilgili kişi hakları hakkında KVKK bilgilendirmesi.',
      intro: 'Bu aydınlatma metni, getrichtai.com üzerindeki iletişim ve pilot başvuru formu bakımından mevcut veri işleme akışını açıklar. Veri sorumlusu, Richt AI markası altında faaliyet gösteren Emre Kocaaliler’dir. Bu sayfada şu an bir şirket tüzel kişiliği veya posta adresi beyan edilmemektedir.',
      sections: [
        { heading: 'Veri kategorileri ve toplama yöntemi', paragraphs: ['Form aracılığıyla kimlik ve iletişim bilgileri (ad soyad, e-posta, telefon), klinik veya işletme bilgisi, seçilen iletişim kanalı, dil tercihi ve başvuru mesajı alınabilir. Veriler, sizin web sitesindeki formu doldurmanızla elektronik ortamda toplanır. Mesaj alanına hasta adı, sağlık bilgisi veya üçüncü kişilere ait hassas bilgi yazmayın.'] },
        { heading: 'İşleme amaçları', paragraphs: ['Veriler; başvuruya yanıt vermek, pilot veya hizmet kapsamını değerlendirmek, iletişim kurmak, başvuruyu operasyonel olarak kaydetmek ve ekip bildirimini göndermek amaçlarıyla işlenebilir. Web sitesi form akışı Vercel API üzerinden Supabase’e kaydedilir; Resend üzerinden Gmail bildirim hedefine bildirim gönderilir.'] },
        { heading: 'İşleme şartı ve hukuki inceleme', paragraphs: ['Her işleme amacı için uygulanabilir KVKK işleme şartı, başvurunun niteliğine ve somut sürece göre değerlendirilmelidir. Bu metin, hukuki nitelendirmenin veya profesyonel Türk hukuku incelemesinin yerine geçmez; amaç, hukuki şart ve sağlayıcı aktarım mekanizmalarının kapsamı ayrıca doğrulanmalıdır.'] },
        { heading: 'Aktarılan taraflar ve hizmetler', paragraphs: ['Veriler, hizmetin işletilmesi için gerekli ölçüde Vercel, Supabase, Resend ve bildirim hedefi olarak Gmail ile ilişkili hizmetlere ulaşabilir. ImprovMX yalnızca genel ve gizlilik e-posta takma adlarının gelen kutusuna yönlendirilmesi için kullanılır; form verilerinin alıcısı olarak beyan edilmez. Google Fonts, tarayıcının yazı tipi isteği sırasında devreye girebilir. Bu metin, belirli bir yurt dışı aktarımı uyumlu ilan etmez.'] },
        { heading: 'Saklama ve silme', paragraphs: ['Müşteri olmayan başvurular için amaçlanan azami saklama süresi 12 aydır; uygulanabilir hukuki yükümlülükler ve amaç sona erdiğinde daha erken silme ilkesi saklıdır. Şu anda otomatik silme mekanizması beyan edilmemektedir. Müşteri kayıtları ayrı sözleşmesel veya hukuki gerekliliklere tabi olabilir. Gmail, Resend ve sağlayıcı yedeklerinin saklama süresi ayrıca doğrulanmalıdır.'] },
        { heading: 'İlgili kişi hakları ve başvuru', paragraphs: ['KVKK kapsamındaki haklarınız; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işleme amacını ve amaca uygun kullanımını öğrenme, aktarılan üçüncü kişileri bilme, eksik veya yanlış verilerin düzeltilmesini isteme, şartları oluştuğunda silme veya yok etme talep etme, düzeltme ya da silme işlemlerinin aktarılan üçüncü kişilere bildirilmesini isteme, münhasıran otomatik sistemlerle aleyhinize sonuca itiraz etme ve kanuna aykırı işleme nedeniyle zararın giderilmesini talep etme haklarını kapsayabilir. Bu haklar için privacy@getrichtai.com adresine yazabilirsiniz; bu adres satış formundan bağımsızdır. E-posta göndermek tek başına otomatik olarak resmî KVKK başvurusu oluşturmaz. Uygulanabilir usul, gerekli bilgiler ve kimlik doğrulaması gerekebilir; yanıt süresi yürürlükteki hukuka göre değerlendirilir.'] },
      ],
    },
    cookies: {
      title: 'Çerez Politikası',
      metaTitle: 'Çerez Politikası | Richt AI',
      metaDescription: 'Richt AI web sitesinin yerel depolama, Google Fonts ve mevcut analitik/reklam izleme davranışı hakkında bilgi.',
      intro: 'Bu politika, mevcut Richt AI web sitesinin tarayıcı depolaması ve bilinen üçüncü taraf yazı tipi isteğini açıklar.',
      sections: [
        { heading: 'Dil tercihi', paragraphs: ['Site, seçtiğiniz dil tercihini çerez yerine tarayıcının yerel depolama alanında saklar. Bu tercih, sonraki ziyaretlerde sayfanın aynı dilde açılmasına yardımcı olur.'] },
        { heading: 'Analitik, reklam ve izleme', paragraphs: ['Mevcut uygulamada analitik veya reklam amaçlı çerez, reklam SDK’sı ya da pazarlama amaçlı davranış izleme sistemi bulunmuyor. Bu açıklama mevcut site kodu içindir; gelecekte eklenecek araçlar ayrıca değerlendirilip politika güncellenmelidir.'] },
        { heading: 'Google Fonts', paragraphs: ['Site Google Fonts kullanır. Yazı tipi dosyalarını almak için tarayıcınız Google Fonts alan adlarına istek gönderebilir; bu istek Google’ın kendi teknik ve gizlilik koşullarına tabi olabilir.'] },
        { heading: 'Gelecekteki değişiklikler', paragraphs: ['Çerez, yerel depolama veya izleme davranışı değişirse bu politika güncellenir ve gerekiyorsa uygun bilgilendirme veya onay davranışı eklenir.'] },
      ],
    },
  },
  en: {
    backHome: 'Back to home',
    lastUpdated: 'Last updated: October 23, 2026',
    privacy: {
      title: 'Privacy Policy',
      metaTitle: 'Privacy Policy | Richt AI',
      metaDescription: 'How Richt AI handles personal information submitted through its website and contact form, including retention and privacy requests.',
      intro: 'This policy explains how personal information is handled in the current contact and pilot-application flow on getrichtai.com, operated by Emre Kocaaliler under the Richt AI brand.',
      sections: [
        { heading: 'Controller and contact', paragraphs: ['Controller: Emre Kocaaliler operating under the Richt AI brand. No company legal entity or postal address is stated on this page at present. Use privacy@getrichtai.com for privacy and personal-data requests. hello@getrichtai.com is available for general enquiries.'] },
        { heading: 'Information processed and sensitive-data warning', paragraphs: ['When you submit the form, we may process your name, email, phone number, clinic or business name, priority channel, language preference, and any current-situation or message details you choose to share. Please do not include patient names, health information, or other sensitive information about third parties in the message field.'] },
        { heading: 'Purposes and flow', paragraphs: ['Information is used to receive and respond to an enquiry, assess pilot or service scope, communicate with you, keep an operational record, and manage the team notification. The flow is: website form → Vercel web/API layer → Supabase database → Resend email notification → Gmail notification destination.'] },
        { heading: 'Services and roles', paragraphs: ['Vercel runs the website and API layer. Supabase stores the application record in the database. Resend is used to send the team notification email. Gmail is the email destination for that notification. ImprovMX forwards incoming aliases such as hello@getrichtai.com and privacy@getrichtai.com; it does not process website form submissions. When Google Fonts is used, your browser may request font files from Google Fonts domains.'] },
        { heading: 'Retention', paragraphs: ['For non-client leads, the intended maximum retention period is 12 months, subject to applicable legal requirements and earlier deletion review when the purpose ends. The website does not currently claim to run automatic deletion. Active-client records may be assessed separately under contractual or legal requirements. Retention in Gmail, Resend, and provider backups depends on provider settings and terms.'] },
        { heading: 'International services', paragraphs: ['Some services used may process or host information outside Türkiye. Current provider regions, subprocessors, and transfer mechanisms require separate verification; this policy does not claim that any particular international-transfer compliance requirement has been satisfied.'] },
        { heading: 'Requests', paragraphs: ['Send privacy or deletion requests to privacy@getrichtai.com; you do not need to use the sales form. Sending an email to this address does not automatically constitute a formal KVKK application. Applicable procedure and identity verification may be required, and we may ask you to verify your identity while handling the request.'] },
      ],
    },
    kvkk: {
      title: 'KVKK Privacy Notice',
      metaTitle: 'KVKK Privacy Notice | Richt AI',
      metaDescription: 'KVKK information about personal-data processing, retention, and data-subject rights for the Richt AI contact and pilot-application form.',
      intro: 'This notice describes the current data-processing flow for the contact and pilot-application form on getrichtai.com. The controller is Emre Kocaaliler operating under the Richt AI brand. No company legal entity or postal address is stated on this page at present.',
      sections: [
        { heading: 'Data categories and collection method', paragraphs: ['Through the form, we may collect identity and contact details (name, email, phone), clinic or business information, selected communication channel, language preference, and the application message. The information is collected electronically when you complete the website form. Please do not include patient names, health information, or other sensitive information about third parties in the message field.'] },
        { heading: 'Purposes', paragraphs: ['Data may be processed to respond to an enquiry, assess pilot or service scope, communicate with you, keep an operational application record, and send a team notification. The website form is saved through the Vercel API to Supabase; a notification is sent through Resend to the Gmail destination.'] },
        { heading: 'Processing condition and legal review', paragraphs: ['The applicable KVKK processing condition for each purpose must be assessed according to the nature of the enquiry and the concrete process. This notice is not a substitute for legal classification or professional Turkish-law review; the scope of each purpose, legal condition, and provider transfer mechanism requires separate confirmation.'] },
        { heading: 'Recipients and services', paragraphs: ['Information may reach Vercel, Supabase, Resend, and services associated with Gmail as the notification destination to the extent necessary to operate the service. ImprovMX is used only to forward incoming general and privacy email aliases and is not stated as a recipient of form data. Google Fonts may be involved when the browser requests font files. This notice does not declare any particular international transfer compliant.'] },
        { heading: 'Retention and deletion', paragraphs: ['For non-client leads, the intended maximum retention period is 12 months, subject to applicable legal requirements and earlier deletion when the purpose ends. No automatic deletion mechanism is currently claimed. Client records may be subject to separate contractual or legal requirements. Gmail, Resend, and provider-backup retention must be verified separately.'] },
        { heading: 'Data-subject rights and requests', paragraphs: ['Rights under KVKK may include learning whether data is processed, requesting information about processing, learning the purposes and use, knowing recipients, requesting correction, requesting deletion or destruction where applicable, requesting notice of correction or deletion to recipients, objecting to an adverse result from solely automated processing, and requesting compensation for unlawful processing. Write to privacy@getrichtai.com; this is separate from the sales form. An email does not automatically create a formal KVKK application. Applicable procedure, required information, and identity verification may apply; response timing is assessed under applicable law.'] },
      ],
    },
    cookies: {
      title: 'Cookie Policy',
      metaTitle: 'Cookie Policy | Richt AI',
      metaDescription: 'How the current Richt AI website uses browser local storage, Google Fonts, and analytics or advertising technologies.',
      intro: 'This policy explains the current Richt AI website’s browser storage and known third-party font request behavior.',
      sections: [
        { heading: 'Language preference', paragraphs: ['The site stores your selected language preference in browser local storage rather than a cookie. This helps the page open in the same language on later visits.'] },
        { heading: 'Analytics, advertising, and tracking', paragraphs: ['The current implementation has no analytics or advertising cookies, advertising SDK, or marketing behavior-tracking system. This statement is limited to the current site code; future tools must be assessed and reflected in an updated policy.'] },
        { heading: 'Google Fonts', paragraphs: ['The site uses Google Fonts. Your browser may request font files from Google Fonts domains; those requests may be subject to Google’s own technical and privacy terms.'] },
        { heading: 'Future changes', paragraphs: ['If cookie, local-storage, or tracking behavior changes, this policy will be updated and appropriate notice or consent behavior will be added where required.'] },
      ],
    },
  },
} as const;
