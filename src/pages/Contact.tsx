import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import PageWrapper from "../components/layout/PageWrapper";
import { motion } from "motion/react";
import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const { lang } = useLang();
  const t = translations[lang].contact;

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ marginBottom: "3rem", textAlign: "center" }}
          >
            {t.body}
          </motion.p>

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              style={{
                backgroundColor: "#e8f5e9",
                border: "1px solid #4caf50",
                color: "#2e7d32",
                padding: "15px",
                borderRadius: "4px",
                marginBottom: "20px",
              }}
            >
              {t.success}
            </motion.div>
          )}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-group">
              <label htmlFor="name">{t.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t.message}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? t.sending : t.send}
            </button>
          </motion.form>
        </div>
      </section>
    </PageWrapper>
  );
}
