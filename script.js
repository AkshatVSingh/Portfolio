/* =====================================================
   Akshat Singh Portfolio v4
   Static, GitHub Pages friendly, no build step required.
===================================================== */

const GITHUB_OWNER = "AkshatVSingh";
const GITHUB_BASE = `https://github.com/${GITHUB_OWNER}`;
const LIVE_BASE = `https://${GITHUB_OWNER.toLowerCase()}.github.io`;

const projectData = [
  {
    title: "ICanSpeakProfessionally",
    repo: "ICanSpeakProfessionallyy",
    category: "AI Tool",
    year: "2026",
    logo: "IP",
    featured: true,
    demo: `${LIVE_BASE}/ICanSpeakProfessionallyy/`,
    summary: "Local-first professional communication rewriter that upgrades casual drafts into polished emails, work chats and formal notes without external AI APIs.",
    details: "A browser-side rewrite engine with local intent detection, tone generation, subject generation, copy/download actions and local rewrite history. It is intentionally honest: no fake cloud AI, no fake Stripe, no fake backend claims.",
    stack: ["JavaScript", "HTML", "CSS", "LocalStorage", "NLP Rules", "PWA"],
    tags: ["Local-first", "Writing tool", "No API key"]
  },
  {
    title: "FPV Quadcopter",
    repo: "FPVQuadcopter",
    category: "Hardware",
    year: "2026",
    logo: "FPV",
    featured: true,
    summary: "Showcase-ready 225 g nano FPV quadcopter design package with a reserved payload bay, CAD assets, PID tuning scripts and assembly documentation.",
    details: "Includes parametric CAD, mass budget, printable and preview parts, MATLAB/Python PID workflow, embedded control snippets and documentation for a compact research-friendly UAV concept.",
    stack: ["Python", "MATLAB", "CAD", "PID", "OpenSCAD", "Embedded"],
    tags: ["Drone", "Control", "CAD"]
  },
  {
    title: "MeetingScribe",
    repo: "MeetingScribe",
    category: "Web App",
    year: "2026",
    logo: "MS",
    demo: `${LIVE_BASE}/MeetingScribe/`,
    summary: "AI-style meeting intelligence platform with real-time transcription, action item detection, decisions, risks, questions and export flows.",
    details: "Built with React and Vite around browser-native speech recognition. It stores meeting history locally, supports search, filters, keyboard shortcuts and structured TXT/JSON exports.",
    stack: ["React", "Vite", "Web Speech API", "LocalStorage", "CSS"],
    tags: ["Transcription", "Meetings", "Productivity"]
  },
  {
    title: "TradeDay Terminal",
    repo: "TradeDayTerminal",
    category: "Web App",
    year: "2026",
    logo: "TD",
    demo: `${LIVE_BASE}/TradeDayTerminal/`,
    summary: "Production-grade trading journal with calendar UI, analytics, AI review flows, backtesting simulator and offline persistence.",
    details: "React, TypeScript and Vite app with IndexedDB, localStorage and in-memory caching. Includes analytics for win rate, Sharpe, drawdown, expectancy, emotion matrix and import/export workflows.",
    stack: ["React", "TypeScript", "Vite", "Zustand", "IndexedDB", "Recharts"],
    tags: ["Analytics", "Offline-first", "Trading"]
  },
  {
    title: "Smart Agriculture System",
    repo: "Smart_Agriculture_System",
    category: "Automation",
    year: "2026",
    logo: "SA",
    summary: "IoT and ML based hydroponic farming system for real-time environmental monitoring and automated irrigation.",
    details: "Uses ESP32, environmental sensors, Firebase, ThingSpeak and an LSTM model to monitor pH, moisture, temperature, humidity and light while supporting prediction-driven irrigation.",
    stack: ["ESP32", "Firebase", "ThingSpeak", "LSTM", "TensorFlow", "Arduino"],
    tags: ["IoT", "Hydroponics", "ML"]
  },
  {
    title: "AI Fitness Trainer",
    repo: "ai-fitness-trainer",
    category: "AI Vision",
    year: "2025",
    logo: "AF",
    summary: "Computer vision fitness trainer that recognizes exercises, counts repetitions, gives live feedback and generates workout insights.",
    details: "Uses pose estimation and trained exercise classification to detect 20+ exercise types, track rep movement and provide form correction through a Streamlit-style app workflow.",
    stack: ["Python", "OpenCV", "Mediapipe", "TensorFlow", "PyTorch", "Streamlit"],
    tags: ["Pose", "Fitness", "Vision"]
  },
  {
    title: "Portfolio Website",
    repo: "Portfolio",
    category: "Portfolio",
    year: "2026",
    logo: "PW",
    demo: `${LIVE_BASE}/Portfolio/`,
    summary: "Static one-page portfolio rebuilt into a more interactive, minimal and recruiter-friendly engineering portfolio.",
    details: "The new version adds an actual project wall, GitHub preview images, modal details, search, filters, animation polish, accessibility fixes and mobile navigation improvements.",
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    tags: ["Static", "Responsive", "Interactive"]
  },
  {
    title: "GitHub Profile README",
    repo: "AkshatVSingh",
    category: "Documentation",
    year: "2026",
    logo: "GH",
    summary: "Profile README that packages work experience, project links, technical stack and role positioning for GitHub visitors.",
    details: "Useful as a compact technical resume on GitHub. The portfolio now mirrors the same positioning but presents it visually with project cards and richer interactions.",
    stack: ["Markdown", "GitHub", "Documentation", "Portfolio"],
    tags: ["Profile", "Resume", "Docs"]
  }
];

