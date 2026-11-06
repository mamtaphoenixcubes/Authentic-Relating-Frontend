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

// Import your components
import { AuthenticRelating } from '../_components/Home/AuthenticRelating';
import TenPrinciples from '../_components/Home/TenPrinciples';
import Language from '../_components/Home/Language';
import { AuthenticRelatingSection } from '../_components/Home/AuthenticRelatingSection';
import OurSignatureOfferings from '../_components/Home/OurSignatureOfferings';
import { EventsAndTestimonials } from '../_components/Home/EventsAndTestimonials';
import { ArticlesAndQuotes } from '../_components/Home/ArticlesAndQuotes';
import SectionCard from '../_components/Home/SectionCard';
import GiftsSection from '../_components/Home/GiftsSection';
import ClientTestimonial from '../_components/Home/ClientTestimonial';
import SiteContainer from '../_components/common/SiteContainer';
import Section from '../_components/common/Section';
import PodcastSection from '../_components/Home/Podcastsection';
import Hero from '../_components/Home/Hero';

export default function HomePage() {
  const theme = useTheme();

  const slides = [
    {
      image: '/HomeBg.png',
      title: 'Come as you are,',
      subtitle: 'be seen, be heard, be met, and belong.',
      author: '— Amitabha Bhatia',
    },
  ];

  // Get hero typography from theme
  const heroStyles = theme.custom?.hero?.content || {};
  const titleStyles = theme.typography?.hero?.title || {};
  const subtitleStyles = theme.typography?.hero?.subtitle || {};
  const authorStyles = theme.typography?.hero?.author || {};

  return (
    <main>
      {/* Hero Section - Using Theme Values */}

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
      </motion.section>
      {/* Other Sections with faster animations */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <AuthenticRelating />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <TenPrinciples />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Language />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <AuthenticRelatingSection />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <OurSignatureOfferings />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <SectionCard />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <EventsAndTestimonials />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <GiftsSection />
      </motion.section>


      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <ClientTestimonial />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <PodcastSection />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <ArticlesAndQuotes />
      </motion.section>
    </main>
  );
}