'use client';

import { motion } from 'framer-motion';
import { Container } from '@mui/material';

import AdvancedTrainingSection from "./AdvancedTrainingSection";
import BecomeaCertified from "./BecomeaCertified";
import FacilitationHeader from "./FacilitationHeader";
import { FacilitationHero } from "./FacilitationHero";
import WhatisAuthentic from "./WhatisAuthentic";
import YouWillLearnSection from "./YouWillLearnSection";

export default function Facilitationpage() {
  return (
    <div className="pb-10 bg-[#ffff] min-h-screen">
      <FacilitationHero />
      <FacilitationHeader />
      <WhatisAuthentic />
      <BecomeaCertified />
      <YouWillLearnSection />
      <AdvancedTrainingSection />

    </div>
  );
}