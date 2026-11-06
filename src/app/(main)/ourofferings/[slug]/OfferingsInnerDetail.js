'use client';

import { useState, useEffect } from 'react';
import {
    Box,
    Grid,
    Typography,
    Card,
    Stack,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

// Import theme modules
import theme from '../../../../theme/theme';
import colors from '../../../../theme/colors';
import typography from '../../../../theme/typography';
import spacing from '../../../../theme/spacing';

// Import EventButton
import EventButton from '../../../_components/buttons/EventButton';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);

// =====================================================
// THEME SHORTCUTS (with safe fallbacks)
// =====================================================
const weights = typography?.weights || {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
};
const fontFamily = typography?.fonts?.body || '"Red Hat Display", sans-serif';

const innerColors = colors?.offeringsInnerDetail || {
    title: "#0077D1",
    description: "#4B5563",
    relatedEventsTitle: "#444444",
    viewAll: "#0077D1",
    viewAllHover: "#0055A0",
    bulletBg: "#3096E1",
    bulletText: "#ffffff",
    eventCardBackground:
        "linear-gradient(100deg,#3B82C4 0%,#7FB3E6 25%,#9EC5EA 45%,#f4edfb 100%,#ffffff 90%)",
    eventCardBorder: "rgba(255,255,255,0.6)",
    eventCardHoverShadow: "0 20px 40px rgba(0,0,0,0.2)",
    eventText: "#ffffff",
    eventTextMuted: "rgba(255,255,255,0.9)",
    eventImageBg: "#ffffff",
};

const innerType = typography?.offeringsInnerDetail || {
    title: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 600,
        fontSize: { xs: "22px", sm: "26px", md: "34px", lg: "40px", xl: "44px" },
        lineHeight: { xs: 1.3, sm: 1.25, md: 1.2, lg: 1.1, xl: 1.05 },
        letterSpacing: "0%",
    },
    description: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 400,
        fontSize: { xs: 13, sm: 6.5, md: 10, lg: 15, xl: 16 },
        lineHeight: 1.9,
    },
    relatedEventsHeader: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 700,
        fontSize: { xs: "20px", sm: "22px", md: "24px", lg: "26px", xl: "28px" },
        lineHeight: { xs: 1.3, sm: 1.25, md: 1.2, lg: 1.15 },
        letterSpacing: "0%",
    },
    viewAll: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 700,
        fontSize: { xs: "13px", sm: "14px", md: "15px", lg: "16px" },
        lineHeight: { xs: 1.6, md: "28.8px" },
        letterSpacing: "0%",
    },
    eventCard: {
        title: {
            fontFamily: '"Red Hat Display", sans-serif',
            fontWeight: 600,
            fontSize: { xs: 16, sm: 14, md: 16, lg: 18 },
            lineHeight: 1.3,
        },
        description: {
            fontFamily: '"Red Hat Display", sans-serif',
            fontWeight: 400,
            fontSize: { xs: 13, sm: 12, md: 13, lg: 14 },
            lineHeight: 1.6,
        },
        meta: {
            fontFamily: '"Red Hat Display", sans-serif',
            fontWeight: 400,
            fontSize: { xs: 12, md: 13 },
        },
        price: {
            fontFamily: '"Red Hat Display", sans-serif',
            fontWeight: 600,
            fontSize: { xs: 14, md: 16 },
        },
    },
};

