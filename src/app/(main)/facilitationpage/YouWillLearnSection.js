"use client";

import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

import SiteContainer from "@/app/_components/common/SiteContainer";

// =========================================================
// DATA — 3 panels
// =========================================================
const panelsData = [
  {
    items: [
      "Hold safe, brave spaces for group depth and growth",
      "Facilitate authentic relating games, circles & conversations",
      "Embody presence, attunement, and grounded leadership",
      "Navigate emotional intensity, conflict, and resistance",
      "Read and respond to group field dynamics",
      "Design and lead your own AR-based offerings with confidence",
    ],
  },
  {
    items: [
      "10+ live online sessions with master-level facilitators",
      "Optional ___ day in-person retreat for immersive learning",
      "Weekly peer labs and facilitator roleplay practice",
      "A comprehensive facilitation manual",
      "Personalized mentorship and feedback",
      "Access to our ongoing facilitator community",
      "Official Certification Path",
    ],
  },
  {
    items: [
      "Training Completion",
      "Facilitation Practicum & Review",
      "Facilitator Assessment & Feedback",
      "Certification & Global Listing",
    ],
  },
];

// =========================================================
// REUSABLE TIMELINE PANEL
// =========================================================
function TimelinePanel({ index, items }) {
  const theme = useTheme();
  const ywl = theme.custom.youWillLearnTimeline;

  const title = ywl.panelTitleText[index];
  const stagger = ywl.panelStagger[index];

  return (
    <motion.div {...ywl.motion.panel(index)} style={ywl.wrapper}>
      <SiteContainer >
        <Box sx={ywl.panel(index)}>
          <Box sx={ywl.panelInner}>
            {/* Title */}
            <motion.div {...ywl.motion.title}>
              <Typography sx={ywl.panelTitle}>{title}</Typography>
            </motion.div>

            {/* Timeline */}
            <Box sx={ywl.timelineWrapper}>
              {/* Vertical line */}
              <Box sx={ywl.timelineLine} />

              {items.map((text, i) => (
                <motion.div
                  key={i}
                  {...ywl.motion.row(i, stagger)}
                  style={{ width: "100%" }}
                >
                  <Box sx={ywl.itemRow}>
                    {/* Dot */}
                    <motion.div {...ywl.motion.dot(i, stagger)}>
                      <Box sx={ywl.dot} />
                    </motion.div>

                    {/* Text */}
                    <motion.div {...ywl.motion.text(i, stagger)}>
                      <Typography sx={ywl.itemText}>{text}</Typography>
                    </motion.div>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </Box>
      </SiteContainer>
    </motion.div>
  );
}

// =========================================================
// MAIN EXPORT
// =========================================================
export default function YouWillLearnTimeline() {
  return (
    <>
      {panelsData.map((panel, index) => (
        <TimelinePanel
          key={index}
          index={index}
          items={panel.items}
        />
      ))}
    </>
  );
}