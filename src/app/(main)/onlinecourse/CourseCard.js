"use client";

import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import axiosInstance from "@/lib/axios";
import CourseLoginDialog from "./CourseLoginDialog";

// Common components
import Section from "../../_components/common/Section";
import SiteContainer from "../../_components/common/SiteContainer";
import Card from "../../_components/common/Card";
import EventButton from "../../_components/buttons/EventButton";

// Theme
import theme from "../../../theme/theme";

const getCourseImageUrl = (image) => {
  const imagePath = image;
  if (typeof imagePath !== "string" || !imagePath.trim()) {
    return "/placeholder.png";
  }

  const path = imagePath.trim();
  if (/^https?:\/\//i.test(path)) return path;

  const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "") ?? "";
  return `${baseUrl}/${path.replace(/^\/+/, "")}`;
};

const formatCourseStartDate = (startDate) => {
  if (!startDate) return "";

  const date = new Date(startDate);
  if (Number.isNaN(date.getTime())) return "";

  const formattedDate = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
  }).format(date);
  const formattedTime = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);

  return `${formattedDate}, ${formattedTime}`;
};

const getCourseDeliveryLabel = (course) => {
  const mode = course?.deliveryMode || course?.mode_of_course;
  const labels = {
    prerecorded: "Prerecorded",
    online: "Online",
    both: "Online & Prerecorded",
    digitaldownload: "Digital Download",
  };

  return labels[mode?.toLowerCase()] || "Not specified";
};

