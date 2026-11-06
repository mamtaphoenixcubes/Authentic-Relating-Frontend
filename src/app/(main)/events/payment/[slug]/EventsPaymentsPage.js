'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
    Box, Container, Paper, Typography, Grid, Button, Divider,
    Alert, Card, CardContent, CircularProgress, Breadcrumbs,
    Link as MuiLink, Fade, TextField,
} from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LockIcon from '@mui/icons-material/Lock';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SecurityIcon from '@mui/icons-material/Security';
import PaymentIcon from '@mui/icons-material/Payment';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import axiosInstance from '@/lib/axios';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// ── Stripe (module-level) ────────────────────────────────────────────────────
const stripePromise = loadStripe(
    'pk_test_51T7DerCfwCnOffq5q9owbaBgwHEHSVxzweL6Fd3rinQrlL6GDgy1YSoGkLwgu954aANtgjXamwv4veL6YchJOpfK007Yk9w01a'
);

// ── Theme ────────────────────────────────────────────────────────────────────
const theme = createTheme({
    typography: { fontFamily: '"Red Hat Display", sans-serif', fontSize: 14 },
});

// ── Tokens ───────────────────────────────────────────────────────────────────
const GRAD = 'linear-gradient(135deg, #5fa6e8, #c2b7ff)';
const GRADL = 'linear-gradient(135deg, #5fa6e8, #b7d2ff)';
const ACCENT = '#5fa6e8';
const ACCENT_DARK = '#4a8ecf';
const SURFACE = '#f6f8fc';
const BORDER = '#e4e9f2';

// ── Styled ───────────────────────────────────────────────────────────────────
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

const STEPS = ['Event Details', 'Payment Method', 'Confirm & Pay'];

