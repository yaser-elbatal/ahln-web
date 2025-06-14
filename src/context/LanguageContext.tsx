"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "ar";

interface LanguageContextProps {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    home: "Home",
    products: "Products",
    contact: "Contact Us",
    downloadBrochure: "Download Brochure",
    contactTitle: "Contact",
    stayUpdated: "Stay Updated",
    subscribeDesc:
      "Subscribe to our newsletter for the latest updates and offers.",
    emailPlaceholder: "Your email",
    subscribe: "Subscribe",
    companyDescription:
      "Revolutionizing package delivery with secure, convenient, and contactless solutions.",
    address: "Al Mamzar, Dubai, United Arab Emirates",
    comingSoon: "Coming Soon",
    ourProducts: "Our Products",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy",
    heroSubtitle: "Smart Secured Delivery",
    heroDescription:
      "A smart box at your doorstep receives your parcels on your behalf, using the latest technology and the highest security standards.",
    security: "Security",
    appControl: "App Control",
    liveStream: "Live Stream",
    orderNow: "Order Now",
    powerfulAppTitle: "Powerful App",
    powerfulAppDesc:
      "Control everything from our feature-rich mobile app, designed for a seamless user experience.",
    featureMobileTitle: "Mobile Application Control",
    featureMobileDesc: "Enable control via the Ahln. Box app",
    featureLivestreamTitle: "Livestream Capability",
    featureLivestreamDesc: "Real-time video streaming for remote monitoring",
    featureNotificationsTitle: "Realtime Notifications",
    featureNotificationsDesc:
      "Instant alerts for package deliveries and updates",
    featureOfflineTitle: "Offline Mode",
    featureOfflineDesc: "Core functionality without internet",
    featureScanningTitle: "Package Scanning",
    featureScanningDesc: "Integrated scanning for package tracking",
    featureSharingTitle: "Device Sharing",
    featureSharingDesc: "Share access with family & friends",
    whatIsAhln: "What is Ahln.?",
    contactPageTitle: "Get In Touch With Us",
    contactPageSubtitle:
      "Whether you have a question, need support, or just want to say hello, we’re here to help.",
    contactInformation: "Contact Information",
    reachUs: "Reach us anytime using the info below.",
    phone: "Phone",
    email: "Email",
    sendUsMessage: "Send Us a Message",
    fullName: "Full Name",
    enterFullName: "Enter your full name",
    emailAddress: "Email Address",
    enterEmail: "Enter your email address",
    yourMessage: "Your Message",
    sendMessage: "Send Message",
    stayConnected: "Stay Connected with Ahln.",
    subscribeForLatest: "Subscribe for latest updates, demos & events",
    subscribeNow: "Subscribe",
    latestNewsletterPreview: "Latest Newsletter Preview",
    subscribeToUpdates: "Subscribe to Updates",
    discoverAhln: "Discover Ahln.",
    whatIsPrefix: "What is",
    whatIsHighlight: "Ahln.",
    howItWorksPrefix: "How It",
    howItWorksHighlight: "Works",
    experiencePrefix: "Experience the",
    experienceHighlight: "Difference",
    controlFingertipsPrefix: "Control at your",
    controlFingertipsHighlight: "fingertips",
    secureStoragePrefix: "Secure Package",
    secureStorageHighlight: "Storage",
    seamlessProcessPrefix: "Seamless Delivery",
    seamlessProcessHighlight: "Process",
    powerfulAppPrefix: "Powerful",
    powerfulAppHighlight: "App",
    latestHappeningsPrefix: "Latest",
    latestHappeningsHighlight: "Happenings",
    controlSectionDesc:
      "Track all your shipments in one place with our intuitive mobile app. Get real-time updates and manage delivery preferences with ease.",
    controlFeature1: "Real-time tracking and notifications",
    controlFeature2: "Manage multiple deliveries at once",
    controlFeature3: "Share access with family members",
    secureSectionDesc:
      "Our smart delivery boxes ensure your packages remain safe and secure until you're ready to collect them.",
    secureFeature1: "Tamper-proof design with advanced security features",
    secureFeature2: "Weather-resistant construction protects your deliveries",
    secureFeature3: "Multiple compartment sizes for various package types",
    processSectionDesc:
      "Our delivery process is designed to be simple and efficient, ensuring your packages are delivered securely every time.",
    processFeature1: "Couriers have secure, one-time access codes",
    processFeature2: "Temperature-controlled compartments for sensitive items",
    processFeature3: "Contactless delivery for your safety and convenience",
    processStep1Title: "App Control",
    processStep1Desc:
      "Open any door remotely when the delivery driver arrives. Get instant access alerts.",
    processStep2Title: "Courier Delivery",
    processStep2Desc:
      "Send the driver a secure OTP and location. Get notified the moment it’s used.",
    processStep3Title: "Tracking Match",
    processStep3Desc:
      "Register your tracking number — the door auto-opens when the driver scans the label.",
    processStep4Title: "Scheduled PIN",
    processStep4Desc:
      "Set a recurring PIN for drivers. Get notified every time a delivery is made.",
    latestHappeningsDesc:
      "Stay updated with Ahln. Box's presence at major industry events and exhibitions.",
    watchVideo: "Watch Video →",
    marketingConsent:
      "I agree to receive marketing communications and agree to the Ahln. Box Privacy Policy.",
    howItWorksTitle: "How It Works",
    experienceDifferenceTitle: "Experience the Difference",
    controlFingertipsTitle: "Control at your fingertips",
    secureStorageTitle: "Secure Package Storage",
    seamlessProcessTitle: "Seamless Delivery Process",
    latestHappeningsTitle: "Latest Happenings",
    deliveryReimagined:
      "Reinventing how packages arrive at your doorstep with cutting-edge technology and unparalleled security.",
    featureSecurity: "Security",
    featureAppControl: "App Control",
    featureLiveStream: "Live Stream",
    appControlStepTitle: "App Control",
    appControlStepDesc:
      "Open any door remotely when the delivery driver arrives. Get instant access alerts.",
    courierStepTitle: "Courier Delivery",
    courierStepDesc:
      "Send the driver a secure OTP and location. Get notified the moment it’s used.",
    trackingStepTitle: "Tracking Match",
    trackingStepDesc:
      "Register your tracking number — the door auto-opens when the driver scans the label.",
    scheduledPinStepTitle: "Scheduled PIN",
    scheduledPinStepDesc:
      "Set a recurring PIN for drivers. Get notified every time a delivery is made.",
    controlFingertipsDesc:
      "Track all your shipments in one place with our intuitive mobile app. Get real-time updates and manage delivery preferences with ease.",
    secureStorageDesc:
      "Our smart delivery boxes ensure your packages remain safe and secure until you're ready to collect them.",
    seamlessProcessDesc:
      "Our delivery process is designed to be simple and efficient, ensuring your packages are delivered securely every time.",
    newsletterFeature1: "New Feature Alert! Smart Temperature Control",
    newsletterFeature2: "Industry Insights: Future of Delivery",
    comesWith: "Comes with :",
    selectColor: "Select Color",
    productSpecifications: "Product Specifications",
    accessories: "Accessories",
    userFriendlyPrefix: "User Friendly",
    userFriendlyHighlight: "Mobile App",
    notificationsTitle: "Notifications",
    notificationsDesc:
      "Real-time notifications about deliveries, device status, and security incidents",
    familySharingTitle: "Family Sharing",
    familySharingDesc:
      "Share device access with family members for added convenience.",
    ownershipTransferTitle: "Ownership Transfer",
    ownershipTransferDesc: "Seamlessly transfer ownership between users",
    boxControlTitle: "Box Control",
    boxControlDesc: "Easily control the box from the mobile application",
    livePreviewTitle: "Live Preview",
    livePreviewDesc:
      "Stream real-time video from the box’s camera directly in the mobile app.",
    offlineOtpTitle: "Offline OTP",
    offlineOtpDesc:
      "Generate a one-time passcode to access the box even when it’s offline due to connectivity issues.",
    interactiveViewPrefix: "360°",
    interactiveViewHighlight: "Interactive View",
    dragRotate: "Drag to rotate | Scroll to zoom",
    rollOverImage: "Roll over image to zoom",
    productMaxName: "Ahln. Max",
    productMaxDescription:
      "Our flagship smart delivery box, perfect for businesses and multi-unit buildings. Features advanced security systems and larger storage capacity.",
    productMiniName: "Ahln. Mini",
    productMiniDescription:
      "Compact and efficient, designed for residential use. Perfect for homes and small businesses requiring secure package delivery.",
    tagFreeDeliveryInstallation: "Free delivery and Installation",
    tagTwoYearWarranty: "2 Years extendable warranty",
    tagOneYearService: "1 Year service contract.",
    tagLargeCapacity: "Large Capacity",
    tagAdvancedSecurity: "Advanced Security",
    tagMultiUnit: "Multi-unit",
    tagCompact: "Compact",
    tagResidential: "Residential",
    tagEasySetup: "Easy Setup",
    specMaterial: "Material",
    specWeight: "Weight",
    specOperatingVoltage: "Operating voltage",
    specPowerConsumption: "Power Consumption",
    specInstallationType: "Installation type",
    specOperatingSystem: "Operating System",
    specTouchscreenSize: "Touchscreen Size",
    specCapacity: "Capacity",
    specDimensions: "Dimensions",
    specNetwork: "Network",
    faqTitle: "Frequently Asked Questions",
    faq1Question: "What is Ahln?",
    faq1Answer:
      "Ahln is a smart delivery box developed by Dub Dev Technologies that provides a secure, autonomous, and high-tech solution for receiving parcels at home or office.",
    faq2Question: "How does Ahln work?",
    faq2Answer:
      "Ahln operates autonomously, using scheduled delivery windows, real-time video monitoring, and a mobile app to manage parcel drop-offs — even when you're not home.",
    faq3Question: "Is the Ahln Box secure?",
    faq3Answer:
      "Yes. Ahln features AI-enabled live video monitoring, secure cloud storage for video footage, anti-tamper electronic locks, 2FA and OTP-based mobile access, and physical backup keys.",
    faq4Question: "Can I manage Ahln remotely?",
    faq4Answer:
      "Absolutely. The Ahln mobile app allows you to manage multiple devices, share access with family or guests, receive real-time delivery notifications, and adjust security and scheduling settings.",
    faq5Question: "What types of deliveries does Ahln support?",
    faq5Answer:
      "Ahln supports major courier services such as Amazon and Talabat. You can input tracking numbers and receive packages contactlessly.",
    faq6Question: "What happens if the internet goes down?",
    faq6Answer:
      "Ahln has an Offline Mode that maintains basic functionality even without internet connectivity.",
    faq7Question: "Can guests or family members use the box?",
    faq7Answer:
      "Yes. You can easily add guest users and share device access with family members via the mobile app.",
    faq8Question: "What are the dimensions of the Ahln box?",
    faq8Answer:
      "The exterior design is approximately: Height: 190 cm, Width: 100 cm, Depth: 65 cm. It includes three compartments with varying sizes to fit different package types.",
    faq9Question: "What materials is the box made of?",
    faq9Answer:
      "Ahln is built from stainless steel with double powder-coated paint, rated IP65 for weather and dust resistance.",
    faq10Question: "Is the device weatherproof?",
    faq10Answer:
      "Yes. The IP65 rating ensures the box is resistant to water and dust, making it suitable for outdoor use.",
    faq11Question: "What connectivity does Ahln use?",
    faq11Answer:
      "It supports both Ethernet and Wi-Fi connections for seamless operation and communication.",
    faq12Question: "What power source is required?",
    faq12Answer:
      "Ahln operates on 220V AC and consumes approximately 75 Watts.",
    faq13Question: "What are the mounting options?",
    faq13Answer:
      "You can install the Ahln box as floor-standing, wall-mounted, or wall-inserted.",
    faq14Question: "What size is the built-in touchscreen?",
    faq14Answer:
      "Ahln features a 7.2-inch Android-powered touchscreen for user control and delivery interactions.",
    faq15Question: "Does Ahln provide customer support?",
    faq15Answer:
      "Yes. Real-time live chat support is available directly through the mobile app for quick assistance.",
    Security: "Security",
    AppControl: "App Control",
    Life: "Life",
    with: "with",
    before: "before",
    PlaceOrder: "Place Order ",
    AED: "AED",
    PleaseSelectColor: "Please select color",
    Send: "Send",
    depositPayment: "💰 Deposit Option",
    tamaraPayment: "🪄 tabby",
    cardPayment: "💳 Credit/Debit Card",
    SelectPaymentMethod: "Select Payment Method",
    payWithTabby: "Pay with tabby",
    payWithDebos: "Place your order now, pay the rest later after installation",
  },
  ar: {
    home: "الرئيسية",
    products: "المنتجات",
    contact: "اتصل بنا",
    downloadBrochure: "تحميل الكتيب",
    contactTitle: "تواصل معنا",
    stayUpdated: "ابق على اطلاع",
    subscribeDesc: "اشترك في نشرتنا للحصول على آخر التحديثات والعروض.",
    emailPlaceholder: "بريدك الإلكتروني",
    subscribe: "اشتراك",
    companyDescription:
      "نحدث ثورة في توصيل الطلبات بحلول آمنة ومريحة وخالية من التلامس.",
    address: "الممزر، دبي، الإمارات العربية المتحدة",
    comingSoon: "قريباً",
    ourProducts: "منتجاتنا",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الخدمة",
    cookiePolicy: "سياسة الكوكيز",
    heroSubtitle: "توصيل ذكي وآمن",
    heroDescription:
      "بوكس ذكي عند بابك يستلم الطلبات نيابة عنك، بأحدث التقنيات وأعلى درجات الأمان.",
    security: "الأمان",
    appControl: "تحكم عبر التطبيق",

    liveStream: "البث مباشر",
    orderNow: "اطلب الآن",
    powerfulAppTitle: "تطبيق قوي",
    powerfulAppDesc:
      "تحكم في كل شيء من تطبيقنا الملئ بالمميزات والمصمم لتجربة مستخدم سلسة.",
    featureMobileTitle: "التحكم عبر التطبيق",
    featureMobileDesc: "تمكين التحكم عبر تطبيق Ahln.",
    featureLivestreamTitle: "إمكانية البث المباشر",
    featureLivestreamDesc: "بث فيديو مباشر للمراقبة عن بعد",
    featureNotificationsTitle: "إشعارات فورية",
    featureNotificationsDesc: "تنبيهات فورية لتسليم الطلبات والتحديثات",
    featureOfflineTitle: "وضع عدم الاتصال",
    featureOfflineDesc: "الوظائف الأساسية بدون إنترنت",
    featureScanningTitle: "مسح الطلبات",
    featureScanningDesc: "مسح مدمج لتتبع الطلبات",
    featureSharingTitle: "مشاركة الجهاز",
    featureSharingDesc: "شارك الوصول مع العائلة والأصدقاء",
    whatIsAhln: "ما هو Ahln.?",
    contactPageTitle: "تواصل معنا",
    contactPageSubtitle:
      "سواء كان لديك سؤال أو تحتاج إلى دعم أو تريد فقط أن تقول مرحباً، نحن هنا لمساعدتك.",
    contactInformation: "معلومات التواصل",
    reachUs: "اتصل بنا في أي وقت باستخدام المعلومات أدناه.",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    sendUsMessage: "أرسل لنا رسالة",
    fullName: "الاسم الكامل",
    enterFullName: "أدخل اسمك الكامل",
    emailAddress: "عنوان البريد الإلكتروني",
    enterEmail: "أدخل بريدك الإلكتروني",
    yourMessage: "رسالتك",
    sendMessage: "إرسال الرسالة",
    stayConnected: "ابق على تواصل مع Ahln.",
    subscribeForLatest: "اشترك للحصول على أحدث التحديثات والعروض والفعاليات",
    subscribeNow: "اشترك",
    latestNewsletterPreview: "أحدث معاينة للنشرة الإخبارية",
    subscribeToUpdates: "اشترك في التحديثات",
    discoverAhln: "اكتشف Ahln.",
    whatIsPrefix: "ما هو",
    whatIsHighlight: "Ahln",
    howItWorksPrefix: "كيف",
    howItWorksHighlight: "يعمل",
    experiencePrefix: "اختبر",
    experienceHighlight: "الفرق",
    controlFingertipsPrefix: "تحكم بين",
    controlFingertipsHighlight: "يديك",
    secureStoragePrefix: "تخزين الطلبات",
    secureStorageHighlight: "الآمن",
    seamlessProcessPrefix: "عملية تسليم",
    seamlessProcessHighlight: "سلسة",
    powerfulAppPrefix: "تطبيق",
    powerfulAppHighlight: "قوي",
    latestHappeningsPrefix: "أحدث",
    latestHappeningsHighlight: "الفعاليات",
    controlSectionDesc:
      "تتبع جميع شحناتك في مكان واحد باستخدام تطبيقنا المحمول . احصل على إشعارات فورية وقم بإدارة تفضيلات التسليم بسهولة.",
    controlFeature1: "تتبع وإشعارات في الوقت الحقيقي",
    controlFeature2: "إدارة عدة عمليات تسليم دفعة واحدة",
    controlFeature3: "شارك الوصول مع أفراد العائلة",
    secureSectionDesc:
      "تضمن صناديق التوصيل الذكية لدينا بقاء طلباتك آمنة حتى تكون جاهزاً لاستلامها.",
    secureFeature1: "تصميم مقاوم للعبث بميزات أمان متقدمة",
    secureFeature2: "بنية مقاومة للعوامل الجوية تحمي طلباتك",
    secureFeature3: "أحجام مقصورات متعددة لأنواع الطلبات المختلفة",
    processSectionDesc:
      "تم تصميم عملية التوصيل لدينا لتكون بسيطة وفعالة، لضمان تسليم طلباتك بأمان في كل مرة.",
    processFeature1: "يملك المناديب رموز وصول آمنة لمرة واحدة",
    processFeature2: "مقصورات مضبوطة الحرارة للأغراض الحساسة",
    processFeature3: "توصيل بدون تلامس لسلامتك وراحتك",
    processStep1Title: "التحكم بالتطبيق",
    processStep1Desc:
      "افتح أي باب عن بعد عند وصول المندوب واستلم اشعارات فورية.",
    processStep2Title: "تسلم الطلبات",
    processStep2Desc:
      "أرسل إلى المندوب رمزاً آمناً وموقعاً، وتلقى إشعاراً عند استخدامه.",
    processStep3Title: "مطابقة التتبع",
    processStep3Desc:
      "سجّل رقم التتبع الخاص بطلبك ليفتح الباب تلقائياً عند مسح المندوب لرقم التتبع.",
    processStep4Title: "رمز سري",
    processStep4Desc: "اضبط رمزاً متكرراً للمناديب وتلقى إشعاراً عند كل تسليم.",
    latestHappeningsDesc:
      "ابق على اطلاع بحضور Ahln.  في أبرز الأحداث والمعارض .",
    watchVideo: "مشاهدة الفيديو →",
    marketingConsent:
      "أوافق على تلقي الاتصالات التسويقية وأوافق على سياسة الخصوصية الخاصة بـ Ahln. ",
    howItWorksTitle: "كيف يعمل Ahln.",
    experienceDifferenceTitle: "اختبر الفرق",
    controlFingertipsTitle: "تحكم بين يديك",
    secureStorageTitle: "تخزين الطلبات الآمن",
    seamlessProcessTitle: "عملية تسليم سلسة",
    latestHappeningsTitle: "أحدث الفعاليات",
    deliveryReimagined:
      "نعيد ابتكار طريقة وصول الطلبات إلى باب منزلك من خلال أحدث التقنيات وأعلى معايير الأمان.",
    featureSecurity: "الأمان",
    featureAppControl: "التحكم بالتطبيق",
    featureLiveStream: "البث المباشر",
    appControlStepTitle: "التحكم بالتطبيق",
    appControlStepDesc:
      "افتح أي باب عن بُعد عند وصول مندوب التوصيل. واحصل على اشعارات فورية.",
    courierStepTitle: "توصيل المندوب",
    courierStepDesc:
      "أرسل رمز OTP آمن وموقع التوصيل. ستتلقى إشعارًا فور استخدامه.",
    trackingStepTitle: "تطابق التتبع",
    trackingStepDesc: "سجّل رقم التتبع وسيفتح الباب تلقائيًا عند مسحه.",
    scheduledPinStepTitle: "رمز PIN مجدول",
    scheduledPinStepDesc:
      "حدد رمز PIN متكرر للسائقين، وتلقَّ إشعارًا عند كل عملية توصيل.",
    controlFingertipsDesc:
      "تابع جميع شحناتك في تطبيقنا المحمول  الاستخدام. احصل على تحديثات فورية وأدِر تفضيلاتك بسهولة.",
    secureStorageDesc:
      "تضمن صناديقنا الذكية بقاء طلباتك آمنة حتى تقوم باستلامها.",
    seamlessProcessDesc: "نُبسّط عملية التوصيل لتكون سهلة وآمنة في كل مرة.",
    newsletterFeature1: "ميزة جديدة! التحكم الذكي في درجة الحرارة",
    newsletterFeature2: "رؤية مستقبلية: مستقبل حلول التوصيل",
    comesWith: "يأتي مع :",
    selectColor: "اختر اللون",
    productSpecifications: "مواصفات المنتج",
    accessories: "ملحقات",
    userFriendlyPrefix: "تطبيق بتصميم",
    userFriendlyHighlight: "سهل وبسيط",
    notificationsTitle: "الإشعارات",
    notificationsDesc: "إشعارات فورية حول عمليات التسليم وحالة الجهاز ",
    familySharingTitle: "مشاركة العائلة",
    familySharingDesc: "شارك الوصول مع أفراد العائلة لراحة أكبر.",
    ownershipTransferTitle: "نقل الملكية",
    ownershipTransferDesc: "نقل الملكية بسلاسة بين المستخدمين",
    boxControlTitle: "التحكم بالصندوق",
    boxControlDesc: "تحكم بالصندوق بسهولة من التطبيق",
    livePreviewTitle: "بث مباشر",
    livePreviewDesc: "بث فيديو مباشر من كاميرا الصندوق مباشرة داخل التطبيق",
    offlineOtpTitle: "رمز دخول دون اتصال",
    offlineOtpDesc:
      "أنشئ رمزاً لمرة واحدة للوصول إلى الصندوق حتى عند عدم الاتصال بالإنترنت",
    interactiveViewPrefix: "360°",
    interactiveViewHighlight: "عرض تفاعلي",
    dragRotate: "اسحب للدوران | مرّر للتكبير",
    rollOverImage: "مرر فوق الصورة للتكبير",
    productMaxName: " الحجم الكبير من Ahln. ",
    productMaxDescription:
      "صندوق التوصيل الذكي الرائد لدينا، مثالي للشركات والمباني متعددة الوحدات. يتميز بأنظمة أمان متقدمة وسعة تخزين أكبر.",
    productMiniName: "Ahln. ميني",
    productMiniDescription:
      "صغير وفعال، مصمم للاستخدام السكني. مثالي للمنازل والأعمال الصغيرة التي تتطلب توصيل طلبات بشكل آمن.",
    tagFreeDeliveryInstallation: "توصيل وتركيب مجاني",
    tagTwoYearWarranty: "ضمان قابل للتمديد لسنتين",
    tagOneYearService: "عقد خدمة لمدة سنة",
    tagLargeCapacity: "سعة كبيرة",
    tagAdvancedSecurity: "أمان متقدم",
    tagMultiUnit: "متعدد الوحدات",
    tagCompact: "اقتصادي",
    tagResidential: "سكني",
    tagEasySetup: "سهولة الإعداد",
    specMaterial: "نوع المعدن",
    specWeight: "الوزن",
    specOperatingVoltage: "جهد التشغيل",
    specPowerConsumption: "استهلاك الطاقة",
    specInstallationType: "نوع التركيب",
    specOperatingSystem: "نظام التشغيل",
    specTouchscreenSize: "حجم شاشة اللمس",
    specCapacity: "السعة",
    specDimensions: "الأبعاد",
    specNetwork: "الشبكة",
    faqTitle: "الأسئلة الشائعة",
    faq1Question: "ما هو Ahln.?",
    faq1Answer:
      "Ahln هو صندوق توصيل ذكي طورته Dub Dev Technologies لتوفير حل آمن وذاتي عالي التقنية لاستلام الطلبات في المنزل أو المكتب.",
    faq2Question: "كيف يعمل Ahln.?",
    faq2Answer:
      "يعمل Ahln بشكل مستقل، باستخدام جداول تسليم ومراقبة فيديو مباشرة وتطبيق جوال لإدارة عمليات التسليم حتى في غيابك.",
    faq3Question: "هل صندوق Ahln آمن؟",
    faq3Answer:
      "نعم، يتميز Ahln بمراقبة فيديو مدعومة بالذكاء الاصطناعي وتخزين سحابي آمن للأشرطة الإلكترونية وأقفال إلكترونية مقاومة للعبث و2FA وOTP ومفاتيح بديلة فعلية.",
    faq4Question: "هل يمكنني إدارة Ahln عن بُعد؟",
    faq4Answer:
      "بالتأكيد، يتيح لك تطبيق Ahln إدارة عدة أجهزة ومشاركة الوصول مع العائلة أو الضيوف وتلقي إشعارات التسليم الفورية وضبط إعدادات الأمان والجدولة.",
    faq5Question: "ما أنواع عمليات التسليم التي يدعمها Ahln؟",
    faq5Answer:
      "يدعم Ahln خدمات التوصيل الكبرى مثل أمازون وطلبات. يمكنك إدخال أرقام التتبع واستلام الطلبات دون تلامس.",
    faq6Question: "ماذا يحدث إذا انقطع الإنترنت؟",
    faq6Answer:
      "يحتوي Ahln على وضع عدم الاتصال الذي يحافظ على الوظائف الأساسية حتى بدون اتصال بالإنترنت.",
    faq7Question: "هل يمكن للضيوف أو أفراد العائلة استخدام الصندوق؟",
    faq7Answer:
      "نعم، يمكنك إضافة مستخدمين ضيوف ومشاركة الوصول مع أفراد العائلة عبر التطبيق.",
    faq8Question: "ما هي أبعاد صندوق Ahln؟",
    faq8Answer:
      "يبلغ التصميم الخارجي تقريباً: الارتفاع 190 سم، العرض 100 سم، العمق 65 سم، ويتضمن ثلاث حجرات بأحجام مختلفة لتناسب أنواع الطلبات المتنوعة.",
    faq9Question: "ما المواد المصنوع منها الصندوق؟",
    faq9Answer:
      "صُنع Ahln من الفولاذ المقاوم للصدأ مع طلاء مزدوج، ومصنف IP65 لمقاومة العوامل الجوية والغبار.",
    faq10Question: "هل الجهاز مقاوم للعوامل الجوية؟",
    faq10Answer:
      "نعم، يضمن تصنيف IP65 مقاومة الصندوق للماء والغبار مما يجعله مناسباً للاستخدام الخارجي.",
    faq11Question: "ما نوع الاتصال الذي يستخدمه Ahln؟",
    faq11Answer:
      "يدعم الاتصال عبر الإيثرنت والواي فاي لضمان التشغيل والتواصل السلس.",
    faq12Question: "ما مصدر الطاقة المطلوب؟",
    faq12Answer: "يعمل Ahln بجهد 220 فولت ويستهلك تقريباً 75 واط.",
    faq13Question: "ما خيارات التركيب المتاحة؟",
    faq13Answer:
      "يمكن تركيب صندوق Ahln قائماً على الأرض أو معلقاً على الحائط أو مدمجاً فيه.",
    faq14Question: "ما حجم شاشة اللمس المدمجة؟",
    faq14Answer:
      "يتميز Ahln بشاشة لمس مقاس 7.2 بوصة تعمل بنظام أندرويد للتحكم والتفاعل أثناء التسليم.",
    faq15Question: "هل يوفر Ahln دعماً للعملاء؟",
    faq15Answer:
      "نعم، يتوفر دعم فني مباشر عبر الدردشة من خلال التطبيق لتقديم المساعدة السريعة.",
    Security: "آمــــــن",
    AppControl: "التحكم عبر التطبيق",
    beforAndAfter: " قبل وبعد",
    Life: "الحياة",
    with: "مع",
    before: "قبل",
    PlaceOrder: "اطلب الحين",
    AED: "درهم إماراتي",
    PleaseSelectColor: "من فضلك اختر اللون",
    Send: "إرسال",
    depositPayment: "💰 احجز الآن بعربون",
    tamaraPayment: "🪄 تابي ",
    cardPayment: "💳 بطاقة ائتمان / خصم",
    SelectPaymentMethod: "اختر طريقة الدفع",
    payWithTabby: "ادفع مع تابي",
    payWithDebos: "اطلب الحين والباقي بعد التركيب",
  },
};

const LanguageContext = createContext<LanguageContextProps>({
  lang: "en",
  toggleLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language | null;
    if (stored === "ar" || stored === "en") {
      setLang(stored);
    }
  }, []);

  const toggleLang = () => {
    const newLang: Language = lang === "en" ? "ar" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    // update html attrs
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLang;
      document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    }
  };

  const t = (key: string) => translations[lang][key] || key;

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
