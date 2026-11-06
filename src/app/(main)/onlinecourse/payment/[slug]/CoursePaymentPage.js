'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
    Box,
    Container,
    Paper,
    Typography,
    Grid,
    Button,
    Divider,
    TextField,
    Alert,
    Card,
    CardContent,
    CircularProgress,
    Breadcrumbs,
    Link as MuiLink,
    Avatar,
    Fade,
    Zoom,
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
import axiosInstance from '@/lib/axios';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51T7DerCfwCnOffq5q9owbaBgwHEHSVxzweL6Fd3rinQrlL6GDgy1YSoGkLwgu954aANtgjXamwv4veL6YchJOpfK007Yk9w01a');

// ─── Theme ──────────────────────────────────────────────────────────────────
const theme = createTheme({
    typography: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontSize: 14,
    },
});

// ─── Constants ───────────────────────────────────────────────────────────────
const GRAD_SELECTED = 'linear-gradient(135deg, #5fa6e8, #c2b7ff)';
const GRAD_DEFAULT = 'linear-gradient(135deg, #5fa6e8, #b7d2ff)';
const ACCENT = '#5fa6e8';
const ACCENT_DARK = '#4a8ecf';
const SURFACE = '#f6f8fc';
const BORDER = '#e4e9f2';

// ─── Styled Components ───────────────────────────────────────────────────────
const PageWrapper = styled(Box)({
    minHeight: '100vh',
    background: '#f0f4fa',
    fontFamily: '"Red Hat Display", sans-serif',
});

const GlassCard = styled(Card)({
    borderRadius: 20,
    border: `1px solid ${BORDER}`,
    boxShadow: '0 2px 20px rgba(95, 166, 232, 0.08)',
    background: '#ffffff',
    transition: 'box-shadow 0.25s ease',
    '&:hover': {
        boxShadow: '0 6px 28px rgba(95, 166, 232, 0.13)',
    },
});

const PrimaryButton = styled(Button)({
    background: GRAD_SELECTED,
    color: '#fff',
    fontFamily: '"Red Hat Display", sans-serif',
    fontWeight: 700,
    fontSize: 14,
    textTransform: 'none',
    borderRadius: 12,
    padding: '10px 28px',
    boxShadow: '0 4px 14px rgba(95, 166, 232, 0.35)',
    transition: 'all 0.25s ease',
    '&:hover': {
        background: `linear-gradient(135deg, ${ACCENT_DARK}, #a89cf0)`,
        boxShadow: '0 6px 20px rgba(95, 166, 232, 0.45)',
        transform: 'translateY(-1px)',
    },
    '&:disabled': {
        background: '#d5dde8',
        boxShadow: 'none',
        color: '#9aa3b0',
    },
});

const OutlineButton = styled(Button)({
    fontFamily: '"Red Hat Display", sans-serif',
    fontWeight: 600,
    fontSize: 14,
    textTransform: 'none',
    borderRadius: 12,
    padding: '10px 24px',
    color: '#6b7a90',
    border: '1.5px solid #d5dde8',
    background: '#fff',
    transition: 'all 0.2s ease',
    '&:hover': {
        borderColor: ACCENT,
        color: ACCENT,
        background: 'rgba(95, 166, 232, 0.04)',
    },
    '&:disabled': {
        opacity: 0.4,
    },
});

// const StepDot = styled(Box)(({ active, done }) => ({
//     width: 32,
//     height: 32,
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: 13,
//     fontWeight: 700,
//     fontFamily: '"Red Hat Display", sans-serif',
//     transition: 'all 0.3s ease',
//     ...(done
//         ? { background: GRAD_SELECTED, color: '#fff' }
//         : active
//             ? { background: GRAD_DEFAULT, color: '#fff', boxShadow: '0 0 0 4px rgba(95,166,232,0.18)' }
//             : { background: '#e8edf4', color: '#9aa3b0' }),
// }));


const StepDot = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'active' && prop !== 'done',
})(({ active, done }) => ({
    width: 32,
    height: 32,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 13,
    fontWeight: 700,
    fontFamily: '"Red Hat Display", sans-serif',
    transition: 'all 0.3s ease',
    ...(done
        ? { background: GRAD_SELECTED, color: '#fff' }
        : active
            ? { background: GRAD_DEFAULT, color: '#fff', boxShadow: '0 0 0 4px rgba(95,166,232,0.18)' }
            : { background: '#e8edf4', color: '#9aa3b0' }),
}));

const StepConnector = styled(Box)(({ done }) => ({
    flex: 1,
    height: 2,
    borderRadius: 2,
    margin: '0 6px',
    marginBottom: 18,
    background: done
        ? GRAD_SELECTED
        : '#e4e9f2',
    transition: 'background 0.4s ease',
}));

