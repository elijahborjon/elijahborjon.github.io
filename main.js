// Mobile menu
(function () {
  const btn = document.getElementById("hamburger");
  const menu = document.getElementById("mobileMenu");
  if (!btn || !menu) return;

  const setOpen = (open) => {
    btn.setAttribute("aria-expanded", String(open));
    menu.hidden = !open;
  };

  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    setOpen(!open);
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (menu.hidden) return;
    const within = menu.contains(e.target) || btn.contains(e.target);
    if (!within) setOpen(false);
  });

  // Close on resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) setOpen(false);
  });
})();

// Hero postfix rotator (Plasmidsaurus-style: multiple postfix spans)
(function () {
  const words = Array.from(document.querySelectorAll("[data-main-header-title-postfix]"));
  if (!words.length) return;

  let idx = 0;
  const activate = (i) => {
    words.forEach((el, k) => el.classList.toggle("is-active", k === i));
  };

  activate(idx);

  setInterval(() => {
    idx = (idx + 1) % words.length;
    activate(idx);
  }, 1600);
})();

// Simple reveal-on-scroll
(function () {
  const items = Array.from(document.querySelectorAll("[data-reveal]"));
  if (!items.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((el) => io.observe(el));
})();

// Text carousel
(function () {
  const quotes = Array.from(document.querySelectorAll("[data-quote]"));
  const prev = document.querySelector("[data-carousel-prev]");
  const next = document.querySelector("[data-carousel-next]");
  if (!quotes.length || !prev || !next) return;

  let i = quotes.findIndex((q) => q.classList.contains("is-active"));
  if (i < 0) i = 0;

  const show = (n) => {
    quotes.forEach((q, k) => q.classList.toggle("is-active", k === n));
  };

  prev.addEventListener("click", () => {
    i = (i - 1 + quotes.length) % quotes.length;
    show(i);
  });

  next.addEventListener("click", () => {
    i = (i + 1) % quotes.length;
    show(i);
  });
})();
