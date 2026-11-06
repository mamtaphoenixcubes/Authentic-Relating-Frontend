"use client";

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

import SiteContainer from "@/app/_components/common/SiteContainer";
import Section from "@/app/_components/common/Section";

const bulletPoints = [
  "Embodies the five dimensions of authentic relating and the 10 principles of authentic relating.",
  "Models vulnerability, curiosity, and truth-telling",
  "Skillfully holds space for discomfort and connection",
  "Guides participants into more meaningful, embodied interactions",
  "Honors the intelligence of the group while offering structure and support",
];

export default function WhatisAuthentic() {
  const theme = useTheme();
  const wa = theme.custom.whatIsAuthentic;

  return (
    <Section sx={{ py: 0 }}>
      <SiteContainer>
        <Box sx={wa.outer}>
          {/* Grey background panel */}
          <Box sx={wa.panel} />

          {/* Blue gradient card */}
          <motion.div {...wa.motion.card} style={wa.motionWrapper}>
            <Box sx={wa.card}>
              {/* Title */}
              <Typography sx={wa.title}>
                What is Authentic Relating Facilitation?
              </Typography>

              {/* Description */}
              <Typography sx={wa.body}>
                Authentic Relating Facilitation brings the principles of
                authenticity, empathy, presence, and relational intelligence
                into the act of guiding others. It goes beyond logistics or
                surface-level engagement—inviting depth, realness, and
                emotional safety.
              </Typography>

              {/* Sub text */}
              <Typography sx={wa.subText}>
                An authenticrelating.com certified facilitator is someone who:
              </Typography>

              {/* Bullet Points */}
              <List sx={wa.list}>
                {bulletPoints.map((text, index) => (
                  <ListItem key={index} sx={wa.listItem}>
                    <ListItemIcon sx={wa.listItemIcon}>
                      <Box sx={wa.bulletDot} />
                    </ListItemIcon>
                    <Typography sx={wa.bulletText}>{text}</Typography>
                  </ListItem>
                ))}
              </List>

              {/* Footer */}
              <Typography sx={wa.footer}>
                This type of facilitation is equally at home in community
                circles, corporate boardrooms, conscious retreats, and intimate
                group explorations.
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </SiteContainer>
    </Section>
  );
}