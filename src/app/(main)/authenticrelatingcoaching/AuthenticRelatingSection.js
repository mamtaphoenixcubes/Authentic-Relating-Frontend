'use client';

import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';

import Section from '@/app/_components/common/Section';
import SiteContainer from '@/app/_components/common/SiteContainer';

const MotionBox = motion(Box);

// -----------------------------------------------------------
// Motion variants
// -----------------------------------------------------------
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.6 },
  },
};

export default function AuthenticRelatingSection() {
  const theme = useTheme();
  const s = theme.custom.authenticRelatingSection;

  return (
    // 👈 Added pt: 0 and mt: 0 here to remove the top gap
    <Section sx={{ pt: 0, mt: 0, pb: 5, mb: 1 }}>
      <SiteContainer>
        <MotionBox
          sx={{ ...s.wrapper, pb: 2, pt: 0, mt: 5 }}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* TITLE + SUBTITLE */}
          <Box sx={s.header}>
            <Typography sx={s.title}>Authentic Relating Coaching</Typography>
            <Typography sx={s.subtitle}>
              A Portal to Realness, Aliveness, and Sovereign Connection,
              Personal Transformation | Conscious Leadership | Embodied
              Integration By Amitabha Bhatia, Founder of AuthenticRelating.com
            </Typography>
          </Box>

          {/* TWO-COLUMN SECTION */}
          <MotionBox
            sx={{ ...s.columns, mb: 2 }}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            {/* LEFT — IMAGE */}
            <MotionBox
              sx={s.imageBox}
              variants={slideInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Box sx={s.imageInner}>
                <Image
                  src="/arcoaching/homecoaching.png"
                  alt="Section Image"
                  fill
                  className="object-contain sm:object-cover"
                  sizes="(max-width: 600px) 85vw, (max-width: 900px) 100vw, 70vw"
                />
              </Box>
            </MotionBox>

            {/* RIGHT — TEXT */}
            <MotionBox
              sx={s.textBox}
              variants={slideInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Typography sx={s.headingRight}>
                This Is Not Just Coaching. It's a Homecoming.
              </Typography>

              <Typography sx={s.paragraph}>
                In a world obsessed with doing, Authentic Relating invites you to be.
                <br />
                To listen more deeply than you've ever listened.
                <br />
                To speak from the raw truth that lives beneath your practiced voice.
                <br />
                To remember yourself not as a role or identity but as a presence.
                <br />
                <br />
                This is coaching that pierces illusion. That awakens your sovereignty.
                <br />
                That makes you more you.
              </Typography>
            </MotionBox>
          </MotionBox>
        </MotionBox>
      </SiteContainer>
    </Section>
  );
}