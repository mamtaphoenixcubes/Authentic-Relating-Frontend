// src/theme/colors.js

import { Category } from "@mui/icons-material";

const colors = {
  // =====================================================
  // GLOBAL COLORS
  // =====================================================
  primary: "#1d1d1d",
  primaryHover: "#333333",
  secondary: "#ffffff",

  textPrimary: "#1d1d1d",
  textSecondary: "#555555",
  textMuted: "#777777",
  textLight: "#ffffff",

  background: "#ffffff",
  backgroundSoft: "#f8f6f3",
  backgroundDark: "#1d1d1d",
  Categorybackground: "#F9F9F9",
  CategoryDarkbackground: "#444444",
  Dark: "#000000",

  border: "#e5e5e5",

  // =====================================================
  // AUTHENTIC RELATING
  // =====================================================
  authenticGradient: "linear-gradient(170deg, #F9C846 0%, #F4A73F 40%, #EB8723 100%)",
  authenticCardGradient: "linear-gradient(50deg, rgba(255,64,64,0.85), rgba(247,175,60,0.75))",
  authenticCircle: "#FFE39E",
  AuthenticRelating: "#FFE4D5",
  authenticText: "#F9F9F9",
  authenticImageShadow: "0px 0px 60px rgba(0, 73, 127, 0.35)",
  authenticCardShadow: "0px 4.17px 7.61px 1.04px #0000001A",
  authenticCardShadowHover: "0 16px 45px rgba(0, 0, 0, 0.20)",
  // Added specific glass effect properties based on your request
  authenticGlassEffect: {
    background: "#FFFFFF33",
    backdropFilter: "blur(271.12518310546875px)",
    boxShadow: "0px 4.17px 7.61px 1.04px #0000001A",
  },

  // =====================================================
  // TEN PRINCIPLES
  // =====================================================
  tenPrinciples: {
    title: "#FF7C68",
    description: "#000000",
    cardBorder: "#ffffff",
    cardShadow: "0 6px 18px rgba(0, 0, 0, 0.12)",
    cardShadowHover: "0 14px 36px rgba(0, 0, 0, 0.22)",
    overlay: "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.9))",
    cardText: "#ffffff",
    cardTextShadow: "0 2px 6px rgba(0,0,0,0.45)",
  },

  // =====================================================
  // FEATURES SECTION
  // =====================================================
  featuresSection: {
    gradient: "linear-gradient(135deg, #FF7A6B, #FFB87A)",
    title: "#ffffff",
    description: "rgba(255,255,255,0.85)",
    card: {
      background:
        "linear-gradient(135deg, rgba(242,140,106,0.35), rgba(245,160,122,0.35))",
      border: "2px solid rgba(255,255,255,0.7)",
      shadow: "0 10px 25px rgba(0,0,0,0.2)",
      shadowHover: "0 20px 40px rgba(0,0,0,0.3)",
      divider: "rgba(255,255,255,0.6)",
    },
    cardTitle: "#ffffff",
    cardDescription: "rgba(255,255,255,0.85)",
  },

  // =====================================================
  // GIFTS SECTION
  // =====================================================
  gifts: {
    title: "#FE7C68",
    description: "#444444",
    cardBackground: "#ffffff",
    cardBorder: "#eeeeee",
    cardShadow: "0 2px 10px rgba(0,0,0,0.05)",
    cardShadowHover: "0 8px 25px rgba(0,0,0,0.10)",
    imageBackground: "#f5f5f5",
    modalBackground: "#111111",
    modalBodyBackground: "#000000",
    audioBackground: "#0d0d0d",
    audioPlaceholder: "#222222",
    audioMutedText: "rgba(255,255,255,0.45)",
    white: "#ffffff",
    overlay: "rgba(0,0,0,0.75)",
    modalOverlay: "rgba(0,0,0,0.75)",
    modalHeaderOverlay: "rgba(0,0,0,0.25)",
    modalHeaderHover: "rgba(0,0,0,0.45)",
    closeBackground: "rgba(0,0,0,0.2)",
    closeHoverBackground: "rgba(0,0,0,0.4)",
    actionBackground: "rgba(0,0,0,0.25)",
    actionHoverBackground: "rgba(0,0,0,0.45)",
    buttonBorder:
      "linear-gradient(106deg, #FFFFFF 34%, rgba(255,255,255,0.1) 105%)",
    buttonHoverOpacity: 0.9,

    categoryGradients: {
      videos: "linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)",
      pdf: "linear-gradient(91.44deg, #BFBD33 0%, #6E953D 100%)",
      audios: "linear-gradient(100.86deg, #32D7E3 0%, #0C959F 100%)",
      collection: "linear-gradient(100.86deg, #FEB283 0%, #FF6E69 100%)",
    },
  },

  // =====================================================
  // CLIENT TESTIMONIAL
  // =====================================================
  clientTestimonial: {
    title: "#F18700",
    textColor: "#ffffff",
    cardBackground: "linear-gradient(90deg, #F39C12 0%, #F7B267 100%)",
    cardShadow: "0px 10px 30px rgba(0,0,0,0.15)",
    userName: "#ffffff",
    userRole: "rgba(255,255,255,0.85)",
  },

  // =====================================================
  // SIGNATURE OFFERINGS
  // =====================================================
  signatureOfferings: {
    title: "#458001",
    subtitle: "#666666",
    cardShadow: "0 4px 12px rgba(0,0,0,0.1)",
    cardOverlay: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
    cardTitle: "#ffffff",
    cardBackground: "rgba(255,255,255,0.05)",
    cardShadowHover: `
      0 20px 50px rgba(0,0,0,0.35),
      0 10px 20px rgba(0,0,0,0.25),
      inset 0 1px 0 rgba(255,255,255,0.25)
    `,
    gradientOverlay:
      "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)",
    blurLayer: "rgba(255,255,255,0.05)",
    textShadow: "0 2px 10px rgba(0,0,0,0.5)",
  },

  // =====================================================
  // SECTION CARDS
  // =====================================================
  sectionCards: {
    cardBackground:
      "linear-gradient(135deg, #3B82C4 0%, #7FB3E6 25%, #9EC5EA 45%, #f4edfb 100%, #ffffff 90%)",
    cardShadow: "0px 4px 7.3px 1px rgba(0,0,0,0.10)",
    cardShadowHover: "0px 8px 18px rgba(0,0,0,0.16)",
    titleColor: "#ffffff",
    descriptionColor: "#ffffff",
    footerColor: "#000000",
    linkColor: "#000000",
    linkHoverColor: "#333333",
  },

  // =====================================================
  // HERO SECTION
  // =====================================================
  hero: {
    titleColor: "#ffffff",
    titleShadow: "0 4px 12px rgba(0,0,0,0.25)",
    subtitleColor: "rgba(255,255,255,0.92)",
    subtitleShadow: "0 3px 10px rgba(0,0,0,0.22)",
    authorColor: "rgba(255,255,255,0.92)",
    authorShadow: "0 3px 10px rgba(0,0,0,0.22)",
  },

  // =====================================================
  // BUTTONS - UNIFIED SYSTEM
  // =====================================================
  buttonBase: {
    textColor: "#ffffff",
    fontFamily: '"Red Hat Display", sans-serif',
    transition: "all 0.3s ease",
  },

  defaultButton: {
    background:
      "linear-gradient(135deg, #6fa8dc 0%, #72aee2 50%, #82b8e8 100%)",
    textColor: "#ffffff",
    boxShadow: `
      0px 5px 10px rgba(0,0,0,0.18),
      0px 12px 22px rgba(0,0,0,0.10),
      inset 0px 1px 2px rgba(255,255,255,0.45)
    `,
    hoverBackground:
      "linear-gradient(135deg, #659fd5 0%, #70a9df 50%, #7db4e6 100%)",
    hoverShadow: `
      0px 7px 14px rgba(0,0,0,0.20),
      0px 15px 28px rgba(0,0,0,0.12),
      inset 0px 1px 2px rgba(255,255,255,0.5)
    `,
    activeShadow: "0px 3px 7px rgba(0,0,0,0.18)",
    borderColor: "rgba(255,255,255,0.85)",
  },

  offeringButton: {
    background:
      "linear-gradient(90deg, #a7ba52 0%, #babe45 45%, #b2b348 100%)",
    borderGradient:
      "linear-gradient(104.35deg, #FFFFFF 2.33%, rgba(255,255,255,0.1) 100.06%)",
    textColor: "#ffffff",
    boxShadow: "0px 5.3px 9.67px 1.32px #0000001A",
    hoverShadow: "0px 8px 13px 1.5px #00000026",
    activeShadow: "0px 3px 6px 1px #0000001A",
    shine: "rgba(255,255,255,0.18)",
  },

  primaryWaveButton: {
    background:
      "linear-gradient(90deg, #F3BDB1 0%, #F1AAA0 48%, #EE9A8E 100%)",
    borderGradient:
      "linear-gradient(104.35deg, #FFFFFF 2.33%, rgba(255,255,255,0.1) 100.06%)",
    textColor: "#ffffff",
    boxShadow: "0px 5.3px 9.67px 1.32px #0000001A",
    hoverShadow: "0px 8px 13px 1.5px #00000026",
    activeShadow: "0px 3px 6px 1px #0000001A",
    shine: "rgba(255,255,255,0.16)",
  },

  glassButton: {
    background: "rgba(255,255,255,0.22)",
    borderColor: "rgba(255,255,255,0.8)",
    borderGradient:
      "linear-gradient(106deg, rgba(255,255,255,0.8) 34%, rgba(255,255,255,0.2) 105%)",
    textColor: "#ffffff",
    boxShadow: "0px 4px 7.3px 1px rgba(0,0,0,0.10)",
    hoverBackground: "rgba(255,255,255,0.32)",
    hoverBorderColor: "rgba(255,255,255,0.9)",
    hoverShadow: "0px 6px 12px 2px rgba(0,0,0,0.15)",
    activeShadow: "0px 3px 6px rgba(0,0,0,0.12)",
    backdropBlur: "blur(138.4px)",
  },

  button: {
    primary: {
      background:
        "linear-gradient(135deg, #6fa8dc 0%, #72aee2 50%, #82b8e8 100%)",
      hoverBackground:
        "linear-gradient(135deg, #659fd5 0%, #70a9df 50%, #7db4e6 100%)",
    },
    offering: {
      background:
        "linear-gradient(90deg, #a7ba52 0%, #babe45 45%, #b2b348 100%)",
      hoverBackground:
        "linear-gradient(90deg, #9ab04a 0%, #aeb342 45%, #a6a744 100%)",
    },
    wave: {
      background:
        "linear-gradient(90deg, #F3BDB1 0%, #F1AAA0 48%, #EE9A8E 100%)",
      hoverBackground:
        "linear-gradient(90deg, #f0b5a8 0%, #eea397 48%, #eb9184 100%)",
    },
    glass: {
      background: "rgba(255,255,255,0.22)",
      hoverBackground: "rgba(255,255,255,0.32)",
    },
  },
  // =====================================================
  // COURSE INNER DETAIL PAGE
  // =====================================================
  courseInnerDetail: {
    // Card header block
    priceSectionBg: "#D1FAF5",
    priceSectionLabel: "#444444",
    offerBadgeBg: "#ffffff",
    offerBadgeText: "#374151",
    offerBadgeBorder: "1px solid rgba(20, 184, 166, 0.2)",

    // Price
    priceColor: "#14B8A6",
    totalRecurringColor: "#111827",

    // Details rows
    detailLabel: "#000000",
    detailIcon: "#FB7185",
    detailDivider: "#E5E7EB",

    // CTA button
    ctaBg: "linear-gradient(98.48deg,#FF826E 0%,#DE472F 100%)",
    ctaBgHoverShadow: "0 10px 24px rgba(0,0,0,0.3)",
    ctaShadow: "0 6px 16px rgba(0,0,0,0.2)",
    ctaBorderGradient:
      "linear-gradient(104deg,#fff 2%,rgba(255,255,255,0.1) 100%)",
    ctaText: "#ffffff",

    // Tabs
    tabsBg: "#F0FDFA",
    tabsBorderBottom: "1px solid #CCFBF1",
    tabsIndicator: "#14B8A6",
    tabsText: "#374151",
    tabsTextActive: "#111827",

    // Instructor
    instructorImagePlaceholder: "#D9D9D9",
    instructorAccentBar: "#2563EB",
    instructorName: "#000000",
    instructorRole: "#6B7280",
    bulletDot: "#14B8A6",
    bulletDotText: "#ffffff",
    bulletText: "#374151",

    // Sidebar card
    sidebarCardBg: "#ffffff",
    sidebarCardShadow: {
      xs: "0 4px 12px rgba(0,0,0,0.08)",
      sm: "0 6px 18px rgba(0,0,0,0.08)",
      md: "0 8px 24px rgba(0,0,0,0.08)",
      lg: "0 10px 30px rgba(0,0,0,0.08)",
      xl: "0 12px 40px rgba(0,0,0,0.08)",
    },
  },
  // =====================================================
  // CONNECTION SECTION (extended)
  // =====================================================
  connectionSection: {
    headerTitleColor: "#FF8A7A",
    headerDescriptionColor: "#000000",

    toggleActiveBg: "#1976d2",
    toggleActiveHoverBg: "#1565c0",
    toggleActiveText: "#ffffff",
    toggleInactiveText: "#1976d2",
    toggleInactiveBorder: "#1976d2",
    toggleInactiveHoverBg: "rgba(25, 118, 210, 0.1)",

    placeholderBg: "#cccccc",
    gridPlaceholderBg: "#D9D9D9",

    cardText: "#ffffff",
    cardScrollThumb: "rgba(255,255,255,0.4)",

    readMoreBg: "#ffffff",
    eventsBg: "rgba(255,255,255,0.15)",
    eventsHoverBg: "rgba(255,255,255,0.25)",
    buttonBorderGradient:
      "linear-gradient(106deg, #FFFFFF 34%, rgba(255,255,255,0.1) 105%)",

    shadowListCard: "0 20px 40px rgba(0,0,0,0.25)",
    shadowMobileCard: "0 15px 30px rgba(0,0,0,0.2)",
    shadowButton: "0 10px 25px rgba(0,0,0,0.25)",
    shadowButtonSm: "0 6px 15px rgba(0,0,0,0.25)",

    paginationActiveBg: "linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)",
    paginationActiveText: "#ffffff",
    paginationActiveBorder: "#ffffff",
    paginationActiveShadow: "0px 4px 12px rgba(0,0,0,0.2)",
    paginationInactiveBg: "rgba(255,255,255,0.7)",
    paginationInactiveText: "#1a56db",
    paginationInactiveBorder: "rgba(255,255,255,0.7)",
    paginationDisabledBg: "rgba(219,234,254,0.6)",
    paginationDisabledText: "#93c5fd",
  },
  // =====================================================
  // COURSE CARD SPECIFIC COLORS
  // =====================================================
  courseCard: {
    default:
      "linear-gradient(100deg, #3B82C4 0%, #7FB3E6 25%, #9EC5EA 45%, #f4edfb 100%, #ffffff 90%)",

    blue: "linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)",

    gradient: "linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)",

    shadow: "0px 4px 7.3px 1px rgba(0,0,0,0.10)",

    shadowHover: "0px 8px 18px rgba(0,0,0,0.16)",

    title: "#ffffff",
    description: "#ffffff",
    price: "#ffffff",
    timeIcon: "#ffffff",
    modeIcon: "#ffffff",

    emiBadge: {
      background: "rgba(75, 133, 200, 0.5)",
      color: "#ffffff",
    },

    // READ MORE BUTTON
    readMore: {
      background:
        "linear-gradient(105deg, #6BB9F1 0%, #80C5F5 100%)",

      hoverBackground:
        "linear-gradient(105deg, #58AEEF 0%, #70BDF3 100%)",
    },

    // BOOK NOW BUTTON
    buyNow: {
      background:
        "linear-gradient(105deg, #80B8F5 0%, #1685E5 100%)",

      hoverBackground:
        "linear-gradient(105deg, #69ADF0 0%, #0876D5 100%)",
    },
  },

  // =====================================================
  // PAGINATION
  // =====================================================
  pagination: {
    active: {
      background: "linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)",
      color: "#ffffff",
      border: "#ffffff",
      shadow: "0px 4px 12px rgba(0,0,0,0.2)",
    },
    inactive: {
      background: "rgba(255,255,255,0.7)",
      color: "#1a56db",
      border: "rgba(255,255,255,0.7)",
    },
    disabled: {
      background: "rgba(219,234,254,0.6)",
      color: "#93c5fd",
    },
  },

  // =====================================================
  // CONNECTION SECTION
  // =====================================================
  connection: {
    headerTitle: "#FF8A7A",
    headerDescription: "#1d1d1d",

    toggleActiveBg: "#1976d2",
    toggleActiveHoverBg: "#1565c0",
    toggleActiveText: "#ffffff",
    toggleInactiveText: "#1976d2",
    toggleInactiveBorder: "#1976d2",
    toggleInactiveHoverBg: "rgba(25, 118, 210, 0.1)",

    listCard: {
      text: "#ffffff",
      shadow: "0 15px 30px rgba(0,0,0,0.2)",
      desktopShadow: "0 20px 40px rgba(0,0,0,0.25)",
      placeholderBg: "#cccccc",
      scrollThumb: "rgba(255,255,255,0.4)",
      radius: "20px",
    },

    gridCard: {
      radiusXs: 2,
      radiusMd: 3,
      imagePlaceholder: "#D9D9D9",
      shadowHover: 6,
      titleColor: "#ffffff",
      descriptionColor: "#ffffff",
      descriptionOpacity: 0.9,
    },

    readMore: {
      background: "#ffffff",
      borderGradient:
        "linear-gradient(106deg, #FFFFFF 34%, rgba(255,255,255,0.1) 105%)",
      hoverShadowList: "0 10px 25px rgba(0,0,0,0.25)",
      hoverShadowGrid: "0 6px 15px rgba(0,0,0,0.25)",
    },

    events: {
      background: "rgba(255, 255, 255, 0.22)",
      hoverBackground: "rgba(131, 82, 82, 0.3)",
      backdropBlur: "blur(111.96px)",
      boxShadow: "0px 3.24px 5.91px 0.81px rgba(0, 0, 0, 0.10)",
      hoverBoxShadow: "0px 6px 14px rgba(0, 0, 0, 0.18)",
      borderGradient:
        "linear-gradient(122.64deg, #FFFFFF 20.34%, rgba(255, 255, 255, 0.1) 103.19%)",
      borderThickness: "1.62px",
      radius: "10px",
      text: "#ffffff",
      widthGrid: "184px",
      heightGrid: 46,
    },

    loadingText: "#1d1d1d",
  },

  // =====================================================
  // REAL CONNECTION SECTION
  // =====================================================
  realConnection: {
    heading: "#0FAFB1",
    text: "#000000",
    bullet: "#FF7A65",
    buttonGradient: "linear-gradient(102.12deg, #68F5FF 0%, #009EAA 100%)",
    buttonHoverGradient:
      "linear-gradient(102.12deg, #5ee8f2 0%, #008c96 100%)",
    imageSrc: "/events/realcon.png",
  },

  // =====================================================
  // MISSING VISION PAGE (Vision + Mission)
  // =====================================================
  missingVisionpage: {
    vision: {
      titleColor: "#000000",
      textColor: "#000000",
      imageRadius: "12px",
    },
    mission: {
      cardBackground:
        "linear-gradient(110deg, #FF7A6B 20%, #FFB47B 100%)",
      cardShadow: "0 10px 30px rgba(0,0,0,0.15)",
      cardRadius: "28px",
      titleColor: "#ffffff",
      textColor: "#ffffff",
      imageRadius: "20px",
    },
  },

  // =====================================================
  // JOY LAB SECTION
  // =====================================================
  joyLab: {
    headingTitle: "#1d1d1d",
    headingSubtitle: "#555555",

    mobileImageBg: "#cccccc",
    mobileImageRadius: "20px",
    mobileCardRadius: "20px",
    mobileCardShadow: "0 15px 30px rgba(0,0,0,0.2)",
    mobileCardText: "#ffffff",

    desktopImageRadius: "20px",
    desktopCardRadius: "20px",
    desktopCardShadow: "0 20px 40px rgba(0,0,0,0.25)",
    desktopCardText: "#ffffff",

    scrollThumb: "rgba(255,255,255,0.4)",
    scrollWidth: "6px",

    cardTitle: "#ffffff",
    cardParagraph: "#ffffff",
    cardBullet: "#ffffff",
    cardDescriptionOpacity: 0.95,
  },

  // =====================================================
  // JOY LAB HIGHLIGHTS SECTION
  // =====================================================
  joyLabHighlights: {
    panelGradient: "linear-gradient(135deg, #FFC56A 0%, #FFAF3D 100%)",
    panelShadow: "0 12px 28px rgba(0,0,0,0.18)",

    pillBg: "rgba(252, 199, 101, 0.66)",
    pillBorder: "2px solid rgba(255,255,255,0.85)",
    pillText: "#ffffff",
    pillShadow: "0 6px 14px rgba(0,0,0,0.12)",
    pillShadowHover: "0 12px 28px rgba(0,0,0,0.25)",

    cardBg: "linear-gradient(135deg, #FFD27D 0%, #FFB347 100%)",
    cardBorder: "1.8px solid rgba(255,255,255,0.9)",
    cardShadow: "0 6px 14px rgba(0,0,0,0.12)",
    cardShadowHover: "0 12px 28px rgba(0,0,0,0.25)",
    cardText: "#ffffff",
  },

  // =====================================================
  // WHY IT MATTERS SECTION
  // =====================================================
  whyItMatters: {
    overlay:
      "linear-gradient(135deg, rgba(233,90,60,0.92), rgba(198,74,45,0.92))",
    cardBorder: "2px solid rgb(255, 255, 255)",
    cardShadow: "0 8px 30px rgba(77, 77, 77, 0.2)",
    title: "#ffffff",
    description: "rgba(255,255,255,0.9)",
  },

  // =====================================================
  // WAYS WE WORK SECTION
  // =====================================================
  waysWeWork: {
    // Title / subtitle
    title: "#1d1d1d",
    subtitle: "#555555",

    // Card base
    cardText: "#ffffff",
    cardBorder: "2px solid rgb(255, 255, 255)",
    cardShadowHover: "0 8px 20px rgba(0,0,0,0.15)",

    // Icon wrapper inside card
    iconBorder: "2px solid rgba(255, 255, 255, 0.5)",
    iconFilter: "brightness(0) invert(1)",

    // Per-card gradients
    cards: [
      {
        bg: "linear-gradient(135deg, #FBBF24, #F59E0B)",
        darkBg: "linear-gradient(135deg, #fac131, #db8d06)",
      },
      {
        bg: "linear-gradient(135deg, #F87171, #EF4444)",
        darkBg: "linear-gradient(135deg, #fc9797, #ec2b2b)",
      },
      {
        bg: "linear-gradient(135deg, #22D3EE, #06B6D4)",
        darkBg: "linear-gradient(135deg, #45d9f0, #02a3c0)",
      },
    ],
  },
  // =====================================================
  // ABOUT GUIDE SECTION
  // =====================================================
  aboutGuide: {
    // Text
    profileTitleColor: "#1d1d1d",
    profileSubtitleColor: "#1d1d1d",
    bodyColor: "#555555",
    bodyBoldColor: "#000000",

    // Image circle
    imageCircleBg: "#B0D4FF",
    imageCircleShadow: "0px 0px 50px 0px #00497F4D",

    // CTA card
    ctaCardBg: "linear-gradient(90deg, #FF7E5F 0%, #FF3D3D 100%)",
    ctaCardShadow: "0 10px 25px rgba(0,0,0,0.15)",
    ctaTextColor: "#ffffff",

    // CTA button box border
    ctaBoxBorderXs: "1px solid rgba(255,255,255,0.7)",
    ctaBoxBorderSm: "2px solid rgba(255,255,255,0.7)",

    // CTA button
    ctaButtonBg: "linear-gradient(100.86deg, #32D7E3 0%, #0C959F 100%)",
    ctaButtonHoverBg: "linear-gradient(100.86deg, #28c9d4 0%, #0a7f87 100%)",
    ctaButtonHoverShadow: "0 8px 20px rgba(0,0,0,0.25)",
    ctaButtonBorderGradient:
      "linear-gradient(106deg, #FFFFFF 34%, rgba(255,255,255,0.1) 105%)",
  },
  // =====================================================
  // WHY AUTHENTIC RELATING SECTION
  // =====================================================
  whyAuthenticRelating: {
    // Heading / subtitle
    headingColor: "#ffffff",
    subheadingColor: "rgba(255,255,255,0.9)",

    // Gradient wrapper
    gradientBg:
      "linear-gradient(135deg, #FFD27D 0%, #FFB347 50%, #FFA726 100%)",
    gradientShadow: "0 12px 30px rgba(0,0,0,0.12)",

    // Card
    cardBg: "linear-gradient(135deg, #FF8A65 0%, #E53935 100%)",
    cardTextColor: "#ffffff",
    cardBorder: "1px solid rgba(255,255,255,0.35)",
    cardShadow: "0 10px 20px rgba(0,0,0,0.2)",
    cardShadowHover: "0 20px 40px rgba(0,0,0,0.25)",

    // Split section
    splitTitleColor: "#1d1d1d",
    splitBodyColor: "#555555",
    bulletTextColor: "#333333",

    // Bullet dot colors (dynamic)
    bulletColors: [
      "#FF6F61",
      "#FFB74D",
      "#42A5F5",
      "#26C6DA",
      "#FFA726",
    ],
  },
  // =====================================================
  // OUR APPROACH SECTION
  // =====================================================
  ourApproach: {
    // Hero banner overlay
    heroOverlay:
      "linear-gradient(135deg, rgba(149,196,255,0.7), rgba(8,126,223,0.7))",
    heroImage: "/WhyItMattersToday.jpg",

    // How We Work wrapper
    howWeWorkBg:
      "linear-gradient(135deg, #FF8A65 0%, #E64A19 100%)",
    howWeWorkShadow: "0 14px 32px rgba(0,0,0,0.18)",

    // How We Work cards
    howWeWorkCardBg:
      "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05))",
    howWeWorkCardBorder: "1.5px solid rgba(255,255,255,0.6)",
    howWeWorkCardBorderHover: "1.5px solid rgba(255,255,255,0.9)",
    howWeWorkCardShadowHover: "0 20px 40px rgba(0,0,0,0.25)",
    howWeWorkCardText: "#ffffff",

    // Core Focus wrapper
    coreWrapperBg: "linear-gradient(135deg, #FFC566, #F9A629)",
    coreTextColor: "#ffffff",

    // Points list container
    pointsContainerBg: "rgba(255,255,255,0.1)",
    pointsContainerBorder: "2px solid rgba(255,255,255,0.8)",

    // Point cards
    pointCardBg: "linear-gradient(135deg, #32D7E3, #0C959F)",
    pointCardShadow: "0 4px 10px rgba(0,0,0,0.15)",
    pointCardShadowHover: "0 8px 20px rgba(0,0,0,0.25)",
    pointCardText: "#ffffff",

    // Image
    coreImageSrc: "/arwork/coretraining.png",
  },
  // ---------------------------------------------------------------------
  podcastSection: {
    title: "#B678F3",
    description: "#444444",
    topTitle: "#B678F3",

    // Left image card
    imageBorder: "3px solid #ffffff",
    imageShadow: "0 10px 30px rgba(0,0,0,0.25)",
    imagePlaceholderBg: "#cfcfcf",
    logoBg: "#ffffff",
    logoShadow: "0 6px 18px rgba(0,0,0,0.20)",

    // Episode cards
    cardBg: "#ffffff",
    cardBorder: "1px solid #eeeeee",
    cardShadow: "0 2px 10px rgba(0,0,0,0.08)",
    cardShadowHover: "0 10px 24px rgba(0,0,0,0.14)",
    episodeImageBg: "#5b3a9c",
    episodeTitle: "#1d1d1d",
    episodeMeta: "#777777",

    // Play pill
    playBg: "#B993DC",
    playHoverBg: "#A57CD0",
    playText: "#ffffff",

    // "View All Episodes" button
    buttonBg: "linear-gradient(135deg, #B58FD8 0%, #9B73C4 100%)",
    buttonHoverBg: "linear-gradient(135deg, #A97FCF 0%, #8D64B8 100%)",
    buttonShadow: "0px 5px 12px rgba(100,60,150,0.30)",
    buttonHoverShadow: "0px 8px 18px rgba(100,60,150,0.40)",
  },
  // =====================================================
  // WHO IT'S FOR SECTION
  // =====================================================
  whoItsFor: {
    heading: "#000000",
    subtitle: "#000000",
    blockTitle: "#1d1d1d",
    body: "#444444",
    accent: "#FF7A5C",

    cardGradient: "linear-gradient(135deg, #FFD27A 0%, #F6A300 100%)",
    cardBorder: "2px solid rgba(255,255,255,0.9)",
    cardBorderHover: "2px solid rgba(255,255,255,1)",
    cardShadow: "0 2px 8px rgba(0,0,0,0.08)",
    cardShadowHover:
      "0 20px 40px rgba(0,0,0,0.18), 0 0 20px rgba(255,255,255,0.2)",
    cardText: "#ffffff",

    imagePlaceholderBg: "#cfcfcf",

    button1Bg: "linear-gradient(100.86deg, #32D7E3 0%, #0C959F 100%)",
    button1HoverBg: "linear-gradient(100.86deg, #2ecad6 0%, #0a7f87 100%)",
    button1BorderGradient:
      "linear-gradient(106.27deg, #FFFFFF 33.98%, rgba(255,255,255,0.1) 105.14%)",
    button1Shadow: "0 10px 25px rgba(0,0,0,0.3)",

    button2Bg: "linear-gradient(91.44deg, #FF826E 0%, #DE472F 100%)",
    button2HoverBg: "linear-gradient(91.44deg, #ff6f5a 0%, #c63d27 100%)",
    button2BorderGradient:
      "linear-gradient(104.35deg, #FFFFFF 2.33%, rgba(255,255,255,0.1) 100.06%)",
    button2Shadow: "0px 5.3px 9.67px 1.32px rgba(0,0,0,0.1)",
    button2ShadowHover: "0 14px 30px rgba(0,0,0,0.25)",
  },
  // =====================================================
  // YOU WILL LEARN TIMELINE SECTION
  // =====================================================
  youWillLearnTimeline: {
    panelText: "#ffffff",
    panelBorderGradient:
      "linear-gradient(to right, rgba(255,255,255,1), rgba(180,180,180,0.8))",
    lineColor: "rgba(255,255,255,0.7)",
    dotColor: "#ffffff",

    // Panel gradients + titles (index-aligned with panelsData)
    panels: [
      {
        gradient: "linear-gradient(135deg, #FFD27D 0%, #FFAE33 100%)",
        title: "You Will Learn To:",
        stagger: 0.08,
      },
      {
        gradient: "linear-gradient(135deg, #95C4FF 0%, #087EDF 100%)",
        title: "Training Includes:",
        stagger: 0.07,
      },
      {
        gradient: "linear-gradient(135deg, #32D7E3 0%, #0C959F 100%)",
        title: "Certification Journey:",
        stagger: 0.1,
      },
    ],
  },
  // =====================================================
  // ADVANCED TRAINING SECTION
  // =====================================================
  advancedTraining: {
    title: "#000000",
    body: "#000000",
    moduleText: "#000000",

    // Module bullet ring colors (index-aligned)
    moduleColors: ["#FF6B6B", "#FFA94D", "#339AF0", "#3EC1C1"],

    // Button
    buttonBg: "linear-gradient(98.48deg, #32D7E3 0%, #0C959F 100%)",
    buttonHoverBg: "linear-gradient(98.48deg, #32D7E3 0%, #0C959F 100%)",
    buttonText: "#ffffff",
    buttonBorderGradient:
      "linear-gradient(106deg, #FFFFFF 34%, rgba(255,255,255,0.1) 105%)",
    buttonShadowHover: "0 12px 25px rgba(0,0,0,0.25)",

    // Card
    cardShadow: "0 20px 40px rgba(0,0,0,0.1)",
    cardOverlay:
      "linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 50%)",
    cardRadius: "12px",
    cardImage: "/facilitation/alreadyfacilitating.png",
    cardOverlayText: "#ffffff",
  },
  // =====================================================
  // COMMUNITY SECTION
  // =====================================================
  community: {
    imagePlaceholderBg: "#cfcfcf",
    cardWrapperGradient: "linear-gradient(135deg, #FF826E 0%, #DE472F 100%)",
    cardWrapperShadow: "0 12px 30px rgba(0,0,0,0.12)",
    headingText: "#ffffff",
    cardGradient: "linear-gradient(135deg, #FFC566 0%, #F9A629 100%)",
    cardText: "#ffffff",
    cardShadow: {
      xs: "0 4px 8px rgba(0,0,0,0.15)",
      sm: "0 6px 12px rgba(0,0,0,0.18)",
      md: "0 8px 16px rgba(0,0,0,0.2)",
    },
    sectionTitleText: "#1a1a1a",
    sectionDescriptionText: "#555555",
    loadingText: "#555555",
  },
  authenticRelatingPage: {
    heroGradient: "linear-gradient(100deg, #FF826E 0%, #DE472F 100%)",
    heroText: "#ffffff",
    heroLogoBg: "#9fcbf0",
    heroLogoBorder: "2px solid #ffffff",
    heroLogoShadow: "0px 2px 8px rgba(0,0,0,0.15)",

    offeringsGradient: "linear-gradient(135deg, #95C4FF 0%, #087EDF 100%)",
    offeringsShadow: "0 12px 30px rgba(0,0,0,0.12)",


    cardGradient: "linear-gradient(135deg, #FFC566 0%, #F9A629 100%)",
    cardText: "#ffffff",
    cardBorder: "1px solid rgba(255,255,255,0.35)",
    cardShadow: "0 10px 20px rgba(0,0,0,0.2)",
    cardShadowHover: "0 20px 40px rgba(0,0,0,0.3)",

    topicsTitleColor: "#1d1d1d",
    topicItemTitleColor: "#1E88E5",
    topicItemDescColor: "#666666",
    topicItemBorder: "1px solid #eeeeee",
    topicItemShadow: "0 2px 6px rgba(0,0,0,0.06)",
  },
  // =====================================================
  // AUTHENTIC RELATING HERO (Speaking & Media Kit)
  // =====================================================
  authenticRelatingHero: {
    // ---- Hero red panel ----
    heroPanelBg: "linear-gradient(100deg, #FF826E 0%, #DE472F 100%)",
    heroPanelRadius: "20px",
    heroPanelMx: { xs: 2, md: 4 },
    heroPanelPx: { xs: 3, md: 10, lg: 12 },
    heroPanelPt: { xs: 6, md: 10, lg: 12 },
    heroPanelPb: 2,

    // ---- Floating oval logo ----
    logoBg: "#9fcbf0ff",
    logoBorder: "2px solid white",
    logoShadow: "0px 2px 8px rgba(0,0,0,0.15)",
    logoWidth: { xs: "140px", sm: "240px", md: "300px", lg: "380px", xl: "450px" },
    logoHeight: { xs: "60px", sm: "85px", md: "100px", lg: "150px", xl: "160px" },
    logoInnerWidth: { xs: "100px", sm: "160px", md: "200px", lg: "280px", xl: "550px" },
    logoInnerHeight: { xs: "40px", sm: "65px", md: "65px", lg: "70px", xl: "80px" },

    // ---- Hero body copy ----
    bodyColor: "#ffffff",

    // ---- Blue "Core Offerings" panel ----
    offeringsPanelBg: "linear-gradient(135deg, #95C4FF 0%, #087EDF 100%)",
    offeringsPanelRadius: "20px",
    offeringsPanelPadding: { xs: 3, sm: 4, md: 6 },
    offeringsPanelShadow: "0 12px 30px rgba(0,0,0,0.12)",
    offeringsTitleColor: "#ffffff",

    // ---- Offering card (orange gradient) ----
    offeringCardBg: "linear-gradient(135deg, #FFC566 0%, #F9A629 100%)",
    offeringCardBorder: "1px solid rgba(255,255,255,0.35)",
    offeringCardShadow: "0 10px 20px rgba(0,0,0,0.2)",
    offeringCardShadowHover: "0 20px 40px rgba(0,0,0,0.3)",
    offeringCardText: "#ffffff",

    // ---- Signature topics list ----
    topicsTitleColor: "#1E88E5",
    topicsDescColor: "#666666",
    topicsPaperBorder: "1px solid #eeeeee",
    topicsPaperShadow: "0 2px 6px rgba(0,0,0,0.06)",
  },
  // =====================================================
  // FOUNDER INTRO SECTION
  // =====================================================
  founderIntro: {
    // ---- Outer wrapper ----
    containerPy: { xs: 4 },
    panelHeight: { xs: 820, sm: 380, md: 380, lg: 650 },
    panelRadius: 5,
    panelBgImage: "url('/Pasted.png')",
    panelPaddingX: 3,

    // ---- Overlay gradients ----
    overlayGradient: "linear-gradient(135deg, #FF826E, #DE472F)",
    overlayOpacity: 0.8,
    groupBgImage: "url('/group-bg.jpg')",
    groupBgOpacity: 0.25,

    // ---- Content grid ----
    gridColumns: { xs: "1fr", sm: "1.4fr 0.6fr" },
    gridGap: { xs: 4, md: 6 },

    // ---- Founder photo (circle) ----
    photoBg: "#ffffff",
    photoShadow: "0px 0px 50px 0px #00497F4D",
    photoSize: {
      xs: 180,   // Phone
      sm: 180,   // Small tablet
      md: 220,   // Tablet
      lg: 300,   // Laptop
      xl: 400,   // Large screen
    },
    photoMb: { xs: 1.5, sm: 2, md: 2, lg: 2, xl: 3 },
    photoMt: { xs: 0, sm: 2 },

    // Inner (clipped) photo container
    photoInnerWidth: "95%",
    photoInnerHeight: "90%",
    photoInnerMarginTop: {
      xs: "13px",
      sm: "15px",
      md: "18px",
      lg: "25px",
      xl: "38.8px",
    },

    // Mobile-only inner photo (large offset)
    photoMobileInnerWidth: "990%",
    photoMobileInnerHeight: "950%",
    photoMobileMarginTop: "140px",
    photoMobileMarginLeft: "-30px",
    photoMobileMarginRight: "-20px",

    // ---- Text colors ----
    textColor: "#ffffff",
    textMuted: "rgba(255,255,255,0.9)",
  },

  // =====================================================
  // AUTHENTIC RELATING SECTION
  // =====================================================
  authenticRelatingSection: {
    title: "#000000",
    subtitle: "#000000",
    headingRight: "#1d1d1d",
    paragraph: "#555555",
    imageRadius: 2,
  },
  // =====================================================
  // AUTHENTIC RELATING PAGE (Speaking & Media Kit)
  // =====================================================
  authenticRelatingPage: {
    // ---- Hero red panel ----
    heroGradient: "linear-gradient(100deg, #FF826E 0%, #DE472F 100%)",
    heroText: "#ffffff",
    heroLogoBg: "#9fcbf0",
    heroLogoBorder: "2px solid #ffffff",
    heroLogoShadow: "0px 2px 8px rgba(0,0,0,0.15)",

    // ---- Core offerings blue panel ----
    offeringsGradient: "linear-gradient(135deg, #95C4FF 0%, #087EDF 100%)",
    offeringsShadow: "0 12px 30px rgba(0,0,0,0.12)",
    offeringsTitle: "#ffffff",

    // ---- Offering card (orange) ----
    cardGradient: "linear-gradient(135deg, #FFC566 0%, #F9A629 100%)",
    cardText: "#ffffff",
    cardBorder: "1px solid rgba(255,255,255,0.35)",
    cardShadow: "0 10px 20px rgba(0,0,0,0.2)",
    cardShadowHover: "0 20px 40px rgba(0,0,0,0.3)",

    // ---- Signature topics ----
    topicsTitleColor: "#1d1d1d",
    topicItemTitleColor: "#1E88E5",
    topicItemDescColor: "#666666",
    topicItemBorder: "1px solid #eeeeee",
    topicItemShadow: "0 2px 6px rgba(0,0,0,0.06)",
  },
  // =====================================================
  // FRAMEWORK HERO SECTION
  // =====================================================
  frameworkHero: {
    title: "#0077D1",
    description: "#000000",
    bodyTitle: "#000000",
    author: "#000000",
    bodyText: "#000000",
  },
  // =====================================================
  // FIVE DIMENSIONS PAGE
  // =====================================================
  fiveDimensions: {
    sectionPt: { xs: 2 },
    sectionPb: { xs: 2, md: 3 },
    rowMb: { xs: 6, md: 10 },
    title: "#1a1a1a",
    description: "#444444",
    quote: "#666666",
    quoteBorder: "#40E0D0",
    imagePlaceholderBg: "#6d6c6c",
    cardBg: "#6d6c6c",
    titleFontSize: { xs: "24px", md: "34px", lg: "38px" },
    titleLineHeight: { xs: "30px", md: "40px" },
    titleMb: 1.5,
    descriptionFontSize: { xs: "14px", md: "16px", lg: "17px" },
    descriptionLineHeight: { xs: "22px", md: "24px", lg: "26px" },
    quoteFontSize: { xs: "13px", md: "15px", lg: "16px" },
    quoteLineHeight: { xs: "20px", md: "24px", lg: "26px" },
    quotePl: 2,
    quoteBorderWidth: "3px",
    quoteMt: 1,
    textGap: { xs: 1.5, md: 2 },
    imageHeight: { xs: 240, md: 420, lg: 500 },
    imageRadius: "16px",
    textPx: { xs: 0.5, sm: 1, md: 0 },
    gridColumnSpacing: { xs: 0, md: 6, lg: 10 },
    gridRowSpacing: { xs: 3, sm: 4, md: 0 },
  },
  // =====================================================
  // WHAT YOU WILL FIND INSIDE
  // =====================================================
  whatYouWillFindInside: {
    // ---- Top panel ----
    panelGradient: "linear-gradient(98.89deg, #FFC566 0%, #F9A629 100%)",
    panelBorder: "2px solid transparent",
    panelBorderGradient:
      "linear-gradient(110deg, #FFFFFF 0%, rgba(255,255,255,0.95) 35%, #D6D6D6 100%)",
    panelRadius: "44px",

    // ---- Heading ----
    heading: "#ffffff",

    // ---- Info card ----
    cardBorder: "2px solid transparent",
    cardBorderGradient: "linear-gradient(98.89deg, #FFC566 0%, #F9A629 100%)",
    cardBg:
      "linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
    cardBackdropFilter: "blur(138.4px)",
    cardBoxShadow: "0px 4px 7.3px 1px rgba(0,0,0,0.10)",
    cardRadius: "24px",
    cardText: "#ffffff",

    cardSkew: "skewX(-10deg)",
    cardSkewChild: "skewX(10deg)",
    cardSkewHover: "skewX(0deg) translateY(-4px)",

    // ---- CTA banner ----
    ctaGradient: "linear-gradient(91.44deg, #FF826E 0%, #DE472F 100%)",
    ctaBorderGradient:
      "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 30%, rgba(255,123,123,0.65) 70%, rgba(255,99,99,0.85) 100%)",
    ctaRadius: "30px",
    ctaText: "#ffffff",

    // ---- Buttons ----
    btnGlassBorderGradient:
      "linear-gradient(106.27deg, #FFFFFF 33.98%, rgba(255,255,255,0.1) 105.14%)",
    btnGlassBg: "rgba(255,255,255,0.1)",
    btnGlassBgHover: "rgba(255,255,255,0.15)",

    btnWorkshopGradient: "linear-gradient(98.89deg, #FFC566 0%, #F9A629 100%)",
    btnWorkshopHover: "linear-gradient(135deg, #FFB738, #F0951E)",

    btnCourseGradient: "linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)",
    btnCourseHover: "linear-gradient(135deg, #7BB3FF, #0669C7)",
  },
  // =====================================================
  // AUTHENTIC RELATING HERO (Speaking & Media Kit)
  // =====================================================
  authenticRelatingHero: {
    heroPanelBg: "linear-gradient(100deg, #FF826E 0%, #DE472F 100%)",
    heroPanelRadius: "20px",
    heroPanelMx: { xs: 2, md: 4 },
    heroPanelPx: { xs: 3, md: 10, lg: 12 },
    heroPanelPt: { xs: 6, md: 10, lg: 12 },
    heroPanelPb: 2,

    logoBg: "#9fcbf0ff",
    logoBorder: "2px solid white",
    logoShadow: "0px 2px 8px rgba(0,0,0,0.15)",
    logoWidth: { xs: "140px", sm: "240px", md: "300px", lg: "380px", xl: "450px" },
    logoHeight: { xs: "60px", sm: "85px", md: "100px", lg: "150px", xl: "160px" },
    logoInnerWidth: { xs: "100px", sm: "160px", md: "200px", lg: "280px", xl: "550px" },
    logoInnerHeight: { xs: "40px", sm: "65px", md: "65px", lg: "70px", xl: "80px" },

    bodyColor: "#ffffff",

    offeringsPanelBg: "linear-gradient(135deg, #95C4FF 0%, #087EDF 100%)",
    offeringsPanelRadius: "20px",
    offeringsPanelPadding: { xs: 3, sm: 4, md: 6 },
    offeringsPanelShadow: "0 12px 30px rgba(0,0,0,0.12)",
    offeringsTitleColor: "#ffffff",

    offeringCardBg: "linear-gradient(135deg, #FFC566 0%, #F9A629 100%)",
    offeringCardBorder: "1px solid rgba(255,255,255,0.35)",
    offeringCardShadow: "0 10px 20px rgba(0,0,0,0.2)",
    offeringCardShadowHover: "0 20px 40px rgba(0,0,0,0.3)",
    offeringCardText: "#ffffff",

    topicsTitleColor: "#1E88E5",
    topicsDescColor: "#666666",
    topicsPaperBorder: "1px solid #eeeeee",
    topicsPaperShadow: "0 2px 6px rgba(0,0,0,0.06)",
  },
  // =====================================================
  // COMMUNITY UNIQUE SECTION
  // =====================================================
  // =====================================================
  // COMMUNITY UNIQUE SECTION
  // =====================================================
  communityUnique: {
    topBoxGradient: "linear-gradient(135deg, #32D7E3, #0C959F)",
    topBoxBorder: "2px solid rgba(255,255,255,0.8)",
    topBoxShadow: "0 8px 32px rgba(0,0,0,0.2)",
    topBoxText: "#ffffff",

    rightPanelBg: "rgba(255, 255, 255, 0.3)",
    rightPanelBorder: "2px solid rgba(255,255,255,0.8)",

    coachingCardGradient: "linear-gradient(135deg, #FFC566, #F9A629)",
    coachingCardShadow: "0 4px 10px rgba(0,0,0,0.15)",

    // ---- Meet Your People banner ----
    meetImage: "/WhyItMattersToday.jpg",
    meetOverlay: "linear-gradient(135deg, #95C4FF, #087EDF)",
    meetOverlayOpacity: 0.8,
    meetText: "#ffffff",

    // Primary button (UPDATED GRADIENT HERE)
    primaryButtonGradient: "linear-gradient(98.89deg, #FFC566 0%, #F9A629 100%)",
    primaryButtonBorder: "2px solid rgba(255,255,255,0.6)",
    primaryButtonText: "#ffffff",

    // Secondary button
    // Secondary button
    secondaryButtonGradient: "linear-gradient(135deg, #F47A5E, #D84315)", // Keep the background
    secondaryButtonBorderGradient: "linear-gradient(104.35deg, #FFFFFF 2.33%, rgba(255, 255, 255, 0.1) 100.06%)", // 👈 New gradient border
    secondaryButtonText: "#ffffff",

    finalImage: "/community/communitycaya.png",
    finalImageOverlay: "rgba(0,0,0,0.15)",
    finalImageRadius: 3,

    finalTitleText: "#000000",
    finalBodyText: "#444444",
  },
  // =====================================================
  // COMMUNITY HERO SECTION
  // =====================================================
  communityHero: {
    imageSrc: "/hero/community.png",
    imageAlt: "Founder Hero",
    imageFit: "cover",
    imagePosition: "object-center",
  },
  // =====================================================
  // BECOME A CERTIFIED SECTION
  // =====================================================
  becomeACertified: {
    heroTitle: "#ffffff",
    heroBody: "rgba(255,255,255,0.9)",
    heroOverlay:
      "linear-gradient(135deg, rgba(233,90,60,0.92), rgba(198,74,45,0.92))",
    heroImage: "/WhyItMattersToday.jpg",

    overviewTitle: "#000000",
    overviewItem: "#000000",
    overviewImageBg: "#cccccc",
    overviewImage: "/facilitation/facilitationtraining.png",
    overviewImageShadow: "0 20px 40px rgba(0,0,0,0.1)",
    overviewImageShadowHover: "0 25px 50px rgba(0,0,0,0.15)",
  },
  // =====================================================
  // WHAT IS AUTHENTIC SECTION
  // =====================================================
  whatIsAuthentic: {
    title: "#ffffff",
    body: "#ffffff",
    subText: "#ffffff",
    bulletText: "#ffffff",
    footer: "#ffffff",
    cardGradient: "linear-gradient(135deg, #8EC5FC 0%, #1D8CF8 100%)",
    cardBorder: "2px solid rgba(255,255,255,0.6)",
    cardShadow: "0 20px 40px rgba(0,0,0,0.15)",
    greyPanelOverlay: "rgba(0,0,0,0.2)",
    greyPanelImage: "/facilitation/arfacilitation.png",
    bulletDotGradient: "linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)",
    bulletDotBorder: "#ffffff",
  },
  // =====================================================
  // FACILITATION HEADER SECTION
  // =====================================================
  facilitationHeader: {
    sectionTitle: "#1a1a1a",
    body: "#555555",
    imageRadius: "12px",
  },
  // =====================================================
  // LEADERSHIP SECTION
  // =====================================================
  leadership: {
    itemTitle: "#1a1a1a",
    itemDescription: "#444444",
    richDescHeading: "#1a1a1a",
    richDescBulletBorder: "#2196F3",
    imagePlaceholderBg: "#d0d0d0",
    imagePlaceholderBgEmpty: "#e0e0e0",

    ctaGradient: "linear-gradient(90deg, #F56C6C 0%, #F4A679 100%)",

    ctaRightBg: "rgba(255, 255, 255, 0.12)",
    ctaRightBorderGradient:
      "linear-gradient(106.27deg, #FFFFFF 33.98%, rgba(255,255,255,0.1) 105.14%)",
    ctaRightShadow: "0 8px 30px rgba(0,0,0,0.15)",

    coachingCardGradient:
      "linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)",
    coachingCardShadow: "0px 2.96px 5.4px 0.74px rgba(0,0,0,0.1)",
  },
  // =====================================================
  // REAL RESULTS SECTION
  // =====================================================
  realResults: {
    impactTitleColor: "#1d1d1d",
    impactBodyColor: "#444444",
    bulletTextColor: "#555555",
    reimaginedTitleColor: "#1d1d1d",
    reimaginedBodyColor: "#444444",

    ctaBg: "linear-gradient(135deg, #FFD27A 0%, #FFB347 50%, #FFA726 100%)",
    ctaShadow: "0 10px 25px rgba(0,0,0,0.15)",
    ctaTextColor: "#ffffff",

    ctaButtonBg: "linear-gradient(135deg, #F37A60, #E4452F)",
    ctaButtonHoverBg: "linear-gradient(135deg, #E96A4F, #D93C2A)",
    ctaButtonShadow: "0px 10px 25px rgba(0,0,0,0.25)",
    ctaButtonBorderGradient:
      "linear-gradient(106deg, #FFFFFF 34%, rgba(255,255,255,0.1) 105%)",
  },
  // =====================================================
  // AUTHENTIC RELATING HEADER SECTION
  // =====================================================
  authenticRelatingHeader: {
    headingColor: "#1d1d1d",
    subheadingColor: "#555555",
    servicesColor: "#1d1d1d",
    textColumnTitleColor: "#1d1d1d",
    textColumnBodyColor: "#444444",

    // Card
    cardBg: "#6d6c6c",
  },
  // =====================================================
  // PLAYGROUND SECTION
  // =====================================================
  // =====================================================
  // PLAYGROUND SECTION
  // =====================================================
  playground: {
    greyPanelOverlay: "rgba(0,0,0,0.2)",
    greyPanelImage: "/joylab/joyfullconnection.png",

    // 👇 Figma: blue gradient
    cardGradient: "linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)",

    // 👇 Figma: solid white 2px border
    cardBorder: "2px solid #FFFFFF",

    cardShadow: "0 20px 40px rgba(0,0,0,0.15)",
    cardText: "#ffffff",
    titleColor: "#ffffff",
    descriptionColor: "#ffffff",
    descriptionOpacity: 0.95,
  },

  // =====================================================
  // ANCIENT ORIGINS SECTION
  // =====================================================
  ancientOrigins: {
    headerBackground: "linear-gradient(90deg, #93C5FD, #1D4ED8)",
    headerBorder: "2px solid rgb(255, 255, 255)",
    headerShadow: "0 8px 30px rgba(0,0,0,0.2)",
    headerText: "#ffffff",
    cardBackground: "linear-gradient(135deg, #FDBA74, #F59E0B)",
    cardBorder: "2px solid rgb(255, 255, 255)",
    cardShadow: "0 8px 30px rgba(0,0,0,0.2)",
    cardTitleText: "#ffffff",
    circleBackground: "rgba(255,255,255,0.08)",
    circleBackdropBlur: "blur(6px)",
    circleBackdropBlurXs: "blur(2px)",
    circleText: "#ffffff",
    borderColors: [
      "#53D2DB", "#FFE8C5", "#FE826D", "#3196E2",
      "#53D2DB", "#FFE8C5", "#FE826D",
      "#F87171", "#3196E2", "#FFE8C5", "#3196E2",
    ],
    borderFallback: "#53D2DB",
    dotActive: "#ffffff",
    dotInactive: "rgba(255,255,255,0.4)",
  },
  // =====================================================
  // AUTHENTIC RELATING SECTION
  // =====================================================
  authenticRelatingSection: {
    title: "#000000",
    subtitle: "#000000",
    headingRight: "#000000",
    paragraph: "#555555",
    imageRadius: 2,
  },
  // =====================================================
  // AUTHENTIC RELATING UI (page section)
  // =====================================================
  authenticRelatingUI: {
    introBg: "linear-gradient(180deg, #F7B548 0%, #F3A332 100%)",
    introTitle: "#ffffff",
    introBody: "rgba(255,255,255,0.95)",
    imagePlaceholderBg: "#cfcfcf",
    body: "#555555",
    titleColors: [
      "#F9998D",
      "#00B9C7",
      "#458001",
      "#0077D1",
      "#FF9916",
      "#B678F3",
    ],
  },
  // =====================================================
  // PRINCIPLES OF AUTHENTIC RELATING (page section)
  // =====================================================
  principlesOfAuthenticRelating: {
    sectionBg: "#D6D6D6",
    title: "#0077D1",
    subtitle: "#000000",
    body: "#000000",
    cardBg: "#cfcfcf",
    cardShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  // =====================================================
  // OFFERINGS INNER DETAIL PAGE
  // =====================================================
  offeringsInnerDetail: {
    title: "#0077D1",
    description: "#4B5563",
    relatedEventsTitle: "#444444",
    viewAll: "#0077D1",
    viewAllHover: "#0055A0",
    bulletBg: "#3096E1",
    bulletText: "#ffffff",
    eventCardBackground:
      "linear-gradient(100deg,#3B82C4 0%,#7FB3E6 25%,#9EC5EA 45%,#f4edfb 100%,#ffffff 90%)",
    eventCardBorder: "rgba(255,255,255,0.6)",
    eventCardHoverShadow: "0 20px 40px rgba(0,0,0,0.2)",
    eventText: "#ffffff",
    eventTextMuted: "rgba(255,255,255,0.9)",
    eventImageBg: "#ffffff",
  },
};

export default colors;