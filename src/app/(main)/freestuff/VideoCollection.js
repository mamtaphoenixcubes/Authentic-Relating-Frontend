'use client';

import {
  Box,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
  Container,
  IconButton,
  Chip,
  useTheme,
} from '@mui/material';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import axiosInstance from '@/lib/axios';

// Theme design system
import colors from '@/theme/colors';
import typography from '@/theme/typography';

export default function VideoCollection() {
  const theme = useTheme();

  /*
   * Shared theme sections
   * These come from theme.js
   */
  const gifts = theme.custom?.giftsSection || {};

  /*
   * Typography design tokens
   */
  const fontFamily = typography.fonts?.body || 'inherit';
  const headingFontFamily =
    typography.fonts?.heading || typography.fonts?.body || 'inherit';

  const weights = typography.weights || {};

  const regular = weights.regular || 400;
  const medium = weights.medium || 500;
  const semibold = weights.semibold || 600;
  const bold = weights.bold || 700;

  /*
   * Color design tokens
   */
  const gradient = 'linear-gradient(98.89deg, #FFC566 0%, #F9A629 100%)';

  const titleColor =
    colors.clientTestimonial?.title ||
    colors.textPrimary ||
    '#FF7A65';

  const textPrimary =
    colors.textPrimary ||
    '#222222';

  const textSecondary =
    colors.textSecondary ||
    '#666666';

  const textMuted =
    colors.textMuted ||
    '#777777';

  const textLight =
    colors.textLight ||
    '#FFFFFF';

  const background =
    colors.background ||
    '#FFFFFF';

  const backgroundSoft =
    colors.backgroundSoft ||
    '#F8F8F8';

  const border =
    colors.border ||
    '#E5E5E5';

  const cardBorder =
    colors.gifts?.cardBorder ||
    border;

  const cardShadow =
    colors.gifts?.cardShadow ||
    '0 8px 30px rgba(0,0,0,0.08)';

  const cardBackground =
    colors.gifts?.cardBackground ||
    background;

  const imageBackground =
    colors.gifts?.imageBackground ||
    colors.connection?.gridCard?.imagePlaceholder ||
    backgroundSoft;

  const buttonBorder =
    colors.gifts?.buttonBorder ||
    'linear-gradient(135deg, rgba(255,255,255,.5), rgba(255,255,255,.1))';

  const buttonHoverOpacity =
    colors.gifts?.buttonHoverOpacity ?? 0.9;

  const modalBackground =
    colors.gifts?.modalBackground ||
    '#111111';

  const closeBackground =
    colors.gifts?.closeBackground ||
    'rgba(255,255,255,0.12)';

  const closeHoverBackground =
    colors.gifts?.closeHoverBackground ||
    'rgba(255,255,255,0.2)';

  /*
   * Component state
   */
  const [visibleVideos, setVisibleVideos] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);

  const [collections, setCollections] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState('');

  const [videoUrl, setVideoUrl] = useState(null);

  /*
   * Filter collections by selected category
   */
  const filteredCollections = selectedCategory
    ? collections.filter(
      (item) => item.category_id?._id === selectedCategory
    )
    : collections;

  /*
   * Show more / show less
   */
  const toggleVideos = () => {
    if (isExpanded) {
      setVisibleVideos(6);
    } else {
      setVisibleVideos(filteredCollections.length);
    }

    setIsExpanded((prev) => !prev);
  };

  /*
   * Fetch collections
   */
  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const res = await axiosInstance.get(
          '/frontendApis/getFreeStuff',
          {
            params: {
              size: 100,
              page: 0,
              search: '',
            },
          }
        );

        const allData = res?.data?.data || [];

        /*
         * Only collection type
         */
        const collectionData = allData
          .filter((item) => item.type === 'collection')
          .sort(
            (a, b) =>
              (a.index_position || 0) -
              (b.index_position || 0)
          );

        /*
         * Unique categories
         */
        const uniqueCategories = [
          ...new Map(
            collectionData
              .filter((item) => item.category_id?._id)
              .map((item) => [
                item.category_id._id,
                item.category_id,
              ])
          ).values(),
        ];

        setCollections(collectionData);
        setCategories(uniqueCategories);

        if (uniqueCategories.length > 0) {
          setSelectedCategory(uniqueCategories[0]._id);
        }
      } catch (error) {
        console.error(
          'Failed to fetch video collections:',
          error
        );
      }
    };

    fetchCollections();
  }, []);

  /*
   * Reset visible cards when category changes
   */
  useEffect(() => {
    setVisibleVideos(6);
    setIsExpanded(false);
  }, [selectedCategory]);

  /*
   * Video URL helper
   */
  const getVideoUrl = (video) => {
    if (!video?.file_url) return null;

    return `${process.env.NEXT_PUBLIC_API_URL}/${video.file_url}`;
  };

  /*
   * Thumbnail URL helper
   */
  const getThumbnailUrl = (video) => {
    if (!video?.thumbnail) return null;

    return `${process.env.NEXT_PUBLIC_API_URL}/${encodeURI(
      video.thumbnail
    )}`;
  };

  /*
   * Open video
   */
  const openVideo = (video) => {
    const url = getVideoUrl(video);

    if (url) {
      setVideoUrl(url);
    }
  };

  /*
   * Close video
   */
  const closeVideo = () => {
    setVideoUrl(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          py: {
            xs: 0,
            sm: 0,
            md: 0,
          },
          pb: { xs: 4, sm: 5, md: 0 }, // Keeps bottom padding if you need it
        }}
      >
        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: -10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.4,
          }}
        >
          <Typography
            component="h2"
            textAlign="center"
            sx={{
              fontFamily: headingFontFamily,
              fontSize: {
                xs: 24,
                sm: 28,
                md: 30,
              },
              fontWeight: semibold,
              color: "#F0A634",
              lineHeight: 1.2,
              mb: 1,
            }}
          >
            My Video Collection
          </Typography>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.4,
            delay: 0.1,
          }}
        >
          <Typography
            textAlign="center"
            sx={{
              fontFamily,
              fontSize: {
                xs: 13,
                sm: 14,
              },
              fontWeight: regular,
              color: "#000000",
              lineHeight: 1.7,
              maxWidth: 720,
              mx: 'auto',
              mb: {
                xs: 4,
                md: 6,
              },
              px: {
                xs: 1,
                sm: 0,
              },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Aenean sed urna elit. Ut in tincidunt lacus, at
            convallis risus. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus.
          </Typography>
        </motion.div>

        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}

        <Box
          sx={{
            display: 'flex',
            gap: {
              sm: 2,
              md: 3,
            },
            alignItems: 'flex-start',
          }}
        >
          {/* =======================================================
              DESKTOP CATEGORY SIDEBAR
          ======================================================= */}

          <Stack
            spacing={1}
            sx={{
              display: {
                xs: 'none',
                sm: 'flex',
              },
              minWidth: {
                sm: 180,
                md: 225,
              },
              flexShrink: 0,
            }}
          >
            {categories.map((cat, index) => {
              const isActive = cat._id === selectedCategory;

              return (
                <motion.div
                  key={cat._id}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1 + index * 0.05,
                  }}
                >
                  <Button
                    onClick={() => setSelectedCategory(cat._id)}
                    fullWidth
                    variant="contained"
                    sx={{
                      minHeight: 46,
                      minWidth: { sm: 180, md: 225 },
                      px: 2,
                      borderRadius: '10px',
                      textTransform: 'none',
                      fontFamily,
                      fontSize: 13,
                      fontWeight: isActive ? bold : medium,
                      justifyContent: 'center',

                      // Active state uses gradient, inactive uses solid white
                      background: isActive ? gradient : '#FFFFFF',
                      color: isActive ? textLight : textPrimary,

                      // Border and effects
                      border: '2px solid #FFFFFF',
                      backdropFilter: 'blur(260px)',
                      WebkitBackdropFilter: 'blur(260px)', // Safari support
                      boxShadow: '0px 4px 7.3px 1px #0000001A',

                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.2s ease',

                      '&:hover': {
                        background: isActive ? gradient : '#FAFAFA',
                        boxShadow: '0px 4px 7.3px 1px #0000001A', // Keep shadow on hover
                      },
                      '&:active': {
                        boxShadow: '0px 4px 7.3px 1px #0000001A'
                      },
                    }}
                  >
                    {cat.title}
                  </Button>
                </motion.div>
              );
            })}
          </Stack>

          {/* =======================================================
              RIGHT CONTENT
          ======================================================= */}

          <Box
            sx={{
              flex: 1,
              minWidth: 0,
              position: 'relative',
            }}
          >
            {/* =====================================================
                MOBILE CATEGORIES
            ===================================================== */}

            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              sx={{
                display: {
                  xs: 'flex',
                  sm: 'none',
                },
                mb: 3,
                rowGap: 1,
              }}
            >
              {categories.map((cat, index) => {
                const isActive =
                  cat._id === selectedCategory;

                return (
                  <motion.div
                    key={cat._id}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 + index * 0.1,
                    }}
                  >
                    <Chip
                      label={cat.title}
                      onClick={() =>
                        setSelectedCategory(cat._id)
                      }
                      variant={
                        isActive
                          ? 'filled'
                          : 'outlined'
                      }
                      size="small"
                      sx={{
                        borderRadius: 4,
                        fontFamily,
                        fontSize: 13,
                        fontWeight: isActive ? bold : medium,

                        background: isActive
                          ? gradient
                          : '#FFFFFF',

                        color: isActive
                          ? textLight
                          : textPrimary,

                        border: isActive ? 'none' : `1px solid ${border}`,
                        boxShadow: isActive
                          ? '0px 4px 10px rgba(249, 166, 41, 0.3)'
                          : '0px 2px 8px rgba(0, 0, 0, 0.04)',

                        px: 1.5,
                        height: 32,
                        minWidth: 110,

                        '&:hover': {
                          background: isActive
                            ? gradient
                            : '#FAFAFA',
                        },

                        '& .MuiChip-label': {
                          px: 1,
                        },
                      }}
                    />
                  </motion.div>
                );
              })}
            </Stack>

            {/* =====================================================
                MOBILE VIDEO CARDS
            ===================================================== */}

            <Box
              sx={{
                display: {
                  xs: 'block',
                  sm: 'none',
                },
              }}
            >
              {filteredCollections
                .slice(0, visibleVideos)
                .map((video, index) => (
                  <motion.div
                    key={
                      video._id ||
                      video.id ||
                      index
                    }
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.1,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.05,
                    }}
                  >
                    <Card
                      sx={{
                        mb: 3,
                        borderRadius: 3,
                        border: `1px solid ${cardBorder}`,
                        boxShadow: cardShadow,
                        overflow: 'hidden',
                        backgroundColor:
                          cardBackground,
                      }}
                    >
                      {/* Thumbnail */}
                      <Box
                        sx={{
                          height: 180,
                          bgcolor:
                            imageBackground,
                          borderRadius: 2,
                          m: 1,
                          overflow: 'hidden',
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {video.thumbnail ? (
                          <img
                            src={getThumbnailUrl(
                              video
                            )}
                            alt={
                              video.title ||
                              'Video'
                            }
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        ) : (
                          <PlayArrowIcon
                            sx={{
                              fontSize: 42,
                              color: textMuted,
                            }}
                          />
                        )}
                      </Box>

                      {/* Content */}
                      <CardContent
                        sx={{
                          p: 3,
                          '&:last-child': {
                            pb: 3,
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent:
                              'space-between',
                            alignItems:
                              'flex-start',
                            gap: 2,
                            mb: 1,
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily,
                              fontWeight:
                                semibold,
                              fontSize:
                                '1.1rem',
                              lineHeight: 1.3,
                              color:
                                video.color ||
                                textPrimary,
                              textAlign:
                                'left',
                            }}
                          >
                            {video.title}
                          </Typography>

                          {video.duration && (
                            <Typography
                              sx={{
                                flexShrink: 0,
                                fontFamily,
                                fontSize: 13,
                                color:
                                  textMuted,
                                fontWeight:
                                  medium,
                              }}
                            >
                              {video.duration}
                            </Typography>
                          )}
                        </Box>

                        <Typography
                          sx={{
                            fontFamily,
                            fontWeight:
                              regular,
                            mb: 3,
                            fontSize:
                              '0.9375rem',
                            lineHeight: 1.5,
                            color:
                              textSecondary,
                            textAlign:
                              'left',
                          }}
                        >
                          {video.description}
                        </Typography>

                        <Button
                          fullWidth
                          variant="contained"
                          startIcon={
                            <PlayArrowIcon />
                          }
                          onClick={() =>
                            openVideo(video)
                          }
                          sx={{
                            minHeight: 42,
                            borderRadius: '10px',
                            background:
                              gradient,
                            color: textLight,
                            textTransform:
                              'none',
                            fontFamily,
                            fontSize:
                              '0.9375rem',
                            fontWeight:
                              medium,
                            border: '2px solid #FFFFFF',
                            backdropFilter: 'blur(100.38603973388672px)',
                            WebkitBackdropFilter: 'blur(100.38603973388672px)',
                            boxShadow: '0px 2.96px 5.4px 0.74px #0000001A',

                            '&:hover': {
                              opacity:
                                buttonHoverOpacity,
                              background:
                                gradient,
                              boxShadow: '0px 2.96px 5.4px 0.74px #0000001A',
                            },
                          }}
                        >
                          Watch Now
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </Box>

            {/* =====================================================
                DESKTOP VIDEO GRID
            ===================================================== */}

            <Box
              sx={{
                display: {
                  xs: 'none',
                  sm: 'grid',
                },

                gridTemplateColumns: {
                  sm: 'repeat(2, minmax(0, 1fr))',
                  md: 'repeat(3, minmax(0, 1fr))',
                },

                gap: {
                  sm: 2,
                  md: 3,
                },

                pb: 0,
              }}
            >
              {filteredCollections
                .slice(0, visibleVideos)
                .map((video, index) => (
                  <motion.div
                    key={
                      video._id ||
                      video.id ||
                      index
                    }
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.1,
                    }}
                    transition={{
                      duration: 0.4,
                      delay:
                        0.1 +
                        (index % 3) * 0.1,
                    }}
                    whileHover={{
                      y: -4,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                    style={{
                      height: '100%',
                    }}
                  >
                    <Card
                      className="video-collection-card"
                      sx={{
                        borderRadius: 1,
                        border: `1px solid ${cardBorder}`,
                        boxShadow: cardShadow,
                        height: '100%',
                        display: 'flex',
                        flexDirection:
                          'column',
                        overflow: 'hidden',
                        background:
                          cardBackground,
                      }}
                    >
                      {/* Thumbnail */}
                      <Box
                        className="video-thumbnail"
                        sx={{
                          position: 'relative',
                          height: {
                            sm: 150,
                            md: 170,
                          },
                          bgcolor: imageBackground,
                          borderRadius: 1,
                          m: 1,
                          overflow: 'hidden',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          // REMOVED: The hover effect that expanded the container and caused the image to zoom
                        }}
                      >
                        {video.thumbnail ? (
                          <img
                            src={getThumbnailUrl(
                              video
                            )}
                            alt={
                              video.title ||
                              'Video'
                            }
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        ) : (
                          <PlayArrowIcon
                            sx={{
                              fontSize: 48,
                              color: textMuted,
                            }}
                          />
                        )}

                        {/* Play button */}
                        <IconButton
                          aria-label={`Play ${video.title || 'video'}`}
                          onClick={() =>
                            openVideo(video)
                          }
                          sx={{
                            position:
                              'absolute',
                            top: '50%',
                            left: '50%',
                            transform:
                              'translate(-50%, -50%)',

                            bgcolor:
                              'rgba(0,0,0,0.55)',

                            color:
                              textLight,

                            width: 48,
                            height: 48,

                            transition:
                              'all 0.2s ease',

                            '&:hover': {
                              bgcolor:
                                'rgba(0,0,0,0.8)',
                              transform:
                                'translate(-50%, -50%) scale(1.05)',
                            },
                          }}
                        >
                          <PlayArrowIcon />
                        </IconButton>
                      </Box>

                      {/* Card content */}
                      <CardContent
                        sx={{
                          flexGrow: 1,
                          display: 'flex',
                          flexDirection:
                            'column',
                          p: {
                            xs: 2,
                            sm: 2.5,
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent:
                              'space-between',
                            alignItems:
                              'flex-start',
                            gap: 1.5,
                            mb: 1.5,
                          }}
                        >
                          <Typography
                            component="h3"
                            sx={{
                              fontFamily,
                              fontWeight:
                                bold,
                              lineHeight: 1.2,
                              fontSize: {
                                xs: 16,
                                sm: 18,
                              },
                              color:
                                video.color ||
                                textPrimary,
                              textAlign:
                                'left',
                              mb: 0,
                            }}
                          >
                            {video.title}
                          </Typography>

                          {video.duration && (
                            <Typography
                              sx={{
                                flexShrink: 0,
                                fontFamily,
                                fontSize: 13,
                                color:
                                  textMuted,
                                fontWeight:
                                  medium,
                                whiteSpace:
                                  'nowrap',
                              }}
                            >
                              {video.duration}
                            </Typography>
                          )}
                        </Box>

                        <Typography
                          sx={{
                            fontFamily,
                            fontWeight:
                              regular,
                            fontSize: {
                              xs: 13,
                              sm: 14,
                            },
                            lineHeight: 1.5,
                            color:
                              textMuted,
                            mb: 2,
                            flexGrow: 1,
                            textAlign:
                              'left',
                          }}
                        >
                          {video.description}
                        </Typography>

                        {/* Watch button */}
                        <Button
                          fullWidth
                          variant="contained"
                          startIcon={
                            <PlayArrowIcon />
                          }
                          onClick={() =>
                            openVideo(video)
                          }
                          sx={{
                            minHeight: 36,
                            borderRadius: '10px',
                            background:
                              gradient,
                            color: textLight,
                            textTransform:
                              'none',
                            fontFamily,
                            fontSize: 13,
                            fontWeight:
                              medium,
                            position:
                              'relative',
                            overflow:
                              'hidden',
                            border: '2px solid #FFFFFF',
                            backdropFilter: 'blur(100.38603973388672px)',
                            WebkitBackdropFilter: 'blur(100.38603973388672px)',
                            boxShadow: '0px 2.96px 5.4px 0.74px #0000001A',

                            '&:hover': {
                              opacity:
                                buttonHoverOpacity,
                              background:
                                gradient,
                              boxShadow: '0px 2.96px 5.4px 0.74px #0000001A',
                            },
                          }}
                        >
                          Watch Now
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </Box>

            {/* =====================================================
                READ MORE / SHOW LESS
            ===================================================== */}

            {filteredCollections.length > 6 && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent:
                      'center',
                    mt: 4,
                  }}
                >
                  <Typography
                    component="span"
                    onClick={toggleVideos}
                    sx={{
                      textTransform:
                        'none',
                      fontFamily,
                      color: titleColor,
                      cursor: 'pointer',
                      fontSize: 14,
                      fontWeight: medium,
                      textDecoration:
                        'none',
                      userSelect: 'none',

                      '&:hover': {
                        color:
                          titleColor,
                        textDecoration:
                          'underline',
                        textUnderlineOffset:
                          '4px',
                      },
                    }}
                  >
                    {isExpanded
                      ? 'Show Less'
                      : 'Read more'}
                  </Typography>
                </Box>
              </motion.div>
            )}
          </Box>
        </Box>
      </Container>

      {/* ===========================================================
          VIDEO MODAL
      =========================================================== */}

      {videoUrl && (
        <Box
          onClick={closeVideo}
          sx={{
            ...(gifts.modalOverlay || {
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background:
                'rgba(0,0,0,0.75)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }),

            p: {
              xs: 2,
              md: 4,
            },
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
            }}
            style={{
              width: '100%',
              maxWidth: 900,
            }}
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <Box
              sx={{
                ...(gifts.modalContainer || {
                  background:
                    modalBackground,
                  borderRadius: 2,
                  overflow: 'hidden',
                }),
              }}
            >
              {/* Modal header */}
              <Box
                sx={{
                  ...(gifts.modalHeader || {}),
                  background: gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent:
                    'space-between',
                  px: 2,
                  py: 1.5,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems:
                      'center',
                    gap: 1,
                  }}
                >
                  <PlayArrowIcon
                    sx={{
                      color:
                        textLight,
                      fontSize: 20,
                    }}
                  />

                  <Typography
                    sx={{
                      fontFamily,
                      fontSize: 14,
                      fontWeight:
                        semibold,
                      color:
                        textLight,
                      letterSpacing:
                        0.3,
                    }}
                  >
                    Now Playing
                  </Typography>
                </Box>

                <IconButton
                  onClick={closeVideo}
                  size="small"
                  aria-label="Close video"
                  sx={{
                    color: textLight,
                    bgcolor:
                      closeBackground,
                    borderRadius: 2,
                    p: 0.5,

                    '&:hover': {
                      bgcolor:
                        closeHoverBackground,
                      transform:
                        'scale(1.05)',
                    },

                    transition:
                      'all 0.2s',
                  }}
                >
                  ✕
                </IconButton>
              </Box>

              {/* Video */}
              <Box
                sx={{
                  ...(gifts.modalBody || {}),
                  background:
                    modalBackground,
                }}
              >
                <video
                  src={videoUrl}
                  controls
                  autoPlay
                  playsInline
                  style={{
                    width: '100%',
                    display: 'block',
                    maxHeight: '70vh',
                    outline: 'none',
                  }}
                />
              </Box>

              {/* Modal footer */}
              <Box
                sx={{
                  px: 2.5,
                  py: 1.5,
                  bgcolor:
                    modalBackground,
                  display: 'flex',
                  alignItems:
                    'center',
                  justifyContent:
                    'space-between',
                  gap: 2,
                }}
              >
                <Typography
                  sx={{
                    fontFamily,
                    fontSize: 12,
                    color:
                      'rgba(255,255,255,0.35)',
                    fontWeight:
                      regular,
                  }}
                >
                  Click outside or press ✕
                  to close
                </Typography>

                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius:
                      '50%',
                    bgcolor:
                      titleColor,
                    boxShadow: `0 0 8px ${titleColor}`,
                    flexShrink: 0,
                  }}
                />
              </Box>
            </Box>
          </motion.div>
        </Box>
      )}
    </motion.div>
  );
}