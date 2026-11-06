'use client';

import { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { motion, useScroll, useTransform } from 'framer-motion';

import SiteContainer from '../../_components/common/SiteContainer';
import spacing from '../../../theme/spacing';

const S = spacing.weTalkAbout;

const topics = [
  {
    text: 'Relational intelligence & emotional honesty',
    color: '#FF7A65',
    icon: '/svg/podcast/relational.svg',
  },
  {
    text: 'Courageous conversations & conflict repair',
    color: '#40C4D8',
    icon: '/svg/podcast/courageous.svg',
  },
  {
    text: 'Belonging, identity, and cultural humility',
    color: '#2F80ED',
    icon: '/svg/podcast/belonging.svg',
  },
  {
    text: 'Leadership, intimacy, and the nervous system',
    color: '#FF7A65',
    icon: '/svg/podcast/leadership.svg',
  },
  {
    text: 'And the raw, messy, beautiful truth of being yourself',
    color: '#40C4D8',
    icon: '/svg/podcast/truth.svg',
  },
];

export default function WeTalkAbout() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const scales = topics.map((_, i) => {
    const start = i / topics.length;
    const end = Math.min((i + 0.6) / topics.length, 1);
    return useTransform(scrollYProgress, [start, end], [0.95, 1]);
  });

  const opacities = topics.map((_, i) => {
    const start = i / topics.length;
    const end = Math.min((i + 0.6) / topics.length, 1);
    return useTransform(scrollYProgress, [start, end], [0.7, 1]);
  });

  const yOffsets = topics.map((_, i) => {
    const start = i / topics.length;
    const end = Math.min((i + 0.6) / topics.length, 1);
    return useTransform(scrollYProgress, [start, end], [30, 0]);
  });

  return (
    <SiteContainer
      sx={{
        pt: S.sectionPt,
        pb: S.sectionPb,
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: '1fr 1.4fr',
          },
          gap: S.gridGap,
          alignItems: 'start',
          width: '100%',
        }}
      >
        {/* LEFT CONTENT - Sticky */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          sx={{
            position: { xs: 'static', md: 'sticky' },
            top: { md: S.stickyTopDesktop },
            alignSelf: 'start',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'var(--font-redhat)',
              fontWeight: 700,
              fontSize: {
                xs: '22px',
                sm: '28px',
                md: '34px',
                lg: '40px',
                xl: '44px',
              },
              lineHeight: {
                xs: 1.3,
                sm: 1.25,
                md: '120%',
              },
              letterSpacing: '0%',
              color: '#1a1a2e',
              mb: S.headingMb,
            }}
          >
            We talk about:
          </Typography>

          <Typography
            sx={{
              fontFamily: 'var(--font-redhat)',
              fontWeight: 400,
              fontSize: {
                xs: '14px',
                sm: '15px',
                md: '16px',
                lg: '18px',
              },
              lineHeight: {
                xs: 1.6,
                sm: 1.5,
                md: '140%',
              },
              letterSpacing: '0%',
              color: '#666',
              maxWidth: S.descriptionMaxWidth,
            }}
          >
            Lorem ipsum is a dummy or placeholder text commonly used in
            graphic design, publishing, and web development.
          </Typography>
        </Box>

        {/* RIGHT LIST - Sticky stack animation */}
        <Box
          ref={containerRef}
          sx={{
            position: 'relative',
            height: `${topics.length * S.containerHeightPerItemVh}vh`,
          }}
        >
          {topics.map((item, i) => {
            const zIndex = i;
            const isLast = i === topics.length - 1;

            return (
              <Box
                key={i}
                sx={{
                  position: 'sticky',
                  top: S.stickyTop,
                  display: 'flex',
                  justifyContent: 'center',
                  zIndex: zIndex,
                  width: '100%',
                }}
              >
                <motion.div
                  style={{
                    scale: scales[i],
                    opacity: 1,
                    y: yOffsets[i],
                    width: '100%',
                    maxWidth: `${S.cardMaxWidth}px`,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: S.cardInnerGap,
                      p: S.cardPadding,
                      borderRadius: S.cardRadius,
                      bgcolor: '#FFFFFF',
                      border: '1px solid rgba(0,0,0,0.05)',
                      transition: 'all 0.3s ease',
                      height: `${S.cardHeight}px`,
                      minHeight: `${S.cardHeight}px`,

                      // no bottom margin on the last card
                      mb: isLast ? 0 : S.cardGap,

                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 24px 48px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    {/* ICON */}
                    <Box
                      sx={{
                        width: S.iconSize,
                        height: S.iconSize,
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <img
                        src={item.icon}
                        alt="icon"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </Box>

                    {/* TEXT */}
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-redhat)',
                        fontWeight: 600,
                        fontSize: {
                          xs: '16px',
                          sm: '18px',
                          md: '20px',
                        },
                        lineHeight: {
                          xs: 1.5,
                          sm: 1.45,
                          md: '140%',
                        },
                        letterSpacing: '0px',
                        color: '#1e1e2f',
                        wordBreak: 'break-word',
                        flex: 1,
                      }}
                    >
                      {item.text}
                    </Typography>

                    {/* HEART */}
                    <FavoriteBorderIcon
                      sx={{
                        flexShrink: 0,
                        fontSize: S.heartSize,
                        color: item.color,
                      }}
                    />
                  </Box>
                </motion.div>
              </Box>
            );
          })}
        </Box>
      </Box>
    </SiteContainer>
  );
}