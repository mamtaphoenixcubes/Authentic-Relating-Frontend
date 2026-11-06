'use client';

import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

import Section from '@/app/_components/common/Section';
import SiteContainer from '@/app/_components/common/SiteContainer';
import Card from '@/app/_components/common/Card';

// -----------------------------------------------------------
// Data
// -----------------------------------------------------------
const coachingPoints = [
  { title: 'Root into Purpose', desc: "No more drifting. Know why you're here." },
  { title: 'Stand in Power', desc: 'Not the loud kind. The kind that radiates from embodied presence.' },
  { title: 'Speak Your Truth', desc: 'Not for performance, but for connection.' },
  { title: 'Navigate Emotions Gracefully', desc: 'Let your feelings move through you, not rule you.' },
  { title: 'Love with Courage', desc: 'Build relationships that are bold, brave, and beautifully human.' },
  { title: 'Rewire Your Reality', desc: 'Rewrite the inner stories that have shaped your outer world.' },
  { title: 'Lead with Soul', desc: 'Rewrite the inner stories that have shaped your outer world.' },
];

const otherPoints = [
  { title: 'Relational Intelligence', desc: 'See and be seen, deeply.' },
  { title: 'Somatic Wisdom', desc: 'Let the body guide the healing.' },
  { title: 'Inner Authority', desc: 'Inspire through presence, not performance.' },
  { title: 'Emotional Alchemy', desc: 'Transmute pain into power, reaction into response.' },
  { title: 'Sacred Simplicity', desc: 'The most profound truths are often the most human ones.' },
];

// -----------------------------------------------------------
// Shared viewport
// -----------------------------------------------------------
const viewport = { once: true, amount: 0.2, margin: '0px 0px -50px 0px' };

// -----------------------------------------------------------
// Motion variants
// -----------------------------------------------------------
const cardIn = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const headingIn = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

const paragraphIn = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const imageIn = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const pointIn = {
  hidden: { opacity: 0, filter: 'blur(8px)', y: 16 },
  show: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

const listTitleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// -----------------------------------------------------------
// Reusable GlassBox — white glass with gradient border
// -----------------------------------------------------------
const glassBoxSx = {
  position: 'relative',
  borderRadius: 2,
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(138.4px)',
  WebkitBackdropFilter: 'blur(138.4px)',
  boxShadow: '0px 4px 7.3px 1px rgba(0, 0, 0, 0.1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',
    padding: '2px',
    background:
      'linear-gradient(106.27deg, #FFFFFF 33.98%, rgba(255, 255, 255, 0.53) 105.14%)',
    WebkitMask:
      'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    pointerEvents: 'none',
  },
};

function GlassBox({ children, sx = {} }) {
  return <Box sx={{ ...glassBoxSx, ...sx }}>{children}</Box>;
}

// -----------------------------------------------------------
// Reusable Point component
// -----------------------------------------------------------
function Point({ title, desc, background }) {
  return (
    <motion.div
      variants={pointIn}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <Box
        sx={{
          background,
          borderRadius: 2,
          p: 2,
          boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'var(--font-redhat)',
            fontWeight: 700,
            fontSize: { xs: 16, sm: 18 },
            lineHeight: '100%',
            letterSpacing: '0%',
          }}
        >
          {title}
        </Typography>

        {desc && (
          <Typography
            sx={{
              fontFamily: 'var(--font-redhat)',
              fontWeight: 400,
              fontSize: { xs: 14, sm: 15 },
              lineHeight: '23.8px',
              letterSpacing: '0%',
              mt: 0.5,
            }}
          >
            {desc}
          </Typography>
        )}
      </Box>
    </motion.div>
  );
}

