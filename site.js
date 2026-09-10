// Adhitam AI marketing site — shared interactions. Vanilla JS, no build step,
// no dependencies: keeps the site fast to load, which was an explicit ask.

document.addEventListener('DOMContentLoaded', () => {
  // ---- sticky nav shadow on scroll ----
  const nav = document.querySelector('.site-nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---- mobile nav toggle ----
  const toggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.nav-mobile');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    mobileMenu.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => mobileMenu.classList.remove('open'))
    );
  }

  // ---- scroll reveal ----
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in-view'));
  }

  // ---- hero "signals -> mission" demo sequencing ----
  const demo = document.querySelector('.mission-demo');
  if (demo) {
    const chips = demo.querySelectorAll('.signal-chip');
    const arrow = demo.querySelector('.arrow-down');
    const card = demo.querySelector('.mission-card');
    let started = false;

    const runSequence = () => {
      if (started) return;
      started = true;
      chips.forEach((chip, i) => {
        setTimeout(() => chip.classList.add('lit'), 260 * i);
      });
      setTimeout(() => arrow && arrow.classList.add('lit'), 260 * chips.length + 200);
      setTimeout(() => card && card.classList.add('lit'), 260 * chips.length + 550);
    };

    if ('IntersectionObserver' in window) {
      const demoIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              runSequence();
              demoIo.disconnect();
            }
          });
        },
        { threshold: 0.4 }
      );
      demoIo.observe(demo);
    } else {
      runSequence();
    }
  }

  // ---- FAQ accordion ----
  document.querySelectorAll('.faq-item').forEach((item) => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      item.closest('.faq-list')?.querySelectorAll('.faq-item.open').forEach((other) => {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.faq-a').style.maxHeight = null;
        }
      });
      item.classList.toggle('open', !isOpen);
      a.style.maxHeight = !isOpen ? a.scrollHeight + 'px' : null;
    });
  });

  // ---- download badges: "coming soon" toast until real store links exist ----
  // Once the app is live, replace each .badge-link's href (currently "#")
  // with the real App Store / Play Store URL and remove data-coming-soon —
  // this toast only fires when that attribute is present.
  const toast = document.querySelector('.toast');
  document.querySelectorAll('.badge-link[data-coming-soon]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!toast) return;
      toast.classList.add('show');
      clearTimeout(toast._t);
      toast._t = setTimeout(() => toast.classList.remove('show'), 2600);
    });
  });
});
