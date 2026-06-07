import { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { projects } from "../../data/projects";
import WorkItem from "./WorkItem";
import type { Project } from "../../data/projects";
import { useLang } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

type Props = {
  onHover: (project: Project, titleCenterY: number) => void;
};

export default function WorkList({ onHover }: Props) {
  const { lang } = useLang();
  const t = translations[lang].filmPractice;
  const categoryGroups = useMemo(() => {
    const groups: Record<string, Project[]> = {};
    const orderedCategories: string[] = [];

    projects.forEach((project) => {
      const category = project.category || "Other";
      if (!groups[category]) {
        groups[category] = [];
        orderedCategories.push(category);
      }
      groups[category].push(project);
    });

    return orderedCategories.map((category) => ({
      category,
      projects: groups[category],
    }));
  }, []);

  return (
    <div className="work-list-container">
      {categoryGroups.map((group) => {
        const seriesProjects = group.projects.filter(
          (project) => project.sections?.length,
        );

        const seriesChildSlugs = new Set(
          seriesProjects.flatMap((series) =>
            group.projects
              .filter(
                (item) =>
                  item.slug &&
                  series.slug &&
                  item.slug !== series.slug &&
                  item.slug.startsWith(`${series.slug}-`),
              )
              .map((item) => item.slug!),
          ),
        );

        const normalProjects = group.projects.filter(
          (project) =>
            !project.sections?.length &&
            !seriesChildSlugs.has(project.slug ?? ""),
        );

        return (
          <div key={group.category} className="work-category">
            <h2 className="work-category-heading">{t.categoryLabel}</h2>
            <div className="work-list">
              {seriesProjects.map((series) => {
                const childProjects = group.projects.filter(
                  (project) =>
                    project.slug &&
                    series.slug &&
                    project.slug !== series.slug &&
                    project.slug.startsWith(`${series.slug}-`),
                );

                return (
                  <div key={series.id} className="work-series-block">
                    <motion.div
                      className="work-series-heading"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      onMouseEnter={(event) => {
                        const rect =
                          event.currentTarget.getBoundingClientRect();
                        onHover(series, rect.top);
                      }}
                    >
                      <Link
                        to={`/film-practice/${series.slug ?? series.id}`}
                        className="work-series-title"
                      >
                        {series.title}
                      </Link>
                      <div className="work-series-meta">
                        {series.year} • {series.category || t.film}
                      </div>
                    </motion.div>

                    {childProjects.length > 0 && (
                      <div className="work-series-sublist">
                        {childProjects.map((project, index) => (
                          <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.6,
                              delay: index * 0.05,
                              ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            onMouseEnter={(event) => {
                              const rect =
                                event.currentTarget.getBoundingClientRect();
                              onHover(project, rect.top);
                            }}
                          >
                            <WorkItem project={project} />
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {normalProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  onMouseEnter={(event) => {
                    const itemEl =
                      event.currentTarget.querySelector(".work-list-item");
                    const itemRect =
                      itemEl?.getBoundingClientRect() ||
                      event.currentTarget.getBoundingClientRect();
                    onHover(project, itemRect.top);
                  }}
                >
                  <WorkItem project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
