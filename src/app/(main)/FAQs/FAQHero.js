'use client';

import { Box } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const FAQHero = () => {
    return (
        <Box className="bg-[#D6D6D6] mb-2 sm:mb-4 md:mb-6">
            
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative w-full aspect-[16/10] sm:aspect-[16/12] md:aspect-[16/5] lg:aspect-[16/6] overflow-hidden shadow-soft"
            >
                
                <Image
                    src="/hero/faq.png"
                    alt="Founder Hero"
                    fill
                    priority
                    className="object-cover object-center"
                />
                
            </motion.div>

        </Box>
    );
};