const categories = ["All", "AI Tool", "Web App", "Hardware", "Automation", "AI Vision", "Portfolio", "Documentation"];

const getGithubUrl = (repo) => `${GITHUB_BASE}/${repo}`;
const getOpenGraphImage = (repo) => `https://opengraph.githubassets.com/akshat-portfolio-v4/${GITHUB_OWNER}/${repo}`;
const getScreenshotImage = (project) => project.demo ? `https://image.thum.io/get/width/1200/crop/760/noanimate/${project.demo}` : getOpenGraphImage(project.repo);

const state = {
  filter: "All",
  query: ""
};

document.addEventListener("DOMContentLoaded", () => {
  setCurrentYear();
  setupMobileNavigation();
  setupScrollReveal();
  setupBackToTop();
  setupActiveNavigation();
  setupCursorGlow();
  setupTypewriter();
  renderFilters();
  renderProjects();
  setupProjectSearch();
  setupProjectModal();
});

function setCurrentYear() {
  const yearElement = document.getElementById("year");
  if (yearElement) yearElement.textContent = new Date().getFullYear();
}

function setupMobileNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  if (!navToggle || !navLinks) return;

  const closeMenu = () => {
    navLinks.classList.remove("active");
    navToggle.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    navToggle.classList.toggle("active", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  navItems.forEach((link) => link.addEventListener("click", closeMenu));

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

function setupScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -42px 0px" }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

function setupBackToTop() {
  const backToTopButton = document.querySelector(".back-to-top");
  if (!backToTopButton) return;

  const toggleBackToTop = () => {
    backToTopButton.classList.toggle("visible", window.scrollY > 520);
  };

  window.addEventListener("scroll", toggleBackToTop, { passive: true });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  toggleBackToTop();
}

function setupActiveNavigation() {
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-links a");
  if (!sections.length || !navItems.length) return;

  const updateActiveNav = () => {
    const scrollPosition = window.scrollY + 140;

    sections.forEach((section) => {
      const id = section.getAttribute("id");
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollPosition >= top && scrollPosition < bottom) {
        navItems.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  };

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();
}

function setupCursorGlow() {
  const cursorGlow = document.querySelector(".cursor-glow");
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!cursorGlow || !finePointer || reduceMotion) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let glowX = mouseX;
  let glowY = mouseY;

  window.addEventListener(
    "mousemove",
    (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    },
    { passive: true }
  );

  const animateGlow = () => {
    glowX += (mouseX - glowX) * 0.16;
    glowY += (mouseY - glowY) * 0.16;
    cursorGlow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(animateGlow);
  };

  requestAnimationFrame(animateGlow);
}

function setupTypewriter() {
  const target = document.getElementById("typewriter");
  if (!target) return;

  const lines = [
    "<span>$</span> build --profile Akshat",
    "loading: edge AI, robotics, PLC, full-stack",
    "projects: GitHub previews attached",
    "status: clean, interactive, deploy-ready"
  ];

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    target.innerHTML = lines.map((line) => `<p>${line}</p>`).join("");
    return;
  }

  target.innerHTML = "";
  let lineIndex = 0;

  const addLine = () => {
    if (lineIndex >= lines.length) return;
    const paragraph = document.createElement("p");
    paragraph.innerHTML = lines[lineIndex];
    target.appendChild(paragraph);
    lineIndex += 1;
    window.setTimeout(addLine, 420);
  };

  addLine();
}

function renderFilters() {
  const filterContainer = document.getElementById("project-filters");
  if (!filterContainer) return;

  filterContainer.innerHTML = categories
    .map((category) => `<button class="filter-btn ${category === state.filter ? "active" : ""}" type="button" data-filter="${category}">${category}</button>`)
    .join("");

  filterContainer.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;

    state.filter = button.dataset.filter;
    document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.toggle("active", btn === button));
    renderProjects();
  });
}

