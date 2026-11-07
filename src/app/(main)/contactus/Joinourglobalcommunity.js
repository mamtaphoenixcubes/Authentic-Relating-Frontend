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

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);
const MotionStack = motion(Stack);

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" }
    })
};

const cardHoverVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { y: -5, transition: { duration: 0.3, ease: "easeInOut" } }
};

const StyledInput = ({ placeholder }) => {
    const theme = useTheme();
    return (
        <TextField
            fullWidth
            variant="outlined"
            placeholder={placeholder}
            inputProps={{ spellCheck: false }}
            InputProps={{
                sx: theme.custom?.globalCommunity?.input?.inputProps || { color: '#fff', borderRadius: 1.5 },
            }}
            sx={theme.custom?.globalCommunity?.input?.root}
        />
    );
};

const StyledIconButton = ({ children, href, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <IconButton
                component="a"
                href={href}
                target="_blank"
                sx={{
                    background: '#2196f3 !important',
                    color: '#fff',
                    width: 36,
                    height: 36,
                    border: '2px solid rgba(255,255,255,0.7)',
                    '&:hover': { background: '#1976d2 !important' },
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
        <Section sx={{ pt: 2, pb: 6 }}>
            <SiteContainer sx={{ pt: 0, pb: 0 }}>
                <MotionBox
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                    sx={custom?.globalCommunity?.container}
                >
                    <MotionBox
                        variants={scaleInVariants}
                        whileInView="visible"
                        initial="hidden"
                        viewport={{ once: true }}
                        sx={custom?.globalCommunity?.mainCard}
                    >
                        {/* Header */}
                        <MotionTypography variants={fadeInUpVariants} sx={custom?.globalCommunity?.subtitle}>
                            Let’s Stay Connected
                        </MotionTypography>

                        <MotionTypography variants={fadeInUpVariants} transition={{ delay: 0.1 }} sx={custom?.globalCommunity?.title}>
                            Join our global community of people committed to presence, truth, and human connection.
                        </MotionTypography>

                        {/* Cards Stack */}
                        <MotionStack
                            component={motion.div}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={custom?.globalCommunity?.cards?.spacing}
                            sx={{
                                alignItems: 'stretch',
                                justifyContent: 'center',
                            }}
                        >
                            {/* Newsletter */}
                            <MotionCard
                                custom={0}
                                variants={cardHoverVariants}
                                whileHover="hover"
                                sx={custom?.globalCommunity?.cards?.newsletter}
                            >
                                <MotionTypography sx={custom?.globalCommunity?.cards?.newsletterTitle}>
                                    Subscribe to our Newsletter
                                </MotionTypography>

                                <StyledInput placeholder="Your Email Address" />

                                {/* FIX: Wrapped Button in motion.div instead of using component="motion.a" */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{ width: '100%' }}
                                >
                                    <Button
                                        component="a"
                                        href="#"
                                        variant="contained"
                                        fullWidth
                                        sx={custom?.globalCommunity?.cards?.subscribeButton}
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
                                sx={custom?.globalCommunity?.cards?.followUs}
                            >
                                <MotionTypography sx={custom?.globalCommunity?.cards?.followUsTitle}>
                                    Follow us
                                </MotionTypography>

                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    spacing={custom?.globalCommunity?.cards?.socialSpacing}
                                >
                                    {[
                                        { image: "/svg/contactus/podcast1.svg", href: "https://instagram.com" },
                                        { image: "/svg/contactus/podcast2.svg", href: "https://facebook.com" },
                                        { image: "/svg/contactus/podcast3.svg", href: "https://linkedin.com" },
                                        { image: "/svg/contactus/podcast4.svg", href: "https://youtube.com" },
                                    ].map((social, index) => (
                                        <StyledIconButton key={index} href={social.href} index={index}>
                                            <Box component="img" src={social.image} alt="social-icon" sx={custom?.globalCommunity?.cards?.socialIcon} />
                                        </StyledIconButton>
                                    ))}
                                </Stack>
                            </MotionCard>

                            {/* Podcast */}
                            <MotionCard
                                custom={2}
                                variants={cardHoverVariants}
                                whileHover="hover"
                                sx={custom?.globalCommunity?.cards?.podcast}
                            >
                                <MotionTypography sx={custom?.globalCommunity?.cards?.podcastTitle}>
                                    Listen to our Podcast
                                </MotionTypography>

                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    spacing={custom?.globalCommunity?.cards?.podcastIconSpacing}
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
                                            sx={custom?.globalCommunity?.cards?.podcastIcon}
                                        />
                                    ))}
                                </Stack>

                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    spacing={custom?.globalCommunity?.cards?.podcastButtonSpacing}
                                >
                                    {/* FIX: Wrapped Buttons in motion.div */}
                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            component="a"
                                            href="https://linkedin.com"
                                            target="_blank"
                                            variant="contained"
                                            sx={custom?.globalCommunity?.cards?.podcastButton}
                                        >
                                            Linkedin Page
                                        </Button>
                                    </motion.div>

                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            component="a"
                                            href="https://youtube.com"
                                            target="_blank"
                                            variant="contained"
                                            sx={custom?.globalCommunity?.cards?.podcastButton}
                                        >
                                            YouTube Page
                                        </Button>
                                    </motion.div>
                                </Stack>
                            </MotionCard>
                        </MotionStack>
                    </MotionBox>
                </MotionBox>
            </SiteContainer>
        </Section>
    );
};

export default Joinourglobalcommunity;