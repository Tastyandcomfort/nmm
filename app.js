/* =========================================================
   MURALI MANOHAR — V3
   Main application
========================================================= */


/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [

  {
    id: "tc",
    title: "Tasty & Comfort",
    category: "business",
    categoryLabel: "Business",
    icon: "☕",

    description:
      "A digital experience created around the T&C concept, combining food, comfort, safety, location utilities, AI interaction and business information.",

    tags: [
      "Business",
      "UI/UX",
      "AI",
      "Maps",
      "Safety"
    ],

    url:
      "https://tastyandcomfort.github.io/T-C/"
  },


  {
    id: "former",
    title: "Former",
    category: "business",
    categoryLabel: "Business",
    icon: "◌",

    description:
      "A separate experimental web project created as part of the wider collection of digital ideas and prototypes.",

    tags: [
      "Web",
      "Experiment",
      "Design"
    ],

    url:
      "https://tastyandcomfort.github.io/Former/"
  },


  {
    id: "find-near-care",
    title: "Find Near CARE",
    category: "healthcare",
    categoryLabel: "Healthcare",
    icon: "⌖",

    description:
      "A location-focused CARE Hospitals tool designed to help users find nearby CARE hospitals and navigate to them.",

    tags: [
      "Healthcare",
      "Maps",
      "GPS",
      "Navigation"
    ],

    url:
      "https://muralimanoharcoin-max.github.io/Find-near-care/"
  },


  {
    id: "find-doctor-care",
    title: "Find Doctor CARE",
    category: "healthcare",
    categoryLabel: "Healthcare",
    icon: "✚",

    description:
      "A doctor-discovery concept designed around CARE hospital information, speciality search and hospital navigation.",

    tags: [
      "Healthcare",
      "Search",
      "Doctors",
      "Maps"
    ],

    url:
      "https://tandcfromnmm.github.io/Find-doctor-care.com/"
  },


  {
    id: "care-portal",
    title: "CARE Portal",
    category: "tools",
    categoryLabel: "Tools",
    icon: "▦",

    description:
      "A digital portal concept bringing together useful CARE-related information and tools in one interface.",

    tags: [
      "Portal",
      "Information",
      "Tools",
      "UI"
    ],

    url:
      "https://sites.google.com/view/imheretohelpyou/portal-test?authuser=0"
  },


  {
    id: "portal",
    title: "Personal Web Portal",
    category: "experiments",
    categoryLabel: "Experiment",
    icon: "⌘",

    description:
      "An earlier portal-style experiment created to bring useful web resources and tools together in one place.",

    tags: [
      "Portal",
      "Experiment",
      "Web"
    ],

    url:
      "https://tastyandcomfort.github.io/nmm/#home"
  },


  {
    id: "safe-route",
    title: "Safe Route",
    category: "tools",
    categoryLabel: "Tools",
    icon: "△",

    description:
      "An experimental safety and communication platform concept combining Safe Route IDs, messaging, voice communication, maps, GPS and route-related utilities.",

    tags: [
      "Safety",
      "Communication",
      "Maps",
      "GPS",
      "Supabase"
    ],

    url:
      "https://carehospitalsportal.github.io/Care-portal/"
  }

];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const projectsGrid =
  document.getElementById("projectsGrid");

const projectFilter =
  document.getElementById("projectFilter");

const themeButton =
  document.getElementById("themeButton");

const currentYear =
  document.getElementById("currentYear");

const projectModal =
  document.getElementById("projectModal");

const modalBackdrop =
  document.getElementById("modalBackdrop");

const modalClose =
  document.getElementById("modalClose");

const modalIcon =
  document.getElementById("modalIcon");

const modalCategory =
  document.getElementById("modalCategory");

const modalTitle =
  document.getElementById("modalTitle");

const modalDescription =
  document.getElementById("modalDescription");

const modalTags =
  document.getElementById("modalTags");

const modalLink =
  document.getElementById("modalLink");

const backTop =
  document.getElementById("backTop");

const navLinks =
  document.querySelectorAll(".nav-link");


/* =========================================================
   YEAR
========================================================= */

