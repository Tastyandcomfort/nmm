/* =========================================================
   MURALI MANOHAR — V3
   OPTIMIZED MAIN APPLICATION
   ---------------------------------------------------------
   Drop-in replacement for the existing app.js
   Visual design: UNCHANGED
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
    title: "Jai Kisan",
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
    title: "Find Near-CARE",
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
    title: "CARE-Find Doctor",
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
    title: "CARE-Portal",
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
    title: "My Portfolio",
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
    title: "Safe Route-No Sim",
    category: "tools",
    categoryLabel: "Tools",
    icon: "△",

    description:
      "An experimental safety and communication platform concept combining Safe Route IDs, messaging, voice communication, maps, GPS and route-related utilities.",

    tags: [
      "No-Sim required",
      "Chat",
      "Call",
      "Maps",
      "Supabase"
    ],

    url:
      "https://carehospitalsportal.github.io/Care-portal/"
  },

  {
    id: "data-bank",
    title: "Bank Of Internet",
    category: "current project",
    categoryLabel: "Current Project",
    icon: "📡",

    description:
      "An experimental implementation for using the internet which you have paid will never be in leftover, Currently working on-it",

    tags: [
      "Internet",
      "Tracking",
      "Sorting",
      "Carry forward"
    ],

    url:
      "https://carehospitalsportal.github.io/Care-portal/"
  }

];


/* =========================================================
   CACHE DOM ELEMENTS
   ---------------------------------------------------------
   Query DOM once instead of repeatedly searching the page.
========================================================= */

const $ = selector =>
  document.querySelector(selector);

const $$ = selector =>
  Array.from(document.querySelectorAll(selector));


const projectsGrid =
  $("#projectsGrid");

const projectFilter =
  $("#projectFilter");

const themeButton =
  $("#themeButton");

const currentYear =
  $("#currentYear");

const projectModal =
  $("#projectModal");

const modalBackdrop =
  $("#modalBackdrop");

const modalClose =
  $("#modalClose");

const modalIcon =
  $("#modalIcon");

const modalCategory =
  $("#modalCategory");

const modalTitle =
  $("#modalTitle");

const modalDescription =
  $("#modalDescription");

const modalTags =
  $("#modalTags");

const modalLink =
  $("#modalLink");

const backTop =
  $("#backTop");

const navLinks =
  $$(".nav-link");


/* =========================================================
   DEVICE / MOTION SETTINGS
========================================================= */

const reducedMotion =
  window.matchMedia &&
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


const finePointer =
  window.matchMedia &&
  window.matchMedia(
    "(pointer:fine)"
  ).matches;


/* =========================================================
   YEAR
========================================================= */

