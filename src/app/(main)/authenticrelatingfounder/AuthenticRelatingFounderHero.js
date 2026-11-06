'use client';

import { Box } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

export const AuthenticRelatingFounderHero = () => {
  return (
    <Box className="mb-2 sm:mb-4 md:mb-6">
      <MotionBox
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="relative w-full aspect-[16/10] sm:aspect-[16/12] md:aspect-[16/5] lg:aspect-[16/6] overflow-hidden shadow-soft"
      >
        <motion.div
          variants={imageVariants}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image
            src="/hero/founderhero.png"
            alt="Founder Hero"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
      </MotionBox>
    </Box>
  );
};