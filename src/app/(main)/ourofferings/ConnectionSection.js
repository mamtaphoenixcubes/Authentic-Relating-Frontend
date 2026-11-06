'use client';

import { useState, useEffect, useRef } from 'react';
import {
    Box,
    Typography,
    Button,
    Stack,
    Grid,
    Card,
    CardMedia,
} from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import axiosInstance from '@/lib/axios';
import { useRouter } from 'next/navigation';

import SiteContainer from '../../_components/common/SiteContainer';

const MotionButton = motion(Button);

export default function ConnectionSection() {
    const theme = useTheme();
    const t = theme.custom.connectionSection;

    const [viewMode, setViewMode] = useState('list');
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [hasNextPage, setHasNextPage] = useState(false);

    const [loadingMore, setLoadingMore] = useState(false);

    const loadMoreRef = useRef(null);
    const router = useRouter();

    const fetchSections = async (pageNumber = 0, append = false) => {
        if (loadingMore) return;

        try {
            if (append) setLoadingMore(true);

            const res = await axiosInstance.get(
                '/frontendApis/getAllDetailsOffering',
                {
                    params: {
                        size: viewMode === 'grid' ? 6 : 4,
                        page: pageNumber,
                    },
                }
            );

            const apiData = res?.data?.data?.detailsOfOfferings || [];
            const pagination = res?.data?.data?.pagination || {};

            const styledData = apiData.map((item) => ({
                ...item,
                gradient: `linear-gradient(135deg, ${item.gradientStart}, ${item.gradientEnd})`,
                color: item.gradientEnd,
                buttonColor: item.gradientEnd,
            }));

            if (append) {
                setSections((prev) => {
                    const existingIds = new Set(prev.map((i) => i._id));
                    const newItems = styledData.filter((i) => !existingIds.has(i._id));
                    return [...prev, ...newItems];
                });
            } else {
                setSections(styledData);
            }

            setPage(pagination.currentPage);
            setTotalPages(pagination.totalPages);
            setHasNextPage(pagination.hasNextPage);
        } catch (error) {
            console.error('Connection API error:', error);
        } finally {
            setLoading(false);
            setLoadingMore(false);
        }
    };

    useEffect(() => {
        fetchSections(0, false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [viewMode]);

    useEffect(() => {
        if (viewMode !== 'list') return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasNextPage && !loadingMore) {
                    fetchSections(page + 1, true);
                }
            },
            { root: null, rootMargin: '200px', threshold: 0 }
        );

        const el = loadMoreRef.current;
        if (el) observer.observe(el);

        return () => {
            if (el) observer.unobserve(el);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, hasNextPage, loadingMore, viewMode]);

    return (
        <SiteContainer sx={t.container}>


            <motion.div {...t.motion.header}>
                <Box
                    sx={{
                        ...t.headerWrapper,
                        // Adds space below the entire header block before the list/grid starts
                        mb: { xs: 4, md: 6 }
                    }}
                >
                    <Box
                        sx={{
                            ...t.headerCenterBox,
                            maxWidth: { xs: "100%", md: "80%", lg: "70%" },
                            mx: "auto",
                            // Adds gap between the text and the buttons on mobile/tablet
                            mb: { xs: 3, md: 0 }
                        }}
                    >
                        <Typography sx={t.headerTitle}>
                            Connection is the gateway. We offer the path.
                        </Typography>
                        <Typography sx={t.headerDescription}>
                            From Authentic Relating Courses, Joy Labs, and workshops to trainings, relating circles and retreats — our offerings are designed to help you relate with more honesty, presence, and heart. Whether you’re just beginning or deepening your practice, there’s a space here for you to grow.
                        </Typography>
                    </Box>

                    {/* TOGGLE BUTTONS */}
                    <Box sx={t.toggleWrapper}>
                        <Button
                            onClick={() => setViewMode('list')}
                            variant={viewMode === 'list' ? 'contained' : 'outlined'}
                            startIcon={<ViewListIcon />}
                            sx={t.toggleButton(viewMode === 'list')}
                        >
                            List
                        </Button>
                        <Button
                            onClick={() => setViewMode('grid')}
                            variant={viewMode === 'grid' ? 'contained' : 'outlined'}
                            startIcon={<GridViewIcon />}
                            sx={t.toggleButton(viewMode === 'grid')}
                        >
                            Grid
                        </Button>
                    </Box>
                </Box>
            </motion.div>

            {/* LIST VIEW */}
            {viewMode === 'list' && (
                <Box>
                    {/* Mobile list */}
                    <Box sx={t.listViewMobile}>
                        {loadingMore && (
                            <Box sx={t.loadingMoreBox}>
                                <Typography>Loading more...</Typography>
                            </Box>
                        )}
                        {sections.map((section, index) => (
                            <Box key={index} sx={t.mobileItem}>
                                <motion.div {...t.motion.mobileImage}>
                                    <Box sx={t.mobileImageBox}>
                                        <Box
                                            component="img"
                                            src={`${process.env.NEXT_PUBLIC_API_URL}/${section.thumbnailImage}`}
                                            alt={section.title}
                                            sx={t.mobileImage}
                                        />
                                    </Box>
                                </motion.div>

                                <motion.div {...t.motion.mobileCard}>
                                    <Box sx={t.mobileCard(section.gradient)}>
                                        <Typography sx={t.mobileCardTitle}>
                                            {section.title}
                                        </Typography>
                                        <Typography sx={t.mobileCardSubtitle}>
                                            {section.subtitle}
                                        </Typography>
                                        <Typography
                                            sx={t.mobileCardDescription}
                                            dangerouslySetInnerHTML={{ __html: section.description }}
                                        />
                                        <Stack direction="row" spacing={2} sx={{ mt: 2, alignSelf: 'flex-start' }}>
                                            <MotionButton
                                                onClick={() => router.push(`/ourofferings/${section.offeringSlug}`)}
                                                {...t.motion.buttonHover}
                                                sx={t.readMoreButton(section.buttonColor)}
                                            >
                                                Read More
                                            </MotionButton>
                                            <MotionButton
                                                {...t.motion.buttonHover}
                                                sx={t.eventsButton}
                                            >
                                                Events
                                            </MotionButton>
                                        </Stack>
                                    </Box>
                                </motion.div>
                            </Box>
                        ))}
                    </Box>

                    {/* Desktop list */}
                    <Box sx={t.listViewDesktop}>
                        {loadingMore && (
                            <Box sx={t.loadingMoreBox}>
                                <Typography>Loading more...</Typography>
                            </Box>
                        )}
                        {sections.map((section, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <Box key={index} sx={t.desktopRow(isEven)}>
                                    <motion.div
                                        {...t.motion.desktopImage(isEven)}
                                        style={{ width: '100%', height: '100%' }}
                                    >
                                        <Box sx={t.desktopImageBox(isEven)}>
                                            <Box
                                                component="img"
                                                src={`${process.env.NEXT_PUBLIC_API_URL}/${section.thumbnailImage}`}
                                                alt={section.title}
                                                sx={t.desktopImage}
                                            />
                                        </Box>
                                    </motion.div>

                                    <motion.div
                                        {...t.motion.desktopCard(isEven)}
                                        style={t.desktopCardWrapper(isEven)}
                                    >
                                        <Box sx={t.desktopCard(section.gradient)}>
                                            <Box sx={t.desktopCardScroll}>
                                                <Typography sx={t.cardTitle}>{section.title}</Typography>
                                                <Typography sx={t.cardSubtitle}>{section.subtitle}</Typography>
                                                <Typography
                                                    sx={t.cardDescription}
                                                    dangerouslySetInnerHTML={{ __html: section.description }}
                                                />
                                            </Box>

                                            <Stack {...t.buttonStack}>
                                                <MotionButton
                                                    onClick={() => router.push(`/ourofferings/${section.offeringSlug}`)}
                                                    {...t.motion.buttonHover}
                                                    sx={t.readMoreButton(section.buttonColor)}
                                                >
                                                    Read More
                                                </MotionButton>
                                                <MotionButton
                                                    {...t.motion.buttonHover}
                                                    sx={t.eventsButton}
                                                >
                                                    Events
                                                </MotionButton>
                                            </Stack>
                                        </Box>
                                    </motion.div>
                                </Box>
                            );
                        })}
                    </Box>

                    <Box ref={loadMoreRef} sx={t.loadMoreSentinel} />
                </Box>
            )}

            {/* GRID VIEW */}
            {viewMode === 'grid' && (
                <motion.div {...t.motion.gridSection}>
                    <Box sx={t.gridWrapper}>
                        <Grid container {...t.gridContainer}>
                            {sections.map((item, index) => (
                                <Grid item key={index} {...t.gridItem}>
                                    <motion.div
                                        {...t.motion.gridItem(index)}
                                        style={{ width: '100%', height: '100%' }}
                                    >
                                        <Card sx={t.gridCard}>
                                            <CardMedia
                                                component="img"
                                                image={`${process.env.NEXT_PUBLIC_API_URL}/${item.thumbnailImage}`}
                                                alt={item.title}
                                                sx={t.gridCardMedia}
                                            />
                                            <Box sx={t.gridCardContent(item.gradient)}>
                                                <Typography sx={t.gridCardTitle}>
                                                    {item.title}
                                                </Typography>
                                                <Typography
                                                    sx={t.gridCardDescription}
                                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                                />
                                                <Stack {...t.gridButtonStack}>
                                                    <MotionButton
                                                        onClick={() => router.push(`/ourofferings/${item.offeringSlug}`)}
                                                        {...t.motion.gridButtonHover}
                                                        sx={t.gridReadMoreButton(item.color)}
                                                    >
                                                        Read More
                                                    </MotionButton>
                                                    <MotionButton
                                                        {...t.motion.gridButtonHover}
                                                        sx={t.gridEventsButton}
                                                    >
                                                        Events
                                                    </MotionButton>
                                                </Stack>
                                            </Box>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>

                        {viewMode === 'grid' && totalPages > 1 && (
                            <Box sx={t.paginationWrapper}>
                                <button
                                    onClick={() => fetchSections(Math.max(page - 1, 0))}
                                    disabled={page === 0}
                                    style={t.paginationNavButton(page === 0)}
                                >
                                    ← Prev
                                </button>

                                <Box sx={t.paginationNumbersWrapper}>
                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => fetchSections(i)}
                                            style={t.paginationPageButton(page === i)}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </Box>

                                <button
                                    onClick={() => fetchSections(Math.min(page + 1, totalPages - 1))}
                                    disabled={page === totalPages - 1}
                                    style={t.paginationNavButton(page === totalPages - 1)}
                                >
                                    Next →
                                </button>
                            </Box>
                        )}
                    </Box>
                </motion.div>
            )}
        </SiteContainer>
    );
}