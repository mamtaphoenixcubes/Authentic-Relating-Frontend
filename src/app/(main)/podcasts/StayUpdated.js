'use client';

import { Box, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';

// Shared layout primitives
import Section from '@/app/_components/common/Section';
import SiteContainer from '@/app/_components/common/SiteContainer';
import Card from '@/app/_components/common/Card';

export default function StayUpdated() {
  return (
    <Section
      sx={{
        py: { xs: 6, sm: 10 },
      }}
    >
      <SiteContainer>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* =========================
              LEFT TEXT
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Box
              maxWidth={900}
              sx={{
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-redhat)',
                    fontWeight: 700,

                    fontSize: {
                      xs: '24px',
                      sm: '30px',
                      md: '36px',
                      lg: '42px',
                      xl: '48px',
                    },

                    lineHeight: {
                      xs: 1.3,
                      md: 1.2,
                    },

                    letterSpacing: {
                      xs: '-0.5px',
                      md: '-0.96px',
                    },

                    color: '#FF8A1F',

                    mb: { xs: 2, md: 2.5 },

                    textAlign: { xs: 'center', sm: 'left' },
                  }}
                >
                  Stay Updated and
                  <br />
                  New episodes drop regularly.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-redhat)',
                    fontWeight: 400,

                    fontSize: {
                      xs: '14px',
                      sm: '15px',
                      md: '16px',
                      lg: '20px',
                    },

                    lineHeight: {
                      xs: 1.6,
                      md: 1.4,
                    },

                    color: '#444444',

                    mx: { xs: 'auto', sm: 0 },

                    maxWidth: {
                      xs: '90%',
                      sm: '100%',
                      md: 900,
                    },

                    textAlign: { xs: 'center', sm: 'left' },
                  }}
                >
                  Follow us and listen at AuthenticRelating.com or wherever you
                  get your podcasts.
                </Typography>
              </motion.div>
            </Box>
          </motion.div>

          {/* =========================
              RIGHT VISUAL
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Box
              sx={{
                position: 'relative',
                width: { xs: 300, sm: 310, md: 320 },
                height: { xs: 300, sm: 310, md: 320 },
                borderRadius: '50%',
                bgcolor: '#FF8A1F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* MIC PLACEHOLDER WITH IMAGE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box
                  sx={{
                    width: 160,
                    height: 240,
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src="/Podcast.png"
                    alt="Podcast"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </motion.div>

              {/* =========================
                  PLATFORM CARD
              ========================== */}
              <Card
                sx={{
                  position: 'absolute',
                  bottom: { xs: -30, sm: -30, md: -70 },
                  width: 260,
                  p: 2,
                  borderRadius: 2,
                  textAlign: 'center',
                  zIndex: 1,
                  backgroundColor: '#fff',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-redhat)',
                    fontWeight: 400,

                    fontSize: {
                      xs: '14px',
                      sm: '16px',
                      md: '18px',
                      lg: '19px',
                      xl: '20px',
                    },

                    lineHeight: {
                      xs: 1.4,
                      md: '21.76px',
                    },

                    color: '#444444',

                    mb: { xs: 1, md: 1.5 },

                    textAlign: 'center',
                  }}
                >
                  Available on
                </Typography>

                <Stack
                  direction="row"
                  spacing={1.5}
                  justifyContent="center"
                  mb={0.5}
                >
                  <img src="/rss.svg" width={28} alt="RSS" />
                  <img src="/spotify.svg" width={28} alt="Spotify" />
                  <img src="/podcast.svg" width={28} alt="Podcast" />
                  <img src="/listen.svg" width={28} alt="Listen" />
                </Stack>

                <Typography
                  sx={{
                    fontFamily: 'var(--font-redhat)',
                    fontWeight: 400,

                    fontSize: {
                      xs: '14px',
                      sm: '16px',
                      md: '18px',
                    },

                    lineHeight: {
                      xs: 1.4,
                      md: '21.76px',
                    },

                    color: '#444444',

                    mb: { xs: 1, md: 1.5 },

                    textAlign: 'center',
                  }}
                >
                  and @authenticrelating.com
                </Typography>
              </Card>
            </Box>
          </motion.div>
        </Stack>
      </SiteContainer>
    </Section>
  );
}