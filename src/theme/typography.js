// src/theme/typography.js

const typography = {
  // =========================================================
  // DEFAULT FONTS
  // =========================================================
  fonts: {
    heading: '"Red Hat Display", sans-serif',
    body: '"Red Hat Display", sans-serif',
  },

  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // =========================================================
  // GLOBAL
  // =========================================================
  global: {
    h1: { fontFamily: '"Red Hat Display", sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Red Hat Display", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Red Hat Display", sans-serif', fontWeight: 700 },
    h4: { fontFamily: '"Red Hat Display", sans-serif', fontWeight: 700 },
    h5: { fontFamily: '"Red Hat Display", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Red Hat Display", sans-serif', fontWeight: 600 },
    body: { fontFamily: '"Red Hat Display", sans-serif', fontWeight: 400 },
  },

  // =========================================================
  // HERO
  // =========================================================
  hero: {
    title: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: { xs: "20px", sm: "28px", md: "36px", lg: "44px", xl: "50px" },
      lineHeight: "100%",
      letterSpacing: 0,
      color: "#ffffff",
      textAlign: "left",
      maxWidth: { xs: "280px", sm: "400px", md: "520px", lg: "650px", xl: "750px" },
      textShadow: "0 4px 12px rgba(0,0,0,0.25)",
    },
    subtitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: { xs: "16px", sm: "22px", md: "28px", lg: "34px", xl: "39px" },
      lineHeight: "100%",
      letterSpacing: 0,
      color: "rgba(255,255,255,0.92)",
      textAlign: "left",
      maxWidth: { xs: "300px", sm: "450px", md: "600px", lg: "760px", xl: "900px" },
      textShadow: "0 3px 10px rgba(0,0,0,0.22)",
    },
    author: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontStyle: "italic",
      fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px", xl: "20px" },
      lineHeight: "120%",
      letterSpacing: 0,
      color: "rgba(255,255,255,0.92)",
      textAlign: "right",
      marginTop: { xs: "8px", sm: "12px", md: "16px" },
      textShadow: "0 3px 10px rgba(0,0,0,0.22)",
    },
    content: {
      paddingTop: { xs: "120px", sm: "140px", md: "80px", lg: "100px", xl: "110px" },
      paddingLeft: { xs: "16px", sm: "24px", md: "32px", lg: "40px", xl: "48px" },
      maxWidth: { xs: "100%", sm: "600px", md: "800px", lg: "1000px", xl: "1100px" },
    },
  },

  // =====================================================
  // REAL RESULTS
  // =====================================================
  realResults: {
    impactTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 26, md: 36, lg: 44 },
      lineHeight: "100%",
      letterSpacing: "0%",
    },
    impactBody: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 16, sm: 18, md: 18, lg: 20 },
      lineHeight: "28.8px",
      letterSpacing: "0%",
    },
    bulletText: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 16, sm: 18, md: 18, lg: 20 },
      lineHeight: "inherit",
    },
    bulletList: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "28.8px",
      letterSpacing: "0%",
    },
    reimaginedTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 32, sm: 36, md: 36, lg: 44 },
      lineHeight: { xs: "110%", md: "105%" },
      letterSpacing: "0%",
    },
    reimaginedBody: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 16, sm: 18, md: 18, lg: 20 },
      lineHeight: { xs: "32px", sm: "28.8px" },
      letterSpacing: "0%",
    },
    ctaTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 24, md: 34, lg: 44 },
      lineHeight: "100%",
      letterSpacing: "0%",
    },
    ctaBody: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 300,
      fontSize: { xs: 16, sm: 18, md: 18, lg: 20 },
      lineHeight: "28.8px",
      letterSpacing: "0%",
    },
    ctaButton: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 600,
      fontSize: { xs: 20, md: 26 },
      lineHeight: "100%",
      textTransform: "none",
    },
  },

  // =========================================================
  // AUTHENTIC RELATING
  // =========================================================
  authenticRelating: {
    mainTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: { xs: "28px", sm: "30px", md: "32px", lg: "50px", xl: "70px" },
      lineHeight: "100%",
      letterSpacing: 0,
      textAlign: "center",
    },
    mainTitleSpan: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: { xs: "26px", sm: "28px", md: "30px", lg: "50px", xl: "70px" },
      lineHeight: "150%",
      letterSpacing: 0,
    },
    subtitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: { xs: "18px", sm: "19px", md: "20px", lg: "22px", xl: "34px" },
      lineHeight: "120%",
      letterSpacing: 0,
    },
    personName: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "19px", sm: "16px", md: "16px", lg: "17px", xl: "18px" },
      lineHeight: "120%",
    },
    personRole: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "15px", sm: "12px", md: "12px", lg: "13px", xl: "14px" },
      lineHeight: "120%",
    },
    mobileTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "36px" },
      lineHeight: "110%",
    },
    mobileTitleSpan: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "36px" },
      lineHeight: "110%",
    },
    mobileSubtitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "24px" },
      lineHeight: "110%",
    },
    body: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontStyle: "italic",
      fontSize: { xs: "14px", sm: "14px", md: "14px", lg: "19.4px", xl: "19.4px" },
      lineHeight: { xs: "20px", sm: "21px", md: "24px", lg: "29.86px", xl: "29.86px" },
      letterSpacing: 0,
    },
    finalText: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontStyle: "italic",
      fontSize: { xs: "14px", sm: "14px", md: "14px", lg: "15px", xl: "16.59px" },
      lineHeight: { xs: "20px", sm: "21px", md: "21px", lg: "29.86px", xl: "29.86px" },
      letterSpacing: 0,
    },
  },

  // =========================================================
  // TEN PRINCIPLES
  // =========================================================
  tenPrinciples: {
    introducing: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: { xs: "26px", sm: "30px", md: "36px", lg: "46px", xl: "56px" },
      lineHeight: "100%",
      letterSpacing: 0,
      textAlign: "center",
    },
    title: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: { xs: "26px", sm: "30px", md: "36px", lg: "46px", xl: "56px" },
      lineHeight: "100%",
      letterSpacing: 0,
      textAlign: "center",
    },
    titleRegular: { fontWeight: 400 },
    author: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: { xs: "26px", sm: "30px", md: "36px", lg: "46px", xl: "56px" },
      lineHeight: "100%",
      letterSpacing: 0,
      textAlign: "center",
    },
    description: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 500,
      fontStyle: "normal",
      fontSize: { xs: "12px", sm: "13px", md: "15px", lg: "20px", xl: "20px" },
      lineHeight: { xs: "18px", sm: "20px", md: "22px", lg: "28px", xl: "28px" },
      letterSpacing: 0,
      textAlign: "center",
    },
    cardTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: { xs: "14px", sm: "12px", md: "14px", lg: "18px", xl: "18px" },
      lineHeight: "120%",
      letterSpacing: 0,
      textAlign: "left",
    },
  },

  // =====================================================
  // FEATURES
  // =====================================================
  featuresSection: {
    title: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "20px", sm: "26px", md: "32px", lg: "38px", xl: "42px" },
      lineHeight: { xs: 1.2, sm: 1.15, md: 1.1, lg: 1.2 },
      color: "#ffffff",
    },
    description: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "13px", sm: "15px", md: "17px", lg: "19px" },
      lineHeight: { xs: 1.6, sm: 1.5, md: "130%" },
      color: "rgba(255,255,255,0.85)",
    },
    cardTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 600,
      fontSize: { xs: "11px", sm: "13px", md: "15px", lg: "17px", xl: "18px" },
      lineHeight: { xs: 1.2, sm: 1.15, md: "100%" },
      color: "#ffffff",
    },
    cardDescription: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 300,
      fontSize: { xs: "9px", sm: "11px", md: "12px", lg: "13px", xl: "14px" },
      lineHeight: { xs: 1.35, sm: 1.3, md: 1.2 },
      color: "rgba(255,255,255,0.85)",
    },
  },

  // =====================================================
  // MISSING VISION PAGE
  // =====================================================
  missingVisionpage: {
    vision: {
      title: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 700,
        fontSize: { xs: 26, sm: 32, md: 38, lg: 44 },
        lineHeight: "100%",
        letterSpacing: "0%",
      },
      body: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 400,
        fontSize: { xs: 14, sm: 15, md: 16, lg: 18, xl: 20 },
        lineHeight: { xs: "22px", sm: "26px", md: "28.8px" },
        letterSpacing: "0%",
      },
      bodyBold: { fontWeight: 700 },
    },
    mission: {
      title: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 700,
        fontSize: { xs: 22, sm: 26, md: 32, lg: 36, xl: 40 },
        lineHeight: "100%",
        letterSpacing: "0%",
      },
      body: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 400,
        fontSize: { xs: 14, sm: 15, md: 16, lg: 17, xl: 18 },
        lineHeight: { xs: "22px", sm: "26px", md: "28.8px", lg: "30px", xl: "32px" },
        letterSpacing: "0%",
      },
      bodyBold: { fontWeight: 700 },
      listItem: {
        fontWeight: 400,
        fontSize: { xs: 14, sm: 15, md: 16, lg: 17, xl: 18 },
        lineHeight: { xs: "22px", sm: "26px", md: "28.8px", lg: "30px", xl: "32px" },
      },
      listItemBold: { fontWeight: 700 },
      finalLine: {
        fontWeight: 700,
        fontSize: { xs: 14, sm: 15, md: 16, lg: 17, xl: 18 },
        lineHeight: { xs: "22px", sm: "26px", md: "28.8px", lg: "30px", xl: "32px" },
      },
    },
  },

  // =====================================================
  // CORE VALUES
  // =====================================================
  coreValues: {
    sectionTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "22px", sm: "26px", md: "32px", lg: "38px", xl: "42px" },
      lineHeight: { xs: 1.3, sm: 1.2, md: 1.15 },
      letterSpacing: 0,
      textAlign: "center",
    },
    sectionSubtitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "13px", sm: "14px", md: "15px", lg: "16px" },
      lineHeight: { xs: 1.6, md: 1.7 },
      letterSpacing: 0,
      textAlign: "center",
    },
    cardTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "15.5px", sm: "20px", md: "21px", lg: "24px" },
      lineHeight: 1.2,
      letterSpacing: 0,
    },
    cardDescription: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "12px", sm: "12.5px", md: "13.5px", lg: "15px" },
      lineHeight: 1.5,
      letterSpacing: 0,
    },
  },

  // =====================================================
  // RELATING CIRCLES
  // =====================================================
  relatingCircles: {
    title: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "22px", sm: "26px", md: "34px", lg: "40px", xl: "44px" },
      lineHeight: { xs: "30px", md: "44px" },
      letterSpacing: 0,
      textAlign: { xs: "center", md: "left" },
    },
    description: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "13px", sm: "14px", md: "15px", lg: "16px" },
      lineHeight: 1.7,
      letterSpacing: 0,
      textAlign: { xs: "center", md: "left" },
    },
  },

  // =====================================================
  // ANCIENT ORIGINS
  // =====================================================
  ancientOrigins: {
    headerTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 600,
      fontSize: { xs: 12, sm: 24, md: 40 },
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center",
    },
    cardTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 600,
      fontSize: { xs: "22px", sm: "26px", md: "32px", lg: "38px", xl: "44px" },
      lineHeight: { xs: 1.2, sm: 1.15, md: 1.1 },
      letterSpacing: "0%",
    },
    circleTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "12px", sm: "8px", md: "10px", lg: "17px", xl: "18px" },
      lineHeight: { xs: "20px" },
      letterSpacing: "0%",
    },
    circleDescription: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 500,
      fontSize: { xs: "10px", sm: "7px", md: "10px", lg: "14px", xl: "16px" },
      lineHeight: { xs: 1.2, sm: 1.2, md: 1.1, lg: 1.3 },
      letterSpacing: "0%",
    },
    xsCircleTitle: {
  fontFamily: '"Red Hat Display", sans-serif',
  fontWeight: 500,
  // 8px → 12px smoothly between 320px and 599px viewports
  fontSize: 'clamp(8px, 2.2vw + 2px, 12px)',
  lineHeight: 1.25,
},
xsCircleDescription: {
  fontFamily: '"Red Hat Display", sans-serif',
  fontWeight: 400,
  fontSize: 'clamp(6.5px, 1.8vw + 1.5px, 10px)',
  lineHeight: 1.25,
},
  },

  // =====================================================
  // WHY IT MATTERS
  // =====================================================
  whyItMatters: {
    title: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 28, sm: 34, md: 40, lg: 44 },
      lineHeight: "100%",
      letterSpacing: "0%",
    },
    description: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 14, sm: 15, md: 16 },
      lineHeight: "28.8px",
      letterSpacing: "0%",
      textAlign: "center",
    },
  },

  // =====================================================
  // PLAYGROUND
  // =====================================================
  playground: {
    title: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "22px", sm: "22px", md: "30px", lg: "38px", xl: "44px" },
      letterSpacing: "0%",
      textAlign: "center",
    },
    description: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 500,
      fontSize: { xs: "14px", sm: "15px", md: "12px", lg: "13px" ,xl: "16px" },
      letterSpacing: "0%",
      textAlign: "center",
    },
  },

  // =====================================================
  // JOY LAB HIGHLIGHTS
  // =====================================================
  joyLabHighlights: {
    title: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "22px", sm: "28px", md: "34px" },
      letterSpacing: "0%",
      textAlign: "center",
    },
    cardText: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "13px", sm: "14px", md: "15px", lg: "16px", xl: "18px" },
      letterSpacing: "0%",
    },
  },

  // =====================================================
  // AUTHENTIC RELATING SECTION
  // =====================================================
  authenticRelatingSection: {
    title: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 28, sm: 34, md: 40, lg: 44 },
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center",
    },
    subtitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 14, sm: 13, md: 16 },
      lineHeight: "28.8px",
      letterSpacing: "0%",
      verticalalignment:"middle",
      textAlign: "center",
    },
    headingRight: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 24, sm: 28, md: 34, lg: 36 },
      lineHeight: "100%",
      letterSpacing: "0%",
    },
    paragraph: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 14, sm: 15, md: 18 },
      lineHeight: "28.8px",
      letterSpacing: "0%",
    },
  },

  // =====================================================
  // WAYS WE WORK
  // =====================================================
  waysWeWork: {
    title: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 28, sm: 34, md: 40, lg: 44 },
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center",
      color: "#1d1d1d",
      mb: 1,
    },
    subtitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 14, sm: 15, md: 16 },
      lineHeight: "28.8px",
      letterSpacing: "0%",
      textAlign: "center",
      color: "#555",
      mb: { xs: 4, md: 6, lg: 8 },
      mx: "auto",
    },
    cardTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 16, sm: 12, md: 16, lg: 18, xl: 20 },
      lineHeight: 1.3,
      letterSpacing: "0%",
      textAlign: "center",
      color: "#ffffff",
      mb: { xs: 1, sm: 0.5, md: 1 },
      px: { xs: 1, sm: 0.5 },
    },
    cardDescription: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 300,
      fontSize: { xs: 13, sm: 10, md: 13, lg: 16 },
      lineHeight: { xs: 1.5, sm: 1.3 },
      letterSpacing: "0%",
      textAlign: "center",
      color: "#ffffff",
      px: { xs: 1.5, sm: 0.5 },
      maxWidth: { xs: "280px" },
    },
  },

  // =====================================================
  // ABOUT GUIDE
  // =====================================================
  aboutGuide: {
    profileTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 20, md: 24, lg: 34 },
      lineHeight: "28.8px",
      letterSpacing: "0%",
    },
    profileSubtitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 15, md: 20, lg: 22 },
      lineHeight: "28.8px",
      letterSpacing: "0%",
    },
    profileName: { fontWeight: 700 },
    profileRole: { fontWeight: 400 },
    body: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 10, md: 13, lg: 16 },
      lineHeight: "28.8px",
      letterSpacing: "0%",
      color: "#555",
    },
    bodyBold: {
      fontWeight: 700,
      color: "#000",
      textDecoration: "underline",
      cursor: "pointer",
    },
    ctaTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 26, md: 36, lg: 44 },
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: { xs: "center", sm: "left" },
    },
    ctaSubtitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 18, md: 20, lg: 22 },
      lineHeight: "28.8px",
      letterSpacing: "0%",
      textAlign: { xs: "center", sm: "left" },
    },
    ctaBoxTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 26, md: 36 },
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center",
    },
    ctaButton: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 600,
      fontSize: { xs: 14, md: 20 },
      lineHeight: "100%",
      textTransform: "none",
    },
  },

  // =====================================================
  // AUTHENTIC RELATING HEADER
  // =====================================================
  authenticRelatingHeader: {
    heading: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 26, md: 36, lg: 44 },
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center",
    },
    subheading: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "28.8px",
      letterSpacing: "0%",
      textAlign: "center",
    },
    services: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 18, md: 22, lg: 28 },
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center",
    },
    textColumnTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 22, sm: 18, md: 32, lg: 44 },
      lineHeight: { xs: "120%", sm: "110%", md: "110%" },
      letterSpacing: "0%",
    },
    textColumnBody: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 15, sm: 12, md: 16, lg: 16 },
      lineHeight: { xs: "22px", sm: "18px", md: "28.8px" },
      letterSpacing: "0%",
    },
  },

  // =====================================================
  // OUR APPROACH
  // =====================================================
  ourApproach: {
    heroTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 24, md: 32 },
      lineHeight: "120%",
      letterSpacing: "0%",
      textAlign: "center",
      color: "#ffffff",
    },
    heroBody: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 13, md: 14 },
      lineHeight: "180%",
      letterSpacing: "0%",
      textAlign: "center",
      color: "rgba(255,255,255,0.9)",
    },
    howWeWorkTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 26, md: 36, lg: 44 },
      lineHeight: "100%",
      letterSpacing: "0%",
      color: "#ffffff",
      textAlign: "left",
    },
    howWeWorkCardTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 16, sm: 18, md: 20, lg: 24, xl: 28 },
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center",
    },
    howWeWorkCardBody: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 11, sm: 12, md: 13, lg: 15, xl: 16 },
      lineHeight: { xs: "14px", sm: "16px", md: "18px", lg: "26px", xl: "28.8px" },
      letterSpacing: "0%",
      textAlign: "center",
    },
    coreTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 26, sm: 32, md: 38, lg: 44 },
      lineHeight: "100%",
      letterSpacing: "0%",
    },
    coreTitleMobile: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 20, md: 26 },
      lineHeight: "120%",
      letterSpacing: "0%",
      textAlign: "center",
    },
    coreBody: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 14, sm: 15, md: 18 },
      lineHeight: "28.8px",
      letterSpacing: "0%",
    },
    coreBodyMobile: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 12, md: 14 },
      lineHeight: "160%",
      letterSpacing: "0%",
      textAlign: "center",
    },
    pointTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 16, sm: 18 },
      lineHeight: "100%",
      letterSpacing: "0%",
    },
    pointBody: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 14, sm: 15 },
      lineHeight: "23.8px",
      letterSpacing: "0%",
    },
  },

  // =====================================================
  // WHY AUTHENTIC RELATING
  // =====================================================
  whyAuthenticRelating: {
    heading: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 20, md: 36, lg: 44 },
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center",
    },
    subheading: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 13, sm: 14, md: 16 },
      lineHeight: "28.8px",
      letterSpacing: "0%",
      textAlign: "center",
    },
    cardTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 14, sm: 14, md: 22 },
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center",
    },
    cardDescription: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 11, sm: 12, md: 14, lg: 16 },
      lineHeight: "16px",
      letterSpacing: "0%",
      textAlign: "center",
    },
    splitTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 22, sm: 28, md: 30, lg: 44 },
      lineHeight: "100%",
      letterSpacing: "0%",
    },
    splitBody: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 13, sm: 12, md: 12, lg: 16 },
      lineHeight: "26.8px",
      letterSpacing: "0%",
    },
    bulletText: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 13, sm: 13, md: 13, lg: 16 },
      lineHeight: "25.8px",
      letterSpacing: "0%",
    },
  },

