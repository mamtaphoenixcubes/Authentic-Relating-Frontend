'use client';

import {
    Box,
    Card as MuiCard,
    CardContent,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import axiosInstance from "@/lib/axios";
import Image from 'next/image';
import SiteContainer from '../../_components/common/SiteContainer';
import Section from '../../_components/common/Section';

const coachingPoints = [
    { title: "Leadership Labs & Team Trainings", desc: "Experiential programs to strengthen trust, communication, and relational agility in teams" },
    { title: "Executive & Organizational Coaching", desc: "1-on-1 and group coaching for conscious leadership development" },
    { title: "Embodied Leadership Workshops", desc: "Explore your leadership presence through body, breath, and relational awareness" },
    { title: "Corporate Authentic Relating Programs - Authentic Relating@Work", desc: "Explore your leadership presence through body, breath, and relational awareness" },
    { title: "Train-the-Trainer Programs", desc: "For facilitators and HR professionals leading the next generation of heart-centered leadership" },
];

export const Leadership = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // === Pull theme tokens ===
    const typo = theme.typography.leadership;
    const lead = theme.custom.leadership;
    const leadColors = theme.palette.mode === 'dark'
        ? theme.custom.leadershipDark || lead
        : lead;

    const [leadershipSections, setLeadershipSections] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeadership = async () => {
            try {
                setLoading(true);
                const res = await axiosInstance.get('/frontendApis/getAllLeadership', {
                    params: { size: 20, page: 0, search: '' },
                });
                const sorted = (res?.data?.leadership || []).sort((a, b) => a.index_position - b.index_position);
                setLeadershipSections(sorted);
            } catch (error) {
                console.error('API error:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchLeadership();
    }, []);

    const getImageAnimation = (isEven, index) => {
        if (isMobile) {
            return {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: index * 0.1 },
                viewport: { once: true }
            };
        }
        return {
            initial: { opacity: 0, x: isEven ? -80 : 80, scale: 0.92 },
            whileInView: { opacity: 1, x: 0, scale: 1 },
            transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.1 },
            viewport: { once: true }
        };
    };

    const getTextAnimation = (isEven, index) => {
        if (isMobile) {
            return {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: index * 0.1 + 0.1 },
                viewport: { once: true }
            };
        }
        return {
            initial: { opacity: 0, x: isEven ? 80 : -80 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.1 + 0.1 },
            viewport: { once: true }
        };
    };

    if (loading) {
        return (
            <SiteContainer>
                <Box sx={{ pt: { xs: 6, md: 10 }, textAlign: 'center', minHeight: '400px' }}>
                    <Typography>Loading...</Typography>
                </Box>
            </SiteContainer>
        );
    }

    return (
        <Section sx={{ pb: { xs: 1, md: 2 } }}>
            <SiteContainer>
                <Box sx={{ overflow: 'hidden' }}>
                    {leadershipSections.map((section, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={section._id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Box
                                    sx={{
                                        ...lead.itemRow,
                                        ...(isEven ? lead.itemRowReversed : {}),
                                    }}
                                >
                                    {/* IMAGE SECTION */}
                                    <Box sx={lead.imageColumn}>
                                        <motion.div {...getImageAnimation(isEven, index)} style={{ width: '100%' }}>
                                            <MuiCard sx={lead.imageCard}>
                                                <CardContent sx={lead.imageCardContent}>
                                                    {section.image ? (
                                                        <Box
                                                            component="img"
                                                            src={`${process.env.NEXT_PUBLIC_API_URL}/${section.image}`}
                                                            alt={section.title}
                                                            sx={lead.imageElement}
                                                            loading="lazy"
                                                        />
                                                    ) : (
                                                        <Box sx={lead.imageEmptyBox}>
                                                            <Typography color="text.secondary">No image</Typography>
                                                        </Box>
                                                    )}
                                                </CardContent>
                                            </MuiCard>
                                        </motion.div>
                                    </Box>

                                    {/* TEXT SECTION */}
                                    <Box sx={lead.textColumn}>
                                        <motion.div {...getTextAnimation(isEven, index)} style={{ width: '100%' }}>
                                            <Box sx={lead.textColumnInner}>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: 0.2 }}
                                                    style={{ width: '100%' }}
                                                >
                                                    <Typography sx={lead.itemTitle}>
                                                        {section.title}
                                                    </Typography>
                                                </motion.div>

                                                {/* Description with split animation - each element appears one by one */}
                                            <Box sx={{ width: '100%', flex: 1 }}>
                                                {(() => {
                                                    // Create a temporary div to parse HTML
                                                    const tempDiv = document.createElement('div');
                                                    tempDiv.innerHTML = section.description;
                                                    const children = Array.from(tempDiv.children);

                                                    return children.map((child, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                                                            style={{ width: '100%' }}
                                                        >
                                                            <Box
                                                                dangerouslySetInnerHTML={{ __html: child.outerHTML }}
                                                                sx={{
                                                                    fontFamily: "Red Hat Display, sans-serif",
                                                                    fontSize: { xs: 14, sm: 14, md: 15, lg: 16 },
                                                                    lineHeight: 1.7,
                                                                    color: "#444",
                                                                    width: '100%',
                                                                    mb: 2,

                                                                    "& p": {
                                                                        mb: 1.5,
                                                                        '&:last-child': {
                                                                            mb: 0
                                                                        }
                                                                    },

                                                                    "& h3, & h4": {
                                                                        fontSize: { xs: 18, md: 20 },
                                                                        fontWeight: 600,
                                                                        mb: 1.5,
                                                                        mt: 2,
                                                                        color: '#1a1a1a'
                                                                    },

                                                                    "& ul": {
                                                                        pl: 0,
                                                                        mt: 1,
                                                                        listStyle: "none"
                                                                    },

                                                                    "& li": {
                                                                        display: "flex",
                                                                        alignItems: "flex-start",
                                                                        gap: 1.5,
                                                                        mb: 1.5,
                                                                        fontSize: { xs: 13, sm: 13, md: 14 },

                                                                        "&::before": {
                                                                            content: '""',
                                                                            width: 18,
                                                                            height: 18,
                                                                            borderRadius: "50%",
                                                                            border: "3px solid #2196F3",
                                                                            marginTop: "4px",
                                                                            flexShrink: 0
                                                                        }
                                                                    }
                                                                }}
                                                            />
                                                        </motion.div>
                                                    ));
                                                })()}
                                            </Box>
                                            </Box>
                                        </motion.div>
                                    </Box>
                                </Box>
                            </motion.div>
                        );
                    })}
                </Box>

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <Box sx={{ ...lead.ctaContainer, mb: { xs: 2, md: 3 } }}>
                        <Box sx={lead.ctaBanner}>
                            {/* LEFT SECTION */}
                            <Box sx={lead.ctaLeft}>
                                <motion.div
                                    initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 30 : 0 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    <Typography sx={lead.ctaTitle}>
                                        How We Help You Lead<br /> Relationally
                                    </Typography>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: isMobile ? 0 : -40, y: isMobile ? 20 : 0 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <Typography sx={lead.ctaBody}>
                                        At{" "}
                                        <Box component="span" sx={{ textDecoration: "underline", fontWeight: 600 }}>
                                            AuthenticRelating.com
                                        </Box>
                                        , we offer trainings and coaching to cultivate <br />
                                        relational leaders across industries and cultures.
                                    </Typography>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <Box sx={lead.ctaImageWrapper}>
                                        <Image
                                            src="/leadership/relationallyx.png"
                                            alt="Relational Leadership"
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </Box>
                                </motion.div>
                            </Box>

                            {/* RIGHT SECTION */}
                            <Box sx={lead.ctaRight}>
                                <motion.div
                                    initial={{ opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 30 : 0 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    <Typography sx={lead.coachingHeading}>
                                        You will:
                                    </Typography>
                                </motion.div>

                                {coachingPoints.map((point, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: isMobile ? 0 : 40, y: isMobile ? 20 : 0 }}
                                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                                    >
                                        <Box sx={lead.coachingCard}>
                                            <Typography sx={lead.coachingCardTitle}>
                                                {point.title}
                                            </Typography>
                                            {point.desc && (
                                                <Typography sx={lead.coachingCardDescription}>
                                                    {point.desc}
                                                </Typography>
                                            )}
                                        </Box>
                                    </motion.div>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </motion.div>
            </SiteContainer>
        </Section>
    );
};