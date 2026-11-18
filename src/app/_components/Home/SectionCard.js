"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import Section from "../common/Section";
import SiteContainer from "../common/SiteContainer";
import Card from "../common/Card";
import EventButton from "../buttons/EventButton";

import theme from "../../../theme/theme";

// =========================================================
// MOTION CARD
// =========================================================

const MotionCard = motion(Card);

// =========================================================
// DATA
// =========================================================

const data = [
  {
    title: "Authentic Relating @Work",
    href: "/authenticrelatingwork",
    image: "/sectioncard/arwork.png",
    desc:
      "Learn the 10 Principles of Authentic Relating by Amitabha Bhatia and cultivate self-esteem, emotional intelligence, and deep connection through relating games, mindfulness, and embodiment practices.",
  },
  {
    title: "Authentic Relating Coaching",
    href: "/authenticrelatingcoaching",
    image: "/sectioncard/arcoahing.png",
    desc:
      "Develop unshakable self-trust, emotional resilience, and presence in all areas of life—relationships, work, social settings, and leadership. Strengthen assertiveness and grounded self-expression through embodiment and relational exercises.",
  },
  {
    title: "Events",
    href: "/events",
    image: "/sectioncard/events.png",
    desc:
      "Understand the fundamental psychological, emotional, and relational needs that drive behavior. Learn to identify, communicate, and fulfill your needs while fostering deeper self-awareness and authentic connection.",
  },
  {
    title: "Authentic Relating Games",
    href: "/speakingmediaKit",
    image: "/sectioncard/argames.png",
    desc:
      "Explore how early relational patterns shape connection, intimacy, and trust. Learn to heal insecure attachments, cultivate self-trust, and create healthy, secure relationships through relational intelligence and emotional awareness.",
  },
  {
    title: "Books",
    href: "/mybooks",
    image: "/sectioncard/books.png",
    desc:
      "Develop true self-worth and self-acceptance beyond external validation. Learn to embrace your strengths, overcome self-doubt, and create a strong inner foundation for personal growth and relational confidence.",
  },
  {
    title: "Community",
    href: "/communities",
    image: "/sectioncard/community.png",
    desc:
      "Go beyond surface-level self-care to nourish your mind, body, and soul. Learn forgiveness, gratitude, boundary-setting, and assertiveness, while practicing mindfulness, emotional regulation, and deep self-honoring rituals.",
  },
  {
    title: "Blog",
    href: "/blogpage",
    image: "/sectioncard/blog.png",
    desc:
      "Engage in playful yet profound interactive exercises that deepen presence, connection, and communication skills. Learn to listen deeply, express authentically, and build emotional intelligence in a fun, engaging way.",
  },
  {
    title: "Authentic Relating Joy Lab",
    href: "/authenticrelatingjoylab",
    image: "/sectioncard/arjoylab.png",
    desc:
      "Master emotional intelligence and resilience by learning to identify, process, and regulate emotions. Explore different types of emotions—primary, social, complex, survival-based, and expansive—and develop tools for self-awareness, mindfulness, and emotional balance.",
  },
  {
    title: "Online courses",
    href: "/onlinecourse",
    image: "/sectioncard/onlinecourse.png",
    desc:
      "Explore courses, tools, and guided practices that teach you how to speak your truth, listen deeply, and connect authentically — anytime, anywhere.",
  },
];

// =========================================================
// COMPONENT
// =========================================================

export default function SectionCard() {
  const router = useRouter();
  const styles = theme.custom.sectionCards;

  const handleNavigate = (href) => {
    router.push(href);
  };

  return (
    <Section sx={{ ...styles.section }}>
      <SiteContainer>
        {data.map((item, index) => (
          <MotionCard
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.015 }}
            sx={{ ...styles.card }}
          >
            {/* IMAGE */}
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              className="section-card-image"
              loading={index < 2 ? "eager" : "lazy"}
              sx={{ ...styles.image }}
            />

            {/* CONTENT */}
            <Box className="section-card-content" sx={{ ...styles.content }}>
              <Typography
                component="h2"
                sx={{
                  ...styles.title,
                  Color: '#F9F9F9',
                  fontFamily: '"Red Hat Display", sans-serif',
                  fontWeight: 700,
                  verticalAlign: 'middle',
                }}
              >
                {item.title}
              </Typography>
              <Typography
                component="p"
                sx={{
                  ...styles.description,
                  Color: '#F9F9F9',
                  fontFamily: '"Red Hat Display", sans-serif',
                  fontWeight: 500,
                  verticalAlign: 'middle',
                }}
              >
                {item.desc}
              </Typography>

              <Box sx={{ ...styles.buttonWrapper }}>
                <EventButton
                  variant="glass"
                  onClick={() => handleNavigate(item.href)}
                  sx={{
                    minWidth: { xs: "100%", sm: "120px", md: "140px" },
                    height: { xs: "44px", sm: "42px", md: "46px" },
                    px: 2,
                    borderRadius: "12px",
                    color: "#fff",
                    fontSize: { xs: "13px", sm: "13px", md: "14px" },
                    fontWeight: 600,
                    textTransform: "none",
                    whiteSpace: "nowrap",
                    position: "relative",
                    background: "rgba(255, 255, 255, 0.15)",
                    border: "none !important",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    transform: "translateZ(0)",
                    transition: "background 0.3s ease",

                    // 👇 Gradient border
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      borderRadius: "inherit",
                      padding: "1.5px",
                      background: "linear-gradient(90deg, #ffffff 0%, #c9e9a56b 100%)",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                      pointerEvents: "none",
                      zIndex: 0,
                    },

                    "& > *": {
                      position: "relative",
                      zIndex: 1,
                    },

                    "&:hover": {
                      background: "rgba(255, 255, 255, 0.25)",
                      "&::before": {
                        background: "#FFFFFF",
                      },
                    },
                  }}
                >
                  Explore
                </EventButton>
              </Box>
            </Box>
          </MotionCard>
        ))}

        {/* FOOTER */}
        <Typography component="p" sx={{ ...styles.footer }}>
          We're here to provide the support and guidance you need.
          <Box
            component="span"
            onClick={() => handleNavigate("/contactus")}
            sx={{ ...styles.footerLink }}
          >
            View More
            <Box component="span">
              →
            </Box>
          </Box>
        </Typography>
      </SiteContainer>
    </Section>
  );
}