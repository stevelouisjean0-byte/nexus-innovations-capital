/* Nexus Innovations Capital — shared interactions */
(function () {
  'use strict';

  // Year
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // Sticky header
  var header = document.getElementById('header');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 20); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Mobile menu
  var menu = document.getElementById('mobileMenu');
  var burger = document.getElementById('burger');
  var mmClose = document.getElementById('mmClose');
  function openMenu() { menu.classList.add('open'); menu.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; }
  function closeMenu() { menu.classList.remove('open'); menu.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }
  if (burger) burger.addEventListener('click', openMenu);
  if (mmClose) mmClose.addEventListener('click', closeMenu);
  if (menu) menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });

  // Reveal on scroll
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Hero video play/pause control
  var vc = document.querySelector('[data-videoctl]');
  if (vc) {
    var target = document.getElementById(vc.getAttribute('data-videoctl'));
    var setLabel = function () {
      var playing = target && !target.paused && !target.ended;
      vc.querySelector('.lbl').textContent = playing ? 'Pause' : 'Play';
      vc.querySelector('.i-play').style.display = playing ? 'none' : 'inline';
      vc.querySelector('.i-pause').style.display = playing ? 'inline' : 'none';
    };
    vc.addEventListener('click', function () {
      if (!target) return;
      if (target.paused) { target.play(); } else { target.pause(); }
      setLabel();
    });
    if (target) { target.addEventListener('play', setLabel); target.addEventListener('pause', setLabel); }
    setLabel();
  }

  // Hover-play videos (focus rows / media). Video loads lazily on first hover.
  document.querySelectorAll('[data-hovervideo]').forEach(function (wrap) {
    var vid = wrap.querySelector('video');
    if (!vid) return;
    var loaded = false;
    var enter = function () {
      if (!loaded) { vid.load(); loaded = true; }
      wrap.classList.add('playing');
      var p = vid.play(); if (p && p.catch) p.catch(function () {});
    };
    var leave = function () { wrap.classList.remove('playing'); vid.pause(); };
    wrap.addEventListener('mouseenter', enter);
    wrap.addEventListener('mouseleave', leave);
    // touch: tap toggles
    wrap.addEventListener('click', function () { if (wrap.classList.contains('playing')) leave(); else enter(); });
  });

  // Lightbox for [data-lightbox]
  var lb = null;
  function ensureLB() {
    if (lb) return lb;
    lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = '<button class="lb-close" aria-label="Close">×</button><img alt=""><div class="lb-cap"></div>';
    document.body.appendChild(lb);
    lb.addEventListener('click', function (e) { if (e.target === lb || e.target.classList.contains('lb-close')) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    return lb;
  }
  function open(src, cap) {
    ensureLB();
    lb.querySelector('img').src = src;
    lb.querySelector('.lb-cap').textContent = cap || '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close() { if (lb) { lb.classList.remove('open'); document.body.style.overflow = ''; } }
  document.querySelectorAll('[data-lightbox]').forEach(function (el) {
    el.addEventListener('click', function () {
      var full = el.getAttribute('data-full') || (el.querySelector('img') ? el.querySelector('img').src : el.src);
      var cap = el.getAttribute('data-cap') || '';
      open(full, cap);
    });
  });

  // Contact form (Web3Forms) with graceful fallback
  var form = document.getElementById('contactForm');
  if (form) {
    var status = document.getElementById('formStatus');
    form.addEventListener('submit', function (ev) {
      var key = form.querySelector('[name=access_key]').value;
      if (!key || key === 'YOUR_WEB3FORMS_ACCESS_KEY') {
        ev.preventDefault();
        status.style.display = 'block';
        status.style.color = '#B08A4F';
        status.textContent = 'Form is ready — add your Web3Forms access key to enable live delivery. Meanwhile, email info@nexusinnovationscapital.com.';
        return;
      }
      ev.preventDefault();
      status.style.display = 'block';
      status.style.color = '#5C6675';
      status.textContent = 'Sending…';
      fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (res) {
          if (res.ok) { form.reset(); status.style.color = '#1E7A4B'; status.textContent = 'Thank you — your message has been sent. We’ll be in touch shortly.'; }
          else { status.style.color = '#B00020'; status.textContent = 'Something went wrong. Please email info@nexusinnovationscapital.com.'; }
        })
        .catch(function () { status.style.color = '#B00020'; status.textContent = 'Network error. Please email info@nexusinnovationscapital.com.'; });
    });
  }
})();
