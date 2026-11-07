'use client';

import {
    Box,
    Typography,
    Card,
    TextField,
    Button,
    Stack,
    IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import SiteContainer from '../../_components/common/SiteContainer';
import Section from '../../_components/common/Section';
import { useTheme } from '@mui/material/styles';

// Create motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);
const MotionStack = motion(Stack);
const MotionContainer = motion(Box);

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const staggerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            delay: i * 0.1,
            ease: "easeOut"
        }
    })
};

const cardHoverVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
    hover: {
        y: -8,
        scale: 1.02,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};

/* =========================
   Reusable Styled Input
========================= */
const StyledInput = ({ placeholder, multiline = false, rows }) => {
    const theme = useTheme();
    return (
        <TextField
            fullWidth
            variant="outlined"
            multiline={multiline}
            rows={rows}
            placeholder={placeholder}
            inputProps={{ spellCheck: false }}
            InputProps={{
                sx: theme.custom?.globalCommunity?.input?.inputProps || {
                    color: '#fff',
                    borderRadius: 1.5,
                },
            }}
            sx={theme.custom?.globalCommunity?.input?.root || {
                mb: 2,
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'rgba(255,255,255,0.5)',
                    },
                    '&:hover fieldset': {
                        borderColor: '#fff',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#fff',
                        borderWidth: 1.5,
                    },
                },
            }}
        />
    );
};

/* =========================
   Reusable Styled IconButton with color
========================= */
const StyledIconButton = ({ children, href, color, index }) => {
    const theme = useTheme();
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
        >
            <IconButton
                component="a"
                href={href}
                target="_blank"
                sx={{
                    // Force the background to be blue, ignoring the theme
                    background: '#2196f3 !important',
                    color: '#fff',
                    width: { xs: 26, sm: 30, md: 34, lg: 40, xl: 44 },
                    height: { xs: 26, sm: 30, md: 34, lg: 40, xl: 44 },
                    border: '1px solid rgba(255,255,255,0.5)',
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        opacity: 0.85,
                        borderColor: '#fff',
                        background: '#2196f3 !important',
                    },
                }}
            >
                {children}
            </IconButton>
        </motion.div>
    );
};

