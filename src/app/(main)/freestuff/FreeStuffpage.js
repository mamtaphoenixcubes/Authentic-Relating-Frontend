'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
  IconButton,
  useTheme,
  useMediaQuery,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DownloadIcon from '@mui/icons-material/Download';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { motion, AnimatePresence } from 'framer-motion';
import axiosInstance from '@/lib/axios';
import SiteContainer from '../../_components/common/SiteContainer';
import Section from '../../_components/common/Section';

// Design system — same source of truth used everywhere else in the app
import colors from '@/theme/colors';
import typography from '@/theme/typography';

/* =========================================================
   CATEGORY CONFIG
   Every color / gradient a category needs is pulled from
   theme/colors.js so this page stays in sync with the rest
   of the site instead of carrying its own one-off hex values.
   ========================================================= */
const CATEGORY_CONFIG = {
  video: {
    tabId: 'videos',
    title: 'Free Videos to Download',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed urna elit. Ut in tincidunt lacus, at convallis risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    // matches colors.offeringsInnerDetail.title, already used app-wide for this exact blue
    titleColor: colors.offeringsInnerDetail.title,
    gradient: colors.gifts.categoryGradients.videos,
  },
  pdf: {
    tabId: 'pdfs',
    title: 'Free PDF to Download',
    description:
      'Download high-quality PDF documents on various topics. Perfect for offline reading and reference.',
    // closest existing design-system token to the page's old ad-hoc coral (#FF826E)
    titleColor: colors.tenPrinciples.title,
    gradient: colors.gifts.categoryGradients.pdf,
  },
  audio: {
    tabId: 'audios',
    title: 'Free Audios to Download',
    description:
      'Listen to educational audio tracks anytime, anywhere. Enhance your learning experience on-the-go.',
    // closest existing design-system token to the page's old ad-hoc teal (#15AFA2)
    titleColor: colors.realConnection.heading,
    gradient: colors.gifts.categoryGradients.audios,
  },
};

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'videos', label: 'Videos' },
  { id: 'pdfs', label: 'PDFs' },
  { id: 'audios', label: 'Audios' },
];

// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

const MotionBox = motion(Box);

