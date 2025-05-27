export type Language = 'EN' | 'AR' | 'FR';

export interface Translations {
  [key: string]: {
    EN: string;
    AR: string;
    FR: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': {
    EN: 'Home',
    AR: 'الرئيسية',
    FR: 'Accueil'
  },
  'nav.about': {
    EN: 'About',
    AR: 'حول',
    FR: 'À propos'
  },
  'nav.services': {
    EN: 'Services',
    AR: 'الخدمات',
    FR: 'Services'
  },
  'nav.portfolio': {
    EN: 'Portfolio',
    AR: 'أعمالنا',
    FR: 'Portfolio'
  },
  'nav.contact': {
    EN: 'Contact',
    AR: 'اتصل بنا',
    FR: 'Contact'
  },
  'nav.language': {
    EN: 'Language',
    AR: 'اللغة',
    FR: 'Langue'
  },

  // Hero Section
  'hero.title': {
    EN: 'Timeless Architecture',
    AR: 'عمارة خالدة',
    FR: 'Architecture Intemporelle'
  },
  'hero.subtitle': {
    EN: '10+ Years. 50+ Projects. Exceptional Design.',
    AR: '+10 سنوات. +50 مشروع. تصميم استثنائي.',
    FR: '+10 Ans. +50 Projets. Design Exceptionnel.'
  },
  'hero.cta': {
    EN: 'View Our Projects',
    AR: 'اطلع على مشاريعنا',
    FR: 'Voir nos projets'
  },

  // Stats Section
  'stats.years.value': {
    EN: '10+',
    AR: '+10',
    FR: '+10'
  },
  'stats.years.label': {
    EN: 'Years Experience',
    AR: 'سنوات من الخبرة',
    FR: 'Années d\'expérience'
  },
  'stats.years.description': {
    EN: 'Delivering exceptional architectural solutions since 2013',
    AR: 'نقدم حلول معمارية استثنائية منذ 2013',
    FR: 'Fournir des solutions architecturales exceptionnelles depuis 2013'
  },
  'stats.projects.value': {
    EN: '50+',
    AR: '+50',
    FR: '+50'
  },
  'stats.projects.label': {
    EN: 'Completed Projects',
    AR: 'مشروع مكتمل',
    FR: 'Projets Réalisés'
  },
  'stats.projects.description': {
    EN: 'From residential homes to commercial complexes',
    AR: 'من المنازل السكنية إلى المجمعات التجارية',
    FR: 'Des maisons résidentielles aux complexes commerciaux'
  },
  'stats.satisfaction.value': {
    EN: '100%',
    AR: '%100',
    FR: '100%'
  },
  'stats.satisfaction.label': {
    EN: 'Client Satisfaction',
    AR: 'رضا العملاء',
    FR: 'Satisfaction Client'
  },
  'stats.satisfaction.description': {
    EN: 'Committed to exceeding expectations every time',
    AR: 'ملتزمون بتجاوز التوقعات في كل مرة',
    FR: 'Engagés à dépasser les attentes à chaque fois'
  },

  // About Section
  'about.title': {
    EN: 'About AXIS',
    AR: 'حول آكسيس',
    FR: 'À propos d\'AXIS'
  },
  'about.description': {
    EN: 'Founded in 2013, AXIS Architecture has been at the forefront of innovative design, creating spaces that seamlessly blend functionality with aesthetic excellence. Our team of experienced architects believes that great architecture should not only serve its purpose but also inspire and elevate the human experience.',
    AR: 'تأسست شركة آكسيس للهندسة المعمارية في عام 2013، وكانت في المقدمة في التصميم المبتكر، حيث تخلق مساحات تمزج بسلاسة بين الوظائف والتميز الجمالي. يؤمن فريقنا من المهندسين المعماريين ذوي الخبرة أن العمارة العظيمة يجب ألا تخدم غرضها فحسب، بل تلهم وترتقي أيضًا بالتجربة الإنسانية.',
    FR: 'Fondée en 2013, AXIS Architecture a été à l\'avant-garde de la conception innovante, créant des espaces qui allient harmonieusement fonctionnalité et excellence esthétique. Notre équipe d\'architectes expérimentés croit que la grande architecture ne doit pas seulement servir son objectif, mais aussi inspirer et élever l\'expérience humaine.'
  },
  'about.cta': {
    EN: 'Learn More About Us',
    AR: 'تعرف على المزيد عنا',
    FR: 'En savoir plus sur nous'
  },

  // Featured Projects
  'projects.featured.title': {
    EN: 'Featured Projects',
    AR: 'المشاريع المميزة',
    FR: 'Projets en Vedette'
  },
  'projects.featured.description': {
    EN: 'Explore some of our most remarkable architectural achievements that showcase our design philosophy and technical expertise.',
    AR: 'استكشف بعض إنجازاتنا المعمارية الأكثر تميزًا التي تعرض فلسفتنا في التصميم وخبرتنا التقنية.',
    FR: 'Explorez quelques-unes de nos réalisations architecturales les plus remarquables qui mettent en valeur notre philosophie de conception et notre expertise technique.'
  },
  'projects.view.all': {
    EN: 'View All Projects',
    AR: 'عرض جميع المشاريع',
    FR: 'Voir tous les projets'
  },

