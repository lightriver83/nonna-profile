/* ==========================================================================
   Nonna — scrollytelling interactions
   GSAP + ScrollTrigger + Lenis (all via CDN)
   ========================================================================== */

(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Wait for libraries --- */
  function ready() {
    return typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && typeof Lenis !== 'undefined';
  }
  function whenReady(cb) {
    if (ready()) return cb();
    const t = setInterval(() => {
      if (ready()) { clearInterval(t); cb(); }
    }, 40);
    setTimeout(() => clearInterval(t), 6000);
  }

  window.addEventListener('load', function () {
    // Dismiss loader
    const loader = document.querySelector('.loader');
    setTimeout(() => loader && loader.classList.add('is-done'), 900);

    whenReady(init);
  });

  function init() {
    gsap.registerPlugin(ScrollTrigger);

    /* --- Lenis smooth scroll --- */
    let lenis = null;
    if (!prefersReduced) {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      // Anchor links
      document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener('click', (e) => {
          const id = a.getAttribute('href');
          if (!id || id === '#') return;
          const el = document.querySelector(id);
          if (!el) return;
          e.preventDefault();
          lenis.scrollTo(el, { offset: -40, duration: 1.4 });
        });
      });
    }

    /* --- Nav scrolled state --- */
    const nav = document.querySelector('.nav');
    ScrollTrigger.create({
      start: 80,
      end: 99999,
      onToggle: (self) => nav && nav.classList.toggle('is-scrolled', self.isActive),
    });

    /* --- Hero title reveal --- */
    if (!prefersReduced) {
      const heroLines = document.querySelectorAll('.hero__title .h-line');
      heroLines.forEach((line) => {
        const inner = line.innerHTML;
        line.innerHTML = '<span>' + inner + '</span>';
      });
      gsap.to('.hero__title .h-line > span', {
        y: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: 'expo.out',
        delay: 1.0,
      });
      gsap.from('.hero .kicker', { opacity: 0, y: 20, duration: 1, delay: 0.9, ease: 'expo.out' });
      gsap.from('.hero__meta > div', { opacity: 0, y: 24, duration: 1, stagger: 0.1, delay: 1.6, ease: 'expo.out' });
      gsap.from('.hero__scroll', { opacity: 0, duration: 1.5, delay: 2.4 });
    } else {
      document.querySelectorAll('.hero__title .h-line > span, [data-reveal] > span').forEach((el) => (el.style.transform = 'none'));
    }

    /* --- Hero image parallax --- */
    if (!prefersReduced) {
      gsap.to('.hero__image', {
        yPercent: 18,
        scale: 1.14,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    /* --- Big-type word reveal (mission / vision) --- */
    document.querySelectorAll('[data-split]').forEach((el) => {
      const words = el.textContent.trim().split(/\s+/);
      el.innerHTML = words.map((w) => `<span class="word"><span class="word-in">${w}</span></span>`).join(' ');
    });
    gsap.utils.toArray('[data-split]').forEach((el) => {
      const inners = el.querySelectorAll('.word-in');
      gsap.set(inners, { yPercent: 110 });
      gsap.set(el.querySelectorAll('.word'), { display: 'inline-block', overflow: 'hidden', paddingBottom: '0.04em' });
      gsap.set(inners, { display: 'inline-block', willChange: 'transform' });
      if (prefersReduced) {
        gsap.set(inners, { yPercent: 0 });
        return;
      }
      gsap.to(inners, {
        yPercent: 0,
        duration: 1.1,
        ease: 'expo.out',
        stagger: 0.055,
        scrollTrigger: { trigger: el, start: 'top 78%' },
      });
    });

    /* --- Counter animation --- */
    document.querySelectorAll('.stat__num').forEach((el) => {
      const target = parseFloat(el.dataset.count) || 0;
      const suffix = el.querySelector('span');
      const suffixHTML = suffix ? suffix.outerHTML : '';
      const obj = { v: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            v: target,
            duration: 2.2,
            ease: 'power3.out',
            onUpdate: () => {
              const n = Math.round(obj.v).toLocaleString('en-US');
              el.innerHTML = n + suffixHTML;
            },
          });
        },
      });
    });

    /* --- Generic scroll reveals (sections / cards) --- */
    if (!prefersReduced) {
      gsap.utils.toArray('.section-head, .story__grid, .step, .stat, .member, .rule, .timeline li, .trust__logos span, .pull-quote, .cta__title, .cta__sub, .cta__button, .whynow__text > *').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 28,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });
    }

    /* --- Image reveal (clip mask) --- */
    if (!prefersReduced) {
      gsap.utils.toArray('.story__image img, .step__media img, .member img, .whynow__image img').forEach((img) => {
        gsap.from(img, {
          clipPath: 'inset(100% 0 0 0)',
          scale: 1.2,
          duration: 1.4,
          ease: 'expo.out',
          scrollTrigger: { trigger: img, start: 'top 85%' },
        });
      });
    }

    /* --- Refresh ST after fonts load to avoid jitter --- */
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }
  }
})();
