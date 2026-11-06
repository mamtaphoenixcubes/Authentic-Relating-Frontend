'use client';

import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import SiteContainer from '@/app/_components/common/SiteContainer';

/* ---------- MOTION ---------- */
const MotionTypography =
  typeof motion.create === 'function'
    ? motion.create(Typography)
    : motion(Typography);

/* ---------- SHARED TEXT STYLES ---------- */
const BODY_SX = {
  fontFamily: 'var(--font-redhat)',
  fontWeight: 400,
  fontSize: { xs: '14px', md: '16px' },
  lineHeight: { xs: 1.7, md: 1.8 },
  letterSpacing: 0,
  color: '#6B7280',
};

/* ---------- PAGE ---------- */
export default function CancellationPolicyPage() {
  return (
    <SiteContainer sx={{ py: 6 }}>
      {/* TITLE */}
      <MotionTypography
        sx={{
          fontFamily: 'var(--font-redhat)',
          fontWeight: 700,
          fontSize: { xs: '28px', md: '36px', lg: '36px' },
          lineHeight: 1.15,
          letterSpacing: 0,
        }}
        color="#FF8A7A"
        mb={1}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Authentic Relating Programmes, Workshops &amp; Events
      </MotionTypography>

      {/* INTRO */}
      <BodyText mt={1} delay={0.1}>
        At AuthenticRelating.com, we understand that life can be unpredictable.
        Our cancellation policy is designed to honor both your commitment and
        the time and energy invested in organizing our offerings.
      </BodyText>

      <SectionTitle title="Cancellations & Refunds" />

      <Bullet text="7+ Days Before Start Date" />
      <SubText text="Full refund minus a small admin fee (5–10%), or full credit towards a future offering." />

      <Bullet text="Within 3–6 Days of Start Date" />
      <SubText text="50% refund or full credit toward another program (must be used within 2 months)." />

      <Bullet text="Less than 72 Hours Before Start Date" />
      <SubText text="No refunds. A 50% credit may be offered in exceptional cases upon written request." />

      <Bullet text="No Shows or Partial Attendance" />
      <SubText text="No refund or credit." />

      <SectionTitle title="How to Cancel" />

      <BodyText mb={4}>
        Please email us at support@authenticrelating.com with your name,
        program name, and reason for cancellation.
      </BodyText>

      <SectionTitle title="Retreats & Multi-Day Immersions" />

      <BodyText mb={4}>
        Due to the nature of our immersive experiences, a non-refundable
        deposit is required upon registration. Refunds for these offerings are
        governed by separate cancellation schedules specific to the event.
      </BodyText>

      <SectionTitle title="Compassion Clause" />

      <BodyText mb={4}>
        We value humanity over policy. In cases of medical emergencies or
        extreme hardship, we will do our best to accommodate your situation.
        Please write to us directly.
      </BodyText>

      <SectionTitle title="Transfers & Substitutions" />

      <BodyText>
        Want to gift or transfer your spot to someone else? You’re welcome to
        do so up to{' '}
        <Box component="span" fontWeight={600} color="#374151">
          48 hours before
        </Box>{' '}
        the event. Please inform us in writing.
      </BodyText>

      <MotionTypography
        sx={{
          ...BODY_SX,
          fontSize: '15px',
          color: '#9CA3AF',
        }}
        mt={4}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        By registering for an offering on AuthenticRelating.com, you agree to
        these terms above.
      </MotionTypography>
    </SiteContainer>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function SectionTitle({ title }) {
  return (
    <MotionTypography
      sx={{
        fontFamily: 'var(--font-redhat)',
        fontWeight: 700,
        fontSize: { xs: '20px', md: '24px', lg: '26px' },
        lineHeight: 1.2,
        letterSpacing: 0,
      }}
      color="#FF8A7A"
      mt={4}
      mb={1}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {title}
    </MotionTypography>
  );
}

function Bullet({ text }) {
  return (
    <MotionTypography
      sx={{
        fontFamily: 'var(--font-redhat)',
        fontWeight: 600,
        fontSize: { xs: '16px' },
        lineHeight: 1.4,
        letterSpacing: 0,
      }}
      color="#374151"
      mt={2}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      • {text}
    </MotionTypography>
  );
}

function SubText({ text }) {
  return (
    <MotionTypography
      sx={{ ...BODY_SX }}
      ml={2}
      mt={0.5}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: 0.05 }}
    >
      {text}
    </MotionTypography>
  );
}

/* Generic animated body paragraph, reused above */
function BodyText({ children, mt = 0, mb = 0, delay = 0 }) {
  return (
    <MotionTypography
      sx={{ ...BODY_SX }}
      mt={mt}
      mb={mb}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </MotionTypography>
  );
}