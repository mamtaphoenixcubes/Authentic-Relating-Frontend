'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Import components
import SiteContainer from '../common/SiteContainer'; // Adjust path as needed
import EventButton from '../buttons/EventButton'; // Add this import

// Import theme values
import colors from '../../../theme/colors';
import typography from '../../../theme/typography';
import theme from '../../../theme/theme';

const MotionBox = motion(Box);
const MotionDiv = motion.div;

export const AuthenticRelatingSection = () => {

  // Extract theme values
  const authentic = typography.authenticRelating;
  const design = theme.custom.authenticRelating;

  const buttons = [
    { text: 'Explore the book', url: '/mybooks' },
    { text: 'Join a circle', url: '/relatingcircles' },
    { text: 'Experience training', url: '/onlinecourse' },
  ];

  return (
    <Box
      component="section"
      className="authentic-relating-section"
      sx={{
        width: "100%",
        // keep top padding unchanged
        pt: { xs: 0, sm: 8, md: 10, lg: 12, xl: 14 },
        // 👇 BOTTOM GAP REDUCED
        pb: { xs: 2, sm: 2, md: 3, lg: 3, xl: 3 },
      }}
    >
      <SiteContainer
        sx={{
          width: '100%',
          px: {
            xs: 2,
            sm: 3,
            md: 2,
            lg: 2,
            xl: 2,
          },
        }}
      >
        {/* MAIN CARD */}
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{
            boxShadow: colors.authenticCardShadowHover,
          }}
          sx={{
            width: design.card.width,
            borderRadius: design.card.borderRadius,
            p: design.card.padding,
            mb: { xs: 5, md: 8 },

            // ✅ Connected to colors.js
            background: colors.authenticCardGradient,

            backdropFilter: 'blur(200px)',
            WebkitBackdropFilter: 'blur(200px)',

            // ✅ Connected to colors.js
            boxShadow: colors.authenticCardShadow,

            // ✅ Connected to colors.js
            color: colors.authenticText,
          }}
        >
          {/* HEADER */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            sx={{
              textAlign: 'center',
              mb: { xs: 4, md: 6 },
            }}
          >
            <Typography
              sx={{
                fontWeight: typography.authenticRelating.mainTitle.fontWeight,
                fontSize: {
                  xs: typography.authenticRelating.mobileTitle.fontSize.xs,
                  sm: typography.authenticRelating.mobileTitle.fontSize.sm,
                  md: typography.authenticRelating.mainTitle.fontSize.md,
                  lg: typography.authenticRelating.mainTitle.fontSize.lg,
                },
              }}
            >
              The{' '}
              <Box
                component="span"
                sx={{
                  fontWeight: typography.authenticRelating.mainTitleSpan.fontWeight,
                  fontSize: {
                    xs: typography.authenticRelating.mobileTitleSpan.fontSize.xs,
                    sm: typography.authenticRelating.mobileTitleSpan.fontSize.sm,
                    md: typography.authenticRelating.mainTitleSpan.fontSize.md,
                    lg: typography.authenticRelating.mainTitleSpan.fontSize.lg,
                  },
                }}
              >
                Five Dimensions
              </Box>{' '}
              of Authentic Relating
            </Typography>
          </MotionBox>

          {/* GRID */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: design.grid.columns,
              columnGap: {
                xs: 0,
                md: design.grid.gap.md,
                lg: design.grid.gap.lg,
              },
              rowGap: { xs: 4, sm: 0 },
              alignItems: 'center',
            }}
          >
            {/* LEFT - Image Column */}
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: { xs: '100%', sm: 'auto' },
                ml: { xs: 1.5, sm: 2, md: 2, lg: 2, xl: 4 },
              }}
            >
              <Box
                sx={{
                  width: { xs: 180, sm: 180, md: 220, lg: 300, xl: 300 },
                  height: { xs: 180, sm: 180, md: 220, lg: 300, xl: 300 },
                  background: '#FFE4D5',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: { xs: 1.5, sm: 2, md: 2, lg: 2, xl: 3 },
                  mt: { xs: 0, sm: 2 },
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/Amitabhabhatia.png"
                  alt="Amitabh Bhatia"
                  fill
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center',
                    // ADDED: Top padding to create the gap
                    paddingTop: '2%', // Adjust this percentage to get the exact gap you need
                    boxSizing: 'border-box' // Ensures padding doesn't expand the image bounds
                  }}
                  sizes="(max-width: 900px) 180px, (max-width: 1200px) 220px, 300px"
                />
              </Box>

              <Typography
                sx={{
                  mt: { xs: 0.5, sm: 1 },
                  fontWeight: 600,
                  textAlign: 'center',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem', lg: '1.3rem', xl: '1.4rem' },
                }}
              >
                Amitabh Bhatia
              </Typography>

              <Typography
                sx={{
                  opacity: 0.9,
                  textAlign: 'center',
                  fontSize: { xs: '0.75rem', sm: '0.75rem', md: '0.9rem', lg: '1rem', xl: '1.1rem' },
                  mt: { xs: 0.25, sm: 0.5 },
                  mb: { xs: 0.25, sm: 2.5 },
                }}
              >
                Founder of AuthenticRelating.org
              </Typography>
            </MotionBox>

            {/* RIGHT - Text Column */}
            <MotionBox
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                type: 'spring',
                stiffness: 100,
              }}
              sx={{
                textAlign: { xs: 'left', sm: 'left' },
                pl: { sm: 2, md: 0 },
              }}
            >
              {/* Mobile Header */}
              <Box
                sx={{
                  mb: { xs: 3, md: 4 },
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: authentic.mobileTitle.fontFamily,
                    fontWeight: authentic.mobileTitle.fontWeight,
                    fontSize: {
                      xs: authentic.mobileTitle.fontSize.xs,
                      sm: authentic.mobileTitle.fontSize.sm,
                      md: authentic.mobileTitle.fontSize.md,
                      lg: authentic.mobileTitle.fontSize.lg,
                    },
                    lineHeight: authentic.mobileTitle.lineHeight,
                    color: colors.authenticText,
                  }}
                >
                  The{' '}
                  <Box
                    component="span"
                    sx={{
                      fontFamily: authentic.mobileTitleSpan.fontFamily,
                      fontWeight: authentic.mobileTitleSpan.fontWeight,
                      fontSize: {
                        xs: authentic.mobileTitleSpan.fontSize.xs,
                        sm: authentic.mobileTitleSpan.fontSize.sm,
                        md: authentic.mobileTitleSpan.fontSize.md,
                        lg: authentic.mobileTitleSpan.fontSize.lg,
                      },
                      lineHeight: authentic.mobileTitleSpan.lineHeight,
                    }}
                  >
                    Five Dimensions
                  </Box>{' '}
                  of Authentic Relating
                </Typography>
              </Box>

              {/* Text Line 1 */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Typography
                  sx={{
                    fontFamily: authentic.body.fontFamily,
                    fontWeight: authentic.body.fontWeight,
                    fontSize: {
                      xs: authentic.body.fontSize.xs,
                      sm: authentic.body.fontSize.sm,
                      md: authentic.body.fontSize.md,
                      lg: authentic.body.fontSize.lg,
                    },
                    lineHeight: '140%',
                    letterSpacing: '0%',
                    mb: 2,
                    color: colors.authenticText,
                  }}
                >
                  Discover the map that brings you home—to yourself and to others.
                </Typography>
              </MotionBox>

              {/* Text Line 2 */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Typography
                  sx={{
                    fontFamily: authentic.body.fontFamily,
                    fontWeight: authentic.body.fontWeight,
                    fontSize: {
                      xs: authentic.body.fontSize.xs,
                      sm: authentic.body.fontSize.sm,
                      md: authentic.body.fontSize.md,
                      lg: authentic.body.fontSize.lg,
                    },
                    lineHeight: '140%',
                    letterSpacing: '0%',
                    mb: {
                      xs: 4,
                      sm: 2,
                      md: 6,
                      lg: 7,
                      xl: 8,
                      '2xl': 10,
                    },
                    color: colors.authenticText,
                  }}
                >
                  The Five Dimensions of Authentic Relating is more than a framework—it's a
                  transformational lens for living, leading, and loving with integrity, empathy, presence, and
                  depth. Through 45 embodied practices, journal prompts, sentence stems, games, and
                  real-life integration tools, this body of work invites you into richer conversations, deeper
                  intimacy, and conscious connection.
                </Typography>
              </MotionBox>

              {/* Text Line 3 */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Typography
                  sx={{
                    fontFamily: authentic.finalText.fontFamily,
                    fontWeight: authentic.finalText.fontWeight,
                    mb: {
                      xs: 4,
                      sm: 5,
                      md: 6,
                      lg: 7,
                      xl: 8,
                      '2xl': 10,
                    },
                    fontSize: {
                      xs: authentic.finalText.fontSize.xs,
                      sm: authentic.finalText.fontSize.mb,
                      md: authentic.finalText.fontSize.lg,
                      lg: authentic.finalText.fontSize.xl,
                    },
                    color: colors.authenticText,
                  }}
                >
                  Because real connection isn't taught—it's practiced.
                </Typography>
              </MotionBox>

              {/* CTA BUTTONS */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  flexWrap: 'wrap',
                  gap: { xs: 1.5, sm: 1.5, md: 2 },
                  justifyContent: {
                    xs: 'center',
                    sm: 'center',
                    md: 'flex-start',
                  },
                  alignItems: 'center',
                  // Ensure the parent container allows full width on mobile
                  width: '100%',
                }}
              >
                {buttons.map((item, index) => (
                  // 1. Wrap the Link in a Box to control responsive width safely
                  <Box
                    key={index}
                    sx={{
                      width: { xs: '100%', sm: 'auto' },
                      display: 'flex'
                    }}
                  >
                    <Link
                      href={item.url}
                      style={{
                        textDecoration: 'none',
                        width: '100%', // 2. Make the Link full width on mobile
                        display: 'flex',
                        justifyContent: 'center'
                      }}
                    >
                      <MotionBox
                        whileHover={{
                          scale: 1.05,
                          y: -3,
                          transition: {
                            type: 'spring',
                            stiffness: 300,
                            damping: 20,
                          },
                        }}
                        whileTap={{ scale: 0.95 }}
                        sx={{
                          width: { xs: '100%', sm: 'auto' }, // 3. Make the animation wrapper full width on mobile
                          display: 'flex',
                        }}
                      >
                        <EventButton
                          variant="glass"
                          sx={{
                            width: { xs: '100%', sm: 'auto' },
                            borderRadius: '11px',
                            background: 'rgba(255, 255, 255, 0.15)',

                            // 👇 ADD THIS LINE to kill the default border from the glass variant
                            border: 'none !important',

                            position: 'relative',

                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              inset: 0,
                              borderRadius: 'inherit',
                              padding: '1.5px',
                              background: 'linear-gradient(90deg, #ffffff 0%, #fcb8b8 100%)',
                              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                              WebkitMaskComposite: 'xor',
                              maskComposite: 'exclude',
                              pointerEvents: 'none',
                            },

                            '&:hover': {
                              background: 'rgba(255, 255, 255, 0.22)',
                              '&::before': {
                                background: '#FFFFFF',
                              },
                            },
                          }}
                        >
                          {item.text}
                        </EventButton>
                      </MotionBox>
                    </Link>
                  </Box>
                ))}
              </MotionBox>
            </MotionBox>
          </Box>
        </MotionBox>

        {/* VIDEO BOX */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          sx={{
            width: '100%',
            height: { xs: 200, sm: 360, md: 820 },
            bgcolor: '#d8efef',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: { xs: 5, md: 8 },
            position: 'relative',
            overflow: 'hidden',
            isolation: 'isolate',
            transform: 'translateZ(0)',
          }}
        >
          {/* VIDEO */}
          <video
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            style={{
              position: 'absolute',
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 'inherit',
              transform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden',
              top: 0,
              left: 0,
              zIndex: 0,
            }}
          >
            <source src="/video/homevideotemp.mp4" type="video/mp4" />
          </video>

        </MotionBox>
      </SiteContainer>
    </Box>
  );
};

export default AuthenticRelatingSection;
