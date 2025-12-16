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

    // Custom cursor
(function () {
  const cursor = document.getElementById("cursor");
  if (!cursor) return;

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  // Track mouse
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.classList.remove("is-hidden");
  });

  // Smooth follow animation
  function animate() {
    currentX += (mouseX - currentX) * 0.18;
    currentY += (mouseY - currentY) * 0.18;

    cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animate);
  }
  animate();

  // Hover detection
  const hoverTargets = "a, button, .btn, .card, .navlink";

  document.querySelectorAll(hoverTargets).forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("is-hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("is-hover"));
  });

  // Hide cursor when leaving window
  document.addEventListener("mouseleave", () => cursor.classList.add("is-hidden"));
})();

  });
})();
