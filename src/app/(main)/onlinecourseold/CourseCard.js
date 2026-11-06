"use client";

import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import axiosInstance from "@/lib/axios";

// Common components
import Section from "../../_components/common/Section";
import Container from "../../_components/common/Container";
import Card from "../../_components/common/Card";
import EventButton from "../../_components/buttons/EventButton";

// Theme
import theme from "../../../theme/theme";

export default function CourseCard() {
  const [courseData, setCourseData] = useState([]);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});
  const [activeCategory, setActiveCategory] = useState("All");

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

    if (course.course_paymenttype === "free") {
      return "Free";
    }

    if (course.course_paymenttype === "onetimepayment") {
      return `${currencySymbol}${course.amountOneTime ?? 0}`;
    }

    if (course.course_paymenttype === "recurring") {
      const installment = course.installment;
      const suffix = installment ? ` × ${installment}` : "";

      if (course.amountInMonth) {
        return `${currencySymbol}${course.amountInMonth}/month${suffix}`;
      }

      if (course.amountInWeek) {
        return `${currencySymbol}${course.amountInWeek}/week${suffix}`;
      }

      if (course.amountInByWeekly) {
        return `${currencySymbol}${course.amountInByWeekly}/bi-week${suffix}`;
      }
    }

    return "";
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
        py: { xs: 2, md: 3 },
        pt: { xs: 0, md: 1 },
      }}
    >
      <Container>

        {/* HEADER */}
        <Box
          sx={{
            textAlign: "center",
            mt: { xs: 2, md: 3 },
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
              color: "#FF8A7A",
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
              fontWeight: 700,
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
                fontWeight: 600,
                fontSize: {
                  xs: "12px",
                  md: "13px",
                },
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
              fontWeight: 700,
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
              const imageUrl = course.image?.[0]
                ? `${process.env.NEXT_PUBLIC_API_URL}/${course.image[0]}`
                : "/placeholder.png";

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
                      boxShadow:
                        "0 8px 24px rgba(100,181,246,0.3)",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      overflow: "hidden",
                      width: "100%",
                      height: "100%",
                      transition:
                        "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow:
                          "0 16px 40px rgba(100,181,246,0.4)",
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
                        {course.date ||
                          "21st Mar, 2025 @ 10:00am - 02:00pm"}
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
                        Mode: {course.mode_of_course || "Online"}
                      </Typography>
                    </Box>

                    {/* PRICE */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 1,
                        mb: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily:
                            '"Red Hat Display", sans-serif',
                          fontWeight: 700,
                          fontSize: {
                            xs: "16px",
                            md: "18px",
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
                            fontWeight: 400,
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
                        onClick={() => {
                          window.location.href = `/onlinecourse/payment/${course.courseSlug}`;
                        }}
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
      </Container>
    </Section>
  );
}