"use client";

import {
  Box,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

import Section from "@/app/_components/common/Section";
import SiteContainer from "@/app/_components/common/SiteContainer";

const textItems = [
  { label: "Training Name:", value: "Authentic Relating Facilitation Training (ARFT)" },
  { label: "Format:", value: "Hybrid (Live Online + In-Person Retreat)" },
  { label: "Duration:", value: "12 weeks + 5 days immersion" },
  {
    label: "Who It's For:",
    value:
      "Coaches, therapists, team leads, facilitators, trainers, and anyone called to guide group or interpersonal transformation.",
  },
];

export default function BecomeaCertified() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const bc = theme.custom.becomeACertified;

  const heroMotion = isMobile ? bc.motion.heroMobile : bc.motion.heroDesktop;
  const imageMotion = isMobile ? bc.motion.imageMobile : bc.motion.imageDesktop;
  const textMotion = isMobile ? bc.motion.textMobile : bc.motion.textDesktop;

  return (
    <Box sx={{pt:10}}>
      {/* =========================================================
          FIRST SECTION — HERO BANNER
      ========================================================= */}
      <Section sx={{ py: 0 }}>
        <SiteContainer>
          <motion.div {...heroMotion} style={bc.heroWrapper}>
            <Box sx={bc.hero}>
              {/* Gradient Overlay */}
              <Box sx={bc.heroOverlay} />

              {/* Content */}
              <Box sx={bc.heroContent}>
                <motion.div {...bc.motion.title}>
                  <Typography sx={bc.heroTitle}>
                    Become a Certified
                    <br />
                    Authentic Relating Facilitator
                  </Typography>
                </motion.div>

                <motion.div {...bc.motion.title}>
                  <Typography sx={bc.heroBody}>
                    Step into the role of relational guide. Our Authentic
                    Relating Facilitation Training (ARFT) is a professional
                    pathway for coaches, space-holders, team leaders, and
                    change-makers to master the tools of presence,
                    communication, and transformation through connection.
                  </Typography>
                </motion.div>
              </Box>
            </Box>
          </motion.div>
        </SiteContainer>
      </Section>

      {/* =========================================================
          SECOND SECTION — TRAINING OVERVIEW
      ========================================================= */}
      <Section sx={{ py: 0 }}>
        <SiteContainer>
          <motion.div {...bc.motion.overviewSection}>
            <Box sx={bc.overviewWrapper}>
              <Grid
                container
                {...bc.overviewGrid.container}
                direction={isMobile ? "column" : "row"}
              >
                {/* LEFT IMAGE — Animates from LEFT */}
                <Grid item xs={12} sm={6} md={6}>
                  <motion.div {...imageMotion}>
                    <Box sx={bc.overviewImage} />
                  </motion.div>
                </Grid>

                {/* RIGHT TEXT — Animates from RIGHT */}
                <Grid item xs={12} sm={6} md={6}>
                  <motion.div {...textMotion}>
                    <Box sx={bc.overviewTextBox}>
                      <motion.div {...bc.motion.title}>
                        <Typography sx={bc.overviewTitle}>
                          Facilitation
                          <br />
                          Training Overview
                        </Typography>
                      </motion.div>

                      <Box sx={bc.overviewItemStack}>
                        {textItems.map((item, index) => (
                          <motion.div
                            key={index}
                            {...(isMobile
                              ? bc.motion.itemMobile(index)
                              : bc.motion.itemDesktop(index))}
                          >
                            <Typography sx={bc.overviewItem}>
                              <strong>{item.label}</strong> {item.value}
                            </Typography>
                          </motion.div>
                        ))}
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </SiteContainer>
      </Section>
    </Box>
  );
}