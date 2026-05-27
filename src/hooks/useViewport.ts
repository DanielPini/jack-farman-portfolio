import { useState, useEffect } from "react";

interface ViewportSize {
  width: number;
  height: number;
  isMobile: boolean; // true if width < 768px
  isTablet: boolean; // true if width >= 768px and < 1024px
  isDesktop: boolean; // true if width >= 1024px
}

// Custom useViewport hook
export function useViewport(): ViewportSize {
  // useState for viewport
  const [viewport, setViewport] = useState<ViewportSize>({
    width: typeof window !== "undefined" ? window.innerWidth : 1024,
    height: typeof window !== "undefined" ? window.innerHeight : 768,
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  });

  useEffect(() => {
    // This function will be called whenever the window is resized
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Determine which breakpoint we're at
      // These match common Tailwind CSS breakpoints
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;

      // Update the state with new viewport information
      setViewport({
        width,
        height,
        isMobile,
        isTablet,
        isDesktop,
      });
    };

    // Add an event listener to the window resize event
    window.addEventListener("resize", handleResize);

    // Call handleResize immediately to set initial values
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this runs only once on mount

  // Return the viewport state so components can use it
  return viewport;
}
