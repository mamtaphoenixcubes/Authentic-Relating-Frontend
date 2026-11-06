'use client';

import { useState, useEffect, useRef } from 'react';
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
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';
import { motion } from 'framer-motion';
import axiosInstance from "@/lib/axios";
import { useRouter } from 'next/navigation';


export default function ConnectionSection() {
    const [viewMode, setViewMode] = useState('list');
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [hasNextPage, setHasNextPage] = useState(false);

    const [loadingMore, setLoadingMore] = useState(false);

    const loadMoreRef = useRef(null);



    const router = useRouter()

    // const stylesPool = [
    //     {
    //         gradient: "linear-gradient(135deg, #FFC04D, #FFA726)",
    //         color: "#FFA726",
    //         buttonColor: "#FFA726",
    //     },
    //     {
    //         gradient: "linear-gradient(135deg, #5FD0D6, #45B7BD)",
    //         color: "#45B7BD",
    //         buttonColor: "#45B7BD",
    //     },
    //     {
    //         gradient: "linear-gradient(135deg, #7dd4fcff, #10638aff)",
    //         color: "#5dcdfaff",
    //         buttonColor: "#5dcdfaff",
    //     },
    //     {
    //         gradient: "linear-gradient(135deg, #F38775, #d35232ff)",
    //         color: "#F38775",
    //         buttonColor: "#F38775",
    //     },
    // ];


    const fetchSections = async (pageNumber = 0, append = false) => {

        if (loadingMore) return; // prevent duplicate calls

        try {

            if (append) setLoadingMore(true);

            const res = await axiosInstance.get(
                "/frontendApis/getAllDetailsOffering",
                {
                    params: {
                        size: viewMode === "grid" ? 6 : 4,
                        page: pageNumber
                    }
                }
            );

            const apiData = res?.data?.data?.detailsOfOfferings || [];
            const pagination = res?.data?.data?.pagination || {};

            console.log(apiData, "datatata")

            const styledData = apiData.map((item, index) => {
                return {
                    ...item,
                    gradient: `linear-gradient(135deg, ${item.gradientStart}, ${item.gradientEnd})`,
                    color: item.gradientEnd,
                    buttonColor: item.gradientEnd,
                };
            });

            if (append) {
                setSections(prev => {
                    const existingIds = new Set(prev.map(i => i._id));

                    const newItems = styledData.filter(i => !existingIds.has(i._id));

                    return [...prev, ...newItems];
                });
            } else {
                setSections(styledData);
            }

            setPage(pagination.currentPage);
            setTotalPages(pagination.totalPages);
            setHasNextPage(pagination.hasNextPage);

        } catch (error) {
            console.error("Connection API error:", error);
        } finally {
            setLoading(false);
            setLoadingMore(false);
        }
    };


    useEffect(() => {
        fetchSections(0, false);
    }, [viewMode]);


    //    useEffect(() => {

    //     if (viewMode !== "list") return;

    //     const handleScroll = () => {

    //         if (loadingMore || !hasNextPage) return;

    //         const scrollTop = window.scrollY;
    //         const windowHeight = window.innerHeight;
    //         const docHeight = document.documentElement.scrollHeight;

    //         if (scrollTop + windowHeight >= docHeight - 200) {

    //             fetchSections(page + 1, true);

    //         }

    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => window.removeEventListener("scroll", handleScroll);

    // }, [page, hasNextPage, loadingMore, viewMode]);

    useEffect(() => {

        if (viewMode !== "list") return;

        const observer = new IntersectionObserver(
            (entries) => {

                if (
                    entries[0].isIntersecting &&
                    hasNextPage &&
                    !loadingMore
                ) {
                    fetchSections(page + 1, true);
                }

            },
            {
                root: null,
                rootMargin: "200px",
                threshold: 0
            }
        );

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => {
            if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
        };

    }, [page, hasNextPage, loadingMore, viewMode]);


    return (
        <Container
            maxWidth="xl"
            sx={{
                position: 'relative',
                py: { xs: 5, sm: 6 },
                overflow: "hidden"
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <Box
                    sx={{
                        position: "relative", // ✅ important
                        mb: { xs: 3, md: 4 },
                        px: { xs: 2, md: 0 },
                    }}
                >

                    {/* ✅ CENTER TEXT */}
                    <Box
                        sx={{
                            textAlign: "center",
                            maxWidth: 800,
                            mx: "auto", // true center
                        }}
                    >
                        <Typography
                            fontSize={{ xs: 20, sm: 22, md: 26, lg: 28 }}
                            fontWeight={600}
                            color="#FF8A7A"
                            mb={1}
                        >
                            Connection is the gateway. We offer the path.
                        </Typography>

                        <Typography
                            fontSize={{ xs: 12, sm: 13, md: 14 }}
                            color="#777"
                        >
                            From Authentic Relating Courses, Joy Labs, and workshops to trainings,
                            relating circles and retreats — our offerings are designed to help you
                            relate with more honesty, presence, and heart.
                        </Typography>
                    </Box>

                    {/* ✅ BUTTONS */}
                    <Box
                        sx={{
                            position: { xs: "static", md: "absolute" }, // mobile normal, desktop absolute
                            top: { md: 0 },
                            right: { md: 0 },

                            display: "flex",
                            flexDirection: { xs: "row", md: "column" }, // row mobile, column desktop
                            gap: 1,

                            justifyContent: "center",
                            alignItems: "center",

                            mt: { xs: 2, md: 0 },
                        }}
                    >
                        <Button
                            onClick={() => setViewMode('list')}
                            variant={viewMode === 'list' ? 'contained' : 'outlined'}
                            startIcon={<ViewListIcon />}
                            sx={{
                                minWidth: 80,
                                textTransform: 'none',
                                backgroundColor: viewMode === 'list' ? '#1976d2' : 'transparent',
                                color: viewMode === 'list' ? '#fff' : '#1976d2',
                                borderColor: '#1976d2',
                                '&:hover': {
                                    backgroundColor:
                                        viewMode === 'list'
                                            ? '#1565c0'
                                            : 'rgba(25, 118, 210, 0.1)',
                                },
                            }}
                        >
                            List
                        </Button>

                        <Button
                            onClick={() => setViewMode('grid')}
                            variant={viewMode === 'grid' ? 'contained' : 'outlined'}
                            startIcon={<GridViewIcon />}
                            sx={{
                                minWidth: 80,
                                textTransform: 'none',
                                backgroundColor: viewMode === 'grid' ? '#1976d2' : 'transparent',
                                color: viewMode === 'grid' ? '#fff' : '#1976d2',
                                borderColor: '#1976d2',
                                '&:hover': {
                                    backgroundColor:
                                        viewMode === 'grid'
                                            ? '#1565c0'
                                            : 'rgba(25, 118, 210, 0.1)',
                                },
                            }}
                        >
                            Grid
                        </Button>
                    </Box>

                </Box>
            </motion.div>

            {viewMode === 'list' && (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 6, md: 8, lg: 10 } }}>
                    {loadingMore && (
                        <Box textAlign="center" mt={4}>
                            <Typography>Loading more...</Typography>
                        </Box>
                    )}
                    {sections.map((section, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <Box
                                sx={{
                                    position: "relative",
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection:
                                        index % 2 === 0
                                            ? { xs: "column", sm: "row" }
                                            : { xs: "column-reverse", sm: "row-reverse" },

                                    height: { xs: 500, sm: 450, md: 490, lg: 540 },
                                }}
                            >
                                {/* IMAGE */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -120 : 120, scale: 0.96 }}
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.6,
                                        ease: [0.25, 0.1, 0.25, 1],
                                    }}
                                    style={{ height: "100%", width: "100%" }}
                                >
                                    <Box
                                        sx={{
                                            width: { xs: "100%" },
                                            height: "100%",
                                            backgroundColor: "#D9D9D9",
                                            borderRadius: { xs: 2, md: 3 },
                                            ml: isEven ? 0 : { xs: 0, sm: "auto" },
                                            order: isEven ? { xs: 1, sm: 1 } : { xs: 2, sm: 2 },
                                            overflow: "hidden",
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={`${process.env.NEXT_PUBLIC_API_URL}/${section.thumbnailImage}`}
                                            alt={section.title}
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </Box>
                                </motion.div>

                                {/* FLOATING CARD */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -120 : 120 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.85, // 👈 slower than image
                                        delay: 0.2,     // 👈 starts after image
                                        ease: [0.25, 0.1, 0.25, 1],
                                    }}
                                    style={{ width: "100%" }}
                                >
                                    <Box
                                        sx={{
                                            position: { xs: "relative", sm: "absolute" },

                                            left: isEven
                                                ? { xs: 0, sm: "48%", md: "50%", lg: "52%" }
                                                : { xs: 0, sm: 0 },

                                            top: { xs: -40, sm: "50%" },

                                            transform: { xs: "none", sm: "translateY(-50%)" },

                                            width: { xs: "90%", sm: 380, md: 450, lg: 640 },

                                            height:
                                                section.description
                                                    ? { xs: 380, sm: 360, md: 390, lg: 460 }
                                                    : { xs: 300, sm: 290, md: 350, lg: 480 },

                                            background: section.gradient,
                                            borderRadius: { xs: 2, md: 3 },

                                            p: { xs: 3, md: 4 },

                                            color: "#fff",

                                            boxShadow: { xs: 2, md: 6 },

                                            mb: isEven ? 0 : { xs: 2, sm: 0 },

                                            ml: isEven ? { xs: "5%", sm: 0 } : 0,

                                            zIndex: 2,

                                            order: isEven ? { xs: 2, sm: 2 } : { xs: 1, sm: 1 },

                                            display: "flex",
                                            flexDirection: "column",

                                            overflow: "auto",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: "var(--font-redhat)",
                                                fontWeight: 700,
                                                fontSize: { xs: 20, sm: 24, md: 26, lg: 28 },
                                                lineHeight: "100%",
                                                mb: 1,
                                            }}
                                        >
                                            {section.title}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontFamily: "var(--font-redhat)",
                                                fontWeight: 400,
                                                fontSize: { xs: 13, sm: 14, md: 15, lg: 16 },
                                                lineHeight: "28.8px",
                                                opacity: 0.9,
                                                mb: 2,
                                            }}
                                        >
                                            {section.subtitle}
                                        </Typography>

                                        <Typography
                                            fontSize={{ xs: 12, sm: 13, md: 14 }}
                                            lineHeight={1.6}
                                            dangerouslySetInnerHTML={{ __html: section.description }}
                                        />

                                        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 2 }}>
                                            <Button
                                                onClick={() =>
                                                    router.push(`/ourofferings/${section.offeringSlug}`)
                                                }
                                                variant="contained"
                                                sx={{
                                                    backgroundColor: "#fff",
                                                    color: section.buttonColor,
                                                    textTransform: "none",
                                                    px: 3,
                                                    borderRadius: 2,
                                                    fontWeight: 600,
                                                    "&:hover": { backgroundColor: "#fff" },
                                                }}
                                            >
                                                Read More
                                            </Button>

                                            <Button
                                                variant="outlined"
                                                sx={{
                                                    borderColor: "#fff",
                                                    color: "#fff",
                                                    textTransform: "none",
                                                    px: 3,
                                                    borderRadius: 2,
                                                    fontWeight: 600,
                                                    "&:hover": {
                                                        borderColor: "#fff",
                                                        backgroundColor: "rgba(255,255,255,0.15)",
                                                    },
                                                }}
                                            >
                                                Events
                                            </Button>
                                        </Stack>
                                    </Box>
                                </motion.div>
                            </Box>
                        );
                    })}
                    <div ref={loadMoreRef} style={{ height: 20 }} />
                </Box>
            )}

            {/* CONTENT - GRID VIEW */}
            {viewMode === 'grid' && (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Box sx={{ py: 6 }}>
                        <Container maxWidth="xl">
                            <Grid container spacing={{ xs: 2, sm: 3, md: 5 }} justifyContent="flex-start">
                                {sections.map((item, index) => (
                                    <Grid
                                        item
                                        key={index}
                                        xs={12}
                                        sm={6}
                                        md={4}
                                        display="flex"
                                        justifyContent="flex-start"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true, amount: 0.1 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: index * 0.1,
                                                ease: "easeOut"
                                            }}
                                            style={{ width: '100%', height: '100%' }}
                                        >
                                            <Card
                                                sx={{
                                                    width: {
                                                        xs: '100%',
                                                        sm: 280,
                                                        md: 280,
                                                        lg: 440
                                                    },
                                                    height: {
                                                        xs: 380,
                                                        sm: 360,
                                                        md: 380,
                                                        lg: 460
                                                    },
                                                    borderRadius: { xs: 2, sm: 2, md: 3 },
                                                    overflow: 'hidden',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        transform: 'translateY(-4px)',
                                                        boxShadow: 6,
                                                    },
                                                }}
                                            >
                                                {/* Image - Responsive height */}
                                                <CardMedia
                                                    component="img"
                                                    image={`${process.env.NEXT_PUBLIC_API_URL}/${item.thumbnailImage}`}
                                                    alt={item.title}
                                                    sx={{
                                                        height: {
                                                            xs: 140,
                                                            sm: 120,
                                                            md: 140,
                                                            lg: 190
                                                        },
                                                        backgroundColor: '#D9D9D9'
                                                    }}
                                                />

                                                {/* Content - Responsive padding */}
                                                <Box
                                                    sx={{
                                                        background: item.gradient,
                                                        p: { xs: 1.5, sm: 2, md: 2, lg: 2.5 },
                                                        flex: 1,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'space-between',
                                                    }}
                                                >
                                                    <Typography
                                                        fontSize={{
                                                            xs: 16,
                                                            sm: 15,
                                                            md: 16,
                                                            lg: 18
                                                        }}
                                                        fontWeight={600}
                                                        mb={{ xs: 1, sm: 1.5, md: 2 }}
                                                        sx={{
                                                            display: '-webkit-box',
                                                            WebkitLineClamp: 2,
                                                            WebkitBoxOrient: 'vertical',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            color: '#fff'
                                                        }}
                                                    >
                                                        {item.title}
                                                    </Typography>

                                                    <Typography
                                                        fontSize={{
                                                            xs: 11,
                                                            sm: 10,
                                                            md: 11,
                                                            lg: 12
                                                        }}
                                                        mb={{ xs: 1.5, sm: 2, md: 2 }}
                                                        lineHeight={1.5}
                                                        sx={{
                                                            display: '-webkit-box',
                                                            WebkitLineClamp: 5,
                                                            WebkitBoxOrient: 'vertical',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            flex: 1,
                                                            color: '#fff'
                                                        }}
                                                        dangerouslySetInnerHTML={{ __html: item.description }}
                                                    />
                                                    <Stack direction="row" spacing={1} sx={{ width: '100%' }}>
                                                        <Button
                                                            onClick={() => router.push(`/ourofferings/${item.offeringSlug}`)}

                                                            variant="contained"
                                                            size="small"
                                                            sx={{
                                                                bgcolor: '#fff',
                                                                color: item.color,
                                                                fontSize: { xs: 10, sm: 9, md: 10, lg: 11 },
                                                                textTransform: 'none',
                                                                py: { xs: 0.8, sm: 0.9, md: 1, lg: 1 },
                                                                borderRadius: 1,
                                                                fontWeight: 600,
                                                                flex: 1,
                                                                '&:hover': {
                                                                    bgcolor: '#f5f5f5',
                                                                },
                                                            }}
                                                        >
                                                            Read More
                                                        </Button>

                                                        <Button
                                                            variant="outlined"
                                                            size="small"
                                                            sx={{
                                                                borderColor: '#fff',
                                                                color: '#fff',
                                                                fontSize: { xs: 10, sm: 9, md: 10, lg: 11 },
                                                                textTransform: 'none',
                                                                py: { xs: 0.8, sm: 0.9, md: 1, lg: 1 },
                                                                borderRadius: 1,
                                                                fontWeight: 600,
                                                                flex: 1,
                                                                '&:hover': {
                                                                    borderColor: '#fff',
                                                                    backgroundColor: 'rgba(255,255,255,0.15)',
                                                                },
                                                            }}
                                                        >
                                                            Events
                                                        </Button>
                                                    </Stack>
                                                </Box>
                                            </Card>
                                        </motion.div>
                                    </Grid>
                                ))}
                            </Grid>
                            {viewMode === "grid" && totalPages > 1 && (

                                <div className="flex justify-center items-center gap-4 mt-14 flex-wrap">

                                    {/* PREVIOUS */}

                                    <button
                                        onClick={() => fetchSections(Math.max(page - 1, 0))}
                                        disabled={page === 0}
                                        className={`

h-[48px] px-6
rounded-[16px]
font-redhat text-[14px]
flex items-center justify-center
transition-all duration-300

${page === 0
                                                ? "bg-blue-100/60 text-blue-300 cursor-not-allowed"
                                                : `
text-white
bg-[linear-gradient(98.48deg,#95C4FF_0%,#087EDF_100%)]
border border-white
backdrop-blur-[80px]
shadow-[0px_3px_8px_rgba(0,0,0,0.15)]
hover:scale-[1.05]
hover:brightness-110
`}
`}
                                    >
                                        ← Prev
                                    </button>

                                    {/* PAGE NUMBERS */}

                                    <div className="flex gap-3 flex-wrap justify-center">

                                        {[...Array(totalPages)].map((_, i) => (

                                            <button
                                                key={i}
                                                onClick={() => fetchSections(i)}
                                                className={`

w-[48px] h-[48px]
rounded-full
font-redhat text-[14px]
flex items-center justify-center
transition-all duration-300

${page === i
                                                        ? `
text-white
bg-[linear-gradient(98.48deg,#95C4FF_0%,#087EDF_100%)]
border border-white
shadow-[0px_4px_12px_rgba(0,0,0,0.2)]
scale-105
`
                                                        : `
text-blue-700
bg-white/70
backdrop-blur-[40px]
border border-white/70
hover:bg-blue-100
hover:scale-105
`}
`}
                                            >
                                                {i + 1}
                                            </button>

                                        ))}

                                    </div>

                                    {/* NEXT */}

                                    <button
                                        onClick={() => fetchSections(Math.min(page + 1, totalPages - 1))}
                                        disabled={page === totalPages - 1}
                                        className={`

h-[48px] px-6
rounded-[16px]
font-redhat text-[14px]
flex items-center justify-center
transition-all duration-300

${page === totalPages - 1
                                                ? "bg-blue-100/60 text-blue-300 cursor-not-allowed"
                                                : `
text-white
bg-[linear-gradient(98.48deg,#95C4FF_0%,#087EDF_100%)]
border border-white
backdrop-blur-[80px]
shadow-[0px_3px_8px_rgba(0,0,0,0.15)]
hover:scale-[1.05]
hover:brightness-110
`}
`}
                                    >
                                        Next →
                                    </button>

                                </div>

                            )}
                        </Container>
                    </Box>
                </motion.div>
            )}
        </Container>
    );
}