// K-Study Bridge Central Application Logic

// Global State
window.currentLanguage = localStorage.getItem('language') || 'mn';
window.currentTheme = localStorage.getItem('theme') || 'light';

// Language Dictionary (English & Mongolian)
const translations = {
  en: {
    logoName: 'K-Study Bridge',
    logoTagline: 'Korea Study Gateway',
    navHome: 'Home',
    navServices: 'Services',
    navDashboard: 'Interactive Hub',
    navBooking: 'Book Consultation',
    navFaq: 'FAQs',
    langToggle: 'Монгол 🇲🇳',

    // Hero Section
    heroBadge: '🎓 South Korea International Student Gateway',
    heroTitle: 'Your Ultimate Pathway to Study in South Korea',
    heroDesc: 'Embark on your academic journey in Seoul and other vibrant Korean cities. K-Study Bridge simplifies your admission, visa processing, cost calculations, and housing discovery from start to finish.',
    heroBtnExplore: 'Explore Interactive Tools',
    heroBtnConsult: 'Free Consultation',
    heroStatsStudents: 'Consulted Students',
    heroStatsUniversities: 'Partner Universities',
    heroStatsVisa: 'Visa Success Rate',

    // Services Section
    servicesTitle: 'Our Comprehensive Services',
    servicesSubtitle: 'Everything you need to successfully transition, study, and thrive in South Korea.',
    service1Title: 'University Admissions',
    service1Desc: 'Direct application support, essay reviews, and selection advice for top Korean universities and language schools.',
    service2Title: 'Visa & Documentation',
    service2Desc: 'Complete guidance on D-2/D-4 visa checklists, bank statements, legalizations, and embassy scheduling.',
    service3Title: 'Housing Finder',
    service3Desc: 'Find cozy, budget-friendly rooms (Dormitories, Goshiwons, Studios) tailored for international student needs.',
    service4Title: 'Living Support',
    service4Desc: 'Practical tips on alien card registration (ARC), Korean phone plans, health insurance, and part-time jobs.',
    detailUniBadge: '🏫 University & Language Prep',
    detailUniTitle: 'Build a strong application path for top Korean universities and language programs.',
    detailUniDesc: 'We help you choose the right university, review your essay, prepare the application package, and plan your next step with confidence.',
    detailUniPrimary: 'Start your application plan',
    detailUniSecondary: 'Back to university hub',
    detailUniPanelTitle: 'Why this service helps',
    detailUniStep1Title: 'University and major matching',
    detailUniStep1Desc: 'We shortlist schools and majors that fit your score, goals, budget, and language level.',
    detailUniStep2Title: 'Application and essay review',
    detailUniStep2Desc: 'We help refine your statement, CV, academic records, and recommendation documents.',
    detailUniStep3Title: 'Language prep roadmap',
    detailUniStep3Desc: 'We guide your TOPIK preparation and admission timeline so you stay on track.',
    detailVisaBadge: '📄 Visa & Documentation',
    detailVisaTitle: 'Prepare every visa requirement, bank proof, and embassy interview detail with clarity.',
    detailVisaDesc: 'From D-2 to D-4, we help you organize documents, understand financial proof, and rehearse the interview.',
    detailVisaPrimary: 'Start visa guidance',
    detailVisaSecondary: 'Back to visa hub',
    detailVisaPanelTitle: 'What this service covers',
    detailVisaStep1Title: 'Visa type and checklist',
    detailVisaStep1Desc: 'We explain D-2 and D-4 requirements, deadlines, and the exact papers you need.',
    detailVisaStep2Title: 'Bank and document review',
    detailVisaStep2Desc: 'We verify bank statements, legalizations, translations, and official document formats.',
    detailVisaStep3Title: 'Embassy interview prep',
    detailVisaStep3Desc: 'We coach your answers, goals, and presentation style for the embassy interview.',
    detailHousingBadge: '🏠 Housing Finder',
    detailHousingTitle: 'Find student-friendly housing that fits your budget, location, and comfort level.',
    detailHousingDesc: 'We help you compare dorms, goshiwons, studios, and short-term stays based on price, safety, and transport access.',
    detailHousingPrimary: 'Start housing support',
    detailHousingSecondary: 'Back to housing catalog',
    detailHousingPanelTitle: 'Why this service helps',
    detailHousingStep1Title: 'Budget-friendly options',
    detailHousingStep1Desc: 'We shortlist accommodations that match your monthly budget and student lifestyle.',
    detailHousingStep2Title: 'Location and safety',
    detailHousingStep2Desc: 'We evaluate transport, campus distance, supermarket access, and safety factors.',
    detailHousingStep3Title: 'Contract guidance',
    detailHousingStep3Desc: 'We help you understand rent terms, deposits, and the best housing setup for your stay.',
    detailLivingBadge: '🌐 Living & Integration',
    detailLivingTitle: 'Get practical guidance for life in Korea after arrival.',
    detailLivingDesc: 'We walk you through ARC, bank setup, Korean phone plans, and part-time work rules in a simple sequence.',
    detailLivingPrimary: 'Start life-in-Korea guidance',
    detailLivingSecondary: 'Back to integration hub',
    detailLivingPanelTitle: 'What this service covers',
    detailLivingStep1Title: 'ARC and registration process',
    detailLivingStep1Desc: 'We explain the document list, timeline, and registration path for your first weeks in Korea.',
    detailLivingStep2Title: 'Bank and phone setup',
    detailLivingStep2Desc: 'We help with banking, SIM activation, local payment tools, and practical setup tips.',
    detailLivingStep3Title: 'Work and legal guidance',
    detailLivingStep3Desc: 'We explain part-time work rules, work permits, and the safe way to begin your new life.',
    detailUniIntroNote: 'From the first consultation to the final review, you will receive clear guidance, structured support, and a timeline for every application step.',
    detailUniWhatTitle: 'What we do',
    detailUniWhatItem1: 'Match schools, majors, and programs to your profile',
    detailUniWhatItem2: 'Prepare application forms, essays, and CVs',
    detailUniWhatItem3: 'Explain deadlines, requirements, and scholarship options',
    detailUniWhatItem4: 'Support your TOPIK and admission preparation plan',
    detailUniWhoTitle: 'Who it is for',
    detailUniWhoItem1: 'Students applying for a bachelor\'s or master\'s degree',
    detailUniWhoItem2: 'Students preparing for Korean language programs',
    detailUniWhoItem3: 'Applicants who need help starting their documents and essays',
    detailUniWhoItem4: 'Students who want to reduce mistakes and save time',
    detailUniOutcomeTitle: 'Expected outcome',
    detailUniOutcomeItem1: 'Improve the quality of your application package',
    detailUniOutcomeItem2: 'Focus your choices on the best-fit universities',
    detailUniOutcomeItem3: 'Create a clear strategy for admission and visa steps',
    detailUniOutcomeItem4: 'Prepare with confidence for your study journey',
    detailUniProcessTitle: 'How the service works',
    detailUniProcessText: 'We begin with your profile and continue with a structured timeline, essay feedback, and guidance on your next admission steps.',
    detailVisaDocTitle: 'Prepare documents',
    detailVisaDocItem1: 'Passport, diploma, transcripts, and academic certificates',
    detailVisaDocItem2: 'University acceptance and enrollment documents',
    detailVisaDocItem3: 'Bank statement and financial proof',
    detailVisaDocItem4: 'Tuition payment and family support documents',
    detailVisaWatchTitle: 'Important points',
    detailVisaWatchItem1: 'Apostille and embassy legalization where required',
    detailVisaWatchItem2: 'Correct names, dates, and document formats',
    detailVisaWatchItem3: 'Consistent financial balance and frozen proof',
    detailVisaWatchItem4: 'Clear and confident embassy interview answers',
    detailVisaResultTitle: 'Expected result',
    detailVisaResultItem1: 'Reduce mistakes in your visa documents',
    detailVisaResultItem2: 'Meet the document checklist with confidence',
    detailVisaResultItem3: 'Prepare for the interview in a structured way',
    detailVisaResultItem4: 'Move smoothly into the next admissions step',
    detailVisaHelpTitle: 'How we help',
    detailVisaHelpText: 'We support you from document preparation to interview readiness, so your visa process stays calm, organized, and efficient.',
    detailHousingTypeTitle: 'Housing types we recommend',
    detailHousingTypeItem1: 'University dormitory',
    detailHousingTypeItem2: 'Goshiwon / mini-studio',
    detailHousingTypeItem3: 'Private one-room studio',
    detailHousingTypeItem4: 'Campus-area rental options',
    detailHousingCriteriaTitle: 'Main criteria',
    detailHousingCriteriaItem1: 'Budget and monthly rent',
    detailHousingCriteriaItem2: 'Transport and campus access',
    detailHousingCriteriaItem3: 'Safety and comfort level',
    detailHousingCriteriaItem4: 'Shared or private living setup',
    detailHousingOutcomeTitle: 'Expected result',
    detailHousingOutcomeItem1: 'Find the most comfortable housing option',
    detailHousingOutcomeItem2: 'Understand contracts and terms before signing',
    detailHousingOutcomeItem3: 'Save money with a clear budget plan',
    detailHousingOutcomeItem4: 'Be ready for the start of your semester',
    detailHousingHelpTitle: 'How we support you',
    detailHousingHelpText: 'We align your lifestyle, budget, and study location to match the best housing option for your arrival in Korea.',
    detailLivingActionTitle: 'Core actions',
    detailLivingActionItem1: 'ARC document checklist and registration steps',
    detailLivingActionItem2: 'Bank account opening and local payment setup',
    detailLivingActionItem3: 'Korean SIM and phone number guide',
    detailLivingActionItem4: 'Part-time work approval and permit guidance',
    detailLivingNeedTitle: 'What you need',
    detailLivingNeedItem1: 'Practical support and trusted guidance',
    detailLivingNeedItem2: 'Clear references and ready-to-use documents',
    detailLivingNeedItem3: 'A simple plan for registration and setup',
    detailLivingNeedItem4: 'Clear direction for your first weeks in Korea',
    detailLivingOutcomeTitle: 'Expected result',
    detailLivingOutcomeItem1: 'Make the first weeks easier and more organized',
    detailLivingOutcomeItem2: 'Reduce the risk of missing deadlines or documents',
    detailLivingOutcomeItem3: 'Feel ready to start university with confidence',
    detailLivingOutcomeItem4: 'Adjust smoothly to daily life in Korea',
    detailLivingHelpTitle: 'How we help',
    detailLivingHelpText: 'We guide you through the first 1–2 weeks in Korea so your daily setup feels manageable, safe, and well planned.',

    // Interactive Hub Section
    hubTitle: 'Interactive Student Hub',
    hubSubtitle: 'Plan your budget, search Top Korean Universities, check your Visa readiness, and discover beautiful accommodation instantly.',
    tabUniversities: '🏫 University Finder',
    tabCalculator: '💰 Living Cost Calculator',
    tabVisa: '📄 Visa Checklist Assistant',
    tabHousing: '🏠 Housing Catalog',

    // Tab 1: Universities Search
    uniSearchPlaceholder: 'Search by name or major...',
    uniFilterType: 'Program Type',
    uniFilterTypeAll: 'All Programs',
    uniFilterTypeUni: 'Degree Program (D-2)',
    uniFilterTypeLang: 'Language Program (D-4)',
    uniFilterLoc: 'Region',
    uniFilterLocAll: 'All Regions',
    uniFilterMaxTuition: 'Max Tuition per Semester',
    uniHeaderTuition: 'Tuition Fee (Sem)',
    uniHeaderScholarship: 'Scholarship Potential',
    uniHeaderTopik: 'Language Requirements',
    uniHeaderMajors: 'Popular Majors',
    uniButtonVisit: 'Official Website',
    uniRating: 'Student Rating',
    uniNoResults: 'No universities found matching your filters.',

    // Tab 2: Living Cost Estimator (Additional items handled in calculator.js)
    calcHeading: 'Estimate Your Monthly Expenses in South Korea',
    calcSubheading: 'Adjust the sliders to build your custom monthly budget in KRW. Values convert live!',
    calcLabelRent: 'Rent & Utilities (Goshiwon / Dorm / Studio):',
    calcLabelFood: 'Food & Groceries (Dining out, cafe, cooking):',
    calcLabelTransit: 'Public Transportation (Subway, buses, taxis):',
    calcLabelInsurance: 'National Health Insurance (NHIS) & Health:',
    calcLabelPersonal: 'Pocket Money (Hobbies, phone plan, shopping):',
    calcResultTitle: 'Total Estimated Monthly Budget',
    calcBudgetLevel: 'Budget Tier Recommendation:',
    calcConvertDisclaimer: '* Currency conversions are based on standard real-time approximations (1 USD = 1350 KRW, 1 KRW = 2.55 MNT).',

    // Tab 3: Visa Checklist
    visaHeading: 'Visa Documentation Assistant',
    visaSubheading: 'Select your visa type to generate a tailored list of documents required for your embassy interview.',
    visaSelectLabel: 'Choose Visa Category:',
    visaOptionD4: 'D-4-1 (General Student - Language Course)',
    visaOptionD2: 'D-2 (Associate, Bachelor, Master, PhD Degree)',
    visaDocReq: 'Mandatory Documents',
    visaDocDesc: 'Please prepare original documents in English/Korean, apostilled/legalized where applicable.',
    visaStatusTrack: 'Document Prep Checklist Tracker',

    // Tab 4: Housing Catalog
    houseHeading: 'International Student Accommodation Catalog',
    houseSubheading: 'Explore common housing models in South Korea with budget ranges and benefits.',
    houseTypeDorm: 'University Dormitory',
    houseTypeDormDesc: 'Safe, on-campus living. Ideal for networking with global peers. Usually shared room setup.',
    houseTypeGoshi: 'Goshiwon (Mini-Studio)',
    houseTypeGoshiDesc: 'High-density, budget-friendly private rooms with individual bathrooms. Free rice and kimchi usually included!',
    houseTypeOneroom: 'One-room (Studio Apartment)',
    houseTypeOneroomDesc: 'Spacious private apartments. Requires a high deposit (Key Money) but offers ultimate privacy and kitchen.',
    houseTypeShare: 'Shared House / Coliving',
    houseTypeShareDesc: 'Private bedrooms with shared kitchen and social lounge. Fun, cozy community living for students.',
    houseFeatures: 'Key Features',
    houseAvgCost: 'Estimated Monthly Cost',

    // Booking Wizard Section
    bookSectionTitle: 'Book Your Free Strategic Consultation',
    bookSectionSubtitle: 'Submit your profile to our Korean Education Experts. We will design a custom roadmap for you.',
    bookStep1: 'Personal Details',
    bookStep2: 'Academics & Program',
    bookStep3: 'Summary',
    bookLabelName: 'Full Name (as in Passport)',
    bookPlaceholderName: 'Enter your full name',
    bookLabelEmail: 'Email Address',
    bookPlaceholderEmail: 'example@domain.com',
    bookLabelPhone: 'Phone Number (WhatsApp/Telegram preferred)',
    bookPlaceholderPhone: '+976 ...',
    bookLabelLevel: 'Your Current Academic Level',
    bookLevelHigh: 'High School Graduate',
    bookLevelUni: 'University Student (Bachelor\'s / Master\'s)',
    bookLevelGrad: 'Completed Bachelor\'s / Graduated',
    bookLabelProg: 'What program do you want to apply for?',
    bookProgLang: 'Korean Language School (D-4)',
    bookProgBach: 'Bachelor\'s Degree (D-2-1 / D-2-2)',
    bookProgMast: 'Master\'s / Ph.D. Degree (D-2-3 / D-2-4)',
    bookLabelTerm: 'Intended Intake Semester',
    bookLabelKorean: 'Your Current Korean Language Level',
    bookLevelNone: 'No Korean knowledge (Beginner)',
    bookLevelBasic: 'Basic conversational / TOPIK Level 1-2',
    bookLevelInter: 'Intermediate / TOPIK Level 3-4',
    bookLevelAdv: 'Advanced / TOPIK Level 5-6',
    bookLabelNotes: 'Additional Questions or Special Requests',
    bookPlaceholderNotes: 'Tell us about your budget, preferred university, or major...',
    bookErrorName: 'Please enter your full name.',
    bookErrorEmail: 'Please enter a valid email address.',
    bookErrorPhone: 'Please enter your phone number.',
    bookErrorProg: 'Please select a program type.',
    bookBtnPrev: 'Back',
    bookBtnNext: 'Continue',
    bookBtnSubmit: 'Schedule Consultation 🚀',
    bookSuccessTitle: 'Application Submitted Successfully! 🎉',
    bookSuccessDesc: 'Баярлалаа! Thank you. Your information has been registered. Our Senior Academic Adviser will review your profile and contact you via Email/Phone within 24 hours to schedule a free Video Call.',
    bookSuccessBtnReset: 'Submit Another Application',

    // FAQ Section
    faqSectionTitle: 'Frequently Asked Questions',
    faqSectionSubtitle: 'Answers to the most common queries from students preparing to study in South Korea.',
    faq1Q: 'When should I start preparing my application?',
    faq1A: 'For language programs (D-4), start 3-4 months prior to the intake (four intakes per year: March, June, September, December). For degrees (D-2), start 6-8 months prior (two intakes: March and September).',
    faq2Q: 'What is the minimum bank balance required for a Korean student visa?',
    faq2A: 'For D-2 degree visa, Korean embassies generally require a bank certificate showing approximately $16,000 to $20,000. For D-4 language programs, it is usually $8,000 to $10,000 in a frozen bank account.',
    faq3Q: 'Can I work part-time while studying in Korea?',
    faq3A: 'Yes! International students with an ARC can work part-time up to 20-30 hours per week (depending on language proficiency) after completing 1 semester (or 6 months of study) with school authorization.',
    faq4Q: 'How high must my TOPIK level be to get scholarships?',
    faq4A: 'For degree courses, having TOPIK Level 3 usually yields a 30% discount, Level 4 offers 50% discount, and Level 5-6 frequently guarantees a 100% full tuition waiver at many national and private universities.',

    // Footer
    footerDesc: 'Your trusted partner in navigating university admissions, visa compliance, housing, and social life in South Korea. Building bridges for international students.',
    footerContact: 'Contact Us',
    footerAddress: '📍 Seoul Office: 5F, Teheran-ro 108, Gangnam-gu, Seoul, S. Korea',
    footerPhone: '📞 Hotline: +82-2-555-9080 (Seoul) / +976-7011-0000 (Ulaanbaatar)',
    footerCopyright: '© 2026 K-Study Bridge. All Rights Reserved. Created with ❤️ for future students.',
    serviceLearnMore: 'Explore Tool ➔',
    settingsApiKeyLabel: 'Google Gemini API Key:',
    settingsBtnSave: 'Save',
    settingsPlaceholder: 'Enter Gemini API Key...',
    settingsHelpText: 'Enter a Gemini API key from Google AI Studio (starts with AIza...) to enable Gemini 2.5 conversational AI. Leave blank to use offline rule-based mode. Get a free key at <a href="https://aistudio.google.com/" target="_blank">Google AI Studio</a>.',
    chatStatusOffline: 'Offline Mode',
    chatStatusOnline: 'AI Online'
  },
  mn: {
    logoName: 'K-Study Bridge',
    logoTagline: 'БНСУ-д Суралцах Гүүр',
    navHome: 'Нүүр',
    navServices: 'Үйлчилгээ',
    navDashboard: 'Интерактив Булан',
    navBooking: 'Зөвлөгөө Авах',
    navFaq: 'Асуулт Хариулт',
    langToggle: 'English 🇺🇸',

    // Hero Section
    heroBadge: '🎓 Өмнөд Солонгосын Гадаад Оюутны Мэдээллийн Нэгдсэн Сан',
    heroTitle: 'Солонгост суралцах таны хамгийн дөт, найдвартай зам',
    heroDesc: 'Сөүл болон БНСУ-ын томоохон хотуудад боловсрол эзэмших аяллаа эхлүүлээрэй. Сургууль сонголт, хэлний бэлтгэл, визний бичиг баримт, амьжиргааны зардал тооцоолуур, тохилог орон сууц олоход бид танд эхнээс нь дуустал туслах болно.',
    heroBtnExplore: 'Интерактив хэрэгслийг турших',
    heroBtnConsult: 'Үнэгүй зөвлөгөө авах',
    heroStatsStudents: 'Амжилттай зөвлөсөн оюутан',
    heroStatsUniversities: 'Хамтрагч сургуулиуд',
    heroStatsVisa: 'Визний амжилт',

    // Services Section
    servicesTitle: 'Бидний цогц үйлчилгээ',
    servicesSubtitle: 'БНСУ-д амжилттай суралцаж, амьдрахад тань хэрэгцээтэй бүх зүйлийг нэг дороос.',
    service1Title: 'Сургууль, Хэлний Бэлтгэл',
    service1Desc: 'БНСУ-ын шилдэг их дээд сургууль, хэлний бэлтгэлийн хөтөлбөрт шууд элсэх өргөдөл бэлтгэх, эсээ хянах, зөв сургууль сонгоход тусална.',
    service2Title: 'Виз, Бичиг Баримт Гүйцэтгэл',
    service2Desc: 'D-2/D-4 ангиллын визний шаардлага, банкны баталгаа, бичиг баримтын баталгаажуулалт, ЭСЯ-ны ярилцлагад бэлтгэх зөвлөмж.',
    service3Title: 'Тохилог Орон Сууц хайх',
    service3Desc: 'Оюутны дотуур байр, Гошивон, тусдаа нэг өрөө байр гэх мэт гадаад оюутнуудын төсөвт нийцсэн тохилог байруудыг санал болгоно.',
    service4Title: 'Амьжиргаа, Интеграци',
    service4Desc: 'БНСУ-д очсоны дараах гадаад иргэний үнэмлэх (ARC) авах, банкны данс нээх, Солонгос утасны дугаар авах болон цагийн ажлын зөвшөөрөл авах практик заавар.',
    detailUniBadge: '🏫 Сургууль, Хэлний Бэлтгэл',
    detailUniTitle: 'Шилдэг сургуулиудад шууд орох өргөдөл, эсээ, төлөвлөгөөг нэг дороос бэлдье.',
    detailUniDesc: 'Сургууль, мэргэжил, хөтөлбөрөө сонгох, өргөдлийн материалаа бэлдэх, эсээний хяналт, дараагийн алхмыг төлөвлөхөд тусална.',
    detailUniPrimary: 'Өргөдлийг эхлүүлэх',
    detailUniSecondary: 'Сургуулийн каталог руу буцах',
    detailUniPanelTitle: 'Энэ үйлчилгээний гол давуу тал',
    detailUniStep1Title: 'Сургууль болон мэргэжлийн тохируулга',
    detailUniStep1Desc: 'Таны төсөв, TOPIK түвшин, боловсролын суурь дээр үндэслэн 5–10 сургууль санал болгоно.',
    detailUniStep2Title: 'Өргөдлийн баримт, эсээ хяналт',
    detailUniStep2Desc: 'Мотивацийн эсээ, CV, академик дэвтэр, хүлээн авах зөвлөмжийг шалгана.',
    detailUniStep3Title: 'Хэлний бэлтгэлийн замын төлөвлөгөө',
    detailUniStep3Desc: 'TOPIK оноогоо нэмэгдүүлж, элсэхэд бэлэн болох хүртлээ алхам алхмаар бэлтгэнэ.',
    detailVisaBadge: '📄 Виз, Бичиг Баримт Гүйцэтгэл',
    detailVisaTitle: 'Визний шаардлага, банкны баталгаа, ЭСЯ-ны бэлтгэлээ алдаагүй бэлдэх.',
    detailVisaDesc: 'D-2 болон D-4 визний бүрдүүлэлтэд шаардагдах бичиг баримтыг нэг бүрчлэн шалгаж, ЭСЯ-ны ярилцлагын бэлтгэлээ бэлдэхэд тусална.',
    detailVisaPrimary: 'Визний зөвлөгөөг эхлүүлэх',
    detailVisaSecondary: 'Визний хэсэг рүү буцах',
    detailVisaPanelTitle: 'Энэ үйлчилгээний гол агуулга',
    detailVisaStep1Title: 'Визний төрөл, шаардлага',
    detailVisaStep1Desc: 'D-2/D-4-ын ялгаа, шаардлагатай бичиг баримт, хугацаа болон хүлээн авах боломжийг тодорхойлно.',
    detailVisaStep2Title: 'Банкны баталгаа, баримт шалгалт',
    detailVisaStep2Desc: 'Банкны баталгааны хэмжээ, хадгалалт, хуулбарын зохион байгуулалт, албан ёсны баталгаажуулалттай холбоотой ажлыг удирдана.',
    detailVisaStep3Title: 'ЭСЯ-ны ярилцлага',
    detailVisaStep3Desc: 'Ярилцлагын асуулт, хариулт, бэлтгэл, сургууль болон зорилгоо илэрхийлэхдээ анхаарах зүйлсийг дамжуулна.',
    detailHousingBadge: '🏠 Тохилог Орон Сууц хайх',
    detailHousingTitle: 'Төсөв, байршил, тав тухтай байдлыг харгалзан орон сууцны шилдэг сонголтуудыг олоорой.',
    detailHousingDesc: 'Оюутны дотуур байр, гошивон, тусдаа нэг өрөө, урт хугацааны түрээслэх байр зэрэг амьдралд тохирсон сонголтуудыг танилцуулна.',
    detailHousingPrimary: 'Орон сууцны зөвлөгөөг эхлүүлэх',
    detailHousingSecondary: 'Орон сууцны каталог руу буцах',
    detailHousingPanelTitle: 'Энэ үйлчилгээний гол давуу тал',
    detailHousingStep1Title: 'Төсөвт нийцсэн сонголтууд',
    detailHousingStep1Desc: 'Өөрийн санхүүгийн боломжид нийцсэн үнэтэй байр, дотуур байр, гошивонгийн хувилбаруудыг санал болгоно.',
    detailHousingStep2Title: 'Байршил, аюулгүй байдал',
    detailHousingStep2Desc: 'Сургуультай ойр, метро, супермаркет, эмнэлэгт ойрхон байлгах боломжийг үнэлнэ.',
    detailHousingStep3Title: 'Үнийн болон гэрээний дэмжлэг',
    detailHousingStep3Desc: 'Түрээслэх нөхцөл, гэрээний нөхцлийг ойлгож, хамгийн тохиромжтой сонголтондоо орохыг дэмжинэ.',
    detailLivingBadge: '🌐 Амьжиргаа, Интеграци',
    detailLivingTitle: 'БНСУ-д ирсний дараах амьдралын үндсэн алхмуудыг хялбархан эхлүүлээрэй.',
    detailLivingDesc: 'ARC авах, банкны данс нээх, Солонгос утасны дугаар авах, цагийн ажлын зөвшөөрөл авах зэрэг практик алхмуудыг тайлбарлана.',
    detailLivingPrimary: 'Амьдралын заавар авах',
    detailLivingSecondary: 'Амьжиргааны хэсэг рүү буцах',
    detailLivingPanelTitle: 'Энэ үйлчилгээний гол агуулга',
    detailLivingStep1Title: 'ARC болон бүртгэлийн үйл явц',
    detailLivingStep1Desc: 'Гадаад иргэний үнэмлэх авахад шаардлагатай алхмууд, бичиг баримтын жагсаалт, цагийн хуваарь зэргийг тайлбарлана.',
    detailLivingStep2Title: 'Банк, утас, амьдралын хэрэгцээ',
    detailLivingStep2Desc: 'Банкны данс нээх, Солонгос утасны дугаар авах, мөнгө, холбоо барих хэрэгслийн тохиргоо зэрэг практик алхмуудыг агуулна.',
    detailLivingStep3Title: 'Цагийн ажил, хууль тогтоомж',
    detailLivingStep3Desc: 'Цагийн ажлын зөвшөөрөл, хөдөлмөрийн хязгаар, дэс дараалсан алхмуудыг хялбархан ойлгоход тань туслана.',
    detailUniIntroNote: 'Эхний зөвлөгөөнөөс эхлээд эцсийн хяналт хүртэл та алхам алхмаар гарын авлага, бүтэцтэй дэмжлэг, дараагийн үе шатны цагийн хуваарийг авах болно.',
    detailUniWhatTitle: 'Бид юу хийдэг вэ?',
    detailUniWhatItem1: 'Сургууль, мэргэжил, хөтөлбөрөө таны профайлд тохируулан сонгох',
    detailUniWhatItem2: 'Өргөдлийн маягт, эсээ, CV-ийг бэлтгэх',
    detailUniWhatItem3: 'Элсэлтийн хугацаа, шаардлага, тэтгэлгийн боломжийг тайлбарлах',
    detailUniWhatItem4: 'TOPIK болон бэлтгэлийн төлөвлөлтийг дэмжих',
    detailUniWhoTitle: 'Хэнд тохиромжтой вэ?',
    detailUniWhoItem1: 'Бакалавр, магистрын хөтөлбөрт орохыг хүсч буй оюутан',
    detailUniWhoItem2: 'Солонгос хэлний бэлтгэлд шууд орох гэж буй хүн',
    detailUniWhoItem3: 'Өргөдлийг эхний ээлжинд бие даан бэлдэхэд хэцүү байгаа хүн',
    detailUniWhoItem4: 'Зөв сургуулиа сонгож, алдааг багасгахыг хүсэгч',
    detailUniOutcomeTitle: 'Үр дүн',
    detailUniOutcomeItem1: 'Өргөдлийн материалын чанарыг сайжруулна',
    detailUniOutcomeItem2: 'Элсэлтийн боломжит сургуульд анхаарлаа төвлөрүүлнэ',
    detailUniOutcomeItem3: 'Сонголт болон сэдвийн оновчтой хослолыг гаргана',
    detailUniOutcomeItem4: 'Бэлтгэл, өргөдөл, визний дараагийн алхмуудыг холбоно',
    detailUniProcessTitle: 'Үйлчилгээний явц',
    detailUniProcessText: 'Эхний зөвлөгөөнөөс эхлээд өргөдлийн материал хүлээн авснаас хойш 7–10 хоногийн дотор бэлэн болсон төлөвлөгөө, эсээний хяналтын тайланг танд хүргэхээр төлөвлөж байна.',
    detailVisaDocTitle: 'Бэлтгэх баримт',
    detailVisaDocItem1: 'Иргэний үнэмлэх, диплом, транскрипт',
    detailVisaDocItem2: 'Сургуульд элсэх зөвшөөрөл, хүлээн зөвшөөрөх бичиг',
    detailVisaDocItem3: 'Банкны баталгааны хуулбар',
    detailVisaDocItem4: 'Төлбөрийн баримт, гэр бүлийн лавлагаа',
    detailVisaWatchTitle: 'Анхаарах зүйл',
    detailVisaWatchItem1: 'Апостиль болон ЭСЯ-ны баталгаажуулалт',
    detailVisaWatchItem2: 'Бичиг баримтын нэр, огноо зөв эсэх',
    detailVisaWatchItem3: 'Төсөв, банкин дахь үлдэгдлийг тогтмол хадгалах',
    detailVisaWatchItem4: 'ЭСЯ-ны ярилцлагад зорилгоо тодорхой илэрхийлэх',
    detailVisaResultTitle: 'Энэ үйлчилгээний үр дүн',
    detailVisaResultItem1: 'Бичиг баримтын алдааг багасгана',
    detailVisaResultItem2: 'Визний мэдүүлгийн дагаж мөрдөх шаардлагыг тайлбарлана',
    detailVisaResultItem3: 'Ярилцлагын бэлтгэлийг системтэй болгоно',
    detailVisaResultItem4: 'Дараагийн алхмуудыг энгийн замаар явуулна',
    detailVisaHelpTitle: 'Бидний тусламж',
    detailVisaHelpText: 'Та өргөдлийн баримтаа бэлдээд, визний хугацааг хойшлуулахгүй байхын тулд сонголт, баталгаажуулалт, ярилцлагын дэмжлэгийг нэг дороос авч болно.',
    detailHousingTypeTitle: 'Санал болгож буй байрны төрөл',
    detailHousingTypeItem1: 'Оюутны дотуур байр',
    detailHousingTypeItem2: 'Гошивон / хагас дотуур байр',
    detailHousingTypeItem3: 'Тусдаа нэг өрөө',
    detailHousingTypeItem4: 'Сургуулийн ойролцоох түрээслэх байр',
    detailHousingCriteriaTitle: 'Шалгуур',
    detailHousingCriteriaItem1: 'Төсөв, сарын төлбөр',
    detailHousingCriteriaItem2: 'Метро, автобусны холболт',
    detailHousingCriteriaItem3: 'Сургуулийн ойрхон байдал',
    detailHousingCriteriaItem4: 'Аюулгүй байдал, тав тух',
    detailHousingOutcomeTitle: 'Үр дүн',
    detailHousingOutcomeItem1: 'Амьдрах хамгийн тохиромжтой сонголтыг олох',
    detailHousingOutcomeItem2: 'Гэрээний нөхцөлийг зөв ойлгох',
    detailHousingOutcomeItem3: 'Зардлыг хэмнэх төлөвлөгөө гаргах',
    detailHousingOutcomeItem4: 'Сургуулиа эхлэхэд бэлэн байх',
    detailHousingHelpTitle: 'Бидний тусламж',
    detailHousingHelpText: 'Таны амьдралын хэв маяг, төсөв, сургуульдаа ойр байдал зэрэгт тулгуурлан орон сууцны хамгийн тохиромжтой хувилбарыг сонгоход чиглүүлнэ.',
    detailLivingActionTitle: 'Үндсэн үйл ажиллагаа',
    detailLivingActionItem1: 'ARC авахад шаардлагатай бичиг баримтын жагсаалт',
    detailLivingActionItem2: 'Банкны данс нээх алхмууд',
    detailLivingActionItem3: 'Солонгос утасны дугаар авах заавар',
    detailLivingActionItem4: 'Цагийн ажлын зөвшөөрөл авах заавар',
    detailLivingNeedTitle: 'Танд хэрэгтэй зүйл',
    detailLivingNeedItem1: 'Туршлагатай тусламж, практик зөвлөгөө',
    detailLivingNeedItem2: 'Хэрэглэх лавлагаа болон баримт бичиг',
    detailLivingNeedItem3: 'Бүртгэлийн хугацаа, хувийн мэдээллийн удирдлага',
    detailLivingNeedItem4: 'Амжилттай эхлэхэд шаардлагатай зөв удирдамж',
    detailLivingOutcomeTitle: 'Энэ үйлчилгээний үр дүн',
    detailLivingOutcomeItem1: 'Амьдралын эхний алхмуудыг хялбарчилна',
    detailLivingOutcomeItem2: 'Бичиг баримт, хугацааг буруу алдах эрсдлийг багасгана',
    detailLivingOutcomeItem3: 'Сургуулиа эхлэхэд бэлэн байдлыг нэмэгдүүлнэ',
    detailLivingOutcomeItem4: 'Солонгос дахь амьдралыг илүү тайван эхлүүлнэ',
    detailLivingHelpTitle: 'Бидний дэмжлэг',
    detailLivingHelpText: 'Та БНСУ-д очсоны дараах эхний 1–2 долоо хоногийн үйл ажиллагааг хялбар, аюулгүй эхлүүлэхэд шаардлагатай алхмуудыг дарааллаар нь үзүүлнэ.',

    // Interactive Hub Section
    hubTitle: 'Интерактив оюутны булан',
    hubSubtitle: 'Солонгос дахь амьдралын өртгөө тооцож, шилдэг их сургуулиудыг шүүж, визний бүрдүүлэлтээ шалгаж, орон сууцны хувилбаруудтай танилцаарай.',
    tabUniversities: '🏫 Сургууль хайх',
    tabCalculator: '💰 Зардал Тооцоолуур',
    tabVisa: '📄 Визний Бүрдүүлэлт Туслах',
    tabHousing: '🏠 Орон сууцны каталог',

    // Tab 1: Universities Search
    uniSearchPlaceholder: 'Сургуулийн нэр эсвэл мэргэжлээр хайх...',
    uniFilterType: 'Хөтөлбөрийн төрөл',
    uniFilterTypeAll: 'Бүх хөтөлбөр',
    uniFilterTypeUni: 'Бакалавр / Магистр (D-2)',
    uniFilterTypeLang: 'Хэлний бэлтгэл (D-4)',
    uniFilterLoc: 'Бүс нутаг',
    uniFilterLocAll: 'Бүх бүс',
    uniFilterMaxTuition: 'Сургалтын төлбөр (Семестрээр)',
    uniHeaderTuition: 'Сургалтын төлбөр (Семестр)',
    uniHeaderScholarship: 'Тэтгэлэг авах боломж',
    uniHeaderTopik: 'Хэлний шаардлага',
    uniHeaderMajors: 'Эрэлттэй мэргэжлүүд',
    uniButtonVisit: 'Албан ёсны сайт',
    uniRating: 'Оюутны үнэлгээ',
    uniNoResults: 'Таны шүүлтүүрт тохирох сургууль олдсонгүй.',

    // Tab 2: Living Cost Estimator
    calcHeading: 'БНСУ-д сар бүр гарах амьжиргааны зардлыг тооцоолно уу',
    calcSubheading: 'Слайдеруудыг ашиглан Солонгос воноор (KRW) зардлаа тохируулахад доллар болон төгрөг рүү автоматаар хөрвөнө.',
    calcLabelRent: 'Байр түрээс & Ашиглалтын зардал (Дотуур байр / Гошивон / Нэг өрөө):',
    calcLabelFood: 'Хоол хүнс (Гадуур хооллох, кафе, хүнсний дэлгүүр):',
    calcLabelTransit: 'Нийтийн тээврийн зардал (Метро, автобус, такси):',
    calcLabelInsurance: 'Эрүүл мэндийн даатгал (National Health Insurance) & Эм тариа:',
    calcLabelPersonal: 'Хэрэглээний мөнгө (Утасны төлбөр, хувцас авах, хобби):',
    calcResultTitle: 'Сар бүрийн нийт тооцоолсон зардал',
    calcBudgetLevel: 'Төсвийн зэрэглэлийн зөвлөмж:',
    calcConvertDisclaimer: '* Валютын хөрвүүлэлтийг одоогийн дундаж ханшаар хийсэн болно (1 USD = 1350 KRW, 1 KRW = 2.55 MNT).',

    // Tab 3: Visa Checklist
    visaHeading: 'Визний Бичиг Баримтын Туслах',
    visaSubheading: 'ЭСЯ-ны ярилцлагад ороход хэрэгтэй бичиг баримтын жагсаалтыг визний ангиллаар нь автоматаар үүсгэнэ.',
    visaSelectLabel: 'Визний ангилал сонгох:',
    visaOptionD4: 'D-4-1 (Ерөнхий сурагч - Солонгос хэлний бэлтгэл)',
    visaOptionD2: 'D-2 (Бакалавр, Магистр, Докторантурын зэрэг)',
    visaDocReq: 'Бүрдүүлэх шаардлагатай бичиг баримтууд',
    visaDocDesc: 'Бичиг баримтуудыг Англи эсвэл Солонгос хэл дээр орчуулж, нотариатаар баталгаажуулсан, шаардлагатай бол Апостиль хийлгэсэн байна.',
    visaStatusTrack: 'Бүрдүүлэлтийг хянах чеклист',

    // Tab 4: Housing Catalog
    houseHeading: 'Олон улсын оюутнуудад зориулсан орон сууцны мэдээлэл',
    houseSubheading: 'Өмнөд Солонгост оюутнуудын амьдардаг нийтлэг сууцны давуу тал, зардлыг харьцуулаарай.',
    houseTypeDorm: 'Сургуулийн дотуур байр',
    houseTypeDormDesc: 'Аюулгүй, кампус дотор байрладаг. Олон орны найз нөхөдтэй болоход хамгийн тохиромжтой. Ихэвчлэн 2-4-үүлээ өрөөгөө хуваалцдаг.',
    houseTypeGoshi: 'Гошивон (Жижиг өрөө)',
    houseTypeGoshiDesc: 'Маш хэмнэлттэй, бага талбайтай боловч дотроо шүршүүр, бие засах газартай хувийн өрөө. Үнэгүй будаа, кимчи, рамен санал болгодог давуу талтай.',
    houseTypeOneroom: 'Нэг өрөө байр (Studio)',
    houseTypeOneroomDesc: 'Хувийн орон зайг эрхэмлэгчдэд зориулсан тохилог тусдаа байр. Барьцаа мөнгө (Key Money) өндөр байдаг ч гал тогоо болон угаалгын машин хувьдаа эзэмшинэ.',
    houseTypeShare: 'Шэйр Хаус / Хамтран амьдрах байр',
    houseTypeShareDesc: 'Хувийн өрөөтэй боловч зочны өрөө болон гал тогоогоо бусад оюутнуудтай хамтран ашигладаг. Олон улсын найрсаг хамт олонтой амьдрах сонирхолтой оюутнуудад зориулагдсан.',
    houseFeatures: 'Гол давуу талууд',
    houseAvgCost: 'Дундаж сарын зардал',

    // Booking Wizard Section
    bookSectionTitle: 'Үнэ төлбөргүй зөвлөгөө захиалах',
    bookSectionSubtitle: 'Сургууль элсэлтийн Солонгос мэргэжилтнүүдтэй холбогдон өөрт тохирсон суралцах хувийн төлөвлөгөөг боловсруулаарай.',
    bookStep1: 'Хувийн мэдээлэл',
    bookStep2: 'Боловсрол & Хөтөлбөр',
    bookStep3: 'Нэгтгэл',
    bookLabelName: 'Овог нэр (Гадаад паспортын дагуу)',
    bookPlaceholderName: 'Овог нэрээ Англиар оруулна уу',
    bookLabelEmail: 'Имэйл хаяг',
    bookPlaceholderEmail: 'example@domain.com',
    bookLabelPhone: 'Утасны дугаар (Холбогдох дугаар)',
    bookPlaceholderPhone: 'Дугаараа оруулна уу',
    bookLabelLevel: 'Таны одоогийн боловсролын зэрэг',
    bookLevelHigh: 'Бүрэн дунд (Элсэгч / Төгсөгч)',
    bookLevelUni: 'Их сургуулийн оюутан (Бакалавр / Магистр)',
    bookLevelGrad: 'Их сургууль төгссөн / Дипломтой',
    bookLabelProg: 'Та ямар хөтөлбөрөөр суралцах хүсэлтэй байна вэ?',
    bookProgLang: 'Солонгос хэлний бэлтгэл (D-4)',
    bookProgBach: 'Бакалаврын зэрэг (D-2)',
    bookProgMast: 'Магистр / Докторын зэрэг (D-2)',
    bookLabelTerm: 'Элсэхээр төлөвлөж буй улирал',
    bookLabelKorean: 'Таны Солонгос хэлний одоогийн түвшин',
    bookLevelNone: 'Солонгос хэлний мэдлэггүй (Анхан шат)',
    bookLevelBasic: 'Өдөр тутмын ярианы мэдлэгтэй / TOPIK 1-2',
    bookLevelInter: 'Дунд шатны мэдлэгтэй / TOPIK 3-4',
    bookLevelAdv: 'Гүнзгий шат / TOPIK 5-6',
    bookLabelNotes: 'Нэмэлт асуулт эсвэл онцгой хүсэлтүүд',
    bookPlaceholderNotes: 'Сонгохыг хүсч буй сургууль, мэргэжил эсвэл төсвийн боломжийнхоо талаар бичнэ үү...',
    bookErrorName: 'Та өөрийн бүтэн нэрийг оруулна уу.',
    bookErrorEmail: 'Зөв имэйл хаяг оруулна уу.',
    bookErrorPhone: 'Утасны дугаараа оруулна уу.',
    bookErrorProg: 'Хөтөлбөрийн төрлийг сонгоно уу.',
    bookBtnPrev: 'Ухрах',
    bookBtnNext: 'Үргэлжлүүлэх',
    bookBtnSubmit: 'Захиалга баталгаажуулах 🚀',
    bookSuccessTitle: 'Хүсэлт амжилттай бүртгэгдлээ! 🎉',
    bookSuccessDesc: 'Баярлалаа! Таны мэдээлэл бүртгэгдлээ. Манай ахлах сургалтын зөвлөх таны профайлыг хянаж үзээд 24 цагийн дотор Имэйл эсвэл утсаар холбогдож үнэ төлбөргүй зөвлөгөө өгөх видео дуудлагын цагийг тохируулах болно.',
    bookSuccessBtnReset: 'Дахин хүсэлт илгээх',

    // FAQ Section
    faqSectionTitle: 'Түгээмэл асуудаг асуултууд',
    faqSectionSubtitle: 'Солонгост суралцахаар бэлтгэж буй оюутнуудад хамгийн их тулгардаг асуултуудын хариултууд.',
    faq1Q: 'Би хэзээнээс бэлтгэлээ эхлэх хэрэгтэй вэ?',
    faq1A: 'Хэлний бэлтгэлд (D-4) элсэхийн тулд хичээл эхлэхээс 3-4 сарын өмнө бэлдэж эхэлнэ (Жилд 4 удаа элсэлт авдаг: 3, 6, 9, 12 сард). Харин үндсэн ангид (D-2) элсэхийн тулд 6-8 сарын өмнө бэлтгэлийг хангана (Жилд 2 удаа: 3 болон 9 сар).',
    faq2Q: 'Виз мэдүүлэхэд банкны дансанд байх доод хэмжээ хэд вэ?',
    faq2A: 'Бакалавр, магистрын D-2 визэнд ихэвчлэн 16,000-аас 20,000 ам.долларын баталгаа ЭСЯ шаарддаг. Хэлний бэлтгэлийн D-4 визний хувьд 8,000-аас 10,000 ам.долларыг тодорхой хугацаанд царцаасан байх хэрэгтэй байдаг.',
    faq3Q: 'Солонгост сурч байхдаа цагийн ажил хийх боломжтой юу?',
    faq3A: 'Тийм ээ! Гадаад оюутны ARC үнэмлэх авсан тохиолдолд эхний 1 семестр (эсвэл 6 сар) амжилттай суралцсаны дараа сургуулиасаа зөвшөөрөл авч, долоо хоногт 20-30 хүртэл цагаар хууль ёсоор цагийн ажил хийх эрхтэй болно.',
    faq4Q: 'Солонгост тэтгэлэг авахын тулд TOPIK-ын хэддүгээр түвшинтэй байх ёстой вэ?',
    faq4A: 'Бакалавр эсвэл магистрын ангид TOPIK 3-тай бол 30% төлбөрийн хөнгөлөлт, TOPIK 4-тэй бол 50%, харин TOPIK 5 эсвэл 6-тай байвал маш олон сургууль сургалтын төлбөрөөс 100% чөлөөлөх тэтгэлэг санал болгодог.',

    // Footer
    footerDesc: 'Өмнөд Солонгост элсэн суралцах, визний туслалцаа, орон сууц, нийгмийн амьдралыг удирдан чиглүүлэх таны хамгийн найдвартай хамтрагч. Оюутнуудын гүүр.',
    footerContact: 'Холбоо барих',
    footerAddress: '📍 Сөүл дэх салбар: БНСУ, Сөүл хот, Гангнам дүүрэг, Тэхеран-ро 108, 5 давхар',
    footerPhone: '📞 Утас: +82-2-555-9080 (Сөүл) / +976-7011-0000 (Улаанбаатар)',
    footerCopyright: '© 2026 K-Study Bridge. Бүх эрх хуулиар хамгаалагдсан. Ирээдүйн оюутнуудад зориулан ❤️-ээр бүтээв.',
    serviceLearnMore: 'Дэлгэрэнгүй үзэх ➔',
    settingsApiKeyLabel: 'Google Gemini API түлхүүр:',
    settingsBtnSave: 'Хадгалах',
    settingsPlaceholder: 'AI идэвхжүүлэх түлхүүр оруулах...',
    settingsHelpText: 'Google AI Studio-оос авсан Gemini 2.5 түлхүүр (AIza...) оруулбал жинхэнэ AI систем идэвхжих бөгөөд оруулахгүй бол оффлайн горимоор ажиллана. Түлхүүрийг <a href="https://aistudio.google.com/" target="_blank">Google AI Studio</a>-оос үнэгүй авч болно.',
    chatStatusOffline: 'Оффлайн горим',
    chatStatusOnline: 'AI Онлайн'
  },
  ko: {
    logoName: 'K-Study Bridge',
    logoTagline: '한국 유학 게이트웨이',
    navHome: '홈',
    navServices: '서비스',
    navDashboard: '인터랙티브 허브',
    navBooking: '상담 예약',
    navFaq: '자주 묻는 질문',
    langToggle: '한국어 🇰🇷',

    // Hero Section
    heroBadge: '🎓 대한민국 유학생 정보 포털',
    heroTitle: '성공적인 한국 유학을 위한 최고의 길잡이',
    heroDesc: '서울을 비롯한 활기찬 한국의 대학에서 학업 여정을 시작하세요. K-Study Bridge가 대학 입학, 비자 발급, 생활비 계산, 주거지 탐색까지 전 과정을 지원합니다.',
    heroBtnExplore: '인터랙티브 툴 체험하기',
    heroBtnConsult: '무료 상담 신청',
    heroStatsStudents: '상담 학생 수',
    heroStatsUniversities: '파트너 대학',
    heroStatsVisa: '비자 승인율',

    // Services Section
    servicesTitle: '제공 서비스',
    servicesSubtitle: '한국에서의 성공적인 정착과 학업을 위해 필요한 모든 것을 한곳에서 제공합니다.',
    service1Title: '대학 및 어학당 입학',
    service1Desc: '한국 우수 대학 및 어학연수 과정의 입학 지원서 작성, 자기소개서 첨삭, 맞춤형 대학 선택을 지원합니다.',
    service2Title: '비자 및 서류 대행',
    service2Desc: 'D-2(유학) / D-4(일반연수) 비자 구비서류, 은행 잔고증명서, 아포스티유 및 영사 확인, 대사관 인터뷰 준비 가이드.',
    service3Title: '주거지 찾기',
    service3Desc: '기숙사, 고시원, 원룸 등 유학생의 예산과 요구에 맞는 쾌적하고 저렴한 숙소를 찾아드립니다.',
    service4Title: '생활 지원 및 정착',
    service4Desc: '외국인등록증(ARC) 발급, 한국 휴대폰 개통, 국민건강보험 안내 및 시간제 취업(알바) 허가 등 실제적인 생활 팁 제공.',
    detailUniBadge: '🏫 대학 및 어학 연수 준비',
    detailUniTitle: '한국의 최상위 대학과 어학 연수 과정에 맞춘 입학 준비를 시작하세요.',
    detailUniDesc: '대학 선택, 자기소개서 첨삭, 지원서 작성, 다음 단계의 일정까지 한 번에 정리해 드립니다.',
    detailUniPrimary: '입학 지원 시작하기',
    detailUniSecondary: '대학 허브로 돌아가기',
    detailUniPanelTitle: '이 서비스의 핵심 장점',
    detailUniStep1Title: '대학 및 전공 매칭',
    detailUniStep1Desc: '점수, 목표, 예산, 한국어 수준에 맞는 학교와 전공을 선별합니다.',
    detailUniStep2Title: '지원서 및 자기소개서 검토',
    detailUniStep2Desc: '자기소개서, 이력서, 학업 기록, 추천서 문서를 함께 점검합니다.',
    detailUniStep3Title: '어학 준비 로드맵',
    detailUniStep3Desc: 'TOPIK 준비와 입학 일정까지 단계별로 관리해 드립니다.',
    detailVisaBadge: '📄 비자 및 서류 대행',
    detailVisaTitle: '비자 요건, 은행 잔고 증명, 대사관 인터뷰 준비까지 깔끔하게 정리하세요.',
    detailVisaDesc: 'D-2부터 D-4까지 필요한 서류와 준비 과정을 정리하고, 인터뷰 준비까지 지원합니다.',
    detailVisaPrimary: '비자 안내 시작하기',
    detailVisaSecondary: '비자 허브로 돌아가기',
    detailVisaPanelTitle: '이 서비스에서 다루는 내용',
    detailVisaStep1Title: '비자 종류와 체크리스트',
    detailVisaStep1Desc: 'D-2와 D-4의 차이, 필요한 서류, 일정과 제출 기준을 설명합니다.',
    detailVisaStep2Title: '은행 증빙 및 서류 검토',
    detailVisaStep2Desc: '은행 잔고 증명, 번역, 공증, 아포스티유 등 서류 형식을 확인합니다.',
    detailVisaStep3Title: '대사관 인터뷰 준비',
    detailVisaStep3Desc: '면접 답변, 목표 표현, 전반적인 발표 흐름을 함께 준비합니다.',
    detailHousingBadge: '🏠 주거지 찾기',
    detailHousingTitle: '예산, 위치, 편의성을 고려해 학생에게 맞는 숙소를 찾으세요.',
    detailHousingDesc: '기숙사, 고시원, 원룸, 장기 임대 등 학생 생활에 적합한 숙소를 비교해 드립니다.',
    detailHousingPrimary: '주거 지원 시작하기',
    detailHousingSecondary: '주거지 카탈로그로 돌아가기',
    detailHousingPanelTitle: '이 서비스의 핵심 장점',
    detailHousingStep1Title: '예산 맞춤형 선택',
    detailHousingStep1Desc: '월 예산과 생활 스타일에 맞는 숙소를 우선적으로 추천합니다.',
    detailHousingStep2Title: '위치와 안전성',
    detailHousingStep2Desc: '대학과의 거리, 교통, 마트, 병원 접근성을 함께 체크합니다.',
    detailHousingStep3Title: '계약 및 비용 지원',
    detailHousingStep3Desc: '월세, 보증금, 계약 조건을 쉽게 이해할 수 있도록 안내합니다.',
    detailLivingBadge: '🌐 생활 지원 및 정착',
    detailLivingTitle: '한국에 도착한 뒤 필요한 생활 절차를 단계별로 쉽게 시작하세요.',
    detailLivingDesc: 'ARC 발급, 은행 개설, 한국 휴대폰 개통, 시간제 취업 허가까지 실제적인 흐름을 안내합니다.',
    detailLivingPrimary: '생활 안내 시작하기',
    detailLivingSecondary: '생활 지원 허브로 돌아가기',
    detailLivingPanelTitle: '이 서비스에서 다루는 내용',
    detailLivingStep1Title: 'ARC 및 등록 절차',
    detailLivingStep1Desc: '외국인등록증 발급에 필요한 서류, 일정, 절차를 설명합니다.',
    detailLivingStep2Title: '은행 및 휴대폰 설정',
    detailLivingStep2Desc: '은행 개설, SIM 구매, 결제 수단, 실생활 설정을 안내합니다.',
    detailLivingStep3Title: '알바 및 법적 안내',
    detailLivingStep3Desc: '시간제 취업 허가, 근로 제한, 안전한 생활 시작을 도와드립니다.',
    detailUniIntroNote: '첫 상담부터 최종 검토까지, 신청 단계마다 명확한 가이드와 구조화된 지원을 받게 됩니다.',
    detailUniWhatTitle: '우리가 하는 일',
    detailUniWhatItem1: '학생의 성적, 목표, 예산, 한국어 수준에 맞는 대학과 전공을 매칭합니다',
    detailUniWhatItem2: '지원서, 자기소개서, 이력서와 제출 서류를 준비합니다',
    detailUniWhatItem3: '입학 일정, 요건, 장학금 기회를 설명합니다',
    detailUniWhatItem4: 'TOPIK 준비와 입학 로드맵을 함께 설계합니다',
    detailUniWhoTitle: '누구에게 맞나요?',
    detailUniWhoItem1: '학사·석사 과정 진학을 준비하는 학생',
    detailUniWhoItem2: '한국어 연수 과정을 바로 준비하는 학생',
    detailUniWhoItem3: '초기 서류와 자기소개서 작성이 어려운 학생',
    detailUniWhoItem4: '실수를 줄이고 시간을 절약하고 싶은 학생',
    detailUniOutcomeTitle: '결과',
    detailUniOutcomeItem1: '지원서의 완성도를 높입니다',
    detailUniOutcomeItem2: '가장 적합한 대학 선택에 집중할 수 있습니다',
    detailUniOutcomeItem3: '입학과 비자 단계의 흐름을 명확히 정리합니다',
    detailUniOutcomeItem4: '유학 여정을 자신감 있게 시작합니다',
    detailUniProcessTitle: '서비스 진행 방식',
    detailUniProcessText: '첫 상담을 시작으로, 체계적인 일정, 자기소개서 피드백, 다음 입학 단계까지 한 번에 안내해 드립니다.',
    detailVisaDocTitle: '준비 서류',
    detailVisaDocItem1: '여권, 졸업증명서, 성적표, 학업 증빙서류',
    detailVisaDocItem2: '대학 입학 허가서 및 등록 관련 서류',
    detailVisaDocItem3: '은행 잔고 증명서 및 재정 증빙',
    detailVisaDocItem4: '수수료 납부 및 가족 지원 관련 서류',
    detailVisaWatchTitle: '주의할 점',
    detailVisaWatchItem1: '필요한 경우 아포스티유 및 영사 확인',
    detailVisaWatchItem2: '이름, 날짜, 서류 형식의 정확성',
    detailVisaWatchItem3: '은행 잔고와 동결 증빙의 일관성',
    detailVisaWatchItem4: '대사관 인터뷰에서 목표를 분명히 설명하는 태도',
    detailVisaResultTitle: '이 서비스의 결과',
    detailVisaResultItem1: '비자 서류의 실수를 줄입니다',
    detailVisaResultItem2: '체크리스트를 자신 있게 준비할 수 있습니다',
    detailVisaResultItem3: '인터뷰 준비를 체계적으로 진행합니다',
    detailVisaResultItem4: '다음 입학 단계로 부드럽게 이동합니다',
    detailVisaHelpTitle: '도움받는 방법',
    detailVisaHelpText: '서류 준비부터 인터뷰 대비까지 한 번에 도와드려, 비자 절차를 차분하고 효율적으로 진행할 수 있게 합니다.',
    detailHousingTypeTitle: '추천하는 주거 형태',
    detailHousingTypeItem1: '대학교 기숙사',
    detailHousingTypeItem2: '고시원 / 미니 스튜디오',
    detailHousingTypeItem3: '개인 원룸 스튜디오',
    detailHousingTypeItem4: '캠퍼스 주변 임대 옵션',
    detailHousingCriteriaTitle: '주요 기준',
    detailHousingCriteriaItem1: '예산과 월세',
    detailHousingCriteriaItem2: '교통과 캠퍼스 접근성',
    detailHousingCriteriaItem3: '안전성과 편안함',
    detailHousingCriteriaItem4: '개인실 또는 쉐어형 생활',
    detailHousingOutcomeTitle: '결과',
    detailHousingOutcomeItem1: '가장 잘 맞는 숙소를 찾게 됩니다',
    detailHousingOutcomeItem2: '계약 조건을 사전에 충분히 이해합니다',
    detailHousingOutcomeItem3: '예산 계획에 따라 비용을 절약합니다',
    detailHousingOutcomeItem4: '학기 시작에 대비할 수 있습니다',
    detailHousingHelpTitle: '도움받는 방법',
    detailHousingHelpText: '생활 방식, 예산, 학교 위치에 맞춰 한국에서 가장 알맞은 숙소를 선택하도록 안내합니다.',
    detailLivingActionTitle: '핵심 활동',
    detailLivingActionItem1: 'ARC 발급에 필요한 서류와 등록 절차',
    detailLivingActionItem2: '은행 개설과 현지 결제 설정',
    detailLivingActionItem3: '한국 휴대폰 SIM 및 번호 발급 안내',
    detailLivingActionItem4: '시간제 취업 허가와 근로 관련 안내',
    detailLivingNeedTitle: '필요한 것',
    detailLivingNeedItem1: '실전형 지원과 신뢰할 수 있는 안내',
    detailLivingNeedItem2: '바로 활용할 수 있는 참고자료와 서류',
    detailLivingNeedItem3: '등록 일정과 개인 정보 관리 계획',
    detailLivingNeedItem4: '한국 생활 첫 주를 준비하는 명확한 방향',
    detailLivingOutcomeTitle: '결과',
    detailLivingOutcomeItem1: '첫 주를 더 쉽게 정리할 수 있습니다',
    detailLivingOutcomeItem2: '서류나 마감일을 놓칠 위험을 줄입니다',
    detailLivingOutcomeItem3: '대학 시작 전 준비를 더 잘할 수 있습니다',
    detailLivingOutcomeItem4: '한국 생활에 안정적으로 적응합니다',
    detailLivingHelpTitle: '도움받는 방법',
    detailLivingHelpText: '한국에 도착한 첫 1~2주 동안 필요한 절차를 차례대로 안내해, 삶을 더 안전하고 편안하게 시작할 수 있게 돕습니다.',

    // Interactive Hub Section
    hubTitle: '유학생 인터랙티브 허브',
    hubSubtitle: '생활비를 계산하고, 한국의 주요 대학교를 검색하며, 비자 준비 상태를 확인하고, 최적의 주거지를 찾아보세요.',
    tabUniversities: '🏫 대학 찾기',
    tabCalculator: '💰 생활비 계산기',
    tabVisa: '📄 비자 체크리스트',
    tabHousing: '🏠 주거지 카탈로그',

    // Tab 1: Universities Search
    uniSearchPlaceholder: '대학 이름 또는 전공으로 검색...',
    uniFilterType: '과정 구분',
    uniFilterTypeAll: '전체 과정',
    uniFilterTypeUni: '학위 과정 (D-2)',
    uniFilterTypeLang: '어학 연수 (D-4)',
    uniFilterLoc: '지역',
    uniFilterLocAll: '전체 지역',
    uniFilterMaxTuition: '학기당 최대 등록금',
    uniHeaderTuition: '학기 등록금',
    uniHeaderScholarship: '장학 혜택',
    uniHeaderTopik: '한국어 요건',
    uniHeaderMajors: '인기 전공',
    uniButtonVisit: '공식 웹사이트',
    uniRating: '학생 평점',
    uniNoResults: '조건에 맞는 대학을 찾지 못했습니다.',

    // Tab 2: Living Cost Estimator
    calcHeading: '한국에서의 월별 예상 생활비 계산',
    calcSubheading: '슬라이더를 조정하여 원화(KRW) 기준의 맞춤 예산을 만들어 보세요. 실시간으로 변환됩니다!',
    calcLabelRent: '주거비 및 공과금 (고시원 / 기숙사 / 원룸):',
    calcLabelFood: '식비 (외식, 카페, 식료품 구입):',
    calcLabelTransit: '교통비 (지하철, 버스, 택시 등):',
    calcLabelInsurance: '국민건강보험료 및 의료비:',
    calcLabelPersonal: '품위유지 및 용돈 (휴대폰 요금, 취미, 쇼핑):',
    calcResultTitle: '월간 총 예상 예산',
    calcBudgetLevel: '예산 수준 권장안:',
    calcConvertDisclaimer: '* 통화 환율은 표준 실시간 근사치를 기준으로 합니다 (1 USD = 1350 KRW, 1 KRW = 2.55 MNT).',

    // Tab 3: Visa Checklist
    visaHeading: '비자 구비서류 도우미',
    visaSubheading: '비자 유형을 선택하면 대사관 인터뷰에 필요한 구비서류 목록이 자동으로 생성됩니다.',
    visaSelectLabel: '비자 카테고리 선택:',
    visaOptionD4: 'D-4-1 (일반연수 - 어학당 과정)',
    visaOptionD2: 'D-2 (전문학사, 학사, 석사, 박사 학위 과정)',
    visaDocReq: '필수 구비서류',
    visaDocDesc: '모든 서류는 영어 또는 한국어로 작성되어야 하며, 해당되는 경우 아포스티유나 영사 확인을 받아야 합니다.',
    visaStatusTrack: '구비서류 준비 체크리스트',

    // Tab 4: Housing Catalog
    houseHeading: '외국인 유학생 주거 카탈로그',
    houseSubheading: '한국의 대표적인 학생 주거 형태별 예산 범위와 특징을 살펴보세요.',
    houseTypeDorm: '대학교 기숙사',
    houseTypeDormDesc: '캠퍼스 내에 위치하여 안전하고 글로벌 친구들과 교류하기 좋습니다. 주로 다인실로 구성됩니다.',
    houseTypeGoshi: '고시원 (미니 스튜디오)',
    houseTypeGoshiDesc: '개별 욕실을 갖춘 고밀도 저예산 개인실입니다. 일반적으로 밥과 김치가 무료로 제공됩니다.',
    houseTypeOneroom: '원룸 (스튜디오 아파트)',
    houseTypeOneroomDesc: '넓고 독립된 개인 아파트입니다. 보증금(Key Money)이 높지만 독립적인 주방과 세탁실을 사용할 수 있습니다.',
    houseTypeShare: '셰어하우스 / 코리빙',
    houseTypeShareDesc: '개인 침실을 쓰면서 거실과 주방을 공유하는 형태입니다. 사교적이고 아늑한 공동체 생활에 적합합니다.',
    houseFeatures: '주요 특징',
    houseAvgCost: '예상 월 비용',

    // Booking Wizard Section
    bookSectionTitle: '무료 전략 상담 예약',
    bookSectionSubtitle: '프로필을 제출해주시면 한국 교육 전문가가 맞춤형 로드맵을 설계해 드립니다.',
    bookStep1: '개인 정보',
    bookStep2: '학업 및 희망 과정',
    bookStep3: '신청 확인',
    bookLabelName: '영문 성명 (여권 기준)',
    bookPlaceholderName: '여권상 영문 이름을 입력하세요',
    bookLabelEmail: '이메일 주소',
    bookPlaceholderEmail: 'example@domain.com',
    bookLabelPhone: '전화번호 (WhatsApp/Telegram 선호)',
    bookPlaceholderPhone: '전화번호를 입력하세요',
    bookLabelLevel: '현재 최종 학력',
    bookLevelHigh: '고등학교 졸업 / 예정',
    bookLevelUni: '대학교 재학 (학사 / 석사)',
    bookLevelGrad: '대학교 졸업 / 학사 취득',
    bookLabelProg: '지원하고자 하는 학업 과정은 무엇입니까?',
    bookProgLang: '한국어 연수 (D-4)',
    bookProgBach: '학사 학위 과정 (D-2-2)',
    bookProgMast: '석사 / 박사 과정 (D-2-3 / D-2-4)',
    bookLabelTerm: '입학 희망 학기',
    bookLabelKorean: '현재 한국어 구사 능력',
    bookLevelNone: '한국어 기초 없음 (입문)',
    bookLevelBasic: '기초 회화 가능 / TOPIK 1-2급',
    bookLevelInter: '중급 회화 가능 / TOPIK 3-4급',
    bookLevelAdv: '고급 한국어 구사 / TOPIK 5-6급',
    bookLabelNotes: '추가 문의사항 또는 특별 요청',
    bookPlaceholderNotes: '희망 대학, 전공, 예산 범위 등에 대해 알려주세요...',
    bookErrorName: '영문 성명을 입력해주세요.',
    bookErrorEmail: '유효한 이메일 주소를 입력해주세요.',
    bookErrorPhone: '전화번호를 입력해주세요.',
    bookErrorProg: '학업 과정을 선택해주세요.',
    bookBtnPrev: '이전',
    bookBtnNext: '다음',
    bookBtnSubmit: '무료 상담 예약 신청 🚀',
    bookSuccessTitle: '신청이 성공적으로 제출되었습니다! 🎉',
    bookSuccessDesc: '감사합니다! 귀하의 정보가 등록되었습니다. 전문 교육 컨설턴트가 프로필을 검토한 후, 24시간 이내에 이메일 또는 전화로 연락하여 무료 화상 상담 일정을 안내해 드리겠습니다.',
    bookSuccessBtnReset: '추가 신청서 작성',

    // FAQ Section
    faqSectionTitle: '자주 묻는 질문 (FAQ)',
    faqSectionSubtitle: '한국 유학을 준비하는 학생들이 가장 많이 궁금해하는 질문에 대한 답변입니다.',
    faq1Q: '입학 지원 준비는 언제 시작해야 하나요?',
    faq1A: '어학 연수(D-4) 과정은 학기 개강 3~4개월 전부터 준비를 시작해야 합니다 (연 4회 개강: 3월, 6월, 9월, 12월). 학위 과정(D-2)은 개강 6~8개월 전부터 시작해야 합니다 (연 2회 개강: 3월, 9월).',
    faq2Q: '한국 학생 비자 발급을 위한 최소 은행 잔고 기준은 얼마인가요?',
    faq2A: 'D-2 학위 비자의 경우, 대사관에서는 약 $16,000~$20,000 상당의 은행 잔고 증명서를 요구합니다. D-4 어학 연수 과정은 일반적으로 $8,000~$10,000 정도의 은행 잔고를 일정 기간 동결해야 합니다.',
    faq3Q: '한국에서 유학하는 동안 아르바이트를 할 수 있나요?',
    faq3A: '네! 외국인등록증(ARC)을 소지한 유학생은 대학의 확인 및 출입국관리사무소의 시간제 취업 허가를 받아 주당 20~30시간(한국어 수준에 따라 상이)까지 합법적으로 아르바이트를 할 수 있습니다 (단, 1학기/6개월 이상 이수 후 가능).',
    faq4Q: '장학금을 받으려면 TOPIK 성적이 어느 정도 필요하나요?',
    faq4A: '학위 과정의 경우, TOPIK 3급은 보통 등록금 30% 감면, TOPIK 4급은 50% 감면을 받으며, TOPIK 5~6급의 우수한 성적은 많은 국공립 및 사립대학에서 100% 등록금 전액 면제 혜택을 보장합니다.',

    // Footer
    footerDesc: '한국 대학교 입학, 비자 적격성, 주거 안내 및 대학 생활 지원까지 유학생들이 겪는 모든 과정을 신뢰로 함께하는 파트너입니다. 유학생들을 위한 든든한 가교가 되겠습니다.',
    footerContact: '문의하기',
    footerAddress: '📍 서울 본사: 대한민국 서울특별시 강남구 테헤란로 108, 5층',
    footerPhone: '📞 대표 번호: +82-2-555-9080 (서울) / +976-7011-0000 (울란바토르)',
    footerCopyright: '© 2026 K-Study Bridge. All Rights Reserved. 미래의 유학생들을 위해 ❤️으로 제작되었습니다.',
    serviceLearnMore: '자세히 보기 ➔',
    settingsApiKeyLabel: 'Google Gemini API 키:',
    settingsBtnSave: '저장',
    settingsPlaceholder: 'API 키 입력...',
    settingsHelpText: 'Google AI Studio에서 발급한 Gemini 2.5 API 키(AIza...)를 입력하면 최신 대화형 AI가 활성화됩니다. 입력하지 않으면 오프라인 모드로 작동합니다. <a href="https://aistudio.google.com/" target="_blank">Google AI Studio</a>에서 무료 키를 발급받을 수 있습니다.',
    chatStatusOffline: '오프라인 모드',
    chatStatusOnline: 'AI 온라인'
  }
};

