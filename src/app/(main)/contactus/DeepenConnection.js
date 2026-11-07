'use client';

import React, { useRef, useEffect } from "react";
import { Box, Grid, Typography, Card, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import custom common
import Section from "../../_components/common/Section";
import SiteContainer from "../../_components/common/SiteContainer";
import SectionHeader from "../../_components/common/SectionHeader";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MotionCard = motion(Card);

const slideInRightVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" }
    }
};

export const DeepenConnection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    
    // Refs for text animations
    const descriptionRef = useRef(null);
    const textLinesRef = useRef([]);

    // GSAP animation for description and bottom text
    useEffect(() => {
        // Description text animation
        if (descriptionRef.current) {
            gsap.from(descriptionRef.current, {
                yPercent: 100,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: descriptionRef.current,
                    start: "top 85%",
                    end: "top 60%",
                    toggleActions: "play none none reverse",
                }
            });
        }

        // Bottom text lines animation - each line slides up separately
        if (textLinesRef.current.length > 0) {
            textLinesRef.current.forEach((line, index) => {
                if (line) {
                    gsap.from(line, {
                        yPercent: 100,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        delay: index * 0.15, // Stagger effect
                        scrollTrigger: {
                            trigger: line,
                            start: "top 85%",
                            end: "top 60%",
                            toggleActions: "play none none reverse",
                        }
                    });
                }
            });
        }

        // Cleanup ScrollTrigger
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <Section sx={{ pb: { xs: 2, sm: 0, md: 0 }, pt: { xs: 4, sm: 5, md: 8 } }}>
            <SiteContainer>
                <Grid
                    container
                    spacing={{ xs: 2, sm: 3, md: 4 }}
                    alignItems="center"
                    sx={{
                        /* ✅ CHANGED: column on xs, row from sm upward */
                        flexDirection: { xs: 'column', sm: 'row' }
                    }}
                >
                    {/* LEFT CONTENT */}
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        {/* HEADING */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <Typography
                                sx={{
                                    color: '#F9998D',
                                    fontFamily: 'var(--font-redhat), "Red Hat Display", sans-serif',
                                    fontWeight: 700,
                                    fontSize: {
                                        xs: '24px',
                                        sm: '25px',
                                        md: '32px',
                                        lg: '40px',
                                        xl: '44px'
                                    },
                                    lineHeight: {
                                        xs: '1.2',
                                        sm: '1.25',
                                        md: '1.3',
                                        lg: '1.1'
                                    },
                                    /* ✅ text aligned left starting at sm since it's now side-by-side */
                                    textAlign: { xs: 'center', sm: 'left' },
                                    mb: { xs: 2, sm: 2.5, md: 3, lg: 4 },
                                    maxWidth: { xs: '100%', sm: '100%', md: '90%' },
                                }}
                            >
                                Deepen Connection. Start a Conversation That Matters.
                            </Typography>
                        </motion.div>

                        {/* DESCRIPTION - GSAP Slide Up Reveal */}
                        <Box
                            ref={descriptionRef}
                            sx={{
                                overflow: 'hidden',
                                mb: { xs: 3, sm: 3.5, md: 4, lg: 5 },
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#000000',
                                    fontFamily: 'var(--font-redhat), "Red Hat Text", sans-serif',
                                    fontWeight: 500,
                                    fontSize: {
                                        xs: '14px',
                                        sm: '10px',
                                        md: '16px',
                                        lg: '16px',
                                        xl: '16px'
                                    },
                                    lineHeight: {
                                        xs: '1.5',
                                        sm: '1.55',
                                        md: '1.6',
                                        lg: '1.4'
                                    },
                                    /* ✅ text aligned left starting at sm */
                                    textAlign: { xs: 'center', sm: 'left' },
                                    maxWidth: { xs: '100%', sm: '100%', md: '95%' }
                                }}
                            >
                                Welcome to AuthenticRelating.com — the home of genuine human connection,
                                relational leadership, and transformational communication. Whether
                                you're looking to join a workshop, bring Authentic Relating to your
                                organization, or connect with our team, this is where the conversation begins.
                            </Typography>
                        </Box>

                        {/* BOTTOM TEXT - GSAP Slide Up Reveal with Stagger */}
                        <Box>
                            {[
                                "We don't just invite messages.",
                                "We invite real moments of connection."
                            ].map((text, i) => (
                                <Box
                                    key={i}
                                    ref={(el) => (textLinesRef.current[i] = el)}
                                    sx={{
                                        overflow: 'hidden',
                                        mb: i === 0 ? { xs: 0.5, sm: 1, md: 1 } : 0,
                                        mt: i === 1 ? { xs: 0, sm: 0, md: 0.5 } : 0
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: '#1f2937',
                                            fontFamily: 'var(--font-redhat), "Red Hat Text", sans-serif',
                                            fontWeight: 600,
                                            fontSize: {
                                                xs: '16px',
                                                sm: '10px',
                                                md: '20px',
                                                lg: '24px',
                                                xl: '28px'
                                            },
                                            lineHeight: {
                                                xs: '1.3',
                                                sm: '1.10',
                                                md: '1.15',
                                                lg: '1.2'
                                            },
                                            /* ✅ text aligned left starting at sm */
                                            textAlign: { xs: 'center', sm: 'left' },
                                        }}
                                    >
                                        {text}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Grid>

                    {/* RIGHT IMAGE */}
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={6}
                        sx={{
                            display: 'flex',
                            justifyContent: { xs: 'center', sm: 'flex-end' },
                            alignItems: 'center',
                            order: { xs: 0, sm: 1 }
                        }}
                    >
                        <MotionCard
                            variants={slideInRightVariants}
                            whileInView="visible"
                            initial="hidden"
                            viewport={{ once: true }}
                            sx={{
                                width: '100%',
                                maxWidth: {
                                    xs: '100%',
                                    sm: '100%',      /* ✅ fill the 6-col grid on sm */
                                    md: '480px',
                                    lg: '550px',
                                    xl: '600px'
                                },
                                height: 'auto',
                                minHeight: {
                                    xs: '220px',
                                    sm: '240px',     /* ✅ slightly shorter on tablet */
                                    md: '300px',
                                    lg: '340px',
                                    xl: '380px'
                                },
                                aspectRatio: {
                                    xs: '4/3',
                                    sm: '4/3',
                                    md: '16/12',
                                    lg: '16/11'
                                },
                                borderRadius: {
                                    xs: '10px'
                                },
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                boxShadow: '0 20px 35px -10px rgba(0,0,0,0.1)',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover img': {
                                    transform: 'scale(1.05)',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '100%',
                                }}
                            >
                                <Image
                                    src="/contactus/deepen.png"
                                    alt="Connection Image"
                                    fill
                                    priority
                                    style={{
                                        objectFit: 'cover',
                                        transition: 'transform 0.4s ease',
                                    }}
                                />
                            </Box>
                        </MotionCard>
                    </Grid>
                </Grid>
            </SiteContainer>
        </Section>
    );
};