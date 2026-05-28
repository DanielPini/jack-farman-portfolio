import { motion } from "motion/react";
import { useState } from "react";
import PageWrapper from "../components/layout/PageWrapper";
import HomeNavigation from "../components/layout/HomeNavigation";

const aboutSections = [
  {
    id: "film-practice",
    title: "Film Practice",
    paragraphs: [
      "I make documentary films rooted in fieldwork. In my latest series espèces pionnieres, each film takes a set of everyday gestures as its starting point (planting, composting, searching for water) and follows the narrative that emerges from them.",
      "Working at the intersection of ethnographic film and ecological inquiry, I collaborate with scientists, urban planners, and communities to make visible the stories a territory holds before anything is added or changed.",
      "My work has been developed through the LINA platform and in collaboration with institutions including the Centre Pompidou.",
    ],
  },
  {
    id: "koinpost",
    title: "Koinpost",
    paragraphs: [
      "Koinpost is a collective composting platform that operates at the scale of the neighbourhood. It is at once an act of urban gardening, a lived experience of decomposition as life cycle, and a tool for building more connected local territories.",
      "Born from the same questions that drive my film practice, Koinpost translates narrative into infrastructure, turning the gestures of care and repair into something people can participate in together.",
    ],
  },
  {
    id: "consulting",
    title: "Consulting",
    paragraphs: [
      "I work alongside architects, urban planners, and designers on territorial and urban programming projects. My role is to bring the narrative layer of a place into the design process, drawing on fieldwork, community engagement, and documentary methods to surface what already exists before a project begins.",
      "Each collaboration starts from the same question: what story does this place already hold?",
    ],
  },
];

export default function LeKoinpost() {
  const [activeSection, setActiveSection] = useState(aboutSections[0].id);
  const section =
    aboutSections.find((item) => item.id === activeSection) ?? aboutSections[0];

  return (
    <PageWrapper>
      <HomeNavigation />
      <div className="page">
        <motion.div
          className="about"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-content">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              About
            </motion.h2>

            <div className="about-tabs" role="tablist">
              {aboutSections.map((item) => (
                <button
                  key={item.id}
                  className={`about-tab ${item.id === activeSection ? "active" : ""}`}
                  type="button"
                  role="tab"
                  aria-selected={item.id === activeSection}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <motion.div
              className="about-tab-content"
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              role="tabpanel"
            >
              <h3>{section.title}</h3>
              {section.paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
