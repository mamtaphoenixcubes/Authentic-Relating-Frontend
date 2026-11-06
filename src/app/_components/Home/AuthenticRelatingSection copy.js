'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export const AuthenticRelatingSection = () => {
    return (
        <MotionBox
            initial={{ opacity: 0, y: 50 }}          // Hidden initially
            whileInView={{ opacity: 1, y: 0 }}       // Appear when in view
            viewport={{ once: true, amount: 0.3 }}   // Only show once, 30% visible
            transition={{ duration: 0.8, ease: 'easeOut' }}
            sx={{ py: 8, px: { xs: 2, md: 6 } }}
        >
            {/* 1. Video placeholder */}
            <Box
                sx={{
                    width: '100%',
                    height: { xs: 180, md: 300 },
                    bgcolor: '#d8efef',
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 6,
                    position: 'relative',
                }}
            >
                <Box
                    sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        bgcolor: 'rgba(255,255,255,0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                    }}
                >
                    <Box
                        component="span"
                        sx={{
                            display: 'block',
                            width: 0,
                            height: 0,
                            borderLeft: '20px solid #00A7B7',
                            borderTop: '12px solid transparent',
                            borderBottom: '12px solid transparent',
                        }}
                    />
                </Box>
            </Box>

            {/* Main content box */}
            <Box
                sx={{
                    maxWidth: { xs: '100%', sm: '100%', md: 1000, lg: 1500, xl: 1800 },
                    width: '100%',
                    borderRadius: { xs: 3, sm: 3.5, md: 4, lg: 4, xl: 4 },
                    p: { xs: 3, sm: 4, md: 5, lg: 5, xl: 6 },
                    background: 'linear-gradient(50deg, #ff4040b9, rgba(247, 175, 60, 0.66))',
                    boxShadow: {
                        xs: '0px 2px 4px 0.5px rgba(0,0,0,0.1)',
                        sm: '0px 3px 6px 0.7px rgba(0,0,0,0.1)',
                        md: '0px 4px 8px 0.9px rgba(0,0,0,0.1)',
                        lg: '0px 4.17px 7.61px 1.04px rgba(0,0,0,0.1)',
                    },
                    color: '#fff',
                }}
            >
                {/* Top heading */}
                <Box sx={{ textAlign: 'center', mb: { xs: 3, sm: 4, md: 2, lg: 5, xl: 6 } }}>
                    <Typography
                        variant="h3"
                        fontWeight={700}
                        gutterBottom
                        sx={{
                            fontSize: {
                                xs: '0.9rem',
                                sm: '1.5rem',
                                md: '2rem',
                                lg: '2.75rem',
                                xl: '3rem',
                            },
                        }}
                    >
                        The{' '}
                        <Typography
                            component="span"
                            sx={{
                                fontSize: {
                                    xs: '1rem',
                                    sm: '1.5rem',
                                    md: '2rem',
                                    lg: '2.2rem',
                                    xl: '2.2rem',
                                },
                                fontWeight: 400,
                                fontFamily: 'inherit',
                            }}
                        >
                            Five Dimensions
                        </Typography>{' '}
                        of Authentic Relating
                    </Typography>
                </Box>

                {/* Left + Right section */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: { xs: 3, sm: 5, md: 5, lg: 5, xl: 22 },
                        alignItems: { xs: 'center', sm: 'flex-start' },
                    }}
                >
                    {/* Left side image */}
                    <MotionBox
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: { xs: '100%', sm: 'auto' },
                            ml: { xs: 1.5, sm: 2, md: 2, lg: 22, xl: 40 },
                        }}
                    >
                        <Box
                            sx={{
                                width: { xs: 180, sm: 180, md: 220, lg: 300, xl: 300 },
                                height: { xs: 180, sm: 180, md: 220, lg: 300, xl: 300 },
                                background: '#fff',
                                borderRadius: '50%',
                                boxShadow: '0px 0px 50px 0px #00497F4D',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: { xs: 1.5, sm: 2, md: 2, lg: 2, xl: 3 },
                                mt: { xs: 0, sm: 2 },
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            <Image
                                src="/Amitabhabhatia.png"
                                alt="Amitabha Bhatia"
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'center' }}
                                sizes="(max-width: 900px) 180px, (max-width: 1200px) 220px, 300px"
                            />
                        </Box>

                        <Typography
                            sx={{
                                mt: { xs: 0.5, sm: 1 },
                                fontWeight: 600,
                                textAlign: 'center',
                                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem', lg: '1.3rem', xl: '1.4rem' },
                            }}
                        >
                            Amitabha Bhatia
                        </Typography>

                        <Typography
                            sx={{
                                opacity: 0.9,
                                textAlign: 'center',
                                fontSize: { xs: '0.75rem', sm: '0.75rem', md: '0.9rem', lg: '1rem', xl: '1.1rem' },
                                mt: { xs: 0.25, sm: 0.5 },
                            }}
                        >
                            Founder of AuthenticRelating.org
                        </Typography>
                    </MotionBox>

                    {/* Right side text */}
                    <MotionBox
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                        sx={{
                            flex: 1,
                            mt: { xs: 3, sm: 0 },
                            width: { xs: '100%', sm: 'auto' },
                            textAlign: { xs: 'center', sm: 'left' },
                            mr: { xs: 1.5, sm: 2, md: 2, lg: 2, xl: 35 },
                        }}
                    >
                        <Typography
                            sx={{
                                opacity: 0.9,
                                fontStyle: 'italic',
                                lineHeight: { xs: 1.7, sm: 1.8 },
                                fontSize: { xs: '0.85rem', sm: '0.8rem', md: '0.8rem', lg: '0.8rem', xl: '1rem' },
                                mb: { xs: 2, sm: 1 },
                            }}
                        >
                            Discover the map that brings you home—to yourself and to others.
                        </Typography>

                        <Typography
                            sx={{
                                opacity: 0.9,
                                fontStyle: 'italic',
                                lineHeight: { xs: 1.7, sm: 1.8 },
                                fontSize: { xs: '0.85rem', sm: '0.7rem', md: '0.8rem', lg: '0.8rem', xl: '1rem' },
                                mb: { xs: 2, sm: 1 },
                            }}
                        >
                            The Five Dimensions of Authentic Relating is more than a framework—it’s a <br />
                            transformational lens for living, leading, and loving with integrity, empathy, presence, and depth.<br />
                            Through 45 embodied practices, journal prompts, sentence stems, games, and <br />
                            real-life integration tools, this body of work invites you into richer conversations, deeper <br />
                            intimacy, and conscious connection.
                        </Typography>

                        <Typography
                            sx={{
                                opacity: 0.9,
                                fontStyle: 'italic',
                                lineHeight: { xs: 1.7, sm: 1.8 },
                                fontSize: { xs: '0.85rem', sm: '0.8rem', md: '0.8rem', lg: '0.8rem', xl: '1rem' },
                                mb: { xs: 2, sm: 1 },
                            }}
                        >
                            Because real connection isn’t taught—it’s practiced.
                        </Typography>
                    </MotionBox>
                </Box>
            </Box>
        </MotionBox>
    );
};
