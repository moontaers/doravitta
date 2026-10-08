// Basic site script: language switching (EN/AR), simple carousel, nav toggle, and translations.

(function () {
  const translations = {
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.contact": "Contact",
      "nav.policies": "Policies",
      "nav.resources": "Resources",
      "hero.1.title": "Guidance for Your Next Step",
      "hero.1.sub": "Personalized university consultations and practical employee coaching.",
      "hero.1.cta": "Get in Touch",
      "hero.2.title": "Plan with Confidence",
      "hero.2.sub": "Clear, realistic steps for university applications and workplace goals.",
      "hero.2.cta": "Explore Services",
      "hero.3.title": "Support That Moves You Forward",
      "hero.3.sub": "Online sessions shaped around your goals and practical next steps.",
      "hero.logoTag": "DoraVitta — clarity, trust, warmth",
      "about.title": "About DoraVitta",
      "about.lead": "DoraVitta offers practical guidance for students planning their university journey and employees building confidence and motivation at work.",
      "services.title": "Our Services",
      "services.university.title": "University Consultations",
      "services.university.body": "One-to-one online sessions to help students and families choose universities and majors, understand admissions requirements, and build a realistic application plan.",
      "services.university.audience": "For high school students, university students, and parents.",
      "services.university.price": "45 minutes · $15 per session",
      "services.employee.title": "Employee Coaching & Motivation",
      "services.employee.body": "Practical coaching to build confidence, motivation, and habits for handling work pressure through goal setting and communication.",
      "services.employee.audience": "For individual employees and teams.",
      "services.employee.price": "Individual: $55 for 45 minutes · Team pricing on request",
      "services.learnmore": "Full details and booking →",
      "contact.title": "Contact Us",
      "contact.home.intro": "For inquiries or bookings, email info@doravitta.com.",
      "contact.page.link": "Contact details and helpful information →",
      "contact.form.name": "Your Name",
      "contact.form.email": "Your Email",
      "contact.form.message": "How can we help you?",
      "contact.form.submit": "Email Us",
      "university.page.title": "University Consultations | DoraVitta LLC",
      "university.page.lead": "One-to-one sessions to help students and families plan a university journey with clarity and confidence.",
      "university.what.title": "What the sessions cover",
      "university.what.body": "We help you explore majors and universities, understand admissions requirements, and build a realistic application plan based on your goals and circumstances.",
      "university.audience.title": "Who it’s for",
      "university.audience.body": "High school students preparing applications, current university students considering their next steps, and parents supporting a student’s decisions.",
      "university.how.title": "How it works",
      "university.how.1": "Book by emailing info@doravitta.com.",
      "university.how.2": "We confirm a time and send a secure payment link.",
      "university.how.3": "Meet online for 45 minutes via Zoom or Google Meet.",
      "university.how.4": "Receive a written summary with practical next steps.",
      "university.price.title": "Pricing and payment",
      "university.price.body": "$15 per 45-minute session. Secure online card payment; your payment link is sent after booking.",
      "university.book": "Book by email: info@doravitta.com",
      "employee.page.title": "Employee Coaching & Motivation | DoraVitta LLC",
      "employee.page.lead": "Practical coaching sessions to build confidence, motivation, and useful habits for handling work pressure.",
      "employee.what.title": "What sessions cover",
      "employee.what.body": "We focus on goal setting, communication, motivation, confidence, and practical habits that help with workplace pressure.",
      "employee.audience.title": "Who it’s for",
      "employee.audience.body": "Individual employees looking for practical support, and teams seeking a shared coaching and motivation plan.",
      "employee.how.title": "How it works",
      "employee.how.1": "Contact us at info@doravitta.com to discuss your needs.",
      "employee.how.2": "Agree on a session plan and confirm a schedule.",
      "employee.how.3": "Meet online for the agreed coaching sessions.",
      "employee.price.title": "Pricing and payment",
      "employee.price.body": "Individual session: $55 for 45 minutes. Team pricing is available on request. Secure online card payment; your payment link is sent after booking.",
      "employee.notice.title": "Important notice",
      "employee.notice.body": "This service provides coaching and motivational support only. It is not medical care, psychotherapy, or a substitute for care from a licensed health professional.",
      "employee.book": "Discuss your needs: info@doravitta.com",
      "contact.page.title": "Contact Us | DoraVitta LLC",
      "contact.page.lead": "Questions about a service or ready to book? Contact our team and we’ll be glad to help.",
      "contact.page.inquiries": "Inquiries and bookings",
      "contact.page.inquiries.note": "Email us to discuss a service, arrange a session, or ask a question before booking.",
      "contact.page.support": "Support",
      "contact.page.support.note": "For help with an existing booking or other support questions, contact our support team.",
      "contact.page.address.title": "Registered address",
      "contact.page.helpful.title": "Helpful information",
      "contact.page.helpful.body": "Sessions are held online. After your booking is confirmed, we send a secure online card-payment link. Please include the service you’re interested in and your preferred times when you email us.",
      "policies.page.title": "Policies | DoraVitta LLC",
      "policies.page.lead": "Please review these policies before booking or using our services.",
      "policies.privacy.title": "Privacy Policy",
      "policies.privacy.body": "We receive information you choose to provide when contacting us or booking a service, such as your name, email address, and inquiry details. We use it to respond, arrange and deliver services, process related payments, and provide support. We do not ask you to send sensitive health or financial information by email. We use reasonable safeguards to protect information and limit access to people who need it for these purposes. Information may be retained as needed for service, legal, and record-keeping obligations. Contact info@doravitta.com with privacy questions or requests.",
      "policies.terms.title": "Terms & Conditions",
      "policies.terms.body": "By booking or using a DoraVitta service, you agree to provide accurate information, communicate respectfully, attend at the agreed time, and follow the applicable service and payment arrangements. Services are provided online and are subject to availability. You are responsible for maintaining access to a suitable device and internet connection. We may update these terms; any terms applicable to a confirmed booking will be communicated to you. Contact us before booking if you have questions.",
      "policies.refund.title": "Refund & Cancellation Policy",
      "policies.refund.body": "Please contact info@doravitta.com as soon as possible if you need to cancel or reschedule. Any applicable cancellation deadline, rescheduling option, or refund arrangement will be provided with your booking confirmation before payment. If DoraVitta must cancel a confirmed session, we will offer rescheduling or a refund for the affected service. Refunds, when approved, are returned to the original payment method and may take time to appear depending on the payment provider.",
      "policies.disclaimer.title": "Online Services Disclaimer",
      "policies.disclaimer.body": "Services are delivered remotely using online meeting platforms, and availability may depend on connectivity and third-party providers. We will make reasonable efforts to deliver booked sessions as agreed, but cannot guarantee uninterrupted access to those platforms or specific outcomes. University consultations and employee coaching provide educational and motivational support; employee coaching is not medical or therapeutic care and does not replace advice from a qualified professional. To the extent permitted by applicable law, DoraVitta is not responsible for indirect losses arising from use of the services.",
      "policies.payment.title": "Payment Policy",
      "policies.payment.body": "Payment is made by secure online card payment using a link sent after booking. Fees and any applicable arrangements are disclosed before you pay. Do not send card numbers or payment credentials by email. Payment processing is handled by the payment provider and is subject to its terms and security practices. Contact info@doravitta.com if you have a billing question or believe a payment was made in error.",
      "policies.note": "These general policies are not legal advice. Specific booking terms will be shared before payment.",
      "resources.page.title": "Resources & Downloads",
      "resources.page.lead": "Browse downloadable materials by language. Resources will be added here as they become available.",
      "resources.english.title": "English Documents",
      "resources.arabic.title": "Arabic Documents",
      "resources.empty.title": "Documents coming soon",
      "resources.english.empty": "There are no English downloads available yet.",
      "resources.arabic.empty": "There are no Arabic downloads available yet.",
      "resources.badge.bilingual": "English + Arabic",
      "page.back": "← Back to Home",
      "footer.copyright": "© DoraVitta LLC. All Rights Reserved.",
      "healthy.page.title": "Healthy Living — DoraVitta LLC",
      "healthy.page.lead": "Free for now — content will be added when the file is available.",
      "healthy.section.heading": "Overview",
      "healthy.section.p1": "This area will provide guidance on exercise routines, basic nutrition and healthy lifestyle habits. Content will be available once the material is provided.",
      "healthy.back": "← Back to Home"
    },
    ar: {
      "nav.home": "الرئيسية",
      "nav.about": "من نحن",
      "nav.services": "الخدمات",
      "nav.contact": "اتصل بنا",
      "nav.policies": "السياسات",
      "nav.resources": "الموارد",
      "hero.1.title": "إرشاد لخطوتك القادمة",
      "hero.1.sub": "استشارات جامعية مخصصة وتدريب عملي للموظفين.",
      "hero.1.cta": "تواصل معنا",
      "hero.2.title": "خطط بثقة",
      "hero.2.sub": "خطوات واضحة وواقعية للتقديم الجامعي والأهداف المهنية.",
      "hero.2.cta": "اكتشف خدماتنا",
      "hero.3.title": "دعم يساعدك على التقدم",
      "hero.3.sub": "جلسات عبر الإنترنت مصممة حول أهدافك وخطواتك العملية القادمة.",
      "hero.logoTag": "دورافيتا — وضوح وثقة واهتمام",
      "about.title": "عن DoraVitta",
      "about.lead": "تقدم DoraVitta إرشاداً عملياً للطلاب الذين يخططون لمسيرتهم الجامعية وللموظفين الراغبين في بناء الثقة والتحفيز في العمل.",
      "services.title": "خدماتنا",
      "services.university.title": "الاستشارات الجامعية",
      "services.university.body": "جلسات فردية عبر الإنترنت لمساعدة الطلاب وأسرهم على اختيار التخصصات والجامعات وفهم متطلبات القبول وبناء خطة تقديم واقعية.",
      "services.university.audience": "للطلاب في المرحلة الثانوية والجامعيين وأولياء الأمور.",
      "services.university.price": "45 دقيقة · 15 دولاراً للجلسة",
      "services.employee.title": "تدريب الموظفين وتحفيزهم",
      "services.employee.body": "تدريب عملي لبناء الثقة والتحفيز والعادات المفيدة للتعامل مع ضغط العمل من خلال تحديد الأهداف والتواصل.",
      "services.employee.audience": "للموظفين والأفراد والفرق.",
      "services.employee.price": "للأفراد: 55 دولاراً لمدة 45 دقيقة · أسعار الفرق عند الطلب",
      "services.learnmore": "التفاصيل والحجز ←",
      "contact.title": "تواصل معنا",
      "contact.home.intro": "للاستفسارات أو الحجز، راسلونا عبر info@doravitta.com.",
      "contact.page.link": "بيانات التواصل ومعلومات مفيدة ←",
      "contact.form.name": "اسمك",
      "contact.form.email": "بريدك الإلكتروني",
      "contact.form.message": "كيف يمكننا مساعدتك؟",
      "contact.form.submit": "راسلنا",
      "university.page.title": "الاستشارات الجامعية | DoraVitta LLC",
      "university.page.lead": "جلسات فردية تساعد الطلاب وأسرهم على التخطيط للمسيرة الجامعية بوضوح وثقة.",
      "university.what.title": "ماذا تشمل الجلسات؟",
      "university.what.body": "نساعدك على استكشاف التخصصات والجامعات وفهم متطلبات القبول وبناء خطة تقديم واقعية تتناسب مع أهدافك وظروفك.",
      "university.audience.title": "لمن هذه الخدمة؟",
      "university.audience.body": "لطلاب المرحلة الثانوية المقبلين على التقديم، والطلاب الجامعيين الذين يدرسون خطواتهم القادمة، وأولياء الأمور الداعمين لقرارات أبنائهم.",
      "university.how.title": "آلية العمل",
      "university.how.1": "احجز عبر مراسلتنا على info@doravitta.com.",
      "university.how.2": "نؤكد الموعد ونرسل رابط دفع آمن.",
      "university.how.3": "نلتقي عبر الإنترنت لمدة 45 دقيقة باستخدام Zoom أو Google Meet.",
      "university.how.4": "تتلقى ملخصاً مكتوباً يتضمن الخطوات العملية التالية.",
      "university.price.title": "السعر والدفع",
      "university.price.body": "15 دولاراً للجلسة التي تستغرق 45 دقيقة. يتم الدفع ببطاقة عبر الإنترنت بطريقة آمنة، ويُرسل رابط الدفع بعد الحجز.",
      "university.book": "للحجز راسلنا: info@doravitta.com",
      "employee.page.title": "تدريب الموظفين وتحفيزهم | DoraVitta LLC",
      "employee.page.lead": "جلسات تدريب عملية لبناء الثقة والتحفيز والعادات المفيدة للتعامل مع ضغوط العمل.",
      "employee.what.title": "ماذا تشمل الجلسات؟",
      "employee.what.body": "نركز على تحديد الأهداف والتواصل والتحفيز والثقة والعادات العملية التي تساعد على التعامل مع ضغوط العمل.",
      "employee.audience.title": "لمن هذه الخدمة؟",
      "employee.audience.body": "للموظفين الراغبين في دعم عملي، وللفرق التي تسعى إلى خطة مشتركة للتدريب والتحفيز.",
      "employee.how.title": "آلية العمل",
      "employee.how.1": "تواصل معنا عبر info@doravitta.com لمناقشة احتياجاتك.",
      "employee.how.2": "نتفق على خطة الجلسات ونؤكد المواعيد.",
      "employee.how.3": "نعقد جلسات التدريب المتفق عليها عبر الإنترنت.",
      "employee.price.title": "السعر والدفع",
      "employee.price.body": "الجلسة الفردية: 55 دولاراً لمدة 45 دقيقة. أسعار الفرق متاحة عند الطلب. يتم الدفع ببطاقة عبر الإنترنت بطريقة آمنة، ويُرسل رابط الدفع بعد الحجز.",
      "employee.notice.title": "تنويه مهم",
      "employee.notice.body": "تقدم هذه الخدمة تدريباً ودعماً تحفيزياً فقط، ولا تُعد رعاية طبية أو علاجاً نفسياً ولا تغني عن الرعاية التي يقدمها مختص صحي مرخص.",
      "employee.book": "لمناقشة احتياجاتك: info@doravitta.com",
      "contact.page.title": "اتصل بنا | DoraVitta LLC",
      "contact.page.lead": "هل لديك سؤال عن إحدى خدماتنا أو ترغب في الحجز؟ يسعد فريقنا بمساعدتك.",
      "contact.page.inquiries": "الاستفسارات والحجوزات",
      "contact.page.inquiries.note": "راسلنا لمناقشة إحدى الخدمات أو ترتيب جلسة أو طرح أي سؤال قبل الحجز.",
      "contact.page.support": "الدعم",
      "contact.page.support.note": "للمساعدة بشأن حجز قائم أو لأي استفسار آخر، تواصل مع فريق الدعم.",
      "contact.page.address.title": "العنوان المسجل",
      "contact.page.helpful.title": "معلومات مفيدة",
      "contact.page.helpful.body": "تُعقد الجلسات عبر الإنترنت. بعد تأكيد الحجز، نرسل رابطاً آمناً للدفع بالبطاقة عبر الإنترنت. يرجى ذكر الخدمة التي تهمك والأوقات المناسبة لك عند مراسلتنا.",
      "policies.page.title": "السياسات | DoraVitta LLC",
      "policies.page.lead": "يرجى مراجعة هذه السياسات قبل حجز خدماتنا أو استخدامها.",
      "policies.privacy.title": "سياسة الخصوصية",
      "policies.privacy.body": "نتلقى المعلومات التي تختار تقديمها عند التواصل معنا أو حجز خدمة، مثل اسمك وبريدك الإلكتروني وتفاصيل استفسارك. نستخدمها للرد عليك وترتيب الخدمات وتقديمها ومعالجة المدفوعات المرتبطة بها وتوفير الدعم. لا نطلب منك إرسال معلومات صحية أو مالية حساسة عبر البريد الإلكتروني. نتخذ تدابير معقولة لحماية المعلومات ونقصر الوصول إليها على من يحتاجونها لهذه الأغراض. قد نحتفظ بالمعلومات بالقدر اللازم لتقديم الخدمة والوفاء بالالتزامات القانونية وحفظ السجلات. للاستفسارات أو الطلبات المتعلقة بالخصوصية، راسل info@doravitta.com.",
      "policies.terms.title": "الشروط والأحكام",
      "policies.terms.body": "بحجز إحدى خدمات DoraVitta أو استخدامها، توافق على تقديم معلومات دقيقة والتواصل باحترام والحضور في الموعد المتفق عليه والالتزام بترتيبات الخدمة والدفع المعمول بها. تُقدم الخدمات عبر الإنترنت وتخضع للتوافر. تقع على عاتقك مسؤولية توفير جهاز مناسب واتصال بالإنترنت. قد نحدّث هذه الشروط، وسنبلغك بأي شروط تنطبق على حجز مؤكد. تواصل معنا قبل الحجز إذا كانت لديك أسئلة.",
      "policies.refund.title": "سياسة الاسترداد والإلغاء",
      "policies.refund.body": "يرجى مراسلة info@doravitta.com في أقرب وقت ممكن إذا كنت بحاجة إلى الإلغاء أو إعادة الجدولة. سنوضح في تأكيد الحجز، وقبل الدفع، أي مهلة للإلغاء أو خيار لإعادة الجدولة أو ترتيبات للاسترداد. إذا اضطرت DoraVitta إلى إلغاء جلسة مؤكدة، فنعرض إعادة جدولتها أو استرداد رسوم الخدمة المتأثرة. عند الموافقة على الاسترداد، يُعاد المبلغ إلى وسيلة الدفع الأصلية وقد يستغرق ظهوره وقتاً بحسب مزود الدفع.",
      "policies.disclaimer.title": "إخلاء مسؤولية الخدمات عبر الإنترنت",
      "policies.disclaimer.body": "تُقدم الخدمات عن بُعد باستخدام منصات الاجتماعات عبر الإنترنت، وقد يعتمد توافرها على الاتصال ومزودي الخدمات الخارجيين. سنبذل جهوداً معقولة لتقديم الجلسات المحجوزة وفق الاتفاق، لكن لا يمكننا ضمان استمرار الوصول إلى تلك المنصات أو تحقيق نتائج محددة. تقدم الاستشارات الجامعية وتدريب الموظفين دعماً تعليمياً وتحفيزياً؛ وتدريب الموظفين ليس رعاية طبية أو علاجاً نفسياً ولا يحل محل مشورة مختص مؤهل. إلى الحد الذي يسمح به القانون المعمول به، لا تتحمل DoraVitta مسؤولية الخسائر غير المباشرة الناشئة عن استخدام الخدمات.",
      "policies.payment.title": "سياسة الدفع",
      "policies.payment.body": "يتم الدفع ببطاقة عبر الإنترنت بطريقة آمنة باستخدام رابط يُرسل بعد الحجز. نوضح الرسوم والترتيبات المعمول بها قبل الدفع. لا ترسل أرقام البطاقات أو بيانات الدفع عبر البريد الإلكتروني. يتولى مزود الدفع معالجة المدفوعات وفق شروطه وممارساته الأمنية. راسل info@doravitta.com إذا كان لديك سؤال عن الفاتورة أو اعتقدت أن دفعة سُجلت عن طريق الخطأ.",
      "policies.note": "هذه السياسات العامة ليست مشورة قانونية. سنوضح شروط الحجز المحددة قبل الدفع.",
      "resources.page.title": "الموارد والتنزيلات",
      "resources.page.lead": "تصفح المواد القابلة للتنزيل حسب اللغة. ستضاف الموارد هنا عند توفرها.",
      "resources.english.title": "مستندات باللغة الإنجليزية",
      "resources.arabic.title": "مستندات باللغة العربية",
      "resources.empty.title": "المستندات ستتوفر قريباً",
      "resources.english.empty": "لا تتوفر حالياً تنزيلات باللغة الإنجليزية.",
      "resources.arabic.empty": "لا تتوفر حالياً تنزيلات باللغة العربية.",
      "resources.badge.bilingual": "بالإنجليزية والعربية",
      "page.back": "← العودة إلى الصفحة الرئيسية",
      "footer.copyright": "© DoraVitta LLC. All Rights Reserved.",
      "healthy.page.title": "الحياة الصحية — DoraVitta LLC",
      "healthy.page.lead": "مجاناً حالياً — ستضاف المحتويات عند توفر الملف.",
      "healthy.section.heading": "نظرة عامة",
      "healthy.section.p1": "ستتضمن هذه المساحة إرشادات حول التمارين والتغذية الأساسية وعادات الحياة الصحية. سيتوفر المحتوى عند تقديم المواد.",
      "healthy.back": "← العودة إلى الصفحة الرئيسية"
    }
  };

  function $(selector, root = document) { return root.querySelector(selector); }
  function $all(selector, root = document) { return Array.from(root.querySelectorAll(selector)); }

  function applyLanguage(lang) {
    const language = lang === "ar" ? "ar" : "en";
    const map = translations[language];
    document.documentElement.lang = language;
    document.documentElement.setAttribute("dir", language === "ar" ? "rtl" : "ltr");

    $all("[data-i18n]").forEach((element) => {
      const value = map[element.getAttribute("data-i18n")];
      if (value) element.textContent = value;
    });
    $all("[data-i18n-placeholder]").forEach((element) => {
      const value = map[element.getAttribute("data-i18n-placeholder")];
      if (value) element.placeholder = value;
    });
    $all("[data-i18n-aria]").forEach((element) => {
      const value = map[element.getAttribute("data-i18n-aria")];
      if (value) element.setAttribute("aria-label", value);
    });

    const btnEn = document.getElementById("btn-en");
    const btnAr = document.getElementById("btn-ar");
    if (btnEn) {
      btnEn.classList.toggle("active", language === "en");
      btnEn.setAttribute("aria-pressed", language === "en");
    }
    if (btnAr) {
      btnAr.classList.toggle("active", language === "ar");
      btnAr.setAttribute("aria-pressed", language === "ar");
    }
    localStorage.setItem("site-lang", language);
  }

  const btnEn = document.getElementById("btn-en");
  const btnAr = document.getElementById("btn-ar");
  if (btnEn) btnEn.addEventListener("click", () => applyLanguage("en"));
  if (btnAr) btnAr.addEventListener("click", () => applyLanguage("ar"));

  const savedLang = localStorage.getItem("site-lang");
  const defaultLang = savedLang || (navigator.language && navigator.language.startsWith("ar") ? "ar" : "en");
  applyLanguage(defaultLang);

  window.toggleMenu = function toggleMenu() {
    const navList = document.getElementById("nav-list");
    if (navList) navList.classList.toggle("active");
  };

  $all("#nav-list a").forEach((link) => link.addEventListener("click", () => {
    const navList = document.getElementById("nav-list");
    if (navList) navList.classList.remove("active");
  }));

  const slides = $all(".slide");
  const dotsContainer = document.getElementById("carouselDots");
  let current = slides.findIndex((slide) => slide.getAttribute("aria-hidden") === "false");
  if (current < 0) current = 0;

  function showSlide(index) {
    slides.forEach((slide, slideIndex) => {
      slide.setAttribute("aria-hidden", slideIndex === index ? "false" : "true");
    });
    if (dotsContainer) {
      $all("button", dotsContainer).forEach((dot, dotIndex) => {
        dot.setAttribute("aria-pressed", dotIndex === index ? "true" : "false");
      });
    }
    current = index;
  }

  if (dotsContainer) {
    slides.forEach((slide, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-label", `Show slide ${index + 1}`);
      button.setAttribute("aria-pressed", index === current ? "true" : "false");
      button.addEventListener("click", () => showSlide(index));
      dotsContainer.appendChild(button);
    });
  }

  window.prevSlide = function prevSlide() {
    if (slides.length) showSlide((current - 1 + slides.length) % slides.length);
  };
  window.nextSlide = function nextSlide() {
    if (slides.length) showSlide((current + 1) % slides.length);
  };

  let autoplayTimer = null;
  const carousel = document.getElementById("heroCarousel");
  function startAutoplay() {
    if (!carousel || autoplayTimer) return;
    autoplayTimer = setInterval(() => window.nextSlide(), 6000);
  }
  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }
  if (carousel) {
    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);
    startAutoplay();
  }

  function onScroll() {
    $all(".animate-on-scroll").forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight - 60) element.classList.add("in-view");
    });
  }
  window.addEventListener("scroll", onScroll);
  onScroll();

  const contactBtn = document.getElementById("contact-submit");
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      const name = document.getElementById("input-name")?.value || "";
      const message = document.getElementById("input-message")?.value || "";
      const subject = encodeURIComponent(name ? `Inquiry from ${name}` : "Website inquiry");
      const body = encodeURIComponent(message);
      window.location.href = `mailto:info@doravitta.com?subject=${subject}&body=${body}`;
    });
  }
}());
