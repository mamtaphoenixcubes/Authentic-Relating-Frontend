"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

// Import common components
import Section from "../../_components/common/Section";
import Container from "../../_components/common/Container";
import SectionHeader from "../../_components/common/SectionHeader";
import Card from "../../_components/common/Card";
import EventButton from "../../_components/buttons/EventButton";

// ============================================================
// STATIC DATA
// ============================================================
const sessionsData = [
  {
    id: 1,
    title: "Expand inside out",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed urna elit.",
    time: "21st Mar, 2025 @ 10:00am - 02:00pm",
    mode: "In person / Online Live",
    price: 6500,
    originalPrice: 16500,
    currency: "INR",
    image: "/hero/manymoresessions.png",
  },
  {
    id: 2,
    title: "Expand inside out",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed urna elit.",
    time: "21st Mar, 2025 @ 10:00am - 02:00pm",
    mode: "In person / Online Live",
    price: 6500,
    originalPrice: 16500,
    currency: "INR",
    image: "/hero/manymoresessions.png",
  },
  {
    id: 3,
    title: "Expand inside out",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed urna elit.",
    time: "21st Mar, 2025 @ 10:00am - 02:00pm",
    mode: "In person / Online Live",
    price: 6500,
    originalPrice: 16500,
    currency: "INR",
    image: "/hero/manymoresessions.png",
  },
];

// ============================================================
// COMPONENT
// ============================================================

