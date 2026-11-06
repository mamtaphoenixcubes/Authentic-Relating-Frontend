'use client';

import { motion } from 'framer-motion'; 
import { Box, Typography, Container } from '@mui/material';
import { AuthenticRelating } from '../_components/Home/AuthenticRelating';
import TenPrinciples from '../_components/Home/TenPrinciples';
import Language from '../_components/Home/Language';
import { AuthenticRelatingSection } from '../_components/Home/AuthenticRelatingSection';
import OurSignatureOfferings from '../_components/Home/OurSignatureOfferings';
import { EventsAndTestimonials } from '../_components/Home/EventsAndTestimonials';
import { ArticlesAndQuotes } from '../_components/Home/ArticlesAndQuotes';
import SectionCard from '../_components/Home/SectionCard';



export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      className="relative w-full min-h-screen overflow-hidden">

        {/* Responsive Background */}
        <div className="absolute inset-0 w-full h-full">

          {/* Mobile */}
          <div
            className="absolute inset-0 block md:hidden w-full h-screen bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/mobile-header.png')",
              backgroundPosition: "center top",
            }}
          />

          {/* Desktop */}
          <div
            className="absolute inset-0 hidden md:block w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/header.png')" }}
          />

        </div>

        {/* Gradient */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(180deg, rgba(41, 50, 31, 0.49) 0%, rgba(41, 50, 31, 0) 20.11%)",
          }}
        />

        {/* Content Container */}
        <div className="relative z-[2] container mx-auto h-screen">

          {/* Text Wrapper */}
          <div className="flex flex-col items-center pt-[180px]">

            {/* Inner container controls width */}
            <div className="w-full max-w-[900px]">

              {/* Quote */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="font-redhat italic font-medium text-white drop-shadow-lg text-center sm:text-center md:text-center text-[13px] sm:text-[18px] md:text-[26px] lg:text-[38px] xl:text-[40px] 2xl:text-[40px] leading-[1.25]"
              >
                "A space where we face life — together, honestly"
              </motion.h1>

              {/* Signature aligned to quote width */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="font-redhat italic text-white/90 drop-shadow-md mt-2 sm:mt-3 md:mt-4 text-right text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]"
              >
                — Amitabha Bhatia
              </motion.p>

            </div>

          </div>

        </div>


      </motion.section>



      {/* Other Sections with animations */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <AuthenticRelating />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <TenPrinciples />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Language />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <AuthenticRelatingSection />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <OurSignatureOfferings />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <SectionCard />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <EventsAndTestimonials />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <ArticlesAndQuotes />
      </motion.section>
    </main>
  );
}
