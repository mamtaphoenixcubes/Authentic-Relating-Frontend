'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import SiteContainer from '../common/SiteContainer';
import Section from '../common/Section';

export default function Hero() {
  const theme = useTheme();

  const slides = [
    {
      image: '/slider2.png',
      title: 'Come as you are,',
      subtitle: 'be seen, be heard, be met, and belong.',
      author: '— Amitabha Bhatia',
    },
  ];

  // Get hero typography from theme
  const titleStyles = theme.typography?.hero?.title || {};
  const subtitleStyles = theme.typography?.hero?.subtitle || {};
  const authorStyles = theme.typography?.hero?.author || {};

  return (
    <Section
      className="relative w-full overflow-hidden"
      sx={{ p: 0 }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        loop={true}
        speed={1200}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="heroSwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              className="relative w-full h-screen overflow-hidden"
              sx={{
                minHeight: { xs: '500px', sm: '600px', md: '100vh' },
              }}
            >
              {/* BACKGROUND IMAGE */}
              <Box
                component="img"
                src={slide.image}
                alt="Authentic Relating"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />

              {/* OVERLAY */}
              <Box
                className="absolute inset-0 z-[1]"
                sx={{
                  background: `
                    linear-gradient(
                      180deg,
                      rgba(29, 29, 29, 0) 0%,
                      rgba(29, 29, 29, 0.0272251) 73.56%,
                      rgba(29, 29, 29, 0.4) 91.83%
                    ),
                    linear-gradient(
                      199.78deg,
                      #FFFFFF 0%,
                      rgba(255, 255, 255, 0) 23.45%
                    )
                  `,
                }}
              />

              {/* CONTENT */}
              <Box className="relative z-[2] h-screen">
                <SiteContainer className="h-full">
                  <Box
                    className="flex flex-col items-start h-full"
                    sx={{
                      px: {
                        xs: 2,
                        sm: 5,
                        md: 4,
                        lg: 5,
                        xl: 5,
                      },
                      pt: {
                        xs: '110px',
                        sm: '110px',
                        md: '110px',
                        lg: '120px',
                        xl: '150px',
                      },
                    }}
                  >
                    <Box>
                      {/* HEADING */}
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Typography
                          component="h1"
                          sx={{
                            fontFamily:
                              titleStyles.fontFamily ||
                              '"Red Hat Display", sans-serif',
                            fontWeight: titleStyles.fontWeight || 900,
                            fontSize: {
                              xs: '22px',
                              sm: '28px',
                              md: '36px',
                              lg: '44px',
                              xl: '50px',
                            },
                            lineHeight: '100%',
                            color: '#ffffff',
                            textAlign: 'left',
                            maxWidth: {
                              xs: '280px',
                              sm: '400px',
                              md: '520px',
                              lg: '650px',
                              xl: '750px',
                            },
                            textShadow: '0 4px 12px rgba(0,0,0,0.25)',
                          }}
                        >
                          {slide.title}
                        </Typography>
                      </motion.div>

                      {/* SUBTITLE */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <Typography
                          component="p"
                          sx={{
                            fontFamily:
                              subtitleStyles.fontFamily ||
                              '"Red Hat Display", sans-serif',
                            fontWeight: subtitleStyles.fontWeight || 400,
                            fontSize: {
                              xs: '16px',
                              sm: '22px',
                              md: '28px',
                              lg: '34px',
                              xl: '39px',
                            },
                            lineHeight: '100%',
                            color: 'rgba(255,255,255,0.92)',
                            textAlign: 'left',
                            mt: { xs: 1, sm: 1, md: 1 },
                            maxWidth: {
                              xs: '300px',
                              sm: '450px',
                              md: '600px',
                              lg: '760px',
                              xl: '900px',
                            },
                            textShadow: '0 3px 10px rgba(0,0,0,0.22)',
                          }}
                        >
                          {slide.subtitle}
                        </Typography>
                      </motion.div>

                      {/* SIGNATURE */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <Typography
                          component="p"
                          sx={{
                            fontFamily:
                              authorStyles.fontFamily ||
                              '"Red Hat Display", sans-serif',
                            fontWeight: authorStyles.fontWeight || 400,
                            fontStyle: 'italic',
                            fontSize: {
                              xs: '12px',
                              sm: '14px',
                              md: '16px',
                              lg: '18px',
                              xl: '20px',
                            },
                            lineHeight: '120%',
                            color: 'rgba(255,255,255,0.92)',
                            textAlign: 'right',
                            mt: { xs: 2, sm: 3, md: 4 },
                            ml: {
                              xs: 2,
                              sm: 5,
                              md: 50,
                              lg: 70,
                              xl: 70,
                            },
                            textShadow: '0 3px 10px rgba(0,0,0,0.22)',
                          }}
                        >
                          {slide.author}
                        </Typography>
                      </motion.div>
                    </Box>
                  </Box>
                </SiteContainer>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
