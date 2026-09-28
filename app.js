/* =========================================================
   MURALI PERSONAL WEBSITE — V2
========================================================= */


/* =========================================================
   PERSONAL INFORMATION
========================================================= */

const PERSONAL = {

  name:
    "Murali Manohar",

  email:
    "",

  github:
    "",

  linkedin:
    "",

  instagram:
    ""

};


/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [

  {
    id: 1,

    title:
      "Tasty & Comfort",

    category:
      "business",

    categoryLabel:
      "Business",

    theme:
      "tc",

    symbol:
      "☕",

    description:
      "A real-world business concept designed around comfort, customer value, hygiene, experience and long-term thinking.",

    problem:
      "How can a small physical business be designed as a complete customer experience rather than simply a place that sells a product?",

    approach:
      "I explored the business identity, customer experience, information structure, safety considerations and digital presence together.",

    built:
      "A complete digital concept and interactive website for the T&C idea.",

    learning:
      "A business idea can be treated as an entire experience — not just a product, price or website.",

    tags: [
      "Business",
      "UI/UX",
      "Web",
      "Concept"
    ],

    url:
      "https://tastyandcomfort.github.io/T-C/"

  },


  {
    id: 2,

    title:
      "Jai Kisan",

    category:
      "agriculture",

    categoryLabel:
      "Agriculture",

    theme:
      "farmer",

    symbol:
      "⌁",

    description:
      "An agriculture-focused digital concept bringing useful information, services and practical resources together.",

    problem:
      "How can a digital platform make useful agricultural information easier to discover and explore?",

    approach:
      "I explored the idea as a broader information ecosystem instead of limiting it to a single feature.",

    built:
      "A web-based agriculture information and service concept.",

    learning:
      "Different information sources become more useful when they are organised around the actual needs of the user.",

    tags: [
      "Agriculture",
      "Information",
      "Web",
      "Concept"
    ],

    url:
      "https://tastyandcomfort.github.io/Former/"

  },


  {
    id: 3,

    title:
      "Find Near CARE",

    category:
      "navigation",

    categoryLabel:
      "Healthcare + Navigation",

    theme:
      "nearcare",

    symbol:
      "⌖",

    description:
      "A location-focused healthcare discovery experience combining hospitals, GPS, maps and route information.",

    problem:
      "How can someone quickly discover a nearby CARE Hospitals location and understand how to get there?",

    approach:
      "I combined location discovery with map interaction, GPS and routing so that the user can move from searching to navigation.",

    built:
      "A browser-based healthcare location discovery tool.",

    learning:
      "Location becomes much more useful when discovery and the journey to the destination are considered together.",

    tags: [
      "Healthcare",
      "Maps",
      "GPS",
      "Routing"
    ],

    url:
      "https://muralimanoharcoin-max.github.io/Find-near-care/"

  },


  {
    id: 4,

    title:
      "Find Doctor",

    category:
      "healthcare",

    categoryLabel:
      "Healthcare",

    theme:
      "doctor",

    symbol:
      "✚",

    description:
      "A searchable healthcare information experience for discovering doctors, specialties and hospital-related information.",

    problem:
      "How can healthcare information be organised so users can discover the right doctor or specialty more easily?",

    approach:
      "I focused on structured information, search, filtering and a user-friendly discovery flow.",

    built:
      "A doctor discovery website connected to structured healthcare information.",

    learning:
      "Good information architecture can make large amounts of information feel much simpler to the person searching for it.",

    tags: [
      "Healthcare",
      "Search",
      "Data",
      "UI/UX"
    ],

    url:
      "https://tandcfromnmm.github.io/Find-doctor-care.com/"

  },


  {
    id: 5,

    title:
      "Safe Route",

    category:
      "safety",

    categoryLabel:
      "Safety + Communication",

    theme:
      "safe",

    symbol:
      "◇",

    description:
      "A safety-oriented digital concept combining communication, location, GPS, routing, file sharing and emergency assistance.",

    problem:
      "How can communication, location and emergency-related tools be brought together into one travel-oriented experience?",

    approach:
      "I explored a unified experience where identity, communication, maps, routes and emergency functions can work together.",

    built:
      "A Safe Route web application concept with communication and location features.",

    learning:
      "Safety tools can become more useful when communication, location and essential services are considered as connected parts of one journey.",

    tags: [
      "Safety",
      "Communication",
      "GPS",
      "Maps",
      "Realtime"
    ],

    url:
      "https://carehospitalsportal.github.io/Care-portal/"

  },


  {
    id: 6,

    title:
      "CARE Portal",

    category:
      "healthcare",

    categoryLabel:
      "Healthcare + Portal",

    theme:
      "portal",

    symbol:
      "⌘",

    description:
      "An information and productivity portal concept designed around a healthcare environment.",

    problem:
      "How can frequently needed information and useful tools be organised into one accessible digital portal?",

    approach:
      "I experimented with bringing different information and useful tools into one accessible interface.",

    built:
      "A healthcare-oriented portal experience.",

    learning:
      "A portal becomes more useful when it reduces the number of places a person needs to look for information.",

    tags:[
      "Healthcare",
      "Portal",
      "Information",
      "Tools"
    ],

    url:
      "https://sites.google.com/view/imheretohelpyou/portal?authuser=0"

  }

];


