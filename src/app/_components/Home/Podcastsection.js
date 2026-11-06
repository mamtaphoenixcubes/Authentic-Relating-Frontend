// src/app/_components/podcast/PodcastSection.jsx
"use client";

import Image from "next/image";
import { Box, Typography, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import axiosInstance from "@/lib/axios";

// 👇 adjust these paths to where your files actually live
import Section from "../common/Section";
import SiteContainer from "../common/SiteContainer";
import { UnifiedButton } from "../buttons";
import colors from "../../../theme/colors";
import spacing from "../../../theme/spacing";
import typography from "../../../theme/typography";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

const getFileUrl = (file) => {
  if (!file) return "";
  if (/^https?:\/\//i.test(file)) return file;

  const normalizedPath = file.replace(/\\/g, "/").replace(/^\/+/, "");
  return `${API_URL.replace(/\/$/, "")}/${normalizedPath}`;
};

export default function PodcastSection({
  title = "Our Podcast",
  description = "Authentic Relating Vibes the official podcast of AuthenticRelating.com, hosted by our founder Amitabha Bhatia. Through real conversations and reflections, this podcast explores the art of human connection, presence, and truth. Tune in for deep, honest, and transformational episodes on how to relate — in life, love, work, and the world.",
  topEpisodesTitle = "Top Episodes",
  heroImage = "/EventsAndTestimonials1.png", // must start with "/" and live in /public
  logoImage = "/EventsAndTestimonials2.png", // logo shown in the white oval
  onPlay,
  onViewAll,
}) {
  const theme = useTheme();
  const router = useRouter();
  const s = theme.custom.podcastSection;
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchEpisodes = async () => {
      try {
        const res = await axiosInstance.get("/frontendApis/getpodcasts", {
          params: { size: 100, page: 0, search: "" },
          signal: controller.signal,
        });

        const podcasts = [...(res?.data?.data?.podcasts || [])].sort(
          (a, b) => a.index_position - b.index_position
        );
        const topEpisodes = podcasts.flatMap((podcast) =>
          (podcast.episodes || []).map((episode, index) => {
            return {
              id: `${podcast._id}-${index}`,
              title: episode.episodeTitle || podcast.title,
              duration: episode.duration || "",
              image: getFileUrl(podcast.image),
              audioFile: getFileUrl(episode.audioFile),
              podcast,
              episode,
            };
          })
        );

        setEpisodes(topEpisodes.slice(0, 3));
      } catch (error) {
        if (error.name !== "CanceledError" && error.code !== "ERR_CANCELED") {
          console.error("API error:", error);
        }
      }
    };

    fetchEpisodes();
    return () => controller.abort();
  }, []);

  return (
    <Section sx={s.section}>
      <SiteContainer>
        <Box sx={s.grid}>
          {/* ================= LEFT — IMAGE CARD ================= */}
          <Box sx={s.imageCard}>
            <Image
              src={heroImage}
              alt="Vintage microphone in a podcast studio"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              style={s.image}
            />

           
              <Box sx={s.logoInner}>
                <Image
                  src={logoImage}
                  alt="Authentic Relating Vibes"
                  fill
                  sizes="300px"
                  style={{ objectFit: "contain" }}
                />
              </Box>
          
          </Box>

          {/* ================= RIGHT — CONTENT ================= */}
          <Box sx={s.content}>
            <Typography component="h2" sx={s.title}>
              {title}
            </Typography>

            <Typography sx={s.description}>{description}</Typography>

            <Typography component="h3" sx={s.topTitle}>
              {topEpisodesTitle}
            </Typography>

            <Box sx={s.episodesGrid}>
              {episodes.map((ep) => (
                <Box key={ep.id} sx={s.episodeCard}>
                  <Box sx={s.episodeImage}>
                    {ep.image && (
                      <Image
                        src={ep.image}
                        alt={ep.title}
                        fill
                        sizes="(max-width: 900px) 30vw, 12vw"
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </Box>

                  <Box sx={s.episodeInfo}>
                    <Typography sx={s.episodeTitle}>{ep.title}</Typography>

                    <Box sx={s.episodeMetaRow}>
                      <Typography component="span" sx={s.episodeMeta}>
                        {ep.duration}
                      </Typography>

                      <Box
                        component="button"
                        type="button"
                        aria-label={`Play ${ep.title}`}
                        onClick={() => {
                          onPlay?.(ep);
                          setSelectedEpisode(ep);
                        }}
                        sx={s.playButton}
                      >
                        Play
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>

            <UnifiedButton
              variant="default"
              size="medium"
              onClick={() => {
                onViewAll?.();
                router.push("/podcasts/");
              }}
              sx={s.viewAllButton}
            >
              View All Episodes
            </UnifiedButton>
          </Box>
        </Box>
      </SiteContainer>

      {selectedEpisode && (
        <Box
          onClick={() => setSelectedEpisode(null)}
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: colors.gifts.modalOverlay,
            backdropFilter: "blur(6px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: { xs: spacing[1], sm: spacing[2] },
          }}
        >
          <Box
            role="dialog"
            aria-modal="true"
            aria-label={`Play ${selectedEpisode.title}`}
            onClick={(event) => event.stopPropagation()}
            sx={{
              width: "100%",
              maxWidth: 860,
              maxHeight: "95vh",
              borderRadius: { xs: spacing[2], sm: spacing[3] },
              overflow: "hidden",
              bgcolor: colors.gifts.modalBackground,
              boxShadow: "0 20px 80px rgba(0,0,0,0.5)",
              display: "flex",
              flexDirection: "column",
            }}
          >
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
                background: colors.gifts.categoryGradients.audios,
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
                {selectedEpisode.title}
              </Typography>

              <IconButton
                size="small"
                aria-label="Close audio player"
                onClick={() => setSelectedEpisode(null)}
                sx={{
                  color: colors.gifts.white,
                  bgcolor: colors.gifts.closeBackground,
                  borderRadius: "8px",
                  width: 34,
                  height: 34,
                  "&:hover": { bgcolor: colors.gifts.closeHoverBackground },
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>

            <Box
              sx={{
                bgcolor: colors.gifts.audioBackground,
                overflow: "auto",
                flex: 1,
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
                {selectedEpisode.image ? (
                  <Box
                    component="img"
                    src={selectedEpisode.image}
                    alt={selectedEpisode.title}
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
                  {selectedEpisode.title}
                </Typography>
              </Box>

              <Box
                component="audio"
                src={selectedEpisode.audioFile}
                controls
                autoPlay
                sx={{ width: "100%", maxWidth: 480 }}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Section>
  );
}
