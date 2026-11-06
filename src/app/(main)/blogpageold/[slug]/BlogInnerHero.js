'use client';

import {
  Box,
  Typography,
  Stack,
} from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import sanitizeHtml from "sanitize-html";

// Import your components
import SiteContainer from '../../../_components/common/SiteContainer';
import Section from '../../../_components/common/Section';

const MotionTypography = motion(Typography);
const MotionBox = motion(Box);

/* 🔹 Reusable animated line */
const AnimatedLine = ({ children, delay = 0, ...props }) => (
  <MotionTypography
    {...props}
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.8 }}
    transition={{ duration: 0.45, delay }}
    sx={{ display: 'block', ...props.sx }}
  >
    {children}
  </MotionTypography>
);

/* 🔹 Reusable animated paragraph */
const AnimatedParagraph = ({ children, delay = 0, ...props }) => (
  <Typography
    component={motion.p}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.4, delay }}
    {...props}
  >
    {children}
  </Typography>
);

export default function BlogInnerHero({ data }) {
  // ✅ Add fallback if data is missing
  if (!data) {
    return null;
  }

  // ✅ Get data from props with fallbacks
  const author = data.author || "Shalini Jivraj";
  const authorImg = data.authorImage || "/person.png";
  const categoryTitle = data.category_id?.title || "Uncategorized";
  const title = data.title || "Untitled";
  const introduction = data.introduction || "";
  
  // ✅ Format date from API
  const formattedDate = data.createdAt 
    ? new Date(data.createdAt).toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      })
    : 'April 9, 2022';

  // ✅ Get read time from API or use default
  const readTime = data.readTime || '5 min read';

  // ✅ Get caption from API or use default
  const caption = data.caption || 'Photo: Authentic connection in practice during one of our workshops';

  const renderDescription = () => {
    if (!data?.description) return null;

    let html = data.description;

    /* ================= QUOTE WRAPPER ================= */
    html = html.replace(
      /\{quote start\}/g,
      `<div class="custom-quote">`
    );

    html = html.replace(
      /\{quote end\}/g,
      `</div>`
    );

    /* Remove empty paragraphs */
    html = html.replace(/<p>\s*<\/p>/g, "");

    /* ================= SANITIZE ================= */
    const cleanHtml = sanitizeHtml(html, {
      allowedTags: [
        "p",
        "br",
        "strong",
        "em",
        "b",
        "i",
        "ul",
        "ol",
        "li",
        "span",
        "div",
        "h3"
      ],
      allowedAttributes: {
        div: ["class"],
        span: ["style"],
      }
    });

    return cleanHtml;
  };

  return (
    <Section sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 6, md: 10 } }}>
      <SiteContainer>
        {/* CATEGORY */}
        <AnimatedLine
          variant="caption"
          color="text.secondary"
          textAlign="center"
          display="block"
          mb={1}
        >
          {categoryTitle}
        </AnimatedLine>

        {/* TITLE */}
        <AnimatedLine
          variant="h4"
          textAlign="center"
          fontWeight={600}
          color="#FF5A3C"
          mb={2}
        >
          {title}
        </AnimatedLine>

        {/* AUTHOR INFO */}
        <MotionBox
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
            mb={4}
            flexWrap="wrap"
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <MotionBox
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  position: 'relative',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={authorImg}
                  alt={author}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </MotionBox>
              <Typography
                component={motion.span}
                variant="body2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {author}
              </Typography>
            </Box>

            <Typography
              component={motion.span}
              variant="body2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              • {formattedDate}
            </Typography>
            <Typography
              component={motion.span}
              variant="body2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              • {readTime}
            </Typography>
          </Stack>
        </MotionBox>

        {/* FEATURED IMAGE */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{ mb: 4 }}
        >
          <MotionBox
            sx={{
              width: '100%',
              height: { xs: 200, sm: 280, md: 360 },
              borderRadius: 2,
              mb: 1,
              position: 'relative',
              overflow: 'hidden',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {data.image && (
              <Box
                component="img"
                src={`${process.env.NEXT_PUBLIC_API_URL}/${data.image}`}
                alt={title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            )}
          </MotionBox>

          {/* CAPTION TEXT - ✅ Now dynamic */}
          <Typography
            component={motion.p}
            sx={{
              fontFamily: '"Red Hat Display", sans-serif',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: '14px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: 'text.secondary',
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {caption}
          </Typography>
        </MotionBox>

        {/* INTRO */}
        <AnimatedParagraph delay={0.1}>
          {introduction}
        </AnimatedParagraph>

        {/* MAIN CONTENT */}
        <Box
          sx={{
            fontFamily: "var(--font-redhat)",

            /* ================= MAIN HEADINGS (<strong>) ================= */
            "& p strong": {
              fontWeight: 700,
              fontSize: "28px",
              lineHeight: "100%",
              display: "block",
              marginTop: "32px",
              marginBottom: "16px",
            },

            /* ================= NUMBERED HEADINGS (<h3>) ================= */
            "& h3": {
              fontWeight: 600,
              fontSize: "22px",
              lineHeight: "100%",
              marginTop: "24px",
              marginBottom: "12px",
            },

            /* ================= PARAGRAPHS ================= */
            "& p": {
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "32px",
              marginBottom: "18px",
            },

            /* ================= QUOTE ================= */
            "& .custom-quote": {
              borderLeft: "4px solid #FF5A3C",
              paddingLeft: "16px",
              margin: "32px 0",
            },

            "& .custom-quote p": {
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "28px",
              lineHeight: "100%",
              color: "#FF5A3C",
              marginBottom: "6px",
            },
          }}
          dangerouslySetInnerHTML={{ __html: renderDescription() }}
        />
      </SiteContainer>
    </Section>
  );
}