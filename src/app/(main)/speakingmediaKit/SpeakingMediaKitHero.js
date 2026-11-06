'use client';

import { Box } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const SpeakingMediaKitHero = () => {
    return (
        <Box className="mb-2 sm:mb-4 md:mb-6">
            
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative w-full aspect-[16/10] sm:aspect-[16/12] md:aspect-[16/5] lg:aspect-[16/6] overflow-hidden shadow-soft"
            >
                {/* Animated background overlay */}
                <motion.div
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                    className="absolute inset-0 bg-[#D6D6D6] z-10"
                />

                {/* Image with subtle scale animation */}
                <motion.div
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/hero/speakingandmediakit.png"
                        alt="Founder Hero"
                        fill
                        priority
                        className="object-cover object-center"
                    />
                </motion.div>

                {/* Optional: subtle gradient shimmer sweep */}
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{
                        duration: 1.6,
                        ease: 'easeInOut',
                        delay: 0.5,
                    }}
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{
                        background:
                            'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)',
                    }}
                />
            </motion.div>

        </Box>
    );
};