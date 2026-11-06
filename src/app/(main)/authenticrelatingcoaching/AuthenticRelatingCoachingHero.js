'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const AuthenticRelatingCoachingHero = () => {
    return (
        <Box className="bg-[#ffff] mb-2 sm:mb-4 md:mb-6">
            
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative w-full aspect-[16/10] sm:aspect-[16/12] md:aspect-[16/6] lg:aspect-[16/6] overflow-hidden shadow-soft"
            >
                
                <Image
                    src="/hero/arcoaching.png"
                    alt="Founder Hero"
                    fill
                    priority
                    className="object-cover object-center"
                />

                {/* TEXT OVERLAY */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: { xs: '5%', sm: '10%', md: '15%' },
                        left: { xs: '5%', sm: '8%', md: '5%' },
                        zIndex: 10,
                        width: '90%', // Prevent overflowing on small screens
                        maxWidth: '800px',
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: '"Red Hat Display", sans-serif',
                            fontWeight: 700,
                            fontStyle: 'bold',
                            // Responsive sizing based on your spec (53.91px desktop, scaled down for mobile)
                            fontSize: { 
                                xs: '22px', 
                                sm: '32px', 
                                md: '40.91px',
                                lg: '53.91px'  
                            },
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            color: '#FFFFFF',
                            textShadow: '0px 2px 10px rgba(0, 0, 0, 0.4)', // Ensures readability over image
                        }}
                    >
                        Come as you are -
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: '"Red Hat Display", sans-serif',
                            fontWeight: 700,
                            fontStyle: 'bold',
                            // Responsive sizing based on your spec (42.19px desktop, scaled down for mobile)
                            fontSize: { 
                                xs: '15px', 
                                sm: '22px', 
                                md: '30.19px' ,
                                lg: '42.19px' 
                            },
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            color: '#FFFFFF',
                            mt: { xs: 1, sm: 1.5, md: 2 }, // Spacing between the two lines
                            textShadow: '0px 2px 10px rgba(0, 0, 0, 0.4)',
                        }}
                    >
                        be seen, be heard, be met, and belong.
                    </Typography>
                </Box>
                
            </motion.div>

        </Box>
    );
};