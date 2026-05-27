import { useState } from "react";
import { motion } from "motion/react";
import { useViewport } from "../../hooks/useViewport";

interface MarqueeProps {
  text: string; // The text to scroll
  speed?: number; // Animation speed in seconds (default: 20)
  direction?: "left" | "right"; // Direction: left or right (default: left)
  pauseOnHover?: boolean; // Pause animation on hover (default: true)
  repeatCount?: number; // How many times to repeat the text (default: 3)
}

export default function Marquee({
  text,
  speed = 20,
  direction = "left",
  pauseOnHover = true,
  repeatCount = 3,
}: MarqueeProps) {
  // Get viewport information to adjust marquee behavior on mobile
  const { isMobile } = useViewport();

  // State to track if the user is hovering over the marquee
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Adjust speed for mobile devices (make it slower for better readability)
  const adjustedSpeed = isMobile ? speed * 1.5 : speed;

  // Animation configuration for the marquee
  // We'll use this in the motion.div below
  const animationConfig = {
    duration: adjustedSpeed,
    repeat: Infinity, // Loop forever
    repeatType: "loop" as const, // Reset position and start again (not reverse)
    ease: "linear" as const, // Constant speed (not easing in/out)
  };

  return (
    <div className="marquee-container" style={{ overflow: "hidden" }}>
      {/* Animated scrolling container */}
      <motion.div
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        animate={{
          x: isPaused ? 0 : direction === "left" ? -1000 : 1000,
        }}
        transition={isPaused ? { duration: 0 } : animationConfig}
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          gap: "2rem",
        }}
      >
        {/* Repeat the text content multiple times for seamless looping */}
        {Array.from({ length: repeatCount }).map((_, index) => (
          <span key={index} style={{ flexShrink: 0 }}>
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