// -----------------------------------------------------------
// Main component
// -----------------------------------------------------------
export default function AuthenticRelatingCard() {
  return (
    <Section
      sx={{
        py: 0,
        my: 0,
        pt: { xs: 1, sm: 1, md: 1 },
      }}
    >
      <SiteContainer>
        {/* ================= FIRST CARD — Orange ================= */}
        <motion.div
          variants={cardIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          style={{ width: '100%' }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              p: 0,
            }}
          >
            <Card
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                p: { xs: 3, md: 4 },
                borderRadius: '43px',

                // Orange background with visible white gradient border
               background: `
  linear-gradient(105deg, #FF596C 0%, #FF8A70 50%, #FFB285 100%) padding-box,
  linear-gradient(
    105.94deg,
    #FFFFFF 2.2%,
    #999999 100%
  ) border-box
`,
border: '2px solid transparent',

                gap: 5,
                color: '#fff',
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                boxSizing: 'border-box',
              }}
            >
              {/* LEFT — heading, paragraph, image */}
              <Box
                sx={{
                  flex: 1,
                  minWidth: 0,
                  mb: { xs: 3, md: 0 },
                  textAlign: { xs: 'center', sm: 'left' },
                }}
              >
                {/* Heading */}
                <motion.div
                  variants={headingIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                >
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-redhat)',
                      fontWeight: 700,
                      fontSize: { xs: 26, sm: 32, md: 38, lg: 44 },
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      mb: 2,
                    }}
                  >
                    Authentic Relating Coaching
                  </Typography>
                </motion.div>

                {/* Paragraph */}
                <Box sx={{ mb: 4 }}>
                  <motion.div
                    variants={paragraphIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-redhat)',
                        fontWeight: 400,
                        fontSize: { xs: 14, sm: 15, md: 16 },
                        lineHeight: '28.8px',
                        letterSpacing: '0%',
                      }}
                    >
                      Because this isn't about fixing. It's about freeing.
                    </Typography>
                  </motion.div>

                  <motion.div
                    variants={paragraphIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-redhat)',
                        fontWeight: 400,
                        fontSize: { xs: 14, sm: 15, md: 16 },
                        lineHeight: '28.8px',
                        letterSpacing: '0%',
                      }}
                    >
                      You'll be met exactly where you are—and invited into the
                      most powerful version of yourself: the one that already
                      knows how to live, love, lead, and relate from truth.
                    </Typography>
                  </motion.div>
                </Box>

                {/* Image */}
                <motion.div
                  variants={imageIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: { xs: 300, sm: 610, md: 610 },
                      borderRadius: 4,
                      overflow: 'hidden',
                      position: 'relative',
                      mx: { xs: 'auto', sm: 0 },
                    }}
                  >
                    <Image
                      src="/arcoaching/firstarc.png"
                      alt="Coaching"
                      fill
                      className="object-contain sm:object-cover"
                      sizes="(max-width: 600px) 100vw, 50vw"
                    />
                  </Box>
                </motion.div>
              </Box>

              {/* RIGHT — You will list */}
              <GlassBox
                sx={{
                  flex: 1,
                  minWidth: 0,
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <motion.div
                  variants={listTitleIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                >
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-redhat)',
                      fontWeight: 700,
                      fontSize: { xs: 18, sm: 22, md: 26, lg: 28 },
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      mb: 1,
                    }}
                  >
                    You will:
                  </Typography>
                </motion.div>

                {coachingPoints.map((point, index) => (
                  <Point
                    key={index}
                    title={point.title}
                    desc={point.desc}
                    background="#42A5F5"
                  />
                ))}
              </GlassBox>
            </Card>
          </Box>
        </motion.div>



        {/* ================= SECOND CARD — Gold ================= */}
        {/* ================= SECOND CARD — Gold ================= */}
        <motion.div
          variants={cardIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          style={{ width: '100%' }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 10,
              width: '100%',
              p: 0,
            }}
          >
            <Card
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                p: { xs: 3, md: 5 },
                borderRadius: '43px',

                // Gold background with the same white gradient border
                background: `
          linear-gradient(135deg, #FFC566, #F9A629) padding-box,
          linear-gradient(
            104.35deg,
            #FFFFFF 2.33%,
            rgba(255, 255, 255, 0.1) 100.06%
          ) border-box
        `,

                border: '2px solid transparent',
                boxShadow: '0px 4px 7.3px 1px #0000001A',

                gap: 5,
                color: '#fff',
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                boxSizing: 'border-box',
              }}
            >
              {/* LEFT — core threads list (glass card) */}
              <GlassBox
                sx={{
                  flex: 1,
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Box sx={{ mb: 1 }}>
                  <motion.div
                    variants={listTitleIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-redhat)',
                        fontWeight: 700,
                        fontSize: { xs: 18, sm: 22, md: 26, lg: 28 },
                        lineHeight: '1.2',
                        letterSpacing: '0%',
                      }}
                    >
                      Each session is a living, breathing
                    </Typography>
                  </motion.div>

                  <motion.div
                    variants={listTitleIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-redhat)',
                        fontWeight: 700,
                        fontSize: { xs: 18, sm: 22, md: 26, lg: 28 },
                        lineHeight: '1.2',
                        letterSpacing: '0%',
                      }}
                    >
                      experience rooted in these core
                    </Typography>
                  </motion.div>

                  <motion.div
                    variants={listTitleIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-redhat)',
                        fontWeight: 700,
                        fontSize: { xs: 18, sm: 22, md: 26, lg: 28 },
                        lineHeight: '1.2',
                        letterSpacing: '0%',
                      }}
                    >
                      threads:
                    </Typography>
                  </motion.div>
                </Box>

                {otherPoints.map((point, index) => (
                  <Point
                    key={index}
                    title={point.title}
                    desc={point.desc}
                    background="linear-gradient(135deg, #32D7E3, #0C959F)"
                  />
                ))}
              </GlassBox>

              {/* RIGHT — heading, paragraph, image */}
              <Box
                sx={{
                  flex: 1,
                  mb: { xs: 3, md: 0 },
                  display: { xs: 'block', sm: 'block' },
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <motion.div
                    variants={headingIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-redhat)',
                        fontWeight: 700,
                        fontSize: { xs: 26, sm: 32, md: 38, lg: 44 },
                        lineHeight: '100%',
                        letterSpacing: '0%',
                      }}
                    >
                      How This Coaching Is
                    </Typography>
                  </motion.div>

                  <motion.div
                    variants={headingIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-redhat)',
                        fontWeight: 700,
                        fontSize: { xs: 26, sm: 32, md: 38, lg: 44 },
                        lineHeight: '100%',
                        letterSpacing: '0%',
                      }}
                    >
                      Different
                    </Typography>
                  </motion.div>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <motion.div
                    variants={paragraphIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-redhat)',
                        fontWeight: 400,
                        fontSize: { xs: 14, sm: 15, md: 16 },
                        lineHeight: '28.8px',
                        letterSpacing: '0%',
                      }}
                    >
                      Authentic Relating Coaching isn't about tips or techniques.
                    </Typography>
                  </motion.div>

                  <motion.div
                    variants={paragraphIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-redhat)',
                        fontWeight: 400,
                        fontSize: { xs: 14, sm: 15, md: 16 },
                        lineHeight: '28.8px',
                        letterSpacing: '0%',
                      }}
                    >
                      It's about transformation in real time—through presence,
                    </Typography>
                  </motion.div>

                  <motion.div
                    variants={paragraphIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-redhat)',
                        fontWeight: 400,
                        fontSize: { xs: 14, sm: 15, md: 16 },
                        lineHeight: '28.8px',
                        letterSpacing: '0%',
                      }}
                    >
                      embodiment, and radical self-honesty.
                    </Typography>
                  </motion.div>
                </Box>

                <motion.div
                  variants={imageIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: { xs: 300, sm: 480, md: 520 },
                      borderRadius: 4,
                      overflow: 'hidden',
                      position: 'relative',
                      mx: { xs: 'auto', sm: 0 },
                    }}
                  >
                    <Image
                      src="/arcoaching/secondarc.png"
                      alt="Coaching"
                      fill
                      className="object-contain sm:object-cover"
                      sizes="(max-width: 600px) 100vw, 50vw"
                    />
                  </Box>
                </motion.div>
              </Box>
            </Card>
          </Box>
        </motion.div>
      </SiteContainer>
    </Section>
  );
}