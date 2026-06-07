import { motion } from "motion/react";
import PageWrapper from "../components/layout/PageWrapper";
import { videoPosters } from "../data/videoPosters";

export default function LeKoinpost() {
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
                src="/videos/LeKoinpost_FILM.webm"
                autoPlay
                muted
                loop
                controls
                playsInline
                preload="metadata"
                poster={videoPosters["/videos/LeKoinpost_FILM.webm"]}
                className="work-media-video"
              />

              <div className="koinpost-inline-images">
                {[
                  "/images/LEKOINPOST-CONTENT-NICKYRODING-2025-2.webp",
                  "/images/LEKOINPOST-CONTENT-NICKYRODING-2025-7.webp",
                  "/images/LEKOINPOST-CONTENT-NICKYRODING-2025-11.webp",
                ].map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
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
