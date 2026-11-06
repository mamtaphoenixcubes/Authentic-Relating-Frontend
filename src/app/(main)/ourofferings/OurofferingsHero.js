'use client';

import { Box } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const OurofferingsHero = () => {
    return (
        <Box className="bg-[#D6D6D6] mb-2 sm:mb-4 md:mb-6">
            
            {/* Main Hero with Enhanced Motion */}
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                    duration: 0.8, 
                    ease: [0.22, 1, 0.36, 1], // Custom easing for smoother feel
                    delay: 0.1 
                }}
                className="relative w-full aspect-[16/10] sm:aspect-[16/12] md:aspect-[16/5] lg:aspect-[16/6] overflow-hidden shadow-soft"
            >
                
                {/* Image with subtle zoom effect */}
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                        duration: 1.2, 
                        ease: "easeOut",
                        delay: 0.2 
                    }}
                    className="relative w-full h-full"
                >
                    <Image
                        src="/hero/offerings.png"
                        alt="Our Offerings - Authentic Relating"
                        fill
                        priority
                        className="object-cover object-center"
                    />
                    
                    {/* Optional: Subtle overlay gradient for better text readability if needed */}
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.2) 100%)',
                            zIndex: 1,
                        }}
                    />
                </motion.div>

                {/* Optional: Decorative shine effect */}
                <motion.div
                    initial={{ opacity: 0, x: '-100%' }}
                    animate={{ opacity: 0.3, x: '100%' }}
                    transition={{ 
                        duration: 1.5, 
                        ease: "easeInOut",
                        delay: 0.5 
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    style={{ zIndex: 0 }}
                />
            </motion.div>
        </Box>
    );
};