export type ContentBlock =
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "image";
      src: string;
      caption?: string;
    }
  | {
      type: "video";
      src: string;
      caption?: string;
    };

export type Footnote = {
  number: number;
  text: string;
};

export type Project = {
  id: number;
  slug?: string;
  title: string;
  client?: string;
  director?: string;
  year: number;
  videos?: string[];
  images?: string[];
  description?: string;
  descriptionFr?: string;
  category?: string;
  content?: ContentBlock[];
  contentFr?: ContentBlock[];
  sections?: { title: string; content: ContentBlock[] }[];
  sectionsFr?: { title: string; content: ContentBlock[] }[];
  footnotes?: Footnote[];
  footnotesFr?: Footnote[];
  screenings?: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "especes-pionnieres",
    title: "Espèces Pionnières",
    director: "Jack Farman",
    year: 2024,
    videos: [
      "/videos/Part_I_(faire_oeuvre_faire_ecosysteme).webm",
      "/videos/Part_II_(exposome).webm",
      "/videos/Part_III_(eaux_et_pays).webm",
    ],
    images: [
      "/images/Pioneer_Species_Part_I_-_Image_A.webp",
      "/images/Pioneer_Species_Part_I_-_Image_B.webp",
      "/images/Pioneer_Species_Part_I_-_Image_C.webp",
      "/images/Pioneer_Species_Part_II_-_Image_A.webp",
      "/images/Pioneer_Species_Part_II_-_Image_B.webp",
      "/images/Pioneer_Species_Part_II_-_Image_C.webp",
      "/images/Pioneer_Species_Part_II_-_Image_D.webp",
      "/images/Pioneer_Species_Part_III_-_Image_A.webp",
      "/images/Pioneer_Species_Part_III_-_Image_B.webp",
    ],
    description:
      "A three-part film series exploring regeneration, care, and more-than-human relations across the outskirts of Paris and a sown forest in Vendée.",
    descriptionFr:
      "Une série de trois films explorant la régénération, le soin et les relations plus-qu'humaines dans la banlieue parisienne et une forêt plantée en Vendée.",
    category: "Film Practice",
    sections: [
      {
        title: "Part I",
        content: [
          {
            type: "paragraph",
            text: "In Pioneer Species, Jack Farman presents a triptych of films set in different landscapes in the outskirts of Paris, as well as a sown forest in Vendée, following communities as they engage with plants, soil, and water in urban and rural environments under environmental constraints. Moving between a future metro line, a forest, an urban farm, and the buried traces of a river, the films trace how practices of care emerge in response to strenuous conditions and how stress can generate new forms of attention, collective action, and more-than-human relations within processes of urban transformation.",
          },
          {
            type: "paragraph",
            text: "In sites of ecological constraint, pioneer species allow new forms of life to emerge. They are often used as agents for regenerative projects, healing damaged or barren lands¹. In this process of regeneration, they become figures of alterity, transforming the conditions of a place and, in doing so, opening it to other forms of life. In urban environments, where soil and plant relations have alike been segmented and damaged, pioneer species point toward what regeneration might still look like.",
          },
          {
            type: "paragraph",
            text: "In conceiving the future city metro lines of the Greater Paris, inhabitants of Nanterre envision their neighborhood where they can breathe and have relations with other human and non-human agents. They begin to put in place practices of care, whereby one hundred of the neighborhood's inhabitants will take care of a pioneer species tree, a Paulownia Tomentosa (empress tree), which will then be planted in the future metro stations of the area.",
          },
          {
            type: "paragraph",
            text: "The inhabitants respond to the urgency of what preoccupies them today for future generations. How can a neighborhood build resilience, and how can new forms of care and life emerge when urban life tends to fragment relations: between neighbors, and between humans and the living world around them? As one mother attending these gatherings explained, she grew up in a forest, able to name the trees around her and move through the territory with intimate familiarity. She finds that her children, growing up in the city, are denied this and she comes to these gatherings in the hope of cultivating that same knowledge, this time with the trees that will one day line the streets of the neighborhood. Just as pioneer species create the conditions for new ecosystems to take hold, these inhabitants position themselves as pioneers, cultivating practices in the constrained terrain of the contemporary city.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_I_-_Image_A.webp",
            caption:
              "Top: old metro line in Paris and its outskirts, Trame Verte. Extract from Pioneer Species (Part I), Jack Farman, 2024.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_I_-_Image_B.webp",
            caption:
              "Middle: An inhabitant watering the plants in Paris. Extract from Pioneer Species (Part I), Jack Farman, 2024.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_I_-_Image_C.webp",
            caption:
              "Bottom: Humanoid sculpture by Fabrice Hyber in Vendée. Extract from Pioneer Species (Part I), Jack Farman, 2024.",
          },
          {
            type: "paragraph",
            text: "In the series of three films 'Pioneer Species' I investigate this analogy between ecological relations and territorial transformations to reveal a more-than-human ecosystem. In an attempt to create a forest within their future neighborhood, the inhabitants learn how plants can emerge in an urban mineralized environment². This process induces practices of care toward these plants, while also making visible new forms of interaction between residents as they collectively shape their surroundings.",
          },
          {
            type: "paragraph",
            text: "In weekly gatherings in the community garden, the inhabitants discuss how plants are reacting to soil structure, deposits, and water amongst themselves; but also how trees inhabit the urban environment; how they grow and subsist. Larger questions then emerge in these gatherings: what practices of care do we account for in a neighborhood in transformation? What is an ecosystem where plants and humans are both agents involved in the fabric of daily life? What is natural, what is cultural?",
          },
        ],
      },
      {
        title: "Part II",
        content: [
          {
            type: "paragraph",
            text: "My research into the tree planting initiative around the future metro stations led me to question more broadly how trees contribute to the fabric of an ecosystem. To explore this, I chose to film a sown forest that has grown over thirty years as a collaborative land art practice initiated by the artist Fabrice Hyber in Vendée. This forest offered a counterpoint to the mineralized urban environment where sown trees have over time created the conditions for conviviality amongst species, weaving together a living ecosystem. For Hyber, the forest is not separate from his imagination but an extension of it, and his artwork, in turn, bears the traces of that entanglement. Throughout the forest, he has made massive sculptures that act as agents of perception: a wooden humanoid fountain surrounded by different plant species, for instance, makes visible the sociality of plants and how they live amongst themselves. The installation leaves behind marks of a process in which the forest and the artist continuously shape one another.",
          },
          {
            type: "paragraph",
            text: "Whereas the first part of the film series explored environmental stress as a potential act of creation, whether for plants in a given soil structure, or for humans in the making of their future neighborhood, the second part follows the conditions of life and energy that emerge once these pioneer species begin regenerating life, and the constant renegotiation with stress which allows new life to emerge again. I decided to situate the second film a year later in an urban farm on the outskirts of Paris in Aubervilliers called Zone Sensible, where pioneer species have allowed the soil to become hospitable to agriculture once again.",
          },
          {
            type: "paragraph",
            text: "Here, inhabitants deposit food waste into a compost platform in the form of an omega, symbolizing the everlasting cycle of life and death. Matter decomposes, and for a period of time it becomes uncertain whether life will emerge again, but it does. Stress here takes the form of movement: the act of leaving one's home to return waste to the soil, so that it will one day produce food again. To maintain the cycle of life, there is a necessity to let go of accumulation, to give back to the soil.",
          },
          {
            type: "paragraph",
            text: "Bees follow this movement and are essential characters in the film, embodying the relationship between life and death, and how stress preserves the cycle of life. The space of life for the bee is the space where she lays her larvae, which become the workers of the next generation gathering nectar, and building the hive. The bee lives only 45 days, and in the accumulation of that labor, she dies.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_II_-_Image_A.webp",
            caption:
              "Top left: Transporting compost across the Zone Sensible farm, Aubervilliers. Extract from Pioneer Species (Part II), Jack Farman, 2025.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_II_-_Image_B.webp",
            caption:
              "Top right: Bee hive at the Zone Sensible farm, Aubervilliers. Extract from Pioneer Species (Part II), Jack Farman, 2025.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_II_-_Image_C.webp",
            caption:
              "Bottom left: Food waste deposit at the Zone Sensible farm, Aubervilliers. Extract from Pioneer Species (Part II), Jack Farman, 2025.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_II_-_Image_D.webp",
            caption:
              "Bottom right: Compost maturing at the Zone Sensible farm, Aubervilliers. Extract from Pioneer Species (Part II), Jack Farman, 2025.",
          },
        ],
      },
      {
        title: "Part III",
        content: [
          {
            type: "paragraph",
            text: "In the third and final film, I look into stress as a form of commemoration. On the outskirts of Paris, in Saint-Denis, the river La Vieille Mer was buried in the 20th century to facilitate construction and mobility, and today it is set to be reopened. For this fieldwork, I take part in collective gatherings organized around a map of the territory, bringing together local inhabitants of Saint-Denis. Many have forgotten the existence of the river, except for a few elders. Larger questions begin to emerge around the role of water in the fabric and maintenance of the territory, and how these polluted rivers were buried to conceal the toxicity in the environment. The gatherings reflect on a reimagined sponge city, where soils retain water rather than letting it disappear into drainage and sewers. The urgency, after this amnesia of water, becomes: how do we commemorate water in our territory, given its foundational role in the creation of life? As the local inhabitants of Saint-Denis search for the river and begin to understand where rainwater is retained or channeled, they express the necessity to make it visible.",
          },
          {
            type: "paragraph",
            text: "In this third film, I turn to other forms of water management, as the question of how forests and farms retain and circulate water has become a vast issue to contend with⁴. This leads me back to the forest in Vendée, where Fabrice Hyber is developing a water redistribution project that allows water from the Doulaye river to circulate more freely through the living terrain. Here too, the aim is to make water visible, to restore an awareness of its role in the fabric of life. The question of commemoration becomes important insofar as it projects water management into a longue durée⁵, allowing inhabitants to conceive of a way to remember water that will not be forgotten, and that there is a necessity to remember for the long term.",
          },
          {
            type: "paragraph",
            text: "The Pioneer Species triptych aims to offer an insight into communities currently making and inhabiting territories in tension as they transform. In this tension, these communities step forward for it is now or never, to create, to move, and at last to commemorate what once allowed life to emerge.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_III_-_Image_A.webp",
            caption:
              "Top: Water distribution in the Doulaye river in Vendée. Extract from Pioneer Species (Part III), Jack Farman, 2026.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_III_-_Image_B.webp",
            caption:
              "Bottom: Mapping the Doulaye river circulation into the forest with Fabrice Hyber. Extract from Pioneer Species (Part II), Jack Farman, 2025.",
          },
        ],
      },
    ],
    footnotes: [
      {
        number: 1,
        text: "Gilles Clément, Manifeste du Tiers paysage (Paris: Sens & Tonka, 2004). Clément identifies marginal and disturbed territories as refuges for biodiversity, where pioneer species play a central role in spontaneous ecological regeneration.",
      },
      {
        number: 2,
        text: "A mineralized urban environment refers to surfaces dominated by impermeable materials (concrete, asphalt, stone) that suppress soil life, prevent water infiltration, and interrupt ecological cycles. The term designates the condition of most contemporary urban ground, where the living substrate has been sealed off or destroyed.",
      },
      {
        number: 3,
        text: "Montage-at-a-distance is a film editing technique developed by Armenian filmmaker Artavazd Pelechian, in which meaning is generated not through the direct juxtaposition of shots but through their separation and repetition across the film creating resonance and tension between images that never appear side by side.",
      },
      {
        number: 4,
        text: "The concept of the sponge city, developed by landscape architect Kongjian Yu, proposes that urban environments be redesigned to absorb, retain, and naturally filter water, prioritizing green infrastructure over conventional drainage systems.",
      },
      {
        number: 5,
        text: "Longue durée is a concept developed by French historian Fernand Braudel and the Annales School, referring to the study of history over long, slow-moving timescales structural rhythms that unfold across centuries rather than through singular events.",
      },
    ],
    sectionsFr: [
      {
        title: "Partie I",
        content: [
          {
            type: "paragraph",
            text: "Dans Espèces Pionnières, Jack Farman présente un triptyque de films situés dans différents paysages de la banlieue parisienne ainsi que dans une forêt plantée en Vendée, suivant des communautés qui s'engagent avec les plantes, le sol et l'eau dans des environnements urbains et ruraux soumis à des contraintes environnementales. Se déplaçant entre une future ligne de métro, une forêt, une ferme urbaine et les traces enfouies d'une rivière, les films retracent comment des pratiques de soin émergent en réponse à des conditions difficiles, et comment le stress peut générer de nouvelles formes d'attention, d'action collective et de relations plus-qu'humaines au sein des processus de transformation urbaine.",
          },
          {
            type: "paragraph",
            text: "Dans les sites de contrainte écologique, les espèces pionnières permettent à de nouvelles formes de vie d'émerger. Elles sont souvent utilisées comme agents de projets régénératifs, guérissant des terres endommagées ou stériles¹. Dans ce processus de régénération, elles deviennent des figures d'altérité, transformant les conditions d'un lieu et, ce faisant, l'ouvrant à d'autres formes de vie. Dans les environnements urbains, où les relations entre le sol et les plantes ont été également fragmentées et endommagées, les espèces pionnières indiquent à quoi pourrait encore ressembler la régénération.",
          },
          {
            type: "paragraph",
            text: "En concevant les futures lignes de métro de la ville du Grand Paris, les habitants de Nanterre imaginent leur quartier où ils peuvent respirer et entretenir des relations avec d'autres agents humains et non-humains. Ils commencent à mettre en place des pratiques de soin, par lesquelles cent habitants du quartier prendront soin d'un arbre espèce pionnière, un Paulownia Tomentosa (arbre impératrice), qui sera ensuite planté dans les futures stations de métro de la zone.",
          },
          {
            type: "paragraph",
            text: "Les habitants répondent à l'urgence de ce qui les préoccupe aujourd'hui pour les générations futures. Comment un quartier peut-il construire sa résilience, et comment de nouvelles formes de soin et de vie peuvent-elles émerger lorsque la vie urbaine tend à fragmenter les relations : entre voisins, et entre les humains et le monde vivant qui les entoure ? Comme l'a expliqué une mère participant à ces rassemblements, elle a grandi dans une forêt, capable de nommer les arbres autour d'elle et de se déplacer dans le territoire avec une familiarité intime. Elle constate que ses enfants, grandissant en ville, en sont privés, et elle vient à ces rassemblements dans l'espoir de cultiver cette même connaissance, cette fois avec les arbres qui borderont un jour les rues du quartier. Tout comme les espèces pionnières créent les conditions pour que de nouveaux écosystèmes s'installent, ces habitants se positionnent comme des pionniers, cultivant des pratiques dans le terrain contraint de la ville contemporaine.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_I_-_Image_A.webp",
            caption:
              "En haut : ancienne ligne de métro à Paris et sa banlieue, Trame Verte. Extrait d'Espèces Pionnières (Partie I), Jack Farman, 2024.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_I_-_Image_B.webp",
            caption:
              "Au milieu : un habitant arrosant les plantes à Paris. Extrait d'Espèces Pionnières (Partie I), Jack Farman, 2024.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_I_-_Image_C.webp",
            caption:
              "En bas : sculpture humanoïde de Fabrice Hyber en Vendée. Extrait d'Espèces Pionnières (Partie I), Jack Farman, 2024.",
          },
          {
            type: "paragraph",
            text: "Dans la série de trois films « Espèces Pionnières », j'étudie cette analogie entre les relations écologiques et les transformations territoriales pour révéler un écosystème plus-qu'humain. Dans une tentative de créer une forêt dans leur futur quartier, les habitants apprennent comment les plantes peuvent émerger dans un environnement urbain minéralisé². Ce processus induit des pratiques de soin envers ces plantes, tout en rendant visibles de nouvelles formes d'interaction entre les résidents qui façonnent collectivement leur environnement.",
          },
          {
            type: "paragraph",
            text: "Dans des rassemblements hebdomadaires au jardin communautaire, les habitants discutent entre eux de la réaction des plantes à la structure du sol, aux dépôts et à l'eau ; mais aussi de la façon dont les arbres habitent l'environnement urbain ; comment ils poussent et subsistent. De plus grandes questions émergent alors dans ces rassemblements : quelles pratiques de soin prenons-nous en compte dans un quartier en transformation ? Qu'est-ce qu'un écosystème où les plantes et les humains sont tous deux des agents impliqués dans le tissu de la vie quotidienne ? Qu'est-ce qui est naturel, qu'est-ce qui est culturel ?",
          },
        ],
      },
      {
        title: "Partie II",
        content: [
          {
            type: "paragraph",
            text: "Ma recherche sur l'initiative de plantation d'arbres autour des futures stations de métro m'a conduit à m'interroger plus largement sur la contribution des arbres au tissu d'un écosystème. Pour explorer cela, j'ai choisi de filmer une forêt plantée qui a poussé pendant trente ans comme une pratique d'art collaboratif initiée par l'artiste Fabrice Hyber en Vendée. Cette forêt offrait un contrepoint à l'environnement urbain minéralisé, où les arbres plantés ont créé au fil du temps les conditions de convivialité entre espèces, tissant un écosystème vivant. Pour Hyber, la forêt n'est pas séparée de son imagination, mais en est une extension, et son œuvre, à son tour, porte les traces de cet entrelacement. Dans toute la forêt, il a réalisé de massives sculptures qui font office d'agents de perception : une fontaine humanoïde en bois entourée de différentes espèces végétales, par exemple, rend visible la socialité des plantes et la façon dont elles vivent entre elles. L'installation laisse derrière elle les marques d'un processus au cours duquel la forêt et l'artiste se façonnent mutuellement en permanence.",
          },
          {
            type: "paragraph",
            text: "Alors que la première partie de la série de films explorait le stress environnemental comme acte potentiel de création, que ce soit pour les plantes dans une structure de sol donnée, ou pour les humains dans la fabrication de leur futur quartier, la deuxième partie suit les conditions de vie et d'énergie qui émergent une fois que ces espèces pionnières commencent à régénérer la vie, et la renégociation constante avec le stress qui permet à une nouvelle vie d'émerger à nouveau. J'ai décidé de situer le deuxième film un an plus tard dans une ferme urbaine en périphérie de Paris à Aubervilliers appelée Zone Sensible, où les espèces pionnières ont permis au sol de redevenir propice à l'agriculture.",
          },
          {
            type: "paragraph",
            text: "Ici, les habitants déposent des déchets alimentaires dans une plateforme de compostage en forme d'oméga, symbolisant le cycle éternel de la vie et de la mort. La matière se décompose, et pendant un certain temps, il est incertain que la vie réémergera, mais elle le fait. Le stress prend ici la forme du mouvement : l'acte de quitter son domicile pour rendre des déchets au sol, afin qu'il produise un jour à nouveau de la nourriture. Pour maintenir le cycle de la vie, il est nécessaire de lâcher prise sur l'accumulation, de redonner au sol.",
          },
          {
            type: "paragraph",
            text: "Les abeilles suivent ce mouvement et sont des personnages essentiels dans le film, incarnant la relation entre la vie et la mort, et la façon dont le stress préserve le cycle de la vie. L'espace de vie de l'abeille est l'espace où elle pond ses larves, qui deviennent les ouvrières de la génération suivante qui récoltent le nectar et construisent la ruche. L'abeille ne vit que 45 jours, et dans l'accumulation de ce labeur, elle meurt.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_II_-_Image_A.webp",
            caption:
              "En haut à gauche : transport de compost à la ferme Zone Sensible, Aubervilliers. Extrait d'Espèces Pionnières (Partie II), Jack Farman, 2025.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_II_-_Image_B.webp",
            caption:
              "En haut à droite : ruche à la ferme Zone Sensible, Aubervilliers. Extrait d'Espèces Pionnières (Partie II), Jack Farman, 2025.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_II_-_Image_C.webp",
            caption:
              "En bas à gauche : dépôt de déchets alimentaires à la ferme Zone Sensible, Aubervilliers. Extrait d'Espèces Pionnières (Partie II), Jack Farman, 2025.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_II_-_Image_D.webp",
            caption:
              "En bas à droite : compost en maturation à la ferme Zone Sensible, Aubervilliers. Extrait d'Espèces Pionnières (Partie II), Jack Farman, 2025.",
          },
        ],
      },
      {
        title: "Partie III",
        content: [
          {
            type: "paragraph",
            text: "Dans le troisième et dernier film, je m'intéresse au stress comme forme de commémoration. En périphérie de Paris, à Saint-Denis, la rivière La Vieille Mer a été enterrée au XXe siècle pour faciliter la construction et la mobilité, et il est aujourd'hui prévu de la rouvrir. Pour ce travail de terrain, je participe à des rassemblements collectifs organisés autour d'une carte du territoire, réunissant des habitants locaux de Saint-Denis. Beaucoup ont oublié l'existence de la rivière, à l'exception de quelques anciens. De plus grandes questions commencent à émerger autour du rôle de l'eau dans le tissu et l'entretien du territoire, et de la façon dont ces rivières polluées ont été enterrées pour dissimuler la toxicité de l'environnement. Les rassemblements réfléchissent à une ville éponge réimaginée, où les sols retiennent l'eau plutôt que de la laisser disparaître dans les drainages et les égouts. L'urgence, après cette amnésie de l'eau, devient : comment commémorer l'eau dans notre territoire, compte tenu de son rôle fondateur dans la création de la vie ? Alors que les habitants locaux de Saint-Denis cherchent la rivière et commencent à comprendre où l'eau de pluie est retenue ou canalisée, ils expriment la nécessité de la rendre visible.",
          },
          {
            type: "paragraph",
            text: "Dans ce troisième film, je me tourne vers d'autres formes de gestion de l'eau, car la question de la façon dont les forêts et les fermes retiennent et font circuler l'eau est devenue un vaste enjeu à affronter⁴. Cela me ramène à la forêt en Vendée, où Fabrice Hyber développe un projet de redistribution de l'eau qui permet à l'eau de la rivière Doulaye de circuler plus librement à travers le terrain vivant. Là aussi, l'objectif est de rendre l'eau visible, de restaurer une conscience de son rôle dans le tissu de la vie. La question de la commémoration devient importante dans la mesure où elle projette la gestion de l'eau dans une longue durée⁵, permettant aux habitants de concevoir une façon de se souvenir de l'eau qui ne sera pas oubliée, et qu'il est nécessaire de garder à long terme.",
          },
          {
            type: "paragraph",
            text: "Le triptyque des Espèces Pionnières vise à offrir un aperçu des communautés qui fabriquent et habitent actuellement des territoires en tension qui se transforment. Dans cette tension, ces communautés avancent car c'est maintenant ou jamais, pour créer, se déplacer, et finalement commémorer ce qui a permis autrefois à la vie d'émerger.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_III_-_Image_A.webp",
            caption:
              "En haut : distribution d'eau dans la rivière Doulaye en Vendée. Extrait d'Espèces Pionnières (Partie III), Jack Farman, 2026.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_III_-_Image_B.webp",
            caption:
              "En bas : cartographie de la circulation de la Doulaye dans la forêt avec Fabrice Hyber. Extrait d'Espèces Pionnières (Partie II), Jack Farman, 2025.",
          },
        ],
      },
    ],
    footnotesFr: [
      {
        number: 1,
        text: "Gilles Clément, Manifeste du Tiers paysage (Paris : Sens & Tonka, 2004). Clément identifie les territoires marginaux et perturbés comme des refuges pour la biodiversité, où les espèces pionnières jouent un rôle central dans la régénération écologique spontanée.",
      },
      {
        number: 2,
        text: "Un environnement urbain minéralisé désigne des surfaces dominées par des matériaux imperméables (béton, asphalte, pierre) qui suppriment la vie du sol, empêchent l'infiltration de l'eau et interrompent les cycles écologiques. Le terme désigne la condition de la plupart des sols urbains contemporains, où le substrat vivant a été scellé ou détruit.",
      },
      {
        number: 3,
        text: "Le montage-à-distance est une technique de montage cinématographique développée par le réalisateur arménien Artavazd Pelechian, dans laquelle le sens est généré non pas par la juxtaposition directe des plans mais par leur séparation et leur répétition à travers le film, créant résonance et tension entre des images qui n'apparaissent jamais côte à côte.",
      },
      {
        number: 4,
        text: "Le concept de ville éponge, développé par le paysagiste Kongjian Yu, propose que les environnements urbains soient repensés pour absorber, retenir et filtrer naturellement l'eau, en donnant la priorité aux infrastructures vertes par rapport aux systèmes de drainage conventionnels.",
      },
      {
        number: 5,
        text: "La longue durée est un concept développé par l'historien français Fernand Braudel et l'École des Annales, désignant l'étude de l'histoire sur de longues échelles de temps lentes — des rythmes structurels qui se déroulent sur des siècles plutôt qu'à travers des événements singuliers.",
      },
    ],
  },
  {
    id: 2,
    slug: "faire-oeuvre-faire-ecosysteme",
    title: "Faire oeuvre, faire écosystème",
    director: "Jack Farman",
    year: 2024,
    videos: ["/videos/Part_I_(faire_oeuvre_faire_ecosysteme).webm"],
    images: [
      "/images/Pioneer_Species_Part_I_-_Image_A.webp",
      "/images/Pioneer_Species_Part_I_-_Image_B.webp",
      "/images/Pioneer_Species_Part_I_-_Image_C.webp",
    ],
    description:
      "Part 1 of the Espèces Pionnières trilogy, rooted in urban care and the future metro neighborhood of Nanterre.",
    descriptionFr:
      "Volet 1 de la trilogie, ce premier film raconte l'avenir de la végétalisation du quartier de la ligne de métro de Nanterre.",
    screenings: [
      "Centre Pompidou — Hors-Pistes/Hors Champs 2026, Festival Itinérant à la Vallée en Vendée",
      "La Villette — Le Consulat de la Terre, cycle de conférences avec TVK, 2026",
    ],
    category: "Film Practice",
    content: [
      { type: "heading", text: "Faire oeuvre, faire écosystème" },
      {
        type: "paragraph",
        text: "A film about the emergence of care practices around a pioneer species tree in Nanterre, the future metro line, and the possibility of new relations between neighbors, plants, and soil.",
      },
      {
        type: "video",
        src: "/videos/Part_I_(faire_oeuvre_faire_ecosysteme).webm",
        caption: "Faire oeuvre, faire écosystème, directed by Jack Farman.",
      },
    ],
    contentFr: [
      { type: "heading", text: "Faire oeuvre, faire écosystème" },
      {
        type: "paragraph",
        text: "Un film réalisé autour de l'émergence de la convivialité avec les espèces pionnières à Nanterre, la future ligne de métro, et les relations entre voisins, plantes et sol.",
      },
      {
        type: "video",
        src: "/videos/Part_I_(faire_oeuvre_faire_ecosysteme).webm",
        caption: "Faire oeuvre, faire écosystème, réalisé par Jack Farman.",
      },
    ],
  },
  {
    id: 3,
    slug: "exposome",
    title: "Exposome",
    director: "Jack Farman",
    year: 2025,
    videos: ["/videos/Part_II_(exposome).webm"],
    images: [
      "/images/Pioneer_Species_Part_II_-_Image_A.webp",
      "/images/Pioneer_Species_Part_II_-_Image_B.webp",
      "/images/Pioneer_Species_Part_II_-_Image_C.webp",
      "/images/Pioneer_Species_Part_II_-_Image_D.webp",
    ],
    description:
      "Part 2 of the trilogy, following composting, bees, and soil regeneration at Zone Sensible in Aubervilliers.",
    descriptionFr:
      "Volet 2 de la trilogie, cette deuxième partie raconte les cycles de vie et de mort autour du compostage et d'essaimage dans les fermes urbaines franciliennes.",
    screenings: [
      "Centre Pompidou — Hors-Pistes/Hors Champs 2026, Festival Itinérant à la Vallée en Vendée",
      "La Villette — Le Consulat de la Terre, cycle de conférences avec TVK, 2026",
    ],
    category: "Film Practice",
    content: [
      { type: "heading", text: "Espèces Pionnières Part 2" },
      {
        type: "paragraph",
        text: "A film focused on an urban farm and the ways that pioneer species create the conditions for soil to become productive again, amid waste, compost, and the pulse of a living ecosystem.",
      },
      {
        type: "video",
        src: "/videos/Part_II_(exposome).webm",
        caption: "Espèces Pionnières Part 2, directed by Jack Farman.",
      },
    ],
    contentFr: [
      { type: "heading", text: "Espèces Pionnières Partie 2" },
      {
        type: "paragraph",
        text: "Un film réalisé dans une ferme urbaine et la façon dont les espèces pionnières créent les conditions pour que le sol redevienne fertile, au sein d'un écosystème vivant.",
      },
      {
        type: "video",
        src: "/videos/Part_II_(exposome).webm",
        caption: "Espèces Pionnières Partie 2, réalisé par Jack Farman.",
      },
    ],
  },
  {
    id: 4,
    slug: "eaux-et-pays",
    title: "Eaux et pays",
    director: "Jack Farman",
    year: 2026,
    videos: ["/videos/Part_III_(eaux_et_pays).webm"],
    images: [
      "/images/eaux_et_pays1.webp",
      "/images/Pioneer_Species_Part_III_-_Image_A.webp",
      "/images/Pioneer_Species_Part_III_-_Image_B.webp",
    ],
    description:
      "Part 3 of the trilogy, examining buried waterways, commemoration, and the visibility of water in Saint-Denis and Vendée.",
    descriptionFr:
      "Volet 3 de la trilogie, cette dernière partie enquête et raconte l'enfouissement de la Vieille Mer, sa visibilité et sa commémoration.",
    screenings: [
      // "Centre Pompidou — Hors-Pistes/Hors Champs 2026, Festival Itinérant à la Vallée en Vendée",
      // "La Villette — Le Consulat de la Terre, cycle de conférences avec TVK, 2026",
    ],
    category: "Film Practice",
    content: [
      { type: "heading", text: "Eaux et pays" },
      {
        type: "paragraph",
        text: "A film about the buried river La Vieille Mer, collective mapping in Saint-Denis, and the broader questions of water, memory, and environmental care.",
      },
      {
        type: "video",
        src: "/videos/Part_III_(eaux_et_pays).webm",
        caption: "Eaux et pays, directed by Jack Farman.",
      },
    ],
    contentFr: [
      { type: "heading", text: "Eaux et pays" },
      {
        type: "paragraph",
        text: "Un film réalisé autour de la rivière enfouie La Vieille Mer, la cartographie collective, et les questions plus larges sur l'eau, la mémoire et le soin du territoire.",
      },
      {
        type: "video",
        src: "/videos/Part_III_(eaux_et_pays).webm",
        caption: "Eaux et pays, réalisé par Jack Farman.",
      },
    ],
  },
];
