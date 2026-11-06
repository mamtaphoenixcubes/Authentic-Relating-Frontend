"use client";

import {
  Box,
  Card,
  Grid,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

import SiteContainer from "@/app/_components/common/SiteContainer";
import Section from "@/app/_components/common/Section";
import SectionHeader from "@/app/_components/common/SectionHeader";

const MotionButton = motion(Button);

export const WhoItsFor = () => {
  const theme = useTheme();
  const who = theme.custom.whoItsFor;

  const items = [
    "Entrepreneurs and CEOs",
    "Coaches and facilitators",
    "Team leads and HR professionals",
    "Educators and nonprofit leaders",
    "Anyone ready to lead with more presence, purpose, and connection",
  ];

  return (
    <Section
      className="who-its-for-section"
      sx={who.section}
    >
      {/* ================= WHO IT'S FOR ================= */}
      <SiteContainer>
        {/* Heading */}
        <SectionHeader
          align="center"
          title="Who It's For"
          subtitle="You don't need a title to lead. You just need the courage to be real."
          sx={{
            mb: who.subtitle.mb,
            "& .section-title": who.heading,
            "& .section-description": who.subtitle,
          }}
        />

        {/* Cards */}
        <Grid
          container
          spacing={who.pillsGrid.container.spacing}
          justifyContent={who.pillsGrid.container.justifyContent}
          sx={{
            ...who.pillsGrid.container.sx,
            mb: { xs: 5, sm: 8, md: 10, lg: 12, xl: 15 },
          }}
        >
          {items.map((text, index) => (
            <Grid
              item
              xs={who.pillsGrid.item.xs}
              sm={who.pillsGrid.item.sm}
              md={who.pillsGrid.item.md}
              lg={who.pillsGrid.item.lg}
              xl={who.pillsGrid.item.xl}
              key={index}
              sx={who.pillsGrid.item.sx}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                }}
                style={{
                  width: "100%",
                }}
              >
                <Card sx={who.pillCard}>
                  <Typography sx={who.pillCardText}>
                    {text}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SiteContainer>

      {/* ================= LEADERSHIP CONTENT ================= */}
      <SiteContainer sx={who.contentContainer}>
        <Box>
          {/* ================= FIRST SECTION ================= */}
          <Grid
            container
            spacing={who.blockRow.container.spacing}
            alignItems={who.blockRow.container.alignItems}
            sx={who.blockRow.container.sx}
          >
            {/* TEXT */}
            <Grid item xs={12} sm={6} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Box sx={who.textBox}>
                  {/* TITLE */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Typography sx={who.blockTitle}>
                      Ready to <br />
                      Redefine Leadership?
                    </Typography>
                  </motion.div>

                  {/* DESCRIPTION */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Typography sx={who.body}>
                      Whether you're leading a team or a movement, we're here
                      to support your evolution into a more connected,
                      conscious, and courageous leader.
                    </Typography>
                  </motion.div>

                  {/* BUTTONS */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Stack
                      direction={who.buttonStack.direction}
                      spacing={who.buttonStack.spacing}
                      sx={who.buttonStack.sx}
                    >
                      {/* EXPLORE BUTTON */}
                      <MotionButton
                        whileHover={{
                          scale: 1.05,
                          y: -3,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          },
                        }}
                        whileTap={{ scale: 0.95 }}
                        sx={{ ...who.button, ...who.button1 }}
                      >
                        Explore Our Leadership Programs
                      </MotionButton>

                      {/* DOWNLOAD BUTTON */}
                      <MotionButton
                        whileHover={{
                          scale: 1.05,
                          y: -3,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          },
                        }}
                        whileTap={{ scale: 0.95 }}
                        sx={{ ...who.button, ...who.button2 }}
                      >
                        Download Leadership PDF
                      </MotionButton>
                    </Stack>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>

            {/* IMAGE */}
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              sx={who.imageColumn}
            >
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                style={{ width: "100%" }}
              >
                <Card sx={who.imageCard}>
                  <Box sx={who.imageInner}>
                    <Image
                      src="/leadership/redefineleadership.png"
                      alt="Preview"
                      fill
                      className="object-cover"
                      sizes="(max-width: 600px) 100vw, 50vw"
                    />
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          </Grid>

          {/* ================= SECOND SECTION ================= */}
          <Grid
            container
            spacing={who.blockRow.container.spacing}
            alignItems={who.blockRow.container.alignItems}
            sx={who.blockRow.container.sx}
          >
            {/* IMAGE */}
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              sx={who.imageColumn}
            >
              <motion.div
                initial={{ opacity: 0, x: -50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ width: "100%" }}
              >
                <Card sx={who.imageCard}>
                  <Box sx={who.imageInner}>
                    <Image
                      src="/leadership/humanityleadership.png"
                      alt="Preview"
                      fill
                      className="object-cover"
                      sizes="(max-width: 600px) 100vw, 50vw"
                    />
                  </Box>
                </Card>
              </motion.div>
            </Grid>

            {/* TEXT */}
            <Grid item xs={12} sm={6} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                <Box sx={who.textBox}>
                  {/* TITLE */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Typography sx={who.blockTitleSmall}>
                      Lead with Humanity. Inspire with Presence. Change the
                      Culture.
                    </Typography>
                  </motion.div>

                  {/* DESCRIPTION */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Typography sx={who.bodySmall}>
                      Relational Leadership is not the future of
                      leadership—it's the now. Join the movement of leaders
                      creating workplaces, communities, and organizations
                      that breathe connection and thrive through relationship.
                    </Typography>
                  </motion.div>

                  {/* HIGHLIGHT */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Typography sx={who.accent}>
                      Let's Lead Differently. Together.
                    </Typography>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </SiteContainer>
    </Section>
  );
};

export default WhoItsFor;