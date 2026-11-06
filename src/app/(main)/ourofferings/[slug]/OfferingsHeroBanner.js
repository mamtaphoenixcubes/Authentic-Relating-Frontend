'use client';

import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function OfferingsHeroBanner({ offering }) {
    return (
        <Box
            sx={{
                height: { xs: 260, sm: 340, md: 490 ,xl: 700  },
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: {
                    xs: 'center',
                    sm: 'flex-start',
                    md: 'flex-start'
                },
                px: { xs: 2, sm: 4, md: 6 },
                pb: { xs: 3, sm: 4, md: 6 },
                textAlign: {
                    xs: 'center',
                    sm: 'left',
                    md: 'left'
                },
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Animated Background Image */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}/${offering.fullImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            {/* Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 60%)',
                    pointerEvents: 'none',
                }}
            />

            <Box sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: 20, sm: 36, md: 44 },
                            fontWeight: 700,
                            color: '#FFFFFF',
                            lineHeight: 1.1,
                            textShadow: '0 2px 16px rgba(0,0,0,0.4)',
                        }}
                    >
                        {offering.title}
                    </Typography>
                </motion.div>

                {offering.subtitle && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: 14, sm: 18, md: 20 },
                                fontWeight: 400,
                                color: 'rgba(255,255,255,0.95)',
                                mt: 1,
                                textShadow: '0 1px 12px rgba(0,0,0,0.3)',
                            }}
                        >
                            {offering.subtitle}
                        </Typography>
                    </motion.div>
                )}
            </Box>
        </Box>
    );
}