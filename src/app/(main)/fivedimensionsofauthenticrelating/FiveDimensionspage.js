'use client';

import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import axiosInstance from '@/lib/axios';

import SiteContainer from '@/app/_components/common/SiteContainer';
import Section from '@/app/_components/common/Section';

// =========================================================
// MOTION VARIANTS
// =========================================================

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const imageVariants = (isEven) => ({
  hidden: {
    opacity: 0,
    x: isEven ? -60 : 60,
    scale: 0.92,
    rotateY: isEven ? -8 : 8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});

const textVariants = (isEven) => ({
  hidden: { opacity: 0, x: isEven ? 60 : -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
});

const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const quoteVariants = {
  hidden: { opacity: 0, x: -20, rotate: -1 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.1 },
  },
};

export const FiveDimensionspage = () => {
  const theme = useTheme();
  const styles = theme.custom.fiveDimensions;

  const [dimensions, setDimensions] = useState([]);

  useEffect(() => {
    const fetchDimensions = async () => {
      try {
        const res = await axiosInstance.get('/frontendApis/getAllFiveDimensions', {
          params: { size: 20, page: 0, search: '' },
        });
        const sorted = (res?.data?.list || []).sort(
          (a, b) => a.index_position - b.index_position
        );
        setDimensions(sorted);
      } catch (error) {
        console.error('API error:', error);
      }
    };
    fetchDimensions();
  }, []);

  const extractQuote = (description) => {
    if (!description) return null;
    const match = description.match(/"([^"]+)"/);
    return match ? match[0] : null;
  };

  const cleanDescription = (description) => {
    if (!description) return '';
    return description.replace(/"([^"]+)"/, '').trim();
  };

  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
      <SiteContainer>
        <Section>
          <Box sx={{ mt: { xs: -10, md: -10 } }}>
            {dimensions.map((dimension, index) => {
              const isEven = index % 2 === 0;
              const quote = extractQuote(dimension.description);
              const cleanDesc = cleanDescription(dimension.description);

              return (
                <motion.div
                  key={dimension.id ?? index}
                  variants={rowVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  <Grid
                    container
                    alignItems={styles.grid.container.alignItems}
                    columnSpacing={styles.grid.container.columnSpacing}
                    rowSpacing={styles.grid.container.rowSpacing}
                    sx={styles.grid.sx}
                  >
                    {/* IMAGE SIDE */}
                    <Grid
                      item
                      xs={12}
                      md={6}
                      order={{ xs: 1, md: isEven ? 1 : 2 }}
                      sx={styles.imageGridItem}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{ width: '100%', height: '100%' }}
                      >
                        <Box sx={styles.imageBox}>
                          {dimension.image && (
                            <Box
                              component="img"
                              src={`${process.env.NEXT_PUBLIC_API_URL}/${dimension.image}`}
                              alt={dimension.title}
                              sx={styles.image}
                            />
                          )}
                        </Box>
                      </motion.div>
                    </Grid>

                    {/* TEXT SIDE */}
                    <Grid
                      item
                      xs={12}
                      md={6}
                      order={{ xs: 2, md: isEven ? 2 : 1 }}
                      sx={styles.textGridItem}
                    >
                      {/* TEXT COLUMN — controls stagger */}
                      <motion.div
                        variants={textVariants(isEven)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        style={{ width: '100%' }}
                      >
                        <Box sx={styles.textBox}>
                          {/* TITLE */}
                          <motion.div variants={textItemVariants}>
                            <Typography sx={styles.title}>
                              {`${index + 1}. ${dimension.title}`}
                            </Typography>
                          </motion.div>

                          {/* DESCRIPTION */}
                          <motion.div variants={textItemVariants}>
                            <Typography
                              sx={styles.description}
                              dangerouslySetInnerHTML={{ __html: cleanDesc }}
                            />
                          </motion.div>

                          {/* QUOTE */}
                          {quote && (
                            <motion.div variants={quoteVariants}>
                              <Typography sx={styles.quote}>
                                {quote}
                              </Typography>
                            </motion.div>
                          )}
                        </Box>
                      </motion.div>
                    </Grid>
                  </Grid>
                </motion.div>
              );
            })}
          </Box>
        </Section>
      </SiteContainer>
    </motion.div>
  );
};

export default FiveDimensionspage;