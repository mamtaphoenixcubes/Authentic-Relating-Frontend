import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import SiteContainer from '../../_components/common/SiteContainer';
import Section from '../../_components/common/Section';

// Each element animates the moment it enters the viewport — no stagger, no delay
const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: 'easeOut' },
    },
};

// Reusable wrapper — fires as soon as the element is ~10% visible
const Reveal = ({ children }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
    >
        {children}
    </motion.div>
);

export const PrivacyPolicyPage = () => {

    const headingStyle = {
        fontFamily: "var(--font-redhat)",
        fontWeight: 700,
        fontSize: { xs: "20px", md: "24px", lg: "26px" },
        lineHeight: "100%",
        letterSpacing: "0%",
        color: "#FF6F61",
    };

    const bodyTextSx = {
        fontFamily: "var(--font-redhat)",
        fontWeight: 400,
        fontSize: { xs: "14px", md: "16px" },
        lineHeight: "28.8px",
        letterSpacing: "0%",
        color: "#6B7280",
    };

    const getFormattedDate = (dayOffset = 0) => {
        const today = new Date();
        const date = new Date(
            today.getFullYear(),
            today.getMonth(),
            dayOffset
        );
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });

        const getSuffix = (d) => {
            if (d > 3 && d < 21) return 'th';
            switch (d % 10) {
                case 1: return 'st';
                case 2: return 'nd';
                case 3: return 'rd';
                default: return 'th';
            }
        };

        return `${day}${getSuffix(day)} ${month}`;
    };

    const effectiveDate = getFormattedDate(5);
    const lastUpdated = getFormattedDate(1);

    return (
        <Section>
            <SiteContainer sx={{ fontFamily: "'Red Hat Display', sans-serif" }}>

                {/* EFFECTIVE DATE */}
                <Reveal>
                    <Box sx={{ mb: 4, textAlign: 'left' }}>
                        <Typography sx={headingStyle} mb={1}>
                            <strong>Effective Date:</strong> {effectiveDate}
                        </Typography>
                        <Typography sx={headingStyle} mb={1}>
                            <strong>Last Updated:</strong> {lastUpdated}
                        </Typography>
                    </Box>
                </Reveal>

                {/* INTRODUCTION */}
                <Reveal>
                    <Typography sx={bodyTextSx} mb={1.5}>
                        At AuthenticRelating.com, we respect your privacy and are committed to protecting the personal information you share with us.
                    </Typography>
                </Reveal>

                {/* SECTION 1 */}
                <Reveal>
                    <Typography sx={headingStyle} mb={1}>
                        1. Information We Collect
                    </Typography>
                </Reveal>

                <Reveal>
                    <Typography fontSize={15} color="#555" mb={2} lineHeight={1.7} sx={{ fontFamily: "'Red Hat Display', sans-serif" }}>
                        We may collect:
                    </Typography>
                </Reveal>

                <Reveal>
                    <Box sx={{ pl: 2, mb: 3 }}>
                        <Typography sx={bodyTextSx} mb={1.5}>
                            • <strong>Personal Information</strong>: Name, email address, phone number, location, or other information you voluntarily provide <br />when you register, contact us, or participate in courses or events.
                        </Typography>
                        <Typography sx={bodyTextSx} mb={1.5}>
                            • <strong>Usage Data</strong>: Information such as browser type, pages visited, time on site, and device information via analytics <br />tools (e.g., Google Analytics).
                        </Typography>
                    </Box>
                </Reveal>

                {/* SECTION 2 */}
                <Reveal>
                    <Typography sx={headingStyle} mb={1}>
                        2. How We Use Your Information
                    </Typography>
                </Reveal>

                <Reveal>
                    <Typography sx={bodyTextSx} mb={1.5}>
                        We use your data to:
                    </Typography>
                </Reveal>

                <Reveal>
                    <Box sx={{ pl: 2, mb: 3 }}>
                        <Typography sx={bodyTextSx} mb={1.5}>
                            <strong>• Provide and improve our services</strong>
                        </Typography>
                        <Typography sx={bodyTextSx} mb={1.5}>
                            <strong>• Communicate with you (e.g., newsletters, updates, event invites)</strong>
                        </Typography>
                        <Typography sx={bodyTextSx} mb={1.5}>
                            <strong>• Personalize your experience</strong>
                        </Typography>
                        <Typography sx={bodyTextSx} mb={1.5}>
                            <strong>• Respond to inquiries and provide support</strong>
                        </Typography>
                    </Box>
                </Reveal>

                <Reveal>
                    <Typography fontSize={15} color="#555" mb={3} lineHeight={1.7} sx={{ fontFamily: "'Red Hat Display', sans-serif" }}>
                        We never sell your information.
                    </Typography>
                </Reveal>

                {/* SECTION 3 */}
                <Reveal>
                    <Typography sx={headingStyle} mb={1}>
                        3. Cookies & Tracking
                    </Typography>
                </Reveal>

                <Reveal>
                    <Typography fontSize={15} color="#555" mb={3} lineHeight={1.7} sx={{ fontFamily: "'Red Hat Display', sans-serif" }}>
                        We use cookies and similar technologies to enhance user experience and analyze website traffic. You can manage your cookie preferences in your browser settings.
                    </Typography>
                </Reveal>

                {/* SECTION 4 */}
                <Reveal>
                    <Typography sx={headingStyle} mb={1}>
                        4. Sharing Your Information
                    </Typography>
                </Reveal>

                <Reveal>
                    <Typography fontSize={15} color="#555" mb={2} lineHeight={1.7} sx={{ fontFamily: "'Red Hat Display', sans-serif" }}>
                        We do not share your personal data with third parties, except:
                    </Typography>
                </Reveal>

                <Reveal>
                    <Box sx={{ pl: 2, mb: 3 }}>
                        <Typography sx={bodyTextSx} mb={1.5}>
                            <strong>• With service providers assisting in operations (e.g., email platforms)</strong>
                        </Typography>
                        <Typography sx={bodyTextSx} mb={1.5}>
                            <strong>• When required by law</strong>
                        </Typography>
                        <Typography sx={bodyTextSx} mb={1.5}>
                            <strong>• With your consent</strong>
                        </Typography>
                    </Box>
                </Reveal>

                {/* SECTION 5 */}
                <Reveal>
                    <Typography sx={headingStyle} mb={1}>
                        5. Data Storage & Security
                    </Typography>
                </Reveal>

                <Reveal>
                    <Typography fontSize={15} color="#555" mb={3} lineHeight={1.7} sx={{ fontFamily: "'Red Hat Display', sans-serif" }}>
                        Your data is stored securely and protected with industry-standard measures. However, no system can guarantee absolute security.
                    </Typography>
                </Reveal>

                {/* SECTION 6 */}
                <Reveal>
                    <Typography sx={headingStyle} mb={1}>
                        6. Your Rights
                    </Typography>
                </Reveal>

                <Reveal>
                    <Typography fontSize={15} color="#555" mb={2} lineHeight={1.7} sx={{ fontFamily: "'Red Hat Display', sans-serif" }}>
                        You may:
                    </Typography>
                </Reveal>

                <Reveal>
                    <Box sx={{ pl: 2, mb: 3 }}>
                        <Typography sx={bodyTextSx} mb={1.5}>
                            • Request access to or deletion of your data
                        </Typography>
                        <Typography sx={bodyTextSx} mb={1.5}>
                            • Opt out of communications at any time
                        </Typography>
                        <Typography sx={bodyTextSx} mb={1.5}>
                            • Contact us with privacy concerns at:
                        </Typography>
                    </Box>
                </Reveal>

                {/* SECTION 7 */}
                <Reveal>
                    <Typography sx={headingStyle} mb={1}>
                        7. Children's Privacy
                    </Typography>
                </Reveal>

                <Reveal>
                    <Typography fontSize={15} color="#555" mb={3} lineHeight={1.7} sx={{ fontFamily: "'Red Hat Display', sans-serif" }}>
                        Our services are not intended for users under 20. We do not knowingly collect data from minors.
                    </Typography>
                </Reveal>

                {/* SECTION 8 */}
                <Reveal>
                    <Typography sx={headingStyle} mb={1}>
                        8. Changes to This Policy
                    </Typography>
                </Reveal>

                <Reveal>
                    <Typography fontSize={15} color="#555" lineHeight={1.7} sx={{ fontFamily: "'Red Hat Display', sans-serif" }}>
                        We may update this policy periodically. Continued use of our site after updates means you agree to the revised policy.
                    </Typography>
                </Reveal>

            </SiteContainer>
        </Section>
    );
};