const innerSpace = spacing?.offeringsInnerDetail || {
    pagePx: { xs: 3, sm: 5, md: 7, lg: 10, xl: 16 },

    // 👇 Replaced pagePy with separate pt (padding-top) and pb (padding-bottom)
    pagePt: { xs: 2, sm: 3, md: 4, lg: 10 },
    pagePb: { xs: 2, sm: 3, md: 4, lg: 1 },

    gridSpacing: { xs: 3, sm: 4, md: 5, lg: 6 },
    titleMb: { xs: 1.5, sm: 2, md: 2.5, lg: 3 },
    descriptionMb: { xs: 1.5, sm: 2, md: 2.5 },
    sidebarTop: { sm: 100 },
    headerRowMb: { xs: 4, sm: 3, md: 3 },
    eventCardPadding: { xs: 2, sm: 2 },
    eventCardHeight: { xs: 420, sm: 420, md: 460, lg: 480, xl: 520 },
    eventCardRadius: "10px",
    eventCardBorderWidth: "2px",
    eventImageHeight: { xs: 110, sm: 100, md: 180, lg: 220 },
    eventImageRadius: "10px",
    eventImageMb: 2,
    eventTitleMb: 1,
    eventDescriptionMb: 2,
    eventMetaMb: 1,
    eventPriceMb: 2,
    buttonStackSpacing: 1.5,
    buttonHeight: { xs: "38px", sm: "40px", md: "42px" },
    buttonFontSize: { xs: "10px", sm: "11px", md: "12px" },
};

// =====================================================
// ANIMATION VARIANTS
// =====================================================
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

