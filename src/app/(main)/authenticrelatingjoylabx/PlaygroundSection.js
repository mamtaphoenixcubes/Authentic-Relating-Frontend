'use client';

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionTypography = motion(Typography);
const MotionBox = motion(Box);

export default function PlaygroundSection() {
  return (
    <MotionBox
      sx={{
        position: "relative",
        width: "100%",
        minHeight: 620,
        display: "flex",
        justifyContent: "center",
        pt: 20,
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Grey background panel */}
      <MotionBox
        sx={{
          position: "absolute",
          top: 150,
          width: { xs: "95%", md: "80%" },
          height: 520,
          backgroundColor: "#E0E0E0",
          borderRadius: 4,
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Blue gradient card */}
      <MotionBox
        sx={{
          position: "relative",
          bottom: 120,
          width: { xs: "90%", sm: "70%", md: "60%" },
          p: { xs: 3, md: 5 },
          borderRadius: 3,
          background: "linear-gradient(135deg, #8EC5FC 0%, #1D8CF8 100%)",
          color: "#fff",
          textAlign: "center",
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          border: "2px solid rgba(255,255,255,0.6)",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <MotionTypography
          sx={{
            fontFamily: "var(--font-redhat)",
            fontWeight: 700,
            fontSize: { xs: 26, sm: 22, md: 28, lg: 44 },
            lineHeight: "102%",
            letterSpacing: "0%",
            textAlign: "center",
            mb: 2
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          A Playground for Playful, Deep, and <br />
          Transformational Connections
        </MotionTypography>

        <MotionTypography
          sx={{
            fontFamily: "var(--font-redhat)",
            fontWeight: 400,
            fontSize: { xs: 12, sm: 10, md: 12, lg: 13, xl: 20 }, // responsive font size
            lineHeight: { xs: "22px", sm: "24px", md: "28px", lg: "30px", xl: "32px" },
            letterSpacing: "0%",
            textAlign: "center",
            color: "rgba(255,255,255,0.95)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          Welcome to the Authentic Relating Joy Lab! This is not just another
          social gathering—it’s a dynamic playground of possibilities, a
          space where laughter, curiosity, and deep connection collide in the most
          exhilarating ways. Imagine stepping into a vibrant connection
          carnival, where every interaction is an experiment in play, presence,
          and authentic expression.
          <br /><br />
          Here, you’ll find a mix of interactive games, spontaneous connection
          exercises, playful challenges, and deep relating practicesdesigned
          to bring out your most authentic, expressive, and connected self.
          Whether you’re looking to laugh until your cheeks hurt, share a
          moment of deep vulnerability, or explore the magic of human
          connection, the Authentic Relating Joy Lab is your space to
          experiment, explore, and expand.
        </MotionTypography>
      </MotionBox>
    </MotionBox>
  );
}
