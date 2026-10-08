// Basic site script: language switching (EN/AR), simple carousel, nav toggle, i18n map and placeholders.
// Persists language choice in localStorage.

(function(){
  // ---- Translations ----
  const translations = {
    en: {
      "nav.home":"Home",
      "nav.about":"About",
      "nav.services":"Services",
      "nav.contact":"Contact",
      "nav.policies":"Policies",
      "nav.resources":"Resources",

      "hero.1.title":"Empowering Your Success",
      "hero.1.sub":"Clarity, strategy and warmth — bespoke consultancy for leaders and founders.",
      "hero.1.cta":"Get Started",
      "hero.2.title":"Strategic Business Growth",
      "hero.2.sub":"We design growth paths rooted in insight — sustainable, measurable and realistic.",
      "hero.2.cta":"Our Services",
      "hero.3.title":"Developing Leaders & Teams",
      "hero.3.sub":"Workshops and coaching that build confidence, alignment and impact.",
      "hero.3.cta":"Contact Us",
      "hero.logoTag":"DoraVitta — clarity, trust, warmth",

      "about.title":"About DoraVitta",
      "about.lead":"DoraVitta partners with entrepreneurs and teams to find clarity and craft actionable strategy. We combine market insight with human-centred coaching so decisions are better inf[...]",

      "services.title":"Our Services",
      "services.university.title":"University Consultations",
      "services.university.description":"One-to-one sessions that help students and families plan their university journey with confidence. We cover choosing a major and university, building a realistic application plan, and preparing for admissions requirements and deadlines.",
      "services.who":"Who it's for",
      "services.how":"How it works",
      "services.price":"Pricing",
      "services.payment":"Payment",
      "services.payment.text":"Secure online payment by card. A payment link is sent after booking.",
      "services.booking":"Booking",
      "services.university.audience.1":"High school students",
      "services.university.audience.2":"Current university students",
      "services.university.audience.3":"Parents",
      "services.university.step.1":"Book a session by email at info@doravitta.com",
      "services.university.step.2":"We confirm your time and send a secure payment link.",
      "services.university.step.3":"Meet online (Zoom or Google Meet) for 45 minutes.",
      "services.university.step.4":"Receive a short written summary with clear next steps.",
      "services.university.price":"$15 per session",
      "services.employee.title":"Employee Coaching & Motivation",
      "services.employee.description":"Coaching sessions that help employees build confidence, stay motivated, and handle everyday work pressure. Sessions focus on goal setting, communication, and practical habits for a more positive and productive workday.",
      "services.employee.audience.1":"Individual employees",
      "services.employee.audience.2":"Teams",
      "services.employee.step.1":"Contact us to discuss your needs.",
      "services.employee.step.2":"We agree on a session plan and confirm the schedule.",
      "services.employee.step.3":"Sessions take place online.",
      "services.employee.price.1":"Individual session (45 minutes): $55",
      "services.employee.price.2":"Team sessions: Pricing on request",
      "services.employee.notice":"This service is coaching and motivational support. It is not medical or therapeutic care.",

      "contact.title":"Contact Us",
      "contact.form.name":"Your Name",
      "contact.form.email":"Your Email",
      "contact.form.message":"How can we help you?",
      "contact.form.submit":"Send Message",
      "contact.document.title":"Contact Us — DoraVitta LLC",
      "contact.intro":"We'd love to hear from you. Whether you're looking for a university consultation or employee coaching and motivation, the DoraVitta team is here to help.",
      "contact.inquiries":"Inquiries & Session Bookings",
      "contact.support":"Support & Follow-up",
      "contact.address":"Registered Address",
      "contact.company":"DoraVitta LLC",
      "contact.helpful":"Helpful Information",
      "contact.note1":"All sessions are delivered online.",
      "contact.note2":"After your booking is confirmed, you'll receive a card payment link.",
      "contact.note3":"The address above is our registered business address; we don't receive visitors there.",
      "contact.form.heading":"Send us a Message",
      "contact.footer.title":"Questions? Contact us at",
      "policies.page.title":"Policies — DoraVitta LLC",
      "policies.title":"Policies",
      "policies.privacy.title":"Privacy Policy",
      "policies.privacy.intro":"DoraVitta LLC (\"we,\" \"us,\" or \"our\") respects your privacy. This policy explains how we handle information you provide when using our website or services.",
      "policies.privacy.collection":"Information We Collect",
      "policies.privacy.collection.text":"We may collect contact and booking details you choose to provide, such as your name, email address, and information relevant to your inquiry. Please do not send sensitive personal information unless it is necessary for your request.",
      "policies.privacy.usage":"How We Use Information",
      "policies.privacy.usage.text":"We use information to respond to inquiries, arrange and deliver online sessions, send booking or payment communications, and meet legal obligations. We do not sell personal information. We may use service providers to support our operations and disclose information when required by law.",
      "policies.privacy.rights":"Retention and Your Choices",
      "policies.privacy.rights.text":"We retain information only as reasonably needed for these purposes and applicable recordkeeping requirements. You may request access, correction, or deletion by contacting info@doravitta.com, subject to legal requirements.",
      "policies.terms.title":"Terms & Conditions",
      "policies.terms.intro":"By using this website or booking a service, you agree to these terms. If you do not agree, do not use the services.",
      "policies.terms.services":"Online Service Delivery",
      "policies.terms.services.text":"Services are provided online, using Zoom, Google Meet, or another agreed platform. A booking is confirmed when we agree on the time and communicate the applicable payment details. You are responsible for providing accurate contact information and having a suitable internet connection.",
      "policies.terms.conduct":"Participation",
      "policies.terms.conduct.text":"Participants are expected to communicate respectfully and attend at the agreed time. Please notify us promptly if you need to change a booking. We may end a session or decline service where conduct is abusive, unlawful, or makes delivery impracticable.",
      "policies.terms.limitations":"Guidance and Responsibility",
      "policies.terms.limitations.text":"Our guidance is educational and advisory, not a guarantee of admission, employment, business, or other outcomes. You remain responsible for your decisions and should independently verify important requirements and deadlines.",
      "policies.refund.title":"Refund & Cancellation Policy",
      "policies.refund.intro":"This policy applies to online sessions booked with DoraVitta LLC.",
      "policies.refund.cancellation":"Changes and Cancellations",
      "policies.refund.cancellation.text":"Please request a cancellation or reschedule at least 24 hours before the session. Requests received by then may be rescheduled or refunded to the original payment method. For later requests, missed sessions, or late arrival that prevents delivery, a refund is not guaranteed; contact us and we will consider the circumstances.",
      "policies.refund.noshow":"If We Cancel",
      "policies.refund.noshow.text":"If we need to cancel and cannot agree on a replacement time, we will refund the amount paid for that session to the original payment method.",
      "policies.refund.satisfaction":"Refund Processing",
      "policies.refund.satisfaction.text":"Approved refunds are submitted to the payment provider for processing. The time for funds to appear depends on the provider and your card issuer.",
      "policies.disclaimer.title":"Online Services Disclaimer",
      "policies.disclaimer.intro":"Our services are online education, consultation, coaching, and motivational support. They are not medical, psychological, therapeutic, legal, or financial care or advice.",
      "policies.disclaimer.notmedical":"Not Medical or Therapeutic Care",
      "policies.disclaimer.notmedical.text":"Coaching is not a diagnosis or treatment and does not replace qualified professional care. If you need medical or mental-health support, contact an appropriately licensed provider or emergency service.",
      "policies.disclaimer.accuracy":"No Guaranteed Results",
      "policies.disclaimer.accuracy.text":"We aim to provide useful, current guidance, but cannot guarantee any particular outcome. You are responsible for verifying information with the relevant university, employer, or other authority.",
      "policies.disclaimer.continuity":"Online Availability",
      "policies.disclaimer.continuity.text":"Online sessions depend on internet access and third-party platforms. If a technical issue prevents a session, contact us to arrange a reasonable alternative or reschedule.",
      "policies.payment.title":"Payment Policy",
      "policies.payment.intro":"Session fees are communicated when a booking is arranged. Payment is made online by card using the secure payment link we provide.",
      "policies.payment.methods":"Payment and Booking",
      "policies.payment.methods.text":"After agreeing on a session time, we send a card payment link. Your booking is confirmed as stated in our booking communication. Team-session fees are quoted individually.",
      "policies.payment.security":"Payment Security",
      "policies.payment.security.text":"Card payments are processed by the payment provider shown on the payment page. Do not send card details by email or message. We do not request your full card number or security code.",
      "policies.payment.billing":"Receipts and Refunds",
      "policies.payment.billing.text":"The payment provider may issue a transaction receipt. Any approved refund is returned to the original payment method, subject to the provider's processing time and applicable law.",
      "policies.payment.disputes":"Payment Questions",
      "policies.payment.disputes.text":"For questions about a payment or a charge, contact support@doravitta.com and include relevant booking details without sending full card information.",
      "policies.updated":"Last Updated: October 2026",
      "policies.contact":"Questions? Contact us at",
      "resources.page.title":"Resources & Downloads — DoraVitta LLC",
      "resources.title":"Resources & Downloads",
      "resources.intro":"Access helpful documents and resources to support your journey with DoraVitta.",
      "resources.english":"English Documents",
      "resources.arabic":"Arabic Documents",
      "resources.download":"Download",
      "resources.empty":"No documents are available yet.",
      "resources.english.badge":"English PDF available",
      "resources.arabic.badge":"Arabic PDF available",

      "university.page.title":"University Consultations — DoraVitta LLC",
      "university.page.lead":"Include your university advisor in these sessions.",
      "university.section.heading":"What we do",
      "university.section.p1":"We run focused consultations that bring your university advisor together with our consultants to align academic guidance with practical strategy and career or resear[...]",
      "university.section.heading2":"How to book",
      "university.section.p2":"Contact us via the Contact form on the homepage and indicate your advisor's details; we will coordinate scheduling and scope together.",
      "university.back":"← Back to Home",

      "employee.page.title":"Employee Coaching & Motivation — DoraVitta LLC",
      "employee.page.lead":"Support for employee wellbeing and recovery.",
      "employee.section.heading":"Service overview",
      "employee.section.p1":"Our counseling programs help employees recover from stress, burnout or personal difficulties, combining coaching, referral to appropriate specialists and workplace rei[...]",
      "employee.section.heading2":"How we work",
      "employee.section.p2":"We provide confidential, practical support; managers can make referrals or employees can self-refer. We tailor sessions to the individual's needs and the organisation'[...]",
      "employee.back":"← Back to Home",

      "healthy.page.title":"Healthy Living — DoraVitta LLC",
      "healthy.page.lead":"Free for now — content will be added when the file is available.",
      "healthy.section.heading":"Overview",
      "healthy.section.p1":"This area will provide guidance on exercise routines, basic nutrition and healthy lifestyle habits. Content will be available once the material is provided.",
      "healthy.back":"← Back to Home",

      "blog.title":"DoraVitta Blog",
      "blog.lead":"Insights, stories and practical advice for founders and leaders.",
      "blog.post1.title":"Designing Growth: A Framework",
      "blog.post1.excerpt":"A short framework to help product teams prioritise high-impact experiments and avoid common traps.",
      "blog.post2.title":"Leadership Rituals That Scale",
      "blog.post2.excerpt":"Small weekly practices that keep leadership aligned as organisations grow.",
      "blog.post3.title":"Coaching for Tough Conversations",
      "blog.post3.excerpt":"Practical cues to prepare and run difficult but necessary conversations with care.",
      "blog.readmore":"Read more →",

      "footer.brand":"DoraVitta LLC",
      "footer.copyright":"© DoraVitta LLC. All Rights Reserved.",
      "social.linkedin":"LinkedIn",
      "social.twitter":"Twitter",
      "social.instagram":"Instagram"
    },

    ar: {
      "nav.home":"الصفحة الرئيسية",
      "nav.about":"من نحن",
      "nav.services":"الخدمات",
      "nav.contact":"اتصل بنا",
      "nav.policies":"السياسات",
      "nav.resources":"المصادر",

      "hero.1.title":"تمكين نجاحك",
      "hero.1.sub":"الوضوح، الثقة والدعم — استراتيجية تتوافق مع احتياجك.",
      "hero.1.cta":"ابدأ الآن",
      "hero.2.title":"نمو الأعمال الاستراتيجي",
      "hero.2.sub":"نضع مسارات نمو مستندة إلى البصيرة — مستدامة، قابلة للقياس وواقعية.",
      "hero.2.cta":"خدماتنا",
      "hero.3.title":"بناء القادة والفرق",
      "hero.3.sub":"ورش عمل وتدريب يبني الثقة، التوافق والتأثير.",
      "hero.3.cta":"تواصل معنا",
      "hero.logoTag":"دورافيتا — وضوح، ثقة، دعم",

      "about.title":"عن DoraVitta",
      "about.lead":"⸻\n\n✨ من نحن\n\nنحن منصة استشارات متكاملة نُقدّم تجربة مختلفة في التوجيه وصناعة القرار، نُمكّن ا�[...]",

      "services.title":"خدماتنا",
      "services.university.title":"استشارات جامعية",
      "services.university.description":"جلسات فردية تساعد الطلاب وأولياء الأمور على التخطيط لرحلتهم الجامعية بثقة. نغطي اختيار التخصص والجامعة، وبناء خطة تقديم واقعية، والتحضير لمتطلبات القبول والمواعيد النهائية.",
      "services.who":"لمن هذه الخدمة",
      "services.how":"كيف تتم الخدمة",
      "services.price":"السعر",
      "services.payment":"الدفع",
      "services.payment.text":"دفع إلكتروني آمن بالبطاقة، ويُرسل رابط الدفع بعد تأكيد الحجز.",
      "services.booking":"الحجز",
      "services.university.audience.1":"طلاب المرحلة الثانوية",
      "services.university.audience.2":"طلاب الجامعات",
      "services.university.audience.3":"أولياء الأمور",
      "services.university.step.1":"احجز جلستك عبر البريد الإلكتروني.",
      "services.university.step.2":"نؤكد لك الموعد ونرسل رابط دفع آمن.",
      "services.university.step.3":"نلتقي أونلاين (Zoom أو Google Meet) لمدة 45 دقيقة.",
      "services.university.step.4":"تستلم ملخصًا مكتوبًا قصيرًا يتضمن الخطوات التالية بوضوح.",
      "services.university.price":"15 دولارًا للجلسة",
      "services.employee.title":"جلسات تدريب وتحفيز الموظفين",
      "services.employee.description":"جلسات تدريب تساعد الموظفين على بناء الثقة، والحفاظ على الدافعية، والتعامل مع ضغوط العمل اليومية. تركّز الجلسات على تحديد الأهداف، والتواصل الفعّال، والعادات العملية لبيئة عمل أكثر إيجابية وإنتاجية.",
      "services.employee.audience.1":"الموظفون الأفراد",
      "services.employee.audience.2":"الفرق",
      "services.employee.step.1":"تواصل معنا لمناقشة احتياجاتك.",
      "services.employee.step.2":"نتفق على خطة الجلسات ونؤكد الجدول الزمني.",
      "services.employee.step.3":"تُقدَّم الجلسات أونلاين.",
      "services.employee.price.1":"الجلسة الفردية (45 دقيقة): 55 دولارًا",
      "services.employee.price.2":"جلسات الفرق: السعر حسب الطلب",
      "services.employee.notice":"هذه الخدمة تدريب ودعم تحفيزي وليست رعاية طبية أو علاجية.",

      "contact.title":"تواصل معنا",
      "contact.form.name":"اسمك",
      "contact.form.email":"البريد الإلكتروني",
      "contact.form.message":"كيف يمكننا مساعدتك؟",
      "contact.form.submit":"أرسل الرسالة",
      "contact.document.title":"تواصل معنا — DoraVitta LLC",
      "contact.intro":"يسعدنا سماع رأيك. سواء كنت تبحث عن استشارة جامعية أو جلسة تدريب وتحفيز للموظفين، فريق DoraVitta جاهز لمساعدتك.",
      "contact.inquiries":"للاستفسارات وحجز الجلسات",
      "contact.support":"للدعم والمتابعة",
      "contact.address":"العنوان المسجل",
      "contact.company":"DoraVitta LLC",
      "contact.helpful":"معلومات مفيدة",
      "contact.note1":"جميع الجلسات تُقدَّم أونلاين.",
      "contact.note2":"بعد تأكيد الحجز يصلك رابط الدفع بالبطاقة.",
      "contact.note3":"العنوان أعلاه هو العنوان المسجل للشركة ولا نستقبل زوارًا فيه.",
      "contact.form.heading":"أرسل لنا رسالة",
      "contact.footer.title":"للاستفسارات، تواصل معنا عبر",
      "policies.page.title":"السياسات — DoraVitta LLC",
      "policies.title":"السياسات",
      "policies.privacy.title":"سياسة الخصوصية",
      "policies.privacy.intro":"تحترم DoraVitta LLC (\"نحن\") خصوصيتك. توضح هذه السياسة كيفية تعاملنا مع المعلومات التي تقدمها عند استخدام موقعنا أو خدماتنا.",
      "policies.privacy.collection":"المعلومات التي نجمعها",
      "policies.privacy.collection.text":"قد نجمع بيانات التواصل والحجز التي تختار تقديمها، مثل اسمك وبريدك الإلكتروني والمعلومات ذات الصلة باستفسارك. يُرجى عدم إرسال معلومات شخصية حساسة ما لم تكن ضرورية لطلبك.",
      "policies.privacy.usage":"كيفية استخدام المعلومات",
      "policies.privacy.usage.text":"نستخدم المعلومات للرد على الاستفسارات، وترتيب الجلسات الأونلاين وتقديمها، وإرسال رسائل الحجز والدفع، والوفاء بالالتزامات القانونية. لا نبيع المعلومات الشخصية. وقد نستعين بمقدمي خدمات لدعم أعمالنا أو نفصح عن المعلومات إذا ألزمنا القانون بذلك.",
      "policies.privacy.rights":"الاحتفاظ بالمعلومات وخياراتك",
      "policies.privacy.rights.text":"نحتفظ بالمعلومات للمدة المعقولة اللازمة لهذه الأغراض ومتطلبات حفظ السجلات القانونية. يمكنك طلب الوصول إلى معلوماتك أو تصحيحها أو حذفها عبر info@doravitta.com، مع مراعاة المتطلبات القانونية.",
      "policies.terms.title":"الشروط والأحكام",
      "policies.terms.intro":"باستخدام هذا الموقع أو حجز إحدى الخدمات، فإنك توافق على هذه الشروط. إذا لم توافق عليها، يُرجى عدم استخدام الخدمات.",
      "policies.terms.services":"تقديم الخدمات أونلاين",
      "policies.terms.services.text":"تُقدَّم الخدمات أونلاين عبر Zoom أو Google Meet أو منصة أخرى نتفق عليها. يُؤكَّد الحجز بعد الاتفاق على الموعد وإرسال تفاصيل الدفع المعمول بها. أنت مسؤول عن تقديم معلومات تواصل صحيحة وتوفير اتصال إنترنت مناسب.",
      "policies.terms.conduct":"المشاركة",
      "policies.terms.conduct.text":"يُتوقع من المشاركين التواصل باحترام والحضور في الموعد المتفق عليه. يُرجى إبلاغنا سريعًا عند الحاجة إلى تغيير الحجز. يجوز لنا إنهاء الجلسة أو رفض الخدمة إذا كان السلوك مسيئًا أو غير قانوني أو يمنع تقديم الخدمة.",
      "policies.terms.limitations":"الإرشاد والمسؤولية",
      "policies.terms.limitations.text":"إرشاداتنا تعليمية واستشارية، ولا تضمن القبول الجامعي أو التوظيف أو نتائج الأعمال أو أي نتائج أخرى. تظل مسؤولًا عن قراراتك، وينبغي التحقق بشكل مستقل من المتطلبات والمواعيد المهمة.",
      "policies.refund.title":"سياسة الاسترداد والإلغاء",
      "policies.refund.intro":"تسري هذه السياسة على الجلسات الأونلاين المحجوزة مع DoraVitta LLC.",
      "policies.refund.cancellation":"تغيير المواعيد والإلغاء",
      "policies.refund.cancellation.text":"يُرجى طلب الإلغاء أو تغيير الموعد قبل الجلسة بـ 24 ساعة على الأقل. يمكن إعادة جدولة الطلبات المقدمة قبل ذلك أو استرداد قيمتها إلى وسيلة الدفع الأصلية. أما الطلبات المتأخرة أو عدم الحضور أو التأخر الذي يمنع تقديم الجلسة فلا يضمن الاسترداد؛ تواصل معنا وسننظر في الظروف.",
      "policies.refund.noshow":"إلغاء الجلسة من جانبنا",
      "policies.refund.noshow.text":"إذا اضطررنا إلى إلغاء الجلسة ولم نتمكن من الاتفاق على موعد بديل، فسنرد المبلغ المدفوع عن تلك الجلسة إلى وسيلة الدفع الأصلية.",
      "policies.refund.satisfaction":"معالجة الاسترداد",
      "policies.refund.satisfaction.text":"نرسل طلبات الاسترداد الموافق عليها إلى مزود الدفع لمعالجتها. ويعتمد وقت ظهور المبلغ على مزود الخدمة وجهة إصدار بطاقتك.",
      "policies.disclaimer.title":"إخلاء مسؤولية الخدمات الأونلاين",
      "policies.disclaimer.intro":"خدماتنا هي خدمات تعليمية واستشارية وتدريبية وتحفيزية تُقدَّم أونلاين. وهي ليست رعاية أو استشارات طبية أو نفسية أو علاجية أو قانونية أو مالية.",
      "policies.disclaimer.notmedical":"ليست رعاية طبية أو علاجية",
      "policies.disclaimer.notmedical.text":"التدريب ليس تشخيصًا أو علاجًا ولا يحل محل الرعاية المهنية المؤهلة. إذا كنت بحاجة إلى دعم طبي أو نفسي، فتواصل مع مقدم رعاية مرخص أو خدمة طوارئ.",
      "policies.disclaimer.accuracy":"لا نضمن النتائج",
      "policies.disclaimer.accuracy.text":"نسعى إلى تقديم إرشادات مفيدة وحديثة، لكننا لا نضمن نتيجة محددة. أنت مسؤول عن التحقق من المعلومات لدى الجامعة أو جهة العمل أو السلطة المعنية.",
      "policies.disclaimer.continuity":"توفر الخدمة أونلاين",
      "policies.disclaimer.continuity.text":"تعتمد الجلسات الأونلاين على الإنترنت ومنصات تابعة لأطراف أخرى. إذا حالت مشكلة تقنية دون انعقاد الجلسة، فتواصل معنا لترتيب بديل مناسب أو تغيير الموعد.",
      "policies.payment.title":"سياسة الدفع",
      "policies.payment.intro":"نوضح رسوم الجلسات عند ترتيب الحجز. يتم الدفع أونلاين بالبطاقة عبر رابط الدفع الآمن الذي نرسله.",
      "policies.payment.methods":"الدفع والحجز",
      "policies.payment.methods.text":"بعد الاتفاق على موعد الجلسة، نرسل رابطًا للدفع بالبطاقة. يُؤكَّد الحجز وفق ما توضحه رسالة الحجز. تُحدَّد أسعار جلسات الفرق كلٌّ على حدة.",
      "policies.payment.security":"أمان الدفع",
      "policies.payment.security.text":"تُعالَج مدفوعات البطاقات عبر مزود الدفع الظاهر في صفحة الدفع. لا ترسل بيانات بطاقتك عبر البريد الإلكتروني أو الرسائل. لا نطلب رقم بطاقتك كاملًا أو رمز الأمان.",
      "policies.payment.billing":"الإيصالات والاسترداد",
      "policies.payment.billing.text":"قد يرسل مزود الدفع إيصالًا بالمعاملة. يُعاد أي مبلغ مسترد وموافق عليه إلى وسيلة الدفع الأصلية، وفق مدة المعالجة لدى المزود والقانون المعمول به.",
      "policies.payment.disputes":"الاستفسارات المتعلقة بالدفع",
      "policies.payment.disputes.text":"للاستفسار عن دفعة أو خصم، تواصل مع support@doravitta.com وأرفق تفاصيل الحجز ذات الصلة دون إرسال بيانات البطاقة كاملة.",
      "policies.updated":"آخر تحديث: أكتوبر 2026",
      "policies.contact":"للاستفسارات، تواصل معنا عبر",
      "resources.page.title":"المصادر والتنزيلات — DoraVitta LLC",
      "resources.title":"المصادر والتنزيلات",
      "resources.intro":"اطّلع على المستندات والموارد المفيدة لدعم رحلتك مع DoraVitta.",
      "resources.english":"مستندات باللغة الإنجليزية",
      "resources.arabic":"مستندات باللغة العربية",
      "resources.download":"تنزيل",
      "resources.empty":"لا توجد مستندات متاحة حاليًا.",
      "resources.english.badge":"يتوفر ملف PDF باللغة الإنجليزية",
      "resources.arabic.badge":"يتوفر ملف PDF باللغة العربية",

      "university.page.title":"استشارات جامعية — DoraVitta LLC",
      "university.page.lead":"أدرج مستشارك الجامعي ضمن هذه الجلسات.",
      "university.section.heading":"ماذا نفعل",
      "university.section.p1":"نجري استشارات مركزة تجمع مستشارك الجامعي مع مستشارينا لمواءمة التوجيه الأكاديمي مع الاست[...]",
      "university.section.heading2":"كيفية الحجز",
      "university.section.p2":"اتصل بنا عبر نموذج التواصل في الصفحة الرئيسية وبيّن بيانات مستشارك؛ سننسق المواعيد ونحدد [...]",
      "university.back":"← العودة إلى الصفحة الرئيسية",

      "employee.page.title":"تدريب وتحفيز الموظفين — DoraVitta LLC",
      "employee.page.lead":"دعم لرفاهية الموظفين وتسريع عملية التعافي.",
      "employee.section.heading":"نظرة عامة على الخدمة",
      "employee.section.p1":"برامجنا الإرشادية تساعد الموظفين على التعافي من الإجهاد، الإرهاق أو الصعوبات الشخصية.",
      "employee.section.heading2":"كيفية العمل معنا",
      "employee.section.p2":"نقدم دعماً سرياً وعملياً؛ يمكن للمديرين إحالة الحالات أو يمكن للموظفين طلب المساعدة بمباد�[...]",
      "employee.back":"← العودة إلى الصفحة الرئيسية",

      "healthy.page.title":"الحياة الصحية — DoraVitta LLC",
      "healthy.page.lead":"مجاناً حالياً — سيتم إضافة المحتوى لاحقاً عند توفر الملف.",
      "healthy.section.heading":"نظرة عامة",
      "healthy.section.p1":"ستتضمن هذه الصفحة إرشادات حول برامج التمارين، التغذية الأساسية وعادات الحياة الصحية.",
      "healthy.back":"← العودة إلى الصفحة الرئيسية",

      "blog.title":"مدونة DoraVitta",
      "blog.lead":"رؤى، قصص ونصائح عملية لمؤسسين وقادة.",
      "blog.post1.title":"تصميم النمو: إطار عمل",
      "blog.post1.excerpt":"إطار عمل مختصر يساعد فرق المنتج على ترتيب تجارب ذات أثر عالي وتجنب الأخطاء الشائعة.",
      "blog.post2.title":"ممارسات قيادية قابلة للتوسع",
      "blog.post2.excerpt":"ممارسات أسبوعية صغيرة تحافظ على توافق القيادة أثناء نمو المنظمة.",
      "blog.post3.title":"التدريب للمحادثات الصعبة",
      "blog.post3.excerpt":"إشارات عملية للتحضير وإدارة محادثات ضرورية لكنها حساسة بعناية.",
      "blog.readmore":"اقرأ المزيد →",

      "footer.brand":"DoraVitta LLC",
      "footer.copyright":"© DoraVitta LLC. All Rights Reserved.",
      "social.linkedin":"لينكدإن",
      "social.twitter":"تويتر",
      "social.instagram":"إنستغرام"
    }
  };

  // ---- Utilities ----
  function $(sel, root = document) { return root.querySelector(sel); }
  function $all(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }
  let activeLanguage = 'en';
  let resourceDocuments = [];

  function renderResources(lang){
    const groups = {
      en: document.getElementById('resources-english'),
      ar: document.getElementById('resources-arabic')
    };
    if(!groups.en || !groups.ar) return;
    Object.values(groups).forEach(group => { group.replaceChildren(); });

    const translationsForLanguage = translations[lang] || translations.en;
    const documents = resourceDocuments.flatMap(doc => {
      const fileSegments = doc.file.split('/');
      if((doc.language !== 'en' && doc.language !== 'ar')
        || !doc.file.startsWith('documents/')
        || fileSegments.includes('..') || fileSegments.includes('.')
        || fileSegments.some(segment => !segment)){
        return [];
      }
      try {
        const fileURL = new URL(doc.file, document.baseURI);
        const documentsPath = new URL('documents/', document.baseURI).pathname;
        return fileURL.origin === location.origin && fileURL.pathname.startsWith(documentsPath)
          ? [{doc, fileURL, filename: fileSegments[fileSegments.length - 1]}]
          : [];
      } catch {
        return [];
      }
    });
    const pdfLanguages = new Map();
    let renderedCount = 0;
    documents.forEach(({doc}) => {
      if(typeof doc.id === 'string' && /\.pdf$/i.test(doc.file)){
        if(!pdfLanguages.has(doc.id)) pdfLanguages.set(doc.id, new Set());
        pdfLanguages.get(doc.id).add(doc.language);
      }
    });

    documents.forEach(({doc, fileURL, filename}) => {
      const card = document.createElement('article');
      card.className = 'resource-card';
      card.dir = doc.language === 'ar' ? 'rtl' : 'ltr';

      const icon = document.createElement('span');
      icon.className = 'resource-icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = '📄';
      card.append(icon);

      const title = document.createElement('h3');
      title.textContent = doc.title || filename;
      card.append(title);

      const description = doc.description?.[doc.language] || doc.description;
      if(description){
        const summary = document.createElement('p');
        summary.textContent = description;
        card.append(summary);
      }

      if(doc.id && pdfLanguages.get(doc.id)?.size === 2){
        const badges = document.createElement('div');
        badges.className = 'resource-badges';
        ['en', 'ar'].forEach(language => {
          const badge = document.createElement('span');
          badge.className = 'language-badge';
          const key = language === 'en' ? 'resources.english.badge' : 'resources.arabic.badge';
          badge.textContent = translationsForLanguage[key];
          badges.append(badge);
        });
        card.append(badges);
      }

      const download = document.createElement('a');
      download.className = 'download-btn';
      download.href = fileURL.href;
      download.setAttribute('download', '');
      download.setAttribute('aria-label', `${translationsForLanguage['resources.download']}: ${title.textContent}`);
      const downloadIcon = document.createElement('span');
      downloadIcon.className = 'download-icon';
      downloadIcon.setAttribute('aria-hidden', 'true');
      downloadIcon.textContent = '↓';
      download.append(downloadIcon, document.createTextNode(translationsForLanguage['resources.download']));
      card.append(download);
      groups[doc.language].append(card);
      renderedCount += 1;
    });

    const empty = document.getElementById('resources-empty');
    if(empty) empty.hidden = renderedCount > 0;
  }

  // ---- i18n apply function ----
  function applyLanguage(lang){
    const map = translations[lang] || translations.en;
    activeLanguage = lang === 'ar' ? 'ar' : 'en';
    // set document attributes
    document.documentElement.lang = (lang === 'ar') ? 'ar' : 'en';
    document.documentElement.setAttribute('dir', (lang === 'ar') ? 'rtl' : 'ltr');

    // update text nodes with data-i18n
    $all('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if(map[key]) el.textContent = map[key];
    });

    // update placeholders
    $all('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if(map[key]) el.placeholder = map[key];
    });

    // update aria-labels if present and mapped
    $all('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if(map[key]) el.setAttribute('aria-label', map[key]);
    });
    renderResources(activeLanguage);

    // update aria-pressed for language buttons
    const btnEn = document.getElementById('btn-en');
    const btnAr = document.getElementById('btn-ar');
    if(btnEn) btnEn.classList.toggle('active', lang === 'en');
    if(btnAr) btnAr.classList.toggle('active', lang === 'ar');
    if(btnEn) btnEn.setAttribute('aria-pressed', lang === 'en');
    if(btnAr) btnAr.setAttribute('aria-pressed', lang === 'ar');

    // persist
    localStorage.setItem('site-lang', lang);
  }

  // ---- Language switcher handlers ----
  const btnEn = document.getElementById('btn-en');
  const btnAr = document.getElementById('btn-ar');
  if(btnEn) btnEn.addEventListener('click', () => applyLanguage('en'));
  if(btnAr) btnAr.addEventListener('click', () => applyLanguage('ar'));

  // init language from localStorage or browser
  const savedLang = localStorage.getItem('site-lang');
  const defaultLang = savedLang || (navigator.language && navigator.language.startsWith('ar') ? 'ar' : 'en');
  applyLanguage(defaultLang);

  if(document.getElementById('resources-english')){
    fetch('resources.json')
      .then(response => {
        if(!response.ok) throw new Error('Unable to load document manifest');
        return response.json();
      })
      .then(manifest => {
        resourceDocuments = Array.isArray(manifest.documents)
          ? manifest.documents.filter(doc => doc && typeof doc.file === 'string' && typeof doc.title === 'string')
          : [];
        renderResources(activeLanguage);
      })
      .catch(() => renderResources(activeLanguage));
  }

  // ---- Nav toggle (mobile) ----
  window.toggleMenu = function toggleMenu(){
    const navList = document.getElementById('nav-list');
    if(!navList) return;
    navList.classList.toggle('active');
  };

  // Close mobile nav when clicking a link
  $all('#nav-list a').forEach(a => a.addEventListener('click', () => {
    const navList = document.getElementById('nav-list');
    if(navList && navList.classList.contains('active')) navList.classList.remove('active');
  }));

  // ---- Footer year ----
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Simple accessible carousel (keeps original markup) ----
  const slides = $all('.slide');
  const dotsContainer = document.getElementById('carouselDots');
  let current = slides.findIndex(s => s.getAttribute('aria-hidden') === 'false');
  if(current < 0) current = 0;

  function showSlide(index){
    slides.forEach((s, i) => {
      const visible = i === index;
      s.setAttribute('aria-hidden', visible ? 'false' : 'true');
    });
    // update dots
    if(dotsContainer){
      const dots = $all('.carousel-dots button', dotsContainer);
      dots.forEach((d, i) => d.setAttribute('aria-pressed', i === index ? 'true' : 'false'));
    }
    current = index;
  }

  // create dots
  if(dotsContainer){
    slides.forEach((_, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('aria-pressed', i === current ? 'true' : 'false');
      btn.addEventListener('click', () => showSlide(i));
      dotsContainer.appendChild(btn);
    });
  }

  window.prevSlide = function prevSlide(){
    showSlide((current - 1 + slides.length) % slides.length);
  };
  window.nextSlide = function nextSlide(){
    showSlide((current + 1) % slides.length);
  };

  // autoplay (optional)
  let autoplay = true;
  let autoplayInterval = 6000;
  let autoplayTimer = null;
  function startAutoplay(){
    if(!autoplay) return;
    stopAutoplay();
    autoplayTimer = setInterval(() => nextSlide(), autoplayInterval);
  }
  function stopAutoplay(){ if(autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null; } }
  // pause on hover
  const carousel = document.getElementById('heroCarousel');
  if(carousel){
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
  }
  startAutoplay();

  // reveal-on-scroll simple
  function onScroll(){
    $all('.animate-on-scroll').forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight - 60) el.classList.add('in-view');
    });
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Contact button: open mail client without submitting form
  const contactBtn = document.getElementById('contact-submit');
  if(contactBtn){
    contactBtn.addEventListener('click', (e) => {
      // optionally include subject/body from form fields
      const name = document.getElementById('input-name')?.value || '';
      const message = document.getElementById('input-message')?.value || '';
      const subject = encodeURIComponent(name ? `Inquiry from ${name}` : 'Website inquiry');
      const body = encodeURIComponent(message);
      window.location.href = `mailto:info@doravitta.com?subject=${subject}&body=${body}`;
    });
  }

})();
