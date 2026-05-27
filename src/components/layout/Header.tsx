import { useState } from "react";
import { motion } from "motion/react";
import MenuOverlay from "./MenuOverlay";

export default function Header() {
  // State to control whether the menu is open or closed
  // This is a simple boolean: true = menu is open, false = menu is closed
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <header className="header">
        <div className="header-content">
          {/* Logo/Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="logo"
          >
            <h1>Portfolio</h1>
          </motion.div>

          {/* Menu Button - Hamburger/Close icon */}
          <motion.button
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {/* Animated hamburger menu icon */}
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {/* Top line of hamburger - rotates when menu opens */}
              <motion.line
                x1="3"
                y1="6"
                x2="21"
                y2="6"
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 9 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ originX: "50%", originY: "50%" }}
              />
              {/* Middle line - fades out when menu opens */}
              <motion.line
                x1="3"
                y1="12"
                x2="21"
                y2="12"
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              {/* Bottom line - rotates opposite when menu opens */}
              <motion.line
                x1="3"
                y1="18"
                x2="21"
                y2="18"
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -9 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ originX: "50%", originY: "50%" }}
              />
            </motion.svg>
          </motion.button>
        </div>
      </header>

      {/* Render the menu overlay if menu is open */}
      {isMenuOpen && <MenuOverlay onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}
