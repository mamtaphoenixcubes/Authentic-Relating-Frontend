"use client";

import {
  Box,
  Card,
  Grid,
  Typography,
  CardContent,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axios";

import SiteContainer from "@/app/_components/common/SiteContainer";

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionTypography = motion(Typography);

/* ---------- Static data: Ways to Engage ---------- */
const cards = [
  { img: "/Employee.png", title: "Weekly Online Practice Circles", desc: "Join our guided drop-in sessions to practice authentic relating games in real-time with others from around the world. All are welcome." },
  { img: "/svg/community/localmeetups.svg", title: "Local Meetups & Chapters", desc: "Find or start an Authentic Relating community in your city. We offer toolkits, mentorship, and support for local hosts." },
  { img: "/svg/community/eventsretreats.svg", title: "Events, Retreats & Festivals", desc: "Attend immersive experiences designed to deepen practice and relationships—from weekend intensives to week-long relational journeys." },
  { img: "/svg/community/communityforum.svg", title: "Community Forum & Online Space", desc: "Connect with members, ask questions, share insights, and find upcoming events in our private online hub." },
  { img: "/svg/community/memberspotlights.svg", title: "Member Spotlights & Stories", desc: "Celebrate the humans that make this community extraordinary. Read stories of transformation, connection, and awakening." },
];

export const Community = () => {
  const theme = useTheme();
  const cm = theme.custom.community;

  const [communitySections, setCommunitySections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommunity = async () => {
      try {
        const res = await axiosInstance.get("/frontendApis/getAllCommunities", {
          params: { size: 20, page: 0, search: "" },
        });
        const sorted = (res?.data?.communities || []).sort(
          (a, b) => a.index_position - b.index_position
        );
        setCommunitySections(sorted);
      } catch (err) {
        console.error("Community API error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCommunity();
  }, []);

  if (loading) {
    return (
      <SiteContainer>
        <Box sx={cm.loading}>
          <Typography sx={cm.loadingText}>Loading...</Typography>
        </Box>
      </SiteContainer>
    );
  }

  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cm.motion.container}
    >
      {/* =========================================================
          DYNAMIC COMMUNITY SECTIONS
      ========================================================= */}
      <SiteContainer sx={cm.container}>
        <MotionBox variants={cm.motion.fadeInUp} sx={cm.sectionsWrapper}>
          {communitySections.map((section, index) => {
            const isEven = index % 2 === 0;

            return (
              <Grid
                key={section._id}
                container
                alignItems={cm.sectionRow.container.alignItems}
                columnSpacing={cm.sectionRow.container.columnSpacing}
                rowSpacing={cm.sectionRow.container.rowSpacing}
                sx={{ mb: cm.sectionRow.mb }}
              >
                {/* IMAGE SIDE */}
                <Grid
                  item
                  xs={12}
                  sm={6}
                  order={{ xs: 1, sm: isEven ? 2 : 1 }}
                  sx={cm.imageGridItem}
                >
                  <MotionCard
                    variants={isEven ? cm.motion.slideInLeft : cm.motion.slideInRight}
                    sx={cm.imageCard}
                  >
                    <CardContent sx={cm.imageCardContent}>
                      {section.image && (
                        <img
                          src={`${process.env.NEXT_PUBLIC_API_URL}/${section.image}`}
                          alt={section.title}
                          style={cm.imageElement}
                        />
                      )}
                    </CardContent>
                  </MotionCard>
                </Grid>

                {/* TEXT SIDE */}
                <Grid
                  item
                  xs={12}
                  sm={6}
                  order={{ xs: 2, sm: isEven ? 1 : 2 }}
                  sx={cm.textGridItem}
                >
                  <MotionBox
                    variants={isEven ? cm.motion.slideInRight : cm.motion.slideInLeft}
                    sx={cm.textBox}
                  >
                    <MotionTypography
                      {...cm.motion.title}
                      sx={cm.sectionTitle}
                    >
                      {section.title}
                    </MotionTypography>

                    <MotionTypography
                      {...cm.motion.description}
                      sx={cm.sectionDescription}
                    >
                      <span
                        dangerouslySetInnerHTML={{ __html: section.description }}
                      />
                    </MotionTypography>
                  </MotionBox>
                </Grid>
              </Grid>
            );
          })}
        </MotionBox>
      </SiteContainer>

      {/* =========================================================
          CARDS SECTION — "Ways to Engage"
      ========================================================= */}
      <SiteContainer sx={cm.container}>
        <MotionBox variants={cm.motion.fadeInUp} sx={cm.cardWrapper}>
          <MotionTypography
            {...cm.motion.title}
            sx={cm.cardWrapperHeading}
          >
            Ways to Engage
          </MotionTypography>

          <Grid
            container
            spacing={cm.cardsGrid.container.spacing}
            justifyContent={cm.cardsGrid.container.justifyContent}
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cm.motion.container}
          >
            {cards.map((item, index) => (
              <Grid item xs={6} sm={4} md={4} key={index}>
                <MotionCard
                  custom={index}
                  variants={cm.motion.cardHover}
                  whileHover="hover"
                  sx={cm.card}
                >
                  <CardContent sx={cm.cardContent}>
                    <MotionBox
                      {...cm.motion.cardIcon(index)}
                      sx={cm.cardIcon}
                    >
                      <motion.img
                        src={item.img}
                        alt={item.title}
                        {...cm.motion.cardIconImg(index)}
                        style={cm.cardIconImg}
                      />
                    </MotionBox>

                    <MotionTypography
                      {...cm.motion.cardTitle(index)}
                      sx={cm.cardTitle}
                    >
                      {item.title}
                    </MotionTypography>

                    <MotionTypography
                      {...cm.motion.cardDescription(index)}
                      sx={cm.cardDescription}
                    >
                      {item.desc}
                    </MotionTypography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </MotionBox>
      </SiteContainer>
    </MotionBox>
  );
};