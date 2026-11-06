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
  /* =========================================================
     RESPONSIVE BREAKPOINTS
  ========================================================= */

  const isXs = useMediaQuery(
    '(max-width:599px)',
    { noSsr: true }
  );

  const isSm = useMediaQuery(
    '(min-width:600px) and (max-width:899px)',
    { noSsr: true }
  );

  const isMd = useMediaQuery(
    '(min-width:900px) and (max-width:1199px)',
    { noSsr: true }
  );

  const isLg = useMediaQuery(
    '(min-width:1200px) and (max-width:1535px)',
    { noSsr: true }
  );

  const isXl = useMediaQuery(
    '(min-width:1536px) and (max-width:1919px)',
    { noSsr: true }
  );

  const isXxl = useMediaQuery(
    '(min-width:1920px)',
    { noSsr: true }
  );

  /* =========================================================
     FLOWER SIZE
  ========================================================= */

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

  /* =========================================================
     PETAL SIZE
     
     INCREASED WIDTH + HEIGHT
  ========================================================= */

  const getPetalSize = () => {
    if (isXs) {
      return {
        width: 28,
        height: 90,
      };
    }

    if (isSm) {
      return {
        width: 34,
        height: 125,
      };
    }

    if (isMd) {
      return {
        width: 42,
        height: 150,
      };
    }

    if (isLg) {
      return {
        width: 50,
        height: 175,
      };
    }

    if (isXl) {
      return {
        width: 60,
        height: 210,
      };
    }

    if (isXxl) {
      return {
        width: 70,
        height: 235,
      };
    }

    return {
      width: 50,
      height: 175,
    };
  };

  /* =========================================================
     PETAL GAP
  ========================================================= */

  const getPetalGap = () => {
    if (isXs) return 2;
    if (isSm) return 3;
    if (isMd) return 4;
    if (isLg) return 5;
    if (isXl) return 7;
    if (isXxl) return 9;

    return 5;
  };

  /* =========================================================
     LABEL FONT
  ========================================================= */

  const getFontSize = () => {
    if (isXs) return 9;
    if (isSm) return 10;
    if (isMd) return 11;
    if (isLg) return 12;
    if (isXl) return 13;
    if (isXxl) return 14;

    return 12;
  };

  /* =========================================================
     CENTER FONT
  ========================================================= */

  const getCenterFontSize = () => {
    if (isXs) return 10;
    if (isSm) return 11;
    if (isMd) return 12;
    if (isLg) return 13;
    if (isXl) return 14;
    if (isXxl) return 15;

    return 13;
  };

  /* =========================================================
     LABEL POSITIONS
  ========================================================= */

  const getLabelPositions = () => {
    if (isXxl) {
      return {
        1: {
          top: '16%',
          right: '-2%',
        },

        3: {
          bottom: '14%',
          right: '-2%',
        },

        5: {
          bottom: '14%',
          left: '-2%',
        },

        7: {
          top: '16%',
          left: '-2%',
        },
      };
    }

    if (isXl) {
      return {
        1: {
          top: '18%',
          right: '2%',
        },

        3: {
          bottom: '17%',
          right: '2%',
        },

        5: {
          bottom: '17%',
          left: '2%',
        },

        7: {
          top: '18%',
          left: '2%',
        },
      };
    }

    return {
      1: {
        top: '19%',
        right: '12%',
      },

      3: {
        bottom: '18%',
        right: '12%',
      },

      5: {
        bottom: '18%',
        left: '12%',
      },

      7: {
        top: '19%',
        left: '12%',
      },
    };
  };

  const flowerSize = getFlowerSize();
  const petalSize = getPetalSize();
  const petalGap = getPetalGap();
  const fontSize = getFontSize();
  const centerFontSize = getCenterFontSize();
  const labelPositions = getLabelPositions();

  /* =========================================================
     PETAL ANGLES
  ========================================================= */

  const petalAngles = [
    0,
    45,
    90,
    135,
    180,
    225,
    270,
    315,
  ];

  /* =========================================================
     CENTER TEXT
  ========================================================= */

  const renderCenterText = () => {
    return (
      <Box
        sx={{
          position: 'absolute',

          top: '50%',
          left: '50%',

          transform:
            'translate(-50%, -50%)',

          textAlign: 'center',

          width: isXs
            ? '52%'
            : '48%',

          zIndex: 10,

          pointerEvents: 'none',
        }}
      >
        <Typography
          sx={{
            fontSize: centerFontSize,

            fontWeight: 700,

            color: '#1d1d1d',

            lineHeight: 1.25,

            wordBreak: 'normal',
          }}
        >
          {centerText ||
            'How do you feel hearing that?'}
        </Typography>
      </Box>
    );
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.85,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      animate={{
        y: [-5, 5, -5],
      }}
      transition={{
        duration: 0.7,

        ease: 'easeOut',

        y: {
          duration: 6,

          repeat: Infinity,

          ease: 'easeInOut',

          delay: floatDelay,
        },
      }}
      style={{
        position: 'relative',

        width: `${flowerSize}px`,

        height: `${flowerSize}px`,

        flexShrink: 0,
      }}
    >
      {/* =====================================================
          TILT WRAPPER
      ===================================================== */}

      <motion.div
        animate={{
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 6,

          repeat: Infinity,

          ease: 'easeInOut',

          delay: floatDelay,
        }}
        style={{
          position: 'absolute',

          inset: 0,

          transformOrigin: '50% 50%',
        }}
      >
        {/* ===================================================
            PETALS
        =================================================== */}

        {petalAngles.map((angle) => {
          const isMainPetal = [
            0,
            90,
            180,
            270,
          ].includes(angle);

          const isSubPetal = [
            45,
            135,
            225,
            315,
          ].includes(angle);

          return (
            <Box
              key={angle}
              sx={{
                position: 'absolute',

                top: '50%',

                left: '50%',

                /* =========================================
                   INCREASED PETAL WIDTH + HEIGHT
                ========================================= */

                width: `${petalSize.width}px`,

                height: `${petalSize.height}px`,

                transformOrigin:
                  '50% 100%',

                transform: `
                  translate(-50%, -100%)
                  rotate(${angle}deg)
                  translateY(-${petalGap}px)
                `,

                zIndex:
                  isMainPetal ? 2 : 1,

                overflow: 'visible',

                boxSizing: 'border-box',

                opacity:
                  isSubPetal && isXxl
                    ? 0.72
                    : 1,
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

        {/* ===================================================
            LABELS
        =================================================== */}

        {[1, 3, 5, 7].map((i) => {
          const label =
            petalLabels?.[i]?.text;

          if (!label) return null;

          return (
            <Typography
              key={i}
              sx={{
                position: 'absolute',

                fontSize: fontSize,

                fontStyle: 'italic',

                fontWeight: 600,

                color: '#222',

                textAlign: 'center',

                lineHeight: 1.2,

                zIndex: 8,

                whiteSpace: 'nowrap',

                ...labelPositions[i],

                px: 0,

                py: 0,

                background:
                  'transparent',

                border: 'none',

                borderRadius: 0,

                boxShadow: 'none',
              }}
            >
              {label}
            </Typography>
          );
        })}
      </motion.div>

      {/* =====================================================
          CENTER TEXT
      ===================================================== */}

      {renderCenterText()}
    </motion.div>
  );
};

/* =========================================================
   RESPONSIVE FLOWER LAYOUTS
========================================================= */

const FLOWER_LAYOUTS = {
  xs: [
    {
      top: '5%',
      left: '2%',
      sizeFactor: 0.75,
    },

    {
      top: '5%',
      left: '38%',
      sizeFactor: 0.82,
    },

    {
      top: '35%',
      left: '22%',
      sizeFactor: 0.70,
    },

    {
      top: '24%',
      left: '63%',
      sizeFactor: 0.80,
    },
  ],

  sm: [
    {
      top: '9%',
      left: '2%',
      sizeFactor: 0.80,
    },

    {
      top: '5%',
      left: '43%',
      sizeFactor: 0.90,
    },

    {
      top: '35%',
      left: '21%',
      sizeFactor: 0.75,
    },

    {
      top: '22%',
      left: '68%',
      sizeFactor: 0.90,
    },
  ],

  md: [
    {
      top: '22%',
      left: '4%',
      sizeFactor: 0.82,
    },

    {
      top: '15%',
      left: '45%',
      sizeFactor: 0.95,
    },

    {
      top: '50%',
      left: '25%',
      sizeFactor: 0.76,
    },

    {
      top: '33%',
      left: '68%',
      sizeFactor: 0.95,
    },
  ],

  lg: [
    {
      top: '15%',
      left: '9%',
      sizeFactor: 0.85,
    },

    {
      top: '10%',
      left: '45%',
      sizeFactor: 1,
    },

    {
      top: '47%',
      left: '28%',
      sizeFactor: 0.78,
    },

    {
      top: '30%',
      left: '69%',
      sizeFactor: 1,
    },
  ],

  xl: [
    {
      top: '8%',
      left: '3%',
      sizeFactor: 0.88,
    },

    {
      top: '2%',
      left: '46%',
      sizeFactor: 1,
    },

    {
      top: '45%',
      left: '25%',
      sizeFactor: 0.80,
    },

    {
      top: '20%',
      left: '72%',
      sizeFactor: 1,
    },
  ],

  xxl: [
    {
      top: '15%',
      left: '3%',
      sizeFactor: 0.82,
    },

    {
      top: '13%',
      left: '50%',
      sizeFactor: 0.82,
    },

    {
      top: '50%',
      left: '25%',
      sizeFactor: 0.82,
    },

    {
      top: '45%',
      left: '72%',
      sizeFactor: 0.82,
    },
  ],
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export const Language = () => {
  /* =========================================================
     BREAKPOINTS
  ========================================================= */

  const isXs = useMediaQuery(
    '(max-width:599px)',
    { noSsr: true }
  );

  const isSm = useMediaQuery(
    '(min-width:600px) and (max-width:899px)',
    { noSsr: true }
  );

  const isMd = useMediaQuery(
    '(min-width:900px) and (max-width:1199px)',
    { noSsr: true }
  );

  const isLg = useMediaQuery(
    '(min-width:1200px) and (max-width:1535px)',
    { noSsr: true }
  );

  const isXl = useMediaQuery(
    '(min-width:1536px) and (max-width:1919px)',
    { noSsr: true }
  );

  const isXxl = useMediaQuery(
    '(min-width:1920px)',
    { noSsr: true }
  );

  /* =========================================================
     COLORS
  ========================================================= */

  const flowerColors = [
    '#FE826D40',
    '#FFC06140',
    '#15AFA233',
    '#FE826D40',
  ];

  /* =========================================================
     STATE
  ========================================================= */

  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);

  /* =========================================================
     API
  ========================================================= */

  useEffect(() => {
    const fetchLanguage = async () => {
      try {
        const res =
          await axiosInstance.get(
            '/frontendApis/getAllConnectionSets'
          );

        const sets =
          res?.data?.sets || [];

        const activeSet =
          sets.find(
            (s) => s.isPublished
          ) || sets[0];

        const mapped =
          (activeSet?.questions || [])
            .map((q, i) => ({
              color:
                flowerColors[
                  i %
                  flowerColors.length
                ],

              centerText:
                q.question,

              petalLabels: [
                { text: null },

                {
                  text:
                    q.fields?.[0] ||
                    null,
                },

                { text: null },

                {
                  text:
                    q.fields?.[1] ||
                    null,
                },

                { text: null },

                {
                  text:
                    q.fields?.[2] ||
                    null,
                },

                { text: null },

                {
                  text:
                    q.fields?.[3] ||
                    null,
                },
              ],
            }));

        setFlowers(mapped);
      } catch (err) {
        console.error(
          'Language API error:',
          err
        );
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

  const baseFlowerSize =
    getBaseFlowerSize();

  /* =========================================================
     FLOWER LAYOUT
  ========================================================= */

  const getFlowerLayouts = () => {
    if (isXs)
      return FLOWER_LAYOUTS.xs;

    if (isSm)
      return FLOWER_LAYOUTS.sm;

    if (isMd)
      return FLOWER_LAYOUTS.md;

    if (isLg)
      return FLOWER_LAYOUTS.lg;

    if (isXl)
      return FLOWER_LAYOUTS.xl;

    if (isXxl)
      return FLOWER_LAYOUTS.xxl;

    return FLOWER_LAYOUTS.lg;
  };

  const flowerLayouts =
    getFlowerLayouts();

  /* =========================================================
     FIELD HEIGHT
  ========================================================= */

  const getFieldHeight = () => {
    if (isXs) return 430;

    if (isSm) return 560;

    if (isMd) return 600;

    if (isLg) return 650;

    if (isXl) return 700;

    if (isXxl) return 760;

    return 650;
  };

  const fieldHeight =
    getFieldHeight();

  /* =========================================================
     SECTION PADDING
  ========================================================= */

  const getSectionPadding = () => {
    if (isXs) {
      return {
        pt: 2,
        pb: 2,
      };
    }

    if (isSm) {
      return {
        pt: 4,
        pb: 3,
      };
    }

    if (isMd) {
      return {
        pt: 5,
        pb: 4,
      };
    }

    if (isLg) {
      return {
        pt: 6,
        pb: 4,
      };
    }

    if (isXl) {
      return {
        pt: 7,
        pb: 5,
      };
    }

    if (isXxl) {
      return {
        pt: 6,
        pb: 5,
      };
    }

    return {
      pt: 5,
      pb: 4,
    };
  };

  const sectionPadding =
    getSectionPadding();

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

  const headerMargin =
    getHeaderMargin();

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
        {/* =================================================
            SECTION HEADER
        ================================================= */}

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

        {/* =================================================
            TITLE
        ================================================= */}

                {/* =================================================
            TITLE
        ================================================= */}

        <Typography
          variant="h4"
          sx={{
            width: '100%',
            maxWidth: '927px', // From your spec width: 927
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
            lineHeight: 1, // line-height: 100%
            letterSpacing: 0, // letter-spacing: 0%
            color: '#000', // Assuming black text based on context
            textShadow: '0px 1px 2px rgba(0,0,0,0.1)',
            px: 1,
            mx: 'auto',
          }}
        >
          <Box
            component="span"
            sx={{
              fontWeight: 700, // Bold
              fontSize: {
                xs: '32px',
                sm: '40px',
                md: '50px', // Exact size from your spec
              },
              color: '#00B9C7',
            }}
          >
            The Language of
          </Box>{' '}
          
          <Box
            component="span"
            sx={{
              fontWeight: 400, // Regular
              fontSize: {
                xs: '28px',
                sm: '36px',
                md: '46.7px', // Exact size from your spec
              },
              color: '#00B9C7',
            }}
          >
            Connection
          </Box>
        </Typography>

        {/* =================================================
            FLOWER FIELD
        ================================================= */}

        {!loading &&
          flowers.length > 0 && (
            <Box
              sx={{
                position: 'relative',

                width: '100%',

                height: fieldHeight,

                maxWidth: {
                  xs: '100%',
                  sm: '700px',
                  md: '850px',
                  lg: '1050px',
                  xl: '1200px',
                  xxl: '1350px',
                },

                mx: 'auto',

                overflow: 'visible',

                boxSizing: 'border-box',
              }}
            >
              {flowers
                .slice(0, 4)
                .map((flower, index) => {
                  const layout =
                    flowerLayouts[
                      index %
                        flowerLayouts.length
                    ];

                  return (
                    <Box
                      key={index}
                      sx={{
                        position: 'absolute',

                        top: layout.top,

                        left: layout.left,

                        width: 'auto',

                        height: 'auto',

                        transition:
                          'top 0.3s ease, left 0.3s ease',

                        transform:
                          'translate3d(0,0,0)',

                        zIndex:
                          index + 1,
                      }}
                    >
                      <motion.div
                        initial={{
                          opacity: 0,

                          y: 30,

                          scale: 0.9,
                        }}
                        whileInView={{
                          opacity: 1,

                          y: 0,

                          scale: 1,
                        }}
                        viewport={{
                          once: true,

                          amount: 0.15,
                        }}
                        transition={{
                          duration: 0.7,

                          delay:
                            index * 0.25,

                          ease: 'easeOut',
                        }}
                      >
                        <FlowerDiagram
                          bg={flower.color}
                          petalLabels={
                            flower.petalLabels
                          }
                          centerText={
                            flower.centerText
                          }
                          size={Math.round(
                            baseFlowerSize *
                              layout.sizeFactor
                          )}
                          floatDelay={
                            index * 0.4
                          }
                        />
                      </motion.div>
                    </Box>
                  );
                })}
            </Box>
          )}
      </SiteContainer>
    </Section>
  );
};

export default Language;