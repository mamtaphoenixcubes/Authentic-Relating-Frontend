'use client';

import { Box, Typography, Stack, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
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
  { title: 'Yoga', icon: '/svg/events/yoga.svg' },
  { title: 'Meditation', icon: '/svg/events/meditation.svg' },
  { title: 'Tai Chi', icon: '/svg/events/taichi.svg' },
  { title: 'Qi gong', icon: '/svg/events/qigong.svg' },
  { title: 'Heal your life', icon: '/svg/events/heal.svg' },
  { title: 'Authentic Relating', icon: '/svg/events/ar.svg' },
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
// STYLES (UPDATED WITH EXACT DIMENSIONS)
// =====================================================
const customStyles = {
  sectionWrapper: {
    background: 'linear-gradient(135deg, #ff7e5f, #feb47b)',
    borderRadius: '32px',
    padding: { xs: '24px', md: '48px' },
    border: '1.5px solid rgba(255, 255, 255, 0.5)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  },
  header: {
    color: '#FFFFFF',
    '& .MuiTypography-root': { color: '#FFFFFF' },
  },
  grid: {
    spacing: { xs: 2, sm: 2, md: 3 },
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center', // Ensures the card is centered in the grid column
  },
  card: {
    background: 'rgba(255, 255, 255, 0.15)',
    border: '1.5px solid #FFFFFF',
    borderRadius: '12px',
    
    // 👇 EXACT FIGMA DIMENSIONS
    width: '100%',
    maxWidth: '500px', // Limits max width to 400px
    height: '120px',   // Forces exact height
    
    padding: '20px', // Adjusted padding to fit within the 120px height
    display: 'flex',
    alignItems: 'center',
    boxShadow: 'none',
    backdropFilter: 'blur(10px)',
    boxSizing: 'border-box', // Prevents padding from breaking the exact height
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease',
    minWidth: '48px',
  },
  icon: {
    width: '51.74px',  // Mapped from Figma
    height: '41px',    // Mapped from Figma
    filter: 'brightness(0) invert(1)',
  },
  
  cardTitle: {
    color: '#FFFFFF',
    fontWeight: 700,               // Figma: Bold
    fontStyle: 'normal',
    fontSize: '22px',              // Figma: 22px
    fontFamily: '"Red Hat Display", sans-serif',
    lineHeight: '100%',            // Figma: 100%
    letterSpacing: '0%',
    verticalAlign: 'middle',
    mb: 0.5,
  },
  
  cardDescription: {
    color: '#FFFFFF',
    fontWeight: 400,               // Figma: Regular
    fontStyle: 'normal',
    fontSize: '16px',              // Figma: 16px
    fontFamily: '"Red Hat Display", sans-serif',
    lineHeight: '100%',            // Figma: 100%
    letterSpacing: '0%',
    verticalAlign: 'middle',
    opacity: 0.9,
  },
    divider: {
    display: { xs: 'none', sm: 'block' },
    width: '1.5px',
    height: '40px',
    backgroundColor: '#FFFFFF',
    opacity: 0.8,
  },
};

// =====================================================
// COMPONENT
// =====================================================
export default function FeaturesSection() {
  return (
    <Section>
      <SiteContainer>
        <Box sx={customStyles.sectionWrapper}>
          
          <SectionHeader
            title="Features ipsum dolor sit amet"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed urna elit. Ut tincidunt lacus, ac convallis risus. Orci varius natoque penatibus et magnis dis parturient montes."
            align="center"
            sx={customStyles.header}
          />

          <Grid
            container
            spacing={customStyles.grid.spacing}
            justifyContent={customStyles.grid.justifyContent}
            sx={{ alignItems: customStyles.grid.alignItems, mt: 2 }}
          >
            {features.map((item, index) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                key={index}
                sx={customStyles.gridItem}
              >
                <motion.div
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center', // Centers the 400px card
                  }}
                >
                  <Card className="feature-card" sx={customStyles.card}>
                    {/* ICON */}
                    <motion.div
                      custom={0.2 + index * 0.08}
                      variants={iconVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      style={{ width: '100%' }}
                    >
                      <Stack
                        direction="row"
                        spacing={{ xs: 1.5, md: 2 }}
                        alignItems="center"
                        sx={{ width: '100%' }}
                      >
                        {/* Icon wrapper */}
                        <Box sx={customStyles.iconWrapper}>
                          <Box
                            component="img"
                            src={item.icon}
                            alt={item.title}
                            sx={customStyles.icon}
                          />
                        </Box>

                        {/* Vertical divider */}
                        <Box sx={customStyles.divider} />

                        {/* TEXT BLOCK */}
                        <motion.div
                          custom={0.3 + index * 0.08}
                          variants={textBlockVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          style={{ flex: 1, minWidth: 0 }}
                        >
                          <Box>
                            {/* TITLE */}
                            <motion.div
                              custom={0.35 + index * 0.08}
                              variants={textItemVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                            >
                              <Typography sx={customStyles.cardTitle}>
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
                              <Typography sx={customStyles.cardDescription}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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