// UI DOM References for Dynamic Rendering
document.addEventListener('DOMContentLoaded', () => {
  // Navigation & General selectors
  const langSelect = document.getElementById('lang-select');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');

  // Multi-tabs
  const tabButtons = document.querySelectorAll('.dashboard-tab-btn');
  const tabPanels = document.querySelectorAll('.dashboard-panel');

  // Service Cards Click to Dashboard Navigation
  const serviceCards = document.querySelectorAll('.service-card[data-target-tab]');
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      const detailPage = card.getAttribute('data-detail-page');
      if (detailPage) {
        window.location.href = detailPage;
        return;
      }

      const targetTab = card.getAttribute('data-target-tab');
      if (targetTab) {
        const targetBtn = document.querySelector(`.dashboard-tab-btn[data-tab="${targetTab}"]`);
        if (targetBtn) {
          targetBtn.click();
          const dashboardSection = document.getElementById('dashboard');
          if (dashboardSection) {
            dashboardSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    });
  });

  // Visa Assistant Checks
  const visaSelect = document.getElementById('visa-category-select');
  const visaChecklistContainer = document.getElementById('visa-checklist-container');

  // FAQ accordion bindings
  const faqItems = document.querySelectorAll('.faq-item');

  function applyTranslations() {
    const lang = window.currentLanguage;
    const dict = translations[lang];

    // Set document lang attribute for CSS targeting and accessibility
    document.documentElement.setAttribute('lang', lang);

    // Read elements marked with 'data-translate' attribute
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Read attributes translations
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
      const key = el.getAttribute('data-translate-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Translate dynamic Select choices
    updateFormSelects();

    // Sync dropdown select value if it differs
    if (langSelect && langSelect.value !== lang) {
      langSelect.value = lang;
    }
  }

  function updateFormSelects() {
    const lang = window.currentLanguage;
    const dict = translations[lang];

    // Current level
    const lvlSelect = document.getElementById('book-current-level');
    if (lvlSelect) {
      lvlSelect.options[0].text = dict.bookLevelHigh;
      lvlSelect.options[1].text = dict.bookLevelUni;
      lvlSelect.options[2].text = dict.bookLevelGrad;
    }

    // Program type
    const progSelect = document.getElementById('book-program-type');
    if (progSelect) {
      progSelect.options[0].text = `-- ${dict.uniFilterType} --`;
      progSelect.options[1].text = dict.bookProgLang;
      progSelect.options[2].text = dict.bookProgBach;
      progSelect.options[3].text = dict.bookProgMast;
    }

    // Korean level
    const korSelect = document.getElementById('book-korean');
    if (korSelect) {
      korSelect.options[0].text = dict.bookLevelNone;
      korSelect.options[1].text = dict.bookLevelBasic;
      korSelect.options[2].text = dict.bookLevelInter;
      korSelect.options[3].text = dict.bookLevelAdv;
    }

    // Visa selection
    if (visaSelect) {
      visaSelect.options[0].text = dict.visaOptionD4;
      visaSelect.options[1].text = dict.visaOptionD2;
    }
  }

  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      window.currentLanguage = e.target.value;
      localStorage.setItem('language', window.currentLanguage);
      applyTranslations();
      
      // Refresh components
      if (window.recalculateLivingCosts) {
        window.recalculateLivingCosts();
      }
      renderUniversities();
      renderVisaChecklist();
      
      // Notify chatbot if function exists
      if (window.updateChatbotLanguage) {
        window.updateChatbotLanguage();
      }
    });
  }

  // 2. Theme Toggle Handler
  function applyTheme() {
    if (window.currentTheme === 'dark') {
      document.body.classList.add('dark-mode');
      if (themeToggleBtn) themeToggleBtn.innerHTML = '☀️';
    } else {
      document.body.classList.remove('dark-mode');
      if (themeToggleBtn) themeToggleBtn.innerHTML = '🌙';
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      window.currentTheme = window.currentTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', window.currentTheme);
      applyTheme();
    });
  }

  // 3. Tab Switching
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetPanel = btn.getAttribute('data-tab');

      // Update active button
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show targeted panel with beautiful transition
      tabPanels.forEach(panel => {
        if (panel.id === targetPanel) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });

  // 4. University Rendering & Filtering
  const uniGrid = document.getElementById('university-cards-grid');
  const uniSearch = document.getElementById('uni-search-input');
  const uniFilterTypeSelect = document.getElementById('uni-filter-type');
  const uniFilterLocSelect = document.getElementById('uni-filter-loc');
  const uniFilterTuitionSlider = document.getElementById('uni-filter-tuition');
  const uniFilterTuitionVal = document.getElementById('uni-filter-tuition-val');

  function renderUniversities() {
    if (!uniGrid) return;
    uniGrid.innerHTML = '';

    const lang = window.currentLanguage;
    const query = uniSearch ? uniSearch.value.toLowerCase().trim() : '';
    const typeFilter = uniFilterTypeSelect ? uniFilterTypeSelect.value : 'all';
    const locFilter = uniFilterLocSelect ? uniFilterLocSelect.value : 'all';
    const maxTuition = uniFilterTuitionSlider ? parseInt(uniFilterTuitionSlider.value) : 5000000;

    if (uniFilterTuitionVal) {
      uniFilterTuitionVal.textContent = '₩' + maxTuition.toLocaleString();
    }

    const filtered = window.universitiesDatabase.filter(uni => {
      // Search Match
      const matchesSearch =
        uni.name.toLowerCase().includes(query) ||
        uni.nameMn.toLowerCase().includes(query) ||
        (uni.nameKo && uni.nameKo.toLowerCase().includes(query)) ||
        uni.majors.some(m => m.toLowerCase().includes(query)) ||
        uni.majorsMn.some(m => m.toLowerCase().includes(query)) ||
        (uni.majorsKo && uni.majorsKo.some(m => m.toLowerCase().includes(query))) ||
        uni.location.toLowerCase().includes(query) ||
        uni.locationMn.toLowerCase().includes(query) ||
        (uni.locationKo && uni.locationKo.toLowerCase().includes(query));

      // Type Match
      const matchesType = typeFilter === 'all' || uni.type === typeFilter;

      // Location Match
      const matchesLoc = locFilter === 'all' || uni.location.toLowerCase() === locFilter.toLowerCase();

      // Tuition Match (for language program, tuition is adjusted to 2 terms standard to compare fairly)
      const testTuition = uni.type === 'language' ? uni.tuition * 2 : uni.tuition;
      const matchesTuition = testTuition <= maxTuition;

      return matchesSearch && matchesType && matchesLoc && matchesTuition;
    });

    if (filtered.length === 0) {
      const dict = translations[lang];
      uniGrid.innerHTML = `
        <div class="uni-no-results">
          <div class="no-results-icon">🔍</div>
          <p>${dict.uniNoResults}</p>
        </div>
      `;
      return;
    }

    filtered.forEach(uni => {
      const card = document.createElement('div');
      card.className = 'university-card glass-card fade-in';

      const uniName = lang === 'en' ? uni.name : (lang === 'mn' ? uni.nameMn : uni.nameKo);
      const uniLoc = lang === 'en' ? uni.location : (lang === 'mn' ? uni.locationMn : uni.locationKo);
      const uniScholarship = lang === 'en' ? uni.scholarship : (lang === 'mn' ? uni.scholarshipMn : uni.scholarshipKo);
      const uniTopik = lang === 'en' ? uni.topikReq : (lang === 'mn' ? uni.topikReqMn : uni.topikReqKo);
      const displayMajors = lang === 'en' ? uni.majors : (lang === 'mn' ? uni.majorsMn : uni.majorsKo);
      
      const displayedTuition = lang === 'en'
        ? (uni.type === 'language' ? `₩${uni.tuition.toLocaleString()} (10 weeks)` : `₩${uni.tuition.toLocaleString()} (Semester)`)
        : (lang === 'mn'
          ? (uni.type === 'language' ? `₩${uni.tuition.toLocaleString()} (10 долоо хоног)` : `₩${uni.tuition.toLocaleString()} (Семестр)`)
          : (uni.type === 'language' ? `₩${uni.tuition.toLocaleString()} (10주)` : `₩${uni.tuition.toLocaleString()} (학기)`));

      const tagText = lang === 'en' 
        ? (uni.type === 'language' ? 'Language Program (D-4)' : 'Degree Program (D-2)')
        : (lang === 'mn'
          ? (uni.type === 'language' ? 'Хэлний бэлтгэл (D-4)' : 'Зэргийн хөтөлбөр (D-2)')
          : (uni.type === 'language' ? '어학 연수 (D-4)' : '학위 과정 (D-2)'));
      const tagClass = uni.type === 'language' ? 'tag-d4' : 'tag-d2';

      card.innerHTML = `
        <div class="card-header-uni">
          <div class="uni-logo-avatar" style="background: ${uni.logoBg}">
            ${uni.logoText}
          </div>
          <div class="uni-meta-title">
            <span class="uni-tag ${tagClass}">${tagText}</span>
            <h3>${uniName}</h3>
            <span class="uni-region-marker">📍 ${uniLoc} (Est. ${uni.established})</span>
          </div>
        </div>
        <div class="card-body-uni">
          <div class="uni-detail-item">
            <strong>💰 ${translations[lang].uniHeaderTuition}:</strong>
            <span>${displayedTuition}</span>
          </div>
          <div class="uni-detail-item">
            <strong>🎓 ${translations[lang].uniHeaderScholarship}:</strong>
            <span>${uniScholarship}</span>
          </div>
          <div class="uni-detail-item">
            <strong>📝 ${translations[lang].uniHeaderTopik}:</strong>
            <span>${uniTopik}</span>
          </div>
          <div class="uni-majors-section">
            <strong>💡 ${translations[lang].uniHeaderMajors}:</strong>
            <div class="uni-majors-pills">
              ${displayMajors.map(m => `<span>${m}</span>`).join('')}
            </div>
          </div>
        </div>
        <div class="card-footer-uni">
          <div class="uni-rating-badge">★ ${uni.rating}</div>
          <a href="${uni.website}" target="_blank" class="uni-web-btn">${translations[lang].uniButtonVisit} ↗</a>
        </div>
      `;
      uniGrid.appendChild(card);
    });
  }

  // Bind University filter listeners
  if (uniSearch) uniSearch.addEventListener('input', renderUniversities);
  if (uniFilterTypeSelect) uniFilterTypeSelect.addEventListener('change', renderUniversities);
  if (uniFilterLocSelect) uniFilterLocSelect.addEventListener('change', renderUniversities);
  if (uniFilterTuitionSlider) {
    uniFilterTuitionSlider.addEventListener('input', () => {
      if (uniFilterTuitionVal) {
        uniFilterTuitionVal.textContent = '₩' + parseInt(uniFilterTuitionSlider.value).toLocaleString();
      }
      renderUniversities();
    });
  }

  const visaData = {
    d4: {
      en: [
        'Valid Passport (original & copy, validity > 6 months)',
        'Visa Application Form with 1 recent passport-sized photo',
        'Standard Admission Letter from the Korean University (original)',
        'Certificate of Business Registration of the host Korean University',
        'Certificate of Graduation / Academic Degree (Apostilled/Legalized)',
        'Proof of Financial Capability (Bank statement showing $10,000+ frozen for 6 months)',
        'Proof of relationship (if parents sponsor the bank account)',
        'Application Fee & Embassy Appointment confirmation'
      ],
      mn: [
        'Хүчинтэй гадаад паспорт (эх хувь болон хуулбар, хүчинтэй хугацаа > 6 сар)',
        'Визний мэдүүлгийн хуудас (сүүлийн 6 сард авахуулсан зурагтай)',
        'Солонгосын их сургуулиас олгосон албан ёсны элсэлтийн зөвшөөрөл (эх хувь)',
        'Хүлээн авагч Солонгос сургуулийн Улсын бүртгэлийн гэрчилгээний хуулбар',
        'Төгссөн сургуулийн диплом/гэрчилгээ (Апостиль эсвэл ЭСЯ-ны баталгаажуулалттай)',
        'Санхүүгийн чадавхийг нотлох баримт (Банкны дансанд $10,000+ царцаасан лавлагаа)',
        'Гэр бүлийн хамаарлыг нотлох баримт (хэрэв дансыг эцэг эхээр баталгаажуулсан бол)',
        'Визний хураамж төлсөн баримт болон ЭСЯ-ны цаг товлосон хуудас'
      ],
      ko: [
        '유효한 여권 (원본 및 사본, 잔여기간 6개월 이상)',
        '비자 발급 신청서 (최근 6개월 이내 촬영한 여권용 사진 1매 부착)',
        '한국 대학 발행 표준입학허가서 (원본)',
        '초청 대학 사업자등록증 사본',
        '최종학력 입증서류 (학위증/졸업증명서 - 아포스티유 또는 영사 확인 필)',
        '재정능력 입증서류 (최소 $10,000 이상, 6개월 동결 은행 잔고증명서)',
        '가족관계증명서 (학비/경비를 부모가 보증하는 경우)',
        '비자 신청 수수료 및 대사관 방문 예약 확인서'
      ]
    },
    d2: {
      en: [
        'Valid Passport (original & copy, validity > 6 months)',
        'Visa Application Form with 1 recent passport-sized photo',
        'Standard Admission Letter from the Korean University (original)',
        'Certificate of Scholarship (if receiving tuition waiver/stipend)',
        'Certificate of Business Registration of the host Korean University',
        'Certificate of Graduation & Complete Transcripts (Apostilled/Legalized)',
        'Proof of Financial Capability (Bank statement showing $20,000+ frozen/recent)',
        'Tuberculosis (TB) Test Certificate from a designated clinic',
        'Study Plan / Statement of Purpose (SOP) written in English or Korean'
      ],
      mn: [
        'Хүчинтэй гадаад паспорт (эх хувь болон хуулбар, хүчинтэй хугацаа > 6 сар)',
        'Визний мэдүүлгийн хуудас (сүүлийн 6 сард авахуулсан цээж зурагтай)',
        'Солонгосын их сургуулиас олгосон албан ёсны элсэлтийн зөвшөөрөл (эх хувь)',
        'Тэтгэлэг авсан тохиолдолд тэтгэлгийн гэрчилгээ/лавлагаа',
        'Хүлээн авагч Солонгос сургуулийн Улсын бүртгэлийн гэрчилгээний хуулбар',
        'Боловсролын диплом, дүнгийн хуудасны эх хувь (Апостиль эсвэл ЭСЯ-ны баталгаатай)',
        'Санхүүгийн чадавхийг нотлох баримт (Дансанд $20,000+ байгааг гэрчлэх банкны баримт)',
        'ЭСЯ-аас заасан эмнэлгээс авсан сүрьеэгийн шинжилгээний хуудас',
        'Англи эсвэл Солонгос хэл дээр бичсэн суралцах төлөвлөгөө (SOP)'
      ],
      ko: [
        '유효한 여권 (원본 및 사본, 잔여기간 6개월 이상)',
        '비자 발급 신청서 (최근 6개월 이내 촬영한 여권용 사진 1매 부착)',
        '한국 대학 발행 표준입학허가서 (원본)',
        '장학금 수혜 증명서 (등록금 감면 또는 생활비 지원을 받는 경우)',
        '초청 대학 사업자등록증 사본',
        '최종학력 및 전학년 성적증명서 (아포스티유 또는 영사 확인 필)',
        '재정능력 입증서류 (최소 $20,000 이상 은행 잔고증명서 - 동결 또는 최근 발급)',
        '대사관 지정 병원 발행 결핵 진단서',
        '학업 계획서 / 수학 계획서 (SOP - 영어 또는 한국어로 작성)'
      ]
    }
  };

  function renderVisaChecklist() {
    if (!visaChecklistContainer) return;
    visaChecklistContainer.innerHTML = '';

    const lang = window.currentLanguage;
    const selectedVisa = visaSelect ? visaSelect.value : 'd4';
    const list = visaData[selectedVisa][lang];
    const dict = translations[lang];

    const titleDiv = document.createElement('div');
    titleDiv.className = 'visa-checklist-tracker-header';
    titleDiv.innerHTML = `
      <h4>📋 ${dict.visaStatusTrack}</h4>
      <p class="visa-meta-sub">${dict.visaDocDesc}</p>
    `;
    visaChecklistContainer.appendChild(titleDiv);

    list.forEach((doc, idx) => {
      const item = document.createElement('div');
      item.className = 'visa-checklist-item';
      item.innerHTML = `
        <label class="visa-check-label" for="visa-chk-${idx}">
          <input type="checkbox" id="visa-chk-${idx}" class="visa-item-checkbox">
          <span class="custom-checkbox-indicator"></span>
          <span class="visa-chk-text">${doc}</span>
        </label>
      `;
      visaChecklistContainer.appendChild(item);
    });

    // Add progress tracker bar
    const chkProgressWrap = document.createElement('div');
    chkProgressWrap.className = 'visa-progress-wrap';
    chkProgressWrap.innerHTML = `
      <div class="visa-progress-header">
        <span>Completed:</span>
        <strong class="visa-progress-val">0 / ${list.length}</strong>
      </div>
      <div class="visa-progress-bar-bg">
        <div class="visa-progress-bar-fill" id="visa-progress-fill" style="width: 0%"></div>
      </div>
    `;
    visaChecklistContainer.appendChild(chkProgressWrap);

    // Track check events
    const checkboxes = visaChecklistContainer.querySelectorAll('.visa-item-checkbox');
    const fillBar = visaChecklistContainer.querySelector('#visa-progress-fill');
    const valText = visaChecklistContainer.querySelector('.visa-progress-val');

    function updateChecklistProgress() {
      let checkedCount = 0;
      checkboxes.forEach(c => {
        if (c.checked) {
          checkedCount++;
          c.parentElement.parentElement.classList.add('completed');
        } else {
          c.parentElement.parentElement.classList.remove('completed');
        }
      });

      const pct = (checkedCount / list.length) * 100;
      if (fillBar) fillBar.style.width = pct + '%';
      if (valText) valText.textContent = `${checkedCount} / ${list.length}`;
    }

    checkboxes.forEach(c => {
      c.addEventListener('change', updateChecklistProgress);
    });
  }

  if (visaSelect) {
    visaSelect.addEventListener('change', renderVisaChecklist);
  }

  // 6. FAQ Accordion Logic
  faqItems.forEach(item => {
    const qHeader = item.querySelector('.faq-q');
    if (qHeader) {
      qHeader.addEventListener('click', () => {
        // Toggle other FAQs active states
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
          }
        });
        // Toggle current FAQ
        item.classList.toggle('active');
      });
    }
  });

  // Initializing state
  applyLanguageInitial();
  applyTheme();
  renderUniversities();
  renderVisaChecklist();

  function applyLanguageInitial() {
    applyTranslations();
  }
});
