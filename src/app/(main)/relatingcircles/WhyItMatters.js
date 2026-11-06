"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

import Section from "@/app/_components/common/Section";
import SiteContainer from "@/app/_components/common/SiteContainer";
import Card from "@/app/_components/common/Card";

export default function WhyItMatters() {
  const theme = useTheme();
  const styles = theme.custom.whyItMatters;

  return (
    <Section sx={styles.section}>
      <SiteContainer>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Card sx={styles.card}>
            {/* Gradient Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box sx={styles.overlay} />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Box sx={styles.content}>
                <Typography sx={styles.title}>Why It Matters Today</Typography>

                <Typography sx={styles.description}>
                  In a world of distractions and surface-level interactions,
                  relating circles offer a return to real, meaningful connection.
                  They cultivate self-awareness, emotional intelligence, and
                  belonging, reminding us that true connection is built on
                  presence, empathy, and the courage to be seen as we are.
                </Typography>
              </Box>
            </motion.div>
          </Card>
        </motion.div>
      </SiteContainer>
    </Section>
  );
}