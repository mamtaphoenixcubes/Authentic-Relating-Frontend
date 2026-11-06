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
                sx={theme.custom?.globalCommunity?.iconButton || {
                    background: color,
                    color: '#fff',
                    width: { xs: 36, sm: 40, md: 42, lg: 44 },
                    height: { xs: 36, sm: 40, md: 42, lg: 44 },
                    border: '1px solid rgba(255,255,255,0.5)',
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        opacity: 0.85,
                        borderColor: '#fff',
                        background: color,
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
        <Section>
            <SiteContainer>
                <MotionBox
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                    sx={custom?.globalCommunity?.container || {
                        py: { xs: 4, sm: 5, md: 6 }
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
                            spacing={custom?.globalCommunity?.cards?.spacing || { xs: 2, sm: 2, md: 2.5, lg: 3, xl: 3 }}
                        >
                            {/* Newsletter */}
                            <MotionCard
                                custom={0}
                                variants={cardHoverVariants}
                                whileHover="hover"
                                sx={custom?.globalCommunity?.cards?.newsletter || {
                                    flex: 1,
                                    p: { xs: 2, sm: 2, md: 2.5, lg: 3, xl: 3 },
                                    borderRadius: { xs: "16px", sm: "18px", md: "20px" },
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
                                            xs: "16px",
                                            sm: "18px",
                                            md: "20px",
                                            lg: "21px",
                                        },
                                        lineHeight: 1.2,
                                        textAlign: "center",
                                    }}
                                    mb={2}
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
                                    style={{ width: '100%' }}
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
                                            px: { xs: 3, sm: 3.5, md: 4 },
                                            py: { xs: 1, sm: 1.1, md: 1.2 },
                                            fontFamily: "var(--font-redhat)",
                                            fontWeight: 600,
                                            fontSize: {
                                                xs: "13px",
                                                sm: "14px",
                                                md: "15px",
                                                lg: "16px",
                                            },
                                            width: {
                                                xs: "100%",
                                                sm: "80%",
                                                md: "60%",
                                                lg: "50%",
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
                                    p: { xs: 2, sm: 2, md: 2.5, lg: 3, xl: 3 },
                                    borderRadius: { xs: "16px", sm: "18px", md: "20px" },
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
                                            xs: "16px",
                                            sm: "18px",
                                            md: "20px",
                                            lg: "21px",
                                        },
                                        lineHeight: 1.2,
                                        textAlign: "center",
                                    }}
                                    mb={2}
                                >
                                    Follow us
                                </MotionTypography>

                                <Stack 
                                    direction="row" 
                                    justifyContent="center" 
                                    spacing={custom?.globalCommunity?.cards?.socialSpacing || 2}
                                >
                                    {[
                                        {
                                            image: "/svg/contactus/podcast1.svg",
                                            color: "#3096E1",
                                            href: "https://instagram.com",
                                        },
                                        {
                                            image: "/svg/contactus/podcast2.svg",
                                            color: "#3096E1",
                                            href: "https://facebook.com",
                                        },
                                        {
                                            image: "/svg/contactus/podcast3.svg",
                                            color: "#3096E1",
                                            href: "https://linkedin.com",
                                        },
                                        {
                                            image: "/svg/contactus/podcast4.svg",
                                            color: "#3096E1",
                                            href: "https://youtube.com",
                                        },
                                    ].map((social, index) => (
                                        <StyledIconButton
                                            key={index}
                                            href={social.href}
                                            color={social.color}
                                            index={index}
                                        >
                                            <img
                                                src={social.image}
                                                alt="social-icon"
                                                style={custom?.globalCommunity?.cards?.socialIcon || {
                                                    width: "20px",
                                                    height: "20px",
                                                    objectFit: "contain",
                                                }}
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
                                    p: { xs: 2, sm: 2, md: 2.5, lg: 3, xl: 3 },
                                    borderRadius: { xs: "16px", sm: "18px", md: "20px" },
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
                                            xs: "16px",
                                            sm: "18px",
                                            md: "20px",
                                            lg: "21px",
                                        },
                                        lineHeight: 1.2,
                                        textAlign: "center",
                                    }}
                                    mb={2}
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
                                    spacing={custom?.globalCommunity?.cards?.podcastIconSpacing || 1}
                                    mb={3}
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
                                                height: 34, 
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
                                    direction={{ xs: 'column', sm: 'row' }}
                                    justifyContent="center"
                                    spacing={custom?.globalCommunity?.cards?.podcastButtonStackSpacing || 2}
                                >
                                    <MotionStack
                                        variants={containerVariants}
                                        direction={{
                                            xs: 'column',
                                            sm: 'row'
                                        }}
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={custom?.globalCommunity?.cards?.podcastButtonSpacing || {
                                            xs: 1,
                                            sm: 1,
                                            md: 2,
                                            lg: 2,
                                            xl: 2
                                        }}
                                    >
                                        <motion.div
                                            variants={staggerItemVariants}
                                            custom={0}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Button
                                                variant="contained"
                                                sx={custom?.globalCommunity?.cards?.podcastButton || {
                                                    borderRadius: {
                                                        xs: "8px",
                                                        sm: "10px",
                                                        md: "12px",
                                                    },
                                                    textTransform: "none",
                                                    position: "relative",
                                                    overflow: "hidden",
                                                    border: "none",
                                                    background: custom?.defaultButton?.background || '#2196f3',
                                                    color: "#fff",
                                                    px: {
                                                        xs: 1.5,
                                                        sm: 2,
                                                    },
                                                    py: {
                                                        xs: 0.75,
                                                        sm: 0.85,
                                                        md: 1,
                                                    },
                                                    fontSize: {
                                                        xs: "0.75rem",
                                                        sm: "0.7rem",
                                                        md: "0.9rem",
                                                    },
                                                    width: { xs: "200px", sm: "auto" },
                                                    maxWidth: "100%",
                                                    backdropFilter: "blur(80px)",
                                                    WebkitBackdropFilter: "blur(80px)",
                                                    transition: "all 0.3s ease",
                                                    '&:hover': {
                                                        transform: "translateY(-2px)",
                                                    },
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
                                        >
                                            <Button
                                                variant="contained"
                                                sx={custom?.globalCommunity?.cards?.podcastButton || {
                                                    borderRadius: {
                                                        xs: "8px",
                                                        sm: "10px",
                                                        md: "12px",
                                                    },
                                                    textTransform: "none",
                                                    position: "relative",
                                                    overflow: "hidden",
                                                    border: "none",
                                                    background: custom?.defaultButton?.background || '#2196f3',
                                                    color: "#fff",
                                                    px: {
                                                        xs: 1.5,
                                                        sm: 2,
                                                    },
                                                    py: {
                                                        xs: 0.75,
                                                        sm: 0.85,
                                                        md: 1,
                                                    },
                                                    fontSize: {
                                                        xs: "0.75rem",
                                                        sm: "0.7rem",
                                                        md: "0.9rem",
                                                    },
                                                    width: { xs: "200px", sm: "auto" },
                                                    maxWidth: "100%",
                                                    backdropFilter: "blur(80px)",
                                                    WebkitBackdropFilter: "blur(80px)",
                                                    transition: "all 0.3s ease",
                                                    '&:hover': {
                                                        transform: "translateY(-2px)",
                                                    },
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