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
      title: 'Morbi varius ornare ante non posuere. Morbi lacus.',
      description: 'Amet erat vitae, interdum semper leo.',
    },
    {
      id: 2,
      title: 'Morbi varius ornare ante non posuere. Morbi lacus.',
      description: 'Amet erat vitae, interdum semper leo.',
    },
    {
      id: 3,
      title: 'Morbi varius ornare ante non posuere. Morbi lacus.',
      description: 'Amet erat vitae, interdum semper leo.',
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

          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 3 }}
            justifyContent="center"
          >
            {cards.map((card) => (
              <Grid
                item
                key={card.id}
                xs={12}
                sm={4}
                md={4}
                lg={4}
                xl={4}
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
                      sm: 320,
                      md: 310,
                      lg: 360,
                      xl: 380,
                    },
                    width: '100%',
                    maxWidth: {
                      xs: 400,
                      sm: 200,
                      md: 280,
                      lg: 400,
                      xl: 420,
                    },
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
                  <CardMedia
                    component="div"
                    sx={{
                      width: '100%',
                      height: {
                        xs: 120,
                        sm: 120,
                        md: 130,
                        lg: 140,
                        xl: 150,
                      },
                      backgroundColor: '#FFFFFF',
                      borderRadius: '12px',
                      mb: 2,
                      flexShrink: 0,
                    }}
                  />

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
                        lineHeight: 1.5,
                      }}
                    >
                      {card.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#FFFFFF',
                        fontWeight: 400,
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
                          background:
                            'linear-gradient(105deg, #6BB9F1 0%, #80C5F5 100%)',
                          color: '#FFFFFF',
                          border: '1px solid rgba(255,255,255,0.7)',
                          borderRadius: '8px',
                          px: 3,
                          py: 1,
                          fontWeight: 600,
                          textTransform: 'none',
                          boxShadow: '0 3px 8px rgba(0,0,0,0.10)',
                          transition: 'all 0.3s ease',

                          '&:hover': {
                            background:
                              'linear-gradient(105deg, #58AEEF 0%, #70BDF3 100%)',
                            boxShadow: '0 5px 12px rgba(0,0,0,0.15)',
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