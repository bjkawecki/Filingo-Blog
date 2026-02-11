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

  function init() {
    apply(getPreferred());
    var btn = document.getElementById("theme-toggle");
    if (btn) btn.addEventListener("click", toggle);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
