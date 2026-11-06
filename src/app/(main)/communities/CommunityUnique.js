"use client";

import {
  Box,
  Card,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

import SiteContainer from "@/app/_components/common/SiteContainer";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);

const coachingPoints = [
  { title: "Practice over performance" },
  { title: "Realness over perfection" },
  { title: "Depth over small talk" },
  { title: "Compassion with boundaries" },
  { title: "Growth through relationship" },
];

export const CommunityUnique = () => {
  const theme = useTheme();
  const cu = theme.custom.communityUnique;

  return (
    <SiteContainer sx={cu.container}>
      {/* ================= TOP SECTION ================= */}
      <MotionBox {...cu.motion.topWrapper} sx={cu.topWrapper}>
        <Box sx={cu.topBox}>
          {/* LEFT */}
          <MotionBox {...cu.motion.leftCol} sx={cu.leftCol}>
            <MotionTypography {...cu.motion.title} sx={cu.leftTitle}>
              What Makes Our Community Unique?
            </MotionTypography>

            <MotionTypography {...cu.motion.body} sx={cu.leftBody}>
              We value consent, safety, diversity, accountability, and the full
              spectrum of the human
              <br /> experience. Here, no part of you is too much, too little,
              or unwelcome.
            </MotionTypography>

            <Box
              component="img"
              src="/community/uniquecommunity.png"
              alt="community"
              sx={cu.leftImage}
            />
          </MotionBox>

          {/* RIGHT */}
          <MotionBox {...cu.motion.rightCol} sx={cu.rightCol}>
            {coachingPoints.map((point, index) => (
              <MotionBox
                key={index}
                {...cu.motion.coachingPoint(index)}
                sx={cu.coachingCard}
              >
                <Typography sx={cu.coachingCardTitle}>
                  {point.title}
                </Typography>
              </MotionBox>
            ))}
          </MotionBox>
        </Box>
      </MotionBox>

      {/* ================= IMAGE SECTION ================= */}
      {/* ================= IMAGE SECTION ================= */}
      <MotionBox {...cu.motion.meetBanner} sx={cu.meetBanner}>
        <Box sx={cu.meetOverlay} />

        <Box sx={cu.meetContent}>
          <MotionTypography {...cu.motion.meetTitle} sx={cu.meetTitle}>
            Meet Your People
          </MotionTypography>

          <MotionTypography {...cu.motion.meetBody} sx={cu.meetBody}>
            Whether you’re looking for heart-centered friendships, a space to heal and grow, or a tribe that speaks the language of realness you belong here.
          </MotionTypography>

          <MotionBox {...cu.motion.buttonsStack} sx={cu.buttonsStack}>
            <Box sx={cu.primaryButton}>Join Our Online Community Space</Box>
            <Box sx={cu.secondaryButton}>
              Attend a Event , Relating Circle or Joy Lab
            </Box>
          </MotionBox>
        </Box>
      </MotionBox>

      {/* ================= FINAL GRID ================= */}
      <Grid
        container
        spacing={cu.finalGrid.container.spacing}
        alignItems={cu.finalGrid.container.alignItems}
        sx={cu.finalGrid.container.sx}
      >
        {/* Image Column */}
        <Grid item xs={12} sm={6} md={5} sx={cu.finalImageCol}>
          <MotionCard {...cu.motion.finalImage} sx={cu.finalImageCard}>
            <Image
              src="/community/communitycaya.png"
              alt="Card Image"
              fill
              style={cu.finalImage}
              priority
            />
            <Box sx={cu.finalImageOverlay} />
          </MotionCard>
        </Grid>

        {/* Text Column */}
        <Grid item xs={12} sm={6} md={7} sx={cu.finalTextCol}>
          <MotionTypography {...cu.motion.finalTitle} sx={cu.finalTitle}>
            Come As You Are. Leave More Yourself.
          </MotionTypography>

          <MotionTypography {...cu.motion.finalBody} sx={cu.finalBody}>
            The Authentic Relating community is a place where connection
            becomes practice, and practice becomes lifestyle. We're not just
            creating a movement—we're creating a new culture of human being.
            One conversation at a time.
          </MotionTypography>
        </Grid>
      </Grid>
    </SiteContainer>
  );
};