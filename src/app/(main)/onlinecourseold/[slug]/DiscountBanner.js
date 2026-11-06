'use client';

import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

// Shared components
import Section from '@/app/_components/common/Section';
import SiteContainer from '@/app/_components/common/SiteContainer';

const MotionButton = motion(Button);

export default function DiscountBanner() {
  const theme = useTheme();
  const styles = theme.custom.discountBanner;
  const typo = theme.typography.discountBanner;

  // ─── Animation variants ────────────────────────────────────
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut', delay: 0.1 },
    },
  };

  const buttonAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut', delay: 0.4 },
    },
  };

  return (
    <Section>
      <SiteContainer>
        <Box sx={styles.container}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Box sx={styles.banner}>
              {/* ─── CONTENT ─── */}
              <motion.div variants={fadeInUp} style={{ display: 'contents' }}>
                <Box sx={styles.content}>
                  {/* EYEBROW */}
                  <Typography
                    sx={{
                      ...typo.subtitle,
                      fontFamily: 'var(--font-redhat)',
                      color: '#fff',
                      mb: { xs: 1, md: 1.5 },
                      textAlign: { xs: 'center', sm: 'left' },
                    }}
                  >
                    Login to Avail
                  </Typography>

                  {/* TITLE */}
                  <Typography
                    sx={{
                      ...typo.title,
                      fontFamily: 'var(--font-redhat)',
                      color: '#fff',
                      mb: { xs: 2, md: 3, lg: 4 },
                      textAlign: { xs: 'center', sm: 'left' },
                    }}
                  >
                    Discount Offers
                  </Typography>

                  {/* DESCRIPTION */}
                  <Typography
                    sx={{
                      ...typo.description,
                      fontFamily: 'var(--font-redhat)',
                      color: '#fff',
                      opacity: 0.95,
                      mb: { xs: 2.5, md: 3.5 },
                      textAlign: { xs: 'center', sm: 'left' },
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean <br sx={{ display: { xs: 'none', sm: 'inline' } }} />{' '}
                    sed urna elit. Donec imperdiet <br sx={{ display: { xs: 'none', sm: 'inline' } }} />{' '}
                    ante sit amet nibh laoreet, et efficitur tortor ullamcorper.
                  </Typography>

                  {/* CTA */}
                  <motion.div variants={buttonAnimation}>
                    <MotionButton
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      sx={styles.button}
                    >
                      Sign up now
                    </MotionButton>
                  </motion.div>
                </Box>
              </motion.div>

              {/* ─── IMAGE ─── */}
              <motion.div variants={fadeInUp} style={{ display: 'contents' }}>
                <Box
                  component="img"
                  src="/discount.png"
                  alt="Discount"
                  sx={styles.image}
                />
              </motion.div>
            </Box>
          </motion.div>
        </Box>
      </SiteContainer>
    </Section>
  );
}