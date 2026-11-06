'use client';

import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

import Section from "@/app/_components/common/Section";
import SiteContainer from "@/app/_components/common/SiteContainer";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function WaysWeWork() {
    const theme = useTheme();
    const styles = theme.custom.waysWeWork;

    const cards = [
        {
            title: "1:1 Deep Dive Coaching",
            desc: "Unpack your truth. Anchor into your path. Rewrite the narrative.",
            image: "/Deep.png",
        },
        {
            title: "Authentic Leadership Mentoring",
            desc: "Lead without posturing. Embody the kind of presence that transforms rooms.",
            image: "/Authentic.png",
        },
        {
            title: "Somatic & Energy Work Integration",
            desc: "Somatic & Energy Work Integration",
            image: "/Somatic.png",
        },
    ];

    return (
        <Section sx={styles.section}>
            <SiteContainer>
                <Box sx={{ textAlign: "center" }}>
                    {/* Title and Subtitle */}
                    <MotionBox sx={styles.header}>
                        <MotionTypography
                            sx={styles.title}
                            {...styles.motion.title}
                        >
                            Ways We Can Work Together
                        </MotionTypography>

                        <MotionTypography
                            sx={styles.subtitle}
                            {...styles.motion.subtitle}
                        >
                            If you're ready to stop pretending—and start living—this work is your next step.
                        </MotionTypography>
                    </MotionBox>

                    {/* Cards */}
                    <Grid
                        container
                        spacing={styles.grid.container.spacing}
                        justifyContent="center"
                        alignItems="stretch"
                    >
                        {cards.map((card, index) => {
                            const gradient = styles.cardGradients[index];
                            return (
                                <Grid
                                    item
                                    xs={styles.grid.item.xs}
                                    sm={styles.grid.item.sm}
                                    md={styles.grid.item.md}
                                    key={index}
                                    sx={{ display: "flex", justifyContent: "center" }}
                                >
                                    <MotionBox
                                        sx={{
                                            ...styles.card,
                                            background: gradient.bg,
                                            border: "2px solid #FFFFFF", // 👈 White border
                                            boxShadow: "0px 4px 7.3px 1px #0000001A", // 👈 Shadow added here
                                        }}
                                        {...styles.motion.card}
                                        transition={styles.motion.card.transition(index)}
                                    >
                                        {/* Icon */}
                                        <Box
                                            sx={{
                                                ...styles.iconWrapper,
                                                background: gradient.darkBg,
                                            }}
                                        >
                                            <img
                                                src={card.image}
                                                alt={card.title}
                                                style={styles.iconImage}
                                            />
                                        </Box>

                                        <Typography sx={styles.cardTitle}>
                                            {card.title}
                                        </Typography>
                                        <Typography sx={styles.cardDescription}>
                                            {card.desc}
                                        </Typography>
                                    </MotionBox>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </SiteContainer>
        </Section>
    );
}