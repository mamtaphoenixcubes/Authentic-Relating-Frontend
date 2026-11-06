'use client';

import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

import Section from '@/app/_components/common/Section';
import SiteContainer from '@/app/_components/common/SiteContainer';
import Card from '@/app/_components/common/Card';

const MotionBox = motion(Box);

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export default function JoyLabHighlights() {
  const theme = useTheme();
  const s = theme.custom.joyLabHighlights;

  const cards = [
    "You'll laugh, play, and feel more alive than ever.",
    "You'll build deep, real connections in a short time.",
    "You'll practice the art of being fully present and seen.",
    "You'll leave feeling joyful, refreshed, and inspired.",
  ];

  return (
    <Section sx={{ my: 0, py: 0 }}>
      <SiteContainer>
        <MotionBox
          sx={s.panel}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          {/* TITLE PILL */}
          <MotionBox
            sx={{...s.pill,border: '2px solid rgba(255,255,255,0.85)',

              // Shadow
              boxShadow: '0 3px 6px rgba(0,0,0,0.12)',}}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Typography sx={s.pillTitle}>
              What Happens in the Joy Lab?
            </Typography>
          </MotionBox>

          {/* CARDS ROW */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Box sx={s.row}>
              {cards.map((text, i) => (
                <motion.div key={i} variants={cardVariants}>
                  <Card sx={s.card}>
                    <Typography sx={s.cardText}>{text}</Typography>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </MotionBox>
      </SiteContainer>
    </Section>
  );
}