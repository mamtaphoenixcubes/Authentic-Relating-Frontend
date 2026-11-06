import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion"; // Added Framer Motion import

export default function WhyItMatters() {
    return (
        <Container maxWidth="xl" sx={{ py: 6 }}>
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <Box
                    sx={{
                        position: "relative",
                        height: { xs: 320, md: 520 },
                        borderRadius: 5,
                        overflow: "hidden",
                        backgroundImage:
                            "url('/WhyItMattersToday.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        px: 3,
                    }}
                >
                    {/* Gradient Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                background:
                                    "linear-gradient(135deg, rgba(233,90,60,0.92), rgba(198,74,45,0.92))",
                                zIndex: 1,
                            }}
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Box sx={{ position: "relative", zIndex: 2, maxWidth: 700 }}>
                            <Typography
                                sx={{
                                    fontFamily: "var(--font-redhat)",
                                    fontWeight: 700,
                                    fontSize: { xs: 28, sm: 34, md: 40, lg: 44 }, // responsive
                                    lineHeight: "100%",
                                    letterSpacing: "0%",
                                    color: "#fff",
                                    mb: 2,
                                }}
                            >
                                Why It Matters Today
                            </Typography>

                            <Typography
                                sx={{
                                    fontFamily: "var(--font-redhat)",
                                    fontWeight: 400,
                                    fontSize: { xs: 14, sm: 15, md: 16 },
                                    lineHeight: "28.8px",
                                    letterSpacing: "0%",
                                    textAlign: "center",
                                    color: "rgba(255,255,255,0.9)",
                                }}
                            >
                                In a world of distractions and surface-level interactions, relating
                                circles offer a return to real, meaningful connection. They cultivate
                                self-awareness, emotional intelligence, and belonging, reminding us
                                that true connection is built on presence, empathy, and the courage to <br/>
                                be seen as we are.
                            </Typography>
                        </Box>
                    </motion.div>
                </Box>
            </motion.div>
        </Container>
    );
}