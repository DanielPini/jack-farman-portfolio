import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import type { Project } from "../../data/projects";
import "./VideoPlayer.css";
import "../../styles/globals.css";

interface VideoPlayerProps {
  projects: Project[];
}

function getColorFromText(text: string, seed: number) {
  let hash = seed;
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 31 + text.charCodeAt(i)) & 0xffffff;
  }
  return hash.toString(16).padStart(6, "0");
}

export default function VideoPlayer({ projects }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const videoProjects = projects
    .filter((p) => p.type === "video" && p.slug !== "especes-pionnieres")
    .slice(0, 3);
  const currentProject = videoProjects[currentProjectIndex] || videoProjects[0];

  const fallbackBackground = `linear-gradient(135deg, #${getColorFromText(
    currentProject?.title || "Loading",
    0x123456,
  )}, #${getColorFromText(currentProject?.title || "Loading", 0xabcdef)})`;

  // Modular function: handles all video switching logic
  const handleSwitch = (index: number) => {
    setProgress(0);
    setCurrentProjectIndex(index);
  };

  // Logic 1: The Progress Interval (Handling Stale Closures)
  useEffect(() => {
    if (videoProjects.length === 0) return;

    const duration = 5000;
    const intervalTime = 50;
    const increment = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleSwitch((currentProjectIndex + 1) % videoProjects.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [currentProjectIndex, videoProjects.length]);

  // Logic 2: The Physical Video Sync
  useEffect(() => {
    const video = videoRef.current;
    if (video && currentProject) {
      video.currentTime = 0;
      video.load();
      video.play().catch(() => {
        console.log("Autoplay blocked by browser");
      });
    }
  }, [currentProjectIndex, currentProject]);

  if (videoProjects.length === 0) return null;

  return (
    <div className="video-player">
      {/* 
          TEACHING POINT: Using 'key' on the video tag forces a full re-mount 
          when the source changes, which is more reliable for testing and browsers.
      */}
      <video
        ref={videoRef}
        key={currentProject.id}
        autoPlay
        muted
        playsInline
        preload="metadata"
        className="video-background"
        src={encodeURI(currentProject.media)}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: fallbackBackground,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "2rem",
          }}
        >
          {currentProject.title}
        </div>
      </video>

      <motion.div
        className="video-overlay"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {/* Desktop: Grid of sections */}
        <div className="desktop-video-sections">
          {videoProjects.map((project, index) => {
            const isActive = index === currentProjectIndex;
            return (
              <motion.div
                key={project.id}
                className={`video-section ${isActive ? "active" : "inactive"}`}
                onClick={() => handleSwitch(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="video-progress">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? `${progress}%` : "0%" }}
                    transition={{ ease: "linear", duration: 0.05 }}
                  />
                </div>

                <div className="video-title">{project.title}</div>
                <div className="video-meta">
                  {project.year} • {project.category || "Film"}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Pagination buttons and active info */}
        <div className="mobile-video-section">
          <div className="video-indicators">
            {videoProjects.map((_, index) => (
              <motion.button
                key={index}
                className={`video-indicator ${
                  index === currentProjectIndex ? "active" : ""
                }`}
                onClick={() => handleSwitch(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {index + 1}
              </motion.button>
            ))}
          </div>

          <div className="video-section active">
            <div className="video-progress">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.05 }}
              />
            </div>

            <div className="video-title">{currentProject.title}</div>
            <div className="video-meta">
              {currentProject.year} • {currentProject.category || "Film"}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
