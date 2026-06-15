document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------------------------
     Mobile nav toggle
     --------------------------------------------- */
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      const expanded = links.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded);
    });
  }

  /* ---------------------------------------------
     Page routing (single-file, hash-based)
     --------------------------------------------- */
  const pages = {
    home: document.getElementById("page-home"),
    services: document.getElementById("page-services"),
    about: document.getElementById("page-about"),
    contact: document.getElementById("page-contact"),
  };

  const navLinks = document.querySelectorAll("[data-link]");

  function showPage(name) {
    if (!pages[name]) name = "home";

    Object.entries(pages).forEach(([key, el]) => {
      if (!el) return;
      el.hidden = key !== name;
    });

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.link === name);
    });

    // Close mobile menu after navigating
    if (links) {
      links.classList.remove("open");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function routeFromHash() {
    const hash = window.location.hash.replace("#", "") || "home";
    showPage(hash);
  }

  window.addEventListener("hashchange", routeFromHash);
  routeFromHash();
});