if (currentYear) {

  currentYear.textContent =
    String(new Date().getFullYear());

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

  /*
    Build the tags only once.
  */

  const tagsHTML =
    project.tags
      .map(tag => `<span>${tag}</span>`)
      .join("");


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
        ${tagsHTML}
      </div>

      <span class="project-arrow">
        ↗
      </span>

    </div>

  `;


  /*
    Store the project ID instead of creating
    a separate listener for every card.
  */

  article.dataset.projectId =
    project.id;


  return article;

}


/* =========================================================
   PROJECT LOOKUP
========================================================= */

const projectMap =
  new Map(
    projects.map(project => [
      project.id,
      project
    ])
  );


/* =========================================================
   RENDER PROJECTS
========================================================= */

let currentFilter = "all";


function renderProjects(filter = "all") {

  if (!projectsGrid) {
    return;
  }


  currentFilter =
    filter;


  /*
    Build everything in a DocumentFragment.
    This minimizes browser re-layout work.
  */

  const fragment =
    document.createDocumentFragment();


  for (
    const project of projects
  ) {

    if (
      filter !== "all" &&
      project.category !== filter
    ) {
      continue;
    }


    fragment.appendChild(
      createProjectCard(project)
    );

  }


  /*
    One DOM replacement instead of repeatedly
    adding and repainting individual cards.
  */

  projectsGrid.replaceChildren(
    fragment
  );


  /*
    Reveal only after the cards are inserted.
  */

  requestAnimationFrame(
    observeRevealElements
  );

}


/* =========================================================
   PROJECT CARD CLICK HANDLER
   ---------------------------------------------------------
   Event delegation = one listener instead
   of one listener per project card.
========================================================= */

if (projectsGrid) {

  projectsGrid.addEventListener(
    "click",
    event => {

      const card =
        event.target.closest(
          ".project-card"
        );


      if (!card) {
        return;
      }


      const projectId =
        card.dataset.projectId;


      const project =
        projectMap.get(projectId);


      if (project) {
        openProject(project);
      }

    }
  );

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


      if (!button) {
        return;
      }


      const filter =
        button.dataset.filter ||
        "all";


      /*
        Avoid rendering again if the user
        clicks the already active filter.
      */

      if (
        filter === currentFilter
      ) {

        return;

      }


      /*
        Update button states efficiently.
      */

      const buttons =
        projectFilter.querySelectorAll(
          ".filter-button"
        );


      buttons.forEach(item => {

        item.classList.toggle(
          "active",
          item === button
        );

      });


      renderProjects(filter);

    }
  );

}


/* =========================================================
   OPEN PROJECT MODAL
========================================================= */

function openProject(project) {

  if (!projectModal) {
    return;
  }


  if (modalIcon) {

    modalIcon.textContent =
      project.icon;

  }


  if (modalCategory) {

    modalCategory.textContent =
      project.categoryLabel;

  }


  if (modalTitle) {

    modalTitle.textContent =
      project.title;

  }


  if (modalDescription) {

    modalDescription.textContent =
      project.description;

  }


  if (modalTags) {

    modalTags.innerHTML =
      project.tags
        .map(tag => `<span>${tag}</span>`)
        .join("");

  }


  if (modalLink) {

    modalLink.href =
      project.url;

  }


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

  if (!projectModal) {
    return;
  }


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


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key !== "Escape"
    ) {
      return;
    }


    if (
      projectModal &&
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

  const dark =
    theme === "dark";


  document.body.classList.toggle(
    "dark",
    dark
  );


  if (themeButton) {

    themeButton.textContent =
      dark
        ? "☀"
        : "◐";

  }

}


function getSavedTheme() {

  try {

    return localStorage.getItem(
      "murali-v3-theme"
    );

  } catch {

    return null;

  }

}


function saveTheme(theme) {

  try {

    localStorage.setItem(
      "murali-v3-theme",
      theme
    );

  } catch {

    /*
      Storage can be unavailable in
      private/restricted browser modes.
    */

  }

}


/*
  Detect theme once during startup.
*/

const savedTheme =
  getSavedTheme();


if (savedTheme === "dark") {

  applyTheme("dark");

} else if (savedTheme === "light") {

  applyTheme("light");

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


/* =========================================================
   THEME BUTTON
========================================================= */

if (themeButton) {

  themeButton.addEventListener(
    "click",
    () => {

      const dark =
        document.body.classList.contains(
          "dark"
        );


      const nextTheme =
        dark
          ? "light"
          : "dark";


      applyTheme(nextTheme);

      saveTheme(nextTheme);

    }
  );

}


/* =========================================================
   REVEAL SYSTEM
========================================================= */

let revealObserver =
  null;


function revealImmediately() {

  const elements =
    document.querySelectorAll(
      ".reveal:not(.visible)"
    );


  elements.forEach(
    element => {

      element.classList.add(
        "visible"
      );

    }
  );

}


/*
  If the user prefers reduced motion,
  don't create an IntersectionObserver.
*/

function observeRevealElements() {

  const elements =
    document.querySelectorAll(
      ".reveal:not(.visible)"
    );


  if (!elements.length) {
    return;
  }


  if (
    reducedMotion ||
    !("IntersectionObserver" in window)
  ) {

    revealImmediately();

    return;

  }


  if (!revealObserver) {

    revealObserver =
      new IntersectionObserver(
        entries => {

          for (
            const entry of entries
          ) {

            if (
              !entry.isIntersecting
            ) {
              continue;
            }


            entry.target.classList.add(
              "visible"
            );


            revealObserver.unobserve(
              entry.target
            );

          }

        },
        {
          threshold: 0.05,
          rootMargin:
            "0px 0px 80px 0px"
        }
      );

  }


  elements.forEach(
    element => {

      revealObserver.observe(
        element
      );

    }
  );

}


/* =========================================================
   STATIC REVEAL ELEMENTS
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


  for (
    const selector of selectors
  ) {

    const elements =
      document.querySelectorAll(
        selector
      );


    elements.forEach(
      element => {

        element.classList.add(
          "reveal"
        );

      }
    );

  }

}


/* =========================================================
   NAVIGATION ACTIVE STATE
========================================================= */

const observedSections =
  $$("main section[id]");


let sectionObserver =
  null;


function setupSectionObserver() {

  if (
    !("IntersectionObserver" in window)
  ) {
    return;
  }


  if (
    !observedSections.length ||
    !navLinks.length
  ) {
    return;
  }


  sectionObserver =
    new IntersectionObserver(
      entries => {

        /*
          Only update navigation when
          an actually visible section changes.
        */

        for (
          const entry of entries
        ) {

          if (
            !entry.isIntersecting
          ) {
            continue;
          }


          const id =
            entry.target.id;


          navLinks.forEach(
            link => {

              const target =
                link.getAttribute(
                  "href"
                );


              link.classList.toggle(
                "active",
                target === `#${id}`
              );

            }
          );

        }

      },
      {
        rootMargin:
          "-35% 0px -55% 0px",
        threshold: 0
      }
    );


  observedSections.forEach(
    section => {

      sectionObserver.observe(
        section
      );

    }
  );

}


