"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import Section from "../common/Section";
import SiteContainer from "../common/SiteContainer";

import colors from "../../../theme/colors";
import typography from "../../../theme/typography";
import theme from "../../../theme/theme";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export const AuthenticRelating = () => {
  const authentic = typography.authenticRelating;
  const design = theme.custom.authenticRelating;

  return (
    <Section
      className="authentic-relating-section"
      sx={{
        width: "100%",

        py: {
          xs: 6,
          sm: 8,
          md: 10,
          lg: 12,
          xl: 14,
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
            MAIN CARD
        ====================================================== */}

        <MotionBox
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          sx={{
            width: design.card.width,

            minHeight: design.card.minHeight,

            p: design.card.padding,

            borderRadius: design.card.borderRadius,

            background: design.card.background,

            backdropFilter: "blur(271px)",
            WebkitBackdropFilter: "blur(271px)",

            boxShadow: design.card.boxShadow,

            color: design.card.color,

            position: "relative",

            overflow: "hidden",

            transition:
              "box-shadow 0.3s ease, transform 0.3s ease",

            "&:hover": {
              boxShadow: colors.authenticCardShadowHover,
            },
          }}
        >
          {/* =====================================================
              DESKTOP HEADER
          ====================================================== */}

          <Box
            sx={{
              width: "100%",

              display: {
                xs: "none",
                md: "flex",
              },

              flexDirection: "column",

              alignItems: "center",

              justifyContent: "center",

              textAlign: "center",

              mb: design.header.marginBottom,

              px: 2,
            }}
          >
            {/* MAIN TITLE */}

            <MotionTypography
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              sx={{
                ...authentic.mainTitle,
              }}
            >
              Welcome to{" "}

              <Box
                component="span"
                sx={{
                  ...authentic.mainTitleSpan,
                }}
              >
                Authentic Relating
              </Box>
            </MotionTypography>

            {/* SUBTITLE */}

            <MotionTypography
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              sx={{
                ...authentic.subtitle,

                mt: 1,
              }}
            >
              Real. Human. Connection.
            </MotionTypography>
          </Box>

          {/* =====================================================
              MAIN GRID
          ====================================================== */}

          <Box
            sx={{
              width: "100%",

              display: "grid",

              gridTemplateColumns:
                design.grid.columns,

              columnGap: {
                xs: 0,
                md: 6,
                lg: 8.5,
                xl: 10,
              },

              rowGap: {
                xs: 3,
                md: 0,
              },

              alignItems: "center",
            }}
          >
            {/* =================================================
                LEFT — PERSON
            ================================================== */}

            <Box
              sx={{
                display: "flex",

                justifyContent: {
                  xs: "center",
                  md: "flex-start",
                },

                order: {
                  xs: 1,
                  md: 1,
                },
              }}
            >
              <Box
                sx={{
                  width:
                    design.image.wrapperWidth,

                  height:
                    design.image.wrapperHeight,

                  display: "flex",

                  flexDirection: "column",

                  alignItems: "center",

                  flexShrink: 0,
                }}
              >
                {/* =================================================
                    IMAGE CIRCLE
                ================================================== */}

                <MotionBox
                  initial={{
                    scale: 0.9,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  sx={{
                    width:
                      design.image.circleWidth,
                    height:
                      design.image.circleHeight,
                    borderRadius: "50%",

                    background:
                      design.image.circleBackground,

                    display: "flex",

                    alignItems: "center",

                    justifyContent: "center",

                    overflow: "hidden",

            

                    position: "relative",

                    flexShrink: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: {
                        xs: "149%",
                        sm: "100%",
                        md: "85%",
                        lg: "95%",
                        xl: "90%",
                      },

                      height: {
                        xs: "290%",
                        sm: "100%",
                        md: "100%",
                        lg: "100%",
                        xl: "100%",
                      },

                      position: "relative",

                      top: {
                        xs: 50,
                        sm: 5,
                        md: 5,
                        lg: 5,
                        xl: 10,
                      },

                      "& img": {
                        position: "absolute",

                        height: {
                          xs: "154%",
                          sm: "100%",
                          md: "100%",
                          lg: "100%",
                          xl: "100%",
                        },

                        width: {
                          xs: "194%",
                          sm: "100%",
                          md: "100%",
                          lg: "100%",
                          xl: "100%",
                        },

                        left: {
                          xs: "-33px",
                          sm: 0,
                          md: 0,
                          lg: 0,
                          xl: 0,
                        },

                        top: {
                          xs: "8px",
                          sm: 0,
                          md: 0,
                          lg: 0,
                          xl: 0,
                        },

                        right: 0,
                        bottom: 0,

                        objectFit: "contain",

                        maxWidth: {
                          xs: "137%",
                          sm: "100%",
                          md: "100%",
                          lg: "100%",
                          xl: "100%",
                        },
                      },
                    }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <Image
                        src="/Amitabhabhatia.png"
                        alt="Amitabha Bhatia"
                        fill
                        sizes="100%"
                        priority
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </motion.div>
                  </Box>
                </MotionBox>

                {/* =================================================
                    NAME
                ================================================== */}

                 <Typography
                  sx={{
                    ...authentic.personName,

                    mt: {
                      xs: 2,
                      sm: 2,
                      md: 2,
                    },

                    textAlign: "center",

                    color: colors.authenticText,
                  }}
                >
                  Amitabha Bhatia
                </Typography>

                {/* =================================================
                    ROLE
                ================================================== */}

                <Typography
                  sx={{
                    ...authentic.personRole,

                    opacity: 0.9,

                    textAlign: "center",

                    color:
                      colors.authenticText,
                      mt: {
                      xs: 1,
                      sm: 1,
                      md: 1,
                    },
                  }}
                >
                  Founder of AuthenticRelating.com
                </Typography>
              </Box>
            </Box>

            {/* =================================================
                RIGHT — CONTENT
            ================================================== */}

            <Box
              sx={{
                display: "flex",

                flexDirection: "column",

                order: {
                  xs: 2,
                  md: 2,
                },

                textAlign: {
                  xs: "center",
                  md: "left",
                },

                minWidth: 0,
              }}
            >
              {/* =================================================
                  MOBILE HEADER
              ================================================== */}

              <Box
                sx={{
                  mb: {
                    xs: 3,
                    md: 4,
                  },

                  display: {
                    xs: "block",
                    md: "none",
                  },
                }}
              >
                <MotionTypography
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  sx={{
                    ...authentic.mobileTitle,

                    color:
                      colors.authenticText,
                  }}
                >
                  Welcome to{" "}

                  <Box
                    component="span"
                    sx={{
                      ...authentic.mobileTitleSpan,
                    }}
                  >
                    Authentic Relating
                  </Box>
                </MotionTypography>

                <MotionTypography
                  sx={{
                    ...authentic.mobileSubtitle,

                    color:
                      colors.authenticText,

                    mt: 1,
                  }}
                >
                  Real. Human. Connection.
                </MotionTypography>
              </Box>

              {/* =================================================
                  BODY
              ================================================== */}

              <Typography
                sx={{
                  ...authentic.body,

                  color:
                    colors.authenticText,

                  opacity: 0.95,

                  mb: 4,

                  textAlign: {
                    xs: "center",
                    md: "left",
                  },

                  "& .bold": {
                    fontWeight: 700,
                     "& .lead": { fontStyle: "italic" },
                  },
                }}
              >
                Come as you are. Connect as you truly are.
                <br />

                Authentic Relating is more than an art and
                practice—it’s a way of being. A return to
                what's real in a world that so often rewards
                performance over presence, and speed over
                depth.
                <br />

                It begins with a simple, radical idea:
                <br />

                Who you are, as you are, is enough.
                <br />

                No masks. No performance. Just real people,
                meeting in real moments.
                <br />

                Here, we slow down.
                <br />

                We speak from the heart.
                <br />

                We listen to understand—not to reply.
                <br />

                We choose curiosity over judgment,
                connection over control.
                <br />

                This is where masks come off and
                conversations come alive.
                <br />

                Where silence can hold truth.
              </Typography>

              {/* =================================================
                  FINAL TEXT
              ================================================== */}

              <Typography
                sx={{
                  ...authentic.finalText,

                  color:
                    colors.authenticText,

                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                To be seen. To be heard. To belong.
                To come home to yourself and others.
                <br />

                This is Authentic Relating.
              </Typography>
            </Box>
          </Box>
        </MotionBox>
      </SiteContainer>
    </Section>
  );
};

export default AuthenticRelating;