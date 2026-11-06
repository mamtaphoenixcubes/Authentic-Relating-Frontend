'use client';

import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SiteContainer from '../../_components/common/SiteContainer';
import Section from '../../_components/common/Section';

// Container variant for staggered children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // delay between each child
    },
  },
};

// Slide in from left for each child
const slideFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function AuthenticRelatingBlogPage() {
  return (
    <Section>
      <SiteContainer>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* TITLE */}
          <motion.div variants={slideFromLeft}>
            <Typography
              sx={{
                fontFamily: "var(--font-redhat)",
                fontWeight: 700,
                fontSize: { xs: '28px', md: '36px', lg: '36px' },
                lineHeight: '100%',
                letterSpacing: '0%',
              }}
              color="#FF6F61"
              mb={1.5}
            >
              The Authentic Relating Blog
            </Typography>
          </motion.div>

          <motion.div variants={slideFromLeft}>
            <Typography
              sx={{
                fontFamily: "var(--font-redhat)",
                fontWeight: 400,
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "28.8px",
                letterSpacing: "0%",
                color: "#6B7280",
                mt: 1,
              }} mb={3} lineHeight={1.7}
            >
              Real reflections. Honest insights. Human connection.
            </Typography>
          </motion.div>

          <motion.div variants={slideFromLeft}>
            <Typography
              sx={{
                fontFamily: "var(--font-redhat)",
                fontWeight: 400,
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "28.8px",
                letterSpacing: "0%",
                color: "#6B7280",
                mt: 1,
              }} mb={3} lineHeight={1.7}
            >
              Welcome to the Authentic Relating Blog — a space for stories, practices, and perspectives that bring the art of connection to life. Here, we share writings on presence, vulnerability, communication, leadership, and what it means to relate with depth in a fast-paced world.
            </Typography>
          </motion.div>

          <motion.div variants={slideFromLeft}>
            <Typography
              sx={{
                fontFamily: "var(--font-redhat)",
                fontWeight: 400,
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "28.8px",
                letterSpacing: "0%",
                color: "#6B7280",
                mt: 1,
              }} mb={3} lineHeight={1.7}
            >
              Whether you're new to Authentic Relating or deep in the practice, these posts are here to inspire, challenge, and invite you into what's most real.
            </Typography>
          </motion.div>

          {/* CLOSING */}
          <motion.div variants={slideFromLeft}>
            <Typography sx={{
              fontFamily: "var(--font-redhat)",
              fontWeight: 800,
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: "28.8px",
              letterSpacing: "0%",
              color: "#6B7280",
              mt: 1,
            }} mb={3} lineHeight={1.7}
            >
              Read. Reflect. Relate.
            </Typography>
          </motion.div>
        </motion.div>
      </SiteContainer>
    </Section>
  );
}