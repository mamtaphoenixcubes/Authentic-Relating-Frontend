'use client';

import {
  Box,
  Typography,
  Stack,
} from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SiteContainer from '../../../_components/common/SiteContainer';
import Section from '../../../_components/common/Section';
import { useTheme } from '@mui/material/styles';

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

export default function BlogInnerHero() {
  const theme = useTheme();
  const { custom } = theme;
  const author = "Shalini Jivraj";
  const authorImg = "/person.png";

  const blogStyles = custom?.blogInnerHero || {};

  return (
    <Section sx={blogStyles.section}>
      <SiteContainer>
        {/* CATEGORY */}
        <AnimatedLine
          variant="caption"
          color="text.secondary"
          textAlign="center"
          display="block"
          mb={1}
          sx={blogStyles.category}
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
          sx={blogStyles.title}
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
          sx={blogStyles.authorInfo?.sx}
        >
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
            mb={4}
            flexWrap="wrap"
            sx={blogStyles.authorStack}
          >
            <Box sx={blogStyles.authorAvatarBox}>
              <MotionBox
                sx={blogStyles.authorAvatar}
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
                sx={blogStyles.authorName}
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
              sx={blogStyles.authorDate}
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
              sx={blogStyles.authorReadTime}
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
          sx={blogStyles.featuredImageWrapper?.sx}
        >
          <MotionBox
            sx={blogStyles.featuredImage}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          />

          <Typography
            component={motion.p}
            sx={blogStyles.featuredCaption}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Photo: Authentic connection in practice during one of our workshops
          </Typography>
        </MotionBox>

        {/* INTRO */}
        <AnimatedParagraph
          delay={0.1}
          sx={blogStyles.introParagraph}
        >
          In a world of constant digital distractions and superficial interactions,
          the art of authentic communication has become increasingly rare and valuable.
          When we communicate authentically, we create space for genuine connection,
          mutual understanding, and profound personal growth.
        </AnimatedParagraph>

        {/* SECTION HEADING 1 */}
        <AnimatedHeading
          variant="h6"
          fontWeight={600}
          mt={4}
          mb={1}
          delay={0.1}
          sx={blogStyles.sectionHeading}
        >
          What is Authentic Communication?
        </AnimatedHeading>

        <AnimatedParagraph
          delay={0.2}
          sx={blogStyles.bodyParagraph}
        >
          Authentic communication goes beyond the exchange of information. It involves
          bringing all of yourself into your interactions — your thoughts, emotions,
          and lived experiences — without pretense. When we communicate authentically,
          we drop the masks and personas that often obscure our real intentions.
        </AnimatedParagraph>

        {/* QUOTE */}
        <MotionBox
          sx={blogStyles.quoteBox}
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
            sx={blogStyles.quoteText}
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
            sx={blogStyles.quoteText}
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
            sx={blogStyles.quoteAuthor}
          >
            — George Bernard Shaw
          </Typography>
        </MotionBox>

        {/* SECTION HEADING 2 */}
        <AnimatedHeading
          variant="h6"
          fontWeight={600}
          mt={4}
          mb={1}
          delay={0.1}
          sx={blogStyles.sectionHeading}
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
          sx={blogStyles.subHeading}
        >
          1. Presence
        </Typography>

        <AnimatedParagraph
          delay={0.3}
          sx={blogStyles.bodyParagraph}
        >
          Being fully present with another person is perhaps the greatest gift we can
          offer. This means setting aside distractions, making eye contact, and
          engaging wholeheartedly in the interaction.
        </AnimatedParagraph>

        {/* Image 1 */}
        <MotionBox
          sx={blogStyles.bodyImage}
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
          sx={blogStyles.subHeading}
        >
          2. Honest Self-Expression
        </Typography>

        <AnimatedParagraph
          delay={0.3}
          sx={blogStyles.bodyParagraph}
        >
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
          sx={blogStyles.subHeading}
        >
          3. Empathetic Listening
        </Typography>

        <AnimatedParagraph
          delay={0.3}
          sx={blogStyles.bodyParagraph}
        >
          True listening is an act of love. It means setting aside your own agenda,
          suspending judgment, and listening to understand rather than to respond.
        </AnimatedParagraph>

        {/* SECTION HEADING 3 */}
        <AnimatedHeading
          variant="h6"
          fontWeight={600}
          mt={4}
          mb={1}
          delay={0.1}
          sx={blogStyles.sectionHeading}
        >
          The Transformative Power of Authentic Communication
        </AnimatedHeading>

        <AnimatedParagraph
          delay={0.2}
          sx={blogStyles.bodyParagraph}
        >
          When we commit to authentic communication, we open the door to profound
          transformation — personally and in our relationships.
        </AnimatedParagraph>

        <AnimatedParagraph
          delay={0.3}
          sx={blogStyles.bodyParagraph}
        >
          Moreover, authentic communication creates safe spaces where vulnerability is
          welcomed, trust is strengthened, and growth is nurtured on both sides of the
          conversation.
        </AnimatedParagraph>

        <AnimatedParagraph
          delay={0.4}
          sx={blogStyles.bodyParagraph}
        >
          The journey toward authentic communication is ongoing. There will be moments
          of challenge and discomfort along the way. But with practice and patience,
          this skill becomes more natural, leading to richer, more meaningful
          connections and a deeper experience of what it means to be human.
        </AnimatedParagraph>

        {/* Image 2 */}
        <MotionBox
          sx={blogStyles.bodyImage}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <Typography
          component={motion.p}
          sx={blogStyles.bodyImageCaption}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          Photo: The power of presence in authentic communication
        </Typography>

        {/* CONCLUSION */}
        <AnimatedHeading
          variant="h6"
          fontWeight={600}
          mt={2}
          mb={1}
          delay={0.1}
          sx={blogStyles.sectionHeading}
        >
          Conclusion
        </AnimatedHeading>

        <AnimatedParagraph
          delay={0.2}
          sx={blogStyles.bodyParagraph}
        >
          Authentic communication is not just a skill — it's a way of being in the
          world. It requires courage, vulnerability, and a willingness to show up
          fully in every interaction. As we practice authentic communication, we
          not only transform our relationships but also deepen our understanding of
          ourselves and others.
        </AnimatedParagraph>

        <AnimatedParagraph
          delay={0.3}
          sx={blogStyles.bodyParagraph}
        >
          So today, I invite you to take a small step toward authentic communication.
          Whether it's offering your full presence to someone, expressing your truth
          with kindness, or truly listening to another person — each moment of
          authentic connection is a gift to yourself and to the world.
        </AnimatedParagraph>

        {/* SHARE SECTION */}
        <MotionBox
          sx={blogStyles.shareSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            sx={blogStyles.shareStack}
          >
            <Typography variant="body2" color="text.secondary" sx={blogStyles.shareLabel}>
              Share this article:
            </Typography>
            <Stack direction="row" spacing={2} sx={blogStyles.shareLinks}>
              <Typography
                component="a"
                href="#"
                sx={blogStyles.shareLink}
              >
                Twitter
              </Typography>
              <Typography
                component="a"
                href="#"
                sx={blogStyles.shareLink}
              >
                LinkedIn
              </Typography>
              <Typography
                component="a"
                href="#"
                sx={blogStyles.shareLink}
              >
                Facebook
              </Typography>
            </Stack>
          </Stack>
        </MotionBox>
      </SiteContainer>
    </Section>
  );
}