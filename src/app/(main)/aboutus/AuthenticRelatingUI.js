'use client';

import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import axiosInstance from '@/lib/axios';

// Shared components
import Section from '@/app/_components/common/Section';
import SiteContainer from '@/app/_components/common/SiteContainer';

export const AuthenticRelatingUI = () => {
  const theme = useTheme();
  const styles = theme.custom.authenticRelatingUI;
  const titleColors = theme.custom.authenticRelatingUI
    ? theme.palette?.authenticRelatingUI?.titleColors ?? [
        '#F9998D',
        '#00B9C7',
        '#458001',
        '#0077D1',
        '#FF9916',
        '#B678F3',
      ]
    : [];

  const [aboutUsData, setAboutUsData] = useState(null);
  const [loading, setLoading] = useState(true);

  // ─── Animation variants ────────────────────────────────────
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  // ─── Fetch ─────────────────────────────────────────────────
  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const res = await axiosInstance.get('/frontendApis/getAllAboutUspublic', {
          params: { size: 20, page: 0, search: '' },
        });
        setAboutUsData(res?.data?.aboutUsList || []);
      } catch (error) {
        console.error('API error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAboutUs();
  }, []);

  if (loading) {
    return (
      <SiteContainer sx={{ pt: 10 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
          }}
        >
          <Typography>Loading...</Typography>
        </Box>
      </SiteContainer>
    );
  }

  return (
    <Section sx={styles.section}>
      <SiteContainer>
        {/* ─── INTRO SECTION ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Box sx={styles.introPanel}>
            <motion.div variants={itemVariants}>
              <Typography sx={styles.introTitle}>
                Introduction to{' '}
                <Box component="span" sx={styles.introTitleSpan}>
                  Authentic Relating
                </Box>
                <br />
                Intentions
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography sx={styles.introBody}>
                Authentic Relating is the art of connecting in ways that are deeply
                human—where presence, truth, and empathy meet. These intentions are
                not rigid rules but living invitations to show up more fully—as
                ourselves and with each other. They help create a relational field
                where vulnerability is honored, boundaries are respected, and
                connection becomes a practice of mutual growth and discovery. While
                these are some core intentions to guide your practice, you are always
                free to create your own—ones that speak to your truth, your values,
                and the kind of connection you wish to cultivate. Let them be a
                compass, not a constraint—an offering, not an obligation.
              </Typography>
            </motion.div>
          </Box>
        </motion.div>

        {/* ─── DYNAMIC SECTIONS ─── */}
        <Box sx={styles.sectionsWrapper}>
          {aboutUsData
            ?.sort((a, b) => a.index_position - b.index_position)
            .map((item, index) => {
              const isEven = index % 2 === 0;
              const titleColor =
                theme.custom?.authenticRelatingUI?.titleColors?.[index % 6] ??
                titleColors[index % 6];

              return (
                <motion.div
                  key={item._id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2, margin: '-50px' }}
                  variants={containerVariants}
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
                        variants={imageVariants}
                        style={{ width: '100%', height: '100%' }}
                      >
                        <Box sx={styles.imageBox}>
                          <Box
                            component="img"
                            src={`${process.env.NEXT_PUBLIC_API_URL}/${item.image}`}
                            alt={item.title}
                            sx={styles.image}
                          />
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
                      <motion.div variants={textVariants} style={{ width: '100%' }}>
                        <Box sx={styles.textBox}>
                          {/* TITLE */}
                          <Typography
                            sx={{
                              ...styles.textTitle,
                              color: titleColor,
                            }}
                          >
                            {item.title}
                          </Typography>

                          {/* DESCRIPTION */}
                          <Box
                            dangerouslySetInnerHTML={{ __html: item.description }}
                            sx={styles.textBody}
                          />
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