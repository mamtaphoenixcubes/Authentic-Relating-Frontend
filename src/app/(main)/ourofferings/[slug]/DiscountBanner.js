'use client';

import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

// Import common components
import Section from '../../../_components/common/Section';
import SiteContainer from '../../../_components/common/SiteContainer';
import EventButton from '../../../_components/buttons/EventButton';

// Import theme
import theme from '../../../../theme/theme';

export default function DiscountBannerCourse() {
  // Get styles from theme
  const styles = theme.custom.discountBanner;

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.1 }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const buttonAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.4 }
    }
  };

  return (
    <Section>
      <SiteContainer>
        <Box sx={styles.container}>
          <Box sx={styles.banner}>
            {/* CONTENT */}
            <Box sx={styles.content}>
              <Typography sx={styles.subtitle}>
                Login to Avail
              </Typography>

              <Typography sx={styles.title}>
                Discount Offers
              </Typography>

              <Typography sx={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenean sed urna elit. Donec imperdiet ante sit amet nibh laoreet,
                et efficitur tortor ullamcorper.
              </Typography>

              <EventButton
                variant="default"
                sx={styles.button}
              >
                Sign up now
              </EventButton>
            </Box>

            {/* IMAGE */}
            <Box
              component="img"
              src="/discount.png"
              alt="Discount"
              sx={styles.image}
            />
          </Box>
        </Box>
      </SiteContainer>
    </Section>
  );
}