if (currentYear) {

  currentYear.textContent =
    new Date().getFullYear();

}


/* =========================================================
   PROJECT CARD
========================================================= */

function createProjectCard(project) {

  const article =
    document.createElement("article");

  article.className =
    "project-card reveal";

  article.dataset.category =
    project.category;

  article.innerHTML = `

    <div>

      <div class="project-top">

        <div class="project-icon">
          ${project.icon}
        </div>

        <span class="project-category">
          ${project.categoryLabel}
        </span>

      </div>


      <h3>
        ${project.title}
      </h3>


      <p>
        ${project.description}
      </p>

    </div>


    <div class="project-bottom">

      <div class="project-tags">

        ${project.tags
          .map(tag => `<span>${tag}</span>`)
          .join("")}

      </div>

      <span class="project-arrow">
        ↗
      </span>

    </div>

  `;


  article.addEventListener(
    "click",
    () => openProject(project)
  );


  return article;

}


/* =========================================================
   RENDER PROJECTS
========================================================= */

function renderProjects(filter = "all") {

  if (!projectsGrid) return;

  projectsGrid.innerHTML = "";


  const visibleProjects =
    projects.filter(project => {

      if (filter === "all") {
        return true;
      }

      return project.category === filter;

    });


  visibleProjects.forEach(project => {

    const card =
      createProjectCard(project);

    projectsGrid.appendChild(card);

  });


  requestAnimationFrame(() => {

    observeRevealElements();

  });

}


/* =========================================================
   FILTERS
========================================================= */

if (projectFilter) {

  projectFilter.addEventListener(
    "click",
    event => {

      const button =
        event.target.closest(
          ".filter-button"
        );

      if (!button) return;


      document
        .querySelectorAll(".filter-button")
        .forEach(item => {

          item.classList.remove(
            "active"
          );

        });


      button.classList.add("active");


      const filter =
        button.dataset.filter ||
        "all";


      renderProjects(filter);

    }
  );

}


/* =========================================================
   OPEN PROJECT MODAL
========================================================= */

function openProject(project) {

  if (!projectModal) return;


  modalIcon.textContent =
    project.icon;

  modalCategory.textContent =
    project.categoryLabel;

  modalTitle.textContent =
    project.title;

  modalDescription.textContent =
    project.description;


  modalTags.innerHTML =
    project.tags
      .map(tag => `<span>${tag}</span>`)
      .join("");


  modalLink.href =
    project.url;


  projectModal.classList.add(
    "open"
  );

  projectModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );

}


/* =========================================================
   CLOSE PROJECT MODAL
========================================================= */

function closeProject() {

  if (!projectModal) return;


  projectModal.classList.remove(
    "open"
  );

  projectModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );

}


if (modalClose) {

  modalClose.addEventListener(
    "click",
    closeProject
  );

}


if (modalBackdrop) {

  modalBackdrop.addEventListener(
    "click",
    closeProject
  );

}


document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      projectModal.classList.contains(
        "open"
      )
    ) {

      closeProject();

    }

  }
);


/* =========================================================
   THEME
========================================================= */

function applyTheme(theme) {

  if (theme === "dark") {

    document.body.classList.add(
      "dark"
    );

    themeButton.textContent =
      "☀";

  } else {

    document.body.classList.remove(
      "dark"
    );

    themeButton.textContent =
      "◐";

  }

}


function getSavedTheme() {

  try {

    return localStorage.getItem(
      "murali-v3-theme"
    );

  } catch (error) {

    return null;

  }

}


function saveTheme(theme) {

  try {

    localStorage.setItem(
      "murali-v3-theme",
      theme
    );

  } catch (error) {

    /* localStorage unavailable */
  }

}


const savedTheme =
  getSavedTheme();


if (savedTheme) {

  applyTheme(savedTheme);

} else if (
  window.matchMedia &&
  window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches
) {

  applyTheme("dark");

} else {

  applyTheme("light");

}


