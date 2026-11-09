
'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import axiosInstance from '@/lib/axios';

import SiteContainer from '../common/SiteContainer';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';

/* =========================================================
   SINGLE FLOWER DIAGRAM
========================================================= */

const FlowerDiagram = ({
  bg,
  petalLabels,
  centerText,
  size,
  floatDelay = 0,
}) => {
  const isXs = useMediaQuery('(max-width:599px)', { noSsr: true });
  const isSm = useMediaQuery('(min-width:600px) and (max-width:899px)', { noSsr: true });
  const isMd = useMediaQuery('(min-width:900px) and (max-width:1199px)', { noSsr: true });
  const isLg = useMediaQuery('(min-width:1200px) and (max-width:1535px)', { noSsr: true });
  const isXl = useMediaQuery('(min-width:1536px) and (max-width:1919px)', { noSsr: true });
  const isXxl = useMediaQuery('(min-width:1920px)', { noSsr: true });

  const getFlowerSize = () => {
    if (size) return size;
    if (isXs) return 170;
    if (isSm) return 220;
    if (isMd) return 250;
    if (isLg) return 280;
    if (isXl) return 310;
    if (isXxl) return 340;
    return 280;
  };

  const getPetalSize = () => {
    if (isXs) return { width: 28, height: 90 };
    if (isSm) return { width: 34, height: 125 };
    if (isMd) return { width: 42, height: 150 };
    if (isLg) return { width: 50, height: 175 };
    if (isXl) return { width: 60, height: 210 };
    if (isXxl) return { width: 70, height: 235 };
    return { width: 50, height: 175 };
  };

  const getPetalGap = () => {
    if (isXs) return 2;
    if (isSm) return 3;
    if (isMd) return 4;
    if (isLg) return 5;
    if (isXl) return 7;
    if (isXxl) return 9;
    return 5;
  };

  const getFontSize = () => {
    if (isXs) return 9;
    if (isSm) return 10;
    if (isMd) return 11;
    if (isLg) return 12;
    if (isXl) return 13;
    if (isXxl) return 14;
    return 12;
  };

  const getCenterFontSize = () => {
    if (isXs) return 8;
    if (isSm) return 11;
    if (isMd) return 12;
    if (isLg) return 13;
    if (isXl) return 14;
    if (isXxl) return 15;
    return 13;
  };

  const getLabelPositions = () => {
    if (isXxl) {
      return {
        1: { top: '16%', right: '-2%' },
        3: { bottom: '14%', right: '-2%' },
        5: { bottom: '14%', left: '-2%' },
        7: { top: '16%', left: '-2%' },
      };
    }

    if (isXl) {
      return {
        1: { top: '18%', right: '2%' },
        3: { bottom: '17%', right: '2%' },
        5: { bottom: '17%', left: '2%' },
        7: { top: '18%', left: '2%' },
      };
    }

    return {
      1: { top: '1%', right: '1%' },
      3: { bottom: '1%', right: '1%' },
      5: { bottom: '1%', left: '1%' },
      7: { top: '1%', left: '1%' },
    };
  };

  const flowerSize = getFlowerSize();
  const petalSize = getPetalSize();
  const petalGap = getPetalGap();
  const fontSize = getFontSize();
  const centerFontSize = getCenterFontSize();
  const labelPositions = getLabelPositions();

  const petalAngles = [0, 45, 90, 135, 180, 225, 270, 315];

  const renderCenterText = () => {
    let textWidth = '100%';

    if (isXs) textWidth = '120%';
    else if (isSm) textWidth = '110%';
    else if (isMd) textWidth = '105%';
    else textWidth = '80%';

    return (
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          width: textWidth,
          zIndex: 10,
          pointerEvents: 'none',
          padding: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: centerFontSize,
            fontWeight: 800,
            color: '#000000',
            lineHeight: 1.3,
            wordBreak: 'normal',
          }}
        >
          {centerText || 'How do you feel hearing that?'}
        </Typography>
      </Box>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: 'easeOut',
      }}
      style={{
        position: 'relative',
        width: `${flowerSize}px`,
        height: `${flowerSize}px`,
        flexShrink: 0,
      }}
    >
      {/* FLOATING FLOWER */}
      <motion.div
        animate={{ y: [0, -8, 0, 8, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: floatDelay,
        }}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
        }}
      >
        {/* ROTATING PETALS */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            inset: 0,
            transformOrigin: '50% 50%',
          }}
        >
          {petalAngles.map((angle) => {
            const isMainPetal = [0, 90, 180, 270].includes(angle);
            const isSubPetal = [45, 135, 225, 315].includes(angle);

            return (
              <Box
                key={angle}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: `${petalSize.width}px`,
                  height: `${petalSize.height}px`,
                  transformOrigin: '50% 100%',
                  transform: `
                    translate(-50%, -100%)
                    rotate(${angle}deg)
                    translateY(-${petalGap}px)
                  `,
                  zIndex: isMainPetal ? 2 : 1,
                  overflow: 'visible',
                  boxSizing: 'border-box',
                  opacity: isSubPetal && isXxl ? 0.72 : 1,
                }}
              >
                <svg
                  viewBox="0 0 100 220"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                  style={{
                    display: 'block',
                    overflow: 'visible',
                  }}
                >
                  <path
                    d="
                      M 50 220
                      C 43 217, 28 203, 15 181
                      C 5 163, 0 140, 1 112
                      C 2 76, 10 39, 29 14
                      C 35 6, 42 1, 50 0
                      C 58 1, 65 6, 71 14
                      C 90 39, 98 76, 99 112
                      C 100 140, 95 163, 85 181
                      C 72 203, 57 217, 50 220
                      Z
                    "
                    fill={bg}
                    stroke="#ffffff"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
              </Box>
            );
          })}

          {/* PETAL LABELS STAY UPRIGHT */}
          {[1, 3, 5, 7].map((i) => {
            const label = petalLabels?.[i]?.text;

            if (!label) return null;

            return (
              <motion.div
                key={i}
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  transformOrigin: '50% 50%',
                  pointerEvents: 'none',
                  zIndex: 8,
                }}
              >
                <Typography
                  sx={{
                    position: 'absolute',
                    fontSize,
                    fontStyle: 'italic',
                    fontWeight: 800,
                    color: '#1d1d1d',
                    textAlign: 'center',
                    lineHeight: 1.2,
                    whiteSpace: 'nowrap',
                    ...labelPositions[i],
                  }}
                >
                  {label}
                </Typography>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CENTER TEXT DOES NOT ROTATE */}
        {renderCenterText()}
      </motion.div>
    </motion.div>
  );
};

