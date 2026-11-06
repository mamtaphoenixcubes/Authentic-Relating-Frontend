'use client';

import { Box, Typography, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';

import Section from '../../_components/common/Section';
import SiteContainer from '../../_components/common/SiteContainer';
import EventButton from '../../_components/buttons/EventButton';

import theme from '../../../theme/theme';

// All values now resolved from theme files
const rc = theme.custom?.realConnection || {};
const bulletTexts = [
    'Donec imperdiet ante sit amet nibh laoreet, et efficitur tortor ullamcorper.',
    'Aliquam eget augue turpis. Maecenas egestas efficitur imperdiet.',
    'Fusce iaculis ante vel dolor condimentum lobortis at et velit.',
];

export default function RealConnectionSection({ onViewEvents }) {
    return (
        <Section sx={rc.section}>
            <SiteContainer>
                <Box sx={rc.section}>
                    <Box sx={rc.container}>
                        {/* LEFT IMAGE */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            <Box sx={rc.imageWrapper}>
                                <Box sx={rc.imageInner}>
                                    <Box
                                        component="img"
                                        src="/events/realcon.png"
                                        alt="Events"
                                        sx={rc.image}
                                    />
                                </Box>
                            </Box>
                        </motion.div>

                        {/* RIGHT CONTENT */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            <Box sx={rc.content}>
                                {/* HEADING */}
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    <Typography sx={rc.heading}>
                                        Real connection.
                                        <br />
                                        Real time.
                                    </Typography>
                                </motion.div>

                                {/* DESCRIPTION */}
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <Typography sx={rc.description}>
                                        Join us in person or online for transformational workshops,
                                        immersive retreats, and deep dive experiences where Authentic
                                        Relating comes to life — one conversation at a time.
                                    </Typography>
                                </motion.div>

                                {/* BULLETS */}
                                <Stack
                                    spacing={rc.bulletStack.spacing}
                                    mb={rc.bulletStack.mb}
                                    sx={rc.bulletStack.sx}
                                >
                                    {bulletTexts.map((text, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 15 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                                            style={{ width: '100%' }}
                                        >
                                            <Stack
                                                direction={rc.bulletRow.direction}
                                                spacing={rc.bulletRow.spacing}
                                                sx={rc.bulletRow.sx}
                                                alignItems={rc.bulletRow.alignItems}
                                            >
                                                <CheckCircleIcon sx={rc.bulletIcon} />
                                                <Typography sx={rc.bulletText}>{text}</Typography>
                                            </Stack>
                                        </motion.div>
                                    ))}
                                </Stack>

                                {/* BUTTON */}
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    <EventButton onClick={onViewEvents} sx={rc.button}>
                                        View all Events
                                    </EventButton>
                                </motion.div>
                            </Box>
                        </motion.div>
                    </Box>
                </Box>
            </SiteContainer>
        </Section>
    );
}