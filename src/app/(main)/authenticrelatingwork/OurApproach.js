'use client';

import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';

import Section from '@/app/_components/common/Section';
import SiteContainer from '@/app/_components/common/SiteContainer';
import Card from '@/app/_components/common/Card';

/* Motion wrappers */
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionGrid = motion(Grid);
const MotionCard = motion(Card);

/* =========================================================
   DATA
   ========================================================= */
const otherPoints = [
    { title: 'Authentic Leadership', desc: 'Leading with presence, vulnerability, and integrity.' },
    { title: 'Self-Esteem & Personal Confidence', desc: 'Building a strong sense of self-worth to enhance leadership, communication, and team dynamics.' },
    { title: 'Self-Care & Stress Management', desc: 'Developing practical strategies to maintain well-being, resilience, and balance in demanding work environments.' },
    { title: 'Empathetic Communication', desc: 'Deep listening, reflection, and impact-sharing.' },
    { title: 'Conflict Transformation', desc: 'Turning disagreements into opportunities for connection and growth.' },
    { title: 'Emotional Intelligence', desc: 'Understanding and managing emotions in high-stakes environments.' },
    { title: 'Trust & Team Cohesion', desc: 'Strengthening workplace bonds through shared experiences and open dialogue.' },
];

const howWeWorkCards = [
    {
        title: (
            <>
                Immersive Trainings Live (On-Site) and
                <br /> Virtual (Online):
            </>
        ),
        desc: (
            <>
                Interactive sessions with group exercises, peer-to-peer
                <br />
                practice, and guided applications based on our existing
                programs.
            </>
        ),
    },
    {
        title: (
            <>
                Tailored Private <br /> Trainings:
            </>
        ),
        desc: (
            <>
                We begin by discussing your organization&apos;s unique needs
                and <br /> challenges, then craft a customized program tailored
                specifically <br /> to address your team&apos;s specific needs and
                challenges.
            </>
        ),
    },
];

/* =========================================================
   MOTION VARIANTS
   ========================================================= */
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            type: 'spring',
            stiffness: 90,
        },
    },
};

const pointCardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            type: 'spring',
            stiffness: 100,
        },
    },
};

const imageScale = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

/* =========================================================
   COMPONENT
   ========================================================= */
export default function OurApproach() {
    const theme = useTheme();
    const styles = theme.custom.ourApproach;

    return (
        <Section sx={{ ...styles.section, pt: 0 }}>
            <SiteContainer>
                {/* ============================
                    HERO BANNER
                ============================ */}
                <MotionBox
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={imageScale}
                    sx={{
                        ...styles.hero,
                        mt: { xs: 0.5, md: 1 },   // 👈 top gap reduced
                    }}
                >
                    {/* Gradient Overlay */}
                    <MotionBox
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        sx={styles.heroOverlay}
                    />

                    {/* Content */}
                    <Box sx={styles.heroContent}>
                        <MotionTypography
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            sx={styles.heroTitle}
                        >
                            Our Approach: Experiential Learning for Lasting Impact
                        </MotionTypography>

                        <MotionTypography
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            sx={styles.heroBody}
                        >
                            We believe learning happens best through experience. Our trainings blend dynamic
                            <br /> teachings with real-time practice, ensuring that concepts aren't just understood intellectually
                            <br /> but embodied through lived interaction.
                        </MotionTypography>
                    </Box>
                </MotionBox>

                {/* ============================
                    HOW WE WORK
                ============================ */}
                <MotionBox
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    sx={{...styles.howWeWorkWrapper,mt: 5, pb: 2 }}
                >
                    <MotionBox variants={staggerContainer} sx={{
                        ...styles.howWeWorkBox,
                        border: "2px solid #FFFFFF", // 👈 border color
                    }}>
                        {/* Section Title */}
                        <MotionTypography
                            variants={fadeInUp}
                            sx={styles.howWeWorkTitle}
                        >
                            How We Work with You:
                        </MotionTypography>

                        {/* Cards */}
                        <Grid
                            container
                            spacing={styles.howWeWorkGrid.container.spacing}
                            sx={{ justifyContent: 'center' }}
                        >
                            {howWeWorkCards.map((card, index) => (
                                <Grid
                                    item
                                    xs={styles.howWeWorkGrid.item.xs}
                                    sm={styles.howWeWorkGrid.item.sm}
                                    key={index}
                                    sx={{ display: 'flex', justifyContent: 'center' }}
                                >
                                    <MotionBox
                                        variants={cardVariants}
                                        sx={styles.howWeWorkCard}
                                    >
                                        <MotionTypography
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                                            sx={styles.howWeWorkCardTitle}
                                        >
                                            {card.title}
                                        </MotionTypography>

                                        <MotionTypography
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                                            sx={styles.howWeWorkCardBody}
                                        >
                                            {card.desc}
                                        </MotionTypography>
                                    </MotionBox>
                                </Grid>
                            ))}
                        </Grid>
                    </MotionBox>
                </MotionBox>

                {/* ============================
                    CORE TRAINING FOCUS AREAS
                ============================ */}
                <MotionBox
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    sx={{ ...styles.howWeWorkWrapper, mb: 0, pb: 0 }}
                >
                    <Box
                        sx={{
                            ...styles.coreBox,
                            border: "2px solid #ffffff",
                            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
                        }}
                    >
                        {/* Mobile Title */}
                        <Box sx={styles.coreMobileTitleWrapper}>
                            <MotionTypography variants={fadeInUp} sx={styles.coreMobileTitle}>
                                Core Training Focus Areas
                            </MotionTypography>
                            <MotionTypography variants={fadeInUp} transition={{ delay: 0.1 }} sx={styles.coreMobileBody}>
                                Our programs are designed around key pillars of relational intelligence and authentic
                                <br /> communication, including:
                            </MotionTypography>
                        </Box>

                        {/* LEFT SECTION - Points Cards */}
                        <MotionBox
                            variants={staggerContainer}
                            sx={{
                                ...styles.pointsContainer,
                                border: "2px solid #FFFFFF !important",
                                borderRadius: (styles.pointsContainer && styles.pointsContainer.borderRadius) || 2,
                            }}
                        >
                            {otherPoints.map((point, index) => (
                                <MotionBox
                                    key={index}
                                    variants={pointCardVariants}
                                    sx={{
                                        ...styles.pointCard,
                                        border: "2px solid #FFFFFF !important",
                                    }}
                                >
                                    <MotionTypography
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                                        sx={styles.pointTitle}
                                    >
                                        {point.title}
                                    </MotionTypography>
                                    {point.desc && (
                                        <MotionTypography
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                                            sx={styles.pointBody}
                                        >
                                            {point.desc}
                                        </MotionTypography>
                                    )}
                                </MotionBox>
                            ))}
                        </MotionBox>

                        {/* RIGHT SECTION */}
                        <MotionBox variants={fadeInUp} sx={styles.coreDesktopTitleWrapper}>
                            <Typography sx={styles.coreTitle}>Core Training Focus Areas</Typography>
                            <Typography sx={styles.coreBody}>
                                Our programs are designed around key pillars of relational intelligence and authentic communication, including:
                            </Typography>

                            <Box sx={styles.coreImageWrapper}>
                                <Image
                                    src={styles.coreImageSrc || '/arwork/coretraining.png'}
                                    alt="Focus Areas"
                                    fill
                                    style={styles.coreImage}
                                    sizes="(max-width: 600px) 100vw, 50vw"
                                />
                            </Box>
                        </MotionBox>
                    </Box>
                </MotionBox>
            </SiteContainer>
        </Section>
    );
}