podcastSection: {
  title: {
    fontFamily: '"Red Hat Display", sans-serif',
    fontWeight: 600,
    fontSize: { xs: "28px", sm: "32px", md: "34px", lg: "40px", xl: "44px" },
    lineHeight: 1.1,
    letterSpacing: "0%",
  },
  description: {
    fontFamily: '"Red Hat Display", sans-serif',
    fontWeight: 400,
    fontSize: { xs: "14px", sm: "14px", md: "12px", lg: "14px", xl: "16px" },
    lineHeight: { xs: 1.7, md: 1.75 },
    letterSpacing: "0%",
  },
  topTitle: {
    fontFamily: '"Red Hat Display", sans-serif',
    fontWeight: 600,
    fontSize: { xs: "16px", md: "14px", lg: "16px", xl: "18px" },
    lineHeight: 1.2,
  },
  episodeTitle: {
    fontFamily: '"Red Hat Display", sans-serif',
    fontWeight: 600,
    fontSize: { xs: "11px", sm: "13px", md: "11px", lg: "13px", xl: "14px" },
    lineHeight: 1.3,
  },
  episodeMeta: {
    fontFamily: '"Red Hat Display", sans-serif',
    fontWeight: 400,
    fontSize: { xs: "10px", sm: "11px", md: "9px", lg: "11px", xl: "12px" },
    lineHeight: 1.2,
  },
  playButton: {
    fontFamily: '"Red Hat Display", sans-serif',
    fontWeight: 500,
    fontSize: { xs: "9px", sm: "11px", md: "9px", lg: "11px", xl: "12px" },
    lineHeight: 1,
    textTransform: "none",
  },
},
  // =====================================================
  // JOY LAB
  // =====================================================
  joyLab: {
    headingTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "22px", sm: "28px", md: "34px", lg: "40px", xl: "44px" },
      lineHeight: { xs: 1.2, sm: 1.15, md: 1.1, lg: "100%" },
      letterSpacing: "0%",
      textAlign: "center",
    },
    headingSubtitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "14px", sm: "15px", md: "18px", lg: "20px" },
      lineHeight: { xs: 1.6, sm: 1.7, md: "28.8px" },
      letterSpacing: "0%",
      textAlign: "center",
    },
    cardTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "22px", sm: "28px", md: "34px", lg: "40px", xl: "44px" },
      lineHeight: { xs: 1.2, sm: 1.15, md: 1.1, lg: "100%" },
      letterSpacing: "0%",
      textAlign: "left",
    },
    cardTitleCompact: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "22px", sm: "28px", md: "30px" },
      lineHeight: { xs: 1.2, sm: 1.15, md: 1.1 },
      letterSpacing: "0%",
      textAlign: "left",
    },
    paragraph: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 300,
      fontSize: { xs: 13, sm: 14, md: 16, lg: 15 },
      lineHeight: "28.8px",
      letterSpacing: "0%",
    },
    bullet: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 300,
      fontSize: { xs: 13, sm: 14, md: 16, lg: 15 },
      lineHeight: "28.8px",
      letterSpacing: "0%",
    },
  },

  // =====================================================
  // GIFTS
  // =====================================================
  gifts: {
    title: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "28px", sm: "36px", md: "48px", lg: "48px", xl: "48px" },
      lineHeight: "100%",
      letterSpacing: 0,
      textAlign: "left",
    },
    description: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 500,
      fontSize: { xs: "16px", sm: "16px", md: "16px", lg: "16px", xl: "16px" },
      lineHeight: "170%",
      letterSpacing: 0,
      textAlign: "left",
    },
    categoryTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "20px", sm: "24px", md: "28px", lg: "28px", xl: "28px" },
      lineHeight: "100%",
    },
    cardTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "16px", sm: "18px", md: "20.43px", lg: "20.43px", xl: "20.43px" },
      lineHeight: "100%",
      letterSpacing: 0,
    },
    cardDescription: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "13px", sm: "14px", md: "14.86px", lg: "14.86px", xl: "14.86px" },
      lineHeight: { xs: "20px", sm: "24px", md: "26.74px", lg: "26.74px", xl: "26.74px" },
      letterSpacing: 0,
    },
    button: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 500,
      fontSize: { xs: "13px", sm: "13px", md: "13px", lg: "13px", xl: "13px" },
      lineHeight: 1,
    },
    modalTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 600,
      fontSize: { xs: "14px", sm: "15px", md: "16px" },
    },
    audioTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 600,
      fontSize: "18px",
    },
    audioDescription: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: "13px",
    },
  },

  // =====================================================
  // CLIENT TESTIMONIAL
  // =====================================================
  clientTestimonial: {
    title: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "28px", sm: "36px", md: "48px" },
      lineHeight: "100%",
      letterSpacing: 0,
    },
    text: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "14px", sm: "15px", md: "16px" },
      lineHeight: { xs: "22px", md: "26px" },
      letterSpacing: 0,
    },
    userName: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "100%",
    },
    userRole: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: "13px",
      lineHeight: "100%",
      opacity: 0.85,
    },
  },

  // =====================================================
  // COURSE CARD
  // =====================================================
  courseCard: {
    title: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "21px", xl: "22px" },
      lineHeight: "130%",
      letterSpacing: 0,
    },
    description: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 500,
      fontSize: { xs: "13px", sm: "14px", md: "14px", lg: "15px", xl: "15px" },
      lineHeight: "180%",
      letterSpacing: 0,
    },
    infoText: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "13px", sm: "14px", md: "15px", lg: "16px", xl: "16px" },
      lineHeight: "28.8px",
      letterSpacing: 0,
    },
    price: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "21px", xl: "22px" },
      lineHeight: "100%",
      letterSpacing: 0,
    },
    button: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 500,
      fontSize: { xs: "11px", sm: "12px", md: "13px", lg: "14px", xl: "15px" },
      lineHeight: 1,
      letterSpacing: 0,
    },
    pagination: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: 1,
      letterSpacing: 0,
    },
  },

  // =====================================================
  // DISCOUNT BANNER
  // =====================================================
  discountBanner: {
    subtitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 500,
      fontSize: { xs: "16px", sm: "18px", md: "24px", lg: "26px", xl: "28px" },
      lineHeight: "130%",
      letterSpacing: 0,
    },
    title: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "34px", sm: "36px", md: "56px", lg: "68px", xl: "70px" },
      lineHeight: { xs: 1.2, sm: 1.15, md: 1.1, lg: 1.05 },
      letterSpacing: 0,
    },
    description: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 300,
      fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "16px", xl: "16px" },
      lineHeight: { xs: 1.6, sm: 1.7, md: "22.8px" },
      letterSpacing: 0,
    },
    button: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 600,
      fontSize: { xs: "13px", sm: "14px", md: "15px", lg: "15px", xl: "15px" },
      lineHeight: 1,
      letterSpacing: 0,
    },
  },

  // =====================================================
  // CONNECTION
  // =====================================================
  connection: {
    headerTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "22px", sm: "26px", md: "36px", lg: "44px" },
      lineHeight: { xs: 1.3, sm: 1.25, md: 1.2, lg: 1.1 },
      letterSpacing: "0%",
      textAlign: "center",
    },
    headerDescription: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "13px", sm: "14px", md: "16px", lg: "18px" },
      lineHeight: { xs: 1.6, sm: 1.6, md: 1.7 },
      letterSpacing: "0%",
      textAlign: "center",
    },
    viewModeButton: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 500,
      fontSize: "14px",
      textTransform: "none",
    },
    listCard: {
      title: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 700,
        fontSize: { xs: "18px", sm: "24px", md: "28px", lg: "32px" },
        lineHeight: 1.2,
      },
      subtitle: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 400,
        fontSize: { xs: "13px", sm: "14px", md: "15px", lg: "16px" },
        lineHeight: "1.8",
      },
      description: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 300,
        fontSize: { xs: "10px", sm: "14px", md: "16px", lg: "18px" },
        lineHeight: { sm: 1.3, md: 1.9 },
      },
    },
    mobileCard: {
      title: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 700,
        fontSize: "18px",
        textAlign: "center",
      },
      subtitle: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 400,
        fontSize: "13px",
        textAlign: "center",
      },
      description: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: 1.6,
        textAlign: "center",
      },
    },
    gridCard: {
      title: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 700,
        fontSize: { xs: "15px", sm: "16px", md: "16px", lg: "18px" },
        lineHeight: 1.3,
      },
      description: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 400,
        fontSize: { xs: "11px", sm: "12px", md: "13px", lg: "14px" },
        lineHeight: 1.6,
        opacity: 0.9,
      },
    },
    readMoreButton: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 600,
      textTransform: "none",
    },
    eventsButton: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 600,
      textTransform: "none",
    },
    pagination: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 500,
      fontSize: 14,
    },
    loadingText: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: "14px",
    },
  },

  // =====================================================
  // REAL CONNECTION
  // =====================================================
  realConnection: {
    heading: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "22px", sm: "20px", md: "34px", lg: "40px", xl: "42px" },
      lineHeight: { xs: 1.2, sm: 1.15, md: 1.1, lg: 1.2 },
      letterSpacing: "0%",
    },
    description: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "9px", sm: "9px", md: "11px", lg: "14px" },
      lineHeight: { xs: 1.6, sm: 1.7, md: "28.8px" },
      letterSpacing: "0%",
    },
    bulletText: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "9px", sm: "10px", md: "12px", lg: "15px" },
      lineHeight: { xs: 1.6, sm: 1.7, md: "18.8px" },
      letterSpacing: "0%",
    },
  },

  // =====================================================
  // OFFERINGS INNER DETAIL
  // =====================================================
  offeringsInnerDetail: {
    title: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 600,
      fontSize: { xs: "22px", sm: "26px", md: "34px", lg: "40px", xl: "44px" },
      lineHeight: { xs: 1.3, sm: 1.25, md: 1.2, lg: 1.1, xl: 1.05 },
      letterSpacing: "0%",
    },
    description: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 13, sm: 6.5, md: 10, lg: 15, xl: 16 },
      lineHeight: 1.9,
    },
    relatedEventsHeader: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "20px", sm: "22px", md: "24px", lg: "26px", xl: "28px" },
      lineHeight: { xs: 1.3, sm: 1.25, md: 1.2, lg: 1.15 },
      letterSpacing: "0%",
    },
    viewAll: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "13px", sm: "14px", md: "15px", lg: "16px" },
      lineHeight: { xs: 1.6, md: "28.8px" },
      letterSpacing: "0%",
    },
    eventCard: {
      title: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 600,
        fontSize: { xs: 16, sm: 14, md: 16, lg: 18 },
        lineHeight: 1.3,
      },
      description: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 400,
        fontSize: { xs: 13, sm: 12, md: 13, lg: 14 },
        lineHeight: 1.6,
      },
      meta: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 400,
        fontSize: { xs: 12, md: 13 },
      },
      price: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 600,
        fontSize: { xs: 14, md: 16 },
      },
    },
  },

  // =====================================================
  // LEADERSHIP
  // =====================================================
  leadership: {
    itemTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 22, sm: 24, md: 32, lg: 38 },
      lineHeight: 1.2,
      letterSpacing: 0,
    },
    itemDescription: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 14, sm: 14, md: 15, lg: 16 },
      lineHeight: 1.7,
      letterSpacing: 0,
      color: "#444444",
    },
    ctaTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "24px", sm: "30px", md: "36px", lg: "40px", xl: "44px" },
      lineHeight: "100%",
      letterSpacing: 0,
    },
    ctaBody: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "13px", sm: "14px", md: "15px", lg: "16px" },
      lineHeight: { xs: "22px", sm: "24px", md: "26px", lg: "28.8px" },
      letterSpacing: 0,
    },
    coachingHeading: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "18px", sm: "22px", md: "24px", lg: "26px", xl: "28px" },
      lineHeight: "100%",
      letterSpacing: 0,
    },
    coachingCardTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 600,
      fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px", xl: "20px" },
      lineHeight: "100%",
      letterSpacing: 0,
    },
    coachingCardDescription: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "11px", sm: "12px", md: "13px", lg: "14px", xl: "14px" },
      lineHeight: { xs: "18px", sm: "20px", md: "22px", lg: "23.8px" },
      letterSpacing: 0,
    },
  },
  // =====================================================
  // WHAT IS AUTHENTIC (Facilitation Page)
  // =====================================================
  whatIsAuthentic: {
    title: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "20px", sm: "22px", md: "28px", lg: "32px" },
      lineHeight: "110%",
      letterSpacing: "0%",
      textAlign: "center",
    },
    body: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "11px", sm: "12px", md: "14px", lg: "16px" },
      lineHeight: 1.7,
      letterSpacing: "0%",
    },
    subText: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "11px", sm: "12px", md: "13px", lg: "15px" },
      lineHeight: 1.6,
      letterSpacing: "0%",
      textAlign: "left",
    },
    bulletText: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "11px", sm: "12px", md: "13px", lg: "15px" },
      lineHeight: 1.6,
      letterSpacing: "0%",
    },
    footer: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "11px", sm: "12px", md: "13px", lg: "14px" },
      lineHeight: 1.6,
      letterSpacing: "0%",
      textAlign: "center",
    },
  },
  // =====================================================
  // BECOME A CERTIFIED (Facilitation Page)
  // =====================================================
  becomeACertified: {
    heroTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "24px", sm: "28px", md: "34px", lg: "40px", xl: "52px" },
      lineHeight: 1.3,
      letterSpacing: "-0.02em",
      textAlign: "center",
    },
    heroBody: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 300,
      fontSize: { xs: "13px", sm: "14px", md: "16px", lg: "20px" },
      lineHeight: { xs: "20px", sm: "22px", md: "24px", lg: "26px" },
      letterSpacing: 0,
      textAlign: "center",
    },
    overviewTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 900,
      fontSize: { xs: 20, sm: 20, md: 28, lg: 32 },
      lineHeight: "110%",
      letterSpacing: "0%",
    },
    overviewItem: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 13, sm: 14, md: 15, lg: 16 },
      lineHeight: 1.6,
      letterSpacing: "0%",
    },
  },
  // =====================================================
  // YOU WILL LEARN TIMELINE (Facilitation Page)
  // =====================================================
  youWillLearnTimeline: {
    panelTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "22px", sm: "28px", md: "34px" },
      lineHeight: "110%",
      letterSpacing: "0%",
      textAlign: "left",
    },
    itemText: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "14px", sm: "16px", md: "16px" },
      lineHeight: 1.6,
      letterSpacing: "0%",
      textAlign: "left",
    },
  },
  // =====================================================
  // ADVANCED TRAINING SECTION (Facilitation Page)
  // =====================================================
  advancedTraining: {
    title: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 800,
      fontSize: { xs: "22px", sm: "24px", md: "28px", lg: "38px" },
      lineHeight: "110%",
      letterSpacing: "0%",
      textAlign: { xs: "center", sm: "left", md: "left" },
    },
    body: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "14px", sm: "15px", md: "16px" },
      lineHeight: 1.6,
      letterSpacing: "0%",
    },
    moduleText: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "14px", sm: "15px", md: "16px" },
      lineHeight: 1.6,
      letterSpacing: "0%",
      textAlign: "left",
    },
    button: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 500,
      fontSize: { xs: "13px", sm: "13px", md: "15px" },
      lineHeight: 1,
      letterSpacing: "0%",
      textTransform: "none",
    },
    imageOverlayText: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 500,
      fontSize: { xs: 14, md: 16 },
      lineHeight: 1.2,
      letterSpacing: "0%",
    },
  },
  // =====================================================
  // COMMUNITY SECTION
  // =====================================================
  community: {
    sectionTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "26px", sm: "28px", md: "36px", lg: "42px" },
      lineHeight: "110%",
    },
    sectionDescription: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "14px", sm: "14px", md: "16px", lg: "18px" },
      lineHeight: { xs: "22px", sm: "24px", md: "26px", lg: "28px" },
    },
    headingTitle: {
      fontWeight: 700,
      fontSize: { xs: 22, sm: 26, md: 30 },
      lineHeight: 1.1,
    },
    cardTitle: {
      fontWeight: 600,
      fontSize: { xs: "12px", sm: "13px", md: "14px", lg: "16px", xl: "18px" },
      lineHeight: 1.2,
    },
    cardDescription: {
      fontWeight: 400,
      fontSize: { xs: "10px", sm: "11px", md: "12px", lg: "13px", xl: "14px" },
      lineHeight: 1.3,
    },
    loadingText: {
      fontWeight: 400,
      fontSize: 14,
    },
  },

  // =====================================================
  // AUTHENTIC RELATING HERO (Speaking & Media Kit)
  // =====================================================
  authenticRelatingHero: {
    // Hero body copy
    body: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "18px" },
      lineHeight: { xs: 1.6, sm: 1.5, md: 1.5 },
      letterSpacing: "0%",
      textAlign: "center",
    },

    // Section titles ("Our Core Offerings", "Signature Speaking Topics")
    sectionTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "22px", sm: "28px", md: "34px", lg: "42px" },
      lineHeight: { xs: 1.2, sm: 1.15, md: 1.1, lg: "100%" },
      letterSpacing: "0%",
      textAlign: "center",
    },

    // Offering card title
    offeringCardTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 600,
      fontSize: { xs: 15, sm: 12, md: 13, lg: 14, xl: 15 },
      lineHeight: 1.3,
      textAlign: "center",
    },

    // Offering card description
    offeringCardDesc: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 12, sm: 10, md: 9, lg: 10, xl: 15 },
      lineHeight: 1.4,
      textAlign: "center",
    },

    // Signature topic title
    topicTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "18px", sm: "20px", md: "24px", lg: "26px" },
      lineHeight: { xs: 1.2, sm: 1.15, md: 1.1, lg: "100%" },
      letterSpacing: "0%",
    },

    // Signature topic description
    topicDesc: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "18px" },
      lineHeight: { xs: 1.6, sm: 1.7, md: "28.8px" },
      letterSpacing: "0%",
    },
  },
  // =====================================================
  // AUTHENTIC RELATING SECTION
  // =====================================================
  authenticRelatingSection: {
    title: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 28, sm: 34, md: 40, lg: 44 },
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center",
    },
    subtitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 14, sm: 13, md: 20 },
      lineHeight: "28.8px",
      letterSpacing: "0%",
      textAlign: "center",
    },
    headingRight: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 24, sm: 28, md: 34, lg: 36 },
      lineHeight: "100%",
      letterSpacing: "0%",
    },
    paragraph: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 14, sm: 15, md: 18 },
      lineHeight: "28.8px",
      letterSpacing: "0%",
    },
  },
  // =====================================================
  // FOUNDER INTRO SECTION
  // =====================================================
  founderIntro: {
    // Body paragraphs
    body: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "16px" },
      lineHeight: { xs: 1.6, sm: 1.7, md: "28.8px" },
      letterSpacing: "0%",
    },

    // Founder name (mobile card)
    name: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1.4,
    },

    // Founder role text
    role: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: 13,
      lineHeight: 1.5,
    },

    // Signature quote
    signature: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "16px" },
      lineHeight: { xs: 1.6, sm: 1.6, md: "28.8px" },
      letterSpacing: "0%",
    },
  },
  // =====================================================
  // AUTHENTIC RELATING PAGE (Speaking & Media Kit)
  // =====================================================
  authenticRelatingPage: {
    heroBody: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "18px" },
      lineHeight: { xs: 1.6, sm: 1.5, md: 1.5 },
      letterSpacing: "0%",
      textAlign: "center",
    },
    offeringsTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "22px", sm: "28px", md: "34px", lg: "42px" },
      lineHeight: { xs: 1.2, sm: 1.15, md: 1.1, lg: "100%" },
      letterSpacing: "0%",
      textAlign: "center",
    },
    offeringCardTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 600,
      fontSize: { xs: 15, sm: 12, md: 13, lg: 14, xl: 15 },
      lineHeight: 1.3,
      textAlign: "center",
    },
    offeringCardDesc: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 12, sm: 10, md: 9, lg: 10, xl: 15 },
      lineHeight: 1.4,
      textAlign: "center",
    },
    topicsTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "22px", sm: "28px", md: "34px", lg: "40px" },
      lineHeight: { xs: 1.2, sm: 1.15, md: 1.1, lg: "100%" },
      letterSpacing: "0%",
    },
    topicTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "18px", sm: "20px", md: "24px", lg: "26px" },
      lineHeight: { xs: 1.2, sm: 1.15, md: 1.1, lg: "100%" },
      letterSpacing: "0%",
    },
    topicDesc: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "18px" },
      lineHeight: { xs: 1.6, sm: 1.7, md: "28.8px" },
      letterSpacing: "0%",
    },
  },
  // =====================================================
  // FRAMEWORK HERO SECTION
  // =====================================================
  frameworkHero: {
    title: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "28px", md: "50px" },
      lineHeight: 1.2,
    },
    description: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "14px", md: "16px" },
      lineHeight: 1.6,
    },
    bodyTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 22, sm: 18, md: 26, lg: 30 },
      lineHeight: { xs: 1.3, sm: 1.2, md: 1.3 },
    },
    author: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontStyle: "italic",
      fontSize: { xs: "13px", sm: "14px", md: "18px", lg: "20px" },
      lineHeight: "140%",
    },
    body: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 14, sm: 12, md: 20 },
      lineHeight: { xs: 1.7, sm: 1.5, md: 1.7 },
    },
    bodyStrong: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 14, sm: 12, md: 20 },
      lineHeight: "140%",
    },
  },
  // =====================================================
  // FIVE DIMENSIONS PAGE
  // =====================================================
  fiveDimensions: {
    title: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "24px", md: "34px", lg: "38px" },
      lineHeight: { xs: "30px", md: "40px" },
    },
    description: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 500,
      fontSize: { xs: "14px", md: "16px", lg: "17px" },
      lineHeight: { xs: "22px", md: "24px", lg: "26px" },
    },
    quote: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontStyle: "italic",
      fontSize: { xs: "13px", md: "15px", lg: "16px" },
      lineHeight: { xs: "20px", md: "24px", lg: "26px" },
    },
  },
  // =====================================================
  // WHAT YOU WILL FIND INSIDE
  // =====================================================
  whatYouWillFindInside: {
    heading: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 800,
      fontSize: { xs: 22, md: 44 },
    },
    cardTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 16, md: 18 },
    },
    cardDescription: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 13, md: 14 },
      lineHeight: 1.6,
    },
    ctaTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
      lineHeight: 1.3,
    },
    ctaBody: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "0.95rem", md: "1rem" },
      lineHeight: 1.6,
    },
    ctaButton: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 600,
    },
  },
  // =====================================================
  // PRINCIPLES OF AUTHENTIC RELATING (page section)
  // =====================================================
  principlesOfAuthenticRelating: {
    headerTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "28px", md: "40px" },
      lineHeight: 1.2,
      textAlign: "center",
    },
    headerSubtitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "14px", md: "18px" },
      lineHeight: 1.6,
      textAlign: "center",
    },
    cardTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 800,
      fontSize: { xs: "26px", md: "36px" },
      lineHeight: 1.2,
    },
    body: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "14px", md: "16px" },
      lineHeight: { xs: "22px", md: "26px" },
    },
  },
  // =====================================================
  // AUTHENTIC RELATING UI
  // =====================================================
  authenticRelatingUI: {
    introTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "22px", sm: "28px", md: "44px" },
      lineHeight: 1,
      textAlign: "center",
    },
    introTitleRegular: {
      fontWeight: 400,
      fontSize: { xs: "22px", sm: "28px", md: "46.7px" },
    },
    introBody: {
      fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
      fontWeight: 200,
      fontSize: { xs: "14px", md: "20.4px" },
      lineHeight: { xs: "24px", md: "32.71px" },
      textAlign: "center",
    },
    sectionTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "28px", md: "44px" },
      lineHeight: "100%",
    },
    sectionBody: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "14px", md: "16px", lg: "18px" },
      lineHeight: { xs: "22px", md: "22px", lg: "28px" },
    },
  },
  // =====================================================
