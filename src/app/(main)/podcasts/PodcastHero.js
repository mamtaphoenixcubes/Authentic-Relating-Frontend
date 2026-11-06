'use client';

import { Box, Stack, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Common components
import SiteContainer from '../../_components/common/SiteContainer';

// =====================================================
// CONSTANTS
// =====================================================

const platforms = [
  '/svg/podcast/podcast4.svg',
  '/svg/podcast/podcast1.svg',
  '/svg/podcast/podcast2.svg',
  '/svg/podcast/podcast3.svg',
];

const bold = { fontWeight: 700 };

// =====================================================
// FRAMER MOTION VARIANTS
// =====================================================

const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const eyebrowMotion = {
  hidden: { opacity: 0, x: -35, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const titleLineMotion = {
  hidden: { opacity: 0, y: 55, rotateX: -70, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const hostMotion = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const platformMotion = {
  hidden: { opacity: 0, scale: 0.6, y: 25, rotate: -8, filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageMotion = {
  hidden: { opacity: 0, scale: 0.82, x: 80, rotateY: -12, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    rotateY: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.25, delay: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
};

const vectorOneMotion = {
  hidden: { opacity: 0, x: 55, y: -35, rotate: 12, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 1, delay: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const vectorTwoMotion = {
  hidden: { opacity: 0, x: -55, y: 35, rotate: -12, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const descriptionTitleMotion = {
  hidden: { opacity: 0, y: 35, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const descriptionBodyMotion = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
  },
};

// =====================================================
// COMPONENT
// =====================================================

export default function PodcastHero() {
  const theme = useTheme();
  const styles = theme.custom.podcastHero;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={heroContainer}
      style={{ perspective: 1200 }}
    >
      <Box sx={styles.wrapper}>
        <SiteContainer 
          sx={{ 
            ...styles.container,
            // 👇 ADDED: Overrides default container width to allow wider layout
            maxWidth: { xs: '100%', md: '970px', lg: '1320px', xl: '1600px' } 
          }}
        >
          {/* ---------- MOBILE IMAGE PLACEHOLDER ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.94, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Box sx={styles.mobileImagePlaceholder} />
          </motion.div>

          {/* ---------- HERO STACK ---------- */}
          <Stack
            direction={styles.stack.direction}
            spacing={styles.stack.spacing}
            alignItems={styles.stack.alignItems}
          >
            {/* ===== LEFT CONTENT ===== */}
            <Box sx={{ ...styles.leftBox, flex: 1.2 }}>
              {/* Eyebrow */}
              <motion.div variants={eyebrowMotion}>
                <Typography sx={styles.eyebrow}>
                  Authentic Relating Vibes
                </Typography>
              </motion.div>

              {/* Main title */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.16, delayChildren: 0.15 },
                  },
                }}
                style={{ perspective: 900 }}
              >
                <Typography sx={{ ...styles.mainTitle, overflow: 'hidden' }}>
                  <motion.span
                    variants={titleLineMotion}
                    style={{
                      display: 'block',
                      transformOrigin: 'left bottom',
                      willChange: 'transform, opacity, filter',
                    }}
                  >
                    The Official Podcast of
                  </motion.span>

                  <motion.span
                    variants={titleLineMotion}
                    style={{
                      display: 'block',
                      transformOrigin: 'left bottom',
                      willChange: 'transform, opacity, filter',
                    }}
                  >
                    AuthenticRelating.com
                  </motion.span>
                </Typography>
              </motion.div>

              {/* Host */}
              <motion.div variants={hostMotion}>
                <Typography sx={styles.hostLine}>
                  <Box component="span" sx={{ fontWeight: 400 }}>
                    Hosted by{' '}
                  </Box>
                  <Box component="span" sx={{ fontWeight: 600 }}>
                    Amitabha Bhatia
                  </Box>
                </Typography>
              </motion.div>

              {/* Platform icons */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
                  },
                }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ mt: 3, ...styles.platformsStack }}
                >
                  {platforms.map((src, idx) => (
                    <motion.div
                      key={src}
                      variants={platformMotion}
                      whileHover={{ scale: 1.12, y: -5, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                      style={{ cursor: 'pointer' }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '50%',
                          backgroundColor: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                          ...styles.platformCircle,
                        }}
                      >
                        <Box
                          component="img"
                          src={src}
                          alt={`Podcast platform ${idx + 1}`}
                          sx={{
                            width: '50%',
                            height: '50%',
                            objectFit: 'contain',
                            ...styles.platformIcon,
                          }}
                        />
                      </Box>
                    </motion.div>
                  ))}
                </Stack>
              </motion.div>
            </Box>

            {/* ===== RIGHT MEDIA ===== */}
            {/* 👇 CHANGED: Reduced image width to give the text more space */}
            <Box sx={{ ...styles.rightBox, width: { xs: '70%', sm: '35%', md: '30%' }, perspective: 1200 }}>
              {/* Main image */}
              <motion.div
                variants={imageMotion}
                whileHover={{ scale: 1.025, y: -5 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                style={{
                  width: '100%',
                  height: '100%',
                  transformStyle: 'preserve-3d',
                }}
              >
                <Box sx={styles.mainImageWrapper}>
                  <Image
                    src="/podcast/heropadcast.png"
                    alt="Main"
                    fill
                    style={styles.mainImage}
                    sizes="(max-width: 600px) 300px, (max-width: 900px) 400px, 560px"
                  />
                </Box>
              </motion.div>

              {/* Vector one: top right */}
              <motion.div
                variants={vectorOneMotion}
                style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
              >
                <Box sx={styles.vectorOne}>
                  <Image
                    src="/Vectorone.png"
                    alt="Vector One"
                    fill
                    style={styles.vectorImage}
                    sizes="(max-width: 600px) 150px, (max-width: 900px) 220px, 280px"
                  />
                </Box>
              </motion.div>

              {/* Vector two: bottom left */}
              <motion.div
                variants={vectorTwoMotion}
                style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
              >
                <Box sx={styles.vectorTwo}>
                  <Image
                    src="/Vectortwo.png"
                    alt="Vector Two"
                    fill
                    style={styles.vectorImage}
                    sizes="(max-width: 600px) 150px, (max-width: 900px) 220px, 280px"
                  />
                </Box>
              </motion.div>
            </Box>
          </Stack>

          {/* ---------- DESCRIPTION SECTION ---------- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.18 } },
            }}
          >
            <Box sx={styles.descriptionWrapper}>
              <motion.div variants={descriptionTitleMotion}>
                <Typography sx={styles.descriptionTitle}>
                  <Box component="span" sx={styles.descriptionTitleSmall}>
                    Welcome to{' '}
                  </Box>
                  <Box component="span" sx={styles.descriptionTitleLarge}>
                    Authentic Relating Vibes
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={descriptionBodyMotion}>
                {/* 👇 ADDED: maxWidth to allow the text to stretch wider */}
                <Typography sx={{ ...styles.descriptionBody, maxWidth: { xs: '100%', md: '1000px' } }}>
                  The podcast where real conversations replace small talk,
                  presence replaces performance, and connection becomes a way
                  of life.
                  <br />
                  <br />
                  Hosted by{' '}
                  <Box component="span" sx={bold}>
                    Amitabha Bhatia
                  </Box>
                  , founder of{' '}
                  <Box component="span" sx={styles.underline}>
                    AuthenticRelating.com
                  </Box>
                  , relational leadership facilitator, and global voice for
                  deep human connection, this podcast explores what it truly
                  means to be{' '}
                  <Box component="span" sx={bold}>
                    seen, heard, and met
                  </Box>{' '}
                  — as we are.
                  <br />
                  <br />
                  Each episode is a journey into the heart of human experience
                  — where{' '}
                  <Box component="span" sx={bold}>
                    honesty, empathy, vulnerability, and presence
                  </Box>{' '}
                  lead the way. From intimate one-on-one dialogues to group
                  conversations and solo reflections, you&apos;ll hear from{' '}
                  <Box component="span" sx={bold}>
                    facilitators, thought leaders, community builders, and
                    everyday people
                  </Box>{' '}
                  practicing the art of relating authentically.
                </Typography>
              </motion.div>
            </Box>
          </motion.div>
        </SiteContainer>
      </Box>
    </motion.div>
  );
}