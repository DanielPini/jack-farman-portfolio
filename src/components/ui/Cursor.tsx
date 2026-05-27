import { useEffect, useState } from "react";
import { motion } from "motion/react";

// TypeScript interface for mouse position coordinates
interface MousePosition {
  x: number;
  y: number;
}

export default function Cursor() {
  // State to track the current mouse position
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  // State to track if user is hovering over interactive elements
  const [isHoveringInteractive, setIsHoveringInteractive] =
    useState<boolean>(false);

  // Effect hook to listen for mouse movement
  useEffect(() => {
    // This function runs every time the mouse moves
    const handleMouseMove = (event: MouseEvent) => {
      // Update state with current mouse coordinates
      // event.clientX is the horizontal position
      // event.clientY is the vertical position
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    // Handler to detect when hovering over clickable elements
    const handleMouseEnter = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Check if the hovered element is interactive (button, link, etc.)
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") !== null ||
        target.closest("a") !== null;

      setIsHoveringInteractive(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsHoveringInteractive(false);
    };

    // Add event listeners for mouse movement
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    // Cleanup: Remove event listeners when component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      {/* Main cursor circle */}
      <motion.div
        className="cursor-main"
        animate={{
          x: mousePosition.x - 12, // Center the cursor (24px / 2 = 12)
          y: mousePosition.y - 12,
          scale: isHoveringInteractive ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        style={{
          position: "fixed",
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          border: "2px solid black",
          pointerEvents: "none", // Don't interfere with clicking
          zIndex: 9999,
          top: 0,
          left: 0,
        }}
      />

      {/* Cursor dot (trailing effect) */}
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePosition.x - 4, // Center a smaller dot (8px / 2 = 4)
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: 0.1, // Delay creates trailing effect
        }}
        style={{
          position: "fixed",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "black",
          pointerEvents: "none",
          zIndex: 9998,
          top: 0,
          left: 0,
        }}
      />
    </>
  );
}