// COURSE INNER DETAIL PAGE
// =====================================================
courseInnerDetail: {
  pageTitle: {
    fontFamily: '"Red Hat Display", sans-serif',
    fontWeight: 700,
    fontSize: { xs: 22, sm: 24, md: 26, lg: 28, xl: 30 },
  },
  tab: {
    fontFamily: '"Red Hat Display", sans-serif',
    fontWeight: 500,
    fontSize: { xs: 12, sm: 13, md: 14, lg: 15, xl: 16 },
  },
  tabActive: {
    fontWeight: 600,
  },
  instructorHeader: {
    fontFamily: '"Red Hat Display", sans-serif',
    fontWeight: 600,
    fontSize: { xs: 16, sm: 18, md: 20, lg: 22, xl: 24 },
  },
  instructorName: {
    fontFamily: '"Red Hat Display", sans-serif',
    fontWeight: 600,
    fontSize: { xs: 15, sm: 17, md: 19, lg: 21, xl: 23 },
  },
  instructorRole: {
    fontFamily: '"Red Hat Display", sans-serif',
    fontWeight: 400,
    fontSize: { xs: 12, sm: 13, md: 14, lg: 15, xl: 16 },
  },
  bulletText: {
    fontFamily: '"Red Hat Display", sans-serif',
    fontWeight: 400,
    fontSize: { xs: 12.5, sm: 13.5, md: 14.5, lg: 15.5, xl: 16.5 },
  },
  priceLabel: {
    fontFamily: 'var(--font-redhat)',
    fontWeight: 600,
    fontSize: { xs: "13px", sm: "14px", md: "16px" },
    lineHeight: { xs: "24px", sm: "26px", md: "28.8px" },
  },
  priceValue: {
    fontFamily: 'var(--font-redhat)',
    fontWeight: 700,
    fontSize: { xs: "20px", sm: "24px", md: "28px" },
    lineHeight: '100%',
  },
  detailLabel: {
    fontFamily: 'var(--font-redhat)',
    fontWeight: 400,
    fontSize: { xs: '13px', sm: '14px' },
  },
  ctaButton: {
    fontFamily: 'var(--font-redhat)',
    fontWeight: 600,
    fontSize: { xs: '13px', sm: '14px', md: '15px' },
  },
},
  // =====================================================
  // CONNECTION SECTION
  // =====================================================
  connectionSection: {
    headerTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "22px", sm: "26px", md: "36px", lg: "46px" },
      lineHeight: { xs: 1.3, sm: 1.25, md: 1.2, lg: 1.1 },
      letterSpacing: "0%",
      textAlign: "center",
    },
    headerDescription: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "13px", sm: "14px", md: "16px", lg: "18px" },
      lineHeight: { xs: 1.6, sm: 1.6, md: 1.7 },
      letterSpacing: "0%",
      textAlign: "center",
    },
    toggleButton: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 500,
      fontSize: "14px",
      textTransform: "none",
    },

    // List card
    listCardTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "18px", sm: "24px", md: "28px", lg: "32px" },
      lineHeight: 1.2,
    },
    listCardSubtitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "13px", sm: "14px", md: "15px", lg: "16px" },
      lineHeight: 1.8,
    },
    listCardDescription: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 300,
      fontSize: { xs: "10px", sm: "14px", md: "16px", lg: "18px" },
      lineHeight: { sm: 1.3, md: 1.6 },
    },

    // Mobile card
    mobileCardTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: 1.3,
      textAlign: "center",
    },
    mobileCardSubtitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: "13px",
      lineHeight: 1.6,
      textAlign: "center",
    },
    mobileCardDescription: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: 1.6,
      textAlign: "center",
    },

    // Grid card
    gridCardTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: "15px", sm: "16px", md: "16px", lg: "18px" },
      lineHeight: 1.3,
    },
    gridCardDescription: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: "11px", sm: "12px", md: "13px", lg: "14px" },
      lineHeight: 1.6,
    },

    // Buttons
    cardButton: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 600,
      fontSize: { xs: "13px", sm: "12px", md: "14px" },
      textTransform: "none",
    },
    gridButton: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 600,
      fontSize: { xs: "10px", sm: "11px", md: "12px" },
      textTransform: "none",
    },
    paginationButton: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 500,
      fontSize: "14px",
    },
    loadingText: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: "14px",
    },
  },
  // =====================================================
  // COMMUNITY UNIQUE SECTION
  // =====================================================
  communityUnique: {
    topTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 20, sm: 22, md: 26, lg: 35 },
      lineHeight: 1.2,
    },
    topBody: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 12, sm: 13, md: 14 },
      lineHeight: 1.6,
    },
    coachingPointTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 600,
      fontSize: { xs: 11, sm: 12, md: 16 },
    },
    meetTitle: {
      fontWeight: 700,
      fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
    },
    meetBody: {
      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
    },
    meetButton: {
      fontWeight: 500,
      fontSize: { xs: "14px", sm: "18px", md: "20px" },
    },
    finalTitle: {
      fontWeight: 700,
      fontSize: { xs: 24, sm: 28, md: 32, lg: 35 },
      lineHeight: 1.2,
    },
    finalBody: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 500,
      fontSize: { xs: 12, sm: 13, md: 14, lg: 18 },
      lineHeight: 1.6,
    },
  },
  // =====================================================
  // FACILITATION HEADER
  // =====================================================
  facilitationHeader: {
    sectionTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 24, sm: 28, md: 36, lg: 44 },
      lineHeight: "100%",
      letterSpacing: "0%",
    },
    body: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 14, sm: 14, md: 16, lg: 17 },
      lineHeight: 1.7,
      letterSpacing: "0%",
    },
  },
  // =====================================================
  // WHO IT'S FOR
  // =====================================================
  whoItsFor: {
    heading: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 800,
      fontSize: { xs: 24, md: 30, lg: 38, xl: 52 },
      lineHeight: 1.2,
      letterSpacing: 0,
      textAlign: "center",
    },
    subtitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 14, md: 15, lg: 18 },
      lineHeight: 1.5,
      letterSpacing: 0,
      textAlign: "center",
    },
    cardText: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 500,
      fontSize: { xs: 12, sm: 11, md: 13, lg: 14, xl: 17 },
      lineHeight: 1.2,
      letterSpacing: 0,
      textAlign: "center",
    },
    blockTitle: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 24, sm: 28, md: 34, lg: 40 },
      lineHeight: 1.2,
      letterSpacing: 0,
    },
    blockTitleSmall: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 22, sm: 24, md: 30 },
      lineHeight: 1.3,
      letterSpacing: 0,
    },
    body: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 400,
      fontSize: { xs: 14, sm: 14, md: 15 },
      lineHeight: 1.6,
      letterSpacing: 0,
    },
    accent: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 700,
      fontSize: { xs: 14, sm: 14, md: 15 },
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    button: {
      fontFamily: '"Red Hat Display", sans-serif',
      fontWeight: 500,
      fontSize: { xs: "13px", sm: "14px" },
      lineHeight: 1,
      letterSpacing: 0,
      textTransform: "none",
    },
  },
};

export default typography;
