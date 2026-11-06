'use client';

import React from 'react';
import { Box, Typography, Button, Paper, Container } from '@mui/material';
import { motion } from 'framer-motion';

const MotionPaper = motion(Paper);

const data = [
  {
    title: 'Authentic Relating @Work',
    desc:
      'Learn the 10 Principles of Authentic Relating by Amitabha Bhatia and cultivate self-esteem, emotional intelligence, and deep connection through relating games, mindfulness, and embodiment practices.',
  },
  {
    title: 'Authentic Relating Coaching',
    desc:
      'Develop unshakable self-trust, emotional resilience, and presence in all areas of life—relationships, work, social settings, and leadership. Strengthen assertiveness and grounded self-expression through embodiment and relational exercises.',
  },
  {
    title: 'Events',
    desc:
      'Understand the fundamental psychological, emotional, and relational needs that drive behavior. Learn to identify, communicate, and fulfill your needs while fostering deeper self-awareness and authentic connection.',
  },
  {
    title: 'Authentic Relating Games',
    desc:
      'Explore how early relational patterns shape connection, intimacy, and trust. Learn to heal insecure attachments, cultivate self-trust, and create healthy, secure relationships through relational intelligence and emotional awareness.',
  },
  {
    title: 'Books',
    desc:
      'Develop true self-worth and self-acceptance beyond external validation. Learn to embrace your strengths, overcome self-doubt, and create a strong inner foundation for personal growth and relational confidence.',
  },
  {
    title: 'Community',
    desc:
      'Go beyond surface-level self-care to nourish your mind, body, and soul. Learn forgiveness, gratitude, boundary-setting, and assertiveness, while practicing mindfulness, emotional regulation, and deep self-honoring rituals.',
  },
  {
    title: 'Blog',
    desc:
      'Engage in playful yet profound interactive exercises that deepen presence, connection, and communication skills. Learn to listen deeply, express authentically, and build emotional intelligence in a fun, engaging way.',
  },
  {
    title: 'Authentic Relating Joy Lab',
    desc:
      'Master emotional intelligence and resilience by learning to identify, process, and regulate emotions. Explore different types of emotions—primary, social, complex, survival-based, and expansive—and develop tools for self-awareness, mindfulness, and emotional balance.',
  },
];


export default function SectionCard() {
  return (

    /* SECTION WRAPPER */
    <Box
      component="section"
      sx={{
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
      }}
    >

      {/* 1440px CONTAINER */}
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1440px',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 4, lg: 5 },
        }}
      >

        {data.map((item, index) => (

          <MotionPaper
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            elevation={0}
            sx={{

              /* GRID LAYOUT — 1/3 IMAGE, 2/3 CONTENT */
              display: 'grid',

              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 2fr',
              },

              alignItems: 'center',

              gap: {
                xs: 2,
                sm: 3,
                md: 4,
              },

              p: {
                xs: 2,
                sm: 3,
                md: 4,
              },

              mb: {
                xs: 2,
                sm: 3,
                md: 4,
              },

              borderRadius: '16px',

              /* FIGMA EXACT GRADIENT */
              background:
                'linear-gradient(-60deg, rgba(119, 129, 24, 0.95) 10%, rgba(185, 201, 48, 0.81),rgba(110,160,40,0.95) 100%)',

              backdropFilter: 'blur(260px)',
              WebkitBackdropFilter: 'blur(260px)',

              boxShadow: '0px 4px 7.3px 1px #0000001A',

              color: '#fff',
            }}
          >

            {/* IMAGE SIDE (1/3) */}
            <Box
              sx={{

                width: '100%',

                height: {
                  xs: 180,
                  sm: 200,
                  md: 220,
                },

                background: '#fff',

                borderRadius: '12px',

                flexShrink: 0,
              }}
            />

            {/* CONTENT SIDE (2/3) */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >

              {/* TITLE */}
              <Typography
                sx={{
                  fontFamily: 'Red Hat Display',
                  fontWeight: 700,

                  fontSize: {
                    xs: '18px',
                    sm: '20px',
                    md: '24px',
                  },

                  mb: 1,
                }}
              >
                {item.title}
              </Typography>

              {/* DESCRIPTION */}
              <Typography
                sx={{
                  fontFamily: 'DM Sans',

                  fontSize: {
                    xs: '14px',
                    sm: '15px',
                    md: '16px',
                  },

                  lineHeight: '140%',

                  opacity: 0.95,

                  mb: 3,

                  maxWidth: '800px',
                }}
              >
                {item.desc}
              </Typography>

              {/* BUTTONS */}
              <Box
                sx={{
                  display: 'flex',
                  gap: { xs: 1.5, sm: 2 },
                  flexWrap: 'wrap',
                  flexDirection: { xs: 'row', sm: 'row' },
                  justifyContent: { xs: 'space-between', sm: 'flex-start' },
                  width: '100%',
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    color: '#fff',
                    background: 'rgba(255,255,255,0.15)',
                    borderColor: '#fff',

                    borderRadius: { xs: '8px', sm: '10px' },
                    px: { xs: 1, sm: 3 },      // Even smaller padding for equal width
                    py: { xs: 0.8, sm: 1 },
                    fontSize: { xs: '13px', sm: '16px' },

                    textTransform: 'none',
                    fontWeight: 600,
                    backdropFilter: 'blur(20px)',

                    // Make buttons take equal width on mobile
                    flex: { xs: 1, sm: '0 1 auto' }, // flex: 1 makes them share available space equally

                    '&:hover': {
                      background: 'rgba(8, 8, 8, 0.15)',
                      borderColor: '#fff',
                    },
                  }}
                >
                  Read More
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    color: '#fff',
                    background: 'rgba(255,255,255,0.15)',
                    borderColor: '#fff',

                    borderRadius: { xs: '8px', sm: '10px' },
                    px: { xs: 1, sm: 3 },
                    py: { xs: 0.8, sm: 1 },
                    fontSize: { xs: '13px', sm: '16px' },

                    textTransform: 'none',
                    fontWeight: 600,
                    backdropFilter: 'blur(20px)',

                    // Make buttons take equal width on mobile
                    flex: { xs: 1, sm: '0 1 auto' },

                    '&:hover': {
                      background: 'rgba(8, 8, 8, 0.15)',
                      borderColor: '#fff',
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Box>

            </Box>

          </MotionPaper>

        ))}

        <Typography
          sx={{
            fontSize: { xs: '0.875rem', sm: '0.9rem', md: '0.875rem' },
            color: '#000000',
            mb: { xs: 2, sm: 3 },
            lineHeight: 1.6,
            textAlign: 'center',
            display: 'block',
          }}
        >
          We're here to provide the support and guidance you need.{' '}
          <Box
            component="span"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000000',
              fontWeight: 600,
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              textDecorationThickness: '2px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                color: '#333333',
                textDecorationColor: '#333333',
                transform: 'translateX(4px)',
              }
            }}
          >
            View More
            <Box
              component="span"
              sx={{
                ml: 0.5,
                display: 'inline-flex',
                alignItems: 'center',
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateX(4px)',
                }
              }}
            >
              →
            </Box>
          </Box>
        </Typography>

      </Container>

    </Box>
  );
}