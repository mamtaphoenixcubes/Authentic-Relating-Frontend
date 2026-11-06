'use client';

import {
  Box,
  Typography,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PauseIcon from '@mui/icons-material/Pause';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import axiosInstance from '@/lib/axios';
import CategoryDropdown from './CategoryDropdown';

// Shared layout primitives
import Section from '@/app/_components/common/Section';
import SiteContainer from '@/app/_components/common/SiteContainer';
import Card from '@/app/_components/common/Card';

// Theme tokens
import colors from '@/theme/colors';
import spacing from '@/theme/spacing';
import typography from '@/theme/typography';

// ---------- Shared typography / color sx ----------
const headingSx = {
  fontFamily: typography.connection.headerTitle.fontFamily,
  fontWeight: typography.connection.headerTitle.fontWeight,
  fontSize: typography.connection.headerTitle.fontSize,
  lineHeight: typography.connection.headerTitle.lineHeight,
  letterSpacing: typography.connection.headerTitle.letterSpacing,
  color: colors.textLight,
  wordBreak: 'break-word',
  flex: 1,
};

const metaTextSx = {
  fontFamily: typography.connection.listCard.subtitle.fontFamily,
  fontWeight: typography.connection.listCard.subtitle.fontWeight,
  fontSize: typography.connection.listCard.subtitle.fontSize,
  lineHeight: typography.connection.listCard.subtitle.lineHeight,
  letterSpacing: '0%',
  color: colors.connection.gridCard.descriptionColor,
  opacity: colors.connection.gridCard.descriptionOpacity,
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  mb: 0.5,
};

const cardTitleSx = {
  fontFamily: typography.connection.gridCard.title.fontFamily,
  fontWeight: typography.connection.gridCard.title.fontWeight,
  fontSize: typography.connection.gridCard.title.fontSize,
  lineHeight: typography.connection.gridCard.title.lineHeight,
  letterSpacing: '0%',
  color: colors.connection.gridCard.titleColor,
  flexGrow: 1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
};

// Grid template — tokenized from spacing.connection.gridSpacing
const GRID_COLUMNS = {
  xs: '1fr',
  sm: 'repeat(2, 1fr)',
  md: 'repeat(4, 1fr)',
  lg: 'repeat(4, 1fr)',
  xl: 'repeat(4, 1fr)',
};

const GRID_GAP = spacing.connection.gridSpacing;

export default function LatestEpisodes() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [showAll, setShowAll] = useState(false);
  const [currentTime, setCurrentTime] = useState({});
  const [duration, setDuration] = useState({});
  const [volume, setVolume] = useState({});
  const [showControls, setShowControls] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const [allPodcasts, setAllPodcasts] = useState([]);
  const [selectedPodcast, setSelectedPodcast] = useState(null);
  const [playingId, setPlayingId] = useState(null);
  const audioRefs = useRef({});

  // Cleanup on unmount
  useEffect(() => {
    const refs = audioRefs.current;
    return () => {
      Object.values(refs).forEach((a) => a?.pause());
      audioRefs.current = {};
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const fetchEpisodes = async () => {
      try {
        const res = await axiosInstance.get('/frontendApis/getpodcasts', {
          params: { size: 100, page: 0, search: '' },
          signal: controller.signal,
        });

        const podcasts = (res?.data?.data?.podcasts || []).sort(
          (a, b) => a.index_position - b.index_position
        );
        setAllPodcasts(podcasts);

        const uniqueCats = [];
        const seen = new Set();
        podcasts.forEach((p) => {
          const cat = p.category_id;
          if (cat?._id && !seen.has(cat._id)) {
            seen.add(cat._id);
            uniqueCats.push(cat);
          }
        });
        setCategories(uniqueCats);
      } catch (error) {
        if (error.name !== 'CanceledError' && error.code !== 'ERR_CANCELED') {
          console.error('API error:', error);
        }
      }
    };

    fetchEpisodes();
    return () => controller.abort();
  }, []);

  const filteredPodcasts = allPodcasts.filter((p) => {
    const matchesSearch = p.title
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory ||
      (p.category_id?._id || p.category_id) === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const displayedPodcasts = showAll
    ? filteredPodcasts
    : filteredPodcasts.slice(0, 4);

  const episodeKey = (podcastId, index) => `${podcastId}_ep_${index}`;

  const handleBack = () => {
    setSelectedPodcast(null);
    setShowControls({});
    setPlayingId(null);
    Object.values(audioRefs.current).forEach((a) => a?.pause());
    audioRefs.current = {};
  };

  return (
    <Section
      sx={{
        // Top padding zeroed via connection.sectionPt
        // Bottom padding from connection.sectionY
        pt: spacing.connection.sectionPt,
        pb: {
          xs: spacing.connection.sectionY.xs / 8,
          sm: spacing.connection.sectionY.sm / 8,
          md: spacing.connection.sectionY.md / 8,
          lg: spacing.connection.sectionY.lg / 8,
          xl: spacing.connection.sectionY.xl / 8,
        },
      }}
    >
      <SiteContainer>
        {/* GRADIENT PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              background: 'linear-gradient(135deg, #FF8C75 0%, #FA5D56 100%)',
              borderRadius: { xs: 3, md: 2 },
              px: spacing.featuresSection.containerPadding,
              py: spacing.featuresSection.containerPy,
              mb: { xs: 4, sm: 5, md: 6 },
            }}
          >
            {/* HEADER */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignItems="center"
              spacing={2}
              mb={4}
            >
              {/* LEFT: TITLE */}
              <Box sx={{ flex: 1 }}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {selectedPodcast ? (
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Box
                        onClick={handleBack}
                        sx={{
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          background: colors.connection.events.background,
                          '&:hover': {
                            background: colors.connection.events.hoverBackground,
                          },
                          flexShrink: 0,
                        }}
                      >
                        <ArrowBackIcon
                          sx={{ fontSize: 18, color: colors.textLight }}
                        />
                      </Box>
                      <Typography sx={headingSx}>
                        {selectedPodcast.title}
                      </Typography>
                    </Stack>
                  ) : (
                    <Typography sx={headingSx}>
                      All of our latest <br /> episodes
                    </Typography>
                  )}
                </motion.div>
              </Box>

              {/* RIGHT: BUTTONS */}
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                {!selectedPodcast && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{
                      display: 'flex',
                      flexDirection: isMobile ? 'column' : 'row',
                      alignItems: 'center',
                      gap: 12,
                      width: '100%',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        background: colors.connection.events.background,
                        border: '1px solid rgba(255,255,255,0.5)',
                        borderRadius: 1,
                        px: 1.5,
                        py: 0.6,
                        backdropFilter: colors.connection.events.backdropBlur,
                        width: { xs: '100%', sm: 'auto' },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 15,
                          mr: 1,
                          color: colors.textLight,
                          opacity: 0.8,
                        }}
                      >
                        🔍
                      </Typography>
                      <input
                        type="text"
                        placeholder="Search podcasts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          outline: 'none',
                          color: colors.textLight,
                          fontSize: 13,
                          width: '100%',
                          fontFamily: typography.fonts.body,
                        }}
                      />
                      {searchQuery && (
                        <Typography
                          onClick={() => setSearchQuery('')}
                          sx={{
                            fontSize: 14,
                            color: 'rgba(255,255,255,0.8)',
                            cursor: 'pointer',
                            ml: 1,
                          }}
                        >
                          ✕
                        </Typography>
                      )}
                    </Box>

                    {categories.length > 0 && (
                      <CategoryDropdown
                        categories={categories}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                      />
                    )}

                    <Button
                      variant="contained"
                      onClick={() => setShowAll((prev) => !prev)}
                      sx={{
                        width: { xs: '100%', sm: 'auto' },
                        bgcolor: colors.connection.events.background,
                        backdropFilter: colors.connection.events.backdropBlur,
                        border: '1px solid rgba(255,255,255,0.3)',
                        color: colors.connection.events.text,
                        textTransform: 'none',
                        fontFamily: typography.fonts.body,
                        fontWeight: typography.weights.medium,
                        fontSize: { xs: 13, sm: 14, md: 14 },
                        px: { xs: 2.5, sm: 3.5, md: 4 },
                        py: { xs: 0.5, sm: 0.6 },
                        minWidth: { sm: 140, md: 160 },
                        display: { xs: 'none', sm: 'inline-flex' },
                        borderRadius: spacing.connection.eventsButton.radiusGrid,
                        whiteSpace: 'nowrap',
                        '&:hover': {
                          bgcolor: colors.connection.events.hoverBackground,
                          border: '1px solid rgba(255,255,255,0.5)',
                        },
                      }}
                    >
                      {showAll ? 'Show Less' : 'All podcasts'}
                    </Button>
                  </motion.div>
                )}
              </Box>
            </Stack>

            {/* VIEW 1: PODCAST GRID */}
            {!selectedPodcast && (
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: GRID_COLUMNS,
                  gap: GRID_GAP,
                  mb: isMobile ? 4 : 0,
                }}
              >
                {displayedPodcasts.map((podcast, index) => (
                  <motion.div
                    key={podcast._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{ width: '100%', height: '100%' }}
                  >
                    <Card
                      onClick={() => setSelectedPodcast(podcast)}
                      sx={{
                         background: 'linear-gradient(15deg, #FF8C75 0%, #FA5D56 100%)',
                        borderRadius: colors.connection.listCard.radius,
                        p: { xs: 0.8, sm: 1.2 },
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid #fff',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        height: '100%',
                        minHeight: spacing.connection.gridCardHeight,
                        '&:hover': {
                          background: colors.connection.events.hoverBackground,
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      <Box
                        className="podcast-image-wrapper"
                        sx={{
                          position: 'relative',
                          width: '100%',
                          paddingTop: { xs: '56.25%', sm: '60%', md: '65%' },
                          background: colors.background,
                          borderRadius: 1.5,
                          mb: { xs: 1.5, sm: 1.8, md: 2 },
                          overflow: 'hidden',
                          transition: 'all 0.3s ease',
                          '&:hover .podcast-image': { transform: 'scale(1.1)' },
                        }}
                      >
                        {podcast.image && (
                          <img
                            src={`${process.env.NEXT_PUBLIC_API_URL}/${podcast.image}`}
                            alt={podcast.title}
                            className="podcast-image"
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'transform 0.5s ease',
                            }}
                          />
                        )}
                      </Box>

                      <Typography sx={metaTextSx}>
                        {podcast.episodes?.length || 0} episode
                        {podcast.episodes?.length !== 1 ? 's' : ''}
                      </Typography>

                      {podcast.createdAt && (
                        <Typography sx={metaTextSx}>
                          <CalendarTodayIcon
                            sx={{ fontSize: 16, opacity: 0.8 }}
                          />
                          {new Date(podcast.createdAt).toLocaleDateString(
                            'en-US',
                            { month: 'long', day: 'numeric', year: 'numeric' }
                          )}
                        </Typography>
                      )}

                      <Typography sx={{ ...cardTitleSx, mb: { xs: 1.5, md: 2 } }}>
                        {podcast.title}
                      </Typography>

                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{ mt: 'auto' }}
                      >
                        <Box
                          sx={{
                            width: { xs: 22, sm: 24, md: 26, lg: 28 },
                            height: { xs: 22, sm: 24, md: 26, lg: 28 },
                            borderRadius: '50%',
                            background: colors.connection.toggleActiveBg,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <PlayArrowIcon
                            sx={{
                              fontSize: { xs: 14, sm: 15, md: 16, lg: 18 },
                              color: colors.textLight,
                            }}
                          />
                        </Box>
                        <Typography sx={metaTextSx}>Listen Now</Typography>
                      </Stack>
                    </Card>
                  </motion.div>
                ))}
              </Box>
            )}

            {/* VIEW 2: EPISODE LIST */}
            {selectedPodcast && (
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: GRID_COLUMNS,
                  gap: GRID_GAP,
                  mb: isMobile ? 4 : 0,
                }}
              >
                {(selectedPodcast.episodes || []).map((episode, index) => {
                  const epKey = episodeKey(selectedPodcast._id, index);

                  return (
                    <motion.div
                      key={epKey}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      style={{ width: '100%', height: '100%' }}
                    >
                      <Card
                        sx={{
                          background: colors.connection.events.background,
                          borderRadius: colors.connection.listCard.radius,
                          p: spacing.connection.gridCardContentPadding,
                          display: 'flex',
                          flexDirection: 'column',
                          border: '1px solid #fff',
                          transition: 'all 0.3s ease',
                          height: '100%',
                          minHeight: spacing.connection.gridCardHeight,
                          '&:hover': {
                            background:
                              colors.connection.events.hoverBackground,
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        <Box sx={{ mb: { xs: 1.5, sm: 1.8, md: 2 } }}>
                          <Box
                            sx={{
                              position: 'relative',
                              width: '100%',
                              paddingTop: {
                                xs: '56.25%',
                                sm: '60%',
                                md: '65%',
                              },
                              background: colors.background,
                              borderRadius: 1.5,
                              mb: 1,
                              overflow: 'hidden',
                            }}
                          >
                            {selectedPodcast.image && (
                              <img
                                src={`${process.env.NEXT_PUBLIC_API_URL}/${selectedPodcast.image}`}
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                }}
                                alt={episode.episodeTitle}
                              />
                            )}
                          </Box>

                          {episode.audioFile && (
                            <audio
                              ref={(el) => {
                                audioRefs.current[epKey] = el;
                                if (el) {
                                  if (!volume[epKey]) {
                                    setVolume((prev) => ({
                                      ...prev,
                                      [epKey]: 1,
                                    }));
                                    el.volume = 1;
                                  }
                                  el.addEventListener(
                                    'loadedmetadata',
                                    () => {
                                      setDuration((prev) => ({
                                        ...prev,
                                        [epKey]: el.duration,
                                      }));
                                    }
                                  );
                                  el.addEventListener('timeupdate', () => {
                                    setCurrentTime((prev) => ({
                                      ...prev,
                                      [epKey]: el.currentTime,
                                    }));
                                  });
                                  el.addEventListener('ended', () => {
                                    setPlayingId(null);
                                  });
                                }
                              }}
                              src={`${process.env.NEXT_PUBLIC_API_URL}/${episode.audioFile}`}
                              style={{ display: 'none' }}
                            />
                          )}
                        </Box>

                        <Typography sx={metaTextSx}>
                          {episode.episodeDate !== 'instant'
                            ? new Date(episode.episodeDate).toLocaleDateString(
                                'en-US',
                                {
                                  month: 'long',
                                  day: 'numeric',
                                  year: 'numeric',
                                }
                              )
                            : 'Instant'}{' '}
                          • {episode.duration} min
                        </Typography>

                        <Typography
                          sx={{
                            ...cardTitleSx,
                            fontSize: {
                              xs: '13px',
                              sm: '14px',
                              md: '15px',
                              lg: '16px',
                            },
                            mb: { xs: 1.5, sm: 1.8, md: 2 },
                          }}
                        >
                          Ep{index + 1}: {episode.episodeTitle}
                        </Typography>

                        {!showControls[epKey] ? (
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                            onClick={() => {
                              setShowControls((prev) => ({
                                ...prev,
                                [epKey]: true,
                              }));
                              setTimeout(() => {
                                const audio = audioRefs.current[epKey];
                                if (!audio) return;
                                Object.values(audioRefs.current).forEach((a) =>
                                  a?.pause()
                                );
                                audio.play();
                                setPlayingId(epKey);
                              }, 50);
                            }}
                            sx={{ cursor: 'pointer', minHeight: 44, mt: 'auto' }}
                          >
                            <Box
                              sx={{
                                width: { xs: 22, sm: 24, md: 26, lg: 28 },
                                height: { xs: 22, sm: 24, md: 26, lg: 28 },
                                borderRadius: '50%',
                                background: colors.connection.toggleActiveBg,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <PlayArrowIcon
                                sx={{
                                  fontSize: { xs: 14, sm: 15, md: 16, lg: 18 },
                                  color: colors.textLight,
                                }}
                              />
                            </Box>
                            <Typography sx={metaTextSx}>
                              Listen Now
                            </Typography>
                          </Stack>
                        ) : (
                          <Box
                            sx={{
                              background: colors.connection.events.background,
                              borderRadius: 1.5,
                              p: 1,
                              border: '1px solid rgba(255,255,255,0.3)',
                              mt: 'auto',
                            }}
                          >
                            <Box
                              sx={{
                                width: '100%',
                                height: 4,
                                background: 'rgba(255,255,255,0.3)',
                                borderRadius: 2,
                                mb: 1,
                                cursor: 'pointer',
                                position: 'relative',
                              }}
                              onClick={(e) => {
                                const audio = audioRefs.current[epKey];
                                if (audio && duration[epKey]) {
                                  const rect =
                                    e.currentTarget.getBoundingClientRect();
                                  const percent =
                                    (e.clientX - rect.left) / rect.width;
                                  audio.currentTime =
                                    percent * duration[epKey];
                                }
                              }}
                            >
                              <Box
                                sx={{
                                  width: `${
                                    ((currentTime[epKey] || 0) /
                                      (duration[epKey] || 1)) *
                                    100
                                  }%`,
                                  height: '100%',
                                  background: colors.textLight,
                                  borderRadius: 2,
                                  transition: 'width 0.1s ease',
                                }}
                              />
                            </Box>

                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={1}
                            >
                              <Box
                                onClick={() => {
                                  const audio = audioRefs.current[epKey];
                                  if (!audio) return;
                                  if (playingId === epKey) {
                                    audio.pause();
                                    setPlayingId(null);
                                  } else {
                                    Object.values(audioRefs.current).forEach(
                                      (a) => a?.pause()
                                    );
                                    audio.play();
                                    setPlayingId(epKey);
                                  }
                                }}
                                sx={{
                                  width: { xs: 24, sm: 26, md: 28, lg: 30 },
                                  height: { xs: 24, sm: 26, md: 28, lg: 30 },
                                  borderRadius: '50%',
                                  background:
                                    playingId === epKey
                                      ? colors.connection.toggleActiveHoverBg
                                      : colors.connection.toggleActiveBg,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  cursor: 'pointer',
                                  transition: 'all 0.2s',
                                  '&:hover': { transform: 'scale(1.1)' },
                                }}
                              >
                                {playingId === epKey ? (
                                  <PauseIcon
                                    sx={{
                                      fontSize: { xs: 14, sm: 15, md: 16 },
                                      color: colors.textLight,
                                    }}
                                  />
                                ) : (
                                  <PlayArrowIcon
                                    sx={{
                                      fontSize: { xs: 14, sm: 15, md: 16 },
                                      color: colors.textLight,
                                    }}
                                  />
                                )}
                              </Box>

                              <Typography
                                fontSize={{ xs: 9, sm: 10, md: 11 }}
                                color={colors.connection.gridCard.descriptionColor}
                                sx={{ minWidth: { xs: 60, sm: 70 } }}
                              >
                                {Math.floor(currentTime[epKey] || 0)}s /{' '}
                                {Math.floor(duration[epKey] || 0)}s
                              </Typography>

                              <Box
                                sx={{
                                  flex: 1,
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 0.5,
                                }}
                              >
                                <Typography
                                  fontSize={{ xs: 9, sm: 10, md: 11 }}
                                  color={
                                    colors.connection.gridCard.descriptionColor
                                  }
                                >
                                  🔊
                                </Typography>
                                <input
                                  type="range"
                                  min="0"
                                  max="1"
                                  step="0.01"
                                  value={volume[epKey] || 1}
                                  onChange={(e) => {
                                    const newVolume = parseFloat(
                                      e.target.value
                                    );
                                    setVolume((prev) => ({
                                      ...prev,
                                      [epKey]: newVolume,
                                    }));
                                    const audio = audioRefs.current[epKey];
                                    if (audio) audio.volume = newVolume;
                                  }}
                                  style={{
                                    width: '100%',
                                    height: 3,
                                    cursor: 'pointer',
                                    accentColor: colors.textLight,
                                  }}
                                />
                              </Box>

                              <Typography
                                onClick={() => {
                                  const audio = audioRefs.current[epKey];
                                  if (audio) {
                                    audio.pause();
                                    audio.currentTime = 0;
                                  }
                                  if (playingId === epKey) setPlayingId(null);
                                  setShowControls((prev) => ({
                                    ...prev,
                                    [epKey]: false,
                                  }));
                                }}
                                sx={{
                                  fontSize: { xs: 14, sm: 15, md: 16 },
                                  color:
                                    colors.connection.gridCard.descriptionColor,
                                  cursor: 'pointer',
                                  '&:hover': { color: colors.textLight },
                                }}
                              >
                                ✕
                              </Typography>
                            </Stack>
                          </Box>
                        )}
                      </Card>
                    </motion.div>
                  );
                })}
              </Box>
            )}

            {/* Mobile show-all toggle */}
            {isMobile && !selectedPodcast && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <Typography
                    onClick={() => setShowAll(!showAll)}
                    sx={{
                      color: colors.textLight,
                      fontFamily: typography.fonts.body,
                      fontWeight: typography.weights.medium,
                      fontSize: 14,
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      textUnderlineOffset: '4px',
                      textDecorationColor: 'rgba(255,255,255,0.7)',
                      '&:hover': {
                        textDecorationColor: colors.textLight,
                        textDecorationThickness: '2px',
                      },
                    }}
                  >
                    {showAll ? 'Show Less' : 'View All'}
                  </Typography>
                </Box>
              </motion.div>
            )}
          </Box>
        </motion.div>

        {/* BOTTOM CALLOUT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Box
            sx={{
              background: 'linear-gradient(135deg, #20BFC4, #0EA5A8)',
              borderRadius: colors.connection.listCard.radius,
              px: { xs: 2, sm: 3, md: 4, lg: 5 },
              py: { xs: 3, sm: 3.5, md: 4, lg: 5 },
              minHeight: { xs: 280, sm: 320, md: 380, lg: 440, xl: 480 },
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1.3fr 1fr' },
              gap: { xs: 2, sm: 3, md: 4 },
              color: colors.textLight,
              border: '1px solid #fff',
              textAlign: { xs: 'center', sm: 'left' },
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', sm: 'flex-start' },
              }}
            >
              {[
                "This isn't just a podcast",
                "– it's a vibe",
                "– it's a relational field",
                "– it's a movement.",
                "– it's Authentic Relating Vibes.",
              ].map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  style={{ width: '100%' }}
                >
                  <Typography
                    sx={{
                      fontFamily: typography.fonts.heading,
                      fontWeight:
                        index === 0
                          ? typography.weights.semibold
                          : typography.weights.light,
                      fontStyle: index === 0 ? 'normal' : 'italic',
                      fontSize: {
                        xs: '20px',
                        sm: '25px',
                        md: '30px',
                        lg: '40px',
                        xl: '40px',
                      },
                      lineHeight: { xs: 1.4, md: 1.4 },
                      letterSpacing: '0%',
                      textAlign: { xs: 'center', sm: 'left' },
                    }}
                  >
                    {line}
                  </Typography>
                </motion.div>
              ))}
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', sm: 'flex-start' },
              }}
            >
              {[
                "Whether you're a coach, leader, facilitator, seeker, or simply",
                "someone longing for real connection in a disconnected world,",
                "this podcast is space to slow down, tune in, and come home",
                "to yourself and others.",
              ].map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  style={{ width: '100%' }}
                >
                  <Typography
                    sx={{
                      fontFamily: typography.fonts.body,
                      fontWeight: typography.weights.regular,
                      fontSize: {
                        xs: '14px',
                        sm: '16px',
                        md: '18px',
                        lg: '19px',
                        xl: '25px',
                      },
                      lineHeight: { xs: 1.6, md: 1.7 },
                      letterSpacing: '0%',
                      textAlign: { xs: 'center', sm: 'left' },
                      maxWidth: {
                        xs: '100%',
                        sm: '100%',
                        md: 900,
                        lg: 1000,
                      },
                      mx: { xs: 'auto', sm: 0 },
                    }}
                  >
                    {line}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>
      </SiteContainer>
    </Section>
  );
}