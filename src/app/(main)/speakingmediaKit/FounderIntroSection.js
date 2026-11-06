"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/app/_components/common/Section";
import SiteContainer from "@/app/_components/common/SiteContainer";

/* ---------- Shared styles ---------- */
const bioTextSx = {
  fontFamily: "var(--font-redhat)",
  fontWeight: 400,
  fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "16px" },
  lineHeight: { xs: 1.6, sm: 1.7, md: "28.8px" },
  color: "#fff",
  mb: { xs: 2, md: 2.5 },
  maxWidth: { xs: "100%", sm: 720, md: 900 },
};

const nameTextSx = {
  fontFamily: "var(--font-redhat)",
  fontWeight: 700,
  fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "16px" },
  lineHeight: { xs: 1.6, sm: 1.6, md: "28.8px" },
  color: "#fff",
  mt: { xs: 1, md: 1.5 },
};

const titleTextSx = {
  fontFamily: "var(--font-redhat)",
  fontWeight: 400,
  fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "16px" },
  lineHeight: { xs: 1.6, sm: 1.7, md: "28.8px" },
  color: "#fff",
  mb: { xs: 2, md: 2.5 },
  maxWidth: { xs: "100%", sm: 720, md: 1024 },
};

/* ---------- Fade-in helper ---------- */
function FadeIn({ children, delay = 0, y = 20 }) {
  return (
    <motion.div
      initial={{ y, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Avatar (used by both mobile + desktop) ---------- */
function FounderAvatar({
  size,
  imageOffsetTop = 0,
  sizes,
  alt = "Amitabha Bhatia",
}) {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        background: "#FFDCA2", // <--- Applied the requested color here
        borderRadius: "50%",
        boxShadow: "0px 0px 50px 0px #00497F4D",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: { xs: 1.5, sm: 2, md: 2, lg: 2, xl: 3 },
        mt: { xs: 0, sm: 2 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "95%",
          height: "90%",
          borderRadius: "50%",
          overflow: "hidden",
          mt: `${imageOffsetTop}px`,
        }}
      >
        <Image
          src="/Amitabhabhatia.png"
          alt={alt}
          fill
          style={{ objectFit: "contain", objectPosition: "center" }}
          sizes={sizes}
        />
      </Box>
    </Box>
  );
}

/* ---------- Main component ---------- */
export default function FounderIntroSection() {
  return (
    <Section
      sx={{
        py: { xs: 4 },
      }}
    >
      <SiteContainer>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 820, sm: 380, md: 380, lg: 650 },
            borderRadius: 2,
            overflow: "hidden",
            backgroundImage: "url('/Pasted.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 3,
          }}
        >
          {/* Red gradient overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, #FF826E, #DE472F)",
              zIndex: 1,
              opacity: 0.8,
            }}
          />

          {/* Group background overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/group-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.25,
              zIndex: 0,
            }}
          />

          {/* Content grid */}
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1.4fr 0.6fr" },
              gap: { xs: 4, md: 6 },
              alignItems: "center",
            }}
          >
            {/* MOBILE FOUNDER BLOCK */}
            <Box
              sx={{
                textAlign: "center",
                display: { xs: "block", sm: "none" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                <FounderAvatar
                  size={180}
                  imageOffsetTop={40}
                  sizes="190px"
                  alt="Amitabha Bhatia, Founder of The Authentic Relating"
                />
              </Box>

              <Typography sx={{ ...nameTextSx, mt: 0 }}>
                Amitabha Bhatia
              </Typography>
              <Typography
                sx={{ ...titleTextSx, mb: 0, fontSize: 13, opacity: 0.9 }}
              >
                Founder of The Authentic Relating
              </Typography>
            </Box>

            {/* LEFT TEXT BLOCK */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box>
                <FadeIn delay={0.1}>
                  <Typography sx={bioTextSx}>
                    Amitabha Bhatia is the visionary behind
                    AuthenticRelating.com and the author of The Five
                    Dimensions of Authentic Relating and The 10 Principles
                    of Authentic Relating. A global thought leader in
                    relational intelligence, Amitabha fuses psychology,
                    somatics, energy practices, and ancient philosophy
                    into modern frameworks for transformation.
                  </Typography>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <Typography sx={bioTextSx}>
                    With over a decade of experience as a speaker,
                    mentor, and corporate innovator, Amitabha has worked
                    with executives, educators, healers, and changemakers
                    around the world. He brings humor, heart, and profound
                    depth to every room he enters.
                  </Typography>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <Typography sx={bioTextSx}>
                    &ldquo;Authenticity is not a performance. It is an act of
                    courage, of seeing and being seen.&rdquo;
                  </Typography>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <Typography sx={{ ...nameTextSx, mb: 0 }}>
                    — Amitabha Bhatia
                  </Typography>
                </FadeIn>
              </Box>
            </motion.div>

            {/* DESKTOP FOUNDER BLOCK */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  display: { xs: "none", sm: "block" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <FounderAvatar
                      size={{ xs: 180, sm: 180, md: 220, lg: 300, xl: 380 }}
                      imageOffsetTop={50}
                      sizes="(max-width: 900px) 180px, (max-width: 1200px) 220px, 300px"
                      alt="Amitabha Bhatia"
                    />
                  </motion.div>
                </Box>

                <FadeIn delay={0.2}>
                  <Typography sx={{ ...nameTextSx, mb: 0 }}>
                    — Amitabha Bhatia
                  </Typography>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <Typography sx={{ ...titleTextSx, mb: 0 }}>
                    Founder of The Authentic Relating
                  </Typography>
                </FadeIn>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </SiteContainer>
    </Section>
  );
}