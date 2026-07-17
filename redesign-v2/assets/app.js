(function () {
  // Header background swap on scroll
  var header = document.getElementById('siteHeader');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 40); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile menu
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobileMenu');
  var mmClose = document.getElementById('mmClose');
  if (burger && menu) {
    var setMenu = function (open) {
      menu.classList.toggle('open', open);
      menu.setAttribute('aria-hidden', String(!open));
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    };
    burger.addEventListener('click', function () { setMenu(true); });
    if (mmClose) mmClose.addEventListener('click', function () { setMenu(false); });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) setMenu(false);
    });
  }

  // Reveal-on-scroll (progressive enhancement; content visible without JS)
  if ('IntersectionObserver' in window &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.animation = 'revealUp 0.8s cubic-bezier(0.22,1,0.36,1) both';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('[data-reveal]').forEach(function (el) { io.observe(el); });
  }

  // Video play/pause controls
  document.querySelectorAll('[data-videoctl]').forEach(function (btn) {
    var vid = document.getElementById(btn.getAttribute('data-videoctl'));
    if (!vid) return;
    var sync = function () {
      var paused = vid.paused;
      btn.querySelector('.i-play').style.display = paused ? '' : 'none';
      btn.querySelector('.i-pause').style.display = paused ? 'none' : '';
      btn.querySelector('.lbl').textContent = paused ? 'Play' : 'Pause';
    };
    btn.addEventListener('click', function () { vid.paused ? vid.play() : vid.pause(); sync(); });
    vid.addEventListener('play', sync);
    vid.addEventListener('pause', sync);
    sync();
  });

  // Sector accordion: hover/focus expands a panel; on touch, first tap
  // expands and second tap follows the link.
  var acc = document.getElementById('sectorAcc');
  if (acc) {
    var panels = acc.querySelectorAll('a');
    var setActive = function (panel) {
      panels.forEach(function (p) { p.classList.toggle('active', p === panel); });
    };
    panels.forEach(function (panel) {
      panel.addEventListener('mouseenter', function () { setActive(panel); });
      panel.addEventListener('focus', function () { setActive(panel); });
      panel.addEventListener('click', function (e) {
        if (!panel.classList.contains('active')) {
          e.preventDefault();
          setActive(panel);
        }
      });
    });
  }

  // Contact / inquiry form: validation styling + confirmation state.
  // Submission backend not yet connected (Web3Forms key pending) — the form
  // validates and confirms locally so the flow can be reviewed end to end.
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.classList.add('submitted');
      if (!form.checkValidity()) {
        var firstInvalid = form.querySelector(':invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }
      form.style.display = 'none';
      var thanks = document.getElementById('formThanks');
      if (thanks) { thanks.style.display = 'block'; thanks.focus && thanks.focus(); }
    });
  }
})();
