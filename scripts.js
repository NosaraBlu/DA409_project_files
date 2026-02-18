// Optional: highlight the active nav link while scrolling
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = Array.from(document.querySelectorAll("nav a[href^='#']"));
  const sections = navLinks
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  function updateActive() {
    const offset = 120; // fixed header buffer
    const y = window.scrollY + offset;

    let currentId = null;
    for (const section of sections) {
      if (section.offsetTop <= y) currentId = section.id;
    }

    navLinks.forEach(link => {
      const id = link.getAttribute("href").slice(1);
      link.classList.toggle("is-active", id === currentId);
    });
  }

  window.addEventListener("scroll", updateActive, { passive: true });
  updateActive();
});