export default function CourseCard() {
  const [courseData, setCourseData] = useState([]);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});
  const [activeCategory, setActiveCategory] = useState("All");
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [paymentReturnTo, setPaymentReturnTo] = useState('/onlinecourse');

  const handleBookNow = (courseSlug) => {
    const paymentUrl = `/onlinecourse/payment/${courseSlug}`;
    if (localStorage.getItem('token')) {
      window.location.href = paymentUrl;
      return;
    }
    setPaymentReturnTo(paymentUrl);
    setLoginDialogOpen(true);
  };

  const size = 6;

  const categories = [
    "All",
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
  ];

  // Safely access theme configuration
  const courseCardTheme = theme?.custom?.courseCard || {};

  // Button colors
  const readMoreBackground =
    courseCardTheme.readMore?.background ||
    "linear-gradient(105deg, #6BB9F1 0%, #80C5F5 100%)";

  const readMoreHover =
    courseCardTheme.readMore?.hoverBackground ||
    "linear-gradient(105deg, #58AEEF 0%, #70BDF3 100%)";

  const buyNowBackground =
    courseCardTheme.buyNow?.background ||
    "linear-gradient(105deg, #80B8F5 0%, #1685E5 100%)";

  const buyNowHover =
    courseCardTheme.buyNow?.hoverBackground ||
    "linear-gradient(105deg, #69ADF0 0%, #0876D5 100%)";

  // Fetch courses
  useEffect(() => {
    let isMounted = true;

    const fetchCourses = async () => {
      try {
        setLoading(true);

        const res = await axiosInstance.get(
          "/frontendApis/GetCourseAll",
          {
            params: { page, size },
          }
        );

        if (!isMounted) return;

        if (res.data.status === 1) {
          setCourseData(
            Array.isArray(res.data.courses)
              ? res.data.courses
              : []
          );

          setTotalCount(Number(res.data.totalcount) || 0);
        } else {
          setCourseData([]);
          setTotalCount(0);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Course API error:", error);
          setCourseData([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchCourses();

    return () => {
      isMounted = false;
    };
  }, [page]);

  const totalPages = Math.ceil(totalCount / size);

  // Currency symbol
  const getCurrencySymbol = (course) => {
    return course?.currency === "USD" ? "$" : "₹";
  };

  // Course price
  const getCoursePriceLabel = (course) => {
    if (!course) return "";

    const currencySymbol = getCurrencySymbol(course);
    const price = course.price ?? course.amountOneTime ?? 0;
    const paymentType = course.course_paymenttype?.toLowerCase();

    if (paymentType === "free") return "Free";

    if (["onetimepayment", "one_time", "one-time"].includes(paymentType)) {
      return `${currencySymbol}${price}`;
    }

    if (paymentType === "recurring") {
      const interval = course.recurringInterval || "week";
      const intervalLabels = {
        day: "day",
        week: "week",
        month: "month",
        year: "year",
      };
      const intervalLabel = intervalLabels[interval.toLowerCase()] || interval;
      const installmentCount = Number(
        course.installmentCount ?? course.installment
      );
      const installmentLabel =
        installmentCount > 1 ? ` for ${installmentCount} installments` : "";

      return `${currencySymbol}${price}/${intervalLabel}${installmentLabel}`;
    }

    return price ? `${currencySymbol}${price}` : "";
  };
  // Expand / collapse description
  const toggleDescription = (courseId) => {
    setExpandedCards((prev) => ({
      ...prev,
      [courseId]: !prev[courseId],
    }));
  };

  // Filter published courses
  const publishedCourses = courseData.filter(
    (course) =>
      course.publishCourse &&
      course.approve_course &&
      !course.isdelete
  );


  console.log(publishedCourses,"pub")

  // Button common styles
  const commonButtonStyles = {
    flex: 1,
    height: "46px",
    minWidth: 0,
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: 500,
    fontFamily: '"Red Hat Display", sans-serif',
    color: "#FFFFFF",
    border: "1.5px solid #FFFFFF",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.12)",
    transition: "all 0.3s ease",
    textTransform: "none",
    whiteSpace: "nowrap",
    "&:hover": {
      transform: "translateY(-1px)",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
    },
  };

  return (
    <Section
      sx={{
        pt: { xs: 0, sm: 0.5, md: 2 },
        pb: { xs: 2, sm: 0, md: 1 },
      }}
    >
      <SiteContainer maxWidth="1600px">

        {/* HEADER */}
        <Box
          sx={{
            textAlign: "center",
            mt: { xs: 2, md: 0 },
            mb: { xs: 2, md: 3 },
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Red Hat Display", sans-serif',
              fontWeight: 700,
              fontSize: {
                xs: "28px",
                sm: "34px",
                md: "42px",
                lg: "48px",
              },
              color: "#F9998D",
              lineHeight: 1.2,
              mb: 1.5,
            }}
          >
            Connection is a practice and it starts here.
          </Typography>

          <Typography
            sx={{
              fontFamily: '"Red Hat Display", sans-serif',
              fontWeight: 400,
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "18px",
              },
              color: "#444444",
              lineHeight: 1.5,
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Explore courses, tools, and guided practices that teach you
            how to speak your truth, listen deeply, and connect
            authentically — anytime, anywhere.
          </Typography>
        </Box>

        {/* CATEGORY TABS */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1.5,
            mb: { xs: 3, md: 4 },
            flexWrap: "wrap",
          }}
        >
          <Box
            component="button"
            type="button"
            sx={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#4A90E2",
              fontSize: "18px",
              fontWeight: 500,
              px: 1,
            }}
          >
            ‹
          </Box>

          {categories.map((cat) => (
            <Box
              key={cat}
              component="button"
              type="button"
              onClick={() => setActiveCategory(cat)}
              sx={{
                px: 3.5,
                py: 1.2,
                borderRadius: "12px",
                border:
                  activeCategory === cat
                    ? "none"
                    : "1px solid #E0E0E0",
                cursor: "pointer",
                fontFamily: '"Red Hat Display", sans-serif',
                fontWeight: 500,
                fontSize: "15px",
                lineHeight: "170%",
                letterSpacing: "0%",
                verticalAlign: "middle",
                transition: "all 0.3s ease",
                background:
                  activeCategory === cat
                    ? "linear-gradient(135deg, #64B5F6 0%, #1E88E5 100%)"
                    : "#FFFFFF",
                color:
                  activeCategory === cat ? "#FFFFFF" : "#444444",
                boxShadow:
                  activeCategory === cat
                    ? "0 4px 12px rgba(30,136,229,0.35)"
                    : "0 2px 6px rgba(0,0,0,0.04)",
                "&:hover": {
                  background:
                    activeCategory === cat
                      ? "linear-gradient(135deg, #42A5F5 0%, #1976D2 100%)"
                      : "#F5F9FF",
                },
              }}
            >
              {cat}
            </Box>
          ))}

          <Box
            component="button"
            type="button"
            sx={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#4A90E2",
              fontSize: "18px",
              fontWeight: 500,
              px: 1,
            }}
          >
            ›
          </Box>
        </Box>


        {/* LOADING */}
        {loading && (
          <Typography
            sx={{
              textAlign: "center",
              py: 3,
              color: "#4A90E2",
              fontFamily: '"Red Hat Display", sans-serif',
            }}
          >
            Loading courses...
          </Typography>
        )}

        {/* COURSE CARDS GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(3, minmax(0, 1fr))",
            },
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {!loading &&
            publishedCourses.map((course, index) => {
              const imageUrl = getCourseImageUrl(
                course?.thumbnailUrl || course?.image
              );

              const priceLabel = getCoursePriceLabel(course);
              const currencySymbol = getCurrencySymbol(course);
              const isExpanded = expandedCards[course._id] || false;

              return (
                <motion.div
                  key={course._id || course.courseSlug || index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  style={{
                    height: "100%",
                    display: "flex",
                  }}
                >
                  <Card
                    sx={{
                      p: 2,
                      borderRadius: "16px",
                      background:
                        "linear-gradient(100deg, #50B0F0 0%, #80B8F5 50%, #BFC3FA 100%)",

                      // Figma shadow
                      boxShadow: "0px 4px 7.3px 1px #0000001A",

                      // Backdrop blur
                      backdropFilter: "blur(135.8px)",
                      WebkitBackdropFilter: "blur(135.8px)",

                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      overflow: "hidden",
                      width: "100%",
                      height: "100%",

                      // Gradient border
                      border: "2px solid transparent",
                      backgroundImage:
                        "linear-gradient(100deg, #50B0F0 0%, #80B8F5 50%, #BFC3FA 100%), linear-gradient(100deg, #ffffff 0%, #50B0F0 50%, #BFC3FA 100%)",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",

                      transition: "transform 0.3s ease, box-shadow 0.3s ease",

                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0px 8px 16px 1px #00000026",
                      },
                    }}
                  >
                    {/* COURSE IMAGE */}
                    <Box
                      sx={{
                        height: "200px",
                        minHeight: "200px",
                        borderRadius: "12px",
                        overflow: "hidden",
                        mb: 2,
                        background: "#FFFFFF",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={imageUrl}
                        alt={course.course_title || "Course"}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "/placeholder.png";
                        }}
                      />
                    </Box>

                    {/* TITLE */}
                    <Typography
                      sx={{
                        fontFamily: '"Red Hat Display", sans-serif',
                        fontWeight: 700,
                        fontSize: {
                          xs: "16px",
                          md: "18px",
                        },
                        color: "#FFFFFF",
                        mb: 1,
                        minHeight: "48px",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {course.course_title}
                    </Typography>

                    {/* DESCRIPTION */}
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        onClick={() =>
                          toggleDescription(course._id)
                        }
                        sx={{
                          fontFamily:
                            '"Red Hat Display", sans-serif',
                          fontWeight: 400,
                          fontSize: {
                            xs: "12px",
                            md: "13px",
                          },
                          lineHeight: 1.6,
                          color: "rgba(255,255,255,0.9)",
                          cursor: "pointer",
                          display: "-webkit-box",
                          WebkitLineClamp: isExpanded ? "unset" : 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          "&:hover": {
                            color: "#FFFFFF",
                          },
                        }}
                        dangerouslySetInnerHTML={{
                          __html: course.shortDescription || "",
                        }}
                      />

                      {course.shortDescription &&
                        course.shortDescription.length > 100 && (
                          <Typography
                            onClick={() =>
                              toggleDescription(course._id)
                            }
                            sx={{
                              fontFamily:
                                '"Red Hat Display", sans-serif',
                              fontWeight: 600,
                              fontSize: {
                                xs: "11px",
                                md: "12px",
                              },
                              color: "#FFFFFF",
                              cursor: "pointer",
                              mt: 0.5,
                              textDecoration: "underline",
                              "&:hover": {
                                opacity: 0.8,
                              },
                            }}
                          >
                            {isExpanded ? "Show Less" : "... Read More"}
                          </Typography>
                        )}
                    </Box>

                    {/* DATE & TIME */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          fontSize: "18px",
                          color: "#FFFFFF",
                        }}
                      >
                        🕐
                      </Box>

                      <Typography
                        sx={{
                          fontFamily:
                            '"Red Hat Display", sans-serif',
                          fontWeight: 500,
                          fontSize: {
                            xs: "12px",
                            md: "13px",
                          },
                          color: "#FFFFFF",
                        }}
                      >
                        {formatCourseStartDate(course.startDate) || "Date to be announced"}
                      </Typography>
                    </Box>

                    {/* MODE */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 2,
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          fontSize: "18px",
                          color: "#FFFFFF",
                        }}
                      >
                        📍
                      </Box>

                      <Typography
                        sx={{
                          fontFamily:
                            '"Red Hat Display", sans-serif',
                          fontWeight: 500,
                          fontSize: {
                            xs: "12px",
                            md: "13px",
                          },
                          color: "#FFFFFF",
                        }}
                      >
                        Mode: {getCourseDeliveryLabel(course)}
                      </Typography>
                    </Box>

                    {/* PRICE */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 2,
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          fontSize: "18px",
                          color: "#FFFFFF",
                        }}
                      >
                        💲
                      </Box>
                      <Typography
                        sx={{
                          fontFamily:
                            '"Red Hat Display", sans-serif',
                          fontWeight: 500,
                          fontSize: {
                            xs: "12px",
                            md: "13px",
                          },
                          color: "#FFFFFF",
                        }}
                      >
                        {priceLabel}
                      </Typography>

                      {course.originalPrice && (
                        <Typography
                          sx={{
                            fontFamily:
                              '"Red Hat Display", sans-serif',
                            fontWeight: 500,
                            fontSize: {
                              xs: "12px",
                              md: "13px",
                            },
                            color: "rgba(255,255,255,0.7)",
                            textDecoration: "line-through",
                          }}
                        >
                          {currencySymbol} {course.originalPrice}
                        </Typography>
                      )}
                    </Box>

                    {/* BUTTONS */}
                    <Box
                      sx={{
                        display: "flex",
                        gap: "12px",
                        mt: "auto",
                        width: "100%",
                      }}
                    >
                      {/* READ MORE BUTTON */}
                      <EventButton
                        sx={{
                          ...commonButtonStyles,
                          background: readMoreBackground,
                          "&:hover": {
                            background: readMoreHover,
                            transform: "translateY(-1px)",
                            boxShadow:
                              "0px 4px 10px rgba(0,0,0,0.15)",
                          },
                        }}
                        onClick={() => {
                          window.location.href = `/onlinecourse/${course.courseSlug}`;
                        }}
                      >
                        Read More
                      </EventButton>

                      {/* BOOK NOW BUTTON */}
                      <EventButton
                        sx={{
                          ...commonButtonStyles,
                          fontWeight: 600,
                          background: buyNowBackground,
                          "&:hover": {
                            background: buyNowHover,
                            transform: "translateY(-1px)",
                            boxShadow:
                              "0px 4px 10px rgba(0,0,0,0.15)",
                          },
                        }}
                        onClick={() => handleBookNow(course.courseSlug)}
                      >
                        Book Now
                      </EventButton>
                    </Box>
                  </Card>
                </motion.div>
              );
            })}
        </Box>

        {/* EMPTY STATE */}
        {!loading && publishedCourses.length === 0 && (
          <Typography
            sx={{
              textAlign: "center",
              py: 5,
              color: "#666666",
              fontFamily: '"Red Hat Display", sans-serif',
            }}
          >
            No courses available at the moment.
          </Typography>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              flexWrap: "wrap",
              mt: 5,
            }}
          >
            <EventButton
              disabled={page === 0 || loading}
              onClick={() =>
                setPage((prev) => Math.max(prev - 1, 0))
              }
              sx={{
                px: 2.5,
                py: 1,
                borderRadius: "8px",
                background: "#80B8F5",
                color: "#FFFFFF",
                "&:hover": {
                  background: "#1685E5",
                },
                "&.Mui-disabled": {
                  opacity: 0.5,
                },
              }}
            >
              ← Prev
            </EventButton>

            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
            >
              {Array.from(
                { length: totalPages },
                (_, index) => index
              ).map((i) => (
                <Box
                  key={i}
                  component="button"
                  type="button"
                  onClick={() => setPage(i)}
                  disabled={loading}
                  sx={{
                    minWidth: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    border: "1px solid #D5E5F7",
                    cursor: "pointer",
                    fontFamily:
                      '"Red Hat Display", sans-serif',
                    fontWeight: 600,
                    background:
                      page === i
                        ? "linear-gradient(135deg, #64B5F6 0%, #1E88E5 100%)"
                        : "#FFFFFF",
                    color:
                      page === i ? "#FFFFFF" : "#444444",
                    "&:hover": {
                      background:
                        page === i ? "#1976D2" : "#F5F9FF",
                    },
                  }}
                >
                  {i + 1}
                </Box>
              ))}
            </Box>

            <EventButton
              disabled={page >= totalPages - 1 || loading}
              onClick={() =>
                setPage((prev) =>
                  Math.min(prev + 1, totalPages - 1)
                )
              }
              sx={{
                px: 2.5,
                py: 1,
                borderRadius: "8px",
                background: "#80B8F5",
                color: "#FFFFFF",
                "&:hover": {
                  background: "#1685E5",
                },
                "&.Mui-disabled": {
                  opacity: 0.5,
                },
              }}
            >
              Next →
            </EventButton>
          </Box>
        )}
      </SiteContainer>
      <CourseLoginDialog
        open={loginDialogOpen}
        onClose={() => setLoginDialogOpen(false)}
        returnTo={paymentReturnTo}
      />
    </Section>
  );
}
