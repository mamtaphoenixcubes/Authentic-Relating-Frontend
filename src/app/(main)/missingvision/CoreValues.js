'use client';

import { Box, Typography, Grid } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import axiosInstance from '@/lib/axios';
import SiteContainer from '@/app/_components/common/SiteContainer';
import Section from '@/app/_components/common/Section';
import SectionHeader from '@/app/_components/common/SectionHeader';

const CoreValues = () => {
    const theme = useTheme();
    const cv = theme.custom.coreValues;

    const [values, setValues] = useState([]);

    useEffect(() => {
        const fetchVision = async () => {
            try {
                const res = await axiosInstance.get('/frontendApis/getAllDetailsVision', {
                    params: { size: 20, page: 0, search: '' },
                });
                const sorted = (res?.data?.detailsOfVisions || []).sort(
                    (a, b) => a.index_position - b.index_position
                );
                setValues(sorted);
            } catch (error) {
                console.error('API error:', error);
            }
        };
        fetchVision();
    }, []);

    return (
        <Section sx={{ pt: 0, mt: 10 }}> 
            <SiteContainer >
                {/* Heading + Subheading */}
                <SectionHeader
                    align="center"
                    title="Core Values of AuthenticRelating.com"
                    subtitle="A living compass for human connection, personal growth, and cultural transformation."
                    titleSx={cv.headerTitle}
                    subtitleSx={cv.headerSubtitle}
                    sx={cv.header}
                />

                {/* Cards Grid */}
                <Grid container {...cv.grid}>
                    {values.map((value, index) => (
                        <Grid
                            item
                            key={index}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={4}
                            xl={4}
                            sx={{
                                ...cv.gridItem,
                                display: 'flex', // 1. Make the grid item a flex container
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                style={{ 
                                    width: '100%',
                                    height: '100%', // 2. Make the animation wrapper fill the height
                                    display: 'flex', // Allows the inner box to stretch
                                }}
                            >
                                <Box
                                    sx={{
                                        ...cv.card,
                                        width: '100%', // 3. Ensure the card takes full width
                                        height: '100%', // 4. Stretch the card to match the tallest sibling
                                        display: 'flex',
                                        flexDirection: 'column',
                                        // CSS variables let us keep gradient values dynamic per-card
                                        '--cv-start': value.gradientStart,
                                        '--cv-end': value.gradientEnd,
                                    }}
                                >

                                    <motion.div
                                        initial={{ scale: 0, rotate: -45, opacity: 0 }}
                                        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1 + 0.15,
                                            type: 'spring',
                                            stiffness: 220,
                                            damping: 14,
                                        }}
                                        whileHover={{ scale: 1.15, rotate: 8 }}
                                        whileTap={{ scale: 0.9 }}
                                        style={{ display: 'inline-flex' }}// Keeps icon aligned left
                                    >
                                        <FavoriteBorderIcon sx={cv.icon} />
                                    </motion.div>

                                    <Typography sx={cv.cardTitle}>{value.title}</Typography>

                                    <Typography sx={{ ...cv.cardDescription, flexGrow: 1 }}>
                                        <span
                                            dangerouslySetInnerHTML={{ __html: value.description }}
                                        />
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </SiteContainer>
        </Section>
    );
};

export default CoreValues;