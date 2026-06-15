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

  /* ---------------------------------------------
     Contact form -> WhatsApp
     --------------------------------------------- */
  const WHATSAPP_NUMBER = "819023774848"; // international format, no + or leading 0

  const whatsappForm = document.getElementById("whatsapp-form");
  if (whatsappForm) {
    whatsappForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = whatsappForm.querySelector("#name").value.trim();
      const email = whatsappForm.querySelector("#email").value.trim();
      const interest = whatsappForm.querySelector("#interest").value;
      const message = whatsappForm.querySelector("#message").value.trim();

      const lines = [
        "Hello P.E.A, I'd like to get in touch.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Interested in: ${interest}`,
        "",
        "Message:",
        message,
      ];

      const text = encodeURIComponent(lines.join("\n"));
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

      window.open(url, "_blank", "noopener");
    });
  }
});
