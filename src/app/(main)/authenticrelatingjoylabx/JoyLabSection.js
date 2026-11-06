'use client';

import { useState, useEffect, useMemo } from 'react';
import {
    Box,
    Typography,
    Container,
} from '@mui/material';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import axiosInstance from "@/lib/axios";

const MotionBox = motion(Box);

/**
 * Safely converts an HTML string into { paragraph, bullets }.
 * Runs only on the client — no `document.createElement` during SSR.
 */
function parseDescriptionHtml(html) {
    if (!html) return { paragraph: null, bullets: [] };
    if (typeof window === 'undefined') return { paragraph: null, bullets: [] };

    const temp = document.createElement('div');
    temp.innerHTML = html;

    const paragraph = temp.querySelector('p')?.textContent || null;
    const bullets = [...temp.querySelectorAll('li')].map(li => li.textContent);

    return { paragraph, bullets };
}

export default function JoyLabSection() {
    const theme = useTheme();
    const joyLab = theme?.custom?.joyLab || {};
    const joyLabTypography = theme?.typography?.joyLab || {};

    const [viewMode] = useState('list'); // preserved for parity
    const [sections, setSections] = useState([]);

    useEffect(() => {
        const fetchJoyLab = async () => {
            try {
                const res = await axiosInstance.get('/frontendApis/getAllJoyLab', {
                    params: { size: 20, page: 0, search: '' },
                });
                console.log(res, "res");

                setSections(
                    res.data.list
                        .sort((a, b) => a.index_position - b.index_position)
                        .map((item) => ({
                            ...item,
                            gradient: `linear-gradient(135deg, ${item.gradientStart}, ${item.gradientEnd})`,
                        }))
                );
            } catch (error) {
                console.error(error);
            }
        };

        fetchJoyLab();
    }, []);

    /**
     * Renders the description (paragraph + bullet list) for each section.
     * Uses theme tokens for the paragraph / bullet typography.
     */
    const renderDescription = (html) => {
        const { paragraph, bullets } = parseDescriptionHtml(html);
        if (!paragraph && bullets.length === 0) return null;

        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: joyLab.descStackSpacing ?? 1.5,
                }}
            >
                {paragraph && (
                    <Typography sx={joyLab.paragraph}>
                        {paragraph}
                    </Typography>
                )}

                {bullets.map((text, i) => (
                    <Box
                        key={i}
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: joyLab.bulletRowSpacing ?? 1,
                        }}
                    >
                        <FavoriteBorderIcon sx={joyLab.bulletIcon} />
                        <Typography sx={joyLab.bulletText}>{text}</Typography>
                    </Box>
                ))}
            </Box>
        );
    };

    return (
        <Box sx={joyLab.container}>
            <Container maxWidth="xl">
                {/* SPACER */}
                <Box sx={joyLab.spacer} />

                {/* HEADING — no shadow, no border, uses theme tokens */}
                <MotionBox
                    sx={joyLab.headingHeaderSx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography sx={joyLabTypography.headingTitle}>
                        What Happens in the Joy Lab?
                    </Typography>

                    <Typography sx={joyLabTypography.headingSubtitle}>
                        At the Authentic Relating Joy Lab, we blend the best elements of games,
                        storytelling, movement, and relational alchemy to create an
                        unforgettable experience. Each session includes a mix of fun, depth,
                        and playfulness, ensuring that everyone—whether introvert or
                        extrovert, playful or contemplative—feels at home.
                    </Typography>
                </MotionBox>

                {/* CONTENT — LIST VIEW */}
                {viewMode === 'list' && (
                    <Box sx={joyLab.desktopList}>
                        {sections.map((section, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <MotionBox
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        x: isEven ? -100 : 100,
                                    }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{
                                        duration: 0.7,
                                        delay: index * 0.1,
                                        ease: 'easeOut',
                                    }}
                                >
                                    <Box sx={joyLab.desktopRow(isEven)}>
                                        {/* IMAGE */}
                                        <Box sx={joyLab.desktopImageBox(isEven)}>
                                            <img
                                                src={`${process.env.NEXT_PUBLIC_API_URL}/${section.image}`}
                                                alt={section.title}
                                                style={joyLab.image}
                                            />
                                        </Box>

                                        {/* FLOATING CARD */}
                                        <Box sx={joyLab.floatingWrapper(isEven)}>
                                            <Box
                                                sx={{
                                                    ...joyLab.desktopCard,
                                                    // dynamic gradient must override theme default
                                                    background: section.gradient,
                                                }}
                                            >
                                                <Typography sx={joyLab.cardTitleDesktop}>
                                                    {section.title}
                                                </Typography>

                                                <Box sx={joyLab.desktopCardScroll}>
                                                    {renderDescription(section.description)}
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </MotionBox>
                            );
                        })}
                    </Box>
                )}
            </Container>
        </Box>
    );
}