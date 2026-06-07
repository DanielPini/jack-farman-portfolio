export const translations = {
  en: {
    nav: {
      filmPractice: "Films",
      leKoinpost: "Le Koinpost",
      contact: "Contact",
    },
    loader: {
      loading: "Loading",
    },
    filmPractice: {
      categoryLabel: "Films",
      film: "Film",
      directedBy: "Directed by",
      screenings: "Screenings",
      backToList: "Back to Films",
    },
    project: {
      kicker: "Project",
      footnotes: "Footnotes",
      films: "Films",
      notFound: "Project not found",
      notFoundBody: "We couldn't find the project you were looking for.",
    },
    contact: {
      heading: "Get In Touch",
      contactLink: "Contact me here",
    },
  },

  fr: {
    nav: {
      filmPractice: "Films",
      leKoinpost: "Le Koinpost",
      contact: "Contact",
    },
    loader: {
      loading: "Chargement",
    },
    filmPractice: {
      categoryLabel: "Films",
      film: "Film",
      directedBy: "Réalisé par",
      screenings: "Projections",
      backToList: "Retour aux films",
    },
    project: {
      kicker: "Projet",
      footnotes: "Notes de bas de page",
      films: "Films",
      notFound: "Projet introuvable",
      notFoundBody: "Nous n'avons pas trouvé le projet que vous recherchez.",
    },
    contact: {
      heading: "Prendre contact",
      contactLink: "Me contacter ici",
    },
  },
} as const;

export type Translations = typeof translations;
