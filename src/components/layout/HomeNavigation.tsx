import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useViewport } from "../../hooks/useViewport";
import "./HomeNavigation.css";

export default function HomeNavigation() {
  const { width } = useViewport();
  const isMobile = width <= 768;

  const navProps = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.5 },
  };

  if (isMobile) {
    return (
      <motion.nav className="home-navigation mobile-nav" {...navProps}>
        <motion.div className="nav-center" layoutId="jack-farman-text">
          <Link to="/" className="nav-center-link">
            Jack Farman
          </Link>
        </motion.div>

        <div className="nav-buttons">
          <Link to="/film-practice" className="nav-link">
            Film Practice
          </Link>
          <Link to="/koinpost" className="nav-link">
            Le Koinpost
          </Link>
          <Link to="/consulting" className="nav-link">
            Consulting
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      </motion.nav>
    );
  }

  return (
    <motion.nav className="home-navigation" {...navProps}>
      <div className="nav-left">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/film-practice" className="nav-link">
            Film Practice
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/koinpost" className="nav-link">
            Le Koinpost
          </Link>
        </motion.div>
      </div>

      <motion.div className="nav-center" layoutId="jack-farman-text">
        <Link to="/" className="nav-center-link">
          Jack Farman
        </Link>
      </motion.div>

      <div className="nav-right">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/consulting" className="nav-link">
            Consulting
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}
