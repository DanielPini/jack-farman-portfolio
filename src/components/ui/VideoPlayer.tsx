import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import type { Project } from "../../data/projects";
import "./VideoPlayer.css";
import "../../styles/globals.css";

interface VideoPlayerProps {
  projects: Project[];
}

interface VideoState {
  progress: number;
}

function getColorFromText(text: string, seed: number) {
  let hash = seed;
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 31 + text.charCodeAt(i)) & 0xffffff;
  }
  return hash.toString(16).padStart(6, "0");
}

export default function VideoPlayer({ projects }: VideoPlayerProps) {
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [videoStates, setVideoStates] = useState<VideoState[]>([
    { progress: 0 },
    { progress: 0 },
    { progress: 0 },
  ]);

  const videoProjects = projects
    .filter((p) => p.type === "video" && p.slug !== "especes-pionnieres")
    .slice(0, 3);

  // Each video has independent progress tracking
  useEffect(() => {
    if (videoProjects.length === 0) return;

    const duration = 5000;
    const intervalTime = 50;
    const increment = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setVideoStates((prevStates) =>
        prevStates.map((state) => ({
          progress: state.progress >= 100 ? 0 : state.progress + increment,
        })),
      );
    }, intervalTime);

    return () => clearInterval(timer);
  }, [videoProjects.length]);

  // Sync videos with their progress
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video && videoProjects[index]) {
        video.load();
        video.play().catch(() => {
          console.log("Autoplay blocked by browser");
        });
      }
    });
  }, [videoProjects]);

  if (videoProjects.length === 0) return null;

  return (
    <div className="video-player">
      {/* Three concurrent video elements */}
      <div className="video-background-container">
        {videoProjects.map((project, index) => {
          const fallbackBackground = `linear-gradient(135deg, #${getColorFromText(
            project?.title || "Loading",
            0x123456 + index,
          )}, #${getColorFromText(project?.title || "Loading", 0xabcdef + index)})`;

          return (
            <video
              key={project.id}
              ref={(el) => {
                if (el) videoRefs.current[index] = el;
              }}
              autoPlay
              muted
              playsInline
              preload="metadata"
              className="video-background-window"
              src={encodeURI(project.media)}
              style={{ background: fallbackBackground }}
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
                  fontSize: "1.5rem",
                }}
              >
                {project.title}
              </div>
            </video>
          );
        })}
      </div>

      {/* Overlay with video info */}
      <motion.div
        className="video-overlay"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {/* Desktop: 3 video windows in horizontal layout */}
        <div className="desktop-video-sections">
          {videoProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="video-section active"
              whileHover={{ scale: 1.02 }}
            >
              <div className="video-progress">
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${videoStates[index]?.progress || 0}%` }}
                  transition={{ ease: "linear", duration: 0.05 }}
                />
              </div>
              <div className="video-title">{project.title}</div>
              <div className="video-meta">
                {project.year} • {project.category || "Film"}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Vertical stack */}
        <div className="mobile-video-section">
          {videoProjects.map((project, index) => (
            <motion.div key={project.id} className="video-section active">
              <div className="video-progress">
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${videoStates[index]?.progress || 0}%` }}
                  transition={{ ease: "linear", duration: 0.05 }}
                />
              </div>
              <div className="video-title">{project.title}</div>
              <div className="video-meta">
                {project.year} • {project.category || "Film"}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
