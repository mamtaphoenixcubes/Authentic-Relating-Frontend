'use client';

import { Box } from '@mui/material';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

export const RelatingCirclesHero = () => {
    const ref = useRef(null);
    const prefersReduced = useReducedMotion();

    // Parallax: image moves slower than page scroll
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
    const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.14]);

    return (
        <Box className="bg-[#ffff] ">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full aspect-[16/10] sm:aspect-[16/12] md:aspect-[16/5] lg:aspect-[16/6] overflow-hidden shadow-soft"
            >
                {/* Inner motion wrapper for parallax + Ken Burns */}
                <motion.div
                    style={prefersReduced ? {} : { y, scale }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/hero/relatingcircles.png"
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