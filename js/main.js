(function () {
  "use strict";

  function t(key) {
    return window.GLHP_I18N ? window.GLHP_I18N.t(key) : key;
  }

  var header = document.querySelector(".site-header");
  var headerHeight = header ? header.offsetHeight : 0;

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* Mobile navigation */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    function setMobileNavOpen(isOpen) {
      toggle.setAttribute("aria-expanded", String(isOpen));
      menu.classList.toggle("is-open", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
      document.body.classList.toggle("nav-menu-open", isOpen);
      if (header) header.classList.toggle("site-header--menu-open", isOpen);
    }

    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      setMobileNavOpen(!open);
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMobileNavOpen(false);
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) {
        setMobileNavOpen(false);
      }
    });
  }

  /* Smooth scroll with sticky header offset (same-page anchors only) */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    var id = anchor.getAttribute("href");
    if (!id || id.length < 2 || id === "#") return;
    var target = document.querySelector(id);
    if (!target) return;
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      var yPos =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        12;
      window.scrollTo({ top: yPos, behavior: "smooth" });
    });
  });

  /* Gallery lightbox */
  var lightbox = document.getElementById("lightbox");
  var lbImg = lightbox ? lightbox.querySelector(".lightbox__img") : null;
  var lbCap = lightbox ? lightbox.querySelector(".lightbox__cap") : null;
  var lbClose = lightbox ? lightbox.querySelector(".lightbox__close") : null;

  function captionFor(btn) {
    var capKey = btn.getAttribute("data-i18n-cap");
    if (capKey) return t(capKey);
    return btn.getAttribute("data-caption") || "";
  }

  function openLightbox(src, caption) {
    if (!lightbox || !lbImg) return;
    lbImg.src = src;
    lbImg.alt = caption || "Gallery preview";
    if (lbCap) lbCap.textContent = caption || "";
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    if (lbClose) lbClose.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    if (lbImg) lbImg.src = "";
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".gallery-item[data-lightbox]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openLightbox(btn.getAttribute("data-lightbox"), captionFor(btn));
    });
  });

  if (lbClose) lbClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox && !lightbox.hidden) closeLightbox();
  });

  /* Contact form → mail client */
  var form = document.getElementById("contact-form");
  var statusEl = document.getElementById("form-status");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!statusEl) return;
      var fd = new FormData(form);
      var name = (fd.get("name") || "").toString().trim();
      var phone = (fd.get("phone") || "").toString().trim();
      var message = (fd.get("message") || "").toString().trim();
      if (!name || !phone || !message) {
        statusEl.textContent = t("form_err");
        statusEl.className = "form-note error";
        return;
      }
      var subject = encodeURIComponent("Estimate request from " + name);
      var body = encodeURIComponent(
        "Name: " + name + "\nPhone: " + phone + "\n\nMessage:\n" + message
      );
      var mailto =
        "mailto:Glhandypainter@gmail.com?subject=" + subject + "&body=" + body;
      statusEl.className = "form-note success";
      statusEl.textContent = t("form_ok");
      window.location.href = mailto;
    });
  }
})();
