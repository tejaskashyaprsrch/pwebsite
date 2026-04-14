// ============================================================
// ELECTORAL RESEARCH — main.js
// ============================================================

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Fade-in on scroll (lightweight IntersectionObserver)
const fadeEls = document.querySelectorAll('.card, .research-section, .future-item, .contact-card, .callout, .results-table-wrap, .figure, .result-highlight');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  fadeEls.forEach(el => {
    el.classList.add('fade-on-scroll');
    observer.observe(el);
  });
}