/* =========================================================
   BACK TO TOP
   ---------------------------------------------------------
   Uses IntersectionObserver when possible instead
   of continuously calculating scroll position.
========================================================= */

function setupBackTop() {

  if (!backTop) {
    return;
  }


  /*
    Use a small invisible trigger near the top.
    This avoids a continuous scroll calculation.
  */

  if (
    "IntersectionObserver" in window
  ) {

    const trigger =
      document.createElement(
        "div"
      );


    trigger.setAttribute(
      "aria-hidden",
      "true"
    );


    trigger.style.position =
      "absolute";

    trigger.style.top =
      "500px";

    trigger.style.width =
      "1px";

    trigger.style.height =
      "1px";

    trigger.style.pointerEvents =
      "none";


    document.body.appendChild(
      trigger
    );


    const topObserver =
      new IntersectionObserver(
        entries => {

          const entry =
            entries[0];


          backTop.classList.toggle(
            "visible",
            !entry.isIntersecting
          );

        }
      );


    topObserver.observe(
      trigger
    );

  } else {

    /*
      Older-browser fallback.
    */

    let ticking = false;


    window.addEventListener(
      "scroll",
      () => {

        if (ticking) {
          return;
        }


        ticking = true;


        requestAnimationFrame(
          () => {

            backTop.classList.toggle(
              "visible",
              window.scrollY > 600
            );


            ticking = false;

          }
        );

      },
      {
        passive: true
      }
    );

  }

}


if (backTop) {

  backTop.addEventListener(
    "click",
    () => {

      window.scrollTo({

        top: 0,

        behavior:
          reducedMotion
            ? "auto"
            : "smooth"

      });

    }
  );

}


/* =========================================================
   HERO PARALLAX
   ---------------------------------------------------------
   Desktop only.
   Completely disabled for touch devices and
   reduced-motion users.
========================================================= */

function setupHeroParallax() {

  if (
    reducedMotion ||
    !finePointer
  ) {
    return;
  }


  const heroVisual =
    $(".hero-visual");


  if (!heroVisual) {
    return;
  }


  const mainCard =
    heroVisual.querySelector(
      ".hero-card"
    );


  if (!mainCard) {
    return;
  }


  let frame =
    null;


  let targetX = 0;
  let targetY = 0;


  function updateTransform() {

    frame = null;


    mainCard.style.transform =
      `
      rotate(${(-4 + targetX * 4).toFixed(2)}deg)
      translate(${(targetX * 8).toFixed(2)}px, ${(targetY * 8).toFixed(2)}px)
      `;

  }


  heroVisual.addEventListener(
    "pointermove",
    event => {

      const rect =
        heroVisual.getBoundingClientRect();


      targetX =
        (
          event.clientX -
          rect.left
        ) /
        rect.width -
        0.5;


      targetY =
        (
          event.clientY -
          rect.top
        ) /
        rect.height -
        0.5;


      /*
        Only schedule one frame.
      */

      if (!frame) {

        frame =
          requestAnimationFrame(
            updateTransform
          );

      }

    },
    {
      passive: true
    }
  );


  heroVisual.addEventListener(
    "pointerleave",
    () => {

      targetX = 0;
      targetY = 0;


      if (frame) {

        cancelAnimationFrame(
          frame
        );

        frame = null;

      }


      mainCard.style.transform =
        "rotate(-4deg)";

    }
  );

}


/* =========================================================
   OPTIONAL NAVIGATION CLICK OPTIMIZATION
========================================================= */

navLinks.forEach(
  link => {

    link.addEventListener(
      "click",
      () => {

        /*
          Don't prevent default browser
          anchor behaviour.
        */

      }
    );

  }
);


/* =========================================================
   INITIALISE
========================================================= */

function init() {

  /*
    Prepare static elements first.
  */

  prepareStaticReveal();


  /*
    Render projects once.
  */

  renderProjects("all");


  /*
    Observe visible content.
  */

  observeRevealElements();


  /*
    Navigation section tracking.
  */

  setupSectionObserver();


  /*
    Back-to-top visibility.
  */

  setupBackTop();


  /*
    Desktop-only hero effect.
  */

  setupHeroParallax();

}


/* =========================================================
   START
========================================================= */

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    init,
    {
      once: true
    }
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
      Prevent an isolated JavaScript error
      from being mistaken for a completely
      broken website.

      We deliberately don't display an
      error message to visitors.
    */

    console.warn(
      "Portfolio runtime notice:",
      event.message
    );

  }
);


/* =========================================================
   UNHANDLED PROMISE PROTECTION
========================================================= */

window.addEventListener(
  "unhandledrejection",
  event => {

    console.warn(
      "Portfolio promise notice:",
      event.reason
    );

  }
);
