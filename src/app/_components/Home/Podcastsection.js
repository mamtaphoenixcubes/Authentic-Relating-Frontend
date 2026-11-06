// src/app/_components/podcast/PodcastSection.jsx
"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// 👇 adjust these paths to where your files actually live
import Section from "../common/Section";
import SiteContainer from "../common/SiteContainer";
import { UnifiedButton } from "../buttons";

const DEFAULT_EPISODES = [
  { id: 1, title: "Lorem Ipsum", duration: "15 min", image: "/podcast/episode-1.png" },
  { id: 2, title: "Lorem Ipsum", duration: "15 min", image: "/podcast/episode-1.png" },
  { id: 3, title: "Lorem Ipsum", duration: "15 min", image: "/podcast/episode-1.png" },
];

export default function PodcastSection({
  title = "Our Podcast",
  description = "Authentic Relating Vibes the official podcast of AuthenticRelating.com, hosted by our founder Amitabha Bhatia. Through real conversations and reflections, this podcast explores the art of human connection, presence, and truth. Tune in for deep, honest, and transformational episodes on how to relate — in life, love, work, and the world.",
  topEpisodesTitle = "Top Episodes",
  heroImage = "/EventsAndTestimonials1.png", // must start with "/" and live in /public
  logoImage = "/EventsAndTestimonials2.png", // logo shown in the white oval
  episodes = DEFAULT_EPISODES,
  onPlay,
  onViewAll,
}) {
  const theme = useTheme();
  const s = theme.custom.podcastSection;

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
                    <Image
                      src={ep.image}
                      alt={ep.title}
                      fill
                      sizes="(max-width: 900px) 30vw, 12vw"
                      style={{ objectFit: "cover" }}
                    />
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
                        onClick={() => onPlay?.(ep)}
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
              onClick={onViewAll}
              sx={s.viewAllButton}
            >
              View All Episodes
            </UnifiedButton>
          </Box>
        </Box>
      </SiteContainer>
    </Section>
  );
}