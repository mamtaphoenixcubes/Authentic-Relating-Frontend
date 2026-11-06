'use client';

import {
    Box,
    Grid,
    Typography,
    CardContent,
    Stack,
    Paper,
    SvgIcon,
} from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

import SiteContainer from '../../_components/common/SiteContainer';
import SectionHeader from '../../_components/common/SectionHeader';
import Card from '../../_components/common/Card';

const MotionBox = motion.div;

const HeartOutlineIcon = (props) => (
    <SvgIcon
        viewBox="0 0 24 24"
        {...props}
        sx={{ fill: 'none', stroke: '#fff', strokeWidth: 2.2, ...props.sx }}
    >
        <path d="M12 21s-7-4.35-9.5-8.35C.5 9.5 2.5 6 6 6c2 0 3.5 1.5 4 2.5C10.5 7.5 12 6 14 6c3.5 0 5.5 3.5 3.5 6.65C19 16.65 12 21 12 21z" />
    </SvgIcon>
);

const cards = [
    { img: '/svg/speakingandmediakit/keynotes.svg', title: 'Keynotes & Talks', desc: 'Transformative talks on human connection, relational leadership, and emotional intelligence' },
    { img: '/svg/speakingandmediakit/workshop.svg', title: 'Workshops & Retreats', desc: 'Deep dives into authentic relating, team culture, and conscious communication' },
    { img: '/svg/speakingandmediakit/corporate.svg', title: 'Corporate Programs', desc: 'Bespoke trainings for leadership teams, organizations, and startups' },
    { img: '/svg/speakingandmediakit/course.svg', title: 'Courses', desc: 'Our flagship "Authentic Relating Journey" and advanced facilitator trainings' },
    { img: '/svg/speakingandmediakit/communityevents.svg', title: 'Community Events', desc: 'Authentic Relating Circles, Authentic Relating Joy Labs, games nights, and relational dojos' },
];

const topics = [
    { title: 'Authentic Relating', desc: 'Explore the 5 Dimensions of Authentic Relating and the 10 Principles of Authentic Relating and how they unlock deeper intimacy, trust, and collaboration.' },
    { title: 'Relational Leadership: The Future of Influence', desc: 'Move beyond command-and-control. Learn the power of vulnerability, integrity, and connection as leadership tools.' },
    { title: 'Authenticity at Work: Humanizing the Workplace', desc: 'How Authentic Relating transforms burnout, disconnection, and miscommunication into psychological safety and vibrant culture.' },
    { title: 'The Power of Presence in a Noisy World', desc: 'How presence, listening, and empathy reshape how we show up in relationships and conversations.' },
    { title: 'Games That Change Lives', desc: 'An experiential keynote where participants play relational games that build connection and awareness in real time.' },
];

