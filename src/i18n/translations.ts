export const translations = {
  en: {
    nav: {
      filmPractice: "Film Practice",
      leKoinpost: "Le Koinpost",
      consulting: "Consulting",
      contact: "Contact",
    },
    loader: {
      loading: "Loading",
    },
    filmPractice: {
      categoryLabel: "Film Practice",
      film: "Film",
      directedBy: "Directed by",
      screenings: "Screenings",
      backToList: "Back to Film Practice",
    },
    project: {
      kicker: "Project",
      footnotes: "Footnotes",
      films: "Films",
      notFound: "Project not found",
      notFoundBody: "We couldn't find the project you were looking for.",
    },
    consulting: {
      heading: "Consulting",
      body: "I work with architects, urban planners, and designers on territorial and urban programming projects, bringing the narrative layers of a place into the design process drawing on fieldwork, design fiction, and documentary methods to surface what already exists before a project begins. Each collaboration starts from the same question: what story does a place already hold?",
    },
    contact: {
      heading: "Get In Touch",
      body: "Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you as soon as possible.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending…",
      success: "✓ Thank you! Your message has been sent successfully.",
    },
    leKoinpost: {
      heading: "Le Koinpost",
      paragraphs: [
        "Koinpost is a collective composting platform that operates at the scale of the neighbourhood. It is at once an act of urban gardening, a lived experience of decomposition as life cycle, and a tool for building more connected local territories.",
        "Born from the same questions that drive my film practice, Koinpost translates narrative into infrastructure, turning the gestures of care and repair into something people can participate in together.",
      ],
      learnMorePrefix: "Learn more at ",
      partnersHeading: "Partners",
      hoursLabel: "Hours",
      viewOnSite: "View on lekoinpost.com",
    },
  },

  fr: {
    nav: {
      filmPractice: "Pratique Cinématographique",
      leKoinpost: "Le Koinpost",
      consulting: "Conseil",
      contact: "Contact",
    },
    loader: {
      loading: "Chargement",
    },
    filmPractice: {
      categoryLabel: "Pratique Cinématographique",
      film: "Film",
      directedBy: "Réalisé par",
      screenings: "Projections",
      backToList: "Retour à la pratique cinématographique",
    },
    project: {
      kicker: "Projet",
      footnotes: "Notes de bas de page",
      films: "Films",
      notFound: "Projet introuvable",
      notFoundBody: "Nous n'avons pas trouvé le projet que vous recherchez.",
    },
    consulting: {
      heading: "Conseil",
      body: "Je travaille avec des architectes, des urbanistes et des designers sur des projets de programmation territoriale et urbaine, en apportant les couches narratives d'un lieu dans le processus de conception — en m'appuyant sur le travail de terrain, la fiction de design et les méthodes documentaires pour faire émerger ce qui existe déjà avant le début d'un projet. Chaque collaboration part de la même question : quelle histoire un lieu porte-t-il déjà ?",
    },
    contact: {
      heading: "Prendre contact",
      body: "Vous avez un projet en tête ? J'adorerais en entendre parler. Envoyez-moi un message et je vous répondrai dès que possible.",
      name: "Nom",
      email: "E-mail",
      message: "Message",
      send: "Envoyer le message",
      sending: "Envoi en cours…",
      success: "✓ Merci ! Votre message a bien été envoyé.",
    },
    leKoinpost: {
      heading: "Le Koinpost",
      paragraphs: [
        "Koinpost est une plateforme de compostage collectif qui opère à l'échelle du quartier. C'est à la fois un acte de jardinage urbain, une expérience vécue de la décomposition comme cycle de vie, et un outil pour construire des territoires locaux plus connectés.",
        "Né des mêmes questions qui animent ma pratique cinématographique, Koinpost traduit le récit en infrastructure, transformant les gestes du soin et de la réparation en quelque chose auquel les gens peuvent participer ensemble.",
      ],
      learnMorePrefix: "En savoir plus sur ",
      partnersHeading: "Partenaires",
      hoursLabel: "Horaires",
      viewOnSite: "Voir sur lekoinpost.com",
    },
  },
} as const;

export type Translations = typeof translations;
