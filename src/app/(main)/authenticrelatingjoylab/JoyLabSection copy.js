'use client';

import { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Button,
    Stack,
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia
} from '@mui/material';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { motion } from 'framer-motion';
import axiosInstance from "@/lib/axios";


const MotionBox = motion(Box);

export default function JoyLabSection() {
    const [viewMode, setViewMode] = useState('list');
    const [sections, setSections] = useState([]);

    // const GRADIENTS = [
    //     "linear-gradient(135deg, #FFC04D, #FFA726)",
    //     "linear-gradient(135deg, #5FD0D6, #45B7BD)",
    //     "linear-gradient(135deg, #F38775, #d35232ff)",
    //     "linear-gradient(135deg, #7dd4fcff, #10638aff)",
    //     "linear-gradient(135deg, #FFC04D, #FFA726)",
    //     "linear-gradient(135deg, #55CDD6, #45B7BD)",
    // ];

    // const sections = [
    //     {
    //         title: "Connection Warm-Ups: Setting the Stage for Play",
    //         subtitle: "We kick off with high-energy, interactive exercises designed to dissolve social barriers and get everyone into the flow of play.",
    //         descriptions: [
    //             "Yes, And! Improv Game – A fast-paced, silly game where participants build on each other's statements, creating a hilarious and surprising group story.",
    //             "Mirror Play – Pair up and silently mirror each other's movements in a playful, spontaneous dance of attunement.",
    //             "Connection Sprint – A lightning round of quick, deep connection prompts that help you get real, fast."
    //         ],
    //         gradient: "linear-gradient(135deg, #FFC04D, #FFA726)",
    //         color: "#FFA726",
    //         buttonColor: "#FFA726",
    //     },
    //     {
    //         title: "Authentic Relating Games: Heartfelt Play in Action",
    //         subtitle: "The core of the Joy Lab is our signature Authentic Relating Games, which create a playful yet deeply meaningful way to explore connection.",
    //         descriptions: [
    //             "The Curiosity Treasure Hunt – Find a partner and take turns asking deep, intriguing, and funny questions to 'discover' each other like explorers.",
    //             "The Vulnerability Challenge – A playful game where participants choose between a bold truth to share or a fun dare that fosters connection.",
    //             "The Empathy Exchange – A game where you swap life stories and share what it's like to walk in someone else's shoes.",
    //             "The Authentic Relating Playground – Move through different 'stations' of play, from storytelling corners to laughter zones and silent connection spaces."
    //         ],
    //         gradient: "linear-gradient(135deg, #5FD0D6, #45B7BD)",
    //         color: "#45B7BD",
    //         buttonColor: "#45B7BD",
    //     },
    //     {
    //         title: "Connection Prompts: Spark Deep & Playful Conversations",
    //         subtitle: "Throughout the Joy Lab, we introduce fun and meaningful connection prompts to spark unexpected, joyful, and profound conversations.",
    //         descriptions: [
    //             "What's something silly that makes you ridiculously happy?",
    //             "If your personality was a theme park ride, what would it be and why?",
    //             "Tell me a story about a time you felt truly alive.",
    //             "What's a weird belief or superstition you secretly hold?",
    //             "How would your childhood self describe you today?"
    //         ],
    //         gradient: "linear-gradient(135deg, #F38775, #d35232ff)",
    //         color: "#F38775",
    //         buttonColor: "#F38775",
    //     },
    //     {
    //         title: "The Relating Circle: Deep Dive into Presence",
    //         subtitle: "The heart of the Joy Lab is our Relating Circle, where we slow down, drop into presence, and explore the magic of deep, real-time connection.",
    //         description: [
    //             "The Connection Café – Imagine a cozy, candlelit space where you share stories, dreams, and insights with rotating partners.",
    //             "Storytelling Sparks – A practice where we share personal stories, responding to prompts like 'A moment that changed my life…' or 'The time I took a leap of faith…'",
    //             "Silent Eye Gazing – A practice where we drop words and simply connect through presence, sharing a moment of stillness and deep seeing.",
    //         ],
    //         gradient: "linear-gradient(135deg, #7dd4fcff, #10638aff)",
    //         color: "#5dcdfaff",
    //         buttonColor: "#5dcdfaff",
    //     },
    //     {
    //         title: "Playful Shenanigans: Unexpected Joy & Spontaneity",
    //         subtitle: "The Joy Lab is all about breaking free from social scripts and embracing spontaneity.",
    //         description: [
    //             "Authentic Relating Dance Party – Move, shake, and express yourself in an uninhibited, joyful dance session.",
    //             "Connection Carnival – A mix of surprise challenges, like 'Find someone you've never spoken to and share a childhood dream.'",
    //             "Relating Mischief – A deck of surprise challenges, where you might be tasked with finding someone who shares your biggest fear, or whispering an encouragement to a stranger.",
    //         ],
    //         gradient: "linear-gradient(135deg, #FFC04D, #FFA726)",
    //         color: "#FFA726",
    //         buttonColor: "#FFA726",
    //     },
    //     {
    //         title: "Closing Ritual: Integration & Gratitude",
    //         subtitle: "We end every Authentic Relating Joy Lab with a closing circle, where we reflect, celebrate, and take a moment to acknowledge the beauty of what we created together.",
    //         description: [
    //             "What's one moment you'll take with you from today?",
    //             "One word that captures your experience?",
    //             "A final group hug, high-five train, or celebratory cheer!",
    //         ],
    //         gradient: "linear-gradient(135deg, #55CDD6, #45B7BD)",
    //         color: "#55CDD6",
    //         buttonColor: "#55CDD6",
    //     }
    // ];
    useEffect(() => {
        const fetchJoyLab = async () => {
            try {
                const res = await axiosInstance.get('/frontendApis/getAllJoyLab', {
                    params: { size: 20, page: 0, search: '' },
                });
                console.log(res, "res")

                // setSections(res?.data?.list || []);
                setSections(
                    res.data.list
                        .sort((a, b) => a.index_position - b.index_position)
                        .map((item, index) => ({
                            ...item,
                            gradient: `linear-gradient(135deg, ${item.gradientStart}, ${item.gradientEnd})`,
                        }))
                );


            } catch (error) {
                console.error(error);
            }
        };

        fetchJoyLab();
    }, []);



    // const renderDescription = (section, index) => {
    //     if (section.descriptions && section.descriptions.length > 0) {
    //         return (
    //             <Stack direction="column" spacing={1}>
    //                 {section.descriptions.map((desc, idx) => (
    //                     <Stack direction="row" spacing={1.5} key={idx} alignItems="flex-start">
    //                         <FavoriteBorderIcon sx={{ fontSize: 12, mt: "2px" }} />
    //                         <Typography
    //                             fontSize={{ xs: 6, sm: 9, md: 10, lg: 13 }}
    //                             lineHeight={1.6}
    //                         >
    //                             {desc}
    //                         </Typography>
    //                     </Stack>
    //                 ))}
    //             </Stack>
    //         );
    //     } else if (section.description && section.description.length > 0) {
    //         return (
    //             <Stack direction="column" spacing={1}>
    //                 {section.description.map((desc, idx) => (
    //                     <Stack direction="row" spacing={1.5} key={idx} alignItems="flex-start">
    //                         <FavoriteBorderIcon sx={{ fontSize: 12, mt: "2px" }} />
    //                         <Typography
    //                             fontSize={{ xs: 6, sm: 9, md: 10, lg: 13 }}
    //                             lineHeight={1.6}
    //                         >
    //                             {desc}
    //                         </Typography>
    //                     </Stack>
    //                 ))}
    //             </Stack>
    //         );
    //     }
    //     return null;
    // };
    // const renderDescription = (html) => {
    //     if (!html) return null;

    //     const temp = document.createElement("div");
    //     temp.innerHTML = html;

    //     const bullets = [...temp.querySelectorAll("li")].map(li =>
    //         li.textContent
    //     );

    //     return (
    //         <Stack spacing={1}>
    //             {bullets.map((text, i) => (
    //                 <Stack key={i} direction="row" spacing={1.5}>
    //                     <FavoriteBorderIcon sx={{ fontSize: 12, mt: "2px" }} />
    //                     <Typography
    //                         fontSize={{ xs: 6, sm: 9, md: 10, lg: 13 }}
    //                         lineHeight={1.6}
    //                     >
    //                         {text}
    //                     </Typography>
    //                 </Stack>
    //             ))}
    //         </Stack>
    //     );
    // };
    
    
    const renderDescription = (html) => {
        if (!html) return null;

        const temp = document.createElement("div");
        temp.innerHTML = html;

        const paragraph = temp.querySelector("p")?.textContent;
        const bullets = [...temp.querySelectorAll("li")].map(li => li.textContent);

        return (
            <Stack spacing={1.5}>

                {/* MAIN PARAGRAPH */}
                {paragraph && (
                    <Typography
                        sx={{
                            fontFamily: "var(--font-redhat)",
                            fontWeight: 400,
                            fontSize: { xs: 13, sm: 14, md: 15, lg: 16 },
                            lineHeight: "28.8px",
                            letterSpacing: "0%",
                            opacity: 0.95
                        }}
                    >
                        {paragraph}
                    </Typography>
                )}

                {/* BULLET LIST */}
                {bullets.map((text, i) => (
                    <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start">
                        <FavoriteBorderIcon sx={{ fontSize: 16, mt: "3px" }} />

                        <Typography
                            sx={{
                                fontFamily: "var(--font-redhat)",
                                fontWeight: 400,
                                fontSize: { xs: 13, sm: 14, md: 15, lg: 16 },
                                lineHeight: "28.8px",
                                letterSpacing: "0%"
                            }}
                        >
                            {text}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        );
    };




    return (
        <Container
            maxWidth="xl"
            sx={{
                py: { xs: 4, md: 6, lg: 8 },
                position: 'relative',
                pt: { xs: 10, sm: 12, md: 14 },
            }}
        >
            {/* SPACER FOR TOGGLE BUTTONS */}
            <Box sx={{
                height: { xs: 50, sm: 40, md: 50 },
                mb: { xs: 3, sm: 4 }
            }} />

            {/* HEADING */}
            <MotionBox
                sx={{ textAlign: "center", maxWidth: 800, mx: "auto", mb: 8 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}>
                <Typography fontSize={32} fontWeight={700} mb={2}>
                    What Happens in the Joy Lab?
                </Typography>

                <Typography fontSize={14} color="#555" lineHeight={1.8}>
                    At the Authentic Relating Joy Lab, we blend the best elements of games,
                    storytelling, movement, and relational alchemy to create an
                    unforgettable experience. Each session includes a mix of fun, depth,
                    and playfulness, ensuring that everyone—whether introvert or
                    extrovert, playful or contemplative—feels at home.
                </Typography>
            </MotionBox>

            {/* CONTENT - LIST VIEW */}
            {viewMode === 'list' && (
                <Box>
                    {sections.map((section, index) => (
                        <MotionBox
                            key={index}
                            sx={{
                                mb: { xs: 4, md: 6, lg: 8 },
                                '&:last-child': { mb: 0 }
                            }}
                            initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? -100 : 100
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: index % 2 === 0 ? { xs: 'column', sm: 'row' } : { xs: 'column-reverse', sm: 'row-reverse' },
                                    height: { xs: 500, sm: 450, md: 490, lg: 540 },
                                }}
                            >
                                {/* IMAGE */}
                                {/* <Box
                                    sx={{
                                        width: { xs: '100%', sm: '70%', md: '60%', lg: '70%' },
                                        height: '100%',
                                        backgroundColor: '#D9D9D9',
                                        borderRadius: { xs: 2, md: 3 },
                                        ml: index % 2 === 0 ? 0 : { xs: 0, sm: 'auto' },
                                        order: index % 2 === 0 ? { xs: 1, sm: 1 } : { xs: 2, sm: 2 },
                                    }}
                                /> */}
                                <Box
                                    sx={{
                                        width: { xs: '100%', sm: '70%', md: '60%' },
                                        height: '100%',
                                        backgroundColor: '#D9D9D9',
                                        borderRadius: { xs: 2, md: 3 },
                                        ml: index % 2 === 0 ? 0 : { xs: 0, sm: 'auto' },
                                        order: index % 2 === 0 ? { xs: 1, sm: 1 } : { xs: 2, sm: 2 },
                                        overflow: "hidden",
                                    }}
                                >
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_API_URL}/${section.image}`}
                                        alt={section.title}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            display: "block"
                                        }}
                                    />
                                </Box>




                                {/* FLOATING CARD */}
                                <Box
                                    sx={{
                                        position: { xs: 'relative', sm: 'absolute' },
                                        left: index % 2 === 0
                                            ? { xs: 0, sm: '48%', md: '50%', lg: '52%' }
                                            : { xs: 0, sm: 0 },
                                        top: { xs: -40, sm: '50%' },
                                        transform: { xs: 'none', sm: 'translateY(-50%)' },
                                        width: { xs: '90%', sm: 380, md: 450, lg: 640 },
                                        height: section.descriptions
                                            ? { xs: 380, sm: 360, md: 390, lg: 350 }
                                            : { xs: 300, sm: 290, md: 350, lg: 480 },
                                        background: section.gradient,
                                        borderRadius: { xs: 2, md: 3 },
                                        border: "1px solid rgb(255, 255, 255)",
                                        boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                                        p: { xs: 3, md: 4 },
                                        color: '#fff',
                                        boxShadow: { xs: 2, md: 6 },
                                        mb: index % 2 === 0 ? 0 : { xs: 2, sm: 0 },
                                        ml: index % 2 === 0 ? { xs: '5%', sm: 0 } : 0,
                                        zIndex: 2,
                                        order: index % 2 === 0 ? { xs: 2, sm: 2 } : { xs: 1, sm: 1 },
                                        overflow: 'auto',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: "var(--font-redhat)",
                                            fontWeight: 700,
                                            fontSize: { xs: 20, sm: 24, md: 26, lg: 28 },
                                            lineHeight: "100%",
                                            letterSpacing: "0%",
                                            mb: 0.5
                                        }}
                                    >
                                        {section.title}
                                    </Typography>

                                    {/* SUBTITLE */}
                                    <Typography
                                        sx={{
                                            fontFamily: "var(--font-redhat)",
                                            fontWeight: 400,
                                            fontSize: { xs: 13, sm: 14, md: 15, lg: 16 },
                                            lineHeight: "28.8px",
                                            letterSpacing: "0%",
                                            opacity: 0.9,
                                            mb: 2
                                        }}
                                    >
                                        {section.subtitle}
                                    </Typography>

                                    {renderDescription(section.description)}
                                </Box>
                            </Box>
                        </MotionBox>
                    ))}
                </Box>
            )}
        </Container>
    );
}