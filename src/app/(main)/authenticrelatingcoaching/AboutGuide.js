'use client';

import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

import Section from "@/app/_components/common/Section";
import SiteContainer from "@/app/_components/common/SiteContainer";
import Card from "@/app/_components/common/Card";

// Container variant for staggered children
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.25,
        },
    },
};

// Slide in from left for each child
const slideFromLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Slide in from right for each child
const slideFromRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutGuide() {
    const theme = useTheme();
    const styles = theme.custom.aboutGuide;

    return (
        <Section sx={styles.section}>
            <SiteContainer>
                {/* PROFILE + TEXT SECTION */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <Box sx={styles.profileContainer}>
                        {/* IMAGE */}
                        {/* IMAGE */}
                        <motion.div variants={slideFromLeft}>
                            <Box sx={styles.imageColumn}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                    }}
                                >
                                    <Box sx={styles.imageWrapper}>
                                        {/* DESKTOP / TABLET IMAGE */}
                                        <Box sx={styles.imageInner}>
                                            <Image
                                                src="/Amitabhabhatia.png"
                                                alt="Amitabha Bhatia"
                                                fill
                                                style={styles.image}
                                                sizes="(max-width: 900px) 180px, (max-width: 1200px) 220px, 300px"
                                            />
                                        </Box>

                                        {/* MOBILE IMAGE */}
                                        <Box sx={styles.imageInnerMobile}>
                                            <Image
                                                src="/Amitabhabhatia.png"
                                                alt="Amitabha Bhatia"
                                                fill
                                                style={styles.image}
                                                sizes="190px"
                                            />
                                        </Box>
                                    </Box>
                                </motion.div>
                            </Box>
                        </motion.div>

                        {/* RIGHT COLUMN */}
                        <motion.div variants={slideFromLeft} style={{ flex: 1 }}>
                            <Box sx={styles.textColumn}>
                                <Typography sx={styles.profileTitle}>
                                    About Your Guide
                                </Typography>

                                <Typography sx={styles.profileSubtitle}>
                                    <Box component="span" sx={styles.profileName}>
                                        Amitabha Bhatia
                                    </Box>
                                    <br />
                                    <Box component="span" sx={styles.profileRole}>
                                        Founder of The Authentic Relating
                                    </Box>
                                </Typography>

                                <Typography sx={styles.body}>
                                    Amitabha Bhatia is the founder of{" "}
                                    <Box component="span" sx={styles.bodyBold}>
                                        AuthenticRelating.com
                                    </Box>
                                    , creator of The Five Dimensions of Authentic Relating, and a
                                    transformational mentor who bridges inner mastery with outer
                                    impact.
                                </Typography>

                                <Typography sx={{ ...styles.body, mb: 0 }}>
                                    His work weaves together ancient wisdom, modern psychology,
                                    somatic intelligence, and the sacred art of human connection.
                                </Typography>

                                <Typography sx={{ ...styles.body, mb: 0 }}>
                                    This coaching is his soul's offering—and your soul's
                                    remembering.
                                </Typography>

                                <Typography sx={styles.body}>
                                    For his full suite of offerings, visit{" "}
                                    <Box component="span" sx={styles.bodyBold}>
                                        AuthenticRelating.com
                                    </Box>
                                </Typography>
                            </Box>
                        </motion.div>
                    </Box>
                </motion.div>


                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <Card sx={styles.ctaCard}>
                        <Grid
                            container
                            spacing={styles.ctaGrid.container.spacing}
                            alignItems="center"
                        >
                            {/* Left Column - Text (slides from LEFT) */}
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={6}
                                sx={{ display: "flex" }}
                            >
                                <motion.div
                                    variants={slideFromLeft}
                                    style={{ width: "100%" }}
                                >
                                    <Typography sx={styles.ctaTitle}>Answer the Call</Typography>
                                    <Typography sx={styles.ctaSubtitle}>
                                        You don't need another strategy.
                                    </Typography>
                                    <Typography sx={styles.ctaSubtitle}>
                                        You need resonance.
                                    </Typography>
                                    <Typography sx={{ ...styles.ctaSubtitle, mb: 0 }}>
                                        You need your own truth, reflected, embodied,
                                        <br />
                                        and activated.
                                    </Typography>
                                </motion.div>
                            </Grid>

                            {/* Right Column - Button Box (slides from RIGHT) */}
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={6}
                                sx={{ display: "flex", justifyContent: "center" }}
                            >
                                <motion.div
                                    variants={slideFromRight}
                                    style={{ width: "100%", display: "flex", justifyContent: "center" }}
                                >
                                    <Box sx={{
                                        ...styles.ctaBox,
                                        width: "100%",
                                        maxWidth: "600px",

                                        // 👇 GLASS EFFECT ADDED HERE
                                        background: "rgba(255, 255, 255, 0.15)", // Transparent white
                                        backdropFilter: "blur(138.4px)",         // The blur you requested
                                        WebkitBackdropFilter: "blur(138.4px)",   // Safari support
                                        boxShadow: "0px 4px 7.3px 1px #0000001A",// The shadow you requested
                                        border: "2px solid rgba(255, 255, 255, 0.7)", // Soft white border
                                        borderRadius: "16px",                    // Match the screenshot's rounded corners
                                        padding: "2rem 1.5rem",                  // Ensure padding is enough
                                    }}>
                                        <Typography sx={styles.ctaBoxTitle}>
                                            Start<br />Your Journey
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                ...styles.ctaButton,
                                                width: "100%",
                                                maxWidth: "556px",
                                                height: "60px",
                                                borderRadius: "10px",
                                                background: "linear-gradient(100.86deg, #32D7E3 0%, #0C959F 100%)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                gap: 1.5,
                                                mt: 3,
                                                "&::before": {
                                                    borderRadius: "10px",
                                                    background: "linear-gradient(106deg, #FFFFFF 34%, rgba(255,255,255,0.1) 105%)",
                                                }
                                            }}
                                        >
                                            Apply Now
                                        </Button>
                                    </Box>
                                </motion.div>
                            </Grid>
                        </Grid>
                    </Card>
                </motion.div>
            </SiteContainer>
        </Section>
    );
}