// ─────────────────────────────────────────────────────────────────────────────
// CheckoutForm — module-level (required for useStripe / useElements)
// ─────────────────────────────────────────────────────────────────────────────
function CheckoutForm({
    eventData, paymentData, paymentIntentId, reservationId, paymentIntent,
    total, quantity, paymentMethod, attendeeInfo,
    setPaymentSuccess, setActiveStep,
    setPaymentError, paymentError,
    processingPayment, setProcessingPayment,
}) {
    const stripe = useStripe();
    const elements = useElements();

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
                // Backend: const { paymentIntentId, reservationId } = req.body
                // Use direct props (avoids stale-closure issue with paymentData state)
                const pid = paymentIntentId || paymentData?.paymentIntentId;
                const rid = reservationId || paymentData?.reservationId;
                console.log('confirm-event-payment:', { paymentIntentId: pid, reservationId: rid });

                await axiosInstance.post('event-payments/confirm-event-payment', {
                    paymentIntentId: pid,
                    reservationId: rid,
                });

                setPaymentSuccess(true);
                setActiveStep(3);
            }
        } catch (err) {
            console.error('confirm-event-payment error:', err?.response?.data ?? err);
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
        <motion.div key="s2" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.28 }}>
            <SectionTitle>Confirm & Pay</SectionTitle>

            {/* Attendee recap */}
            <Box sx={{ background: SURFACE, borderRadius: 3, p: 2.5, mb: 2.5, border: `1.5px solid ${BORDER}` }}>
                <Typography sx={{ fontSize: 12, fontWeight: 700, color: '#6b7a90', fontFamily: '"Red Hat Display", sans-serif', mb: 1.5, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Attendee</Typography>
                <InfoRow><Label>Name</Label>  <Value>{attendeeInfo.name}</Value></InfoRow>
                <InfoRow><Label>Email</Label> <Value>{attendeeInfo.email}</Value></InfoRow>
                <InfoRow><Label>Phone</Label> <Value>{attendeeInfo.phone}</Value></InfoRow>
            </Box>

            {/* Order recap */}
            <Box sx={{ background: SURFACE, borderRadius: 3, p: 2.5, mb: 2.5, border: `1.5px solid ${BORDER}` }}>
                <Typography sx={{ fontSize: 14, fontWeight: 700, fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537', mb: 2 }}>{eventData?.event_name}</Typography>
                <Divider sx={{ borderColor: BORDER, mb: 2 }} />
                <InfoRow><Label>Tickets</Label>        <Value>{quantity} × ${eventData?.minPrice}</Value></InfoRow>
                <InfoRow><Label>Payment Method</Label> <Value sx={{ textTransform: 'capitalize' }}>{paymentMethod === 'card' ? 'Credit / Debit Card' : paymentMethod}</Value></InfoRow>
                <InfoRow><Label>Booking Fee</Label>    <Value>$0.00</Value></InfoRow>
                <InfoRow><Label>Tax</Label>            <Value>$0.00</Value></InfoRow>
                <Divider sx={{ borderColor: BORDER, my: 2 }} />
                <InfoRow>
                    <Typography sx={{ fontSize: 15, fontWeight: 800, fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537' }}>Total</Typography>
                    <Typography sx={{ fontSize: 22, fontWeight: 800, fontFamily: '"Red Hat Display", sans-serif', background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>${total}</Typography>
                </InfoRow>
            </Box>

            {/* Stripe CardElement */}
            {paymentMethod === 'card' && (
                <Box sx={{ mb: 2.5 }}>
                    <Typography sx={{ fontSize: 12, fontWeight: 600, color: '#6b7a90', fontFamily: '"Red Hat Display", sans-serif', mb: 1, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Card Details</Typography>
                    <Box sx={{ border: `1.5px solid ${BORDER}`, borderRadius: 2, p: 1.5, background: '#fff' }}>
                        <CardElement options={{ style: { base: { fontSize: '15px', fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537', '::placeholder': { color: '#b0bac9' } }, invalid: { color: '#e55' } } }} />
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
                    : <><LockIcon sx={{ fontSize: 14, mr: 0.5 }} /> Pay ${total}</>
                }
            </PrimaryButton>
        </motion.div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// PaymentPage
// ─────────────────────────────────────────────────────────────────────────────
export default function EventsPaymentsPage() {
    const params = useParams();
    const router = useRouter();

    const [activeStep, setActiveStep] = useState(0);
    const [eventData, setEventData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [processingPayment, setProcessingPayment] = useState(false);
    const [paymentError, setPaymentError] = useState('');
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [paymentIntent, setPaymentIntent] = useState(null);
    const [paymentData, setPaymentData] = useState(null);


    const [attendeeInfo, setAttendeeInfo] = useState({ name: '', email: '', phone: '' });
    const [attendeeErrors, setAttendeeErrors] = useState({});

    const eventSlug = params?.slug;

    useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
        try {
            const user = JSON.parse(storedUser);

            setAttendeeInfo({
                name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
                email: user.email || '',
                phone: user.phoneNumber || '',
            });
        } catch (error) {
            console.error('Error parsing user from localStorage', error);
        }
    }
}, []);


    useEffect(() => {
        if (!eventSlug) return;
        (async () => {
            try {
                const res = await axiosInstance.get(`/frontendApis/geteventbyslug/${eventSlug}`);
                const event = res.data?.event;
                // Log full event so we can see the exact ticket structure from slug API
                console.log("eventData from slug API:", JSON.stringify(event, null, 2));
                setEventData(event);
            } catch (err) {
                console.error('fetchEvent error:', err);
            } finally {
                setLoading(false);
            }
        })();
    }, [eventSlug]);


    const validateAttendee = () => {
        const errs = {};
        if (!attendeeInfo.name.trim()) errs.name = 'Name is required';
        if (!attendeeInfo.email.trim()) errs.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(attendeeInfo.email)) errs.email = 'Enter a valid email';
        if (!attendeeInfo.phone.trim()) errs.phone = 'Phone is required';
        else if (!/^\+?[\d\s\-]{7,15}$/.test(attendeeInfo.phone)) errs.phone = 'Enter a valid phone number';
        setAttendeeErrors(errs);
        return Object.keys(errs).length === 0;
    };


    const handleNext = async () => {
        setPaymentError('');

        // Step 0 → 1 : validate attendee
        if (activeStep === 0) {
            if (!validateAttendee()) return;
            setActiveStep(s => s + 1);
            return;
        }

        // Step 1 → 2 : create payment intent
        if (activeStep === 1) {
            setProcessingPayment(true);

            // ── Build the payload ────────────────────────────────────────────
            // userId lives inside the 'user' JSON string, not as a standalone key
            let userId = null;
            try {
                const raw = localStorage.getItem('user');
                if (raw) {
                    const parsed = JSON.parse(raw);
                    // support _id (Mongo) or id
                    userId = parsed?._id || parsed?.id || null;
                }
            } catch {
                console.warn('Could not parse user from localStorage');
            }

            // Try every path the slug API might use for the ticket ID
            const ticketId =
                eventData?.ticket_sections?.[0]?.ticket_types?.[0]?._id  // ticket_sections[].ticket_types[]
                || eventData?.ticketTypes?.[0]?._id                        // ticketTypes[]
                || eventData?.tickets?.[0]?._id                            // tickets[]
                || eventData?.ticket_types?.[0]?._id                       // ticket_types[] (top-level)
                || null;

            console.log('resolved ticketId:', ticketId);
            console.log('ticket_sections:', eventData?.ticket_sections);
            console.log('ticketTypes:', eventData?.ticketTypes);
            console.log('ticket_types:', eventData?.ticket_types);

            if (!userId) console.warn('userId is null — not logged in?');
            if (!ticketId) console.error('ticketId still undefined — check console logs above for ticket paths');


            const payload = {
                eventId: eventData._id,
                userId,
                tickets: [
                    {
                        ticketTypeId: ticketId,
                        quantity,
                    },
                ],
                attendeeInfo: {
                    name: attendeeInfo.name.trim(),
                    email: attendeeInfo.email.trim(),
                    phone: attendeeInfo.phone.trim(),
                },
            };

            console.log('create-event-payment-intent payload:', payload);

            try {
                const res = await axiosInstance.post(
                    'event-payments/create-event-payment-intent',
                    payload
                );

                console.log('create-event-payment-intent response:', res.data);

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
                console.error(`create-event-payment-intent ${status}:`, responseData);



                const msg =
                    responseData?.message
                    || responseData?.error
                    || (Array.isArray(responseData?.errors)
                        ? responseData.errors.map(e => e.msg || e.message).join(', ')
                        : null)
                    || `HTTP ${status} — see debug info below`;

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

    // ── Helpers ──────────────────────────────────────────────────────────────
    const formatDate = d =>
        d ? new Date(d).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }) : '';

    const getImg = p => {
        if (!p) return '/placeholder-event.jpg';
        if (p.startsWith('http')) return p;
        const base = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') ?? '';
        return `${base}${p.startsWith('/') ? '' : '/'}${p}`;
    };

    const total = eventData ? eventData.minPrice * quantity : 0;


    if (loading)
        return (
            <ThemeProvider theme={theme}>
                <PageWrapper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box textAlign="center">
                        <CircularProgress size={44} sx={{ color: ACCENT }} />
                        <Typography sx={{ mt: 2, fontSize: 14, color: '#8a94a6', fontFamily: '"Red Hat Display", sans-serif' }}>Loading event details…</Typography>
                    </Box>
                </PageWrapper>
            </ThemeProvider>
        );

    if (!eventData)
        return (
            <ThemeProvider theme={theme}>
                <PageWrapper sx={{ py: 8 }}>
                    <Container maxWidth="sm">
                        <Alert severity="error" sx={{ borderRadius: 3 }}>
                            Event not found. <Button size="small" onClick={() => router.back()}>Go Back</Button>
                        </Alert>
                    </Container>
                </PageWrapper>
            </ThemeProvider>
        );


    return (
        <ThemeProvider theme={theme}>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;600;700;800&display=swap');`}</style>

            <PageWrapper sx={{ py: { xs: 20, md: 20 } }}>
                <Container maxWidth="lg">

                    {/* Breadcrumb */}
                    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                        <Breadcrumbs separator={<ChevronRightIcon sx={{ fontSize: 14, color: '#b0bac9' }} />} sx={{ mb: 3 }}>
                            {['Home', 'Events', eventData?.event_name, 'Payment'].map((crumb, i, arr) =>
                                i < arr.length - 1
                                    ? <MuiLink key={crumb} component={Link} href={i === 0 ? '/' : i === 1 ? '/events' : `/events/${eventData?.eventSlug}`} underline="hover" sx={{ fontSize: 13, color: '#8a94a6', fontFamily: '"Red Hat Display", sans-serif', fontWeight: 500 }}>{crumb}</MuiLink>
                                    : <Typography key={crumb} sx={{ fontSize: 13, color: '#1c2537', fontFamily: '"Red Hat Display", sans-serif', fontWeight: 600 }}>{crumb}</Typography>
                            )}
                        </Breadcrumbs>
                    </motion.div>

                    {/* Title */}
                    <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.05 }}>
                        <Box sx={{ mb: 5, mt: 2 }}>
                            <Typography sx={{ fontSize: { xs: 20, md: 24 }, fontWeight: 700, fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537', lineHeight: 1.3 }}>Complete Your Booking</Typography>
                            <Typography sx={{ fontSize: 13, color: '#9aa3b0', fontFamily: '"Red Hat Display", sans-serif', mt: 0.8 }}>Secure your spot in just a few steps</Typography>
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

                                        {/* ── Step 0 ── */}
                                        {activeStep === 0 && (
                                            <motion.div key="s0" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.28 }}>
                                                <SectionTitle>Review Event Details</SectionTitle>
                                                <Box sx={{ borderRadius: 3, overflow: 'hidden', mb: 3, border: `1.5px solid ${BORDER}`, background: SURFACE }}>
                                                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
                                                        <Box component="img" src={getImg(eventData?.image)} alt={eventData?.event_name} sx={{ width: { xs: '100%', sm: 160 }, height: { xs: 160, sm: 'auto' }, objectFit: 'cover', flexShrink: 0 }} />
                                                        <Box sx={{ p: 2.5 }}>
                                                            <Typography sx={{ fontSize: 15, fontWeight: 700, fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537', mb: 1.5 }}>{eventData?.event_name}</Typography>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                                                <CalendarTodayIcon sx={{ fontSize: 15, color: ACCENT }} />
                                                                <Typography sx={{ fontSize: 13, color: '#6b7a90', fontFamily: '"Red Hat Display", sans-serif' }}>{formatDate(eventData?.start_date)}</Typography>
                                                            </Box>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                                <LocationOnIcon sx={{ fontSize: 15, color: ACCENT }} />
                                                                <Typography sx={{ fontSize: 13, color: '#6b7a90', fontFamily: '"Red Hat Display", sans-serif' }}>{eventData?.city}, {eventData?.state}, {eventData?.country}</Typography>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Box>

                                                <SectionTitle>Number of Tickets</SectionTitle>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', border: `1.5px solid ${BORDER}`, borderRadius: 3, overflow: 'hidden', background: '#fff' }}>
                                                        <Button onClick={() => setQuantity(q => Math.max(1, q - 1))} sx={{ minWidth: 40, height: 40, fontWeight: 700, fontSize: 18, color: '#6b7a90' }}>-</Button>
                                                        <Typography sx={{ px: 2, fontWeight: 700, fontSize: 15, fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537' }}>{quantity}</Typography>
                                                        <Button onClick={() => setQuantity(q => Math.min(10, q + 1))} sx={{ minWidth: 40, height: 40, fontWeight: 700, fontSize: 18, color: '#6b7a90' }}>+</Button>
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={{ fontSize: 13, color: '#8a94a6', fontFamily: '"Red Hat Display", sans-serif' }}>Price per ticket</Typography>
                                                        <Typography sx={{ fontSize: 18, fontWeight: 800, fontFamily: '"Red Hat Display", sans-serif', background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>${eventData?.minPrice}</Typography>
                                                    </Box>
                                                </Box>

                                                <SectionTitle>Attendee Information</SectionTitle>
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
                                                                value={attendeeInfo[f.key]}
                                                                onChange={e => { setAttendeeInfo(v => ({ ...v, [f.key]: e.target.value })); setAttendeeErrors(v => ({ ...v, [f.key]: '' })); }}
                                                                error={!!attendeeErrors[f.key]}
                                                                helperText={attendeeErrors[f.key]}
                                                                InputProps={{ startAdornment: f.icon }}
                                                                sx={inputSx}
                                                            />
                                                        </Box>
                                                    ))}
                                                </Box>
                                            </motion.div>
                                        )}

                                        {/* ── Step 1 ── */}
                                        {activeStep === 1 && (
                                            <motion.div key="s1" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.28 }}>
                                                <SectionTitle>Select Payment Method</SectionTitle>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
                                                    {[
                                                        { id: 'card', icon: <CreditCardIcon sx={{ fontSize: 22, color: paymentMethod === 'card' ? ACCENT : '#9aa3b0' }} />, label: 'Credit / Debit Card', sub: 'Visa, Mastercard, Rupay & more' },
                                                        //{ id: 'paypal', icon: <PaymentIcon sx={{ fontSize: 22, color: paymentMethod === 'paypal' ? ACCENT : '#9aa3b0' }} />, label: 'PayPal', sub: 'Pay with your PayPal account' },
                                                        //{ id: 'razorpay', icon: <AccountBalanceIcon sx={{ fontSize: 22, color: paymentMethod === 'razorpay' ? ACCENT : '#9aa3b0' }} />, label: 'Razorpay', sub: 'UPI, Net Banking & Wallets' },
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

                                                {/* Error + debug info */}
                                                {paymentError && (
                                                    <Alert severity="error" sx={{ borderRadius: 2, fontSize: 13, fontFamily: '"Red Hat Display", sans-serif' }}>
                                                        {paymentError}
                                                    </Alert>
                                                )}
                                            </motion.div>
                                        )}

                                        {/* ── Step 2 ── */}
                                        {activeStep === 2 && paymentIntent && (
                                            <Elements stripe={stripePromise} options={{ clientSecret: paymentIntent }}>
                                                <CheckoutForm
                                                    eventData={eventData}
                                                    paymentData={paymentData}
                                                    paymentIntentId={paymentData?.paymentIntentId}
                                                    reservationId={paymentData?.reservationId}
                                                    paymentIntent={paymentIntent}
                                                    total={total}
                                                    quantity={quantity}
                                                    paymentMethod={paymentMethod}
                                                    attendeeInfo={attendeeInfo}
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
                                                <Typography sx={{ fontSize: 22, fontWeight: 800, fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537', mb: 1 }}>Booking Confirmed!</Typography>
                                                <Typography sx={{ fontSize: 14, color: '#8a94a6', fontFamily: '"Red Hat Display", sans-serif', mb: 4, maxWidth: 360, mx: 'auto' }}>
                                                    Thank you! A confirmation has been sent to {attendeeInfo.email}.
                                                </Typography>
                                                <PrimaryButton component={Link} href="/events" size="medium">Browse More Events</PrimaryButton>
                                            </motion.div>
                                        )}

                                    </AnimatePresence>

                                    {/* Navigation */}
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
                                                    <EventIcon sx={{ fontSize: 20, color: '#fff' }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ fontSize: 13, fontWeight: 700, fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537', lineHeight: 1.3 }}>{eventData?.event_name}</Typography>
                                                    <Typography sx={{ fontSize: 12, color: '#8a94a6', fontFamily: '"Red Hat Display", sans-serif' }}>{quantity} ticket{quantity > 1 ? 's' : ''}</Typography>
                                                </Box>
                                            </Box>
                                            <Divider sx={{ borderColor: BORDER, mb: 2 }} />
                                            <InfoRow><Label>Subtotal</Label>    <Value>${total}</Value></InfoRow>
                                            <InfoRow><Label>Booking Fee</Label> <Value>$0.00</Value></InfoRow>
                                            <InfoRow><Label>Tax</Label>         <Value>$0.00</Value></InfoRow>
                                            <Divider sx={{ borderColor: BORDER, my: 2 }} />
                                            <InfoRow>
                                                <Typography sx={{ fontSize: 14, fontWeight: 800, fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537' }}>Total</Typography>
                                                <Typography sx={{ fontSize: 20, fontWeight: 800, fontFamily: '"Red Hat Display", sans-serif', background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>${total}</Typography>
                                            </InfoRow>
                                        </CardContent>
                                    </GlassCard>

                                    {/* Attendee recap */}
                                    {attendeeInfo.name && activeStep > 0 && (
                                        <Fade in>
                                            <GlassCard sx={{ mt: 2 }}>
                                                <CardContent sx={{ p: 2.5 }}>
                                                    <Typography sx={{ fontSize: 12, fontWeight: 700, color: '#6b7a90', fontFamily: '"Red Hat Display", sans-serif', mb: 1.5, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Attendee</Typography>
                                                    <InfoRow><Label>Name</Label>  <Value>{attendeeInfo.name}</Value></InfoRow>
                                                    <InfoRow><Label>Email</Label> <Value sx={{ fontSize: 12 }}>{attendeeInfo.email}</Value></InfoRow>
                                                    <InfoRow><Label>Phone</Label> <Value>{attendeeInfo.phone}</Value></InfoRow>
                                                </CardContent>
                                            </GlassCard>
                                        </Fade>
                                    )}

                                    <Box sx={{ mt: 2, p: 2, textAlign: 'center' }}>
                                        <Typography sx={{ fontSize: 12, color: '#aab3c0', fontFamily: '"Red Hat Display", sans-serif', lineHeight: 1.7 }}>
                                            By completing this purchase you agree to our{' '}
                                            <MuiLink href="#" underline="hover" sx={{ color: ACCENT, fontWeight: 600 }}>Terms of Service</MuiLink>{' '}and{' '}
                                            <MuiLink href="#" underline="hover" sx={{ color: ACCENT, fontWeight: 600 }}>Cancellation Policy</MuiLink>.
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