export default function OfferingsInnerDetail({ offeringData }) {
    const [offering, setOffering] = useState(null);

    const router = useRouter();

    useEffect(() => {
        if (offeringData) {
            setOffering(offeringData);
        }
    }, [offeringData]);

    if (!offering) return null;

    const event = offering.events_id || {};

    return (
        <MotionBox
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
        >
            <Box
                sx={{
                    px: innerSpace.pagePx,
                    // 👇 Apply separate top and bottom paddings here
                    pt: innerSpace.pagePt,
                    pb: innerSpace.pagePb,
                    width: "100%",
                    mx: "auto",
                }}
            >
                <Grid
                    container
                    spacing={innerSpace.gridSpacing}
                    alignItems="flex-start"
                >
                    {/* LEFT CONTENT */}
                    <Grid item xs={12} sm={6} md={6} lg={8} xl={8}>
                        {/* TITLE */}
                        <MotionBox
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                            transition={{ duration: 0.5 }}
                        >
                            <Typography
                                sx={{
                                    ...innerType.title,
                                    fontFamily: fontFamily,
                                    color: innerColors.title,
                                    mb: innerSpace.titleMb,
                                    textAlign: { xs: "center", sm: "left" },
                                }}
                            >
                                {offering.title}
                            </Typography>
                        </MotionBox>

                        {/* DESCRIPTION with animated children */}
                        <MotionBox
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInLeft}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <Box
                                dangerouslySetInnerHTML={{ __html: offering.long_description }}
                                sx={{
                                    ...innerType.description,
                                    fontFamily: fontFamily,
                                    color: innerColors.description,
                                    mb: innerSpace.descriptionMb,
                                    '& *': {
                                        fontSize: 'inherit',
                                        fontFamily: 'inherit',
                                        lineHeight: 'inherit',
                                        color: 'inherit',
                                    },
                                    '& ul': { pl: 0, listStyle: 'none', mb: 0 },
                                    '& li': {
                                        mb: 1,
                                        pl: '30px',
                                        position: 'relative',
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        '&:before': {
                                            content: '"✓"',
                                            position: 'absolute',
                                            left: 0,
                                            width: 22,
                                            height: 22,
                                            borderRadius: '50%',
                                            backgroundColor: innerColors.bulletBg,
                                            color: innerColors.bulletText,
                                            fontWeight: 700,
                                            fontSize: '14px !important',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                        }
                                    },
                                    '& strong': { fontWeight: weights.bold },
                                    '& p': { mb: 1.5 },
                                    '& br': { display: 'none' },
                                }}
                            />
                        </MotionBox>
                    </Grid>

                    {/* RIGHT SIDEBAR */}
                    {/* RIGHT SIDEBAR */}
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={4}
                        xl={4}
                        sx={{
                            position: { xs: "relative", sm: "sticky" },
                            top: innerSpace.sidebarTop,
                            alignSelf: "flex-start",
                        }}
                    >
                        {/* RELATED EVENTS HEADER */}
                        <MotionBox
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInRight}
                            transition={{ duration: 0.5 }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    mb: innerSpace.headerRowMb,
                                }}
                            >
                                <Typography
                                    sx={{
                                        ...innerType.relatedEventsHeader,
                                        fontFamily: fontFamily,
                                        color: innerColors.relatedEventsTitle,
                                    }}
                                >
                                    Related Events
                                </Typography>

                                <MotionTypography
                                    onClick={() => router.push("/events")}
                                    whileHover={{
                                        scale: 1.05,
                                        color: innerColors.viewAllHover,
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    sx={{
                                        ...innerType.viewAll,
                                        fontFamily: fontFamily,
                                        color: innerColors.viewAll,
                                        cursor: "pointer",
                                        textDecoration: "underline",
                                        textDecorationColor: innerColors.viewAll,
                                        textUnderlineOffset: "4px",
                                        transition: "all 0.2s ease",
                                        "&:hover": {
                                            opacity: 0.8,
                                            textDecorationThickness: "2px",
                                        },
                                    }}
                                >
                                    View All
                                </MotionTypography>
                            </Box>
                        </MotionBox>

                        {/* EVENT CARD — STYLED LIKE BlogGrid CARD */}


                        <MotionCard
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInRight}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            sx={{
                                p: 2,
                                borderRadius: "16px",
                                background: "linear-gradient(100deg, #50B0F0 0%, #80B8F5 50%, #BFC3FA 100%)",
                                boxShadow: "0 4px 12px rgba(80, 176, 240, 0.25)",
                                display: "flex",
                                flexDirection: "column",
                                position: "relative",
                                overflow: "hidden",
                                height: "100%",
                                width: "100%",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-6px)",
                                    boxShadow: "0 12px 28px rgba(80, 176, 240, 0.35)",
                                },
                            }}
                        >
                            {/* IMAGE */}
                            <Box
                                sx={{
                                    height: "200px",
                                    minHeight: "200px",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    mb: 2,
                                    background: "#fff",
                                    flexShrink: 0,
                                }}
                            >
                                <Box
                                    component="img"
                                    src={`${process.env.NEXT_PUBLIC_API_URL}/${event.image}`}
                                    alt={event.event_name || ""}
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>

                            {/* CONTENT */}
                            <MotionBox
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                                sx={{
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                {/* TITLE */}
                                <MotionTypography
                                    variants={fadeInUp}
                                    transition={{ duration: 0.4 }}
                                    sx={{
                                        fontFamily: '"Red Hat Display", sans-serif',
                                        fontWeight: 700,
                                        fontSize: { xs: "16px", md: "18px" },
                                        color: "#fff",
                                        mb: 1,
                                        minHeight: "48px",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                    }}
                                >
                                    {event.event_name}
                                </MotionTypography>

                                {/* DESCRIPTION */}
                                <MotionTypography
                                    variants={fadeInUp}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                    sx={{
                                        fontFamily: '"Red Hat Display", sans-serif',
                                        fontWeight: 400,
                                        fontSize: { xs: "12px", md: "13px" },
                                        lineHeight: 1.6,
                                        color: "rgba(255,255,255,0.95)",
                                        mb: 2,
                                        display: "-webkit-box",
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                    }}
                                >
                                    {event.event_description}
                                </MotionTypography>

                                {/* TIME */}
                                <MotionTypography
                                    variants={fadeInUp}
                                    transition={{ duration: 0.4, delay: 0.15 }}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        color: "rgba(255,255,255,0.95)",
                                        fontFamily: '"Red Hat Display", sans-serif',
                                        fontSize: { xs: "12px", md: "13px" },
                                        mb: 1,
                                    }}
                                >
                                    <AccessTimeIcon sx={{ fontSize: 16 }} />
                                    {event.start_date
                                        ? new Date(event.start_date).toLocaleDateString()
                                        : ""}{" "}
                                    @ {event.start_time}
                                </MotionTypography>

                                {/* LOCATION */}
                                <MotionTypography
                                    variants={fadeInUp}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        color: "rgba(255,255,255,0.95)",
                                        fontFamily: '"Red Hat Display", sans-serif',
                                        fontSize: { xs: "12px", md: "13px" },
                                        mb: 1,
                                    }}
                                >
                                    <LocationOnIcon sx={{ fontSize: 16 }} />
                                    {event.location_type === "venue"
                                        ? "In person"
                                        : event.location_type === "online"
                                            ? "Online Live"
                                            : "Hybrid"}
                                </MotionTypography>

                                {/* TIMEZONE */}
                                <MotionTypography
                                    variants={fadeInUp}
                                    transition={{ duration: 0.4, delay: 0.25 }}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        color: "rgba(255,255,255,0.95)",
                                        fontFamily: '"Red Hat Display", sans-serif',
                                        fontSize: { xs: "12px", md: "13px" },
                                        mb: 2,
                                    }}
                                >
                                    <LanguageIcon sx={{ fontSize: 16 }} />
                                    {event.timezone}
                                </MotionTypography>

                                {/* PRICE */}
                                <MotionTypography
                                    variants={fadeInUp}
                                    transition={{ duration: 0.4, delay: 0.3 }}
                                    sx={{
                                        fontFamily: '"Red Hat Display", sans-serif',
                                        fontWeight: 600,
                                        fontSize: { xs: "14px", md: "16px" },
                                        color: "#fff",
                                        mb: 2,
                                    }}
                                >
                                    {event.ticket_sections?.[0]?.tickets?.[0]?.price
                                        ? `INR ₹ ${event.ticket_sections[0].tickets[0].price}`
                                        : "Free"}
                                </MotionTypography>

                                {/* BUTTONS */}
                                <Stack
                                    direction="row"
                                    spacing={1.5}
                                    mt="auto"
                                >
                                    {/* READ MORE */}
                                    <EventButton
                                        onClick={() => router.push(`/events/${event.eventSlug}`)}
                                        sx={{
                                            flex: 1,
                                            width: "auto",
                                            minWidth: "130px",
                                            height: "44px",
                                            px: 3,
                                            borderRadius: "10px",
                                            fontSize: "14px",
                                            fontWeight: 500,
                                            fontFamily: '"Red Hat Display", sans-serif',
                                            color: "#fff",
                                            position: "relative",
                                            overflow: "hidden",
                                            background: "linear-gradient(105deg, #6BB9F1 0%, #80C5F5 100%)",
                                            border: "1px solid rgba(255,255,255,0.8)",
                                            boxShadow: "0 3px 8px rgba(33,150,243,0.15)",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                background: "linear-gradient(105deg, #58AEEF 0%, #70BDF3 100%)",
                                                boxShadow: "0 8px 20px rgba(33,150,243,0.3)",
                                                transform: "scale(1.03)",
                                            },
                                        }}
                                    >
                                        Read More
                                    </EventButton>

                                    {/* BOOK NOW */}
                                    <EventButton
                                        onClick={() => router.push(`/events/payment/${event.eventSlug}`)}
                                        sx={{
                                            flex: 1,
                                            width: "auto",
                                            minWidth: "130px",
                                            height: "44px",
                                            px: 3,
                                            borderRadius: "10px",
                                            fontSize: "14px",
                                            fontWeight: 500,
                                            fontFamily: '"Red Hat Display", sans-serif',
                                            color: "#fff",
                                            position: "relative",
                                            overflow: "hidden",
                                            background: "linear-gradient(105deg, #80B8F5 0%, #1685E5 100%)",
                                            border: "1px solid rgba(255,255,255,0.8)",
                                            boxShadow: "0 3px 8px rgba(33,150,243,0.2)",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                background: "linear-gradient(105deg, #69ADF0 0%, #0876D5 100%)",
                                                boxShadow: "0 8px 20px rgba(33,150,243,0.35)",
                                                transform: "scale(1.03)",
                                            },
                                        }}
                                    >
                                        Book Now
                                    </EventButton>
                                </Stack>
                            </MotionBox>
                        </MotionCard>



                    </Grid>
                </Grid>
            </Box>
        </MotionBox>
    );
}