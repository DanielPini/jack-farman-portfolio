import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { useMemo, useRef, useState, type ReactNode } from "react";
import PageWrapper from "../components/layout/PageWrapper";
import WorkMedia from "../components/work/WorkMedia";
import { projects, type ContentBlock } from "../data/projects";
import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const footnoteMarkers: Record<string, string> = {
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
};

function renderParagraphText(text: string) {
  const parts: Array<string | ReactNode> = [];
  let lastIndex = 0;
  const regex = /[¹²³⁴⁵]/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    parts.push(text.slice(lastIndex, match.index));
    const marker = match[0];
    const number = footnoteMarkers[marker] || marker;
    parts.push(
      <a
        key={`footnote-ref-${match.index}`}
        href={`#footnote-${number}`}
        className="footnote-ref"
      >
        <sup>{marker}</sup>
      </a>,
    );
    lastIndex = match.index + marker.length;
  }

  parts.push(text.slice(lastIndex));
  return parts;
}

export default function ProjectPage() {
  const { slug } = useParams();
  const { lang } = useLang();
  const t = translations[lang].project;
  const tFilm = translations[lang].filmPractice;

  const project = projects.find(
    (project) => project.slug === slug || String(project.id) === slug,
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const sections = useMemo(() => {
    if (!project) return [];
    const localSections =
      lang === "fr" && project.sectionsFr?.length
        ? project.sectionsFr
        : project.sections;
    if (localSections && localSections.length > 0) {
      return localSections;
    }
    const content =
      lang === "fr" && project.contentFr?.length
        ? project.contentFr
        : project.content;
    return [{ title: project.title, content: content ?? [] }];
  }, [project, lang]);

  const activeSection = sections[activeIndex] ?? sections[0];

  function handleTabKeyDown(e: React.KeyboardEvent, index: number) {
    const count = sections.length;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = (index + 1) % count;
      setActiveIndex(next);
      tabRefs.current[next]?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prev = (index - 1 + count) % count;
      setActiveIndex(prev);
      tabRefs.current[prev]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveIndex(0);
      tabRefs.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveIndex(count - 1);
      tabRefs.current[count - 1]?.focus();
    }
  }

  const description =
    lang === "fr" && project?.descriptionFr
      ? project.descriptionFr
      : project?.description;

  const footnotes =
    lang === "fr" && project?.footnotesFr?.length
      ? project.footnotesFr
      : project?.footnotes;

  const relatedFilms = useMemo(
    () =>
      project?.slug === "especes-pionnieres"
        ? projects.filter(
            (item) =>
              item.slug?.startsWith("especes-pionnieres-part") ||
              item.slug === "especes-pionnieres",
          )
        : [],
    [project],
  );

  function renderBlock(block: ContentBlock, index: number) {
    switch (block.type) {
      case "heading":
        return (
          <h2 key={index} className="project-block-heading">
            {block.text}
          </h2>
        );
      case "paragraph":
        return (
          <p key={index} className="project-block-paragraph">
            {renderParagraphText(block.text)}
          </p>
        );
      case "image":
        return (
          <div key={index} className="project-block-media">
            <img src={block.src} alt={block.caption ?? project?.title ?? "Project image"} />
            {block.caption && (
              <p className="project-block-caption">{block.caption}</p>
            )}
          </div>
        );
      case "video":
        return (
          <div key={index} className="project-block-media">
            <WorkMedia src={block.src} project={project} />
            {block.caption && (
              <p className="project-block-caption">{block.caption}</p>
            )}
          </div>
        );
      default:
        return null;
    }
  }

  if (!project) {
    return (
      <PageWrapper>
        <div className="page project-page project-not-found">
          <div className="project-header">
            <h1>{t.notFound}</h1>
            <p>{t.notFoundBody}</p>
            <Link to="/film-practice" className="button button-secondary">
              {tFilm.backToList}
            </Link>
          </div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper key={project?.slug}>
      <div className="page project-page">
        <div className="project-hero">
          <div className="project-header">
            <div className="project-kicker">{t.kicker}</div>
            <h1>{project.title}</h1>
            <p className="project-meta">
              {project.year} • {project.category}
              {project.director ? ` • ${tFilm.directedBy} ${project.director}` : ""}
            </p>
            {description && (
              <p className="project-description">{description}</p>
            )}
            <Link to="/film-practice" className="button button-secondary">
              {tFilm.backToList}
            </Link>
          </div>
        </div>

        {sections.length > 1 && (
          <div
            className="project-section-controls"
            role="tablist"
            aria-label="Film sections"
          >
            {sections.map((section, index) => (
              <button
                key={section.title}
                id={`tab-${index}`}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                className={`project-tab ${index === activeIndex ? "active" : ""}`}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-controls="tab-panel"
                tabIndex={index === activeIndex ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(e) => handleTabKeyDown(e, index)}
              >
                {section.title}
              </button>
            ))}
          </div>
        )}

        <div
          className="project-content"
          id="tab-panel"
          role={sections.length > 1 ? "tabpanel" : undefined}
          aria-labelledby={
            sections.length > 1 ? `tab-${activeIndex}` : undefined
          }
          tabIndex={sections.length > 1 ? 0 : undefined}
        >
          {activeSection?.content?.map((block, index) =>
            renderBlock(block, index),
          )}
          {!activeSection || !activeSection.content?.length ? (
            <div className="project-content-placeholder">
              <h2>Customize this page</h2>
              <p>
                Add text, images, videos, and captions here to tell the story of
                the project. Use the data file in{" "}
                <code>src/data/projects.ts</code>
                to define structured content blocks.
              </p>
            </div>
          ) : null}

          {footnotes?.length ? (
            <div className="project-footnotes">
              <h3>{t.footnotes}</h3>
              <ol>
                {footnotes.map((footnote) => (
                  <li key={footnote.number} id={`footnote-${footnote.number}`}>
                    {footnote.text}
                  </li>
                ))}
              </ol>
            </div>
          ) : null}

          {relatedFilms.length > 1 && (
            <div className="project-related-films">
              <h2>{t.films}</h2>
              <div className="related-film-list">
                {relatedFilms
                  .filter((item) => item.slug !== project.slug)
                  .map((film) => (
                    <motion.div
                      key={film.id}
                      className="related-film-item"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={`/film-practice/${film.slug}`}
                        className="related-film-link"
                      >
                        <h3>{film.title}</h3>
                      </Link>
                      <p className="project-block-paragraph">
                        {film.year} • {tFilm.directedBy} {film.director}
                      </p>
                    </motion.div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
