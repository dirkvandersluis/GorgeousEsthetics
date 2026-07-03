// Mobiel menu
(function () {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');
  if (!toggle || !menu) return;
  const setOpen = (open) => {
    menu.classList.toggle('hidden', !open);
    iconOpen.classList.toggle('hidden', open);
    iconClose.classList.toggle('hidden', !open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  };
  toggle.addEventListener('click', () => setOpen(menu.classList.contains('hidden')));
  menu.querySelectorAll('.mobile-link').forEach((link) => link.addEventListener('click', () => setOpen(false)));
})();

// Sticky header: subtiele schaduw + tint zodra de pagina gescrolld is
(function () {
  const bar = document.getElementById('header-bar');
  if (!bar) return;
  const onScroll = () => {
    const s = window.scrollY > 12;
    bar.classList.toggle('bg-cream/95', s);
    bar.classList.toggle('shadow-[0_16px_40px_-24px_rgba(26,46,64,0.5)]', s);
    bar.classList.toggle('bg-cream/80', !s);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// Scroll-reveal
(function () {
  const els = document.querySelectorAll('.reveal');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach((el) => io.observe(el));
})();

// Slimme "Afspraak boeken"-CTA: op de contactpagina niet herladen, maar smooth scrollen naar #contactkaart
(function () {
  const path = window.location.pathname.replace(/\/+$/, '');
  const onContact = /(?:^|\/)contact(?:\.html)?$/.test(path);
  if (!onContact) return; // reguliere pagina's: knop blijft een normale link
  const target = document.getElementById('contactkaart');
  if (!target) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-book-cta]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      history.replaceState(null, '', '#contactkaart');
    });
  });
})();
