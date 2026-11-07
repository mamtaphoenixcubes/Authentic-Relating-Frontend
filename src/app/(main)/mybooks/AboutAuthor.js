'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Section from '../../_components/common/Section';
import SiteContainer from '../../_components/common/SiteContainer';
import colors from '../../../theme/colors';

export default function AboutAuthor() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
        >
            {/* 👇 1. Reduced outer Section padding (was py: 6) */}
            <Section sx={{ py: { xs: 2, sm: 2, md: 1 } }}>
                <SiteContainer sx={{ maxWidth: { xs: '100%', md: '1200px', lg: '1360px', xl: '1640px' } }}>
                    <Box
                        sx={{
                            background: colors.authenticGradient,
                            borderRadius: '28px',
                            px: { xs: 3, md: 7 },
                            // 👇 2. Reduced inner Card padding (was py: { xs: 4, md: 6 })
                            py: { xs: 3, md: 4 },
                        }}
                    >
                        {/* HEADING */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: '"Red Hat Display", sans-serif',
                                    fontSize: {
                                        xs: "22px",
                                        sm: "24px",
                                        md: "32px",
                                        lg: "38px",
                                        xl: "42px",
                                    },
                                    lineHeight: {
                                        xs: 1.1,
                                        sm: 1.15,
                                        md: 1.2,
                                        lg: 1.2,
                                        xl: 1.2,
                                    },
                                    letterSpacing: "0%",
                                    color: colors.authenticText,
                                    // 👇 3. Reduced heading bottom margin (was mb: { xs: 3, md: 5 })
                                    mb: { xs: 2, md: 3 },
                                    maxWidth: {
                                        xs: "100%",
                                        sm: "85%",
                                        md: "75%",
                                        lg: "70%",
                                        xl: "850px",
                                    },
                                    textAlign: { xs: "center", sm: "left" },
                                    mx: { xs: "auto", sm: 0 },
                                    ml: { xs: 0, sm: 0, md: -4, lg: -1, xl: 1 }, 
                                }}
                            >
                                <Box component="span" sx={{ fontWeight: 700 }}>
                                    About Author:
                                </Box>{" "}
                                <Box component="span" sx={{ fontWeight: 400 }}>
                                    Suspendisse quis nulla ante. Vivamus vehicula at mi a feugiat.
                                    Pellentesque ultricies, libero ut.
                                </Box>
                            </Typography>
                        </motion.div>

                        <Box sx={{ maxWidth: 1400, mx: "auto", width: "100%" }}>
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: {
                                        xs: "1fr",
                                        sm: "1fr 1fr 1fr",
                                        md: "0.8fr 1.2fr 1fr", 
                                        lg: "0.8fr 1.2fr 1fr",
                                        xl: "0.8fr 1.2fr 1fr",
                                    },
                                    minHeight: 340,
                                    gap: { xs: 2, sm: 2.5, md: 4, lg: 4 },
                                }}
                            >
                                {/* LEFT TEXT */}
                                <Box sx={{
                                    alignSelf: { xs: 'center', sm: 'flex-start' },
                                    pt: { xs: 0, sm: 1, md: 2 },
                                    maxWidth: "100%",
                                    textAlign: { xs: 'center', sm: 'left' },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: { xs: 'center', sm: 'flex-start' },
                                    ml: { xs: 0, sm: 0, md: -4, lg: -1, xl: -3 },
                                }}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.1 }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: '"Red Hat Display", sans-serif',
                                                fontWeight: 700,
                                                fontSize: {
                                                    xs: "13px",
                                                    sm: "13px",
                                                    md: "15px", 
                                                    lg: "16px",
                                                    xl: "18px",
                                                },
                                                lineHeight: "150%",
                                                color: colors.authenticText,
                                                maxWidth: {
                                                    xs: "100%",
                                                    sm: 250, 
                                                    md: 280,
                                                    lg: 320,
                                                    xl: 350,
                                                },
                                            }}
                                        >
                                            Our journey began with a vision to create a safe and inclusive
                                            online space where individuals can find the help they need to
                                            improve their mental well-being.
                                        </Typography>
                                    </motion.div>
                                </Box>

                                {/* CENTER IMAGE */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        order: { xs: 1, sm: 2 },
                                    }}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                    >
                                        <Box
                                            sx={{
                                                width: { xs: 200, sm: 250, md: 280, lg: 300, xl: 340 },
                                                height: { xs: 200, sm: 250, md: 280, lg: 300, xl: 340 },
                                                background: "#FFE6A6",
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mb: { xs: 1.5, sm: 2, md: 2, lg: 2, xl: 3 },
                                                mt: { xs: 0, sm: 2 },
                                                position: 'relative',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            {/* IMAGE CONTAINER for sm and above */}
                                            <Box
                                                sx={{
                                                    position: "relative",
                                                    width: "95%",
                                                    height: "90%",
                                                    borderRadius: "50%",
                                                    overflow: "hidden",
                                                    marginTop: { xs: '13px', sm: '18px', md: '25px', lg: '25px', xl: '38.8px' },
                                                    display: { xs: 'none', sm: 'block' }
                                                }}
                                            >
                                                <Image
                                                    src="/Amitabhabhatia.png"
                                                    alt="Amitabha Bhatia"
                                                    fill
                                                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                                                    sizes="(max-width: 600px) 180px, (max-width: 900px) 250px, (max-width: 1200px) 320px, 300px"
                                                />
                                            </Box>

                                            {/* PHONE VERSION */}
                                            <Box
                                                sx={{
                                                    position: "relative",
                                                    width: "100%",
                                                    height: "100%",
                                                    display: { xs: 'block', sm: 'none' },
                                                    overflow: "hidden",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        position: "absolute",
                                                        height: "144%",
                                                        width: "102%",
                                                        left: 0,
                                                        top: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                    }}
                                                >
                                                    <Image
                                                        src="/Amitabhabhatia.png"
                                                        alt="Amitabha Bhatia"
                                                        fill
                                                        style={{ objectFit: 'contain', objectPosition: 'center' }}
                                                        sizes="180px"
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </motion.div>
                                </Box>

                                {/* RIGHT BOTTOM TEXT */}
                                <Box
                                    sx={{
                                        alignSelf: { xs: 'center', sm: 'flex-end' }, 
                                        pb: { xs: 0, sm: 1, md: 2 }, 
                                        textAlign: { xs: 'center', sm: 'left' },
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: { xs: 'center', sm: 'flex-start' },
                                        order: { xs: 2, sm: 3 },
                                    }}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.3 }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: '"Red Hat Display", sans-serif',
                                                fontWeight: 400,
                                                color: colors.authenticText,
                                                fontSize: {
                                                    xs: "14px",
                                                    sm: "14px",
                                                    md: "16px", 
                                                    lg: "18px",
                                                    xl: "28px",
                                                },
                                                lineHeight: 1.5,
                                                maxWidth: {
                                                    xs: "100%",
                                                    sm: 220, 
                                                    md: 250,
                                                    lg: 280,
                                                    xl: 700,
                                                },
                                                mb: 2,
                                            }}
                                        >
                                            Taking care of your mental health is an act of self-love and strength.
                                        </Typography>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.4 }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: '"Red Hat Display", sans-serif',
                                                fontWeight: 700,
                                                fontSize: {
                                                    xs: "14px",
                                                    sm: "15px",
                                                    md: "16px",
                                                    lg: "18px",
                                                    xl: "18px",
                                                },
                                                lineHeight: 1.2,
                                                color: colors.authenticText,
                                                mb: 0.5,
                                            }}
                                        >
                                            Amitabha Bhatia
                                        </Typography>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.5 }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: '"Red Hat Display", sans-serif',
                                                fontWeight: 500,
                                                fontSize: {
                                                    xs: "11px",
                                                    sm: "11px",
                                                    md: "12px",
                                                    lg: "13px",
                                                    xl: "14px",
                                                },
                                                lineHeight: "150%",
                                                color: colors.authenticText,
                                                opacity: 0.9,
                                            }}
                                        >
                                            Founder of Authenticrelating.com
                                        </Typography>
                                    </motion.div>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </SiteContainer>
            </Section>
        </motion.div>
    );
}