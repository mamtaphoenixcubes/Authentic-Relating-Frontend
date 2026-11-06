'use client';

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function AmitabhaProfile() {
  return (
    <MotionBox
      sx={{
        maxWidth: { xs: "100%", md: 1000, lg: 1200 },
        mx: "auto",
        my: 6,
        px: { xs: 2, sm: 3 },
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* MAIN LAYOUT */}
      <Box
        sx={{
          display: "flex",
          gap: 5,
          alignItems: "flex-start",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {/* IMAGE */}
        <MotionBox
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: { xs: '100%', sm: 'auto' },
          }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* IMAGE WRAPPER */}
          <Box
            sx={{
              width: { xs: 180, sm: 180, md: 220, lg: 300, xl: 400 },
              height: { xs: 180, sm: 180, md: 220, lg: 300, xl: 400 },
              background: '#FE826D',
              borderRadius: '50%',
              boxShadow: '0px 0px 50px 0px #00497F4D',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: { xs: 1.5, sm: 2, md: 2, lg: 2, xl: 3 },
              mt: { xs: 0, sm: 2 },
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* IMAGE CONTAINER */}
            <Box
              sx={{
                position: 'relative',
                width: '95%',
                height: '90%',
                borderRadius: '50%',
                overflow: 'hidden',
                marginTop: { xs: '13px', sm: '15px', md: '18px', lg: '25px', xl: '38.8px' },
                display: { xs: 'none', sm: 'block' }
              }}
            >
              <Image
                src="/Amitabhabhatia.png"
                alt="Amitabha Bhatia"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                sizes="(max-width: 900px) 180px, (max-width: 1200px) 220px, 300px"
              />
            </Box>

            {/* PHONE VERSION */}
            <Box
              sx={{
                position: 'relative',
                width: '990%',
                height: '950%',
                borderRadius: '50%',
                overflow: 'hidden',
                marginTop: '140px',
                marginLeft: "-30px",
                marginRight: "-20px",
                display: { xs: 'block', sm: 'none' }
              }}
            >
              <Image
                src="/Amitabhabhatia.png"
                alt="Amitabha Bhatia"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                sizes="190px"
              />
            </Box>
          </Box>
        </MotionBox>

        {/* RIGHT COLUMN (TAGS + TEXT) */}
        <MotionBox
          sx={{
            flex: 1,
            textAlign: { xs: 'center', sm: 'left' },
            pr:{xs:0, sm : 2 }
          }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* NAME */}
          <MotionTypography
            sx={{
              fontFamily: "var(--font-redhat)",
              fontWeight: 700,
              fontSize: { xs: 28, sm: 34, md: 40, lg: 44 },
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: { xs: 'center', sm: 'left' },
              mb: 2
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Amitabha Bhatia
          </MotionTypography>

          {/* TAGS */}
          <MotionBox
            sx={{
              width: { xs: '100%', sm: '100%', md: '100%', lg: '95%' },
              mx: { xs: 'auto', sm: 0 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', sm: 'flex-start' }
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
          >
            <Tag text="Founder of AuthenticRelating.com" gradient="linear-gradient(90deg, #FFB347, #FFA726)" />
            <Tag text="Pioneer in Relational Leadership" gradient="linear-gradient(90deg, #14B8A6, #0EA5A5)" />
            <Tag text="Catalyst for Real Human Connection." gradient="linear-gradient(90deg, #60A5FA, #2563EB)" />
            <Tag text="Human First. Always." gradient="linear-gradient(90deg, #FF7A59, #E84C3D)" />
          </MotionBox>

          {/* TEXT CONTENT */}
          <MotionBox
            sx={{
              mt: 3,
              maxWidth: 890,
              mx: { xs: 'auto', sm: 0 },
              textAlign: { xs: 'center', sm: 'left' }
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              sx={{
                fontFamily: "var(--font-redhat)",
                fontWeight: 400,
                fontSize: { xs: 14, sm: 15, md: 16 },
                lineHeight: "28.8px",
                letterSpacing: "0%",
                color: "#555",
                pb: 4,
                mb: 2,
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >
              At his core, Amitabha Bhatia is a truth-seeker and bridge-builder —
              someone who's spent his life asking a powerful question:
            </Typography>

            <Typography
              sx={{
                fontFamily: "var(--font-redhat)",
                fontWeight: 700,
                fontStyle: "italic",
                fontSize: { xs: 16, sm: 18, md: 20, lg: 22 },
                lineHeight: "100%",
                letterSpacing: "0%",
                mb: 2,
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >
              What does it mean to be real and to truly connect?
            </Typography>

            <MotionTypography
              sx={{
                fontFamily: "var(--font-redhat)",
                fontWeight: 400,
                fontSize: { xs: 14, sm: 15, md: 16 },
                lineHeight: "28.8px",
                letterSpacing: "0%",
                color: "#555",
                pb: 4,
                textAlign: { xs: 'center', sm: 'left' },
                "& b, & strong": {
                  fontFamily: "var(--font-redhat)",
                  fontWeight: 700,
                  fontSize: "inherit",
                  lineHeight: "28.8px",
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              As the founder of <b>AuthenticRelating.com</b>, Amitabha is advancing a
              global movement to transform how we relate — not just with each
              other, but with ourselves. His mission is clear: to help people drop masks and return to the heart of
              what it means to be truly real — to relate with honesty, presence, and courage. He believes that beneath
              all the noise — deadlines, roles, social conditioning — lies a quiet human longing: to be seen, heard, and
              met as we truly are. In a world that often rewards performance over presence and efficiency over empathy, his
              work is a quiet, powerful invitation back to what's real
            </MotionTypography>

            <MotionTypography
              sx={{
                fontFamily: "var(--font-redhat)",
                fontWeight: 400,
                fontSize: { xs: 14, sm: 15, md: 16 },
                lineHeight: "28.8px",
                letterSpacing: "0%",
                color: "#555",
                pb: 4,
                textAlign: { xs: 'center', sm: 'left' },
                "& b, & strong": {
                  fontFamily: "var(--font-redhat)",
                  fontWeight: 700,
                  fontSize: "inherit",
                  lineHeight: "28.8px",
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Amitabha's path has been shaped by a lifelong devotion to the study and exploration of leadership, psychology,
              human behaviour and relationships, yoga, meditation, breathwork, and the mind-body-breath connection. He brings
              a rare synthesis of ancient wisdom and modern insight, and understands that how we relate to others is inseparable
              from how we relate to ourselves—our emotions, our nervous system, our breath, and our stories.
            </MotionTypography>

            <MotionTypography
              sx={{
                fontFamily: "var(--font-redhat)",
                fontWeight: 400,
                fontSize: { xs: 14, sm: 15, md: 16 },
                lineHeight: "28.8px",
                letterSpacing: "0%",
                color: "#555",
                pb: 4,
                textAlign: { xs: 'center', sm: 'left' },
                "& b, & strong": {
                  fontFamily: "var(--font-redhat)",
                  fontWeight: 700,
                  fontSize: "inherit",
                  lineHeight: "28.8px",
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              He doesn't offer scripts or surface-level techniques. What he offers is a living practice — rooted in presence, vulnerability,
              and deep listening. Whether he's working with a global organization, leading an authentic relating circle, or mentoring one-on-one,
              Amitabha creates spaces where people can drop prejudices, soften their armour, and meet each other in truth.
            </MotionTypography>

            <MotionTypography
              sx={{
                fontFamily: "var(--font-redhat)",
                fontWeight: 400,
                fontSize: { xs: 14, sm: 15, md: 16 },
                lineHeight: "28.8px",
                letterSpacing: "0%",
                color: "#555",
                pb: 4,
                textAlign: { xs: 'center', sm: 'left' },
                "& b, & strong": {
                  fontFamily: "var(--font-redhat)",
                  fontWeight: 700,
                  fontSize: "inherit",
                  lineHeight: "28.8px",
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              His presence is calm, grounded, and catalytic. People feel safe with him — and in that safety, they discover the freedom
              to be fully themselves.
            </MotionTypography>

            <MotionTypography
              sx={{
                fontFamily: "var(--font-redhat)",
                fontWeight: 400,
                fontSize: { xs: 14, sm: 15, md: 16 },
                lineHeight: "28.8px",
                letterSpacing: "0%",
                color: "#555",
                pb: 4,
                textAlign: { xs: 'center', sm: 'left' },
                "& b, & strong": {
                  fontFamily: "var(--font-redhat)",
                  fontWeight: 700,
                  fontSize: "inherit",
                  lineHeight: "28.8px",
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              More than a teacher and facilitator, Amitabha is a mirror — helping people remember their wholeness and the power of authentic connection.
              He's not interested in helping people perform better — he's here to help them to truly be themselves and relate <b>better</b> — to lead, love, and
              live from a place of integrity, empathy, and embodied truth.
            </MotionTypography>

            <MotionTypography
              sx={{
                fontFamily: "var(--font-redhat)",
                fontWeight: 400,
                fontSize: { xs: 14, sm: 15, md: 16 },
                lineHeight: "28.8px",
                letterSpacing: "0%",
                color: "#555",
                pb: 4,
                textAlign: { xs: 'center', sm: 'left' },
                "& b, & strong": {
                  fontFamily: "var(--font-redhat)",
                  fontWeight: 700,
                  fontSize: "inherit",
                  lineHeight: "28.8px",
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              In a time when the world feels more disconnected than ever, Amitabha Bhatia is offering a vital reconnection — to ourselves, <b>to ourselves, to each other, and to what truly matters.</b>
            </MotionTypography>

            <MotionTypography
              sx={{
                fontFamily: "var(--font-redhat)",
                fontWeight: 400,
                fontSize: { xs: 14, sm: 15, md: 16 },
                lineHeight: "28.8px",
                letterSpacing: "0%",
                color: "#555",
                pb: 4,
                textAlign: { xs: 'center', sm: 'left' },
                "& b, & strong": {
                  fontFamily: "var(--font-redhat)",
                  fontWeight: 700,
                  fontSize: "inherit",
                  lineHeight: "28.8px",
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Beyond AuthenticRelating.com, Amitabha offers a wide range of transformative experiences through his <b>personal website AmitabhaBhatia.com, </b> including <b>life mentoring, conscious leadership coaching, energy and breathwork, qi gong, yoga therapy, spiritual immersions, and self-mastery programs</b>. His work blends ancient wisdom with modern tools, supporting individuals and organizations in awakening their full potential — from the inside out.
            </MotionTypography>
          </MotionBox>
        </MotionBox>
      </Box>
    </MotionBox>
  );
}

/* TAG COMPONENT */
function Tag({ text, gradient }) {
  return (
    <Box
      sx={{
        mb: 1.5,
        px: { xs: 2.5, md: 3 },
        py: { xs: 1.2, md: 1.6 }, // increases height
        borderRadius: "6px",
        background: gradient,
        color: "#fff",
        width: "100%",

        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Typography
        sx={{
          fontFamily: "var(--font-redhat)",
          fontWeight: 600,
          fontSize: { xs: 16, sm: 20, },
          lineHeight: "100%",
          letterSpacing: "0%",
          color: "#fff"
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
