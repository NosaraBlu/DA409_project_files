// Simple active-nav highlight (no libraries)
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = Array.from(document.querySelectorAll("nav a[href^='#']"));
  const sections = navLinks
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  function setActiveLink() {
    const y = window.scrollY + 120; // offset for fixed header
    let activeId = null;

    for (const section of sections) {
      if (section.offsetTop <= y) activeId = section.id;
    }

    navLinks.forEach(a => {
      const target = a.getAttribute("href").slice(1);
      a.classList.toggle("is-active", target === activeId);
    });
  }

  window.addEventListener("scroll", setActiveLink, { passive: true });
  setActiveLink();
});
