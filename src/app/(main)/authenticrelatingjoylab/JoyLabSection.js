'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

import axiosInstance from '@/lib/axios';

import Section from '@/app/_components/common/Section';
import SiteContainer from '@/app/_components/common/SiteContainer';
import SectionHeader from '@/app/_components/common/SectionHeader';
import Card from '@/app/_components/common/Card';

const MotionBox = motion(Box);

export default function JoyLabSection() {
  const theme = useTheme();
  const s = theme.custom.joyLab;

  const [viewMode, setViewMode] = useState('list');
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchJoyLab = async () => {
      try {
        const res = await axiosInstance.get('/frontendApis/getAllJoyLab', {
          params: { size: 20, page: 0, search: '' },
        });

        setSections(
          res.data.list
            .sort((a, b) => a.index_position - b.index_position)
            .map((item) => ({
              ...item,
              gradient: `linear-gradient(135deg, ${item.gradientStart}, ${item.gradientEnd})`,
            }))
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchJoyLab();
  }, []);

  const renderDescription = (html) => {
    if (!html) return null;

    const temp = document.createElement('div');
    temp.innerHTML = html;

    const paragraph = temp.querySelector('p')?.textContent;
    const bullets = [...temp.querySelectorAll('li')].map((li) => li.textContent);

    return (
      <Stack spacing={s.descStackSpacing}>
        {paragraph && <Typography sx={s.paragraph}>{paragraph}</Typography>}

        {bullets.map((text, i) => (
          <Stack
            key={i}
            direction="row"
            spacing={s.bulletRowSpacing}
            alignItems="flex-start"
          >
            <FavoriteBorderIcon sx={s.bulletIcon} />
            <Typography sx={s.bulletText}>{text}</Typography>
          </Stack>
        ))}
      </Stack>
    );
  };

  return (
    // 👇 Added pb override to reduce the bottom gap
    <Section sx={{ mt: 0, pt: 0, pb: { xs: 2, md: 0, lg: 2 } }}>
      <SiteContainer>
        <Box sx={s.container}>
          {/* HEADING */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            sx={s.headingWrapper}
          >
            <SectionHeader
              align="center"
              title="What Happens in the Joy Lab?"
              subtitle="At the Authentic Relating Joy Lab, we blend the best elements of games, storytelling, movement, and relational alchemy to create an unforgettable experience. Each session includes a mix of fun, depth, and playfulness, ensuring that everyone—whether introvert or extrovert, playful or contemplative—feels at home."
              sx={s.headingHeaderSx}
            />
          </MotionBox>

          {/* CONTENT - LIST VIEW */}
          {viewMode === 'list' && (
            <Box>
              {/* ---------- MOBILE ---------- */}
              <Box sx={s.mobileList}>
                {sections.map((section, index) => (
                  <Box key={index} sx={s.mobileItem}>
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <Box sx={s.mobileImageBox}>
                        <Box
                          component="img"
                          src={`${process.env.NEXT_PUBLIC_API_URL}/${section.image}`}
                          alt={section.title}
                          sx={s.image}
                        />
                      </Box>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <Card
                        sx={{
                          ...s.mobileCard,
                          background: section.gradient,
                        }}
                      >
                        <Typography sx={s.cardTitleMobile}>
                          What Happens in the Joy Lab?
                        </Typography>

                        {renderDescription(section.description)}
                      </Card>
                    </motion.div>
                  </Box>
                ))}
              </Box>

              {/* ---------- DESKTOP / TABLET ---------- */}
              <Box sx={s.desktopList}>
                {sections.map((section, index) => {
                  const isEven = index % 2 === 0;

                  return (
                    <Box key={index} sx={s.desktopRow(isEven)}>
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -120 : 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        style={{ width: '100%', height: '100%' }}
                      >
                        <Box sx={s.desktopImageBox(isEven)}>
                          <Box
                            component="img"
                            src={`${process.env.NEXT_PUBLIC_API_URL}/${section.image}`}
                            alt={section.title}
                            sx={s.image}
                          />
                        </Box>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 0, scale: 0.95 }}
                        whileInView={{
                          opacity: 1,
                          x: isEven ? '130%' : '-130%',
                          scale: 1,
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.25,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        style={s.floatingWrapper(isEven)}
                      >
                        <Card
                          sx={{
                            ...s.desktopCard,
                            background: section.gradient,
                          }}
                        >
                          <Box sx={s.desktopCardScroll}>
                            <Typography sx={s.cardTitleDesktop}>
                              {section.title}
                            </Typography>

                            {renderDescription(section.description)}
                          </Box>
                        </Card>
                      </motion.div>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          )}
        </Box>
      </SiteContainer>
    </Section>
  );
}