'use client';

import { Box, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import axiosInstance from '@/lib/axios';

// Import shared components
import Section from '@/app/_components/common/Section';
import SiteContainer from '@/app/_components/common/SiteContainer';
import Card from '@/app/_components/common/Card';
import EventButton from '@/app/_components/buttons/EventButton';

const MotionButton = motion(EventButton);
const MotionBox = motion(Box);

// Animation variants (matching BlogGrid)
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

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
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

const staggerItemVariants = {
    hidden: { opacity: 0, y: 10 },
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

export const ArticlesAndQuotes = () => {
    const [blogs, setBlogs] = useState([]);
    const [quotesCategories, setQuotesCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const quotesScrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const handlePrevClick = () => {
        if (quotesScrollRef.current) {
            quotesScrollRef.current.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        }
    };

    const handleNextClick = () => {
        if (quotesScrollRef.current) {
            quotesScrollRef.current.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }
    };

    const checkScrollPosition = () => {
        if (quotesScrollRef.current) {
            const container = quotesScrollRef.current;
            const maxScroll = container.scrollWidth - container.clientWidth;
            setCanScrollLeft(container.scrollLeft > 0);
            setCanScrollRight(container.scrollLeft < maxScroll - 1);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [blogsRes, quotesRes] = await Promise.all([
                    axiosInstance.get('/frontendApis/getblogs', {
                        params: { limit: 1000, page: 0, search: '' },
                    }),
                    axiosInstance.get('/frontendApis/getAllQuotes', {
                        params: { size: 1000, page: 0, search: '' },
                    }),
                ]);

                const allBlogs = blogsRes?.data?.data?.blogs || [];
                const sortedBlogs = allBlogs.sort(
                    (a, b) => a.index_position - b.index_position
                );
                setBlogs(sortedBlogs);

                const quotesData = (quotesRes?.data?.getAllQuotes || []).slice().reverse();
                const mappedQuotes = quotesData.map((item) => ({
                    id: item._id,
                    title: item.title,
                    description: item.description,
                    cards: item.quotes,
                    titleColor: item.gradientEnd,
                    cardBackground: `linear-gradient(135deg, ${item.gradientStart}, ${item.gradientEnd})`,
                    isPublished: item.isPublished
                }));
                setQuotesCategories(mappedQuotes);
            } catch (error) {
                console.error('API error:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const quoteCategory = quotesCategories.find(
        (cat) => cat.isPublished === true
    );
    const quoteCards = quoteCategory?.cards || [];

    useEffect(() => {
        const container = quotesScrollRef.current;
        if (!container) return;

        const interval = setInterval(() => {
            const maxScroll = container.scrollWidth - container.clientWidth;
            if (container.scrollLeft >= maxScroll) {
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: 270, behavior: 'smooth' });
            }
            setTimeout(checkScrollPosition, 500);
        }, 5000);

        checkScrollPosition();
        container.addEventListener('scroll', checkScrollPosition);

        return () => {
            clearInterval(interval);
            container.removeEventListener('scroll', checkScrollPosition);
        };
    }, [quoteCards]);

    return (
        <Section>
            <SiteContainer >
                <Box>
                    {/* ================= ARTICLES SECTION ================= */}
                    <MotionBox
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={containerVariants}
                        sx={{ mb: { xs: 5, sm: 4, md: 5 } }}
                    >
                        {/* Header */}
                        <Stack
                            direction={{ xs: 'column', md: 'row' }}
                            justifyContent="space-between"
                            alignItems={{ xs: 'flex-start', md: 'center' }}
                            spacing={3}
                            mb={4}
                        >
                            <Box maxWidth={{ xs: '100%', sm: 520, md: 620, lg: 820 }}>
                                <MotionBox variants={fadeInUpVariants}>
                                    <Typography
                                        variant={{ xs: 'h5', sm: 'h4', md: 'h3' }}
                                        fontWeight={700}
                                        sx={{
                                            color: '#1976d2',
                                            mb: 1,
                                            fontSize: {
                                                xs: '1.5rem',
                                                sm: '2rem',
                                                md: '2.5rem',
                                                lg: '3rem'
                                            },
                                            lineHeight: {
                                                xs: '1.2',
                                                sm: '1.2',
                                                md: '1.1'
                                            }
                                        }}
                                    >
                                        Discover Potential
                                        <br />
                                        Article Insights & Tips
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: '#555',
                                            fontSize: {
                                                xs: '13px',
                                                sm: '14px',
                                                md: '15px'
                                            },
                                            lineHeight: {
                                                xs: '1.5',
                                                sm: '1.5',
                                                md: '1.6'
                                            }
                                        }}
                                    >
                                        Morbi varius ornare ante non posuere. Morbi lacus lacus,
                                        auctor sit amet erat vitae, interdum semper leo.
                                    </Typography>
                                </MotionBox>
                            </Box>

                            <MotionButton
                                onClick={() => router.push(`/blogpage`)}
                                variant="default"
                                whileHover={{
                                    scale: 1.05,
                                    y: -3,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                                whileTap={{ scale: 0.95 }}
                                sx={{
                                    maxWidth: {
                                        xs: "160px",
                                        sm: "200px",
                                        md: "240px",
                                    },
                                    width: {
                                        xs: "160px",
                                        sm: "200px",
                                        md: "240px",
                                    },
                                    height: { xs: "48px", sm: "44px", md: "48px" },
                                    px: { xs: 2.5, sm: 1.5, md: 2.5 },
                                    fontSize: { xs: "13px", sm: "12px", md: "14px" },
                                    borderRadius: "12px",
                                    background: "linear-gradient(135deg, #83c6fdff, #42a5f5)",
                                    backdropFilter: "blur(12px)",
                                    WebkitBackdropFilter: "blur(12px)",
                                    border: "none",
                                    "&:hover": {
                                        background: "linear-gradient(135deg, #64b5f6, #1e88e5)",
                                    },
                                }}
                            >
                                View All Blogs
                            </MotionButton>
                        </Stack>

                        {/* Cards - 3 in a row on sm screens - BlogGrid Style */}
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 2, sm: 2, md: 3 }}
                            sx={{
                                width: '100%',
                                '& > *': {
                                    flex: { sm: '1 1 0' }
                                }
                            }}
                        >
                            {Array.isArray(blogs) && blogs.slice(0, 3).map((blog, index) => {
                                const imageUrl = blog.image
                                    ? `${process.env.NEXT_PUBLIC_API_URL}/${blog.image}`
                                    : "/placeholder.png";

                                return (
                                    <motion.div
                                        key={blog._id}
                                        variants={staggerItemVariants}
                                        custom={index}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        style={{ width: '100%' }}
                                    >
                                        <Card
                                            sx={{
                                                p: 2,
                                                borderRadius: "16px",
                                                background: "linear-gradient(180deg, #E3F2FD 0%, #BBDEFB 30%, #90CAF9 70%, #64B5F6 100%)",
                                                boxShadow: "0 8px 24px rgba(100, 181, 246, 0.3)",
                                                display: "flex",
                                                flexDirection: "column",
                                                position: "relative",
                                                overflow: "hidden",
                                                height: "100%",
                                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                                "&:hover": {
                                                    transform: "translateY(-6px)",
                                                    boxShadow: "0 16px 40px rgba(100, 181, 246, 0.4)",
                                                },
                                            }}
                                        >
                                            {/* IMAGE */}
                                            <Box
                                                sx={{
                                                    height: "200px",
                                                    minHeight: "200px",
                                                    borderRadius: "12px",
                                                    overflow: "hidden",
                                                    mb: 2,
                                                    background: "#fff",
                                                    flexShrink: 0,
                                                }}
                                            >
                                                <img
                                                    src={imageUrl}
                                                    alt={blog.title}
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            </Box>

                                            {/* TITLE */}
                                            <Typography
                                                sx={{
                                                    fontFamily: '"Red Hat Display", sans-serif',
                                                    fontWeight: 700,
                                                    fontSize: { xs: "16px", md: "18px" },
                                                    color: "#fff",
                                                    mb: 1,
                                                    minHeight: "48px",
                                                    display: "-webkit-box",
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: "vertical",
                                                    overflow: "hidden",
                                                }}
                                            >
                                                {blog.title}
                                            </Typography>

                                            {/* DESCRIPTION */}
                                            <Box sx={{ mb: 3 }}>
                                                <Typography
                                                    sx={{
                                                        fontFamily: '"Red Hat Display", sans-serif',
                                                        fontWeight: 400,
                                                        fontSize: { xs: "12px", md: "13px" },
                                                        lineHeight: 1.6,
                                                        color: "rgba(255,255,255,0.9)",
                                                        display: "-webkit-box",
                                                        WebkitLineClamp: 3,
                                                        WebkitBoxOrient: "vertical",
                                                        overflow: "hidden",
                                                    }}
                                                >
                                                    {blog.introduction}
                                                </Typography>
                                            </Box>

                                            {/* READ MORE BUTTON - BlogGrid Style */}
                                            <Box sx={{ mt: "auto" }}>
                                                <EventButton
                                                    onClick={() => router.push(`/blogpage/${blog.blogSlug}`)}
                                                    sx={{
                                                        width: "auto",
                                                        minWidth: "130px",
                                                        height: "44px",
                                                        px: 3,
                                                        borderRadius: "10px",
                                                        fontSize: "14px",
                                                        fontWeight: 500,
                                                        fontFamily: '"Red Hat Display", sans-serif',
                                                        color: "#fff",
                                                        position: "relative",
                                                        overflow: "hidden",
                                                        background: "linear-gradient(106.27deg, rgba(255,255,255,0.26) 33.98%, rgba(255,255,255,0.05) 105.14%)",
                                                        backdropFilter: "blur(10px)",
                                                        WebkitBackdropFilter: "blur(10px)",
                                                        border: "none",
                                                        transition: "all 0.3s ease",
                                                        "&::before": {
                                                            content: '""',
                                                            position: "absolute",
                                                            inset: 0,
                                                            borderRadius: "10px",
                                                            padding: "1.5px",
                                                            background: "linear-gradient(106deg, #FFFFFF 34%, rgba(255,255,255,0.1) 105%)",
                                                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                            WebkitMaskComposite: "xor",
                                                            maskComposite: "exclude",
                                                            pointerEvents: "none",
                                                            zIndex: 1,
                                                        },
                                                        "&:hover": {
                                                            background: "linear-gradient(106.27deg, rgba(33,150,243,0.25), rgba(21,101,192,0.25))",
                                                            boxShadow: "0 8px 20px rgba(33,150,243,0.35)",
                                                            transform: "scale(1.03)",
                                                        },
                                                    }}
                                                >
                                                    Read More
                                                </EventButton>
                                            </Box>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </Stack>
                    </MotionBox>

                    {/* ================= QUOTES SECTION ================= */}
                    <MotionBox
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={containerVariants}
                    >
                        {/* Header with title */}
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            mb={2}
                        >
                            <MotionBox variants={fadeInUpVariants}>
                                <Typography
                                    variant="h4"
                                    fontWeight={700}
                                    sx={{ color: quoteCategory?.titleColor || '#1976d2' }}
                                >
                                    Quotes
                                </Typography>
                            </MotionBox>
                        </Stack>

                        {/* Description and Navigation in the same row */}
                        <MotionBox variants={fadeInUpVariants}>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="flex-start"
                                spacing={2}
                                sx={{ mb: 4 }}
                            >
                                {/* Description on the left */}
                                <Typography
                                    sx={{
                                        color: '#555',
                                        maxWidth: 520,
                                        fontSize: 15,
                                        flex: 1,
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed urna elit. Ut in tincidunt lacus, at convallis risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                </Typography>

                                {/* Navigation arrows on the right */}
                                <Stack
                                    direction="row"
                                    spacing={1.5}
                                    alignItems="center"
                                    sx={{ mt: 0 }}
                                >
                                    <ChevronLeftIcon
                                        onClick={canScrollLeft ? handlePrevClick : undefined}
                                        sx={{
                                            cursor: canScrollLeft ? "pointer" : "not-allowed",
                                            opacity: canScrollLeft ? 1 : 0.3,
                                            fontSize: { xs: 20, sm: 24 },
                                            color: "#F5A623",
                                            transition: "all 0.2s ease",
                                            "&:hover": {
                                                transform: canScrollLeft ? "scale(1.15)" : "none",
                                                opacity: canScrollLeft ? 0.8 : 0.3,
                                            },
                                        }}
                                    />

                                    <ChevronRightIcon
                                        onClick={canScrollRight ? handleNextClick : undefined}
                                        sx={{
                                            cursor: canScrollRight ? "pointer" : "not-allowed",
                                            opacity: canScrollRight ? 1 : 0.3,
                                            fontSize: { xs: 20, sm: 24 },
                                            color: "#F5A623",
                                            transition: "all 0.2s ease",
                                            "&:hover": {
                                                transform: canScrollRight ? "scale(1.15)" : "none",
                                                opacity: canScrollRight ? 0.8 : 0.3,
                                            },
                                        }}
                                    />
                                </Stack>
                            </Stack>
                        </MotionBox>

                        {/* Quotes scroll container */}
                        <Stack
                            ref={quotesScrollRef}
                            direction="row"
                            spacing={2}
                            sx={{
                                overflowX: 'auto',
                                pb: 2,
                                '&::-webkit-scrollbar': { display: 'none' },
                                scrollbarWidth: 'none',
                            }}
                        >
                            {quoteCards.map((quote, index) => {
                                return (
                                    <motion.div
                                        key={index}
                                        variants={staggerItemVariants}
                                        custom={index}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        style={{ flexShrink: 0 }}
                                    >
                                        <Box
                                            sx={{
                                                width: { xs: 280, sm: 320, md: 360, lg: 380 },
                                                height: { xs: 180, sm: 200, md: 200 },
                                                p: 3,
                                                borderRadius: 3,
                                                background: quoteCategory?.cardBackground || 'linear-gradient(135deg, #1976d2, #42a5f5)',
                                                color: '#fff',
                                                boxShadow: '0px 6px 16px rgba(0,0,0,0.15)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: { xs: '14px', sm: '15px', md: '16px', lg: '17.7px' },
                                                    fontWeight: 700,
                                                    fontStyle: 'italic',
                                                    fontFamily: 'Red Hat Display, sans-serif',
                                                    lineHeight: 1.5,
                                                    textAlign: 'center',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 6,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    wordBreak: 'break-word',
                                                }}
                                            >
                                                {quote}
                                            </Typography>
                                        </Box>
                                    </motion.div>
                                )
                            })}
                        </Stack>
                    </MotionBox>
                </Box>
            </SiteContainer>
        </Section>
    );
};