const PayCard = styled(Paper)(({ selected }) => ({
    borderRadius: 14,
    border: selected ? `2px solid ${ACCENT}` : `1.5px solid ${BORDER}`,
    padding: '14px 18px',
    cursor: 'pointer',
    background: selected ? 'rgba(95,166,232,0.04)' : '#fff',
    boxShadow: selected ? '0 4px 16px rgba(95,166,232,0.12)' : 'none',
    transition: 'all 0.22s ease',
    '&:hover': {
        borderColor: ACCENT,
        boxShadow: '0 4px 16px rgba(95,166,232,0.12)',
        transform: 'translateY(-1px)',
    },
}));

const InfoRow = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '6px 0',
});

const Label = styled(Typography)({
    fontFamily: '"Red Hat Display", sans-serif',
    fontSize: 13,
    color: '#8a94a6',
    fontWeight: 500,
});

const Value = styled(Typography)({
    fontFamily: '"Red Hat Display", sans-serif',
    fontSize: 13,
    color: '#1c2537',
    fontWeight: 600,
});

const SectionTitle = styled(Typography)({
    fontFamily: '"Red Hat Display", sans-serif',
    fontSize: 15,
    fontWeight: 700,
    color: '#1c2537',
    marginBottom: 14,
});

const FieldLabel = styled(Typography)({
    fontFamily: '"Red Hat Display", sans-serif',
    fontSize: 12,
    fontWeight: 600,
    color: '#6b7a90',
    marginBottom: 5,
    letterSpacing: '0.03em',
    textTransform: 'uppercase',
});

const styledInput = {
    '& .MuiOutlinedInput-root': {
        borderRadius: 2,
        fontFamily: '"Red Hat Display", sans-serif',
        fontSize: 14,
        background: SURFACE,
        '& fieldset': { borderColor: BORDER },
        '&:hover fieldset': { borderColor: ACCENT },
        '&.Mui-focused fieldset': { borderColor: ACCENT },
    },
    '& .MuiInputLabel-root': {
        fontFamily: '"Red Hat Display", sans-serif',
        fontSize: 14,
    },
};

// ─── Mock Data ────────────────────────────────────────────────────────────────
const MOCK_EVENT = {
    _id: 'mock-event-123',
    event_name: 'Eye Gazing Experience',
    eventSlug: 'eye-gazing-experience',
    image: '/OurSignatureOfferings4.png',
    minPrice: 20,
    city: 'Mysuru',
    state: 'Karnataka',
    country: 'India',
    start_date: '2026-03-27T05:48:26.000Z',
    end_date: '2026-04-24T07:48:26.000Z',
    event_description: 'Sit silently with a partner and maintain eye contact',
    availableTickets: 50,
    event_capacity: 100,
};


const STEPS = ['Course Details', 'Payment Method', 'Confirm & Pay'];



