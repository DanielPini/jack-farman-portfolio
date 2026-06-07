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
  category?: string;
  content?: ContentBlock[];
  sections?: { title: string; content: ContentBlock[] }[];
  footnotes?: Footnote[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "especes-pionnieres",
    title: "Espèces Pionnières",
    director: "Jack Farman",
    year: 2024,
    videos: [
      "/videos/especes_pionnieres_1.mp4",
      "/videos/especes_pionnieres_2.mp4",
      "/videos/especes_pionnieres_3.mp4",
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
  },
  {
    id: 2,
    slug: "faire-oeuvre-faire-ecosysteme",
    title: "Faire oeuvre, faire écosystème",
    director: "Jack Farman",
    year: 2024,
    videos: ["/videos/especes_pionnieres_1.mp4"],
    images: [
      "/images/Pioneer_Species_Part_I_-_Image_A.webp",
      "/images/Pioneer_Species_Part_I_-_Image_B.webp",
      "/images/Pioneer_Species_Part_I_-_Image_C.webp",
    ],
    description:
      "Part 1 of the Espèces Pionnières trilogy, rooted in urban care and the future metro neighborhood of Nanterre.",
    category: "Film Practice",
    content: [
      { type: "heading", text: "Faire oeuvre, faire écosystème" },
      {
        type: "paragraph",
        text: "A film about the emergence of care practices around a pioneer species tree in Nanterre, the future metro line, and the possibility of new relations between neighbors, plants, and soil.",
      },
      {
        type: "video",
        src: "/videos/especes_pionnieres_1.mp4",
        caption: "Faire oeuvre, faire écosystème, directed by Jack Farman.",
      },
    ],
  },
  {
    id: 3,
    slug: "exposome",
    title: "Exposome",
    director: "Jack Farman",
    year: 2025,
    videos: ["/videos/especes_pionnieres_2.mp4"],
    images: [
      "/images/Pioneer_Species_Part_II_-_Image_A.webp",
      "/images/Pioneer_Species_Part_II_-_Image_B.webp",
      "/images/Pioneer_Species_Part_II_-_Image_C.webp",
      "/images/Pioneer_Species_Part_II_-_Image_D.webp",
    ],
    description:
      "Part 2 of the trilogy, following composting, bees, and soil regeneration at Zone Sensible in Aubervilliers.",
    category: "Film Practice",
    content: [
      { type: "heading", text: "Espèces Pionnières Part 2" },
      {
        type: "paragraph",
        text: "A film focused on an urban farm and the ways that pioneer species create the conditions for soil to become productive again, amid waste, compost, and the pulse of a living ecosystem.",
      },
      {
        type: "video",
        src: "/videos/especes_pionnieres_2.mp4",
        caption: "Espèces Pionnières Part 2, directed by Jack Farman.",
      },
    ],
  },
  {
    id: 4,
    slug: "eaux-et-pays",
    title: "Eaux et pays",
    director: "Jack Farman",
    year: 2026,
    videos: ["/videos/especes_pionnieres_3.mp4"],
    images: [
      "/images/Pioneer_Species_Part_III_-_Image_A.webp",
      "/images/Pioneer_Species_Part_III_-_Image_B.webp",
    ],
    description:
      "Part 3 of the trilogy, examining buried waterways, commemoration, and the visibility of water in Saint-Denis and Vendée.",
    category: "Film Practice",
    content: [
      { type: "heading", text: "Eaux et pays" },
      {
        type: "paragraph",
        text: "A film about the buried river La Vieille Mer, collective mapping in Saint-Denis, and the broader questions of water, memory, and environmental care.",
      },
      {
        type: "video",
        src: "/videos/especes_pionnieres_3.mp4",
        caption: "Eaux et pays, directed by Jack Farman.",
      },
    ],
  },
];
