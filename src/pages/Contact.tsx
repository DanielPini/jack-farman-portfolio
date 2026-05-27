import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import PageWrapper from "../components/layout/PageWrapper";
import HomeNavigation from "../components/layout/HomeNavigation";
import { motion } from "motion/react";

// TypeScript interface for form data
// This defines the exact shape of our form state
interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  // State for form inputs
  // FormData interface ensures all properties exist and have correct types
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // State to track if form is being submitted
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // State to show success message
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Handle input changes
  // ChangeEvent<HTMLInputElement | HTMLTextAreaElement> is the proper TypeScript type for form inputs
  // This type includes all the event properties like target.name, target.value, etc.
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    // Update state using functional update to ensure we have latest state
    // The spread operator (...formData) copies all existing properties
    // Then we override the specific property that changed
    setFormData((prev) => ({
      ...prev,
      [name]: value, // name is a string key, so we use bracket notation
    }));
  };

  // Handle form submission
  // FormEvent<HTMLFormElement> is the proper TypeScript type for form submissions
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

    try {
      // Simulate API call - in real app, this would send to a server
      // setTimeout simulates network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", formData);

      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(true);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <HomeNavigation />
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
            Get In Touch
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ marginBottom: "3rem", textAlign: "center" }}
          >
            Have a project in mind? I'd love to hear about it. Send me a message
            and I'll get back to you as soon as possible.
          </motion.p>

          {/* Success message */}
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
              ✓ Thank you! Your message has been sent successfully.
            </motion.div>
          )}

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
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
              <label htmlFor="email">Email</label>
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
              <label htmlFor="message">Message</label>
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
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </section>
    </PageWrapper>
  );
}
