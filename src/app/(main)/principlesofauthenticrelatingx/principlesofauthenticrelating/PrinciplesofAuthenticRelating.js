'use client';

import { Box, Card, Container, Grid, Typography, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import axiosInstance from "@/lib/axios";

export const PrinciplesofAuthenticRelating = () => {
  const [principles, setPrinciples] = useState([]);

  useEffect(() => {
    const fetchPrinciples = async () => {
      try {
        const res = await axiosInstance.get('/frontendApis/getAllFiveDimensionsprincipels', {
          params: { size: 20, page: 0, search: '' },
        });

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

  // Animation variants for each individual card
  const cardVariants = {
    hidden: (isEven) => ({
      opacity: 0,
      x: isEven ? -100 : 100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      }
    }
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
      transition: {
        duration: 0.7,
        delay: 0.1,
        ease: "easeOut",
      }
    }
  };

  const textVariants = {
    hidden: (isEven) => ({
      opacity: 0,
      x: isEven ? 50 : -50,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: "easeOut",
      }
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: '1440px',
        px: { xs: 2, sm: 3, md: 4, lg: 5 },
        mx: 'auto'
      }}
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            sx={{
              fontFamily: 'Red Hat Display, sans-serif',
              fontWeight: 700,
              fontSize: { xs: "28px", md: "40px" },
              mb: 2,
              color: '#0077D1'
            }}
          >
            Introducing 10 Principles of
            <br />
            Authentic Relating by Amitabha Bhatia
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '14px', md: '16px' },
              color: '#000'
            }}
          >
            Morbi varius ornare ante non posuere. Morbi lacus lacus, auctor sit amet erat vitae,
            interdum semper leo.
          </Typography>
        </Box>
      </motion.div>

      {/* SECTIONS */}
      <Box sx={{ pt: 6 }}>
        {principles.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item._id}
              custom={isEven}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2, margin: "-50px" }}
              variants={cardVariants}
            >
              <Grid
                container
                alignItems="stretch"
                columnSpacing={{ xs: 0, md: 6, lg: 10 }}
                rowSpacing={{ xs: 3, sm: 4, md: 0 }}
                sx={{ mb: { xs: 6, md: 12 } }}
              >
                {/* IMAGE SIDE */}
                <Grid
                  item
                  xs={12}
                  md={6}
                  order={{
                    xs: 1,
                    md: isEven ? 1 : 2
                  }}
                  sx={{ display: "flex" }}
                >
                  <motion.div
                    custom={isEven}
                    variants={imageVariants}
                    style={{ width: "100%" }}
                  >
                    <Card
                      sx={{
                        width: "100%",
                        height: { xs: 240, md: 420 },
                        borderRadius: "16px",
                        overflow: "hidden",
                        backgroundColor: "#cfcfcf",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                      }}
                    >
                      <CardContent sx={{ height: "100%", p: "0 !important" }}>
                        {item.image && (
                          <img
                            src={`${process.env.NEXT_PUBLIC_API_URL}/${item.image}`}
                            alt={item.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              transition: "transform 0.5s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "scale(1.05)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "scale(1)";
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
                  order={{
                    xs: 2,
                    md: isEven ? 2 : 1
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start"
                  }}
                >
                  <motion.div
                    custom={isEven}
                    variants={textVariants}
                    style={{ width: "100%" }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        gap: 2,
                        maxWidth: 600,
                        mx: "auto"
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <Typography
                          sx={{
                            fontFamily: 'Red Hat Display, sans-serif',
                            fontWeight: 700,
                            fontSize: { xs: "26px", md: "36px" },
                            mb: 2,
                            background: "linear-gradient(135deg, #0077D1, #00A3FF)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                          }}
                        >
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
                          dangerouslySetInnerHTML={{ __html: item.description }}
                          sx={{
                            fontFamily: "DM Sans, sans-serif",
                            fontSize: { xs: "14px", md: "16px" },
                            lineHeight: { xs: "22px", md: "26px" },
                            color: "#555",
                            textAlign: "center",
                            "& p": {
                              margin: "6px 0"
                            }
                          }}
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
    </Container>
  );
};