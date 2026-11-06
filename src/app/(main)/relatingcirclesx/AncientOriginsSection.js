'use client';

import { Box, Typography, Container, useMediaQuery, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import axiosInstance from "@/lib/axios";

const borderColors = [
    '#53D2DB', '#FFE8C5', '#FE826D', '#3196E2',
    '#53D2DB', '#FFE8C5', '#FE826D',
    '#F87171', '#3196E2', '#FFE8C5', '#3196E2',
];

// Row layout: row 1 = 4, row 2 = 3, row 3 = 4
const rowConfig = [4, 3, 4];

export default function AncientOriginsSection() {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));
    const [circles, setCircles] = useState([]);

    // ── XS carousel state ──────────────────────────────────────────────────
    const [xsGroupIndex, setXsGroupIndex] = useState(0);

    useEffect(() => {
        const fetchCircles = async () => {
            try {
                const res = await axiosInstance.get('/frontendApis/getAllDetailsRelatingCircle', {
                    params: { size: 20, page: 0, search: '' },
                });
                console.log(res, "circlesres");
                const apiCircles = (res?.data?.detailsOfRelatingCircles || []).sort((a, b) => a.index_position - b.index_position);
                setCircles(apiCircles);
            } catch (error) {
                console.error('API error:', error);
            }
        };
        fetchCircles();
    }, []);

    // ── XS: auto-advance every 2.7s (2s visible + 0.7s transition) ────────
    const xsGroups = [];
    for (let i = 0; i < circles.length; i += 2) {
        xsGroups.push(circles.slice(i, i + 2));
    }

    useEffect(() => {
        if (!isXs || xsGroups.length === 0) return;
        const timer = setInterval(() => {
            setXsGroupIndex((prev) => (prev + 1) % xsGroups.length);
        }, 2700);
        return () => clearInterval(timer);
    }, [isXs, xsGroups.length]);

    // Split circles into rows of 4, 3, 4
    const rows = [];
    let idx = 0;
    for (const count of rowConfig) {
        rows.push(circles.slice(idx, idx + count));
        idx += count;
    }

    return (
        <Container
            maxWidth="xl"
            sx={{
                py: { xs: 4, sm: 5, md: 6, },
                mx: 'auto',
            }}
        >
            {/* HEADER */}
            <motion.div
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <Box
                    sx={{
                        background: 'linear-gradient(90deg, #93C5FD, #1D4ED8)',
                        borderRadius: 2,
                        py: 4,
                        mb: 3,
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "var(--font-redhat)",
                            fontWeight: 700,
                            fontSize: { xs: 12, sm: 24, md: 40 },
                            lineHeight: "100%",
                            letterSpacing: "0%",
                            textAlign: "center",
                            color: "#fff",
                        }}
                    >
                        Ancient Origins: A Universal Human Tradition
                    </Typography>
                </Box>
            </motion.div>

            {/* MAIN CARD */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <Box
                    sx={{
                        background: 'linear-gradient(135deg, #FDBA74, #F59E0B)',
                        borderRadius: 4,
                        pt: { xs: 2, sm: 4 },
                        pb: { xs: 2, sm: 4 },
                        px: { xs: 3, sm: 5, md: 7, lg: 9 },
                        overflow: 'hidden',
                    }}
                >
                    <Typography
                        color="white"
                        fontWeight={600}
                        fontSize={{ xs: 16, sm: 25 }}
                        mb={4}
                        textAlign={{ xs: 'center', sm: 'left' }}
                    >
                        Circles have long been central to human connection:
                    </Typography>

                    {/* ── SM / MD / LG / XL: oscillating rows ─────────────────────────── */}
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'column',
                            gap: { sm: 3, md: 4 },
                        }}
                    >
                        {rows.map((rowItems, rowIndex) => (
                            <motion.div
                                key={rowIndex}
                                animate={{
                                    // row 0 & 2 → right first; row 1 → left first (opposite)
                                    x: rowIndex % 2 === 0
                                        ? [0, 60, 0, -60, 9]
                                        : [0, -60, 0, 60, 0],
                                }}
                                transition={{
                                    duration: 7,
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                    ease: 'easeInOut',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        gap: { xs: 1.5, sm: 2, md: 3 },
                                    }}
                                >
                                    {rowItems.map((item, itemIndex) => {
                                        const globalIndex = rowConfig.slice(0, rowIndex).reduce((a, b) => a + b, 0) + itemIndex;
                                        const borderColor = borderColors[globalIndex] || '#53D2DB';
                                        return (
                                            <motion.div
                                                key={globalIndex}
                                                initial={{ scale: 0.7, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: globalIndex * 0.08 }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: { xs: 140, sm: 150, md: 170, lg: 200 },
                                                        height: { xs: 140, sm: 150, md: 170, lg: 200 },
                                                        borderRadius: '50%',
                                                        border: `5px solid ${borderColor}`,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        textAlign: 'center',
                                                        p: 3,
                                                        background: 'rgba(255,255,255,0.08)',
                                                        backdropFilter: 'blur(2px)',
                                                        color: 'white',
                                                        lineHeight: 1.3,
                                                        flexShrink: 0,
                                                    }}
                                                >
                                                    <Box sx={{ textAlign: 'left' }}>
                                                        <Typography
                                                            fontWeight={500}
                                                            fontSize={{ xs: 9, sm: 10, md: 12, lg: 14 }}
                                                            mb={0.5}
                                                        >
                                                            {item.title}
                                                        </Typography>
                                                        <Typography fontSize={{ xs: 7, sm: 8, md: 9, lg: 10 }}>
                                                            <span dangerouslySetInnerHTML={{ __html: item.description }} />
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </motion.div>
                                        );
                                    })}
                                </Box>
                            </motion.div>
                        ))}
                    </Box>

                    {/* ── XS only: 2-circle slide carousel ────────────────────────────── */}
                    <Box
                        sx={{
                            display: { xs: 'flex', sm: 'none' },
                            justifyContent: 'center',
                            alignItems: 'center',
                            minHeight: 155,
                            overflow: 'hidden',
                        }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={xsGroupIndex}
                                initial={{ x: 200, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 200, opacity: 0 }}
                                transition={{ duration: 0.55, ease: 'easeInOut' }}
                                style={{ display: 'flex', gap: 12 }}
                            >
                                {xsGroups[xsGroupIndex]?.map((item, i) => {
                                    const globalIndex = xsGroupIndex * 2 + i;
                                    const borderColor = borderColors[globalIndex] || '#53D2DB';
                                    return (
                                        <Box
                                            key={i}
                                            sx={{
                                                width: 140,
                                                height: 140,
                                                borderRadius: '50%',
                                                border: `5px solid ${borderColor}`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                textAlign: 'center',
                                                p: 2,
                                                background: 'rgba(255,255,255,0.08)',
                                                backdropFilter: 'blur(2px)',
                                                color: 'white',
                                                lineHeight: 1.3,
                                                flexShrink: 0,
                                            }}
                                        >
                                            <Box sx={{ textAlign: 'left' }}>
                                                <Typography fontWeight={500} fontSize={11} mb={0.5}>
                                                    {item.title}
                                                </Typography>
                                                <Typography fontSize={9}>
                                                    <span dangerouslySetInnerHTML={{ __html: item.description }} />
                                                </Typography>
                                            </Box>
                                        </Box>
                                    );
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </Box>

                    {/* XS dot indicators */}
                    <Box
                        sx={{
                            display: { xs: 'flex', sm: 'none' },
                            justifyContent: 'center',
                            gap: 0.8,
                            mt: 2,
                        }}
                    >
                        {xsGroups.map((_, i) => (
                            <Box
                                key={i}
                                onClick={() => setXsGroupIndex(i)}
                                sx={{
                                    width: i === xsGroupIndex ? 20 : 7,
                                    height: 7,
                                    borderRadius: 4,
                                    background: i === xsGroupIndex ? 'white' : 'rgba(255,255,255,0.4)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                }}
                            />
                        ))}
                    </Box>

                </Box>
            </motion.div>
        </Container>
    );
}