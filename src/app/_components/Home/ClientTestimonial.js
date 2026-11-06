"use client";

import { Box, Typography, Container, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useRef } from "react";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import spacing from "../../../theme/spacing";
import theme from "../../../theme/theme";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const testimonials = [
  {
    id: 1,
    text: "Master emotional intelligence and resilience by learning to identify, process, and regulate emotions. Explore different types of emotions and develop tools for self-awareness, mindfulness, and emotional balance.",
    name: "Mark Patrick",
    role: "Founder & CEO Lorem Ipsum",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 2,
    text: "Authentic Relating helped me listen with more curiosity and show up with greater honesty. The practices have made a meaningful difference in how I connect with people at work and at home.",
    name: "Sarah Mitchell",
    role: "Community Facilitator",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    id: 3,
    text: "I have learned to stay present in conversations, even when they feel challenging. These tools bring more openness, care, and real connection into my relationships.",
    name: "Daniel Rivera",
    role: "Leadership Coach",
    avatar: "https://i.pravatar.cc/100?img=68",
  },
];

export default function ClientTestimonial() {
  const testimonial = theme.custom.clientTestimonial;
  const swiperRef = useRef(null);

  return (
    <Box
      sx={{
        py: {
          xs: spacing.clientTestimonial.sectionY.xs / 4,
          md: spacing.clientTestimonial.sectionY.xs / 8,
        },
      }}
    >
      <Container maxWidth="md">
        <MotionTypography
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center"
          sx={{
            ...testimonial.title,
            mb: {
              xs: spacing.clientTestimonial.headerBottom.xs / 4,
              md: spacing.clientTestimonial.headerBottom.md / 4,
            },
          }}
        >
          What Our Clients Say?
        </MotionTypography>

        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          pagination={{ clickable: true }}
          style={{ width: "100%", paddingBottom: 36 }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} style={{ height: "auto" }}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                sx={{
                  ...testimonial.card,
                  minHeight: {
                    xs: "auto",
                    md: testimonial.card.minHeight.md,
                  },
                }}
              >
                  <Typography
                    sx={{
                      ...testimonial.text,
                      mb: {
                        xs: spacing.clientTestimonial.textBottom.xs / 4,
                        md: spacing.clientTestimonial.textBottom.md / 4,
                      },
                    }}
                  >
                    {item.text}
                  </Typography>

                  <Box
                    sx={{
                      ...testimonial.userInfo,
                      mt: "auto",
                    }}
                  >
                    <Box
                      component="img"
                      src={item.avatar}
                      alt={item.name}
                      sx={{ ...testimonial.avatar }}
                    />
                    <Box>
                      <Typography sx={{ ...testimonial.userName }}>
                        {item.name}
                      </Typography>
                      <Typography sx={{ ...testimonial.userRole }}>
                        {item.role}
                      </Typography>
                    </Box>
                  </Box>
              </MotionBox>
            </SwiperSlide>
          ))}
        </Swiper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 1,
          }}
        >
          <IconButton
            aria-label="Previous testimonial"
            onClick={() => swiperRef.current?.slidePrev()}
            sx={{
              width: 42,
              height: 42,
              color: "#647521",
              bgcolor: "#ffffff",
              border: "1px solid rgba(119, 129, 24, 0.35)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              "&:hover": {
                bgcolor: "#778118",
                color: "#ffffff",
              },
            }}
          >
            <ChevronLeftRoundedIcon />
          </IconButton>
          <IconButton
            aria-label="Next testimonial"
            onClick={() => swiperRef.current?.slideNext()}
            sx={{
              width: 42,
              height: 42,
              color: "#647521",
              bgcolor: "#ffffff",
              border: "1px solid rgba(119, 129, 24, 0.35)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              "&:hover": {
                bgcolor: "#778118",
                color: "#ffffff",
              },
            }}
          >
            <ChevronRightRoundedIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
