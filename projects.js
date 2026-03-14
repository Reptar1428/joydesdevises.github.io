const projects = [
  {
    id: 1,
    slug: "bobbee",
    category: "UX Research & Product Design",
    title: "Audit UX-UI du SaaS Bobbee",
    description:
      "Réalisation d’un audit design pour identifier les points de friction d’un logiciel SaaS de comptabilité et proposer des améliorations de parcours, d’interface et d’intégration de fonctionnalités basées sur l’IA.",
    image: "images/Bobbee_Illustration.jpg",
    alt: "Illustration du projet Bobbee avec dashboard et analyse financière",
    url: "projets/bobbee.html"
  },
  {
    id: 2,
    slug: "project-2",
    category: "UX Research",
    title: "Research-driven Product Redesign",
    description:
      "Led a complete redesign of a legacy product based on extensive user research, improving satisfaction and task completion rates.",
    image: "images/project2.jpg",
    alt: "Aperçu du projet 2",
    url: "projets/project2.html"
  },
  {
    id: 3,
    slug: "project-3",
    category: "AI & Automation",
    title: "AI-powered Workflow Experience",
    description:
      "Designed a product experience integrating automation and AI-assisted features to simplify complex user journeys and support decision-making.",
    image: "images/project3.jpg",
    alt: "Aperçu du projet 3",
    url: "projets/project3.html"
  },
  {
    id: 4,
    slug: "project-4",
    category: "Data Analytics",
    title: "Data-intensive Analytics Dashboard",
    description:
      "Designed a comprehensive dashboard enabling non-technical users to explore complex datasets through intuitive visualizations and interactive controls.",
    image: "images/project4.jpg",
    alt: "Aperçu du projet 4",
    url: "projets/project4.html"
  },
  {
    id: 5,
    slug: "project-5",
    category: "Service Design",
    title: "Cross-team Product Journey Redesign",
    description:
      "Restructured key service touchpoints to improve coordination, usability and decision-making across multiple stakeholders.",
    image: "images/project5.jpg",
    alt: "Aperçu du projet 5",
    url: "projets/project5.html"
  },
  {
    id: 6,
    slug: "project-6",
    category: "Product Design",
    title: "Operational Tool for Complex Workflows",
    description:
      "Designed a clearer and more scalable interface for a complex operational product used in high-information environments.",
    image: "images/project6.jpg",
    alt: "Aperçu du projet 6",
    url: "projets/project6.html"
  }
];

function createProjectCard(project) {
  return `
    <article class="project-card">
      <div class="project-image">
        <img src="${project.image}" alt="${project.alt}" loading="lazy">
      </div>
      <div class="project-content">
        <span class="project-category">${project.category}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.url}">Voir l'étude de cas</a>
      </div>
    </article>
  `;
}

function renderProjects(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let projectsToRender = projects;

  if (Array.isArray(options.ids)) {
    projectsToRender = options.ids
      .map((id) => projects.find((project) => project.id === id))
      .filter(Boolean);
  }

  container.innerHTML = projectsToRender
    .map((project) => createProjectCard(project))
    .join("");
}