'use client';

import { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

// Import reusable components
import Section from '../../../_components/common/Section';
import SiteContainer from '../../../_components/common/SiteContainer';

// Import theme
import theme from '../../../../theme/theme';

const MotionButton = motion(Button);
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

// Helper to access theme values safely
const weights = theme?.typography?.weights || {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
};
const fontFamily = theme?.typography?.fontFamily || '"Red Hat Display", sans-serif';

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 }
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

export default function OfferingsMoreSessions() {
    const router = useRouter();
    const [viewMode, setViewMode] = useState('list');

    const sections = [
        {
            title: "Attachment Styles",
            subtitle: "Understanding Relational Patterns",
            description: "Explore how early relational patterns shape connection, intimacy, and trust. Learn to heal insecure attachments, cultivate self-trust, and create healthy, secure relationships through relational intelligence and emotional awareness.",
            gradient: "linear-gradient(135deg, #F38775, #d35232ff)",
            color: "#F38775",
            buttonColor: "#F38775",
            thumbnailImage: "/offerings/likeofferings.png",
            offeringSlug: "attachment-styles"
        },
    ];

    return (
        /* 👇 OVERRIDE SECTION TOP PADDING HERE */
        <Section sx={{ pt: { xs: 2, md: 3 }, pb: 0 }}>
            <SiteContainer>
                <MotionBox
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeIn}
                    transition={{ duration: 0.6 }}
                >
                    <Box
                        sx={{
                            /* 👇 REDUCED BOX TOP PADDING HERE */
                            pt: { xs: 1, md: 2 },
                            pb: { xs: 4, md: 0 },
                            position: 'relative',
                        }}
                    >
                        {/* HEADER */}
                        <MotionBox
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <MotionTypography
                                variants={fadeInDown}
                                transition={{ duration: 0.5 }}
                                textAlign="center"
                                sx={{
                                    fontSize: { xs: 20, sm: 22, md: 26, lg: 38 },
                                    fontWeight: weights.semibold,
                                    fontFamily: fontFamily,
                                    color: "#000000ff",
                                    /* 👇 REDUCED MARGIN BOTTOM HERE */
                                    mb: { xs: 1, md: 2 },
                                }}
                            >
                                You may like this as well
                            </MotionTypography>

                            <MotionTypography
                                variants={fadeInUp}
                                transition={{ duration: 0.5, delay: 0.15 }}
                                textAlign="center"
                                sx={{
                                    fontSize: { xs: 12, sm: 13, md: 20 },
                                    fontFamily: fontFamily,
                                    color: "#777",
                                    maxWidth: { xs: "100%", sm: 700, md: 1100, lg: 1300 },
                                    mx: "auto",
                                    mb: { xs: 4, md: 5, lg: 6 },
                                    px: { xs: 2, sm: 0 },
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed urna elit. Ut in tincidunt lacus, at convallis risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            </MotionTypography>
                        </MotionBox>

                        {/* CONTENT - LIST VIEW */}
                        {viewMode === 'list' && (
                            <MotionBox
                                variants={fadeIn}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                {/* MOBILE LIST */}
                                <MotionBox
                                    sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'column', gap: 6 }}
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {sections.map((section, index) => (
                                        <MotionBox
                                            key={index}
                                            variants={scaleIn}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                                        >
                                            {/* IMAGE */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 40 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.1 }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: "100%",
                                                        height: 320,
                                                        borderRadius: "20px",
                                                        overflow: "hidden",
                                                        backgroundColor: "#ccc",
                                                    }}
                                                >
                                                    <Box
                                                        component="img"
                                                        src={`${section.thumbnailImage}`}
                                                        alt={section.title}
                                                        sx={{
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover",
                                                            transition: "transform 0.5s ease",
                                                            "&:hover": {
                                                                transform: "scale(1.05)",
                                                            },
                                                        }}
                                                    />
                                                </Box>
                                            </motion.div>

                                            {/* CARD */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 60 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: 0.2 }}
                                            >
                                                <MotionBox
                                                    whileHover={{
                                                        y: -6,
                                                        boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                                                        transition: { type: "spring", stiffness: 300, damping: 20 }
                                                    }}
                                                    sx={{
                                                        width: "92%",
                                                        mx: "auto",
                                                        mt: -12,
                                                        borderRadius: "20px",
                                                        background: section.gradient,
                                                        p: 3,
                                                        color: "#fff",
                                                        boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            fontFamily: fontFamily,
                                                            fontWeight: weights.bold,
                                                            fontSize: 18,
                                                            mb: 1,
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        {section.title}
                                                    </Typography>

                                                    <Typography
                                                        sx={{
                                                            fontFamily: fontFamily,
                                                            fontSize: 13,
                                                            opacity: 0.9,
                                                            mb: 2,
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        {section.subtitle}
                                                    </Typography>

                                                    <Typography
                                                        sx={{
                                                            fontFamily: fontFamily,
                                                            fontSize: 12,
                                                            lineHeight: 1.6,
                                                            textAlign: "center",
                                                        }}
                                                        dangerouslySetInnerHTML={{ __html: section.description }}
                                                    />

                                                    <Stack
                                                        direction={{ xs: "row" }}
                                                        spacing={2}
                                                        sx={{
                                                            mt: 2,
                                                            alignSelf: "flex-start",
                                                        }}
                                                    >
                                                        <MotionButton
                                                            onClick={() =>
                                                                router.push(`/ourofferings/${section.offeringSlug}`)
                                                            }
                                                            whileHover={{
                                                                scale: 1.05,
                                                                y: -3,
                                                                transition: { type: "spring", stiffness: 300, damping: 20 }
                                                            }}
                                                            whileTap={{ scale: 0.95 }}
                                                            sx={{
                                                                width: { xs: "120px" },
                                                                height: { xs: "48px", sm: "44px", md: "48px" },
                                                                px: { xs: 2.5, sm: 1.5, md: 2.5 },
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                borderRadius: "12px",
                                                                fontSize: { xs: "13px", sm: "12px", md: "14px" },
                                                                fontFamily: fontFamily,
                                                                fontWeight: weights.semibold,
                                                                textTransform: "none",
                                                                cursor: "pointer",
                                                                whiteSpace: "nowrap",
                                                                background: "#fff",
                                                                color: section.buttonColor,
                                                                position: "relative",
                                                                transition: "all 0.3s ease",
                                                                border: "none",
                                                                "&::before": {
                                                                    content: '""',
                                                                    position: "absolute",
                                                                    inset: 0,
                                                                    borderRadius: "12px",
                                                                    padding: "2px",
                                                                    background:
                                                                        "linear-gradient(106deg, #FFFFFF 34%, rgba(255,255,255,0.1) 105%)",
                                                                    WebkitMask:
                                                                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                                    WebkitMaskComposite: "xor",
                                                                    maskComposite: "exclude",
                                                                    zIndex: -1,
                                                                    pointerEvents: "none",
                                                                },
                                                                "&:hover": {
                                                                    transform: "translateY(-2px)",
                                                                    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                                                                },
                                                            }}
                                                        >
                                                            Read More
                                                        </MotionButton>

                                                        <MotionButton
                                                            whileHover={{
                                                                scale: 1.05,
                                                                y: -3,
                                                                transition: { type: "spring", stiffness: 300, damping: 20 }
                                                            }}
                                                            whileTap={{ scale: 0.95 }}
                                                            sx={{
                                                                width: { xs: "120px" },
                                                                height: { xs: "48px", sm: "44px", md: "48px" },
                                                                px: { xs: 2.5, sm: 1.5, md: 2.5 },
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                borderRadius: "12px",
                                                                fontSize: { xs: "13px", sm: "12px", md: "14px" },
                                                                fontFamily: fontFamily,
                                                                fontWeight: weights.semibold,
                                                                textTransform: "none",
                                                                cursor: "pointer",
                                                                whiteSpace: "nowrap",
                                                                color: "#fff",
                                                                background: "rgba(255,255,255,0.15)",
                                                                backdropFilter: "blur(10px)",
                                                                WebkitBackdropFilter: "blur(10px)",
                                                                position: "relative",
                                                                transition: "all 0.3s ease",
                                                                border: "none",
                                                                "&::before": {
                                                                    content: '""',
                                                                    position: "absolute",
                                                                    inset: 0,
                                                                    borderRadius: "12px",
                                                                    padding: "2px",
                                                                    background:
                                                                        "linear-gradient(106deg, #FFFFFF 34%, rgba(255,255,255,0.1) 105%)",
                                                                    WebkitMask:
                                                                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                                    WebkitMaskComposite: "xor",
                                                                    maskComposite: "exclude",
                                                                    zIndex: -1,
                                                                    pointerEvents: "none",
                                                                },
                                                                "&:hover": {
                                                                    background: "rgba(255,255,255,0.25)",
                                                                    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                                                                },
                                                            }}
                                                        >
                                                            Events
                                                        </MotionButton>
                                                    </Stack>
                                                </MotionBox>
                                            </motion.div>
                                        </MotionBox>
                                    ))}
                                </MotionBox>

                                {/* DESKTOP LIST */}
                                <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: { sm: 6, md: 8, lg: 10 } }}>
                                    {sections.map((section, index) => {
                                        const isEven = index % 2 === 0;

                                        return (
                                            <MotionBox
                                                key={index}
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true, amount: 0.2 }}
                                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                                sx={{
                                                    position: "relative",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    flexDirection:
                                                        index % 2 === 0
                                                            ? { xs: "column", sm: "row" }
                                                            : { xs: "column-reverse", sm: "row-reverse" },
                                                    height: { xs: 500, sm: 450, md: 490, lg: 540 },
                                                }}
                                            >
                                                {/* IMAGE */}
                                                <motion.div
                                                    initial={{ opacity: 0, x: isEven ? -120 : 120 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true, amount: 0.2 }}
                                                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                                    style={{ width: "100%", height: "100%" }}
                                                >
                                                    <Box
                                                        sx={{
                                                            width: { xs: "100%", sm: "60%", md: "65%" },
                                                            height: "100%",
                                                            borderRadius: "20px",
                                                            overflow: "hidden",
                                                            ml: isEven ? 0 : { sm: "auto" },
                                                        }}
                                                    >
                                                        <Box
                                                            component="img"
                                                            src={`${section.thumbnailImage}`}
                                                            alt={section.title}
                                                            sx={{
                                                                width: "100%",
                                                                height: "100%",
                                                                objectFit: "cover",
                                                                transition: "transform 0.6s ease",
                                                                "&:hover": {
                                                                    transform: "scale(1.06)",
                                                                },
                                                            }}
                                                        />
                                                    </Box>
                                                </motion.div>

                                                {/* FLOATING CARD */}
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        x: 0,
                                                        scale: 0.9,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        x: isEven ? "130%" : "-130%",
                                                        scale: 1,
                                                    }}
                                                    viewport={{ once: true, amount: 0.2 }}
                                                    transition={{
                                                        duration: 0.9,
                                                        delay: 0.3,
                                                        ease: [0.22, 1, 0.36, 1],
                                                    }}
                                                    style={{
                                                        position: "absolute",
                                                        top: "10%",
                                                        transform: "translateY(-50%)",
                                                        left: isEven ? 0 : "auto",
                                                        right: isEven ? "auto" : 0,
                                                        zIndex: 2,
                                                    }}
                                                >
                                                    <MotionBox
                                                        whileHover={{
                                                            y: -8,
                                                            boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                                                            transition: { type: "spring", stiffness: 300, damping: 20 }
                                                        }}
                                                        sx={{
                                                            width: { xs: "90%", sm: 310, md: 420, lg: 580, xl: 692 },
                                                            height: { xs: 320, sm: 390, md: 400, lg: 440 },
                                                            borderRadius: "20px",
                                                            background: section.gradient,
                                                            p: 4,
                                                            color: "#fff",
                                                            boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            justifyContent: "space-between",
                                                            overflow: "hidden",
                                                        }}
                                                    >
                                                        {/* TOP CONTENT */}
                                                        <Box
                                                            sx={{
                                                                overflowY: "auto",
                                                                pr: 1,
                                                                flex: 1,
                                                                scrollbarWidth: "thin",
                                                                "&::-webkit-scrollbar": {
                                                                    width: "6px",
                                                                },
                                                                "&::-webkit-scrollbar-thumb": {
                                                                    background: "rgba(255,255,255,0.4)",
                                                                    borderRadius: "10px",
                                                                },
                                                            }}
                                                        >
                                                            <motion.div
                                                                initial={{ opacity: 0, y: 20 }}
                                                                whileInView={{ opacity: 1, y: 0 }}
                                                                viewport={{ once: true }}
                                                                transition={{ duration: 0.5, delay: 0.4 }}
                                                            >
                                                                <Typography
                                                                    sx={{
                                                                        fontFamily: fontFamily,
                                                                        fontWeight: weights.bold,
                                                                        fontSize: {
                                                                            xs: "20px",
                                                                            sm: "24px",
                                                                            md: "28px",
                                                                            lg: "32px",
                                                                        },
                                                                        lineHeight: 1.2,
                                                                        mb: 0.5,
                                                                    }}
                                                                >
                                                                    {section.title}
                                                                </Typography>
                                                            </motion.div>

                                                            <motion.div
                                                                initial={{ opacity: 0, y: 20 }}
                                                                whileInView={{ opacity: 1, y: 0 }}
                                                                viewport={{ once: true }}
                                                                transition={{ duration: 0.5, delay: 0.5 }}
                                                            >
                                                                <Typography
                                                                    sx={{
                                                                        fontFamily: fontFamily,
                                                                        fontWeight: weights.regular,
                                                                        fontSize: {
                                                                            xs: "13px",
                                                                            sm: "14px",
                                                                            md: "15px",
                                                                            lg: "16px",
                                                                        },
                                                                        lineHeight: "1.8",
                                                                        opacity: 0.9,
                                                                        mb: 1.5,
                                                                    }}
                                                                >
                                                                    {section.subtitle}
                                                                </Typography>
                                                            </motion.div>

                                                            <motion.div
                                                                initial={{ opacity: 0, y: 20 }}
                                                                whileInView={{ opacity: 1, y: 0 }}
                                                                viewport={{ once: true }}
                                                                transition={{ duration: 0.5, delay: 0.6 }}
                                                            >
                                                                <Typography
                                                                    sx={{
                                                                        fontFamily: fontFamily,
                                                                        fontWeight: weights.light,
                                                                        fontSize: {
                                                                            xs: "10px",
                                                                            sm: "14px",
                                                                            md: "16px",
                                                                            lg: "18px",
                                                                        },
                                                                        lineHeight: { sm: 1.3, md: 1.6 },
                                                                        opacity: 0.85,
                                                                    }}
                                                                    dangerouslySetInnerHTML={{ __html: section.description }}
                                                                />
                                                            </motion.div>
                                                        </Box>

                                                        {/* BUTTONS */}
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 20 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.5, delay: 0.7 }}
                                                        >
                                                            <Stack
                                                                direction={{ xs: "column", sm: "row" }}
                                                                spacing={2}
                                                                sx={{
                                                                    mt: 2,
                                                                    alignSelf: "flex-start",
                                                                }}
                                                            >
                                                                <MotionButton
                                                                    onClick={() =>
                                                                        router.push(`/ourofferings/${section.offeringSlug}`)
                                                                    }
                                                                    whileHover={{
                                                                        scale: 1.05,
                                                                        y: -3,
                                                                        transition: { type: "spring", stiffness: 300, damping: 20 }
                                                                    }}
                                                                    whileTap={{ scale: 0.95 }}
                                                                    sx={{
                                                                        width: { xs: "100%", sm: "120px", md: "160px" },
                                                                        height: { xs: "48px", sm: "44px", md: "48px" },
                                                                        px: { xs: 2.5, sm: 1.5, md: 2.5 },
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        justifyContent: "center",
                                                                        borderRadius: "12px",
                                                                        fontSize: { xs: "13px", sm: "12px", md: "14px" },
                                                                        fontFamily: fontFamily,
                                                                        fontWeight: weights.semibold,
                                                                        textTransform: "none",
                                                                        cursor: "pointer",
                                                                        whiteSpace: "nowrap",
                                                                        background: "#fff",
                                                                        color: section.buttonColor,
                                                                        position: "relative",
                                                                        transition: "all 0.3s ease",
                                                                        border: "none",
                                                                        "&::before": {
                                                                            content: '""',
                                                                            position: "absolute",
                                                                            inset: 0,
                                                                            borderRadius: "12px",
                                                                            padding: "2px",
                                                                            background:
                                                                                "linear-gradient(106deg, #FFFFFF 34%, rgba(255,255,255,0.1) 105%)",
                                                                            WebkitMask:
                                                                                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                                            WebkitMaskComposite: "xor",
                                                                            maskComposite: "exclude",
                                                                            zIndex: -1,
                                                                            pointerEvents: "none",
                                                                        },
                                                                        "&:hover": {
                                                                            transform: "translateY(-2px)",
                                                                            boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                                                                        },
                                                                    }}
                                                                >
                                                                    Read More
                                                                </MotionButton>

                                                                <MotionButton
                                                                    whileHover={{
                                                                        scale: 1.05,
                                                                        y: -3,
                                                                        transition: { type: "spring", stiffness: 300, damping: 20 }
                                                                    }}
                                                                    onClick={() =>
                                                                        router.push(`/events`)
                                                                    }
                                                                    whileTap={{ scale: 0.95 }}
                                                                    sx={{
                                                                        width: { xs: "100%", sm: "120px", md: "160px" },
                                                                        height: { xs: "48px", sm: "44px", md: "48px" },
                                                                        px: { xs: 2.5, sm: 1.5, md: 2.5 },
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        justifyContent: "center",
                                                                        borderRadius: "12px",
                                                                        fontSize: { xs: "13px", sm: "12px", md: "14px" },
                                                                        fontFamily: fontFamily,
                                                                        fontWeight: weights.semibold,
                                                                        textTransform: "none",
                                                                        cursor: "pointer",
                                                                        whiteSpace: "nowrap",
                                                                        color: "#fff",
                                                                        background: "rgba(255,255,255,0.15)",
                                                                        backdropFilter: "blur(10px)",
                                                                        WebkitBackdropFilter: "blur(10px)",
                                                                        position: "relative",
                                                                        transition: "all 0.3s ease",
                                                                        border: "none",
                                                                        "&::before": {
                                                                            content: '""',
                                                                            position: "absolute",
                                                                            inset: 0,
                                                                            borderRadius: "12px",
                                                                            padding: "2px",
                                                                            background:
                                                                                "linear-gradient(106deg, #FFFFFF 34%, rgba(255,255,255,0.1) 105%)",
                                                                            WebkitMask:
                                                                                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                                            WebkitMaskComposite: "xor",
                                                                            maskComposite: "exclude",
                                                                            zIndex: -1,
                                                                            pointerEvents: "none",
                                                                        },
                                                                        "&:hover": {
                                                                            background: "rgba(255,255,255,0.25)",
                                                                            boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                                                                        },
                                                                    }}
                                                                >
                                                                    Events
                                                                </MotionButton>
                                                            </Stack>
                                                        </motion.div>
                                                    </MotionBox>
                                                </motion.div>
                                            </MotionBox>
                                        );
                                    })}
                                </Box>
                            </MotionBox>
                        )}
                    </Box>
                </MotionBox>
            </SiteContainer>
        </Section>
    );
}