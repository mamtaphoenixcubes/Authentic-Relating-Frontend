'use client';

import {
    Box,
    Typography,
    Container,
    Stack,
    IconButton,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion } from 'framer-motion';

import { useEffect, useState, useRef } from 'react';
import axiosInstance from '@/lib/axios';
import { useRouter } from 'next/navigation';

// ✅ Import your button system
import { EventButton } from '@/app/_components/buttons';

export const ArticlesAndQuotes = () => {
    const [blogs, setBlogs] = useState([]);
    const [quotesCategories, setQuotesCategories] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    // Ref for quotes scroll container
    const quotesScrollRef = useRef(null);

    const scrollLeft = () => {
        if (quotesScrollRef.current) {
            quotesScrollRef.current.scrollBy({
                left: -300,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (quotesScrollRef.current) {
            quotesScrollRef.current.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
        }
    };

    // Motion Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const staggerContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                // 🔹 Call both APIs in parallel
                const [blogsRes, quotesRes] = await Promise.all([
                    axiosInstance.get('/frontendApis/getblogs', {
                        params: { limit: 1000, page: 0, search: '' },
                    }),
                    axiosInstance.get('/frontendApis/getAllQuotes', {
                        params: { size: 1000, page: 0, search: '' },
                    }),
                ]);

                /* ================= BLOGS ================= */
                const allBlogs = blogsRes?.data?.data?.blogs || [];
                const sortedBlogs = allBlogs.sort(
                    (a, b) => a.index_position - b.index_position
                );
                setBlogs(sortedBlogs);

                /* ================= QUOTES ================= */
                const quotesData =
                    (quotesRes?.data?.getAllQuotes || []).slice().reverse();

                const mappedQuotes = quotesData.map((item) => ({
                    id: item._id,
                    title: item.title,
                    description: item.description,
                    cards: item.quotes,
                    titleColor: item.gradientEnd,
                    cardBackground: `linear-gradient(135deg, ${item.gradientStart}, ${item.gradientEnd})`,
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
        (cat) => cat.title === 'Category 3'
    );

    const quoteCards = quoteCategory?.cards || [];

    return (
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
            <Box sx={{ px: { xs: 1, sm: 2, md: 4, lg: 6 } }}>
                {/* ================= ARTICLES SECTION ================= */}
                <Box sx={{ mb: { xs: 8, md: 12 } }}>
                    {/* Header */}
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        justifyContent="space-between"
                        alignItems={{ xs: 'flex-start', md: 'center' }}
                        spacing={3}
                        mb={4}
                    >
                        <Box maxWidth={520}>
                            <Typography
                                variant="h4"
                                fontWeight={700}
                                sx={{ color: '#1976d2', mb: 1 }}
                            >
                                Discover Potential
                                <br />
                                Article Insights & Tips
                            </Typography>

                            <Typography sx={{ color: '#555', fontSize: 15 }}>
                                Morbi varius ornare ante non posuere. Morbi lacus
                                lacus, auctor sit amet erat vitae, interdum semper
                                leo.
                            </Typography>
                        </Box>

                        {/* ✅ UPDATED: View All Blogs button */}
                        <EventButton
                            variant="default"
                            size="medium"
                            onClick={() => router.push(`/blogpage`)}
                            sx={{
                                px: 3,
                                borderRadius: 2,
                                background:
                                    'linear-gradient(135deg, #83c6fdff, #42a5f5)',
                                "&:hover": {
                                    background:
                                        'linear-gradient(135deg, #64b5f6, #1e88e5)',
                                },
                            }}
                        >
                            View All Blogs
                        </EventButton>
                    </Stack>

                    {/* Cards */}
                    <motion.div>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 2, sm: 2, md: 3 }}
                            sx={{
                                width: '100%',
                                '& > *': {
                                    flex: { sm: '1 1 0' },
                                },
                            }}
                        >
                            {Array.isArray(blogs) &&
                                blogs.slice(0, 3).map((blog) => {
                                    return (
                                        <motion.div
                                            key={blog._id}
                                            variants={fadeInUp}
                                            style={{ width: '100%' }}
                                        >
                                            <Box
                                                sx={{
                                                    p: {
                                                        xs: 1.5,
                                                        sm: 1.75,
                                                        md: 2,
                                                    },
                                                    borderRadius: {
                                                        xs: 3,
                                                        sm: 3.5,
                                                        md: 4,
                                                    },
                                                    background:
                                                        'linear-gradient(155deg, rgba(58, 163, 248, 0.9), rgba(144,202,249,0.9),rgba(71, 170, 250,0.9), rgba(144,202,249,0.9),rgba(71, 170, 250,0.9))',
                                                    backdropFilter: 'blur(160px)',
                                                    WebkitBackdropFilter:
                                                        'blur(160px)',
                                                    boxShadow:
                                                        '0px 8px 20px rgba(0,0,0,0.15)',
                                                    color: '#fff',
                                                    height: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                }}
                                            >
                                                {/* BLOG IMAGE */}
                                                <Box
                                                    sx={{
                                                        height: {
                                                            xs: 120,
                                                            sm: 130,
                                                            md: 150,
                                                        },
                                                        borderRadius: {
                                                            xs: 2,
                                                            sm: 2.5,
                                                            md: 3,
                                                        },
                                                        background: '#fff',
                                                        mb: {
                                                            xs: 1.5,
                                                            sm: 1.75,
                                                            md: 2,
                                                        },
                                                        overflow: 'hidden',
                                                    }}
                                                >
                                                    {blog.image && (
                                                        <img
                                                            src={`${process.env.NEXT_PUBLIC_API_URL}/${blog.image}`}
                                                            alt={blog.title}
                                                            style={{
                                                                width: '100%',
                                                                height: '100%',
                                                                objectFit:
                                                                    'cover',
                                                            }}
                                                        />
                                                    )}
                                                </Box>

                                                {/* BLOG TITLE */}
                                                <Typography
                                                    fontWeight={600}
                                                    mb={1}
                                                    sx={{
                                                        fontSize: {
                                                            xs: '0.9rem',
                                                            sm: '0.85rem',
                                                            md: '1rem',
                                                        },
                                                    }}
                                                >
                                                    {blog.title}
                                                </Typography>

                                                {/* BLOG INTRO */}
                                                <Typography
                                                    sx={{
                                                        opacity: 0.95,
                                                        mb: {
                                                            xs: 1.5,
                                                            sm: 1.75,
                                                            md: 2,
                                                        },
                                                        fontSize: {
                                                            xs: '0.75rem',
                                                            sm: '0.7rem',
                                                            md: '0.8125rem',
                                                        },
                                                        display: '-webkit-box',
                                                        WebkitLineClamp: 2,
                                                        WebkitBoxOrient:
                                                            'vertical',
                                                        overflow: 'hidden',
                                                    }}
                                                >
                                                    {blog.introduction}
                                                </Typography>

                                                {/* ✅ UPDATED: Read More button */}
                                                <Box sx={{ mt: 'auto' }}>
                                                    <EventButton
                                                        variant="glass"
                                                        size="small"
                                                        onClick={() =>
                                                            router.push(
                                                                `/blogpage/${blog.blogSlug}`
                                                            )
                                                        }
                                                        sx={{
                                                            px: {
                                                                xs: 1.5,
                                                                sm: 1.25,
                                                                md: 2.5,
                                                            },
                                                            minWidth: 'auto',
                                                            fontSize: {
                                                                xs: '0.7rem',
                                                                sm: '0.65rem',
                                                                md: '0.8125rem',
                                                            },
                                                            borderColor: 'white',
                                                            borderRadius: {
                                                                xs: 2,
                                                                sm: 2.5,
                                                                md: 3,
                                                            },
                                                        }}
                                                    >
                                                        Read More
                                                    </EventButton>
                                                </Box>
                                            </Box>
                                        </motion.div>
                                    );
                                })}
                        </Stack>
                    </motion.div>
                </Box>

                {/* ================= QUOTES SECTION ================= */}
                <Box>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        mb={2}
                    >
                        <Typography
                            variant="h4"
                            fontWeight={700}
                            sx={{ color: '#ff9800' }}
                        >
                            Quotes
                        </Typography>

                        <Stack direction="row" spacing={1}>
                            <IconButton
                                onClick={scrollLeft}
                                sx={{ color: '#ff9800' }}
                            >
                                <ArrowBackIosNewIcon fontSize="small" />
                            </IconButton>
                            <IconButton
                                onClick={scrollRight}
                                sx={{ color: '#ff9800' }}
                            >
                                <ArrowForwardIosIcon fontSize="small" />
                            </IconButton>
                        </Stack>
                    </Stack>

                    <Typography
                        sx={{
                            color: '#555',
                            maxWidth: 520,
                            mb: 4,
                            fontSize: 15,
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean sed urna elit. Ut in tincidunt lacus, at convallis
                        risus. Orci varius natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus.
                    </Typography>

                    <Stack
                        ref={quotesScrollRef}
                        direction="row"
                        spacing={2}
                        sx={{
                            overflowX: 'auto',
                            pb: 2,
                            scrollBehavior: 'smooth',
                            '&::-webkit-scrollbar': { height: 6 },
                            '&::-webkit-scrollbar-thumb': {
                                background: '#fbc02d',
                                borderRadius: 3,
                            },
                        }}
                    >
                        {quoteCards.map((quote, index) => {
                            return (
                                <Box
                                    key={index}
                                    sx={{
                                        minWidth: 260,
                                        p: 3,
                                        borderRadius: 3,
                                        background:
                                            quoteCategory?.cardBackground,
                                        color: '#fff',
                                        boxShadow:
                                            '0px 6px 16px rgba(0,0,0,0.15)',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: '17.7px',
                                            fontWeight: 700,
                                            fontStyle: 'italic',
                                            fontFamily:
                                                'Red Hat Display, sans-serif',
                                            lineHeight: '150%',
                                        }}
                                    >
                                        {quote}
                                    </Typography>
                                </Box>
                            );
                        })}
                    </Stack>
                </Box>
            </Box>
        </Container>
    );
};