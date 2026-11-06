'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    Box,
    Typography,
    IconButton,
    CircularProgress,
    Button,
    Container,
    Paper,
    Stack
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LockIcon from '@mui/icons-material/Lock';
import axiosInstance from '@/lib/axios';
import PdfViewer from '@/app/_components/pdf/PdfViewer';




export default function BookReader({ bookId }) {
    const router = useRouter();

    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);


    const [numPages, setNumPages] = useState();

    const [pageNumber, setPageNumber] = useState(1);

    const [scale, setScale] = useState(1.2);

    const onDocumentLoadSuccess = ({ numPages }) => {

        setNumPages(numPages);

    };

    // ── Fetch book details and authorize user ─────────────────────────────────
    useEffect(() => {
        if (!bookId) return;

        const authorizeAndFetch = async () => {
            try {
                // 1. Get logged in user ID
                let userId = null;
                const storedUser = localStorage.getItem('user');
                if (storedUser) {
                    const parsedUser = JSON.parse(storedUser);
                    userId = parsedUser?._id || parsedUser?.id;
                }

                if (!userId) {
                    setIsAuthorized(false);
                    setLoading(false);
                    return;
                }

                // 2. Fetch book details
                const res = await axiosInstance.get(`/frontendApis/getBookbyid/${bookId}`);
                const bookData = res.data?.data || res.data;

                console.log(bookData, "lllldata");

                if (bookData) {
                    setBook(bookData);
                    // 3. Check if user is in buyers list or if it's a public/free book
                    const isBuyer = bookData.buyers && bookData.buyers.includes(userId);
                    const isOwner = bookData.userId === userId; // creator

                    if (isBuyer || isOwner || bookData.price === 0) {
                        setIsAuthorized(true);
                    } else {
                        setIsAuthorized(false);
                    }
                }
            } catch (err) {
                console.error('Error loading book reader:', err);
                setIsAuthorized(false);
            } finally {
                setLoading(false);
            }
        };

        authorizeAndFetch();
    }, [bookId]);

    // ── Toggle Fullscreen ─────────────────────────────────────────────────────
    const toggleFullscreen = () => {
        const readerElement = document.getElementById('book-reader-container');
        if (!readerElement) return;

        if (!document.fullscreenElement) {
            readerElement.requestFullscreen()
                .then(() => setIsFullscreen(true))
                .catch(err => console.error('Error enabling fullscreen:', err));
        } else {
            document.exitFullscreen()
                .then(() => setIsFullscreen(false));
        }
    };

    // Listen for escape key fullscreen exits
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', gap: 2, bgcolor: '#F8FAFC' }}>
                <CircularProgress sx={{ color: '#087EDF' }} />
                <Typography fontSize={14} color="#64748B" fontWeight={500}>
                    Opening your book...
                </Typography>
            </Box>
        );
    }

    if (!isAuthorized) {
        return (
            <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Paper elevation={0} sx={{ p: 4, borderRadius: '20px', border: '1px solid #E2E8F0', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
                    <Box sx={{ width: 60, height: 60, borderRadius: '50%', bgcolor: '#FEF2F2', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2 }}>
                        <LockIcon sx={{ color: '#EF4444' }} />
                    </Box>
                    <Typography fontSize={18} fontWeight={700} color="#1E293B" mb={1}>
                        Access Restricted
                    </Typography>
                    <Typography fontSize={14} color="#64748B" mb={3} lineHeight={1.6}>
                        You have not purchased this book yet, or your session has expired. Please buy the book or sign in to read it.
                    </Typography>
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <Button
                            variant="outlined"
                            onClick={() => router.push('/mybooks')}
                            sx={{ borderRadius: '10px', textTransform: 'none', px: 3 }}
                        >
                            Back to Library
                        </Button>
                        <Button
                            variant="contained"
                            onClick={() => router.push(`/mybooks/payment/${bookId}`)}
                            sx={{ borderRadius: '10px', textTransform: 'none', background: 'linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)', px: 3 }}
                        >
                            Purchase Book
                        </Button>
                    </Stack>
                </Paper>
            </Container>
        );
    }




    const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://192.168.1.17:8000';
    const documentPath = book?.document || '';
    const documentUrl = documentPath.startsWith('http')
        ? documentPath
        : `${baseURL}/${documentPath.replace(/^\/+/, '')}`;

    console.log(documentUrl);

    // Append toolbar=0 to hide download/print controls in built-in PDF reader for "Read Only" books
    const embeddedUrl = `${documentUrl}#toolbar=0&navpanes=0`;

    return (
        <Box id="book-reader-root" sx={{ minHeight: '100vh', bgcolor: '#0F172A', color: '#fff', display: 'flex', flexDirection: 'column' }}>

            {/* Top Navigation Bar */}
            <Box sx={{
                px: 3,
                py: 1.5,
                borderBottom: '1px solid #334155',
                bgcolor: '#1E293B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
                <Stack direction="row" spacing={2} alignItems="center">
                    <IconButton
                        onClick={() => router.push('/mybooks')}
                        sx={{ color: '#94A3B8', '&:hover': { color: '#fff', bgcolor: '#334155' } }}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <Box>
                        <Typography fontSize={15} fontWeight={700} color="#F8FAFC" sx={{
                            display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                        }}>
                            {book?.title}
                        </Typography>
                        <Typography fontSize={11} color="#94A3B8">
                            by {book?.author || 'Unknown Author'}
                        </Typography>
                    </Box>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                    <IconButton
                        onClick={toggleFullscreen}
                        sx={{ color: '#94A3B8', '&:hover': { color: '#fff', bgcolor: '#334155' } }}
                        title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Mode"}
                    >
                        {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
                    </IconButton>
                </Stack>
            </Box>

            {/* Reading Container */}
            <Box
                id="book-reader-container"
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: isFullscreen ? 0 : { xs: 1, sm: 2, md: 3 },
                    bgcolor: '#0F172A',
                    position: 'relative'
                }}
            >
                <Paper
                    elevation={12}
                    sx={{
                        width: '100%',
                        maxWidth: isFullscreen ? '100%' : '1000px',
                        // height: isFullscreen ? '100%' : 'calc(100vh - 120px)',
                        borderRadius: isFullscreen ? 0 : '16px',
                        overflow: 'hidden',
                        bgcolor: '#1E293B',
                        border: isFullscreen ? 'none' : '1px solid #334155',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative'
                    }}
                >
                    {/* Disable select and right click to discourage simple saving */}
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            userSelect: 'none',
                            '-webkit-user-select': 'none',
                            '-moz-user-select': 'none',
                            '-ms-user-select': 'none',
                        }}
                        onContextMenu={(e) => e.preventDefault()}
                    >
                        {documentPath ? (
                            // <Document
                            //     file={documentUrl}
                            //     onLoadSuccess={onDocumentLoadSuccess}
                            //     onLoadError={(err) => {
                            //         console.error("PDF ERROR", err);
                            //     }}
                            // >
                            //     <Page pageNumber={1} />
                            // </Document>
                            <PdfViewer url={documentUrl} />

                        ) : (
                            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 4, gap: 2 }}>
                                <MenuBookIcon sx={{ fontSize: 48, color: '#475569' }} />
                                <Typography fontSize={14} color="#94A3B8" textAlign="center">
                                    No reading material uploaded for this book.
                                </Typography>
                            </Box>
                        )}
                    </Box>
                </Paper>
            </Box >
        </Box >
    );
}
