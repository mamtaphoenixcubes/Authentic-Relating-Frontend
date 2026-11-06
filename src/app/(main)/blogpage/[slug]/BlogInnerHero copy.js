'use client';

import {
  Box,
  Container,
  Typography,
  Stack,
} from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import sanitizeHtml from "sanitize-html";

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

/* 🔹 Reusable animated block */
const AnimatedBlock = ({ children, delay = 0, ...props }) => (
  <MotionBox
    {...props}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </MotionBox>
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

/* 🔹 Reusable animated heading */
const AnimatedHeading = ({ children, delay = 0, ...props }) => (
  <Typography
    component={motion.h3}
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.45, delay }}
    {...props}
  >
    {children}
  </Typography>
);

export default function BlogInnerHero({data}) {
  // Define these variables or pass them as props
  const author = "Shalini Jivraj";
  const authorImg = "/person.png"; // Add your image path

  const renderDescription = () => {
    if (!data?.description) return null;

    let html = data.description;

    // 🔹 Replace quote markers with styled block wrapper
    html = html.replace(
      "{quote start}",
      `<div class="custom-quote">`
    );

    html = html.replace(
      "{quote end}",
      `</div>`
    );

    // 🔹 Sanitize (very important for rich text from backend)
    const cleanHtml = sanitizeHtml(html, {
      allowedTags: [
        "p", "br", "strong", "em", "b", "i",
        "ul", "ol", "li", "span", "div"
      ],
      allowedAttributes: {
        span: ["style"],
        div: ["class"]
      }
    });

    return cleanHtml;
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        pt: { xs: 4, md: 20 },
        pb: { xs: 4, md: 8 }
      }}
    >

      {/* CATEGORY */}
      <AnimatedLine
        variant="caption"
        color="text.secondary"
        textAlign="center"
        display="block"
        mb={1}
      >
        RELATIONSHIPS • SELF-AWARENESS
      </AnimatedLine>

      {/* TITLE */}
      <AnimatedLine
        variant="h4"
        textAlign="center"
        fontWeight={600}
        color="#FF5A3C"
        mb={2}
      >
        The Art of Authentic Communication:<br />
        Building Deeper Connections
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
            • April 9, 2022
          </Typography>
          <Typography
            component={motion.span}
            variant="body2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            • 5 min read
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
        {/* FEATURED IMAGE */}
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
              alt="Featured"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          )}
        </MotionBox>

        {/* CAPTION TEXT */}
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
          Photo: Authentic connection in practice during one of our workshops
        </Typography>
      </MotionBox>

      {/* INTRO */}
      <AnimatedParagraph delay={0.1}>
        In a world of constant digital distractions and superficial interactions,
        the art of authentic communication has become increasingly rare and valuable.
        When we communicate authentically, we create space for genuine connection,
        mutual understanding, and profound personal growth.
      </AnimatedParagraph>

      {/* SECTION HEADING */}
      <AnimatedHeading
        variant="h6"
        fontWeight={600}
        mt={4}
        mb={1}
        delay={0.1}
      >
        What is Authentic Communication?
      </AnimatedHeading>

      <AnimatedParagraph delay={0.2}>
        Authentic communication goes beyond the exchange of information. It involves
        bringing all of yourself into your interactions — your thoughts, emotions,
        and lived experiences — without pretense. When we communicate authentically,
        we drop the masks and personas that often obscure our real intentions.
      </AnimatedParagraph>

      {/* QUOTE */}
      <MotionBox
        sx={{
          borderLeft: '4px solid #FF5A3C',
          pl: 2,
          my: 4,
        }}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Typography
          fontStyle="italic"
          variant="h6"
          color="#FF5A3C"
          component={motion.p}
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "linear" }}
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          "The single biggest problem in communication is the illusion that it has"
        </Typography>

        <Typography
          fontStyle="italic"
          variant="h6"
          color="#FF5A3C"
          component={motion.p}
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "linear", delay: 0.2 }}
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          taken place."
        </Typography>

        <Typography
          variant="body2"
          mt={1}
          component={motion.p}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.8 }}
        >
          — George Bernard Shaw
        </Typography>
      </MotionBox>

      {/* SECTION HEADING */}
      <AnimatedHeading
        variant="h6"
        fontWeight={600}
        mt={4}
        mb={1}
        delay={0.1}
      >
        The Elements of Authentic Communication
      </AnimatedHeading>

      {/* Sub-heading 1 */}
      <Typography
        component={motion.p}
        fontWeight={600}
        mt={2}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        1. Presence
      </Typography>

      <AnimatedParagraph delay={0.3}>
        Being fully present with another person is perhaps the greatest gift we can
        offer. This means setting aside distractions, making eye contact, and
        engaging wholeheartedly in the interaction.
      </AnimatedParagraph>

      {/* Image */}
      <MotionBox
        sx={{
          width: '100%',
          height: 240,
          bgcolor: '#e0e0e0',
          borderRadius: 2,
          my: 3,
          position: 'relative',
          overflow: 'hidden',
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      />

      {/* Sub-heading 2 */}
      <Typography
        component={motion.p}
        fontWeight={600}
        mt={2}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        2. Honest Self-Expression
      </Typography>

      <AnimatedParagraph delay={0.3}>
        Authentic communication requires expressing your thoughts, feelings, and
        needs honestly. This doesn't mean being harsh or unfiltered, but rather
        speaking truthfully with care and respect.
      </AnimatedParagraph>

      {/* Sub-heading 3 */}
      <Typography
        component={motion.p}
        fontWeight={600}
        mt={2}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        3. Empathetic Listening
      </Typography>

      <AnimatedParagraph delay={0.3}>
        True listening is an act of love. It means setting aside your own agenda,
        suspending judgment, and listening to understand rather than to respond.
      </AnimatedParagraph>

      {/* SECTION HEADING */}
      <AnimatedHeading
        variant="h6"
        fontWeight={600}
        mt={4}
        mb={1}
        delay={0.1}
      >
        The Transformative Power of Authentic Communication
      </AnimatedHeading>

      <AnimatedParagraph delay={0.2}>
        When we commit to authentic communication, we open the door to profound
        transformation — personally and in our relationships.
      </AnimatedParagraph>

      <AnimatedParagraph delay={0.3}>
        Moreover, authentic communication creates safe spaces where vulnerability is
        welcomed, trust is strengthened, and growth is nurtured on both sides of the
        conversation.
      </AnimatedParagraph>

      <AnimatedParagraph delay={0.4}>
        The journey toward authentic communication is ongoing. There will be moments
        of challenge and discomfort along the way. But with practice and patience,
        this skill becomes more natural, leading to richer, more meaningful
        connections and a deeper experience of what it means to be human.
      </AnimatedParagraph>

    </Container>
  );
}