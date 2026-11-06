'use client';

import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

import SiteContainer from '../../_components/common/SiteContainer';

export default function FrameworkHeroSection() {
  const theme = useTheme();
  const { custom } = theme;
  const heroStyles = custom.frameworkHero;

  return (
    <SiteContainer sx={heroStyles.section}>
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Box sx={heroStyles.headerBox}>
          <Typography sx={heroStyles.title}>
            Introducing Five Dimensions of
            <br />
            Authentic Relating by Amitabha Bhatia
          </Typography>

          <Typography sx={heroStyles.description}>
            Morbi varius ornare ante non posuere. Morbi lacus lacus, auctor sit amet erat vitae, interdum semper leo. Donec dignissim iaculis fermentum. Donec tellus enim, facilisis eu vulputate eget.
          </Typography>
        </Box>
      </motion.div>

      {/* BODY */}
      <Box>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Typography sx={heroStyles.bodyTitle}>
            A Life-Changing Framework for Deeper Human Connection
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <Typography sx={heroStyles.author}>
            By Amitabha Bhatia, Founder of AuthenticRelating.com
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <Typography sx={heroStyles.body}>
            We all crave connection that feels real—where we can be fully seen, safely held, and deeply understood. But most of us were never taught how to truly relate. That's where the <strong>Five Dimensions of Authentic Relating </strong>come in.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        >
          <Typography sx={heroStyles.body}>
            Rooted in years of practice, facilitation, and relational psychology, this powerful framework brings together <strong>45 core practices</strong> across five transformative realms of human connection.
          </Typography>
        </motion.div>
      </Box>
    </SiteContainer>
  );
}