// Custom cursor
const cursor = document.getElementById("cursor");

if (cursor) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  const interactive = document.querySelectorAll("a, button, [data-link]");
  interactive.forEach((el) => {
    el.addEventListener("mouseenter", () =>
      cursor.classList.add("cursor--link")
    );
    el.addEventListener("mouseleave", () =>
      cursor.classList.remove("cursor--link")
    );
  });
}

// Highlight current nav link
const navLinks = document.querySelectorAll(".site-nav a[data-page]");
if (navLinks.length) {
  const current =
    window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    if (link.dataset.page === current) {
      link.classList.add("nav-link--active");
    }
  });
}

// Tabs on arts page
const tabButtons = document.querySelectorAll("[data-tab-target]");
if (tabButtons.length) {
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.tabTarget;
      const targetPanel = document.getElementById(targetId);
      if (!targetPanel) return;

      // update buttons
      tabButtons.forEach((b) =>
        b.classList.toggle("tab-button--active", b === btn)
      );

      // update panels
      document
        .querySelectorAll(".tab-panel")
        .forEach((panel) =>
          panel.classList.toggle(
            "tab-panel--active",
            panel === targetPanel
          )
        );
    });
  });
}

