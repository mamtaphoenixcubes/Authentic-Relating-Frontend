'use client';

import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const MotionBox = motion(Box);

export default function JoyLabHighlights() {
  const theme = useTheme();
  const s = theme.custom.joyLabHighlights;

  // These are the 4 text highlights from your screenshot
  const highlights = [
    "You'll laugh, play, and feel more alive than ever.",
    "You'll build deep, real connections in a short time.",
    "You'll practice the art of being fully present and seen.",
    "You'll leave feeling joyful, refreshed, and inspired.",
  ];

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
      {/* 
        Outer Orange Panel 
      */}
      <MotionBox
        sx={s.panel}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Title Pill - Modified to match image (transparent bg, no border) */}
        <Box 
          sx={{ 
            ...s.pill, 
            border: 'none', 
            backgroundColor: 'transparent', 
            boxShadow: 'none' 
          }}
        >
          <Typography sx={s.pillTitle}>
            What Happens in the Joy Lab?
          </Typography>
        </Box>

        {/* 4-Card CSS Grid */}
        <Box sx={s.row}>
          {highlights.map((text, index) => (
            <MotionBox
              key={index}
              sx={s.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * (index + 1) }}
            >
              <Typography sx={s.cardText}>
                {text}
              </Typography>
            </MotionBox>
          ))}
        </Box>
      </MotionBox>
    </Container>
  );
}