/* =========================================================
   CAPABILITY / PROBLEM DATA
========================================================= */

const problemTypes = {

  website: {

    label:
      "WEBSITE / DIGITAL EXPERIENCE",

    title:
      "I can turn an idea into an interactive web experience.",

    description:
      "My projects include business concepts, healthcare tools, portals and information-focused websites. I can explore the structure, interface and user journey and then build a working browser-based version.",

    projects: [
      "Tasty & Comfort",
      "Jai Kisan",
      "Find Doctor",
      "CARE Portal"
    ]

  },


  search: {

    label:
      "SEARCH / DISCOVERY",

    title:
      "I can organise information so people can find things.",

    description:
      "Search, filtering and structured information have been central to several of my projects, particularly healthcare discovery experiences.",

    projects: [
      "Find Doctor",
      "Find Near CARE",
      "CARE Portal"
    ]

  },


  location: {

    label:
      "MAPS / GPS / LOCATION",

    title:
      "I can connect a website with the physical world.",

    description:
      "I've explored browser-based GPS, maps, location discovery, routing and nearby-service experiences.",

    projects: [
      "Find Near CARE",
      "Safe Route"
    ]

  },


  automation: {

    label:
      "AUTOMATION / WORKFLOW",

    title:
      "I can look for repetitive work that technology can simplify.",

    description:
      "I explore automation through spreadsheets, scripts, structured data and connected workflows, with the goal of reducing unnecessary manual steps.",

    projects: [
      "CARE Portal",
      "Find Doctor"
    ]

  },


  communication: {

    label:
      "COMMUNICATION",

    title:
      "I can explore communication as part of a larger digital experience.",

    description:
      "Safe Route explores text communication, voice communication, file sharing and location as connected pieces of a safety-oriented system.",

    projects: [
      "Safe Route"
    ]

  },


  idea: {

    label:
      "UNUSUAL IDEA",

    title:
      "That's probably where the interesting part starts.",

    description:
      "Not every idea needs to fit an existing category. I like taking an unusual requirement, breaking it into smaller questions and exploring whether technology can turn it into something useful.",

    projects: [
      "Tasty & Comfort",
      "Jai Kisan",
      "Safe Route"
    ]

  }

};


/* =========================================================
   DOM
========================================================= */

const projectsGrid =
  document.getElementById(
    "projectsGrid"
  );

const projectModal =
  document.getElementById(
    "projectModal"
  );

const modalContent =
  document.getElementById(
    "modalContent"
  );

const modalClose =
  document.getElementById(
    "modalClose"
  );

const modalBackdrop =
  document.getElementById(
    "modalBackdrop"
  );

const mobileMenuButton =
  document.getElementById(
    "mobileMenuButton"
  );

const mobileMenu =
  document.getElementById(
    "mobileMenu"
  );

