"use client";

import { Box, Card, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import SiteContainer from '@/app/_components/common/SiteContainer';

export const MissingVisionpage = () => {
  const theme = useTheme();
  const mv = theme.custom.missingVisionpage;

  return (
    <SiteContainer>
      {/* Changed py-20 to pt-20 pb-10 to reduce the bottom spacing */}
      <Box className="pt-20 pb-1">

        {/* ===== VISION SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <Box className="mx-auto">
            <Grid
              container
              spacing={mv.vision.grid.spacing}
              alignItems="center"
              sx={{ mb: mv.vision.grid.mb }}
            >
              <Grid item xs={12} sm={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <Card sx={mv.vision.imageCard} className="group">
                    <Image
                      src="/missionvision/vision.png"
                      alt="Vision"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Card>
                </motion.div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box sx={mv.vision.textWrapper}>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <Typography sx={mv.vision.title}>VISION</Typography>
                  </motion.div>

                  <Box sx={mv.vision.body}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Typography sx={mv.vision.paragraph}>
                        A world where authenticity is the norm and every human being feels safe, seen, heard and supported in being exactly who they are.
                      </Typography>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <Typography sx={mv.vision.paragraph}>
                        A future where real connection and authenticity replaces performance and transcends culture, conflict, and conditioning igniting healing, trust, and transformation across the planet.
                      </Typography>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Typography>
                        At AuthenticRelating.com, we envision a global culture rooted in{" "}
                        <span>
                          radical presence, compassionate curiosity, courageous vulnerability, and deep human connection
                        </span>{" "}
                        transforming the way we live, lead, love, and relate.
                      </Typography>
                    </motion.div>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </motion.div>

        {/* ===== MISSION SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <Box className="mx-auto pt-12 pb-1">
            <Box sx={mv.mission.card}>

              {/* Mobile image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <Box sx={mv.mission.mobileImageWrapper}>
                  <Image
                    src="/missionvision/mission.png"
                    alt="Mission"
                    fill
                    priority
                    className="object-cover"
                  />
                </Box>
              </motion.div>

              {/* Left content */}
              <Box flex={1} sx={mv.mission.content}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Typography sx={mv.mission.title}>MISSION</Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Typography sx={mv.mission.paragraph}>
                    Our mission is to <span>rewrite the way humanity connects.</span>
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Typography sx={mv.mission.paragraph}>
                    We create <span>transformative experiences, programs, trainings, and communities</span>{" "}
                    that teach the art and practice of authentic relating empowering individuals,
                    leaders, and organizations to communicate with honesty, empathy, and embodied presence.
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Typography sx={{ ...mv.mission.paragraph, mb: 2 }}>
                    <span>Through our global platform, we:</span>
                  </Typography>
                </motion.div>

                <Box component="ul" sx={mv.mission.list}>
                  {[
                    <>Teach practical tools for <strong>real, heart centred communication</strong></>,
                    <>Facilitate <strong>deep, meaningful conversations</strong> across cultures and differences</>,
                    <>Train facilitators and leaders to bring <strong>authenticity and relational intelligence</strong> into every sphere of life</>,
                    <>Build communities where <strong>belonging replaces isolation</strong>, and truth is welcomed over performance</>,
                    <>Create safe, inclusive spaces where people learn to <strong>relate from who they are, not who they think they should be</strong></>,
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </Box>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Typography sx={mv.mission.finalLine}>
                    We don't just teach connection. We live it. We share it. We spread it. One conversation at a time.
                  </Typography>
                </motion.div>
              </Box>

              {/* Desktop image */}
              <Box sx={mv.mission.desktopImageWrapper}>
                <Image
                  src="/missionvision/mission.png"
                  alt="Mission"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </Box>

            </Box>
          </Box>
        </motion.div>

      </Box>
    </SiteContainer>
  );
};