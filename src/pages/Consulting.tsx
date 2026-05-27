import { motion } from "motion/react";
import PageWrapper from "../components/layout/PageWrapper";
import HomeNavigation from "../components/layout/HomeNavigation";

export default function Consulting() {
  return (
    <PageWrapper>
      <HomeNavigation />
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
              Consulting
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
                I work alongside architects, urban planners, and designers on
                territorial and urban programming projects. My role is to bring
                the narrative layer of a place into the design process drawing
                on fieldwork, community engagement, and documentary methods to
                surface what already exists before a project begins. Each
                collaboration starts from the same question: what story does
                this place already hold?
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
