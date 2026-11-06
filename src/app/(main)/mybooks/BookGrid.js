'use client';

import { useState, useEffect } from 'react';
import {
    Box,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Stack,
    IconButton,
    Chip,
    useMediaQuery,
    useTheme
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { motion } from 'framer-motion';
import axiosInstance from "@/lib/axios";
import { useRouter, useSearchParams } from 'next/navigation';

import SiteContainer from '../../_components/common/SiteContainer';
import Section from '../../_components/common/Section';
import Card from '../../_components/common/Card';
import EventButton from '../../_components/buttons/EventButton';
import OffreingButton from '../../_components/buttons/OffreingButton';

export default function BookGrid() {
    const [books, setBooks] = useState([]);
    const [categories, setCategories] = useState([{ title: "All", _id: "" }]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [showAll, setShowAll] = useState(false);
    const [booksLoading, setBooksLoading] = useState(false);
    const [categoryPage, setCategoryPage] = useState(0);
    const [selectedBook, setSelectedBook] = useState(null);
    const [bookModalOpen, setBookModalOpen] = useState(false);
    const [purchaseModalOpen, setPurchaseModalOpen] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [pendingBook, setPendingBook] = useState(null);
    const [userId, setUserId] = useState(null);
    const [permissionModalOpen, setPermissionModalOpen] = useState(false);
    const [permissionModalBook, setPermissionModalBook] = useState(null);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const itemsPerPage = 3;

    const visibleCategories = isMobile
        ? categories.slice(
            categoryPage * itemsPerPage,
            (categoryPage + 1) * itemsPerPage
        )
        : categories;

    // Get user from localStorage
    useEffect(() => {
        try {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);
                setUserId(parsedUser?._id || parsedUser?.id || null);
            }
        } catch (err) {
            console.error('Error parsing user data:', err);
        }
    }, []);

    useEffect(() => {
        if (!isMobile) setPage(0);
    }, [isMobile]);

    const goToLogin = () => {
        const redirect = window.location.pathname;
        router.push(
            `/LoginPage?redirect=${encodeURIComponent(
                redirect
            )}&action=purchase&bookId=${pendingBook._id}`
        );
    };

    const goToSignup = () => {
        const redirect = window.location.pathname;
        router.push(
            `/signup?redirect=${encodeURIComponent(
                redirect
            )}&action=purchase&bookId=${pendingBook._id}`
        );
    };

    const triggerDownload = async (filePath, title) => {
        if (!filePath) return;
        const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://192.168.1.17:8000';
        const fileUrl = filePath.startsWith('http')
            ? filePath
            : `${baseURL}/${filePath.replace(/^\/+/, '')}`;
        try {
            const response = await fetch(fileUrl);
            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = filePath.split('/').pop() || `${title}.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
        } catch (err) {
            console.error('Download failed:', err);
            window.open(fileUrl, '_blank');
        }
    };

    /* ================= FETCH BOOKS ================= */
    useEffect(() => {
        const fetchBooks = async () => {
            setBooksLoading(true);
            try {
                const res = await axiosInstance.get(
                    "/frontendApis/getAllBooks",
                    {
                        params: showAll
                            ? {
                                category: selectedCategory || ""
                            }
                            : {
                                size: 8,
                                page: page,
                                category: selectedCategory || ""
                            }
                    }
                );
                setBooks(res?.data?.data?.books || []);
                setTotalPages(res?.data?.data?.pagination?.totalPages || 0);
            } catch (error) {
                console.error("API error:", error);
            } finally {
                setBooksLoading(false);
            }
        };
        fetchBooks();
    }, [page, selectedCategory, showAll]);

    // Reset to the paginated first page whenever the category changes
    useEffect(() => {
        setPage(0);
        setShowAll(false);
    }, [selectedCategory]);

    /* ================= FETCH CATEGORIES ================= */
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axiosInstance.get(
                    "/frontendApis/getBookCategoryall"
                );
                setCategories([
                    { title: "All", _id: "" },
                    ...(res?.data || [])
                ]);
            } catch (error) {
                console.error("Category API error:", error);
            }
        };
        fetchCategories();
    }, []);

    /* ================= Auto open the page after login & registration ================= */
    useEffect(() => {
        const action = searchParams.get("action");
        const bookId = searchParams.get("bookId");

        if (
            action !== "purchase" ||
            !bookId ||
            books.length === 0
        )
            return;

        const token = localStorage.getItem("token");

        if (!token) return;

        const book = books.find((b) => b._id === bookId);

        if (!book) return;

        const isBought =
            userId &&
            book.buyers?.includes(userId);

        if (isBought) {
            if (book.allowDownload) {
                triggerDownload(book.document, book.title);
            } else {
                router.replace(`/mybooks/read/${book._id}`);
            }

            window.history.replaceState(
                {},
                "",
                window.location.pathname
            );

            return;
        }

        setPermissionModalBook(book);
        setPermissionModalOpen(true);

        window.history.replaceState(
            {},
            "",
            window.location.pathname
        );
    }, [books, searchParams, userId, router]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
        >
            <Section>
                <SiteContainer>
                    {/* ================= CATEGORY FILTER ================= */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <Stack
                            direction="row"
                            spacing={1.25}
                            alignItems="center"
                            justifyContent="center"
                            mb={{ xs: 3, md: 5 }}
                            sx={{ width: '100%', px: { xs: 2, sm: 3, md: 4 } }}
                        >
                            <IconButton
                                size="small"
                                onClick={() => setCategoryPage((p) => Math.max(p - 1, 0))}
                                disabled={!isMobile || categoryPage === 0}
                            >
                                <ChevronLeftIcon />
                            </IconButton>
                            <Stack direction="row" spacing={1} flexWrap="nowrap">
                                {(isMobile
                                    ? [categories[categoryPage]]
                                    : visibleCategories
                                ).map((item, index) => {
                                    const label = item?.title || "All";
                                    const id = item?._id || "";
                                    const isSelected = selectedCategory === id;
                                    return (
                                        <motion.div
                                            key={id || "all"}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                        >
                                            <Chip
                                                label={label}
                                                onClick={() => {
                                                    setSelectedCategory(id || "");
                                                    setPage(0);
                                                }}
                                                color={isSelected ? 'primary' : 'default'}
                                                variant={isSelected ? 'filled' : 'outlined'}
                                                sx={{
                                                    fontSize: { xs: 12, sm: 13, md: 14 },
                                                    fontWeight: 500,
                                                    px: { xs: 0.5, sm: 1, md: 1.5 },
                                                    py: { xs: 2.5, sm: 2.5 },
                                                    flexShrink: 0,
                                                    cursor: 'pointer',
                                                    borderRadius: '10px',
                                                    transition: 'all 0.25s ease',
                                                    ...(isSelected
                                                        ? {
                                                            background:
                                                                "linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%) !important",
                                                            color: "#fff !important",
                                                            border: "2px solid #fff",
                                                            boxShadow:
                                                                "0px 2px 8px rgba(119, 119, 119, 0.35)",
                                                        }
                                                        : {
                                                            background: "#F9FAFB",
                                                            border: "1px solid #E5E7EB",
                                                            color: "#555",
                                                            "&:hover": {
                                                                background:
                                                                    "linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%) !important",
                                                                border: "2px solid #fff",
                                                                color: "#E5E7EB",
                                                            },
                                                        }),
                                                }}
                                            />
                                        </motion.div>
                                    );
                                })}
                            </Stack>
                            <IconButton
                                size="small"
                                onClick={() =>
                                    setCategoryPage((p) =>
                                        Math.min(p + 1, categories.length - 1)
                                    )
                                }
                                disabled={!isMobile || categoryPage === categories.length - 1}
                            >
                                <ChevronRightIcon />
                            </IconButton>
                        </Stack>
                    </motion.div>

                    {/* ================= BOOK CARDS ================= */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: { xs: 2, sm: 2, md: 2.5 },
                        }}
                    >
                        {books.map((book, index) => (
                            <motion.div
                                key={book._id}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                style={{ display: 'flex', justifyContent: 'center' }}
                            >
                                <Card
                                    className="card"
                                    sx={{
                                        width: "100%",
                                        flexBasis: {
                                            xs: '280px',
                                            sm: '320px',
                                            md: '420px',
                                            lg: '520px',
                                        },
                                        maxWidth: {
                                            xs: 380,
                                            sm: 320,
                                            md: 250,
                                            lg: 320,
                                        },
                                        minHeight: {
                                            xs: 320,
                                            sm: 340,
                                            md: 360,
                                            lg: 380,
                                        },
                                        borderRadius: { xs: 2, sm: 2, md: 2.5 },
                                        boxShadow: {
                                            xs: "0 4px 12px rgba(0,0,0,0.08)",
                                            md: "0 6px 16px rgba(0,0,0,0.08)",
                                        },
                                        p: { xs: 1.5, sm: 1.5, md: 2 },
                                        display: "flex",
                                        flexDirection: "column",
                                        overflow: "hidden",
                                        "&:hover .card-image": {
                                            transform: "scale(1.05)",
                                        },
                                    }}
                                >
                                    {/* IMAGE */}
                                    <Box
                                        className="image-wrapper"
                                        sx={{
                                            position: "relative",
                                            width: "100%",
                                            height: { xs: 150, sm: 210, md: 280 },
                                            borderRadius: { xs: 1.5, sm: 1.5, md: 2 },
                                            transition: "all 0.4s ease",
                                            mb: { xs: 1.5, sm: 1.5, md: 2 },
                                            borderRadius: 2,
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            className="card-image"
                                            image={
                                                book.image
                                                    ? `${process.env.NEXT_PUBLIC_API_URL}/${book.image}`
                                                    : "/Book.png"
                                            }
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                borderRadius: { xs: 1.5, sm: 1.5, md: 2 },
                                                transition: "transform 0.4s ease",
                                                transformOrigin: "center",
                                                ".card:hover &": {
                                                    transform: "scale(1.08)",
                                                    borderRadius: { xs: 1.5, sm: 1.5, md: 2 },
                                                },
                                            }}
                                        />
                                    </Box>

                                    {/* CONTENT */}
                                    <CardContent
                                        sx={{
                                            p: 0,
                                            pb: "0 !important",
                                            display: "flex",
                                            flexDirection: "column",
                                            "&:last-child": {
                                                pb: "0 !important",
                                            },
                                        }}
                                    >
                                        {/* ACCESS TAG */}
                                        <Box sx={{ display: 'flex', mb: 1 }}>
                                            <Box
                                                sx={{
                                                    px: 1,
                                                    py: 0.3,
                                                    borderRadius: '4px',
                                                    fontSize: '10px',
                                                    fontWeight: 600,
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px',
                                                    backgroundColor: book.allowDownload ? '#E6FDF9' : '#FFF1F2',
                                                    color: book.allowDownload ? '#0A847E' : '#E11D48',
                                                }}
                                            >
                                                {book.allowDownload ? '📥 Downloadable' : '👁️ Readable Only'}
                                            </Box>
                                        </Box>

                                        {/* TITLE */}
                                        <Typography
                                            sx={{
                                                fontFamily: '"Red Hat Display", sans-serif',
                                                fontWeight: 600,
                                                fontSize: {
                                                    xs: "16px",
                                                    sm: "18px",
                                                    md: "20px",
                                                    lg: "22px",
                                                },
                                                mb: 1,
                                            }}
                                        >
                                            {book.title}
                                        </Typography>

                                        {/* DESCRIPTION */}
                                        <Box
                                            dangerouslySetInnerHTML={{ __html: book.description }}
                                            sx={{
                                                fontFamily: '"Red Hat Display", sans-serif',
                                                fontWeight: 400,
                                                fontSize: {
                                                    xs: "13px",
                                                    sm: "14px",
                                                    md: "15px",
                                                    lg: "16px",
                                                },
                                                lineHeight: {
                                                    xs: 1.4,
                                                    sm: 1.6,
                                                    md: "22.8px",
                                                },
                                                color: "text.secondary",
                                                mb: 2,
                                                flexGrow: 1,
                                                display: "-webkit-box",
                                                WebkitLineClamp: 3,
                                                WebkitBoxOrient: "vertical",
                                                overflow: "hidden",
                                                "& p": {
                                                    margin: 0,
                                                },
                                            }}
                                        />

                                        {/* BUTTONS */}
                                        <Stack
                                            direction="row"
                                            spacing={{ xs: 0.5, sm: 0.5, md: 0.5, lg: 0.75 }}
                                            sx={{
                                                mt: "auto",
                                                width: "100%",
                                                minWidth: 0,
                                            }}
                                        >
                                            {/* READ MORE - Using EventButton */}
                                            <EventButton
                                                onClick={() => {
                                                    setSelectedBook(book);
                                                    setBookModalOpen(true);
                                                }}
                                                sx={{
                                                    flex: "1 1 0",
                                                    minWidth: 0,
                                                    fontSize: {
                                                        xs: "11px",
                                                        sm: "12px",
                                                        md: "11px",
                                                        lg: "14px",
                                                    },
                                                    px: { xs: 0.75, sm: 1, md: 0.75, lg: 1.5 },
                                                    py: { xs: 1, sm: 1.3, md: 1.2, lg: 1.8 },
                                                    whiteSpace: "nowrap",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    color: "#000",
                                                    background:
                                                        "linear-gradient(106.27deg, rgba(255,255,255,0.26) 33.98%, rgba(255,255,255,0.05) 105.14%)",
                                                    backdropFilter: "blur(10px)",
                                                    border: "none",
                                                    "&::before": {
                                                        content: '""',
                                                        position: "absolute",
                                                        inset: 0,
                                                        borderRadius: "10px",
                                                        padding: "1.5px",
                                                        background:
                                                            "linear-gradient(106deg, #FFFFFF 34%, rgba(255,255,255,0.1) 105%)",
                                                        WebkitMask:
                                                            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                        WebkitMaskComposite: "xor",
                                                        maskComposite: "exclude",
                                                        pointerEvents: "none",
                                                    },
                                                    "&:hover::before": {
                                                        background:
                                                            "linear-gradient(98.48deg,#95C4FF 0%,#087EDF 100%)",
                                                    },
                                                    "&:hover": {
                                                        boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
                                                    },
                                                }}
                                            >
                                                Read More
                                            </EventButton>

                                            {/* DYNAMIC ACTION BUTTON - Using MUI Button with Blue Gradient */}
                                            {(() => {
                                                const isBought = userId && book.buyers && book.buyers.includes(userId);
                                                const links = (() => {
                                                    try {
                                                        const raw = book.socialmedialinks?.[0];
                                                        const parsed = raw
                                                            ? (typeof raw === "string" ? JSON.parse(raw) : raw)
                                                            : [];
                                                        return parsed.filter(
                                                            (link) =>
                                                                link &&
                                                                (link.platform?.trim() || link.url?.trim())
                                                        );
                                                    } catch {
                                                        return [];
                                                    }
                                                })();

                                                let buttonText = "Book Now";
                                                let onClickAction = () => {
                                                    const token = localStorage.getItem("token");
                                                    if (!token) {
                                                        setPendingBook(book);
                                                        setLoginModalOpen(true);
                                                        return;
                                                    }
                                                    setPermissionModalBook(book);
                                                    setPermissionModalOpen(true);
                                                };

                                                if (isBought) {
                                                    if (book.allowDownload) {
                                                        buttonText = "Download";
                                                        onClickAction = () => triggerDownload(book.document, book.title);
                                                    } else {
                                                        buttonText = "Read Now";
                                                        onClickAction = () => router.push(`/mybooks/read/${book._id}`);
                                                    }
                                                } else if (links.length > 0) {
                                                    buttonText = links[0].platform || "Buy Now";
                                                    onClickAction = () => window.open(links[0].url, '_blank');
                                                }

                                                return (
                                                    <Button
                                                        variant="contained"
                                                        size="small"
                                                        onClick={onClickAction}
                                                        sx={{
                                                            fontFamily: '"Red Hat Display", sans-serif',
                                                            fontWeight: 500,
                                                            fontSize: {
                                                                xs: "11px",
                                                                sm: "12px",
                                                                md: "11px",
                                                                lg: "14px",
                                                            },
                                                            lineHeight: "100%",
                                                            letterSpacing: "-0.01em",
                                                            textTransform: "none",
                                                            borderRadius: "10px",
                                                            px: { xs: 0.75, sm: 1, md: 0.75, lg: 1.5 },
                                                            py: { xs: 1, sm: 1.3, md: 1.2, lg: 1.8 },
                                                            flex: "1 1 0",
                                                            minWidth: 0,
                                                            whiteSpace: "nowrap",
                                                            overflow: "hidden",
                                                            textOverflow: "ellipsis",
                                                            color: "#fff",
                                                            background: "linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)",
                                                            position: "relative",
                                                            border: "none",
                                                            "&::before": {
                                                                content: '""',
                                                                position: "absolute",
                                                                inset: 0,
                                                                borderRadius: "10px",
                                                                padding: "1.5px",
                                                                background: "linear-gradient(106deg,#fff 33%,rgba(255,255,255,0.1) 100%)",
                                                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                                WebkitMaskComposite: "xor",
                                                                maskComposite: "exclude",
                                                                pointerEvents: "none",
                                                            },
                                                            "&:hover": {
                                                                boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                                                                background: "linear-gradient(98.48deg, #85b4ef 0%, #076ecf 100%)",
                                                            },
                                                        }}
                                                    >
                                                        {buttonText}
                                                    </Button>
                                                );
                                            })()}
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </Box>

                    {/* ================= NAV ARROWS + VIEW ALL ================= */}
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        spacing={1.5}
                        sx={{ mt: { xs: 3, md: 4 } }}
                    >
                        {!showAll && (
                            <>
                                <IconButton
                                    size="small"
                                    onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                                    disabled={page === 0}
                                    sx={{
                                        width: 30,
                                        height: 30,
                                        border: '1px solid #FFD6D6',
                                        color: '#FF9A9A',
                                        bgcolor: '#fff',
                                        '&:hover': { bgcolor: '#FFF5F5' },
                                        '&.Mui-disabled': {
                                            color: '#FFD6D6',
                                            border: '1px solid #FFEDED',
                                        },
                                    }}
                                >
                                    <ChevronLeftIcon sx={{ fontSize: 18 }} />
                                </IconButton>

                                <IconButton
                                    size="small"
                                    onClick={() => setPage((prev) => Math.min(prev + 1, Math.max(totalPages - 1, 0)))}
                                    disabled={page === totalPages - 1}
                                    sx={{
                                        width: 30,
                                        height: 30,
                                        color: '#fff',
                                        background: 'linear-gradient(135deg, #FF9A8A 0%, #FF5A5A 100%)',
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #FF8A7A 0%, #FF4A4A 100%)',
                                        },
                                        '&.Mui-disabled': {
                                            color: '#fff',
                                            background: '#FFD6D6',
                                        },
                                    }}
                                >
                                    <ChevronRightIcon sx={{ fontSize: 18 }} />
                                </IconButton>
                            </>
                        )}

                        <Typography
                            component="span"
                            onClick={() => {
                                if (showAll) {
                                    setShowAll(false);
                                    setPage(0);
                                } else {
                                    setShowAll(true);
                                }
                            }}
                            sx={{
                                fontSize: 13,
                                fontWeight: 500,
                                color: '#087EDF',
                                textDecoration: 'underline',
                                cursor: 'pointer',
                                '&:hover': { color: '#065FA8' },
                            }}
                        >
                            {booksLoading && showAll ? 'Loading...' : showAll ? 'Show less' : 'View All'}
                        </Typography>
                    </Stack>

                </SiteContainer>
            </Section>

            {/* ================= BOOK DETAIL MODAL ================= */}
            {bookModalOpen && selectedBook && (
                <Box
                    onClick={() => setBookModalOpen(false)}
                    sx={{
                        position: 'fixed', inset: 0,
                        bgcolor: 'rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(6px)',
                        zIndex: 9999,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        p: { xs: 2, md: 4 },
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        style={{ width: '100%', maxWidth: 540 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Box sx={{
                            bgcolor: '#fff',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 32px 80px rgba(0,0,0,0.18)',
                        }}>
                            {/* Header */}
                            <Box sx={{
                                background: 'linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)',
                                px: 3, py: 2,
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            }}>
                                <Typography fontSize={14} fontWeight={600} color="#fff" letterSpacing={0.3}>
                                    📖 Book Details
                                </Typography>
                                <IconButton
                                    onClick={() => setBookModalOpen(false)}
                                    size="small"
                                    sx={{
                                        color: '#fff', bgcolor: 'rgba(0,0,0,0.15)',
                                        borderRadius: '8px', p: 0.5,
                                        '&:hover': { bgcolor: 'rgba(0,0,0,0.3)' },
                                    }}
                                >
                                    ✕
                                </IconButton>
                            </Box>

                            {/* Body */}
                            <Box sx={{ p: 3 }}>
                                {/* Book Image + Title */}
                                <Box sx={{ display: 'flex', gap: 2.5, mb: 2.5, alignItems: 'flex-start' }}>
                                    <Box
                                        component="img"
                                        src={selectedBook.image
                                            ? `${process.env.NEXT_PUBLIC_API_URL}/${selectedBook.image}`
                                            : '/Book.png'}
                                        alt={selectedBook.title}
                                        sx={{
                                            width: 90, height: 120,
                                            objectFit: 'cover',
                                            borderRadius: '10px',
                                            boxShadow: '0 4px 16px rgba(8,126,223,0.2)',
                                            flexShrink: 0,
                                        }}
                                    />
                                    <Box>
                                        <Typography fontSize={17} fontWeight={700} color="#1E293B" mb={0.5}>
                                            {selectedBook.title}
                                        </Typography>
                                        {selectedBook.author && (
                                            <Typography fontSize={12} color="#64748B" mb={1}>
                                                by {selectedBook.author}
                                            </Typography>
                                        )}
                                        <Box
                                            sx={{
                                                display: 'inline-block',
                                                px: 1.5, py: 0.4,
                                                bgcolor: '#EFF6FF',
                                                borderRadius: '8px',
                                                fontSize: 11,
                                                color: '#087EDF',
                                                fontWeight: 600,
                                            }}
                                        >
                                            Available Now
                                        </Box>
                                    </Box>
                                </Box>

                                {/* Divider */}
                                <Box sx={{ height: '1px', bgcolor: '#F1F5F9', mb: 2.5 }} />

                                {/* Description */}
                                <Typography fontSize={12.5} fontWeight={600} color="#94A3B8" letterSpacing={0.5} mb={1} sx={{ textTransform: 'uppercase' }}>
                                    About this book
                                </Typography>
                                <Box
                                    dangerouslySetInnerHTML={{ __html: selectedBook.description }}
                                    sx={{
                                        fontSize: 13.5,
                                        color: '#475569',
                                        lineHeight: 1.75,
                                        mb: 3,
                                        '& p': { margin: 0 },
                                        maxHeight: 160,
                                        overflowY: 'auto',
                                        pr: 0.5,
                                        '&::-webkit-scrollbar': { width: 4 },
                                        '&::-webkit-scrollbar-track': { bgcolor: '#F8FAFC', borderRadius: 4 },
                                        '&::-webkit-scrollbar-thumb': { bgcolor: '#CBD5E1', borderRadius: 4 },
                                    }}
                                />

                                {/* Action Buttons */}
                                <Stack direction="row" spacing={1.5}>
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        onClick={() => setBookModalOpen(false)}
                                        sx={{
                                            borderRadius: '12px',
                                            textTransform: 'none',
                                            fontSize: 13,
                                            fontWeight: 500,
                                            borderColor: '#E2E8F0',
                                            color: '#64748B',
                                            py: 1.2,
                                            '&:hover': { borderColor: '#CBD5E1', bgcolor: '#F8FAFC' },
                                        }}
                                    >
                                        Close
                                    </Button>
                                    {(() => {
                                        const isBought = userId && selectedBook.buyers && selectedBook.buyers.includes(userId);
                                        const links = (() => {
                                            try {
                                                const raw = selectedBook.socialmedialinks?.[0];
                                                return raw ? (typeof raw === 'string' ? JSON.parse(raw) : raw) : [];
                                            } catch {
                                                return [];
                                            }
                                        })();

                                        let buttonText = "Purchase Now →";
                                        let onClickAction = () => {
                                            setBookModalOpen(false);
                                            if (links.length > 0) {
                                                setPurchaseModalOpen(true);
                                            } else {
                                                setPermissionModalBook(selectedBook);
                                                setPermissionModalOpen(true);
                                            }
                                        };

                                        if (isBought) {
                                            if (selectedBook.allowDownload) {
                                                buttonText = "Download Book";
                                                onClickAction = () => {
                                                    setBookModalOpen(false);
                                                    triggerDownload(selectedBook.document, selectedBook.title);
                                                };
                                            } else {
                                                buttonText = "Read Book Now";
                                                onClickAction = () => {
                                                    setBookModalOpen(false);
                                                    router.push(`/mybooks/read/${selectedBook._id}`);
                                                };
                                            }
                                        } else if (links.length > 0) {
                                            buttonText = `Buy on ${links[0].platform || "External Store"}`;
                                            onClickAction = () => {
                                                setBookModalOpen(false);
                                                window.open(links[0].url, '_blank');
                                            };
                                        }

                                        return (
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                onClick={onClickAction}
                                                sx={{
                                                    borderRadius: '12px',
                                                    textTransform: 'none',
                                                    fontSize: 13,
                                                    fontWeight: 600,
                                                    py: 1.2,
                                                    background: 'linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)',
                                                    boxShadow: '0 4px 14px rgba(8,126,223,0.35)',
                                                    '&:hover': { 
                                                        opacity: 0.92, 
                                                        boxShadow: '0 6px 18px rgba(8,126,223,0.4)',
                                                        background: 'linear-gradient(98.48deg, #85b4ef 0%, #076ecf 100%)',
                                                    },
                                                }}
                                            >
                                                {buttonText}
                                            </Button>
                                        );
                                    })()}
                                </Stack>
                            </Box>
                        </Box>
                    </motion.div>
                </Box>
            )}

            {/* ================= PURCHASE MODAL ================= */}
            {purchaseModalOpen && selectedBook && (
                <Box
                    onClick={() => setPurchaseModalOpen(false)}
                    sx={{
                        position: 'fixed', inset: 0,
                        bgcolor: 'rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(6px)',
                        zIndex: 9999,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        p: { xs: 2, md: 4 },
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        style={{ width: '100%', maxWidth: 420 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Box sx={{
                            bgcolor: '#fff',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 32px 80px rgba(0,0,0,0.18)',
                        }}>
                            {/* Header */}
                            <Box sx={{
                                background: 'linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)',
                                px: 3, py: 2,
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            }}>
                                <Typography fontSize={14} fontWeight={600} color="#fff">
                                    🛒 Purchase Book
                                </Typography>
                                <IconButton
                                    onClick={() => setPurchaseModalOpen(false)}
                                    size="small"
                                    sx={{
                                        color: '#fff', bgcolor: 'rgba(0,0,0,0.15)',
                                        borderRadius: '8px', p: 0.5,
                                        '&:hover': { bgcolor: 'rgba(0,0,0,0.3)' },
                                    }}
                                >
                                    ✕
                                </IconButton>
                            </Box>

                            <Box sx={{ p: 3 }}>
                                {/* Book mini info */}
                                <Box sx={{
                                    display: 'flex', gap: 2, alignItems: 'center',
                                    bgcolor: '#F8FAFF', borderRadius: '12px', p: 2, mb: 3,
                                }}>
                                    <Box
                                        component="img"
                                        src={selectedBook.image
                                            ? `${process.env.NEXT_PUBLIC_API_URL}/${selectedBook.image}`
                                            : '/Book.png'}
                                        sx={{ width: 48, height: 64, objectFit: 'cover', borderRadius: '6px' }}
                                    />
                                    <Box>
                                        <Typography fontSize={14} fontWeight={700} color="#1E293B">
                                            {selectedBook.title}
                                        </Typography>
                                        <Typography fontSize={12} color="#087EDF" fontWeight={500} mt={0.3}>
                                            Ready to purchase
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Order Summary */}
                                <Box sx={{
                                    bgcolor: '#F8FAFF',
                                    borderRadius: '14px',
                                    p: 2.5,
                                    mb: 2.5,
                                    border: '1px solid #DBEAFE',
                                }}>
                                    <Typography fontSize={12} fontWeight={600} color="#94A3B8" letterSpacing={0.5} mb={2} sx={{ textTransform: 'uppercase' }}>
                                        Order Summary
                                    </Typography>

                                    <Stack spacing={1.2}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Typography fontSize={13} color="#64748B">Book</Typography>
                                            <Typography fontSize={13} fontWeight={600} color="#1E293B">
                                                {selectedBook.title}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ height: '1px', bgcolor: '#E2E8F0' }} />
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Typography fontSize={13} color="#64748B">Format</Typography>
                                            <Box sx={{
                                                px: 1.5, py: 0.3, bgcolor: '#EFF6FF',
                                                borderRadius: '6px', fontSize: 11,
                                                color: '#087EDF', fontWeight: 600,
                                            }}>
                                                Digital Copy
                                            </Box>
                                        </Box>
                                    </Stack>
                                </Box>

                                {/* Payment Options */}
                                <Typography fontSize={12} fontWeight={600} color="#94A3B8" letterSpacing={0.5} mb={1.5} sx={{ textTransform: 'uppercase' }}>
                                    Complete your purchase
                                </Typography>

                                <Stack spacing={1.5} mb={2.5}>
                                    {(() => {
                                        try {
                                            const links = JSON.parse(selectedBook.socialmedialinks?.[0] || '[]');
                                            return links.map((link, i) => (
                                                <Box
                                                    key={i}
                                                    onClick={() => window.open(link.url, '_blank')}
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        p: 2,
                                                        borderRadius: '14px',
                                                        border: '1.5px solid #DBEAFE',
                                                        bgcolor: '#fff',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.2s',
                                                        '&:hover': {
                                                            borderColor: '#087EDF',
                                                            bgcolor: '#F0F9FF',
                                                            transform: 'translateY(-1px)',
                                                            boxShadow: '0 4px 14px rgba(8,126,223,0.12)',
                                                        },
                                                    }}
                                                >
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                                        <Box sx={{
                                                            width: 36, height: 36,
                                                            borderRadius: '10px',
                                                            background: 'linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)',
                                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                            fontSize: 16,
                                                            flexShrink: 0,
                                                        }}>
                                                            🛒
                                                        </Box>
                                                        <Box>
                                                            <Typography fontSize={13} fontWeight={600} color="#1E293B">
                                                                {link.platform || link.name || `Buy Now`}
                                                            </Typography>
                                                            <Typography fontSize={11} color="#94A3B8">
                                                                Secure checkout
                                                            </Typography>
                                                        </Box>
                                                    </Box>

                                                    <Box sx={{
                                                        display: 'flex', alignItems: 'center', gap: 0.5,
                                                        color: '#087EDF', fontSize: 12, fontWeight: 600,
                                                    }}>
                                                        Pay
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                            <polyline points="9 18 15 12 9 6" />
                                                        </svg>
                                                    </Box>
                                                </Box>
                                            ));
                                        } catch {
                                            return (
                                                <Typography fontSize={13} color="#94A3B8" textAlign="center" py={2}>
                                                    No payment options available.
                                                </Typography>
                                            );
                                        }
                                    })()}
                                </Stack>

                                {/* Secure badge */}
                                <Box sx={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    gap: 1, mb: 2,
                                }}>
                                    <Typography fontSize={11} color="#94A3B8">
                                        🔒 Secure & encrypted checkout
                                    </Typography>
                                </Box>

                                <Button
                                    fullWidth
                                    onClick={() => setPurchaseModalOpen(false)}
                                    sx={{
                                        borderRadius: '12px', textTransform: 'none',
                                        fontSize: 13, color: '#94A3B8', py: 1,
                                        '&:hover': { bgcolor: '#F8FAFC' },
                                    }}
                                >
                                    Maybe later
                                </Button>
                            </Box>
                        </Box>
                    </motion.div>
                </Box>
            )}

            {/* ================= LOGIN REQUIRED MODAL ================= */}
            {loginModalOpen && (
                <Box
                    onClick={() => setLoginModalOpen(false)}
                    sx={{
                        position: "fixed",
                        inset: 0,
                        bgcolor: "rgba(0,0,0,0.5)",
                        backdropFilter: "blur(6px)",
                        zIndex: 9999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        p: { xs: 2, md: 4 },
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{ width: "100%", maxWidth: 420 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Box
                            sx={{
                                bgcolor: "#fff",
                                borderRadius: "20px",
                                overflow: "hidden",
                                boxShadow: "0 32px 80px rgba(0,0,0,0.18)",
                            }}
                        >
                            {/* Header */}
                            <Box
                                sx={{
                                    background:
                                        "linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)",
                                    px: 3,
                                    py: 2,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography
                                    fontSize={14}
                                    fontWeight={600}
                                    color="#fff"
                                >
                                    🔒 Authentication Required
                                </Typography>

                                <IconButton
                                    onClick={() => setLoginModalOpen(false)}
                                    size="small"
                                    sx={{
                                        color: "#fff",
                                        bgcolor: "rgba(0,0,0,0.15)",
                                        borderRadius: "8px",
                                        p: 0.5,
                                        "&:hover": {
                                            bgcolor: "rgba(0,0,0,0.3)",
                                        },
                                    }}
                                >
                                    ✕
                                </IconButton>
                            </Box>

                            {/* Body */}
                            <Box sx={{ p: 3 }}>
                                {/* Icon */}
                                <Box
                                    sx={{
                                        width: 72,
                                        height: 72,
                                        borderRadius: "50%",
                                        mx: "auto",
                                        mb: 2.5,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background:
                                            "linear-gradient(98.48deg,#95C4FF 0%,#087EDF 100%)",
                                        color: "#fff",
                                        fontSize: 34,
                                        boxShadow:
                                            "0 8px 20px rgba(8,126,223,0.25)",
                                    }}
                                >
                                    🔐
                                </Box>

                                <Typography
                                    align="center"
                                    fontSize={18}
                                    fontWeight={700}
                                    color="#1E293B"
                                    mb={1}
                                >
                                    Login Required
                                </Typography>

                                <Typography
                                    align="center"
                                    fontSize={13}
                                    color="#64748B"
                                    lineHeight={1.7}
                                    mb={3}
                                >
                                    Please login or create an account
                                    to purchase, download, or access
                                    your books securely.
                                </Typography>

                                {/* Benefits */}
                                <Box
                                    sx={{
                                        bgcolor: "#F8FAFF",
                                        borderRadius: "14px",
                                        border: "1px solid #DBEAFE",
                                        p: 2,
                                        mb: 3,
                                    }}
                                >
                                    <Typography
                                        fontSize={12}
                                        color="#087EDF"
                                        fontWeight={600}
                                        mb={1}
                                    >
                                        After signing in you'll be able to:
                                    </Typography>

                                    <Stack spacing={0.8}>
                                        <Typography fontSize={12} color="#475569">
                                            ✓ Purchase premium books
                                        </Typography>

                                        <Typography fontSize={12} color="#475569">
                                            ✓ Access your purchased library
                                        </Typography>

                                        <Typography fontSize={12} color="#475569">
                                            ✓ Download eligible books
                                        </Typography>
                                    </Stack>
                                </Box>

                                {/* Buttons */}
                                <Stack spacing={1.5}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        onClick={goToLogin}
                                        sx={{
                                            borderRadius: "12px",
                                            textTransform: "none",
                                            fontWeight: 600,
                                            py: 1.3,
                                            background:
                                                "linear-gradient(98.48deg,#95C4FF 0%,#087EDF 100%)",
                                            boxShadow:
                                                "0 4px 14px rgba(8,126,223,0.35)",
                                        }}
                                    >
                                        Login
                                    </Button>

                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        onClick={goToSignup}
                                        sx={{
                                            borderRadius: "12px",
                                            textTransform: "none",
                                            py: 1.3,
                                            borderColor: "#DBEAFE",
                                            color: "#087EDF",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Create Account
                                    </Button>

                                    <Button
                                        fullWidth
                                        onClick={() =>
                                            setLoginModalOpen(false)
                                        }
                                        sx={{
                                            borderRadius: "12px",
                                            textTransform: "none",
                                            color: "#94A3B8",
                                            py: 1,
                                        }}
                                    >
                                        Maybe Later
                                    </Button>
                                </Stack>
                            </Box>
                        </Box>
                    </motion.div>
                </Box>
            )}

            {/* ================= PURCHASE CONFIRMATION MODAL ================= */}
            {permissionModalOpen && permissionModalBook && (
                <Box
                    onClick={() => setPermissionModalOpen(false)}
                    sx={{
                        position: 'fixed', inset: 0,
                        bgcolor: 'rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(6px)',
                        zIndex: 9999,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        p: { xs: 2, md: 4 },
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        style={{ width: '100%', maxWidth: 450 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Box sx={{
                            bgcolor: '#fff',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 32px 80px rgba(0,0,0,0.18)',
                        }}>
                            {/* Header */}
                            <Box sx={{
                                background: 'linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)',
                                px: 3, py: 2,
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            }}>
                                <Typography fontSize={14} fontWeight={600} color="#fff">
                                    📚 Ready to Purchase?
                                </Typography>
                                <IconButton
                                    onClick={() => setPermissionModalOpen(false)}
                                    size="small"
                                    sx={{
                                        color: '#fff', bgcolor: 'rgba(0,0,0,0.15)',
                                        borderRadius: '8px', p: 0.5,
                                        '&:hover': { bgcolor: 'rgba(0,0,0,0.3)' },
                                    }}
                                >
                                    ✕
                                </IconButton>
                            </Box>

                            {/* Body */}
                            <Box sx={{ p: 3 }}>
                                <Typography
                                    fontSize={18}
                                    fontWeight={700}
                                    color="#1E293B"
                                    mb={1}
                                >
                                    {permissionModalBook.title}
                                </Typography>

                                <Typography
                                    fontSize={13}
                                    color="#64748B"
                                    mb={3}
                                >
                                    You're just one step away from accessing this book.
                                </Typography>

                                <Typography fontSize={14} color="#475569" lineHeight={1.6} mb={3}>
                                    {permissionModalBook.allowDownload
                                        ? "You're about to purchase this digital book. Once your payment is confirmed, your download will be available immediately in your local library."
                                        : "You're about to purchase lifetime access to this digital book. After payment, you can read it anytime from your personal library using your account."}
                                </Typography>

                                {/* Action Buttons */}
                                <Stack direction="row" spacing={2}>
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        onClick={() => setPermissionModalOpen(false)}
                                        sx={{
                                            borderRadius: '12px',
                                            textTransform: 'none',
                                            fontSize: 13,
                                            fontWeight: 500,
                                            borderColor: '#E2E8F0',
                                            color: '#64748B',
                                            py: 1.2,
                                            '&:hover': { borderColor: '#CBD5E1', bgcolor: '#F8FAFC' },
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        onClick={() => {
                                            setPermissionModalOpen(false);
                                            router.push(`/mybooks/payment/${permissionModalBook._id}`);
                                        }}
                                        sx={{
                                            borderRadius: '12px',
                                            textTransform: 'none',
                                            fontSize: 13,
                                            fontWeight: 600,
                                            py: 1.2,
                                            background: 'linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)',
                                            boxShadow: '0 4px 14px rgba(8,126,223,0.35)',
                                            '&:hover': { 
                                                opacity: 0.92, 
                                                boxShadow: '0 6px 18px rgba(8,126,223,0.4)',
                                                background: 'linear-gradient(98.48deg, #85b4ef 0%, #076ecf 100%)',
                                            },
                                        }}
                                    >
                                        Confirm & Proceed
                                    </Button>
                                </Stack>
                            </Box>
                        </Box>
                    </motion.div>
                </Box>
            )}
        </motion.div>
    );
}