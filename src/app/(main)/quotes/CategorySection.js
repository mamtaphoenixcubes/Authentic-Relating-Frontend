'use client';

import {
  Box,
  Typography,
  IconButton,
  Stack,
  Chip,
  alpha,
  useMediaQuery,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import axiosInstance from '@/lib/axios';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import Card from '../../_components/common/Card';
import SiteContainer from '../../_components/common/SiteContainer';

/* ------------------------------------------------------------------ */
/*  HELPERS                                                            */
/* ------------------------------------------------------------------ */

const getItemsPerPage = (width) => {
  if (width < 600) return 2;
  if (width < 900) return 3;
  return 4;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

/* ------------------------------------------------------------------ */
/*  CATEGORY SECTION                                                   */
/* ------------------------------------------------------------------ */

function CategorySection({
  title,
  description,
  cards,
  titleColor,
  cardBackground,
  index,
}) {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(true);

  const getScrollAmount = () => {
    if (typeof window === 'undefined') return 300;
    const width = window.innerWidth;
    if (width < 600) return 200;
    if (width < 900) return 250;
    if (width < 1200) return 300;
    return 350;
  };

  const updateArrowVisibility = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } =
      scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
  }, []);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const amount = getScrollAmount();
    container.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
    setTimeout(updateArrowVisibility, 350);
  };

  useEffect(() => {
    updateArrowVisibility();
    const handleResize = () => updateArrowVisibility();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateArrowVisibility]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const isReverse = index % 2 !== 0;

    const interval = setInterval(() => {
      if (isHovered) return;
      if (typeof document !== 'undefined' && document.hidden) return;
      if (!isInView) return;

      const amount = getScrollAmount();

      if (isReverse) {
        if (container.scrollLeft <= 0) {
          container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: -amount, behavior: 'smooth' });
        }
      } else {
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 10
        ) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: amount, behavior: 'smooth' });
        }
      }

      setTimeout(updateArrowVisibility, 400);
    }, 2500);

    return () => clearInterval(interval);
  }, [index, isHovered, isInView, updateArrowVisibility]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
    >
      <Box
        sx={{
          maxWidth: 1800,
          mx: 'auto',
          px: { xs: 1, sm: 2 },
          py: { xs: 1, sm: 2 },
        }}
      >
        {/* HEADER */}
        <motion.div variants={fadeInUp}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              sx={{
                // 👇 Removed var(--font-redhat) and applied the direct font family
                fontFamily: '"Red Hat Display", sans-serif',
                fontWeight: 700,
                fontSize: {
                  xs: '24px',
                  sm: '28px',
                  md: '34px',
                  lg: '42px',
                  xl: '50px',
                },
                lineHeight: '100%',
                letterSpacing: '-0.01em',
                color: titleColor,
                mb: { xs: 0.5, sm: 1 },
              }}
            >
              {title}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Typography
              sx={{
                fontFamily: '"Red Hat Display", sans-serif',
                fontWeight: 500,
                fontSize: {
                  xs: '13px',
                  sm: '14px',
                  md: '15px',
                  lg: '16px',
                  xl: '17px',
                },
                lineHeight: { xs: '150%', sm: '155%', md: '160%' },
                letterSpacing: 0,
                color: '#444444',
                maxWidth: {
                  xs: 300,
                  sm: 500,
                  md: 900,
                  lg: 900,
                  xl: 1000,
                },
                mb: { xs: 2, sm: 3 },
              }}
            >
              {description}
            </Typography>
          </motion.div>
        </motion.div>

        {/* CONTENT */}
        <Box sx={{ position: 'relative' }}>
          {/* ARROWS */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: { xs: 'none', sm: 'flex' },
              position: 'absolute',
              right: 0,
              top: { xs: -40, sm: -45 },
              zIndex: 10,
            }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <IconButton
                size="small"
                aria-label={`Scroll ${title} left`}
                onClick={() => scroll('left')}
                disabled={!showLeftArrow}
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '10px',
                  bgcolor: showLeftArrow ? titleColor : alpha(titleColor, 0.2),
                  color: '#fff',
                  boxShadow: '0px 2px 8px rgba(0,0,0,0.15)',
                  border: '2px solid #FFFFFF',
                  opacity: showLeftArrow ? 1 : 0.5,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor: titleColor,
                    boxShadow: '0px 4px 12px rgba(0,0,0,0.2)',
                  },
                  '&.Mui-disabled': {
                    bgcolor: alpha(titleColor, 0.2),
                    color: '#fff',
                    opacity: 0.5,
                  },
                }}
              >
                <ChevronLeftIcon fontSize="small" />
              </IconButton>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <IconButton
                size="small"
                aria-label={`Scroll ${title} right`}
                onClick={() => scroll('right')}
                disabled={!showRightArrow}
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '10px',
                  bgcolor: showRightArrow ? titleColor : alpha(titleColor, 0.2),
                  color: '#fff',
                  boxShadow: '0px 2px 8px rgba(0,0,0,0.15)',
                  border: '2px solid #FFFFFF',
                  opacity: showRightArrow ? 1 : 0.5,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor: titleColor,
                    boxShadow: '0px 4px 12px rgba(0,0,0,0.2)',
                  },
                  '&.Mui-disabled': {
                    bgcolor: alpha(titleColor, 0.2),
                    color: '#fff',
                    opacity: 0.5,
                  },
                }}
              >
                <ChevronRightIcon fontSize="small" />
              </IconButton>
            </motion.div>
          </Stack>

          {/* SCROLLABLE CARDS */}
          <motion.div variants={staggerContainer}>
            <Box
              ref={scrollContainerRef}
              onScroll={updateArrowVisibility}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchStart={() => setIsHovered(true)}
              onTouchEnd={() => setIsHovered(false)}
              sx={{
                display: 'flex',
                gap: { xs: 1.5, sm: 2, md: 2 },
                overflowX: 'auto',
                pt: 1,
                pb: 1,
                pr: { xs: 2, sm: 3, md: 4 },
                scrollBehavior: 'smooth',
                scrollSnapType: 'x proximity',
                '&::-webkit-scrollbar': { display: 'none' },
              }}
            >
              {cards.map((quote, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  whileHover="hover"
                  whileTap="tap"
                  custom={i}
                  transition={{ delay: i * 0.05 }}
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <Card
                    sx={{
                      minWidth: { xs: 200, sm: 200, md: 220, lg: 320 },
                      width: { xs: 180, sm: 250, md: 280, lg: 300 },
                      height: { xs: 220, sm: 220, md: 210, lg: 150 },
                      borderRadius: { xs: 1, sm: 2 },
                      p: { xs: 1.5, sm: 2 },
                      color: '#fff',
                      background: cardBackground,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      lineHeight: { xs: 1.4, sm: 1.5 },
                      fontStyle: 'italic',
                      flexShrink: 0,
                      boxSizing: 'border-box',
                      border: '1px solid #fff',
                      overflow: 'hidden',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      willChange: 'transform',
                      position: 'relative',
                    }}
                  >
                    <FormatQuoteIcon
                      sx={{
                        position: 'absolute',
                        top: 10,
                        left: 12,
                        fontSize: 40,
                        opacity: 0.2,
                        transform: 'rotate(180deg)',
                      }}
                    />
                    <FormatQuoteIcon
                      sx={{
                        position: 'absolute',
                        bottom: 10,
                        right: 12,
                        fontSize: 40,
                        opacity: 0.2,
                      }}
                    />

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <Typography
                        sx={{
                          fontFamily: '"Red Hat Display", sans-serif',
                          fontSize: { xs: 14, sm: 16, md: 15 },
                          fontWeight: 700,
                          maxHeight: '100%',
                          textAlign: 'center',
                        }}
                      >
                        {quote}
                      </Typography>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function AllCategories() {
  const [mounted, setMounted] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [page, setPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState([]);

  const allCategoryLabels = ['All', ...categories.map((cat) => cat.title)];
  const isMobile = useMediaQuery('(max-width:600px)');

  /* ---- fetch quotes ---- */
  useEffect(() => {
    const controller = new AbortController();

    const fetchQuotes = async () => {
      try {
        const res = await axiosInstance.get('/frontendApis/getAllQuotes', {
          params: { size: 20, page: 0, search: '' },
          signal: controller.signal,
        });

        const apiData = (res?.data?.getAllQuotes || []).slice().reverse();

        const mappedCategories = apiData.map((item) => ({
          id: item._id,
          title: item.title,
          description: item.description,
          cards: item.quotes,
          titleColor: item.gradientEnd,
          cardBackground: `linear-gradient(135deg, ${item.gradientStart}, ${item.gradientEnd})`,
        }));

        setCategories(mappedCategories);
      } catch (error) {
        if (error.name !== 'CanceledError' && error.code !== 'ERR_CANCELED') {
          console.error('Quotes API error:', error);
        }
      }
    };

    fetchQuotes();
    return () => controller.abort();
  }, []);

  /* ---- mount + resize ---- */
  useEffect(() => {
    setMounted(true);

    const updateItemsPerPage = () => {
      setItemsPerPage(getItemsPerPage(window.innerWidth));
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const maxPage = Math.max(
    0,
    Math.ceil(allCategoryLabels.length / itemsPerPage) - 1
  );

  const visibleCategories = allCategoryLabels.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  /* ---- chip click ---- */
  const handleChipClick = (label) => {
    setSelectedCategory(label);

    requestAnimationFrame(() => {
      if (label === 'All') {
        const container = document.getElementById('all-categories-top');
        if (container) {
          container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }
      const element = document.getElementById(`category-${label}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  /*
   * IMPORTANT FIX for:
   *   "The final argument passed to useEffect changed size between renders."
   *
   * The previous code used a separate useEffect with `[maxPage, page]`,
   * but that effect was declared BEFORE the `if (!mounted) return ...`
   * early return — which meant on the FIRST render (mounted=false) React
   * never registered the effect, then on subsequent renders it did.
   * Because hooks must ALWAYS run in the same order & count, this broke
   * React's dependency tracking.
   *
   * We fix it by:
   *   1. Moving ALL hooks ABOVE the early return.
   *   2. Removing the standalone clamp effect and inlining the clamp
   *      into the page-change handlers.
   */
  const goToPage = (next) => {
    setPage((prev) => {
      const target = typeof next === 'function' ? next(prev) : next;
      return Math.min(Math.max(target, 0), maxPage);
    });
  };

  const chipVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };

  /* ---- SSR-safe skeleton ---- */
  if (!mounted) {
    return (
      <SiteContainer sx={{ py: { xs: 3, sm: 4 } }}>
        <Stack
          direction="row"
          spacing={1.25}
          alignItems="center"
          justifyContent="center"
          mb={{ xs: 2, md: 3 }}
          sx={{ width: '100%', position: 'relative' }}
        >
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              mx: { xs: 5, sm: 6 },
            }}
          >
            <Stack direction="row" spacing={1}>
              {allCategoryLabels.slice(0, 4).map((label) => (
                <Chip
                  key={label}
                  label={label}
                  color="default"
                  variant="outlined"
                  sx={{
                    fontSize: { xs: 12, sm: 13 },
                    px: 1.5,
                    py: 0.5,
                    flexShrink: 0,
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Stack>

        {categories.slice(0, 1).map((category) => (
          <Box key={category.id} sx={{ mb: 5 }}>
            <Typography
              fontSize={{ xs: 20, sm: 22, md: 34, lg: 40 }}
              fontWeight={600}
              color={category.titleColor}
              mb={1}
            >
              {category.title}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto' }}>
              {category.cards.slice(0, 3).map((quote, i) => (
                <Card
                  key={i}
                  sx={{ minWidth: 200, height: 100, flexShrink: 0 }}
                />
              ))}
            </Box>
          </Box>
        ))}
      </SiteContainer>
    );
  }

  /* ---- chips with mobile fallback (no undefined labels) ---- */
  const mobileLabels =
    categories.length > 0 && categories[page]?.title
      ? [categories[page].title]
      : visibleCategories.slice(0, 1);

  const chipsToRender = isMobile ? mobileLabels : visibleCategories;

  return (
    <SiteContainer maxWidth="xl">
      <div id="all-categories-top" />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            my={{ xs: 3, md: 10 }}
            sx={{ width: '100%' }}
          >
            {/* LEFT ARROW */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                size="small"
                aria-label="Previous category page"
                onClick={() => goToPage((p) => Math.max(p - 1, 0))}
                disabled={page === 0}
                sx={{
                  color: page === 0 ? '#bbb' : '#087EDF',
                  '&:hover': { bgcolor: 'transparent' },
                  '&.Mui-disabled': { color: '#bbb' },
                }}
              >
                <ChevronLeftIcon />
              </IconButton>
            </motion.div>

            <Box
              role="tablist"
              aria-label="Category filter"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                overflow: 'hidden',
                maxWidth: {
                  xs: '220px',
                  sm: '400px',
                  md: '600px',
                  lg: '900px',
                },
              }}
            >
              {/* Category Chips */}
              <Box
                sx={{
                  flex: 1,
                  minWidth: 0,
                  overflowX: 'auto',
                  overflowY: 'hidden',
                  scrollbarWidth: 'none',
                  '&::-webkit-scrollbar': {
                    display: 'none',
                  },
                }}
              >
                <Stack
                  direction="row"
                  spacing={1.5}
                  flexWrap="nowrap"
                  sx={{
                    width: 'max-content',
                    alignItems: 'center',
                    py: 0.5,
                    px: 0.25,
                  }}
                >
                  {chipsToRender.map((label, i) => {
                    const active = selectedCategory === label;

                    return (
                      <motion.div
                        key={label ?? `chip-${i}`}
                        custom={i}
                        variants={chipVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Chip
                          role="tab"
                          aria-selected={active}
                          label={label}
                          onClick={() => handleChipClick(label)}
                          variant="outlined"
                          sx={{
                            height: 40,
                            minWidth: 78,
                            px: 1.5,
                            flexShrink: 0,
                            cursor: 'pointer',
                            borderRadius: '8px',

                            backgroundColor: '#FFFFFF',
                            border: '1px solid #E5E7EB',
                            boxShadow: '0px 2px 5px rgba(0,0,0,0.04)',
                            color: '#333333',

                            transition: 'all 0.25s ease',

                            '& .MuiChip-label': {
                              fontFamily: '"Red Hat Display", sans-serif',
                              fontWeight: 500,
                              fontSize: '11px',
                              letterSpacing: 0,
                              padding: 5,
                              whiteSpace: 'nowrap',
                            },

                            // Hover
                            // HOVER
                            '&:hover': {
                              background: active
                                ? 'linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)'
                                : '#F5F9FF',
                              borderColor: active ? '#FFFFFF' : '#D5E5F7',
                              boxShadow: active
                                ? '0px 5px 12px rgba(8, 126, 223, 0.30)'
                                : '0px 4px 10px rgba(0, 0, 0, 0.14)',
                              transform: 'translateY(-2px)',
                            },

                            // ACTIVE
                            ...(active && {
                              background:
                                'linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%) !important',
                              color: '#FFFFFF !important',
                              border: '2px solid #FFFFFF',

                              // Increased active shadow
                              boxShadow: `
                              0px 3px 6px rgba(0, 0, 0, 0.18),
                              0px 5px 12px rgba(255, 255, 255, 0.84)
                                `,

                              '& .MuiChip-label': {
                                color: '#FFFFFF',
                                fontWeight: 600,
                              },
                            }),
                          }}
                        />
                      </motion.div>
                    );
                  })}
                </Stack>
              </Box>
            </Box>

            {/* RIGHT ARROW */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                size="small"
                aria-label="Next category page"
                onClick={() => goToPage((p) => Math.min(p + 1, maxPage))}
                disabled={page === maxPage}
                sx={{
                  color: page === maxPage ? '#bbb' : '#087EDF',
                  '&:hover': { bgcolor: 'transparent' },
                  '&.Mui-disabled': { color: '#bbb' },
                }}
              >
                <ChevronRightIcon />
              </IconButton>
            </motion.div>
          </Stack>
        </motion.div>

        <Box
          sx={{
            maxWidth: 1800,
            mx: 'auto',
            px: { xs: 1, sm: 2 },
          }}
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {(selectedCategory === 'All'
              ? categories
              : categories.filter((c) => c.title === selectedCategory)
            ).map((category, i) => (
              <div key={category.id} id={`category-${category.title}`}>
                <CategorySection
                  index={i}
                  title={category.title}
                  description={category.description}
                  cards={category.cards}
                  titleColor={category.titleColor}
                  cardBackground={category.cardBackground}
                />
              </div>
            ))}
          </motion.div>
        </Box>
      </motion.div>
    </SiteContainer>
  );
}