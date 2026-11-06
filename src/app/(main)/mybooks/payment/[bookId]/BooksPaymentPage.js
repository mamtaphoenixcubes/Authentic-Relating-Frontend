'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    Box, Container, Paper, Typography, Grid, Button, Divider,
    Alert, Card, CardContent, CircularProgress, Breadcrumbs,
    Link as MuiLink, Fade, TextField,
} from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LockIcon from '@mui/icons-material/Lock';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SecurityIcon from '@mui/icons-material/Security';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import axiosInstance from '@/lib/axios';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// ── Stripe ────────────────────────────────────────────────────────────────────
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_51T7DerCfwCnOffq5q9owbaBgwHEHSVxzweL6Fd3rinQrlL6GDgy1YSoGkLwgu954aANtgjXamwv4veL6YchJOpfK007Yk9w01a'
);

// ── Theme ─────────────────────────────────────────────────────────────────────
const theme = createTheme({
    typography: { fontFamily: '"Red Hat Display", sans-serif', fontSize: 14 },
});

// ── Tokens ────────────────────────────────────────────────────────────────────
const GRAD = 'linear-gradient(135deg, #5fa6e8, #c2b7ff)';
const GRADL = 'linear-gradient(135deg, #5fa6e8, #b7d2ff)';
const ACCENT = '#5fa6e8';
const ACCENT_DARK = '#4a8ecf';
const SURFACE = '#f6f8fc';
const BORDER = '#e4e9f2';

