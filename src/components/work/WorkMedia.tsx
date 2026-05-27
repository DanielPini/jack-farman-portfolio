import { motion } from "motion/react";
import type { Project } from "../../data/projects";

type Props = {
  src: string;
  project?: Project;
};

export default function WorkMedia({ src, project }: Props) {
  const mediaSrc = encodeURI(src);

  return (
    <motion.div
      className="work-media-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      {src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov") ? (
        <video
          src={mediaSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="work-media-video"
        />
      ) : (
        <img
          src={src}
          alt={project?.title || "Project media"}
          className="work-media-image"
        />
      )}
    </motion.div>
  );
}
