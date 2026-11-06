'use client';

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

import Section from "@/app/_components/common/Section";
import SiteContainer from "@/app/_components/common/SiteContainer";
import Card from "@/app/_components/common/Card";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);

// -----------------------------------------------------------
// Fallback — matches Figma spec so it renders correctly
// even if theme.custom.playground is missing
// -----------------------------------------------------------
const FALLBACK = {
  outer: {},
  panel: {
    height: { xs: "120vh", sm: "130vh", md: "140vh", lg: "100vh" },
    width: { xs: "100%", sm: "100%", md: "110%", lg: "120%" },
    maxWidth: { xs: "100%", sm: "100%", md: "1100px", lg: "1600px" },
    mx: "auto",
  },
  motionWrapper: {},
  card: {
    // 👇 matches Figma
    border: "2px solid #FFFFFF",
    background: "linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)",
    borderRadius: 2,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  },
  title: {
    // 👇 matches Figma typography
    fontFamily: '"Red Hat Display", sans-serif',
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: { xs: "28px", sm: "32px", md: "38px", lg: "44px", xl: "44px" },
    lineHeight: "100%",
    letterSpacing: "0%",
    textAlign: "center",
    color: "#ffffff",
  },
  description: {
    fontFamily: '"Red Hat Display", sans-serif',
    fontWeight: 500,
    fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "16px", xl: "16px" },
    lineHeight: "28.8px",
    letterSpacing: "0%",
    textAlign: "center",
    color: "#ffffff",
  },

  // Panel keeps its own entrance
  motion: {
    panel: {
      initial: { opacity: 0, scale: 0.96 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true, amount: 0.3, margin: "0px 0px -100px 0px" },
      transition: { duration: 0.8, ease: "easeOut" },
    },
    cardWrapper: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true },
      transition: { duration: 0.4, ease: "easeOut" },
    },
  },

  // Parent/children variants for the Card + text cascade
  variants: {
    cardContainer: {
      hidden: { opacity: 0, y: 40, scale: 0.97 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.7,
          ease: "easeOut",
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: 24 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    },
  },
};

export default function PlaygroundSection() {
  const theme = useTheme();
  const styles = theme.custom?.playground ?? FALLBACK;
  const motionStyles = styles.motion ?? FALLBACK.motion;
  const variants = styles.variants ?? FALLBACK.variants;

  return (
    <Section>
      <SiteContainer>
        <Box
          sx={{
            ...styles.outer,
            pb: { xs: "400px", sm: "300px", md: "160px", lg: "250px", xl: "620px" }, // 👈 bottom gap
          }}
        >
          {/* 2. The Background Image (Sitting in normal flow) */}
          <Box
            component="img"
            src="/joylab/joyfullconnection.png"
            alt="Joy Lab Background"
            sx={{
              position: "absolute",
              top: { xs: "30%", md: "38%" ,lg:"45", xl: "25%" }, // Pushes the image down so the card can overlap the top
              left: 0,
              width: "100%",
              height: { xs: "70%", md: "76%" }, // Height of the image itself
              objectFit: "cover",
              borderRadius: "24px",
              zIndex: 0,
              mt: { xs: 4, md: 10 },
              mb: { xs: 6, md: 8 },
            }}
          />

          {/* ---- Card wrapper (fades in so children can stagger) ---- */}
          <MotionBox
            style={styles.motionWrapper}
            initial={motionStyles.cardWrapper.initial}
            whileInView={motionStyles.cardWrapper.whileInView}
            viewport={motionStyles.cardWrapper.viewport}
            transition={motionStyles.cardWrapper.transition}
          >
            {/* ---- Card is the master trigger ----
                NOTE: no `border` / `boxShadow` override here — the values
                come from styles.card (theme) or FALLBACK.card (fallback). */}
            <MotionCard
              sx={{ ...styles.card }}
              variants={variants.cardContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4, margin: "0px 0px -60px 0px" }}
            >
              <MotionTypography sx={styles.title} variants={variants.item}>
                A Playground for Playful, Deep, and <br />
                Transformational Connections
              </MotionTypography>

              <MotionTypography sx={styles.description} variants={variants.item}>
                Welcome to the Authentic Relating Joy Lab! This is not just
                another social gathering—it's a dynamic playground of
                possibilities, a space where laughter, curiosity, and deep
                connection collide in the most exhilarating ways. Imagine
                stepping into a vibrant connection carnival, where every
                interaction is an experiment in play, presence, and authentic
                expression.
              </MotionTypography>

              <MotionTypography sx={styles.description} variants={variants.item}>
                Here, you'll find a mix of interactive games, spontaneous
                connection exercises, playful challenges, and deep relating
                practices designed to bring out your most authentic, expressive,
                and connected self. Whether you're looking to laugh until your
                cheeks hurt, share a moment of deep vulnerability, or explore
                the magic of human connection, the Authentic Relating Joy Lab is
                your space to experiment, explore, and expand.
              </MotionTypography>
            </MotionCard>
          </MotionBox>
        </Box>
      </SiteContainer>
    </Section>
  );
}