export const AuthenticRelating = () => {
    const theme = useTheme();
    const t = theme.custom.authenticRelatingPage;

    return (
        // 1. Force the root container to have 0 top padding to remove the page-level gap
        <SiteContainer
            sx={{
                ...t.root,
                pt: 0,
                mt: { xs: 0, sm: 5, md: 6, lg: 8, xl: 10 },
            }}
        >
            {/* HERO */}
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <Box
                    sx={{
                        ...t.heroPanel,
                        position: 'relative',
                        overflow: 'hidden', // Ensures the background respects the border radius

                        // Exact background gradient
                        background: 'linear-gradient(91.44deg, #FF826E 0%, #DE472F 100%)',

                        // Exact backdrop filter
                        backdropFilter: 'blur(179.9133758544922px)',
                        WebkitBackdropFilter: 'blur(179.9133758544922px)',

                        // Exact box shadow
                        boxShadow: '0px 5.3px 9.67px 1.32px #0000001A',

                        // Spacing (using margins/padding from your previous request)
                        mt: { xs: 4, sm: 6, md: 8 },
                        pt: { xs: 3, md: 5 },
                        pb: { xs: 4, md: 6 },

                        // Gradient Border using mask trick to preserve border-radius
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            inset: 0,
                            borderRadius: 'inherit', // Inherits the rounded corners from t.heroPanel
                            padding: '2px', // Creates the 2px border thickness
                            background: 'linear-gradient(104.35deg, #FFFFFF 2.33%, rgba(255, 255, 255, 0.1) 100.06%)',
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                            pointerEvents: 'none',
                            zIndex: 1,
                        }
                    }}
                >
                    {/* Hero body */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ position: 'relative', zIndex: 2 }} // Puts text above the pseudo-element
                    >
                        <Typography sx={t.heroBody}>
                            AuthenticRelating.com is the global home of human connection. We help individuals, couples, communities, and organizations deepen self-awareness, cultivate real relationships, and build a more connected world through the power of Authentic Relating.
                        </Typography>
                        <Typography sx={t.heroBody}>
                            Founded by Amitabha Bhatia, a world-renowned relational leadership expert, wellness architect, and transformation mentor, AuthenticRelating.com blends ancient wisdom with modern insight to guide people into richer, more meaningful lives—both personally and professionally.
                        </Typography>
                        <Typography sx={t.heroBody}>
                            From Fortune 500 boardrooms to grassroots communities, our work transforms how people lead, communicate, collaborate, and love.
                        </Typography>
                    </motion.div>
                </Box>
            </motion.div>

            {/* CORE OFFERINGS */}
            {/* CORE OFFERINGS */}
            <SiteContainer sx={{...t.offeringsWrapper, pt:{ xs: 4, md: 2, xl:6},pb:{ xs: 4, md: 2, xl:6}} }>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    {/* APPLIED STYLES HERE */}
                    <Box
                        sx={{
                            ...t.offeringsPanel,
                            position: 'relative',
                            background: 'linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)',
                            borderRadius: '24px',
                            border: '2px solid #FFFFFF',
                            backdropFilter: 'blur(100.38603973388672px)',
                            WebkitBackdropFilter: 'blur(100.38603973388672px)',
                            boxShadow: '0px 2.96px 5.4px 0.74px #0000001A',
                            overflow: 'hidden',
                        }}
                    >
                        <Typography
                            component="h2"
                            sx={{
                                // Use color for white text, NOT background
                                color: '#FFFFFF',
                                fontFamily: 'Red Hat Display, sans-serif',
                                fontWeight: 700,
                                fontStyle: 'normal',
                                fontSize: '44px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                textAlign: 'center',
                                verticalAlign: 'middle',
                                mb: { xs: 3, md: 5 },
                                position: 'relative',
                                zIndex: 2,
                            }}
                        >
                            Our Core Offerings
                        </Typography>

                        <Grid container {...t.offeringsGrid.container}>
                            {cards.map((item, index) => (
                                <Grid item {...t.offeringsGrid.item} key={index}>
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                                    >
                                        {/* Reverted Card back to your original gradient border styling */}
                                        <Card
                                            sx={{
                                                ...t.offeringCard,
                                                position: 'relative',
                                                border: 'none',
                                                backgroundClip: 'padding-box',

                                                // Added exact effects here
                                                backdropFilter: 'blur(260px)',
                                                WebkitBackdropFilter: 'blur(260px)', // Safari support
                                                boxShadow: '0px 4px 7.3px 1px #0000001A',

                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    inset: 0,
                                                    borderRadius: 'inherit',
                                                    padding: '2px',

                                                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                                    WebkitMaskComposite: 'xor',
                                                    maskComposite: 'exclude',
                                                    pointerEvents: 'none',
                                                    zIndex: 1,
                                                }
                                            }}
                                        >
                                            <CardContent sx={t.offeringCardContent}>
                                                <Box sx={t.offeringIcon}>
                                                    {item.img ? (
                                                        <img
                                                            src={item.img}
                                                            alt="icon"
                                                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                                        />
                                                    ) : (
                                                        <HeartOutlineIcon />
                                                    )}
                                                </Box>

                                                <Typography sx={t.offeringCardTitle}>
                                                    {item.title}
                                                </Typography>

                                                <Typography sx={t.offeringCardDesc}>
                                                    {item.desc}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </motion.div>
            </SiteContainer>

            {/* SIGNATURE SPEAKING TOPICS */}
            <SiteContainer sx={t.topicsWrapper}>
                <SectionHeader
                    title="Signature Speaking Topics"
                    align="center"
                    sx={{ '& .section-title': t.topicsTitle }}
                />

                <Stack {...t.topicsStack}>
                    {topics.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Paper elevation={0} sx={t.topicsPaper}>
                                <Typography sx={t.topicTitle}>{item.title}</Typography>
                                <Typography sx={t.topicDesc}>{item.desc}</Typography>
                            </Paper>
                        </motion.div>
                    ))}
                </Stack>
            </SiteContainer>
        </SiteContainer>
    );
};