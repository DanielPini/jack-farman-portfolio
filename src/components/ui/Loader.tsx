import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import "./Loader.css";
import { useLang } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

interface LoaderProps {
  onComplete: () => void;
  isReady: boolean; // true when all videos have enough data to play
}

const MIN_MS = 2500;  // always show at least this long
const MAX_MS = 12000; // give up waiting after this long

export default function Loader({ onComplete, isReady }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef(0);
  const completedRef = useRef(false);
  const isReadyRef = useRef(isReady);
  const { lang } = useLang();
  const loadingText = translations[lang].loader.loading;

  // Keep ref in sync so the interval closure always sees the latest value
  useEffect(() => {
    isReadyRef.current = isReady;
  }, [isReady]);

  useEffect(() => {
    const TICK = 50;
    startTimeRef.current = Date.now();

    const timer = setInterval(() => {
      if (completedRef.current) return;

      const elapsed = Date.now() - startTimeRef.current;

      // Phase 1 (0 → 90 %): time-based over MIN_MS so the bar always moves
      const phase1 = Math.min((elapsed / MIN_MS) * 90, 90);
      setProgress(Math.round(phase1));

      const minPassed = elapsed >= MIN_MS;
      const maxHit   = elapsed >= MAX_MS;

      if ((isReadyRef.current && minPassed) || maxHit) {
        completedRef.current = true;
        clearInterval(timer);
        setProgress(100);
        // Brief pause at 100 % before dismissing
        setTimeout(onComplete, 600);
      }
    }, TICK);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="loader-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      aria-busy={progress < 100}
    >
      {/* Screen reader live region — announces start and completion */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {progress === 0
          ? loadingText
          : progress >= 100
            ? "Loading complete"
            : null}
      </div>

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

      <motion.div
        className="loader-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        aria-hidden="true"
      >
        {loadingText}
      </motion.div>

      <div
        className="loader-progress-container"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={loadingText}
      >
        <motion.div
          className="loader-progress-bar"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>

      <motion.div
        className="loader-percentage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        aria-hidden="true"
      >
        {progress}%
      </motion.div>
    </motion.div>
  );
}
