import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import SiteContainer from '../../_components/common/SiteContainer';
import Section from '../../_components/common/Section';

export const TermsandConditionsPage = () => {

    const getFormattedDate = (dayOffset = 0) => {
        const today = new Date();

        const date = new Date(
            today.getFullYear(),
            today.getMonth(),
            dayOffset
        );

        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });

        // ordinal suffix (1st, 2nd, 3rd, 4th...)
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

    // values
    const effectiveDate = getFormattedDate(5);
    const lastUpdated = getFormattedDate(1);

    const headingStyle = {
        fontFamily: "var(--font-redhat)",
        fontWeight: 700,
        fontSize: { xs: "20px", md: "24px", lg: "26px" },
        lineHeight: "100%",
        letterSpacing: "0%",
        color: "#FF6F61", // ✅ your color applied globally
    };

    return (
        <Section>
            <SiteContainer>
                {/* EFFECTIVE DATE - SAME LINE */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Box sx={{ mb: 4, textAlign: 'left' }}>
                        <Typography sx={headingStyle} mb={1}>
                            <strong>Effective Date:</strong> {effectiveDate}
                        </Typography>
                        <Typography sx={headingStyle} mb={1} mt={2}>
                            <strong>Last Updated:</strong> {lastUpdated}
                        </Typography>
                    </Box>
                </motion.div>

                {/* INTRODUCTION */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 400,
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: "28.8px",
                        letterSpacing: "0%",
                        color: "#6B7280",
                    }} mb={1.5}>
                        Welcome to AuthenticRelating.com ("we," "our," "us," or the "Website"). By accessing or using our Website, you agree to be bound by the following Terms and Conditions. Please read them carefully before using the site.
                    </Typography>
                </motion.div>

                {/* SECTION 1 */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Typography sx={headingStyle} mb={1}>
                        1. Use of Site
                    </Typography>
                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 400,
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: "28.8px",
                        letterSpacing: "0%",
                        color: "#6B7280",
                    }} mb={1.5}>
                        AuthenticRelating.com provides information, courses, articles, resources, and event listings intended for educational and personal development purposes only. You agree to use the site in a lawful manner and not to misuse or interfere with its operation.
                    </Typography>
                </motion.div>

                {/* SECTION 2 */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Typography sx={headingStyle} mb={1} color="#333">
                        2. No Medical or Therapeutic Advice
                    </Typography>
                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 400,
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: "28.8px",
                        letterSpacing: "0%",
                        color: "#6B7280",
                    }} mb={1.5}>
                        Content on this site is <strong>not a substitute for therapy, mental health services, or medical advice.</strong> We do not offer clinical support or crisis care. Please consult a licensed professional if you need therapeutic or medical assistance.
                    </Typography>
                </motion.div>

                {/* SECTION 3 */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Typography sx={headingStyle} mb={1} color="#333">
                        3. User Conduct
                    </Typography>
                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 600,
                        fontSize: { xs: "16px" },
                        lineHeight: "100%",
                        letterSpacing: "0%",
                    }}
                        mt={2}>
                        You agree not to:
                    </Typography>

                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 800,
                        fontSize: { xs: "16px" },
                        lineHeight: "100%",
                        letterSpacing: "0%",
                    }}
                        mt={2}>
                        • Harass, threaten, or harm other users
                    </Typography>
                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 800,
                        fontSize: { xs: "16px" },
                        lineHeight: "100%",
                        letterSpacing: "0%",
                    }}
                        mt={2}>
                        • Post or transmit harmful, offensive, or misleading content
                    </Typography>
                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 800,
                        fontSize: { xs: "16px" },
                        lineHeight: "100%",
                        letterSpacing: "0%",
                    }}
                        mt={2}>
                        • Violate any applicable laws or regulations
                    </Typography>

                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 400,
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: "28.8px",
                        letterSpacing: "0%",
                        color: "#6B7280",
                    }} mb={1.5}>
                        We reserve the right to remove content or suspend user access at our discretion.
                    </Typography>
                </motion.div>

                {/* SECTION 4 */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <Typography sx={headingStyle} mb={1}>
                        4. Intellectual Property
                    </Typography>
                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 400,
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: "28.8px",
                        letterSpacing: "0%",
                        color: "#6B7280",
                    }} mb={1.5}>
                        All content on this site—including text, graphics, videos, and course materials—is owned by AuthenticRelating.com or its content creators and protected by copyright and intellectual property laws. You may not copy, reproduce, or distribute our content without written permission.
                    </Typography>
                </motion.div>

                {/* SECTION 5 */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Typography sx={headingStyle} mb={1}>
                        5. Third-Party Links
                    </Typography>
                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 400,
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: "28.8px",
                        letterSpacing: "0%",
                        color: "#6B7280",
                    }} mb={1.5}>
                        We may link to third-party websites. We are not responsible for the content or practices of these websites.
                    </Typography>
                </motion.div>

                {/* SECTION 6 */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <Typography sx={headingStyle} mb={1}>
                        6. Limitation of Liability
                    </Typography>
                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 400,
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: "28.8px",
                        letterSpacing: "0%",
                        color: "#6B7280",
                    }} mb={1.5}>
                        We make no guarantees regarding the outcomes of engaging with our content. By using this site, you accept full responsibility for your participation. We are not liable for any damages resulting from the use of this Website.
                    </Typography>
                </motion.div>

                {/* SECTION 7 */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <Typography sx={headingStyle} mb={1}>
                        7. Modifications
                    </Typography>
                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 400,
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: "28.8px",
                        letterSpacing: "0%",
                        color: "#6B7280",
                    }} mb={1.5}>
                        We reserve the right to modify these Terms at any time. Continued use of the Website after updates constitutes your agreement to the changes.
                    </Typography>
                </motion.div>

                {/* SECTION 8 */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                >
                    <Typography sx={headingStyle} mb={2}>
                        8. Governing Law
                    </Typography>
                    <Typography fontSize={15} fontWeight={600} mb={1} color="#333">
                        Governing Law and Dispute Resolution
                    </Typography>
                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 700,
                        fontSize: "16px",
                        lineHeight: "28.8px",
                        letterSpacing: "0%",
                        verticalAlign: "middle",
                    }}
                        mt={2}>
                        These Terms shall be governed by and construed in accordance with the laws of the Republic of Singapore. Any dispute, controversy, or claim arising out of or in connection with these Terms, including any question regarding their existence, validity, or termination, shall be referred to and finally resolved by arbitration in Singapore in accordance with the Arbitration Rules of the Singapore International Arbitration Centre (SIAC), which rules are deemed to be incorporated by reference in this clause. The seat of arbitration shall be Singapore, the tribunal shall consist of one arbitrator, and the language of the arbitration shall be English.
                    </Typography>
                </motion.div>
            </SiteContainer>
        </Section>
    );
}