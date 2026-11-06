"use client";

import { Box, Typography, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";

import SiteContainer from "@/app/_components/common/SiteContainer";
import Section from "@/app/_components/common/Section";

export default function WhatYouWillFindInside() {
  const router = useRouter();
  const theme = useTheme();
  // Ensure you have these styles defined in your theme or replace with inline styles
  const styles = theme.custom.whatYouWillFindInside;

  // Updated items to match the image provided
  const items = [
    {
      title: "45 Practices",
      desc: "Each with journal prompts, sentence stems, affirmations, coaching questions, micro-challenges, somatic tools, and games",
    },
    {
      title: "A Book + A Workbook",
      desc: "For individuals, facilitators, therapists, teams, and seekers",
    },
    {
      title: "Real-Life Integration",
      desc: "Through stories, metaphors, and embodied practices",
    },
    {
      title: "From Theory to Transformation",
      desc: "Learn it, live it, lead with it",
    },
  ];

  return (
    <SiteContainer>
      <Section sx={styles.section}>
        {/* ===================================================== */}
        {/* TOP PANEL — What You'll Find Inside                    */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={styles.panel}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Typography sx={styles.heading}>
                What You'll Find Inside
              </Typography>
            </motion.div>

            <Box sx={styles.cardsGrid}>
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                >
                  <Box
                    sx={{
                      ...styles.card,
                      position: "relative",
                      border: "2px solid transparent",
                      isolation: "isolate",

                      "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: "-2px",
                        padding: "2px",
                        borderRadius: "inherit",

                        background:
                          "linear-gradient(110deg, #FFFFFF 0%, rgba(255,255,255,0.95) 55%, #ffce72 100%)",

                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",

                        pointerEvents: "none",
                        zIndex: 2,
                      },
                    }}
                  >
                    <Typography sx={styles.cardTitle}>
                      {item.title}
                    </Typography>

                    <Typography sx={styles.cardDescription}>
                      {item.desc}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>


        {/* ===================================================== */}
        {/* CTA BANNER — Ready to Embark on the Journey?           */}
        {/* ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Box sx={styles.ctaBanner}>
            <Box sx={styles.ctaFlex}>
              {/* LEFT SIDE — TEXT */}
              <Box sx={styles.ctaLeft}>
                <Typography variant="h4" component="h2" sx={styles.ctaTitle}>
                  Ready to Embark on the Journey?
                </Typography>

                <Typography variant="body1" sx={styles.ctaBody}>
                  Whether you're a coach, a team leader, a seeker, a facilitator, or simply
                  someone who longs for more realness in your life—
                  <strong> The Five Dimensions of Authentic Relating</strong> offers a roadmap home.
                </Typography>
              </Box>

              {/* RIGHT SIDE — BUTTONS */}
              <Box sx={styles.ctaRight}>
                <Stack
                  spacing={styles.ctaButtonStack?.spacing || 2}
                  sx={styles.ctaButtonStack?.sx}
                >
                  {/* Glass button */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    style={{ width: "100%" }}
                  >
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={() => router.push(`/mybooks`)}
                      sx={{ ...styles.btnBase, ...styles.btnGlass }}
                    >
                      Get the book
                    </Button>
                  </motion.div>

                  {/* Workshop button */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    style={{ width: "100%" }}
                  >
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => router.push(`/authenticrelatingcoaching`)}
                      sx={{ ...styles.btnBase, ...styles.btnWorkshop }}
                    >
                      Join a workshop or training
                    </Button>
                  </motion.div>

                  {/* Online course button */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    style={{ width: "100%" }}
                  >
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => router.push(`/onlinecourse`)}
                      sx={{ ...styles.btnBase, ...styles.btnCourse }}
                    >
                      Explore our online experiences
                    </Button>
                  </motion.div>
                </Stack>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Section>
    </SiteContainer>
  );
}