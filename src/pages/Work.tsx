import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import WorkList from "../components/work/WorkList";
import WorkMedia from "../components/work/WorkMedia";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";
import PageWrapper from "../components/layout/PageWrapper";
import HomeNavigation from "../components/layout/HomeNavigation";
import { useViewport } from "../hooks/useViewport";

export default function Work() {
  const [active, setActive] = useState<Project | null>(projects[0] ?? null);
  const [hoverOffset, setHoverOffset] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { width } = useViewport();
  const isDesktop = width > 768;

  function handleHover(project: Project, titleCenterY: number) {
    setActive(project);
    const containerTop = containerRef.current?.getBoundingClientRect().top ?? 0;
    setHoverOffset(Math.max(0, titleCenterY - containerTop));
  }

  return (
    <PageWrapper>
      <HomeNavigation />
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

          <div className="work-center">
            <div className="work-preview-wrapper" style={{ top: hoverOffset }}>
              <AnimatePresence mode="wait">
                {active && (
                  <WorkMedia
                    key={active.id}
                    src={active.media}
                    project={active}
                  />
                )}
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
                {active.category && (
                  <p className="credits-meta">{active.category}</p>
                )}
                {active.director && (
                  <p className="credits-meta">Directed by {active.director}</p>
                )}
                {active.description && (
                  <p className="credits-description">{active.description}</p>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </PageWrapper>
  );
}
