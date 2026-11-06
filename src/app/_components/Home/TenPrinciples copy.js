'use client';

import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const principles = [
  { id: 1, title: 'Cultivate Presence and Awareness', img: '/TenPrinciples1.png' },
  { id: 2, title: 'Approach with Openness, Curiosity and a Sense of Safety', img: '/TenPrinciples2.png' },
  { id: 3, title: 'Attuned and Reflective Listening', img: '/TenPrinciples3.png' },
  { id: 4, title: 'Express and Communicate with Honesty, Care, and Congruence', img: '/TenPrinciples4.png' },
  { id: 5, title: 'Walk in Self-Responsibility with Integrity and Agency', img: '/TenPrinciples5.png' },
  { id: 6, title: 'Practice Self-Care to Sustain Authenticity', img: '/TenPrinciples6.png' },
  { id: 7, title: 'Embrace Discomfort to Grow', img: '/TenPrinciples7.png' },
  { id: 8, title: 'Infuse Lightness and Play', img: '/TenPrinciples8.png' },
  { id: 9, title: 'Cultivate Compassion — For Others and Yourself', img: '/TenPrinciples9.png' },
  { id: 10, title: 'Foster Meaningful and Lasting Connections Through Service', img: '/TenPrinciples10.png' },
];

// Parent variants for wave animation
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18, // delay between each card
    },
  },
};

// Each card animation
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function TenPrinciples() {
  return (
    <Box sx={{ py: { xs: 4, sm: 6, md: 8 }, px: { xs: 2, sm: 3, md: 4 } }}>

      {/* HEADER */}
      <Box sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto', mb: { xs: 4, sm: 5, md: 6 } }}>
        <Typography variant="h4" sx={{ color: '#FF826E', fontWeight: 700 }}>
          Introducing
        </Typography>
        <Typography variant="h4" sx={{ color: '#FF826E', fontWeight: 700 }}>
          <Box component="span" sx={{ fontWeight: 500 }}>10 Principles </Box>
          of Authentic Relating
        </Typography>
        <Typography variant="h4" sx={{ color: '#FF826E', fontWeight: 700 }}>
          by Amitabha Bhatia
        </Typography>
      </Box>

      {/* GRID WITH WAVE EFFECT */}
      <MotionBox
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(5, 1fr)',
            md: 'repeat(5, 1fr)',
          },
          gap: { xs: 1.5, sm: 2, md: 2.5 },
          maxWidth: 1200,
          mx: 'auto',
        }}
      >
        {principles.map(item => (
          <MotionBox
            key={item.id}
            variants={cardVariants}
            sx={{
              position: 'relative',
              borderRadius: { xs: 2, sm: 2.5, md: 3 },
              overflow: 'hidden',
              height: { xs: 220, sm: 200, md: 220, lg: 250 },
              border: '2px solid #fff',
              boxShadow: '0px 4px 15px rgba(0,0,0,0.1)',
              '&:hover': {
                boxShadow: '0px 10px 25px rgba(0,0,0,0.15)',
                transform: 'translateY(-4px)',
                transition: 'all 0.3s ease',
              },
            }}
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              style={{ objectFit: 'cover' }}
            />

            {/* Overlay */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.85))',
                p: 1.5,
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <Typography
                sx={{
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  lineHeight: 1.2,
                }}
              >
                {item.id}. {item.title}
              </Typography>
            </Box>
          </MotionBox>
        ))}
      </MotionBox>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}       // start hidden & below
        whileInView={{ opacity: 1, y: 0 }}    // animate when in view
        viewport={{ once: true }}             // animate only once
        transition={{ duration: 0.8 }}        // smooth animation
      >
        <Box sx={{ textAlign: 'center', mt: { xs: 4, sm: 5, md: 6 } }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FF826E',
              px: 4,
              py: 1.5,
              borderRadius: '12px',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': { backgroundColor: '#FF6F59' },
            }}
          >
            Get the Book →
          </Button>
        </Box>
      </motion.div>


    </Box>
  );
}
