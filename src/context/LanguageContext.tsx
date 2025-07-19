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
    discoverAhln: "Discover Ahln",
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
    controlFeature1: "Real-time notifications",
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
      "Our flagship smart delivery box, perfect for large villas, features multiple compartments with dual access and larger storage capacity.",
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
    faq2Question: "How does work?",
    faq2Answer:
      "Ahln operates autonomously, using scheduled delivery windows, real-time video monitoring, and a mobile app to manage parcel drop-offs — even when you're not home.",
    faq3Question: "Is the  Box secure?",
    faq3Answer:
      "Yes. Ahln features AI-enabled live video monitoring, secure cloud storage for video footage, anti-tamper electronic locks, 2FA and OTP-based mobile access, and physical backup keys.",
    faq4Question: "Can I manage the Box remotely?",
    faq4Answer:
      "Absolutely. The Ahln mobile app allows you to manage multiple devices, share access with family or guests, receive real-time delivery notifications, and adjust security and scheduling settings.",
    faq5Question: "What types of deliveries does it support?",
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
      "Ahln features a 7.0-inch Android-powered touchscreen for user control and delivery interactions.",
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
    payWithDeposit:
      "Place your order now, pay the rest later after installation",
    subscriptionSuccess: "Subscribed Successfully",
    subscriptionError: "Subscription Failed",
    contactFormSuccess: "Message Sent Successfully",
    contactFormError: "Message Failed to Send",
    outOfStock: "Out of Stock",
    differYesterdayToday: " is a smart solution to an everyday problem.",
    soon: "(soon!)",
    ViewInstallation: " View Installation Specifications →",
    Ahln: "Ahln",
  },
  ar: {
    home: "الصفحة الرئيسية",
    products: "المنتجات",
    contact: "تواصل معنا",
    blog: "المدونة",
    downloadBrochure: "حمل كتيب العرض الآن",
    contactTitle: "تواصل معنا",
    stayUpdated: "اطلعوا على كل جديد",
    subscribeDesc: "اشترك في خدمة تقديم الأخبار لتصلك آخر الأخبار والعروض",
    emailPlaceholder: "أدخل بريدك الإلكتروني",
    subscribe: "اشترك الآن!",
    companyDescription:
      "أحدثنا ثورة في عالم التوصيل بحلول آمنة ومريحة وبدون تلامس.",
    address: "العنوان: الممزر، دبي، الإمارات العربية المتحدة",
    comingSoon: "ترقبوا",
    ourProducts: "منتجاتنا",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الاستخدام",
    cookiePolicy: "سياسة استخدام ملفات تعريف الارتباط",
    IntellectualProperty: "حقوق الملكية الفكرية",
    Disclaimer: "إخلاء مسؤولية",
    heroSubtitle: "استلم طلباتك بطريقة الذكية والآمنة",
    heroDescription:
      "مع صندوقٍ ذكي أمام باب منزلك يستقبل طلباتك نيابةً عنك باستخدام أحدث التكنولوجيات وأعلى معايير الأمان.",
    security: "الأمان",
    appControl: "التحكم عن طريق التطبيق",
    liveStream: "البث المباشر",
    orderNow: "اطلبه الآن!",
    powerfulAppTitle: "تطبيق محوري",
    powerfulAppDesc:
      "تحكم في كل شيء باستخدام تطبيق الهاتف الممتلئ بالمميزات والمصمم لخوض أبسط التجارب.",
    featureMobileTitle: "التحكم باستخدام تطبيق الهاتف",
    featureMobileDesc: "السماح بالتحكم عبر تطبيق صندوق أهلًا",
    featureLivestreamTitle: "إمكانية البث المباشر",
    featureLivestreamDesc: "بث فيديو مباشر للمراقبة عن بُعد",
    featureNotificationsTitle: "إشعارات مباشرة",
    featureNotificationsDesc: "تـنبيهات فورية بوصول الطلبات والمستجدات",
    featureOfflineTitle: "وضع عدم الاتصال",
    featureOfflineDesc:
      "إمكانية أداء الوظائف الأساسية التي لا تحتاج إلى الإنترنت",
    featureScanningTitle: "رصد الطلبات",
    featureScanningDesc: "خدمة الرصد المدعومة لتتبع الطلبات",
    featureSharingTitle: "مشاركة القدرة على الوصول للصندوق",
    featureSharingDesc: "شارك القدرة على الوصول للصندوق مع العائلة والأصدقاء",
    whatIsAhln: "ما هو صندوق أهلًا؟",
    contactPageTitle: "يسعدنا تواصلك معنا",
    contactPageSubtitle:
      "إذا كان لديك استفسار، أو احتجت للمساعدة، أو حتى إذا أردت أن تلقي التحية، نسعد بتواصلك معنا.",
    contactInformation: "تواصل معنا",
    reachUs: "يمكنك التواصل معنا في أي وقت باستخدام الوسائل التالية:",
    phone: "رقم الهاتف",
    email: "البريد الإلكتروني",
    sendUsMessage: "أرسل رسالة مباشرة",
    fullName: "الاسم بالكامل",
    enterFullName: "من فضلك أدخل اسمك بالكامل",
    emailAddress: "البريد الإلكتروني",
    enterEmail: "من فضلك أدخل بريدك الإلكتروني",
    yourMessage: "رسالتك",
    sendMessage: "أرسل الرسالة",
    stayConnected: "ابق على اتصال مع أهلًا!",
    subscribeForLatest:
      "اشترك معنا لتصلك أحدث العروض التوضيحية والفعاليات والمستجدات",
    subscribeNow: "اشترك الآن!",
    latestNewsletterPreview: "عرض آخر الأخبار",
    subscribeToUpdates: "اشترك ليصلك كل جديد",
    discoverAhln: "استكشف مع أهلًا",
    whatIsPrefix: "ما هو",
    whatIsHighlight: "صندوق أهلًا؟",
    howItWorksPrefix: "كيف",
    howItWorksHighlight: "يعمل؟",
    experiencePrefix: "اشعر",
    experienceHighlight: "بالتغيير",
    controlFingertipsPrefix: "تحكم بكل شيء",
    controlFingertipsHighlight: "بلمسة",
    secureStoragePrefix: "تخزين الطلبات",
    secureStorageHighlight: "بأمان",
    seamlessProcessPrefix: "عملية تسليم",
    seamlessProcessHighlight: "سلسة",
    powerfulAppPrefix: "تطبيق",
    powerfulAppHighlight: "محوري",
    latestHappeningsPrefix: "آخر",
    latestHappeningsHighlight: "المستجدات",
    controlSectionDesc:
      "تتبع جميع طلباتك في مكان واحد مع تطبيقنا للهاتف المحمول المصمم خصيصا لراحتك، احصل على تحديثات فورية وقم بإدارة تفضيلات التسليم بسهولة.",
    controlFeature1: "إشعارات فورية",
    controlFeature2: "تحكم في العديد من الطلبات في وقت واحد",
    controlFeature3: "شارك القدرة على الوصول للبرنامج مع أعضاء العائلة",
    secureSectionDesc:
      "صممت صناديقنا الذكية للحفاظ على طلباتك بأمان حتى تصبح بين يديك.",
    secureFeature1: "تصميم مقاوم لمحاولات العبث ومزود بميزات أمان متطورة",
    secureFeature2: "بنية مقاومة للظروف البيئية الصعبة للحفاظ على طلباتك",
    secureFeature3: "العديد من مساحات التخزين المختلفة لتناسب جميع طلباتك",
    processSectionDesc:
      "صممنا عملية التوصيل لتكون سلسلة وسريعة مما يضمن استلام طلباتك بأمان في كل مرة.",
    processFeature1:
      "يستطيع مندوبو التوصيل استخدام الصندوق برموز دخول آمنة تُستخدم لمرة واحدة فقط",
    processFeature2:
      "حجرات مساحات تخزين مزودة بالقدرة على التحكم بالحرارة لحفظ العناصر الحساسة",
    processFeature3: "عملية توصيل بدون تلامس للحفاظ على سلامتك",
    processStep1Title: "التحكم باستخدام التطبيق",
    processStep1Desc:
      "افتح أي باب عن بعد عند وصول مندوب التوصيل، وتلق إشعارات لحظية بمحاولة فتحه.",
    processStep2Title: "مندوبو التوصيل",
    processStep2Desc:
      "أرسل إلى السائق رمز تحقق آمن يستخدم لمرة واحدة إضافة إلى الموقع، وتلقَّ إشعارًا فور استخدامه.",
    processStep3Title: "فتح الباب باستخدام رقم التتبع",
    processStep3Desc:
      "سجل رقم التتبع في البرنامج، وسيفتح باب الصندوق تلقائيًا عند مسح رقم التتبع الموجود على الطرد.",
    processStep4Title: "رمز PIN متكرر",
    processStep4Desc:
      "قم بتعيين رمز PIN متكرر للسائقين، وتلقَّ إشعارًا في كل مرة يتم فيها توصيل طلب.",
    latestHappeningsDesc:
      "اطلع على تواجد صندوق أهلًا في كبرى الفعاليات والمعارض الصناعية.",
    watchVideo: "شاهد الفيديو",
    marketingConsent:
      "أوافق على تلقي تواصل دعائي وأوافق على سياسة الخصوصية الخاصة بصندوق أهلًا.",
    howItWorksTitle: "كيف يعمل؟",
    experienceDifferenceTitle: "اشعر بالتميز",
    controlFingertipsTitle: "تحكم بلمسة",
    secureStorageTitle: "مساحة تخزين آمنة",
    seamlessProcessTitle: "عملية توصيل سلسة",
    latestHappeningsTitle: "آخر المستجدات",
    deliveryReimagined:
      "أحدثنا ثورة في عالم تسليم الطلبات إلى بابك باستخدام أحدث الوسائل التكنولوجية وأكثرها أمانًا.",
    featureSecurity: "الأمان",
    featureAppControl: "التحكم باستخدام التطبيق",
    featureLiveStream: "البث المباشر",
    appControlStepTitle: "التحكم باستخدام التطبيق",
    appControlStepDesc:
      "افتح أي باب عن بعد عند وصول مندوب التوصيل، وتلق إشعارات لحظية بمحاولة فتحه.",
    courierStepTitle: "مندوب التوصيل",
    courierStepDesc:
      "أرسل إلى السائق رمز تحقق آمن يستخدم لمرة واحدة إضافة إلى الموقع، وتلقَّ إشعارًا فور استخدامه.",
    trackingStepTitle: "فتح الباب باستخدام رقم التتبع",
    trackingStepDesc:
      "سجل رقم التتبع في البرنامج، وسيفتح باب الصندوق تلقائيًا عند مسح رقم التتبع الموجود على الطرد.",
    scheduledPinStepTitle: "رمز PIN متكرر",
    scheduledPinStepDesc:
      "قم بتعيين رمز PIN متكرر للسائقين، وتلقَّ إشعارًا في كل مرة يتم فيها توصيل طلب.",
    controlFingertipsDesc:
      "تتبع جميع شحناتك في مكان واحد مع تطبيقنا للهاتف المحمول المصمم خصيصا لراحتك، احصل على تحديثات فورية وقم بإدارة تفضيلات التسليم بسهولة.",
    secureStorageDesc:
      "صممت صناديقنا الذكية للحفاظ على طلباتك بأمان حتى تصبح بين يديك.",
    seamlessProcessDesc:
      "صممنا عملية التوصيل لتكون سلسلة وسريعة مما يضمن استلام طلباتك بأمان في كل مرة.",
    newsletterFeature1: "ميزة جديدة! التحكم الذكي في درجة الحرارة",
    newsletterFeature2: "تطلعات الصناعة: مستقبل التوصيل",
    comesWith: "يشمل :",
    selectColor: "اختر اللون",
    productSpecifications: "مواصفات المنتج",
    accessories: "المكملات",
    userFriendlyPrefix: "سهل الاستخدام",
    userFriendlyHighlight: "تطبيق الهاتف",
    notificationsTitle: "الإشعارات",
    notificationsDesc:
      "إشعارات فورية بخصوص الطلبات، وحالة الجهاز، والحالة الأمنية.",
    familySharingTitle: "المشاركة مع العائلة",
    familySharingDesc:
      "شارك إمكانية الوصول إلى الجهاز مع أفراد عائلتك لضمان راحتك.",
    ownershipTransferTitle: "تحويل الملكية",
    ownershipTransferDesc: "يمكنك تحويل الملكية بين المستخدمين بسهولة.",
    boxControlTitle: "التحكم في الصندوق",
    boxControlDesc: "تحكم في الصندوق بسهولة باستخدام تطبيق الهاتف",
    livePreviewTitle: "العرض المباشر",
    livePreviewDesc:
      "شاهد فيديو مباشر من الكاميرة الخاصة بالصندوق في تطبيق الهاتف",
    offlineOtpTitle: "إنشاء رمز التحقق يستخدم لمرة واحدة دون الاتصال بالإنترنت",
    offlineOtpDesc:
      "يمكنك إنشاء رمز تحقق يستخدم لمرة واحدة لفتح الصندوق حتى إذا لم تكن متصلا بالإنترنت بسبب مشاكل الاتصال.",
    interactiveViewPrefix: "360°",
    interactiveViewHighlight: "عرض تفاعلي",
    dragRotate:
      "اسحب الشاشة على الجانبين لتحريك الكاميرا، واسحبها لأعلى لتكبير الصورة",
    rollOverImage: "مرر اصبعك فوق الصورة لتكبيرها",
    productMaxName: "أهلًا ماكس",
    prebookText: "يمكنك الحجز مسبقًا",
    prebookAmount: "فقط بـ 1000 درهم (قابلة للاسترداد)",
    productMaxDescription:
      "يتميز أحدث صناديقنا للتوصيل الذكي بأنه مثالي للفيلات الكبيرة وبه عدة مساحات تخزين مزودة بإمكانية وصول مزدوج وسعة تخزين أكبر.",
    productMiniName: "أهلًا ميني",
    productMiniDescription:
      "صغير وعملي، ومصمم للاستخدام في الأماكن السكنية أو في المكاتب الصغيرة التي تتطلب توصيلًا آمنا للطلبات.",
    tagFreeDeliveryInstallation: "توصيل وتركيب مجاني",
    tagTwoYearWarranty: "ضمان لمدة سنتين قابلة للتمديد",
    tagOneYearService: "عقد خدمة لمدة سنة",
    tagLargeCapacity: "سعة كبيرة",
    tagAdvancedSecurity: "أمان باستخدام أحدث الوسائل",
    tagMultiUnit: "متعدد المساحات",
    tagCompact: "صغير",
    tagResidential: "للأماكن السكنية",
    tagEasySetup: "سهل التركيب",
    specMaterial: "مواد التصنيع",
    specWeight: "الوزن",
    specOperatingVoltage: "جهد التشغيل",
    specPowerConsumption: "استهلاك الطاقة",
    specInstallationType: "نوع التركيب",
    specOperatingSystem: "النظام المشغل",
    specTouchscreenSize: "حجم شاشة اللمس",
    specCapacity: "السعة",
    specDimensions: "الأبعاد",
    specNetwork: "الشبكة",
    faqTitle: "الأسئلة الشائعة",
    faq1Question: "ما هو صندوق أهلًا",
    faq1Answer:
      "صندوق أهلًا هو صندوق بريد ذكي طورته شركة Dub Dev Technologies يوفر حلًا آمنًا، ومستقلًا، ومتطورًا لاستلام الطلبات في المنزل أو المكتب.",
    faq2Question: "كيف يعمل؟",
    faq2Answer:
      "يعمل صندوق أهلًا بشكل مستقل باستخدام جداول زمنية محددة للتسليم، ومراقبة فيديو مباشرة، وتطبيق جوال لإدارة استلام الطلبات، حتى إذا لم تكن في المنزل.",
    faq3Question: "هل الصندوق آمن؟",
    faq3Answer:
      "بالطبع، فصندوق أهلًا يدعم مراقبة فيديو مباشرة مدعومة بالذكاء الاصطناعي، وتخزينًا سحابيًا آمنًا للقطات الفيديو، وأقفالًا إلكترونية مقاومة للفتح، وخاصية التحقق الثنائي ورموز الوصول لمرة واحدة عبر الهاتف المحمول، بالإضافة إلى مفاتيح حقيقية عند الحاجة.",
    faq4Question: "هل يمكنني التحكم في الصندوق عن بعد؟",
    faq4Answer:
      "بالتأكيد، يمكنك استخدام تطبيق أهلًا للهاتف المحمول للتحكم في العديد من الأجهزة، ومشاركة إمكانية الوصول إلى الصندوق مع العائلة أو الضيوف، واستلام إشعارات فورية بالتوصيل، والتحكم في إعدادات الأمان والمواعيد.",
    faq5Question: "ما هو نوع التوصيلات الذي يستطيع الصندوق التعامل معه؟",
    faq5Answer:
      "يمكن للصندوق التعامل مع خدمات التوصيل المشهورة مثلًا أمازون وطلبات، يمكنك وضع رقم تتبع الطلب واستلام الطلبات بدون لمس.",
    faq6Question: "ماذا لو انقطع الاتصال بالانترنت؟",
    faq6Answer:
      "يدعم صندوق أهلًا وضع عدم الاتصال الذي يستطيع القيام بالوظائف الأساسية دون الحاجة إلى الاتصال بالإنترنت.",
    faq7Question: "هل يستطيع الضيوف أو أفراد العائلة استخدام الصندوق؟",
    faq7Answer:
      "بالطبع، يمكنك إضافة مستخدمين ضيوف ومشاركة إمكانية الوصول مع أفراد العائلة باستخدام تطبيق الهاتف.",
    faq8Question: "ما هي أبعاد صندوق أهلًا؟",
    faq8Answer:
      "الأبعاد التقريبية: الارتفاع 190 سم، العرض 100 سم، العمق 65 سم.\nيتكوّن من ثلاث حجرات بأحجام مختلفة لتناسب جميع أنواع الطلبات.",
    faq9Question: "ممّا صُنع صندوق أهلًا؟",
    faq9Answer:
      "صنع صندوق أهلًا من الفولاذ المقاوم للصدأ مع طلاء مزدوج بتقنية Powder-Coating لمقاومة التآكل والعوامل الجوية، مع تصنيف حماية IP65 ضد الماء والغبار.",
    faq10Question: "هل الجهاز مقاوم للعوامل الجوية؟",
    faq10Answer:
      "نعم، تصنيف IP65 يضمن مقاومة كاملة للماء والغبار، مما يجعله مثاليًا للاستخدام الخارجي في جميع الظروف.",
    faq11Question: "ما نوع الاتصال الذي يدعمه أهلًا؟",
    faq11Answer:
      "يدعم الاتصال عبر الإيثرنت والواي فاي لضمان تشغيل سلس وتواصل مستمر.",
    faq12Question: "ما مصدر الطاقة المطلوب لتشغيله؟",
    faq12Answer:
      "يعمل صندوق أهلًا على تيار كهربائي 220 فولت تيار متردد ويستهلك حوالي 75 واط فقط.",
    faq13Question: "ما هي خيارات تركيب الجهاز؟",
    faq13Answer:
      "يمكن تثبيت صندوق أهلًا بثلاث طرق: قائم على الأرض، مُثبّت على الجدار، داخل الجدار",
    faq14Question: "ما حجم شاشة اللمس؟",
    faq14Answer:
      "تتميّز شاشة اللمس في صندوق أهلًا بحجم 7 بوصات تعمل بنظام Android للتحكّم السهل والتفاعل مع عمليات التسليم.",
    faq15Question: "هل توفر أهلًا دعمًا للعملاء؟",
    faq15Answer:
      "نعم، نوفّر دعمًا فنيًا مباشرًا وفوريًا عبر الدردشة الحية داخل تطبيق المحمول لتقديم المساعدة في أي وقت.",
    faq16Question: "هل يمكن استرداد مبلغ العربون؟",
    faq16Answer:
      "نعم، العربون قابل للاسترداد في حال إلغاء الطلب قبل عملية التركيب.",
    Security: "الأمان",
    AppControl: "التحكم باستخدام تطبيق الهاتف",
    Life: "الحياة",
    with: "بعد",
    before: "قبل",
    PlaceOrder: "اطلبه الآن!",
    AED: "درهم إماراتي",
    PleaseSelectColor: "اختر اللون الذي تريده",
    Send: "أرسل",
    depositPayment: "اطلبه مقدمًا الآن!",
    RefundableDepositPayment: "العربون قابل للاسترداد",
    tamaraPayment: "خدمة دفع tabby tabby",
    cardPayment: "العربون قابل للاسترداد",
    SelectPaymentMethod: "اختر نوع الدفع",
    payWithTabby: "ادفع باستخدام خدمة tabby",
    payWithDeposit: "يمكنك الطلب الآن ودفع باقي القيمة عند الاستلام",
    subscriptionSuccess: "تم الاشتراك بنجاح!",
    subscriptionError: "تعذر الاشتراك",
    contactFormSuccess: "تم إرسال الرسالة بنجاح!",
    contactFormError: "تعذر ارسال الرسالة",
    outOfStock: "غير متوفر حاليًا",
    differYesterdayToday: "الفرق بين الماضي والحاضر",
    soon: "قريبا!",
    remainingBalance: "يجب دفع باقي القيمة قبل التركيب.",
    estimatedDelivery: "موعد التوصيل المتوقع: بين 6 إلى 8 أسابيع بعد الطلب",
    refundNote: "العربون قابل للاسترداد إذا تم إلغاء الطلب قبل التركيب.",
    ViewInstallation: "عرض مواصفات التركيب →"
  },
};

const LanguageContext = createContext<LanguageContextProps>({
  lang: "en",
  toggleLang: () => { },
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
