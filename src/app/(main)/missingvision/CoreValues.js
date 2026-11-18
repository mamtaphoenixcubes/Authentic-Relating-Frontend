'use client';

import { Box, Typography, Grid } from '@mui/material';
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
                console.log(sorted);
                setValues(sorted);
            } catch (error) {
                console.error('API error:', error);
            }
        };
        fetchVision();
    }, []);

    return (
        <Section sx={{ pt: 0, mt:{xs:4 , sm:4, md:8} }}>
            <SiteContainer>
                {/* Heading + Subheading */}
                <Box sx={{ mb: 5 }}> {/* Outer container gap */}
                    <Typography sx={{ ...cv.headerTitle, mb: 1 }}> {/* 👈 Gap below title */}
                        Core Values of AuthenticRelating.com
                    </Typography>
                    <Typography sx={{ ...cv.headerSubtitle, mt: 2 }}> {/* 👈 Gap above subtitle */}
                        A living compass for human connection, personal growth, and cultural transformation.
                    </Typography>
                </Box>
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
                                display: 'flex',
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                }}
                            >
                                <Box
                                    sx={{
                                        ...cv.card,
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',

                                        // 👇 NEW: border, blur, shadow
                                        border: '2px solid #FFFFFF',
                                        backdropFilter: 'blur(260px)',
                                        WebkitBackdropFilter: 'blur(260px)',
                                        boxShadow: '0px 4px 7.3px 1px #0000001A',

                                        // Per-card dynamic gradient values
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
                                        style={{ display: 'inline-flex' }}
                                    >
                                        <Box
                                            component="img"
                                            src={`${process.env.NEXT_PUBLIC_API_URL}/${value.icon}`}
                                            alt=""
                                            sx={{
                                                ...cv.icon,
                                                width: 80,
                                                height: 80,
                                                objectFit: 'contain',
                                            }}
                                        />
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