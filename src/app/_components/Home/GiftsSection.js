// GiftsSection.jsx
"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import axiosInstance from "@/lib/axios";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DownloadIcon from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";

// Import theme, colors, spacing, typography
import colors from "../../../theme/colors";
import spacing from "../../../theme/spacing";
import typography from "../../../theme/typography";

// Import shared common
import Section from "../common/Section";
import SiteContainer from "../common/SiteContainer";

const MotionBox = motion(Box);

/* =========================================================
   CATEGORY GRADIENTS
========================================================= */
const categoryGradients = {
  "Free Videos": colors.gifts.categoryGradients.videos,
  "Free PDF": colors.gifts.categoryGradients.pdf,
  "Free Audios": colors.gifts.categoryGradients.audios,
  "My Video Collection": colors.gifts.categoryGradients.collection,
};

/* =========================================================
   API URL HELPER
========================================================= */
const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

const getFileUrl = (file) => {
  if (!file) return "";
  if (file.startsWith("http://") || file.startsWith("https://")) {
    return file;
  }
  return `${API_URL.replace(/\/$/, "")}/${file.replace(/^\//, "")}`;
};

/* =========================================================
   COMPONENT
========================================================= */
export default function GiftsSection() {
  const [data, setData] = useState([]);
  const [modalItem, setModalItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* =======================================================
     FETCH DATA
  ======================================================= */
  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Debug — remove in production
        console.log("[GiftsSection] API_URL:", API_URL);
        console.log("[GiftsSection] Fetching /frontendApis/getFreeStuff");

        const res = await axiosInstance.get("/frontendApis/getFreeStuff", {
          params: {
            size: 100,
            page: 0,
            search: "",
          },
        });

        const allData = Array.isArray(res?.data?.data) ? res.data.data : [];

        const sorted = [...allData].sort(
          (a, b) =>
            Number(a?.index_position || 0) - Number(b?.index_position || 0)
        );

        const firstVideo = sorted.find((item) => item?.type === "video");
        const firstPdf = sorted.find((item) => item?.type === "pdf");
        const firstAudio = sorted.find((item) => item?.type === "audio");
        const firstCollection = sorted.find(
          (item) => item?.type === "collection"
        );

        const selectedItems = [
          firstVideo,
          firstPdf,
          firstAudio,
          firstCollection,
        ].filter(Boolean);

        const finalData = selectedItems.map((item) => {
          let category = "";

          if (item.type === "video") category = "Free Videos";
          else if (item.type === "pdf") category = "Free PDF";
          else if (item.type === "audio") category = "Free Audios";
          else if (item.type === "collection")
            category = "My Video Collection";

          return {
            id: item._id || item.id || item.index_position,
            category,
            type:
              item.type === "video" || item.type === "collection"
                ? "video"
                : item.type,
            title: item.title || "Untitled",
            desc:
              item.description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: item.thumbnail || "",
            duration: item.duration || null,
            fileUrl: item.file_url || item.fileUrl || "",
            originalType: item.type,
          };
        });

        if (mounted) setData(finalData);
      } catch (err) {
        console.error("[GiftsSection] Error fetching data:", err);

        // Detailed diagnostics
        if (err.code === "ERR_NETWORK") {
          console.error(
            "→ Network error. Is the backend running at",
            API_URL,
            "?"
          );
        }
        if (err.response) {
          console.error(
            "→ Server responded with status:",
            err.response.status,
            err.response.data
          );
        }

        if (mounted) {
          setError(
            err?.message || "Failed to load free resources. Please try again."
          );
          setData([]);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  /* =======================================================
     DOWNLOAD FILE
  ======================================================= */
  const handleDownload = async (item) => {
    try {
      const url = getFileUrl(item?.fileUrl);
      if (!url) {
        console.error("File URL not found");
        return;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Download failed: ${response.status}`);
      }

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download =
        item?.title?.replace(/[^a-z0-9]/gi, "_") || "download";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Download error:", err);
      const url = getFileUrl(item?.fileUrl);
      if (url) {
        window.open(url, "_blank");
      }
    }
  };

  /* =======================================================
     MODAL CLOSE
  ======================================================= */
  const closeModal = () => {
    setModalItem(null);
  };

  /* =======================================================
     LOADING
  ======================================================= */
  if (loading) {
    return (
      <Section
        sx={{
          py: {
            xs: spacing.gifts.sectionY.xs / 4,
            sm: spacing.gifts.sectionY.sm / 4,
            md: spacing.gifts.sectionY.md / 4,
          },
        }}
      >
        <SiteContainer>
          <Typography
            sx={{
              fontFamily: typography.fonts.heading,
              fontSize: {
                xs: typography.gifts.title.fontSize.xs,
                sm: typography.gifts.title.fontSize.sm,
                md: typography.gifts.title.fontSize.md,
              },
              fontWeight: typography.weights.bold,
              color: colors.gifts.title,
            }}
          >
            Gifts for You
          </Typography>
          <Typography
            sx={{
              mt: spacing[2],
              color: colors.textMuted,
              fontFamily: typography.fonts.body,
            }}
          >
            Loading free resources...
          </Typography>
        </SiteContainer>
      </Section>
    );
  }

  /* =======================================================
     RENDER
  ======================================================= */
  return (
    <>
      <Section
        sx={{
          py: {
            xs: spacing.gifts.sectionY.xs / 4,
            sm: spacing.gifts.sectionY.sm / 4,
            md: spacing.gifts.sectionY.md / 4,
          },
        }}
      >
        <SiteContainer>
          {/* HEADER */}
          <Box
            sx={{
              mb: {
                xs: spacing.gifts.headerBottom.xs / 4,
                sm: spacing.gifts.headerBottom.sm / 4,
                md: spacing.gifts.headerBottom.md / 4,
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: typography.fonts.heading,
                fontWeight: typography.weights.bold,
                fontSize: {
                  xs: typography.gifts.title.fontSize.xs,
                  sm: typography.gifts.title.fontSize.sm,
                  md: typography.gifts.title.fontSize.md,
                },
                lineHeight: typography.gifts.title.lineHeight,
                letterSpacing: typography.gifts.title.letterSpacing,
                textAlign: typography.gifts.title.textAlign,
                color: colors.gifts.title,
                mb: spacing[2],
              }}
            >
              Gifts for You
            </Typography>

            <Typography
              sx={{
                fontFamily: typography.fonts.body,
                fontWeight: typography.weights.medium,
                fontSize: {
                  xs: typography.gifts.description.fontSize.xs,
                  sm: typography.gifts.description.fontSize.sm,
                  md: typography.gifts.description.fontSize.md,
                },
                lineHeight: typography.gifts.description.lineHeight,
                letterSpacing: typography.gifts.description.letterSpacing,
                color: colors.gifts.description,
                textAlign: typography.gifts.description.textAlign,
                maxWidth: "1440px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              sed urna elit. Ut in tincidunt lacus, at convallis risus. Orci
              varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </Typography>
          </Box>

          {/* ERROR STATE */}
          {error && (
            <Box
              sx={{
                py: spacing[4],
                px: spacing[2],
                mb: spacing[3],
                borderRadius: "12px",
                bgcolor: "#fff4f4",
                border: "1px solid #ffd0d0",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: typography.fonts.body,
                  fontWeight: typography.weights.semibold,
                  color: "#c0392b",
                  mb: 1,
                }}
              >
                Could not load free resources
              </Typography>
              <Typography
                sx={{
                  fontFamily: typography.fonts.body,
                  color: "#7a3434",
                  fontSize: 14,
                }}
              >
                {error}
              </Typography>
              <Typography
                sx={{
                  fontFamily: typography.fonts.body,
                  color: "#7a3434",
                  fontSize: 12,
                  mt: 1,
                }}
              >
                Check that the backend is running at{" "}
                <code>{API_URL || "(env var not set)"}</code>
              </Typography>
            </Box>
          )}

          {/* EMPTY STATE */}
          {!error && data.length === 0 && (
            <Box
              sx={{
                py: spacing[8],
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: typography.fonts.body,
                  color: colors.textMuted,
                }}
              >
                No free resources available.
              </Typography>
            </Box>
          )}

          {/* CARDS GRID */}
          {data.length > 0 && (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                },
                gap: {
                  xs: spacing.gifts.gridGap.xs / 4,
                  sm: spacing.gifts.gridGap.sm / 4,
                  md: spacing.gifts.gridGap.md / 4,
                },
                width: "100%",
              }}
            >
              {data.map((item, index) => {
                const gradient = categoryGradients[item.category];
                const isVideo =
                  item.category === "Free Videos" ||
                  item.category === "My Video Collection";
                const isAudio = item.category === "Free Audios";

                return (
                  <Box
                    key={item.id || `${item.category}-${index}`}
                    sx={{
                      minWidth: 0,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* CATEGORY TITLE */}
                    <Typography
                      sx={{
                        fontFamily: typography.fonts.heading,
                        fontWeight: typography.weights.bold,
                        fontSize: {
                          xs: typography.gifts.categoryTitle.fontSize.xs,
                          sm: typography.gifts.categoryTitle.fontSize.sm,
                          md: typography.gifts.categoryTitle.fontSize.md,
                        },
                        lineHeight: typography.gifts.categoryTitle.lineHeight,
                        mb: spacing.gifts.categoryBottom.xs / 4,
                        background: gradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        width: "fit-content",
                      }}
                    >
                      {item.category}
                    </Typography>

                    {/* CARD */}
                    <MotionBox
                      className="gift-card"
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      sx={{
                        borderRadius: "12px",
                        border: `1px solid ${colors.gifts.cardBorder}`,
                        backgroundColor: colors.gifts.cardBackground,
                        boxShadow: colors.gifts.cardShadow,
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        flex: 1,
                      }}
                    >
                      {/* IMAGE */}
                      <Box
                        sx={{
                          height: {
                            xs: spacing.gifts.imageHeight.xs,
                            sm: spacing.gifts.imageHeight.sm,
                            md: spacing.gifts.imageHeight.md,
                          },
                          bgcolor: colors.gifts.imageBackground,
                          borderRadius: "8px",
                          m: spacing.gifts.cardMargin.xs / 8,
                          overflow: "hidden",
                          transition: "all 0.3s ease",
                          ".gift-card:hover &": {
                            m: 0,
                            borderRadius: 0,
                            height: {
                              xs: spacing.gifts.imageHoverHeight.xs,
                              sm: spacing.gifts.imageHoverHeight.sm,
                              md: spacing.gifts.imageHoverHeight.md,
                            },
                          },
                        }}
                      >
                        {item.image ? (
                          <Box
                            component="img"
                            src={getFileUrl(item.image)}
                            alt={item.title || "Gift"}
                            sx={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              display: "block",
                              transition: "transform 0.4s ease",
                              ".gift-card:hover &": {
                                transform: "scale(1.03)",
                              },
                            }}
                          />
                        ) : (
                          <Box
                            sx={{
                              width: "100%",
                              height: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: colors.textMuted,
                              fontSize: "14px",
                            }}
                          >
                            <Typography>No Image</Typography>
                          </Box>
                        )}
                      </Box>

                      {/* CONTENT */}
                      <Box
                        sx={{
                          p: spacing.gifts.contentPadding.xs / 8,
                          display: "flex",
                          flexDirection: "column",
                          flexGrow: 1,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: typography.fonts.heading,
                            fontWeight: typography.weights.bold,
                            fontSize: {
                              xs: typography.gifts.cardTitle.fontSize.xs,
                              sm: typography.gifts.cardTitle.fontSize.sm,
                              md: typography.gifts.cardTitle.fontSize.md,
                            },
                            lineHeight:
                              typography.gifts.cardTitle.lineHeight,
                            letterSpacing:
                              typography.gifts.cardTitle.letterSpacing,
                            mb: spacing[1],
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          sx={{
                            fontFamily: typography.fonts.body,
                            fontWeight: typography.weights.regular,
                            fontSize: {
                              xs: typography.gifts.cardDescription.fontSize
                                .xs,
                              sm: typography.gifts.cardDescription.fontSize
                                .sm,
                              md: typography.gifts.cardDescription.fontSize
                                .md,
                            },
                            lineHeight: {
                              xs: typography.gifts.cardDescription.lineHeight
                                .xs,
                              sm: typography.gifts.cardDescription.lineHeight
                                .sm,
                              md: typography.gifts.cardDescription.lineHeight
                                .md,
                            },
                            letterSpacing:
                              typography.gifts.cardDescription.letterSpacing,
                            color: colors.gifts.description,
                            mb: spacing[2],
                            flexGrow: 1,
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {item.desc}
                        </Typography>

                        {/* BUTTON */}
                        <Button
                          fullWidth
                          variant="contained"
                          disableElevation
                          startIcon={
                            isVideo ? (
                              <PlayArrowIcon />
                            ) : isAudio ? (
                              <HeadphonesIcon />
                            ) : (
                              <OpenInNewIcon />
                            )
                          }
                          onClick={() => setModalItem(item)}
                          sx={{
                            height: spacing.gifts.buttonHeight.xs,
                            borderRadius: "8px",
                            textTransform: "none",
                            fontFamily: typography.fonts.body,
                            fontSize: typography.gifts.button.fontSize.xs,
                            fontWeight: typography.weights.medium,
                            background: gradient,
                            color: colors.gifts.white,
                            position: "relative",
                            overflow: "hidden",
                            boxShadow: "none",
                            "&::before": {
                              content: '""',
                              position: "absolute",
                              inset: 0,
                              borderRadius: "8px",
                              padding: "1.5px",
                              background: colors.gifts.buttonBorder,
                              WebkitMask:
                                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                              WebkitMaskComposite: "xor",
                              maskComposite: "exclude",
                              pointerEvents: "none",
                            },
                            "& > *": {
                              position: "relative",
                              zIndex: 1,
                            },
                            "&:hover": {
                              opacity: colors.gifts.buttonHoverOpacity,
                              background: gradient,
                              boxShadow: "none",
                            },
                          }}
                        >
                          {isVideo
                            ? "Watch Now"
                            : isAudio
                            ? "Listen Now"
                            : "View Document"}
                        </Button>
                      </Box>
                    </MotionBox>
                  </Box>
                );
              })}
            </Box>
          )}
        </SiteContainer>
      </Section>

      {/* MODAL */}
      {modalItem && (
        <Box
          onClick={closeModal}
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: colors.gifts.modalOverlay,
            backdropFilter: "blur(6px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: {
              xs: spacing[1],
              sm: spacing[2],
            },
          }}
        >
          <Box
            onClick={(event) => event.stopPropagation()}
            sx={{
              width: "100%",
              maxWidth: modalItem.category === "Free PDF" ? 1000 : 860,
              maxHeight: "95vh",
              borderRadius: {
                xs: spacing[2],
                sm: spacing[3],
              },
              overflow: "hidden",
              bgcolor: colors.gifts.modalBackground,
              boxShadow: "0 20px 80px rgba(0,0,0,0.5)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Modal Header */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: {
                  xs: spacing.gifts.modalPadding.xs / 8,
                  sm: spacing.gifts.modalPadding.sm / 8,
                },
                py: spacing[1],
                background: categoryGradients[modalItem.category],
                flexShrink: 0,
              }}
            >
              <Typography
                sx={{
                  color: colors.gifts.white,
                  fontFamily: typography.fonts.body,
                  fontWeight: typography.weights.semibold,
                  fontSize: {
                    xs: typography.gifts.modalTitle.fontSize.xs,
                    sm: typography.gifts.modalTitle.fontSize.sm,
                  },
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  pr: spacing[2],
                }}
              >
                {modalItem.title}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: spacing[1],
                  flexShrink: 0,
                }}
              >
                <IconButton
                  size="small"
                  onClick={() => handleDownload(modalItem)}
                  sx={{
                    color: colors.gifts.white,
                    bgcolor: colors.gifts.modalHeaderOverlay,
                    borderRadius: "8px",
                    width: 34,
                    height: 34,
                    "&:hover": {
                      bgcolor: colors.gifts.modalHeaderHover,
                    },
                  }}
                >
                  <DownloadIcon fontSize="small" />
                </IconButton>

                <IconButton
                  size="small"
                  onClick={closeModal}
                  sx={{
                    color: colors.gifts.white,
                    bgcolor: colors.gifts.closeBackground,
                    borderRadius: "8px",
                    width: 34,
                    height: 34,
                    "&:hover": {
                      bgcolor: colors.gifts.closeHoverBackground,
                    },
                  }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>

            {/* Modal Body */}
            <Box
              sx={{
                bgcolor: colors.gifts.modalBodyBackground,
                overflow: "auto",
                flex: 1,
              }}
            >
              {/* Video */}
              {(modalItem.category === "Free Videos" ||
                modalItem.category === "My Video Collection") && (
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    bgcolor: "#000",
                  }}
                >
                  <Box
                    component="video"
                    src={getFileUrl(modalItem.fileUrl)}
                    controls
                    autoPlay
                    playsInline
                    sx={{
                      display: "block",
                      width: "100%",
                      maxHeight: "70vh",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              )}

              {/* Audio */}
              {modalItem.category === "Free Audios" && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    py: {
                      xs: spacing.gifts.audioPaddingY.xs / 4,
                      sm: spacing.gifts.audioPaddingY.sm / 4,
                    },
                    px: {
                      xs: spacing.gifts.audioPaddingX.xs / 4,
                      sm: spacing.gifts.audioPaddingX.sm / 4,
                    },
                    gap: spacing[3],
                    bgcolor: colors.gifts.audioBackground,
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 130, sm: 160 },
                      height: { xs: 130, sm: 160 },
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: `4px solid ${colors.gifts.categoryGradients.audios
                        .split(",")[0]
                        .replace("linear-gradient(", "")
                        .trim()}`,
                      boxShadow: "0 0 30px rgba(50,215,227,0.25)",
                      bgcolor: colors.gifts.audioPlaceholder,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {modalItem.image ? (
                      <Box
                        component="img"
                        src={getFileUrl(modalItem.image)}
                        alt={modalItem.title}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    ) : (
                      <Typography sx={{ fontSize: 48 }}>🎵</Typography>
                    )}
                  </Box>

                  <Box sx={{ textAlign: "center", maxWidth: 600 }}>
                    <Typography
                      sx={{
                        fontFamily: typography.fonts.body,
                        fontSize: typography.gifts.audioTitle.fontSize,
                        fontWeight: typography.weights.semibold,
                        color: colors.gifts.white,
                        mb: 0.5,
                      }}
                    >
                      {modalItem.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: typography.fonts.body,
                        fontSize: typography.gifts.audioDescription.fontSize,
                        color: colors.gifts.audioMutedText,
                      }}
                    >
                      {modalItem.desc}
                    </Typography>
                  </Box>

                  <Box
                    component="audio"
                    src={getFileUrl(modalItem.fileUrl)}
                    controls
                    autoPlay
                    sx={{
                      width: "100%",
                      maxWidth: 480,
                    }}
                  />
                </Box>
              )}

              {/* PDF */}
              {modalItem.category === "Free PDF" && (
                <Box
                  sx={{
                    width: "100%",
                    height: {
                      xs: "70vh",
                      sm: "75vh",
                      md: "600px",
                    },
                  }}
                >
                  <Box
                    component="iframe"
                    src={getFileUrl(modalItem.fileUrl)}
                    title={modalItem.title || "PDF Document"}
                    sx={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      display: "block",
                    }}
                  />
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}