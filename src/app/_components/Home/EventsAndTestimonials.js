"use client";

import { useEffect, useState } from "react";

import {
  Box,
  Typography,
  Button,
  Stack,
  Chip,
  Container,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { motion } from "framer-motion";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRouter } from "next/navigation";

import axiosInstance from "@/lib/axios";

import EventButton from "../buttons/EventButton";

// ============================================================
// MOTION BUTTON
// ============================================================

const MotionButton = motion(Button);

// ============================================================
// ANIMATION
// ============================================================

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// ============================================================
// DATE SUFFIX
// ============================================================

const getDateSuffix = (day) => {
  if (day % 10 === 1 && day !== 11) {
    return "st";
  }

  if (day % 10 === 2 && day !== 12) {
    return "nd";
  }

  if (day % 10 === 3 && day !== 13) {
    return "rd";
  }

  return "th";
};

// ============================================================
// COMPONENT
// ============================================================

export const EventsAndTestimonials = () => {
  // ==========================================================
  // STATES
  // ==========================================================

  const [loading, setLoading] = useState(false);

  const [eventsData, setEventsData] = useState([]);

  const [eventsByDate, setEventsByDate] = useState({});

  const [dates, setDates] = useState([]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [visibleStart, setVisibleStart] = useState(0);

  // ==========================================================
  // MUI
  // ==========================================================

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // ==========================================================
  // ROUTER
  // ==========================================================

  const router = useRouter();

  // ==========================================================
  // FETCH EVENTS
  // ==========================================================

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);

      const response = await axiosInstance.get(
        "/frontendApis/getAllEvents",
        {
          params: {
            limit: 1000,
          },
        }
      );

      const events = response?.data?.data || [];

      console.log("Events:", events);

      setEventsData(events);

      // ------------------------------------------------------
      // GROUP EVENTS BY DATE
      // ------------------------------------------------------

      const grouped = events.reduce((acc, event) => {
        if (!event?.start_date) {
          return acc;
        }

        const dateKey = new Date(event.start_date)
          .toISOString()
          .split("T")[0];

        if (!acc[dateKey]) {
          acc[dateKey] = [];
        }

        acc[dateKey].push(event);

        return acc;
      }, {});

      // ------------------------------------------------------
      // SORT DATES
      // ------------------------------------------------------

      const uniqueDates = Object.keys(grouped).sort(
        (a, b) => new Date(a) - new Date(b)
      );

      // ------------------------------------------------------
      // UPDATE STATE
      // ------------------------------------------------------

      setEventsByDate(grouped);

      setDates(uniqueDates);

      setSelectedIndex(0);

      setVisibleStart(0);
    } catch (error) {
      console.error("Events API error:", error);
    } finally {
      setLoading(false);
    }
  };

  // ==========================================================
  // VISIBLE DATE COUNT
  // ==========================================================

  const getVisibleCount = () => {
    if (isMobile) {
      return 1;
    }

    return 3;
  };

  // ==========================================================
  // DATE NAVIGATION
  // ==========================================================

  const handleNext = () => {
    const visibleCount = getVisibleCount();

    if (visibleStart + visibleCount < dates.length) {
      setVisibleStart((previous) => previous + 1);
    }
  };

  const handlePrev = () => {
    if (visibleStart > 0) {
      setVisibleStart((previous) => previous - 1);
    }
  };

  // ==========================================================
  // NEXT CLICK
  // ==========================================================

  const handleNextClick = () => {
    if (isMobile) {
      if (selectedIndex < dates.length - 1) {
        setSelectedIndex((previous) => previous + 1);
      }

      return;
    }

    handleNext();
  };

  // ==========================================================
  // PREVIOUS CLICK
  // ==========================================================

  const handlePrevClick = () => {
    if (isMobile) {
      if (selectedIndex > 0) {
        setSelectedIndex((previous) => previous - 1);
      }

      return;
    }

    handlePrev();
  };

  // ==========================================================
  // DISABLED STATES
  // ==========================================================

  const disablePrev = isMobile
    ? selectedIndex === 0
    : visibleStart === 0;

  const disableNext = isMobile
    ? selectedIndex >= dates.length - 1
    : visibleStart + getVisibleCount() >= dates.length;

  // ==========================================================
  // FORMAT CHIP DATE
  // ==========================================================

  const formatChipDate = (dateString) => {
    if (!dateString) {
      return "";
    }

    const date = new Date(dateString);

    const day = date.getDate();

    const month = date.toLocaleString("en-US", {
      month: "short",
    });

    const year = date.getFullYear();

    const suffix = getDateSuffix(day);

    return `${day}${suffix} ${month} ${year}`;
  };

  // ==========================================================
  // FORMAT EVENT DATE + TIME
  // ==========================================================

  const formatEventDateTime = (start, end) => {
    if (!start) {
      return "";
    }

    const startDate = new Date(start);

    const endDate = end ? new Date(end) : null;

    const day = startDate.getDate();

    const month = startDate.toLocaleString("en-US", {
      month: "long",
    });

    const year = startDate.getFullYear();

    const suffix = getDateSuffix(day);

    const formatTime = (date) => {
      return date
        .toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
        .toLowerCase();
    };

    const timeRange = endDate
      ? `${formatTime(startDate)} – ${formatTime(endDate)}`
      : formatTime(startDate);

    return `${day}${suffix} ${month}, ${year} @ ${timeRange}`;
  };

  // ==========================================================
  // FORMAT LOCATION
  // ==========================================================

  const formatLocation = (event) => {
    if (event?.formatted_address) {
      return event.formatted_address;
    }

    const parts = [
      event?.city,
      event?.state,
      event?.country,
    ].filter(Boolean);

    return parts.join(", ");
  };

  // ==========================================================
  // EVENT CARD
  // ==========================================================

  const EventCard = ({ event }) => {
    return (
      <Box
        sx={{
          width: "100%",

          p: {
            xs: 2.5,
            sm: 3,
            md: 4,
          },

          borderRadius: "16px",

          color: "#fff",

          background:
            "linear-gradient(155deg, rgba(58,163,248,0.95), rgba(121,188,243,0.95), rgba(40,157,253,0.95), rgba(19,143,245,0.95), rgba(108,186,250,0.95), rgba(71,170,250,0.95))",

          boxShadow:
            "0px 8px 20px rgba(0,0,0,0.18)",

          position: "relative",

          overflow: "hidden",

          border: "none",

          zIndex: 0,

          // ==================================================
          // GRADIENT BORDER
          // ==================================================

          "&::before": {
            content: '""',

            position: "absolute",

            inset: 0,

            borderRadius: "16px",

            padding: "1.5px",

            background:
              "linear-gradient(120deg, rgba(255,255,255,0.95), rgba(255,255,255,0.2), rgba(255,255,255,0.6))",

            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",

            WebkitMaskComposite: "xor",

            maskComposite: "exclude",

            pointerEvents: "none",

            zIndex: 0,
          },

          // ==================================================
          // CONTENT ABOVE BORDER
          // ==================================================

          "& > *": {
            position: "relative",
            zIndex: 1,
          },
        }}
      >
        {/* ==================================================
            EVENT TITLE
        ================================================== */}

        <Typography
          sx={{
            fontSize: {
              xs: 18,
              sm: 20,
              md: 22,
            },

            fontWeight: 700,

            mb: 1,

            lineHeight: 1.3,
          }}
        >
          {event?.event_name || "Upcoming Event"}
        </Typography>

        {/* ==================================================
            EVENT DESCRIPTION
        ================================================== */}

        {event?.event_description && (
          <Typography
            sx={{
              fontSize: {
                xs: 12,
                sm: 13,
                md: 14,
              },

              mb: 2,

              opacity: 0.9,

              lineHeight: 1.6,

              display: "-webkit-box",

              WebkitLineClamp: 2,

              WebkitBoxOrient: "vertical",

              overflow: "hidden",
            }}
          >
            {event.event_description}
          </Typography>
        )}

        {/* ==================================================
            EVENT INFORMATION
        ================================================== */}

        <Stack
          spacing={1}
          mb={3}
        >
          {/* TIME */}

          <Stack
            direction="row"
            spacing={1}
            alignItems="flex-start"
          >
            <AccessTimeIcon
              sx={{
                fontSize: {
                  xs: 17,
                  sm: 18,
                },

                mt: "2px",

                flexShrink: 0,
              }}
            />

            <Typography
              sx={{
                fontSize: {
                  xs: 11,
                  sm: 12,
                  md: 13,
                },

                lineHeight: 1.5,
              }}
            >
              Time:{" "}
              {formatEventDateTime(
                event?.start_date,
                event?.end_date
              )}
            </Typography>
          </Stack>

          {/* LOCATION */}

          <Stack
            direction="row"
            spacing={1}
            alignItems="flex-start"
          >
            <LocationOnIcon
              sx={{
                fontSize: {
                  xs: 17,
                  sm: 18,
                },

                mt: "2px",

                flexShrink: 0,
              }}
            />

            <Typography
              sx={{
                fontSize: {
                  xs: 11,
                  sm: 12,
                  md: 13,
                },

                lineHeight: 1.5,

                display: "-webkit-box",

                WebkitLineClamp: 2,

                WebkitBoxOrient: "vertical",

                overflow: "hidden",
              }}
            >
              Address: {formatLocation(event)}
            </Typography>
          </Stack>
        </Stack>

        {/* ==================================================
            BUTTONS
        ================================================== */}

        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={1.5}
          width="100%"
        >
          {/* ==================================================
              READ MORE
          ================================================== */}

          <MotionButton
            onClick={() => router.push("/events")}
            whileHover={{
              scale: 1.04,
              y: -3,

              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.96,
            }}
            sx={{
              width: {
                xs: "100%",
                sm: "auto",
              },

              minWidth: {
                xs: "100%",
                sm: "120px",
                md: "130px",
              },

              height: {
                xs: "46px",
                sm: "44px",
                md: "48px",
              },

              px: {
                xs: 2.5,
                sm: 2,
                md: 2.5,
              },

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              borderRadius: "12px",

              color: "#fff",

              fontSize: {
                xs: "13px",
                sm: "12px",
                md: "14px",
              },

              fontWeight: 500,

              textTransform: "none",

              cursor: "pointer",

              whiteSpace: "nowrap",

              background:
                "rgba(255,255,255,0.22)",

              position: "relative",

              backdropFilter: "blur(12px)",

              WebkitBackdropFilter: "blur(12px)",

              border: "none",

              overflow: "hidden",

              "&::before": {
                content: '""',

                position: "absolute",

                inset: 0,

                borderRadius: "12px",

                padding: "2px",

                background:
                  "linear-gradient(106deg, #FFFFFF 34%, rgba(255,255,255,0.1) 105%)",

                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",

                WebkitMaskComposite: "xor",

                maskComposite: "exclude",

                pointerEvents: "none",

                zIndex: 0,
              },

              "&:hover": {
                background:
                  "rgba(255,255,255,0.3)",

                boxShadow:
                  "0 8px 20px rgba(255,255,255,0.15)",
              },

              "& .MuiButton-label": {
                position: "relative",
                zIndex: 1,
              },
            }}
          >
            Read More
          </MotionButton>

          {/* ==================================================
              CONTACT US
          ================================================== */}

          <MotionButton
            onClick={() => router.push("/contactus")}
            whileHover={{
              scale: 1.04,
              y: -3,

              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.96,
            }}
            sx={{
              width: {
                xs: "100%",
                sm: "auto",
              },

              minWidth: {
                xs: "100%",
                sm: "120px",
                md: "130px",
              },

              height: {
                xs: "46px",
                sm: "44px",
                md: "48px",
              },

              px: {
                xs: 2.5,
                sm: 2,
                md: 2.5,
              },

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              borderRadius: "12px",

              color: "#fff",

              fontSize: {
                xs: "13px",
                sm: "12px",
                md: "14px",
                lg: "15px",
              },

              fontWeight: 500,

              textTransform: "none",

              cursor: "pointer",

              whiteSpace: "nowrap",

              background:
                "rgba(255,255,255,0.22)",

              position: "relative",

              backdropFilter: "blur(12px)",

              WebkitBackdropFilter: "blur(12px)",

              border: "none",

              overflow: "hidden",

              "&::before": {
                content: '""',

                position: "absolute",

                inset: 0,

                borderRadius: "12px",

                padding: "2px",

                background:
                  "linear-gradient(106deg, #FFFFFF 34%, rgba(255,255,255,0.1) 105%)",

                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",

                WebkitMaskComposite: "xor",

                maskComposite: "exclude",

                pointerEvents: "none",

                zIndex: 0,
              },

              "&:hover": {
                background:
                  "rgba(255,255,255,0.3)",

                boxShadow:
                  "0 8px 20px rgba(255,255,255,0.15)",
              },
            }}
          >
            Contact Us
          </MotionButton>
        </Stack>
      </Box>
    );
  };

  // ==========================================================
  // VISIBLE DATES
  // ==========================================================

  const visibleDates = dates.slice(
    visibleStart,
    visibleStart + getVisibleCount()
  );

  // ==========================================================
  // SELECTED DATE
  // ==========================================================

  const selectedDate = dates[selectedIndex];

  // ==========================================================
  // SELECTED EVENTS
  // ==========================================================

  const selectedEvents = selectedDate
    ? eventsByDate[selectedDate] || []
    : [];

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <Box
      sx={{
        py: {
          xs: 2,
          sm: 2,
          md: 3,
          xl: 4,
        },
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{
            xs: 4,
            md: 6,
          }}
          alignItems="center"
        >
          {/* ==================================================
              LEFT SIDE
          ================================================== */}

          <Grid
            item
            xs={12}
            md={6}
          >
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              {/* ==================================================
                  MAIN HEADING
              ================================================== */}

              <Typography
                sx={{
                  fontSize: {
                    xs: 24,
                    sm: 28,
                    md: 40,
                    lg: 50,
                  },

                  fontWeight: 500,

                  color: "#2879d6",

                  lineHeight: 1.2,
                }}
              >
                Upcoming{" "}
                <Box
                  component="span"
                  sx={{
                    fontWeight: 800,
                    color: "#1565c0",
                  }}
                >
                  Programs
                </Box>
              </Typography>

              {/* ==================================================
                  SECOND HEADING
              ================================================== */}

              <Typography
                sx={{
                  fontSize: {
                    xs: 24,
                    sm: 28,
                    md: 40,
                    lg: 50,
                  },

                  fontWeight: 800,

                  color: "#1565c0",

                  lineHeight: 1.2,

                  mb: 2,
                }}
              >
                Events & Workshops
              </Typography>

              {/* ==================================================
                  DESCRIPTION
              ================================================== */}

              <Typography
                sx={{
                  maxWidth: {
                    xs: "100%",
                    sm: 420,
                  },

                  color: "#666",

                  fontSize: {
                    xs: 12,
                    sm: 13,
                    md: 14,
                  },

                  lineHeight: 1.7,

                  mb: 3,
                }}
              >
                Morbi varius ornare ante non posuere. Morbi
                lacus lacus, auctor sit amet erat vitae,
                interdum semper leo. Donec dignissim iaculis
                fermentum.
              </Typography>

              {/* ==================================================
                  SEE ALL EVENTS
              ================================================== */}

              <EventButton
                onClick={() => router.push("/events")}
                variant="default"
              >
                See All Events →
              </EventButton>
            </motion.div>
          </Grid>

          {/* ==================================================
              RIGHT SIDE
          ================================================== */}

          <Grid
            item
            xs={12}
            md={6}
          >
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              {/* ==================================================
                  DATE SELECTOR
              ================================================== */}

              {dates.length > 0 && (
                <Stack
                  direction="row"
                  spacing={{
                    xs: 0.5,
                    sm: 1,
                  }}
                  alignItems="center"
                  justifyContent="center"
                  mb={{
                    xs: 2,
                    sm: 3,
                  }}
                  sx={{
                    width: "100%",
                    flexWrap: "nowrap",
                  }}
                >
                  {/* ==================================================
                      PREVIOUS
                  ================================================== */}

                  <ChevronLeftIcon
                    onClick={
                      !disablePrev
                        ? handlePrevClick
                        : undefined
                    }
                    sx={{
                      cursor: disablePrev
                        ? "not-allowed"
                        : "pointer",

                      opacity: disablePrev ? 0.3 : 1,

                      flexShrink: 0,

                      fontSize: {
                        xs: 20,
                        sm: 24,
                      },

                      transition:
                        "transform 0.2s ease",

                      "&:hover": {
                        transform: !disablePrev
                          ? "scale(1.1)"
                          : "none",
                      },
                    }}
                  />

                  {/* ==================================================
                      DATE CHIPS
                  ================================================== */}

                  {(isMobile
                    ? selectedDate
                      ? [selectedDate]
                      : []
                    : visibleDates
                  ).map((date, index) => {
                    const realIndex = isMobile
                      ? selectedIndex
                      : visibleStart + index;

                    return (
                      <Chip
                        key={date}
                        label={formatChipDate(date)}
                        onClick={() =>
                          setSelectedIndex(realIndex)
                        }
                        sx={{
                          cursor: "pointer",

                          px: {
                            xs: 1.2,
                            sm: 1,
                            md: 1.5,
                            xl: 2,
                          },

                          py: {
                            xs: 1.2,
                            sm: 1,
                            xl: 2,
                          },

                          height: "auto",

                          minWidth: {
                            xs: "auto",
                            sm: "110px",
                            md: "120px",
                          },

                          fontWeight: 500,

                          fontSize: {
                            xs: "10px",
                            sm: "12px",
                            md: "13px",
                          },

                          borderRadius: "10px",

                          transition:
                            "all .3s ease",

                          whiteSpace: "nowrap",

                          textAlign: "center",

                          ...(selectedIndex ===
                            realIndex
                            ? {
                              color: "#fff",

                              background:
                                "linear-gradient(135deg,#6fa8dc,#5b9bd5)",

                              boxShadow:
                                "0 8px 18px rgba(0,0,0,0.18)",

                              border:
                                "2px solid rgba(255,255,255,0.7)",
                            }
                            : {
                              color: "#444",

                              background:
                                "#f5f5f5",

                              border:
                                "2px solid #e0e0e0",

                              "&:hover": {
                                transform:
                                  "translateY(-2px)",

                                boxShadow:
                                  "0 4px 12px rgba(0,0,0,0.1)",
                              },
                            }),
                        }}
                      />
                    );
                  })}

                  {/* ==================================================
                      NEXT
                  ================================================== */}

                  <ChevronRightIcon
                    onClick={
                      !disableNext
                        ? handleNextClick
                        : undefined
                    }
                    sx={{
                      cursor: disableNext
                        ? "not-allowed"
                        : "pointer",

                      opacity: disableNext ? 0.3 : 1,

                      flexShrink: 0,

                      fontSize: {
                        xs: 20,
                        sm: 24,
                      },

                      transition:
                        "transform 0.2s ease",

                      "&:hover": {
                        transform: !disableNext
                          ? "scale(1.1)"
                          : "none",
                      },
                    }}
                  />
                </Stack>
              )}

              {/* ==================================================
                  LOADING
              ================================================== */}

              {loading && (
                <Box
                  sx={{
                    minHeight: 250,

                    display: "flex",

                    alignItems: "center",

                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#777",
                      fontSize: 14,
                    }}
                  >
                    Loading events...
                  </Typography>
                </Box>
              )}

              {/* ==================================================
                  NO EVENTS
              ================================================== */}

              {!loading &&
                dates.length === 0 && (
                  <Box
                    sx={{
                      minHeight: 250,

                      display: "flex",

                      alignItems: "center",

                      justifyContent: "center",

                      textAlign: "center",

                      p: 3,

                      borderRadius: "16px",

                      background: "#f7f9fc",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#777",
                        fontSize: 14,
                      }}
                    >
                      No upcoming events available.
                    </Typography>
                  </Box>
                )}

              {/* ==================================================
                  SINGLE EVENT
              ================================================== */}

              {!loading &&
                selectedEvents.length === 1 && (
                  <EventCard
                    event={selectedEvents[0]}
                  />
                )}

              {/* ==================================================
                  MULTIPLE EVENTS
              ================================================== */}

              {!loading &&
                selectedEvents.length > 1 && (
                  <Swiper
                    key={selectedDate}
                    spaceBetween={20}
                    slidesPerView={1}
                    modules={[
                      Navigation,
                      Pagination,
                    ]}
                    navigation
                    pagination={{
                      clickable: true,
                    }}
                    style={{
                      width: "100%",
                    }}
                  >
                    {selectedEvents.map(
                      (event, index) => (
                        <SwiperSlide
                          key={`${event?._id || "event"}-${index}`}
                        >
                          <EventCard
                            event={event}
                          />
                        </SwiperSlide>
                      )
                    )}
                  </Swiper>
                )}
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EventsAndTestimonials;