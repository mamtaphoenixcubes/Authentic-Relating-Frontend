'use client';

import { useRef } from 'react';
import { Box, Typography, Grid, CardContent, Stack } from '@mui/material';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

import Section from '@/app/_components/common/Section';
import SiteContainer from '@/app/_components/common/SiteContainer';
import Card from '@/app/_components/common/Card';

/* Motion wrappers */
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);
const MotionGrid = motion(Grid);

/* =========================================================
   DATA
   ========================================================= */
const points = [
    { color: '#FF6F61', text: 'Engage in honest and impactful conversations without fear of judgment.' },
    { color: '#FFB74D', text: 'Master the art of deep listening, fostering clarity and alignment across all levels.' },
    { color: '#42A5F5', text: 'Develop emotional resilience and self-awareness to navigate challenges effectively.' },
    { color: '#26C6DA', text: 'Communicate feedback in a way that inspires growth and trust.' },
    { color: '#FFA726', text: 'Build an inclusive and value-driven culture where every voice matters.' },
];

const cards = [
    { img: '/Employee.png', title: 'Employee Engagement & Retention', desc: 'When people feel heard and valued, they stay.' },
    { img: '/Collaboration.png', title: 'Collaboration & Teamwork', desc: 'Authentic communication dissolves silos and strengthens relationships.' },
    { img: '/Psychological.png', title: 'Psychological Safety & Inclusion', desc: 'A work culture where all perspectives are welcomed and respected.' },
    { img: '/Resilient.png', title: 'Resilient & Adaptive Leadership', desc: 'Leaders who navigate challenges with empathy and wisdom.' },
    { img: '/Conflict.png', title: 'Conflict Transformation', desc: 'Turning tensions into productive, trust-building conversations.' },
];

/* =========================================================
   MOTION VARIANTS
   ========================================================= */
const slideInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const slideInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, type: 'spring', stiffness: 100 },
    },
};

/* =========================================================
   COMPONENT
   ========================================================= */
export default function WhyAuthenticRelating() {
    const theme = useTheme();
    const styles = theme.custom.whyAuthenticRelating;
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });

    return (
        <Section
            ref={containerRef}
            sx={{
                ...styles.section,
                pt: { xs: 2, md: 0 }, // 👈 Reduced Top Padding
                pb: { xs: 2, md: 0 }, // 👈 Reduced Bottom Padding
                mt: 0,                // 👈 Force top margin to 0
                mb: 0                 // 👈 Force bottom margin to 0
            }}
        >
            <SiteContainer>
                {/* ============================
                    GRADIENT WRAPPER (Why AR)
                ============================ */}
                <MotionBox
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    sx={{ 
                        ...styles.wrapper,
                        mt: 0, // 👈 Removes top gap inside the section
                        mb: 0  // 👈 Removes bottom gap inside the section
                    }}
                >
                    {/* Heading */}
                    <MotionTypography
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        sx={styles.heading}
                    >
                        Why Authentic Relating @ Work?
                    </MotionTypography>

                    {/* Subtitle */}
                    <MotionTypography
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        sx={styles.subheading}
                    >
                        From Fortune 500 companies to startups, organizations that prioritize
                        relational <br /> intelligence see significant improvements in:
                    </MotionTypography>

                    {/* Cards Grid */}
                    <MotionGrid
                        variants={staggerChildren}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        container
                        spacing={styles.cardsGrid.container.spacing}
                        justifyContent="center"
                    >
                        {cards.map((item, index) => (
                            <Grid
                                item
                                xs={styles.cardsGrid.item.xs}
                                sm={styles.cardsGrid.item.sm}
                                md={styles.cardsGrid.item.md}
                                key={index}
                            >
                                <MotionCard variants={cardVariants} sx={styles.card}>
                                    <CardContent sx={styles.cardContent}>
                                        {/* Icon */}
                                        <MotionBox
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                            sx={styles.cardIcon}
                                        >
                                            <Image
                                                src={item.img}
                                                alt={item.title}
                                                fill
                                                style={styles.cardImage}
                                            />
                                        </MotionBox>

                                        <MotionTypography
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                                            sx={styles.cardTitle}
                                        >
                                            {item.title}
                                        </MotionTypography>

                                        <MotionTypography
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                                            sx={styles.cardDescription}
                                        >
                                            {item.desc}
                                        </MotionTypography>
                                    </CardContent>
                                </MotionCard>
                            </Grid>
                        ))}
                    </MotionGrid>
                </MotionBox>

                {/* ============================
                    SPLIT SECTION (Image + Text)
                ============================ */}
                <MotionBox
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    sx={styles.splitSection}
                >
                    {/* LEFT IMAGE */}
                    <MotionBox
                        variants={slideInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        sx={styles.splitImage}
                    >
                        <Box sx={styles.splitImageInner}>
                            <Image
                                src="/arwork/potentialar.png"
                                alt="Section Image"
                                fill
                                style={styles.splitImageElement}
                                sizes="(max-width: 600px) 100vw, (max-width: 900px) 100vw, 50vw"
                                priority
                            />
                        </Box>
                    </MotionBox>

                    {/* RIGHT TEXT */}
                    <MotionBox
                        variants={slideInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        sx={{...styles.splitText,mt:10}}
                    >
                        <Grid item xs={styles.splitGridItem.xs} md={styles.splitGridItem.md}>
                            <MotionTypography
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                sx={styles.splitTitle}
                            >
                                Unlocking the Potential of Your Team
                            </MotionTypography>

                            <MotionTypography
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                sx={styles.splitBody}
                            >
                                At its core, Authentic Relating @ Work is about integrating
                                fundamental human connection into professional settings. Through
                                guided experiences, teams gain the ability to:
                            </MotionTypography>

                            {/* Bullet Points */}
                            <Stack spacing={styles.bulletStack.spacing}>
                                {points.map((item, index) => (
                                    <MotionBox
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                                        sx={styles.bulletRow}
                                    >
                                        <MotionBox
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.3,
                                                delay: index * 0.1 + 0.5,
                                                type: 'spring',
                                                stiffness: 200,
                                            }}
                                            sx={styles.bulletDot(item.color)}
                                        />
                                        <MotionTypography
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                                            sx={styles.bulletText}
                                        >
                                            {item.text}
                                        </MotionTypography>
                                    </MotionBox>
                                ))}
                            </Stack>
                        </Grid>
                    </MotionBox>
                </MotionBox>
            </SiteContainer>
        </Section>
    );
}