/* =========================================================
   RESPONSIVE FLOWER LAYOUTS
========================================================= */

const FLOWER_LAYOUTS = {
  xs: Array.from({ length: 4 }, () => ({ sizeFactor: 0.48 })),
  sm: Array.from({ length: 4 }, () => ({ sizeFactor: 0.58 })),
  md: Array.from({ length: 4 }, () => ({ sizeFactor: 0.68 })),
  lg: Array.from({ length: 4 }, () => ({ sizeFactor: 0.72 })),
  xl: Array.from({ length: 4 }, () => ({ sizeFactor: 0.74 })),
  xxl: Array.from({ length: 4 }, () => ({ sizeFactor: 0.72 })),
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export const Language = () => {
  const isXs = useMediaQuery('(max-width:599px)', { noSsr: true });
  const isSm = useMediaQuery('(min-width:600px) and (max-width:899px)', { noSsr: true });
  const isMd = useMediaQuery('(min-width:900px) and (max-width:1199px)', { noSsr: true });
  const isLg = useMediaQuery('(min-width:1200px) and (max-width:1535px)', { noSsr: true });
  const isXl = useMediaQuery('(min-width:1536px) and (max-width:1919px)', { noSsr: true });
  const isXxl = useMediaQuery('(min-width:1920px)', { noSsr: true });

  const flowerColors = [
    '#FE826D40',
    '#FFC06140',
    '#15AFA233',
    '#FE826D40',
  ];

  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);

  /* =========================================================
     API
  ========================================================= */

  useEffect(() => {
    const fetchLanguage = async () => {
      try {
        const res = await axiosInstance.get(
          '/frontendApis/getAllConnectionSets'
        );

        const sets = res?.data?.sets || [];
        const activeSet = sets.find((s) => s.isPublished) || sets[0];

        const mapped = (activeSet?.questions || []).map((q, i) => ({
          color: flowerColors[i % flowerColors.length],
          centerText: q.question,
          petalLabels: [
            { text: null },
            { text: q.fields?.[0] || null },
            { text: null },
            { text: q.fields?.[1] || null },
            { text: null },
            { text: q.fields?.[2] || null },
            { text: null },
            { text: q.fields?.[3] || null },
          ],
        }));

        setFlowers(mapped);
      } catch (err) {
        console.error('Language API error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLanguage();
  }, []);

  /* =========================================================
     BASE FLOWER SIZE
  ========================================================= */

  const getBaseFlowerSize = () => {
    if (isXs) return 170;
    if (isSm) return 220;
    if (isMd) return 250;
    if (isLg) return 280;
    if (isXl) return 310;
    if (isXxl) return 340;
    return 280;
  };

  const baseFlowerSize = getBaseFlowerSize();

  /* =========================================================
     FLOWER LAYOUT
  ========================================================= */

  const getFlowerLayouts = () => {
    if (isXs) return FLOWER_LAYOUTS.xs;
    if (isSm) return FLOWER_LAYOUTS.sm;
    if (isMd) return FLOWER_LAYOUTS.md;
    if (isLg) return FLOWER_LAYOUTS.lg;
    if (isXl) return FLOWER_LAYOUTS.xl;
    if (isXxl) return FLOWER_LAYOUTS.xxl;
    return FLOWER_LAYOUTS.lg;
  };

  const flowerLayouts = getFlowerLayouts();

  /* =========================================================
     FIELD HEIGHT
  ========================================================= */

  const getFieldHeight = () => {
    if (isXs) return 280;
    if (isSm) return 340;
    if (isMd) return 400;
    if (isLg) return 450;
    if (isXl) return 500;
    if (isXxl) return 550;
    return 450;
  };

  const fieldHeight = getFieldHeight();

  /* =========================================================
     WAVE AMPLITUDE
  ========================================================= */

  const getWaveAmplitude = () => {
    if (isXs) return 15;
    if (isSm) return 20;
    if (isMd) return 25;
    if (isLg) return 30;
    if (isXl) return 35;
    if (isXxl) return 40;
    return 30;
  };

  const waveAmplitude = getWaveAmplitude();

  /* =========================================================
     HORIZONTAL GAP BETWEEN FLOWERS
  ========================================================= */

  const getFlowerGap = () => {
    if (isXs) return 8;
    if (isSm) return 12;
    if (isMd) return 15;
    if (isLg) return 18;
    if (isXl) return 20;
    if (isXxl) return 22;
    return 18;
  };

  const flowerGap = getFlowerGap();

  /* =========================================================
     SECTION PADDING
  ========================================================= */

  const getSectionPadding = () => {
    if (isXs) return { pt: 2, pb: 0 };
    if (isSm) return { pt: 4, pb: 0 };
    if (isMd) return { pt: 5, pb: 0 };
    if (isLg) return { pt: 6, pb: 0 };
    if (isXl) return { pt: 7, pb: 0 };
    if (isXxl) return { pt: 6, pb: 0 };
    return { pt: 5, pb: 0 };
  };

  const sectionPadding = getSectionPadding();

  /* =========================================================
     HEADER MARGIN
  ========================================================= */

  const getHeaderMargin = () => {
    if (isXs) return 2;
    if (isSm) return 3;
    if (isMd) return 4;
    if (isLg) return 5;
    if (isXl) return 6;
    if (isXxl) return 6;
    return 4;
  };

  const headerMargin = getHeaderMargin();

  /* =========================================================
     TITLE FONT SIZE
  ========================================================= */

  const getTitleSize = () => {
    if (isXs) return '1.2rem';
    if (isSm) return '1.4rem';
    if (isMd) return '1.65rem';
    if (isLg) return '1.9rem';
    if (isXl) return '2.1rem';
    if (isXxl) return '2.35rem';
    return '1.9rem';
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <Section
      sx={{
        ...sectionPadding,
        width: '100%',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* HEADER + TITLE INSIDE CONTAINER */}
      <SiteContainer
        sx={{
          width: '100%',
          maxWidth: '1600px',
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box',
          px: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 5,
            xxl: 6,
          },
        }}
      >
        {/* SECTION HEADER */}
        <SectionHeader
          sx={{
            mb: headerMargin,
            '& .section-title': {
              fontSize: getTitleSize(),
              fontWeight: 700,
              color: '#000',
            },
          }}
        />

        {/* TITLE */}
        <Typography
          variant="h4"
          sx={{
            width: '100%',
            maxWidth: '927px',
            textAlign: 'center',
            mb: {
              xs: 2,
              sm: 3,
              md: 4,
              lg: 5,
              xl: 5,
              xxl: 5,
            },
            fontFamily: '"Red Hat Display", sans-serif',
            lineHeight: 1,
            letterSpacing: 0,
            color: '#000',
            textShadow: '0px 1px 2px rgba(0,0,0,0.1)',
            px: 1,
            mx: 'auto',
          }}
        >
          <Box
            component="span"
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: '32px',
                sm: '40px',
                md: '50px',
              },
              color: '#00B9C7',
            }}
          >
            The Language of
          </Box>{' '}
          <Box
            component="span"
            sx={{
              fontWeight: 400,
              fontSize: {
                xs: '28px',
                sm: '36px',
                md: '46.7px',
              },
              color: '#00B9C7',
            }}
          >
            Connection
          </Box>
        </Typography>
      </SiteContainer>

      {/* =================================================
          FULL-BLEED FLOWER TRACK — WAVE PATTERN
      ================================================= */}


      {/* =================================================
          FULL-BLEED FLOWER TRACK — CONTINUOUS MOVEMENT
      ================================================= */}

      {!loading && flowers.length > 0 && (
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: fieldHeight,
            overflow: 'hidden',
            boxSizing: 'border-box',
            pointerEvents: 'none',
          }}
        >
          {flowers.slice(0, 4).map((flower, index) => {
            const layout = flowerLayouts[index % flowerLayouts.length];

            const flowerSize = Math.round(
              baseFlowerSize * layout.sizeFactor
            );

            const isUp = index % 2 === 0;

            // Start and exit completely outside the screen
            const startDistance = -flowerSize - flowerGap;

            // EXIT COMPLETELY OUTSIDE THE RIGHT
            const exitDistance =
              typeof window !== 'undefined'
                ? window.innerWidth + flowerSize + flowerGap
                : 1500;

            // Same travel duration for every flower
            const duration = 14;

            // Stagger each flower evenly
            const delay = index * (duration / 4);

            return (
              <Box
                key={index}
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  width: flowerSize,
                  height: flowerSize,
                  zIndex: index + 1,
                }}
              >
                <motion.div
                  initial={{
                    x: startDistance,
                    y: isUp ? -waveAmplitude : waveAmplitude,
                  }}
                  animate={{
                    x: [startDistance, exitDistance],

                    // KEEP EXISTING WAVE MOVEMENT
                    y: isUp
                      ? [
                        -waveAmplitude,
                        -waveAmplitude * 0.86,
                        -waveAmplitude * 0.5,
                        0,
                        waveAmplitude * 0.5,
                        waveAmplitude * 0.86,
                        waveAmplitude,
                        waveAmplitude * 0.86,
                        waveAmplitude * 0.5,
                        0,
                        -waveAmplitude * 0.5,
                        -waveAmplitude * 0.86,
                        -waveAmplitude,
                      ]
                      : [
                        waveAmplitude,
                        waveAmplitude * 0.86,
                        waveAmplitude * 0.5,
                        0,
                        -waveAmplitude * 0.5,
                        -waveAmplitude * 0.86,
                        -waveAmplitude,
                        -waveAmplitude * 0.86,
                        -waveAmplitude * 0.5,
                        0,
                        waveAmplitude * 0.5,
                        waveAmplitude * 0.86,
                        waveAmplitude,
                      ],
                  }}
                  transition={{
                    x: {
                      duration,
                      delay,
                      repeat: Infinity,
                      repeatType: 'loop',
                      ease: 'linear',
                    },
                    y: {
                      duration: 4,
                      delay: index * 0.5,
                      repeat: Infinity,
                      repeatType: 'loop',
                      ease: 'easeInOut',
                    },
                  }}
                  style={{
                    position: 'absolute',
                    top: '-50%',
                    left: 0,
                    willChange: 'transform',
                  }}
                >
                  <FlowerDiagram
                    bg={flower.color}
                    petalLabels={flower.petalLabels}
                    centerText={flower.centerText}
                    size={flowerSize}
                    floatDelay={index * 0.4}
                  />
                </motion.div>
              </Box>
            );
          })}
        </Box>
      )}

    </Section>
  );
};

export default Language;
