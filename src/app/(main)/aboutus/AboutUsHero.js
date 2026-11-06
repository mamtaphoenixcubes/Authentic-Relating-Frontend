'use client';

import { Box } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const AboutUsHero = () => {
    return (
        <Box className="bg-[#D6D6D6] mb-2 sm:mb-4 md:mb-6">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative w-full aspect-[16/10] sm:aspect-[16/12] md:aspect-[16/5] lg:aspect-[16/6] overflow-hidden shadow-soft"
            >
                {/* Image wrapper for a soft zoom-in reveal */}
                <motion.div
                    initial={{ scale: 1.08, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/hero/aboutus.png"
                        alt="Founder Hero"
                        fill
                        priority
                        className="object-cover object-center"
                    />
                </motion.div>

                {/* Optional subtle gradient overlay that fades in */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.4 }}
                    className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent"
                />
            </motion.div>

        </Box>
    );
};