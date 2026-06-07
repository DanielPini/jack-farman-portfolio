import { motion } from "motion/react";
import PageWrapper from "../components/layout/PageWrapper";
import KoinpostMap from "../components/koinpost/KoinpostMap";
import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function LeKoinpost() {
  const { lang } = useLang();
  const t = translations[lang].leKoinpost;

  return (
    <PageWrapper>
      <div className="page">
        <motion.div
          className="koinpost-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="koinpost-content">
            <motion.div
              className="koinpost-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3>{t.heading}</h3>
              <video
                src="/videos/LeKoinpost_FILM.webm"
                controls
                playsInline
                preload="metadata"
                className="work-media-video"
              />
              {t.paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
              <p>
                {t.learnMorePrefix}
                <a
                  href="https://lekoinpost.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="koinpost-link"
                >
                  lekoinpost.com
                </a>
              </p>
              <KoinpostMap />

              <div className="koinpost-pdf-wrapper">
                <img
                  src="/pancarte_koinpost.webp"
                  alt="Pancarte Koinpost"
                  className="koinpost-pdf"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
