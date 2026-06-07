import PageWrapper from "../components/layout/PageWrapper";
import { motion } from "motion/react";
import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Contact() {
  const { lang } = useLang();
  const t = translations[lang].contact;

  return (
    <PageWrapper>
      <section className="contact">
        <div className="contact-content">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              fontSize: "1.5rem",
              fontWeight: "300",
            }}
          >
            {t.heading}
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ textAlign: "center" }}
          >
            <a
              href="mailto:jackfarman7@gmail.com?subject=Contact%20request%20from%20website"
              className="contact-mailto"
            >
              {t.contactLink}
            </a>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
