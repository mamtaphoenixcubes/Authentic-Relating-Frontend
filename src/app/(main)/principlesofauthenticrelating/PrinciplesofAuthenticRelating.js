
'use client';

import { Box, Card, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import axiosInstance from '@/lib/axios';

import SiteContainer from '../../_components/common/SiteContainer';
import Section from '../../_components/common/Section';

export const PrinciplesofAuthenticRelating = () => {
  const theme = useTheme();
  const styles = theme.custom.principlesOfAuthenticRelating;

  const [principles, setPrinciples] = useState([]);

  useEffect(() => {
    const fetchPrinciples = async () => {
      try {
        const res = await axiosInstance.get(
          '/frontendApis/getAllFiveDimensionsprincipels',
          {
            params: {
              size: 20,
              page: 0,
              search: '',
            },
          }
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

  // Main row animation
  const cardVariants = {
    hidden: (isEven) => ({
      opacity: 0,
      x: isEven ? -80 : 80,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  // Image animation
  const imageVariants = {
    hidden: (isEven) => ({
      opacity: 0,
      scale: 0.9,
      x: isEven ? -40 : 40,
      rotateY: isEven ? -10 : 10,
    }),
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.7,
        delay: 0.1,
        ease: 'easeOut',
      },
    },
  };

  // Text animation
  const textVariants = {
    hidden: (isEven) => ({
      opacity: 0,
      x: isEven ? 40 : -40,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Section sx={{ pt: 0 }}>
      <SiteContainer>

        {/* HEADER */}
        <Box
          sx={{
            pt: { xs: 2, md: 4 },
            mb: styles.headerMb,
          }}
        >
          <Typography sx={styles.headerTitle}>
            Introducing 10 Principles of
            <br />
            Authentic Relating by Amitabha Bhatia
          </Typography>

          <Typography sx={styles.headerSubtitle}>
            "Morbi varius ornare ante non posuere. Morbi lacus lacus,
            auctor sit amet erat vitae, interdum semper leo. Donec
            dignissim iaculis fermentum. Donec tellus enim, facilisis
            eu vulputate eget."
          </Typography>
        </Box>

        {/* PRINCIPLES WRAPPER */}
        <Box
          sx={{
            width: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: {
              xs: 5,
              sm: 7,
              md: 9,
              lg: 10,
            },
            // ✅ TOP GAP between header and first principle
            mt: {
              xs: 4,
              sm: 5,
              md: 7,
              lg: 8,
            },
          }}
        >
          {principles.map((item, index) => {
            const isEven = index % 2 === 0;
            const hasImage = !!item.image;

            return (
              <motion.div
                key={item._id}
                custom={isEven}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                  margin: '-50px',
                }}
                variants={cardVariants}
                style={{
                  width: '100%',
                }}
              >
                {/* CSS GRID ROW */}
                <Box
                  sx={{
                    display: 'grid',

                    gridTemplateColumns: hasImage
                      ? {
                        xs: 'minmax(0, 1fr)',
                        md: 'minmax(0, 1fr) minmax(0, 1fr)',
                      }
                      : 'minmax(0, 1fr)',

                    gridTemplateAreas: hasImage
                      ? {
                        xs: `
                            "image"
                            "text"
                          `,
                        md: isEven
                          ? '"image text"'
                          : '"text image"',
                      }
                      : '"text"',

                    alignItems: 'center',

                    columnGap: {
                      xs: 0,
                      md: 4,
                      lg: 6,
                    },

                    rowGap: {
                      xs: 2,
                      md: 0,
                    },

                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                >

                  {/* IMAGE */}
                  {hasImage && (
                    <Box
                      sx={{
                        gridArea: 'image',
                        width: '100%',
                        minWidth: 0,
                      }}
                    >
                      <motion.div
                        custom={isEven}
                        variants={imageVariants}
                        style={{
                          width: '100%',
                        }}
                      >
                        <Card
                          sx={{
                            ...styles.imageCard,
                            width: '100%',
                            height: 'auto',
                            boxShadow: 'none',
                            overflow: 'hidden',
                            borderRadius: '12px',
                          }}
                        >
                          <Box
                            component="img"
                            src={`${process.env.NEXT_PUBLIC_API_URL}/${item.image}`}
                            alt={item.title}
                            sx={{
                              ...styles.image,

                              display: 'block',
                              width: '100%',
                              height: {
                                xs: 'auto',
                                md: 360,
                                lg: 340,
                                xl: 380,
                              },

                              aspectRatio: {
                                xs: '16 / 10',
                                md: '16 / 9',
                              },

                              objectFit: 'cover',

                              transition:
                                'transform 0.4s ease',

                              '&:hover': {
                                transform: 'scale(1.05)',
                              },
                            }}
                          />
                        </Card>
                      </motion.div>
                    </Box>
                  )}

                  {/* TEXT */}
                  <Box
                    sx={{
                      gridArea: 'text',
                      width: '100%',
                      minWidth: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <motion.div
                      custom={isEven}
                      variants={textVariants}
                      style={{
                        width: '100%',
                      }}
                    >
                      <Box
                        sx={{
                          ...styles.textBox,
                          width: '100%',
                          maxWidth: {
                            xs: '100%',
                            sm: '600px',
                            md: '620px',
                            lg: '850px',
                          },
                          pt: 0,
                          mr: 'auto',
                        }}
                      >

                        {/* TITLE */}
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.5,
                            delay: 0.3,
                          }}
                          style={{
                            width: '100%',
                            textAlign: 'left',
                          }}
                        >
                          <Typography
                            sx={{
                              ...styles.cardTitle,
                              mt: 0,
                              width: '100%',
                              display: 'block',
                              textAlign: 'left !important',
                              marginLeft: '0 !important',
                              marginRight: 'auto !important',
                            }}
                          >
                            {index + 1}. {item.title}
                          </Typography>
                        </motion.div>

                        {/* DESCRIPTION */}
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.5,
                            delay: 0.4,
                          }}
                        >
                          <Box
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                            sx={{
                              ...styles.body,
                              textAlign: 'left',
                              width: '100%',
                            }}
                          />
                        </motion.div>

                      </Box>
                    </motion.div>
                  </Box>

                </Box>
              </motion.div>
            );
          })}
        </Box>

      </SiteContainer>
    </Section>
  );
};
