(function () {
  var STORAGE_KEY = "mantine-color-scheme";
  var ATTR = "data-mantine-color-scheme";

  function getStored() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStored(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {}
  }

  function getPreferred() {
    var stored = getStored();
    if (stored === "dark" || stored === "light") return stored;
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    return "light";
  }

  function apply(scheme) {
    var root = document.documentElement;
    if (scheme === "dark") {
      root.setAttribute(ATTR, "dark");
    } else {
      root.removeAttribute(ATTR);
    }
    setStored(scheme);
    updateToggleVisibility(scheme);
  }

  function updateToggleVisibility(scheme) {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    var lightIcon = btn.querySelector(".theme-toggle__icon--light");
    var darkIcon = btn.querySelector(".theme-toggle__icon--dark");
    if (lightIcon && darkIcon) {
      if (scheme === "dark") {
        lightIcon.removeAttribute("hidden");
        darkIcon.setAttribute("hidden", "");
      } else {
        lightIcon.setAttribute("hidden", "");
        darkIcon.removeAttribute("hidden");
      }
    }
  }

  function toggle() {
    var current = document.documentElement.getAttribute(ATTR);
    apply(current === "dark" ? "light" : "dark");
  }

  function initNavbarMenu() {
    var btn = document.querySelector(".navbar__menu-toggle");
    var menu = document.getElementById("navbar-menu");
    if (!btn || !menu) return;

    function setOpen(isOpen) {
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      menu.classList.toggle("is-open", isOpen);
    }

    btn.addEventListener("click", function () {
      setOpen(btn.getAttribute("aria-expanded") !== "true");
    });

    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("click", function (event) {
      if (!menu.classList.contains("is-open")) return;
      if (event.target.closest(".navbar")) return;
      setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });
  }

  function init() {
    apply(getPreferred());
    var btn = document.getElementById("theme-toggle");
    if (btn) btn.addEventListener("click", toggle);
    initNavbarMenu();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
