'use client';

import React from 'react';
import {
  Box,
  Grid,
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';

import EventButton from '../../../_components/buttons/EventButton';
import SectionHeader from '../../../_components/common/SectionHeader';
import SiteContainer from '../../../_components/common/SiteContainer';
import Section from '../../../_components/common/Section';

export const RecommendationSection = () => {
  const cards = [
    {
      id: 1,
      title: 'Awake & Relating Inner Truth Blog',
      description:
        'In a world of constant digital distractions and superficial interactions, the art of authentic communication has become increasingly rare and valuable. When we communicate...',
    },
    {
      id: 2,
      title: "What Is Authentic Relating? A Beginner's Guide",
      description:
        'In a world of constant digital distractions and superficial interactions, the art of authentic communication has become increasingly rare and valuable. When we communicate...',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Section sx={{ py: { xs: 4, sm: 5, md: 6 } }}>
      <SiteContainer>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader
            title="You Might Also Enjoy"
            align="center"
            sx={{ mb: { xs: 3, sm: 4, md: 4 } }}
          />

          {/* ✅ REDUCED GAP: Changed spacing to 2 (16px) */}
          <Grid
            container
            spacing={2}
            justifyContent="center"
          >
            {cards.map((card) => (
              <Grid
                item
                key={card.id}
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
                component={motion.div}
                variants={cardVariants}
              >
                <MuiCard
                  elevation={3}
                  sx={{
                    height: {
                      xs: 'auto',
                      sm: 380, // Adjusted height to fit content nicely
                      md: 400,
                      lg: 420,
                    },
                    // ✅ REMOVED maxWidth constraint so it fills the column naturally
                    width: '100%',
                    background:
                      'linear-gradient(100deg, #50B0F0 0%, #80B8F5 50%, #BFC3FA 100%)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 2,
                    boxShadow: '0 8px 24px rgba(100, 181, 246, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 16px 40px rgba(100, 181, 246, 0.4)',
                    },
                  }}
                >
                  {/* ✅ Changed to use an img tag so the image appears properly like your screenshot */}
                  <Box
                    sx={{
                      width: '100%',
                      height: {
                        xs: 160,
                        sm: 180,
                        md: 200,
                      },
                      backgroundColor: '#FFFFFF',
                      borderRadius: '12px',
                      mb: 2,
                      flexShrink: 0,
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop"
                      alt={card.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>

                  <CardContent
                    sx={{
                      flexGrow: 1,
                      width: '100%',
                      p: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      '&:last-child': {
                        pb: 1,
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{
                        color: '#FFFFFF',
                        fontWeight: 600,
                        fontSize: '1.2rem', // Matches your screenshot font size
                        lineHeight: 1.3,
                        mb: 1.5,
                      }}
                    >
                      {card.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#FFFFFF',
                        fontWeight: 400,
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        mb: 2,
                      }}
                    >
                      {card.description}
                    </Typography>

                    <Box sx={{ mt: 'auto' }}>
                      <EventButton
                        variant="glass"
                        sx={{
                          background: 'transparent',
                          color: '#FFFFFF',
                          border: '1.5px solid #FFFFFF', // Matches screenshot border
                          borderRadius: '10px',
                          px: 4,
                          py: 1,
                          fontWeight: 500,
                          fontSize: '15px',
                          textTransform: 'none',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'rgba(255,255,255,0.2)',
                          },
                        }}
                      >
                        Read More
                      </EventButton>
                    </Box>
                  </CardContent>
                </MuiCard>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </SiteContainer>
    </Section>
  );
};

export default RecommendationSection;