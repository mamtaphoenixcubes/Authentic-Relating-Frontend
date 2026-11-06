'use client';

import {
    Box,
    Card,
    Container,
    Grid,
    Typography,
    CardContent,
    Button
} from '@mui/material';
import { useScroll, useTransform,motion } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);

const coachingPoints = [
    { title: "Practice over performance" },
    { title: "Realness over perfection" },
    { title: "Depth over small talk" },
    { title: "Compassion with boundaries" },
    { title: "Growth through relationship" },
];

export const CommunityUnique = () => {

    const containerRef = useRef(null);

const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start start", "end end"],
});

// transforms
const scales = coachingPoints.map((_, i) => {
  const start = i / coachingPoints.length;
  const end = Math.min((i + 0.6) / coachingPoints.length, 1);

  return useTransform(scrollYProgress, [start, end], [0.95, 1]);
});

const yOffsets = coachingPoints.map((_, i) => {
  const start = i / coachingPoints.length;
  const end = Math.min((i + 0.6) / coachingPoints.length, 1);

  return useTransform(scrollYProgress, [start, end], [40, 0]);
});


    return (
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 },overflow:"hidden" }}>

            {/* ================= TOP SECTION ================= */}
            <MotionBox
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                sx={{
                    mb: { xs: 6, md: 10 },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        p: { xs: 3, md: 5 },
                        borderRadius: 3,
                        background: "linear-gradient(135deg, #32D7E3, #0C959F)",
                        gap: { xs: 3, sm: 5 },
                        color: "#fff",
                        width: "100%",
                        border: "2px solid rgba(255,255,255,0.8)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                    }}
                >
                    {/* LEFT */}
                    <MotionBox
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        sx={{
                            flex: 1,
                            textAlign: { xs: 'center', sm: 'left' },
                            borderRadius: 2,
                            p: { xs: 2, sm: 3 },
                        }}
                    >
                        <MotionTypography
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            sx={{
                                fontSize: { xs: 20, sm: 22, md: 26, lg: 35 },
                                fontWeight: 700,
                                mb: 2,
                                fontFamily: 'Red Hat Display, sans-serif',
                            }}
                        >
                            What Makes Our Community Unique?
                        </MotionTypography>

                        <MotionTypography
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            sx={{
                                fontSize: { xs: 12, sm: 13, md: 14 },
                                lineHeight: 1.6,
                                fontFamily: 'Red Hat Display, sans-serif',
                            }}
                        >
                            We value consent, safety, diversity, accountability, and the full spectrum of the human
                            <br /> experience. Here, no part of you is too much, too little, or unwelcome.
                        </MotionTypography>
                    </MotionBox>

                    {/* RIGHT */}
                    
                    <MotionBox
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        ref={containerRef}
                        sx={{
                            flex: 1,
                            border: "2px solid rgba(255,255,255,0.8)",
                            borderRadius: 2,
                            p: { xs: 2, sm: 3 },
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                        }}
                    >
                        {coachingPoints.map((point, index) => {

                            const stackOffset = useTransform(
                                scrollYProgress,
                                [0, 1],
                                [0, -index * 30] // 👈 stacking grows on scroll
                            );

                            const scale = useTransform(
                                scrollYProgress,
                                [0, 1],
                                [1, 1 - index * 0.05]
                            );

                            return (
                                <motion.div
                                    key={index}
                                    style={{
                                        y: stackOffset,
                                        scale,
                                        zIndex: coachingPoints.length - index,
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    <Box
                                        sx={{
                                            background: "linear-gradient(135deg, #FFC566, #F9A629)",
                                            borderRadius: 2,
                                            p: { xs: 1.5, sm: 2 },

                                            border: "2px solid rgba(255,255,255,0.9)",
                                            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",

                                            mb: 2, // ✅ normal spacing initially

                                            transition: "all 0.3s ease",

                                            "&:hover": {
                                                transform: "translateY(-6px)",
                                                boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                                            },
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontWeight: 600,
                                                fontSize: { xs: 11, sm: 12, md: 16 },
                                                fontFamily: 'Red Hat Display, sans-serif',
                                            }}
                                        >
                                            {point.title}
                                        </Typography>
                                    </Box>
                                </motion.div>
                            );
                        })}
                    </MotionBox>
                </Box>
            </MotionBox>

            {/* ================= IMAGE SECTION ================= */}
            <MotionBox
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                sx={{
                    position: "relative",
                    height: { xs: 520, sm: 550, md: 600, lg: 650 },
                    borderRadius: 5,
                    overflow: "hidden",
                    backgroundImage: "url('/WhyItMattersToday.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    px: 3,
                    mb: { xs: 6, md: 10 },
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(135deg, #95C4FF, #087EDF)",
                        opacity: 0.8,
                    }}
                />

                <Box sx={{ position: "relative", zIndex: 1, maxWidth: 800 }}>
                    <MotionTypography
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        sx={{
                            fontWeight: 700,
                            mb: 3,
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                            color: '#fff',
                        }}
                    >
                        Meet Your People
                    </MotionTypography>

                    <MotionTypography
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        sx={{
                            mb: 4,
                            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                            color: '#fff',
                            px: { xs: 2, sm: 4 },
                        }}
                    >
                        Whether you're looking for heart-centered friendships, a space to heal and grow,
                        or a tribe that speaks the language of realness — you belong here.
                    </MotionTypography>

                    <MotionBox
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  sx={{
    display: "flex",
    flexDirection: "column",
    gap: 3,
    alignItems: "center",
    px: { xs: 2, sm: 0 },
  }}
>
  {/* TOP BUTTON */}
  <Box
    sx={{
      width: "100%",
      maxWidth: 600,
      textAlign: "center",
      py: { xs: 2 },
      px: { xs: 2, sm: 4 },

      borderRadius: "15px",

      // gradient background
      background: "linear-gradient(135deg, #7FB2E5, #5A9BD5)",

      // outer soft border
      border: "2px solid rgba(255,255,255,0.6)",

      // glow effect
    //   boxShadow: "0 0 0 4px rgba(255,255,255,0.15)",

      color: "#fff",
      fontSize: { xs: "14px", sm: "18px", md: "22px" },
      fontWeight: 500,

      cursor: "pointer",
      transition: "all 0.3s ease",

      "&:hover": {
        transform: "scale(1.02)",
        // boxShadow: "0 0 0 6px rgba(255,255,255,0.2)",
      },
    }}
  >
    Join Our Online Community Space
  </Box>

  {/* BOTTOM BUTTON */}
  <Box
    sx={{
      width: "100%",
      maxWidth: 700,
      textAlign: "center",
      py: { xs: 2 },
      px: { xs: 2, sm: 4 },

      borderRadius: "15px",

      background: "linear-gradient(135deg, #F47A5E, #D84315)",

      border: "2px solid rgba(255,255,255,0.6)",

    //   boxShadow: "0 0 0 4px rgba(255,255,255,0.15)",

      color: "#fff",
      fontSize: { xs: "14px", sm: "18px", md: "22px" },
      fontWeight: 500,

      cursor: "pointer",
      transition: "all 0.3s ease",

      "&:hover": {
        transform: "scale(1.02)",
        // boxShadow: "0 0 0 6px rgba(255,255,255,0.2)",
      },
    }}
  >
    Attend a Event , Relating Circle or Joy Lab
  </Box>
</MotionBox>
                </Box>
            </MotionBox>

            {/* ================= FINAL GRID ================= */}
            <Grid 
                container 
                spacing={{ xs: 4, sm: 6, md: 8 }} 
                alignItems="center"
                sx={{
                    flexDirection: { xs: 'column', sm: 'row' },
                }}
            >
                {/* Image Column */}
                <Grid 
                    item 
                    xs={12}
                    sm={6}
                    md={5}
                    sx={{
                        display: "flex",
                        justifyContent: { xs: "center", sm: "flex-start" },
                        width: '100%',
                    }}
                >
                    <MotionCard
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        sx={{
                            width: "100%",
                            maxWidth: { xs: 320, sm: 400, md: 500, lg: 580 },
                            height: { xs: 200, sm: 300, md: 400, lg: 450 },
                            borderRadius: 3,
                            backgroundColor: '#6d6c6c',
                            mx: { xs: 'auto', sm: 0 },
                        }}
                    >
                        <CardContent sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            
                        </CardContent>
                    </MotionCard>
                </Grid>

                {/* Text Column */}
                <Grid 
                    item 
                    xs={12}
                    sm={6} 
                    md={7}
                    sx={{
                        textAlign: { xs: 'center', sm: 'left' },
                    }}
                >
                    <MotionTypography
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: 24, sm: 28, md: 32, lg: 35 },
                            mb: 2,
                            textAlign: { xs: 'center', sm: 'left' },
                            lineHeight: 1.2,
                        }}
                    >
                        Come As You Are. Leave More Yourself.
                    </MotionTypography>

                    <MotionTypography
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        sx={{
                            fontFamily: 'Red Hat Display, sans-serif',
                            fontSize: { 
                                xs: 12,
                                sm: 13,
                                md: 14,
                                lg: 18,
                            },
                            fontWeight: 500,
                            color: '#444',
                            mb: 2,
                            maxWidth: { xs: '100%', sm: 500, md: 720 },
                            textAlign: { xs: 'center', sm: 'left' },
                            mx: { xs: 'auto', sm: 0 },
                            lineHeight: 1.6,
                        }}
                    >
                        The Authentic Relating community is a place where connection becomes practice, and practice becomes lifestyle. We're not just creating a movement—we're creating a new culture of human being. One conversation at a time.
                    </MotionTypography>

                    <MotionTypography
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        sx={{
                            fontFamily: 'Red Hat Display, sans-serif',
                            fontSize: { 
                                xs: 12,
                                sm: 13,
                                md: 14,
                                lg: 18,
                            },
                            fontWeight: 500,
                            color: '#444',
                            maxWidth: { xs: '100%', sm: 500, md: 566 },
                            textAlign: { xs: 'center', sm: 'left' },
                            mx: { xs: 'auto', sm: 0 },
                            lineHeight: 1.6,
                        }}
                    >
                        We're not just about connection—we're about <strong>belonging</strong>.
                    </MotionTypography>
                </Grid>
            </Grid>
        </Container>
    );
};