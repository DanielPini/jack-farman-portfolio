import { motion } from "motion/react";
import { useRef, useState } from "react";
import PageWrapper from "../components/layout/PageWrapper";
import HomeNavigation from "../components/layout/HomeNavigation";
import KoinpostMap from "../components/koinpost/KoinpostMap";
import PhotoGallery from "../components/koinpost/PhotoGallery";

const koinpostObject = {
  id: "koinpost",
  title: "Le Koinpost",
  paragraphs: [
    "Koinpost is a collective composting platform that operates at the scale of the neighbourhood. It is at once an act of urban gardening, a lived experience of decomposition as life cycle, and a tool for building more connected local territories.",
    "Born from the same questions that drive my film practice, Koinpost translates narrative into infrastructure, turning the gestures of care and repair into something people can participate in together.",
    "Learn more at ",
  ],
};

export default function LeKoinpost() {
  const [activeLocationId, setActiveLocationId] = useState<string | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleLocationClick = (locationId: string) => {
    setActiveLocationId(locationId);
    // Scroll to gallery
    setTimeout(() => {
      galleryRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

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
              <button
                key={koinpostObject.id}
                className={`about-tab active`}
                type="button"
                role="tab"
                aria-selected={true}
              >
                {koinpostObject.title}
              </button>
            </div>

            <motion.div
              className="about-tab-content"
              key={koinpostObject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              role="tabpanel"
            >
              <h3>{koinpostObject.title}</h3>
              {koinpostObject.paragraphs.map((text, index) => (
                <p key={index}>
                  {text}
                  {index === koinpostObject.paragraphs.length - 1 && true && (
                    <a
                      href="https://lekoinpost.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="koinpost-link"
                    >
                      lekoinpost.com
                    </a>
                  )}
                </p>
              ))}
              <>
                <KoinpostMap onLocationClick={handleLocationClick} />
                <div ref={galleryRef}>
                  <PhotoGallery activeLocationId={activeLocationId} />
                </div>
              </>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
