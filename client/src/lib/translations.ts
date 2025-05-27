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

  // About Page
  'about.our.story': {
    EN: 'Our Story',
    AR: 'قصتنا',
    FR: 'Notre Histoire'
  },
  'about.mission': {
    EN: 'Our Mission',
    AR: 'مهمتنا',
    FR: 'Notre Mission'
  },
  'about.mission.text': {
    EN: 'Creating timeless spaces that enhance human connection and environmental harmony.',
    AR: 'خلق مساحات خالدة تعزز التواصل الإنساني والانسجام البيئي.',
    FR: 'Créer des espaces intemporels qui améliorent la connexion humaine et l\'harmonie environnementale.'
  },
  'about.vision': {
    EN: 'Our Vision',
    AR: 'رؤيتنا',
    FR: 'Notre Vision'
  },
  'about.vision.text': {
    EN: 'To be recognized as leaders in sustainable and innovative architectural design.',
    AR: 'أن نكون معترفاً بنا كقادة في التصميم المعماري المستدام والمبتكر.',
    FR: 'Être reconnus comme leaders dans la conception architecturale durable et innovante.'
  },
  'about.values': {
    EN: 'Our Values',
    AR: 'قيمنا',
    FR: 'Nos Valeurs'
  },
  'about.values.subtitle': {
    EN: 'The principles that guide every project we undertake and every relationship we build.',
    AR: 'المبادئ التي توجه كل مشروع نقوم به وكل علاقة نبنيها.',
    FR: 'Les principes qui guident chaque projet que nous entreprenons et chaque relation que nous construisons.'
  },
  'about.innovation': {
    EN: 'Innovation',
    AR: 'الابتكار',
    FR: 'Innovation'
  },
  'about.innovation.text': {
    EN: 'Pushing the boundaries of design while respecting timeless architectural principles.',
    AR: 'دفع حدود التصميم مع احترام المبادئ المعمارية الخالدة.',
    FR: 'Repousser les limites du design tout en respectant les principes architecturaux intemporels.'
  },
  'about.sustainability': {
    EN: 'Sustainability',
    AR: 'الاستدامة',
    FR: 'Durabilité'
  },
  'about.sustainability.text': {
    EN: 'Committed to environmentally conscious design that preserves our planet for future generations.',
    AR: 'ملتزمون بالتصميم الواعي بيئياً الذي يحافظ على كوكبنا للأجيال القادمة.',
    FR: 'Engagés dans une conception respectueuse de l\'environnement qui préserve notre planète pour les générations futures.'
  },
  'about.collaboration': {
    EN: 'Collaboration',
    AR: 'التعاون',
    FR: 'Collaboration'
  },
  'about.collaboration.text': {
    EN: 'Working closely with clients to understand their vision and bring it to life.',
    AR: 'العمل بشكل وثيق مع العملاء لفهم رؤيتهم وتحقيقها.',
    FR: 'Travailler étroitement avec les clients pour comprendre leur vision et la concrétiser.'
  },
  'about.journey': {
    EN: 'Our Journey',
    AR: 'رحلتنا',
    FR: 'Notre Parcours'
  },
  'about.founded': {
    EN: 'Company Founded',
    AR: 'تأسيس الشركة',
    FR: 'Fondation de l\'Entreprise'
  },
  'about.founded.text': {
    EN: 'AXIS Architecture was established with a vision to create innovative, sustainable architectural solutions.',
    AR: 'تأسست شركة آكسيس للهندسة المعمارية برؤية لخلق حلول معمارية مبتكرة ومستدامة.',
    FR: 'AXIS Architecture a été créée avec la vision de créer des solutions architecturales innovantes et durables.'
  },
  'about.first.project': {
    EN: 'First Major Project',
    AR: 'أول مشروع كبير',
    FR: 'Premier Projet Majeur'
  },
  'about.first.project.text': {
    EN: 'Completed our first major commercial development, establishing our reputation for excellence.',
    AR: 'أكملنا أول تطوير تجاري كبير لنا، مما أسس سمعتنا للتميز.',
    FR: 'Achèvement de notre premier développement commercial majeur, établissant notre réputation d\'excellence.'
  },
  'about.sustainability.focus': {
    EN: 'Sustainability Focus',
    AR: 'التركيز على الاستدامة',
    FR: 'Focus sur la Durabilité'
  },
  'about.sustainability.focus.text': {
    EN: 'Dedicated our practice to sustainable design, becoming certified in green building practices.',
    AR: 'خصصنا ممارستنا للتصميم المستدام، وحصلنا على شهادة في ممارسات البناء الأخضر.',
    FR: 'Dédié notre pratique au design durable, en obtenant la certification dans les pratiques de construction verte.'
  },
  'about.recognition': {
    EN: 'Industry Recognition',
    AR: 'الاعتراف في الصناعة',
    FR: 'Reconnaissance Industrielle'
  },
  'about.recognition.text': {
    EN: 'Received multiple awards for architectural excellence and sustainable design innovation.',
    AR: 'حصلنا على جوائز متعددة للتميز المعماري وابتكار التصميم المستدام.',
    FR: 'Reçu plusieurs prix pour l\'excellence architecturale et l\'innovation en design durable.'
  },
  'about.growth': {
    EN: 'Continued Growth',
    AR: 'النمو المستمر',
    FR: 'Croissance Continue'
  },
  'about.growth.text': {
    EN: 'Celebrating over 50 completed projects and expanding our team of talented architects.',
    AR: 'احتفال بأكثر من 50 مشروعاً مكتملاً وتوسيع فريقنا من المعماريين الموهوبين.',
    FR: 'Célébrant plus de 50 projets achevés et élargissant notre équipe d\'architectes talentueux.'
  },

  // Services Page
  'services.process': {
    EN: 'Our Process',
    AR: 'عمليتنا',
    FR: 'Notre Processus'
  },
  'services.process.subtitle': {
    EN: 'A systematic approach ensuring every project is delivered with precision and excellence.',
    AR: 'نهج منهجي يضمن تسليم كل مشروع بدقة وتميز.',
    FR: 'Une approche systématique garantissant que chaque projet est livré avec précision et excellence.'
  },
  'services.discovery': {
    EN: 'Discovery',
    AR: 'الاستكشاف',
    FR: 'Découverte'
  },
  'services.discovery.text': {
    EN: 'Understanding your vision, requirements, and project goals through detailed consultation.',
    AR: 'فهم رؤيتك ومتطلباتك وأهداف المشروع من خلال استشارة مفصلة.',
    FR: 'Comprendre votre vision, vos exigences et vos objectifs de projet grâce à une consultation détaillée.'
  },
  'services.design': {
    EN: 'Design',
    AR: 'التصميم',
    FR: 'Conception'
  },
  'services.design.text': {
    EN: 'Creating innovative design solutions that balance aesthetics, functionality, and sustainability.',
    AR: 'خلق حلول تصميم مبتكرة توازن بين الجماليات والوظائف والاستدامة.',
    FR: 'Créer des solutions de conception innovantes qui équilibrent esthétique, fonctionnalité et durabilité.'
  },
  'services.development': {
    EN: 'Development',
    AR: 'التطوير',
    FR: 'Développement'
  },
  'services.development.text': {
    EN: 'Detailed planning, documentation, and coordination with all stakeholders and contractors.',
    AR: 'التخطيط المفصل والتوثيق والتنسيق مع جميع أصحاب المصلحة والمقاولين.',
    FR: 'Planification détaillée, documentation et coordination avec toutes les parties prenantes et entrepreneurs.'
  },
  'services.delivery': {
    EN: 'Delivery',
    AR: 'التسليم',
    FR: 'Livraison'
  },
  'services.delivery.text': {
    EN: 'Project management and oversight ensuring quality construction and timely completion.',
    AR: 'إدارة المشاريع والإشراف لضمان البناء عالي الجودة والإنجاز في الوقت المحدد.',
    FR: 'Gestion de projet et supervision garantissant une construction de qualité et un achèvement dans les délais.'
  },

  // Portfolio Page
  'portfolio.filter.all': {
    EN: 'All Projects',
    AR: 'جميع المشاريع',
    FR: 'Tous les Projets'
  },
  'portfolio.no.projects': {
    EN: 'No projects found for the selected category.',
    AR: 'لم يتم العثور على مشاريع للفئة المحددة.',
    FR: 'Aucun projet trouvé pour la catégorie sélectionnée.'
  },

  // Project Detail Page
  'project.overview': {
    EN: 'Project Overview',
    AR: 'نظرة عامة على المشروع',
    FR: 'Aperçu du Projet'
  },
  'project.details': {
    EN: 'Project Details',
    AR: 'تفاصيل المشروع',
    FR: 'Détails du Projet'
  },
  'project.features': {
    EN: 'Key Features',
    AR: 'الميزات الرئيسية',
    FR: 'Caractéristiques Clés'
  },
  'project.gallery': {
    EN: 'Project Gallery',
    AR: 'معرض المشروع',
    FR: 'Galerie du Projet'
  },
  'project.interested': {
    EN: 'Interested in Similar Projects?',
    AR: 'مهتم بمشاريع مماثلة؟',
    FR: 'Intéressé par des Projets Similaires?'
  },
  'project.interested.text': {
    EN: 'Explore more of our architectural work or get in touch to discuss your project.',
    AR: 'استكشف المزيد من أعمالنا المعمارية أو تواصل معنا لمناقشة مشروعك.',
    FR: 'Explorez plus de nos travaux architecturaux ou contactez-nous pour discuter de votre projet.'
  },
  'project.view.more': {
    EN: 'View More Projects',
    AR: 'عرض المزيد من المشاريع',
    FR: 'Voir Plus de Projets'
  },
  'project.start': {
    EN: 'Start Your Project',
    AR: 'ابدأ مشروعك',
    FR: 'Commencez Votre Projet'
  },
  'project.not.found': {
    EN: 'Project Not Found',
    AR: 'لم يتم العثور على المشروع',
    FR: 'Projet Non Trouvé'
  },
  'project.not.found.text': {
    EN: 'The project you\'re looking for doesn\'t exist.',
    AR: 'المشروع الذي تبحث عنه غير موجود.',
    FR: 'Le projet que vous recherchez n\'existe pas.'
  },
  'project.back.portfolio': {
    EN: 'Back to Portfolio',
    AR: 'العودة إلى الأعمال',
    FR: 'Retour au Portfolio'
  },

  // Contact Page
  'contact.info': {
    EN: 'Contact Information',
    AR: 'معلومات الاتصال',
    FR: 'Informations de Contact'
  },
  'contact.address': {
    EN: 'Address',
    AR: 'العنوان',
    FR: 'Adresse'
  },
  'contact.phone': {
    EN: 'Phone',
    AR: 'الهاتف',
    FR: 'Téléphone'
  },
  'contact.hours': {
    EN: 'Office Hours',
    AR: 'ساعات العمل',
    FR: 'Heures de Bureau'
  },
  'contact.find.us': {
    EN: 'Find Us',
    AR: 'اعثر علينا',
    FR: 'Nous Trouver'
  },
  'contact.map.location': {
    EN: 'Interactive Google Maps',
    AR: 'خرائط جوجل التفاعلية',
    FR: 'Google Maps Interactif'
  },
  'contact.map.text': {
    EN: 'Location: San Francisco, CA',
    AR: 'الموقع: سان فرانسيسكو، كاليفورنيا',
    FR: 'Emplacement: San Francisco, CA'
  },
  'contact.success': {
    EN: 'Message sent successfully!',
    AR: 'تم إرسال الرسالة بنجاح!',
    FR: 'Message envoyé avec succès!'
  },
  'contact.success.text': {
    EN: 'We\'ll get back to you as soon as possible.',
    AR: 'سنعود إليك في أقرب وقت ممكن.',
    FR: 'Nous vous répondrons dès que possible.'
  },
  'contact.error': {
    EN: 'Error sending message',
    AR: 'خطأ في إرسال الرسالة',
    FR: 'Erreur lors de l\'envoi du message'
  },
  'contact.error.text': {
    EN: 'Please try again later.',
    AR: 'يرجى المحاولة مرة أخرى لاحقاً.',
    FR: 'Veuillez réessayer plus tard.'
  },

  // Form fields
  'form.name.placeholder': {
    EN: 'Your full name',
    AR: 'اسمك الكامل',
    FR: 'Votre nom complet'
  },
  'form.email.placeholder': {
    EN: 'your.email@example.com',
    AR: 'your.email@example.com',
    FR: 'votre.email@exemple.com'
  },
  'form.project.placeholder': {
    EN: 'Select a project type',
    AR: 'اختر نوع المشروع',
    FR: 'Sélectionnez un type de projet'
  },
  'form.message.placeholder': {
    EN: 'Tell us about your project...',
    AR: 'أخبرنا عن مشروعك...',
    FR: 'Parlez-nous de votre projet...'
  },
  'form.project.residential': {
    EN: 'Residential Design',
    AR: 'التصميم السكني',
    FR: 'Design Résidentiel'
  },
  'form.project.commercial': {
    EN: 'Commercial Design',
    AR: 'التصميم التجاري',
    FR: 'Design Commercial'
  },
  'form.project.interior': {
    EN: 'Interior Design',
    AR: 'التصميم الداخلي',
    FR: 'Design Intérieur'
  },
  'form.project.consultation': {
    EN: 'Consultation',
    AR: 'استشارة',
    FR: 'Consultation'
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