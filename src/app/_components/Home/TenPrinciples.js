"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axios";

import Section from "../common/Section";
import SiteContainer from "../common/SiteContainer";
import Card from "../common/Card";
import PrimaryWaveButton from "../buttons/PrimaryWaveButton";

import colors from "../../../theme/colors";
import typography from "../../../theme/typography";
import theme from "../../../theme/theme";

const MotionBox = motion(Box);

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
  const [principles, setPrinciples] = useState([]);

  const design = theme.custom.tenPrinciples;
  const text = typography.tenPrinciples;
  const color = colors.tenPrinciples;

  useEffect(() => {
    const fetchPrinciples = async () => {
      try {
        const res = await axiosInstance.get(
          "/frontendApis/getAllFiveDimensionsprincipels",
          { params: { size: 20, page: 0, search: "" } }
        );

        const sorted = [...(res?.data?.list || [])].sort(
          (a, b) => a.index_position - b.index_position
        );
        setPrinciples(sorted);
      } catch (error) {
        console.error("API error:", error);
      }
    };

    fetchPrinciples();
  }, []);

  const handleNavigateToBooks = () => {
    router.push("/mybooks");
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
              ...text.introducing,
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
          {principles.map((item, index) => (
            <MotionBox
              key={item._id || item.id}
              variants={cardVariants}
            >
              <Card
                onClick={() =>
                  router.push("/principlesofauthenticrelating/")
                }
                role="link"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    router.push("/principlesofauthenticrelating/");
                  }
                }}
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

                  // On large screens keep the label visible and zoom the
                  // image and label independently when the card is hovered.
                  // MUI's md breakpoint is 900px, covering 1024px screens.
                  "@media (min-width:900px)": {
                    "&:hover": {
                      transform: "none",
                      "& img": {
                        transform: "scale(1.08)",
                      },
                      "& .card-overlay": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                      "& .card-title": {
                        transform: "scale(1.06)",
                      },
                    },
                  },
                }}
              >
                {/* IMAGE */}

                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}/${item.image}`}
                  alt={item.title}
                  fill
                  sizes="
                    (max-width: 768px) 50vw,
                    (max-width: 1024px) 20vw,
                    20vw
                  "
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.35s ease",
                  }}
                />

                {/* OVERLAY */}

                <Box
                  className="card-overlay"
                  sx={{
                    ...design.overlay,
                    opacity: {
                      xs: 1,
                      md: 1,
                      lg: 1,
                    },
                    transform: {
                      xs: "translateY(0)",
                      md: "translateY(0)",
                      lg: "translateY(0)",
                    },
                  }}
                >
                  <Typography
                    className="card-title"
                    sx={{
                      ...text.cardTitle,

                      color:
                        color.cardText,

                      textShadow:
                        color.cardTextShadow,
                      transition: "transform 0.35s ease",
                      transformOrigin: "left bottom",
                    }}
                  >
                    {index + 1}. {item.title}
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
              handleNavigateToBooks
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
