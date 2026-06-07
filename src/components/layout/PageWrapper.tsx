import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function PageWrapper({ children }: Props) {
  return (
    <motion.div
      className="page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
      <footer className="site-footer">
        Website by{" "}
        <a
          href="https://danielpini.com"
          target="_blank"
          rel="noopener noreferrer"
          className="site-footer-link"
        >
          Daniel Pini
        </a>{" "}
        2026
      </footer>
    </motion.div>
  );
}
