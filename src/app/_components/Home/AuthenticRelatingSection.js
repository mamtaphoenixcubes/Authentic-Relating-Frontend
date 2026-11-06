'use client';

import React, { useRef, useState } from 'react';
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
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Extract theme values
  const authentic = typography.authenticRelating;
  const design = theme.custom.authenticRelating;

  const buttons = [
    { text: 'Explore the book', url: '/mybooks' },
    { text: 'Join a circle', url: '/relatingcircles' },
    { text: 'Experience training', url: '/onlinecourse' },
  ];

  const handleToggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

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
                  boxShadow: '0px 0px 50px 0px #00497F4D',
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
                          display: 'flex'
                        }}
                      >
                        <EventButton
                          variant="glass"
                          sx={{ width: { xs: '100%', sm: 'auto' } }} // 4. Stretch the button itself
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
          whileHover={{
            scale: 1.02,
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            transition: { duration: 0.3 },
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          sx={{
            width: '100%',
            height: { xs: 200, sm: 260, md: 510, lg: 540 },
            bgcolor: '#d8efef',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: { xs: 5, md: 8 },
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* VIDEO */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              top: 0,
              left: 0,
              zIndex: 0,
            }}
          >
            <source src="/video/homeVideo.mp4" type="video/mp4" />
          </video>

          {/* OVERLAY */}
          <MotionBox
            animate={{
              opacity: isHovered || !isPlaying ? 0.35 : 0,
            }}
            transition={{ duration: 0.4 }}
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0,0.35)',
              zIndex: 1,
            }}
          />

          {/* Animated background gradient */}
          <MotionBox
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            sx={{
              position: 'absolute',
              width: '150%',
              height: '150%',
              background:
                'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
              opacity: 0.3,
              zIndex: 1,
            }}
          />

          {/* PLAY / PAUSE BUTTON */}
          <MotionBox
            onClick={handleToggleVideo}
            animate={{
              opacity: isHovered || !isPlaying ? 1 : 0,
              scale: [1, 1.1, 1],
              boxShadow: [
                '0 0 0 0 rgba(255,255,255,0.7)',
                '0 0 0 20px rgba(255,255,255,0)',
                '0 0 0 0 rgba(255,255,255,0)',
              ],
            }}
            transition={{
              duration: 0.4,
            }}
            sx={{
              width: { xs: 60, md: 70 },
              height: { xs: 60, md: 70 },
              borderRadius: '50%',
              bgcolor: 'rgba(255,255,255,0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {isPlaying ? (
              /* PAUSE ICON */
              <Box sx={{ display: 'flex', gap: '4px' }}>
                <Box sx={{ width: '6px', height: '20px', bgcolor: '#00A7B7' }} />
                <Box sx={{ width: '6px', height: '20px', bgcolor: '#00A7B7' }} />
              </Box>
            ) : (
              /* PLAY ICON */
              <Box
                sx={{
                  width: 0,
                  height: 0,
                  borderLeft: '20px solid #00A7B7',
                  borderTop: '14px solid transparent',
                  borderBottom: '14px solid transparent',
                  ml: '6px',
                }}
              />
            )}
          </MotionBox>
        </MotionBox>
      </SiteContainer>
    </Box>
  );
};

export default AuthenticRelatingSection;