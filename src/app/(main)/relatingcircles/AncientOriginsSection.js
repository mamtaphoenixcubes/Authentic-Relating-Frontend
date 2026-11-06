'use client';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import axiosInstance from '@/lib/axios';

import Section from '../../_components/common/Section';
import SiteContainer from '../../_components/common/SiteContainer';
// import SectionHeader from '@/components/SectionHeader'; // optional — see note below

export default function AncientOriginsSection() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

  // ✅ read from theme.custom.ancientOrigins
  const styles = theme?.custom?.ancientOrigins ?? {};

  const [circles, setCircles] = useState([]);
  const [xsGroupIndex, setXsGroupIndex] = useState(0);

  // ── fetch ──────────────────────────────────────────────────
  useEffect(() => {
    const fetchCircles = async () => {
      try {
        const res = await axiosInstance.get(
          '/frontendApis/getAllDetailsRelatingCircle',
          { params: { size: 20, page: 0, search: '' } }
        );
        const apiCircles = (res?.data?.detailsOfRelatingCircles || []).sort(
          (a, b) => a.index_position - b.index_position
        );
        setCircles(apiCircles);
      } catch (error) {
        console.error('API error:', error);
      }
    };
    fetchCircles();
  }, []);

  // ── xs grouping ────────────────────────────────────────────
  const xsGroups = [];
  for (let i = 0; i < circles.length; i += 2) {
    xsGroups.push(circles.slice(i, i + 2));
  }

  useEffect(() => {
    if (!isXs || xsGroups.length === 0) return;
    const timer = setInterval(() => {
      setXsGroupIndex((prev) => (prev + 1) % xsGroups.length);
    }, 2700);
    return () => clearInterval(timer);
  }, [isXs, xsGroups.length]);

  // ── split into rows ────────────────────────────────────────
  const rowConfig = styles.rowConfig || [4, 3, 4];
  const borderColors = styles.borderColors || [];
  const borderFallback = styles.borderFallback || '#53D2DB';

  const rows = [];
  let idx = 0;
  for (const count of rowConfig) {
    rows.push(circles.slice(idx, idx + count));
    idx += count;
  }

  // Guard against theme not loaded yet
  if (!styles.rowsWrapper) return null;

  return (
    <Section sx={styles.container}>
      <SiteContainer>
        {/* ── HEADER BANNER ─────────────────────────────────────────
            SectionHeader primitive doesn't support a gradient banner,
            so we keep the banner Box but move the title text into it.
            If you'd rather use SectionHeader, see the commented block
            below. */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={styles.headerWrapper}>
            <Typography sx={styles.headerTitle}>
              Ancient Origins: A Universal Human Tradition
            </Typography>
          </Box>
        </motion.div>

        {/* Optional: if you want SectionHeader semantics, swap the block above for:
            <SectionHeader
              title="Ancient Origins: A Universal Human Tradition"
              align="center"
              sx={{
                ...styles.headerWrapper,
                mb: 0,
                '& .MuiTypography-root': styles.headerTitle,
              }}
            />
        */}

        {/* ── MAIN CARD ─────────────────────────────────────────── */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <Box sx={styles.card}>
            <Typography sx={styles.cardTitle}>
              Circles have long been central to <br /> human connection:
            </Typography>

            {/* SM+ oscillating rows */}
            <Box sx={styles.rowsWrapper}>
              {rows.map((rowItems, rowIndex) => (
                <motion.div
                  key={rowIndex}
                  animate={
                    rowIndex % 2 === 0
                      ? styles.rowMotion.animateEven
                      : styles.rowMotion.animateOdd
                  }
                  transition={styles.rowMotion.transition}
                >
                  <Box sx={styles.rowItems}>
                    {rowItems.map((item, itemIndex) => {
                      const globalIndex =
                        rowConfig
                          .slice(0, rowIndex)
                          .reduce((a, b) => a + b, 0) + itemIndex;
                      const borderColor =
                        borderColors[globalIndex] || borderFallback;

                      return (
                        <motion.div
                          key={globalIndex}
                          initial={{ scale: 0.7, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: globalIndex * 0.08,
                          }}
                        >
                          <Box
                            sx={{
                              ...styles.circle,
                              border: `5px solid ${borderColor}`,
                            }}
                          >
                            <Box sx={styles.circleContent}>
                              <Typography sx={styles.circleTitle}>
                                {item.title}
                              </Typography>
                              <Typography sx={styles.circleDescription}>
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: item.description,
                                  }}
                                />
                              </Typography>
                            </Box>
                          </Box>
                        </motion.div>
                      );
                    })}
                  </Box>
                </motion.div>
              ))}
            </Box>

            {/* XS carousel */}
            <Box sx={styles.xsCarouselWrapper}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={xsGroupIndex}
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 200, opacity: 0 }}
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                  style={styles.xsCarouselSlide}
                >
                  {xsGroups[xsGroupIndex]?.map((item, i) => {
                    const globalIndex = xsGroupIndex * 2 + i;
                    const borderColor =
                      borderColors[globalIndex] || borderFallback;
                    return (
                      <Box
                        key={i}
                        sx={{
                          ...styles.xsCircle,
                          border: `5px solid ${borderColor}`,
                        }}
                      >
                        <Box sx={{ textAlign: 'left' }}>
                          <Typography sx={styles.xsCircleTitle}>
                            {item.title}
                          </Typography>
                          <Typography sx={styles.xsCircleDescription}>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            />
                          </Typography>
                        </Box>
                      </Box>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </Box>

            {/* XS dots */}
            <Box sx={styles.dotsWrapper}>
              {xsGroups.map((_, i) => (
                <Box
                  key={i}
                  onClick={() => setXsGroupIndex(i)}
                  sx={styles.dot(i === xsGroupIndex)}
                />
              ))}
            </Box>
          </Box>
        </motion.div>
      </SiteContainer>
    </Section>
  );
}