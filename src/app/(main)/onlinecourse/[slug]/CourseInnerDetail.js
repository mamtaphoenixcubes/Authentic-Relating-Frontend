'use client';

import { useState, useRef } from 'react';
import {
    Box,
    Grid,
    Typography,
    Button,
    Card,
    Tabs,
    Tab,
    Stack,
    Divider,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BarChartIcon from '@mui/icons-material/BarChart';
import VideocamIcon from '@mui/icons-material/Videocam';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useTheme } from '@mui/material/styles';

// Shared components
import Section from '@/app/_components/common/Section';
import SiteContainer from '@/app/_components/common/SiteContainer';
import CourseLoginDialog from '../CourseLoginDialog';

const MotionButton = motion(Button);

const renderMarkdownInline = (text, keyPrefix) => {
    const parts = text.split(/(\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*]+\*)/g);

    return parts.map((part, index) => {
        const key = `${keyPrefix}-${index}`;
        if (part.startsWith('***') && part.endsWith('***')) {
            return <strong key={key}><em>{part.slice(3, -3)}</em></strong>;
        }
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={key}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
            return <em key={key}>{part.slice(1, -1)}</em>;
        }
        return part;
    });
};

const renderMarkdownDescription = (markdown) => {
    const lines = markdown.replace(/\\([*_])/g, '$1').split(/\r?\n/);
    const elements = [];
    let paragraph = [];
    let bullets = [];

    const flushParagraph = () => {
        if (!paragraph.length) return;
        elements.push(
            <p key={`paragraph-${elements.length}`} className="text-gray-600 text-[15px] leading-[1.9] font-redhat mb-6">
                {renderMarkdownInline(paragraph.join(' '), `paragraph-${elements.length}`)}
            </p>
        );
        paragraph = [];
    };

    const flushBullets = () => {
        if (!bullets.length) return;
        elements.push(
            <ul key={`list-${elements.length}`} className="list-disc pl-6 mb-6 space-y-2 text-gray-600 text-[15px] leading-[1.9] font-redhat">
                {bullets.map((item, index) => (
                    <li key={index}>{renderMarkdownInline(item, `list-${elements.length}-${index}`)}</li>
                ))}
            </ul>
        );
        bullets = [];
    };

    lines.forEach((line) => {
        const trimmedLine = line.trim();
        if (!trimmedLine) {
            flushParagraph();
            flushBullets();
        } else if (/^[-*+]\s+/.test(trimmedLine)) {
            flushParagraph();
            bullets.push(trimmedLine.replace(/^[-*+]\s+/, ''));
        } else {
            flushBullets();
            paragraph.push(trimmedLine);
        }
    });

    flushParagraph();
    flushBullets();
    return elements;
};


