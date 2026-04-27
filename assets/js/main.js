// Nexus Innovations Capital — interactions
(function () {
  // Sticky header tone
  const header = document.querySelector('.masthead');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Mobile menu
  const burger = document.querySelector('.burger');
  const closer = document.querySelector('.mob-close');
  const open = () => document.body.classList.add('menu-open');
  const close = () => document.body.classList.remove('menu-open');
  if (burger) burger.addEventListener('click', open);
  if (closer) closer.addEventListener('click', close);
  document.querySelectorAll('.mobile-menu a').forEach(a => a.addEventListener('click', close));

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Counter
  const counterIO = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const el = e.target;
      const target = Number(el.dataset.count || 0);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const dur = 1800;
      const start = performance.now();
      const ease = (t) => 1 - Math.pow(1 - t, 3);
      const step = (now) => {
        const t = Math.min(1, (now - start) / dur);
        const v = Math.round(target * ease(t));
        el.textContent = `${prefix}${v.toLocaleString()}${suffix}`;
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      counterIO.unobserve(el);
    }
  }, { threshold: 0.4 });
  document.querySelectorAll('[data-count]').forEach(el => counterIO.observe(el));
})();
