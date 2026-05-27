import { useEffect, useState } from "react";
import { motion } from "motion/react";
import "./Loader.css";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress over 3 seconds
    const duration = 3000; // 3 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    const increment = 100 / steps;

    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        // Wait a bit before calling onComplete to show 100%
        setTimeout(() => {
          // Animate to nav position
          setTimeout(onComplete, 300);
        }, 300);
        clearInterval(timer);
      } else {
        setProgress(Math.round(currentProgress));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="loader-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Jack Farman brand name */}
      <motion.div
        className="loader-brand"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        layout
        layoutId="jack-farman-text"
      >
        Jack Farman
      </motion.div>

      {/* Loading text */}
      <motion.div
        className="loader-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Loading
      </motion.div>

      {/* Progress bar container */}
      <div className="loader-progress-container">
        {/* Animated progress bar */}
        <motion.div
          className="loader-progress-bar"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>

      {/* Progress percentage */}
      <motion.div
        className="loader-percentage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {progress}%
      </motion.div>
    </motion.div>
  );
}
