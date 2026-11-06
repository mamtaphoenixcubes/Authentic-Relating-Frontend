'use client';

import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

export default function HeroBanner() {
    const theme = useTheme();
    
    // Access hero styles from theme
    const heroStyles = theme.custom?.hero || {};
    
    return (
        <Box className="bg-[#D6D6D6] mb-2 sm:mb-4 md:mb-6">
            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                    duration: 1.2, 
                    ease: 'easeOut',
                    opacity: { duration: 0.8, ease: 'easeOut' },
                    scale: { duration: 1.2, ease: 'easeOut' }
                }}
                className="relative w-full aspect-[16/10] sm:aspect-[16/12] md:aspect-[7/5] lg:aspect-[8/5] xl:aspect-[12/6] overflow-hidden shadow-soft"
            >
                <Image
                    src="/hero/Courseinner.png"
                    alt="Founder Hero"
                    fill
                    priority
                    className="object-cover object-center"
                />
                
                {/* Overlay Content */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
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
                        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)',
                        zIndex: 10,
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                    >
                        <Box>
                            {/* SUBTITLE */}
                            <Typography
                                sx={{
                                    fontFamily: theme.typography.fontFamily,
                                    fontWeight: 700,
                                    fontSize: { xs: 12, sm: 11 , md: 15, lg: 25, xl: 32 },
                                    color: '#FFFFFF',
                                    opacity: 0.9,
                                    mb: 0.5,
                                    letterSpacing: '2px',
                                }}
                            >
                                Online-Courses
                            </Typography>

                            {/* TITLE */}
                            <Typography
                                sx={{
                                    fontFamily: theme.typography.fontFamily,
                                    fontWeight: 700,
                                    fontSize: { 
                                        xs: theme.typography.hero?.title?.fontSize?.xs || 28, 
                                        sm: theme.typography.hero?.title?.fontSize?.sm || 36, 
                                        md: theme.typography.hero?.title?.fontSize?.md || 50 ,
                                        lg: theme.typography.hero?.title?.fontSize?.lg || 72 ,
                                        xl: theme.typography.hero?.title?.fontSize?.xl || 94 
                                    },
                                    color: theme.custom?.hero?.title?.color || '#FFFFFF',
                                    lineHeight: 1.1,
                                    textShadow: theme.custom?.hero?.title?.textShadow || '0 4px 12px rgba(0,0,0,0.25)',
                                }}
                            >
                                Yoga this monsoon
                            </Typography>
                        </Box>
                    </motion.div>
                </Box>
            </motion.div>
        </Box>
    );
}