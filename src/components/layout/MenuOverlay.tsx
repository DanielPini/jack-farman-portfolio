import { motion } from "motion/react";
import { Link } from "react-router-dom";

type Props = {
  onClose: () => void; // Callback to close the menu
};

// Define the menu items as a constant array
// Using 'as const' makes TypeScript infer the exact literal types
const menuItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
] as const;

export default function MenuOverlay({ onClose }: Props) {
  return (
    // Full-screen overlay background
    <motion.div
      className="menu-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 999,
      }}
    >
      {/* Menu content container - stops click propagation */}
      <motion.div
        className="menu-content"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "absolute",
          top: "60px",
          right: "20px",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Menu list */}
        <nav>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {/* Map through menu items to create links */}
            {menuItems.map((item, index) => (
              <motion.li
                key={item.path}
                // Stagger animation: each item appears sequentially
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{ marginBottom: "10px" }}
              >
                <Link
                  to={item.path}
                  onClick={onClose}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    fontSize: "16px",
                  }}
                >
                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: "inline-block" }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </motion.div>
  );
}
