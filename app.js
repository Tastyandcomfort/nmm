/* =========================================================
   MURALI PERSONAL WEBSITE
   APPLE-INSPIRED / MEET-STYLE
========================================================= */


/* =========================================================
   PERSONAL INFORMATION
   Change these later if required.
========================================================= */

const PERSONAL = {

  name: "Murali Manohar",

  email: "",

  github: "",

  linkedin: "",

  instagram: ""

};


/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [

  {
    id: 1,

    title: "Tasty & Comfort",

    category: "business",

    categoryLabel: "Business",

    description:
      "A real-world business concept designed around comfort, customer value, hygiene, experience and long-term thinking.",

    problem:
      "How can a small physical business be designed as a complete customer experience rather than simply a place that sells a product?",

    approach:
      "I explored the business identity, customer experience, information structure, safety considerations and digital presence together.",

    built:
      "A complete digital concept and interactive website for the T&C idea.",

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

    title: "Jai Kisan",

    category: "agriculture",

    categoryLabel: "Agriculture",

    description:
      "An agriculture-focused digital concept bringing useful information, services and practical resources together.",

    problem:
      "How can a digital platform make useful agricultural information easier to discover and explore?",

    approach:
      "I explored the idea as a broader information ecosystem instead of limiting it to a single feature.",

    built:
      "A web-based agriculture information and service concept.",

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

    title: "Find Near CARE",

    category: "navigation",

    categoryLabel: "Healthcare + Navigation",

    description:
      "A location-focused healthcare discovery experience combining hospitals, GPS, maps and route information.",

    problem:
      "How can someone quickly discover a nearby CARE Hospitals location and understand how to get there?",

    approach:
      "I combined location discovery with map interaction, GPS and routing so that the user can move from searching to navigation.",

    built:
      "A browser-based healthcare location discovery tool.",

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

    title: "Find Doctor",

    category: "healthcare",

    categoryLabel: "Healthcare",

    description:
      "A searchable healthcare information experience for discovering doctors, specialties and hospital-related information.",

    problem:
      "How can healthcare information be organised so users can discover the right doctor or specialty more easily?",

    approach:
      "I focused on structured information, search, filtering and a user-friendly discovery flow.",

    built:
      "A doctor discovery website connected to structured healthcare information.",

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

    title: "Safe Route",

    category: "safety",

    categoryLabel: "Safety + Communication",

    description:
      "A safety-oriented digital concept combining communication, location, GPS, routing, file sharing and emergency assistance.",

    problem:
      "How can communication, location and emergency-related tools be brought together into one travel-oriented experience?",

    approach:
      "I explored a unified experience where identity, communication, maps, routes and emergency functions can work together.",

    built:
      "A Safe Route web application concept with communication and location features.",

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

    title: "CARE Portal",

    category: "healthcare",

    categoryLabel: "Healthcare + Portal",

    description:
      "An information and productivity portal concept designed around a healthcare environment.",

    problem:
      "How can frequently needed information and tools be organised into a simple digital portal?",

    approach:
      "I experimented with bringing different information and useful tools into one accessible interface.",

    built:
      "A healthcare-oriented portal experience.",

    tags: [
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
   DOM REFERENCES
========================================================= */

const projectsGrid =
  document.getElementById("projectsGrid");

const projectModal =
  document.getElementById("projectModal");

const modalContent =
  document.getElementById("modalContent");

const modalClose =
  document.getElementById("modalClose");

const modalBackdrop =
  document.getElementById("modalBackdrop");

const mobileMenuButton =
  document.getElementById("mobileMenuButton");

const mobileMenu =
  document.getElementById("mobileMenu");

const emailButton =
  document.getElementById("emailButton");

const yearElement =
  document.getElementById("year");


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

}


/* =========================================================
   PROJECT CARD
========================================================= */

function createProjectCard(project) {

  const article =
    document.createElement("article");

  article.className =
    "project-card";

  article.dataset.category =
    project.category;

  article.innerHTML = `

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
          .slice(0, 3)
          .map(tag => `<span>${tag}</span>`)
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

function renderProjects(filter = "all") {

  if (!projectsGrid) return;

  projectsGrid.innerHTML = "";

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
          project =>
            project.category === filter
        );


  filteredProjects.forEach(
    project => {

      const card =
        createProjectCard(project);

      projectsGrid.appendChild(card);

    }
  );

}


/* =========================================================
   PROJECT MODAL
========================================================= */

function openProject(project) {

  if (!projectModal || !modalContent) {
    return;
  }


  modalContent.innerHTML = `

    <span class="modal-category">
      ${project.categoryLabel}
    </span>

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
          Project type
        </span>

        <p>
          Personal experiment / digital project
        </p>

      </div>

    </div>


    <div class="modal-tags">

      ${project.tags
        .map(tag =>
          `<span>${tag}</span>`
        )
        .join("")}

    </div>


    <a
      href="${project.url}"
      target="_blank"
      rel="noopener noreferrer"
      class="button button-dark modal-open-button"
    >
      Open live project
      <span>↗</span>
    </a>

  `;


  projectModal.classList.add("active");

  document.body.classList.add("modal-open");

}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeProject() {

  if (!projectModal) return;

  projectModal.classList.remove("active");

  document.body.classList.remove("modal-open");

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
      projectModal.classList.contains("active")
    ) {

      closeProject();

    }

  }
);


/* =========================================================
   FILTERS
========================================================= */

document
  .querySelectorAll("[data-project-filter]")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(
            "[data-project-filter]"
          )
          .forEach(item => {

            item.classList.remove(
              "active"
            );

          });


        button.classList.add("active");


        renderProjects(
          button.dataset.projectFilter
        );


        const workSection =
          document.getElementById("work");

        if (workSection) {

          const rect =
            workSection.getBoundingClientRect();

          if (
            rect.top >
            window.innerHeight * 0.5
          ) {

            workSection.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });

          }

        }

      }
    );

  });


/* =========================================================
   WORLD CARDS
========================================================= */

document
  .querySelectorAll("[data-filter]")
  .forEach(card => {

    card.addEventListener(
      "click",
      () => {

        const filter =
          card.dataset.filter;

        const matchingFilter =
          document.querySelector(
            `[data-project-filter="${filter}"]`
          );


        if (matchingFilter) {

          matchingFilter.click();

        } else {

          renderProjects(filter);

        }


        const work =
          document.getElementById("work");

        if (work) {

          work.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      }
    );

  });


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
  .querySelectorAll(".mobile-menu a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        mobileMenu.classList.remove(
          "active"
        );

      }
    );

  });


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
  document.querySelectorAll(".reveal");


const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

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
      threshold: 0.12
    }
  );


revealElements.forEach(
  element =>
    revealObserver.observe(element)
);


/* =========================================================
   SUBTLE HERO PARALLAX
========================================================= */

const heroOrb =
  document.querySelector(".hero-orb");

const heroOrbit =
  document.querySelector(".hero-orbit");


if (
  heroOrb &&
  heroOrbit &&
  !window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches
) {

  window.addEventListener(
    "mousemove",
    event => {

      const x =
        (event.clientX /
          window.innerWidth -
          0.5) *
        12;

      const y =
        (event.clientY /
          window.innerHeight -
          0.5) *
        12;


      heroOrbit.style.transform =
        `translate(${x}px, ${y}px)`;

    }
  );

}


/* =========================================================
   INITIAL RENDER
========================================================= */

renderProjects("all");


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
  "Murali's personal website loaded."
);

console.log(
  `${projects.length} projects available.`
);