const emailButton =
  document.getElementById(
    "emailButton"
  );

const yearElement =
  document.getElementById(
    "year"
  );

const problemResult =
  document.getElementById(
    "problemResult"
  );


/* =========================================================
   YEAR
========================================================= */

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =========================================================
   EMAIL
========================================================= */

if (
  emailButton &&
  PERSONAL.email
) {

  emailButton.href =
    `mailto:${PERSONAL.email}`;

} else if (emailButton) {

  emailButton.addEventListener(
    "click",
    event => {

      event.preventDefault();

      alert(
        "Add your email address in app.js to enable this button."
      );

    }
  );

}


/* =========================================================
   PROJECT CARD
========================================================= */

function createProjectCard(project) {

  const article =
    document.createElement("article");

  article.className =
    `project-card theme-${project.theme}`;

  article.dataset.category =
    project.category;


  article.innerHTML = `

    <div
      class="project-visual"
      aria-hidden="true"
    ></div>

    <span
      class="project-visual-symbol"
      aria-hidden="true"
    >
      ${project.symbol}
    </span>


    <div class="project-top">

      <span class="project-category">
        ${project.categoryLabel}
      </span>

      <span class="project-index">
        ${String(project.id).padStart(2, "0")}
      </span>

    </div>


    <div class="project-middle">

      <h3 class="project-title">
        ${project.title}
      </h3>

      <p class="project-description">
        ${project.description}
      </p>

    </div>


    <div class="project-bottom">

      <div class="project-tags">

        ${project.tags
          .slice(0,3)
          .map(
            tag =>
              `<span>${tag}</span>`
          )
          .join("")}

      </div>

      <span class="project-open">
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

function renderProjects(
  filter = "all"
) {

  if (!projectsGrid) {
    return;
  }


  projectsGrid.innerHTML = "";


  const filtered =
    filter === "all"
      ? projects
      : projects.filter(
          project =>
            project.category === filter
        );


  filtered.forEach(
    project => {

      projectsGrid.appendChild(
        createProjectCard(project)
      );

    }
  );

}


/* =========================================================
   MODAL
========================================================= */

function openProject(project) {

  if (
    !projectModal ||
    !modalContent
  ) {
    return;
  }


  modalContent.innerHTML = `

    <div
      class="modal-hero ${project.theme}"
    >

      <span
        class="modal-hero-symbol"
      >
        ${project.symbol}
      </span>

      <span class="modal-category">
        ${project.categoryLabel}
      </span>

    </div>


    <h2 class="modal-title">
      ${project.title}
    </h2>


    <p class="modal-description">
      ${project.description}
    </p>


    <div class="modal-details">


      <div class="modal-detail">

        <span class="modal-detail-label">
          The problem
        </span>

        <p>
          ${project.problem}
        </p>

      </div>


      <div class="modal-detail">

        <span class="modal-detail-label">
          My approach
        </span>

        <p>
          ${project.approach}
        </p>

      </div>


      <div class="modal-detail">

        <span class="modal-detail-label">
          What I built
        </span>

        <p>
          ${project.built}
        </p>

      </div>


      <div class="modal-detail">

        <span class="modal-detail-label">
          What I learned
        </span>

        <p>
          ${project.learning}
        </p>

      </div>

    </div>


    <div class="modal-tags">

      ${project.tags
        .map(
          tag =>
            `<span>${tag}</span>`
        )
        .join("")}

    </div>


    <div class="modal-actions">

      <a
        href="${project.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="button button-dark"
      >
        Open live project
        <span>↗</span>
      </a>

    </div>

  `;


  projectModal.classList.add(
    "active"
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
   CLOSE MODAL
========================================================= */

function closeProject() {

  if (!projectModal) {
    return;
  }


  projectModal.classList.remove(
    "active"
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
      projectModal &&
      projectModal.classList.contains(
        "active"
      )
    ) {

      closeProject();

    }

  }
);


/* =========================================================
   PROJECT FILTERS
========================================================= */

document
  .querySelectorAll(
    "[data-project-filter]"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(
              "[data-project-filter]"
            )
            .forEach(
              item =>
                item.classList.remove(
                  "active"
                )
            );


          button.classList.add(
            "active"
          );


          renderProjects(
            button.dataset.projectFilter
          );

        }
      );

    }
  );


/* =========================================================
   WORLD CARDS
========================================================= */

document
  .querySelectorAll(
    "[data-filter]"
  )
  .forEach(
    card => {

      card.addEventListener(
        "click",
        () => {

          const filter =
            card.dataset.filter;


          const matching =
            document.querySelector(
              `[data-project-filter="${filter}"]`
            );


          if (matching) {

            matching.click();

          } else {

            renderProjects(filter);

          }


          const work =
            document.getElementById(
              "work"
            );


          if (work) {

            work.scrollIntoView({
              behavior:
                "smooth",

              block:
                "start"
            });

          }

        }
      );

    }
  );


/* =========================================================
   PROBLEM EXPLORER
========================================================= */

document
  .querySelectorAll(
    "[data-problem]"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          const key =
            button.dataset.problem;

          const result =
            problemTypes[key];


          if (
            !result ||
            !problemResult
          ) {
            return;
          }


          problemResult.style.opacity =
            "0";

          problemResult.style.transform =
            "translateY(8px)";


          setTimeout(
            () => {

              problemResult.innerHTML = `

                <span class="result-label">
                  ${result.label}
                </span>

                <h3 class="result-title">
                  ${result.title}
                </h3>

                <p class="result-description">
                  ${result.description}
                </p>


                <div class="result-projects">

                  ${result.projects
                    .map(
                      name => {

                        const project =
                          projects.find(
                            item =>
                              item.title === name
                          );


                        if (!project) {
                          return "";
                        }


                        return `
                          <button
                            class="result-project-chip"
                            data-result-project="${project.id}"
                          >
                            ${project.title}
                          </button>
                        `;

                      }
                    )
                    .join("")}

                </div>

              `;


              problemResult.style.opacity =
                "1";

              problemResult.style.transform =
                "translateY(0)";


              problemResult
                .querySelectorAll(
                  "[data-result-project]"
                )
                .forEach(
                  chip => {

                    chip.addEventListener(
                      "click",
                      () => {

                        const project =
                          projects.find(
                            item =>
                              String(
                                item.id
                              ) ===
                              chip.dataset
                                .resultProject
                          );


                        if (project) {

                          openProject(
                            project
                          );

                        }

                      }
                    );

                  }
                );

            },
            180
          );

        }
      );

    }
  );


/* =========================================================
   MOBILE MENU
========================================================= */

if (mobileMenuButton) {

  mobileMenuButton.addEventListener(
    "click",
    () => {

      mobileMenu.classList.toggle(
        "active"
      );

    }
  );

}


document
  .querySelectorAll(
    ".mobile-menu a"
  )
  .forEach(
    link => {

      link.addEventListener(
        "click",
        () => {

          mobileMenu.classList.remove(
            "active"
          );

        }
      );

    }
  );


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
  document.querySelectorAll(
    ".reveal"
  );


const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(
        entry => {

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

        }
      );

    },
    {
      threshold:
        .12
    }
  );


revealElements.forEach(
  element =>
    revealObserver.observe(
      element
    )
);


/* =========================================================
   HERO PARALLAX
========================================================= */

const heroOrbit =
  document.querySelector(
    ".hero-orbit"
  );


if (
  heroOrbit &&
  !window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches
) {

  window.addEventListener(
    "mousemove",
    event => {

      const x =
        (
          event.clientX /
          window.innerWidth -
          .5
        ) * 14;


      const y =
        (
          event.clientY /
          window.innerHeight -
          .5
        ) * 14;


      heroOrbit.style.transform =
        `translate(${x}px,${y}px)`;

    }
  );

}


/* =========================================================
   INITIAL RENDER
========================================================= */

renderProjects(
  "all"
);


/* =========================================================
   CONSOLE
========================================================= */

console.log(
  "Murali Personal Website V2 loaded."
);

console.log(
  `${projects.length} projects loaded.`
);
