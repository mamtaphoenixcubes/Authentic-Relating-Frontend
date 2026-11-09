'use client';

import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

// Import components
import SiteContainer from '../common/SiteContainer';
import Section from '../common/Section';
import OffreingButton from '../buttons/OffreingButton';

// Import services
import { getOfferings } from '../_lib/services/offeringsApi';

// Import theme
import { useTheme } from '@mui/material/styles';

const MotionBox = motion(Box);

const defaultOfferings = [
  { title: 'Core Human Needs', image: '/OurSignatureOfferings1.png' },
  { title: 'Authentic Relating Essentials', image: '/OurSignatureOfferings2.png' },
  { title: 'Authentic Confidence', image: '/OurSignatureOfferings3.png' },
  { title: 'Authentic Self-Care', image: '/OurSignatureOfferings4.png' },
  { title: 'Understanding & Managing Emotions', image: '/OurSignatureOfferings5.png' },
  { title: 'Attachment Styles', image: '/OurSignatureOfferings6.png' },
];

export default function OurSignatureOfferings() {
  const [offerings, setOfferings] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getOfferings({ page: 0, viewMode: 'grid' });
        setOfferings(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNavigateToOfferings = () => {
    router.push('/ourofferings');
  };

  const handleOfferingClick = (offeringSlug) => {
    if (offeringSlug) {
      router.push(`/ourofferings/${encodeURIComponent(offeringSlug)}/`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  // Use fetched data or fallback to default
  const displayOfferings = offerings.length > 0 ? offerings : defaultOfferings;


  // Get theme styles
  const styles = theme.custom.signatureOfferings;

  return (
    <Section
      className="our-signature-offerings"
      sx={{
        width: '100%',
        // 👇 TOP GAP (kept normal) + BOTTOM GAP REDUCED (so next section sits closer)
        pt: { xs: 2, sm: 2, md: 3, lg: 3, xl: 3 },
        pb: { xs: 2, sm: 3, md: 3, lg: 4, xl: 4 },
      }}
    >
      <SiteContainer
        sx={{
          width: '100%',
          px: styles.container.paddingX,
        }}
      >
        {/* Title with animation */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            fontWeight={700}
            textAlign="center"
            sx={{
              color: styles.title.color,
              mb: styles.title.marginBottom,
            }}
          >
            Our Signature Offerings
          </Typography>
        </MotionBox>

        {/* Subtitle with animation */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography
            textAlign="center"
            sx={{
              maxWidth: styles.subtitle.maxWidth,
              mx: styles.subtitle.marginX,
              mb: styles.subtitle.marginBottom,
              color: styles.subtitle.color,
              px: styles.subtitle.paddingX,
            }}
          >
            Morbi varius ornare ante non posuere. Morbi lacus lacus, auctor sit amet erat vitae, interdum semper leo.
          </Typography>
        </MotionBox>

        {/* Button with animation */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            my: styles.button.marginY,
          }}
        >
          <OffreingButton onClick={handleNavigateToOfferings}>
            View All Offerings
          </OffreingButton>
        </MotionBox>

        {/* Mobile Layout - Grid 2 columns */}
        <Box
          sx={{
            display: { xs: 'grid', md: 'none' },
            gridTemplateColumns: styles.mobile.grid.columns,
            gap: styles.mobile.grid.gap,
            mb: styles.mobile.grid.marginBottom,
          }}
        >
          {displayOfferings.map((item, index) => (
            <MotionBox
              key={`mobile-${index}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleOfferingClick(item.offeringSlug)}
              role={item.offeringSlug ? 'link' : undefined}
              tabIndex={item.offeringSlug ? 0 : undefined}
              onKeyDown={(event) => {
                if (item.offeringSlug && (event.key === 'Enter' || event.key === ' ')) {
                  event.preventDefault();
                  handleOfferingClick(item.offeringSlug);
                }
              }}
              sx={{
                ...styles.mobile.card,
                cursor: item.offeringSlug ? 'pointer' : 'default',
              }}
            >
              <Box
                component="img"
                src={`${process.env.NEXT_PUBLIC_API_URL}/${item.thumbnailImage || item.image}`}
                alt={item.title}
                sx={styles.mobile.card.image}
              />

              <Box sx={styles.mobile.card.overlay}>
                <Typography sx={styles.mobile.card.title}>
                  {item.title}
                </Typography>
              </Box>
            </MotionBox>
          ))}
        </Box>

        {/* Desktop Layout - 5 columns with staggered rows */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: styles.desktop.container.flexDirection,
            gap: styles.desktop.container.gap,
          }}
        >
          {[displayOfferings.slice(0, 3), displayOfferings.slice(3, 6)].map(
            (row, rowIndex) => (
              <Box
                key={rowIndex}
                sx={{
                  display: 'flex',
                  gap: styles.desktop.row.gap,
                  justifyContent: rowIndex % 2 === 0 ? 'flex-start' : 'flex-end',
                  flexWrap: 'wrap',
                }}
              >
                {row.map((item, index) => (
                  <MotionBox
                    key={index}
                    initial={{
                      opacity: 0,
                      x: rowIndex === 0 ? -100 : 100,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.15,
                      type: 'spring',
                      stiffness: 100,
                      damping: 12,
                    }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleOfferingClick(item.offeringSlug)}
                    role={item.offeringSlug ? 'link' : undefined}
                    tabIndex={item.offeringSlug ? 0 : undefined}
                    onKeyDown={(event) => {
                      if (item.offeringSlug && (event.key === 'Enter' || event.key === ' ')) {
                        event.preventDefault();
                        handleOfferingClick(item.offeringSlug);
                      }
                    }}
                    sx={{
                      ...styles.desktop.card,
                      cursor: item.offeringSlug ? 'pointer' : 'default',
                    }}
                  >
                    <Box sx={styles.desktop.card.inner}>
                      {/* Image */}
                      <Box
                        component="img"
                        src={`${process.env.NEXT_PUBLIC_API_URL}/${item.thumbnailImage || item.image}`}
                        alt={item.title}
                        sx={styles.desktop.card.image}
                      />

                      {/* Blur Layer */}
                      <Box sx={styles.desktop.card.blurLayer} />

                      {/* Gradient Overlay */}
                      <Box sx={styles.desktop.card.gradientOverlay}>
                        <Typography sx={styles.desktop.card.title}>
                          {item.title}
                        </Typography>
                      </Box>
                    </Box>
                  </MotionBox>
                ))}
              </Box>
            )
          )}
        </Box>
      </SiteContainer>
    </Section>
  );
}
