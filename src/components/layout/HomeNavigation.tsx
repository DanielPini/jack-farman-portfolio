import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";

const MotionLink = motion(Link);
import { useViewport } from "../../hooks/useViewport";
import { useLang } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";
import "./HomeNavigation.css";

function useActivePath() {
  const { pathname } = useLocation();
  return (to: string) => pathname === to || pathname.startsWith(to + "/");
}

function NavPill({ to, label }: { to: string; label: string }) {
  const isActive = useActivePath()(to);

  if (isActive) {
    return (
      <span className="nav-link nav-link--active" aria-current="page">
        {label}
      </span>
    );
  }

  return (
    <MotionLink
      to={to}
      className="nav-link"
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
    >
      {label}
    </MotionLink>
  );
}

function LangSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div
      className="lang-switcher"
      role="group"
      aria-label="Language selection"
    >
      <button
        className={`lang-btn${lang === "en" ? " lang-btn--active" : ""}`}
        onClick={() => setLang("en")}
        aria-label="Switch to English"
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <span className="lang-divider" aria-hidden="true">
        |
      </span>
      <button
        className={`lang-btn${lang === "fr" ? " lang-btn--active" : ""}`}
        onClick={() => setLang("fr")}
        aria-label="Passer en français"
        aria-pressed={lang === "fr"}
      >
        FR
      </button>
    </div>
  );
}

export default function HomeNavigation() {
  const { width } = useViewport();
  const isMobile = width <= 768;
  const { lang } = useLang();
  const t = translations[lang].nav;

  if (isMobile) {
    return (
      <nav className="home-navigation mobile-nav" aria-label="Primary navigation">
        <motion.div className="nav-center" layoutId="jack-farman-text">
          <Link to="/" className="nav-center-link">
            Jack Farman
          </Link>
        </motion.div>

        <div className="nav-buttons">
          <NavPill to="/film-practice" label={t.filmPractice} />
          <NavPill to="/koinpost" label={t.leKoinpost} />
          <NavPill to="/contact" label={t.contact} />
          <LangSwitcher />
        </div>
      </nav>
    );
  }

  return (
    <nav className="home-navigation" aria-label="Primary navigation">
      <div className="nav-left">
        <NavPill to="/film-practice" label={t.filmPractice} />
        <NavPill to="/koinpost" label={t.leKoinpost} />
      </div>

      <motion.div className="nav-center" layoutId="jack-farman-text">
        <Link to="/" className="nav-center-link">
          Jack Farman
        </Link>
      </motion.div>

      <div className="nav-right">
        <NavPill to="/contact" label={t.contact} />
        <LangSwitcher />
      </div>
    </nav>
  );
}
