function getScrollPos() {
  return window.scrollY || document.documentElement.scrollTop;
}

function isElementInViewport(el, threshold = 0.2) {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= viewHeight * (1 - threshold) && rect.bottom >= viewHeight * threshold;
}

function throttle(func, limit) {
  let waiting = false;
  return function throttled(...args) {
    if (waiting) return;
    waiting = true;
    func.apply(this, args);
    setTimeout(() => {
      waiting = false;
    }, limit);
  };
}

function debounce(func, delay) {
  let timeout;
  return function debounced(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

function formatNumber(num) {
  return new Intl.NumberFormat("en-IN").format(num);
}

function animateCounter(element, target, duration = 1800) {
  const startTime = performance.now();
  const start = 0;

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(start + (target - start) * eased);
    element.textContent = formatNumber(value);
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

function saveDarkModePreference(isDark) {
  localStorage.setItem("impulse-theme", isDark ? "dark" : "light");
}

function loadDarkModePreference() {
  const stored = localStorage.getItem("impulse-theme");
  return stored ? stored === "dark" : false;
}

function toggleDarkMode() {
  const isLight = document.body.classList.toggle("light-mode");
  saveDarkModePreference(!isLight);
  return !isLight;
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}

function validateForm(formData) {
  return (
    formData.name &&
    validateEmail(formData.email) &&
    formData.service &&
    formData.message
  );
}

function $(selector, scope = document) {
  return scope.querySelector(selector);
}

function $$(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}
