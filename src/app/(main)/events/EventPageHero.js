'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

// =====================================================
// MOTION VARIANTS
// =====================================================

const containerVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.15,
            delayChildren: 0.4,
        },
    },
};

const imageVariants = {
    hidden: { scale: 1.15, filter: 'blur(8px)' },
    visible: {
        scale: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
        },
    },
};

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.8, delay: 0.4 },
    },
};

const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.08,
            delayChildren: 0.5,
        },
    },
};

// Parent of per-letter title letters
const titleContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.045,
            delayChildren: 0.2,
        },
    },
};

// Per-letter motion — rises, fades, un-blurs, settles
const titleLetterVariants = {
    hidden: {
        opacity: 0,
        y: 40,
        rotateX: -90,
        filter: 'blur(6px)',
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// Parent of per-word subtitle words
const subtitleContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.3,
        },
    },
};

const subtitleWordVariants = {
    hidden: { opacity: 0, y: 14, filter: 'blur(4px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

// =====================================================
// COMPONENT
// =====================================================

export const EventPageHero = () => {
    // Split text into letters/words for animation
    const titleText = 'Events';
    const subtitleText = 'Connect, Learn & Grow Together';

    const titleLetters = titleText.split('');
    const subtitleWords = subtitleText.split(' ');

    return (
        <Box className="bg-[#D6D6D6] mb-2 sm:mb-4 md:mb-6">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative w-full aspect-[16/10] sm:aspect-[16/12] md:aspect-[16/5] lg:aspect-[16/6] overflow-hidden shadow-soft"
            >
                {/* Background Image with zoom + blur reveal */}
                <motion.div
                    variants={imageVariants}
                    className="w-full h-full"
                >
                    <Image
                        src="/hero/events.png"
                        alt="Events Hero"
                        fill
                        priority
                        className="object-cover object-center"
                    />
                </motion.div>

                {/* Gradient overlay for depth */}
                <motion.div
                    variants={overlayVariants}
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none"
                />

                {/* Text overlay */}
                <motion.div
                    variants={contentVariants}
                    className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 md:bottom-16 md:left-16 text-white z-10"
                    style={{ perspective: 800 }}
                >
                    {/* ===== TITLE — per-letter animation ===== */}
                    <motion.div
                        variants={titleContainerVariants}
                        className="flex flex-wrap"
                    >
                        {titleLetters.map((letter, i) => (
                            <motion.span
                                key={`${letter}-${i}`}
                                variants={titleLetterVariants}
                                style={{
                                    display: 'inline-block',
                                    transformOrigin: 'bottom center',
                                    fontFamily: '"Red Hat Display", sans-serif',
                                    fontWeight: 700,
                                    fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                                    lineHeight: 1.1,
                                    letterSpacing: 0,
                                    textShadow: '0 4px 12px rgba(0,0,0,0.35)',
                                }}
                            >
                                {letter === ' ' ? '\u00A0' : letter}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* ===== SUBTITLE — per-word animation ===== */}
                    <motion.div
                        variants={subtitleContainerVariants}
                        className="flex flex-wrap mt-1"
                        style={{ gap: '0.3em' }}
                    >
                        {subtitleWords.map((word, i) => (
                            <motion.span
                                key={`${word}-${i}`}
                                variants={subtitleWordVariants}
                                style={{
                                    display: 'inline-block',
                                    fontFamily: '"Red Hat Display", sans-serif',
                                    fontWeight: 400,
                                    fontSize: 'clamp(0.875rem, 1.6vw, 1.125rem)',
                                    lineHeight: 1.4,
                                    opacity: 0.92,
                                    textShadow: '0 3px 10px rgba(0,0,0,0.3)',
                                }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Subtle vignette pulse */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.15, 0] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1.5,
                    }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)',
                    }}
                />
            </motion.div>
        </Box>
    );
};