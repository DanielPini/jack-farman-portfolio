import { useEffect, useRef } from "react";
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

  const videoProjects = projects
    .filter((p) => p.type === "video" && p.slug !== "especes-pionnieres")
    .slice(0, 3);

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
                src={encodeURI(project.media)}
                style={{ background: fallbackBackground }}
              />
              <div className="video-info-overlay">
                <div className="video-title">{project.title}</div>
                <div className="video-meta">
                  {project.year} • {project.category || "Film"}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
