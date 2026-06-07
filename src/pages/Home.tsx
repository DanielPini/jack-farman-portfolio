import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data/projects";
import Loader from "../components/ui/Loader";
import HomeNavigation from "../components/layout/HomeNavigation";
import VideoPlayer from "../components/ui/VideoPlayer";

// Resets on every real page load / hard refresh; survives SPA back-navigation.
let hasLoadedOnce = false;

export default function Home() {
  const [isLoading, setIsLoading] = useState(!hasLoadedOnce);

  function handleLoaderComplete() {
    hasLoadedOnce = true;
    setIsLoading(false);
  }

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <AnimatePresence>
        {isLoading ? (
          <Loader key="loader" onComplete={handleLoaderComplete} />
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ height: "100vh" }}
          >
            <VideoPlayer projects={projects} />
            <HomeNavigation />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
