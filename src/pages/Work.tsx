import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import WorkList from "../components/work/WorkList";
import WorkPreview from "../components/work/WorkPreview";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";
import PageWrapper from "../components/layout/PageWrapper";
import { useViewport } from "../hooks/useViewport";
import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Work() {
  const [active, setActive] = useState<Project | null>(projects[0] ?? null);
  const [hoverOffset, setHoverOffset] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const centerRef = useRef<HTMLDivElement | null>(null);
  const { width } = useViewport();
  const isDesktop = width > 768;
  const { lang } = useLang();
  const t = translations[lang].filmPractice;

  function handleHover(project: Project, titleCenterY: number) {
    setActive(project);
    const refEl = centerRef.current ?? containerRef.current;
    const refTop = refEl?.getBoundingClientRect().top ?? 0;
    setHoverOffset(Math.max(0, titleCenterY - refTop));
  }

  return (
    <PageWrapper>
      <div className="page work-page">
        <motion.div
          className="work-container"
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="work-left">
            <WorkList onHover={handleHover} />
          </div>

          <div className="work-center" ref={centerRef}>
            <div className="work-preview-wrapper" style={{ top: hoverOffset }}>
              <AnimatePresence mode="wait">
                {active?.images?.length ? (
                  <WorkPreview
                    key={active.id}
                    images={active.images}
                    title={active.title}
                  />
                ) : null}
              </AnimatePresence>
            </div>
          </div>

          {isDesktop && active && (
            <motion.div
              className="work-right"
              style={{ top: hoverOffset }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="work-credits">
                <h3 className="credits-title">{active.title}</h3>
                {active.year && <p className="credits-meta">{active.year}</p>}
                {active.screenings && active.screenings.length > 0 ? (
                  <>
                    <span className="credits-screenings-label">{t.screenings}</span>
                    <ul className="credits-screenings">
                      {active.screenings.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </>
                ) : active.description ? (
                  <p className="credits-description">{active.description}</p>
                ) : null}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </PageWrapper>
  );
}