// Reusable Section Component
const ResourceSection = ({ type = 'video', data, categories = [] }) => {
  const theme = useTheme();
  const gifts = theme.custom.giftsSection; // shared modal / audio-player styles
  const fontFamily = typography.fonts.body;
  const weights = typography.weights;

  const { title, description, titleColor, gradient } = CATEGORY_CONFIG[type];

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [modalItem, setModalItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredCategories = categories.filter((cat) => cat.type === type);

  useEffect(() => {
    if (filteredCategories.length > 0 && !selectedCategory) {
      setSelectedCategory(filteredCategories[0]._id);
    }
  }, [filteredCategories.length]);

  const [currentPage, setCurrentPage] = useState(0);

  const getItemsPerPage = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 4;
  };

  const itemsPerPage = getItemsPerPage();
  const filteredData = selectedCategory
    ? data.filter((item) => item.category_id._id === selectedCategory)
    : data;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const getCurrentItems = () => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredData.slice(start, end);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(0);
  };

  return (
    <>
      <Section>
        <SiteContainer sx={{ pt: 0, pb: { xs: 1, md: 0 } }}>
          {/* Mobile Layout */}
          {isMobile ? (
            <Box sx={{ px: 2 }}>
              {/* HEADER ROW - Title & Pagination Controls on same line */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2,
                }}
              >
                <motion.div
                  variants={slideFromLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Typography
                    color={titleColor}
                    sx={{
                      fontFamily,
                      fontWeight: weights.bold,
                      fontSize: { xs: '1.6rem', sm: '1.75rem' },
                      lineHeight: 1.15,
                      flex: 1,
                      mr: 2,
                      textAlign: 'left',
                    }}
                  >
                    {title}
                  </Typography>
                </motion.div>

                <motion.div
                  variants={slideFromRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.05 }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexShrink: 0 }}>
                    <IconButton
                      onClick={handlePrevPage}
                      disabled={currentPage === 0}
                      sx={{
                        width: 32,
                        height: 32,
                        minWidth: 32,
                        borderRadius: '50%',
                        background: currentPage === 0 ? '#f5f5f5' : gradient,
                        color: currentPage === 0 ? '#999' : '#fff',
                        '&:hover': { opacity: 0.9, background: gradient },
                        '&:disabled': { background: '#f5f5f5', color: '#ccc' },
                      }}
                    >
                      <ChevronLeftIcon sx={{ fontSize: 18 }} />
                    </IconButton>

                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{
                        fontFamily,
                        minWidth: '40px',
                        textAlign: 'center',
                        fontSize: '0.75rem',
                        fontWeight: weights.medium,
                      }}
                    >
                      {currentPage + 1}/{totalPages}
                    </Typography>

                    <IconButton
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages - 1}
                      sx={{
                        width: 32,
                        height: 32,
                        minWidth: 32,
                        borderRadius: '50%',
                        background: currentPage === totalPages - 1 ? '#f5f5f5' : gradient,
                        color: currentPage === totalPages - 1 ? '#999' : '#fff',
                        '&:hover': { opacity: 0.9, background: gradient },
                        '&:disabled': { background: '#f5f5f5', color: '#ccc' },
                      }}
                    >
                      <ChevronRightIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                  </Box>
                </motion.div>
              </Box>

              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Typography
                  color={colors.textPrimary}
                  sx={{
                    fontFamily,
                    fontWeight: weights.regular,
                    mb: 2,
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    textAlign: 'left',
                    maxWidth: '100%',
                  }}
                >
                  {description}
                </Typography>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <FormControl fullWidth size="small" sx={{ mb: 2 }}>
                  <Select
                    value={selectedCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    displayEmpty
                    sx={{
                      height: 42,
                      borderRadius: 1,
                      background: titleColor,
                      color: colors.textLight,
                      fontFamily,
                      fontWeight: 900,
                      fontSize: '0.875rem',
                      '& .MuiSelect-select': {
                        py: 1.2,
                        px: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                      },
                      '& .MuiSelect-icon': { color: colors.textLight },
                      '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                      '&:hover': { background: titleColor },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    }}
                    MenuProps={{
                      PaperProps: {
                        sx: { mt: 0.5, borderRadius: 1, boxShadow: '0 4px 15px rgba(0,0,0,0.12)' },
                      },
                    }}
                  >
                    {filteredCategories.map((category) => (
                      <MenuItem
                        key={category._id}
                        value={category._id}
                        sx={{
                          fontFamily,
                          fontWeight: weights.semibold,
                          fontSize: '0.875rem',
                          '&.Mui-selected': { backgroundColor: `${titleColor} !important`, color: colors.textLight },
                          '&.Mui-selected:hover': { backgroundColor: `${titleColor} !important` },
                          '&:hover': { backgroundColor: `${titleColor}15` },
                        }}
                      >
                        {category.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </motion.div>

              <Box sx={{ mb: 3 }}>
                <AnimatePresence mode="wait">
                  {getCurrentItems().map((itemTitle, index) => (
                    <motion.div
                      key={`${selectedCategory}-${currentPage}-${index}`}
                      variants={fadeUp}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={{ delay: index * 0.08 }}
                    >
                      <Card
                        sx={{
                          mb: 3,
                          borderRadius: 2,
                          border: `1px solid ${colors.border}`,
                          boxShadow: colors.gifts.cardShadow,
                          overflow: 'hidden',
                          backgroundColor: colors.gifts.cardBackground,
                        }}
                      >
                        <Box
                          sx={{
                            height: 120,
                            bgcolor: colors.gifts.imageBackground,
                            borderRadius: 2,
                            m: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                          }}
                        >
                          {itemTitle.thumbnail && (
                            <img
                              src={`${process.env.NEXT_PUBLIC_API_URL}/${itemTitle.thumbnail}`}
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                              alt={itemTitle.title}
                            />
                          )}
                        </Box>
                        <CardContent sx={{ p: 3 }}>
                          <Typography
                            color={colors.textPrimary}
                            gutterBottom
                            sx={{
                              fontFamily,
                              fontWeight: weights.semibold,
                              fontSize: '1.1rem',
                              mb: 2,
                              textAlign: 'left',
                            }}
                          >
                            {itemTitle.title}
                          </Typography>

                          <Typography
                            color={colors.textSecondary}
                            sx={{
                              fontFamily,
                              fontWeight: weights.regular,
                              mb: 3,
                              fontSize: '0.9375rem',
                              lineHeight: 1.5,
                              textAlign: 'left',
                            }}
                          >
                            {itemTitle.description}
                          </Typography>

                          <Button
                            fullWidth
                            variant="contained"
                            startIcon={
                              type === 'video' ? <PlayArrowIcon /> : type === 'audio' ? <HeadphonesIcon /> : <OpenInNewIcon />
                            }
                            onClick={() => setModalItem(itemTitle)}
                            sx={{
                              py: 1.5,
                              borderRadius: 2,
                              background: gradient,
                              color: colors.textLight,
                              textTransform: 'none',
                              fontFamily,
                              fontSize: '0.9375rem',
                              fontWeight: weights.medium,
                              '&:hover': { opacity: 0.9, background: gradient },
                              boxShadow: colors.gifts.cardShadow,
                            }}
                          >
                            {type === 'video' ? 'Watch Now' : type === 'audio' ? 'Listen Now' : 'View Document'}
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </Box>
            </Box>
          ) : (
            // Desktop/Tablet Layout
            <>
              <Box
                sx={{
                  px: { xs: 2, md: 0 },
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  width: '100%',
                }}
              >
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  style={{ width: '100%' }}
                >
                  <Typography
                    color={titleColor}
                    sx={{
                      fontFamily,
                      fontWeight: weights.bold,
                      fontSize: { xs: 32, sm: 38, md: 46, lg: 52 },
                      lineHeight: 1.1,
                      letterSpacing: '-0.5px',
                      textAlign: 'left',
                    }}
                  >
                    {title}
                  </Typography>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.05 }}
                  style={{ width: '100%' }}
                >
                  <Typography
                    color={colors.textPrimary}
                    sx={{
                      fontFamily,
                      fontWeight: weights.regular,
                      maxWidth: { xs: '100%', md: 1400 },
                      fontSize: { xs: 16, sm: 18, md: 20 },
                      mt: 1,
                      mb: 2,
                      lineHeight: 1.5,
                      textAlign: 'left',
                      color: "#444444"
                    }}
                  >
                    {description}
                  </Typography>
                </motion.div>
              </Box>

              <Box display="flex" gap={3} sx={{ width: '100%' }}>
                {/* Categories Sidebar */}
                <Box width={240} sx={{ flexShrink: 0 }}>
                  <Stack spacing={1.3}>
                    {filteredCategories.map((item, i) => (
                      <motion.div
                        key={item._id}
                        variants={slideFromLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.05 + i * 0.05 }}
                      >
                        <Button
                          fullWidth
                          onClick={() => handleCategoryChange(item._id)}
                          sx={{
                            height: 42,
                            borderRadius: 1,
                            justifyContent: 'center',
                            textTransform: 'none',
                            fontFamily,
                            fontWeight: 900,
                            bgcolor: selectedCategory === item._id ? titleColor : colors.background,
                            color: selectedCategory === item._id ? colors.Categorybackground : colors.CategoryDarkbackground,
                            position: 'relative',
                            overflow: 'hidden',
                            border: '2px solid #FFFFFF',
                            backdropFilter: 'blur(100.38603973388672px)',
                            WebkitBackdropFilter: 'blur(100.38603973388672px)',
                            boxShadow: '0px 2.96px 5.4px 0.74px #0000001A',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              inset: 0,
                              borderRadius: 2,
                              padding: '1.5px',
                              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                              WebkitMaskComposite: 'xor',
                              maskComposite: 'exclude',
                              pointerEvents: 'none',
                            },
                            transition: 'all 0.25s ease',
                            '&:hover': {
                              bgcolor: selectedCategory === item._id ? titleColor : colors.backgroundSoft,
                              opacity: selectedCategory === item._id ? 0.9 : 1,
                              transform: 'scale(1.03)',
                            },
                          }}
                        >
                          {item.title}
                        </Button>
                      </motion.div>
                    ))}
                  </Stack>
                </Box>

                {/* Content Area */}
                <Box flex={1} position="relative" sx={{ minWidth: 0 }}>
                  {/* Arrows */}
                  <Box position="absolute" right={0} top={-46} display="flex" alignItems="center" gap={1}>
                    <motion.div
                      variants={scaleIn}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <Box display="flex" gap={1}>
                        <IconButton
                          onClick={handlePrevPage}
                          disabled={currentPage === 0}
                          sx={{
                            width: 34,
                            height: 34,
                            borderRadius: '22%',
                            background: gradient,
                            color: colors.textLight,
                            border: '2px solid #FFFFFF',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                            '&:hover': { opacity: 0.9 },
                            '&:disabled': { background: '#F1F5F9', color: '#B0BEC5' },
                          }}
                        >
                          <ChevronLeftIcon fontSize="small" />
                        </IconButton>

                        <IconButton
                          onClick={handleNextPage}
                          disabled={currentPage === totalPages - 1}
                          sx={{
                            width: 34,
                            height: 34,
                            borderRadius: '20%',
                            background: gradient,
                            color: colors.textLight,
                            border: '2px solid #FFFFFF',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                            '&:hover': { opacity: 0.9 },
                            '&:disabled': { background: '#F1F5F9', color: '#B0BEC5' },
                          }}
                        >
                          <ChevronRightIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </motion.div>
                  </Box>

                  {/* Cards Grid */}
                  <Box
                    display="grid"
                    gridTemplateColumns={{ xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
                    gap={2}
                  >
                    <AnimatePresence mode="wait">
                      {getCurrentItems().map((itemTitle, index) => (
                        <motion.div
                          key={`${selectedCategory}-${currentPage}-${index}`}
                          variants={scaleIn}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          transition={{ delay: index * 0.08 }}
                          whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        >
                          <Card
                            className="group"
                            sx={{
                              borderRadius: '16px',
                              backgroundColor: '#FFFFFF',
                              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)', // Soft shadow matching the image
                              border: '1px solid #F1F5F9', // Very light border to match the mockup
                              height: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              p: 2, // Padding around the content
                            }}
                          >
                            {/* Image Container */}
                            <Box
                              sx={{
                                height: 160,
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                width: '100%',
                                mb: 2, // Space below image
                              }}
                            >
                              {itemTitle.thumbnail && (
                                <img
                                  src={`${process.env.NEXT_PUBLIC_API_URL}/${itemTitle.thumbnail}`}
                                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                  alt={itemTitle.title}
                                />
                              )}
                            </Box>

                            <CardContent sx={{ p: 0, '&:last-child': { pb: 0 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontFamily,
                                  fontWeight: 700,
                                  fontSize: '20px',
                                  color: '#444444', // Dark gray/slate text
                                  textAlign: 'left',
                                  mb: 1,
                                }}
                              >
                                {itemTitle.title}
                              </Typography>

                              <Typography
                                sx={{
                                  fontFamily,
                                  fontWeight: 400,
                                  fontSize: '14px',
                                  color: '#535353', // Lighter gray text
                                  mb: 3,
                                  flexGrow: 1,
                                  textAlign: 'left',
                                  lineHeight: 1.5,
                                }}
                              >
                                {itemTitle.description}
                              </Typography>

                              <Button
                                variant="contained"
                                startIcon={
                                  type === 'video' ? <PlayArrowIcon /> : type === 'audio' ? <HeadphonesIcon /> : <OpenInNewIcon />
                                }
                                onClick={() => setModalItem(itemTitle)}
                                sx={{
                                  width: '282px',
                                  maxWidth: '100%', // Ensures it doesn't break on small mobile screens
                                  height: 44,
                                  borderRadius: '10px',
                                  background: 'linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)',
                                  color: '#FFFFFF',
                                  textTransform: 'none',
                                  fontFamily,
                                  fontSize: '15px',
                                  fontWeight: 500,
                                  border: '2px solid #FFFFFF',
                                  backdropFilter: 'blur(100.38603973388672px)',
                                  WebkitBackdropFilter: 'blur(100.38603973388672px)', // Safari support
                                  boxShadow: '0px 2.96px 5.4px 0.74px #0000001A',
                                  '&:hover': {
                                    background: 'linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)', // Keep gradient on hover
                                    opacity: 0.9, // Slight dim to indicate hover since background doesn't change
                                    boxShadow: '0px 2.96px 5.4px 0.74px #0000001A',
                                  },
                                }}
                              >
                                {type === 'video' ? 'Watch Now' : type === 'audio' ? 'Listen Now' : 'Download'}
                              </Button>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </Box>
                </Box>
              </Box>
            </>
          )}
        </SiteContainer>
      </Section>

      {/* Professional Media Modal — reuses theme.custom.giftsSection so it matches
          every other modal in the app instead of carrying its own styles */}
      <AnimatePresence>
        {modalItem && (
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setModalItem(null)}
            sx={gifts.modalOverlay}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{ width: '100%', maxWidth: type === 'pdf' ? 1000 : 860 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Box sx={gifts.modalContainer}>
                <Box sx={{ ...gifts.modalHeader, background: gradient }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Typography sx={{ fontFamily, fontSize: 14, fontWeight: weights.semibold, color: colors.textLight, letterSpacing: 0.3 }}>
                      {type === 'video' && '▶ Now Playing'}
                      {type === 'audio' && '🎵 Now Playing'}
                      {type === 'pdf' && '📄 Document Viewer'}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily,
                        fontSize: 13,
                        color: 'rgba(255,255,255,0.75)',
                        fontWeight: weights.regular,
                        maxWidth: 300,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {modalItem.title}
                    </Typography>
                  </Box>

                  <Box sx={gifts.modalActions}>
                    <Button
                      size="small"
                      startIcon={<DownloadIcon sx={{ fontSize: 16 }} />}
                      onClick={async () => {
                        const url = `${process.env.NEXT_PUBLIC_API_URL}/${modalItem.file_url}`;
                        const response = await fetch(url);
                        const blob = await response.blob();
                        const blobUrl = window.URL.createObjectURL(blob);
                        const link = document.createElement('a');
                        link.href = blobUrl;
                        link.download = modalItem.title || 'download';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        window.URL.revokeObjectURL(blobUrl);
                      }}
                      sx={{
                        fontFamily,
                        color: colors.textLight,
                        bgcolor: colors.gifts.actionBackground,
                        borderRadius: '8px',
                        fontSize: 12,
                        textTransform: 'none',
                        px: 1.5,
                        py: 0.5,
                        '&:hover': { bgcolor: colors.gifts.actionHoverBackground },
                      }}
                    >
                      Download
                    </Button>

                    <IconButton
                      onClick={() => setModalItem(null)}
                      size="small"
                      sx={{
                        color: colors.textLight,
                        bgcolor: colors.gifts.closeBackground,
                        borderRadius: '8px',
                        p: 0.5,
                        '&:hover': { bgcolor: colors.gifts.closeHoverBackground, transform: 'scale(1.05)' },
                        transition: 'all 0.2s',
                      }}
                    >
                      ✕
                    </IconButton>
                  </Box>
                </Box>

                <Box sx={gifts.modalBody}>
                  {type === 'video' && (
                    <video
                      src={`${process.env.NEXT_PUBLIC_API_URL}/${modalItem.file_url}`}
                      controls
                      autoPlay
                      style={{ width: '100%', display: 'block', maxHeight: '70vh', outline: 'none' }}
                    />
                  )}

                  {type === 'audio' && (
                    <Box sx={gifts.audioContainer}>
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
                      >
                        <Box
                          sx={{
                            ...gifts.audioThumbnail,
                            border: '4px solid',
                            borderColor: titleColor,
                            boxShadow: `0 0 30px ${titleColor}55`,
                          }}
                        >
                          {modalItem.thumbnail ? (
                            <img
                              src={`${process.env.NEXT_PUBLIC_API_URL}/${modalItem.thumbnail}`}
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                              alt={modalItem.title}
                            />
                          ) : (
                            <Typography sx={{ fontSize: 48 }}>🎵</Typography>
                          )}
                        </Box>
                      </motion.div>

                      <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.25 }}>
                        <Box sx={gifts.audioInfo}>
                          <Typography sx={{ ...gifts.audioTitle, fontFamily }}>{modalItem.title}</Typography>
                          <Typography sx={{ ...gifts.audioDescription, fontFamily }}>{modalItem.description}</Typography>
                        </Box>
                      </motion.div>

                      <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.35 }}
                        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                      >
                        <Box
                          component="audio"
                          src={`${process.env.NEXT_PUBLIC_API_URL}/${modalItem.file_url}`}
                          controls
                          autoPlay
                          sx={{ ...gifts.audioPlayer, accentColor: titleColor, outline: 'none' }}
                        />
                      </motion.div>
                    </Box>
                  )}

                  {type === 'pdf' && (
                    <Box sx={gifts.pdfContainer}>
                      <iframe
                        src={`${process.env.NEXT_PUBLIC_API_URL}/${modalItem.file_url}`}
                        width="100%"
                        height="100%"
                        style={{ border: 'none', display: 'block' }}
                        title={modalItem.title}
                      />
                    </Box>
                  )}
                </Box>

                <Box
                  sx={{
                    px: 2.5,
                    py: 1.5,
                    bgcolor: colors.gifts.modalBackground,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography sx={{ fontFamily, fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: weights.regular }}>
                    Click outside or press ✕ to close
                  </Typography>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: titleColor,
                      boxShadow: `0 0 8px ${titleColor}`,
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
};

export default function FreeStuffpage() {
  const theme = useTheme();
  const fontFamily = typography.fonts.body;
  const weights = typography.weights;

  const [activeTab, setActiveTab] = useState('all');
  const [freeStuffData, setFreeStuffData] = useState({ videos: [], pdfs: [], audios: [] });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchFreeStuff = async () => {
      try {
        const res = await axiosInstance.get('/frontendApis/getFreeStuff', {
          params: { size: 100, page: 0, search: '' },
        });

        const allData = res?.data?.data || [];

        const videos = allData.filter((item) => item.type === 'video').sort((a, b) => a.index_position - b.index_position);
        const pdfs = allData.filter((item) => item.type === 'pdf').sort((a, b) => a.index_position - b.index_position);
        const audios = allData.filter((item) => item.type === 'audio').sort((a, b) => a.index_position - b.index_position);

        const uniqueCategories = [...new Map(allData.map((item) => [item.category_id._id, item.category_id])).values()].reverse();

        setFreeStuffData({ videos, pdfs, audios });
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('API error:', error);
      }
    };
    fetchFreeStuff();
  }, []);

  // Active-tab gradient now driven by the theme's shared category gradients
  const activeTabGradient = colors.gifts.categoryGradients.videos;

  return (
    <Section>
      <SiteContainer sx={{ pt: 1, pb: 0 }}>
        {/* Tab Navigation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <Box display="flex" gap={1.5} alignItems="center" justifyContent="center" sx={{ mb: 0.5, mt: { xs: 0, md: 1 }, px: 2 }}>
            {tabs.map((tab) => (
              <motion.div key={tab.id} variants={scaleIn}>
                <Button
                  onClick={() => setActiveTab(tab.id)}
                  sx={{
                    fontSize: { xs: 10, sm: 11, md: 16 },
                    fontWeight: weights.medium,
                    fontFamily,
                    height: { xs: 36, sm: 40, md: 44 },
                    minWidth: { xs: 60, sm: 80, md: 130 },
                    px: { xs: 1.5, sm: 2, md: 2.5 },
                    py: 0,
                    flexShrink: 0,
                    cursor: 'pointer',
                    borderRadius: '10px',
                    textTransform: 'none',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.25s ease',
                    ...(activeTab === tab.id
                      ? {
                        background: "linear-gradient(100.86deg, #61E7DC 0%, #15AFA2 100%)", // 👈 New Gradient
                        color: colors.textLight,
                        fontWeight: weights.bold,
                        border: "2px solid #FFFFFF", // 👈 White Border
                        boxShadow: '0px 2px 8px rgba(119, 119, 119, 0.35)',
                      }
                      : {
                        background: colors.background,
                        color: colors.textSecondary,
                        border: `1.5px solid ${colors.border}`,
                        boxShadow: '0px 1px 4px rgba(0,0,0,0.06)',
                        '&:hover': {
                          background: "linear-gradient(100.86deg, #61E7DC 0%, #15AFA2 100%)", // 👈 New Gradient for Hover
                          color: colors.textLight,
                          fontWeight: weights.bold,
                          border: "2px solid #FFFFFF", // 👈 White Border for Hover
                          boxShadow: '0px 2px 8px rgba(119, 119, 119, 0.35)',
                        },
                      }),
                  }}
                >
                  {tab.label}
                </Button>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Conditionally render sections based on active tab */}
        <AnimatePresence mode="wait">
          {(activeTab === 'all' || activeTab === 'videos') && (
            <motion.div key="videos-section" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
              <Box sx={{ borderBottom: `1px solid ${colors.gifts.cardBorder}` }}>
                <ResourceSection type="video" data={freeStuffData.videos} categories={categories} />
              </Box>
            </motion.div>
          )}

          {(activeTab === 'all' || activeTab === 'pdfs') && (
            <motion.div key="pdfs-section" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
              <Box sx={{ borderBottom: `1px solid ${colors.gifts.cardBorder}` }}>
                <ResourceSection type="pdf" data={freeStuffData.pdfs} categories={categories} />
              </Box>
            </motion.div>
          )}

          {(activeTab === 'all' || activeTab === 'audios') && (
            <motion.div key="audios-section" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
              <Box>
                <ResourceSection type="audio" data={freeStuffData.audios} categories={categories} />
                {/* Single line strictly after the audios section */}
                <Box
                  component="hr"
                  sx={{
                    border: 'none',borderTop: `1px solid ${colors.gifts.cardBorder}`,mt: 4,mb: 0}}/>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </SiteContainer>
    </Section>
  );
}