function CourseCheckoutForm({
    courseData,
    paymentData,
    total,
    setPaymentSuccess,
    setActiveStep,
    setPaymentError,
    paymentError,
    processingPayment,
    setProcessingPayment,
    onPayReady 
}) {
  const stripe = useStripe();
  const elements = useElements();


  console.log(total)

  const handlePay = async () => {
    if (!stripe || !elements) return;

    

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setPaymentError("Card input not ready");
      return;
    }

    if (processingPayment) return;

    setProcessingPayment(true);
    setPaymentError('');

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        paymentData.clientSecret,
        {
          payment_method: {
            card: cardElement,
          },
        }
      );

      if (error) {
        setPaymentError(error.message);
        return;
      }

      console.log(paymentIntent.status,"hello")

      if (paymentIntent.status === 'succeeded') {
        const res = await axiosInstance.post(
          "/course-payments/confirm-course-payment",
          {
            paymentIntentId: paymentData.paymentIntentId,
            enrollmentId: paymentData.enrollmentId,
          }
        );

        console.log(res,"crs")

        setPaymentSuccess(true);
        setActiveStep(3);
      }

    } catch (err) {
      console.error(err);
      console.log(err);
      setPaymentError("Payment failed");
    } finally {
      setProcessingPayment(false);
    }
  };

  useEffect(() => {
  if (onPayReady && typeof handlePay === 'function') {
    onPayReady(() => handlePay); // 🔥 IMPORTANT (wrap it)
  }
}, [stripe, elements]);
    
    return (
        <Box>
            <SectionTitle>Confirm & Pay</SectionTitle>

            <Box sx={{ mb: 2 }}>
                <CardElement />
            </Box>

            {paymentError && <Alert severity="error">{paymentError}</Alert>}

            {/* <PrimaryButton fullWidth onClick={handlePay}>
                kk ${total}
            </PrimaryButton> */}
        </Box>
    );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function CoursePaymentPage({slug}) {
    const router = useRouter();
    const [activeStep, setActiveStep] = useState(0);
    // const [eventData, setEventData] = useState(null);
    const [courseData, setCourseData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [processingPayment, setProcessingPayment] = useState(false);
    const [paymentError, setPaymentError] = useState('');
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '', name: '' });
    const [paymentIntentData, setPaymentIntentData] = useState(null);


    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/frontendApis/GetCourseBySlug/${slug}`
                );

                const data = await res.json();
                setCourseData(data?.course || null);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchCourse();
        }
    }, [slug]);
   

    const [attendeeInfo, setAttendeeInfo] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const [attendeeErrors, setAttendeeErrors] = useState({});

    const [payHandler, setPayHandler] = useState(null);


    const validateAttendee = () => {
        const errs = {};

        if (!attendeeInfo.name.trim()) {
            errs.name = 'Name is required';
        }

        if (!attendeeInfo.email.trim()) {
            errs.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(attendeeInfo.email)) {
            errs.email = 'Enter valid email';
        }

        if (!attendeeInfo.phone.trim()) {
            errs.phone = 'Phone is required';
        } else if (!/^\+?[\d\s\-]{7,15}$/.test(attendeeInfo.phone)) {
            errs.phone = 'Enter valid phone';
        }

        setAttendeeErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const courseId = courseData?._id;

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setAttendeeInfo({
                name: `${user.firstName} ${user.lastName}`,
                email: user.email,
                phone: user.phoneNumber || '',
            });
        }
    }, []);

    // useEffect(() => {
    //     setTimeout(() => { setCourseData(courseData); setLoading(false); }, 1000);
    // }, [courseId]);


    const handleNext = async () => {
        try {
            if (activeStep === 0) {
                // ✅ validate first
                if (!validateAttendee()) return;

                // ✅ then call API
                await createPaymentIntent();
            }

            setActiveStep((prev) => prev + 1);

        } catch (err) {
            console.error(err);
        }
    };

    const handleBack = () => setActiveStep(s => s - 1);

    // const handlePayment = async () => {
    //     setProcessingPayment(true);
    //     setPaymentError('');
    //     setTimeout(() => {
    //         setPaymentSuccess(true);
    //         setActiveStep(3);
    //         setProcessingPayment(false);
    //     }, 2000);
    // };

    const formatDate = (d) => {
        if (!d) return '';
        return new Date(d).toLocaleDateString('en-US', {
            weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
        });
    };

    const getImg = (p) => {
        if (!p) return '/placeholder-event.jpg';
        if (p.startsWith('http')) return p;
        const base = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') ?? '';
        return `${base}${p.startsWith('/') ? '' : '/'}${p}`;
    };

    const getTotalAmount = (course, quantity = 1) => {
        if (!course) return 0;

        // ✅ FREE
        if (course.course_paymenttype === 'free') {
            return 0;
        }

        // ✅ ONE-TIME
        if (course.course_paymenttype === 'onetimepayment') {
            return (course.amountOneTime || 0) * quantity;
        }

        // ✅ RECURRING
        if (course.course_paymenttype === 'recurring') {
            const installment = Number(course.installment || 0);

            if (course.amountInMonth) {
                return course.amountInMonth * installment;
            }

            if (course.amountInWeek) {
                return course.amountInWeek * installment;
            }

            if (course.amountInByWeekly) {
                return course.amountInByWeekly * installment;
            }
        }

        return 0;
    };

    const total = getTotalAmount(courseData, quantity);

    const handleCardChange = (f) => (e) => setCardDetails(c => ({ ...c, [f]: e.target.value }));

    const createPaymentIntent = async () => {
        try {
            // ✅ get user from localStorage
            const user = JSON.parse(localStorage.getItem("user"));

            if (!user?._id) {
                throw new Error("User not logged in");
            }

            // ✅ attendee info (using your structure)
            const attendeeInfoPayload = {
                name: attendeeInfo.name.trim(),
                email: attendeeInfo.email.trim(),
                phone: attendeeInfo.phone.trim(),
            };

            // ✅ determine paymentType
            let paymentType = "one_time";
            let installment;

            if (courseData?.course_paymenttype === "recurring") {
                if (courseData?.amountInMonth) {
                    paymentType = "monthly";
                } else if (courseData?.amountInByWeekly) {
                    paymentType = "biweekly";
                } else if (courseData?.amountInWeek) {
                    paymentType = "weekly";
                }

                installment = courseData?.installment;
            }

            if (courseData?.course_paymenttype === "onetimepayment") {
                paymentType = "one_time";
            }

            // ✅ final payload
            const payload = {
                courseId: courseData?._id,
                userId: user._id,
                paymentType,
                attendeeInfo: attendeeInfoPayload,
                ...(installment && { installment }),
            };

            console.log("🚀 Payload:", payload);

            // ✅ API call (with token)
            const res = await axiosInstance.post(
                "/course-payments/create-course-payment-intent",
                payload,
            );

            console.log("✅ Payment Intent Response:", res.data);

            // ✅ store response (IMPORTANT)
            setPaymentIntentData(res.data);

            return res.data;

        } catch (error) {
            console.error("❌ Payment intent error:", error);
            throw error;
        }
    };

    if (loading) return (
        <ThemeProvider theme={theme}>
            <PageWrapper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box textAlign="center">
                    <CircularProgress size={44} sx={{ color: ACCENT }} />
                    <Typography sx={{ mt: 2, fontSize: 14, color: '#8a94a6', fontFamily: '"Red Hat Display", sans-serif' }}>
                        Loading Course details…
                    </Typography>
                </Box>
            </PageWrapper>
        </ThemeProvider>
    );

    if (!courseData) return (
        <ThemeProvider theme={theme}>
            <PageWrapper sx={{ py: 8 }}>
                <Container maxWidth="sm">
                    <Alert severity="error" sx={{ borderRadius: 3 }}>
                        Course not found.{' '}
                        <Button size="small" onClick={() => router.back()}>Go Back</Button>
                    </Alert>
                </Container>
            </PageWrapper>
        </ThemeProvider>
    );


    // 🔥 Helper function (put at top of file)
const getCoursePriceLabel = (course) => {
  if (!course) return '';

  // ✅ FREE
  if (course.course_paymenttype === 'free') {
    return 'Free';
  }

  // ✅ ONE-TIME
  if (course.course_paymenttype === 'onetimepayment') {
    return `${course.amountOneTime}`;
  }

  // ✅ RECURRING (EMI)
  if (course.course_paymenttype === 'recurring') {
    const installment = course.installment;

    if (course.amountInMonth) {
      return `${course.amountInMonth}/month${installment ? ` × ${installment}` : ''}`;
    }

    if (course.amountInWeek) {
      return `${course.amountInWeek}/week${installment ? ` × ${installment}` : ''}`;
    }

    if (course.amountInByWeekly) {
      return `${course.amountInByWeekly}/bi-week${installment ? ` × ${installment}` : ''}`;
    }
  }

  return '';
};

const getTotalRecurring = (course) => {
  const installment = Number(course.installment || 0);

  if (course.amountInWeek) {
    return course.amountInWeek * installment;
  }
  if (course.amountInMonth) {
    return course.amountInMonth * installment;
  }
  if (course.amountInByWeekly) {
    return course.amountInByWeekly * installment;
  }
  return null;
};

const priceLabel = getCoursePriceLabel(courseData);
const currencySymbol = courseData?.currency === 'USD' ? '$' : '₹';
const totalRecurring = getTotalRecurring(courseData);


const getRecurringTotal = (course) => {
  if (!course || course.course_paymenttype !== 'recurring') return null;

  const installment = Number(course.installment || 0);

  if (course.amountInWeek) return course.amountInWeek * installment;
  if (course.amountInMonth) return course.amountInMonth * installment;
  if (course.amountInByWeekly) return course.amountInByWeekly * installment;

  return null;
};

const recurringTotal = getRecurringTotal(courseData);

console.log(totalRecurring,"val")

    return (
        <ThemeProvider theme={theme}>
            {/* Google Font import via style tag */}
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;600;700;800&display=swap');`}</style>

            <PageWrapper sx={{ py: { xs: 20, md: 20 } }}>
                <Container maxWidth="lg">

                    {/* ── Breadcrumb ── */}
                    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                        <Breadcrumbs
                            separator={<ChevronRightIcon sx={{ fontSize: 14, color: '#b0bac9' }} />}
                            sx={{ mb: 3 }}
                        >
                            {['Home', 'Course', courseData?.course_title, 'Payment'].map((crumb, i, arr) => (
                                i < arr.length - 1 ? (
                                    <MuiLink
                                        key={crumb}
                                        component={Link}
                                        href={i === 0 ? '/' : i === 1 ? '/onlinecourse' : `/onlinecourse/${courseData?.courseSlug}`}
                                        underline="hover"
                                        sx={{ fontSize: 13, color: '#8a94a6', fontFamily: '"Red Hat Display", sans-serif', fontWeight: 500 }}
                                    >
                                        {crumb}
                                    </MuiLink>
                                ) : (
                                    <Typography key={crumb} sx={{ fontSize: 13, color: '#1c2537', fontFamily: '"Red Hat Display", sans-serif', fontWeight: 600 }}>
                                        {crumb}
                                    </Typography>
                                )
                            ))}
                        </Breadcrumbs>
                    </motion.div>

                    {/* ── Page Title ── */}
                    <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.05 }}>
                        <Box sx={{ mb: 5, mt: 2 }}>
                            <Typography
                                sx={{
                                    fontSize: { xs: 20, md: 24 },
                                    fontWeight: 700,
                                    fontFamily: '"Red Hat Display", sans-serif',
                                    color: '#1c2537',
                                    lineHeight: 1.3,
                                    letterSpacing: '-0.3px',
                                }}
                            >
                                Complete Your Booking
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: 13,
                                    fontWeight: 400,
                                    fontFamily: '"Red Hat Display", sans-serif',
                                    color: '#9aa3b0',
                                    mt: 0.8,
                                    letterSpacing: '0.01em',
                                }}
                            >
                                Secure your spot in just a few steps
                            </Typography>
                        </Box>
                    </motion.div>

                    <Grid container spacing={3}>

                        {/* ══ LEFT — Main Card ══ */}
                        <Grid item xs={12} md={8}>
                            <GlassCard>
                                <CardContent sx={{ p: { xs: 3, sm: 4 } }}>

                                    {/* ── Step Indicator ── */}
                                    {activeStep < 3 && (
                                        <Box sx={{ mb: 4 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                {STEPS.map((label, i) => (
                                                    <Box key={label} sx={{ display: 'flex', alignItems: 'center', flex: i < STEPS.length - 1 ? 1 : 'none' }}>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
                                                            <StepDot active={activeStep === i} done={activeStep > i}>
                                                                {activeStep > i ? <CheckCircleIcon sx={{ fontSize: 16 }} /> : i + 1}
                                                            </StepDot>
                                                            <Typography sx={{
                                                                fontSize: 11, fontWeight: 600,
                                                                fontFamily: '"Red Hat Display", sans-serif',
                                                                color: activeStep >= i ? ACCENT : '#b0bac9',
                                                                whiteSpace: 'nowrap',
                                                            }}>
                                                                {label}
                                                            </Typography>
                                                        </Box>
                                                        {i < STEPS.length - 1 && <StepConnector done={activeStep > i} />}
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Box>
                                    )}

                                    <AnimatePresence mode="wait">

                                        {/* ── Step 0: Event Details ── */}
                                        {activeStep === 0 && (
                                            <motion.div key="s0" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.28 }}>
                                                <SectionTitle>Review Event Details</SectionTitle>

                                                {/* Event Preview */}
                                                <Box sx={{
                                                    borderRadius: 3, overflow: 'hidden', mb: 3,
                                                    border: `1.5px solid ${BORDER}`, background: SURFACE,
                                                }}>
                                                    <Box sx={{ display: 'flex', gap: 0, flexDirection: { xs: 'column', sm: 'row' } }}>
                                                        <Box
                                                            component="img"
                                                            // src={getImg(eventData?.image)}
                                                            // src={courseData?.heroImage}
                                                            src={`${process.env.NEXT_PUBLIC_API_URL}/${courseData?.heroImage}`}
                                                            alt={courseData?.course_title}
                                                            sx={{ width: { xs: '100%', sm: 160 }, height: { xs: 160, sm: 'auto' }, objectFit: 'cover', flexShrink: 0 }}
                                                        />
                                                        <Box sx={{ p: 2.5 }}>
                                                            <Typography sx={{ fontSize: 15, fontWeight: 700, fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537', mb: 1.5 }}>
                                                                {courseData?.course_title}
                                                            </Typography>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                                                <CalendarTodayIcon sx={{ fontSize: 15, color: ACCENT }} />
                                                                <Typography sx={{ fontSize: 13, color: '#6b7a90', fontFamily: '"Red Hat Display", sans-serif' }}>
                                                                    {formatDate(courseData?.createdAt)}
                                                                </Typography>
                                                            </Box>
                                                            {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                                <LocationOnIcon sx={{ fontSize: 15, color: ACCENT }} />
                                                                <Typography sx={{ fontSize: 13, color: '#6b7a90', fontFamily: '"Red Hat Display", sans-serif' }}>
                                                                    {courseData?.city}, {courseData?.state}, {courseData?.country}
                                                                </Typography>
                                                            </Box> */}
                                                        </Box>
                                                    </Box>
                                                </Box>

                                                {/* Ticket Count */}
                                                {/* <SectionTitle>Number of Tickets</SectionTitle> */}
                                                <Box sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'stretch', // ✅ IMPORTANT (fix alignment)
                                                    gap: 3,
                                                    width: '100%',
                                                }}>
                                                    {/* <Box sx={{ display: 'flex', alignItems: 'center', border: `1.5px solid ${BORDER}`, borderRadius: 3, overflow: 'hidden', background: '#fff' }}>
                                                        <Button
                                                            onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                                            sx={{ minWidth: 40, height: 40, fontWeight: 700, fontSize: 18, color: '#6b7a90', fontFamily: '"Red Hat Display", sans-serif' }}
                                                        >-</Button>
                                                        <Typography sx={{ px: 2, fontWeight: 700, fontSize: 15, fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537' }}>
                                                            {quantity}
                                                        </Typography>
                                                        <Button
                                                            onClick={() => setQuantity(q => Math.min(10, q + 1))}
                                                            sx={{ minWidth: 40, height: 40, fontWeight: 700, fontSize: 18, color: '#6b7a90', fontFamily: '"Red Hat Display", sans-serif' }}
                                                        >+</Button>
                                                    </Box> */}
                                                    <Box sx={{ width: '100%' }}>
                                                        <Typography
                                                            sx={{
                                                                fontSize: 13,
                                                                color: '#8a94a6',
                                                                fontFamily: '"Red Hat Display", sans-serif',
                                                                mb: 0.5,
                                                            }}
                                                        >
                                                            Course Price
                                                        </Typography>

                                                        <Typography
                                                            sx={{
                                                                fontSize: 20,
                                                                fontWeight: 800,
                                                                fontFamily: '"Red Hat Display", sans-serif',
                                                                background: GRAD_SELECTED,
                                                                WebkitBackgroundClip: 'text',
                                                                WebkitTextFillColor: 'transparent',
                                                            }}
                                                        >
                                                            {priceLabel === 'Free'
                                                                ? 'Free'
                                                                : `${currencySymbol} ${priceLabel}`}
                                                        </Typography>

                                                        <Typography
                                                            sx={{
                                                                fontSize: 20,
                                                                fontWeight: 800,
                                                                fontFamily: '"Red Hat Display", sans-serif',
                                                                background: GRAD_SELECTED,
                                                                WebkitBackgroundClip: 'text',
                                                                WebkitTextFillColor: 'transparent',
                                                            }}
                                                        >

                                                            {totalRecurring && (
                                                                <span className="text-white/70 text-sm">
                                                                    Total: ${totalRecurring}
                                                                </span>
                                                            )}

                                                            
                                                        </Typography>

                                                       
                                                    </Box>


                                                    <Box sx={{ width: '100%' }}>
                                                        <SectionTitle sx={{ mb: 1 }}>Attendee Information</SectionTitle>

                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                gap: 2,
                                                                width: '100%',
                                                            }}
                                                        >
                                                            {[
                                                                {
                                                                    key: 'name',
                                                                    label: 'Full Name',
                                                                    placeholder: 'John Doe',
                                                                    type: 'text',
                                                                },
                                                                {
                                                                    key: 'email',
                                                                    label: 'Email Address',
                                                                    placeholder: 'john@example.com',
                                                                    type: 'email',
                                                                },
                                                                {
                                                                    key: 'phone',
                                                                    label: 'Phone Number',
                                                                    placeholder: '+91 98765 43210',
                                                                    type: 'tel',
                                                                },
                                                            ].map((field) => {



                                                                return (
                                                                <Box key={field.key}>
                                                                    <Typography
                                                                        sx={{
                                                                            fontSize: 12,
                                                                            fontWeight: 600,
                                                                            color: '#6b7a90',
                                                                            mb: 0.8,
                                                                            textTransform: 'uppercase',
                                                                        }}
                                                                    >
                                                                        {field.label}
                                                                    </Typography>

                                                                    <TextField
                                                                        fullWidth
                                                                        size="small"
                                                                        type={field.type}
                                                                        placeholder={field.placeholder}
                                                                        value={attendeeInfo[field.key]}
                                                                        onChange={(e) => {
                                                                            setAttendeeInfo((prev) => ({
                                                                                ...prev,
                                                                                [field.key]: e.target.value,
                                                                            }));

                                                                            setAttendeeErrors((prev) => ({
                                                                                ...prev,
                                                                                [field.key]: '',
                                                                            }));
                                                                        }}
                                                                        error={!!attendeeErrors[field.key]}
                                                                        helperText={attendeeErrors[field.key]}
                                                                        sx={styledInput}
                                                                    />
                                                                </Box>
                                                            )
                                                            })}
                                                        </Box>
                                                    </Box>
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
                                                                <Box sx={{
                                                                    width: 40, height: 40, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                                    background: paymentMethod === opt.id ? 'rgba(95,166,232,0.1)' : '#f0f4fa',
                                                                }}>
                                                                    {opt.icon}
                                                                </Box>
                                                                <Box sx={{ flex: 1 }}>
                                                                    <Typography sx={{ fontSize: 14, fontWeight: 700, fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537' }}>
                                                                        {opt.label}
                                                                    </Typography>
                                                                    <Typography sx={{ fontSize: 12, color: '#8a94a6', fontFamily: '"Red Hat Display", sans-serif' }}>
                                                                        {opt.sub}
                                                                    </Typography>
                                                                </Box>
                                                                <Box sx={{
                                                                    width: 18, height: 18, borderRadius: '50%',
                                                                    border: paymentMethod === opt.id ? 'none' : '2px solid #d5dde8',
                                                                    background: paymentMethod === opt.id ? GRAD_SELECTED : 'transparent',
                                                                    flexShrink: 0,
                                                                }} />
                                                            </Box>
                                                        </PayCard>
                                                    ))}
                                                </Box>

                                                {/* Card Fields */}
                                                {/* {paymentMethod === 'card' && (
                                                    <Fade in>
                                                        <Box sx={{ background: SURFACE, borderRadius: 3, p: 2.5, border: `1.5px solid ${BORDER}` }}>
                                                            <SectionTitle sx={{ mb: 2 }}>Card Details</SectionTitle>
                                                            <Grid container spacing={2}>
                                                                <Grid item xs={12}>
                                                                    <FieldLabel>Card Number</FieldLabel>
                                                                    <TextField fullWidth placeholder="1234 5678 9012 3456" value={cardDetails.number} onChange={handleCardChange('number')} size="small" sx={styledInput} />
                                                                </Grid>
                                                                <Grid item xs={6}>
                                                                    <FieldLabel>Expiry Date</FieldLabel>
                                                                    <TextField fullWidth placeholder="MM / YY" value={cardDetails.expiry} onChange={handleCardChange('expiry')} size="small" sx={styledInput} />
                                                                </Grid>
                                                                <Grid item xs={6}>
                                                                    <FieldLabel>CVV</FieldLabel>
                                                                    <TextField fullWidth placeholder="• • •" value={cardDetails.cvv} onChange={handleCardChange('cvv')} size="small" sx={styledInput} />
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <FieldLabel>Cardholder Name</FieldLabel>
                                                                    <TextField fullWidth placeholder="John Doe" value={cardDetails.name} onChange={handleCardChange('name')} size="small" sx={styledInput} />
                                                                </Grid>
                                                            </Grid>
                                                        </Box>
                                                    </Fade>
                                                )} */}
                                            </motion.div>
                                        )}

                                        {/* ── Step 2: Confirm ── */}
                                        {activeStep === 2 && paymentIntentData?.clientSecret && (
                                            <Elements
                                                stripe={stripePromise}
                                                options={{ clientSecret: paymentIntentData.clientSecret }}
                                            >
                                                <CourseCheckoutForm
                                                    courseData={courseData}
                                                    paymentData={paymentIntentData}
                                                    total={total}
                                                    setPaymentSuccess={setPaymentSuccess}
                                                    setActiveStep={setActiveStep}
                                                    setPaymentError={setPaymentError}
                                                    paymentError={paymentError}
                                                    processingPayment={processingPayment}
                                                    setProcessingPayment={setProcessingPayment}
                                                    onPayReady={setPayHandler}
                                                />
                                            </Elements>
                                        )}

                                        {/* ── Step 3: Success ── */}
                                        {activeStep === 3 && paymentSuccess && (
                                            <motion.div key="success" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} style={{ textAlign: 'center', padding: '48px 24px' }}>
                                                <Box sx={{
                                                    width: 80, height: 80, borderRadius: '50%', margin: '0 auto 24px',
                                                    background: GRAD_SELECTED, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    boxShadow: '0 8px 24px rgba(95,166,232,0.35)',
                                                }}>
                                                    <CheckCircleIcon sx={{ fontSize: 44, color: '#fff' }} />
                                                </Box>
                                                <Typography sx={{ fontSize: 22, fontWeight: 800, fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537', mb: 1 }}>
                                                    Your Learning Journey Begins Now
                                                </Typography>
                                                <Typography sx={{ fontSize: 14, color: '#8a94a6', fontFamily: '"Red Hat Display", sans-serif', mb: 4, maxWidth: 360, mx: 'auto' }}>
                                                    Thank you for your purchase. A confirmation has been sent to your email.
                                                </Typography>
                                                <PrimaryButton component={Link} href="/onlinecourse" size="medium">
                                                    Browse More Courses
                                                </PrimaryButton>
                                            </motion.div>
                                        )}

                                    </AnimatePresence>

                                    {/* ── Navigation Buttons ── */}
                                    {activeStep < 3 && (
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4, pt: 3, borderTop: `1px solid ${BORDER}` }}>
                                            <OutlineButton
                                                onClick={handleBack}
                                                disabled={activeStep === 0}
                                                startIcon={<ArrowBackIcon sx={{ fontSize: 16 }} />}
                                            >
                                                Back
                                            </OutlineButton>
                                            <PrimaryButton
                                                onClick={
                                                    activeStep === 2
                                                        ? () => {
                                                            if (typeof payHandler === 'function') {
                                                                payHandler();
                                                            } else {
                                                                console.warn("payHandler not ready");
                                                            }
                                                        }
                                                        : handleNext
                                                }
                                                disabled={
                                                    processingPayment ||
                                                    (activeStep === 2 && typeof payHandler !== 'function')
                                                }
                                                endIcon={!processingPayment && activeStep < 2 ? <ChevronRightIcon sx={{ fontSize: 16 }} /> : null}
                                            >
                                                {processingPayment ? (
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                        <CircularProgress size={16} color="inherit" />
                                                        <span>Processing…</span>
                                                    </Box>
                                                ) : activeStep === 2 ? (
                                                    <>
                                                        <LockIcon sx={{ fontSize: 14, mr: 0.5 }} />
                                                        Pay ${total}
                                                    </>
                                                ) : 'Continue'}
                                            </PrimaryButton>
                                        </Box>
                                    )}
                                </CardContent>
                            </GlassCard>
                        </Grid>

                        {/* ══ RIGHT — Order Summary ══ */}
                        <Grid item xs={12} md={4}>
                            <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
                                <Box sx={{ position: 'sticky', top: 24 }}>

                                    {/* Summary Card */}
                                    <GlassCard>
                                        <CardContent sx={{ p: 3 }}>
                                            <Typography sx={{ fontSize: 15, fontWeight: 700, fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537', mb: 2.5 }}>
                                                Order Summary
                                            </Typography>

                                            {/* Event Chip */}
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5, p: 1.5, background: SURFACE, borderRadius: 3, border: `1px solid ${BORDER}` }}>
                                                <Box sx={{
                                                    width: 40, height: 40, borderRadius: 2, flexShrink: 0,
                                                    background: GRAD_DEFAULT,
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                }}>
                                                    <EventIcon sx={{ fontSize: 20, color: '#fff' }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ fontSize: 13, fontWeight: 700, fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537', lineHeight: 1.3 }}>
                                                        {courseData?.course_title}
                                                    </Typography>
                                                    {/* <Typography sx={{ fontSize: 12, color: '#8a94a6', fontFamily: '"Red Hat Display", sans-serif' }}>
                                                        {quantity} ticket{quantity > 1 ? 's' : ''}
                                                    </Typography> */}
                                                </Box>
                                            </Box>

                                            <Divider sx={{ borderColor: BORDER, mb: 2 }} />

                                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mb: 2 }}>
                                                <InfoRow>
                                                    <Label>Subtotal</Label>
                                                    <Value>
                                                        {priceLabel === 'Free'
                                                            ? 'Free'
                                                            : `${currencySymbol} ${priceLabel}`}
                                                    </Value>
                                                </InfoRow>
                                                <InfoRow>
                                                    <Label>Booking Fee</Label>
                                                    <Value>$0.00</Value>
                                                </InfoRow>
                                                <InfoRow>
                                                    <Label>Tax</Label>
                                                    <Value>$0.00</Value>
                                                </InfoRow>
                                            </Box>

                                            <Divider sx={{ borderColor: BORDER, mb: 2 }} />

                                            <InfoRow>
                                                <Typography sx={{ fontSize: 14, fontWeight: 800, fontFamily: '"Red Hat Display", sans-serif', color: '#1c2537' }}>Total</Typography>
                                                {/* <Typography sx={{
                                                    fontSize: 20, fontWeight: 800, fontFamily: '"Red Hat Display", sans-serif',
                                                    background: GRAD_SELECTED, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                                                }}>
                                                    ${total}
                                                </Typography> */}

                                                <Typography
                                                    sx={{
                                                        fontSize: 20,
                                                        fontWeight: 800,
                                                        fontFamily: '"Red Hat Display", sans-serif',
                                                        background: GRAD_SELECTED,
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent',
                                                    }}
                                                >
                                                    {courseData?.course_paymenttype === 'recurring'
                                                        ? `${currencySymbol} ${recurringTotal}`
                                                        : priceLabel === 'Free'
                                                            ? 'Free'
                                                            : `${currencySymbol} ${total}`}
                                                </Typography>
                                            </InfoRow>
                                        </CardContent>
                                    </GlassCard>

                                    {/* Buyer recap (shows after step 0) */}
                                    {attendeeInfo.name && activeStep > 0 && (
                                        <Fade in>
                                            <GlassCard sx={{ mt: 2 }}>
                                                <CardContent sx={{ p: 2.5 }}>
                                                    <Typography sx={{ fontSize: 12, fontWeight: 700, color: '#6b7a90', fontFamily: '"Red Hat Display", sans-serif', mb: 1.5, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Student Name</Typography>
                                                    <InfoRow><Label>Name</Label>  <Value>{attendeeInfo.name}</Value></InfoRow>
                                                    <InfoRow><Label>Email</Label> <Value sx={{ fontSize: 12 }}>{attendeeInfo.email}</Value></InfoRow>
                                                    <InfoRow><Label>Phone</Label> <Value>{attendeeInfo.phone}</Value></InfoRow>
                                                </CardContent>
                                            </GlassCard>
                                        </Fade>
                                    )}



                                    {/* Terms Notice */}
                                    <Box sx={{ mt: 2, p: 2, textAlign: 'center' }}>
                                        <Typography sx={{ fontSize: 12, color: '#aab3c0', fontFamily: '"Red Hat Display", sans-serif', lineHeight: 1.7 }}>
                                            By completing this purchase you agree to our{' '}
                                            <MuiLink href="#" underline="hover" sx={{ color: ACCENT, fontWeight: 600 }}>Terms of Service</MuiLink>
                                            {' '}and{' '}
                                            <MuiLink href="#" underline="hover" sx={{ color: ACCENT, fontWeight: 600 }}>Cancellation Policy</MuiLink>.
                                        </Typography>
                                    </Box>

                                    {/* Security Badge */}
                                    <Box sx={{
                                        mt: 1, p: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1,
                                        background: 'rgba(95,166,232,0.06)', borderRadius: 3, border: `1px solid rgba(95,166,232,0.15)`,
                                    }}>
                                        <LockIcon sx={{ fontSize: 14, color: '#5fa6e8' }} />
                                        <Typography sx={{ fontSize: 12, color: '#6b7a90', fontFamily: '"Red Hat Display", sans-serif', fontWeight: 500 }}>
                                            256-bit SSL Secured Checkout
                                        </Typography>
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

