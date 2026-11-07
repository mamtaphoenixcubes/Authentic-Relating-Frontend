"use client";

import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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

  return (
    <Box
      sx={{
        py: {
          xs: spacing.clientTestimonial.sectionY.xs / 4,
          md: spacing.clientTestimonial.sectionY.xs / 6,
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
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          style={{ width: "100%" }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} style={{ height: "auto" }}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onMouseEnter={(event) =>
                  event.currentTarget.closest(".swiper")?.swiper?.autoplay.stop()
                }
                onMouseLeave={(event) =>
                  event.currentTarget.closest(".swiper")?.swiper?.autoplay.start()
                }
                onTouchStart={(event) =>
                  event.currentTarget.closest(".swiper")?.swiper?.autoplay.stop()
                }
                onTouchEnd={(event) =>
                  event.currentTarget.closest(".swiper")?.swiper?.autoplay.start()
                }
                sx={{
                  ...testimonial.card,
                  minHeight: {
                    xs: "auto",
                    md: testimonial.card.minHeight.md,
                  },
                  "@media (min-width: 786px)": {
                    minHeight: "auto",
                    py: 3,
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
                      mt: { xs: "auto", md: 2 },
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
      </Container>
    </Box>
  );
}
