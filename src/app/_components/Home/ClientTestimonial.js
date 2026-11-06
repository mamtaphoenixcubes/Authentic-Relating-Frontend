"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

import colors from "../../../theme/colors";
import typography from "../../../theme/typography";
import spacing from "../../../theme/spacing";
import theme from "../../../theme/theme";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function ClientTestimonial() {
  const testimonial = theme.custom.clientTestimonial;

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
        {/* Heading */}
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

        {/* Card */}
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
          {/* Text */}
          <Typography
            sx={{
              ...testimonial.text,
              mb: {
                xs: spacing.clientTestimonial.textBottom.xs / 4,
                md: spacing.clientTestimonial.textBottom.md / 4,
              },
            }}
          >
            Master emotional intelligence and resilience by learning to identify,
            process, and regulate emotions. Explore different types of emotions—
            primary, social, complex, survival-based, and expansive—and develop
            tools for self-awareness, mindfulness, and emotional balance.
          </Typography>

          {/* User Info */}
          <Box
            sx={{
              ...testimonial.userInfo,
              mt: "auto",
            }}
          >
            {/* Avatar */}
            <Box
              component="img"
              src="https://i.pravatar.cc/100"
              alt="user"
              sx={{
                ...testimonial.avatar,
              }}
            />

            {/* Name + Role */}
            <Box>
              <Typography
                sx={{
                  ...testimonial.userName,
                }}
              >
                Mark Patrick
              </Typography>

              <Typography
                sx={{
                  ...testimonial.userRole,
                }}
              >
                Founder & CEO Lorem Ipsum
              </Typography>
            </Box>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}