function setupProjectSearch() {
  const searchInput = document.getElementById("project-search");
  if (!searchInput) return;

  searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderProjects();
  });
}

function getFilteredProjects() {
  return projectData.filter((project) => {
    const matchesFilter = state.filter === "All" || project.category === state.filter;
    const haystack = [project.title, project.repo, project.category, project.summary, project.details, ...project.stack, ...project.tags]
      .join(" ")
      .toLowerCase();
    const matchesQuery = !state.query || haystack.includes(state.query);
    return matchesFilter && matchesQuery;
  });
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  const emptyState = document.getElementById("empty-state");
  if (!grid) return;

  const filteredProjects = getFilteredProjects();

  grid.innerHTML = filteredProjects.map((project, index) => createProjectCard(project, index)).join("");

  if (emptyState) emptyState.classList.toggle("visible", filteredProjects.length === 0);

  setupTiltCards();
}

function createProjectCard(project, index) {
  const githubUrl = getGithubUrl(project.repo);
  const image = getScreenshotImage(project);
  const fallback = getOpenGraphImage(project.repo);
  const stackPreview = project.stack.slice(0, 4).map((item) => `<span>${item}</span>`).join("");
  const demoLink = project.demo ? `<a class="project-link" href="${project.demo}" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>` : "";
  const featuredClass = project.featured ? " featured" : "";

  return `
    <article class="project-card reveal visible${featuredClass}" data-project-index="${index}">
      <div class="project-image-wrap">
        <img src="${image}" alt="Preview for ${project.title}" loading="lazy" onerror="this.onerror=null;this.src='${fallback}';" />
        <div class="project-logo" aria-hidden="true">${project.logo}</div>
      </div>
      <div class="project-body">
        <div class="project-kicker">
          <span>${project.category}</span>
          <span>${project.year}</span>
        </div>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <div class="project-tags">${stackPreview}</div>
        <div class="project-actions">
          ${demoLink}
          <a class="project-link secondary" href="${githubUrl}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <button class="project-details-btn" type="button" data-open-project="${project.repo}">Details</button>
        </div>
      </div>
    </article>
  `;
}

function setupTiltCards() {
  const cards = document.querySelectorAll(".project-card");
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!finePointer || reduceMotion) return;

  cards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateX = ((y / rect.height) - 0.5) * -5;
      const rotateY = ((x / rect.width) - 0.5) * 5;
      card.style.transform = `translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

function setupProjectModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  document.addEventListener("click", (event) => {
    const openButton = event.target.closest("[data-open-project]");
    if (openButton) {
      const repo = openButton.dataset.openProject;
      const project = projectData.find((item) => item.repo === repo);
      if (project) openProjectModal(project);
    }

    if (event.target.closest("[data-close-modal]")) closeProjectModal();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeProjectModal();
  });
}

function openProjectModal(project) {
  const modal = document.getElementById("project-modal");
  const modalImage = document.getElementById("modal-image");
  const modalCategory = document.getElementById("modal-category");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalTags = document.getElementById("modal-tags");
  const modalLinks = document.getElementById("modal-links");

  if (!modal || !modalImage || !modalCategory || !modalTitle || !modalDescription || !modalTags || !modalLinks) return;

  const fallback = getOpenGraphImage(project.repo);
  modalImage.src = getScreenshotImage(project);
  modalImage.alt = `Preview for ${project.title}`;
  modalImage.onerror = () => {
    modalImage.onerror = null;
    modalImage.src = fallback;
  };

  modalCategory.textContent = `${project.category} · ${project.year}`;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.details;
  modalTags.innerHTML = project.stack.map((tag) => `<span>${tag}</span>`).join("");

  modalLinks.innerHTML = `
    ${project.demo ? `<a class="btn btn-primary" href="${project.demo}" target="_blank" rel="noopener noreferrer">Open Live Demo</a>` : ""}
    <a class="btn btn-secondary" href="${getGithubUrl(project.repo)}" target="_blank" rel="noopener noreferrer">Open GitHub Repo</a>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (!modal || !modal.classList.contains("open")) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}
