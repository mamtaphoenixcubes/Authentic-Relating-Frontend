'use client';

import { useState } from 'react';
import {
    Box,
    Grid,
    Typography,
    Button,
    Card,
    Tabs,
    Tab,
    Stack,
    Divider,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BarChartIcon from '@mui/icons-material/BarChart';
import VideocamIcon from '@mui/icons-material/Videocam';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import Section from '../../_components/common/Section';
import SiteContainer from '../../_components/common/SiteContainer';

export default function CourseInnerDetail() {
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const spacing = theme.spacing;
    const typography = theme.typography;
    const getSpacing = (multiplier) => spacing(multiplier);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const instructorChecklist = [
        'Donec imperdiet ante sit.',
        'Donec imperdiet ante sit.',
        'Donec imperdiet ante sit.',
    ];

    const features = [
        'Donec imperdiet ante sit amet nibh laoreet, et efficitur tortor ullamcorper.',
        'Aliquam eget augue turpis. Maecenas egestas efficitur imperdiet.',
        'Fusce iaculis ante vel dolor condimentum lobortis a et velit.',
        'Sed molestie metus dolor, eu auctor ante fringilla quis.',
        'Phasellus ullamcorper nibh euismod mauris iaculis pretium.',
        'Nulla tristique ultrices nulla, quis porta lacus bibendum eget. Suspendisse.'
    ];

    return (
        <Section sx={{ overflow: 'visible' }}>
            <SiteContainer sx={{ overflow: 'visible' }}>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Typography
                        sx={{
                            fontFamily: typography.fontFamily,
                            fontSize: { xs: 25, sm: 20, md: 25, lg: 35, xl: 45 },
                            color:"#15AFA2",
                            fontWeight: 700,
                            mb: { xs: getSpacing(1.5), sm: getSpacing(0), md: getSpacing(0), lg: getSpacing(0), xl: getSpacing(0.5) },
                            textAlign: { xs: 'center', sm: 'left' }
                        }}
                    >
                        Expand inside out
                    </Typography>
                </motion.div>

                <Grid
                    container
                    spacing={{ xs: getSpacing(3), sm: getSpacing(4), md: getSpacing(5), lg: getSpacing(6), xl: getSpacing(8) }}
                    alignItems="flex-start"
                >
                    {/* LEFT CONTENT — SCROLLS NORMALLY */}
                    <Grid item xs={12} sm={6} md={8} lg={8} xl={8}>
                        {/* TABS */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: '#F3F4F6',
                                    borderBottom: '2px solid #14B8A6',
                                    mb: { xs: getSpacing(2), sm: getSpacing(2.5), md: getSpacing(2.5), lg: getSpacing(3.5), xl: getSpacing(4) },
                                    borderRadius: { xs: getSpacing(1), sm: getSpacing(1.5), md: getSpacing(2), lg: getSpacing(2.5), xl: getSpacing(3) },
                                    overflow: 'hidden',
                                }}
                            >
                                <Tabs
                                    value={value}
                                    onChange={(e, newValue) => setValue(newValue)}
                                    variant="fullWidth"
                                    TabIndicatorProps={{
                                        sx: { display: 'none' }
                                    }}
                                    sx={{
                                        minHeight: { xs: getSpacing(6), sm: getSpacing(6), md: getSpacing(7), lg: getSpacing(8), xl: getSpacing(8) },
                                        '& .MuiTabs-flexContainer': {
                                            gap: 0,
                                        },
                                        '& .MuiTab-root': {
                                            fontFamily: typography.fontFamily,
                                            textTransform: 'none',
                                            fontSize: { xs: 14, sm: 15, md: 16, lg: 18, xl: 20 },
                                            fontWeight: 500,
                                            color: '#111827',
                                            backgroundColor: '#F3F4F6',
                                            minHeight: { xs: getSpacing(6), sm: getSpacing(6), md: getSpacing(7), lg: getSpacing(8), xl: getSpacing(8) },
                                            py: { xs: getSpacing(1), sm: getSpacing(1), md: getSpacing(1.5), lg: getSpacing(1.5) },

                                            margin: 0,
                                            px: 0,
                                            '&:not(:last-of-type)': {
                                                borderRight: '1px solid rgba(0,0,0,0.05)',
                                            }
                                        },
                                        '& .Mui-selected': {
                                            backgroundColor: '#E0FDF9',
                                            color: '#111827',
                                            fontWeight: 700,
                                            '&:hover': {
                                                backgroundColor: '#E0FDF9',
                                            }
                                        },
                                    }}
                                >
                                    <Tab label="Overview" />
                                    <Tab label="Instructor" />
                                </Tabs>
                            </Box>
                        </motion.div>

                        {/* DESCRIPTION */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <motion.div variants={fadeInUp}>
                                <Typography
                                    sx={{
                                        fontFamily: typography.fontFamily,
                                        fontSize: { xs: 13, sm: 10, md: 13, lg: 16, xl: 17 },
                                        color: "#4B5563",
                                        mb: { xs: getSpacing(1.5), sm: getSpacing(2), md: getSpacing(2.5), lg: getSpacing(3), xl: getSpacing(3.5) },
                                        lineHeight: 1.9,
                                        textAlign: { xs: 'justify', sm: 'left' }
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed urna elit. Ut in tincidunt lacus, at convallis risus.
                                    Orci varius <br /> natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                    Duis commodo tincidunt ex, sed pretium nisi malesuada ac.
                                </Typography>
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <Typography
                                    sx={{
                                        fontFamily: typography.fontFamily,
                                        fontSize: { xs: 13, sm: 10, md: 13, lg: 16, xl: 17 },
                                        color: "#4B5563",
                                        mb: { xs: getSpacing(1.5), sm: getSpacing(2), md: getSpacing(2.5), lg: getSpacing(3), xl: getSpacing(3.5) },
                                        lineHeight: 1.9,
                                        textAlign: { xs: 'justify', sm: 'left' }
                                    }}
                                >
                                    Nam interdum quam purus, a tincidunt nulla dignissim at. Pellentesque tristique magna metus, ut vulputate tellus aliquet vitae. Integer
                                    <br />quis est id nisl tincidunt suscipit. Suspendisse tempus pretium pulvinar. Pellentesque ac nunc ultrices risus malesuada fringilla bibendum
                                    <br /> in ante. Sed vulputate consectetur purus, a aliquam leo imperdiet at. Donec non libero mi. Donec ac tellus ut erat iaculis rhoncus. Nulla
                                    <br /> tristique ultrices nulla, quis porta lacus bibendum eget. Suspendisse nec imperdiet risus, in viverra nisi. Nulla aliquet tincidunt purus, et
                                    <br />feugiat lectus ullamcorper a. Fusce aliquam, odio ut suscipit bibendum, leo tellus hendrerit ex, id ultrices massa nunc sodales neque.
                                    <br /> Vestibulum imperdiet justo urna, at volutpat nibh dignissim sed.
                                </Typography>
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <Typography
                                    sx={{
                                        fontFamily: typography.fontFamily,
                                        fontSize: { xs: 22, sm: 15, md: 20, lg: 28, xl: 30 },
                                        fontWeight: 700,
                                        mb: { xs: getSpacing(1.5), sm: getSpacing(2), md: getSpacing(2.5), lg: getSpacing(3), xl: getSpacing(3.5) },
                                        textAlign: { xs: 'center', sm: 'left' }
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel?
                                </Typography>
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <Typography
                                    sx={{
                                        fontFamily: typography.fontFamily,
                                        fontSize: { xs: 13, sm: 10, md: 13, lg: 16, xl: 17 },
                                        color: "#4B5563",
                                        mb: { xs: getSpacing(1.5), sm: getSpacing(2), md: getSpacing(2.5), lg: getSpacing(3), xl: getSpacing(3.5) },
                                        lineHeight: 1.9,
                                        textAlign: { xs: 'justify', sm: 'left' }
                                    }}
                                >
                                    Donec imperdiet ante sit amet nibh laoreet, et efficitur tortor ullamcorper. Suspendisse molestie ornare mi efficitur tristique. Suspendisse tempus
                                    <br />mi sapien. Aliquam eget augue turpis. Maecenas egestas efficitur imperdiet. Praesent vel nibh neque. Suspendisse
                                    <br /> ullamcorper pretium iaculis. Mauris eget sollicitudin mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                                    <br /> ridiculus mus. Sed molestie metus dolor, eu auctor ante fringilla quis. Phasellus ullamcorper nibh euismod mauris iaculis pretium. Mauris
                                    <br /> scelerisque semper lorem nec scelerisque. Sed pretium ante in ornare volutpat. Fusce iaculis ante vel dolor condimentum lobortis a et
                                    <br />velit.
                                </Typography>
                            </motion.div>
                        </motion.div>

                        {/* FEATURES */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <Stack
                                spacing={{ xs: getSpacing(1.5), sm: getSpacing(2), md: getSpacing(2.5), lg: getSpacing(3), xl: getSpacing(3.5) }}
                                mb={{ xs: getSpacing(3), sm: getSpacing(3.5), md: getSpacing(4), lg: getSpacing(4.5), xl: getSpacing(5) }}
                            >
                                {features.map((text, i) => (
                                    <motion.div key={i} variants={fadeInLeft}>
                                        <Stack direction="row" spacing={getSpacing(1.5)} alignItems="flex-start">
                                            <Box
                                                sx={{
                                                    width: { xs: getSpacing(4), sm: getSpacing(2.5), md: getSpacing(4), lg: getSpacing(5.5), xl: getSpacing(6) },
                                                    height: { xs: getSpacing(4), sm: getSpacing(2.5), md: getSpacing(4), lg: getSpacing(5.5), xl: getSpacing(6) },
                                                    backgroundColor: '#15AFA2',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#fff',
                                                    fontSize: { xs: 14, sm: 12, md: 14, lg: 20, xl: 22 },
                                                    fontWeight: 700,
                                                    flexShrink: 0,
                                                    mt: '2px',
                                                    boxShadow: '0 2px 8px rgba(46, 204, 113, 0.3)',
                                                    borderRadius: '50%',
                                                }}
                                            >
                                                ✓
                                            </Box>
                                            <Typography
                                                sx={{
                                                    fontFamily: typography.fontFamily,
                                                    fontSize: { xs: 13, sm: 8, md: 12, lg: 16, xl: 17 },
                                                    lineHeight: 2.5,
                                                    color: '#2D3748',
                                                    pt: '1px'
                                                }}
                                            >
                                                {text}
                                            </Typography>
                                        </Stack>
                                    </motion.div>
                                ))}
                            </Stack>
                        </motion.div>

                        <Divider
                            sx={{ mb: { xs: getSpacing(3), sm: getSpacing(3.5), md: getSpacing(4), lg: getSpacing(4.5), xl: getSpacing(5) } }}
                        />

                        {/* INSTRUCTOR SECTION */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: typography.fontFamily,
                                    fontSize: { xs: 16, sm: 18, md: 19, lg: 22, xl: 24 },
                                    fontWeight: 600,
                                    mb: { xs: getSpacing(1.5), sm: getSpacing(2), md: getSpacing(2.5), lg: getSpacing(3), xl: getSpacing(3.5) },
                                }}
                            >
                                Instructor Details
                            </Typography>
                        </motion.div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={{ xs: getSpacing(2.5), sm: getSpacing(3), md: getSpacing(3.5), lg: getSpacing(4), xl: getSpacing(5) }}
                                alignItems={{ xs: 'center', sm: 'flex-start' }}
                                sx={{
                                    mb: { xs: getSpacing(4), sm: getSpacing(5), md: getSpacing(6), lg: getSpacing(7), xl: getSpacing(8) },
                                    textAlign: { xs: 'center', sm: 'left' },
                                }}
                            >
                                <motion.div variants={scaleIn}>
                                    <Box
                                        sx={{
                                            width: { xs: 350, sm: 200, md: 220, lg: 350, xl: 300 },
                                            height: 'auto',
                                            minHeight: { xs: 200, sm: 200, md: 280, lg: 360, xl: 300 },
                                            pt: 1,
                                            backgroundColor: '#D9FFFC',
                                            borderRadius: getSpacing(2),
                                            flexShrink: 0,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <img
                                            src="/Amitabhabhatia.png"
                                            alt="Instructor"
                                            style={{
                                                width: '100%',
                                                height: '60%',
                                                objectFit: 'cover',
                                                borderRadius: 'inherit'
                                            }}
                                        />
                                    </Box>
                                </motion.div>

                                <motion.div variants={fadeInRight} style={{ flex: 1, width: '100%' }}>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: { xs: 'center', sm: 'flex-start', md: 'flex-start', lg: 'flex-start', xl: 'flex-start' },
                                            textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left', xl: 'left' }
                                        }}
                                    >
                                        <Stack
                                            direction="row"
                                            spacing={getSpacing(1.5)}
                                            alignItems="center"
                                            mb={getSpacing(0.5)}
                                            sx={{
                                                width: '100%',
                                                pt: { xs: 0, sm: 5, md: 6, lg: 6, xl: 8 },
                                                justifyContent: { xs: 'center', sm: 'flex-start', md: 'flex-start', lg: 'flex-start', xl: 'flex-start' }
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: { xs: getSpacing(0.75), sm: getSpacing(0.875), md: getSpacing(1), lg: getSpacing(1.125), xl: getSpacing(1.25) },
                                                    height: { xs: getSpacing(10), sm: getSpacing(7.25), md: getSpacing(7.5), lg: getSpacing(10.75), xl: getSpacing(11) },
                                                    backgroundColor: '#2563EB',
                                                    borderRadius: getSpacing(2),
                                                    flexShrink: 0,
                                                }}
                                            />
                                            <Box>
                                                <Typography
                                                    sx={{
                                                        fontFamily: typography.fontFamily,
                                                        fontSize: { xs: 15, sm: 10, md: 17, lg: 21, xl: 23 },
                                                        fontWeight: 600,
                                                    }}
                                                >
                                                    Amitabha Bhatia
                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        fontFamily: typography.fontFamily,
                                                        fontSize: { xs: 12, sm: 10, md: 12, lg: 15, xl: 16 },
                                                        color: '#6B7280',
                                                    }}
                                                >
                                                    Lorem ipsum Lorem, Instructor
                                                </Typography>
                                            </Box>
                                        </Stack>

                                        <Stack
                                            spacing={getSpacing(1.2)}
                                            mt={getSpacing(3)}
                                            sx={{
                                                width: '100%',
                                                alignItems: { xs: 'center', sm: 'flex-start', md: 'flex-start', lg: 'flex-start', xl: 'flex-start' }
                                            }}
                                        >
                                            {instructorChecklist.map((text, idx) => (
                                                <motion.div key={idx} variants={fadeInLeft} custom={idx} style={{ width: '100%' }}>
                                                    <Stack
                                                        direction="row"
                                                        spacing={getSpacing(1.5)}
                                                        alignItems="center"
                                                        sx={{ width: '100%', justifyContent: { xs: 'center', sm: 'flex-start' } }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                width: { xs: getSpacing(4), sm: getSpacing(2.5), md: getSpacing(4), lg: getSpacing(5.5), xl: getSpacing(6) },
                                                                height: { xs: getSpacing(4), sm: getSpacing(2.5), md: getSpacing(4), lg: getSpacing(5.5), xl: getSpacing(6) },
                                                                borderRadius: '50%',
                                                                backgroundColor: '#15AFA2',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                color: '#fff',
                                                                fontSize: { xs: 14, sm: 10, md: 14, lg: 20, xl: 25 },
                                                                fontWeight: 900,
                                                                flexShrink: 0,
                                                                boxShadow: '0 2px 8px rgba(21, 175, 162, 0.3)'
                                                            }}
                                                        >
                                                            ✓
                                                        </Box>
                                                        <Typography
                                                            sx={{
                                                                fontFamily: typography.fontFamily,
                                                                fontSize: { xs: 12.5, sm: 9.5, md: 10.5, lg: 15.5, xl: 16.5 },
                                                                color: '#374151',
                                                                textAlign: { xs: 'center', sm: 'left' }
                                                            }}
                                                        >
                                                            {text}
                                                        </Typography>
                                                    </Stack>
                                                </motion.div>
                                            ))}
                                        </Stack>
                                    </Box>
                                </motion.div>
                            </Stack>
                        </motion.div>
                    </Grid>

                    {/* RIGHT SIDEBAR — STICKY (pattern matched to OfferingsInnerDetail) */}
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={4}
                        xl={4}
                        sx={{
                            position: { xs: 'relative', sm: 'sticky' },
                            top: { sm: 100 },
                            alignSelf: 'flex-start',
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            <Card
                                sx={{
                                    width: '100%',
                                    borderRadius: { xs: getSpacing(1), sm: getSpacing(1), md: getSpacing(1), lg: getSpacing(1.5), xl: getSpacing(2) },
                                    boxShadow: {
                                        xs: '0 4px 12px rgba(0,0,0,0.08)',
                                        sm: '0 6px 18px rgba(0,0,0,0.08)',
                                        md: '0 8px 24px rgba(0,0,0,0.08)',
                                        lg: '0 10px 30px rgba(0,0,0,0.08)',
                                        xl: '0 12px 40px rgba(0,0,0,0.08)'
                                    },
                                    overflow: 'hidden',
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: '#D1FAF5',
                                        p: { xs: getSpacing(2), sm: getSpacing(2.5), md: getSpacing(3), lg: getSpacing(3.5), xl: getSpacing(4) },
                                    }}
                                >
                                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                                        <Typography
                                            sx={{
                                                fontFamily: typography.fontFamily,
                                                fontSize: { xs: 12, sm: 13, md: 14, lg: 15, xl: 16 },
                                                color: "#374151",
                                                fontWeight: 500
                                            }}
                                        >
                                            Course Price:
                                        </Typography>

                                        <Box
                                            sx={{
                                                backgroundColor: '#fff',
                                                px: { xs: getSpacing(1.25), sm: getSpacing(1.5), md: getSpacing(1.75), lg: getSpacing(2), xl: getSpacing(2.25) },
                                                py: { xs: getSpacing(0.375), sm: getSpacing(0.5), md: getSpacing(0.625), lg: getSpacing(0.75), xl: getSpacing(0.875) },
                                                borderRadius: { xs: getSpacing(0.75), sm: getSpacing(0.875), md: getSpacing(1), lg: getSpacing(1.125), xl: getSpacing(1.25) },
                                                fontSize: { xs: 10, sm: 11, md: 12, lg: 13, xl: 14 },
                                                fontWeight: 600,
                                                color: '#374151',
                                                border: '1px solid rgba(20, 184, 166, 0.2)'
                                            }}
                                        >
                                            Limited time offer
                                        </Box>
                                    </Stack>

                                    <Stack direction="row" spacing={getSpacing(1.5)} alignItems="center" mt={getSpacing(1)}>
                                        <Typography
                                            sx={{
                                                fontFamily: typography.fontFamily,
                                                fontSize: { xs: 20, sm: 17, md: 24, lg: 26, xl: 28 },
                                                fontWeight: 700,
                                                color: '#14B8A6',
                                            }}
                                        >
                                            INR ₹ 6,500
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontFamily: typography.fontFamily,
                                                fontSize: { xs: 12, sm: 10, md: 14, lg: 15, xl: 16 },
                                                color: '#14B8A6',
                                                textDecoration: 'line-through',
                                                opacity: 0.8
                                            }}
                                        >
                                            INR ₹ 16,500
                                        </Typography>
                                    </Stack>
                                </Box>

                                <Box sx={{ p: { xs: getSpacing(2), sm: getSpacing(2.5), md: getSpacing(3), lg: getSpacing(3.5), xl: getSpacing(4) } }}>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        py={{ xs: getSpacing(1.25), sm: getSpacing(1.5), md: getSpacing(1.75), lg: getSpacing(2), xl: getSpacing(2.25) }}
                                        borderBottom="1px solid #E5E7EB"
                                    >
                                        <Stack direction="row" spacing={getSpacing(1)} alignItems="center">
                                            <AccessTimeIcon sx={{ fontSize: { xs: 16, sm: 15, md: 18, lg: 19, xl: 20 }, color: '#FB7185' }} />
                                            <Typography sx={{ fontFamily: typography.fontFamily, fontSize: { xs: 13, sm: 10, md: 15, lg: 16, xl: 17 }, fontWeight: 500 }}>
                                                Course Length
                                            </Typography>
                                        </Stack>
                                        <Typography sx={{ fontFamily: typography.fontFamily, fontSize: { xs: 13, sm: 10, md: 15, lg: 16, xl: 17 }, color: "#374151", fontWeight: 600 }}>
                                            3 Hrs
                                        </Typography>
                                    </Stack>

                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        py={{ xs: getSpacing(1.25), sm: getSpacing(1.5), md: getSpacing(1.75), lg: getSpacing(2), xl: getSpacing(2.25) }}
                                        borderBottom="1px solid #E5E7EB"
                                    >
                                        <Stack direction="row" spacing={getSpacing(1)} alignItems="center">
                                            <BarChartIcon sx={{ fontSize: { xs: 16, sm: 15, md: 18, lg: 19, xl: 20 }, color: '#FB7185' }} />
                                            <Typography sx={{ fontFamily: typography.fontFamily, fontSize: { xs: 13, sm: 10, md: 15, lg: 16, xl: 17 }, fontWeight: 500 }}>
                                                Language
                                            </Typography>
                                        </Stack>
                                        <Typography sx={{ fontFamily: typography.fontFamily, fontSize: { xs: 13, sm: 10, md: 15, lg: 16, xl: 17 }, color: "#374151", fontWeight: 600 }}>
                                            English, Hindi
                                        </Typography>
                                    </Stack>

                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        py={{ xs: getSpacing(1.25), sm: getSpacing(1.5), md: getSpacing(1.75), lg: getSpacing(2), xl: getSpacing(2.25) }}
                                    >
                                        <Stack direction="row" spacing={getSpacing(1)} alignItems="center">
                                            <VideocamIcon sx={{ fontSize: { xs: 16, sm: 15, md: 18, lg: 19, xl: 20 }, color: '#FB7185' }} />
                                            <Typography sx={{ fontFamily: typography.fontFamily, fontSize: { xs: 13, sm: 10, md: 15, lg: 16, xl: 17 }, fontWeight: 500 }}>
                                                Course Type
                                            </Typography>
                                        </Stack>
                                        <Typography sx={{ fontFamily: typography.fontFamily, fontSize: { xs: 13, sm: 10, md: 15, lg: 16, xl: 17 }, color: "#374151", fontWeight: 600 }}>
                                            Online
                                        </Typography>
                                    </Stack>

                                    <Button
                                        fullWidth
                                        sx={{
                                            mt: { xs: getSpacing(2.5), sm: getSpacing(3), md: getSpacing(3.5), lg: getSpacing(4), xl: getSpacing(4.5) },
                                            py: { xs: getSpacing(1), sm: getSpacing(1.25), md: getSpacing(1.5), lg: getSpacing(1.75), xl: getSpacing(2) },
                                            borderRadius: { xs: getSpacing(1.5), sm: getSpacing(1.75), md: getSpacing(2), lg: getSpacing(2.25), xl: getSpacing(2.5) },
                                            background: 'linear-gradient(135deg, #FB7185, #F97316)',
                                            color: '#fff',
                                            fontWeight: 600,
                                            textTransform: 'none',
                                            fontFamily: typography.fontFamily,
                                            fontSize: { xs: 13, sm: 10, md: 15, lg: 16, xl: 17 },
                                            boxShadow: {
                                                xs: '0 4px 12px rgba(249,115,22,0.35)',
                                                sm: '0 6px 16px rgba(249,115,22,0.35)',
                                                md: '0 8px 20px rgba(249,115,22,0.35)',
                                                lg: '0 10px 24px rgba(249,115,22,0.35)',
                                                xl: '0 12px 28px rgba(249,115,22,0.35)'
                                            },
                                            '&:hover': {
                                                background: 'linear-gradient(135deg, #F43F5E, #EA580C)',
                                                transform: {
                                                    xs: 'translateY(-2px)',
                                                    sm: 'translateY(-3px)',
                                                    md: 'translateY(-4px)',
                                                    lg: 'translateY(-5px)',
                                                    xl: 'translateY(-6px)'
                                                },
                                                boxShadow: {
                                                    xs: '0 8px 20px rgba(249,115,22,0.5)',
                                                    sm: '0 10px 24px rgba(249,115,22,0.5)',
                                                    md: '0 12px 28px rgba(249,115,22,0.5)',
                                                    lg: '0 14px 32px rgba(249,115,22,0.5)',
                                                    xl: '0 16px 36px rgba(249,115,22,0.5)'
                                                }
                                            },
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        Join the course
                                    </Button>
                                </Box>
                            </Card>
                        </motion.div>
                    </Grid>
                </Grid>
            </SiteContainer>
        </Section>
    );
}