if (themeButton) {

  themeButton.addEventListener(
    "click",
    () => {

      const isDark =
        document.body.classList.contains(
          "dark"
        );


      const nextTheme =
        isDark
          ? "light"
          : "dark";


      applyTheme(nextTheme);

      saveTheme(nextTheme);

    }
  );

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

let revealObserver = null;


function observeRevealElements() {

  const elements =
    document.querySelectorAll(
      ".reveal:not(.visible)"
    );


  if (!("IntersectionObserver" in window)) {

    elements.forEach(
      element =>
        element.classList.add(
          "visible"
        )
    );

    return;

  }


  if (!revealObserver) {

    revealObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "visible"
              );

              revealObserver.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: .08
        }
      );

  }


  elements.forEach(element => {

    revealObserver.observe(
      element
    );

  });

}


/* =========================================================
   ADD REVEAL TO STATIC SECTIONS
========================================================= */

function prepareStaticReveal() {

  const selectors = [

    ".statement-card",
    ".about-card",
    ".ability-card",
    ".process-step",
    ".lab-card",
    ".closing-inner",
    ".contact-card"

  ];


  selectors.forEach(selector => {

    document
      .querySelectorAll(selector)
      .forEach(element => {

        if (
          !element.classList.contains(
            "reveal"
          )
        ) {

          element.classList.add(
            "reveal"
          );

        }

      });

  });

}


/* =========================================================
   NAVIGATION ACTIVE STATE
========================================================= */

const observedSections =
  document.querySelectorAll(
    "main section[id]"
  );


let sectionObserver = null;


function setupSectionObserver() {

  if (
    !("IntersectionObserver" in window)
  ) {
    return;
  }


  sectionObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) {
            return;
          }


          const id =
            entry.target.id;


          navLinks.forEach(link => {

            const linkTarget =
              link.getAttribute(
                "href"
              );


            link.classList.toggle(
              "active",
              linkTarget === `#${id}`
            );

          });

        });

      },
      {
        rootMargin:
          "-35% 0px -55% 0px"
      }
    );


  observedSections.forEach(section => {

    sectionObserver.observe(
      section
    );

  });

}


/* =========================================================
   BACK TO TOP
========================================================= */

window.addEventListener(
  "scroll",
  () => {

    if (
      window.scrollY > 600
    ) {

      backTop.classList.add(
        "visible"
      );

    } else {

      backTop.classList.remove(
        "visible"
      );

    }

  },
  {
    passive: true
  }
);


if (backTop) {

  backTop.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}


/* =========================================================
   SMALL PARALLAX EFFECT
========================================================= */

const heroVisual =
  document.querySelector(
    ".hero-visual"
  );


if (
  heroVisual &&
  window.matchMedia(
    "(pointer:fine)"
  ).matches
) {

  heroVisual.addEventListener(
    "pointermove",
    event => {

      const rect =
        heroVisual.getBoundingClientRect();


      const x =
        (
          event.clientX -
          rect.left
        ) /
        rect.width -
        .5;


      const y =
        (
          event.clientY -
          rect.top
        ) /
        rect.height -
        .5;


      const mainCard =
        heroVisual.querySelector(
          ".hero-card"
        );


      if (mainCard) {

        mainCard.style.transform =
          `
          rotate(${-4 + x * 4}deg)
          translate(${x * 8}px, ${y * 8}px)
          `;

      }

    }
  );


  heroVisual.addEventListener(
    "pointerleave",
    () => {

      const mainCard =
        heroVisual.querySelector(
          ".hero-card"
        );


      if (mainCard) {

        mainCard.style.transform =
          "rotate(-4deg)";

      }

    }
  );

}


/* =========================================================
   INITIALISE
========================================================= */

function init() {

  prepareStaticReveal();

  renderProjects("all");

  observeRevealElements();

  setupSectionObserver();

}


if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    init
  );

} else {

  init();

}


/* =========================================================
   ERROR PROTECTION
========================================================= */

window.addEventListener(
  "error",
  event => {

    /*
      Do not allow a small runtime error
      to leave the entire page visually
      unusable.
    */

    console.warn(
      "Portfolio runtime notice:",
      event.message
    );

  }
);
