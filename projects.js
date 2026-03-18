const projects = [
  {
    id: 11,
    slug: "bobbee",
    category: "Audit | UX Research | Data IA",
    title: "Identifier les frictions et améliorer l’expérience d’un SaaS complexe (Bobbee - ISAGRI)",
    description:
      "Identifier les points de friction d’un logiciel métier de comptabilité et proposer des améliorations concrètes pour rendre le produit plus fluide, plus lisible et prêt à évoluer.",
    image: "../images/BOBBEE/bobbee_carte.jpg",
    alt: "Illustration du projet Bobbee avec dashboard et analyse financière",
    url: "projets/bobbee.html"
  },
  {
    id: 10,
    slug: "ademe",
    category: "UX Research | Data | Public sector",
    title: "Structurer et améliorer une offre de services data multi-acteurs (ADEME - Fabrique de la donnée)",
    description:
      "Comprendre les usages et les interactions entre acteurs pour clarifier une offre de services data publics et proposer des améliorations alignées avec les besoins terrain.",
    image: "images/ADEME/Ademe_Illustration.png",
    alt: "Aperçu du projet pour l'ADEME",
    url: "projets/ademe.html"
  },
  {
    id: 9,
    slug: "T-SRU",
    category: "UX-UI | DSFR | GovTech | Data Viz",
    title: "Concevoir une interface claire pour un outil métier public (SRU - Ministère Écologie)",
    description:
      "Transformer un outil complexe de suivi des logements sociaux en une interface plus lisible et exploitable pour les collectivités.",
    image: "images/TSRU/sru-carte.png",
    alt: "Aperçu du projet T-SRU",
    url: "projets/T-SRU.html"
  },
  {
    id: 8,
    slug: "TRM",
    category: "Strategie | UX-UI | Data | GovTech",
    title: "Améliorer la collecte et la fiabilité de données métier (TRM - Ministère Écologie)",
    description:
      "Repenser les parcours et le produit pour faciliter la collecte de données sur le transport routier de marchandises et améliorer leur qualité.",
    image: "images/TRM/trm-carte.png",
    alt: "Aperçu du projet TRM",
    url: "projets/trm.html"
  },
  {
    id: 7,
    slug: "OHC",
    category: "Data analyses | Questionnaire | Automatisation",
    title: "Transformer des données de bien-être en décisions concrètes (OCTO Technology)",
    description:
      "Passer de questionnaires peu exploitables à un outil fiable permettant de comprendre le bien-être des collaborateurs et d’orienter des décisions à l’échelle de l’entreprise.",
    image: "images/OHC/ohc-illustration.png",
    alt: "Aperçu du projet OHC",
    url: "projets/ohc.html"
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