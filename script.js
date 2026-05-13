/* =====================================================
   Akshat Singh Portfolio Website JavaScript
   Static, lightweight, and GitHub Pages friendly.
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     SET CURRENT YEAR
  ========================= */

  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  /* =========================
     MOBILE NAVIGATION
  ========================= */

  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navItems.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  /* =========================
     SCROLL REVEAL ANIMATIONS
  ========================= */

  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));

  /* =========================
     BACK TO TOP BUTTON
  ========================= */

  const backToTopButton = document.querySelector(".back-to-top");

  const toggleBackToTop = () => {
    if (!backToTopButton) return;

    if (window.scrollY > 500) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  };

  window.addEventListener("scroll", toggleBackToTop, { passive: true });

  if (backToTopButton) {
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  /* =========================
     ACTIVE NAV LINK ON SCROLL
  ========================= */

  const sections = document.querySelectorAll("section[id]");

  const updateActiveNav = () => {
    const scrollPosition = window.scrollY + 130;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPosition >= top && scrollPosition < top + height) {
        navItems.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", updateActiveNav, { passive: true });

  /* =========================
     LIGHTWEIGHT CURSOR GLOW
     Uses requestAnimationFrame and transform for smoother performance.
  ========================= */

  const cursorGlow = document.querySelector(".cursor-glow");

  if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let glowX = mouseX;
    let glowY = mouseY;
    let ticking = false;

    const animateGlow = () => {
      glowX += (mouseX - glowX) * 0.18;
      glowY += (mouseY - glowY) * 0.18;

      cursorGlow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;

      ticking = false;
      requestAnimationFrame(animateGlow);
    };

    window.addEventListener(
      "mousemove",
      (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;

        if (!ticking) {
          ticking = true;
        }
      },
      { passive: true }
    );

    requestAnimationFrame(animateGlow);
  }
});
