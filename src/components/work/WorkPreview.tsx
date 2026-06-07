import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface WorkPreviewProps {
  images: string[];
  title: string;
}

const INTERVAL_MS = 3000;

export default function WorkPreview({ images, title }: WorkPreviewProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [images]);

  if (!images.length) return null;

  return (
    <motion.div
      className="work-media-container"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={title}
          className="work-media-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      </AnimatePresence>
    </motion.div>
  );
}
