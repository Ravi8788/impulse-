let testimonialIndex = 0;
let testimonialInterval;

function initializeApp() {
  initializeScrollAnimations();
  setupNavbarScrollEffect();
  handleParallax();
  setupNavigation();
  setupThemeToggle();
  setupCounters();
  setupAccordion();
  setupCarousel();
  setupContactForm();
  setupNewsletterForm();
  setupFloatingButton();
  setupCursorGlow();
  setupActiveLinks();
  hideLoader();
}

function hideLoader() {
  const loader = $("#loader");
  if (!loader) return;
  setTimeout(() => loader.classList.add("hidden"), 900);
}

function setupNavigation() {
  const hamburger = $("#hamburger");
  const navMenu = $("#nav-menu");
  const navLinks = $$(".nav-link");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      const expanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", String(!expanded));
      navMenu.classList.toggle("active");
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      e.preventDefault();
      smoothScroll(href.slice(1));
      navMenu?.classList.remove("active");
      hamburger?.setAttribute("aria-expanded", "false");
    });
  });
}

function setupThemeToggle() {
  const toggle = $("#theme-toggle");
  if (!toggle) return;

  const initialDark = loadDarkModePreference();
  document.body.classList.toggle("light-mode", !initialDark);
  updateThemeIcon(initialDark);

  toggle.addEventListener("click", () => {
    const isDark = toggleDarkMode();
    updateThemeIcon(isDark);
  });
}

function updateThemeIcon(isDark) {
  const icon = $("#theme-toggle i");
  if (!icon) return;
  icon.className = isDark ? "fa-solid fa-moon" : "fa-solid fa-sun";
}

function setupCounters() {
  const about = $("#about");
  const counters = $$(".counter", about);
  if (!about || counters.length === 0) return;

  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !about.classList.contains("counted")) {
          counters.forEach((counter) => {
            const target = Number(counter.dataset.target || 0);
            animateCounter(counter, target, 1800);
          });
          about.classList.add("counted");
          observer.unobserve(about);
        }
      });
    },
    { threshold: 0.45 }
  );

  counterObserver.observe(about);
}

function setupAccordion() {
  const items = $$(".accordion-item");
  items.forEach((item) => {
    const header = $(".accordion-header", item);
    if (!header) return;
    header.addEventListener("click", () => {
      items.forEach((other) => {
        if (other !== item) other.classList.remove("active");
      });
      item.classList.toggle("active");
    });
  });
}

function setupCarousel() {
  const slides = $$(".testimonial-card");
  const prev = $(".carousel-prev");
  const next = $(".carousel-next");
  if (slides.length === 0 || !prev || !next) return;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function goTo(step) {
    testimonialIndex = (testimonialIndex + step + slides.length) % slides.length;
    showSlide(testimonialIndex);
  }

  prev.addEventListener("click", () => goTo(-1));
  next.addEventListener("click", () => goTo(1));

  testimonialInterval = setInterval(() => goTo(1), 5000);
  showSlide(testimonialIndex);
}

function setFieldError(input, message) {
  const row = input.closest(".form-row");
  const error = row ? $(".error-msg", row) : null;
  if (error) error.textContent = message || "";
}

function clearFormErrors(form) {
  $$(".error-msg", form).forEach((el) => {
    el.textContent = "";
  });
}

function showToast(message, isError = false) {
  const toast = $("#toast");
  if (!toast) return;

  toast.textContent = message;
  toast.style.borderColor = isError ? "rgba(248, 113, 113, 0.55)" : "rgba(0, 212, 255, 0.35)";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3200);
}

function setupContactForm() {
  const form = $("#contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearFormErrors(form);

    const formData = {
      name: $("#name", form)?.value.trim(),
      email: $("#email", form)?.value.trim(),
      service: $("#service", form)?.value,
      message: $("#message", form)?.value.trim()
    };

    let valid = true;
    if (!formData.name) {
      setFieldError($("#name", form), "Name is required.");
      valid = false;
    }
    if (!validateEmail(formData.email)) {
      setFieldError($("#email", form), "Enter a valid email address.");
      valid = false;
    }
    if (!formData.service) {
      setFieldError($("#service", form), "Select a service.");
      valid = false;
    }
    if (!formData.message) {
      setFieldError($("#message", form), "Message is required.");
      valid = false;
    }

    if (!valid || !validateForm(formData)) {
      showToast("Please fix the highlighted fields.", true);
      return;
    }

    showToast("Message sent successfully. We will contact you soon.");
    form.reset();
  });
}

function setupNewsletterForm() {
  const form = $("#newsletter-form");
  const emailInput = $("#newsletter-email");
  if (!form || !emailInput) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!validateEmail(email)) {
      showToast("Enter a valid email for subscription.", true);
      return;
    }

    showToast("Subscribed. Thanks for joining our updates.");
    form.reset();
  });
}

function setupFloatingButton() {
  const button = $("#whatsapp-button");
  const contactSection = $("#contact");
  if (!button) return;

  setTimeout(() => {
    button.classList.add("visible");
  }, 3000);

  if (contactSection) {
    const mobileObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (window.innerWidth <= 640) {
            button.style.display = entry.isIntersecting ? "none" : "grid";
          } else {
            button.style.display = "grid";
          }
        });
      },
      { threshold: 0.3 }
    );

    mobileObserver.observe(contactSection);
  }
}

function setupCursorGlow() {
  const glow = $(".cursor-glow");
  if (!glow || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let tx = x;
  let ty = y;

  document.addEventListener("mousemove", (e) => {
    tx = e.clientX;
    ty = e.clientY;
  });

  function follow() {
    x += (tx - x) * 0.1;
    y += (ty - y) * 0.1;
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
    requestAnimationFrame(follow);
  }

  follow();
}

function setupActiveLinks() {
  const sections = $$("main section[id]");
  const links = $$(".nav-link");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    { threshold: 0.45 }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

document.addEventListener("DOMContentLoaded", initializeApp);

window.addEventListener("beforeunload", () => {
  if (testimonialInterval) clearInterval(testimonialInterval);
});
