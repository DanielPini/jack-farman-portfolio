import { motion } from "motion/react";
import { Link } from "react-router-dom";
import type { Project } from "../../data/projects";
import { useLang } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

type Props = {
  project: Project;
};

export default function WorkItem({ project }: Props) {
  const { lang } = useLang();
  const t = translations[lang].filmPractice;

  return (
    <motion.div
      className="work-list-item"
      whileHover={{ x: 6 }}
      transition={{ duration: 0.2 }}
    >
      <div className="work-list-item-content">
        <Link
          to={`/film-practice/${project.slug ?? project.id}`}
          className="work-list-item-title"
        >
          {project.title}
        </Link>
        <div className="work-list-item-meta">
          {project.year} • {project.category || t.film}
        </div>
      </div>
    </motion.div>
  );
}
