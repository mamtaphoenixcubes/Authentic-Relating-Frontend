'use client';

import React, { useState, useEffect } from 'react';
import {
    Box,
    Grid,
    Typography,
    TextField,
    Stack,
    Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import axiosInstance from "@/lib/axios";
import { useRouter } from 'next/navigation';

// Import reusable common components
import Section from '../../_components/common/Section';
import SiteContainer from '../../_components/common/SiteContainer';
import Card from '../../_components/common/Card';
import EventButton from '../../_components/buttons/EventButton';

// Create motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionStack = motion(Stack);
const MotionChip = motion(Chip);

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

export const BlogGrid = () => {

    const [mounted, setMounted] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const [page, setPage] = useState(0);
    const [limit] = useState(6);
    const [totalPages, setTotalPages] = useState(0);

    const router = useRouter();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axiosInstance.get('/frontendApis/getblogs', {
                    params: {
                        limit: limit,
                        page: page,
                        search: searchQuery,
                        category: selectedCategory
                    },
                });

                const pagination = res?.data?.data?.pagination;

                setTotalPages(pagination?.totalPages || 0);

                const allBlogs = (res?.data?.data?.blogs || []).sort((a, b) => a.index_position - b.index_position);
                setBlogs(allBlogs);

                const sortedByDate = [...allBlogs].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setRecentPosts(sortedByDate.slice(0, 4));

                setMounted(true);

            } catch (error) {
                console.error('API error:', error);
                setMounted(true);
            }
        };

        fetchBlogs();
    }, [page, searchQuery, selectedCategory]);

    useEffect(() => {
        const fetchBlogsCategories = async () => {
            try {
                const res = await axiosInstance.get('/frontendApis/getAllBlogCategory');
                setCategories(res.data);
            } catch (error) {
                console.error('API error:', error);
                setMounted(true);
            }
        };

        fetchBlogsCategories();
    }, [page]);

    if (!mounted) {
        return (
            <Box sx={{ px: { xs: 2, sm: 4, md: 6, lg: 12 }, py: { xs: 4, sm: 6, md: 8, lg: 10 } }}>
                <Box sx={{ pb: { xs: 4, sm: 5, md: 6 } }}>
                    <Typography
                        sx={{
                            color: '#ff8a80',
                            fontWeight: 700,
                            fontSize: { xs: 26, md: 32 },
                            mb: 2,
                        }}
                    >
                        The Authentic Relating Blog
                    </Typography>
                    <div style={{ minHeight: '600px' }}>
                        Loading content...
                    </div>
                </Box>
            </Box>
        );
    }

    return (
        <Section sx={{ backgroundColor: "#F8F9FA", py: { xs: 6, md: 10 } }}>
            <SiteContainer>
                <MotionBox
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    {/* Blog Header Section */}
                    <MotionBox
                        variants={fadeInUpVariants}
                        whileInView="visible"
                        initial="hidden"
                        viewport={{ once: true }}
                        sx={{ pb: { xs: 4, sm: 5, md: 6 } }}
                    >
                        <MotionTypography
                            variants={itemVariants}
                            sx={{
                                fontFamily: "var(--font-redhat)",
                                fontWeight: 700,
                                fontSize: {
                                    xs: "22px",
                                    sm: "26px",
                                    md: "32px",
                                    lg: "36px",
                                    xl: "40px",
                                },
                                lineHeight: {
                                    xs: 1.2,
                                    sm: 1.15,
                                    md: 1.1,
                                    lg: 1.1,
                                },
                                letterSpacing: "0%",
                                textAlign: "left",
                                color: "#ff8a80",
                                mb: { xs: 1.5, md: 2 },
                            }}
                        >
                            The Authentic Relating Blog
                        </MotionTypography>

                        <MotionTypography
                            variants={itemVariants}
                            sx={{
                                fontFamily: "var(--font-redhat)",
                                fontWeight: 400,
                                fontSize: {
                                    xs: "14px",
                                    sm: "15px",
                                    md: "16px",
                                    lg: "20px",
                                    xl: "22px",
                                },
                                color: "#444444",
                                textAlign: "left",
                                mb: { xs: 1.5, md: 2 },
                            }}
                        >
                            Real reflections. Honest insights. Human connection.
                        </MotionTypography>

                        <MotionTypography
                            variants={itemVariants}
                            sx={{
                                fontFamily: "var(--font-redhat)",
                                fontWeight: 400,
                                fontSize: {
                                    xs: "14px",
                                    sm: "15px",
                                    md: "16px",
                                    lg: "20px",
                                    xl: "22px",
                                },
                                color: "#1b1b1b",
                                textAlign: "left",
                                mb: { xs: 1.5, md: 2 },
                            }}
                        >
                            Welcome to the Authentic Relating Blog – a space for stories,
                            practices, and perspectives that bring the art of connection to
                            life. Here, we share writings on presence, vulnerability,
                            communication, leadership, and what it means to relate with
                            depth in a fast-paced world.
                        </MotionTypography>

                        <MotionTypography
                            variants={itemVariants}
                            sx={{
                                fontFamily: "var(--font-redhat)",
                                fontWeight: 400,
                                fontSize: {
                                    xs: "14px",
                                    sm: "15px",
                                    md: "16px",
                                    lg: "20px",
                                    xl: "22px",
                                },
                                color: "#1b1b1b",
                                textAlign: "left",
                                mb: { xs: 1.5, md: 2 },
                            }}
                        >
                            Whether you&apos;re new to Authentic Relating or deep in the
                            practice, these posts are here to inspire, challenge, and
                            invite you into what&apos;s most real.
                        </MotionTypography>

                        <MotionTypography
                            variants={itemVariants}
                            sx={{
                                fontWeight: 600,
                                fontSize: {
                                    xs: "14px",
                                    sm: "15px",
                                    md: "16px",
                                    lg: "20px",
                                    xl: "22px",
                                },
                                color: "#1b1b1b",
                            }}
                        >
                            Read. Reflect. Relate.
                        </MotionTypography>
                    </MotionBox>

                    {/* MAIN CONTENT GRID */}
                    <Grid container spacing={{ xs: 2, md: 4 }}>

                        {/* LEFT BLOG GRID */}
                        <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
                            <MotionBox
                                component={motion.div}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                variants={containerVariants}
                            >
                                <Grid
                                    container
                                    spacing={3}
                                    key={selectedCategory || 'all'}
                                    justifyContent={{ xs: 'center', sm: 'flex-start' }}
                                >
                                    {blogs.map((blog, index) => {
                                        const imageUrl = blog.image
                                            ? `${process.env.NEXT_PUBLIC_API_URL}/${blog.image}`
                                            : "/placeholder.png";

                                        return (
                                            <Grid
                                                item
                                                xs={12}
                                                sm={6}
                                                lg={6}
                                                key={blog._id}
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: { xs: 'center', sm: 'flex-start' }
                                                }}
                                            >
                                                <motion.div
                                                    key={blog._id}
                                                    variants={staggerItemVariants}
                                                    custom={index}
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    viewport={{ once: true }}
                                                    style={{ width: "100%" }}
                                                >
                                                    <Card
                                                        sx={{
                                                            p: 2,
                                                            borderRadius: "16px",
                                                            background:
                                                                "linear-gradient(100deg, #50B0F0 0%, #80B8F5 50%, #BFC3FA 100%)",
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
                                                                color: "#FFFFFF",
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

                                                        {/* READ MORE BUTTON */}
                                                        <Box sx={{ mt: "auto" }}>
                                                            <EventButton
                                                                onClick={() =>
                                                                    router.push(`/blogpage/${blog.blogSlug}`)
                                                                }
                                                                sx={{
                                                                    width: "auto",
                                                                    minWidth: "130px",
                                                                    height: "44px",
                                                                    px: 3,
                                                                    borderRadius: "10px",
                                                                    fontSize: "14px",
                                                                    fontWeight: 500,
                                                                    fontFamily: '"Red Hat Display", sans-serif',
                                                                    color: "#FFFFFF",
                                                                    background:
                                                                        "linear-gradient(105deg, #6BB9F1 0%, #80C5F5 100%)",
                                                                    border: "1.5px solid #FFFFFF",
                                                                    boxShadow: "0px 2px 5px rgba(0,0,0,0.12)",
                                                                    transition: "all 0.3s ease",

                                                                    "&:hover": {
                                                                        background:
                                                                            "linear-gradient(105deg, #58AEEF 0%, #70BDF3 100%)",
                                                                        boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
                                                                        transform: "translateY(-1px)",
                                                                    },
                                                                }}
                                                            >
                                                                Read More
                                                            </EventButton>
                                                        </Box>
                                                    </Card>
                                                </motion.div>
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            </MotionBox>
                        </Grid>

                        {/* RIGHT SIDEBAR */}
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            md={4}
                            lg={4}
                            xl={4}
                            sx={{ pl: { xs: 0, sm: 2, md: 3, lg: 4 } }}
                        >
                            {/* ───────── PARENT: controls the one-by-one stagger ───────── */}
                            <MotionBox
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.15 }}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.25,   // 👈 gap between Search → Recent → Categories
                                            delayChildren: 0.1,
                                        },
                                    },
                                }}
                            >
                                {/* ───── 1. SEARCH ───── */}
                                <MotionBox
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.5, ease: 'easeOut' },
                                        },
                                    }}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2,
                                        mb: 3,
                                        justifyContent: { xs: 'center', sm: 'flex-start' },
                                        flexDirection: { xs: 'column', sm: 'row' },
                                    }}
                                >
                                    <MotionBox
                                        variants={itemVariants}
                                        sx={{
                                            maxWidth: { xs: 300, sm: '100%' },
                                            width: '100%',
                                        }}
                                    >
                                        <TextField
                                            variant="standard"
                                            fullWidth
                                            placeholder="Enter search keywords"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            InputProps={{ disableUnderline: false }}
                                            sx={{
                                                '& .MuiInput-root:before': { borderBottom: '2px solid #2196f3' },
                                                '& .MuiInput-root:hover:not(.Mui-disabled):before': { borderBottom: '2px solid #2196f3' },
                                                '& .MuiInput-root:after': { borderBottom: '2px solid #2196f3' },
                                            }}
                                        />
                                    </MotionBox>

                                    <EventButton
                                        onClick={() => setSearchQuery('')}
                                        variant="default"
                                        sx={{
                                            textTransform: 'none',
                                            fontFamily: 'var(--font-redhat)',
                                            fontWeight: 600,
                                            fontSize: { xs: '13px', sm: '14px', md: '15px' },
                                            px: { xs: 2.5, md: 4 },
                                            height: { xs: '38px', md: '42px' },
                                            borderRadius: '10px',
                                            color: '#fff',
                                            background: 'linear-gradient(102.12deg, #FFB3A6 0%, #db7276 100%)',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            border: 'none',
                                            minWidth: { xs: 80 },
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                inset: 0,
                                                borderRadius: '10px',
                                                padding: '2px',
                                                background: 'linear-gradient(106deg, #FFFFFF 34%, rgba(255,255,255,0.1) 105%)',
                                                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                                WebkitMaskComposite: 'xor',
                                                maskComposite: 'exclude',
                                                pointerEvents: 'none',
                                            },
                                            '&:hover': {
                                                background: 'linear-gradient(102.12deg, #FFA494 0%, #E96A57 100%)',
                                                boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
                                                transform: 'translateY(-2px)',
                                            },
                                        }}
                                    >
                                        {searchQuery ? 'Clear' : 'Search'}
                                    </EventButton>
                                </MotionBox>

                                {/* ───── 2. RECENT POSTS ───── */}
                                <MotionBox
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.5, ease: 'easeOut' },
                                        },
                                    }}
                                    sx={{
                                        p: { xs: 1.5, sm: 1.5, md: 1.75, lg: 2, xl: 2.5 },
                                        borderRadius: { xs: 2, sm: 2, md: 2, lg: 2.5, xl: 2 },
                                        background: 'linear-gradient(0deg, #f7a500, #fac864ff)',
                                        color: '#fff',
                                        mb: { xs: 2.5, sm: 2.5, md: 3, lg: 3.5, xl: 4 },
                                        maxWidth: { xs: 300, sm: '100%' },
                                        mx: { xs: 'auto', sm: 0 },
                                    }}
                                >
                                    <MotionTypography
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4 }}
                                        fontWeight={700}
                                        mb={1.5}
                                        fontSize={{ xs: 16, sm: 15, md: 16, lg: 18, xl: 20 }}
                                        textAlign={{ xs: 'center', sm: 'left' }}
                                    >
                                        Recent Posts
                                    </MotionTypography>

                                    {recentPosts.map((post, index) => (
                                        <MotionStack
                                            key={post._id}
                                            custom={index}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={staggerItemVariants}
                                            direction="row"
                                            spacing={{ xs: 1.5, sm: 1.25, md: 1.5, lg: 2, xl: 2.5 }}
                                            alignItems="center"
                                            mb={{ xs: 1.5, sm: 1.25, md: 1.5, lg: 2, xl: 2.5 }}
                                            onClick={() => router.push(`/blogpage/${post.blogSlug}`)}
                                            sx={{
                                                cursor: 'pointer',
                                                transition: 'all 0.2s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-3px)',
                                                    opacity: 0.9,
                                                },
                                                '&:last-child': { mb: 0 },
                                            }}
                                        >
                                            <MotionBox
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                                sx={{
                                                    width: { xs: 45, sm: 40, md: 45, lg: 55, xl: 65 },
                                                    height: { xs: 45, sm: 40, md: 45, lg: 55, xl: 65 },
                                                    background: '#eee',
                                                    borderRadius: { xs: 1, sm: 0.5, md: 0.5, lg: 0.5, xl: 0.5 },
                                                    flexShrink: 0,
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                {post.image && (
                                                    <img
                                                        src={`${process.env.NEXT_PUBLIC_API_URL}/${post.image}`}
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            borderRadius: 'inherit',
                                                        }}
                                                    />
                                                )}
                                            </MotionBox>

                                            <Box flex={1} minWidth={0}>
                                                <MotionTypography
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
                                                    fontSize={{ xs: 13, sm: 12, md: 13, lg: 14, xl: 15 }}
                                                    fontWeight={500}
                                                    lineHeight={1.3}
                                                    textAlign={{ xs: 'left', sm: 'left' }}
                                                >
                                                    {post.title}
                                                </MotionTypography>
                                                <MotionTypography
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                                                    fontSize={{ xs: 11, sm: 10, md: 11, lg: 12, xl: 13 }}
                                                    opacity={0.9}
                                                    mt={0.25}
                                                    textAlign={{ xs: 'left', sm: 'left' }}
                                                >
                                                    {new Date(post.createdAt).toLocaleDateString('en-US', {
                                                        month: 'long',
                                                        day: 'numeric',
                                                        year: 'numeric',
                                                    })}
                                                </MotionTypography>
                                            </Box>
                                        </MotionStack>
                                    ))}
                                </MotionBox>

                                {/* ───── 3. CATEGORIES ───── */}
                                <MotionBox
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.5, ease: 'easeOut' },
                                        },
                                    }}
                                    sx={{
                                        p: { xs: 1.5, sm: 1.5, md: 1.75, lg: 2, xl: 2.5 },
                                        borderRadius: { xs: 2, sm: 2, md: 2, lg: 2.5, xl: 2 },
                                        background:
                                            'linear-gradient(50deg, #f7a500, #fac864ff, #f7a500, #fac864ff)',
                                        color: '#fff',
                                        maxWidth: { xs: 300, sm: '100%' },
                                        mx: { xs: 'auto', sm: 0 },
                                    }}
                                >
                                    <MotionTypography
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4 }}
                                        fontWeight={700}
                                        mb={1.5}
                                        fontSize={{ xs: 16, sm: 15, md: 16, lg: 18, xl: 20 }}
                                        textAlign={{ xs: 'center', sm: 'left' }}
                                    >
                                        Categories
                                    </MotionTypography>

                                    <MotionStack
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={{
                                            hidden: { opacity: 0 },
                                            visible: {
                                                opacity: 1,
                                                transition: {
                                                    staggerChildren: 0.08,
                                                    delayChildren: 0.2,
                                                },
                                            },
                                        }}
                                        direction={{ xs: 'column', sm: 'row' }}
                                        spacing={{ xs: 1, sm: 0.5, md: 0.75, lg: 1, xl: 1.25 }}
                                        flexWrap="wrap"
                                        useFlexGap
                                        justifyContent={{ xs: 'center', sm: 'flex-start' }}
                                        alignItems={{ xs: 'center', sm: 'flex-start' }}
                                    >
                                        <MotionChip
                                            custom={-1}
                                            variants={staggerItemVariants}
                                            label="All"
                                            size="small"
                                            variant="outlined"
                                            onClick={() => setSelectedCategory(null)}
                                            sx={{
                                                borderRadius: 1,
                                                mb: { xs: 0.75, sm: 0.5, md: 0.75, lg: 1, xl: 1 },
                                                fontSize: { xs: 11, sm: 10, md: 11, lg: 12, xl: 13 },
                                                height: { xs: 26, sm: 24, md: 26, lg: 28, xl: 30 },
                                                background: !selectedCategory
                                                    ? 'linear-gradient(135deg, #ff7043, #ffab91)'
                                                    : 'linear-gradient(135deg, #f7a500, #fac864ff)',
                                                borderColor: '#fff',
                                                color: '#fff',
                                                cursor: 'pointer',
                                                border: !selectedCategory ? '2px solid #fff' : '1px solid #fff',
                                                width: { xs: '100%', sm: 'auto' },
                                                maxWidth: { xs: '200px', sm: 'none' },
                                                '& .MuiChip-label': {
                                                    px: { xs: 1.25, sm: 1, md: 1.25, lg: 1.5, xl: 1.75 },
                                                    py: 0.25,
                                                    width: '100%',
                                                    textAlign: 'center',
                                                },
                                            }}
                                        />
                                        {categories.map((category, index) => (
                                            <MotionChip
                                                key={category._id}
                                                custom={index}
                                                variants={staggerItemVariants}
                                                label={category.title}
                                                size="small"
                                                onClick={() =>
                                                    setSelectedCategory(
                                                        selectedCategory === category._id ? null : category._id
                                                    )
                                                }
                                                sx={{
                                                    borderRadius: 1,
                                                    mb: { xs: 0.75, sm: 0.5, md: 0.75, lg: 1, xl: 1 },
                                                    fontSize: { xs: 11, sm: 10, md: 11, lg: 12, xl: 13 },
                                                    height: { xs: 26, sm: 24, md: 26, lg: 28, xl: 30 },
                                                    background:
                                                        selectedCategory && selectedCategory === category._id
                                                            ? 'linear-gradient(135deg, #ff7043, #ffab91)'
                                                            : 'linear-gradient(135deg, #f7a500, #fac864ff)',
                                                    borderColor: '#fff',
                                                    color: '#fff',
                                                    cursor: 'pointer',
                                                    opacity:
                                                        selectedCategory && selectedCategory !== category._id
                                                            ? 0.5
                                                            : 1,
                                                    border:
                                                        selectedCategory === category._id
                                                            ? '2px solid #fff'
                                                            : '1px solid #fff',
                                                    transform:
                                                        selectedCategory === category._id
                                                            ? 'scale(1.05)'
                                                            : 'scale(1)',
                                                    transition: 'all 0.2s ease',
                                                    width: { xs: '100%', sm: 'auto' },
                                                    maxWidth: { xs: '200px', sm: 'none' },
                                                    '& .MuiChip-label': {
                                                        px: {
                                                            xs: 1.25,
                                                            sm: 1,
                                                            md: 1.25,
                                                            lg: 1.5,
                                                            xl: 1.75,
                                                        },
                                                        py: 0.25,
                                                        width: '100%',
                                                        textAlign: 'center',
                                                    },
                                                }}
                                            />
                                        ))}
                                    </MotionStack>
                                </MotionBox>
                            </MotionBox>
                        </Grid>
                    </Grid>

                    {/* CTA Section */}
                    <MotionBox
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUpVariants}
                        sx={{
                            mt: { xs: 4, sm: 5, md: 6, lg: 6, xl: 7 },
                            p: { xs: 2.5, sm: 3, md: 3.5, lg: 4, xl: 8 },
                            borderRadius: { xs: 3, sm: 3.5, md: 4, lg: 4, xl: 4 },
                            background: 'linear-gradient(135deg, #ff7043, #ffab91)',
                            color: '#fff',
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: { xs: 'flex-start', sm: 'center' },
                            gap: { xs: 2, sm: 3, md: 4, lg: 5 },
                        }}
                    >
                        <MotionTypography
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            sx={{
                                fontFamily: "var(--font-redhat)",
                                fontWeight: 700,
                                fontSize: {
                                    xs: "28px",
                                    sm: "34px",
                                    md: "44px",
                                    lg: "56px",
                                    xl: "64px",
                                },
                                lineHeight: {
                                    xs: 1.2,
                                    sm: 1.15,
                                    md: 1.1,
                                    lg: "100%",
                                },
                                letterSpacing: "-0.01em",
                                minWidth: { sm: '160px', md: '190px', lg: '210px' },
                                flexShrink: 0,
                            }}
                        >
                            Let us start<br /> a session
                        </MotionTypography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, sm: 2 }, flex: 1 }}>
                            <MotionTypography
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                sx={{
                                    fontFamily: "var(--font-redhat)",
                                    fontWeight: 400,
                                    fontSize: {
                                        xs: "14px",
                                        sm: "16px",
                                        md: "18px",
                                        lg: "20px",
                                        xl: "20px",
                                    },
                                    lineHeight: {
                                        xs: 1.6,
                                        sm: 1.5,
                                        md: "130%",
                                    },
                                    maxWidth: 600,
                                    letterSpacing: "0%",
                                }}
                            >
                                Authentic Relating can help you strengthen clarity,
                                honesty, and presence in how you show up in life.
                            </MotionTypography>
                            <MotionStack
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={containerVariants}
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={{ xs: 1.5, sm: 2 }}
                                alignItems={{ xs: 'stretch', sm: 'center' }}
                                sx={{ width: '100%' }}
                            >
                                <EventButton
                                    variant="glass"
                                    sx={{
                                        textTransform: "none",
                                        fontFamily: "var(--font-redhat)",
                                        fontWeight: 600,
                                        fontSize: {
                                            xs: "13px",
                                            sm: "14px",
                                            md: "15px",
                                        },
                                        px: { xs: 2, sm: 2.5, md: 3, lg: 3.5 },
                                        height: { xs: "44px", sm: "42px", md: "44px", lg: "46px" },
                                        width: { xs: "100%", sm: "auto" },
                                        minWidth: { xs: "100%", sm: "180px", md: "200px", lg: "220px" },
                                        borderRadius: "10px",
                                        color: "#fff",
                                        background: "linear-gradient(106.27deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05))",
                                        backdropFilter: "blur(10px)",
                                        WebkitBackdropFilter: "blur(10px)",
                                        position: "relative",
                                        overflow: "hidden",
                                        border: "none",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        whiteSpace: "nowrap",
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
                                        },
                                        "&:hover": {
                                            background: "linear-gradient(106.27deg, rgba(255,255,255,0.28), rgba(255,255,255,0.08))",
                                            boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                                            transform: "translateY(-2px)",
                                        },
                                    }}
                                >
                                    Check event schedules
                                </EventButton>

                                <EventButton
                                    variant="glass"
                                    sx={{
                                        textTransform: "none",
                                        fontFamily: "var(--font-redhat)",
                                        fontWeight: 600,
                                        fontSize: {
                                            xs: "13px",
                                            sm: "14px",
                                            md: "15px",
                                        },
                                        px: { xs: 2, sm: 2.5, md: 3, lg: 3.5 },
                                        height: { xs: "44px", sm: "42px", md: "44px", lg: "46px" },
                                        width: { xs: "100%", sm: "auto" },
                                        minWidth: { xs: "100%", sm: "180px", md: "200px", lg: "200px" },
                                        borderRadius: "10px",
                                        color: "#fff",
                                        background: "linear-gradient(106.27deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05))",
                                        backdropFilter: "blur(10px)",
                                        WebkitBackdropFilter: "blur(10px)",
                                        position: "relative",
                                        overflow: "hidden",
                                        border: "none",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        whiteSpace: "nowrap",
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
                                        },
                                        "&:hover": {
                                            background: "linear-gradient(106.27deg, rgba(255,255,255,0.28), rgba(255,255,255,0.08))",
                                            boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                                            transform: "translateY(-2px)",
                                        },
                                    }}
                                >
                                    Know more about us
                                </EventButton>
                            </MotionStack>
                        </Box>
                    </MotionBox>
                </MotionBox>
            </SiteContainer>
        </Section>
    );
};