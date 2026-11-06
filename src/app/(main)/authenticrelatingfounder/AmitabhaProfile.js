'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

// -----------------------------------------------------------
// Shared viewport — triggers when element is ~20% visible
// -----------------------------------------------------------
const viewportConfig = {
  once: true,
  amount: 0.2,
  margin: '0px 0px -60px 0px',
};

// -----------------------------------------------------------
// Motion variants — one unique style per paragraph
// -----------------------------------------------------------

// Left column (image) — slide in from left
const leftSlide = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Avatar — scale + fade
const avatarIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Name — fade + rise
const nameIn = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Tags — blur-in cascade
const tagIn = {
  hidden: { opacity: 0, filter: 'blur(8px)', y: 10 },
  show: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Paragraph 1 — classic fade + rise
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

// Paragraph 2 — scale pop (for the bold question)
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Paragraph 3 — slide from left
const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Paragraph 4 — blur in
const blurIn = {
  hidden: { opacity: 0, filter: 'blur(10px)', y: 12 },
  show: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

// Paragraph 5 — slide from right
const slideRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Paragraph 7 — scale + rotate
const rotateIn = {
  hidden: { opacity: 0, scale: 0.95, rotate: -1.5 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

// Paragraph 8 — spring bounce up
const springUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      mass: 0.8,
    },
  },
};

// Paragraph 9 — blur + rise
const blurRise = {
  hidden: { opacity: 0, filter: 'blur(6px)', y: 24 },
  show: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};

// -----------------------------------------------------------
// Main component
// -----------------------------------------------------------
export default function AmitabhaProfile() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 py-6">
      <div className="flex flex-col md:flex-row gap-2 md:gap-12 items-center md:items-start">
        {/* LEFT - IMAGE */}
        <motion.div
          variants={leftSlide}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="flex flex-col items-center md:items-start w-full md:w-auto md:sticky md:top-24 sm:pt-0 md:pt-10"
        >
          <motion.div
            variants={avatarIn}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            whileHover={reduceMotion ? {} : { scale: 1.03 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative group w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px] rounded-full bg-[#C3FBFF] shadow-soft flex items-center justify-center overflow-hidden"
          >
            <div className="relative w-full h-full md:top-[20px] transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/Amitabhabhatia.png"
                alt="Amitabha Bhatia"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT - CONTENT */}
        <div className="flex-1 text-center md:text-left">
          {/* NAME */}
          <motion.h1
            variants={nameIn}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            className="font-redhat font-bold text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] mb-4"
          >
            Amitabha Bhatia
          </motion.h1>

          {/* TAGS — each tag animates individually */}
          <div className="space-y-3 mb-6 flex flex-col w-full">
            <Tag text="Founder of AuthenticRelating.com" variant="gold" />
            <Tag text="Pioneer in Relational Leadership" variant="teal" />
            <Tag text="Catalyst for Real Human Connection." variant="blue" />
            <Tag text="Human First. Always." variant="red" />
          </div>

          {/* TEXT — each paragraph has a unique scroll-triggered motion */}
          <div className="text-[#000000] space-y-4 font-redhat font-normal text-[14px] sm:text-[15px] md:text-[16px] xl:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[28.8px] [&_strong]:font-redhat [&_strong]:font-bold [&_strong]:text-[14px] sm:[&_strong]:text-[15px] md:[&_strong]:text-[16px] lg:[&_strong]:text-[18px] [&_strong]:leading-[22px] sm:[&_strong]:leading-[26px] md:[&_strong]:leading-[28.8px]">
            {/* 1 — Fade up */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportConfig}
              className="py-2"
            >
              At his core, Amitabha Bhatia is a truth-seeker and bridge-builder — someone who's spent his life asking a powerful question:
            </motion.p>

            {/* 2 — Scale pop (the bold question) */}
            <motion.p
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={viewportConfig}
              className="font-redhat font-bold italic text-[18px] sm:text-[20px] md:text-[22px] leading-[22px] sm:leading-[26px] md:leading-[28.8px] text-black mb-2 md:mb-3"
            >
              What does it mean to be real and to truly connect?
            </motion.p>

            {/* 3 — Slide from left */}
            <motion.p
              variants={slideLeft}
              initial="hidden"
              whileInView="show"
              viewport={viewportConfig}
            >
              As the founder of <strong>AuthenticRelating.com</strong>, Amitabha is advancing a global movement to transform how we relate — not just with each other, but with ourselves. His mission is clear: to help people drop masks and return to the heart of what it means to be truly real — to relate with honesty, presence, and courage. He believes that beneath all the noise — deadlines, roles, social conditioning — lies a quiet human longing: to be seen, heard, and met as we truly are. In a world that often rewards performance over presence and efficiency over empathy, his work is a quiet, powerful invitation back to what's real.
            </motion.p>

            {/* 4 — Blur in */}
            <motion.p
              variants={blurIn}
              initial="hidden"
              whileInView="show"
              viewport={viewportConfig}
            >
              Amitabha's path has been shaped by a lifelong devotion to the study and exploration of leadership, psychology, human behaviour and relationships, yoga, meditation, breathwork, and the mind-body-breath connection. He brings a rare synthesis of ancient wisdom and modern insight, and understands that how we relate to others is inseparable from how we relate to ourselves—our emotions, our nervous system, our breath, and our stories.
            </motion.p>

            {/* 5 — Slide from right */}
            <motion.p
              variants={slideRight}
              initial="hidden"
              whileInView="show"
              viewport={viewportConfig}
            >
              He doesn't offer scripts or surface-level techniques. What he offers is a living practice — rooted in presence, vulnerability, and deep listening. Whether he's working with a global organization, leading an authentic relating circle, or mentoring one-on-one, Amitabha creates spaces where people can drop prejudices, soften their armour, and meet each other in truth.
            </motion.p>

            {/* 6 — Fade up (short paragraph, simple motion) */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportConfig}
            >
              His presence is calm, grounded, and catalytic. People feel safe with him — and in that safety, they discover the freedom to be fully themselves.
            </motion.p>

            {/* 7 — Scale + rotate */}
            <motion.p
              variants={rotateIn}
              initial="hidden"
              whileInView="show"
              viewport={viewportConfig}
            >
              More than a teacher and facilitator, Amitabha is a mirror — helping people remember their wholeness and the power of authentic connection. He's not interested in helping people perform better — he's here to help them to truly be themselves and relate <strong>better</strong> — to lead, love, and live from a place of integrity, empathy, and embodied truth.
            </motion.p>

            {/* 8 — Spring bounce */}
            <motion.p
              variants={springUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportConfig}
            >
              In a time when the world feels more disconnected than ever, Amitabha Bhatia is offering a vital reconnection — <strong>to ourselves, to each other, and to what truly matters.</strong>
            </motion.p>

            {/* 9 — Blur + rise (closing paragraph) */}
            <motion.p
              variants={blurRise}
              initial="hidden"
              whileInView="show"
              viewport={viewportConfig}
            >
              Beyond AuthenticRelating.com, Amitabha offers a wide range of transformative experiences through his <strong>personal website theamitabha.com</strong>, including <strong>life mentoring, conscious leadership coaching, energy and breathwork, qi gong, yoga therapy, spiritual immersions, and self-mastery programs.</strong> His work blends ancient wisdom with modern tools, supporting individuals and organizations in awakening their full potential — from the inside out.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------
// Tag — animates individually + hover/tap feedback
// -----------------------------------------------------------
function Tag({ text, variant = 'gold' }) {
  const styles = {
    gold: {
      background: 'linear-gradient(98.89deg, #FFC566 0%, #F9A629 100%)',
      border: '2px solid #FFFFFF',
      backdropFilter: 'blur(260px)',
      boxShadow: '0px 4px 7.3px 1px #0000001A',
    },
    teal: {
      background: 'linear-gradient(100.86deg, #32D7E3 0%, #0C959F 100%)',
      border: '2px solid #FFFFFF',
      backdropFilter: 'blur(260px)',
      boxShadow: '0px 4px 7.3px 1px #0000001A',
    },
    blue: {
      background: 'linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)',
      border: '2px solid #FFFFFF',
      backdropFilter: 'blur(100.38px)',
      boxShadow: '0px 2.96px 5.4px 0.74px #0000001A',
    },
    red: {
      background: 'linear-gradient(91.44deg, #FF826E 0%, #DE472F 100%)',
      border: '2px solid #FFFFFF',
      backdropFilter: 'blur(100.38px)',
      boxShadow: '0px 5.3px 9.67px 1.32px #0000001A',
    },
  };

  return (
    <motion.div
      variants={tagIn}
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      // CHANGED: 'w-auto' to 'w-full' so all tags stretch to the same width
      className="flex w-full min-h-[49px] rounded-[10px] border-2 items-center cursor-default"
      style={{
        ...styles[variant],
        paddingTop: '6px',
        paddingBottom: '6px',
        paddingLeft: '24px',
        paddingRight: '24px',
        gap: '10px',
      }}
    >
      <p 
        // CHANGED: Made text slightly smaller to match your image's proportions
        className="font-redhat text-white text-left text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
        style={{
          fontWeight: 600, // SemiBold
          lineHeight: '100%', // 1
          letterSpacing: '0%', // 0
        }}
      >
        {text}
      </p>
    </motion.div>
  );
}