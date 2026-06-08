import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import type { Project } from "../../data/projects";

type Props = {
  project: Project;
  onClose: () => void;
};

export default function WorkInfoOverlay({ project, onClose }: Props) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const overlayId = "work-info-dialog";
  const titleId = "work-info-title";

  // Focus the close button when the overlay opens
  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
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
      aria-hidden="true"
    >
      <motion.div
        id={overlayId}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="work-info-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        aria-hidden="false"
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
        <motion.button
          ref={closeButtonRef}
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
          aria-label="Close dialog"
        >
          ✕
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 id={titleId} style={{ marginTop: 0, marginBottom: "10px" }}>
            {project.title}
          </h2>

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
          </div>

          {project.images?.[0] && (
            <div style={{ marginBottom: "20px" }}>
              <img
                src={project.images[0]}
                alt={project.title}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
              />
            </div>
          )}

          <p style={{ color: "#555", lineHeight: "1.6" }}>
            {project.description}
            {project.client && ` Created for ${project.client}.`}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
