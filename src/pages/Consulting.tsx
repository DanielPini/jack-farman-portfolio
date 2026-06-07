import { motion } from "motion/react";
import PageWrapper from "../components/layout/PageWrapper";
import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Consulting() {
  const { lang } = useLang();
  const t = translations[lang].consulting;

  return (
    <PageWrapper>
      <div className="page">
        <motion.div
          className="about"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-content">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              {t.heading}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>{t.body}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
