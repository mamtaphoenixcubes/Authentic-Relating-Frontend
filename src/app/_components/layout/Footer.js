'use client';

import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const footerSections = [
  {
    title: 'Home',
    items: [
      { label: 'Blogs', path: '/blogpage' },
      { label: 'Events', path: '/events' },
      { label: 'Contact Us', path: '/contactus' },
    ],
  },
  {
    title: 'Authentic Relating',
    items: [
      { label: 'Our Founder', path: '/authenticrelatingfounder' },
      { label: 'Mission & Vision', path: '/missingvision' },
      { label: 'Authentic Relating Intention', path: '/aboutus' },
      { label: 'Five Dimensions', path: '/fivedimensionsofauthenticrelating' },
      { label: 'Ten Principles', path: '/principlesofauthenticrelating' },
      { label: 'FAQs', path: '/FAQs' },
      { label: 'Community', path: '/communities' },
      { label: 'Facilitation', path: '/facilitationpage' },
      { label: 'Leadership', path: '/leadership' },
      { label: 'Quotes', path: '/quotes' },
    ],
  },
  {
    title: 'Offerings',
    items: [
      { label: 'Signature Offerings', path: '/ourofferings' },
      { label: 'Books', path: '/mybooks' },
      { label: 'Courses', path: '/onlinecourse' },
      { label: 'Podcast', path: '/podcasts' },
      { label: 'Relating Circles', path: '/relatingcircles' },
      { label: 'Authentic Relating Work', path: '/authenticrelatingwork' },
      { label: 'Authentic Relating Joy Lab', path: '/authenticrelatingjoylab' },
      { label: 'Authentic Relating Coaching', path: '/authenticrelatingcoaching' },
      { label: 'Gifts For You', path: '/freestuff' },
      { label: 'Speaking & Media', path: '/speakingmediaKit' },
    ],
  },
];

const socialIcons = [
  '/svg/footer/insta.svg',
  '/svg/footer/twitter.svg',
  '/svg/footer/facebook.svg',
  '/svg/footer/github.svg',
];

