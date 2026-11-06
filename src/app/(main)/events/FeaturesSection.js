'use client';

import { Box, Typography, Stack, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2'; // 👈 MUI Grid v2 — spacing works with `size`
import { motion } from 'framer-motion';

// Reusable components
import Section from '../../_components/common/Section';
import SiteContainer from '../../_components/common/SiteContainer';
import SectionHeader from '../../_components/common/SectionHeader';
import Card from '../../_components/common/Card';

// =====================================================
// SECTION DATA
// =====================================================
const features = [
  { title: 'Yoga', color: '#00B0FF', icon: '/svg/events/yoga.svg' },
  { title: 'Meditation', color: '#FFD54F', icon: '/svg/events/meditation.svg' },
  { title: 'Tai Chi', color: '#26C6DA', icon: '/svg/events/taichi.svg' },
  { title: 'Qi gong', color: '#FFD54F', icon: '/svg/events/qigong.svg' },
  { title: 'Heal your life', color: '#26C6DA', icon: '/svg/events/heal.svg' },
  { title: 'Authentic Relating', color: '#00B0FF', icon: '/svg/events/ar.svg' },
];

// =====================================================
// MOTION VARIANTS
// =====================================================
const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.1 + index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -20 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.4, delay },
  }),
};

const textBlockVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay },
  }),
};

const textItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay },
  }),
};

// =====================================================
// COMPONENT
// =====================================================
export default function FeaturesSection() {
  const theme = useTheme();
  const styles = theme.custom.featuresSection;

  return (
    <Section>
      <SiteContainer>
        <Box sx={styles.container}>
          {/* HEADER */}
          <SectionHeader
            title="Features ipsum dolor sit amet"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed urna elit. Ut tincidunt lacus, ac convallis risus. Orci varius natoque penatibus et magnis dis parturient montes."
            align="center"
            sx={styles.header}
          />

          {/* FEATURES GRID — 3 per row on every breakpoint */}
          <Grid
            container
            spacing={styles.grid.spacing}
            justifyContent={styles.grid.justifyContent}
            sx={{ alignItems: styles.grid.alignItems }}
          >
            {features.map((item, index) => (
              <Grid
                size={{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4 }}
                key={index}
                sx={styles.gridItem}
              >
                <motion.div
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Card className="feature-card" sx={styles.card}>
                    {/* ICON — animated */}
                    <motion.div
                      custom={0.2 + index * 0.08}
                      variants={iconVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      style={{ width: '100%' }}
                    >
                      <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 0.5, sm: 1, md: 1.25, lg: 1.5 }}
                        alignItems={{ xs: 'flex-start', sm: 'center' }}
                        sx={{ width: '100%' }}
                      >
                        {/* Icon wrapper with hover scale */}
                        <Box
                          sx={{
                            ...styles.iconWrapper,
                            '.feature-card:hover &': {
                              transform: 'scale(1.15)',
                            },
                          }}
                        >
                          <Box
                            component="img"
                            src={item.icon}
                            alt={item.title}
                            sx={styles.icon}
                          />
                        </Box>

                        {/* Vertical divider — hidden on xs */}
                        <Box sx={styles.divider} />

                        {/* TEXT BLOCK — animated */}
                        <motion.div
                          custom={0.3 + index * 0.08}
                          variants={textBlockVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          style={{
                            flex: 1,
                            width: '100%',
                            maxWidth: '100%',
                            minWidth: 0,
                            overflow: 'hidden',
                          }}
                        >
                          <Box sx={{ flex: 1, width: '100%', minWidth: 0 }}>
                            {/* TITLE */}
                            <motion.div
                              custom={0.35 + index * 0.08}
                              variants={textItemVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                            >
                              <Typography sx={styles.cardTitle}>
                                {item.title}
                              </Typography>
                            </motion.div>

                            {/* DESCRIPTION */}
                            <motion.div
                              custom={0.4 + index * 0.08}
                              variants={textItemVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                            >
                              <Typography sx={styles.cardDescription}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </Typography>
                            </motion.div>
                          </Box>
                        </motion.div>
                      </Stack>
                    </motion.div>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </SiteContainer>
    </Section>
  );
}