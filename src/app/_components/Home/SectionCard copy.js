'use client';

import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const MotionPaper = motion(Paper);

const data = [
    {
        title: 'Authentic Relating @Work',
        desc:
            'Learn the 10 Principles of Authentic Relating by Amitabha Bhatia and cultivate self-esteem, emotional intelligence, and deep connection through relating games, mindfulness, and embodiment practices.',
    },
    {
        title: 'Authentic Relating Coaching',
        desc:
            'Develop unshakable self-trust, emotional resilience, and presence in all areas of life—relationships, work, social settings, and leadership. Strengthen assertiveness and grounded self-expression through embodiment and relational exercises.',
    },
    {
        title: 'Events',
        desc:
            'Understand the fundamental psychological, emotional, and relational needs that drive behavior. Learn to identify, communicate, and fulfill your needs while fostering deeper self-awareness and authentic connection.',
    },
    {
        title: 'Authentic Relating Games',
        desc:
            'Explore how early relational patterns shape connection, intimacy, and trust. Learn to heal insecure attachments, cultivate self-trust, and create healthy, secure relationships through relational intelligence and emotional awareness.',
    },
    {
        title: 'Books',
        desc:
            'Develop true self-worth and self-acceptance beyond external validation. Learn to embrace your strengths, overcome self-doubt, and create a strong inner foundation for personal growth and relational confidence.',
    },
    {
        title: 'Community',
        desc:
            'Go beyond surface-level self-care to nourish your mind, body, and soul. Learn forgiveness, gratitude, boundary-setting, and assertiveness, while practicing mindfulness, emotional regulation, and deep self-honoring rituals.',
    },
    {
        title: 'Blog',
        desc:
            'Engage in playful yet profound interactive exercises that deepen presence, connection, and communication skills. Learn to listen deeply, express authentically, and build emotional intelligence in a fun, engaging way.',
    },
    {
        title: 'Authentic Relating Joy Lab',
        desc:
            'Master emotional intelligence and resilience by learning to identify, process, and regulate emotions. Explore different types of emotions—primary, social, complex, survival-based, and expansive—and develop tools for self-awareness, mindfulness, and emotional balance.',
    },
];

export default function SectionCard() {
    return (
        <Box
            sx={{
                px: { xs: 2, sm: 3, md: 4, lg: 6 },
                py: { xs: 3, md: 4 },
            }}
        >
            {data.map((item, index) => (
                <MotionPaper
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    elevation={0}
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { xs: 'stretch', sm: 'flex-start' },
                        gap: { xs: 2, sm: 3, md: 4 },
                        p: { xs: 2, sm: 3 },
                        mb: { xs: 2, sm: 3 },
                        borderRadius: { xs: '12px', sm: '14px' },

                        /* GRADIENT BACKGROUND */
                        background: 'linear-gradient(50deg, rgba(46, 124, 9, 0.85), rgba(196, 236, 170, 0.85),)',

                        /* BACKDROP FILTER */
                        backdropFilter: { xs: 'blur(80px)', sm: 'blur(180px)', md: 'blur(260px)' },
                        WebkitBackdropFilter: { xs: 'blur(80px)', sm: 'blur(180px)', md: 'blur(260px)' },

                        /* BOX SHADOW */
                        boxShadow: { xs: '0px 2px 4px 0.5px #0000001A', sm: '0px 4px 7.3px 1px #0000001A' },
                    }}
                >
                    {/* Image Placeholder */}
                    <Box
                        sx={{
                            width: { xs: '100%', sm: 140, md: 160, lg: 180 },
                            height: { xs: 100, sm: 110, md: 120 },
                            backgroundColor: '#ffffff',
                            borderRadius: { xs: '8px', sm: '10px' },
                            flexShrink: 0,
                            opacity: 0.9,
                        }}
                    />

                    {/* Content */}
                    <Box sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: { xs: 'auto', sm: 120, md: 130 }
                    }}>
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    color: '#ffffff',
                                    mb: 1,
                                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                                }}
                            >
                                {item.title}
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: { xs: '0.875rem', sm: '0.9rem', md: '0.875rem' },
                                    color: '#f3f3f3',
                                    mb: { xs: 2, sm: 3 },
                                    lineHeight: 1.6,
                                    display: '-webkit-box',
                                    WebkitLineClamp: { xs: 3, sm: 2 },
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {item.desc}
                            </Typography>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            gap: 1,
                            flexWrap: { xs: 'wrap', sm: 'nowrap' }
                        }}>
                            <Button
                                size="small"
                                variant="outlined"
                                sx={{
                                    textTransform: 'none',
                                    borderRadius: '8px',
                                    px: { xs: 1.5, sm: 2 },
                                    py: { xs: 0.5, sm: 0.625 },
                                    fontSize: { xs: '0.75rem', sm: '0.8125rem' },
                                    color: '#ffffff',
                                    borderColor: '#ffffff',
                                    minWidth: { xs: '100px', sm: 'auto' },
                                    flex: { xs: '1 1 auto', sm: 'none' },
                                    '&:hover': {
                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                    },
                                }}
                            >
                                Read More
                            </Button>

                            <Button
                                size="small"
                                variant="outlined"
                                sx={{
                                    textTransform: 'none',
                                    borderRadius: '8px',
                                    px: { xs: 1.5, sm: 2 },
                                    py: { xs: 0.5, sm: 0.625 },
                                    fontSize: { xs: '0.75rem', sm: '0.8125rem' },
                                    color: '#ffffff',
                                    borderColor: '#ffffff',
                                    minWidth: { xs: '100px', sm: 'auto' },
                                    flex: { xs: '1 1 auto', sm: 'none' },
                                    '&:hover': {
                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                    },
                                }}
                            >
                                Contact Us
                            </Button>
                        </Box>
                    </Box>
                </MotionPaper>
            ))}

            <Typography
                sx={{
                    fontSize: { xs: '0.875rem', sm: '0.9rem', md: '0.875rem' },
                    color: '#000000',
                    mb: { xs: 2, sm: 3 },
                    lineHeight: 1.6,
                    textAlign: 'center',
                    display: 'block',
                }}
            >
                We're here to provide the support and guidance you need.{' '}
                <Box
                    component="span"
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#000000',
                        fontWeight: 600,
                        textDecoration: 'underline',
                        textUnderlineOffset: '4px',
                        textDecorationThickness: '2px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                            color: '#333333',
                            textDecorationColor: '#333333',
                            transform: 'translateX(4px)',
                        }
                    }}
                >
                    View More
                    <Box
                        component="span"
                        sx={{
                            ml: 0.5,
                            display: 'inline-flex',
                            alignItems: 'center',
                            transition: 'transform 0.2s ease',
                            '&:hover': {
                                transform: 'translateX(4px)',
                            }
                        }}
                    >
                        →
                    </Box>
                </Box>
            </Typography>
        </Box>
    );
}
