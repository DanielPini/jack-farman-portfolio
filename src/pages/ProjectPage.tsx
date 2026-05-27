import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { useMemo, useState, type ReactNode } from "react";
import PageWrapper from "../components/layout/PageWrapper";
import WorkMedia from "../components/work/WorkMedia";
import { projects, type ContentBlock } from "../data/projects";

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
          <img src={block.src} alt={block.caption || "Project image"} />
          {block.caption && (
            <p className="project-block-caption">{block.caption}</p>
          )}
        </div>
      );
    case "video":
      return (
        <div key={index} className="project-block-media">
          <WorkMedia src={block.src} />
          {block.caption && (
            <p className="project-block-caption">{block.caption}</p>
          )}
        </div>
      );
    default:
      return null;
  }
}

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find(
    (project) => project.slug === slug || String(project.id) === slug,
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = useMemo(() => {
    if (!project) return [];
    if (project.sections && project.sections.length > 0) {
      return project.sections;
    }
    return [
      {
        title: project.title,
        content: project.content ?? [],
      },
    ];
  }, [project]);

  const activeSection = sections[activeIndex] ?? sections[0];

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

  if (!project) {
    return (
      <PageWrapper>
        <div className="page project-page project-not-found">
          <div className="project-header">
            <h1>Project not found</h1>
            <p>We couldn’t find the project you were looking for.</p>
            <Link to="/film-practice" className="button button-secondary">
              Back to Film Practice
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
            <div className="project-kicker">Project</div>
            <h1>{project.title}</h1>
            <p className="project-meta">
              {project.year} • {project.category}
              {project.director ? ` • Directed by ${project.director}` : ""}
            </p>
            {project.description && (
              <p className="project-description">{project.description}</p>
            )}
            <Link to="/film-practice" className="button button-secondary">
              Back to Film Practice
            </Link>
          </div>
        </div>

        {sections.length > 1 && (
          <div className="project-section-controls">
            {sections.map((section, index) => (
              <button
                key={section.title}
                className={`project-tab ${index === activeIndex ? "active" : ""}`}
                type="button"
                onClick={() => setActiveIndex(index)}
              >
                {section.title}
              </button>
            ))}
          </div>
        )}

        <div className="project-content">
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

          {project.footnotes?.length ? (
            <div className="project-footnotes">
              <h3>Footnotes</h3>
              <ol>
                {project.footnotes.map((footnote) => (
                  <li key={footnote.number} id={`footnote-${footnote.number}`}>
                    {footnote.text}
                  </li>
                ))}
              </ol>
            </div>
          ) : null}

          {relatedFilms.length > 1 && (
            <div className="project-related-films">
              <h2>Films</h2>
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
                        {film.year} • Directed by {film.director}
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
