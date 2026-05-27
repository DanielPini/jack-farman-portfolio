import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data/projects";
import Loader from "../components/ui/Loader";
import HomeNavigation from "../components/layout/HomeNavigation";
import VideoPlayer from "../components/ui/VideoPlayer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(() => {
    // Check if loader has already been shown in this session
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");
    return !hasSeenLoader; // Show loader only if not seen
  });

  // Show loading screen for 3 seconds on first load
  useEffect(() => {
    if (!isLoading) return; // Skip if loader already shown

    const timer = setTimeout(() => {
      sessionStorage.setItem("hasSeenLoader", "true");
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <AnimatePresence>
        {isLoading ? (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ height: "100vh" }}
          >
            {/* Video background player */}
            <VideoPlayer projects={projects} />

            {/* Navigation overlay */}
            <HomeNavigation />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
