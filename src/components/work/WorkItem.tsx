import { motion } from "motion/react";
import { Link } from "react-router-dom";
import type { Project } from "../../data/projects";
type Props = {
  project: Project;
};

export default function WorkItem({ project }: Props) {

  const href = `/film-practice/${project.slug ?? project.id}`;

  return (
    <motion.div
      className="work-list-item"
      whileHover={{ x: 6 }}
      transition={{ duration: 0.2 }}
    >
      {project.images?.[0] && (
        <Link to={href} tabIndex={-1} aria-hidden>
          <img
            src={project.images[0]}
            alt=""
            className="work-card-image"
          />
        </Link>
      )}
      <div className="work-list-item-content">
        <Link to={href} className="work-list-item-title">
          {project.title}
        </Link>
        <div className="work-list-item-meta">
          {project.year}
        </div>
      </div>
    </motion.div>
  );
}
