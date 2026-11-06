'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import SiteContainer from '../../_components/common/SiteContainer';
import Section from '../../_components/common/Section';

const circleData = [
  {
    title: 'Humility',
    desc: 'No hierarchy, just shared wisdom and mutual learning.',
  },
  {
    title: 'Equality',
    desc: 'Everyone is seen and valued, breaking social divisions.',
  },
  {
    title: 'Trust',
    desc: 'A safe space for vulnerability and deep connection.',
  },
  {
    title: 'Authentic Communication',
    desc: 'Speaking truthfully, listening fully, and being present.',
  },
];

const SKEW_ANGLE = -8; // degrees — tweak this single value to change all card slants

const CirclePowerCard = () => {
  return (
    <Section>
      <SiteContainer>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Box
            sx={{
              borderRadius: { xs: 3, sm: 4, md: 5, lg: 6, xl: 3 },
              p: { xs: 3, sm: 4, md: 5, lg: 6, xl: 5 },
              background: 'linear-gradient(135deg, #40E0D0, #008B8B)',
              color: '#fff',
              boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 4, sm: 4, md: 5, lg: 5, xl: 4 },
              alignItems: 'center',
              minHeight: { xs: 'auto', sm: '450px', md: '500px', lg: '550px' },
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative background radial */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.1,
                background:
                  'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                pointerEvents: 'none',
              }}
            />

            {/* LEFT — 2×2 slanted cards */}
            <Box
              sx={{
                flex: '0 1 auto',
                width: { xs: '100%', sm: '60%', xl: '59%' },
                maxWidth: { xl: 780 },
                position: 'relative',
                zIndex: 2,
              }}
            >
              <Grid
                container
                spacing={{ xs: 2, sm: 2.5, md: 3, xl: 2 }}
                justifyContent="center"
              >
                {circleData.map((item, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    key={index}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <motion.div
                      initial={{ scale: 0.85, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          width: '100%',
                          maxWidth: {
                            xs: '100%',
                            sm: 240,
                            md: 260,
                            lg: 280,
                            xl: 350,
                          },
                          minHeight: {
                            xs: 120,
                            sm: 130,
                            md: 140,
                            lg: 150,
                            xl: 160,
                          },
                          transform: `skewX(${SKEW_ANGLE}deg)`,
                          transformOrigin: 'center center',
                          borderRadius: { xs: 2, sm: 2.5, md: 3 },
                          background:
                            'linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
                          backdropFilter: 'blur(10px)',
                          border: '2px solid rgba(255,255,255,0.9)',
                          p: { xs: 2, sm: 2, md: 2.5, lg: 3 },
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          cursor: 'default',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: `skewX(${SKEW_ANGLE}deg) translateY(-6px)`,
                            boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
                            background:
                              'linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0.1))',
                          },
                        }}
                      >
                        <Box sx={{ transform: `skewX(${-SKEW_ANGLE}deg)` }}>
                          <Typography
                            fontWeight={700}
                            fontSize={{ xs: 16, sm: 16, md: 18, lg: 19, xl: 20 }}
                            lineHeight={1.2}
                            sx={{ mb: { xs: 1, md: 1.5 }, color: '#fff' }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            fontSize={{ xs: 13, sm: 13, md: 14, lg: 14, xl: 15 }}
                            lineHeight={1.4}
                            sx={{ opacity: 0.9, color: '#fff' }}
                          >
                            {item.desc}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Right headline text — pinned to the right */}
            <Box
              sx={{
                flex: '0 0 auto',
                ml: 'auto',
                mr: { xs: 0, lg: 4, xl: 6 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
                zIndex: 2,
                pr: { xs: 0, lg: 3, xl: 5 },
              }}
            >
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typography
                  fontWeight={600}
                  fontSize={{ xs: 22, sm: 26, md: 32, lg: 40, xl: 36 }}
                  lineHeight={1.35}
                  textAlign="right"
                  sx={{
                    color: '#fff',
                    maxWidth: {
                      xs: '100%',
                      sm: 260,
                      md: 300,
                      lg: 340,
                      xl: 380,
                    },
                  }}
                >
                  The Power of the <br />
                  Circle: Humility,
                  <br /> Equality, and <br />
                  Authentic <br />
                  Communication
                </Typography>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </SiteContainer>
    </Section>
  );
};

export default CirclePowerCard;