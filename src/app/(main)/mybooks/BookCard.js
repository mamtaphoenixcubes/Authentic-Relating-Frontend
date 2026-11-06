'use client';
import { Box, Grid, Typography, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import axiosInstance from "@/lib/axios";
import { useRouter } from 'next/navigation';
import UnifiedButton from '@/app/_components/buttons/UnifiedButton';
import Section from '@/app/_components/common/Section';
import SiteContainer from '@/app/_components/common/SiteContainer';

export default function BookCard() {
  const [books, setBooks] = useState([]);
  const router = useRouter();
  const [userId, setUserId] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [bookModalOpen, setBookModalOpen] = useState(false);
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false);
  const [permissionModalOpen, setPermissionModalOpen] = useState(false);
  const [permissionModalBook, setPermissionModalBook] = useState(null);

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

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axiosInstance.get('/frontendApis/getAllBooks', {
          params: { size: 10, page: 0, search: '' }
        });
        const allBooks = res?.data?.data?.books || [];
        const publishedBooks = allBooks.filter(book => book.isPublished === true);
        setBooks(publishedBooks);
      } catch (err) {
        console.error('Book API error:', err);
      }
    };
    fetchBooks();
  }, []);

  // Shared styles for the original "Read More" glass button (colors preserved)
  const readMoreSx = {
    textTransform: "none",
    fontFamily: '"Red Hat Display", sans-serif',
    fontWeight: 600,
    fontSize: { xs: "13px", sm: "14px", md: "15px", lg: "16px" },
    lineHeight: "100%",
    letterSpacing: "-0.01em",
    px: { xs: 2, sm: 2, md: 3 },
    height: { xs: "42px", md: "48px" },
    minHeight: { xs: "42px", md: "48px" },
    borderRadius: "12px",
    color: "#fff",
    width: { xs: "100%", sm: "150px", md: "170px" },
    minWidth: { xs: "100%", sm: "150px", md: "170px" },
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    position: "relative",
    border: "none",
    boxShadow: "none",
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      borderRadius: "12px",
      padding: "2px",
      background: "linear-gradient(106deg, #FFFFFF 34%, rgba(255,255,255,0.1) 105%)",
      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude",
      pointerEvents: "none",
    },
    "&:hover": {
      background: "rgba(255,255,255,0.25)",
      boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
      transform: "none",
    },
    "&:active": {
      transform: "none",
    },
  };

  // Shared styles for the original coral "Buy Now" button (colors preserved)
  const buyNowSx = {
    textTransform: "none",
    fontFamily: '"Red Hat Display", sans-serif',
    fontWeight: 600,
    fontSize: { xs: "13px", sm: "14px", md: "15px", lg: "16px" },
    lineHeight: "100%",
    letterSpacing: "-0.01em",
    px: { xs: 2, sm: 2, md: 3 },
    height: { xs: "42px", md: "48px" },
    minHeight: { xs: "42px", md: "48px" },
    borderRadius: "12px",
    color: "#fff",
    width: "100%",
    minWidth: "100%",
    background: "linear-gradient(98.48deg,#FF826E 0%,#DE472F 100%)",
    position: "relative",
    border: "none",
    boxShadow: "none",
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      borderRadius: "12px",
      padding: "2px",
      background: "linear-gradient(106deg, #FFFFFF 34%, rgba(255,255,255,0.1) 105%)",
      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude",
      pointerEvents: "none",
    },
    "&:hover": {
      background: "linear-gradient(98.48deg,#FF826E 0%,#DE472F 100%)",
      boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
      transform: "none",
    },
    "&:active": {
      transform: "none",
    },
  };

  // Shared styles for modal "blue" button (colors preserved)
  const modalPrimarySx = {
    borderRadius: '12px',
    textTransform: 'none',
    fontSize: 13,
    fontWeight: 600,
    height: 'auto',
    minHeight: '40px',
    minWidth: '100%',
    py: 1.2,
    background: 'linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)',
    boxShadow: '0 4px 14px rgba(8,126,223,0.35)',
    color: '#fff',
    "&::before": { display: "none" },
    '&:hover': {
      opacity: 0.92,
      boxShadow: '0 6px 18px rgba(8,126,223,0.4)',
      transform: "none",
      background: 'linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)',
    },
    '&:active': { transform: "none" },
  };

  // Shared styles for modal "outline" button (colors preserved)
  const modalOutlineSx = {
    borderRadius: '12px',
    textTransform: 'none',
    fontSize: 13,
    fontWeight: 500,
    borderColor: '#E2E8F0',
    color: '#64748B',
    height: 'auto',
    minHeight: '40px',
    minWidth: '100%',
    py: 1.2,
    background: '#fff',
    boxShadow: 'none',
    "&::before": { display: "none" },
    '&:hover': {
      borderColor: '#CBD5E1',
      bgcolor: '#F8FAFC',
      transform: "none",
      background: '#F8FAFC',
    },
    '&:active': { transform: "none" },
  };

  return (
    <Section sx={{ py: 6 }}>
      <SiteContainer
        sx={{
          maxWidth: {
            xs: '100%',
            md: '1200px',
            lg: '1640px',
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          {books.map((book) => (
            <Box
              key={book._id}
              sx={{
                width: "100%",
                mx: "auto",
                borderRadius: "28px",
                overflow: "hidden",
                boxShadow: 3,
                mb: { xs: 6, md: 10 },
                mt: { xs: 6, md: 10 },
              }}
            >
              <Grid
                container
                direction={{ xs: 'column', sm: 'row' }}
                wrap="nowrap"
                sx={{
                  minHeight: { xs: 420, sm: 420, md: 480 },
                }}
              >
                {/* LEFT IMAGE */}
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    width: { xs: '100%', sm: '50%' },
                    backgroundColor: '#E8FCFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    order: { xs: 1, sm: 1 },
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    style={{ width: '100%', height: '100%' }}
                  >
                    <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
                      <Box
                        component="img"
                        src={`${process.env.NEXT_PUBLIC_API_URL}/${book.image}`}
                        alt="Book"
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.4s ease",
                          "&:hover": { transform: "scale(1.05)" },
                        }}
                      />
                    </Box>
                  </motion.div>
                </Grid>

                {/* RIGHT CONTENT */}
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    width: { xs: '100%', sm: '50%' },
                    background: 'linear-gradient(135deg, #2EC4C9, #17A2B8)',
                    color: '#fff',
                    p: { xs: 3, sm: 3, md: 5 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    order: { xs: 2, sm: 2 },
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <Box sx={{ display: 'flex', gap: 1.5, mb: 1.5, flexWrap: 'wrap' }}>
                      <Box
                        sx={{
                          px: 1.5, py: 0.5, borderRadius: '6px', fontSize: '11px',
                          fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px',
                          backgroundColor: book.allowDownload ? '#E6FDF9' : '#FFF1F2',
                          color: book.allowDownload ? '#0A847E' : '#E11D48',
                          display: 'inline-block',
                        }}
                      >
                        {book.allowDownload ? '📥 Downloadable' : '👁️ Readable Only'}
                      </Box>
                    </Box>

                    <Typography
                      sx={{
                        fontFamily: '"Red Hat Display", sans-serif',
                        fontWeight: 400,
                        fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "17px" },
                        lineHeight: { xs: 1.3, md: "100%" },
                        letterSpacing: "0%",
                        color: "#F9F9F9",
                        opacity: 0.85,
                        mb: { xs: 0.5, md: 1 },
                      }}
                    >
                      Best book of the month
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Red Hat Display", sans-serif',
                        fontWeight: 700,
                        fontSize: { xs: "24px", sm: "28px", md: "34px", lg: "40px" },
                        lineHeight: { xs: 1.2, sm: 1.15, md: 1.1, lg: "100%" },
                        letterSpacing: "0%",
                        color: "#fff",
                        mb: { xs: 1.5, md: 2 },
                      }}
                    >
                      {book.title}
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <Box
                      sx={{
                        fontFamily: '"Red Hat Display", sans-serif',
                        fontWeight: 400,
                        fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "17px" },
                        lineHeight: { xs: 1.5, sm: 1.5, md: "100%" },
                        letterSpacing: "0%",
                        color: "#fff",
                        opacity: 0.9,
                        mb: { xs: 2, md: 3 },
                        "& p": { margin: 0 },
                      }}
                      dangerouslySetInnerHTML={{ __html: book.description }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Red Hat Display", sans-serif',
                        fontWeight: 700,
                        fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "26px" },
                        lineHeight: { xs: 1.2, md: "100%" },
                        letterSpacing: "0%",
                        color: "#fff",
                        mb: { xs: 2, md: 3 },
                      }}
                    >
                      $9.99 / book
                    </Typography>
                  </motion.div>

                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1.5, sm: 1.5, md: 2 }}>
                    {/* READ MORE */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      <UnifiedButton
                        variant="default"
                        size="medium"
                        onClick={() => {
                          setSelectedBook(book);
                          setBookModalOpen(true);
                        }}
                        sx={readMoreSx}
                      >
                        Read More
                      </UnifiedButton>
                    </motion.div>

                    {/* DYNAMIC ACTION BUTTON */}
                    {(() => {
                      const isBought = userId && book.buyers && book.buyers.includes(userId);
                      const links = (() => {
                        try {
                          const raw = book.socialmedialinks?.[0];
                          return raw ? (typeof raw === 'string' ? JSON.parse(raw) : raw) : [];
                        } catch {
                          return [];
                        }
                      })();

                      let buttonText = "Buy Now";
                      let onClickAction = () => {
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
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.5 }}
                          style={{ width: '100%', maxWidth: '170px' }}
                        >
                          <UnifiedButton
                            variant="default"
                            size="medium"
                            onClick={onClickAction}
                            fullWidth
                            sx={buyNowSx}
                          >
                            {buttonText}
                          </UnifiedButton>
                        </motion.div>
                      );
                    })()}
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          ))}
        </motion.div>

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
                bgcolor: '#fff', borderRadius: '20px', overflow: 'hidden',
                boxShadow: '0 32px 80px rgba(0,0,0,0.18)',
              }}>
                {/* HEADER */}
                <Box sx={{
                  background: 'linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)',
                  px: 3, py: 2,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <Typography fontSize={14} fontWeight={600} color="#fff" letterSpacing={0.3}>
                    📖 Book Detailss
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

                {/* BODY */}
                <Box sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', gap: 2.5, mb: 2.5, alignItems: 'flex-start' }}>
                    <Box
                      component="img"
                      src={selectedBook.image
                        ? `${process.env.NEXT_PUBLIC_API_URL}/${selectedBook.image}`
                        : '/Book.png'}
                      alt={selectedBook.title}
                      sx={{
                        width: 90, height: 120, objectFit: 'cover', borderRadius: '10px',
                        boxShadow: '0 4px 16px rgba(8,126,223,0.2)', flexShrink: 0,
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
                      <Box sx={{
                        display: 'inline-block', px: 1.5, py: 0.4, bgcolor: '#EFF6FF',
                        borderRadius: '8px', fontSize: 11, color: '#087EDF', fontWeight: 600,
                      }}>
                        Available Now
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={{ height: '1px', bgcolor: '#F1F5F9', mb: 2.5 }} />

                  <Typography fontSize={12.5} fontWeight={600} color="#94A3B8" letterSpacing={0.5} mb={1} sx={{ textTransform: 'uppercase' }}>
                    About this book
                  </Typography>
                  <Box
                    dangerouslySetInnerHTML={{ __html: selectedBook.description }}
                    sx={{
                      fontSize: 13.5, color: '#475569', lineHeight: 1.75, mb: 3,
                      '& p': { margin: 0 },
                      maxHeight: 160, overflowY: 'auto', pr: 0.5,
                      '&::-webkit-scrollbar': { width: 4 },
                      '&::-webkit-scrollbar-track': { bgcolor: '#F8FAFC', borderRadius: 4 },
                      '&::-webkit-scrollbar-thumb': { bgcolor: '#CBD5E1', borderRadius: 4 },
                    }}
                  />

                  <Stack
                    direction="row"
                    spacing={1.5}
                    justifyContent="center"
                    sx={{ mt: 1 }}
                  >
                    <UnifiedButton
                      variant="default"
                      size="medium"
                      onClick={() => setBookModalOpen(false)}
                      sx={{
                        ...modalOutlineSx,
                        width: 120,
                        minWidth: 120,
                      }}
                    >
                      Close
                    </UnifiedButton>

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
                        <UnifiedButton
                          variant="default"
                          size="medium"
                          onClick={onClickAction}
                          sx={{
                            ...modalPrimarySx,
                            width: 180,
                            minWidth: 180,
                          }}
                        >
                          {buttonText}
                        </UnifiedButton>
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
                bgcolor: '#fff', borderRadius: '20px', overflow: 'hidden',
                boxShadow: '0 32px 80px rgba(0,0,0,0.18)',
              }}>
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

                  <Box sx={{
                    bgcolor: '#F8FAFF', borderRadius: '14px', p: 2.5, mb: 2.5,
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
                          px: 1.5, py: 0.3, bgcolor: '#EFF6FF', borderRadius: '6px',
                          fontSize: 11, color: '#087EDF', fontWeight: 600,
                        }}>
                          Digital Copy
                        </Box>
                      </Box>
                    </Stack>
                  </Box>

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
                              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                              p: 2, borderRadius: '14px', border: '1.5px solid #DBEAFE',
                              bgcolor: '#fff', cursor: 'pointer', transition: 'all 0.2s',
                              '&:hover': {
                                borderColor: '#087EDF', bgcolor: '#F0F9FF',
                                transform: 'translateY(-1px)',
                                boxShadow: '0 4px 14px rgba(8,126,223,0.12)',
                              },
                            }}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                              <Box sx={{
                                width: 36, height: 36, borderRadius: '10px',
                                background: 'linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 16, flexShrink: 0,
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

                  <Box sx={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: 1, mb: 2,
                  }}>
                    <Typography fontSize={11} color="#94A3B8">
                      🔒 Secure & encrypted checkout
                    </Typography>
                  </Box>

                  <UnifiedButton
                    variant="default"
                    size="medium"
                    fullWidth
                    onClick={() => setPurchaseModalOpen(false)}
                    sx={{
                      borderRadius: '12px', textTransform: 'none',
                      fontSize: 13, color: '#94A3B8', py: 1,
                      height: 'auto', minHeight: '40px', minWidth: '100%',
                      background: 'transparent', boxShadow: 'none',
                      "&::before": { display: "none" },
                      '&:hover': { bgcolor: '#F8FAFC', background: '#F8FAFC', transform: 'none' },
                      '&:active': { transform: 'none' },
                    }}
                  >
                    Maybe later
                  </UnifiedButton>
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
                bgcolor: '#fff', borderRadius: '20px', overflow: 'hidden',
                boxShadow: '0 32px 80px rgba(0,0,0,0.18)',
              }}>
                <Box sx={{
                  background: 'linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)',
                  px: 3, py: 2,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <Typography fontSize={14} fontWeight={600} color="#fff">
                    ⚠️ Purchase Confirmation
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

                <Box sx={{ p: 3 }}>
                  <Typography fontSize={15} fontWeight={700} color="#1E293B" mb={2}>
                    {permissionModalBook.title}
                  </Typography>

                  <Typography fontSize={14} color="#475569" lineHeight={1.6} mb={3}>
                    {permissionModalBook.allowDownload
                      ? "Once the payment is completed, the book will be downloaded automatically."
                      : "This is a one-time purchase. After successful payment, you will have lifetime access to read this material online."}
                  </Typography>

                  <Stack direction="row" spacing={2}>
                    <UnifiedButton
                      variant="default"
                      size="medium"
                      fullWidth
                      onClick={() => setPermissionModalOpen(false)}
                      sx={modalOutlineSx}
                    >
                      Cancel
                    </UnifiedButton>

                    <UnifiedButton
                      variant="default"
                      size="medium"
                      fullWidth
                      onClick={() => {
                        setPermissionModalOpen(false);
                        router.push(`/mybooks/payment/${permissionModalBook._id}`);
                      }}
                      sx={modalPrimarySx}
                    >
                      Confirm & Proceed
                    </UnifiedButton>
                  </Stack>
                </Box>
              </Box>
            </motion.div>
          </Box>
        )}
      </SiteContainer>
    </Section>
  );
}