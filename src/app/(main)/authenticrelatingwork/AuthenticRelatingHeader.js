'use client';

import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';

import Section from '@/app/_components/common/Section';
import SiteContainer from '@/app/_components/common/SiteContainer';
import Card from '@/app/_components/common/Card';

/* Motion wrappers */
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);

/* =========================================================
   MOTION VARIANTS
   ========================================================= */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const fadeUpSmall = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const viewportOnce = { once: true, amount: 0.3 };
const viewportOnceStrong = { once: true, amount: 0.4 };

/* =========================================================
   COMPONENT
   ========================================================= */
export default function AuthenticRelatingHeader() {
  const theme = useTheme();
  const styles = theme.custom.authenticRelatingHeader;

  return (
    <Section sx={styles.section}>
      <SiteContainer>
        {/* HEADING BLOCK */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceStrong}
          variants={containerVariants}
        >
          <MotionTypography variants={fadeUp} sx={styles.heading}>
            Authentic Relating @ Work: Transforming <br />
            Workplace Culture with Connection
          </MotionTypography>

          <MotionTypography variants={fadeUpSmall} sx={styles.subheading}>
            Authentic Relating for Organizations, Teams & Professionals
          </MotionTypography>

          <MotionTypography variants={fadeIn} sx={styles.services}>
            Training&nbsp;&nbsp;|&nbsp;&nbsp;Consulting&nbsp;&nbsp;|&nbsp;&nbsp;Coaching
          </MotionTypography>
        </motion.div>

        <Box>
          <Grid
            container
            spacing={styles.grid.container.spacing}
            alignItems={styles.grid.container.alignItems}
            justifyContent={styles.grid.container.justifyContent}
            sx={{ my: styles.grid.my }}
          >
            {/* MOBILE CARD */}
            <Grid item xs={12} sx={styles.mobileCardWrapper}>
              <MotionCard
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                sx={{
                  ...styles.mobileCard,
                  p: 0,                      // 👈 kill padding
                  border: "none",            // 👈 kill border
                  background: "transparent", // 👈 kill background
                  boxShadow: "none",         // 👈 kill shadow
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <Box sx={styles.imageWrapper}>
                  <Image
                    src="/arwork/elevatearwork.png"
                    alt="Card Image"
                    fill
                    style={styles.image}
                    sizes="(max-width: 600px) 300px, (max-width: 900px) 420px, 720px"
                  />
                </Box>
              </MotionCard>
            </Grid>

            {/* TEXT COLUMN */}
            <Grid item xs={12} sm={6} md={6}>
              <MotionBox
                variants={slideFromLeft}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                sx={styles.textColumn}
              >
                <Typography sx={styles.textColumnTitle}>
                  Elevate Your Workplace
                  <br /> Through Authentic Relating
                </Typography>

                <Typography sx={styles.textColumnBody}>
                  Imagine a workplace where trust, transparency, and collaboration aren't just ideals—they're everyday experiences.
                  Authentic Relating @ Work is a transformative approach to professional development that cultivates deeper connection,
                  meaningful communication, and a culture where every team member feels truly seen and valued. <br /> <br />

                  In a world where workplace stress, disengagement, and miscommunication cost companies billions, Authentic Relating offers a powerful alternative. Our experiential training programs empower teams with practical tools rooted in emotional intelligence, relational awareness, and mindful leadership. The result? A workplace culture that fosters innovation, engagement, and a profound sense of belonging.
                </Typography>
              </MotionBox>
            </Grid>

            {/* DESKTOP CARD */}
            <Grid item xs={12} sm={6} md={6} sx={styles.desktopCardWrapper}>
              <MotionCard
                variants={slideFromRight}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                sx={{
                  ...styles.desktopCard,
                  p: 0,                      // 👈 kill padding
                  border: "none",            // 👈 kill border
                  background: "transparent", // 👈 kill background
                  boxShadow: "none",         // 👈 kill shadow
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <Box sx={styles.imageWrapper}>
                  <Image
                    src="/arwork/elevatearwork.png"
                    alt="Card Image"
                    fill
                    style={{
                      ...styles.image,
                      borderRadius: '8px',         // 👈 match wrapper radius
                    }}
                    sizes="(max-width: 600px) 300px, (max-width: 900px) 420px, 720px"
                  />
                </Box>
              </MotionCard>
            </Grid>
          </Grid>
        </Box>
      </SiteContainer>
    </Section>
  );
}