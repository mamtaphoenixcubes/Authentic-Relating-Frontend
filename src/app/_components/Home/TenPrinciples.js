"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import Section from "../common/Section";
import SiteContainer from "../common/SiteContainer";
import Card from "../common/Card";
import PrimaryWaveButton from "../buttons/PrimaryWaveButton";

import colors from "../../../theme/colors";
import typography from "../../../theme/typography";
import theme from "../../../theme/theme";

const MotionBox = motion(Box);

const principles = [
  {
    id: 1,
    title: "Cultivate Presence and Awareness",
    img: "/TenPrinciples1.png",
  },
  {
    id: 2,
    title:
      "Approach with Openness, Curiosity and a Sense of Safety",
    img: "/TenPrinciples2.png",
  },
  {
    id: 3,
    title: "Attuned and Reflective Listening",
    img: "/TenPrinciples3.png",
  },
  {
    id: 4,
    title:
      "Express and Communicate with Honesty, Care, and Congruence",
    img: "/TenPrinciples4.png",
  },
  {
    id: 5,
    title:
      "Walk in Self-Responsibility with Integrity and Agency",
    img: "/TenPrinciples5.png",
  },
  {
    id: 6,
    title:
      "Practice Self-Care to Sustain Authenticity",
    img: "/TenPrinciples6.png",
  },
  {
    id: 7,
    title: "Embrace Discomfort to Grow",
    img: "/TenPrinciples7.png",
  },
  {
    id: 8,
    title: "Infuse Lightness and Play",
    img: "/TenPrinciples8.png",
  },
  {
    id: 9,
    title:
      "Cultivate Compassion — For Others and Yourself",
    img: "/TenPrinciples9.png",
  },
  {
    id: 10,
    title:
      "Foster Meaningful and Lasting Connections Through Service",
    img: "/TenPrinciples10.png",
  },
];

const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
    },
  },
};

export default function TenPrinciples() {
  const router = useRouter();

  const design = theme.custom.tenPrinciples;
  const text = typography.tenPrinciples;
  const color = colors.tenPrinciples;

  const handleNavigateToPrinciples = () => {
    router.push("/principlesofauthenticrelating");
  };

  return (
    <Section
      className="ten-principles-section"
      sx={{
        ...design.section,

        py: {
          xs: 2,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 1,
        },
      }}
    >
      <SiteContainer
        sx={{
          width: "100%",
        
          
          px: {
            xs: 2,
            sm: 3,
            md: 2,
            lg: 2,
            xl: 2,
          },
        }}
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <Box
          sx={{
            ...design.header,
          }}
        >
          {/* INTRODUCING */}

          <Typography
            sx={{
              ...text.introducing,
              color: color.title,
            }}
          >
            Introducing
          </Typography>

          {/* TITLE */}

          <Typography
            sx={{
              ...text.title,
              color: color.title,
              mt: {
                xs: 1.5,
                md: 2,
              },
            }}
          >
            <Box
              component="span"
              sx={{
                ...text.titleRegular,
              }}
            >
              10 Principles
            </Box>{" "}
            of Authentic Relating
          </Typography>

          {/* AUTHOR */}

          <Typography
            sx={{
              ...text.author,
              color: color.title,
              mt: {
                xs: 1.5,
                md: 2,
              },
            }}
          >
            by Amitabha Bhatia
          </Typography>

          {/* DESCRIPTION */}

          <Typography
            sx={{
              ...text.description,
              color: color.description,

              maxWidth: {
                xs: "100%",
                md: "900px",
                lg: "1100px",
              },

              mx: "auto",

              mt: {
                xs: 2,
                md: 3,
              },
            }}
          >
            Morbi varius ornare ante non posuere. Morbi lacus
            lacus, auctor sit amet erat vitae, interdum semper
            leo. Donec dignissim iaculis fermentum. Donec
            tellus enim, facilisis eu vulputate eget.
          </Typography>
        </Box>

        {/* =====================================================
            GRID
        ====================================================== */}

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          sx={{
            ...design.grid,
          }}
        >
          {principles.map((item) => (
            <MotionBox
              key={item.id}
              variants={cardVariants}
            >
              <Card
                sx={{
                  ...design.card,

                  "&:hover": {
                    transform: "scale(1.06)",

                    boxShadow:
                      color.cardShadowHover,

                    zIndex: 5,

                    "& .card-overlay": {
                      opacity: 1,
                      transform:
                        "translateY(0)",
                    },
                  },
                }}
              >
                {/* IMAGE */}

                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="
                    (max-width: 768px) 50vw,
                    (max-width: 1024px) 20vw,
                    20vw
                  "
                  style={{
                    objectFit: "cover",
                  }}
                />

                {/* OVERLAY */}

                <Box
                  className="card-overlay"
                  sx={{
                    ...design.overlay,
                  }}
                >
                  <Typography
                    sx={{
                      ...text.cardTitle,

                      color:
                        color.cardText,

                      textShadow:
                        color.cardTextShadow,
                    }}
                  >
                    {item.id}. {item.title}
                  </Typography>
                </Box>
              </Card>
            </MotionBox>
          ))}
        </MotionBox>

        {/* =====================================================
            CTA
        ====================================================== */}

        <Box
          sx={{
            ...design.cta,
          }}
        >
          <PrimaryWaveButton
            onClick={
              handleNavigateToPrinciples
            }
            sx={{
              transition:
                "all 0.3s ease",

              transform: "scale(1)",

              boxShadow:
                "0 4px 14px rgba(0,0,0,0.15)",

              "&:hover": {
                transform:
                  "scale(1.08)",

                boxShadow:
                  "0 8px 24px rgba(0,0,0,0.25)",
              },

              "&:active": {
                transform:
                  "scale(0.96)",
              },
            }}
          >
            Get the Book →
          </PrimaryWaveButton>
        </Box>
      </SiteContainer>
    </Section>
  );
}