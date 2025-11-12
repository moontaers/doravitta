// Header nav toggle
function toggleMenu() {
  const navList = document.querySelector("nav ul");
  navList && navList.classList.toggle("active");
}

// --- Carousel (hero) ---
// More robust carousel init: collects slides on init, logs lifecycle, and ensures autoplay starts.
const carousel = (function(){
  let slides = [];
  let dotsContainer = null;
  let current = 0;
  let timer = null;

  // SPEED: change this value to control autoplay speed (milliseconds)
  // Example: 2500 = 2.5 seconds per slide
  const interval = 2500;

  function createDots(){
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    slides.forEach((s,i)=>{
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Slide ' + (i+1));
      btn.dataset.index = i;
      btn.addEventListener('click', () => goTo(i));
      btn.setAttribute('aria-pressed', 'false');
      dotsContainer.appendChild(btn);
    });
    updateDots();
  }

  function updateDots(){
    if (!dotsContainer) return;
    const buttons = Array.from(dotsContainer.querySelectorAll('button'));
    buttons.forEach(b => b.setAttribute('aria-pressed', b.dataset.index == current ? 'true' : 'false'));
  }

  function show(index){
    if (!slides || slides.length === 0) return;
    slides.forEach((s,i)=>{
      if(i === index){
        s.setAttribute('aria-hidden','false');
      } else {
        s.setAttribute('aria-hidden','true');
      }
    });
    current = index;
    updateDots();
    console.debug('[carousel] show slide', current);
  }

  function next(){
    if (!slides || slides.length === 0) return;
    goTo((current + 1) % slides.length);
  }

  function prev(){
    if (!slides || slides.length === 0) return;
    goTo((current - 1 + slides.length) % slides.length);
  }

  function goTo(index){
    if (!slides || slides.length === 0) return;
    show(index);
    resetTimer();
  }

  function startTimer(){
    try {
      if(timer) return;
      timer = setInterval(() => {
        next();
      }, interval);
      console.debug('[carousel] startTimer interval', interval);
    } catch(err) {
      console.error('[carousel] startTimer error', err);
    }
  }

  function stopTimer(){
    if(timer){ clearInterval(timer); timer = null; console.debug('[carousel] stopTimer'); }
  }

  function resetTimer(){ stopTimer(); startTimer(); }

  function attachControls(){
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    prevBtn && prevBtn.addEventListener('click', () => { prev(); resetTimer(); });
    nextBtn && nextBtn.addEventListener('click', () => { next(); resetTimer(); });

    // Pause on hover
    const carouselEl = document.getElementById('heroCarousel');
    carouselEl && carouselEl.addEventListener('mouseenter', stopTimer);
    carouselEl && carouselEl.addEventListener('mouseleave', startTimer);

    // Keyboard navigation (skip inputs/textareas)
    document.addEventListener('keydown', (e) => {
      if (document.activeElement && ['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) return;
      if(e.key === 'ArrowLeft') { prev(); resetTimer(); }
      if(e.key === 'ArrowRight') { next(); resetTimer(); }
    });
  }

  function init(){
    try {
      slides = Array.from(document.querySelectorAll('.slide'));
      dotsContainer = document.getElementById('carouselDots');
      console.debug('[carousel] init - slides found:', slides.length);

      if(!slides.length){
        console.warn('[carousel] no .slide elements found. Carousel will not start.');
        return;
      }

      createDots();
      attachControls();
      show(0);
      startTimer();
    } catch(err) {
      console.error('[carousel] init error', err);
    }
  }

  // Expose some control functions for debugging
  return { init, next, prev, goTo, startTimer, stopTimer };
})();

// Convenience global helpers used by inline HTML buttons
function prevSlide() { carousel.prev(); }
function nextSlide() { carousel.next(); }

document.addEventListener('DOMContentLoaded', function(){
  // Initialize carousel
  try {
    carousel.init();
  } catch(e){
    console.error('Error initializing carousel', e);
  }

  // Update footer year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Simple "animate on scroll" with IntersectionObserver
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});

  document.querySelectorAll('.animate-on-scroll').forEach(el => io.observe(el));
});

// Convenience social links setter (preserves accessibility)
function setSocialLinks(links = {}) {
  const { linkedin, twitter, instagram } = links;
  const linkMap = [
    { id: 'linkedin-link', url: linkedin },
    { id: 'twitter-link', url: twitter },
    { id: 'instagram-link', url: instagram }
  ];

  linkMap.forEach(item => {
    const el = document.getElementById(item.id);
    if (!el) return;
    if (item.url && item.url.trim() !== '') {
      el.href = item.url;
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    } else {
      el.href = '#';
      el.removeAttribute('target');
      el.removeAttribute('rel');
      el.addEventListener('click', function(e){ e.preventDefault(); });
    }
  });
}

// Basic contact form feedback
document.addEventListener('submit', function(e){
  if(e.target && e.target.matches('.contact form')){
    e.preventDefault();
    alert('Thank you — your message was sent. We will contact you soon.');
    e.target.reset();
  }
});