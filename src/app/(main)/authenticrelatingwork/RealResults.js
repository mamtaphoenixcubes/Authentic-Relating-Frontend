'use client';

import { Box, Grid, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';

import Section from '@/app/_components/common/Section';
import SiteContainer from '@/app/_components/common/SiteContainer';
import Card from '@/app/_components/common/Card';
import { EventButton } from '@/app/_components/buttons';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);
const MotionGrid = motion(Grid);
const MotionStack = motion(Stack);
const MotionEventButton = motion(EventButton);

/* ---------- Reusable Bullet Row ---------- */
const BulletRow = ({ color, children, index, styles }) => (
    <MotionBox
        variants={{
            hidden: { opacity: 0, x: -20 },
            visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.4, delay: index * 0.1 },
            },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        sx={styles.bulletRow}
    >
        <MotionBox
            variants={{
                hidden: { scale: 0 },
                visible: {
                    scale: 1,
                    transition: {
                        duration: 0.3,
                        delay: index * 0.1 + 0.1,
                        type: 'spring',
                        stiffness: 200,
                    },
                },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            sx={styles.bulletDot(color)}
        />
        <MotionTypography
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
            sx={styles.bulletText}
        >
            {children}
        </MotionTypography>
    </MotionBox>
);

/* ---------- Main Component ---------- */
export const RealResults = () => {
    const theme = useTheme();
    const styles = theme.custom.realResults;

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <Section sx={{ ...styles.section, mt: 5 }}>
            <SiteContainer>
                <Box>
                    {/* ================= FIRST SECTION ================= */}
                    <MotionGrid
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        container
                        spacing={styles.grid1.container.spacing}
                        alignItems={styles.grid1.container.alignItems}
                        justifyContent={styles.grid1.container.justifyContent}
                        sx={styles.grid1.sx}
                    >
                        {/* MOBILE IMAGE */}
                        <MotionGrid
                            variants={scaleIn}
                            item
                            xs={12}
                            sx={styles.mobileCardWrapper}
                        >
                            <MotionCard sx={styles.mobileCard}>
                                <Box sx={styles.imageWrapper}>
                                    <Image
                                        src="/arwork/realimpact.png"
                                        alt="Card Image"
                                        fill
                                        style={styles.imageElement}
                                        sizes="(max-width: 600px) 300px, (max-width: 900px) 420px, 720px"
                                    />
                                </Box>
                            </MotionCard>
                        </MotionGrid>

                        {/* TEXT */}
                        {/* TEXT */}
                        <MotionGrid variants={fadeInLeft} item xs={12} sm={6}>
                            <Box sx={styles.impactTextColumn}>
                                <MotionTypography
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    sx={styles.impactTitle}
                                >
                                    Real Impact, Real Results
                                </MotionTypography>

                                <MotionTypography
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    sx={styles.impactBody}
                                >
                                    Professionals and teams who have participated in our programs report:
                                </MotionTypography>

                                <MotionStack
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    spacing={styles.bulletStack.spacing}
                                    sx={styles.bulletStack.sx}
                                >
                                    <BulletRow color="#FF7A65" index={0} styles={styles}>
                                        Speak truth with honesty and compassion.
                                    </BulletRow>
                                    <BulletRow color="#FFB74D" index={1} styles={styles}>
                                        Take responsibility for experience and reactions.
                                    </BulletRow>
                                    <BulletRow color="#2196F3" index={2} styles={styles}>
                                        Choose vulnerability over performance.
                                    </BulletRow>
                                    <BulletRow color="#4DD0E1" index={3} styles={styles}>
                                        Ask clearly and welcome yes or no.
                                    </BulletRow>
                                    <BulletRow color="#FFB74D" index={4} styles={styles}>
                                        Stay open and check assumptions.
                                    </BulletRow>
                                </MotionStack>
                            </Box>
                        </MotionGrid>

                        {/* DESKTOP IMAGE */}
                        <MotionGrid
                            variants={fadeInRight}
                            item
                            xs={12}
                            sm={6}
                            sx={styles.desktopCardWrapper}
                        >
                            <MotionBox
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                sx={styles.desktopCard}
                            >
                                <Box sx={styles.imageWrapper}>
                                    <Image
                                        src="/arwork/realimpact.png"
                                        alt="Desktop Card"
                                        fill
                                        style={styles.imageElement}
                                        sizes="(max-width: 900px) 460px, 720px"
                                    />
                                </Box>
                            </MotionBox>
                        </MotionGrid>
                    </MotionGrid>

                    {/* ================= SECOND SECTION ================= */}
                    <MotionGrid
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        container
                        spacing={styles.grid2.container.spacing}
                        alignItems={styles.grid2.container.alignItems}
                        justifyContent={styles.grid2.container.justifyContent}
                    >
                        <Grid item xs={12} sx={styles.mobileCardWrapper}>
                            <MotionCard sx={styles.mobileCard}>
                                <Box sx={styles.imageWrapper}>
                                    <Image
                                        src="/arwork/reimagined.png"
                                        alt="Card Image"
                                        fill
                                        style={styles.imageElement}
                                        sizes="(max-width: 600px) 300px, (max-width: 900px) 420px, 720px"
                                    />
                                </Box>
                            </MotionCard>
                        </Grid>

                        <MotionGrid
                            variants={fadeInLeft}
                            item
                            xs={12}
                            sm={6}
                            sx={styles.desktopCardWrapper}
                        >
                            <MotionBox
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                sx={styles.desktopCard}
                            >
                                <Box sx={styles.imageWrapper}>
                                    <Image
                                        src="/arwork/reimagined.png"
                                        alt="Card Image"
                                        fill
                                        style={styles.imageElement}
                                        sizes="(max-width: 600px) 100vw, (max-width: 900px) 460px, 720px"
                                    />
                                </Box>
                            </MotionBox>
                        </MotionGrid>

                        <MotionGrid variants={fadeInRight} item xs={12} sm={6}>
                            <Box sx={styles.reimaginedTextColumn}>
                                <MotionTypography
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    sx={styles.reimaginedTitle}
                                >
                                    Your Workplace,<br /> Reimagined
                                </MotionTypography>

                                <MotionTypography
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    sx={styles.reimaginedBody}
                                >
                                    When authenticity becomes the foundation of your company culture,
                                    everything shifts. Productivity rises, morale soars, and workplace
                                    interactions become more human, more meaningful. Imagine a work
                                    environment where people show up as their full selves—engaged, inspired,
                                    and ready to collaborate at the highest level.
                                </MotionTypography>
                            </Box>
                        </MotionGrid>
                    </MotionGrid>
                </Box>
            </SiteContainer>

            {/* ================= CTA BANNER ================= */}
            <SiteContainer sx={{ ...styles.ctaContainer, mt: 5, mb: 5 }}>
                <MotionBox
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    sx={styles.ctaBanner}
                >
                    <Box sx={styles.ctaInner}>
                        <MotionTypography
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            sx={styles.ctaTitle}
                        >
                            Bring Authentic Relating to your work place today.
                        </MotionTypography>

                        <MotionTypography
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            sx={styles.ctaBody}
                        >
                            Are you ready to transform the way your team works together?
                            Connect with us to explore a training experience that aligns with
                            your organization's needs and aspirations.
                        </MotionTypography>

                        <MotionTypography
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            sx={styles.ctaBodyLast}
                        >
                            Let's build workplaces where connection isn't just an afterthought—
                            it's the heart of how we do business.
                        </MotionTypography>

                        {/* 👇 CTA Button — Orange gradient preserved */}
                        <MotionEventButton
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            onClick={() => {
                                // Add navigation / action here
                            }}
                            variant="offering"
                            size="large"
                            sx={{
                                maxWidth: 360,
                                width: '100%',

                                /* 👇 Orange gradient override */
                                background: 'linear-gradient(135deg, #F37A60, #E4452F)',
                                boxShadow: '0px 10px 25px rgba(0,0,0,0.25)',

                                "&:hover": {
                                    background: 'linear-gradient(135deg, #E96A4F, #D93C2A)',
                                    transform: 'translateY(-2px)',
                                },
                            }}
                        >
                            Connect now
                        </MotionEventButton>
                    </Box>
                </MotionBox>
            </SiteContainer>
        </Section>
    );
};

export default RealResults;