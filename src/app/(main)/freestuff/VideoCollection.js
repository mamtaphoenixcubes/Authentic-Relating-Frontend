
'use client';

import {
  Box,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
  IconButton,
  Chip,
  useTheme,
} from '@mui/material';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import axiosInstance from '@/lib/axios';

import colors from '@/theme/colors';
import typography from '@/theme/typography';

import SiteContainer from '../../_components/common/SiteContainer';
import Section from '../../_components/common/Section';

export default function VideoCollection() {
  const theme = useTheme();
  const gifts = theme.custom?.giftsSection || {};

  const fontFamily = typography.fonts?.body || 'inherit';
  const weights = typography.weights || {};

  const regular = weights.regular || 400;
  const medium = weights.medium || 500;
  const semibold = weights.semibold || 600;
  const bold = weights.bold || 700;

  const gradient =
    'linear-gradient(98.89deg, #FFC566 0%, #F9A629 100%)';

  const cardBg = '#FFFFFF';
  const cardBorderColor = '#F1F5F9';
  const cardBoxShadow = '0px 4px 12px rgba(0, 0, 0, 0.08)';
  const cardTitleColor = '#333333';
  const cardDescriptionColor = '#666666';

  const titleColor =
    colors.clientTestimonial?.title ||
    colors.textPrimary ||
    '#FF7A65';

  const textLight = colors.textLight || '#FFFFFF';
  const textMuted = colors.textMuted || '#777777';

  const background = colors.background || '#FFFFFF';
  const backgroundSoft = colors.backgroundSoft || '#F8F8F8';
  const border = colors.border || '#E5E5E5';

  const imageBackground =
    colors.gifts?.imageBackground ||
    colors.connection?.gridCard?.imagePlaceholder ||
    backgroundSoft;

  const modalBackground = colors.gifts?.modalBackground || '#111111';

  const closeBackground =
    colors.gifts?.closeBackground || 'rgba(255,255,255,0.12)';

  const closeHoverBackground =
    colors.gifts?.closeHoverBackground || 'rgba(255,255,255,0.2)';

  const [visibleVideos, setVisibleVideos] = useState(8);
  const [isExpanded, setIsExpanded] = useState(false);

  const [collections, setCollections] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [videoUrl, setVideoUrl] = useState(null);

  const filteredCollections = selectedCategory
    ? collections.filter(
        (item) => item.category_id?._id === selectedCategory
      )
    : collections;

  const toggleVideos = () => {
    if (isExpanded) {
      setVisibleVideos(8);
    } else {
      setVisibleVideos(filteredCollections.length);
    }

    setIsExpanded((prev) => !prev);
  };

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

        const collectionData = allData
          .filter((item) => item.type === 'collection')
          .sort(
            (a, b) =>
              (a.index_position || 0) -
              (b.index_position || 0)
          );

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

  useEffect(() => {
    setVisibleVideos(8);
    setIsExpanded(false);
  }, [selectedCategory]);

  const getVideoUrl = (video) => {
    if (!video?.file_url) return null;

    return `${process.env.NEXT_PUBLIC_API_URL}/${video.file_url}`;
  };

  const getThumbnailUrl = (video) => {
    if (!video?.thumbnail) return null;

    return `${process.env.NEXT_PUBLIC_API_URL}/${encodeURI(
      video.thumbnail
    )}`;
  };

  const openVideo = (video) => {
    const url = getVideoUrl(video);

    if (url) setVideoUrl(url);
  };

  const closeVideo = () => setVideoUrl(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <Section>
        <SiteContainer
          sx={{
            pt: 0,
            pb: { xs: 4, sm: 5, md: 0 },
          }}
        >
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Typography
              component="h2"
              textAlign="center"
              sx={{
                fontFamily: '"Red Hat Display", sans-serif',
                fontWeight: 700,
                fontSize: {
                  xs: 24,
                  sm: 28,
                  md: 36,
                  lg: 40,
                  xl: 44,
                },
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#F0A634',
                mb: 1,
              }}
            >
              My Video Collection
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Typography
              textAlign="center"
              sx={{
                fontFamily: '"Red Hat Display", sans-serif',
                fontSize: { xs: 13, sm: 14, md: 16 },
                fontWeight: 400,
                color: '#000000',
                lineHeight: 1.7,
                width: '100%',
                maxWidth: 952,
                mx: 'auto',
                mb: { xs: 4, md: 6 },
                px: { xs: 1, sm: 0 },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Aenean sed urna elit. Ut in tincidunt lacus,
              at convallis risus. Orci varius natoque penatibus
              et magnis dis parturient montes, nascetur
              ridiculus mus.
            </Typography>
          </motion.div>

          {/* MAIN CONTENT */}
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              width: '100%',
              alignItems: 'flex-start',
            }}
          >
            {/* DESKTOP CATEGORY SIDEBAR */}
            <Stack
              spacing={1.3}
              sx={{
                display: { xs: 'none', sm: 'flex' },
                width: {
                  sm: '260px',
                  md: '265px',
                },
                flexShrink: 0,
              }}
            >
              {categories.map((cat, index) => {
                const isActive = cat._id === selectedCategory;

                return (
                  <motion.div
                    key={cat._id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 + index * 0.05,
                    }}
                  >
                    <Button
                      onClick={() =>
                        setSelectedCategory(cat._id)
                      }
                      fullWidth
                      sx={{
                        height: 42,
                        borderRadius: 1,
                        justifyContent: 'center',
                        textTransform: 'none',
                        fontFamily,
                        fontWeight: isActive ? bold : medium,
                        background: isActive
                          ? gradient
                          : '#FFFFFF',
                        color: isActive
                          ? textLight
                          : cardTitleColor,
                        border: '2px solid #FFFFFF',
                        borderImage: 'none',
                        backdropFilter:
                          'blur(100.38603973388672px)',
                        WebkitBackdropFilter:
                          'blur(100.38603973388672px)',
                        boxShadow: isActive
                          ? '0px 4px 10px rgba(249, 166, 41, 0.3)'
                          : '0px 2.96px 5.4px 0.74px #0000001A',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          background: isActive
                            ? gradient
                            : '#FAFAFA',
                          opacity: isActive ? 0.9 : 1,
                          transform: 'scale(1.02)',
                        },
                      }}
                    >
                      {cat.title}
                    </Button>
                  </motion.div>
                );
              })}
            </Stack>

            {/* RIGHT CONTENT */}
            <Box
              sx={{
                flex: 1,
                minWidth: 0,
                position: 'relative',
              }}
            >
              {/* MOBILE CATEGORIES */}
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
                sx={{
                  display: { xs: 'flex', sm: 'none' },
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
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
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
                            : cardTitleColor,
                          border: isActive
                            ? 'none'
                            : `1px solid ${border}`,
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

              {/* MOBILE VIDEO CARDS */}
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
                      key={video._id || video.id || index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
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
                          borderRadius: '16px',
                          backgroundColor: cardBg,
                          boxShadow: cardBoxShadow,
                          border: `1px solid ${cardBorderColor}`,
                          p: 2,
                        }}
                      >
                        <Box
                          sx={{
                            height: 160,
                            borderRadius: '10px',
                            overflow: 'hidden',
                            width: '100%',
                            mb: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: imageBackground,
                            position: 'relative',
                          }}
                        >
                          {video.thumbnail ? (
                            <img
                              src={getThumbnailUrl(video)}
                              alt={video.title || 'Video'}
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

                          <IconButton
                            onClick={() => openVideo(video)}
                            sx={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform:
                                'translate(-50%, -50%)',
                              bgcolor: 'rgba(0,0,0,0.5)',
                              color: '#FFFFFF',
                              width: 48,
                              height: 48,
                              '&:hover': {
                                bgcolor: 'rgba(0,0,0,0.7)',
                              },
                            }}
                          >
                            <PlayArrowIcon />
                          </IconButton>
                        </Box>

                        <CardContent
                          sx={{
                            p: 0,
                            '&:last-child': {
                              pb: 0,
                            },
                            display: 'flex',
                            flexDirection: 'column',
                          }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'flex-start',
                              gap: 1.5,
                              mb: 1,
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily,
                                fontWeight: 700,
                                fontSize: '20px',
                                color: cardTitleColor,
                                textAlign: 'left',
                              }}
                            >
                              {video.title}
                            </Typography>
                          </Box>

                          <Typography
                            sx={{
                              fontFamily,
                              fontWeight: 400,
                              fontSize: '14px',
                              color: cardDescriptionColor,
                              mb: 3,
                              textAlign: 'left',
                              lineHeight: 1.5,
                            }}
                          >
                            {video.description}
                          </Typography>

                          <Button
                            fullWidth
                            variant="contained"
                            startIcon={<PlayArrowIcon />}
                            onClick={() => openVideo(video)}
                            sx={{
                              height: 44,
                              borderRadius: '10px',
                              background: gradient,
                              color: '#FFFFFF',
                              textTransform: 'none',
                              fontFamily,
                              fontSize: '15px',
                              fontWeight: 500,
                              border: '2px solid #FFFFFF',
                              backdropFilter:
                                'blur(100.38603973388672px)',
                              WebkitBackdropFilter:
                                'blur(100.38603973388672px)',
                              boxShadow:
                                '0px 2.96px 5.4px 0.74px #0000001A',
                              '&:hover': {
                                background: gradient,
                                opacity: 0.9,
                                boxShadow:
                                  '0px 2.96px 5.4px 0.74px #0000001A',
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

              {/* DESKTOP VIDEO GRID */}
              <Box
                sx={{
                  display: {
                    xs: 'none',
                    sm: 'grid',
                  },
                  gridTemplateColumns: {
                    sm: 'repeat(2, minmax(0, 1fr))',
                    md: 'repeat(3, minmax(0, 1fr))',
                    lg: 'repeat(3, minmax(0, 1fr))',
                    xl: 'repeat(3, minmax(0, 1fr))',
                  },
                  gap: 2,
                  width: '100%',
                }}
              >
                {filteredCollections
                  .slice(0, visibleVideos)
                  .map((video, index) => (
                    <motion.div
                      key={video._id || video.id || index}
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
                        delay: 0.1 + (index % 3) * 0.08,
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
                        className="video-collection-card group"
                        sx={{
                          borderRadius: '16px',
                          backgroundColor: cardBg,
                          boxShadow: cardBoxShadow,
                          border: `1px solid ${cardBorderColor}`,
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          p: 2,
                        }}
                      >
                        <Box
                          sx={{
                            height: 160,
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                            width: '100%',
                            mb: 2,
                            position: 'relative',
                            bgcolor: imageBackground,
                          }}
                        >
                          {video.thumbnail ? (
                            <img
                              src={getThumbnailUrl(video)}
                              alt={video.title || 'Video'}
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

                          <IconButton
                            aria-label={`Play ${video.title || 'video'}`}
                            onClick={() => openVideo(video)}
                            sx={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform:
                                'translate(-50%, -50%)',
                              bgcolor: 'rgba(0,0,0,0.55)',
                              color: '#FFFFFF',
                              width: 48,
                              height: 48,
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                bgcolor: 'rgba(0,0,0,0.8)',
                                transform:
                                  'translate(-50%, -50%) scale(1.05)',
                              },
                            }}
                          >
                            <PlayArrowIcon />
                          </IconButton>
                        </Box>

                        <CardContent
                          sx={{
                            p: 0,
                            '&:last-child': {
                              pb: 0,
                            },
                            flexGrow: 1,
                            display: 'flex',
                            flexDirection: 'column',
                          }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'flex-start',
                              gap: 1.5,
                              mb: 1,
                            }}
                          >
                            <Typography
                              component="h3"
                              sx={{
                                fontFamily,
                                fontWeight: 700,
                                fontSize: '20px',
                                lineHeight: 1.2,
                                color: cardTitleColor,
                                textAlign: 'left',
                              }}
                            >
                              {video.title}
                            </Typography>
                          </Box>

                          <Typography
                            sx={{
                              fontFamily,
                              fontWeight: 400,
                              fontSize: '14px',
                              color: cardDescriptionColor,
                              mb: 3,
                              flexGrow: 1,
                              textAlign: 'left',
                              lineHeight: 1.5,
                            }}
                          >
                            {video.description}
                          </Typography>

                          <Button
                            variant="contained"
                            startIcon={<PlayArrowIcon />}
                            onClick={() => openVideo(video)}
                            sx={{
                              width: '100%',
                              height: 44,
                              borderRadius: '10px',
                              background: gradient,
                              color: '#FFFFFF',
                              textTransform: 'none',
                              fontFamily,
                              fontSize: '15px',
                              fontWeight: 500,
                              border: '2px solid #FFFFFF',
                              backdropFilter:
                                'blur(100.38603973388672px)',
                              WebkitBackdropFilter:
                                'blur(100.38603973388672px)',
                              boxShadow:
                                '0px 2.96px 5.4px 0.74px #0000001A',
                              '&:hover': {
                                background: gradient,
                                opacity: 0.9,
                                boxShadow:
                                  '0px 2.96px 5.4px 0.74px #0000001A',
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

              {/* READ MORE / SHOW LESS */}
              {filteredCollections.length > 8 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mt: 4,
                    }}
                  >
                    <Typography
                      component="span"
                      onClick={toggleVideos}
                      sx={{
                        textTransform: 'none',
                        fontFamily,
                        color: titleColor,
                        cursor: 'pointer',
                        fontSize: 14,
                        fontWeight: bold,
                        textDecoration: 'underline',
                        textUnderlineOffset: '4px',
                        userSelect: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                          textUnderlineOffset: '4px',
                        },
                      }}
                    >
                      {isExpanded ? 'Show Less' : 'Read more'}
                    </Typography>
                  </Box>
                </motion.div>
              )}
            </Box>
          </Box>
        </SiteContainer>
        
      </Section>
      

      {/* VIDEO MODAL */}
      {videoUrl && (
        <Box
          onClick={closeVideo}
          sx={{
            ...(gifts.modalOverlay || {
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(0,0,0,0.75)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }),
            p: { xs: 2, md: 4 },
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
            onClick={(event) => event.stopPropagation()}
          >
            <Box
              sx={{
                ...(gifts.modalContainer || {
                  background: modalBackground,
                  borderRadius: 2,
                  overflow: 'hidden',
                }),
              }}
            >
              <Box
                sx={{
                  ...(gifts.modalHeader || {}),
                  background: gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  px: 2,
                  py: 1.5,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <PlayArrowIcon
                    sx={{
                      color: textLight,
                      fontSize: 20,
                    }}
                  />

                  <Typography
                    sx={{
                      fontFamily,
                      fontSize: 14,
                      fontWeight: semibold,
                      color: textLight,
                      letterSpacing: 0.3,
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
                    bgcolor: closeBackground,
                    borderRadius: 2,
                    p: 0.5,
                    '&:hover': {
                      bgcolor: closeHoverBackground,
                      transform: 'scale(1.05)',
                    },
                    transition: 'all 0.2s',
                  }}
                >
                  ✕
                </IconButton>
              </Box>

              <Box
                sx={{
                  ...(gifts.modalBody || {}),
                  background: modalBackground,
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

              <Box
                sx={{
                  px: 2.5,
                  py: 1.5,
                  bgcolor: modalBackground,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 2,
                }}
              >
                <Typography
                  sx={{
                    fontFamily,
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.35)',
                    fontWeight: regular,
                  }}
                >
                  Click outside or press ✕ to close
                </Typography>

                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: titleColor,
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
