import { useEffect, useRef, useState } from "react";
import type { Project } from "../../data/projects";
import "./VideoPlayer.css";

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
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [activeSound, setActiveSound] = useState<number | null>(null);

  const videoProjects = projects
    .filter((p) => p.videos?.length && p.slug !== "especes-pionnieres")
    .slice(0, 3);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video && videoProjects[index]) {
        video.load();
        video.play().catch(() => {});
      }
    });
  }, [videoProjects]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (video) video.muted = activeSound !== i;
    });
  }, [activeSound]);

  function toggleSound(index: number) {
    setActiveSound((prev) => (prev === index ? null : index));
  }

  if (videoProjects.length === 0) return null;

  return (
    <div className="video-player">
      <div className="video-background-container">
        {videoProjects.map((project, index) => {
          const fallbackBackground = `linear-gradient(135deg, #${getColorFromText(
            project?.title || "Loading",
            0x123456 + index,
          )}, #${getColorFromText(project?.title || "Loading", 0xabcdef + index)})`;

          return (
            <div key={project.id} className="video-window-wrapper">
              <video
                ref={(el) => {
                  if (el) videoRefs.current[index] = el;
                }}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="video-background-window"
                src={encodeURI(project.videos![0])}
                style={{ background: fallbackBackground }}
              />
              <div className="video-info-overlay">
                <div className="video-title">{project.title}</div>
                <div className="video-meta">
                  {project.year} • {project.category || "Film"}
                </div>
              </div>
              <button
                className={`video-sound-btn${activeSound === index ? " video-sound-btn--active" : ""}`}
                onClick={() => toggleSound(index)}
                aria-label={activeSound === index ? "Mute" : "Unmute"}
              >
                {activeSound === index ? "Mute" : "Unmute"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
