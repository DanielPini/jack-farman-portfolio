import { motion } from "motion/react";
import { useRef, useState } from "react";
import PageWrapper from "../components/layout/PageWrapper";
import KoinpostMap from "../components/koinpost/KoinpostMap";
import PhotoGallery from "../components/koinpost/PhotoGallery";

const paragraphs = [
  "Koinpost is a collective composting platform that operates at the scale of the neighbourhood. It is at once an act of urban gardening, a lived experience of decomposition as life cycle, and a tool for building more connected local territories.",
  "Born from the same questions that drive my film practice, Koinpost translates narrative into infrastructure, turning the gestures of care and repair into something people can participate in together.",
  "Learn more at ",
];

export default function LeKoinpost() {
  const [activeLocationId, setActiveLocationId] = useState<string | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleLocationClick = (locationId: string) => {
    setActiveLocationId(locationId);
    setTimeout(() => {
      galleryRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <PageWrapper>
      <div className="page">
        <motion.div
          className="koinpost-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="koinpost-content">
            <motion.div
              className="koinpost-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3>Le Koinpost</h3>
              {paragraphs.map((text, index) => (
                <p key={index}>
                  {text}
                  {index === paragraphs.length - 1 && (
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
              <KoinpostMap onLocationClick={handleLocationClick} />
              <div ref={galleryRef}>
                <PhotoGallery activeLocationId={activeLocationId} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
