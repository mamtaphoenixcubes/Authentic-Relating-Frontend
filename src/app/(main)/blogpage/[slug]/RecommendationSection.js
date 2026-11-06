'use client';

import React from 'react';
import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

import Section from '../../../_components/common/Section';
import SiteContainer from '../../../_components/common/SiteContainer';
import Card from '../../../_components/common/Card';
import EventButton from '../../../_components/buttons/EventButton';

const MotionTypography = motion(Typography);
const MotionBox = motion(Box);

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const RecommendationSection = ({ relatedBlogs = [] }) => {
  const router = useRouter();

  if (!relatedBlogs || relatedBlogs.length === 0) {
    return null;
  }

  const displayBlogs = relatedBlogs.slice(0, 3);

  return (
    <Section sx={{ py: { xs: 4, sm: 5, md: 6 } }}>
      <SiteContainer>
        <MotionBox
          key={displayBlogs.length}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* SECTION TITLE */}
          <MotionTypography
            variant="h5"
            mb={{ xs: 3, sm: 4, md: 4 }}
            sx={{
              textAlign: 'center',
              fontFamily: "var(--font-redhat)",
              fontWeight: 700,
              fontSize: {
                xs: "24px",
                sm: "28px",
                md: "32px",
              },
              color: "#FF5A3C",
            }}
            variants={fadeInUpVariants}
          >
            You Might Also Enjoy
          </MotionTypography>

          {/* CARDS GRID */}
          <Grid
            container
            spacing={2} 
            justifyContent="center" 
            alignItems="stretch"
          >
            {displayBlogs.map((blog, index) => {
              const imageUrl = blog.image
                ? `${process.env.NEXT_PUBLIC_API_URL}/${blog.image}`
                : "/placeholder.png";

              return (
                <Grid
                  item
                  key={blog._id}
                  xs={12} 
                  sm={6}  
                  md={4}  
                  lg={4}  
                  xl={4}  
                  sx={{
                    display: 'flex',
                    justifyContent: 'center', 
                  }}
                  component={motion.div}
                  variants={cardVariants}
                  custom={index}
                >
                  <motion.div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Card
                      sx={{
                        p: 2,
                        borderRadius: "16px",
                        background:
                          "linear-gradient(100deg, #50B0F0 0%, #80B8F5 50%, #BFC3FA 100%)",
                        boxShadow: "0 4px 12px rgba(80, 176, 240, 0.25)",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                        // ✅ SOLID WHITE BORDER
                        border: "2px solid #FFFFFF",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",

                        "&:hover": {
                          transform: "translateY(-6px)",
                          boxShadow: "0 12px 28px rgba(80, 176, 240, 0.35)",
                        },
                      }}
                    >
                      {/* IMAGE */}
                      <Box
                        sx={{
                          height: "200px",
                          minHeight: "200px",
                          borderRadius: "12px",
                          overflow: "hidden",
                          mb: 2,
                          background: "#fff",
                          flexShrink: 0,
                        }}
                      >
                        <img
                          src={imageUrl}
                          alt={blog.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Box>

                      {/* TITLE */}
                      <Typography
                        sx={{
                          fontFamily: '"Red Hat Display", sans-serif',
                          fontWeight: 700,
                          fontSize: { xs: "16px", md: "18px" },
                          color: "#fff",
                          mb: 1,
                          minHeight: "48px",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {blog.title}
                      </Typography>

                      {/* DESCRIPTION */}
                      <Box sx={{ mb: 3 }}>
                        <Typography
                          sx={{
                            fontFamily: '"Red Hat Display", sans-serif',
                            fontWeight: 400,
                            fontSize: { xs: "12px", md: "13px" },
                            lineHeight: 1.6,
                            color: "rgba(255,255,255,0.95)",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {blog.introduction}
                        </Typography>
                      </Box>

                      {/* READ MORE BUTTON */}
                      <Box sx={{ mt: "auto" }}>
                        <EventButton
                          onClick={() =>
                            router.push(`/blogpage/${blog.blogSlug}`)
                          }
                          sx={{
                            width: "auto",
                            minWidth: "130px",
                            height: "44px",
                            px: 3,
                            borderRadius: "10px",
                            fontSize: "14px",
                            fontWeight: 500,
                            fontFamily: '"Red Hat Display", sans-serif',
                            color: "#fff",
                            position: "relative",
                            overflow: "hidden",
                            background:
                              "linear-gradient(105deg, #6fc1fc 0%, #21a2ff 100%)",
                            // ✅ SOLID WHITE BORDER ON BUTTON
                            border: "2px solid #FFFFFF", 
                            boxShadow: "0 3px 8px rgba(33, 150, 243, 0.15)",
                            transition: "all 0.3s ease",

                            "&:hover": {
                              background:
                                "linear-gradient(105deg, #58AEEF 0%, #70BDF3 100%)",
                              boxShadow: "0 8px 20px rgba(33,150,243,0.3)",
                              transform: "scale(1.03)",
                            },
                          }}
                        >
                          Read More
                        </EventButton>
                      </Box>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </MotionBox>
      </SiteContainer>
    </Section>
  );
};