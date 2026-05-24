const observerOptions = {
  threshold: 0.12,
  rootMargin: "0px 0px -80px 0px"
};

const scrollObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

function initializeScrollAnimations() {
  $$(".animate-on-scroll").forEach((el) => scrollObserver.observe(el));
}

function setupNavbarScrollEffect() {
  const navbar = $("#navbar");
  if (!navbar) return;

  const updateNavbar = throttle(() => {
    if (getScrollPos() > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, 100);

  window.addEventListener("scroll", updateNavbar, { passive: true });
  updateNavbar();
}

function handleParallax() {
  const updateParallax = throttle(() => {
    const scrollPos = getScrollPos();
    $$(".parallax").forEach((el) => {
      const speed = Number(el.dataset.speed || 0.08);
      el.style.transform = `translateY(${scrollPos * speed}px)`;
    });
  }, 16);

  window.addEventListener("scroll", updateParallax, { passive: true });
}

function smoothScroll(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  const offset = 70;
  const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: "smooth" });
}
