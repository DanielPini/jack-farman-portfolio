import { motion } from "motion/react";
import type { Project } from "../../data/projects";

type Props = {
  project: Project;
  onClose: () => void; // Callback to close the overlay
};

export default function WorkInfoOverlay({ project, onClose }: Props) {
  return (
    // Dark overlay background
    <motion.div
      className="work-info-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      {/* Modal content container */}
      <motion.div
        className="work-info-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()} // Don't close when clicking inside
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "40px",
          maxWidth: "600px",
          width: "90%",
          maxHeight: "80vh",
          overflowY: "auto",
          position: "relative",
        }}
      >
        {/* Close button */}
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "none",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            padding: "0",
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Close overlay"
        >
          ✕
        </motion.button>

        {/* Project information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 style={{ marginTop: 0, marginBottom: "10px" }}>
            {project.title}
          </h2>

          {/* Project metadata */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "20px",
              fontSize: "14px",
              color: "#666",
            }}
          >
            <span>Year: {project.year}</span>
            {project.client && <span>Client: {project.client}</span>}
            {project.director && <span>Director: {project.director}</span>}
            <span>Type: {project.type}</span>
          </div>

          {/* Project media (if available) */}
          <div style={{ marginBottom: "20px" }}>
            {project.type === "image" ? (
              <img
                src={project.media}
                alt={project.title}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
              />
            ) : (
              <video
                src={project.media}
                controls
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
              />
            )}
          </div>

          {/* Description or additional info */}
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            This is a {project.type} project from {project.year}.
            {project.client && ` Created for ${project.client}.`}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
