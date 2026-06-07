import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { useViewport } from "../../hooks/useViewport";
import "./HomeNavigation.css";

const NAV_LINKS = [
  { to: "/film-practice", label: "Film Practice" },
  { to: "/koinpost", label: "Le Koinpost" },
  { to: "/consulting", label: "Consulting" },
  { to: "/contact", label: "Contact" },
] as const;

function useActivePath() {
  const { pathname } = useLocation();
  return (to: string) => pathname === to || pathname.startsWith(to + "/");
}

function NavPill({ to, label }: { to: string; label: string }) {
  const isActive = useActivePath()(to);

  if (isActive) {
    return <span className="nav-link nav-link--active">{label}</span>;
  }

  return (
    <motion.div whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.975 }}>
      <Link to={to} className="nav-link">
        {label}
      </Link>
    </motion.div>
  );
}

export default function HomeNavigation() {
  const { width } = useViewport();
  const isMobile = width <= 768;

  if (isMobile) {
    return (
      <nav className="home-navigation mobile-nav">
        <motion.div className="nav-center" layoutId="jack-farman-text">
          <Link to="/" className="nav-center-link">
            Jack Farman
          </Link>
        </motion.div>

        <div className="nav-buttons">
          {NAV_LINKS.map(({ to, label }) => (
            <NavPill key={to} to={to} label={label} />
          ))}
        </div>
      </nav>
    );
  }

  return (
    <nav className="home-navigation">
      <div className="nav-left">
        <NavPill to="/film-practice" label="Film Practice" />
        <NavPill to="/koinpost" label="Le Koinpost" />
      </div>

      <motion.div className="nav-center" layoutId="jack-farman-text">
        <Link to="/" className="nav-center-link">
          Jack Farman
        </Link>
      </motion.div>

      <div className="nav-right">
        <NavPill to="/consulting" label="Consulting" />
        <NavPill to="/contact" label="Contact" />
      </div>
    </nav>
  );
}