export default function     CourseInnerDetail({ course }) {
    const theme = useTheme();
    const styles = theme.custom.courseInnerDetail;

    const [value, setValue] = useState(0);
    const [loginDialogOpen, setLoginDialogOpen] = useState(false);
    const router = useRouter();
    const paymentUrl = `/onlinecourse/payment/${course?.courseSlug}`;

    const handleEnrollClick = () => {
        if (localStorage.getItem('token')) {
            router.push(paymentUrl);
            return;
        }
        setLoginDialogOpen(true);
    };

    const overviewRef = useRef(null);
    const instructorRef = useRef(null);

    const hasOffer = course?.festiveOffer;

    const handleTabChange = (newValue) => {
        setValue(newValue);
        if (newValue === 0 && overviewRef.current) {
            overviewRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        if (newValue === 1 && instructorRef.current) {
            instructorRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    // ── Animation variants ─────────────────────────────────────
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };
    const fadeInLeft = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };
    const fadeInRight = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };
    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };

    // ── Rich text renderer (unchanged) ─────────────────────────
    const renderRawDescription = () => {
        let longDescription = course?.longDescriptionMarkdown;
        if (typeof longDescription === 'string') {
            try {
                longDescription = JSON.parse(longDescription);
            } catch {
                return longDescription.trim()
                    ? renderMarkdownDescription(longDescription)
                    : null;
            }
        }

        const blocks = Array.isArray(longDescription)
            ? longDescription
            : longDescription?.blocks;
        if (!Array.isArray(blocks)) return null;
        const elements = [];
        let currentList = [];
        let currentListType = null;

        const flushList = (key) => {
            if (!currentList.length) return;
            if (currentListType === "unordered-list-item") {
                elements.push(
                    <ul key={`ul-${key}`} className="mb-2">
                        {currentList.map((item, i) => (
                            <li key={i} className="flex gap-4 items-start">
                                <div className="flex-shrink-0 pt-[18px]">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-[15px] leading-[1.9] font-redhat">{item}</p>
                            </li>
                        ))}
                    </ul>
                );
            }
            if (currentListType === "ordered-list-item") {
                elements.push(
                    <ol key={`ol-${key}`} className="list-decimal pl-6 space-y-3 mb-6">
                        {currentList.map((item, i) => (
                            <li key={i} className="text-gray-700 text-[15px] leading-[1.9] font-redhat">{item}</li>
                        ))}
                    </ol>
                );
            }
            currentList = [];
            currentListType = null;
        };

        blocks.forEach((block, index) => {
            const { type = "unstyled", text } = block;
            if (!text?.trim()) return;
            if (type === "unordered-list-item" || type === "ordered-list-item") {
                if (currentListType && currentListType !== type) flushList(index);
                currentListType = type;
                currentList.push(text.trim());
                return;
            }
            if (currentList.length) flushList(index);
            if (type.startsWith("header")) {
                const level = type.split("-")[1];
                const headingSize = { one: "text-3xl", two: "text-2xl", three: "text-xl", four: "text-lg" }[level] || "text-xl";
                elements.push(
                    <h2 key={block.key} className={`${headingSize} font-semibold text-gray-900 mb-4 font-redhat`}>{text}</h2>
                );
                return;
            }
            elements.push(
                <p key={block.key} className="text-gray-600 text-[15px] leading-[1.9] font-redhat mb-6">{text}</p>
            );
        });
        flushList("final");
        return elements;
    };

    // ── Price helpers (unchanged) ──────────────────────────────
    const formatPrice = (amount, currency = course?.currency || 'USD') => {
        try {
            return new Intl.NumberFormat(undefined, {
                style: 'currency',
                currency,
                maximumFractionDigits: 2,
            }).format(amount);
        } catch {
            return `${currency} ${amount}`;
        }
    };

    const getCoursePriceLabel = (course) => {
        if (!course) return '';
        const paymentType = (course.pricingType || course.course_paymenttype || '').toLowerCase();
        const amount = course.price ?? course.amountOneTime ?? 0;
        if (paymentType === 'free') return 'Free';
        if (['one_time', 'one-time', 'onetimepayment'].includes(paymentType)) {
            return formatPrice(amount, course.currency);
        }
        if (paymentType === 'recurring') {
            return formatPrice(amount, course.currency);
        }
        return amount ? formatPrice(amount, course.currency) : '';
    };

    const getTotalRecurring = (course) => {
        const paymentType = (course.pricingType || course.course_paymenttype || '').toLowerCase();
        if (paymentType !== 'recurring') return null;
        const installment = Number(course.installmentCount ?? course.installment ?? 0);
        const amount = Number(course.price ?? course.amountInWeek ?? course.amountInMonth ?? course.amountInByWeekly ?? 0);
        return installment > 0 && amount > 0 ? amount * installment : null;
    };
    const priceLabel = getCoursePriceLabel(course);
    const totalRecurring = getTotalRecurring(course);
    const isRecurring = (course?.pricingType || course?.course_paymenttype || '').toLowerCase() === 'recurring';
    const recurringInterval = (course?.recurringInterval || 'week').toLowerCase();
    const installmentCount = Number(course?.installmentCount ?? course?.installment ?? 0);
    const recurringDetails = isRecurring
        ? `per ${recurringInterval}${installmentCount > 1 ? ` · ${installmentCount} installments` : ''}`
        : '';
    const chapterCount = Array.isArray(course?.chapters) ? course.chapters.length : 0;
        const courseFaqs = Array.isArray(course?.faqs) ? course.faqs : [];
    const deliveryMode = (course?.deliveryMode || course?.mode_of_course || 'online').toLowerCase();
    const deliveryModeLabels = {
        prerecorded: 'Prerecorded',
        online: 'Online',
        both: 'Hybrid',
        digitaldownload: 'Digital Download',
    };

    return (
        <Section sx={styles.section}>
            <SiteContainer>
                <Grid container spacing={styles.grid.container.spacing}>
                    {/* ─────────── LEFT CONTENT ─────────── */}
                    <Grid item {...styles.grid.leftCol}>
                        {/* TABS */}
                        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                            <Box sx={styles.tabsBox}>
                                <Tabs
                                    value={value}
                                    onChange={(e, newValue) => handleTabChange(newValue)}
                                    centered
                                    variant={{ xs: 'fullWidth', sm: 'standard' }}
                                    TabIndicatorProps={{ sx: styles.tabIndicator }}
                                    sx={styles.tabs}
                                >
                                    <Tab label="Overview" />
                                    <Tab label="Instructor" />
                                </Tabs>
                            </Box>
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                            <div
                                ref={overviewRef}
                                className="scroll-mt-[20rem]"
                                style={{ marginBottom: theme.spacing(styles.description.mb) }}
                            >
                                {renderRawDescription()}
                            </div>
                        </motion.div>

                        {courseFaqs.length > 0 && (
                            <motion.div variants={fadeInUp}>
                                <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                                    Frequently Asked Questions
                                </Typography>
                                {courseFaqs.map((faq, index) => (
                                    <Accordion key={faq?._id || faq?.id || index} disableGutters>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography sx={{ fontWeight: 600 }}>
                                                {faq?.question || faq?.faqQuestion || `Question ${index + 1}`}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography sx={{ whiteSpace: 'pre-line', color: 'text.secondary' }}>
                                                {faq?.answer || faq?.faqAnswer || ''}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </motion.div>
                        )}

                        <Divider sx={styles.divider} />

                        {/* INSTRUCTOR */}
                        <motion.div ref={instructorRef} className="scroll-mt-32">
                            <Typography sx={styles.instructorHeader}>Instructor Details</Typography>
                        </motion.div>

                        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                            <Stack {...styles.instructorStack}>
                                <motion.div variants={scaleIn}>
                                    <Box sx={{ ...styles.instructorImage, overflow: 'hidden' }}>
                                        <Box
                                            component="img"
                                            src="https://randomuser.me/api/portraits/men/32.jpg"
                                            alt="Amitabha Bhatia"
                                            sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                        />
                                    </Box>
                                </motion.div>

                                <motion.div variants={fadeInRight}>
                                    <Box sx={styles.instructorContent}>
                                        {/* NAME + ACCENT BAR */}
                                        <Stack {...styles.instructorNameRow}>
                                            <Box sx={styles.instructorAccentBar} />
                                            <Box>
                                                <Typography sx={styles.instructorName}>Amitabha Bhatia</Typography>
                                                <Typography sx={styles.instructorRole}>Vinyasa Flow Instructor</Typography>
                                            </Box>
                                        </Stack>

                                        {/* CHECK LIST */}
                                        <Stack {...styles.bulletStack}>
                                            {[
                                                'Guides breath-led movement and mindful transitions.',
                                                'Focuses on foundational poses, alignment, and safe sequencing.',
                                                'Supports students in building strength, balance, and steady focus.',
                                            ].map((text, idx) => (
                                                <motion.div key={idx} variants={fadeInLeft} custom={idx}>
                                                    <Stack {...styles.bulletRow}>
                                                        <Box sx={styles.bulletDot}>✓</Box>
                                                        <Typography sx={styles.bulletText}>{text}</Typography>
                                                    </Stack>
                                                </motion.div>
                                            ))}
                                        </Stack>
                                    </Box>
                                </motion.div>
                            </Stack>
                        </motion.div>
                    </Grid>

                    {/* ─────────── RIGHT SIDEBAR (STICKY) ─────────── */}
                    <Grid item {...styles.grid.rightCol}>
                        <Box sx={styles.sidebarWrapper}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                style={{ width: '100%' }}
                            >
                                <Card sx={styles.sidebarCard}>
                                    {/* TOP PRICE SECTION */}
                                    <Box sx={{
                                        ...styles.priceSection,
                                        p: { xs: 2.5, sm: 3 },
                                        background: 'linear-gradient(135deg, #e6fffb 0%, #d9f7f2 100%)',
                                    }}>
                                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                                            <Typography sx={{ ...styles.priceLabel, fontWeight: 700, color: '#174b4b' }}>Course Price</Typography>
                                            <Button
                                                size="small"
                                                variant="outlined"
                                                disabled={!course?.courseSlug}
                                                onClick={() => router.push(`/lms/${encodeURIComponent(course?.courseSlug || '')}`)}
                                                sx={{
                                                    minWidth: 0,
                                                    px: 1.5,
                                                    py: 0.5,
                                                    borderRadius: '999px',
                                                    borderColor: '#087f75',
                                                    color: '#087f75',
                                                    fontSize: '0.72rem',
                                                    fontWeight: 700,
                                                    textTransform: 'none',
                                                    whiteSpace: 'nowrap',
                                                    '&:hover': {
                                                        borderColor: '#065f58',
                                                        backgroundColor: '#ffffff80',
                                                    },
                                                }}
                                            >
                                                Test LMS
                                            </Button>
                                        </Stack>
                                        {hasOffer && <Box sx={{ ...styles.offerBadge, display: 'inline-flex', mt: 1 }}>Limited time offer</Box>}

                                        <Stack spacing={0.75} sx={{ mt: 1.5, alignItems: 'flex-start' }}>
                                            {isRecurring && (
                                                <Box component="span" sx={{
                                                    ...styles.emiBadge,
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    borderRadius: '999px',
                                                    backgroundColor: '#ffffffb8',
                                                    color: '#087f75',
                                                    fontWeight: 700,
                                                    px: 1.5,
                                                    py: 0.5,
                                                }}>
                                                    Installment plan
                                                </Box>
                                            )}
                                            <Typography sx={{
                                                ...styles.priceValue,
                                                color: '#124b4a',
                                                fontSize: { xs: '1.65rem', sm: '2rem' },
                                                fontWeight: 800,
                                                lineHeight: 1.15,
                                                overflowWrap: 'anywhere',
                                            }}>
                                                {priceLabel}
                                            </Typography>
                                            {recurringDetails && (
                                                <Typography sx={{ color: '#39716d', fontSize: '0.9rem', fontWeight: 600 }}>
                                                    {recurringDetails}
                                                </Typography>
                                            )}
                                            {totalRecurring && (
                                                <Typography sx={{
                                                    ...styles.totalRecurring,
                                                    mt: 0.5,
                                                    px: 1.25,
                                                    py: 0.5,
                                                    borderRadius: 1.5,
                                                    backgroundColor: '#ffffffa8',
                                                    color: '#174b4b',
                                                    fontSize: '0.95rem',
                                                    fontWeight: 700,
                                                }}>
                                                    Total: {formatPrice(totalRecurring, course.currency)}
                                                </Typography>
                                            )}
                                        </Stack>
                                    </Box>

                                    {/* DETAILS */}
                                    <Box sx={styles.detailsSection}>
                                        {/* ROW 1: COURSE LENGTH */}
                                        <Stack {...styles.detailRowBordered}>
                                            <Stack {...styles.detailLeft}>
                                                <AccessTimeIcon sx={styles.detailIcon} />
                                                <Typography sx={styles.detailLabel}>Course Length</Typography>
                                            </Stack>
                                            <Typography sx={styles.detailValue}>
                                                {chapterCount} {chapterCount === 1 ? 'Chapter' : 'Chapters'}
                                            </Typography>
                                        </Stack>

                                        {/* ROW 2: LANGUAGE */}
                                        <Stack {...styles.detailRowBordered}>
                                            <Stack {...styles.detailLeft}>
                                                <BarChartIcon sx={styles.detailIcon} />
                                                <Typography sx={styles.detailLabel}>Language</Typography>
                                            </Stack>
                                            <Typography sx={styles.detailValue}>English</Typography>
                                        </Stack>

                                        {/* ROW 3: COURSE TYPE */}
                                        <Stack {...styles.detailRow}>
                                            <Stack {...styles.detailLeft}>
                                                <VideocamIcon sx={styles.detailIcon} />
                                                <Typography sx={styles.detailLabel}>Course Type</Typography>
                                            </Stack>
                                            <Typography sx={styles.detailValueCapitalize}>
                                                {deliveryModeLabels[deliveryMode] || 'Online'}
                                            </Typography>
                                        </Stack>

                                        {/* CTA BUTTON */}
                                        <MotionButton
                                            onClick={handleEnrollClick}
                                            fullWidth
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            sx={styles.ctaButton}
                                        >
                                            {['one_time', 'one-time', 'onetimepayment'].includes(
                                                (course?.pricingType || course?.course_paymenttype || '').toLowerCase()
                                            ) ? 'Join the course' : 'Subscribe Now'}
                                        </MotionButton>
                                    </Box>
                                </Card>
                            </motion.div>
                        </Box>
                    </Grid>
                </Grid>
            </SiteContainer>
            <CourseLoginDialog
                open={loginDialogOpen}
                onClose={() => setLoginDialogOpen(false)}
                returnTo={paymentUrl}
            />
        </Section>
    );
}
