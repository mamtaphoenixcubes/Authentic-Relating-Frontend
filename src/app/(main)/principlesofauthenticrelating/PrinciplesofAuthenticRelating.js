'use client';

import { Box, Card, Grid, Typography, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import axiosInstance from '@/lib/axios';
import SiteContainer from '../../_components/common/SiteContainer';
import Section from '../../_components/common/Section';
import SectionHeader from '../../_components/common/SectionHeader';

export const PrinciplesofAuthenticRelating = () => {
  const theme = useTheme();
  const styles = theme.custom.principlesOfAuthenticRelating;

  const [principles, setPrinciples] = useState([]);

  useEffect(() => {
    const fetchPrinciples = async () => {
      try {
        const res = await axiosInstance.get(
          '/frontendApis/getAllFiveDimensionsprincipels',
          { params: { size: 20, page: 0, search: '' } }
        );

        const sorted = (res?.data?.list || []).sort(
          (a, b) => a.index_position - b.index_position
        );

        setPrinciples(sorted);
      } catch (error) {
        console.error('API error:', error);
      }
    };

    fetchPrinciples();
  }, []);

  // ─── Animation Variants ──────────────────────────────────────
  const cardVariants = {
    hidden: (isEven) => ({ opacity: 0, x: isEven ? -100 : 100 }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: (isEven) => ({
      opacity: 0,
      scale: 0.85,
      x: isEven ? -50 : 50,
      rotateY: isEven ? -15 : 15,
    }),
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 0.7, delay: 0.1, ease: 'easeOut' },
    },
  };

  const textVariants = {
    hidden: (isEven) => ({ opacity: 0, x: isEven ? 50 : -50 }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: 0.2, ease: 'easeOut' },
    },
  };

  return (
    <Section >
      <SiteContainer>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            align="center"
            title={
              <>
                Introducing 10 Principles of
                <br />
                Authentic Relating by Amitabha Bhatia
              </>
            }
            subtitle="Morbi varius ornare ante non posuere. Morbi lacus lacus, auctor sit amet erat vitae, interdum semper leo. Donec dignissim iaculis fermentum. Donec tellus enim, facilisis eu vulputate eget."
            sx={{
              mb: styles.headerWrapper.mb,
              '& h2': styles.headerTitle,
              '& p': styles.headerSubtitle,
            }}
          />
        </motion.div>

        {/* SECTIONS */}
        <Box sx={styles.sectionsWrapper}>
          {principles.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item._id}
                custom={isEven}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2, margin: '-50px' }}
                variants={cardVariants}
              >
                <Grid
                  container
                  alignItems="stretch"
                  columnSpacing={styles.row.columnSpacing}
                  rowSpacing={styles.row.rowSpacing}
                  sx={{ mb: styles.row.mb }}
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
                      custom={isEven}
                      variants={imageVariants}
                      style={{ width: '100%' }}
                    >
                      <Card sx={styles.imageCard}>
                        <CardContent sx={styles.imageCardContent}>
                          {item.image && (
                            <Box
                              component="img"
                              src={`${process.env.NEXT_PUBLIC_API_URL}/${item.image}`}
                              alt={item.title}
                              sx={{
                                ...styles.image,
                                '&:hover': { transform: 'scale(1.05)' },
                              }}
                            />
                          )}
                        </CardContent>
                      </Card>
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
                    <motion.div
                      custom={isEven}
                      variants={textVariants}
                      style={{ width: '100%' }}
                    >
                      <Box sx={styles.textBox}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <Typography sx={styles.cardTitle}>
                            {index + 1}. {item.title}
                          </Typography>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <Box
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                            sx={styles.body}
                          />
                        </motion.div>
                      </Box>
                    </motion.div>
                  </Grid>
                </Grid>
              </motion.div>
            );
          })}
        </Box>
      </SiteContainer>
    </Section>
  );
};