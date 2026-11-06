"use client";

import {
  Box,
  Typography,
  Grid,
  Card,
  Stack,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

import SiteContainer from "@/app/_components/common/SiteContainer";

const MotionButton = motion(Button);

// =========================================================
// DATA — advanced training modules
// =========================================================
const modules = [
  { label: "Trauma-informed facilitation" },
  { label: "Corporate culture & leadership" },
  { label: "Embodied relational dynamics" },
  { label: "Conflict transformation & repair" },
];

export default function AdvancedTrainingSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const at = theme.custom.advancedTraining;

  return (
    <motion.div {...at.motion.section}>
      <SiteContainer sx={at.container}>
        <Grid
          container
          {...at.grid.container}
          direction={isMobile ? "column" : "row"}
        >
          {/* =========================================================
              TEXT COLUMN — LEFT
          ========================================================= */}
          <Grid item xs={12} sm={6} md={6}>
            <motion.div {...at.motion.textColumn(isMobile)}>
              <Box sx={at.textBox}>
                <Typography sx={at.title}>
                  Already Facilitating?
                </Typography>

                <Typography sx={at.body}>
                  We offer advanced training modules in:
                </Typography>

                <Stack {...at.modulesStack}>
                  {modules.map((mod, idx) => (
                    <motion.div
                      key={idx}
                      {...at.motion.module(idx, isMobile)}
                      style={{ width: "100%" }}
                    >
                      <Box sx={at.moduleRow}>
                        <Box sx={at.moduleDot(idx)} />
                        <Typography sx={at.moduleText}>
                          {mod.label}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Stack>

                <motion.div {...at.motion.button(isMobile)}>
                  <MotionButton
                    {...at.motion.buttonHover}
                    sx={at.button}
                  >
                    Request Advanced Training Info
                  </MotionButton>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>

          {/* =========================================================
              CARD COLUMN — RIGHT
          ========================================================= */}
          <Grid item xs={12} sm={6} md={6}>
            <motion.div {...at.motion.card(isMobile)}>
              <Card sx={at.card}>
                {/* IMAGE */}
                <Image
                  src="/facilitation/alreadyfacilitating.png"
                  alt="Advanced Training"
                  fill
                  style={at.cardImage}
                  sizes="(max-width: 600px) 100vw, 50vw"
                  priority
                />

                {/* TEXT OVERLAY */}
                <Box sx={at.cardOverlayBox}>
                  <Typography sx={at.cardOverlayText}>
                    Advanced Training
                  </Typography>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </SiteContainer>
    </motion.div>
  );
}