export default function ManyMoreSessions() {
  const [expandedCards, setExpandedCards] = useState({});

  const getPriceLabel = (session) => {
    const symbol = session.currency === "USD" ? "$" : "₹";
    return `${symbol}${session.price.toLocaleString()}`;
  };

  const getOriginalPriceLabel = (session) => {
    if (!session.originalPrice) return null;
    const symbol = session.currency === "USD" ? "$" : "₹";
    return `${symbol}${session.originalPrice.toLocaleString()}`;
  };

  const toggleDescription = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Section sx={{ py: { xs: 6, md: 10 } }}>
      <Container>
        <SectionHeader
          title="Many more sessions available"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed urna elit. Ut in tincidunt lacus, at convallis risus."
          align="center"
          sx={{ mb: 4 }}
        />

        {/* CARDS CONTAINER - FLEXBOX FOR CENTERING */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {sessionsData.map((session, index) => {
            const isExpanded = expandedCards[session.id] || false;

            return (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  width: "calc(33.333% - 16px)",
                  minWidth: "300px",
                  maxWidth: "400px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Card
                  sx={{
                    p: 2,
                    borderRadius: "16px",
                    background: "linear-gradient(100deg, #50B0F0 0%, #80B8F5 50%, #bfc3fa 100%)",
                    boxShadow: "0 8px 24px rgba(100, 181, 246, 0.3)",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 16px 40px rgba(100, 181, 246, 0.4)",
                    },
                  }}
                >
                  {/* IMAGE */}
                  <Box
                    sx={{
                      height: "200px",
                      minHeight: "200px",
                      borderRadius: "12px",
                      overflow: "hidden",
                      mb: 2,
                      background: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={session.image}
                      alt={session.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>

                  {/* TITLE */}
                  <Typography
                    sx={{
                      fontFamily: '"Red Hat Display", sans-serif',
                      fontWeight: 700,
                      fontSize: { xs: "16px", md: "18px" },
                      color: "#fff",
                      mb: 1,
                      minHeight: "48px",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {session.title}
                  </Typography>

                  {/* DESCRIPTION */}
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      onClick={() => toggleDescription(session.id)}
                      sx={{
                        fontFamily: '"Red Hat Display", sans-serif',
                        fontWeight: 400,
                        fontSize: { xs: "12px", md: "13px" },
                        lineHeight: 1.6,
                        color: "rgba(255,255,255,0.9)",
                        cursor: "pointer",
                        display: "-webkit-box",
                        WebkitLineClamp: isExpanded ? "unset" : 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "#fff",
                        },
                      }}
                    >
                      {session.description}
                    </Typography>
                    {session.description && session.description.length > 100 && (
                      <Typography
                        onClick={() => toggleDescription(session.id)}
                        sx={{
                          fontFamily: '"Red Hat Display", sans-serif',
                          fontWeight: 600,
                          fontSize: { xs: "11px", md: "12px" },
                          color: "#fff",
                          cursor: "pointer",
                          mt: 0.5,
                          textDecoration: "underline",
                          "&:hover": { opacity: 0.8 },
                        }}
                      >
                        {isExpanded ? "Show Less" : "... Read More"}
                      </Typography>
                    )}
                  </Box>

                  {/* TIME */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                    <Box component="span" sx={{ fontSize: "14px", color: "#fff" }}>🕐</Box>
                    <Typography
                      sx={{
                        fontFamily: '"Red Hat Display", sans-serif',
                        fontWeight: 500,
                        fontSize: { xs: "12px", md: "13px" },
                        color: "#fff",
                      }}
                    >
                      {session.time}
                    </Typography>
                  </Box>

                  {/* MODE */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                    <Box component="span" sx={{ fontSize: "14px", color: "#fff" }}>📍</Box>
                    <Typography
                      sx={{
                        fontFamily: '"Red Hat Display", sans-serif',
                        fontWeight: 500,
                        fontSize: { xs: "12px", md: "13px" },
                        color: "#fff",
                      }}
                    >
                      Mode: {session.mode}
                    </Typography>
                  </Box>

                  {/* PRICE */}
                  <Box sx={{ display: "flex", alignItems: "baseline", gap: 1, mb: 3 }}>
                    <Typography
                      sx={{
                        fontFamily: '"Red Hat Display", sans-serif',
                        fontWeight: 700,
                        fontSize: { xs: "16px", md: "18px" },
                        color: "#fff",
                      }}
                    >
                      {session.currency} {getPriceLabel(session)}
                    </Typography>
                    {session.originalPrice && (
                      <Typography
                        sx={{
                          fontFamily: '"Red Hat Display", sans-serif',
                          fontWeight: 400,
                          fontSize: { xs: "12px", md: "13px" },
                          color: "rgba(255,255,255,0.7)",
                          textDecoration: "line-through",
                        }}
                      >
                        {session.currency} {getOriginalPriceLabel(session)}
                      </Typography>
                    )}
                  </Box>

                  {/* BUTTONS - PUSHED TO BOTTOM */}
                  <div style={{ display: "flex", gap: "12px", marginTop: "auto" }}>

                    {/* READ MORE BUTTON */}
                    <EventButton
                      sx={{
                        flex: 1,
                        height: "46px",
                        borderRadius: "10px",
                        fontSize: "16px",
                        fontWeight: 500,
                        fontFamily: '"Red Hat Display", sans-serif',
                        color: "#FFFFFF",
                        position: "relative",
                        overflow: "hidden",

                        // Screenshot Read More color
                        background:
                          "linear-gradient(105deg, #6BB9F1 0%, #80C5F5 100%)",

                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",

                        border: "1.5px solid rgba(255,255,255,0.95)",

                        boxShadow: "0px 2px 5px rgba(0,0,0,0.12)",

                        transition: "all 0.3s ease",

                        "&::before": {
                          content: '""',
                          position: "absolute",
                          inset: 0,
                          borderRadius: "10px",
                          padding: "1px",

                          background:
                            "linear-gradient(135deg, #FFFFFF 0%, rgba(255,255,255,0.35) 100%)",

                          WebkitMask:
                            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",

                          WebkitMaskComposite: "xor",
                          maskComposite: "exclude",

                          pointerEvents: "none",
                          zIndex: 1,
                        },

                        "&:hover": {
                          background:
                            "linear-gradient(105deg, #58AEEF 0%, #70BDF3 100%)",

                          boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",

                          transform: "translateY(-1px)",
                        },
                      }}
                    >
                      Read More
                    </EventButton>


                    {/* BOOK NOW BUTTON */}
                    <EventButton
                      sx={{
                        flex: 1,
                        height: "46px",
                        borderRadius: "10px",
                        fontSize: "16px",
                        fontWeight: 600,
                        fontFamily: '"Red Hat Display", sans-serif',
                        color: "#FFFFFF",
                        position: "relative",
                        overflow: "hidden",

                        // Screenshot Book Now color
                        background:
                          "linear-gradient(105deg, #93c6fc 0%, #1692ff 100%)",

                        border: "1.5px solid rgba(255,255,255,0.95)",

                        boxShadow: "0px 2px 5px rgba(0,0,0,0.12)",

                        transition: "all 0.3s ease",

                        "&::before": {
                          content: '""',
                          position: "absolute",
                          inset: 0,
                          borderRadius: "10px",
                          padding: "1px",

                          background:
                            "linear-gradient(135deg, #FFFFFF 0%, rgba(255,255,255,0.35) 100%)",

                          WebkitMask:
                            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",

                          WebkitMaskComposite: "xor",
                          maskComposite: "exclude",

                          pointerEvents: "none",
                          zIndex: 1,
                        },

                        "&:hover": {
                          background:
                            "linear-gradient(105deg, #69ADF0 0%, #0876D5 100%)",

                          boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",

                          transform: "translateY(-1px)",
                        },
                      }}
                    >
                      Book Now
                    </EventButton>

                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}