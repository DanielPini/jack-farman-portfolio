import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data/projects";
import Loader from "../components/ui/Loader";
import HomeNavigation from "../components/layout/HomeNavigation";
import VideoPlayer from "../components/ui/VideoPlayer";

const SESSION_KEY = "jf-loader-shown";

const PRELOAD_SRCS = [
  "/videos/Part_I_(faire_oeuvre_faire_ecosysteme).webm",
  "/videos/Part_II_(exposome).webm",
  "/videos/Part_III_(eaux_et_pays).webm",
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(
    () => sessionStorage.getItem(SESSION_KEY) !== "true",
  );
  const [videosReady, setVideosReady] = useState(0);
  const readySrcs = useRef(new Set<string>());

  const isReady = videosReady >= PRELOAD_SRCS.length;

  function handleCanPlay(src: string) {
    if (!readySrcs.current.has(src)) {
      readySrcs.current.add(src);
      setVideosReady(readySrcs.current.size);
    }
  }

  function handleLoaderComplete() {
    sessionStorage.setItem(SESSION_KEY, "true");
    setIsLoading(false);
  }

  return (
    <div className="home-wrapper">
      {/* Hidden video elements load data in parallel with the loader.
          Once unmounted the browser cache means VideoPlayer loads instantly. */}
      {isLoading &&
        PRELOAD_SRCS.map((src) => (
          <video
            key={src}
            src={src}
            preload="auto"
            muted
            playsInline
            style={{ display: "none" }}
            onCanPlay={() => handleCanPlay(src)}
          />
        ))}

      <AnimatePresence>
        {isLoading ? (
          <Loader
            key="loader"
            onComplete={handleLoaderComplete}
            isReady={isReady}
          />
        ) : (
          <motion.div
            key="home"
            className="home-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <VideoPlayer projects={projects} />
            <HomeNavigation />
            <footer className="site-footer site-footer--home">
              Website by{" "}
              <a
                href="https://danielpini.com"
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer-link"
              >
                Daniel Pini
              </a>{" "}
              2026
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
