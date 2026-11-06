import { Box, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';

export const FrameworkHero = () => {
  return (
    <Box className="bg-[#D6D6D6] mb-8 md:mb-1">
      {/* Hero Visual Block */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.01 }}
        className="w-full h-[438px] md:h-[600px] rounded-xl2 shadow-soft bg-gray-300 overflow-hidden"
      >
        <Box
          component="img"
          src="/Principles.png"
          alt="Principles"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </motion.div>
    </Box>
  );
};