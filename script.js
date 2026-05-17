/* ==========================================================================
   Nana — scrollytelling interactions
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

  /* --- Stage splash (pitch mode). Activate: Cmd/Ctrl+Shift+P, type "nana", or #stage hash. Dismiss: scroll/click/any key. --- */
  (function stageSplash() {
    const el = document.querySelector('.stage-splash');
    if (!el) { console.warn('[stage-splash] element not found'); return; }
    const isActive = () => el.classList.contains('is-active');
    let activatedAt = 0;
    const inGracePeriod = () => Date.now() - activatedAt < 500;

    function activate() {
      if (isActive()) return;
      activatedAt = Date.now();
      el.classList.add('is-active');
      document.body.style.overflow = 'hidden';
      console.log('[stage-splash] activated');
    }
    function dismiss() {
      if (!isActive()) return;
      el.classList.remove('is-active');
      document.body.style.overflow = '';
      console.log('[stage-splash] dismissed');
    }

    let buffer = '';
    let bufferTimer = null;
    const MODIFIER_KEYS = new Set(['Shift', 'Meta', 'Control', 'Alt', 'CapsLock']);

    window.addEventListener('keydown', (e) => {
      const ae = document.activeElement;
      if (ae && /^(INPUT|TEXTAREA|SELECT)$/i.test(ae.tagName)) return;

      // Activation 1: Cmd/Ctrl+Shift+P (e.code is layout-independent)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.code === 'KeyP') {
        e.preventDefault();
        activate();
        return;
      }

      // While active: any non-modifier key dismisses (after grace period)
      if (isActive()) {
        if (inGracePeriod()) return;
        if (!MODIFIER_KEYS.has(e.key)) dismiss();
        return;
      }

      // Activation 2: type sequence "nana" (no modifiers, single char keys)
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key.length !== 1) return;
      buffer = (buffer + e.key.toLowerCase()).slice(-4);
      if (buffer === 'nana') {
        activate();
        buffer = '';
      }
      clearTimeout(bufferTimer);
      bufferTimer = setTimeout(() => { buffer = ''; }, 1500);
    });

    window.addEventListener('wheel',      () => { if (isActive() && !inGracePeriod()) dismiss(); }, { passive: true });
    window.addEventListener('click',      () => { if (isActive() && !inGracePeriod()) dismiss(); });
    window.addEventListener('touchstart', () => { if (isActive() && !inGracePeriod()) dismiss(); }, { passive: true });

    // Activation 3: URL hash #stage
    if (window.location.hash === '#stage') activate();

    console.log('[stage-splash] ready. Activate: Cmd/Ctrl+Shift+P · type "nana" · or visit #stage');
  })();

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

    /* --- Generic scroll reveals (sections / cards) --- */
    if (!prefersReduced) {
      gsap.utils.toArray('.section-head, .story__grid, .step, .member, .cta__title, .cta__sub, .cta__button, .whynow__text > *, .recipe-card, .community__block, .chart').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 28,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });
    }

    /* --- Donut chart animate segments --- */
    gsap.utils.toArray('.chart--donut').forEach((chart) => {
      const segs = chart.querySelectorAll('.chart__seg');
      segs.forEach((seg) => {
        const dash = seg.getAttribute('stroke-dasharray') || '';
        const [len] = dash.split(' ');
        seg.style.strokeDasharray = '0 9999';
        ScrollTrigger.create({
          trigger: chart, start: 'top 80%', once: true,
          onEnter: () => {
            seg.style.strokeDasharray = dash;
            seg.setAttribute('stroke-dasharray', dash);
          },
        });
      });
    });

    /* --- Bar chart reveal --- */
    gsap.utils.toArray('.chart--bars .bars').forEach((bars) => {
      ScrollTrigger.create({
        trigger: bars, start: 'top 80%', once: true,
        onEnter: () => bars.classList.add('is-revealed'),
      });
    });

    /* --- Timeline reveal (progress track grows from left/top) --- */
    gsap.utils.toArray('.timeline').forEach((tl) => {
      ScrollTrigger.create({
        trigger: tl, start: 'top 78%', once: true,
        onEnter: () => tl.classList.add('is-revealed'),
      });
      if (!prefersReduced) {
        const items = tl.querySelectorAll('.tl-item');
        gsap.from(items, {
          opacity: 0,
          y: 16,
          duration: 0.8,
          stagger: 0.12,
          ease: 'expo.out',
          scrollTrigger: { trigger: tl, start: 'top 78%', once: true },
        });
      }
    });

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

    /* --- Recipes catalog — filter chips --- */
    const chips = document.querySelectorAll('.filter-chips button');
    if (chips.length) {
      chips.forEach((btn) => {
        btn.addEventListener('click', () => {
          chips.forEach((b) => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          const cat = btn.dataset.cat;
          document.querySelectorAll('.catalog .recipe-card').forEach((card) => {
            const match = cat === 'all' || card.dataset.category === cat;
            card.classList.toggle('is-hidden', !match);
          });
        });
      });
    }

    /* --- Recipe detail — populate dynamically from window.recipesData --- */
    const rdRoot = document.querySelector('.rd');
    if (rdRoot) {
      const params = new URLSearchParams(window.location.search);
      const slug = params.get('slug') || 'cappelletti-romagnoli';
      const data = window.recipesData || {};
      const recipe = data[slug];

      if (!recipe) {
        rdRoot.innerHTML = `
          <a href="recipes.html" class="rd__back">Back to recipes</a>
          <div class="rd__empty">
            <h1 class="rd__title"><em>Recipe not found</em></h1>
            <p>We couldn't find a recipe at this address. <a href="recipes.html">Back to all recipes</a>.</p>
          </div>`;
      } else {
        // Page title
        document.title = recipe.title + ' — Nana';

        // Header
        const elTitle = document.getElementById('rd-title');
        const elBy = document.getElementById('rd-by');
        if (elTitle) elTitle.textContent = recipe.title;
        if (elBy) elBy.textContent = `${recipe.byNonna} · ${recipe.region}`;

        // Meta
        const elTime = document.getElementById('rd-meta-time');
        const elServ = document.getElementById('rd-meta-servings');
        const elDiff = document.getElementById('rd-meta-difficulty');
        if (elTime) elTime.textContent = recipe.meta.time;
        if (elServ) elServ.textContent = recipe.meta.servings;
        if (elDiff) elDiff.textContent = recipe.meta.difficulty;

        // Hero image
        const elHero = document.getElementById('rd-hero');
        if (elHero) {
          elHero.src = recipe.hero.src;
          elHero.alt = recipe.hero.alt || recipe.title;
        }

        // Thumbs — main + recipe-specific extras (or generic kitchen fallback)
        const elThumbs = document.getElementById('rd-thumbs');
        if (elThumbs) {
          const fallbackThumbs = [
            { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=85&auto=format&fit=crop', alt: 'Flour, rolling pin and a worn recipe notebook' },
            { src: 'https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?w=400&q=85&auto=format&fit=crop', alt: 'Hands working fresh dough on a wooden board' },
            { src: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&q=85&auto=format&fit=crop', alt: 'A steaming pot on a home stove' }
          ];
          // Use recipe-specific extras first; pad with generic kitchen fallbacks if fewer than 3.
          const customExtras = Array.isArray(recipe.extraThumbs) ? recipe.extraThumbs : [];
          const extras = customExtras.concat(fallbackThumbs).slice(0, 3);
          const allThumbs = [{ src: recipe.hero.src, alt: recipe.hero.alt || recipe.title, active: true }, ...extras];
          elThumbs.innerHTML = allThumbs.map(t =>
            `<img${t.active ? ' class="is-active"' : ''} src="${t.src}" alt="${t.alt}" />`
          ).join('');
        }

        // Story
        const elStory = document.getElementById('rd-story');
        if (elStory) elStory.innerHTML = recipe.storyHtml;

        // Steps
        const elSteps = document.getElementById('rd-steps');
        if (elSteps) {
          elSteps.innerHTML = recipe.steps.map(s => `<li><p>${s}</p></li>`).join('');
        }

        // Ingredients
        const elIngTitle = document.getElementById('rd-ingredients-title');
        const elIng = document.getElementById('rd-ingredients');
        if (elIngTitle) elIngTitle.textContent = `Ingredients · serves ${recipe.meta.servings}`;
        if (elIng) {
          elIng.innerHTML = recipe.ingredients.map(i =>
            `<li>${i.name} <strong>${i.qty}</strong></li>`
          ).join('');
        }

        // Basket
        const elBT = document.getElementById('rd-basket-title');
        const elBP = document.getElementById('rd-basket-price');
        const elBW = document.getElementById('rd-basket-when');
        if (elBT && recipe.basket) elBT.textContent = recipe.basket.title;
        if (elBP && recipe.basket) elBP.textContent = recipe.basket.price;
        if (elBW && recipe.basket) elBW.textContent = recipe.basket.when;

        // Similar — fake stats deterministici da slug (reload-stable)
        const fakeStat = (slug, kind) => {
          let h = 0;
          const seed = slug + kind;
          for (let i = 0; i < seed.length; i++) h = ((h << 5) - h + seed.charCodeAt(i)) | 0;
          const ranges = { seats: [120, 920], licked: [28, 240] };
          const [min, max] = ranges[kind];
          return (Math.abs(h) % (max - min)) + min;
        };
        const elSim = document.getElementById('rd-similar');
        if (elSim && Array.isArray(recipe.similar)) {
          elSim.innerHTML = recipe.similar
            .map(s => data[s])
            .filter(Boolean)
            .map(r => {
              const slugKey = Object.keys(data).find(k => data[k] === r);
              return `
                <a class="recipe-card" href="recipe.html?slug=${slugKey}">
                  <div class="recipe-card__media">
                    <img src="${r.hero.src}" alt="" loading="lazy" />
                    <span class="recipe-card__badge">${r.badge}</span>
                  </div>
                  <div class="recipe-card__body">
                    <h3>${r.title}</h3>
                    <p class="recipe-card__by">${r.byNonna} · ${r.region}</p>
                    <div class="recipe-card__meta"><span>🍷 ${fakeStat(slugKey, 'seats')}</span><span>😋 ${fakeStat(slugKey, 'licked')}</span></div>
                  </div>
                </a>`;
            }).join('');
        }
      }
    }

    /* --- Recipe detail — thumbnails switcher (supports <img> and <video poster>) --- */
    document.querySelectorAll('.rd__thumbs img').forEach((th) => {
      th.addEventListener('click', () => {
        const mainImg = document.querySelector('.rd__media img');
        const mainVideo = document.querySelector('.rd__media video');
        document.querySelectorAll('.rd__thumbs img').forEach((t) => t.classList.remove('is-active'));
        th.classList.add('is-active');
        if (mainImg) mainImg.src = th.src;
        if (mainVideo) mainVideo.setAttribute('poster', th.src);
      });
    });

    /* --- Submit recipe modal (catalog page) --- */
    const submitTrigger = document.querySelector('[data-open-modal="submit"]');
    const submitModal = document.getElementById('submit-modal');
    if (submitTrigger && submitModal && typeof submitModal.showModal === 'function') {
      const formEl = submitModal.querySelector('.modal__form');
      const successEl = submitModal.querySelector('.modal__success');
      const closeBtns = submitModal.querySelectorAll('[data-close-modal]');
      let autoCloseTimer = null;

      const resetModal = () => {
        if (formEl) { formEl.reset(); formEl.hidden = false; }
        if (successEl) successEl.hidden = true;
        if (autoCloseTimer) { clearTimeout(autoCloseTimer); autoCloseTimer = null; }
      };

      submitTrigger.addEventListener('click', () => {
        resetModal();
        submitModal.showModal();
      });

      // Auto-open from QR code: /recipes.html?submit=1
      if (new URLSearchParams(window.location.search).get('submit') === '1') {
        resetModal();
        submitModal.showModal();
      }

      closeBtns.forEach(btn => btn.addEventListener('click', () => submitModal.close()));

      submitModal.addEventListener('click', (e) => {
        const rect = submitModal.getBoundingClientRect();
        const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
        if (!inside) submitModal.close();
      });

      submitModal.addEventListener('close', resetModal);

      if (formEl) {
        formEl.addEventListener('submit', (e) => {
          e.preventDefault();
          formEl.hidden = true;
          if (successEl) successEl.hidden = false;
          autoCloseTimer = setTimeout(() => submitModal.close(), 3200);
        });
      }
    }

    /* --- Recipe detail — reactions (persisted localStorage) --- */
    const reactions = document.querySelectorAll('.rd__reactions button');
    const slug = (new URLSearchParams(window.location.search)).get('slug') || 'default';
    reactions.forEach((btn) => {
      const key = `nonna:rx:${slug}:${btn.dataset.rx}`;
      const stored = parseInt(localStorage.getItem(key) || '0', 10);
      const cnt = btn.querySelector('.cnt');
      const base = parseInt(btn.dataset.base || '0', 10);
      if (cnt) cnt.textContent = base + stored;
      if (stored > 0) btn.classList.add('is-active');
      btn.addEventListener('click', () => {
        const active = btn.classList.toggle('is-active');
        const delta = active ? 1 : -1;
        const now = Math.max(0, parseInt(localStorage.getItem(key) || '0', 10) + delta);
        localStorage.setItem(key, String(now));
        if (cnt) cnt.textContent = base + now;
      });
    });

    /* --- Recipe detail — Add to my table --- */
    const basketBtn = document.querySelector('.basket-cta button');
    if (basketBtn) {
      basketBtn.addEventListener('click', () => {
        basketBtn.classList.add('is-added');
        basketBtn.textContent = '✓ Added to your table';
        setTimeout(() => {
          basketBtn.classList.remove('is-added');
          basketBtn.textContent = 'Add to my table';
        }, 2400);
      });
    }

    /* --- Recipe detail — Play button (video coming soon) --- */
    const playBtn = document.querySelector('.rd__media .play');
    if (playBtn) {
      const showToast = (message) => {
        let toast = document.querySelector('.toast');
        if (!toast) {
          toast = document.createElement('div');
          toast.className = 'toast';
          document.body.appendChild(toast);
        }
        toast.textContent = message;
        // force reflow then animate in
        void toast.offsetWidth;
        toast.classList.add('is-visible');
        clearTimeout(toast._hideTimer);
        toast._hideTimer = setTimeout(() => toast.classList.remove('is-visible'), 2600);
      };
      playBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Video arriving soon — we’re still in nonna’s kitchen.');
      });
    }

    /* --- Refresh ST after fonts load to avoid jitter --- */
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }
  }
})();
