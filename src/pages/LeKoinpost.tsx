import { useState } from "react";
import { motion } from "motion/react";
import PageWrapper from "../components/layout/PageWrapper";
import { videoPosters, videoProperPosters } from "../data/videoPosters";

const KOINPOST_SRC = "/videos/LeKoinpost_FILM.webm";

const NICKY_RODING_IMAGES = [
  {
    src: "/images/LEKOINPOST-CONTENT-NICKYRODING-2025-2.webp",
    alt: "A full Le Koinpost paper compost bag on a windowsill. Photo by Nicky Roding, 2025.",
  },
  {
    src: "/images/LEKOINPOST-CONTENT-NICKYRODING-2025-7.webp",
    alt: "A Le Koinpost paper compost bag being emptied at a local compost site. Photo by Nicky Roding, 2025.",
  },
  {
    src: "/images/LEKOINPOST-CONTENT-NICKYRODING-2025-11.webp",
    alt: "A Le Koinpost paper compost bag displayed in an outstretched hand. Photo by Nicky Roding, 2025.",
  },
];

export default function LeKoinpost() {
  const [posterSrc, setPosterSrc] = useState<string | undefined>(
    videoPosters[KOINPOST_SRC],
  );

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
              <video
                src={KOINPOST_SRC}
                autoPlay
                muted
                loop
                controls
                playsInline
                preload="metadata"
                poster={posterSrc}
                aria-label="Le Koinpost — short film by Jack Farman"
                onCanPlay={() => setPosterSrc(videoProperPosters[KOINPOST_SRC])}
                className="work-media-video"
              />

              <div className="koinpost-inline-images">
                {NICKY_RODING_IMAGES.map(({ src, alt }) => (
                  <img
                    key={src}
                    src={src}
                    alt={alt}
                    className="koinpost-inline-img"
                  />
                ))}
              </div>

              <a
                href="https://lekoinpost.com"
                target="_blank"
                rel="noopener noreferrer"
                className="koinpost-link"
              >
                lekoinpost.com
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
