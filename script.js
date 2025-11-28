 // Basic site script: language switching (EN/AR), simple carousel, nav toggle, i18n map and placeholders.
// Persists language choice in localStorage.

(function(){
  // ---- Translations ----
  const translations = {
    en: {
      "nav.home":"Home",
      "nav.about":"About",
      "nav.services":"Services",
      "nav.portfolio":"Portfolio",
      "nav.testimonials":"Testimonials",
      "nav.contact":"Contact",
      "nav.blog":"Blog",

      "hero.1.title":"Empowering Your Success",
      "hero.1.sub":"Clarity, strategy and warmth — bespoke consultancy for leaders and founders.",
      "hero.1.cta":"Get Started",
      "hero.2.title":"Strategic Business Growth",
      "hero.2.sub":"We design growth paths rooted in insight — sustainable, measurable and realistic.",
      "hero.2.cta":"Our Services",
      "hero.3.title":"Developing Leaders & Teams",
      "hero.3.sub":"Workshops and coaching that build confidence, alignment and impact.",
      "hero.3.cta":"View Portfolio",
      "hero.logoTag":"DoraVitta — clarity, trust, warmth",

      "about.title":"About DoraVitta",
      "about.lead":"DoraVitta partners with entrepreneurs and teams to find clarity and craft actionable strategy. We combine market insight with human-centred coaching so decisions are better informed and teams move forward confidently.",

      "services.title":"Our Services",
      "services.university.title":"University Consultations",
      "services.university.body":"Include your university advisor in these sessions.",
      "services.employee.title":"Employee Counseling (Employee Recovery)",
      "services.employee.body":"Support for employee wellbeing and recovery.",
      "services.healthy.title":"Healthy Living — Exercise & Nutrition",
      "services.healthy.body":"Free for now — content will be added when the file is available.",
      "services.learnmore":"Learn more →",

      "contact.title":"Contact Us",
      "contact.form.name":"Your Name",
      "contact.form.email":"Your Email",
      "contact.form.message":"How can we help you?",
      "contact.form.submit":"Send Message",

      "university.page.title":"University Consultations — DoraVitta",
      "university.page.lead":"Include your university advisor in these sessions.",
      "university.section.heading":"What we do",
      "university.section.p1":"We run focused consultations that bring your university advisor together with our consultants to align academic guidance with practical strategy and career or research plans.",
      "university.section.heading2":"How to book",
      "university.section.p2":"Contact us via the Contact form on the homepage and indicate your advisor's details; we will coordinate scheduling and scope together.",
      "university.back":"← Back to Home",

      "employee.page.title":"Employee Counseling — DoraVitta",
      "employee.page.lead":"Support for employee wellbeing and recovery.",
      "employee.section.heading":"Service overview",
      "employee.section.p1":"Our counseling programs help employees recover from stress, burnout or personal difficulties, combining coaching, referral to appropriate specialists and workplace reintegration planning.",
      "employee.section.heading2":"How we work",
      "employee.section.p2":"We provide confidential, practical support; managers can make referrals or employees can self-refer. We tailor sessions to the individual's needs and the organisation's policies.",
      "employee.back":"← Back to Home",

      "healthy.page.title":"Healthy Living — DoraVitta",
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

      "footer.brand":"DoraVitta Consultancy",
      "social.linkedin":"LinkedIn",
      "social.twitter":"Twitter",
      "social.instagram":"Instagram"
    },

    ar: {
      "nav.home":"الصفحة الرئيسية",
      "nav.about":"من نحن",
      "nav.services":"الخدمات",
      "nav.portfolio":"أعمالنا",
      "nav.testimonials":"آراء العملاء",
      "nav.contact":"اتصل بنا",
      "nav.blog":"المدونة",

      "hero.1.title":"تمكين نجاحك",
      "hero.1.sub":"الوضوح، الاستراتيجية والدفء — استشارات مصممة لقادة ورواد الأعمال.",
      "hero.1.cta":"ابدأ الآن",
      "hero.2.title":"نمو الأعمال الاستراتيجي",
      "hero.2.sub":"نضع مسارات نمو مستندة إلى البصيرة — مستدامة، قابلة للقياس وواقعية.",
      "hero.2.cta":"خدماتنا",
      "hero.3.title":"بناء القادة والفرق",
      "hero.3.sub":"ورش عمل وتدريب يبني الثقة، التوافق والتأثير.",
      "hero.3.cta":"عرض الأعمال",
      "hero.logoTag":"دورافيتا — وضوح، ثقة، دفء",

      "about.title":"عن DoraVitta",
      "about.lead":"تعمل DoraVitta مع رواد الأعمال والفرق لإيجاد الوضوح وصياغة استراتيجية قابلة للتنفيذ. ندمج بصيرة السوق مع تدريب يرتكز على الإنسان حتى تكون القرارات أكثر اطلاعاً وتتحرك الفرق بثقة.",

      "services.title":"خدماتنا",
      "services.university.title":"استشارات جامعية",
      "services.university.body":"أدرج مستشارك الجامعي ضمن هذه الجلسات.",
      "services.employee.title":"الإرشاد للموظفين (دعم التعافي)",
      "services.employee.body":"دعم لرفاهية الموظفين وتسريع عملية التعافي.",
      "services.healthy.title":"الحياة الصحية — التمارين والتغذية",
      "services.healthy.body":"مجاناً حالياً — سيتم إضافة المحتوى لاحقاً عند توفر الملف.",
      "services.learnmore":"اقرأ المزيد →",

      "contact.title":"تواصل معنا",
      "contact.form.name":"اسمك",
      "contact.form.email":"البريد الإلكتروني",
      "contact.form.message":"كيف يمكننا مساعدتك؟",
      "contact.form.submit":"أرسل الرسالة",

      "university.page.title":"استشارات جامعية — DoraVitta",
      "university.page.lead":"أدرج مستشارك الجامعي ضمن هذه الجلسات.",
      "university.section.heading":"ماذا نفعل",
      "university.section.p1":"نجري استشارات مركزة تجمع مستشارك الجامعي مع مستشارينا لمواءمة التوجيه الأكاديمي مع الاستراتيجية العملية وخطط المسار المهني أو البحثي.",
      "university.section.heading2":"كيفية الحجز",
      "university.section.p2":"اتصل بنا عبر نموذج التواصل في الصفحة الرئيسية وبيّن بيانات مستشارك؛ سننسق المواعيد ونحدد نطاق العمل معاً.",
      "university.back":"← العودة إلى الصفحة الرئيسية",

      "employee.page.title":"الإرشاد للموظفين — DoraVitta",
      "employee.page.lead":"دعم لرفاهية الموظفين وتسريع عملية التعافي.",
      "employee.section.heading":"نظرة عامة على الخدمة",
      "employee.section.p1":"برامجنا الإرشادية تساعد الموظفين على التعافي من الإجهاد، الإرهاق أو الصعوبات الشخصية، من خلال الجمع بين التدريب، الإحالة لمتخصصين مناسبين وخطط إعادة الاندماج في مكان العمل.",
      "employee.section.heading2":"كيفية العمل معنا",
      "employee.section.p2":"نقدم دعماً سرياً وعملياً؛ يمكن للمديرين إحالة الحالات أو يمكن للموظفين طلب المساعدة بمبادرتهم. نخصص الجلسات بحسب احتياجات الفرد وسياسات المؤسسة.",
      "employee.back":"← العودة إلى الصفحة الرئيسية",

      "healthy.page.title":"الحياة الصحية — DoraVitta",
      "healthy.page.lead":"مجاناً حالياً — سيتم إضافة المحتوى لاحقاً عند توفر الملف.",
      "healthy.section.heading":"نظرة عامة",
      "healthy.section.p1":"ستتضمن هذه الصفحة إرشادات حول برامج التمارين، التغذية الأساسية وعادات الحياة الصحية. سيتم إتاحة المحتوى بمجرد توفر المواد.",
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

      "footer.brand":"استشارات DoraVitta",
      "social.linkedin":"لينكدإن",
      "social.twitter":"تويتر",
      "social.instagram":"إنستغرام"
    }
  };

  // ---- Utilities ----
  function $(sel, root = document) { return root.querySelector(sel); }
  function $all(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

  // ---- i18n apply function ----
  function applyLanguage(lang){
    const map = translations[lang] || translations.en;
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

})();
