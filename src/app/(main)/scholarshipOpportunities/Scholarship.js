'use client';

import {
    Typography,
    Box,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@mui/material';
import { motion } from 'framer-motion';
import SiteContainer from '../../_components/common/SiteContainer';
import Section from '../../_components/common/Section';

export default function Scholarship() {
    return (
        <Section>
            <SiteContainer>
                {/* HEADER */}
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
                        mb={1.5}
                    >
                        We Believe in Accessible Transformation
                    </Typography>

                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 400,
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: "28.8px",
                        letterSpacing: "0%",
                        color: "#6B7280",
                        mt: 1,
                    }} mb={3} lineHeight={1.7}>
                        Authentic Relating is a gift that belongs to everyone. Our mission is to make our programs accessible to
                        <br />individuals from all walks of life—including those facing financial hardship.
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <Divider sx={{ mb: 3 }} />
                </motion.div>

                {/* SLIDING SCALE */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Typography
                        sx={{
                            fontFamily: "var(--font-redhat)",
                            fontWeight: 700,
                            fontSize: { xs: "20px", md: "24px", lg: "26px" },
                            lineHeight: "100%",
                            letterSpacing: "0%",
                            color: "#FF6F61"
                        }} mb={1}>
                        Sliding Scale & Partial Scholarships
                    </Typography>

                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 400,
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: "28.8px",
                        letterSpacing: "0%",
                        color: "#6B7280",
                        mt: 1,
                    }} mb={1.5} lineHeight={1.7}>
                        We offer <strong>partial scholarships</strong> for most of our events, retreats, and
                        courses. These are awarded on a <strong>first-come,<br /> first-reviewed</strong>  basis and are based on:
                    </Typography>

                    <List sx={{ pl: 2, mb: 3 }}>
                        <ListItem disablePadding>
                            <ListItemText sx={{
                                fontFamily: "var(--font-redhat)",
                                fontWeight: 800,
                                fontSize: { xs: "16px" },
                                lineHeight: "100%",
                                letterSpacing: "0%",
                            }}
                                mt={2}>
                                • Financial need
                            </ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{
                                fontFamily: "var(--font-redhat)",
                                fontWeight: 800,
                                fontSize: { xs: "16px" },
                                lineHeight: "100%",
                                letterSpacing: "0%",
                            }}
                                mt={2}>
                                • Commitment to showing up fully
                            </ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{
                                fontFamily: "var(--font-redhat)",
                                fontWeight: 800,
                                fontSize: { xs: "16px" },
                                lineHeight: "100%",
                                letterSpacing: "0%",
                            }}
                                mt={2}>
                                • Alignment with our values of equity and inclusion
                            </ListItemText>
                        </ListItem>
                    </List>
                </motion.div>

                {/* HOW TO APPLY */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Box sx={{ mb: 3 }}>
                        {/* HOW TO APPLY HEADING */}
                        <Typography sx={{
                            fontFamily: "var(--font-redhat)",
                            fontWeight: 700,
                            fontSize: { xs: "20px", md: "24px", lg: "26px" },
                            lineHeight: "100%",
                            letterSpacing: "0%",
                        }} mb={1}
                        color="#FF6F61"
                            fontWeight={600}>
                            How to Apply
                        </Typography>

                        {/* HOW TO APPLY DESCRIPTION */}
                        <Typography sx={{
                            fontFamily: "var(--font-redhat)",
                            fontWeight: 400,
                            fontSize: { xs: "14px", md: "16px" },
                            lineHeight: "28.8px",
                            letterSpacing: "0%",
                            color: "#6B7280",
                            mt: 1,
                        }} mb={1.5}>
                            We ask thoughtful, reflective questions to understand your story and your intention. We aim to respond within
                            <br />
                            <strong>7 days</strong> of receiving your application.
                        </Typography>

                        {/* SCHOLARSHIP APPLICATION FORM WITH ARROW - REDUCED GAP */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography fontSize={14}>
                                Scholarship Application Form
                            </Typography>
                            <Typography fontSize={16} fontWeight={600} sx={{ ml: 0.25 }}>
                                →
                            </Typography>
                        </Box>
                    </Box>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 700,
                        fontSize: { xs: "20px", md: "24px", lg: "26px" },
                        lineHeight: "100%",
                        letterSpacing: "0%",
                    }}
                    color="#FF6F61"
                    mb={1}>
                        Equity-Focused Scholarships
                    </Typography>

                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 400,
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: "28.8px",
                        letterSpacing: "0%",
                        color: "#6B7280",
                        mt: 1,
                    }} mb={1.5}>
                        We hold space especially for:
                    </Typography>

                    <List sx={{ pl: 2, mb: 3 }}>
                        <ListItem disablePadding>
                            <ListItemText sx={{
                                fontFamily: "var(--font-redhat)",
                                fontWeight: 800,
                                fontSize: { xs: "16px" },
                                lineHeight: "100%",
                                letterSpacing: "0%",
                            }}
                                mt={2}>
                                • underrepresented communities
                            </ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{
                                fontFamily: "var(--font-redhat)",
                                fontWeight: 800,
                                fontSize: { xs: "16px" },
                                lineHeight: "100%",
                                letterSpacing: "0%",
                            }}
                                mt={2}>
                                • Activists, social workers, and frontline workers
                            </ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{
                                fontFamily: "var(--font-redhat)",
                                fontWeight: 800,
                                fontSize: { xs: "16px" },
                                lineHeight: "100%",
                                letterSpacing: "0%",
                            }}
                                mt={2}>
                                • Students, single parents, and low-income applicants
                            </ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{
                                fontFamily: "var(--font-redhat)",
                                fontWeight: 800,
                                fontSize: { xs: "16px" },
                                lineHeight: "100%",
                                letterSpacing: "0%",
                            }}
                                mt={2}>
                                • Global South citizens or people impacted by currency differences
                            </ListItemText>
                        </ListItem>
                    </List>
                </motion.div>

                {/* GIVE BACK */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 700,
                        fontSize: { xs: "20px", md: "24px", lg: "26px" },
                        lineHeight: "100%",
                        letterSpacing: "0%",
                    }}
                    color="#FF6F61"
                    mb={1}>
                        Give Back When You Can
                    </Typography>

                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 400,
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: "28.8px",
                        letterSpacing: "0%",
                        color: "#6B7280",
                        mt: 1,
                    }} mb={1.5}>
                        We operate on the principle of reciprocal generosity. If you receive a scholarship, we invite you to:
                    </Typography>

                    <List sx={{ pl: 2, mb: 3 }}>
                        <ListItem disablePadding>
                            <ListItemText sx={{
                                fontFamily: "var(--font-redhat)",
                                fontWeight: 800,
                                fontSize: { xs: "16px" },
                                lineHeight: "100%",
                                letterSpacing: "0%",
                            }}
                                mt={2}>
                                • Show up with full presence and participation
                            </ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{
                                fontFamily: "var(--font-redhat)",
                                fontWeight: 800,
                                fontSize: { xs: "16px" },
                                lineHeight: "100%",
                                letterSpacing: "0%",
                            }}
                                mt={2}>
                                • Contribute a testimonial or share the impact of your experience
                            </ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{
                                fontFamily: "var(--font-redhat)",
                                fontWeight: 800,
                                fontSize: { xs: "16px" },
                                lineHeight: "100%",
                                letterSpacing: "0%",
                            }}
                                mt={2}>
                                • Pay it forward when your circumstances shift
                            </ListItemText>
                        </ListItem>
                    </List>

                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 400,
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: "28.8px",
                        letterSpacing: "0%",
                        color: "#6B7280",
                        mt: 1,
                    }} mb={1.5}>
                        <strong> We trust you. </strong>And we believe that financial limitations should never be a barrier to deep human connection.
                    </Typography>
                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 400,
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: "28.8px",
                        letterSpacing: "0%",
                        color: "#6B7280",
                        mt: 1,
                    }} mb={1.5}>
                        For questions or support, email <strong> scholarships@authenticrelating.com </strong>
                    </Typography>
                </motion.div>

                {/* APPLICATION FORM TEXT */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Typography
                        sx={{
                            fontFamily: "var(--font-redhat)",
                            fontWeight: 700,
                            fontSize: { xs: "20px", md: "24px", lg: "26px" },
                            lineHeight: "100%",
                            letterSpacing: "0%",
                        }} mb={1}
                        color="#FF6F61"
                    >
                        Authentic Relating Scholarship Application
                    </Typography>
                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 400,
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: "28.8px",
                        letterSpacing: "0%",
                        color: "#6B7280",
                        mt: 1,
                    }} mb={1.5}>
                        Welcome! We're so glad you're here.
                    </Typography>
                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 400,
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: "28.8px",
                        letterSpacing: "0%",
                        color: "#6B7280",
                        mt: 1,
                    }} mb={1.5}>
                        At AuthenticRelating.com, we believe that deep human connection is a birthright—not a luxury. Our scholarship program is designed to support individuals who are called to this work but may face financial constraints.
                    </Typography>
                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 400,
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: "28.8px",
                        letterSpacing: "0%",
                        color: "#6B7280",
                        mt: 1,
                    }} mb={1.5}>
                        This form helps us get to know you and understand how we can support your journey.
                    </Typography>
                </motion.div>

                {/* PARTS */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <Box>
                        <Box>

                            {/* PART 1 */}
                            <Typography
                                sx={{
                                    fontFamily: "var(--font-redhat)",
                                    fontWeight: 700,
                                    fontSize: { xs: "20px", md: "24px", lg: "26px" },
                                    lineHeight: "100%",
                                    letterSpacing: "0%",
                                }}
                                mb={1}
                                color="#FF6F61"
                            >
                                Part 1: Personal Information
                            </Typography>

                            <List sx={{ pl: 2 }}>
                                {[
                                    "Full Name",
                                    "Email Address",
                                    "Phone Number (optional)",
                                    "Location (City & Country)",
                                    "Program You're Applying For (dropdown or short text)",
                                    "Date of Program (if applicable)",
                                ].map((item, i) => (
                                    <ListItem key={i} disablePadding sx={{ mt: 1 }}>
                                        <ListItemIcon sx={{ minWidth: 18 }}>
                                            <Typography sx={{ fontSize: "18px", lineHeight: 1 }}>•</Typography>
                                        </ListItemIcon>

                                        <ListItemText
                                            primary={item}
                                            primaryTypographyProps={{
                                                sx: {
                                                    fontFamily: "var(--font-redhat)",
                                                    fontWeight: 600,
                                                    fontSize: "16px",
                                                    color: "#555",
                                                },
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>

                            {/* PART 2 */}
                            <Typography
                                sx={{
                                    fontFamily: "var(--font-redhat)",
                                    fontWeight: 700,
                                    fontSize: { xs: "20px", md: "24px", lg: "26px" },
                                }}
                                mb={1}
                                color="#FF6F61"
                            >
                                Part 2: Tell Us About You
                            </Typography>

                            <List sx={{ pl: 2 }}>
                                {[
                                    "What draws you to Authentic Relating?",
                                    "What is your intention for participating in this offering?",
                                    "Have you participated in any personal development, relational, or mindfulness practices before?",
                                ].map((item, i) => (
                                    <ListItem key={i} disablePadding sx={{ mt: 1 }}>
                                        <ListItemText
                                            primary={`${i + 1}. ${item}`}
                                            primaryTypographyProps={{
                                                sx: {
                                                    fontFamily: "var(--font-redhat)",
                                                    fontWeight: 600,
                                                    fontSize: "16px",
                                                },
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>

                            {/* PART 3 */}
                            <Typography
                                sx={{
                                    fontFamily: "var(--font-redhat)",
                                    fontWeight: 700,
                                    fontSize: { xs: "20px", md: "24px", lg: "26px" },
                                }}
                                mb={1}
                                color="#FF6F61"
                            >
                                Part 3: Financial Request
                            </Typography>

                            <List sx={{ pl: 2 }}>
                                {[
                                    "What is your current financial situation?",
                                    "What amount can you joyfully and honestly contribute?",
                                    "Would you prefer a payment plan, partial scholarship, or both?",
                                ].map((item, i) => (
                                    <ListItem key={i} disablePadding sx={{ mt: 1 }}>
                                        <ListItemText
                                            primary={`${i + 4}. ${item}`}
                                            primaryTypographyProps={{
                                                sx: {
                                                    fontFamily: "var(--font-redhat)",
                                                    fontWeight: 600,
                                                    fontSize: "16px",
                                                },
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>

                            <List sx={{ pl: 4, mb: 3 }}>
                                {[
                                    "Partial Scholarship",
                                    "Payment Plan",
                                    "Both",
                                    "I'm unsure; I'd like to discuss options",
                                ].map((item, i) => (
                                    <ListItem key={i} disablePadding sx={{ mt: 1 }}>
                                        <ListItemIcon sx={{ minWidth: 18 }}>
                                            <Typography sx={{ fontSize: "18px", lineHeight: 1 }}>•</Typography>
                                        </ListItemIcon>

                                        <ListItemText
                                            primary={item}
                                            primaryTypographyProps={{
                                                sx: {
                                                    fontFamily: "var(--font-redhat)",
                                                    fontWeight: 600,
                                                    fontSize: "16px",
                                                },
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>

                            {/* PART 4 */}
                            <Typography
                                sx={{
                                    fontFamily: "var(--font-redhat)",
                                    fontWeight: 700,
                                    fontSize: { xs: "20px", md: "24px", lg: "26px" },
                                }}
                                mb={1}
                                color="#FF6F61"
                            >
                                Part 4: Mutual Commitment
                            </Typography>

                            <List sx={{ pl: 2 }}>
                                {[
                                    "What will you bring to this space if awarded a scholarship?",
                                    "Are you open to sharing a testimonial about your experience after the program?",
                                ].map((item, i) => (
                                    <ListItem key={i} disablePadding sx={{ mt: 1 }}>
                                        <ListItemText
                                            primary={`${i + 7}. ${item}`}
                                            primaryTypographyProps={{
                                                sx: {
                                                    fontFamily: "var(--font-redhat)",
                                                    fontWeight: 600,
                                                    fontSize: "16px",
                                                },
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>

                            <List sx={{ pl: 4 }}>
                                {["Yes", "No", "Maybe"].map((item, i) => (
                                    <ListItem key={i} disablePadding sx={{ mt: 1 }}>
                                        <ListItemIcon sx={{ minWidth: 18 }}>
                                            <Typography sx={{ fontSize: "18px", lineHeight: 1 }}>•</Typography>
                                        </ListItemIcon>

                                        <ListItemText
                                            primary={item}
                                            primaryTypographyProps={{
                                                sx: {
                                                    fontFamily: "var(--font-redhat)",
                                                    fontWeight: 600,
                                                    fontSize: "16px",
                                                },
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>

                        </Box>
                    </Box>
                </motion.div>

                {/* TIMELINE */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 700,
                        fontSize: { xs: "20px", md: "24px", lg: "26px" },
                        lineHeight: "100%",
                        letterSpacing: "0%",
                    }}
                    color="#FF6F61" mb={1} mt={1}>
                        Timeline
                    </Typography>
                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 400,
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: "28.8px",
                        letterSpacing: "0%",
                        color: "#6B7280",
                        mt: 1,
                    }} mb={1.5}>
                        Applications are reviewed on a rolling basis. You'll receive a response
                        within 7 days of submission.
                    </Typography>
                </motion.div>

                {/* FINAL NOTE */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                >
                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 700,
                        fontSize: { xs: "20px", md: "24px", lg: "26px" },
                        lineHeight: "100%",
                        letterSpacing: "0%",
                    }}
                    color="#FF6F61" mb={1} mt={1}>
                        Final Note
                    </Typography>
                    <Typography sx={{
                        fontFamily: "var(--font-redhat)",
                        fontWeight: 400,
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: "28.8px",
                        letterSpacing: "0%",
                        color: "#6B7280",
                        mt: 1,
                    }} mb={1.5}>
                        Please apply only if you genuinely need support. Scholarships are limited
                        and designed to support those with the greatest need.
                    </Typography>
                </motion.div>
            </SiteContainer>
        </Section>
    );
}