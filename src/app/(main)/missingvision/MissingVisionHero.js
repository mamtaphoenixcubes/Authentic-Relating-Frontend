
'use client';

import { Box } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const MissingVisionHero = () => {
    return (
        <Box className="bg-[#ffff] ">
            <motion.div
                initial={{
                    opacity: 0,
                    y: 40,
                    scale: 0.98,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}
                transition={{
                    duration: 0.7,
                    ease: 'easeOut',
                }}
                className="relative w-full aspect-[16/10] sm:aspect-[16/12] md:aspect-[16/5] lg:aspect-[16/6] overflow-hidden shadow-soft"
            >
                <motion.div
                    initial={{
                        scale: 1.08,
                    }}
                    animate={{
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.2,
                        ease: 'easeOut',
                    }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/hero/mission-vision.png"
                        alt="Founder Hero"
                        fill
                        priority
                        className="object-cover object-center"
                    />
                </motion.div>
            </motion.div>
        </Box>
    );
};