'use client';

import React, { useState, useEffect } from 'react';
import {
    Box,
    Grid,
    Card,
    Typography,
    Button,
    TextField,
    Stack,
    Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import axiosInstance from "@/lib/axios";

// Create motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);
const MotionButton = motion(Button);
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

    const displayedBlogs = selectedCategory
        ? blogs.filter(blog => blog.category_id?._id === selectedCategory)
        : blogs;

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axiosInstance.get('/frontendApis/getblogs', {
                    params: { size: 100, page: 0, search: '' },
                });
                console.log(res, "resres");

                // const allBlogs = (res?.data?.data?.blogs || []).sort((a, b) => a.index_position - b.index_position);
                // setBlogs(allBlogs);
                // setRecentPosts(allBlogs.slice(0, 4));
                // setMounted(true);
                const allBlogs = (res?.data?.data?.blogs || []).sort((a, b) => a.index_position - b.index_position);
                setBlogs(allBlogs);
                setRecentPosts(allBlogs.slice(0, 4));

                // ADD THIS - extract unique categories from blogs
                const uniqueCategories = [];
                const seenIds = new Set();
                allBlogs.forEach(blog => {
                    if (blog.category_id && blog.category_id._id && !seenIds.has(blog.category_id._id)) {
                        seenIds.add(blog.category_id._id);
                        uniqueCategories.push(blog.category_id);
                    }
                });
                setCategories(uniqueCategories);
                setMounted(true);

            } catch (error) {
                console.error('API error:', error);
                setMounted(true);
            }
        };

        fetchBlogs();
    }, []);

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
        <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            sx={{ px: { xs: 2, sm: 4, md: 6, lg: 12 }, py: { xs: 4, sm: 6, md: 8, lg: 10 } }}
        >
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
                        color: '#ff8a80',
                        fontWeight: 700,
                        fontSize: { xs: 26, md: 32 },
                        mb: 2,
                    }}
                >
                    The Authentic Relating Blog
                </MotionTypography>

                <MotionTypography
                    variants={itemVariants}
                    sx={{
                        fontWeight: 500,
                        mb: 2,
                    }}
                >
                    Real reflections. Honest insights. Human connection.
                </MotionTypography>

                <MotionTypography
                    variants={itemVariants}
                    sx={{
                        color: '#555',
                        maxWidth: 850,
                        mb: 2,
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
                        color: '#555',
                        maxWidth: 850,
                        mb: 3,
                    }}
                >
                    Whether you&apos;re new to Authentic Relating or deep in the
                    practice, these posts are here to inspire, challenge, and
                    invite you into what&apos;s most real.
                </MotionTypography>

                <MotionTypography
                    variants={itemVariants}
                    sx={{ fontWeight: 600 }}
                >
                    Read. Reflect. Relate.
                </MotionTypography>
            </MotionBox>

            <Grid container spacing={{ xs: 2, md: 4 }}>
                {/* LEFT BLOG GRID */}
                <Grid item xs={12} lg={8}>
                    <MotionBox
                        component={motion.div}
                        initial="hidden"
                        animate="visible"
                        // whileInView="visible"
                        //viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        <Grid container spacing={3} key={selectedCategory || 'all'} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
                            {displayedBlogs.map((blog, index) => (
                                <Grid item xs={12} sm={6} lg={6} key={blog._id} sx={{
                                    display: 'flex',
                                    justifyContent: { xs: 'center', sm: 'flex-start' }
                                }}>
                                    <MotionCard
                                        custom={index}
                                        initial="hidden"
                                        animate="visible"
                                        variants={staggerItemVariants}
                                        sx={{
                                            p: { xs: 1.5, sm: 1.75, md: 2, lg: 2, xl: 2.25 },
                                            height: { xs: 300, sm: 210, md: 300, lg: 340, xl: 360 },
                                            width: '100%',
                                            maxWidth: {
                                                xs: 300,
                                                sm: 170,
                                                md: 255,
                                                lg: '100%',
                                                xl: '100%'
                                            },
                                            margin: '0 auto',
                                            borderRadius: { xs: 2, sm: 2.5, md: 2.75, lg: 3, xl: 3 },
                                            background: 'linear-gradient(135deg, #5fa6e8, #b7d2ff)',
                                        }}
                                    >
                                        <MotionBox
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            // whileInView={{ opacity: 1, scale: 1 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            //viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.1 }}
                                            sx={{
                                                height: { xs: 100, sm: 60, md: 140, lg: 150, xl: 160 },
                                                background: '#fff',
                                                borderRadius: { xs: 1.5, sm: 2, md: 2, lg: 2.25, xl: 2.5 },
                                                mb: { xs: 1.5, sm: 1.75, md: 2, lg: 2, xl: 2.25 },
                                                overflow: 'hidden',
                                            }}
                                        >
                                            {blog.image && (
                                                <img
                                                    src={`${process.env.NEXT_PUBLIC_API_URL}/${blog.image}`}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                    alt={blog.title}
                                                />
                                            )}
                                        </MotionBox>

                                        <MotionTypography
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.2 }}
                                            fontWeight={600}
                                            color="#fff"
                                            fontSize={{ xs: 14, sm: 10, md: 12, lg: 14, xl: 16 }}
                                            lineHeight={1.3}
                                            textAlign={{ xs: 'center', sm: 'left' }}
                                        >
                                            {blog.title}
                                        </MotionTypography>

                                        <MotionTypography
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.3 }}
                                            fontSize={{ xs: 12, sm: 9, md: 12, lg: 13, xl: 14 }}
                                            color="rgba(255,255,255,0.85)"
                                            mt={{ xs: 0.5, sm: 0.75, md: 0.75, lg: 1, xl: 1 }}
                                            lineHeight={1.4}
                                            textAlign={{ xs: 'center', sm: 'left' }}
                                        >
                                            {blog.introduction}
                                        </MotionTypography>

                                        <MotionButton
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            // whileInView={{ opacity: 1, scale: 1 }}
                                            // viewport={{ once: true }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.4 }}
                                            size="small"
                                            sx={{
                                                mt: { xs: 1.5, sm: 1.75, md: 1.75, lg: 2, xl: 2.25 },
                                                textTransform: 'none',
                                                borderRadius: 2,
                                                border: '1px solid rgba(255,255,255,0.6)',
                                                color: '#fff',
                                                fontSize: { xs: 12, sm: 10, md: 13, lg: 14, xl: 15 },
                                                px: { xs: 2, sm: 2, md: 2.5, lg: 3, xl: 3.25 },
                                                py: { xs: 0.5, sm: 0.525, md: 0.625, lg: 0.75, xl: 0.875 }
                                            }}
                                        >
                                            Read More
                                        </MotionButton>
                                    </MotionCard>
                                </Grid>
                            ))}
                        </Grid>
                    </MotionBox>
                </Grid>

                {/* RIGHT SIDEBAR */}
                <Grid item xs={12} md={5} lg={4} xl={3} sx={{ pl: { xs: 5, sm: 0 } }}>
                    {/* Search */}
                    <MotionBox
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            mb: 3,
                            justifyContent: { xs: 'center', sm: 'flex-start' },
                            flexDirection: { xs: 'column', sm: 'row' }
                        }}
                    >
                        {/* Underline Input */}
                        <MotionBox
                            variants={itemVariants}
                            sx={{
                                maxWidth: { xs: 300, sm: '100%' },
                                width: '100%'
                            }}
                        >
                            <TextField
                                variant="standard"
                                fullWidth
                                placeholder="Enter search keywords"
                                InputProps={{
                                    disableUnderline: false,
                                }}
                                sx={{
                                    '& .MuiInput-root:before': {
                                        borderBottom: '2px solid #2196f3',
                                    },
                                    '& .MuiInput-root:hover:not(.Mui-disabled):before': {
                                        borderBottom: '2px solid #2196f3',
                                    },
                                    '& .MuiInput-root:after': {
                                        borderBottom: '2px solid #2196f3',
                                    },
                                }}
                            />
                        </MotionBox>

                        {/* Search Button */}
                        <MotionButton
                            variants={itemVariants}
                            sx={{
                                px: 4,
                                py: 1,
                                borderRadius: 3,
                                textTransform: 'none',
                                color: '#fff',
                                background: '#f6b9a9',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                                width: { xs: 300, sm: 'auto' },
                                '&:hover': {
                                    background: '#f3a18f',
                                },
                            }}
                        >
                            Search
                        </MotionButton>
                    </MotionBox>

                    {/* Recent Posts */}
                    <MotionBox
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={scaleInVariants}
                        sx={{
                            p: {
                                xs: 1.5,
                                sm: 1.5,
                                md: 1.75,
                                lg: 2,
                                xl: 2.5
                            },
                            borderRadius: {
                                xs: 2,
                                sm: 2,
                                md: 2,
                                lg: 2.5,
                                xl: 3
                            },
                            background: 'linear-gradient(0deg, #f7a500, #fac864ff)',
                            color: '#fff',
                            mb: {
                                xs: 2.5,
                                sm: 2.5,
                                md: 3,
                                lg: 3.5,
                                xl: 4
                            },
                            maxWidth: { xs: 300, sm: '100%' },
                            mx: { xs: 'auto', sm: 0 }
                        }}
                    >
                        <MotionTypography
                            initial={{ opacity: 0, y: 10 }}
                            // whileInView={{ opacity: 1, y: 0 }}
                            //  viewport={{ once: true }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            fontWeight={700}
                            mb={1.5}
                            fontSize={{
                                xs: 16,
                                sm: 15,
                                md: 16,
                                lg: 18,
                                xl: 20
                            }}
                            textAlign={{ xs: 'center', sm: 'left' }}
                        >
                            Recent Posts
                        </MotionTypography>

                        {[1, 2, 3, 4].map((i, index) => (
                            <MotionStack
                                key={i}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerItemVariants}
                                direction="row"
                                spacing={{
                                    xs: 1.5,
                                    sm: 1.25,
                                    md: 1.5,
                                    lg: 2,
                                    xl: 2.5
                                }}
                                alignItems="center"
                                mb={{
                                    xs: 1.5,
                                    sm: 1.25,
                                    md: 1.5,
                                    lg: 2,
                                    xl: 2.5
                                }}
                                sx={{ '&:last-child': { mb: 0 } }}
                            >
                                <MotionBox
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    //whileInView={{ opacity: 1, scale: 1 }}
                                    //viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    sx={{
                                        width: {
                                            xs: 45,
                                            sm: 40,
                                            md: 45,
                                            lg: 55,
                                            xl: 65
                                        },
                                        height: {
                                            xs: 45,
                                            sm: 40,
                                            md: 45,
                                            lg: 55,
                                            xl: 65
                                        },
                                        background: '#eee',
                                        borderRadius: {
                                            xs: 1.25,
                                            sm: 1,
                                            md: 1.25,
                                            lg: 1.5,
                                            xl: 2
                                        },
                                        flexShrink: 0,
                                    }}
                                />
                                <Box flex={1} minWidth={0}>
                                    <MotionTypography
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
                                        fontSize={{
                                            xs: 13,
                                            sm: 12,
                                            md: 13,
                                            lg: 14,
                                            xl: 15
                                        }}
                                        fontWeight={500}
                                        lineHeight={1.3}
                                        textAlign={{ xs: 'left', sm: 'left' }}
                                    >
                                        Blog post title
                                    </MotionTypography>
                                    <MotionTypography
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                                        fontSize={{
                                            xs: 11,
                                            sm: 10,
                                            md: 11,
                                            lg: 12,
                                            xl: 13
                                        }}
                                        opacity={0.9}
                                        mt={0.25}
                                        textAlign={{ xs: 'left', sm: 'left' }}
                                    >
                                        April 21, 2025
                                    </MotionTypography>
                                </Box>
                            </MotionStack>
                        ))}
                    </MotionBox>

                    {/* Categories */}
                    <MotionBox
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={scaleInVariants}
                        sx={{
                            p: {
                                xs: 1.5,
                                sm: 1.5,
                                md: 1.75,
                                lg: 2,
                                xl: 2.5
                            },
                            borderRadius: {
                                xs: 2,
                                sm: 2,
                                md: 2,
                                lg: 2.5,
                                xl: 3
                            },
                            background: 'linear-gradient(50deg, #f7a500, #fac864ff, #f7a500, #fac864ff)',
                            color: '#fff',
                            maxWidth: { xs: 300, sm: '100%' },
                            mx: { xs: 'auto', sm: 0 }
                        }}
                    >
                        <MotionTypography
                            initial={{ opacity: 0, y: 10 }}
                            //whileInView={{ opacity: 1, y: 0 }}
                            //viewport={{ once: true }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            fontWeight={700}
                            mb={1.5}
                            fontSize={{
                                xs: 16,
                                sm: 15,
                                md: 16,
                                lg: 18,
                                xl: 20
                            }}
                            textAlign={{ xs: 'center', sm: 'left' }}
                        >
                            Categories
                        </MotionTypography>

                        <MotionStack
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            direction="row"
                            spacing={{
                                xs: 2.5,
                                sm: 0.5,
                                md: 0.75,
                                lg: 1,
                                xl: 1.25
                            }}
                            flexWrap="wrap"
                            useFlexGap
                            justifyContent={{ xs: 'center', sm: 'flex-start' }}
                        >
                            <MotionChip
                                custom={-1}
                                variants={staggerItemVariants}
                                label="All"
                                size="small"
                                variant="outlined"
                                onClick={() => setSelectedCategory(null)}
                                sx={{
                                    borderRadius: 2,
                                    mb: { xs: 0.75, sm: 0.5, md: 0.75, lg: 1, xl: 1 },
                                    fontSize: { xs: 11, sm: 10, md: 11, lg: 12, xl: 13 },
                                    height: { xs: 26, sm: 24, md: 26, lg: 28, xl: 30 },
                                    background: !selectedCategory
                                        ? 'linear-gradient(135deg, #ff7043, #ffab91)'  // highlighted when All selected
                                        : 'linear-gradient(135deg, #f7a500, #fac864ff)',
                                    borderColor: '#fff',
                                    color: '#fff',
                                    cursor: 'pointer',
                                    border: !selectedCategory ? '2px solid #fff' : '1px solid #fff',
                                    '& .MuiChip-label': {
                                        px: { xs: 1.25, sm: 1, md: 1.25, lg: 1.5, xl: 1.75 },
                                        py: 0.25
                                    }
                                }}
                            />
                            {categories.map((category, index) => (
                                <MotionChip
                                    key={category._id}
                                    custom={index}
                                    variants={staggerItemVariants}
                                    label={category.title}
                                    size="small"
                                    //variant="outlined"
                                    onClick={() => setSelectedCategory(
                                        selectedCategory === category._id ? null : category._id
                                    )}
                                    sx={{
                                        borderRadius: 2,
                                        mb: {
                                            xs: 0.75,
                                            sm: 0.5,
                                            md: 0.75,
                                            lg: 1,
                                            xl: 1
                                        },
                                        fontSize: {
                                            xs: 11,
                                            sm: 10,
                                            md: 11,
                                            lg: 12,
                                            xl: 13
                                        },
                                        height: {
                                            xs: 26,
                                            sm: 24,
                                            md: 26,
                                            lg: 28,
                                            xl: 30
                                        },
                                        background: 'linear-gradient(135deg, #f7a500, #fac864ff)',
                                        borderColor: '#fff',
                                        color: '#fff',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        },
                                        // '& .MuiChip-label': {
                                        //     px: {
                                        //         xs: 1.25,
                                        //         sm: 1,
                                        //         md: 1.25,
                                        //         lg: 1.5,
                                        //         xl: 1.75
                                        //     },
                                        //     py: 0.25,
                                        //     cursor: 'pointer',
                                        //     opacity: selectedCategory && selectedCategory !== category._id ? 0.5 : 1,
                                        //     border: selectedCategory === category._id ? '2px solid #fff' : '1px solid #fff',
                                        //     transform: selectedCategory === category._id ? 'scale(1.05)' : 'scale(1)',
                                        //     transition: 'all 0.2s ease',
                                        // }
                                        cursor: 'pointer',
                                        opacity: selectedCategory && selectedCategory !== category._id ? 0.5 : 1,
                                        border: selectedCategory === category._id ? '2px solid #fff' : '1px solid #fff',
                                        transform: selectedCategory === category._id ? 'scale(1.05)' : 'scale(1)',
                                        transition: 'all 0.2s ease',
                                        '& .MuiChip-label': {
                                            px: { xs: 1.25, sm: 1, md: 1.25, lg: 1.5, xl: 1.75 },
                                            py: 0.25,
                                        }
                                    }}
                                />
                            ))}
                        </MotionStack>
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
                    p: { xs: 2.5, sm: 3, md: 3.5, lg: 4, xl: 4.5 },
                    borderRadius: { xs: 3, sm: 3.5, md: 4, lg: 4, xl: 4 },
                    background: 'linear-gradient(135deg, #ff7043, #ffab91)',
                    color: '#fff',
                }}
            >
                <MotionTypography
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variant="h5"
                    fontWeight={700}
                    mb={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1.5 }}
                    fontSize={{ xs: 20, sm: 22, md: 24, lg: 26, xl: 28 }}
                >
                    Let us start a session
                </MotionTypography>

                <MotionTypography
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    mb={{ xs: 2.5, sm: 2.5, md: 3, lg: 3, xl: 3.5 }}
                    maxWidth={{ xs: '100%', sm: 500, md: 550, lg: 600, xl: 650 }}
                    fontSize={{ xs: 14, sm: 15, md: 16, lg: 16, xl: 17 }}
                    lineHeight={1.5}
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
                    spacing={{ xs: 1.5, sm: 2, md: 2, lg: 2, xl: 2.5 }}
                    alignItems={{ xs: 'stretch', sm: 'center' }}
                >
                    <MotionButton
                        variants={itemVariants}
                        variant="outlined"
                        sx={{
                            borderColor: '#fff',
                            color: '#fff',
                            textTransform: 'none',
                            fontSize: { xs: 14, sm: 14, md: 15, lg: 15, xl: 16 },
                            py: { xs: 1, sm: 1.125, md: 1.25, lg: 1.25, xl: 1.375 },
                            px: { xs: 2, sm: 2.5, md: 3, lg: 3, xl: 3.5 },
                            borderRadius: { xs: 2, sm: 2.5, md: 2.5, lg: 2.5, xl: 3 },
                            borderWidth: 2,
                            background: 'linear-gradient(135deg, #ff7043, #ffab91)',
                            '&:hover': {
                                borderColor: '#fff',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            }
                        }}
                    >
                        Check event schedules
                    </MotionButton>

                    <MotionButton
                        variants={itemVariants}
                        variant="outlined"
                        sx={{
                            borderColor: '#fff',
                            color: '#fff',
                            textTransform: 'none',
                            fontSize: { xs: 14, sm: 14, md: 15, lg: 15, xl: 16 },
                            py: { xs: 1, sm: 1.125, md: 1.25, lg: 1.25, xl: 1.375 },
                            px: { xs: 2, sm: 2.5, md: 3, lg: 3, xl: 3.5 },
                            borderRadius: { xs: 2, sm: 2.5, md: 2.5, lg: 2.5, xl: 3 },
                            borderWidth: 2,
                            background: 'linear-gradient(135deg, #ff7043, #ffab91)',
                            '&:hover': {
                                borderColor: '#fff',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            }
                        }}
                    >
                        Know more about us
                    </MotionButton>
                </MotionStack>
            </MotionBox>
        </MotionBox>
    );
};