import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data/projects";
import Loader from "../components/ui/Loader";
import HomeNavigation from "../components/layout/HomeNavigation";
import VideoPlayer from "../components/ui/VideoPlayer";

const SESSION_KEY = "jf-loader-shown";

export default function Home() {
  const [isLoading, setIsLoading] = useState(
    () => sessionStorage.getItem(SESSION_KEY) !== "true",
  );

  function handleLoaderComplete() {
    sessionStorage.setItem(SESSION_KEY, "true");
    setIsLoading(false);
  }

  return (
    <div className="home-wrapper">
      <AnimatePresence>
        {isLoading ? (
          <Loader key="loader" onComplete={handleLoaderComplete} />
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
