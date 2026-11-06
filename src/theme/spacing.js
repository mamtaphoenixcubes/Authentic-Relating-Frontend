// src/theme/spacing.js - Complete with all sections referenced in theme.js

const spacing = {
  // Numeric scale (used as spacing[1], spacing[2], etc.)
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  8: 8,
  10: 10,
  12: 12,
  14: 14,
  15: 15,

  // =========================================================
  // FEATURES SECTION
  // =========================================================
  featuresSection: {
    containerPadding: { xs: 2, sm: 3, md: 4, lg: 6 },
    containerPy: { xs: 4, sm: 6, md: 8, lg: 10 },
    headerMb: { xs: 3, md: 5 },
    cardPadding: {
      px: { xs: 2, sm: 2.5, md: 3 },
      py: { xs: 2, sm: 2.5, md: 3 },
    },
    cardHeight: { xs: "auto", sm: 180, md: 200 },
    iconSize: { xs: 48, sm: 56, md: 64 },
    dividerHeight: { xs: 40, md: 60 },
    dividerMargin: { xs: 1.5, md: 2.5 },
  },

  // =========================================================
  // GIFTS SECTION
  // =========================================================
  gifts: {
    sectionY: { xs: 16, sm: 24, md: 32 },
    headerBottom: { xs: 12, sm: 16, md: 24 },
    gridGap: { xs: 16, sm: 20, md: 24 },
    categoryBottom: { xs: 8, sm: 12, md: 16 },
    imageHeight: { xs: 140, sm: 150, md: 160 },
    imageHoverHeight: { xs: 160, sm: 170, md: 180 },
    cardMargin: { xs: 8, sm: 8, md: 8 },
    contentPadding: { xs: 16, sm: 16, md: 16 },
    buttonHeight: { xs: 40, sm: 42, md: 42 },
    modalPadding: { xs: 16, sm: 16, md: 16 },
    audioPaddingY: { xs: 20, sm: 24, md: 24 },
    audioPaddingX: { xs: 16, sm: 24, md: 24 },
  },

  // =========================================================
  // WHO IT'S FOR
  // =========================================================
  whoItsFor: {
    sectionPy: { xs: 1, md: 1.5 },
    headingMb: 1,
    subtitleMb: 4,
    subtitleMaxWidth: 520,
    pillsGridSpacing: 2,
    pillHeight: { xs: 100, sm: 100, md: 100, lg: 150 },
    pillMaxWidth: { xs: "100%", sm: 200, md: 200, lg: 280 },
    pillRadius: "12px",
    pillPaddingX: { xs: 2, sm: 1.5, md: 2, lg: 4 },
    pillHoverTranslateY: -8,
    contentPx: { xs: 1.5, sm: 2, md: 3 },
    contentPy: { xs: 1.5, sm: 2, md: 3 },
    blockGridSpacing: { xs: 3, sm: 4, md: 6 },
    blockGridMb: { xs: 6, md: 10 },
    textBoxMaxWidth: 520,
    textBoxPaddingX: { xs: 2, sm: 0 },
    blockTitleMb: 2,
    bodyMb: 3,
    bodyMaxWidth: 950,
    bodyMaxWidthSmall: 450,
    accentMb: 0,
    buttonStackSpacing: 2,
    buttonHeight: { xs: "48px", sm: "42px", md: "48px" },
    buttonPaddingX: { xs: 2.5, sm: 2.5 },
    buttonMaxWidth: { xs: "260px", sm: "180px", md: "220px", lg: "280px" },
    buttonRadius: "12px",
    imageCardMaxWidth: 720,
    imageCardHeight: { xs: 220, sm: 300, md: 420 },
    imageCardRadius: "14px",
    imageCardPlaceholderBg: "#cfcfcf",
    imageCardShadowHover: "0 20px 40px rgba(0,0,0,0.15)",
  },

  // =========================================================
  // LEADERSHIP
  // =========================================================
  leadership: {
    sectionPy: { xs: 4, sm: 6, md: 8, lg: 10 },
    sectionPb: { xs: 1, md: 1.5 },

    itemRowGap: { xs: 3, md: 5, lg: 6 },
    itemRowMb: { xs: 5, md: 8 },
    imageHeight: { xs: 260, sm: 320, md: 380, lg: 440 },
    itemMinHeight: { md: 420, lg: 480 },
    imageCardRadius: "20px",
    imagePlaceholderBg: "#e8e8e8",
    imagePlaceholderBgEmpty: "#f0f0f0",
    imageCardShadow: "0 8px 30px rgba(0,0,0,0.1)",
    imageCardShadowHover: "0 16px 50px rgba(0,0,0,0.18)",
    textColumnRadius: "16px",
    textColumnPadding: { xs: 2, md: 3, lg: 4 },
    itemTitleMb: { xs: 1.5, md: 2 },
    richDescriptionMb: 2,
    richDescParagraphMb: 1.5,
    richDescHeadingMb: 1.5,
    richDescHeadingMt: 2,
    richDescBulletGap: 1.5,
    richDescBulletMb: 1,
    richDescBulletSize: 8,
    richDescBulletBorder: 2,
    richDescBulletMt: "6px",

    ctaContainerMt: { xs: 4, md: 6 },
    ctaContainerMb: { xs: 1, md: 1.5 },

    ctaBannerPadding: { xs: 3, sm: 4, md: 5, lg: 6 },
    ctaBannerRadius: "20px",
    ctaRightRadius: "20px",
    ctaHeadingMb: { xs: 1.5, md: 2 },
    ctaLeftPadding: { xs: 0, md: 2 },
    ctaImageMt: 2,
    ctaImageHeight: { xs: 180, md: 480 },
    ctaImageRadius: "16px",
    ctaRightPadding: { xs: 2.5, md: 3.5 },
    ctaRightGap: { xs: 2, md: 2.5 },
    coachingHeadingMb: { xs: 2, md: 3 },
    coachingCardRadius: "14px",
    coachingCardPadding: { xs: 2, md: 2.5 },
    coachingCardDescMt: 0.5,
  },

  // =========================================================
  // REAL RESULTS
  // =========================================================
  // =========================================================
  // REAL RESULTS
  // =========================================================
  realResults: {
    sectionPy: { xs: 2, md: 5 },
    grid1Spacing: { xs: 2, sm: 3, md: 4 },
    grid1Mb: { xs: 4, md: 6 },
    mobileCardMb: 3,
    mobileCardWidth: {
      xs: "280px",
      "@media (min-width: 374px) and (max-width: 424px)": "340px",
      "@media (min-width: 425px) and (max-width: 599px)": "380px",
    },
    mobileCardHeight: {
      xs: "170px",
      "@media (min-width: 374px) and (max-width: 424px)": "160px",
      "@media (min-width: 425px) and (max-width: 599px)": "180px",
    },
    mobileCardRadius: "12px",
    impactTitleMb: 1.5,
    impactBodyMb: 2,
    impactBodyMaxWidth: 620,
    bulletStackSpacing: 2,
    bulletStackMaxWidth: 566,
    bulletGap: 2,                    // 👈 was 1.5 — more room next to 28px dot
    bulletDotSize: 28,               // 👈 was 16  — Figma: 28
    bulletDotBorder: "4px",          // 👈 was "3px" — Figma: 4px
    bulletDotMt: "2px",              // 👈 was "4px" — vertical centering
    desktopCardWidth: { sm: "380px", md: "460px", lg: "780px" },
    desktopCardHeight: { sm: "340px", md: "360px", lg: "420px" },
    desktopCardRadius: "12px",
    grid2Spacing: { xs: 3, sm: 3, md: 4 },
    reimaginedTextPx: { xs: 2, sm: 5 },
    reimaginedTitleMb: { xs: 2, sm: 1.5 },
    reimaginedBodyMb: 2,
    reimaginedBodyMaxWidth: { xs: "100%", sm: 620 },
    ctaContainerMy: { xs: 6, md: 10 },
    ctaBannerRadius: { xs: "20px", md: "28px" },
    ctaBannerPx: { xs: 3, sm: 5, md: 8 },
    ctaBannerPy: { xs: 4, sm: 5, md: 6 },
    ctaInnerMaxWidth: { xs: "100%", md: "720px" },
    ctaTitleMb: 2,
    ctaBodyMb: 2,
    ctaBodyLastMb: 3,
    ctaButtonPx: { xs: 6, md: 10 },
    ctaButtonPy: { xs: 2.5, md: 3 },
    ctaButtonRadius: "10px",
    ctaButtonMaxWidth: 360,
  },

  // =========================================================
  // MISSING VISION PAGE
  // =========================================================
  missingVisionpage: {
    pagePy: { xs: 4, sm: 6, md: 8 },
    vision: {
      gridSpacing: { xs: 3, md: 5 },
      gridMarginBottom: { xs: 6, md: 10 },
      imageHeight: { xs: 240, sm: 320, md: 420 },
      imageRadius: "16px",
      textAlign: "left",
      textPaddingX: { xs: 0, md: 2 },
      titleMarginBottom: { xs: 2, md: 3 },
      paragraphMarginBottom: 2,
    },
    mission: {
      flexGap: { xs: 3, md: 5 },
      cardPadding: { xs: 2, sm: 3, md: 4 },
      cardRadius: "16px",
      cardMinHeight: { xs: "auto", md: 420 },
      mobileImageHeight: 240,
      mobileImageMarginBottom: 3,
      titleMarginBottom: { xs: 1.5, md: 2 },
      paragraphMarginBottom: 2,
      listPaddingLeft: 3,
      listItemMarginBottom: 1,
      finalLineMarginTop: 2,
      desktopImageHeight: { md: 420, lg: 480 },
      desktopImageMarginTop: { xs: 0, md: 0 },
    },
  },

  // =========================================================
  // CLIENT TESTIMONIAL
  // =========================================================
  clientTestimonial: {
    sectionY: { xs: 4, md: 8 },
    headerBottom: { xs: 3, md: 5 },
    textBottom: { xs: 2, md: 3 },
  },

  // =========================================================
  // AUTHENTIC RELATING (old card)
  // =========================================================
  authenticRelating: {
    cardMinHeight: { xs: "auto", md: 620 },
    padding: { xs: "24px", md: "40px" },
    borderRadius: "24px",
  },

  // =========================================================
  // CONNECTION / PODCASTS SECTION
  // =========================================================
  connection: {
    // Section rhythm — no top padding (WeTalkAbout handles the transition)
    sectionY: { xs: 4, sm: 5, md: 6, lg: 8, xl: 10 },
    sectionPt: 0,
    sectionPb: { xs: 4, sm: 5, md: 6, lg: 8, xl: 10 },

    // Grid layout
    gridSpacing: { xs: 2, sm: 3, md: 3 },

    // Grid card
    gridCardHeight: { xs: 320, sm: 340, md: 360, lg: 400 },
    gridCardContentPadding: { xs: 1, sm: 1.2, md: 1.5 },

    // Events button
    eventsButton: {
      radiusGrid: '10px',
    },
  },

  // =========================================================
  // AUTHENTIC RELATING HERO (Speaking & Media Kit)
  // =========================================================
  authenticRelatingHero: {
    sectionPt: { xs: 8, md: 15, lg: 15 },
    offeringsMt: { xs: 5, sm: 8 },
    topicsPy: { xs: 6, md: 8 },

    cardsGridSpacing: { xs: 2, sm: 3, md: 3 },

    offeringCardMaxWidth: { xs: 320, sm: 250, md: 280, lg: 400, xl: 400 },
    offeringCardHeight: { xs: 280, sm: 220, md: 220, lg: 300, xl: 300 },
    offeringCardRadius: "15px",
    offeringCardPaddingX: { xs: 1.5, sm: 1, md: 1.5, lg: 2, xl: 2.5 },
    offeringCardPaddingY: { xs: 1.5, sm: 1, md: 1.5, lg: 2, xl: 2.5 },

    offeringIconSize: { xs: 50, sm: 35, md: 40, lg: 50, xl: 55 },
    offeringIconMb: { xs: 1.5, sm: 1, md: 1.5, lg: 2, xl: 2.5 },

    offeringTitleMb: { xs: 0.75, sm: 0.5, md: 0.75, lg: 1, xl: 1.25 },

    topicsStackSpacing: 2,
    topicsPaperPadding: { xs: 2.5, sm: 3 },
    topicsPaperRadius: "10px",
    topicsTitleMb: 1,
  },

  // =========================================================
  // FOUNDER INTRO SECTION
  // =========================================================
  founderIntro: {
    containerPy: { xs: 4 },
    paragraphMb: { xs: 2, md: 2.5 },
    signatureMt: { xs: 1, md: 1.5 },
    nameMt: { xs: 0, sm: 2 },
    textMaxWidth: {
      xs: "100%",
      sm: 720,
      md: 900,
      lg: 1024,
    },
  },

  // =========================================================
  // AUTHENTIC RELATING SECTION
  // =========================================================
  authenticRelatingSection: {
    titleMb: { xs: 1.5, md: 2 },
    headerMaxWidth: 1020,
    columnsFlexDir: { xs: "column", sm: "row" },
    columnsGap: { xs: 4, md: 6 },
    columnsMb: { xs: 4, md: 6 },
    imageHeight: { xs: 240, sm: 400, md: 480 },
    imageWidth: { xs: "100%", sm: "50%" },
    headingMb: { xs: 1.5, md: 2 },
  },

  // =========================================================
  // TEN PRINCIPLES
  // =========================================================
  tenPrinciples: {
    headerMb: { xs: 4, md: 6 },
    gridGap: { xs: 2, md: 3 },
    cardHeight: { xs: 190, sm: 180, md: 220, lg: 290 },
    cardRadius: { xs: "16px", md: "20px" },
    overlayPadding: { xs: 1.5, md: 2 },
    ctaMt: { xs: 6, md: 9 },
  },

  // =========================================================
  // CORE VALUES
  // =========================================================
  coreValues: {
    sectionHeaderMarginTop: { xs: 4, md: 6 },
    sectionHeaderMarginBottom: { xs: 3, md: 5 },
    gridSpacing: { xs: 2, sm: 3, md: 4 },
    gridJustify: "center",
    gridAlignItems: "stretch",
    cardPadding: { xs: 2.5, sm: 3, md: 4 },
    cardBorderRadius: "16px",
    cardBorder: "1px solid rgba(255,255,255,0.25)",
    cardBoxShadow: "0 8px 24px rgba(0,0,0,0.12)",
    cardMinHeight: { xs: 200, sm: 220, md: 240 },
    cardHoverTranslateY: -6,
    cardBoxShadowHover: "0 16px 40px rgba(0,0,0,0.2)",
    iconFontSize: { xs: 36, md: 44 },
    iconMarginBottom: { xs: 1.5, md: 2 },
    titleMarginBottom: { xs: 1, md: 1.5 },
    descriptionMaxWidth: 320,
  },

  // =========================================================
  // RELATING CIRCLES
  // =========================================================
  relatingCircles: {
    sectionPy: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
    gridSpacing: { xs: 3, md: 5 },
    gridAlignItems: "center",
    textColumnOrder: { xs: 2, md: 1 },
    imageColumnOrder: { xs: 1, md: 2 },
    imageJustify: { xs: "center", sm: "flex-end" },
    textBoxMaxWidth: 560,
    textAlign: { xs: "center", sm: "left" },
    cardWidth: "100%",
    cardMaxWidth: { xs: 380, sm: 440, md: 800 },
    cardHeight: { xs: 260, sm: 320, md: 420 },
    cardBorderRadius: "20px",
    cardBackgroundColor: "#e8e8e8",
  },

  // =========================================================
  // ANCIENT ORIGINS
  // =========================================================
  ancientOrigins: {
    containerPy: { xs: 4, sm: 2, md: 2, lg: 1 },
    headerPy: { xs: 2, md: 3 },
    headerMb: { xs: 3, md: 5 },
    cardPt: { xs: 4, md: 6 },
    cardPb: { xs: 4, md: 6 },
    cardPx: { xs: 2, sm: 3, md: 5 },
    cardTitleMb: { xs: 3, md: 5 },
    rowsGap: { xs: 3, md: 4 },
    rowItemsGap: { xs: 2, md: 4, xl: 8 },
    circleSize: { sm: 140, md: 170, lg: 250, xl: 280 },
    circlePadding: { xs: 2, md: 2.5 },

    xsCarouselMinHeight: 180,
    xsCarouselGap: 10,
    xsCircleSize: 140,
    xsCirclePadding: 1.5,

    rowConfig: [3, 4, 3],
    dotActive: "#1976d2",
    dotInactive: "rgba(25, 118, 210, 0.3)",
  },

  // =========================================================
  // WHY IT MATTERS
  // =========================================================
  whyItMatters: {
    sectionPy: { xs: 4, sm: 6, md: 8, lg: 10 },
    cardHeight: { xs: 320, sm: 380, md: 440, lg: 500 },
    cardRadius: { xs: "20px", md: "28px" },
    cardPaddingX: { xs: 3, sm: 5, md: 8 },
    contentMaxWidth: { xs: "100%", sm: 560, md: 720 },
    titleMb: { xs: 1.5, md: 2 },
  },

  // =========================================================
  // JOY LAB
  // =========================================================
  joyLab: {
    containerPy: { xs: 4, sm: 6, md: 8 },
    spacerHeight: { xs: 40, md: 60 },
    spacerMb: { xs: 2, md: 3 },
    headingMb: { xs: 4, md: 6 },
    headingMaxWidth: 900,
    headingSubtitleMaxWidth: 720,
    mobileListGap: 4,
    mobileItemGap: 2,
    mobileImageHeight: 240,
    mobileCardWidth: "92%",
    mobileCardMt: -6,
    mobileCardPadding: 3,
    desktopListGap: { sm: 6, md: 8, lg: 10 },
    desktopRowHeight: { xs: 290, sm: 450, md: 480, lg: 520 },
    desktopImageWidth: { xs: "60%", sm: "65%", md: "65%", lg: "65%", xl: "65%" },
    desktopCardTop: "10%",
    desktopCardWidth: { xs: "90%", sm: 310, md: 420, lg: 570, xl: 692 },
    desktopCardHeight: { sm: 380, md: 400, lg: 440 },
    desktopCardPadding: { xs: 2.5, md: 3.5 },
    cardTitleMb: 1.5,
    bulletIconSize: 18,
    bulletIconMt: "4px",
    descStackSpacing: 1.5,
    bulletRowSpacing: 1,
  },

  // =========================================================
  // WAYS WE WORK
  // =========================================================
  waysWeWork: {
    sectionPy: { xs: 4, sm: 6, md: 8 },
    headerMb: { xs: 4, md: 6, lg: 8 },
    titleMb: 1,
    gridSpacing: { xs: 3, sm: 3, md: 3, lg: 4 },
    cardBorderRadius: 2,
    cardPadding: { xs: 2, sm: 1.5, md: 2.5, lg: 3 },
    cardMaxWidth: { xs: "100%", sm: 220, md: 320, lg: 430, xl: 490 },
    cardHeight: { xs: 260, sm: 200, md: 250, lg: 300, xl: 320 },
    cardHoverTranslateY: -5,
    iconSize: { xs: 70, sm: 50, md: 65, lg: 75, xl: 80 },
    iconMb: { xs: 1.5, sm: 1, md: 1.5, lg: 2 },
    iconBorderRadius: 2,
    iconPadding: { xs: 1.5, sm: 1, md: 1.5 },
    animationDelayStep: 0.15,
  },

  // =========================================================
  // ABOUT GUIDE
  // =========================================================
  aboutGuide: {
    sectionPy: { xs: 2, sm: 2, md: 1, lg: 1 },
    profileGap: { xs: 3, sm: 5 },
    imageSize: { xs: 180, sm: 350, md: 380, lg: 420 },
    imageCircleBg: "#53D2DB",
    imageCircleShadow: "0px 0px 50px 0px #00497F4D",
    profileImageGap: { xs: 1.5, sm: 2, lg: 2, xl: 3 },
    imageInnerWidth: "95%",
    imageInnerHeight: "90%",
    imageInnerMarginTop: {
      xs: "13px",
      sm: "18px",
      md: "18px",
      lg: "25px",
      xl: "38.8px",
    },
    textMarginTop: { xs: 8 },
    textMaxWidth: 720,
    titleMb: 3,
    subtitleMb: 2,
    bodyMb: 2,
    ctaCardRadius: "20px",
    ctaCardPx: { xs: 4, sm: 5, md: 12 },
    ctaCardPy: { xs: 4, sm: 5, md: 12 },
    ctaCardMy: { xs: 6, md: 8 },
    ctaCardShadow: "0 10px 25px rgba(0,0,0,0.15)",
    ctaGridSpacing: { xs: 3, sm: 3, md: 4, lg: 5, xl: 6 },
    ctaTitleMb: { xs: 2, md: 3 },
    ctaSubtitleMb: 1,
    ctaBoxBorderXs: "1px solid rgba(255,255,255,0.7)",
    ctaBoxBorderSm: "2px solid rgba(255,255,255,0.7)",
    ctaBoxRadius: { xs: 2, sm: 2, md: 2.5, lg: 3, xl: 2 },
    ctaBoxPx: { xs: 2, sm: 2, md: 3, lg: 6 },
    ctaBoxPy: { xs: 2, sm: 2, md: 3, lg: 6 },
    ctaBoxMaxWidth: { xs: 300, sm: "100%", md: 720 },
    ctaBoxTitleMaxWidth: 300,
    ctaBoxTitleMb: { xs: 2, md: 3 },
    ctaButtonPy: 1.5,
    ctaButtonPx: 6,
    ctaButtonRadius: "8px",
    ctaButtonMt: 2,
    ctaButtonWidth: "70%",
  },

  // =========================================================
  // OUR APPROACH
  // =========================================================
  ourApproach: {
    sectionPy: { xs: 2 },
    heroHeight: { xs: 320, md: 540 },
    heroBorderRadius: 5,
    heroMaxWidth: 700,
    heroTitleMb: 2,
    howWeWorkPt: { xs: 6, md: 10 },
    howWeWorkRadius: "32px",
    howWeWorkPadding: { xs: 3, sm: 3, md: 4 },
    howWeWorkTitleMb: { xs: 4, md: 4 },
    howWeWorkTitlePt: { xs: 2, md: 5 },          // 👈 title top gap
    howWeWorkGridSpacing: { xs: 2, sm: 2, md: 3 },
    cardHeight: { xs: 220, sm: 200, md: 230, lg: 280, xl: 300 },
    cardWidth: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" },
    cardRadius: "20px",
    cardPadding: { xs: 2.5, sm: 2.5, md: 3.5 },
    cardTitleMb: 2,
    coreWrapperPadding: { xs: 3, md: 5 },
    coreWrapperMy: { xs: 3, md: 5 },
    coreWrapperRadius: 3,
    coreWrapperGap: 5,
    coreMobileTitlePb: { xs: 3, md: 0 },         // 👈 mobile title block bottom gap
    pointsContainerRadius: 2,
    pointsContainerPadding: 3,
    pointsContainerGap: 2,
    pointCardRadius: 2,
    pointCardPadding: 2,
    pointBodyMt: 0.5,
    coreImageMt: 2,
    coreImageHeight: { sm: 800, md: 580, lg: 600 },
  },

  // =========================================================
  // AUTHENTIC RELATING HEADER
  // =========================================================
  authenticRelatingHeader: {
    sectionPy: { xs: 4, md: 6 },
    headingMb: 3,
    subheadingMb: 2,
    gridSpacing: { xs: 2, sm: 3, md: 4 },
    gridMy: { xs: 4, md: 6 },
    mobileCardMb: 3,
    mobileCardBorderRadius: "12px",
    mobileCardWidth: { xs: "280px" },
    mobileCardHeight: { xs: "170px" },
    textColumnPaddingRight: { sm: 2, md: 3 },
    textColumnTitleMb: { xs: 1.5, md: 2 },
    textColumnBodyMb: 2,
    textColumnBodyMaxWidth: { xs: "100%", sm: 400, md: 566 },
    desktopCardBorderRadius: "12px",
    desktopCardWidth: { xs: "290px", sm: "380px", md: "470px", lg: "780px" },
    desktopCardHeight: { xs: "180px", sm: "320px", md: "520px" },
  },

  // =========================================================
  // CONNECTION SECTION
  // =========================================================
  connectionSection: {
    containerPy: { xs: 5, sm: 6 },
    headerMb: { xs: 3, md: 8 },
    headerPx: { xs: 2, md: 10 },
    headerMaxWidth: 1000,
    headerTitleMb: { xs: 1.5, sm: 2 },
    headerDescMaxWidth: 950,

    toggleStackMt: { xs: 2, md: 2, lg: 0 },

    mobileListGap: 6,
    mobileImageHeight: 320,
    mobileCardWidth: "92%",
    mobileCardMt: -12,
    mobileCardPadding: 3,

    desktopListGap: { sm: 6, md: 8, lg: 10 },
    desktopRowHeight: { xs: 500, sm: 450, md: 490, lg: 540 },
    desktopImageWidth: { xs: "100%", sm: "60%", md: "65%" },
    desktopCardTop: "10%",
    desktopCardWidth: { xs: "90%", sm: 312, md: 425, lg: 572, xl: 692 },
    desktopCardHeight: { xs: 320, sm: 390, md: 400, lg: 440 },
    desktopCardPadding: 4,

    cardTitleMb: 0.5,
    cardSubtitleMb: 1.5,
    cardButtonStackMt: 2,
    cardButtonStackSpacing: 2,
    cardScrollPr: 1,
    cardScrollbarWidth: "6px",

    buttonHeight: { xs: "48px", sm: "44px", md: "48px" },
    buttonPx: { xs: 2.5, sm: 1.5, md: 2.5 },
    buttonWidthList: { xs: "120px", sm: "120px", md: "160px" },
    buttonRadius: "12px",

    gridPy: 6,
    gridSpacing: { xs: 2, sm: 3, md: 5 },
    gridCardWidth: { xs: "100%", sm: 350, md: 320, lg: 420, xl: 490 },
    gridCardHeight: { xs: 370, sm: 450, md: 460, lg: 520 },
    gridCardRadius: { xs: 1, sm: 1, md: 1 },
    gridImageHeight: { xs: 140, sm: 140, md: 160, lg: 200 },
    gridContentPadding: { xs: 1.5, sm: 2, md: 2, lg: 2.5 },
    gridTitleMb: { xs: 1, sm: 1.5 },
    gridDescMb: { xs: 1.5, sm: 2 },
    gridButtonHeight: { xs: "34px", sm: "36px", md: "44px" },
    gridButtonRadius: "10px",
    gridButtonSpacing: 1,

    paginationMt: 14,
    paginationGap: 3,
    paginationBtnSize: 48,
    paginationBtnRadius: "16px",
    paginationPageRadius: "50%",
  },

  // =========================================================
  // WHY AUTHENTIC RELATING
  // =========================================================
  whyAuthenticRelating: {
    sectionPt: { xs: 6 },
    wrapperRadius: "20px",
    wrapperPadding: { xs: 3, sm: 4, md: 6 },
    headingMb: 1,
    subheadingMaxWidth: 720,
    subheadingMb: { xs: 2, md: 4 },
    cardsGridSpacing: 2,
    cardHeight: { xs: 200, sm: 210, md: 240, lg: 290, xl: 290 },
    cardBorderRadius: "18px",
    cardContentPx: { xs: 1, sm: 3, md: 3 },
    cardContentPy: { xs: 1.5, sm: 2.5, md: 3 },
    iconSize: { xs: 32, sm: 40, md: 68, lg: 70, xl: 90 },
    iconHeight: { xs: 32, sm: 30, md: 60, lg: 70, xl: 90 },
    iconMb: { xs: 1, sm: 2.5, md: 3 },
    cardTitleMb: 1,
    splitGap: { xs: 4, md: 10 },
    splitPy: { xs: 6, md: 10 },
    splitImageHeight: { xs: "220px", sm: "490px", md: "420px", lg: "420px", xl: "460px" },
    splitTitleMb: 2,
    splitBodyMb: 3,
    bulletStackSpacing: 2,
    bulletGap: 2,                    // 👈 was 1.5 — slightly wider for bigger dot
    bulletDotSize: 28,               // 👈 was 16 — matches Figma
    bulletDotBorder: "4px",          // 👈 was "3px" — matches Figma
    bulletDotMt: "2px",              // 👈 was "4px" — centers 28px dot with text
  },

  podcastSection: {
    sectionPy: { xs: 4, sm: 5, md: 6, lg: 8 },
    gridGap: { xs: 4, sm: 5, md: 6, lg: 8 },

    imageHeight: { xs: 320, sm: 420, md: 400, lg: 460, xl: 520 },
    imageRadius: { xs: "20px", md: "28px" },
    logoWidth: { xs: "62%", sm: "55%" },
    logoHeight: { xs: 76, sm: 100, md: 100, lg: 120, xl: 130 },
    logoBottom: { xs: "5%", md: "6%" },
    logoInnerWidth: "86%",
    logoInnerHeight: "72%",

    titleMb: { xs: 1.5, md: 2 },
    descriptionMb: { xs: 3, md: 3.5 },
    descriptionMaxWidth: 520,
    topTitleMb: { xs: 1.5, md: 2 },

    episodesGap: { xs: 1, sm: 2, md: 1.5, lg: 2 },
    episodesMb: { xs: 3, md: 4 },
    episodeCardRadius: "10px",
    episodeCardPadding: { xs: 0.75, sm: 1, md: 0.75, lg: 1 },
    episodeImageRadius: "8px",
    episodeImageAspect: "1 / 1",
    episodeInfoMt: 1,
    episodeMetaMt: 0.75,

    playPx: { xs: 0.75, sm: 1.25, md: 1, lg: 1.25 },
    playPy: { xs: 0.25, sm: 0.4 },
    playRadius: "4px",

    buttonMinWidth: { xs: 180, md: 170, lg: 200 },
    buttonHeight: { xs: "44px", md: "40px", lg: "46px" },
  },

  // =========================================================
  // JOY LAB HIGHLIGHTS
  // =========================================================
  joyLabHighlights: {
    panelMy: { xs: 3, md: 5 },
    panelPadding: { xs: 3, sm: 4, md: 6 },
    panelRadius: { xs: "20px", md: "28px" },
    pillMaxWidth: { xs: "100%", sm: 560, md: 720 },
    pillMb: { xs: 3, md: 5 },
    pillPy: { xs: 1.5, md: 2 },
    pillPx: { xs: 2, md: 4 },
    pillRadius: "24px",
    titleLineHeight: 1.2,
    titlePillPy: { xs: 0.5, md: 1 },
    rowGap: { xs: 2, sm: 2.5, md: 3 },
    rowMaxWidth: 1800,
    cardWidth: { xs: "100%", sm: 240, md: 280, lg: 320 },
    cardHeight: { xs: 160, sm: 180, md: 200 },
    cardPx: { xs: 2, md: 3 },
    cardRadius: { xs: "14px", md: "18px" },
    cardSkew: { xs: "skewX(0deg)", md: "skewX(-6deg)" },
    cardSkewChild: { xs: "skewX(0deg)", md: "skewX(6deg)" },
    cardTextLineHeight: 1.4,
  },

  // =========================================================
  // FACILITATION HEADER
  // =========================================================
  facilitationHeader: {
    sectionPy: { xs: 4, sm: 5, md: 6 },
    gridSpacing: { xs: 4, sm: 5, md: 6 },
    imageHeight: { xs: 260, sm: 300, md: 330, lg: 420 },
    imageRadius: "12px",
    titleMb: { xs: 2, sm: 2, md: 2.5 },
    bodyPx: { xs: 1, sm: 0 },
  },

  // =========================================================
  // YOU WILL LEARN TIMELINE SECTION
  // =========================================================
  youWillLearnTimeline: {
    containerPy: { xs: 4, sm: 5, md: 10 },
    panelRadius: "20px",
    panelPx: { xs: 3, sm: 5, md: 7 },
    panelPy: { xs: 4, sm: 5, md: 6 },
    panelMb: 8,
    panelLastMb: 5,

    innerPx: { xs: 3, sm: 5, md: 7 },
    innerMaxWidth: "720px",

    titleMb: { xs: 3, sm: 4, md: 4 },

    timelinePl: { xs: "3px", sm: "4px" },
    lineLeft: { xs: "12px", sm: "18px" },
    lineTop: "-20px",
    lineBottom: 30,
    lineWidth: "2px",

    itemMb: { xs: 3, sm: 4, md: 4 },
    itemMaxWidth: "700px",
    itemTextMaxWidth: "520px",

    dotSize: { xs: 20, sm: 28 },
    dotMr: { xs: 2, sm: 2 },
  },

  // =========================================================
  // ADVANCED TRAINING SECTION
  // =========================================================
  advancedTraining: {
    containerPy: { xs: 4, md: 6 },
    gridSpacing: { xs: 4, sm: 5, md: 8 },

    textBoxMaxWidth: { sm: "100%", md: 520 },
    textBoxMx: { xs: "auto", sm: 1 },
    textBoxPx: { xs: 2, sm: 2 },
    titleMb: 2,
    bodyMb: 3,

    modulesStackSpacing: 1.5,
    moduleDotSize: 24,
    moduleDotBorderWidth: "4px",
    moduleDotMr: 1.5,

    buttonMt: 4,
    buttonMaxWidth: { xs: "220px", sm: "260px", md: "300px" },
    buttonWidth: { xs: "100%", sm: "auto" },
    buttonHeight: { xs: "48px", sm: "44px", md: "48px" },
    buttonPx: { xs: 2.5, sm: 1.5, md: 2.5 },
    buttonRadius: "12px",

    cardHeight: { xs: 260, sm: 280, md: 320, lg: 460 },
    cardOverlayOffset: 16,
  },

  // =========================================================
  // COMMUNITY HERO SECTION
  // =========================================================
  communityHero: {
    wrapperMb: { xs: 2, sm: 4, md: 6 },
    aspectRatio: {
      xs: "16/10",
      sm: "16/12",
      md: "16/5",
      lg: "16/6",
    },
  },

  // =========================================================
  // COMMUNITY SECTION
  // =========================================================
  community: {
    loadingPy: 10,
    sectionsWrapperPt: { xs: 6, md: 10 },
    sectionRowMb: { xs: 6, md: 12 },
    sectionRowColumnSpacing: { xs: 0, sm: 4, md: 6, lg: 10 },
    sectionRowRowSpacing: { xs: 3, sm: 4, md: 0 },
    imageHeight: { xs: 240, sm: 320, md: 420, lg: 480 },
    imageRadius: "12px",
    textColumnPx: { xs: 0.5, sm: 1, md: 0 },
    textColumnGap: { xs: 1.5, sm: 1.5, md: 2 },
    titleMb: { xs: 2, sm: 1.5, md: 2 },
    cardWrapperRadius: "32px",
    cardWrapperP: { xs: 3, sm: 4, md: 6 },
    cardWrapperHeadingMb: 5,
    cardsGridSpacing: { xs: 2, sm: 3 },
    cardHeight: { xs: "200px", sm: "220px", md: "260px", lg: "300px", xl: "320px" },
    cardRadius: { xs: "12px", sm: "14px", md: "16px", lg: "15px" },
    cardContentPx: { xs: 1, sm: 1.5, md: 2, lg: 2.5 },
    cardContentPy: { xs: 1, sm: 1.5, md: 2, lg: 2.5 },
    cardIconSize: { xs: 40, sm: 55, md: 60, lg: 70, xl: 80 },
    cardIconMb: { xs: 1, sm: 1.5, md: 2, lg: 2.5 },
    cardTitleMb: { xs: 0.5, sm: 0.75, md: 1 },
  },

  // =========================================================
  // COMMUNITY UNIQUE SECTION
  // =========================================================
  communityUnique: {
    containerPy: { xs: 6, md: 10 },
    topBoxMb: { xs: 6, md: 10 },
    topBoxP: { xs: 3, md: 5 },
    topBoxRadius: "32px",
    topBoxGap: { xs: 3, sm: 5 },
    leftColP: { xs: 2, sm: 3 },
    leftColRadius: 2,
    leftTitleMb: 2,
    leftImageMaxWidth: { xs: "280px", sm: "400px", md: "600px", lg: "720px" },
    leftImageMt: { xs: 2, sm: 4 },
    leftImageRadius: 2,
    rightColP: { xs: 2, sm: 3 },
    rightColRadius: 2,
    rightColGap: 2,
    coachingCardP: { xs: 1.5, sm: 2 },
    coachingCardRadius: 2,
    meetHeight: { xs: 520, sm: 550, md: 600, lg: 650 },
    meetRadius: 3,
    meetPx: 3,
    meetMb: { xs: 6, md: 10 },
    meetContentMaxWidth: 800,
    meetTitleMb: 3,
    meetBodyMb: 4,
    meetBodyPx: { xs: 2, sm: 4 },
    buttonsStackGap: 3,
    buttonsStackPx: { xs: 2, sm: 0 },
    primaryButtonMaxWidth: 400,
    primaryButtonPy: { xs: 2 },
    primaryButtonPx: { xs: 2, sm: 4 },
    primaryButtonRadius: "15px",
    secondaryButtonMaxWidth: 500,
    secondaryButtonPy: { xs: 2 },
    secondaryButtonPx: { xs: 2, sm: 4 },
    secondaryButtonRadius: "15px",
    finalGridSpacing: { xs: 4, sm: 6, md: 8 },
    finalImageCardWidth: "100%",
    finalImageCardMaxWidth: { xs: 320, sm: 400, md: 500, lg: 690 },
    finalImageCardHeight: { xs: 200, sm: 300, md: 400, lg: 450 },
    finalTitleMb: 2,
    finalBodyMb: 2,
    finalBodyMaxWidth: { xs: "100%", sm: 500, md: 720 },
  },

  // =========================================================
  // AUTHENTIC RELATING PAGE
  // =========================================================
  authenticRelatingPage: {
    rootPt: { xs: 8, md: 15, lg: 15 },
    heroPadding: { xs: 3, md: 10, lg: 12 },
    heroPt: { xs: 6, md: 10, lg: 12 },
    heroPb: 2,
    heroMx: { xs: 2, md: 4 },
    heroRadius: "20px",
    heroLogoWidth: { xs: "140px", sm: "240px", md: "300px", lg: "380px", xl: "450px" },
    heroLogoHeight: { xs: "60px", sm: "85px", md: "100px", lg: "150px", xl: "160px" },
    heroLogoInnerWidth: { xs: "100px", sm: "160px", md: "200px", lg: "280px", xl: "550px" },
    heroLogoInnerHeight: { xs: "40px", sm: "65px", md: "65px", lg: "70px", xl: "80px" },
    heroBodyMaxWidth: { xs: "100%", sm: 600, md: 900, lg: 1024 },
    heroBodyMb: { xs: 2, md: 2.5 },
    heroBodyPx: { xs: 1, md: 2 },
    offeringsMt: { xs: 5, sm: 8 },
    offeringsPadding: { xs: 3, sm: 4, md: 6 },
    offeringsRadius: "20px",
    offeringsTitleMb: { xs: 3, md: 4, lg: 5 },
    offeringsGridSpacing: { xs: 2, sm: 3, md: 3 },
    offeringsCardMaxWidth: { xs: 320, sm: 250, md: 280, lg: 400, xl: 400 },
    offeringsCardHeight: { xs: 280, sm: 220, md: 220, lg: 300, xl: 300 },
    offeringsCardRadius: "15px",
    offeringsCardPadding: {
      px: { xs: 1.5, sm: 1, md: 1.5, lg: 2, xl: 2.5 },
      py: { xs: 1.5, sm: 1, md: 1.5, lg: 2, xl: 2.5 },
    },
    offeringsIconSize: { xs: 50, sm: 35, md: 40, lg: 50, xl: 55 },
    offeringsIconMb: { xs: 1.5, sm: 1, md: 1.5, lg: 2, xl: 2.5 },
    offeringsCardTitleMb: { xs: 0.75, sm: 0.5, md: 0.75, lg: 1, xl: 1.25 },
    offeringsCardDescPx: 0.5,
    topicsPy: { xs: 6, md: 8 },
    topicsTitleMb: { xs: 3, md: 4 },
    topicsStackSpacing: 2,
    topicsPaperPadding: { xs: 2.5, sm: 3 },
    topicsPaperRadius: "10px",
    topicsItemTitleMb: 1,
  },

  // =========================================================
  // BECOME A CERTIFIED SECTION
  // =========================================================
  becomeACertified: {
    heroPt: { xs: 4, md: 6 },
    heroHeight: { xs: 320, sm: 400, md: 480 },
    heroRadius: 2,
    heroPx: 3,
    heroMaxWidth: 900,
    heroTitleMb: 2,
    overviewPy: { xs: 4, md: 8 },
    overviewGridSpacing: { xs: 4, sm: 5, md: 8 },
    overviewImageHeight: { xs: 260, sm: 320, md: 480 },
    overviewImageRadius: 1,
    overviewTextMaxWidth: { sm: "100%", md: 600 },
    overviewTextPx: { xs: 2, sm: 0 },
    overviewTitleMb: 2,
    overviewItemGap: 1.5,
  },

  // =========================================================
  // WHAT IS AUTHENTIC SECTION
  // =========================================================
  whatIsAuthentic: {
    outerPt: { xs: 8, md: 20 },
    outerPb: { xs: 10, md: 14 },
    panelTop: 150,
    panelRadius: 2,
    cardBottom: 150,
    cardWidth: { xs: "95%", sm: "100%", md: "100%", lg: "105%" },
    cardMaxWidth: { xs: 590, sm: 600, md: 800, lg: 1100 },
    cardPadding: { xs: 3, md: 5 },
    cardRadius: 2,
    titleMb: 3,
    bodyMb: 2,
    subTextMb: 2,
    footerMt: 2,
    listPl: 5,
    bulletIconMinWidth: 30,
    bulletDotSize: 26,
    bulletDotBorderWidth: 4,
  },

  // =========================================================
  // FRAMEWORK HERO SECTION
  // =========================================================
  frameworkHero: {
    sectionPy: { xs: 2, md: 3 },
    headerMb: 4,
    titleMb: 4,
    bodyTitleMb: { xs: 1.5, sm: 1, md: 1.5 },
    bodyTitleMT: { xs: 1.5, sm: 1, md: 1.5 },
    authorMb: { xs: 2, sm: 1, md: 2 },
    descriptionMaxWidth: 1024,
  },

  // =========================================================
  // FIVE DIMENSIONS PAGE
  // =========================================================
  fiveDimensions: {
    sectionPy: { xs: 0, md: 0 },
    sectionPb: { xs: 2, md: 0 },
    rowMb: { xs: 3, md: 6 },
    titleMb: 1,
    textGap: { xs: 1.5, md: 2 },
    imageHeight: { xs: 240, md: 420, lg: 500 },
    textPx: { xs: 0.5, sm: 1, md: 0 },
    gridColumnSpacing: { xs: 0, md: 6, lg: 10 },
    gridRowSpacing: { xs: 3, sm: 4, md: 0 },
    quotePl: 2,
    quoteMt: 1,
  },

  // =========================================================
  // PRINCIPLES OF AUTHENTIC RELATING (page section)
  // =========================================================
  principlesOfAuthenticRelating: {
    sectionMb: { xs: 8, md: 12 },
    headerMb: { xs: 3, md: 4 },
    sectionsPt: { xs: 2, md: 6 },
    rowMb: { xs: 6, md: 12 },
    rowColumnSpacing: { xs: 0, md: 6, lg: 10 },
    rowRowSpacing: { xs: 3, sm: 4, md: 0 },
    imageHeight: { xs: 240, md: 420 },
    imageRadius: "16px",
    textGap: 2,
    textMaxWidth: 600,
    titleMb: 2,
    titleFontSize: { xs: "26px", md: "36px" },
    bodyFontSize: { xs: "14px", md: "16px" },
    bodyLineHeight: { xs: "22px", md: "26px" },
  },

  // =========================================================
  // AUTHENTIC RELATING UI
  // =========================================================
  authenticRelatingUI: {
    pagePt: { xs: 4, md: 6, lg: 10 },
    introRadius: "28px",
    introPx: { xs: 3, md: 8 },
    introPy: { xs: 6, md: 8 },
    introTitleMb: 2,
    sectionsPt: { xs: 6, md: 8 },
    rowMb: { xs: 6, md: 12 },
    rowColumnSpacing: { xs: 0, md: 6, lg: 10 },
    rowRowSpacing: { xs: 3, sm: 4, md: 0 },
    imageHeight: { xs: 240, md: 540 },
    imageRadius: "16px",
    textGap: { xs: 1.5, md: 2 },
    titleMb: 2,
    titleFontSize: { xs: "28px", md: "44px" },
    bodyFontSize: { xs: "14px", md: "16px", lg: "18px" },
    bodyLineHeight: { xs: "22px", md: "22px", lg: "28px" },
  },

  // =========================================================
  // COURSE INNER DETAIL PAGE
  // =========================================================
  courseInnerDetail: {
    sectionPy: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
    titleMb: { xs: 1.5, sm: 2, md: 2.5, lg: 3, xl: 3.5 },
    gridSpacing: { xs: 3, sm: 4, md: 5, lg: 6, xl: 8 },
    leftCol: { xs: 12, sm: 12, md: 7, lg: 7, xl: 8 },
    rightCol: { xs: 12, sm: 12, md: 5, lg: 5, xl: 4 },
    tabsBoxMb: { xs: 2, sm: 2.5, md: 3, lg: 3.5, xl: 4 },
    tabsBoxRadius: { xs: 1, sm: 1.5, md: 2, lg: 2.5, xl: 3 },
    tabsMinHeight: { xs: 44, sm: 48, md: 52, lg: 56, xl: 60 },
    tabPx: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
    tabPy: { xs: 1, sm: 1.25, md: 1.5, lg: 1.75, xl: 2 },
    tabMarginX: { xs: "0 4px", sm: "0 8px", md: "0 12px", lg: "0 16px", xl: "0 20px" },
    tabGap: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
    descMb: 6,
    dividerMb: { xs: 3, sm: 3.5, md: 4, lg: 4.5, xl: 5 },
    instructorTitleMb: { xs: 1.5, sm: 2, md: 2.5, lg: 3, xl: 3.5 },
    instructorStackSpacing: { xs: 2.5, sm: 3, md: 3.5, lg: 4, xl: 5 },
    instructorStackMb: { xs: 4, sm: 5, md: 6, lg: 7, xl: 8 },
    instructorImageSize: { xs: 200, sm: 220, md: 240, lg: 260, xl: 280 },
    accentBarWidth: { xs: 3, sm: 3.5, md: 4, lg: 4.5, xl: 5 },
    accentBarHeight: { xs: 40, sm: 45, md: 50, lg: 55, xl: 60 },
    bulletDotSize: { xs: 22, sm: 24, md: 26, lg: 28, xl: 30 },
    bulletStackSpacing: 1.2,
    bulletStackMt: 3,
    bulletRowSpacing: 1.5,
    bulletRowGap: 1.5,
    sidebarCardRadius: { xs: 1, sm: 0.5, md: 1, lg: 1.5, xl: 1 },
    sidebarCardMaxWidth: { xs: "100%", sm: 400, md: 500, lg: 600, xl: 700 },
    sidebarStickyTop: { md: 100, lg: 120, xl: 140 },
    priceSectionP: { xs: 2, sm: 2.5, md: 3, lg: 3.5, xl: 4 },
    detailsP: { xs: 2, sm: 2.5, md: 3, lg: 3.5, xl: 4 },
    detailRowPy: 2,
    ctaMt: 3,
    ctaPx: { xs: 3, md: 3.5 },
    ctaHeight: { xs: "42px", md: "46px" },
    ctaRadius: "10px",
  },

  // =========================================================
  // WHAT YOU WILL FIND INSIDE
  // =========================================================
  whatYouWillFindInside: {
    sectionPt: 0,
    sectionPb: { xs: 3, md: 4 },
    panelPx: { xs: 3, md: 6 },
    panelPy: { xs: 5, md: 7 },
    panelBorderWidth: "2px",
    headingMb: { xs: 4, md: 6 },
    cardsGap: { xs: 3, md: 4 },
    cardMinHeight: 160,
    cardRadius: "24px",
    cardPx: { xs: 3, md: 4 },
    cardPy: { xs: 3, md: 3.5 },
    cardTitleMb: 1,
    ctaMt: { xs: 5, md: 12 },
    ctaP: { xs: 3, md: 5 },
    ctaBorderRadius: "32px",
    ctaMinHeight: 300,
    ctaFlexGap: { xs: 4, sm: 4, md: 6 },
    ctaFlexPt: { xs: 4, sm: 4 },
    ctaLeftMaxWidth: { sm: "52%", md: "52%", lg: "55%" },
    ctaTitleMb: 2,
    ctaBodyMb: { xs: 3, sm: 0 },
    ctaRightFlexBasis: { sm: "42%", md: "40%" },
    ctaRightMaxWidth: { sm: "42%", md: "40%" },
    ctaBtnStackSpacing: 2,
    ctaBtnPy: 1.5,
    ctaBtnRadius: "10px",
    ctaBtnBorderWidth: "2px",
  },

  // =========================================================
  // WE TALK ABOUT SECTION (Podcasts)
  // =========================================================
  weTalkAbout: {
    sectionPt: { xs: 6, md: 10, lg: 12 },
    sectionPb: { xs: 2, md: 5, lg: 8 },
    gridGap: { xs: 4, md: 6, lg: 8 },
    stickyTopDesktop: { md: 100, lg: 120 },
    stickyTop: { xs: 80, md: 100, lg: 120 },
    containerHeightPerItemVh: 18,
    headingMb: { xs: 2, md: 3 },
    descriptionMaxWidth: 480,
    cardMaxWidth: 640,
    cardHeight: 120,
    cardPadding: { xs: 2, sm: 2.5, md: 3 },
    cardRadius: '16px',
    cardGap: { xs: 2, md: 2.5 },
    cardInnerGap: { xs: 1.5, sm: 2, md: 2.5 },
    iconSize: { xs: 44, sm: 52, md: 60 },
    heartSize: { xs: 24, sm: 28, md: 32 },
  },

  // =========================================================
  // PLAYGROUND
  // =========================================================

  playground: {
    outerPt: { xs: 6, md: 12 },
    outerPb: { xs: 2, sm: 5, md: 35, lg: 35, xl: 35 },
    outerMb: { xs: 4, md: 6 },
    panelTop: { xs: 100, md: 250 },
    panelHeight: { xs: 420, sm: 30, md: 560 },
    panelRadius: { xs: "20px", md: "28px" },
    cardBottom: { xs: 60, md: 90 },

    // 👇 CARD WIDTH (matches Figma frame)
    cardWidth: {
      xs: "92%",
      sm: "88%",
      md: "720px",
      lg: "1200px",
      xl: "1420px",
    },
    cardMaxWidth: {
      xs: "92%",
      sm: "88%",
      md: 720,
      lg: 1200,
      xl: 1420,
    },

    cardHeight: { xs: "auto", sm: 430, md: 420, xl: 470 },
    cardPadding: { xs: 3, sm: 4, md: 5 },
    cardRadius: { xs: "20px", md: "28px" },

    // 👇 TITLE
    titleLineHeight: 1.2,
    titleMb: { xs: 1.5, md: 2 },
    titleMaxWidth: {
      xs: "100%",
      sm: "100%",
      md: 720,
      lg: 900,
      xl: 1200,
    },

    // 👇 DESCRIPTION
    descriptionLineHeight: 1.6,
    descriptionMaxWidth: {
      xs: "100%",
      sm: "100%",
      md: 620,
      lg: 820,
      xl: 1000,
    },
    descriptionMb: { xs: 2, md: 3 },
  },
};

export default spacing;