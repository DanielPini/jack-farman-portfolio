import { useState } from "react";
import { motion } from "motion/react";
import type { Project } from "../../data/projects";
import { videoPosters, videoProperPosters } from "../../data/videoPosters";

type Props = {
  src: string;
  project?: Project;
};

const isVideo = (src: string) =>
  src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov");

export default function WorkMedia({ src, project }: Props) {
  const [posterSrc, setPosterSrc] = useState<string | undefined>(
    videoPosters[src] ?? undefined,
  );
  const mediaSrc = encodeURI(src);

  return (
    <motion.div
      className="work-media-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      {isVideo(src) ? (
        <video
          src={mediaSrc}
          controls
          playsInline
          preload="metadata"
          poster={posterSrc}
          aria-label={project?.title ?? "Film"}
          onCanPlay={() => {
            const proper = videoProperPosters[src];
            if (proper) setPosterSrc(proper);
          }}
          className="work-media-video"
        />
      ) : (
        <img
          src={src}
          alt={project?.title ?? "Project image"}
          className="work-media-image"
        />
      )}
    </motion.div>
  );
}