  // Pages
  'page.about.title': {
    EN: 'About AXIS',
    AR: 'حول آكسيس',
    FR: 'À propos d\'AXIS'
  },
  'page.about.subtitle': {
    EN: 'Pioneering architectural excellence through innovative design and sustainable practices for over a decade.',
    AR: 'ريادة التميز المعماري من خلال التصميم المبتكر والممارسات المستدامة لأكثر من عقد.',
    FR: 'Pionnier de l\'excellence architecturale grâce à un design innovant et des pratiques durables depuis plus d\'une décennie.'
  },
  'page.services.title': {
    EN: 'Our Services',
    AR: 'خدماتنا',
    FR: 'Nos Services'
  },
  'page.services.subtitle': {
    EN: 'Comprehensive architectural solutions tailored to meet diverse client needs and project requirements.',
    AR: 'حلول معمارية شاملة مصممة لتلبية احتياجات العملاء المتنوعة ومتطلبات المشاريع.',
    FR: 'Solutions architecturales complètes adaptées pour répondre aux besoins diversifiés des clients et aux exigences des projets.'
  },
  'page.portfolio.title': {
    EN: 'Our Portfolio',
    AR: 'أعمالنا',
    FR: 'Notre Portfolio'
  },
  'page.portfolio.subtitle': {
    EN: 'Explore our diverse collection of architectural projects that demonstrate our commitment to design excellence and innovation.',
    AR: 'استكشف مجموعتنا المتنوعة من المشاريع المعمارية التي تُظهر التزامنا بالتميز في التصميم والابتكار.',
    FR: 'Explorez notre collection diversifiée de projets architecturaux qui démontrent notre engagement envers l\'excellence du design et l\'innovation.'
  },
  'page.contact.title': {
    EN: 'Get In Touch',
    AR: 'تواصل معنا',
    FR: 'Entrer en Contact'
  },
  'page.contact.subtitle': {
    EN: 'Ready to start your next architectural project? We\'d love to hear about your vision and discuss how we can bring it to life.',
    AR: 'هل أنت مستعد لبدء مشروعك المعماري التالي؟ نود أن نسمع عن رؤيتك ونناقش كيف يمكننا تحقيقها.',
    FR: 'Prêt à commencer votre prochain projet architectural ? Nous aimerions entendre parler de votre vision et discuter de la façon dont nous pouvons la concrétiser.'
  },

  // Contact Form
  'contact.form.title': {
    EN: 'Send us a message',
    AR: 'أرسل لنا رسالة',
    FR: 'Envoyez-nous un message'
  },
  'contact.form.name': {
    EN: 'Full Name',
    AR: 'الاسم الكامل',
    FR: 'Nom Complet'
  },
  'contact.form.email': {
    EN: 'Email',
    AR: 'البريد الإلكتروني',
    FR: 'Email'
  },
  'contact.form.project': {
    EN: 'Project Type',
    AR: 'نوع المشروع',
    FR: 'Type de Projet'
  },
  'contact.form.message': {
    EN: 'Message',
    AR: 'الرسالة',
    FR: 'Message'
  },
  'contact.form.submit': {
    EN: 'Send Message',
    AR: 'إرسال الرسالة',
    FR: 'Envoyer le Message'
  },
  'contact.form.sending': {
    EN: 'Sending...',
    AR: 'جاري الإرسال...',
    FR: 'Envoi en cours...'
  },

  // Project Categories
  'category.residential': {
    EN: 'Residential',
    AR: 'سكني',
    FR: 'Résidentiel'
  },
  'category.commercial': {
    EN: 'Commercial',
    AR: 'تجاري',
    FR: 'Commercial'
  },
  'category.interior': {
    EN: 'Interior',
    AR: 'تصميم داخلي',
    FR: 'Intérieur'
  },

  // Common
  'common.featured': {
    EN: 'Featured',
    AR: 'مميز',
    FR: 'En Vedette'
  },
  'common.location': {
    EN: 'Location',
    AR: 'الموقع',
    FR: 'Emplacement'
  },
  'common.year': {
    EN: 'Year',
    AR: 'السنة',
    FR: 'Année'
  },
  'common.client': {
    EN: 'Client',
    AR: 'العميل',
    FR: 'Client'
  },
  'common.size': {
    EN: 'Project Size',
    AR: 'حجم المشروع',
    FR: 'Taille du Projet'
  },
  'common.duration': {
    EN: 'Duration',
    AR: 'المدة',
    FR: 'Durée'
  },
  'common.budget': {
    EN: 'Budget',
    AR: 'الميزانية',
    FR: 'Budget'
  }
};

export function getTranslation(key: string, language: Language): string {
  const translation = translations[key];
  if (!translation) {
    console.warn(`Translation missing for key: ${key}`);
    return key;
  }
  return translation[language] || translation.EN || key;
}

export function saveLanguagePreference(language: Language): void {
  localStorage.setItem('preferred-language', language);
}

export function getLanguagePreference(): Language {
  const saved = localStorage.getItem('preferred-language') as Language;
  return saved && ['EN', 'AR', 'FR'].includes(saved) ? saved : 'EN';
}