import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import SiteContainer from '../../_components/common/SiteContainer';
import Section from '../../_components/common/Section';

export const WebsiteDisclaimerPage = () => {
    return (
        <Section>
            <SiteContainer>
                {/* PAGE TITLE */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography
                        sx={{
                            fontFamily: "var(--font-redhat)",
                            fontWeight: 700,
                            fontSize: { xs: '28px', md: '36px', lg: '36px' },
                            lineHeight: '100%',
                            letterSpacing: '0%',
                        }}
                        color="#FF6F61"
                        mb={3}
                        align="left"
                    >
                        1. <strong>Disclaimer – Educational & Community Intent</strong>
                    </Typography>
                </motion.div>

                {/* DISCLAIMER CONTENT */}
                <Box>
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
                            mt: 1,
                        }} mb={3} lineHeight={1.7}>
                            The content, offerings, and resources found on AuthenticRelating.com are provided for <strong>educational, experiential, and community-building purposes only</strong>. While we are passionate about deepening human connection, communication, and self-awareness, none of the content on this site is intended as a substitute for professional medical, psychological, or therapeutic advice, diagnosis, or treatment.
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Typography sx={{
                            fontFamily: "var(--font-redhat)",
                            fontWeight: 400,
                            fontSize: { xs: "14px", md: "16px" },
                            lineHeight: "28.8px",
                            letterSpacing: "0%",
                            color: "#6B7280",
                            mt: 1,
                        }} mb={3} lineHeight={1.7}>
                            We do not offer or claim to provide licensed counselling, alternative healthcare, medical advice, mental health services, or crisis intervention or treatment of any sort. If you are in distress or navigating mental health challenges, we strongly encourage you to consult a qualified medical or mental health professional.
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Typography sx={{
                            fontFamily: "var(--font-redhat)",
                            fontWeight: 400,
                            fontSize: { xs: "14px", md: "16px" },
                            lineHeight: "28.8px",
                            letterSpacing: "0%",
                            color: "#6B7280",
                            mt: 1,
                        }} mb={3} lineHeight={1.7}>
                            By using this site and participating in its offerings (including in person and online - events, courses, articles, or community relating circles/ gatherings), you acknowledge full responsibility for your own physical, emotional, mental, and relational and spiritual wellbeing. AuthenticRelating.com and its affiliates shall not be held liable for any outcomes or experiences resulting from engagement with the material provided.
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Typography sx={{
                            fontFamily: "var(--font-redhat)",
                            fontWeight: 800,
                            fontSize: { xs: "14px", md: "16px" },
                            lineHeight: "28.8px",
                            letterSpacing: "0%",
                            color: "#6B7280",
                            mt: 1,
                        }} mb={3} lineHeight={1.7}>
                            <strong>Participation is voluntary and at your own discretion.</strong>
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Typography
                            fontSize={{ xs: 24, sm: 28, md: 35 }}
                            fontWeight={700}
                            color="#FF6F61"
                            mb={3}
                            align="left"
                        >
                            2.Workshop \ Course & Relating Circle Disclaimer (for in-
                            <br />person or online group events)
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Typography sx={{
                            fontFamily: "var(--font-redhat)",
                            fontWeight: 400,
                            fontSize: { xs: "14px", md: "16px" },
                            lineHeight: "28.8px",
                            letterSpacing: "0%",
                            color: "#6B7280",
                            mt: 1,
                        }} mb={3} lineHeight={1.7}>
                            By participating in any Authentic Relating workshop or Relating circle\offering, conducted by Authenticrelating.com whether in person or <br />online you acknowledge that:
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <Typography sx={{
                            fontFamily: "var(--font-redhat)",
                            fontWeight: 400,
                            fontSize: { xs: "14px", md: "16px" },
                            lineHeight: "28.8px",
                            letterSpacing: "0%",
                            color: "#6B7280",
                            mt: 1,
                        }} mb={3} lineHeight={1.7}>
                            • This experience is <strong>not a form of therapy</strong>, medical treatment, medical advice counselling, Alternative health care or<br /> any licensed mental health intervention.
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <Typography sx={{
                            fontFamily: "var(--font-redhat)",
                            fontWeight: 400,
                            fontSize: { xs: "14px", md: "16px" },
                            lineHeight: "28.8px",
                            letterSpacing: "0%",
                            color: "#6B7280",
                            mt: 1,
                        }} mb={3} lineHeight={1.7}>
                            • The facilitators are <strong>not acting as therapists, healers or doctors</strong>, even if they may have training in therapeutic or <br />similar modalities.
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        <Typography sx={{
                            fontFamily: "var(--font-redhat)",
                            fontWeight: 400,
                            fontSize: { xs: "14px", md: "16px" },
                            lineHeight: "28.8px",
                            letterSpacing: "0%",
                            color: "#6B7280",
                            mt: 1,
                        }} mb={3} lineHeight={1.7}>
                            • All practices offered are for the purpose of <strong>personal reflection, relational learning, and community<br /> connection</strong>.
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                    >
                        <Typography sx={{
                            fontFamily: "var(--font-redhat)",
                            fontWeight: 400,
                            fontSize: { xs: "14px", md: "16px" },
                            lineHeight: "28.8px",
                            letterSpacing: "0%",
                            color: "#6B7280",
                            mt: 1,
                        }} mb={3} lineHeight={1.7}>
                            We recognize that deep emotional content may arise during authentic relating exercises. While facilitators aim to create a safe and
                            <br />supportive space, you are ultimately responsible for your own emotional boundaries, self-care, and participation.
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                    >
                        <Typography sx={{
                            fontFamily: "var(--font-redhat)",
                            fontWeight: 400,
                            fontSize: { xs: "14px", md: "16px" },
                            lineHeight: "28.8px",
                            letterSpacing: "0%",
                            color: "#6B7280",
                            mt: 1,
                        }} mb={3} lineHeight={1.7}>
                            If you are currently in crisis, navigating trauma, or need therapeutic support, we strongly encourage you to seek guidance from a qualified
                            <br /> mental health professional.
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        <Typography sx={{
                            fontFamily: "var(--font-redhat)",
                            fontWeight: 400,
                            fontSize: { xs: "14px", md: "16px" },
                            lineHeight: "28.8px",
                            letterSpacing: "0%",
                            color: "#6B7280",
                            mt: 1,
                        }} mb={3} lineHeight={1.7}>
                            By participating, you agree to take full ownership of your experience and release the facilitators, organizers, and hosting organizations <br />from any liability related to your participation.
                        </Typography>
                    </motion.div>
                </Box>
            </SiteContainer>
        </Section>
    );
}