export default function Footer() {
  const theme = useTheme();
  const styles = theme.custom?.footer || {};
  const [expanded, setExpanded] = useState(null);
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <Box sx={styles.container}>
      {/* ========================================================= */}
      {/* PART 1 : BIG LOGO SECTION */}
      {/* ========================================================= */}
      <Box sx={styles.logoSection}>
        <Box component="img" src="/footerlogo.png" alt="logo" sx={styles.logoImage} />
      </Box>

      {/* ========================================================= */}
      {/* PART 2 : HERO IMAGE */}
      {/* ========================================================= */}
      <Box sx={styles.heroSection}>
        <Box sx={styles.heroOverlay} />
        <Box sx={styles.heroQuoteWrapper}>
          <Typography sx={styles.heroQuote}>
            Together celebrating life, joy and connection
          </Typography>
          <Typography sx={styles.heroAuthor}>— Amitabha Bhatia</Typography>
        </Box>
      </Box>

      {/* ========================================================= */}
      {/* PART 3 : FOOTER MENU SECTION */}
      {/* ========================================================= */}
      <Box sx={styles.menuSection}>
        {/* ========================================================= */}
        {/* MOBILE + SMALL SCREEN */}
        {/* ========================================================= */}
        <Box sx={styles.mobileDisplay}>
          {footerSections.map((section, index) => {
            const isOpen = expanded === index;
            return (
              <Accordion
                key={index}
                expanded={isOpen}
                onChange={() => setExpanded(isOpen ? null : index)}
                disableGutters
                sx={styles.accordion}
              >
                <AccordionSummary
                  expandIcon={
                    <Typography sx={styles.accordionExpandIcon}>
                      {isOpen ? '−' : '+'}
                    </Typography>
                  }
                >
                  <Typography sx={styles.accordionSummary}>
                    {section.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack spacing={1.5}>
                    {section.items.map((item, i) => (
                      <FooterLink
                        key={i}
                        text={item.label}
                        path={item.path}
                        onNavigate={handleNavigation}
                        styles={styles}
                      />
                    ))}
                  </Stack>
                </AccordionDetails>
              </Accordion>
            );
          })}

          <Stack direction="row" spacing={1.5} mt={4} mb={3} justifyContent="center">
            {socialIcons.map((item, index) => (
              <SocialCircle key={index} item={item} styles={styles} />
            ))}
          </Stack>

          <Stack spacing={1.5}>
            <TextField
              fullWidth
              placeholder="Your email address here"
              size="small"
              sx={styles.emailTextField}
            />
            <Button fullWidth variant="contained" sx={styles.submitButton}>
              Submit
            </Button>
          </Stack>

          <Typography sx={styles.copyrightCenter}>
            Copyright @ 2025 Authentic Relating, All rights reserved.
          </Typography>
        </Box>

        {/* ========================================================= */}
        {/* TABLET SCREEN */}
        {/* ========================================================= */}
        <Box sx={styles.tabletDisplay}>
          <Box sx={styles.tabletGrid}>
            <Box>
              <FooterHeading text="Home" styles={styles} />
              <Stack spacing={1.5}>
                {footerSections[0].items.map((item, index) => (
                  <FooterLink
                    key={index}
                    text={item.label}
                    path={item.path}
                    onNavigate={handleNavigation}
                    styles={styles}
                  />
                ))}
              </Stack>
            </Box>
            <Box>
              <FooterHeading text="Authentic Relating" styles={styles} />
              <Stack spacing={1.5}>
                {footerSections[1].items.map((item, index) => (
                  <FooterLink
                    key={index}
                    text={item.label}
                    path={item.path}
                    onNavigate={handleNavigation}
                    styles={styles}
                  />
                ))}
              </Stack>
            </Box>
            <Box>
              <FooterHeading text="Offerings" styles={styles} />
              <Stack spacing={1.5}>
                {footerSections[2].items.map((item, index) => (
                  <FooterLink
                    key={index}
                    text={item.label}
                    path={item.path}
                    onNavigate={handleNavigation}
                    styles={styles}
                  />
                ))}
              </Stack>
            </Box>
          </Box>

          <Box sx={styles.tabletBottomRow}>
            <Stack direction="row" spacing={1.5}>
              {socialIcons.map((item, index) => (
                <SocialCircle key={index} item={item} styles={styles} />
              ))}
            </Stack>
            <Stack direction="row" spacing={1.5} sx={styles.emailRow}>
              <TextField
                fullWidth
                placeholder="Your email address here"
                size="small"
                sx={styles.emailTextField}
              />
              <Button variant="contained" sx={styles.submitButton}>
                Submit
              </Button>
            </Stack>
          </Box>

          <Typography sx={styles.copyrightCenter}>
            Copyright @ 2025 Authentic Relating. All rights reserved.
          </Typography>
        </Box>

        {/* ========================================================= */}
        {/* LARGE SCREEN */}
        {/* ========================================================= */}
        <Box sx={styles.desktopDisplay} style={styles.desktopGrid}>
          <Box>
            <FooterHeading text="Home" styles={styles} />
            <Stack spacing={1.5}>
              {footerSections[0].items.map((item, index) => (
                <FooterLink
                  key={index}
                  text={item.label}
                  path={item.path}
                  onNavigate={handleNavigation}
                  styles={styles}
                />
              ))}
            </Stack>
          </Box>

          <Box>
            <FooterHeading text="Authentic Relating" styles={styles} />
            <Stack spacing={1.5}>
              {footerSections[1].items.map((item, index) => (
                <FooterLink
                  key={index}
                  text={item.label}
                  path={item.path}
                  onNavigate={handleNavigation}
                  styles={styles}
                />
              ))}
            </Stack>
          </Box>

          <Box>
            <FooterHeading text="Offerings" styles={styles} />
            <Stack spacing={1.5}>
              {footerSections[2].items.map((item, index) => (
                <FooterLink
                  key={index}
                  text={item.label}
                  path={item.path}
                  onNavigate={handleNavigation}
                  styles={styles}
                />
              ))}
            </Stack>
          </Box>

          <Box>
            <Stack direction="row" spacing={1.5} mb={4}>
              {socialIcons.map((item, index) => (
                <SocialCircle key={index} item={item} styles={styles} />
              ))}
            </Stack>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                borderRadius: '8px', // Matches the rounded corners in the image
                padding: '4px 4px 4px 16px', // Padding: top right bottom left (gives space for text)
                boxShadow: '0px 2px 4px rgba(0,0,0,0.1)', // Optional: adds slight depth
                width: '100%',
                maxWidth: '500px', // Adjust to match your layout
              }}
            >
              <TextField
                fullWidth
                placeholder="Your email address here"
                variant="standard"
                InputProps={{
                  disableUnderline: true, // Removes the default bottom line from MUI TextField
                }}
                sx={{
                  flex: 1,
                  '& .MuiInputBase-input': {
                    padding: '8px 0', // Adjust vertical spacing
                    color: '#333', // Text color
                    fontSize: '15px',
                    '&::placeholder': {
                      color: '#999', // Placeholder color
                      opacity: 1,
                    },
                  },
                }}
              />

              <Button
                variant="text" // Use text variant to remove the default background
                disableElevation
                sx={{
                  color: '#4a7c1e', // The specific green from your image
                  fontWeight: 700,
                  textTransform: 'none', // Prevents "SUBMIT" from being all caps (matches image)
                  fontSize: '15px',
                  whiteSpace: 'nowrap',
                  padding: '8px 16px',
                  '&:hover': {
                    backgroundColor: 'transparent', // Removes the hover background
                    color: '#366014', // Slightly darker green on hover
                  },
                }}
              >
                Submit
              </Button>
            </Box>

            <Typography sx={styles.copyright}>
              Copyright @ 2025 Authentic Relating, All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

/* ========================================================= */
/* REUSABLE COMPONENTS */
/* ========================================================= */

const FooterHeading = ({ text, styles }) => (
  <Typography sx={styles.heading}>{text}</Typography>
);

const FooterLink = ({ text, path, onNavigate, styles }) => (
  <Typography onClick={() => onNavigate(path)} sx={styles.link}>
    {text}
  </Typography>
);

const SocialCircle = ({ item, styles }) => (
  <Box sx={styles.socialCircle}>
    <Box component="img" src={item} alt="social" sx={styles.socialIcon} />
  </Box>
);