export const Joinourglobalcommunity = () => {
    const theme = useTheme();
    const { custom } = theme;

    return (
        <Section sx={{ pt: { xs: 1, sm: 1, md: 1 }, pb: { xs: 4, sm: 5, md: 6 } }}>
            <SiteContainer sx={{ pt: 0, pb: 0 }}>
                <MotionBox
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                    sx={custom?.globalCommunity?.container || {
                        pt: { xs: 1, sm: 1, md: 1 },
                        pb: { xs: 4, sm: 5, md: 6 },
                    }}
                >
                    <MotionBox
                        variants={scaleInVariants}
                        whileInView="visible"
                        initial="hidden"
                        viewport={{ once: true }}
                        sx={custom?.globalCommunity?.mainCard || {
                            borderRadius: custom?.sectionCards?.card?.borderRadius || { xs: '20px', sm: '24px', md: '28px', lg: '32px', xl: '32px' },
                            p: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
                            background: 'linear-gradient(90deg, #FC796A 0%, #FAB284 100%)',
                            boxShadow: custom?.sectionCards?.card?.boxShadow || {
                                xs: '0 10px 20px rgba(0,0,0,0.1)',
                                sm: '0 15px 30px rgba(0,0,0,0.12)',
                                md: '0 20px 40px rgba(0,0,0,0.15)',
                                lg: '0 20px 40px rgba(0,0,0,0.15)',
                                xl: '0 20px 40px rgba(0,0,0,0.15)',
                            },
                        }}
                    >
                        {/* Header */}
                        <MotionTypography
                            variants={fadeInUpVariants}
                            whileInView="visible"
                            initial="hidden"
                            viewport={{ once: true }}
                            sx={custom?.globalCommunity?.subtitle || {
                                fontFamily: "var(--font-redhat)",
                                fontWeight: 500,
                                fontSize: {
                                    xs: "16px",
                                    sm: "20px",
                                },
                                lineHeight: 1.3,
                                letterSpacing: "0%",
                                color: "#fff",
                                opacity: 0.9,
                                textAlign: "center",
                            }}
                        >
                            Let's Stay Connected
                        </MotionTypography>

                        <MotionTypography
                            variants={fadeInUpVariants}
                            whileInView="visible"
                            initial="hidden"
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            sx={custom?.globalCommunity?.title || {
                                fontFamily: "var(--font-redhat)",
                                fontWeight: 700,
                                fontSize: {
                                    xs: "22px",
                                    sm: "28px",
                                    md: "32px",
                                },
                                lineHeight: 1.3,
                                color: "#fff",
                                mt: { xs: 0.5, sm: 0.75, md: 1 },
                                mb: { xs: 3, sm: 3.5, md: 4, lg: 4.5, xl: 5 },
                                maxWidth: { xs: "100%", sm: 600, md: 700, lg: 800, xl: 900 },
                                mx: "auto",
                                textAlign: "center",
                            }}
                        >
                            Join our global community of people committed to presence, truth, and human connection.
                        </MotionTypography>

                        {/* Cards */}
                        <MotionStack
                            component={motion.div}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={custom?.globalCommunity?.cards?.spacing || { xs: 2, sm: 2, md: 2, lg: 2.5, xl: 3 }}
                            sx={{
                                alignItems: 'stretch',
                                minHeight: { xs: 'auto', sm: '240px', md: '260px', lg: '270px', xl: '280px' },
                            }}
                        >
                            {/* Newsletter */}
                            <MotionCard
                                custom={0}
                                variants={cardHoverVariants}
                                whileHover="hover"
                                sx={custom?.globalCommunity?.cards?.newsletter || {
                                    flex: 1,
                                    height: '100%',
                                    justifyContent: 'space-between',
                                    p: { xs: 2, sm: 1.5, md: 2, lg: 2, xl: 2.5 },
                                    borderRadius: { xs: "16px", sm: "14px", md: "16px", lg: "16px", xl: "18px" },
                                    position: "relative",
                                    overflow: "hidden",
                                    background: "rgba(255,255,255,0.22)",
                                    backdropFilter: "blur(138.4px)",
                                    WebkitBackdropFilter: "blur(138.4px)",
                                    border: "none",
                                    '&::before': {
                                        content: '""',
                                        position: "absolute",
                                        inset: 0,
                                        borderRadius: "inherit",
                                        padding: "2px",
                                        background: "linear-gradient(106.27deg, #FFFFFF 33.98%, rgba(255,255,255,0.1) 105.14%)",
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                        pointerEvents: "none",
                                    },
                                    boxShadow: "0px 4px 7.3px 1px rgba(0,0,0,0.1)",
                                    color: "#fff",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                <MotionTypography
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                    sx={custom?.globalCommunity?.cards?.newsletterTitle || {
                                        fontFamily: "var(--font-redhat)",
                                        fontWeight: 600,
                                        fontSize: {
                                            xs: "15px",
                                            sm: "14px",
                                            md: "16px",
                                            lg: "16px",
                                            xl: "18px",
                                        },
                                        lineHeight: 1.2,
                                        textAlign: "center",
                                    }}
                                    mb={{ xs: 2, sm: 1.5, md: 1.5, lg: 1.5 }}
                                >
                                    Subscribe to our Newsletter
                                </MotionTypography>

                                <StyledInput placeholder="Your Email Address" />

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{ width: '100%', marginTop: 'auto' }}
                                >
                                    <Button
                                        component="a"
                                        href="#"
                                        target="_blank"
                                        variant="contained"
                                        sx={custom?.globalCommunity?.cards?.subscribeButton || {
                                            borderRadius: 1.5,
                                            textTransform: "none",
                                            position: "relative",
                                            overflow: "hidden",
                                            border: "none",
                                            background: custom?.defaultButton?.background || '#2196f3',
                                            color: "#fff",
                                            px: { xs: 3, sm: 2, md: 2, lg: 2.5, xl: 3 },
                                            py: { xs: 1, sm: 0.75, md: 0.75, lg: 0.85, xl: 0.9 },
                                            fontFamily: "var(--font-redhat)",
                                            fontWeight: 600,
                                            fontSize: {
                                                xs: "13px",
                                                sm: "12px",
                                                md: "12px",
                                                lg: "13px",
                                                xl: "14px",
                                            },
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "80%",
                                                lg: "75%",
                                                xl: "70%",
                                            },
                                            mx: "auto",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transition: "all 0.3s ease",
                                            '&:hover': {
                                                transform: "translateY(-2px)",
                                            },
                                        }}
                                    >
                                        Subscribe Now
                                    </Button>
                                </motion.div>
                            </MotionCard>

                            {/* Follow Us */}
                            <MotionCard
                                custom={1}
                                variants={cardHoverVariants}
                                whileHover="hover"
                                sx={custom?.globalCommunity?.cards?.followUs || {
                                    flex: 1,
                                    height: '100%',
                                    justifyContent: 'space-between',
                                    p: { xs: 2, sm: 1.5, md: 2, lg: 2, xl: 2.5 },
                                    borderRadius: { xs: "16px", sm: "14px", md: "16px", lg: "16px", xl: "18px" },
                                    position: "relative",
                                    overflow: "hidden",
                                    background: "rgba(255,255,255,0.22)",
                                    backdropFilter: "blur(138.4px)",
                                    WebkitBackdropFilter: "blur(138.4px)",
                                    border: "none",
                                    '&::before': {
                                        content: '""',
                                        position: "absolute",
                                        inset: 0,
                                        borderRadius: "inherit",
                                        padding: "2px",
                                        background: "linear-gradient(106.27deg, #FFFFFF 33.98%, rgba(255,255,255,0.1) 105.14%)",
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                        pointerEvents: "none",
                                    },
                                    boxShadow: "0px 4px 7.3px 1px rgba(0,0,0,0.1)",
                                    color: "#fff",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                <MotionTypography
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                    sx={custom?.globalCommunity?.cards?.followUsTitle || {
                                        fontFamily: "var(--font-redhat)",
                                        fontWeight: 600,
                                        fontSize: {
                                            xs: "15px",
                                            sm: "14px",
                                            md: "16px",
                                            lg: "16px",
                                            xl: "18px",
                                        },
                                        lineHeight: 1.2,
                                        textAlign: "center",
                                    }}
                                    mb={{ xs: 2, sm: 1.5, md: 1.5, lg: 1.5 }}
                                >
                                    Follow us
                                </MotionTypography>

                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    spacing={custom?.globalCommunity?.cards?.socialSpacing || { xs: 1, sm: 1, md: 1.5, lg: 1.5, xl: 2 }}
                                    sx={{ mt: 'auto', mb: 'auto' }}
                                >
                                    {[
                                        { image: "/svg/contactus/podcast1.svg", color: "#3096E1", href: "https://instagram.com" },
                                        { image: "/svg/contactus/podcast2.svg", color: "#3096E1", href: "https://facebook.com" },
                                        { image: "/svg/contactus/podcast3.svg", color: "#3096E1", href: "https://linkedin.com" },
                                        { image: "/svg/contactus/podcast4.svg", color: "#3096E1", href: "https://youtube.com" },
                                    ].map((social, index) => (
                                        <StyledIconButton
                                            key={index}
                                            href={social.href}
                                            color={social.color}
                                            index={index}
                                        >
                                            <Box
                                                component="img"
                                                src={social.image}
                                                alt="social-icon"
                                                sx={
                                                    custom?.globalCommunity?.cards?.socialIcon || {
                                                        // Reduced icon sizes
                                                        width: { xs: 12, sm: 12, md: 14, lg: 14, xl: 16 },
                                                        height: { xs: 12, sm: 12, md: 14, lg: 14, xl: 16 },
                                                        objectFit: "contain",
                                                    }
                                                }
                                            />
                                        </StyledIconButton>
                                    ))}
                                </Stack>
                            </MotionCard>

                            {/* Podcast */}
                            <MotionCard
                                custom={2}
                                variants={cardHoverVariants}
                                whileHover="hover"
                                sx={custom?.globalCommunity?.cards?.podcast || {
                                    flex: 1,
                                    height: '100%',
                                    p: { xs: 2, sm: 1.5, md: 2, lg: 2, xl: 2.5 },
                                    borderRadius: { xs: "16px", sm: "14px", md: "16px", lg: "16px", xl: "18px" },
                                    position: "relative",
                                    overflow: "hidden",
                                    background: "rgba(255,255,255,0.22)",
                                    backdropFilter: "blur(138.4px)",
                                    WebkitBackdropFilter: "blur(138.4px)",
                                    border: "none",
                                    '&::before': {
                                        content: '""',
                                        position: "absolute",
                                        inset: 0,
                                        borderRadius: "inherit",
                                        padding: "2px",
                                        background: "linear-gradient(106.27deg, #FFFFFF 33.98%, rgba(255,255,255,0.1) 105.14%)",
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                        pointerEvents: "none",
                                    },
                                    boxShadow: "0px 4px 7.3px 1px rgba(0,0,0,0.1)",
                                    color: "#fff",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    textAlign: "center",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                <MotionTypography
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                    sx={custom?.globalCommunity?.cards?.podcastTitle || {
                                        fontFamily: "var(--font-redhat)",
                                        fontWeight: 600,
                                        fontSize: {
                                            xs: "15px",
                                            sm: "14px",
                                            md: "16px",
                                            lg: "16px",
                                            xl: "18px",
                                        },
                                        lineHeight: 1.2,
                                        textAlign: "center",
                                    }}
                                    mb={{ xs: 2, sm: 1.5, md: 1.5, lg: 1.5 }}
                                >
                                    Listen to our Podcast
                                </MotionTypography>

                                <MotionStack
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={containerVariants}
                                    direction="row"
                                    justifyContent="center"
                                    spacing={custom?.globalCommunity?.cards?.podcastIconSpacing || { xs: 0.5, sm: 0.5, md: 1, lg: 1, xl: 1 }}
                                    mb={{ xs: 2, sm: 2, md: 2, lg: 2 }}
                                >
                                    {['/svg/contactus/podcast11.svg', '/svg/contactus/podcast21.svg', '/svg/contactus/podcast31.svg', '/svg/contactus/podcast41.svg'].map((src, idx) => (
                                        <MotionBox
                                            key={idx}
                                            custom={idx}
                                            variants={staggerItemVariants}
                                            component="img"
                                            src={src}
                                            alt={`Podcast ${idx + 1}`}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            sx={custom?.globalCommunity?.cards?.podcastIcon || {
                                                // Reduced podcast icon heights significantly
                                                height: { xs: 16, sm: 16, md: 20, lg: 22, xl: 24 },
                                                width: 'auto',
                                                cursor: 'pointer',
                                                '&:hover': { opacity: 0.8 }
                                            }}
                                        />
                                    ))}
                                </MotionStack>

                                <MotionStack
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={containerVariants}
                                    direction={{ xs: 'column', sm: 'column', md: 'row' }}
                                    justifyContent="center"
                                    spacing={custom?.globalCommunity?.cards?.podcastButtonStackSpacing || 1.5}
                                    sx={{ mt: 'auto', width: '100%' }}
                                >
                                    <MotionStack
                                        variants={containerVariants}
                                        direction={{ xs: 'column', sm: 'column', md: 'row' }}
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={custom?.globalCommunity?.cards?.podcastButtonSpacing || {
                                            xs: 1,
                                            sm: 0.75,
                                            md: 1.5,
                                            lg: 1.5,
                                            xl: 2
                                        }}
                                        sx={{ width: '100%' }}
                                    >
                                        <motion.div
                                            variants={staggerItemVariants}
                                            custom={0}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            style={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center' }}
                                        >
                                            <Button
                                                variant="contained"
                                                sx={custom?.globalCommunity?.cards?.podcastButton || {
                                                    borderRadius: { xs: "8px", sm: "8px", md: "8px", lg: "8px", xl: "10px" },
                                                    textTransform: "none",
                                                    position: "relative",
                                                    overflow: "hidden",
                                                    border: "none",
                                                    background: custom?.defaultButton?.background || '#2196f3',
                                                    color: "#fff",
                                                    // Reduced button padding and font size
                                                    px: { xs: 1.5, sm: 1.5, md: 1.5, lg: 1.5, xl: 2 },
                                                    py: { xs: 0.75, sm: 0.6, md: 0.6, lg: 0.7, xl: 0.75 },
                                                    fontSize: {
                                                        xs: "12px",
                                                        sm: "11px",
                                                        md: "11px",
                                                        lg: "12px",
                                                        xl: "13px",
                                                    },
                                                    width: { xs: "100%", sm: "100%", md: "100%", lg: "auto", xl: "auto" },
                                                    maxWidth: "100%",
                                                    backdropFilter: "blur(80px)",
                                                    WebkitBackdropFilter: "blur(80px)",
                                                    transition: "all 0.3s ease",
                                                    '&:hover': { transform: "translateY(-2px)" },
                                                }}
                                                href="https://linkedin.com"
                                                target="_blank"
                                            >
                                                LinkedIn Page
                                            </Button>
                                        </motion.div>

                                        <motion.div
                                            variants={staggerItemVariants}
                                            custom={1}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            style={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center' }}
                                        >
                                            <Button
                                                variant="contained"
                                                sx={custom?.globalCommunity?.cards?.podcastButton || {
                                                    borderRadius: { xs: "8px", sm: "8px", md: "8px", lg: "8px", xl: "10px" },
                                                    textTransform: "none",
                                                    position: "relative",
                                                    overflow: "hidden",
                                                    border: "none",
                                                    background: custom?.defaultButton?.background || '#2196f3',
                                                    color: "#fff",
                                                    // Reduced button padding and font size
                                                    px: { xs: 1.5, sm: 1.5, md: 1.5, lg: 1.5, xl: 2 },
                                                    py: { xs: 0.75, sm: 0.6, md: 0.6, lg: 0.7, xl: 0.75 },
                                                    fontSize: {
                                                        xs: "12px",
                                                        sm: "11px",
                                                        md: "11px",
                                                        lg: "12px",
                                                        xl: "13px",
                                                    },
                                                    width: { xs: "100%", sm: "100%", md: "100%", lg: "auto", xl: "auto" },
                                                    maxWidth: "100%",
                                                    backdropFilter: "blur(80px)",
                                                    WebkitBackdropFilter: "blur(80px)",
                                                    transition: "all 0.3s ease",
                                                    '&:hover': { transform: "translateY(-2px)" },
                                                }}
                                                href="https://youtube.com"
                                                target="_blank"
                                            >
                                                YouTube Page
                                            </Button>
                                        </motion.div>
                                    </MotionStack>
                                </MotionStack>
                            </MotionCard>
                        </MotionStack>
                    </MotionBox>
                </MotionBox>
            </SiteContainer>
        </Section>
    );
};

export default Joinourglobalcommunity;