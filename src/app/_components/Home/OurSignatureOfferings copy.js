'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const offerings = [
  { title: 'Core Human Needs', image: '/OurSignatureOfferings1.png' },
  { title: 'Authentic Relating Essentials', image: '/OurSignatureOfferings2.png' },
  { title: 'Authentic Confidence', image: '/OurSignatureOfferings3.png' },
  { title: 'Authentic Self-Care', image: '/OurSignatureOfferings4.png' },
  { title: 'Understanding & Managing Emotions', image: '/OurSignatureOfferings5.png' },
  { title: 'Attachment Styles', image: '/OurSignatureOfferings6.png' },
];

export default function OurSignatureOfferings() {
  return (
    <Box sx={{ py: 8, px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 } }}>
      {/* Title */}
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        sx={{ color: '#6BAA1E', mb: 1 }}
      >
        Our Signature Offerings
      </Typography>

      <Typography
        textAlign="center"
        sx={{ 
          maxWidth: 600, 
          mx: 'auto', 
          mb: { xs: 4, sm: 5, md: 6 }, 
          color: '#666',
          px: { xs: 1, sm: 0 }
        }}
      >
        Morbi varius ornare ante non posuere. Morbi lacus lacus, auctor sit amet erat vitae, interdum semper leo.
      </Typography>

      {/* Button */}
      <Box textAlign="center" mb={{ xs: 4, sm: 5, md: 6 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#A4C639',
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 600,
            px: { xs: 2.5, sm: 3 },
            py: { xs: 1, sm: 1.25 },
            fontSize: { xs: '0.9rem', sm: '1rem' }
          }}
        >
          View All Offerings
        </Button>
      </Box>

      {/* Mobile Layout */}
      <Box sx={{ 
        display: { xs: 'grid', sm: 'none' },
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 2,
        mb: 4
      }}>
        {offerings.map((item, index) => (
          <MotionBox
            key={`mobile-${index}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            sx={{
              height: { xs: 150, sm: 180 },
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))',
                display: 'flex',
                alignItems: 'flex-end',
                p: 1.5,
              }}
            >
              <Typography
                sx={{
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: { xs: '0.8rem', sm: '0.85rem' },
                  lineHeight: 1.2,
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </MotionBox>
        ))}
      </Box>

      {/* Desktop/Larger Screens Layout */}
      <Box sx={{ 
        display: { xs: 'none', sm: 'flex' },
        flexDirection: 'column', 
        gap: { sm: 3, md: 4, lg: 5 } 
      }}>
        {[offerings.slice(0, 3), offerings.slice(3, 6)].map((row, rowIndex) => (
          <Box
            key={`row-${rowIndex}`}
            sx={{
              display: 'flex',
              gap: { sm: 2, md: 3, lg: 4 },
              justifyContent: rowIndex % 2 === 0 ? 'flex-start' : 'flex-end',
              flexWrap: 'wrap',
            }}
          >
            {row.map((item, index) => (
              <MotionBox
                key={`desktop-${rowIndex}-${index}`}
                initial={{ opacity: 0, x: rowIndex % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
                sx={{
                  width: { 
                    sm: 'calc(33.333% - 16px)',
                    md: 'calc(25% - 24px)',
                    lg: 'calc(22% - 32px)',
                    xl: 'calc(20% - 32px)'
                  },
                  height: { 
                    sm: 180, 
                    md: 200, 
                    lg: 220, 
                    xl: 250 
                  },
                  borderRadius: { 
                    sm: '12px', 
                    md: '14px', 
                    lg: '16px' 
                  },
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 16px 40px rgba(0,0,0,0.25)',
                  },
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />

                {/* Overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.15))',
                    display: 'flex',
                    alignItems: 'flex-end',
                    p: { sm: 1.5, md: 2, lg: 2.5 },
                  }}
                >
                  <Typography
                    sx={{
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: { 
                        sm: '0.85rem', 
                        md: '0.9rem', 
                        lg: '0.95rem', 
                        xl: '1rem' 
                      },
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </MotionBox>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
