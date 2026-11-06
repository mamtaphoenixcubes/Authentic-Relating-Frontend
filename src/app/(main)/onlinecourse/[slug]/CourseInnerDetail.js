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
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BarChartIcon from '@mui/icons-material/BarChart';
import VideocamIcon from '@mui/icons-material/Videocam';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useTheme } from '@mui/material/styles';

// Shared components
import Section from '@/app/_components/common/Section';
import SiteContainer from '@/app/_components/common/SiteContainer';

const MotionButton = motion(Button);


export default function     CourseInnerDetail({ course }) {
    const theme = useTheme();
    const styles = theme.custom.courseInnerDetail;

    const [value, setValue] = useState(0);
    const router = useRouter();

    const overviewRef = useRef(null);
    const instructorRef = useRef(null);

    const price = course?.amountOneTime || 0;
    const currency = course?.currency || "USD";
    const hasOffer = course?.festiveOffer;

    const oldPrice = hasOffer ? Math.round(price * 1.3) : null;

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
        if (!course?.rawdescription?.blocks) return null;
        const blocks = course.rawdescription.blocks;
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
            const { type, text } = block;
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
    const getCoursePriceLabel = (course) => {
        if (!course) return '';
        const currencySymbol = course.currency === 'USD' ? '$' : '₹';
        if (course.course_paymenttype === 'free') return 'Free';
        if (course.course_paymenttype === 'onetimepayment') return `${currencySymbol}${course.amountOneTime}`;
        if (course.course_paymenttype === 'recurring') {
            const installment = course.installment;
            if (course.amountInMonth) return `${currencySymbol}${course.amountInMonth}/month${installment ? ` × ${installment}` : ''}`;
            if (course.amountInWeek) return `${currencySymbol}${course.amountInWeek}/week${installment ? ` × ${installment}` : ''}`;
            if (course.amountInByWeekly) return `${currencySymbol}${course.amountInByWeekly}/bi-week${installment ? ` × ${installment}` : ''}`;
        }
        return '';
    };

    const getTotalRecurring = (course) => {
        const installment = Number(course.installment || 0);
        if (course.amountInWeek) return course.amountInWeek * installment;
        if (course.amountInMonth) return course.amountInMonth * installment;
        if (course.amountInByWeekly) return course.amountInByWeekly * installment;
        return null;
    };

    const priceLabel = getCoursePriceLabel(course);
    const totalRecurring = getTotalRecurring(course);

    return (
        <Section sx={styles.section}>
            <SiteContainer>
                {/* TITLE */}
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                    <Typography sx={styles.pageTitle}>Expand inside out</Typography>
                </motion.div>

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
                                className="text-gray-600 text-[15px] leading-[1.8] font-redhat scroll-mt-[20rem]"
                                style={{ marginBottom: theme.spacing(styles.description.mb) }}
                                dangerouslySetInnerHTML={{ __html: course?.shortDescription || "" }}
                            />
                        </motion.div>

                        <motion.div variants={fadeInUp}>{renderRawDescription()}</motion.div>

                        <Divider sx={styles.divider} />

                        {/* INSTRUCTOR */}
                        <motion.div ref={instructorRef} className="scroll-mt-32">
                            <Typography sx={styles.instructorHeader}>Instructor Details</Typography>
                        </motion.div>

                        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                            <Stack {...styles.instructorStack}>
                                <motion.div variants={scaleIn}>
                                    <Box sx={styles.instructorImage} />
                                </motion.div>

                                <motion.div variants={fadeInRight}>
                                    <Box sx={styles.instructorContent}>
                                        {/* NAME + ACCENT BAR */}
                                        <Stack {...styles.instructorNameRow}>
                                            <Box sx={styles.instructorAccentBar} />
                                            <Box>
                                                <Typography sx={styles.instructorName}>Amitabha Bhatia</Typography>
                                                <Typography sx={styles.instructorRole}>Lorem ipsum Lorem, Instructor</Typography>
                                            </Box>
                                        </Stack>

                                        {/* CHECK LIST */}
                                        <Stack {...styles.bulletStack}>
                                            {[
                                                'Donec imperdiet ante sit.',
                                                'Donec imperdiet ante sit.',
                                                'Donec imperdiet ante sit.',
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
                                    <Box sx={styles.priceSection}>
                                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                                            <Typography sx={styles.priceLabel}>Course Price:</Typography>
                                            {hasOffer && <Box sx={styles.offerBadge}>Limited time offer</Box>}
                                        </Stack>

                                        <Stack {...styles.priceRow}>
                                            <div className="text-[#14B8A6]">
                                                {course.course_paymenttype === 'recurring' && (
                                                    <span style={styles.emiBadge}>EMI Available</span>
                                                )}
                                                <div className="font-semibold text-lg">
                                                    <Typography sx={styles.priceValue}>
                                                        {priceLabel?.toLowerCase() === 'free' ? 'Free' : `${currency} ${priceLabel}`}
                                                    </Typography>
                                                </div>
                                                {totalRecurring && (
                                                    <Typography sx={styles.totalRecurring}>
                                                        Total: ${totalRecurring}
                                                    </Typography>
                                                )}
                                            </div>
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
                                                {course?.chapters?.length ? `${course.chapters.length} Modules` : '3 Hrs'}
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
                                                {course?.mode_of_course || 'Online'}
                                            </Typography>
                                        </Stack>

                                        {/* CTA BUTTON */}
                                        <MotionButton
                                            onClick={() => router.push(`/onlinecourse/payment/${course.courseSlug}`)}
                                            fullWidth
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            sx={styles.ctaButton}
                                        >
                                            {course?.course_paymenttype === 'onetimepayment' ? 'Join the course' : 'Subscribe Now'}
                                        </MotionButton>
                                    </Box>
                                </Card>
                            </motion.div>
                        </Box>
                    </Grid>
                </Grid>
            </SiteContainer>
        </Section>
    );
}