// ── Styled ────────────────────────────────────────────────────────────────────
const PageWrapper = styled(Box)({ minHeight: '100vh', background: '#f0f4fa' });
const GlassCard = styled(Card)({ borderRadius: 20, border: `1px solid ${BORDER}`, boxShadow: '0 2px 20px rgba(95,166,232,0.08)', background: '#fff', transition: 'box-shadow .25s', '&:hover': { boxShadow: '0 6px 28px rgba(95,166,232,0.13)' } });
const SectionTitle = styled(Typography)({ fontFamily: '"Red Hat Display", sans-serif', fontSize: 15, fontWeight: 700, color: '#1c2537', marginBottom: 14 });
const InfoRow = styled(Box)({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0' });
const Label = styled(Typography)({ fontFamily: '"Red Hat Display", sans-serif', fontSize: 13, color: '#8a94a6', fontWeight: 500 });
const Value = styled(Typography)({ fontFamily: '"Red Hat Display", sans-serif', fontSize: 13, color: '#1c2537', fontWeight: 600 });

const PrimaryButton = styled(Button)({
    background: GRAD, color: '#fff',
    fontFamily: '"Red Hat Display", sans-serif', fontWeight: 700, fontSize: 14,
    textTransform: 'none', borderRadius: 12, padding: '10px 28px',
    boxShadow: '0 4px 14px rgba(95,166,232,0.35)', transition: 'all .25s',
    '&:hover': { background: `linear-gradient(135deg,${ACCENT_DARK},#a89cf0)`, boxShadow: '0 6px 20px rgba(95,166,232,0.45)', transform: 'translateY(-1px)' },
    '&:disabled': { background: '#d5dde8', boxShadow: 'none', color: '#9aa3b0' },
});
const OutlineButton = styled(Button)({
    fontFamily: '"Red Hat Display", sans-serif', fontWeight: 600, fontSize: 14,
    textTransform: 'none', borderRadius: 12, padding: '10px 24px',
    color: '#6b7a90', border: '1.5px solid #d5dde8', background: '#fff', transition: 'all .2s',
    '&:hover': { borderColor: ACCENT, color: ACCENT, background: 'rgba(95,166,232,0.04)' },
    '&:disabled': { opacity: 0.4 },
});
const StepDot = styled(Box, { shouldForwardProp: p => p !== 'active' && p !== 'done' })(
    ({ active, done }) => ({
        width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 13, fontWeight: 700, fontFamily: '"Red Hat Display", sans-serif', transition: 'all .3s',
        ...(done ? { background: GRAD, color: '#fff' }
            : active ? { background: GRADL, color: '#fff', boxShadow: '0 0 0 4px rgba(95,166,232,0.18)' }
                : { background: '#e8edf4', color: '#9aa3b0' }),
    })
);
const StepConnector = styled(Box, { shouldForwardProp: p => p !== 'done' })(
    ({ done }) => ({
        flex: 1, height: 2, borderRadius: 2, margin: '0 6px', marginBottom: 18,
        background: done ? GRAD : '#e4e9f2', transition: 'background .4s',
    })
);
const PayCard = styled(Paper)(({ selected }) => ({
    borderRadius: 14, border: selected ? `2px solid ${ACCENT}` : `1.5px solid ${BORDER}`,
    padding: '14px 18px', cursor: 'pointer', background: selected ? 'rgba(95,166,232,0.04)' : '#fff',
    boxShadow: selected ? '0 4px 16px rgba(95,166,232,0.12)' : 'none', transition: 'all .22s',
    '&:hover': { borderColor: ACCENT, boxShadow: '0 4px 16px rgba(95,166,232,0.12)', transform: 'translateY(-1px)' },
}));
const inputSx = {
    '& .MuiOutlinedInput-root': {
        borderRadius: 2, fontFamily: '"Red Hat Display", sans-serif', fontSize: 14, background: '#fff',
        '& fieldset': { borderColor: BORDER },
        '&:hover fieldset': { borderColor: ACCENT },
        '&.Mui-focused fieldset': { borderColor: ACCENT },
    },
    '& .MuiInputLabel-root': { fontFamily: '"Red Hat Display", sans-serif', fontSize: 14 },
    '& .MuiFormHelperText-root': { fontFamily: '"Red Hat Display", sans-serif' },
};

const STEPS = ['Book Details', 'Payment Method', 'Confirm & Pay'];

// ── Helpers ───────────────────────────────────────────────────────────────────
const getImg = (p) => {
    if (!p) return '/placeholder-book.jpg';
    if (p.startsWith('http')) return p;
    const base = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') ?? '';
    return `${base}/${p.replace(/^\//, '')}`;
};

// Parse price from currency field — e.g. "$100", "100", "₹500" → number
const parsePrice = (val) => {
    if (!val) return 0;
    const num = parseFloat(String(val).replace(/[^0-9.]/g, ''));
    return isNaN(num) ? 0 : num;
};

// ─────────────────────────────────────────────────────────────────────────────
// CheckoutForm
// ─────────────────────────────────────────────────────────────────────────────
function CheckoutForm({
    bookData, paymentData, paymentIntentId, paymentIntent,
    total, paymentMethod, buyerInfo,
    setPaymentSuccess, setActiveStep,
    setPaymentError, paymentError,
    processingPayment, setProcessingPayment,
}) {
    const stripe = useStripe();
    const elements = useElements();

    const triggerAutoDownload = async (filePath) => {
        if (!filePath) return;

        const baseURL =
            process.env.NEXT_PUBLIC_API_URL || 'http://192.168.1.17:8000';

        const fileUrl = filePath.startsWith('http')
            ? filePath
            : `${baseURL}/${filePath.replace(/^\/+/, '')}`;

        try {
            const response = await fetch(fileUrl);
            const blob = await response.blob();

            const blobUrl = window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = blobUrl;

            // ✅ force filename (optional)
            link.download = filePath.split('/').pop() || 'download.pdf';

            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
        } catch (err) {
            console.error('Download failed:', err);

            // fallback
            window.open(fileUrl, '_blank');
        }
    };

    const handlePay = async () => {
        if (!stripe || !elements) return;
        setProcessingPayment(true);
        setPaymentError('');

        try {
            const cardElement = elements.getElement(CardElement);

            // 1. Confirm card with Stripe
            const { error, paymentIntent: confirmed } = await stripe.confirmCardPayment(
                paymentIntent,
                { payment_method: { card: cardElement } }
            );

            if (error) {
                setPaymentError(error.message);
                return;
            }

            if (confirmed.status === 'succeeded') {
                // 2. Confirm with your backend
                const pid = paymentIntentId || paymentData?.paymentIntentId;
                const purchaseId = paymentData?.purchaseId;



                const res = await axiosInstance.post('books-payments/confirm-book-payment', {
                    paymentIntentId: pid,
                    purchaseId,
                });




                setPaymentSuccess(true);
                setActiveStep(3);

                // ✅ trigger download only if success
                if (res?.data?.status === 1 && res?.data?.download_url) {
                    setTimeout(() => {
                        triggerAutoDownload(res.data.download_url);
                    }, 3000); // 3 seconds
                }
            }
        } catch (err) {
            console.error('confirm-book-payment error:', err?.response?.data ?? err);
            setPaymentError(
                err?.response?.data?.message
                || err?.response?.data?.error
                || 'Payment confirmation failed. Please try again.'
            );
        } finally {
            setProcessingPayment(false);
        }
    };

    return (
        <motion.div
            key="s2"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.28 }}
        >
            <SectionTitle>Confirm & Pay</SectionTitle>

            {/* Buyer recap */}
            <Box sx={{ background: SURFACE, borderRadius: 3, p: 2.5, mb: 2.5, border: `1.5px solid ${BORDER}` }}>
                <Typography sx={{ fontSize: 12, fontWeight: 700, color: '#6b7a90', fontFamily: '"Red Hat Display", sans-serif', mb: 1.5, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Buyer</Typography>
                <InfoRow><Label>Name</Label>  <Value>{buyerInfo.name}</Value></InfoRow>
                <InfoRow><Label>Email</Label> <Value>{buyerInfo.email}</Value></InfoRow>
                <InfoRow><Label>Phone</Label> <Value>{buyerInfo.phone}</Value></InfoRow>
            </Box>

            {/* Order recap */}
            <Box sx={{ background: SURFACE, borderRadius: 3, p: 2.5, mb: 2.5, border: `1.5px solid ${BORDER}` }}>
                <Typography sx={{ fontSize: 14, fontWeight: 700, fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537', mb: 2 }}>{bookData?.title}</Typography>
                <Divider sx={{ borderColor: BORDER, mb: 2 }} />
                <InfoRow><Label>Author</Label>          <Value>{bookData?.author}</Value></InfoRow>
                <InfoRow><Label>Payment Method</Label>  <Value>Credit / Debit Card</Value></InfoRow>
                <InfoRow><Label>Tax</Label>             <Value>$0.00</Value></InfoRow>
                <Divider sx={{ borderColor: BORDER, my: 2 }} />
                <InfoRow>
                    <Typography sx={{ fontSize: 15, fontWeight: 800, fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537' }}>Total</Typography>
                    <Typography sx={{ fontSize: 22, fontWeight: 800, fontFamily: '"Red Hat Display", sans-serif', background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        {bookData?.currency} {bookData?.price}
                    </Typography>
                </InfoRow>
            </Box>

            {/* Stripe CardElement */}
            {paymentMethod === 'card' && (
                <Box sx={{ mb: 2.5 }}>
                    <Typography sx={{ fontSize: 12, fontWeight: 600, color: '#6b7a90', fontFamily: '"Red Hat Display", sans-serif', mb: 1, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Card Details</Typography>
                    <Box sx={{ border: `1.5px solid ${BORDER}`, borderRadius: 2, p: 1.5, background: '#fff' }}>
                        <CardElement
                            options={{
                                style: {
                                    base: { fontSize: '15px', fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537', '::placeholder': { color: '#b0bac9' } },
                                    invalid: { color: '#e55' },
                                },
                            }}
                        />
                    </Box>
                </Box>
            )}

            {paymentError && (
                <Alert severity="error" sx={{ mb: 2, borderRadius: 2, fontSize: 13, fontFamily: '"Red Hat Display", sans-serif' }}>
                    {paymentError}
                </Alert>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, p: 2, background: 'rgba(95,166,232,0.05)', borderRadius: 3, border: `1px solid rgba(95,166,232,0.15)`, mb: 3 }}>
                <SecurityIcon sx={{ fontSize: 18, color: ACCENT }} />
                <Typography sx={{ fontSize: 12, color: '#6b7a90', fontFamily: '"Red Hat Display", sans-serif' }}>Payments are encrypted with 256-bit SSL.</Typography>
            </Box>

            <PrimaryButton fullWidth onClick={handlePay} disabled={processingPayment || !stripe}>
                {processingPayment
                    ? <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><CircularProgress size={16} color="inherit" /><span>Processing…</span></Box>
                    : <><LockIcon sx={{ fontSize: 14, mr: 0.5 }} /> Pay {bookData?.currency} {bookData?.price}</>
                }
            </PrimaryButton>
        </motion.div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// BookPaymentPage
// ─────────────────────────────────────────────────────────────────────────────
export default function BooksPaymentPage({ bookId }) {
    // const params = useParams();
    const router = useRouter();

    const [activeStep, setActiveStep] = useState(0);
    const [bookData, setBookData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [processingPayment, setProcessingPayment] = useState(false);
    const [paymentError, setPaymentError] = useState('');
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [paymentIntent, setPaymentIntent] = useState(null);
    const [paymentData, setPaymentData] = useState(null);

    // const [buyerInfo, setBuyerInfo] = useState({ name: '', email: '', phone: '' });
    const [buyerInfo, setBuyerInfo] = useState(() => {
        try {
            const raw = localStorage.getItem('user');
            if (raw) {
                const u = JSON.parse(raw);
                return {
                    name: `${u.firstName || ''} ${u.lastName || ''}`.trim(),
                    email: u.email || '',
                    phone: u.phoneNumber || '',
                };
            }
        } catch { }
        return { name: '', email: '', phone: '' };
    });
    const [buyerErrors, setBuyerErrors] = useState({});

    // const bookId = params?.bookId;

    // ── Fetch book ────────────────────────────────────────────────────────────
    useEffect(() => {
        if (!bookId) return;
        (async () => {
            try {
                const res = await axiosInstance.get(`/frontendApis/getBookbyid/${bookId}`);
                const book = res.data?.data;
                console.log('bookData:', book);
                setBookData(book);
            } catch (err) {
                console.error('fetchBook error:', err);
            } finally {
                setLoading(false);
            }
        })();
    }, [bookId]);

    // ── Validate buyer ────────────────────────────────────────────────────────
    const validateBuyer = () => {
        const errs = {};
        if (!buyerInfo.name.trim()) errs.name = 'Name is required';
        if (!buyerInfo.email.trim()) errs.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(buyerInfo.email)) errs.email = 'Enter a valid email';
        if (!buyerInfo.phone.trim()) errs.phone = 'Phone is required';
        else if (!/^\+?[\d\s\-]{7,15}$/.test(buyerInfo.phone)) errs.phone = 'Enter a valid phone number';
        setBuyerErrors(errs);
        return Object.keys(errs).length === 0;
    };

    // ── Step navigation ───────────────────────────────────────────────────────
    const handleNext = async () => {
        setPaymentError('');

        // Step 0 → 1: validate buyer info
        if (activeStep === 0) {
            if (!validateBuyer()) return;
            setActiveStep(s => s + 1);
            return;
        }

        // Step 1 → 2: create payment intent
        if (activeStep === 1) {
            setProcessingPayment(true);

            let userId = null;
            try {
                const raw = localStorage.getItem('user');
                if (raw) {
                    const parsed = JSON.parse(raw);
                    userId = parsed?._id || parsed?.id || null;
                }
            } catch {
                console.warn('Could not parse user from localStorage');
            }

            const payload = {
                bookId: bookData._id,
                userId,
                quantity: 1,
            };

            console.log('create-book-payment-intent payload:', payload);

            try {
                const res = await axiosInstance.post(
                    'books-payments/create-book-payment-intent',
                    payload
                );

                console.log('create-book-payment-intent response:', res.data);

                if (res.data?.status === 1) {
                    setPaymentData(res.data);
                    setPaymentIntent(res.data.clientSecret);
                    setActiveStep(s => s + 1);
                } else {
                    const msg = res.data?.message || JSON.stringify(res.data);
                    setPaymentError(`Server returned status ${res.data?.status}: ${msg}`);
                }
            } catch (err) {
                const responseData = err?.response?.data;
                const status = err?.response?.status;
                console.error(`create-book-payment-intent ${status}:`, responseData);

                const msg =
                    responseData?.message
                    || responseData?.error
                    || (Array.isArray(responseData?.errors)
                        ? responseData.errors.map(e => e.msg || e.message).join(', ')
                        : null)
                    || `HTTP ${status} — see console for details`;

                setPaymentError(msg);
            } finally {
                setProcessingPayment(false);
            }
            return;
        }

        setActiveStep(s => s + 1);
    };

    const handleBack = () => {
        setPaymentError('');
        setActiveStep(s => s - 1);
    };

    const total = parsePrice(bookData?.currency) || bookData?.price || 0;

    // ── Loading / not found ───────────────────────────────────────────────────
    if (loading)
        return (
            <ThemeProvider theme={theme}>
                <PageWrapper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box textAlign="center">
                        <CircularProgress size={44} sx={{ color: ACCENT }} />
                        <Typography sx={{ mt: 2, fontSize: 14, color: '#8a94a6', fontFamily: '"Red Hat Display", sans-serif' }}>Loading book details…</Typography>
                    </Box>
                </PageWrapper>
            </ThemeProvider>
        );

    if (!bookData)
        return (
            <ThemeProvider theme={theme}>
                <PageWrapper sx={{ py: 8 }}>
                    <Container maxWidth="sm">
                        <Alert severity="error" sx={{ borderRadius: 3 }}>
                            Book not found. <Button size="small" onClick={() => router.back()}>Go Back</Button>
                        </Alert>
                    </Container>
                </PageWrapper>
            </ThemeProvider>
        );

    // ── Render ────────────────────────────────────────────────────────────────
    return (
        <ThemeProvider theme={theme}>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;600;700;800&display=swap');`}</style>

            <PageWrapper sx={{ py: { xs: 20, md: 20 } }}>
                <Container maxWidth="lg">

                    {/* Breadcrumb */}
                    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                        <Breadcrumbs
                            separator={<ChevronRightIcon sx={{ fontSize: 14, color: '#b0bac9' }} />}
                            sx={{ mb: 3 }}
                        >
                            {['Home', 'Books', bookData?.title, 'Payment'].map((crumb, i, arr) =>
                                i < arr.length - 1
                                    ? <MuiLink key={crumb} component={Link} href={i === 0 ? '/' : i === 1 ? '/mybooks' : `/mybooks`} underline="hover" sx={{ fontSize: 13, color: '#8a94a6', fontFamily: '"Red Hat Display", sans-serif', fontWeight: 500 }}>{crumb}</MuiLink>
                                    : <Typography key={crumb} sx={{ fontSize: 13, color: '#1c2537', fontFamily: '"Red Hat Display", sans-serif', fontWeight: 600 }}>{crumb}</Typography>
                            )}
                        </Breadcrumbs>
                    </motion.div>

                    {/* Title */}
                    <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.05 }}>
                        <Box sx={{ mb: 5, mt: 2 }}>
                            <Typography sx={{ fontSize: { xs: 20, md: 24 }, fontWeight: 700, fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537', lineHeight: 1.3 }}>Complete Your Purchase</Typography>
                            <Typography sx={{ fontSize: 13, color: '#9aa3b0', fontFamily: '"Red Hat Display", sans-serif', mt: 0.8 }}>Secure checkout — just a few steps</Typography>
                        </Box>
                    </motion.div>

                    <Grid container spacing={3}>

                        {/* ══ LEFT ══ */}
                        <Grid item xs={12} md={8}>
                            <GlassCard>
                                <CardContent sx={{ p: { xs: 3, sm: 4 } }}>

                                    {/* Step indicator */}
                                    {activeStep < 3 && (
                                        <Box sx={{ mb: 4 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                {STEPS.map((label, i) => (
                                                    <Box key={label} sx={{ display: 'flex', alignItems: 'center', flex: i < STEPS.length - 1 ? 1 : 'none' }}>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
                                                            <StepDot active={activeStep === i} done={activeStep > i}>
                                                                {activeStep > i ? <CheckCircleIcon sx={{ fontSize: 16 }} /> : i + 1}
                                                            </StepDot>
                                                            <Typography sx={{ fontSize: 11, fontWeight: 600, fontFamily: '"Red Hat Display", sans-serif', color: activeStep >= i ? ACCENT : '#b0bac9', whiteSpace: 'nowrap' }}>{label}</Typography>
                                                        </Box>
                                                        {i < STEPS.length - 1 && <StepConnector done={activeStep > i} />}
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Box>
                                    )}

                                    <AnimatePresence mode="wait">

                                        {/* ── Step 0: Book Details + Buyer Info ── */}
                                        {activeStep === 0 && (
                                            <motion.div key="s0" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.28 }}>
                                                <SectionTitle>Book Details</SectionTitle>

                                                {/* Book preview card */}
                                                <Box sx={{ borderRadius: 3, overflow: 'hidden', mb: 3, border: `1.5px solid ${BORDER}`, background: SURFACE }}>
                                                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
                                                        <Box
                                                            component="img"
                                                            src={getImg(bookData?.image)}
                                                            alt={bookData?.title}
                                                            sx={{ width: { xs: '100%', sm: 140 }, height: { xs: 180, sm: 'auto' }, objectFit: 'cover', flexShrink: 0 }}
                                                        />
                                                        <Box sx={{ p: 2.5 }}>
                                                            <Typography sx={{ fontSize: 16, fontWeight: 700, fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537', mb: 1 }}>{bookData?.title}</Typography>
                                                            <Typography sx={{ fontSize: 13, color: '#6b7a90', fontFamily: '"Red Hat Display", sans-serif', mb: 1.5 }}>by {bookData?.author}</Typography>
                                                            {bookData?.category_id?.title && (
                                                                <Box sx={{ display: 'inline-block', px: 1.5, py: 0.4, background: 'rgba(95,166,232,0.1)', borderRadius: 99, mb: 2 }}>
                                                                    <Typography sx={{ fontSize: 12, fontWeight: 600, color: ACCENT, fontFamily: '"Red Hat Display", sans-serif' }}>{bookData.category_id.title}</Typography>
                                                                </Box>
                                                            )}
                                                            <Typography sx={{ fontSize: 22, fontWeight: 800, fontFamily: '"Red Hat Display", sans-serif', background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                                                {bookData?.currency} {bookData?.price}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>

                                                {/* Buyer info */}
                                                <SectionTitle>Your Information</SectionTitle>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                                    {[
                                                        { key: 'name', label: 'Full Name', placeholder: 'John Doe', type: 'text', icon: <PersonIcon sx={{ fontSize: 18, color: '#b0bac9', mr: 1 }} /> },
                                                        { key: 'email', label: 'Email Address', placeholder: 'john@example.com', type: 'email', icon: <EmailIcon sx={{ fontSize: 18, color: '#b0bac9', mr: 1 }} /> },
                                                        { key: 'phone', label: 'Phone Number', placeholder: '+91 98765 43210', type: 'tel', icon: <PhoneIcon sx={{ fontSize: 18, color: '#b0bac9', mr: 1 }} /> },
                                                    ].map(f => (
                                                        <Box key={f.key}>
                                                            <Typography sx={{ fontSize: 12, fontWeight: 600, color: '#6b7a90', fontFamily: '"Red Hat Display", sans-serif', mb: 0.8, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{f.label}</Typography>
                                                            <TextField
                                                                fullWidth size="small" type={f.type} placeholder={f.placeholder}
                                                                value={buyerInfo[f.key]}
                                                                onChange={e => { setBuyerInfo(v => ({ ...v, [f.key]: e.target.value })); setBuyerErrors(v => ({ ...v, [f.key]: '' })); }}
                                                                error={!!buyerErrors[f.key]}
                                                                helperText={buyerErrors[f.key]}
                                                                InputProps={{ startAdornment: f.icon }}
                                                                sx={inputSx}
                                                            />
                                                        </Box>
                                                    ))}
                                                </Box>
                                            </motion.div>
                                        )}

                                        {/* ── Step 1: Payment Method ── */}
                                        {activeStep === 1 && (
                                            <motion.div key="s1" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.28 }}>
                                                <SectionTitle>Select Payment Method</SectionTitle>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
                                                    {[
                                                        { id: 'card', icon: <CreditCardIcon sx={{ fontSize: 22, color: paymentMethod === 'card' ? ACCENT : '#9aa3b0' }} />, label: 'Credit / Debit Card', sub: 'Visa, Mastercard, Rupay & more' },
                                                    ].map(opt => (
                                                        <PayCard key={opt.id} selected={paymentMethod === opt.id} onClick={() => setPaymentMethod(opt.id)} elevation={0}>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                                <Box sx={{ width: 40, height: 40, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', background: paymentMethod === opt.id ? 'rgba(95,166,232,0.1)' : '#f0f4fa' }}>{opt.icon}</Box>
                                                                <Box sx={{ flex: 1 }}>
                                                                    <Typography sx={{ fontSize: 14, fontWeight: 700, fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537' }}>{opt.label}</Typography>
                                                                    <Typography sx={{ fontSize: 12, color: '#8a94a6', fontFamily: '"Red Hat Display", sans-serif' }}>{opt.sub}</Typography>
                                                                </Box>
                                                                <Box sx={{ width: 18, height: 18, borderRadius: '50%', border: paymentMethod === opt.id ? 'none' : '2px solid #d5dde8', background: paymentMethod === opt.id ? GRAD : 'transparent', flexShrink: 0 }} />
                                                            </Box>
                                                        </PayCard>
                                                    ))}
                                                </Box>

                                                {paymentError && (
                                                    <Alert severity="error" sx={{ borderRadius: 2, fontSize: 13, fontFamily: '"Red Hat Display", sans-serif' }}>
                                                        {paymentError}
                                                    </Alert>
                                                )}
                                            </motion.div>
                                        )}

                                        {/* ── Step 2: Confirm & Pay ── */}
                                        {activeStep === 2 && paymentIntent && (
                                            <Elements stripe={stripePromise} options={{ clientSecret: paymentIntent }}>
                                                <CheckoutForm
                                                    bookData={bookData}
                                                    paymentData={paymentData}
                                                    paymentIntentId={paymentData?.paymentIntentId}
                                                    paymentIntent={paymentIntent}
                                                    total={total}
                                                    paymentMethod={paymentMethod}
                                                    buyerInfo={buyerInfo}
                                                    setPaymentSuccess={setPaymentSuccess}
                                                    setActiveStep={setActiveStep}
                                                    setPaymentError={setPaymentError}
                                                    paymentError={paymentError}
                                                    processingPayment={processingPayment}
                                                    setProcessingPayment={setProcessingPayment}
                                                />
                                            </Elements>
                                        )}

                                        {activeStep === 2 && !paymentIntent && (
                                            <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
                                                <CircularProgress size={36} sx={{ color: ACCENT }} />
                                            </Box>
                                        )}

                                        {/* ── Step 3: Success ── */}
                                        {activeStep === 3 && paymentSuccess && (
                                            <motion.div key="success" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} style={{ textAlign: 'center', padding: '48px 24px' }}>
                                                <Box sx={{ width: 80, height: 80, borderRadius: '50%', margin: '0 auto 24px', background: GRAD, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(95,166,232,0.35)' }}>
                                                    <CheckCircleIcon sx={{ fontSize: 44, color: '#fff' }} />
                                                </Box>
                                                <Typography sx={{ fontSize: 22, fontWeight: 800, fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537', mb: 1 }}>Purchase Confirmed!</Typography>
                                                <Typography sx={{ fontSize: 14, color: '#8a94a6', fontFamily: '"Red Hat Display", sans-serif', mb: 1, maxWidth: 360, mx: 'auto' }}>
                                                    Thank you! A confirmation has been sent to {buyerInfo.email}.
                                                </Typography>
                                                <Typography sx={{ fontSize: 13, color: '#8a94a6', fontFamily: '"Red Hat Display", sans-serif', mb: 4, maxWidth: 360, mx: 'auto' }}>
                                                    You can now access <strong>{bookData?.title}</strong> from your library.
                                                </Typography>
                                                <PrimaryButton component={Link} href="/mybooks" size="medium">Browse More Books</PrimaryButton>
                                            </motion.div>
                                        )}

                                    </AnimatePresence>

                                    {/* Navigation buttons */}
                                    {(activeStep === 0 || activeStep === 1) && (
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4, pt: 3, borderTop: `1px solid ${BORDER}` }}>
                                            <OutlineButton onClick={handleBack} disabled={activeStep === 0} startIcon={<ArrowBackIcon sx={{ fontSize: 16 }} />}>Back</OutlineButton>
                                            <PrimaryButton onClick={handleNext} disabled={processingPayment} endIcon={!processingPayment ? <ChevronRightIcon sx={{ fontSize: 16 }} /> : null}>
                                                {processingPayment
                                                    ? <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><CircularProgress size={16} color="inherit" /><span>{activeStep === 1 ? 'Setting up payment…' : 'Continuing…'}</span></Box>
                                                    : 'Continue'
                                                }
                                            </PrimaryButton>
                                        </Box>
                                    )}

                                    {activeStep === 2 && (
                                        <Box sx={{ mt: 3, pt: 2, borderTop: `1px solid ${BORDER}` }}>
                                            <OutlineButton onClick={handleBack} startIcon={<ArrowBackIcon sx={{ fontSize: 16 }} />}>Back</OutlineButton>
                                        </Box>
                                    )}

                                </CardContent>
                            </GlassCard>
                        </Grid>

                        {/* ══ RIGHT — Summary ══ */}
                        <Grid item xs={12} md={4}>
                            <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
                                <Box sx={{ position: 'sticky', top: 24 }}>

                                    <GlassCard>
                                        <CardContent sx={{ p: 3 }}>
                                            <Typography sx={{ fontSize: 15, fontWeight: 700, fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537', mb: 2.5 }}>Order Summary</Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5, p: 1.5, background: SURFACE, borderRadius: 3, border: `1px solid ${BORDER}` }}>
                                                <Box sx={{ width: 40, height: 40, borderRadius: 2, flexShrink: 0, background: GRADL, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <MenuBookIcon sx={{ fontSize: 20, color: '#fff' }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ fontSize: 13, fontWeight: 700, fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537', lineHeight: 1.3 }}>{bookData?.title}</Typography>
                                                    <Typography sx={{ fontSize: 12, color: '#8a94a6', fontFamily: '"Red Hat Display", sans-serif' }}>by {bookData?.author}</Typography>
                                                </Box>
                                            </Box>
                                            <Divider sx={{ borderColor: BORDER, mb: 2 }} />
                                            <InfoRow><Label>Price</Label> <Value>{bookData?.currency} {bookData?.price}</Value></InfoRow>
                                            <InfoRow><Label>Tax</Label>   <Value>$0.00</Value></InfoRow>
                                            <Divider sx={{ borderColor: BORDER, my: 2 }} />
                                            <InfoRow>
                                                <Typography sx={{ fontSize: 14, fontWeight: 800, fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537' }}>Total</Typography>
                                                <Typography sx={{ fontSize: 20, fontWeight: 800, fontFamily: '"Red Hat Display", sans-serif', background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                                    {bookData?.currency} {bookData?.price}
                                                </Typography>
                                            </InfoRow>
                                        </CardContent>
                                    </GlassCard>

                                    {/* Buyer recap (shows after step 0) */}
                                    {buyerInfo.name && activeStep > 0 && (
                                        <Fade in>
                                            <GlassCard sx={{ mt: 2 }}>
                                                <CardContent sx={{ p: 2.5 }}>
                                                    <Typography sx={{ fontSize: 12, fontWeight: 700, color: '#6b7a90', fontFamily: '"Red Hat Display", sans-serif', mb: 1.5, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Buyer</Typography>
                                                    <InfoRow><Label>Name</Label>  <Value>{buyerInfo.name}</Value></InfoRow>
                                                    <InfoRow><Label>Email</Label> <Value sx={{ fontSize: 12 }}>{buyerInfo.email}</Value></InfoRow>
                                                    <InfoRow><Label>Phone</Label> <Value>{buyerInfo.phone}</Value></InfoRow>
                                                </CardContent>
                                            </GlassCard>
                                        </Fade>
                                    )}

                                    <Box sx={{ mt: 2, p: 2, textAlign: 'center' }}>
                                        <Typography sx={{ fontSize: 12, color: '#aab3c0', fontFamily: '"Red Hat Display", sans-serif', lineHeight: 1.7 }}>
                                            By completing this purchase you agree to our{' '}
                                            <MuiLink href="#" underline="hover" sx={{ color: ACCENT, fontWeight: 600 }}>Terms of Service</MuiLink>{' '}and{' '}
                                            <MuiLink href="#" underline="hover" sx={{ color: ACCENT, fontWeight: 600 }}>Refund Policy</MuiLink>.
                                        </Typography>
                                    </Box>

                                    <Box sx={{ mt: 1, p: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, background: 'rgba(95,166,232,0.06)', borderRadius: 3, border: `1px solid rgba(95,166,232,0.15)` }}>
                                        <LockIcon sx={{ fontSize: 14, color: ACCENT }} />
                                        <Typography sx={{ fontSize: 12, color: '#6b7a90', fontFamily: '"Red Hat Display", sans-serif', fontWeight: 500 }}>256-bit SSL Secured Checkout</Typography>
                                    </Box>

                                </Box>
                            </motion.div>
                        </Grid>

                    </Grid>
                </Container>
            </PageWrapper>
        </ThemeProvider>
    );
}