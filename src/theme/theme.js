// theme.js - Complete with all sections
import { createTheme } from "@mui/material/styles";

import colors from "./colors";
import typography from "./typography";
import breakpoints from "./breakpoints";
import spacing from "./spacing";

const theme = createTheme({
  breakpoints,

  palette: {
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
    background: {
      default: colors.background,
      paper: colors.secondary,
    },
  },

  typography: {
    fontFamily: typography.fonts.body,
    h1: typography.global.h1,
    h2: typography.global.h2,
    h3: typography.global.h3,
    h4: typography.global.h4,
    h5: typography.global.h5,
    h6: typography.global.h6,
    body1: typography.global.body,
    body2: typography.global.body,

    hero: typography.hero,
    authenticRelating: typography.authenticRelating,
    tenPrinciples: typography.tenPrinciples,
    gifts: typography.gifts,
    clientTestimonial: typography.clientTestimonial,
    courseCard: typography.courseCard,
    discountBanner: typography.discountBanner,
    connection: typography.connection,
    realConnection: typography.realConnection,
    featuresSection: typography.featuresSection, // 👈 added
  },

  shape: {
    borderRadius: 10,
  },

  custom: {
    // =========================================================
    // FEATURES SECTION
    // =========================================================
    // =========================================================
    // FEATURES SECTION
    // =========================================================
    featuresSection: {
      container: {
        background: colors.featuresSection.gradient,
        borderRadius: { xs: 3, md: 2 },
        px: spacing.featuresSection.containerPadding,
        py: spacing.featuresSection.containerPy,
      },
      header: {
        mb: spacing.featuresSection.headerMb,
        "& .section-title": {
          color: colors.featuresSection.title,
          fontFamily: typography.featuresSection.title.fontFamily,
          fontWeight: typography.featuresSection.title.fontWeight,
          fontSize: typography.featuresSection.title.fontSize,
          lineHeight: typography.featuresSection.title.lineHeight,
          mb: { xs: 1.5, md: 2 },
        },
        "& .section-description": {
          color: colors.featuresSection.description,
          fontFamily: typography.featuresSection.description.fontFamily,
          fontWeight: typography.featuresSection.description.fontWeight,
          fontSize: typography.featuresSection.description.fontSize,
          lineHeight: typography.featuresSection.description.lineHeight,
          maxWidth: { xs: "100%", sm: 520, md: 700, xl: 740 },
          mx: "auto",
        },
      },
      grid: {
        /* 👇 GAP BETWEEN CARDS (MUI multiplies by 8px)
           1.5 → 12px | 2 → 16px | 2.5 → 20px | 3 → 24px | 3.5 → 28px */
        spacing: { xs: 1.5, sm: 2, md: 2.5, lg: 3, xl: 3.5 },
        justifyContent: "center",
        alignItems: "stretch",
      },
      gridItem: {
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        minWidth: 0,
      },
      card: {
        borderRadius: { xs: 1.5, md: 2 },
        background: colors.featuresSection.card.background,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: colors.featuresSection.card.border,
        boxShadow: colors.featuresSection.card.shadow,

        /* PADDING */
        px: spacing.featuresSection.cardPadding.px,
        py: spacing.featuresSection.cardPadding.py,

        /* WIDTH — let Grid control width, no maxWidth cap */
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,

        /* HEIGHT */
        height: spacing.featuresSection.cardHeight,
        minHeight: spacing.featuresSection.cardHeight,

        display: "flex",
        alignItems: "center",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: colors.featuresSection.card.shadowHover,
        },
        "@media (max-width: 599px)": {
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        },
      },
      iconWrapper: {
        width: spacing.featuresSection.iconSize,
        height: spacing.featuresSection.iconSize,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.4s ease",
      },
      icon: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        transition: "transform 0.4s ease",
      },
      divider: {
        display: { xs: "none", sm: "block" },
        width: "2px",
        height: spacing.featuresSection.dividerHeight,
        background: colors.featuresSection.card.divider,
        mx: spacing.featuresSection.dividerMargin,
        borderRadius: "2px",
      },
      cardTitle: {
        fontFamily: typography.featuresSection.cardTitle.fontFamily,
        fontWeight: typography.featuresSection.cardTitle.fontWeight,
        fontSize: typography.featuresSection.cardTitle.fontSize,
        lineHeight: typography.featuresSection.cardTitle.lineHeight,
        letterSpacing: "0%",
        color: colors.featuresSection.cardTitle,
        mb: { xs: 0.25, md: 0.5 },
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      },
      cardDescription: {
        fontFamily: typography.featuresSection.cardDescription.fontFamily,
        fontWeight: typography.featuresSection.cardDescription.fontWeight,
        fontSize: typography.featuresSection.cardDescription.fontSize,
        lineHeight: typography.featuresSection.cardDescription.lineHeight,
        letterSpacing: "0%",
        color: colors.featuresSection.cardDescription,
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      },
    },
    // =========================================================
    // WHO IT'S FOR SECTION
    // =========================================================
    whoItsFor: {
      section: {
        py: spacing.whoItsFor.sectionPy,
      },

      // ---- Section heading ----
      heading: {
        ...typography.whoItsFor.heading,
        color: colors.whoItsFor.heading,
        mb: spacing.whoItsFor.headingMb,
      },

      // ---- Section subtitle ----
      subtitle: {
        ...typography.whoItsFor.subtitle,
        color: colors.whoItsFor.subtitle,
        maxWidth: spacing.whoItsFor.subtitleMaxWidth,
        mx: "auto",
        mb: spacing.whoItsFor.subtitleMb,
      },

      // ---- Pills grid ----
      pillsGrid: {
        container: {
          spacing: spacing.whoItsFor.pillsGridSpacing,
          justifyContent: "center",
          sx: {
            "& .MuiGrid-item": {
              display: "flex",
              justifyContent: "center",
            },
          },
        },
        item: {
          xs: 12,
          sm: 2.4,
          md: 2.4,
          lg: 2.4,
          xl: 2.4,
          sx: { width: { sm: "20%" } },
        },
      },

      // ---- Pill card ----
      pillCard: {
        height: spacing.whoItsFor.pillHeight,
        width: "100%",
        maxWidth: spacing.whoItsFor.pillMaxWidth,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        borderRadius: spacing.whoItsFor.pillRadius,
        background: colors.whoItsFor.cardGradient,
        border: colors.whoItsFor.cardBorder,
        boxShadow: colors.whoItsFor.cardShadow,
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        px: spacing.whoItsFor.pillPaddingX,
        transition: "all 0.35s ease",
        margin: "0 auto",
        "&:hover": {
          transform: `translateY(${spacing.whoItsFor.pillHoverTranslateY}px) scale(1.03) rotateX(2deg)`,
          boxShadow: colors.whoItsFor.cardShadowHover,
          border: colors.whoItsFor.cardBorderHover,
          filter: "brightness(1.05)",
        },
      },
      pillCardText: {
        ...typography.whoItsFor.cardText,
        color: colors.whoItsFor.cardText,
        wordBreak: "break-word",
      },

      // ---- Content container (below pills) ----
      contentContainer: {
        px: spacing.whoItsFor.contentPx,
        py: spacing.whoItsFor.contentPy,
        overflow: "hidden",
      },

      // ---- Block row (two-column layout) ----
      blockRow: {
        container: {
          spacing: spacing.whoItsFor.blockGridSpacing,
          alignItems: "center",
          sx: { mb: spacing.whoItsFor.blockGridMb },
        },
      },

      // ---- Text column ----
      textBox: {
        maxWidth: spacing.whoItsFor.textBoxMaxWidth,
        mx: { xs: "auto", sm: 0 },
        textAlign: { xs: "center", sm: "left" },
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", sm: "flex-start" },
        px: spacing.whoItsFor.textBoxPaddingX,
      },
      blockTitle: {
        ...typography.whoItsFor.blockTitle,
        color: colors.whoItsFor.blockTitle,
        mb: spacing.whoItsFor.blockTitleMb,
      },
      blockTitleSmall: {
        ...typography.whoItsFor.blockTitleSmall,
        color: colors.whoItsFor.blockTitle,
        mb: spacing.whoItsFor.blockTitleMb,
      },
      body: {
        ...typography.whoItsFor.body,
        color: colors.whoItsFor.body,
        mb: spacing.whoItsFor.bodyMb,
        maxWidth: spacing.whoItsFor.bodyMaxWidth,
      },
      bodySmall: {
        ...typography.whoItsFor.body,
        color: colors.whoItsFor.body,
        mb: spacing.whoItsFor.bodyMb,
        maxWidth: spacing.whoItsFor.bodyMaxWidthSmall,
      },
      accent: {
        ...typography.whoItsFor.accent,
        color: colors.whoItsFor.accent,
      },

      // ---- Buttons ----
      buttonStack: {
        direction: { xs: "column", sm: "row" },
        spacing: spacing.whoItsFor.buttonStackSpacing,
        sx: { width: { xs: "100%", sm: "auto" } },
      },
      button: {
        width: { xs: "100%", sm: "auto" },
        maxWidth: spacing.whoItsFor.buttonMaxWidth,
        height: spacing.whoItsFor.buttonHeight,
        px: spacing.whoItsFor.buttonPaddingX,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: spacing.whoItsFor.buttonRadius,
        color: "#fff",
        ...typography.whoItsFor.button,
        cursor: "pointer",
        whiteSpace: "nowrap",
        position: "relative",
        transition: "all 0.3s ease",
        border: "none",
        mx: { xs: "auto", sm: 0 },
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: spacing.whoItsFor.buttonRadius,
          padding: "2px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        },
      },
      button1: {
        background: colors.whoItsFor.button1Bg,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        fontSize: { xs: "0.75rem", sm: "0.65rem", md: "0.75rem", lg: "1rem" },
        "&::before": {
          background: colors.whoItsFor.button1BorderGradient,
        },
        "&:hover": {
          background: colors.whoItsFor.button1HoverBg,
          boxShadow: colors.whoItsFor.button1Shadow,
        },
      },
      button2: {
        background: colors.whoItsFor.button2Bg,
        backdropFilter: "blur(179.913px)",
        WebkitBackdropFilter: "blur(179.913px)",
        boxShadow: colors.whoItsFor.button2Shadow,
        fontSize: { xs: "0.75rem", sm: "0.65rem", md: "0.75rem", lg: "1rem" },
        "&::before": {
          background: colors.whoItsFor.button2BorderGradient,
        },
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: colors.whoItsFor.button2ShadowHover,
          background: colors.whoItsFor.button2HoverBg,
        },
      },

      // ---- Image card ----
      imageColumn: {
        display: "flex",
        justifyContent: "center",
      },
      imageCard: {
        width: "100%",
        maxWidth: spacing.whoItsFor.imageCardMaxWidth,
        height: spacing.whoItsFor.imageCardHeight,
        borderRadius: spacing.whoItsFor.imageCardRadius,
        backgroundColor: colors.whoItsFor.imagePlaceholderBg,
        overflow: "hidden",
        transition: "all 0.3s ease",
        "& img": { transition: "transform 0.5s ease" },
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: colors.whoItsFor.imageCardShadowHover,
        },
        "&:hover img": { transform: "scale(1.05)" },
      },
      imageInner: {
        width: "100%",
        height: "100%",
        position: "relative",
      },
    },
    // =========================================================
    // FACILITATION HEADER SECTION
    // =========================================================
    facilitationHeader: {
      // ---- Section wrapper ----
      section: {
        py: spacing.facilitationHeader.sectionPy,
      },

      // ---- Grid ----
      grid: {
        container: {
          spacing: spacing.facilitationHeader.gridSpacing,
          alignItems: "center",
        },
      },

      // ---- Image column ----
      imageBox: {
        width: "100%",
        height: spacing.facilitationHeader.imageHeight,
        borderRadius: spacing.facilitationHeader.imageRadius,
        overflow: "hidden",
        position: "relative",

        "& img": {
          transition: "transform 0.6s ease",
        },
        "&:hover img": {
          transform: "scale(1.05)",
        },
      },
      image: {
        objectFit: "cover",
      },

      // ---- Text column ----
      textBox: {
        textAlign: { xs: "center", sm: "left", md: "left" },
      },
      sectionHeaderSx: {
        mb: spacing.facilitationHeader.titleMb,
        alignItems: { xs: "center", sm: "flex-start" },
        textAlign: { xs: "center", sm: "left" },
      },
      title: {
        fontFamily: typography.facilitationHeader.sectionTitle.fontFamily,
        fontWeight: typography.facilitationHeader.sectionTitle.fontWeight,
        fontSize: typography.facilitationHeader.sectionTitle.fontSize,
        lineHeight: typography.facilitationHeader.sectionTitle.lineHeight,
        letterSpacing: typography.facilitationHeader.sectionTitle.letterSpacing,
        color: colors.facilitationHeader.sectionTitle,
      },
      body: {
        fontFamily: typography.facilitationHeader.body.fontFamily,
        fontWeight: typography.facilitationHeader.body.fontWeight,
        fontSize: typography.facilitationHeader.body.fontSize,
        lineHeight: typography.facilitationHeader.body.lineHeight,
        letterSpacing: typography.facilitationHeader.body.letterSpacing,
        color: colors.facilitationHeader.body,
        px: spacing.facilitationHeader.bodyPx,
      },
    },
    // =========================================================
    // WHAT IS AUTHENTIC SECTION
    // =========================================================
    whatIsAuthentic: {
      // ---- Outer wrapper ----
      outer: {
        position: "relative",
        width: "100%",
        pt: spacing.whatIsAuthentic.outerPt,
        pb: spacing.whatIsAuthentic.outerPb,
        display: "flex",
        justifyContent: "center",
      },

      // ---- Grey background panel ----
      panel: {
        position: "absolute",
        top: spacing.whatIsAuthentic.panelTop,
        bottom: 0,
        width: "100%",
        borderRadius: spacing.whatIsAuthentic.panelRadius,
        overflow: "hidden",
        backgroundImage: `linear-gradient(${colors.whatIsAuthentic.greyPanelOverlay}, ${colors.whatIsAuthentic.greyPanelOverlay}), url('${colors.whatIsAuthentic.greyPanelImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      },

      // ---- Motion wrapper ----
      motionWrapper: {
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      },

      // ---- Card ----
      card: {
        position: "relative",
        bottom: spacing.whatIsAuthentic.cardBottom,
        width: spacing.whatIsAuthentic.cardWidth,
        maxWidth: spacing.whatIsAuthentic.cardMaxWidth,
        p: spacing.whatIsAuthentic.cardPadding,
        borderRadius: spacing.whatIsAuthentic.cardRadius,
        background: colors.whatIsAuthentic.cardGradient,
        color: colors.whatIsAuthentic.body,
        textAlign: "center",
        boxShadow: colors.whatIsAuthentic.cardShadow,
        border: colors.whatIsAuthentic.cardBorder,
      },

      // ---- Title ----
      title: {
        ...typography.whatIsAuthentic.title,
        color: colors.whatIsAuthentic.title,
        mb: spacing.whatIsAuthentic.titleMb,
        maxWidth: 400,
        mx: "auto",
      },

      // ---- Body ----
      body: {
        ...typography.whatIsAuthentic.body,
        color: colors.whatIsAuthentic.body,
        opacity: 0.95,
        mb: spacing.whatIsAuthentic.bodyMb,
      },

      // ---- Sub text ----
      subText: {
        ...typography.whatIsAuthentic.subText,
        color: colors.whatIsAuthentic.subText,
        opacity: 0.9,
        mb: spacing.whatIsAuthentic.subTextMb,
      },

      // ---- Bullet list ----
      list: {
        pl: spacing.whatIsAuthentic.listPl,
      },
      listItem: {
        alignItems: "flex-start",
        px: 0,
      },
      listItemIcon: {
        minWidth: spacing.whatIsAuthentic.bulletIconMinWidth,
        mt: "4px",
      },
      bulletDot: {
        width: spacing.whatIsAuthentic.bulletDotSize,
        height: spacing.whatIsAuthentic.bulletDotSize,
        borderRadius: "50%",
        background: colors.whatIsAuthentic.bulletDotGradient,
        border: `${spacing.whatIsAuthentic.bulletDotBorderWidth}px solid ${colors.whatIsAuthentic.bulletDotBorder}`,
      },
      bulletText: {
        ...typography.whatIsAuthentic.bulletText,
        color: colors.whatIsAuthentic.bulletText,
      },

      // ---- Footer ----
      footer: {
        ...typography.whatIsAuthentic.footer,
        color: colors.whatIsAuthentic.footer,
        opacity: 0.85,
        mt: spacing.whatIsAuthentic.footerMt,
      },

      // ---- Motion config ----
      motion: {
        card: {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.6 },
        },
      },
    },
    // =========================================================
    // BECOME A CERTIFIED SECTION
    // =========================================================
    becomeACertified: {
      // ---- Outer wrapper (both sections) ----
      wrapper: {
        width: "100%",
      },

      // =========================================================
      // HERO BANNER
      // =========================================================
      heroWrapper: {
        pt: spacing.becomeACertified.heroPt,
      },
      hero: {
        position: "relative",
        height: spacing.becomeACertified.heroHeight,
        borderRadius: spacing.becomeACertified.heroRadius,
        overflow: "hidden",
        backgroundImage: `url('${colors.becomeACertified.heroImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: spacing.becomeACertified.heroPx,
      },
      heroOverlay: {
        position: "absolute",
        inset: 0,
        background: colors.becomeACertified.heroOverlay,
        zIndex: 1,
      },
      heroContent: {
        position: "relative",
        zIndex: 2,
        maxWidth: spacing.becomeACertified.heroMaxWidth,
      },
      heroTitle: {
        ...typography.becomeACertified.heroTitle,
        color: colors.becomeACertified.heroTitle,
        mb: spacing.becomeACertified.heroTitleMb,
      },
      heroBody: {
        ...typography.becomeACertified.heroBody,
        color: colors.becomeACertified.heroBody,
      },

      // =========================================================
      // OVERVIEW SECTION
      // =========================================================
      overviewWrapper: {
        py: spacing.becomeACertified.overviewPy,
      },
      overviewGrid: {
        container: {
          spacing: spacing.becomeACertified.overviewGridSpacing,
          alignItems: "center",
        },
      },
      overviewImage: {
        width: "100%",
        height: spacing.becomeACertified.overviewImageHeight,
        backgroundColor: colors.becomeACertified.overviewImageBg,
        borderRadius: spacing.becomeACertified.overviewImageRadius,
        backgroundImage: `url('${colors.becomeACertified.overviewImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: colors.becomeACertified.overviewImageShadow,
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: colors.becomeACertified.overviewImageShadowHover,
        },
      },
      overviewTextBox: {
        textAlign: { xs: "center", sm: "left", md: "left" },
        maxWidth: spacing.becomeACertified.overviewTextMaxWidth,
        mx: { xs: "auto", sm: 0 },
        px: spacing.becomeACertified.overviewTextPx,
      },
      overviewTitle: {
        ...typography.becomeACertified.overviewTitle,
        color: colors.becomeACertified.overviewTitle,
        mb: spacing.becomeACertified.overviewTitleMb,
      },
      overviewItemStack: {
        display: "flex",
        flexDirection: "column",
        gap: spacing.becomeACertified.overviewItemGap,
      },
      overviewItem: {
        ...typography.becomeACertified.overviewItem,
        color: colors.becomeACertified.overviewItem,
      },

      // =========================================================
      // MOTION CONFIG
      // =========================================================
      motion: {
        heroDesktop: {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.7 },
        },
        heroMobile: {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
        },
        overviewSection: {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: 0.2 },
        },
        imageDesktop: {
          initial: { opacity: 0, x: -80, scale: 0.92 },
          whileInView: { opacity: 1, x: 0, scale: 1 },
          viewport: { once: true },
          transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 },
        },
        imageMobile: {
          initial: { opacity: 0, x: -100, filter: "blur(8px)" },
          whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
          viewport: { once: true },
          transition: { duration: 0.7, ease: [0.25, 0.8, 0.25, 1] },
        },
        textDesktop: {
          initial: { opacity: 0, x: 80 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 },
        },
        textMobile: {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: 0.2 },
        },
        title: {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: 0.25 },
        },
        itemDesktop: (index) => ({
          initial: { opacity: 0, x: 50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" },
        }),
        itemMobile: (index) => ({
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: 0.3 + index * 0.1 },
        }),
      },
    },
    // =========================================================
    // YOU WILL LEARN TIMELINE SECTION
    // =========================================================
    youWillLearnTimeline: {
      wrapper: { width: "100%" },

      // SiteContainer that wraps each panel
      container: {
        py: spacing.youWillLearnTimeline.containerPy,
      },

      // Panel (colored card) — index-aware
      panel: (index) => {
        const panelColor = colors.youWillLearnTimeline.panels[index];
        const isLast =
          index === colors.youWillLearnTimeline.panels.length - 1;

        return {
          position: "relative",
          overflow: "hidden",
          background: panelColor.gradient,
          borderRadius: spacing.youWillLearnTimeline.panelRadius,
          px: spacing.youWillLearnTimeline.panelPx,
          py: spacing.youWillLearnTimeline.panelPy,
          mb: isLast
            ? spacing.youWillLearnTimeline.panelLastMb
            : spacing.youWillLearnTimeline.panelMb,

          // Gradient border
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            padding: "2px",
            borderRadius: spacing.youWillLearnTimeline.panelRadius,
            background: colors.youWillLearnTimeline.panelBorderGradient,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none",
          },
        };
      },

      // Inner wrapper that narrows content
      panelInner: {
        px: spacing.youWillLearnTimeline.innerPx,
        color: colors.youWillLearnTimeline.panelText,
        mx: "auto",
        maxWidth: spacing.youWillLearnTimeline.innerMaxWidth,
      },

      // Panel title
      panelTitle: {
        ...typography.youWillLearnTimeline.panelTitle,
        color: colors.youWillLearnTimeline.panelText,
        mb: spacing.youWillLearnTimeline.titleMb,
      },

      // Timeline wrapper
      timelineWrapper: {
        position: "relative",
        pl: spacing.youWillLearnTimeline.timelinePl,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      },

      // Vertical line
      timelineLine: {
        position: "absolute",
        left: spacing.youWillLearnTimeline.lineLeft,
        top: spacing.youWillLearnTimeline.lineTop,
        bottom: spacing.youWillLearnTimeline.lineBottom,
        width: spacing.youWillLearnTimeline.lineWidth,
        backgroundColor: colors.youWillLearnTimeline.lineColor,
        zIndex: 0,
      },

      // Each row
      itemRow: {
        display: "flex",
        alignItems: "flex-start",
        mb: spacing.youWillLearnTimeline.itemMb,
        position: "relative",
        maxWidth: spacing.youWillLearnTimeline.itemMaxWidth,
      },

      // Dot
      dot: {
        width: spacing.youWillLearnTimeline.dotSize,
        height: spacing.youWillLearnTimeline.dotSize,
        borderRadius: "50%",
        backgroundColor: colors.youWillLearnTimeline.dotColor,
        flexShrink: 0,
        mr: spacing.youWillLearnTimeline.dotMr,
        zIndex: 1,
      },

      // Item text
      itemText: {
        ...typography.youWillLearnTimeline.itemText,
        color: colors.youWillLearnTimeline.panelText,
        maxWidth: spacing.youWillLearnTimeline.itemTextMaxWidth,
      },

      // Motion factories
      motion: {
        panel: (index) => ({
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: index * 0.1 },
        }),
        title: {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: 0.1 },
        },
        row: (index, stagger = 0.08) => ({
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: 0.2 + index * stagger },
        }),
        dot: (index, stagger = 0.08) => ({
          initial: { opacity: 0, scale: 0 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { duration: 0.3, delay: 0.2 + index * stagger },
        }),
        text: (index, stagger = 0.08) => ({
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: 0.25 + index * stagger },
        }),
      },

      // Title + stagger lookup (index-aligned with panels array)
      panelTitleText: colors.youWillLearnTimeline.panels.map((p) => p.title),
      panelStagger: colors.youWillLearnTimeline.panels.map((p) => p.stagger),
    },
    // =========================================================
    // ADVANCED TRAINING SECTION
    // =========================================================
    advancedTraining: {
      // ---- Container ----
      container: {
        py: spacing.advancedTraining.containerPy,
      },

      // ---- Grid ----
      grid: {
        container: {
          spacing: spacing.advancedTraining.gridSpacing,
          alignItems: "center",
        },
      },

      // =========================================================
      // TEXT COLUMN (LEFT)
      // =========================================================
      textBox: {
        textAlign: { xs: "center", sm: "left", md: "left" },
        maxWidth: spacing.advancedTraining.textBoxMaxWidth,
        mx: spacing.advancedTraining.textBoxMx,
        px: spacing.advancedTraining.textBoxPx,
      },

      title: {
        ...typography.advancedTraining.title,
        color: colors.advancedTraining.title,
        mb: spacing.advancedTraining.titleMb,
      },

      body: {
        ...typography.advancedTraining.body,
        color: colors.advancedTraining.body,
        mb: spacing.advancedTraining.bodyMb,
      },

      // ---- Modules stack ----
      modulesStack: {
        spacing: spacing.advancedTraining.modulesStackSpacing,
        sx: { alignItems: { xs: "center", sm: "flex-start" } },
      },
      moduleRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", sm: "flex-start" },
        width: "100%",
      },
      moduleDot: (index) => ({
        width: spacing.advancedTraining.moduleDotSize,
        height: spacing.advancedTraining.moduleDotSize,
        borderRadius: "50%",
        border: `${spacing.advancedTraining.moduleDotBorderWidth} solid ${colors.advancedTraining.moduleColors[index]
          }`,
        backgroundColor: "transparent",
        mr: spacing.advancedTraining.moduleDotMr,
        flexShrink: 0,
      }),
      moduleText: {
        ...typography.advancedTraining.moduleText,
        color: colors.advancedTraining.moduleText,
      },

      // ---- Button ----
      button: {
        mt: spacing.advancedTraining.buttonMt,
        maxWidth: spacing.advancedTraining.buttonMaxWidth,
        width: spacing.advancedTraining.buttonWidth,
        height: spacing.advancedTraining.buttonHeight,
        px: spacing.advancedTraining.buttonPx,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: spacing.advancedTraining.buttonRadius,
        color: colors.advancedTraining.buttonText,
        ...typography.advancedTraining.button,
        cursor: "pointer",
        whiteSpace: "nowrap",
        background: colors.advancedTraining.buttonBg,
        position: "relative",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        transition: "all 0.3s ease",
        border: "none",
        mx: { xs: "auto", sm: 0 },
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: spacing.advancedTraining.buttonRadius,
          padding: "2px",
          background: colors.advancedTraining.buttonBorderGradient,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          zIndex: -1,
          pointerEvents: "none",
        },
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: colors.advancedTraining.buttonShadowHover,
          background: colors.advancedTraining.buttonHoverBg,
        },
      },

      // =========================================================
      // CARD COLUMN (RIGHT)
      // =========================================================
      card: {
        width: "100%",
        height: spacing.advancedTraining.cardHeight,
        borderRadius: colors.advancedTraining.cardRadius,
        mx: { xs: "auto", sm: 0 },
        position: "relative",
        overflow: "hidden",
        boxShadow: colors.advancedTraining.cardShadow,

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: colors.advancedTraining.cardOverlay,
          pointerEvents: "none",
          zIndex: 2,
        },

        "& img": {
          transition: "transform 0.6s ease",
        },
        "&:hover img": {
          transform: "scale(1.05)",
        },
      },
      cardImage: {
        objectFit: "cover",
      },
      cardOverlayBox: {
        position: "absolute",
        bottom: spacing.advancedTraining.cardOverlayOffset,
        left: spacing.advancedTraining.cardOverlayOffset,
        zIndex: 3,
      },
      cardOverlayText: {
        ...typography.advancedTraining.imageOverlayText,
        color: colors.advancedTraining.cardOverlayText,
      },

      // =========================================================
      // MOTION CONFIG
      // =========================================================
      motion: {
        section: {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
        },
        textColumn: (isMobile) => ({
          initial: {
            opacity: 0,
            x: isMobile ? 0 : -60,
            y: isMobile ? 30 : 0,
          },
          whileInView: { opacity: 1, x: 0, y: 0 },
          viewport: { once: true },
          transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: isMobile ? 0.1 : 0.2,
          },
        }),
        module: (index, isMobile) => ({
          initial: {
            opacity: 0,
            x: isMobile ? 0 : -40,
            y: isMobile ? 20 : 0,
          },
          whileInView: { opacity: 1, x: 0, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: 0.3 + index * 0.1 },
        }),
        button: (isMobile) => ({
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: isMobile ? 0.5 : 0.6 },
        }),
        buttonHover: {
          whileHover: {
            scale: 1.05,
            y: -3,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          },
          whileTap: { scale: 0.95 },
        },
        card: (isMobile) => ({
          initial: {
            opacity: 0,
            scale: isMobile ? 0.95 : 0.85,
            x: isMobile ? 0 : 60,
            y: isMobile ? 30 : 0,
            rotateY: isMobile ? 0 : -15,
          },
          whileInView: { opacity: 1, scale: 1, x: 0, y: 0, rotateY: 0 },
          viewport: { once: true },
          transition: {
            duration: isMobile ? 0.5 : 0.7,
            ease: "easeOut",
            delay: 0.1,
          },
        }),
      },
    },
    // =========================================================
    // LEADERSHIP SECTION
    // =========================================================
    leadership: {
      section: {
        py: spacing.leadership.sectionPy,
      },

      // ---- Item row (image + text) ----
      itemRow: {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: spacing.leadership.itemRowGap,
        mb: spacing.leadership.itemRowMb,
        alignItems: "stretch",
      },
      itemRowReversed: {
        flexDirection: { xs: "column", md: "row-reverse" },
      },

      // ---- Image column ----
      imageColumn: {
        flex: 1,
        display: "flex",
        minWidth: 0,
      },
      imageCard: {
        width: "100%",
        height: spacing.leadership.imageHeight,
        minHeight: { md: spacing.leadership.itemMinHeight.md, lg: spacing.leadership.itemMinHeight.lg },
        borderRadius: spacing.leadership.imageCardRadius,
        overflow: "hidden",
        backgroundColor: colors.leadership.imagePlaceholderBg,
        flex: 1,
        boxShadow: spacing.leadership.imageCardShadow,
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: spacing.leadership.imageCardShadowHover,
        },
      },
      imageCardContent: {
        p: "0 !important",
        height: "100%",
      },
      imageElement: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
      imageEmptyBox: {
        width: "100%",
        height: "100%",
        bgcolor: colors.leadership.imagePlaceholderBgEmpty,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },

      // ---- Text column ----
      textColumn: {
        flex: 1,
        display: "flex",
        minWidth: 0,
      },
      textColumnInner: {
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", md: "flex-start" },
        textAlign: { xs: "center", md: "left" },
        height: "100%",
        minHeight: { md: spacing.leadership.itemMinHeight.md, lg: spacing.leadership.itemMinHeight.lg },
        borderRadius: spacing.leadership.textColumnRadius,
        p: spacing.leadership.textColumnPadding,
        width: "100%",
        flex: 1,
      },

      // ---- Item title ----
      itemTitle: {
        ...typography.leadership.itemTitle,
        mb: spacing.leadership.itemTitleMb,
        color: colors.leadership.itemTitle,
      },

      // ---- Rich HTML description ----
      richDescription: {
        ...typography.leadership.itemDescription,
        width: "100%",
        mb: spacing.leadership.richDescriptionMb,

        "& p": {
          mb: spacing.leadership.richDescParagraphMb,
          "&:last-child": { mb: 0 },
        },

        "& h3, & h4": {
          fontSize: { xs: 18, md: 20 },
          fontWeight: 600,
          mb: spacing.leadership.richDescHeadingMb,
          mt: spacing.leadership.richDescHeadingMt,
          color: colors.leadership.richDescHeading,
        },

        "& ul": {
          pl: 0,
          mt: 1,
          listStyle: "none",
        },

        "& li": {
          display: "flex",
          alignItems: "flex-start",
          gap: spacing.leadership.richDescBulletGap,
          mb: spacing.leadership.richDescBulletMb,
          fontSize: { xs: 13, sm: 13, md: 14 },

          "&::before": {
            content: '""',
            width: spacing.leadership.richDescBulletSize,
            height: spacing.leadership.richDescBulletSize,
            borderRadius: "50%",
            border: `${spacing.leadership.richDescBulletBorder} solid ${colors.leadership.richDescBulletBorder}`,
            marginTop: spacing.leadership.richDescBulletMt,
            flexShrink: 0,
          },
        },
      },

      // ---- Bottom CTA ----
      ctaContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: spacing.leadership.ctaContainerMt,
        mb: spacing.leadership.ctaContainerMb,
        pt: { xs: 4, md: 8 },                          // 👈 inner top padding
        overflow: "hidden",
      },
      ctaBanner: {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        p: spacing.leadership.ctaBannerPadding,
        borderRadius: spacing.leadership.ctaBannerRadius,
        background: colors.leadership.ctaGradient,
        color: "#fff",
        width: "100%",
        position: "relative",
        overflow: "hidden",


        // Gradient border (Figma match)
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          padding: "2px",
          background: colors.leadership.ctaBorderGradient,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        },
      },

      // ---- CTA left column ----
      ctaLeft: {
        flex: 1,
        mb: { xs: 3, md: 0 },
        textAlign: { xs: "center", md: "left" },
        borderRadius: spacing.leadership.ctaRightRadius,
        p: spacing.leadership.ctaLeftPadding,
      },
      ctaTitle: {
        ...typography.leadership.ctaTitle,
        mb: spacing.leadership.ctaHeadingMb,
      },
      ctaBody: {
        ...typography.leadership.ctaBody,
        opacity: 0.95,
      },
      ctaImageWrapper: {
        mt: spacing.leadership.ctaImageMt,
        width: "100%",
        height: spacing.leadership.ctaImageHeight,
        borderRadius: spacing.leadership.ctaImageRadius,
        overflow: "hidden",
        position: "relative",
      },

      // ---- CTA right column (coaching points) ----
      ctaRight: {
        flex: 1,
        borderRadius: spacing.leadership.ctaRightRadius,
        p: spacing.leadership.ctaRightPadding,
        display: "flex",
        flexDirection: "column",
        gap: spacing.leadership.ctaRightGap,
        background: colors.leadership.ctaRightBg,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: colors.leadership.ctaRightShadow,
        position: "relative",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          padding: "2px",
          background: colors.leadership.ctaRightBorderGradient,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        },
      },
      coachingHeading: {
        ...typography.leadership.coachingHeading,
        color: "#fff",
        mb: spacing.leadership.coachingHeadingMb,
      },
      coachingCard: {
        background: colors.leadership.coachingCardGradient,
        backdropFilter: "blur(100.386px)",
        WebkitBackdropFilter: "blur(100.386px)",
        borderRadius: spacing.leadership.coachingCardRadius,
        p: spacing.leadership.coachingCardPadding,
        boxShadow: colors.leadership.coachingCardShadow,
        transition: "transform 0.2s ease",
        "&:hover": { transform: "translateX(5px)" },
      },
      coachingCardTitle: {
        ...typography.leadership.coachingCardTitle,
      },
      coachingCardDescription: {
        ...typography.leadership.coachingCardDescription,
        mt: spacing.leadership.coachingCardDescMt,
        opacity: 0.9,
      },
    },
    // =========================================================
    // REAL RESULTS SECTION
    // =========================================================
    realResults: {
      section: {
        py: spacing.realResults?.sectionPy || { xs: 2, md: 4 },
      },

      // ---- Grid 1 ----
      grid1: {
        container: {
          spacing: spacing.realResults?.grid1Spacing || { xs: 2, sm: 3, md: 4 },
          alignItems: "center",
          justifyContent: "center",
        },
        sx: {
          mb: spacing.realResults?.grid1Mb || { xs: 4, md: 6 },
        },
      },

      // Mobile card wrapper
      mobileCardWrapper: {
        display: { xs: "flex", sm: "none" },
        justifyContent: "center",
        mb: spacing.realResults?.mobileCardMb || 3,
      },

      // Mobile card
      mobileCard: {
        width:
          spacing.realResults?.mobileCardWidth || {
            xs: "280px",
            "@media (min-width: 374px) and (max-width: 424px)": "340px",
            "@media (min-width: 425px) and (max-width: 599px)": "380px",
          },
        height:
          spacing.realResults?.mobileCardHeight || {
            xs: "170px",
            "@media (min-width: 374px) and (max-width: 424px)": "160px",
            "@media (min-width: 425px) and (max-width: 599px)": "180px",
          },
        borderRadius: spacing.realResults?.mobileCardRadius || "12px",
        overflow: "hidden",
      },

      // Image wrapper (shared)
      imageWrapper: {
        position: "relative",
        width: "100%",
        height: "100%",
      },
      imageElement: {
        objectFit: "cover",
      },

      // ---- Impact text column ----
      impactTextColumn: {
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", md: "flex-start" },
        textAlign: { xs: "center", md: "left" },
        width: "100%",
        mx: "auto",
      },
      impactTitle: {
        ...typography.realResults?.impactTitle,
        color: colors.realResults?.impactTitleColor || "#1d1d1d",
        mb: spacing.realResults?.impactTitleMb || 1.5,
      },
      impactBody: {
        ...typography.realResults?.impactBody,
        color: colors.realResults?.impactBodyColor || "#444",
        mb: spacing.realResults?.impactBodyMb || 2,
        maxWidth: spacing.realResults?.impactBodyMaxWidth || 620,
      },

      // ---- Bullet list ----
      bulletStack: {
        spacing: spacing.realResults?.bulletStackSpacing || 2,
        sx: {
          ...typography.realResults?.bulletList,
          color: colors.realResults?.bulletTextColor || "#555",
          maxWidth: spacing.realResults?.bulletStackMaxWidth || 566,
          textAlign: "left",
          alignSelf: "flex-start",
          mx: { xs: "auto", sm: 0 },
          width: "100%",
        },
      },
      bulletRow: {
        display: "flex",
        alignItems: "flex-start",
        gap: spacing.realResults?.bulletGap || 1.5,
      },
      bulletDot: (color) => ({
        width: spacing.realResults?.bulletDotSize || 16,
        height: spacing.realResults?.bulletDotSize || 16,
        borderRadius: "50%",
        border: `${spacing.realResults?.bulletDotBorder || "3px"} solid ${color}`,
        mt: spacing.realResults?.bulletDotMt || "4px",
        flexShrink: 0,
      }),
      bulletText: {
        ...typography.realResults?.bulletText,
      },

      // ---- Desktop card ----
      desktopCardWrapper: {
        display: { xs: "none", sm: "flex" },
        justifyContent: "center",
      },
      desktopCard: {
        width:
          spacing.realResults?.desktopCardWidth || {
            sm: "380px",
            md: "460px",
            lg: "720px",
          },
        height:
          spacing.realResults?.desktopCardHeight || {
            sm: "340px",
            md: "360px",
            lg: "420px",
          },
        borderRadius: spacing.realResults?.desktopCardRadius || "12px",
        overflow: "hidden",
        position: "relative",
        transition: "transform 0.3s ease",
        "&:hover": { transform: "scale(1.02)" },
      },

      // ---- Grid 2 ----
      grid2: {
        container: {
          spacing: spacing.realResults?.grid2Spacing || { xs: 3, sm: 3, md: 4 },
          alignItems: "center",
          justifyContent: "center",
        },
      },
      reimaginedTextColumn: {
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", sm: "flex-start" },
        textAlign: { xs: "center", sm: "left" },
        width: "100%",
        mx: "auto",
        px: spacing.realResults?.reimaginedTextPx || { xs: 2, sm: 0 },
      },
      reimaginedTitle: {
        ...typography.realResults?.reimaginedTitle,
        color: colors.realResults?.reimaginedTitleColor || "#1d1d1d",
        mb: spacing.realResults?.reimaginedTitleMb || { xs: 2, sm: 1.5 },
      },
      reimaginedBody: {
        ...typography.realResults?.reimaginedBody,
        color: colors.realResults?.reimaginedBodyColor || "#444",
        mb: spacing.realResults?.reimaginedBodyMb || 2,
        maxWidth:
          spacing.realResults?.reimaginedBodyMaxWidth || { xs: "100%", sm: 620 },
        px: { xs: 2, sm: 0 },
      },

      // ---- CTA banner ----
      ctaContainer: {
        my: spacing.realResults?.ctaContainerMy || { xs: 6, md: 10 },
      },
      ctaBanner: {
        background:
          colors.realResults?.ctaBg ||
          "linear-gradient(135deg, #FFD27A 0%, #FFB347 50%, #FFA726 100%)",
        borderRadius:
          spacing.realResults?.ctaBannerRadius || { xs: "20px", md: "28px" },
        px: spacing.realResults?.ctaBannerPx || { xs: 3, sm: 5, md: 8 },
        py: spacing.realResults?.ctaBannerPy || { xs: 4, sm: 5, md: 6 },
        boxShadow:
          colors.realResults?.ctaShadow || "0 10px 25px rgba(0,0,0,0.15)",
      },
      ctaInner: {
        maxWidth: spacing.realResults?.ctaInnerMaxWidth || { xs: "100%", md: "720px" },
      },
      ctaTitle: {
        ...typography.realResults?.ctaTitle,
        color: colors.realResults?.ctaTextColor || "#fff",
        mb: spacing.realResults?.ctaTitleMb || 2,
      },
      ctaBody: {
        ...typography.realResults?.ctaBody,
        color: colors.realResults?.ctaTextColor || "#fff",
        opacity: 0.95,
        mb: spacing.realResults?.ctaBodyMb || 2,
      },
      ctaBodyLast: {
        ...typography.realResults?.ctaBody,
        color: colors.realResults?.ctaTextColor || "#fff",
        opacity: 0.95,
        mb: spacing.realResults?.ctaBodyLastMb || 3,
      },
      ctaButton: {
        ...typography.realResults?.ctaButton,
        px: spacing.realResults?.ctaButtonPx || { xs: 6, md: 10 },
        py: spacing.realResults?.ctaButtonPy || { xs: 2.5, md: 3 },
        borderRadius: spacing.realResults?.ctaButtonRadius || "10px",
        color: "#fff",
        background:
          colors.realResults?.ctaButtonBg ||
          "linear-gradient(135deg, #F37A60, #E4452F)",
        position: "relative",
        overflow: "hidden",
        border: "none",
        boxShadow:
          colors.realResults?.ctaButtonShadow ||
          "0px 10px 25px rgba(0,0,0,0.25)",
        width: "100%",
        maxWidth: spacing.realResults?.ctaButtonMaxWidth || 360,
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "10px",
          padding: "2px",
          background:
            colors.realResults?.ctaButtonBorderGradient ||
            "linear-gradient(106deg, #FFFFFF 34%, rgba(255,255,255,0.1) 105%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        },
        "&:hover": {
          background:
            colors.realResults?.ctaButtonHoverBg ||
            "linear-gradient(135deg, #E96A4F, #D93C2A)",
        },
      },
    },
    // =========================================================
    // UPCOMING EVENTS SECTION
    // =========================================================
    upcomingEvents: {
      section: {
        backgroundColor: "#F8F9FA",
        py: { xs: 6, md: 10 },
      },
      header: {
        mb: { xs: 3, md: 4 },
      },
      title: {
        fontFamily: "var(--font-redhat)",
        fontWeight: 700,
        fontSize: {
          xs: "22px",
          sm: "28px",
          md: "34px",
          lg: "40px",
          xl: "44px",
        },
        lineHeight: { xs: 1.2, sm: 1.15, md: 1.1, lg: "100%" },
        letterSpacing: "0%",
        textAlign: "center",
        color: "#0077D1",
        mb: { xs: 1.5, md: 2 },
      },
      description: {
        fontFamily: "var(--font-redhat)",
        fontWeight: 400,
        fontSize: {
          xs: "14px",
          sm: "15px",
          md: "16px",
          lg: "17px",
          xl: "20px",
        },
        lineHeight: { xs: 1.6, sm: 1.5 },
        letterSpacing: "0%",
        textAlign: "center",
        color: "#444444",
        maxWidth: { xs: "100%", sm: 600, md: 650, lg: 750, xl: 850 },
        mx: "auto",
        mb: { xs: 4, sm: 5, md: 6, lg: 7, xl: 8 },
        px: { xs: 2, sm: 0 },
      },

      /* Category tabs */
      tabsContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 1.5,
        mb: 6,
        flexWrap: "wrap",
      },
      tabArrow: {
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "#4A90E2",
        fontSize: "18px",
        fontWeight: 700,
        px: 1,
        display: "flex",
        alignItems: "center",
        "&:hover": { opacity: 0.7 },
      },
      tab: (isActive) => ({
        px: 3.5,
        py: 1.2,
        borderRadius: "12px",
        border: isActive ? "none" : "1px solid #E0E0E0",
        cursor: "pointer",
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 600,
        fontSize: { xs: "12px", md: "13px" },
        transition: "all 0.3s ease",
        background: isActive
          ? "linear-gradient(135deg, #64B5F6 0%, #1E88E5 100%)"
          : "#FFFFFF",
        color: isActive ? "#fff" : "#444",
        boxShadow: isActive
          ? "0 4px 12px rgba(30, 136, 229, 0.35)"
          : "0 2px 6px rgba(0,0,0,0.04)",
        "&:hover": {
          background: isActive
            ? "linear-gradient(135deg, #42A5F5 0%, #1976D2 100%)"
            : "#F5F9FF",
          borderColor: isActive ? "none" : "#BBDEFB",
        },
      }),

      /* Grid */
      grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "24px",
        alignItems: "stretch",
      },

      /* Card */
      card: {
        p: 2,
        borderRadius: "16px",
        background:
          "linear-gradient(180deg, #E3F2FD 0%, #BBDEFB 30%, #90CAF9 70%, #64B5F6 100%)",
        boxShadow: "0 8px 24px rgba(100, 181, 246, 0.3)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        height: "auto",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 16px 40px rgba(100, 181, 246, 0.4)",
        },
      },
      imageWrapper: {
        height: "200px",
        minHeight: "200px",
        borderRadius: "12px",
        overflow: "hidden",
        mb: 2,
        background: "#fff",
        flexShrink: 0,
      },
      image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
      cardTitle: {
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
      },
      cardDescription: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 400,
        fontSize: { xs: "12px", md: "13px" },
        lineHeight: 1.6,
        color: "rgba(255,255,255,0.9)",
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        mb: 2,
      },
      metaRow: {
        display: "flex",
        alignItems: "center",
        gap: 1,
        mb: 1,
      },
      metaIcon: {
        fontSize: "14px",
        color: "#fff",
      },
      metaText: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 500,
        fontSize: { xs: "12px", md: "13px" },
        color: "#fff",
      },
      priceRow: {
        display: "flex",
        alignItems: "baseline",
        gap: 1,
        mb: 3,
      },
      price: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 700,
        fontSize: { xs: "16px", md: "18px" },
        color: "#fff",
      },
      originalPrice: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 400,
        fontSize: { xs: "12px", md: "13px" },
        color: "rgba(255,255,255,0.7)",
        textDecoration: "line-through",
      },
      buttonsContainer: {
        marginTop: "auto",
      },
      buttonRow: {
        display: "flex",
        gap: 2,
        width: "100%",
      },
      readMoreButton: {
        variant: "default",
        sx: {
          flex: 1,
          width: "50%",
          height: {
            xs: "38px",
            sm: "40px",
            md: "42px",
            lg: "44px",
            xl: "48px",
          },
          borderRadius: "10px",
          fontSize: {
            xs: "11px",
            sm: "12px",
            md: "13px",
            lg: "14px",
            xl: "15px",
          },
          background: "linear-gradient(98.48deg, #95C4FF 50%, #a2d5ff 100%)",
          color: "#fff",
          fontWeight: 500,
          fontFamily: '"Red Hat Display", sans-serif',
          textTransform: "none",
          whiteSpace: "nowrap",
          transition: "all 0.3s ease",
          "&:hover": {
            background: "linear-gradient(98.48deg, #7fb8f7 50%, #9fd0ff 100%)",
            transform: "scale(1.02)",
          },
        },
      },
      bookNowButton: {
        variant: "default",
        sx: {
          flex: 1,
          width: "50%",
          height: {
            xs: "38px",
            sm: "40px",
            md: "42px",
            lg: "44px",
            xl: "48px",
          },
          borderRadius: "10px",
          fontSize: {
            xs: "11px",
            sm: "12px",
            md: "13px",
            lg: "14px",
            xl: "15px",
          },
          background: "linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)",
          color: "#fff",
          fontWeight: 500,
          fontFamily: '"Red Hat Display", sans-serif',
          textTransform: "none",
          whiteSpace: "nowrap",
          transition: "all 0.3s ease",
          "&:hover": {
            background: "linear-gradient(98.48deg, #7fb8f7 0%, #087EDF 100%)",
            transform: "scale(1.02)",
          },
        },
      },
      loading: {
        textAlign: "center",
        py: 10,
        fontFamily: '"Red Hat Display", sans-serif',
        color: "#555555",
      },
      pagination: {
        container: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          mt: 14,
          flexWrap: "wrap",
        },
        pageNumbers: {
          display: "flex",
          gap: 1.5,
          flexWrap: "wrap",
          justifyContent: "center",
        },
        prevButton: (isDisabled) => ({
          variant: "glass",
          sx: {
            width: { xs: "100px", sm: "120px", lg: "150px" },
            height: "48px",
            borderRadius: "16px",
            fontSize: "14px",
            opacity: isDisabled ? 0.6 : 1,
            pointerEvents: isDisabled ? "none" : "auto",
            ...(isDisabled && {
              background: "rgba(219,234,254,0.6)",
              color: "#93c5fd",
            }),
          },
        }),
        nextButton: (isDisabled) => ({
          variant: "glass",
          sx: {
            width: { xs: "100px", sm: "120px", lg: "150px" },
            height: "48px",
            borderRadius: "16px",
            fontSize: "14px",
            opacity: isDisabled ? 0.6 : 1,
            pointerEvents: isDisabled ? "none" : "auto",
            ...(isDisabled && {
              background: "rgba(219,234,254,0.6)",
              color: "#93c5fd",
            }),
          },
        }),
        pageButton: (isActive) => ({
          style: {
            background: isActive
              ? "linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%)"
              : "rgba(255,255,255,0.7)",
            color: isActive ? "#ffffff" : "#1a56db",
            border: isActive
              ? "1px solid #ffffff"
              : "1px solid rgba(255,255,255,0.7)",
            boxShadow: isActive ? "0px 4px 12px rgba(0,0,0,0.2)" : "none",
          },
          className: `
        w-[48px] h-[48px] rounded-full font-redhat text-[14px]
        flex items-center justify-center transition-all duration-300
        ${isActive ? "scale-105" : "hover:scale-105 hover:bg-blue-100"}
      `,
        }),
      },
    },

    // =========================================================
    // PODCAST HERO SECTION
    // =========================================================
    podcastHero: {
      wrapper: {
        width: '100%',
        backgroundColor: '#3b9ae1',
        color: '#fff',
        pt: { xs: 14, md: 19 }, // top gap: clears the navbar
        pb: { xs: 5, md: 7 },
        overflow: 'hidden',
      },

      container: {
        px: { xs: 2.5, sm: 3, md: 0 },
      },

      stack: {
        direction: { xs: 'column', sm: 'row' },
        spacing: { xs: 0, sm: 3, md: 6 },      // xs was 4
        alignItems: { xs: 'stretch', sm: 'flex-start' },
      },

      // hero text + "Welcome to" + first paragraph (sits beside the image)
      leftBox: {
        flex: 1,
        minWidth: 0,
        textAlign: 'left',
        order: { xs: 2, sm: 1 },
        pt: { xs: 6, sm: 0 }  // gap between image and text on mobile
      },

      // image on the right, top aligned
      rightBox: {
        position: 'relative',
        order: { xs: 1, sm: 2 },
        width: { xs: '70%', sm: '38%', md: '34%' },
        flexShrink: 0,
        aspectRatio: { xs: '4 / 3', sm: '1.4 / 1', md: '1.5 / 1' },
        alignSelf: { xs: 'center', sm: 'flex-start' },
        mr: { xs: 0, sm: 3, md: 8 },   // remove the mb line here
      },
      // ---------- LEFT TEXT ----------
      eyebrow: {
        fontSize: { xs: 16, sm: 14, md: 20, lg: 24 },
        fontWeight: 600,
        lineHeight: 1.3,
        mt: { sm: 0.5, md: 1 },
        mb: 1.5,
      },

      mainTitle: {
        fontSize: { xs: 28, sm: 26, md: 40, lg: 48 },
        fontWeight: 700,
        lineHeight: 1.25,
        mb: 1.5,
      },

      hostLine: {
        fontSize: { xs: 16, sm: 16, md: 20, lg: 24 },
        fontStyle: 'italic',
        mb: 1,
      },

      platformsStack: {
        alignItems: 'center',
      },

      platformCircle: {
        width: { xs: 40, sm: 34, md: 42, lg: 46 },
        height: { xs: 40, sm: 34, md: 42, lg: 46 },
      },

      platformIcon: {
        width: '55%',
        height: '55%',
      },

      // ---------- IMAGE ----------
      mainImageWrapper: {
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: '28px',
        overflow: 'hidden',
        boxShadow: '0 12px 30px rgba(0,0,0,0.18)',
      },

      mainImage: {
        objectFit: 'cover', // plain CSS object, no { xs, md } values here
      },

      vectorOne: {
        position: 'absolute',
        top: { xs: -18, sm: -20, md: -30 },
        right: { xs: -8, sm: -18, md: -32 },
        width: { xs: 40, sm: 44, md: 64 },
        height: { xs: 40, sm: 44, md: 64 },
      },

      vectorTwo: {
        position: 'absolute',
        bottom: { xs: -18, sm: -22, md: -34 },
        left: { xs: -8, sm: -22, md: -38 },
        width: { xs: 40, sm: 44, md: 64 },
        height: { xs: 40, sm: 44, md: 64 },
      },

      vectorImage: {
        objectFit: 'contain', // plain CSS object
      },

      // ---------- DESCRIPTION ----------
      introWrapper: {
        mt: { xs: 4, sm: 4, md: 6 },
        ml: 0,
        px: 0,
      },

      restWrapper: {
        mt: { xs: 3, md: 4 },
        ml: 0,
        px: 0,
        width: '100%',
      },

      descriptionTitle: {
        mb: 1.5,
        lineHeight: 1.25,
      },

      descriptionTitleSmall: {
        fontSize: { xs: 20, sm: 16, md: 24, lg: 28 },
        fontWeight: 600,
      },

      descriptionTitleLarge: {
        fontSize: { xs: 22, sm: 20, md: 28, lg: 32 },
        fontWeight: 700,
      },

      descriptionBody: {
        fontSize: { xs: 14, sm: 13, md: 15, lg: 17 },
        lineHeight: 1.7,
        fontWeight: 400,
      },

      paragraphGap: {
        mb: { xs: 2.5, md: 3.5 },
      },

      underline: {
        textDecoration: 'underline',
        textUnderlineOffset: '3px',
      },
    },
    // =========================================================
    // MISSING VISION PAGE (Vision + Mission)
    // =========================================================
    missingVisionpage: {
      page: {
        py: spacing.missingVisionpage.pagePy,
      },

      // ---------- VISION SECTION ----------
      vision: {
        grid: {
          spacing: spacing.missingVisionpage.vision.gridSpacing,
          alignItems: "center",
          mb: spacing.missingVisionpage.vision.gridMarginBottom,
        },
        imageCard: {
          width: "100%",
          height: spacing.missingVisionpage.vision.imageHeight,
          borderRadius: colors.missingVisionpage.vision.imageRadius,
          overflow: "hidden",
          position: "relative",
        },
        image: {
          objectFit: "cover",
          transition: "transform 0.5s ease",
        },
        textWrapper: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "100%",
          textAlign: spacing.missingVisionpage.vision.textAlign,
          px: spacing.missingVisionpage.vision.textPaddingX,
        },
        title: {
          fontFamily: typography.missingVisionpage.vision.title.fontFamily,
          fontWeight: typography.missingVisionpage.vision.title.fontWeight,
          fontSize: typography.missingVisionpage.vision.title.fontSize,
          lineHeight: typography.missingVisionpage.vision.title.lineHeight,
          letterSpacing:
            typography.missingVisionpage.vision.title.letterSpacing,
          color: colors.missingVisionpage.vision.titleColor,
          mb: spacing.missingVisionpage.vision.titleMarginBottom,
        },
        body: {
          fontFamily: typography.missingVisionpage.vision.body.fontFamily,
          fontWeight: typography.missingVisionpage.vision.body.fontWeight,
          fontSize: typography.missingVisionpage.vision.body.fontSize,
          lineHeight: typography.missingVisionpage.vision.body.lineHeight,
          letterSpacing:
            typography.missingVisionpage.vision.body.letterSpacing,
          color: colors.missingVisionpage.vision.textColor,
          "& span": {
            fontFamily: typography.missingVisionpage.vision.body.fontFamily,
            fontWeight: typography.missingVisionpage.vision.bodyBold.fontWeight,
            fontSize: "inherit",
            lineHeight: "inherit",
          },
        },
        paragraph: {
          mb: spacing.missingVisionpage.vision.paragraphMarginBottom,
        },
      },

      // ---------- MISSION SECTION ----------
      mission: {
        card: {
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: spacing.missingVisionpage.mission.flexGap,
          p: spacing.missingVisionpage.mission.cardPadding,
          borderRadius: colors.missingVisionpage.mission.cardRadius,
          background: colors.missingVisionpage.mission.cardBackground,
          boxShadow: colors.missingVisionpage.mission.cardShadow,
          minHeight: spacing.missingVisionpage.mission.cardMinHeight,
          alignItems: "center",
        },

        // Mobile-only image at top
        mobileImageWrapper: {
          display: { xs: "block", md: "none" },
          width: "100%",
          height: spacing.missingVisionpage.mission.mobileImageHeight,
          borderRadius: colors.missingVisionpage.mission.imageRadius,
          overflow: "hidden",
          position: "relative",
          mb: spacing.missingVisionpage.mission.mobileImageMarginBottom,
        },

        // Left content column
        content: {
          flex: 1,
          color: colors.missingVisionpage.mission.textColor,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          fontFamily: "var(--font-redhat)",
        },

        title: {
          fontFamily: typography.missingVisionpage.mission.title.fontFamily,
          fontWeight: typography.missingVisionpage.mission.title.fontWeight,
          fontSize: typography.missingVisionpage.mission.title.fontSize,
          lineHeight: typography.missingVisionpage.mission.title.lineHeight,
          letterSpacing:
            typography.missingVisionpage.mission.title.letterSpacing,
          color: colors.missingVisionpage.mission.titleColor,
          mb: spacing.missingVisionpage.mission.titleMarginBottom,
        },

        paragraph: {
          fontFamily: typography.missingVisionpage.mission.body.fontFamily,
          fontWeight: typography.missingVisionpage.mission.body.fontWeight,
          fontSize: typography.missingVisionpage.mission.body.fontSize,
          lineHeight: typography.missingVisionpage.mission.body.lineHeight,
          letterSpacing:
            typography.missingVisionpage.mission.body.letterSpacing,
          color: colors.missingVisionpage.mission.textColor,
          mb: spacing.missingVisionpage.mission.paragraphMarginBottom,
          "& span": {
            fontWeight:
              typography.missingVisionpage.mission.bodyBold.fontWeight,
          },
        },

        list: {
          pl: spacing.missingVisionpage.mission.listPaddingLeft,
          mb: spacing.missingVisionpage.mission.paragraphMarginBottom,
          fontFamily:
            typography.missingVisionpage.mission.listItem.fontFamily ||
            "var(--font-redhat)",
          fontWeight: typography.missingVisionpage.mission.listItem.fontWeight,
          fontSize: typography.missingVisionpage.mission.listItem.fontSize,
          lineHeight: typography.missingVisionpage.mission.listItem.lineHeight,
          "& li": {
            mb: spacing.missingVisionpage.mission.listItemMarginBottom,
          },
          "& strong": {
            fontWeight:
              typography.missingVisionpage.mission.listItemBold.fontWeight,
            fontSize: "inherit",
            lineHeight: "inherit",
          },
        },

        finalLine: {
          fontWeight:
            typography.missingVisionpage.mission.finalLine.fontWeight,
          fontSize:
            typography.missingVisionpage.mission.finalLine.fontSize,
          lineHeight:
            typography.missingVisionpage.mission.finalLine.lineHeight,
          mt: spacing.missingVisionpage.mission.finalLineMarginTop,
        },

        // Desktop image on right
        desktopImageWrapper: {
          flex: 1,
          width: "100%",
          height: spacing.missingVisionpage.mission.desktopImageHeight,
          borderRadius: colors.missingVisionpage.mission.imageRadius,
          overflow: "hidden",
          position: "relative",
          mt: spacing.missingVisionpage.mission.desktopImageMarginTop,
        },

        image: {
          objectFit: "cover",
          objectPosition: "center",
          transition: "transform 0.5s ease",
          "&:hover": { transform: "scale(1.05)" },
        },
      },
    },


    // =========================================================
    // FAQ SECTION
    // =========================================================
    faq: {
      motionBox: { py: 5 },
      headerBox: { textAlign: "left", width: "100%", mb: 4 },
      eyebrow: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 600,
        fontSize: "14px",
        textTransform: "uppercase",
        letterSpacing: "2px",
        color: "#FE7C68",
        mb: 1,
      },
      title: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 700,
        fontSize: { xs: "28px", sm: "36px", md: "48px" },
        lineHeight: 1,
        letterSpacing: 0,
        color: "#FE7C68",
        mb: 2,
      },
      description: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 500,
        fontSize: { xs: "14px", sm: "15px", md: "16px" },
        lineHeight: "170%",
        letterSpacing: 0,
        color: "#444444",
        maxWidth: "100%",
      },
      mainGrid: { mt: 4 },
      sidebarGrid: {
        position: { md: "sticky" },
        top: { md: 100 },
        alignSelf: "flex-start",
      },
      sidebarTitle: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 700,
        fontSize: { xs: "16px", md: "18px" },
        lineHeight: "100%",
        letterSpacing: "0%",
        color: "#444444",
        mb: 2,
      },
      topicItem: {
        pl: 2,
        py: 0.8,
        mb: 0.5,
        cursor: "pointer",
        borderLeft: "4px solid",
        fontFamily: '"Red Hat Display", sans-serif',
        fontSize: { xs: "18px" },
        lineHeight: "100%",
        letterSpacing: "0%",
        verticalAlign: "middle",
        "&:hover": { color: "#F45B4F" },
      },
      questionsTitle: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 700,
        fontSize: { xs: "16px", md: "18px" },
        lineHeight: "100%",
        letterSpacing: "0%",
        color: "#444444",
        mb: 2,
      },
      accordion: {
        mb: 1.5,
        borderRadius: "5px",
        overflow: "hidden",
        "&:before": { display: "none" },
      },
      accordionExpanded: {
        background: "linear-gradient(91.44deg, #FF826E 0%, #DE472F 100%)",
        color: "#fff",
        borderRadius: "5px",
        backdropFilter: "blur(180px)",
        WebkitBackdropFilter: "blur(180px)",
        boxShadow: "0px 5.3px 9.67px 1.32px #0000001A",
      },
      accordionCollapsed: { background: "#fff", color: "#1F2937" },
      accordionSummary: {
        padding: "12px 16px",
        "& .MuiAccordionSummary-content": { margin: 0 },
      },
      questionText: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.5,
        wordWrap: "break-word",
        whiteSpace: "normal",
      },
      accordionDetails: { padding: "12px 16px 16px 16px" },
      answerBox: {
        fontSize: 13,
        opacity: 0.9,
        lineHeight: 1.6,
        "& *": { fontFamily: '"Red Hat Display", sans-serif' },
        "& p": {
          margin: 0,
          marginBottom: "8px",
          "&:last-child": { marginBottom: 0 },
        },
      },
    },

    // =========================================================
    // BLOG INNER HERO SECTION
    // =========================================================
    blogInnerHero: {
      section: { py: { xs: 4, md: 8 } },
      container: { maxWidth: "lg" },
      category: {
        variant: "caption",
        color: "text.secondary",
        textAlign: "center",
        display: "block",
        mb: 1,
      },
      title: {
        variant: "h4",
        textAlign: "center",
        fontWeight: 600,
        color: "#FF5A3C",
        mb: 2,
        fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
      },
      authorInfo: {
        sx: {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: 0.25 },
        },
      },
      authorStack: {
        direction: "row",
        spacing: 1,
        justifyContent: "center",
        alignItems: "center",
        mb: 4,
        flexWrap: "wrap",
      },
      authorAvatarBox: { display: "flex", alignItems: "center", gap: 1 },
      authorAvatar: {
        width: 24,
        height: 24,
        borderRadius: "50%",
        overflow: "hidden",
        position: "relative",
      },
      authorName: { variant: "body2", component: "span" },
      authorDate: { variant: "body2", component: "span" },
      authorReadTime: { variant: "body2", component: "span" },
      featuredImageWrapper: { sx: { mb: 4 } },
      featuredImage: {
        width: "100%",
        height: { xs: 200, sm: 280, md: 360 },
        bgcolor: "#e0e0e0",
        borderRadius: 2,
        mb: 1,
        position: "relative",
        overflow: "hidden",
      },
      featuredCaption: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 400,
        fontStyle: "italic",
        fontSize: "14px",
        lineHeight: "100%",
        letterSpacing: "0%",
        textAlign: "center",
        color: "text.secondary",
      },
      introParagraph: {
        fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
        lineHeight: 1.7,
        color: "text.primary",
        mb: 3,
      },
      sectionHeading: {
        variant: "h6",
        fontWeight: 600,
        mt: 4,
        mb: 1,
        fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
        color: "#FF5A3C",
      },
      bodyParagraph: {
        fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
        lineHeight: 1.7,
        color: "text.primary",
        mb: 2,
      },
      subHeading: {
        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
        color: "text.primary",
        fontWeight: 600,
        mt: 2,
      },
      quoteBox: { borderLeft: "4px solid #FF5A3C", pl: 2, my: 4 },
      quoteText: {
        fontStyle: "italic",
        variant: "h6",
        color: "#FF5A3C",
        fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
        overflow: "hidden",
        whiteSpace: "nowrap",
      },
      quoteAuthor: { variant: "body2", mt: 1, color: "text.secondary" },
      bodyImage: {
        width: "100%",
        height: { xs: 180, sm: 220, md: 260 },
        bgcolor: "#e0e0e0",
        borderRadius: 2,
        my: 3,
        position: "relative",
        overflow: "hidden",
      },
      bodyImageCaption: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 400,
        fontStyle: "italic",
        fontSize: "14px",
        lineHeight: "100%",
        letterSpacing: "0%",
        textAlign: "center",
        color: "text.secondary",
        mb: 4,
      },
      conclusion: { mt: 2, mb: 1 },
      shareSection: {
        mt: 5,
        pt: 3,
        borderTop: "1px solid",
        borderColor: "divider",
      },
      shareStack: {
        direction: { xs: "column", sm: "row" },
        spacing: 2,
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", sm: "center" },
      },
      shareLabel: { variant: "body2", color: "text.secondary" },
      shareLinks: { direction: "row", spacing: 2 },
      shareLink: {
        color: "text.secondary",
        textDecoration: "none",
        "&:hover": { color: "#FF5A3C" },
      },
    },

    // =========================================================
    // GLOBAL COMMUNITY SECTION
    // =========================================================
    globalCommunity: {
      section: {},
      container: { py: { xs: 4, sm: 5, md: 6 } },
      mainCard: {
        borderRadius: {
          xs: "20px",
          sm: "24px",
          md: "28px",
          lg: "32px",
          xl: "32px",
        },
        p: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
        background: "linear-gradient(90deg, #FC796A 0%, #FAB284 100%)",
        boxShadow: {
          xs: "0 10px 20px rgba(0,0,0,0.1)",
          sm: "0 15px 30px rgba(0,0,0,0.12)",
          md: "0 20px 40px rgba(0,0,0,0.15)",
          lg: "0 20px 40px rgba(0,0,0,0.15)",
          xl: "0 20px 40px rgba(0,0,0,0.15)",
        },
      },
      subtitle: {
        fontFamily: "var(--font-redhat)",
        fontWeight: 500,
        fontSize: { xs: "16px", sm: "20px" },
        lineHeight: 1.3,
        letterSpacing: "0%",
        color: "#fff",
        opacity: 0.9,
        textAlign: "center",
      },
      title: {
        fontFamily: "var(--font-redhat)",
        fontWeight: 700,
        fontSize: { xs: "22px", sm: "28px", md: "32px" },
        lineHeight: 1.3,
        color: "#fff",
        mt: { xs: 0.5, sm: 0.75, md: 1 },
        mb: { xs: 3, sm: 3.5, md: 4, lg: 4.5, xl: 5 },
        maxWidth: { xs: "100%", sm: 600, md: 700, lg: 800, xl: 900 },
        mx: "auto",
        textAlign: "center",
      },
      input: {
        root: {
          mb: 2,
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "rgba(255,255,255,0.5)" },
            "&:hover fieldset": { borderColor: "#fff" },
            "&.Mui-focused fieldset": { borderColor: "#fff", borderWidth: 1.5 },
          },
        },
        inputProps: { color: "#fff", borderRadius: 1.5 },
      },
      iconButton: {
        color: "#fff",
        width: { xs: 36, sm: 40, md: 42, lg: 44 },
        height: { xs: 36, sm: 40, md: 42, lg: 44 },
        border: "1px solid rgba(255,255,255,0.5)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        transition: "all 0.3s ease",
        "&:hover": { opacity: 0.85, borderColor: "#fff" },
      },
      cards: {
        spacing: { xs: 2, sm: 2, md: 2.5, lg: 3, xl: 3 },
        newsletter: {
          flex: 1,
          p: { xs: 2, sm: 2, md: 2.5, lg: 3, xl: 3 },
          borderRadius: { xs: "16px", sm: "18px", md: "20px" },
          position: "relative",
          overflow: "hidden",
          background: "rgba(255,255,255,0.22)",
          backdropFilter: "blur(138.4px)",
          WebkitBackdropFilter: "blur(138.4px)",
          border: "none",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            padding: "2px",
            background:
              "linear-gradient(106.27deg, #FFFFFF 33.98%, rgba(255,255,255,0.1) 105.14%)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none",
          },
          boxShadow: "0px 4px 7.3px 1px rgba(0,0,0,0.1)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          transition: "all 0.3s ease",
        },
        newsletterTitle: {
          fontFamily: "var(--font-redhat)",
          fontWeight: 600,
          fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "21px" },
          lineHeight: 1.2,
          textAlign: "center",
        },
        subscribeButton: {
          borderRadius: 1.5,
          textTransform: "none",
          position: "relative",
          overflow: "hidden",
          border: "none",
          background: "#2196f3",
          color: "#fff",
          px: { xs: 3, sm: 3.5, md: 4 },
          py: { xs: 1, sm: 1.1, md: 1.2 },
          fontFamily: "var(--font-redhat)",
          fontWeight: 600,
          fontSize: { xs: "13px", sm: "14px", md: "15px", lg: "16px" },
          width: { xs: "100%", sm: "80%", md: "60%", lg: "50%" },
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
          "&:hover": { transform: "translateY(-2px)" },
        },
        followUs: {
          flex: 1,
          p: { xs: 2, sm: 2, md: 2.5, lg: 3, xl: 3 },
          borderRadius: { xs: "16px", sm: "18px", md: "20px" },
          position: "relative",
          overflow: "hidden",
          background: "rgba(255,255,255,0.22)",
          backdropFilter: "blur(138.4px)",
          WebkitBackdropFilter: "blur(138.4px)",
          border: "none",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            padding: "2px",
            background:
              "linear-gradient(106.27deg, #FFFFFF 33.98%, rgba(255,255,255,0.1) 105.14%)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none",
          },
          boxShadow: "0px 4px 7.3px 1px rgba(0,0,0,0.1)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          transition: "all 0.3s ease",
        },
        followUsTitle: {
          fontFamily: "var(--font-redhat)",
          fontWeight: 600,
          fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "21px" },
          lineHeight: 1.2,
          textAlign: "center",
        },
        socialSpacing: 2,
        socialIcon: { width: "20px", height: "20px", objectFit: "contain" },
        podcast: {
          flex: 1,
          p: { xs: 2, sm: 2, md: 2.5, lg: 3, xl: 3 },
          borderRadius: { xs: "16px", sm: "18px", md: "20px" },
          position: "relative",
          overflow: "hidden",
          background: "rgba(255,255,255,0.22)",
          backdropFilter: "blur(138.4px)",
          WebkitBackdropFilter: "blur(138.4px)",
          border: "none",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            padding: "2px",
            background:
              "linear-gradient(106.27deg, #FFFFFF 33.98%, rgba(255,255,255,0.1) 105.14%)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none",
          },
          boxShadow: "0px 4px 7.3px 1px rgba(0,0,0,0.1)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          transition: "all 0.3s ease",
        },
        podcastTitle: {
          fontFamily: "var(--font-redhat)",
          fontWeight: 600,
          fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "21px" },
          lineHeight: 1.2,
          textAlign: "center",
        },
        podcastIconSpacing: 1,
        podcastIcon: {
          height: 34,
          cursor: "pointer",
          "&:hover": { opacity: 0.8 },
        },
        podcastButtonStackSpacing: 2,
        podcastButtonSpacing: { xs: 1, sm: 1, md: 2, lg: 2, xl: 2 },
        podcastButton: {
          borderRadius: { xs: "8px", sm: "10px", md: "12px" },
          textTransform: "none",
          position: "relative",
          overflow: "hidden",
          border: "none",
          background: "#2196f3",
          color: "#fff",
          px: { xs: 1.5, sm: 2 },
          py: { xs: 0.75, sm: 0.85, md: 1 },
          fontSize: { xs: "0.75rem", sm: "0.7rem", md: "0.9rem" },
          width: { xs: "200px", sm: "auto" },
          maxWidth: "100%",
          backdropFilter: "blur(80px)",
          WebkitBackdropFilter: "blur(80px)",
          transition: "all 0.3s ease",
          "&:hover": { transform: "translateY(-2px)" },
        },
      },
    },

    // =========================================================
    // REACH OUT SECTION
    // =========================================================
    reachOut: {
      container: { py: { xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }, px: 0 },
      card: {
        width: "100%",
        maxWidth: {
          xs: "100%",
          sm: "450px",
          md: "480px",
          lg: "550px",
          xl: "600px",
        },
        height: "auto",
        minHeight: {
          xs: "220px",
          sm: "260px",
          md: "300px",
          lg: "340px",
          xl: "380px",
        },
        aspectRatio: { xs: "4/3", sm: "4/3", md: "16/12", lg: "16/11" },
        borderRadius: { xs: "20px", sm: "24px", md: "28px", lg: "32px" },
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        boxShadow: "0 20px 35px -10px rgba(0,0,0,0.1)",
        hover: {
          transform: "scale(1.02)",
          boxShadow: "0 25px 40px -12px rgba(0,0,0,0.15)",
        },
        imageHover: { transform: "scale(1.05)" },
      },
      image: {
        position: "relative",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.4s ease",
      },
      grid: {
        container: {
          spacing: { xs: 4, sm: 5, md: 6 },
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
        },
        left: { display: "flex", justifyContent: "center" },
        right: {},
      },
      title: {
        variant: "h4",
        fontWeight: "bold",
        gutterBottom: true,
        fontSize: {
          xs: "24px",
          sm: "22px",
          md: "26px",
          lg: "28px",
          xl: "32px",
        },
        color: "#458001",
        textAlign: { xs: "center", sm: "left" },
        marginBottom: { xs: 3, sm: 2, md: 3 },
      },
      list: {
        spacing: { xs: 2, sm: 1.5, md: 2 },
        item: {
          display: "flex",
          alignItems: "flex-start",
          gap: { xs: 1.5, sm: 1, md: 1.5 },
          padding: { xs: 1, sm: 0.5, md: 0 },
          borderRadius: { xs: "8px", sm: "4px", md: 0 },
          background: { xs: "#f5f5f5", sm: "transparent" },
        },
        bullet: {
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "#000",
          flexShrink: 0,
          marginTop: "8px",
        },
        text: {
          variant: "body1",
          fontSize: {
            xs: "14px",
            sm: "12px",
            md: "14px",
            lg: "15px",
            xl: "16px",
          },
          lineHeight: { xs: 1.5, sm: 1.4, md: 1.5, lg: 1.6 },
          color: "#333",
        },
      },
    },

    // =========================================================
    // CONTACT SECTION
    // =========================================================
    contact: {
      section: { py: { xs: 6, sm: 8, md: 10 } },
      card: {
        borderRadius: { xs: 4, md: 6 },
        p: { xs: 2, sm: 4, md: 5, lg: 6 },
        background:
          "linear-gradient(to top, #e48a4c 0%, #f0a43c 50%, #f5b23a 70%, #f8c04a 100%)",
        boxShadow: {
          xs: "0 20px 40px rgba(0,0,0,0.1)",
          md: "0 40px 80px rgba(0,0,0,0.15)",
        },
        color: "#fff",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top right, rgba(255,255,255,0.08), transparent)",
          pointerEvents: "none",
        },
      },
      heading: {
        fontFamily: "var(--font-redhat)",
        fontWeight: 700,
        textAlign: "center",
        lineHeight: 1.2,
        letterSpacing: "-1px",
        fontSize: {
          xs: "20px",
          sm: "28px",
          md: "36px",
          lg: "44px",
          xl: "46px",
        },
        mb: 2,
      },
      subheading: {
        fontFamily: "var(--font-redhat)",
        fontWeight: 600,
        textAlign: "center",
        lineHeight: 1,
        letterSpacing: "0%",
        opacity: 0.9,
        fontSize: { xs: "14px", sm: "18px", md: "22px", lg: "24px" },
        mb: 4,
      },
      emailCard: {
        mx: "auto",
        maxWidth: { xs: "100%", sm: 600 },
        mb: 3,
        p: { xs: 2, sm: 3 },
        borderRadius: { xs: 2, sm: 1.5 },
        position: "relative",
        overflow: "hidden",
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(138.4px)",
        WebkitBackdropFilter: "blur(138.4px)",
        border: "none",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          padding: "2px",
          background:
            "linear-gradient(106.27deg, #FFFFFF 33.98%, rgba(255,255,255,0.1) 105.14%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        },
        boxShadow: "0px 4px 7.3px 1px rgba(0,0,0,0.1)",
        textAlign: "center",
      },
      emailLabel: {
        fontFamily: "var(--font-redhat)",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "28.8px",
        letterSpacing: "0%",
        textAlign: "center",
        mb: 1,
      },
      emailAddress: {
        fontFamily: "var(--font-redhat)",
        fontWeight: 600,
        fontSize: "28px",
        lineHeight: "28.8px",
        letterSpacing: "0%",
        textAlign: "center",
      },
      disclaimer: {
        fontFamily: "var(--font-redhat)",
        fontWeight: 300,
        fontSize: { xs: "12px", sm: "14px", md: "15px", lg: "18px" },
        "@media (maxWidth:320px)": { fontSize: "11px" },
        lineHeight: { xs: "20px", sm: "24px", md: "26px", lg: "28.8px" },
        letterSpacing: "0%",
        textAlign: "center",
        opacity: 0.85,
        mb: 4,
      },
      formTitle: {
        fontFamily: "var(--font-redhat)",
        fontWeight: 700,
        fontSize: { xs: "18px", sm: "22px", md: "26px", lg: "28px" },
        "@media (maxWidth:320px)": { fontSize: "16px" },
        lineHeight: 1,
        letterSpacing: "0%",
        textAlign: "center",
        mb: 3,
      },
      formRow: {
        width: { xs: "100%", sm: "100%", md: "80%" },
        margin: "auto",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 1.5, sm: 2 },
        mb: 2,
      },
      formInputWrapper: {
        width: { xs: "100%", md: "80%" },
        margin: "auto",
        position: "relative",
        borderRadius: { xs: 2, sm: 3 },
      },
      formInput: {
        "& .MuiOutlinedInput-root": {
          borderRadius: { xs: 2, sm: 1.5 },
          position: "relative",
          overflow: "hidden",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          "& fieldset": { border: "none" },
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            padding: "1.75px",
            background:
              "linear-gradient(106.27deg, #FFFFFF 33.98%, rgba(255,255,255,0.1) 105.14%)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none",
          },
          "&:hover": { background: "rgba(255,255,255,0.12)" },
          "&.Mui-focused": { background: "rgba(255,255,255,0.15)" },
        },
        "& .MuiInputBase-input": {
          color: "#fff",
          fontSize: { xs: "13px", sm: "14px", md: "16px" },
          "@media (maxWidth:320px)": { fontSize: "12px" },
          padding: { xs: "12px 14px", sm: "14px 16px" },
          "@media (maxWidth:320px)": { padding: "10px 12px" },
        },
        "& .MuiInputBase-input::placeholder": {
          color: "rgba(255,255,255,0.8)",
          opacity: 1,
        },
        "& .MuiInputBase-multiline": {
          padding: { xs: "12px 14px", sm: "14px 16px" },
        },
      },
      formHelper: {
        fontSize: { xs: 10, sm: 11 },
        color: "rgba(255,255,255,0.7)",
        textAlign: "left",
        mt: 0.5,
        ml: 1,
      },
      submitButton: {
        mt: 3,
        px: { xs: 3, sm: 4 },
        "@media (maxWidth:320px)": { px: 2.5 },
        py: { xs: 0.75, sm: 1 },
        "@media (maxWidth:320px)": { py: 0.5 },
        borderRadius: { xs: 2, sm: 1.5 },
        position: "relative",
        overflow: "hidden",
        border: "none",
        background: "rgba(255, 130, 110, 0.6)",
        backdropFilter: "blur(179.9px)",
        WebkitBackdropFilter: "blur(179.9px)",
        color: "#fff",
        textTransform: "none",
        fontWeight: 600,
        fontSize: { xs: "13px", sm: "14px", md: "16px" },
        "@media (maxWidth:320px)": { fontSize: "12px" },
        boxShadow: "0px 5.3px 9.67px 1.32px rgba(0,0,0,0.1)",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          padding: "2px",
          background:
            "linear-gradient(104.35deg, #FFFFFF 2.33%, rgba(255,255,255,0.1) 100.06%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        },
        "&:hover": {
          background: "rgba(255, 130, 110, 0.75)",
          transform: "translateY(-2px)",
          boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
        },
        "&.Mui-disabled": { opacity: 0.6, color: "#fff" },
        transition: "all 0.3s ease",
      },
    },

    // =========================================================
    // ARTICLES AND QUOTES
    // =========================================================
    articlesAndQuotes: {
      container: { py: { xs: 6, sm: 6, md: 5 } },
      articles: {
        section: { mb: { xs: 5, sm: 4, md: 5 } },
        header: { mb: 4 },
        title: {
          color: "#1976d2",
          mb: 1,
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
          lineHeight: { xs: "1.2", sm: "1.2", md: "1.1" },
        },
        description: {
          color: "#555",
          fontSize: { xs: "13px", sm: "14px", md: "15px" },
          lineHeight: { xs: "1.5", sm: "1.5", md: "1.6" },
        },
        viewAllButton: {
          maxWidth: { xs: "160px", sm: "200px", md: "240px" },
          width: { xs: "160px", sm: "200px", md: "240px" },
          height: { xs: "48px", sm: "44px", md: "48px" },
          px: { xs: 2.5, sm: 1.5, md: 2.5 },
          fontSize: { xs: "13px", sm: "12px", md: "14px" },
          borderRadius: "12px",
          background: "linear-gradient(135deg, #83c6fdff, #42a5f5)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "none",
          "&:hover": {
            background: "linear-gradient(135deg, #64b5f6, #1e88e5)",
          },
        },
        cardContainer: {
          width: "100%",
          "& > *": { flex: { sm: "1 1 0" } },
        },
        blogCard: {
          p: { xs: 1.5, sm: 1.75, md: 2 },
          borderRadius: { xs: 1, sm: 1, md: 2 },
          background:
            "linear-gradient(155deg, rgba(58, 163, 248, 0.9), rgba(121, 188, 243, 0.9), rgba(40, 157, 253, 0.9), rgba(19, 143, 245, 0.9), rgba(108, 186, 250, 0.9), rgba(71, 170, 250, 0.9))",
          backdropFilter: "blur(160px)",
          WebkitBackdropFilter: "blur(160px)",
          boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
          color: "#fff",
          height: "100%",
        },
        imageWrapper: {
          height: { xs: 120, sm: 130, md: 240 },
          borderRadius: { xs: 1, sm: 1, md: 1 },
          background: "#fff",
          mb: { xs: 1.5, sm: 1.75, md: 2 },
          overflow: "hidden",
          position: "relative",
          transition: "all 0.4s ease",
          ".card:hover &": {
            mx: { xs: -1.5, sm: -1.75, md: -2 },
            mt: { xs: -1.5, sm: -1.75, md: -2 },
          },
        },
        image: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.4s ease",
        },
        blogTitle: {
          fontWeight: 600,
          mb: 1,
          fontSize: { xs: "0.9rem", sm: "0.85rem", md: "1rem" },
        },
        blogIntro: {
          opacity: 0.95,
          mb: { xs: 1.5, sm: 1.75, md: 2 },
          fontSize: { xs: "0.75rem", sm: "0.7rem", md: "0.8125rem" },
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        },
        readMoreButton: {
          minWidth: { xs: "100px", sm: "110px", md: "130px" },
          width: { xs: "100px", sm: "110px", md: "130px" },
          height: { xs: "32px", sm: "34px", md: "38px" },
          px: { xs: 1.5, sm: 1.25, md: 2 },
          fontSize: { xs: "11px", sm: "11px", md: "13px" },
          borderRadius: "10px",
          background:
            "linear-gradient(106.27deg, rgba(255,255,255,0.26) 33.98%, rgba(255,255,255,0.05) 105.14%)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "none",
          "&:hover": {
            background:
              "linear-gradient(106.27deg, rgba(33,150,243,0.25), rgba(21,101,192,0.25))",
            boxShadow: "0 8px 20px rgba(33,150,243,0.35)",
          },
        },
      },
      quotes: {
        header: { mb: 2 },
        title: { fontWeight: 700 },
        headerRow: { mb: 4 },
        description: {
          color: "#555",
          maxWidth: 520,
          fontSize: 15,
          flex: 1,
        },
        arrowIcon: {
          fontSize: { xs: 20, sm: 28 },
          transition: "all 0.2s ease",
          borderRadius: "6px",
          padding: "4px",
        },
        scrollContainer: {
          overflowX: "auto",
          pb: 2,
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        },
        quoteCard: {
          minWidth: 320,
          minHeight: 180,
          p: 3,
          borderRadius: 3,
          color: "#fff",
          boxShadow: "0px 6px 16px rgba(0,0,0,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        quoteText: {
          fontSize: "17.7px",
          fontWeight: 700,
          fontStyle: "italic",
          fontFamily: "Red Hat Display, sans-serif",
          lineHeight: "150%",
          textAlign: "center",
        },
      },
    },

    // =========================================================
    // FOOTER STYLES
    // =========================================================
    footer: {
      container: { width: "100%", overflow: "hidden", position: "relative" },
      logoSection: {
        position: "relative",
        zIndex: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: { xs: 6, md: 10 },
        mb: { xs: "-25px", md: "20px" },
      },
      logoImage: {
        width: { xs: "250px", sm: "510px", md: "550px", lg: "900px" },
        height: "auto",
        maxWidth: "unset",
        objectFit: "contain",
      },
      heroSection: {
        position: "relative",
        height: { xs: "800px", sm: "900px", md: "920px", lg: "990px" },
        backgroundImage: "url(/footer.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 1,
        mb: { xs: "-120px", md: "-20px" },
      },
      heroOverlay: {
        position: "absolute",
        inset: 0,
        background: `
          linear-gradient(
            180deg,
            rgba(29, 29, 29, 0) 0%,
            rgba(29, 29, 29, 0.0272251) 73.56%,
            rgba(29, 29, 29, 0.4) 91.83%
          ),
          linear-gradient(
            199.78deg,
            #FFFFFF 0%,
            rgba(255, 255, 255, 0) 23.45%
          )
        `,
      },
      heroQuoteWrapper: {
        position: "absolute",
        top: { xs: "60px", sm: "80px", md: "60px" },
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 5,
        textAlign: "center",
        width: "90%",
      },
      heroQuote: {
        fontFamily: "var(--font-redhat)",
        fontWeight: 700,
        fontSize: { xs: "16px", sm: "28px", md: "56.49px" },
        lineHeight: "100%",
        letterSpacing: "0%",
        verticalAlign: "middle",
        color: "#C2BD06",
        textAlign: "center",
      },
      heroAuthor: {
        fontFamily: "var(--font-redhat)",
        fontWeight: 700,
        fontSize: { xs: "16px", sm: "18px", md: "30px" },
        lineHeight: "100%",
        letterSpacing: "0%",
        verticalAlign: "middle",
        color: "#C2BD06",
        textAlign: "right",
        mt: 2,
      },
      menuSection: {
        position: "relative",
        zIndex: 5,
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(120,150,20,0.92) 55%, rgba(88,125,18,1) 100%)",
        backdropFilter: "blur(18px)",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        px: { xs: 2.5, sm: 3, md: 5, lg: 8 },
        pt: { xs: 3, sm: 4, md: 6, lg: 7 },
        pb: { xs: 4, md: 5, lg: 6 },
      },
      accordion: {
        background: "transparent",
        color: "#fff",
        boxShadow: "none",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
        "&:before": { display: "none" },
      },
      accordionSummary: {
        fontWeight: 700,
        fontSize: "18px",
        fontFamily: "var(--font-redhat)",
      },
      accordionExpandIcon: {
        color: "#fff",
        fontSize: "28px",
        fontWeight: 300,
        lineHeight: 1,
      },
      heading: {
        color: "#fff",
        fontSize: { xs: "20px", md: "26px" },
        fontWeight: 700,
        mb: 3,
        fontFamily: "var(--font-redhat)",
      },
      link: {
        color: "rgba(255,255,255,0.9)",
        fontSize: "16px",
        fontWeight: 400,
        cursor: "pointer",
        width: "fit-content",
        transition: "0.3s",
        "&:hover": { color: "#fff", transform: "translateX(3px)" },
      },
      socialCircle: {
        width: 46,
        height: 46,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": { transform: "translateY(-4px)" },
      },
      socialIcon: { width: 18, height: 18, objectFit: "contain" },
      emailTextField: {
        "& .MuiOutlinedInput-root": {
          height: 48,
          borderRadius: "8px",
          background: "rgba(255,255,255,0.08)",
          "& fieldset": { borderColor: "rgba(255,255,255,0.7)" },
          "& input": { color: "#fff", fontSize: "14px", px: 1.5 },
        },
      },
      emailTextFieldSmall: {
        "& .MuiOutlinedInput-root": {
          height: 42,
          borderRadius: "8px",
          background: "rgba(255,255,255,0.08)",
          "& fieldset": { borderColor: "rgba(255,255,255,0.7)" },
          "& input": { color: "#fff", fontSize: "14px", px: 1.5 },
        },
      },
      submitButton: {
        height: 48,
        background: "#fff",
        color: "#6D8E1F",
        borderRadius: "8px",
        fontWeight: 700,
        textTransform: "none",
        boxShadow: "none",
        "&:hover": { background: "#f5f5f5", boxShadow: "none" },
      },
      submitButtonSmall: {
        height: 42,
        minWidth: "120px",
        background: "#fff",
        color: "#6D8E1F",
        borderRadius: "8px",
        fontWeight: 700,
        textTransform: "none",
        boxShadow: "none",
        "&:hover": { background: "#f5f5f5", boxShadow: "none" },
      },
      copyright: {
        color: "rgba(255,255,255,0.9)",
        fontSize: "12px",
        lineHeight: 1.7,
      },
      copyrightCenter: {
        color: "rgba(255,255,255,0.9)",
        fontSize: "12px",
        mt: 3,
        lineHeight: 1.7,
        textAlign: "center",
      },
      mobileDisplay: { display: { xs: "block", md: "none" } },
      tabletDisplay: { display: { xs: "none", md: "block", lg: "none" } },
      desktopDisplay: { display: { xs: "none", lg: "grid" } },
      tabletGrid: {
        display: "grid",
        gridTemplateColumns: "1fr 1.4fr 1.4fr",
        gap: 4,
      },
      desktopGrid: {
        gridTemplateColumns: "1fr 1.4fr 1.4fr 1.2fr",
        gap: 6,
      },
      tabletBottomRow: {
        mt: 5,
        display: "flex",
        flexDirection: { md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: 4,
      },
      emailRow: {
        direction: "row",
        spacing: 1.5,
        width: "100%",
        maxWidth: "520px",
        alignItems: "center",
      },
      socialStack: { direction: "row", spacing: 1.5 },
    },
    podcastSection: {
      section: {
        py: spacing.podcastSection.sectionPy,
      },

      grid: {
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: spacing.podcastSection.gridGap,
        alignItems: "center",
      },

      // ---- Left: image card ----
      imageCard: {
        position: "relative",
        width: "100%",
        maxWidth: { xs: 420, sm: 560, md: "100%" },
        mx: "auto",
        height: spacing.podcastSection.imageHeight,
        borderRadius: spacing.podcastSection.imageRadius,
        border: colors.podcastSection.imageBorder,
        boxShadow: colors.podcastSection.imageShadow,
        backgroundColor: colors.podcastSection.imagePlaceholderBg,
        overflow: "hidden",
      },
      image: {
        objectFit: "cover",
        objectPosition: "center",
      },
      logoOval: {
        position: "absolute",
        left: "50%",
        bottom: spacing.podcastSection.logoBottom,
        transform: "translateX(-50%)",
        width: spacing.podcastSection.logoWidth,
        height: spacing.podcastSection.logoHeight,
        borderRadius: "50%",
        backgroundColor: colors.podcastSection.logoBg,
        boxShadow: colors.podcastSection.logoShadow,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      logoInner: {
        position: "absolute",
        bottom: { xs: "5%", md: "6%" },
        left: "50%",
        transform: "translateX(-50%)",

        width: { xs: "62%", sm: "55%" },
        height: { xs: 250, sm: 300, md: 300, lg: 350, xl: 390 },



        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        // 👇 TOP GAP
        paddingTop: { xs: "16px", sm: "20px", md: "24px", lg: "28px" },
        paddingRight: "16px",
        paddingBottom: { xs: "8px", sm: "10px", md: "12px" },
        paddingLeft: "16px",

        overflow: "hidden",
      },

      // ---- Right: text ----
      content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "left",
        width: "100%",
      },
      title: {
        ...typography.podcastSection.title,
        color: colors.podcastSection.title,
        mb: spacing.podcastSection.titleMb,
      },
      description: {
        ...typography.podcastSection.description,
        color: colors.podcastSection.description,
        maxWidth: spacing.podcastSection.descriptionMaxWidth,
        mb: spacing.podcastSection.descriptionMb,
      },
      topTitle: {
        ...typography.podcastSection.topTitle,
        color: colors.podcastSection.topTitle,
        mb: spacing.podcastSection.topTitleMb,
      },

      // ---- Episode cards ----
      episodesGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: spacing.podcastSection.episodesGap,
        width: "100%",
        maxWidth: spacing.podcastSection.descriptionMaxWidth,
        mb: spacing.podcastSection.episodesMb,
      },
      episodeCard: {
        p: spacing.podcastSection.episodeCardPadding,
        borderRadius: spacing.podcastSection.episodeCardRadius,
        backgroundColor: colors.podcastSection.cardBg,
        border: colors.podcastSection.cardBorder,
        boxShadow: colors.podcastSection.cardShadow,
        minWidth: 0,
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: colors.podcastSection.cardShadowHover,
        },
      },
      episodeImage: {
        position: "relative",
        width: "100%",
        aspectRatio: spacing.podcastSection.episodeImageAspect,
        borderRadius: spacing.podcastSection.episodeImageRadius,
        backgroundColor: colors.podcastSection.episodeImageBg,
        overflow: "hidden",
      },
      episodeInfo: {
        mt: spacing.podcastSection.episodeInfoMt,
      },
      episodeTitle: {
        ...typography.podcastSection.episodeTitle,
        color: colors.podcastSection.episodeTitle,
        display: "-webkit-box",
        WebkitLineClamp: 1,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      },
      episodeMetaRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 0.5,
        mt: spacing.podcastSection.episodeMetaMt,
      },
      episodeMeta: {
        ...typography.podcastSection.episodeMeta,
        color: colors.podcastSection.episodeMeta,
      },
      playButton: {
        ...typography.podcastSection.playButton,
        px: spacing.podcastSection.playPx,
        py: spacing.podcastSection.playPy,
        border: "none",
        borderRadius: spacing.podcastSection.playRadius,
        backgroundColor: colors.podcastSection.playBg,
        color: colors.podcastSection.playText,
        cursor: "pointer",
        transition: "all 0.25s ease",
        "&:hover": { backgroundColor: colors.podcastSection.playHoverBg },
        "&:focus-visible": {
          outline: `2px solid ${colors.podcastSection.title}`,
          outlineOffset: 2,
        },
      },

      // ---- View all button (overrides UnifiedButton "default" variant) ----
      viewAllButton: {
        background: colors.podcastSection.buttonBg,
        boxShadow: colors.podcastSection.buttonShadow,
        minWidth: spacing.podcastSection.buttonMinWidth,
        height: spacing.podcastSection.buttonHeight,
        "&:hover": {
          background: colors.podcastSection.buttonHoverBg,
          boxShadow: colors.podcastSection.buttonHoverShadow,
        },
      },
    },
    // =========================================================
    // CLIENT TESTIMONIAL
    // =========================================================
    clientTestimonial: {
      sectionY: {
        xs: spacing.clientTestimonial.sectionY.xs,
        md: spacing.clientTestimonial.sectionY.md,
      },
      headerBottom: {
        xs: spacing.clientTestimonial.headerBottom.xs,
        md: spacing.clientTestimonial.headerBottom.md,
      },
      textBottom: {
        xs: spacing.clientTestimonial.textBottom.xs,
        md: spacing.clientTestimonial.textBottom.md,
      },
      title: {
        fontFamily: typography.clientTestimonial.title.fontFamily,
        fontWeight: typography.clientTestimonial.title.fontWeight,
        fontSize: typography.clientTestimonial.title.fontSize,
        color: colors.clientTestimonial.title,
      },
      card: {
        borderRadius: "28px",
        px: { xs: 3, sm: 5, md: 6 },
        py: { xs: 4, md: 5 },
        background: colors.clientTestimonial.cardBackground,
        boxShadow: colors.clientTestimonial.cardShadow,
        color: colors.clientTestimonial.textColor,
        display: "flex",
        flexDirection: "column",
        minHeight: { md: "220px" },
      },
      text: {
        fontFamily: typography.clientTestimonial.text.fontFamily,
        fontWeight: typography.clientTestimonial.text.fontWeight,
        fontSize: typography.clientTestimonial.text.fontSize,
        lineHeight: typography.clientTestimonial.text.lineHeight,
        letterSpacing: typography.clientTestimonial.text.letterSpacing,
      },
      userInfo: {
        display: "flex",
        alignItems: "center",
        gap: 2,
        justifyContent: "flex-end",
        textAlign: "left",
      },
      avatar: {
        width: 48,
        height: 48,
        borderRadius: "50%",
        objectFit: "cover",
      },
      userName: {
        fontFamily: typography.clientTestimonial.userName.fontFamily,
        fontWeight: typography.clientTestimonial.userName.fontWeight,
        fontSize: typography.clientTestimonial.userName.fontSize,
        color: colors.clientTestimonial.userName,
      },
      userRole: {
        fontFamily: typography.clientTestimonial.userRole.fontFamily,
        fontWeight: typography.clientTestimonial.userRole.fontWeight,
        fontSize: typography.clientTestimonial.userRole.fontSize,
        color: colors.clientTestimonial.userRole,
        opacity: typography.clientTestimonial.userRole.opacity,
      },
    },

    // =========================================================
    // COURSE CARD SECTION
    // =========================================================
    courseCard: {
      grid: {
        className:
          "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
      },
      loading: {
        className: "text-center py-10 font-dmsans",
        style: { color: colors.textSecondary },
      },
      card: {
        variant: "default",
        className: "p-4 flex flex-col h-full",
        sx: {
          background: colors.courseCard.default,
          boxShadow: colors.courseCard.shadow,
          border: "2px solid #F9F9F9",
          borderRadius: "12px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": { boxShadow: colors.courseCard.shadowHover },
        },
      },
      imageWrapper: {
        className:
          "image-wrapper h-[11rem] sm:h-[10rem] md:h-[14rem] rounded-xl2 overflow-hidden bg-white flex-shrink-0 transition-all duration-300 group-hover:mx-[-16px] group-hover:mt-[-16px] group-hover:rounded-xl2",
      },
      image: {
        className:
          "w-full h-full object-cover transition-all duration-500 group-hover:scale-110",
      },
      content: {
        className: `flex flex-col flex-1 mt-${spacing[1]} gap-${spacing[1]}`,
      },
      title: {
        className: `font-redhat font-bold pt-2 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px] xl:text-[22px] leading-[130%] line-clamp-2 min-h-[2.6em]`,
        style: { color: colors.courseCard.title },
      },
      description: {
        className: `font-redhat font-medium text-[13px] sm:text-[14px] md:text-[14px] lg:text-[15px] xl:text-[15px] leading-[180%] line-clamp-3 min-h-[5.2em]`,
        style: { color: colors.courseCard.description },
      },
      infoRow: { className: `flex items-start gap-${spacing[2]} w-full` },
      mode: {
        className: `flex-1 flex items-start gap-${spacing[2]}`,
        style: { color: colors.courseCard.description },
      },
      modeIcon: {
        className: "w-6 h-6 mt-[2px] opacity-90 shrink-0",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        viewBox: "0 0 24 24",
      },
      modeText: {
        className: `font-redhat text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[28.8px] capitalize`,
      },
      modeLabel: { className: "font-bold" },
      modeValue: { className: "font-normal" },
      priceSection: {
        className: `flex-1 flex items-start justify-between gap-${spacing[2]}`,
      },
      price: {
        className: `font-redhat font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px] xl:text-[20px] leading-[100%] whitespace-nowrap`,
        style: { color: colors.courseCard.price },
      },
      emiBadge: {
        className: "text-xs px-2 py-1 rounded whitespace-nowrap",
        style: {
          background: colors.courseCard.emiBadge.background,
          color: colors.courseCard.emiBadge.color,
        },
      },
      buttonsContainer: {
        className: `flex flex-col gap-${spacing[2]} md:gap-${spacing[3]} mt-auto pt-${spacing[4]}`,
      },
      buttonRow: { className: `flex gap-${spacing[1]} w-full` },
      readMoreButton: {
        variant: "default",
        sx: {
          flex: 1,
          width: "50%",
          height: {
            xs: "38px",
            sm: "40px",
            md: "42px",
            lg: "44px",
            xl: "48px",
          },
          borderRadius: "10px",
          fontSize: {
            xs: "11px",
            sm: "12px",
            md: "13px",
            lg: "14px",
            xl: "15px",
          },
          background: colors.courseCard.readMore.background,
          color: "#fff",
          fontWeight: typography.weights.medium,
          fontFamily: typography.fonts.body,
          textTransform: "none",
          whiteSpace: "nowrap",
          transition: "all 0.3s ease",
          "&:hover": {
            background: colors.courseCard.readMore.hoverBackground,
            transform: "scale(1.02)",
          },
        },
      },
      bookNowButton: {
        variant: "default",
        sx: {
          flex: 1,
          width: "50%",
          height: {
            xs: "38px",
            sm: "40px",
            md: "42px",
            lg: "44px",
            xl: "48px",
          },
          borderRadius: "10px",
          fontSize: {
            xs: "11px",
            sm: "12px",
            md: "13px",
            lg: "14px",
            xl: "15px",
          },
          background: colors.courseCard.buyNow.background,
          color: "#fff",
          fontWeight: typography.weights.medium,
          fontFamily: typography.fonts.body,
          textTransform: "none",
          whiteSpace: "nowrap",
          transition: "all 0.3s ease",
          "&:hover": {
            background: colors.courseCard.buyNow.hoverBackground,
            transform: "scale(1.02)",
          },
        },
      },
      pagination: {
        container: {
          className: `flex justify-center items-center gap-${spacing[4]} mt-${spacing[14]} flex-wrap`,
        },
        prevButton: (isDisabled) => ({
          variant: "glass",
          sx: {
            width: { xs: "100px", sm: "120px", lg: "150px" },
            height: "48px",
            borderRadius: "16px",
            fontSize: "14px",
            opacity: isDisabled ? 0.6 : 1,
            pointerEvents: isDisabled ? "none" : "auto",
            ...(isDisabled && {
              background: colors.pagination.disabled.background,
              color: colors.pagination.disabled.color,
            }),
          },
        }),
        pageNumbers: {
          className: `flex gap-${spacing[3]} flex-wrap justify-center`,
        },
        pageButton: (isActive) => ({
          style: {
            background: isActive
              ? colors.pagination.active.background
              : colors.pagination.inactive.background,
            color: isActive
              ? colors.pagination.active.color
              : colors.pagination.inactive.color,
            border: isActive
              ? `1px solid ${colors.pagination.active.border}`
              : `1px solid ${colors.pagination.inactive.border}`,
            boxShadow: isActive ? colors.pagination.active.shadow : "none",
          },
          className: `
        w-[48px] h-[48px] rounded-full font-redhat text-[14px]
        flex items-center justify-center transition-all duration-300
        ${isActive ? "scale-105" : "hover:scale-105 hover:bg-blue-100"}
      `,
        }),
        nextButton: (isDisabled) => ({
          variant: "glass",
          sx: {
            width: { xs: "100px", sm: "120px", lg: "150px" },
            height: "48px",
            borderRadius: "16px",
            fontSize: "14px",
            opacity: isDisabled ? 0.6 : 1,
            pointerEvents: isDisabled ? "none" : "auto",
            ...(isDisabled && {
              background: colors.pagination.disabled.background,
              color: colors.pagination.disabled.color,
            }),
          },
        }),
      },
      motion: {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        whileHover: { y: -6 },
        viewport: { once: true },
        transition: (index) => ({ duration: 0.5, delay: index * 0.08 }),
      },
    },

    // =========================================================
    // CONTAINER
    // =========================================================
    container: {
      width: "100%",
      maxWidth: {
        xs: "100%",
        sm: "100%",
        md: "1200px",
        lg: "1360px",
        xl: "1640px",
      },
      px: { xs: 2, sm: 3, md: 3, lg: 3, xl: 3 },
    },

    // =========================================================
    // HERO
    // =========================================================
    hero: {
      title: typography.hero.title,
      subtitle: typography.hero.subtitle,
      author: typography.hero.author,
    },

    // =========================================================
    // AUTHENTIC RELATING
    // =========================================================
    authenticRelating: {
      card: {
        width: "100%",
        minHeight: {
          xs: "auto",
          sm: "auto",
          md: "620px",
          lg: "700px",
          xl: "720px",
        },
        padding: {
          xs: "24px",
          sm: "32px",
          md: "40px",
          lg: "48px",
          xl: "56px",
        },
        borderRadius: {
          xs: "20px",
          sm: "22px",
          md: "24px",
          lg: "28px",
          xl: "42px",
        },
        background: colors.authenticGradient,
        boxShadow: colors.authenticCardShadow,
        color: colors.authenticText,
      },
      grid: {
        columns: { xs: "1fr", md: "1fr 2fr" },
        gap: { xs: "24px", md: "48px", lg: "68px", xl: "80px" },
      },
      image: {
        wrapperWidth: {
          xs: "180px",
          sm: "220px",
          md: "300px",
          lg: "380px",
          xl: "380px",
        },
        wrapperHeight: {
          xs: "340px",
          sm: "350px",
          md: "400px",
          lg: "490px",
          xl: "490px",
        },
        circleWidth: {
          xs: "140%",
          sm: "130%",
          md: "100%",
          lg: "110%",
          xl: "110%",
        },
        circleHeight: {
          xs: "250px",
          sm: "300px",
          md: "300px",
          lg: "450px",
          xl: "420px",
        },
        circleBackground: colors.authenticCircle,
        shadow: colors.authenticImageShadow,
      },
      header: {
        marginBottom: {
          xs: "32px",
          sm: "40px",
          md: "48px",
          lg: "56px",
          xl: "64px",
        },
      },
    },

    // =========================================================
    // TEN PRINCIPLES
    // =========================================================
    tenPrinciples: {
      section: {
        width: "100%",
        overflow: "hidden",
        background: colors.background,
      },
      container: {
        width: "100%",
        maxWidth: {
          xs: "100%",
          sm: "100%",
          md: "1200px",
          lg: "1360px",
          xl: "1640px",
        },
        px: { xs: 2, sm: 3, md: 3, lg: 3, xl: 3 },
        mx: "auto",
      },
      header: {
        width: "100%",
        textAlign: "center",
        marginBottom: {
          xs: "40px",
          sm: "48px",
          md: "56px",
          lg: "64px",
          xl: "72px",
        },
      },
      grid: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2, 1fr)",
          sm: "repeat(5, 1fr)",
          md: "repeat(5, 1fr)",
        },
        gap: {
          xs: "12px",
          sm: "16px",
          md: "20px",
          lg: "24px",
          xl: "24px",
        },
        alignItems: "stretch",
      },
      card: {
        position: "relative",
        width: "100%",
        height: {
          xs: "190px",
          sm: "180px",
          md: "220px",
          lg: "290.5px",
          xl: "290.5px",
        },
        borderRadius: { xs: "16px", sm: "18px", md: "20px" },
        overflow: "hidden",
        border: `2px solid ${colors.tenPrinciples.cardBorder}`,
        boxShadow: colors.tenPrinciples.cardShadow,
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        willChange: "transform",
        background: "#ffffff",
      },
      image: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
      overlay: {
        position: "absolute",
        inset: 0,
        background: colors.tenPrinciples.overlay,
        display: "flex",
        alignItems: "flex-end",
        padding: {
          xs: "12px",
          sm: "14px",
          md: "16px",
          lg: "16px",
          xl: "18px",
        },
        transition: "opacity 0.35s ease, transform 0.35s ease",
        opacity: { xs: 1, md: 0 },
        transform: { xs: "translateY(0)", md: "translateY(20px)" },
      },
      cta: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: {
          xs: "48px",
          sm: "56px",
          md: "64px",
          lg: "72px",
        },
      },
    },

    // =========================================================
    // SIGNATURE OFFERINGS
    // =========================================================
    signatureOfferings: {
      section: { paddingY: { xs: 6, sm: 8, md: 10, lg: 12, xl: 14 } },
      container: { paddingX: { xs: 2, sm: 3, md: 2, lg: 2, xl: 2 } },
      title: { color: "#458001", marginBottom: 2 },
      subtitle: {
        maxWidth: {
          xs: "100%",
          sm: 600,
          md: 800,
          lg: 1000,
          xl: 1200,
        },
        marginX: "auto",
        marginBottom: { xs: 4 },
        color: "#666",
        paddingX: { xs: 1, sm: 0 },
      },
      button: { marginY: { xs: 5, md: 4, lg: 5, xl: 8 } },
      mobile: {
        grid: { columns: "repeat(2, 1fr)", gap: 2, marginBottom: 4 },
        card: {
          height: 200,
          borderRadius: "12px",
          overflow: "hidden",
          position: "relative",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          image: { width: "100%", height: "100%", objectFit: "cover" },
          overlay: {
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
            display: "flex",
            alignItems: "flex-end",
            p: 1.5,
          },
          title: { color: "#fff", fontWeight: 600, fontSize: "0.8rem" },
        },
      },
      desktop: {
        container: {
          flexDirection: "column",
          gap: { sm: 3, md: 4, lg: 5 },
        },
        row: { gap: { sm: 2, md: 3, lg: 4 } },
        card: {
          width: {
            sm: "calc(33.333% - 11px)",
            md: "calc(25% - 24px)",
            lg: "calc(22% - 32px)",
            xl: "calc(20% - 30px)",
          },
          height: { xs: 190, sm: 180, md: 220, lg: 290.5, xl: 290.5 },
          borderRadius: "24px",
          overflow: "hidden",
          position: "relative",
          cursor: "pointer",
          background: "rgba(255,255,255,0.05)",
          boxShadow: `
            0 10px 30px rgba(0,0,0,0.25),
            0 4px 10px rgba(0,0,0,0.15),
            inset 0 1px 0 rgba(255,255,255,0.2)
          `,
          backdropFilter: "blur(6px)",
          transition: "all 0.4s ease",
          "&:hover": {
            transform: "translateY(-6px) scale(1.03)",
            boxShadow: `
              0 20px 50px rgba(0,0,0,0.35),
              0 10px 20px rgba(0,0,0,0.25),
              inset 0 1px 0 rgba(255,255,255,0.25)
            `,
          },
          inner: {
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: "24px",
            overflow: "hidden",
            cursor: "pointer",
            "&:hover img": { transform: "scale(1.05)" },
          },
          image: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.6s ease",
          },
          blurLayer: {
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "55%",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            maskImage: "linear-gradient(to top, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 60%, transparent 100%)",
            background: "rgba(255,255,255,0.05)",
          },
          gradientOverlay: {
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "55%",
            background: `linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)`,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            textAlign: "center",
            px: 2,
            pb: 3,
          },
          title: {
            color: "#fff",
            fontWeight: 500,
            fontSize: { xs: "18px", md: "22px" },
            lineHeight: "130%",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          },
        },
      },
    },

    // =========================================================
    // SECTION CARDS
    // =========================================================
    sectionCards: {
      section: {
        paddingY: {
          xs: "48px",
          sm: "40px",
          md: "48px",
          lg: "64px",
          xl: "80px",
        },
      },
      card: {
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 2fr" },
        alignItems: "center",
        gap: {
          xs: "16px",
          sm: "24px",
          md: "32px",
          lg: "40px",
          xl: "48px",
        },
        padding: {
          xs: "16px",
          sm: "24px",
          md: "32px",
          lg: "40px",
          xl: "48px",
        },
        marginBottom: {
          xs: "16px",
          sm: "24px",
          md: "32px",
          lg: "40px",
          xl: "48px",
        },
        borderRadius: {
          xs: "16px",
          sm: "16px",
          md: "18px",
          lg: "20px",
          xl: "22px",
        },
        background:
          "linear-gradient(-60deg, rgba(119, 129, 24, 0.95) 10%, rgba(185, 201, 48, 0.81), rgba(110,160,40,0.95) 100%)",
        backdropFilter: "blur(260px)",
        WebkitBackdropFilter: "blur(260px)",
        boxShadow: "0px 4px 7.3px 1px rgba(0,0,0,0.10)",
        color: "#ffffff",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": { boxShadow: "0px 8px 18px rgba(0,0,0,0.16)" },
        "@media (max-width:599px)": {
          "& .section-card-image": { order: 1 },
          "& .section-card-content": { order: 2 },
        },
      },
      image: {
        width: "100%",
        height: {
          xs: "180px",
          sm: "200px",
          md: "220px",
          lg: "240px",
          xl: "260px",
        },
        borderRadius: { xs: "12px", sm: "12px", md: "14px", lg: "16px" },
        objectFit: "cover",
        display: "block",
        flexShrink: 0,
        transition: "transform 0.5s ease",
        "&:hover": { transform: "scale(1.02)" },
      },
      content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minWidth: 0,
        width: "100%",
      },
      title: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 700,
        fontSize: {
          xs: "18px",
          sm: "20px",
          md: "24px",
          lg: "28px",
          xl: "30px",
        },
        lineHeight: "120%",
        letterSpacing: 0,
        marginBottom: {
          xs: "8px",
          sm: "8px",
          md: "12px",
          lg: "14px",
        },
        color: "#ffffff",
      },
      description: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 400,
        fontSize: {
          xs: "14px",
          sm: "15px",
          md: "16px",
          lg: "17px",
          xl: "18px",
        },
        lineHeight: "140%",
        letterSpacing: 0,
        opacity: 0.95,
        marginBottom: {
          xs: "20px",
          sm: "24px",
          md: "28px",
          lg: "32px",
        },
        maxWidth: "800px",
        color: "#ffffff",
      },
      buttonWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "stretch", sm: "flex-start" },
        width: "100%",
      },
      footer: {
        marginTop: {
          xs: "24px",
          sm: "32px",
          md: "40px",
          lg: "48px",
        },
        textAlign: "center",
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 400,
        fontSize: { xs: "14px", sm: "14px", md: "15px", lg: "16px" },
        lineHeight: 1.6,
        color: "#000000",
      },
      footerLink: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "4px",
        color: "#000000",
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 600,
        textDecoration: "underline",
        textUnderlineOffset: "4px",
        textDecorationThickness: "2px",
        cursor: "pointer",
        transition: "all 0.2s ease",
        "&:hover": {
          color: "#333333",
          textDecorationColor: "#333333",
          transform: "translateX(4px)",
        },
      },
      arrow: {
        marginLeft: "4px",
        display: "inline-flex",
        alignItems: "center",
        transition: "transform 0.2s ease",
      },
    },

    // =========================================================
    // GIFTS SECTION - COMPLETE
    // =========================================================
    giftsSection: {
      section: {
        py: { xs: 6, sm: 8, md: 10 },
        width: "100%",
        overflow: "hidden",
      },
      header: { mb: { xs: 4, sm: 5, md: 6 } },
      title: {
        fontFamily: "var(--font-redhat)",
        fontWeight: 700,
        fontSize: { xs: "28px", sm: "36px", md: "48px" },
        lineHeight: 1,
        letterSpacing: 0,
        textAlign: "left",
        color: "#FE7C68",
        mb: 2,
      },
      description: {
        fontFamily: "var(--font-redhat)",
        fontWeight: 500,
        fontSize: { xs: "14px", sm: "15px", md: "16px" },
        lineHeight: "170%",
        letterSpacing: 0,
        color: "#444444",
        textAlign: "left",
        maxWidth: "1440px",
      },
      grid: {
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        },
        gap: { xs: 4, sm: 4, md: 4 },
        width: "100%",
      },
      categoryTitle: {
        fontFamily: "var(--font-redhat)",
        fontWeight: 700,
        fontSize: { xs: "20px", sm: "22px", md: "28px" },
        lineHeight: 1.2,
        mb: 3,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        width: "fit-content",
      },
      card: {
        borderRadius: "12px",
        border: "1px solid #EEEEEE",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      },
      imageWrapper: {
        height: { xs: 160, sm: 150, md: 140 },
        bgcolor: "#F5F5F5",
        borderRadius: "8px",
        m: 1,
        overflow: "hidden",
        transition: "all 0.3s ease",
        ".gift-card:hover &": {
          m: 0,
          borderRadius: 0,
          height: { xs: 170, sm: 160, md: 160 },
        },
      },
      image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        transition: "transform 0.4s ease",
        ".gift-card:hover &": { transform: "scale(1.03)" },
      },
      content: {
        p: 2,
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
      },
      cardTitle: {
        fontFamily: "var(--font-redhat)",
        fontWeight: 700,
        fontSize: { xs: "16px", sm: "18px", md: "20.43px" },
        lineHeight: 1.2,
        letterSpacing: 0,
        mb: 1,
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      },
      cardDescription: {
        fontFamily: "var(--font-redhat)",
        fontWeight: 400,
        fontSize: { xs: "13px", sm: "14px", md: "14.86px" },
        lineHeight: { xs: "20px", sm: "24px", md: "26.74px" },
        letterSpacing: 0,
        color: "#444444",
        mb: 2,
        flexGrow: 1,
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      },
      button: {
        height: 42,
        borderRadius: "8px",
        textTransform: "none",
        fontFamily: "var(--font-redhat)",
        fontSize: 13,
        fontWeight: 500,
        color: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
        boxShadow: "none",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "8px",
          padding: "1.5px",
          background:
            "linear-gradient(106deg, #FFFFFF 34%, rgba(255,255,255,0.1) 105%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        },
        "&:hover": { opacity: 0.9, boxShadow: "none" },
      },
      modalOverlay: {
        position: "fixed",
        inset: 0,
        bgcolor: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(6px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 1, sm: 2 },
      },
      modalContainer: {
        width: "100%",
        maxHeight: "95vh",
        borderRadius: { xs: 2, sm: 3 },
        overflow: "hidden",
        bgcolor: "#111111",
        boxShadow: "0 20px 80px rgba(0,0,0,0.5)",
        display: "flex",
        flexDirection: "column",
      },
      modalHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: { xs: 1.5, sm: 2 },
        py: 1,
        flexShrink: 0,
      },
      modalTitle: {
        color: "#FFFFFF",
        fontFamily: "var(--font-redhat)",
        fontWeight: 600,
        fontSize: { xs: "14px", sm: "16px" },
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        pr: 2,
      },
      modalActions: {
        display: "flex",
        alignItems: "center",
        gap: 1,
        flexShrink: 0,
      },
      modalBody: { bgcolor: "#000000", overflow: "auto", flex: 1 },
      audioContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 5, sm: 6 },
        px: { xs: 2, sm: 4 },
        gap: 3,
        bgcolor: "#0D0D0D",
      },
      audioThumbnail: {
        width: { xs: 130, sm: 160 },
        height: { xs: 130, sm: 160 },
        borderRadius: "50%",
        overflow: "hidden",
        border: "4px solid #32D7E3",
        boxShadow: "0 0 30px rgba(50,215,227,0.25)",
        bgcolor: "#222222",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      audioInfo: { textAlign: "center", maxWidth: 600 },
      audioTitle: {
        fontFamily: "var(--font-redhat)",
        fontSize: 18,
        fontWeight: 600,
        color: "#FFFFFF",
        mb: 0.5,
      },
      audioDescription: {
        fontFamily: "var(--font-redhat)",
        fontSize: 13,
        color: "rgba(255,255,255,0.45)",
      },
      audioPlayer: { width: "100%", maxWidth: 480 },
      pdfContainer: {
        width: "100%",
        height: { xs: "70vh", sm: "75vh", md: "600px" },
      },
    },

    // =========================================================
    // DISCOUNT BANNER SECTION
    // =========================================================
    discountBanner: {
      container: {
        // 👇 Reduced from spacing[1] (8px) to 0 for a very tight gap
        py: {
          xs: 0,
          sm: 0,
          md: 1, // 8px on desktop
          lg: 1,
          xl: 0,
        },
      },
      banner: {
        // ... (keep all your existing banner styles here)
        borderRadius: { xs: 2, sm: 3, md: 4, lg: 5, xl: 2 },
        background: "linear-gradient(90deg, #FFB347, #FFCC70)",
        backdropFilter: "blur(26px)",
        WebkitBackdropFilter: "blur(26px)",
        boxShadow: "0px 4px 7.3px 1px #0000001A",
        display: "flex",
        alignItems: { xs: "flex-start", sm: "flex-end" },
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row-reverse", md: "row" },
        overflow: "hidden",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          padding: "1.5px",
          background:
            "linear-gradient(106.27deg, #FFFFFF 33.98%, rgba(255,255,255,0.1) 105.14%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
          zIndex: 1,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
          pointerEvents: "none",
          zIndex: 0,
        },
      },
      content: {
        maxWidth: { xs: "100%", sm: "48%", md: 480, lg: 620, xl: 720 },
        zIndex: 2,
        order: { xs: 1, sm: 2, md: 1 },
        p: { xs: 2.5, sm: 3, md: 4, lg: 5, xl: 6 },
        display: "flex",
        flexDirection: "column",
        position: "relative",
      },
      subtitle: {
        fontFamily: typography.fonts.body,
        fontWeight: typography.weights.medium,
        fontSize: {
          xs: "16px",
          sm: "12px",
          md: "20px",
          lg: "26px",
          xl: "28px",
        },
        lineHeight: "130%",
        letterSpacing: "0%",
        color: "#fff",
        mb: { xs: 1, md: 1.5 },
        textAlign: { xs: "center", sm: "left" },
      },
      title: {
        fontFamily: typography.fonts.body,
        fontWeight: typography.weights.bold,
        fontSize: {
          xs: "34px",
          sm: "25px",
          md: "40px",
          lg: "68px",
          xl: "70px",
        },
        lineHeight: { xs: 1.2, sm: 1.15, md: 1.1, lg: 1.05 },
        letterSpacing: "0%",
        color: "#fff",
        mb: { xs: 2, md: 3, lg: 4 },
        textAlign: { xs: "center", sm: "left" },
      },
      description: {
        fontFamily: typography.fonts.body,
        fontWeight: typography.weights.light,
        fontSize: {
          xs: "14px",
          sm: "10px",
          md: "13px",
          lg: "15px",
          xl: "16px",
        },
        lineHeight: { xs: 1.6, sm: 1.7, md: "22.8px" },
        letterSpacing: "0%",
        color: "#fff",
        opacity: 0.95,
        mb: { xs: 2.5, md: 3.5 },
        textAlign: { xs: "center", sm: "left" },
        maxWidth: { xs: "100%", sm: 420, md: 660 },
      },
      button: {
        textTransform: "none",
        alignSelf: { xs: "center", sm: "flex-start" },
        fontFamily: typography.fonts.body,
        fontWeight: typography.weights.semibold,
        fontSize: {
          xs: "13px",
          sm: "14px",
          md: "14px",
          lg: "15px",
          xl: "15px",
        },
        px: { xs: 3, md: 3.5 },
        height: { xs: "40px", md: "44px" },
        borderRadius: "10px",
        color: "#fff",
        background: "linear-gradient(98.48deg,#FF826E 0%,#DE472F 100%)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "7px",
          padding: "2px",
          background:
            "linear-gradient(104deg,#fff 2%,rgba(255,255,255,0.1) 100%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        },
        boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
        "&:hover": { boxShadow: "0 10px 24px rgba(0,0,0,0.3)" },
      },
      image: {
        width: { xs: 290, sm: 300, md: 400, lg: 500, xl: 500 },
        height: "auto",
        objectFit: "contain",
        alignSelf: { xs: "flex-end", sm: "flex-end" },
        order: { xs: 2, sm: 1, md: 2 },
        ml: { md: 3, lg: 4, xl: 5 },
        mr: { sm: 3, md: 2 },
        zIndex: 2,
        filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.15))",
      },
    },

    // =========================================================
    // CONNECTION SECTION
    // =========================================================
    connection: {
      section: { py: { xs: 6, sm: 8, md: 10, lg: 12, xl: 14 } },
      header: { mb: { xs: 3, md: 4 }, px: { xs: 2, md: 0 } },
      headerBox: { textAlign: "center", maxWidth: 1000, mx: "auto" },
      headerTitle: {
        fontFamily: typography.connection.headerTitle.fontFamily,
        fontWeight: typography.connection.headerTitle.fontWeight,
        fontSize: typography.connection.headerTitle.fontSize,
        lineHeight: typography.connection.headerTitle.lineHeight,
        letterSpacing: typography.connection.headerTitle.letterSpacing,
        textAlign: typography.connection.headerTitle.textAlign,
        color: colors.connection.headerTitle,
        mb: { xs: 1.5, sm: 2 },
      },
      headerDescription: {
        fontFamily: typography.connection.headerDescription.fontFamily,
        fontWeight: typography.connection.headerDescription.fontWeight,
        fontSize: typography.connection.headerDescription.fontSize,
        lineHeight: typography.connection.headerDescription.lineHeight,
        letterSpacing: typography.connection.headerDescription.letterSpacing,
        textAlign: typography.connection.headerDescription.textAlign,
        maxWidth: "1024px",
        mx: "auto",
      },
      viewModeButtons: {
        position: { xs: "static", md: "static", lg: "absolute" },
        top: { md: 0 },
        right: { md: 0 },
        display: "flex",
        flexDirection: { xs: "row", md: "row", lg: "column" },
        gap: 1,
        justifyContent: "center",
        alignItems: "center",
        mt: { xs: 2, md: 2, lg: 0 },
      },
      viewModeButton: {
        minWidth: 80,
        textTransform: "none",
        fontFamily: typography.connection.viewModeButton.fontFamily,
        fontWeight: typography.connection.viewModeButton.fontWeight,
        fontSize: typography.connection.viewModeButton.fontSize,
      },
      listView: {
        display: { xs: "flex", sm: "none" },
        flexDirection: "column",
        gap: 6,
      },
      listViewDesktop: {
        display: { xs: "none", sm: "flex" },
        flexDirection: "column",
        gap: { sm: 6, md: 8, lg: 15 },
      },
      listItem: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        height: { xs: 500, sm: 450, md: 490, lg: 540 },
      },
      listItemEven: {
        flexDirection: { xs: "column", sm: "row" },
      },
      listItemOdd: {
        flexDirection: { xs: "column-reverse", sm: "row-reverse" },
      },
      mobileImage: {
        width: "100%",
        height: 320,
        borderRadius: colors.connection.listCard.radius,
        overflow: "hidden",
        backgroundColor: colors.connection.listCard.placeholderBg,
      },
      mobileImageImg: { width: "100%", height: "100%", objectFit: "cover" },
      mobileCard: {
        width: "92%",
        mx: "auto",
        mt: -12,
        borderRadius: colors.connection.listCard.radius,
        p: 3,
        color: colors.connection.listCard.text,
        boxShadow: colors.connection.listCard.shadow,
      },
      mobileCardTitle: {
        fontFamily: typography.connection.mobileCard.title.fontFamily,
        fontWeight: typography.connection.mobileCard.title.fontWeight,
        fontSize: typography.connection.mobileCard.title.fontSize,
        textAlign: typography.connection.mobileCard.title.textAlign,
        mb: 1,
      },
      mobileCardSubtitle: {
        fontFamily: typography.connection.mobileCard.subtitle.fontFamily,
        fontWeight: typography.connection.mobileCard.subtitle.fontWeight,
        fontSize: typography.connection.mobileCard.subtitle.fontSize,
        textAlign: typography.connection.mobileCard.subtitle.textAlign,
        opacity: 0.9,
        mb: 2,
      },
      mobileCardDescription: {
        fontFamily: typography.connection.mobileCard.description.fontFamily,
        fontWeight: typography.connection.mobileCard.description.fontWeight,
        fontSize: typography.connection.mobileCard.description.fontSize,
        lineHeight: typography.connection.mobileCard.description.lineHeight,
        textAlign: typography.connection.mobileCard.description.textAlign,
      },
      mobileButtonStack: {
        direction: { xs: "row" },
        spacing: 2,
        mt: 2,
        alignSelf: "flex-start",
      },
      desktopImageWrapper: {
        width: { xs: "100%", sm: "60%", md: "65%" },
        height: "100%",
        borderRadius: colors.connection.listCard.radius,
        overflow: "hidden",
      },
      desktopImage: { width: "100%", height: "100%", objectFit: "cover" },
      desktopCard: {
        position: "absolute",
        top: "10%",
        transform: "translateY(-50%)",
        zIndex: 2,
        width: { xs: "90%", sm: 312, md: 424, lg: 570, xl: 692 },
        height: { xs: 320, sm: 390, md: 400, lg: 440 },
        borderRadius: colors.connection.listCard.radius,
        p: 4,
        color: colors.connection.listCard.text,
        boxShadow: colors.connection.listCard.desktopShadow,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
      },
      desktopCardScroll: {
        overflowY: "auto",
        pr: 1,
        flex: 1,
        minHeight: 0,
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": { width: "6px" },
        "&::-webkit-scrollbar-thumb": {
          background: colors.connection.listCard.scrollThumb,
          borderRadius: "10px",
        },
      },
      desktopCardTitle: {
        fontFamily: typography.connection.listCard.title.fontFamily,
        fontWeight: typography.connection.listCard.title.fontWeight,
        fontSize: typography.connection.listCard.title.fontSize,
        lineHeight: typography.connection.listCard.title.lineHeight,
        mb: 0.5,
      },
      desktopCardSubtitle: {
        fontFamily: typography.connection.listCard.subtitle.fontFamily,
        fontWeight: typography.connection.listCard.subtitle.fontWeight,
        fontSize: typography.connection.listCard.subtitle.fontSize,
        lineHeight: typography.connection.listCard.subtitle.lineHeight,
        opacity: 0.9,
        mb: 1.5,
      },
      desktopCardDescription: {
        fontFamily: typography.connection.listCard.description.fontFamily,
        fontWeight: typography.connection.listCard.description.fontWeight,
        fontSize: typography.connection.listCard.description.fontSize,
        lineHeight: typography.connection.listCard.description.lineHeight,
        opacity: 0.85,
      },
      desktopButtonStack: {
        direction: { xs: "column", sm: "row" },
        spacing: 2,
        mt: 2,
        alignSelf: "flex-start",
      },
      gridView: { py: 6 },
      gridContainer: {
        spacing: { xs: 2, sm: 3, md: 3 },
        justifyContent: "center",
      },
      gridItem: {
        xs: 12,
        sm: 6,
        md: 4,
        display: "flex",
        justifyContent: "stretch",
      },
      gridCard: {
        width: "100%",
        height: { xs: 370, sm: 420, md: 480, lg: 520 },
        borderRadius: colors.connection.gridCard.radiusMd,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: colors.connection.gridCard.shadowHover,
        },
      },
      gridCardMedia: {
        height: { xs: 140, sm: 140, md: 160, lg: 200 },
        flexShrink: 0,
        backgroundColor: colors.connection.gridCard.imagePlaceholder,
      },
      gridCardContent: {
        p: { xs: 1.5, sm: 2, md: 2, lg: 2.5 },
        flex: 1,
        minHeight: 0,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      },
      gridCardTitle: {
        fontFamily: typography.connection.gridCard.title.fontFamily,
        fontWeight: typography.connection.gridCard.title.fontWeight,
        fontSize: typography.connection.gridCard.title.fontSize,
        lineHeight: typography.connection.gridCard.title.lineHeight,
        mb: { xs: 1, sm: 1.5 },
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
        color: colors.connection.gridCard.titleColor,
        flexShrink: 0,
      },
      gridCardDescriptionBox: {
        flex: 1,
        minHeight: 0,
        mb: { xs: 1.5, sm: 2 },
        overflow: "hidden",
      },
      gridCardDescription: {
        fontFamily: typography.connection.gridCard.description.fontFamily,
        fontWeight: typography.connection.gridCard.description.fontWeight,
        fontSize: typography.connection.gridCard.description.fontSize,
        lineHeight: typography.connection.gridCard.description.lineHeight,
        display: "-webkit-box",
        WebkitLineClamp: 20,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
        wordBreak: "break-word",
        color: colors.connection.gridCard.descriptionColor,
        opacity: colors.connection.gridCard.descriptionOpacity,
      },
      gridButtonStack: {
        direction: "row",
        spacing: 1,
        width: "100%",
        flexShrink: 0,
      },
      readMoreButton: {
        fontFamily: typography.connection.readMoreButton.fontFamily,
        fontWeight: typography.connection.readMoreButton.fontWeight,
        textTransform: typography.connection.readMoreButton.textTransform,
        background: colors.connection.readMore.background,
        "&::before": { background: colors.connection.readMore.borderGradient },
        "&:hover": { background: colors.connection.readMore.background },
      },
      eventsButton: {
        fontFamily: typography.connection.eventsButton.fontFamily,
        fontWeight: typography.connection.eventsButton.fontWeight,
        textTransform: typography.connection.eventsButton.textTransform,
        color: colors.connection.events.text,
        background: colors.connection.events.background,
        backdropFilter: colors.connection.events.backdropBlur,
        WebkitBackdropFilter: colors.connection.events.backdropBlur,
        boxShadow: colors.connection.events.boxShadow,
        "&::before": {
          background: colors.connection.events.borderGradient,
          padding: colors.connection.events.borderThickness,
        },
        "&:hover": {
          background: colors.connection.events.hoverBackground,
          boxShadow: colors.connection.events.hoverBoxShadow,
        },
      },
      pagination: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        mt: 14,
        flexWrap: "wrap",
        px: 4,
      },
      paginationButton: {
        height: 46,
        borderRadius: "9999px",
        fontFamily: typography.connection.pagination.fontFamily,
        fontWeight: typography.connection.pagination.fontWeight,
        fontSize: typography.connection.pagination.fontSize,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        transition: "all 0.3s ease-out",
        userSelect: "none",
      },
      paginationPageNumbers: {
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        px: 2,
        py: 1.5,
        borderRadius: "9999px",
        background: "rgba(255,255,255,0.6)",
        backdropFilter: "blur(40px)",
        border: "1px solid #ffffff",
        boxShadow: "0 2px 10px rgba(8,126,223,0.08)",
      },
      paginationPageButton: {
        position: "relative",
        width: 38,
        height: 38,
        borderRadius: "9999px",
        fontFamily: typography.connection.pagination.fontFamily,
        fontWeight: typography.connection.pagination.fontWeight,
        fontSize: typography.connection.pagination.fontSize,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease-out",
        userSelect: "none",
      },
      loadingText: {
        textAlign: "center",
        mt: 4,
        fontFamily: typography.connection.loadingText.fontFamily,
        fontWeight: typography.connection.loadingText.fontWeight,
        fontSize: typography.connection.loadingText.fontSize,
      },
    },
    // =========================================================
    // CORE VALUES SECTION
    // =========================================================
    coreValues: {
      // ---- Section Wrapper ----
      section: {},

      // ---- Header ----
      header: {
        mt: spacing.coreValues.sectionHeaderMarginTop,
        mb: spacing.coreValues.sectionHeaderMarginBottom,
      },
      headerTitle: {
        fontFamily: typography.coreValues.sectionTitle.fontFamily,
        fontWeight: typography.coreValues.sectionTitle.fontWeight,
        fontSize: typography.coreValues.sectionTitle.fontSize,
        lineHeight: typography.coreValues.sectionTitle.lineHeight,
        letterSpacing: typography.coreValues.sectionTitle.letterSpacing,
        textAlign: typography.coreValues.sectionTitle.textAlign,
        color: colors.coreValues?.title || "#458001",
      },
      headerSubtitle: {
        fontFamily: typography.coreValues.sectionSubtitle.fontFamily,
        fontWeight: typography.coreValues.sectionSubtitle.fontWeight,
        fontSize: typography.coreValues.sectionSubtitle.fontSize,
        lineHeight: typography.coreValues.sectionSubtitle.lineHeight,
        letterSpacing: typography.coreValues.sectionSubtitle.letterSpacing,
        textAlign: typography.coreValues.sectionSubtitle.textAlign,
        color: colors.coreValues?.subtitle || "#666666",
        maxWidth: 720,
        mx: "auto",
      },

      // ---- Grid ----
      grid: {
        spacing: spacing.coreValues.gridSpacing,
        justifyContent: spacing.coreValues.gridJustify,
        alignItems: spacing.coreValues.gridAlignItems,
      },
      gridItem: {
        display: "flex",
        justifyContent: "center",
      },

      // ---- Card ----
      card: {
        background: "linear-gradient(135deg, var(--cv-start), var(--cv-end))",
        color: "#fff",
        p: spacing.coreValues.cardPadding,
        borderRadius: spacing.coreValues.cardBorderRadius,
        border: spacing.coreValues.cardBorder,
        textAlign: "center",
        boxShadow: spacing.coreValues.cardBoxShadow,
        width: "100%",
        minHeight: spacing.coreValues.cardMinHeight,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          transform: `translateY(${spacing.coreValues.cardHoverTranslateY}px)`,
          boxShadow: spacing.coreValues.cardBoxShadowHover,
        },
      },

      // ---- Icon ----
      icon: {
        fontSize: spacing.coreValues.iconFontSize,
        mb: spacing.coreValues.iconMarginBottom,
      },

      // ---- Card Title ----
      cardTitle: {
        fontFamily: typography.coreValues.cardTitle.fontFamily,
        fontWeight: typography.coreValues.cardTitle.fontWeight,
        fontSize: typography.coreValues.cardTitle.fontSize,
        lineHeight: typography.coreValues.cardTitle.lineHeight,
        letterSpacing: typography.coreValues.cardTitle.letterSpacing,
        mb: spacing.coreValues.titleMarginBottom,
      },

      // ---- Card Description ----
      cardDescription: {
        fontFamily: typography.coreValues.cardDescription.fontFamily,
        fontWeight: typography.coreValues.cardDescription.fontWeight,
        fontSize: typography.coreValues.cardDescription.fontSize,
        lineHeight: typography.coreValues.cardDescription.lineHeight,
        letterSpacing: typography.coreValues.cardDescription.letterSpacing,
        maxWidth: spacing.coreValues.descriptionMaxWidth,
        "& p": { margin: 0 },
        "& *": {
          fontFamily: typography.coreValues.cardDescription.fontFamily,
          fontSize: "inherit",
          lineHeight: "inherit",
        },
      },
    },
    // =========================================================
    // COMMUNITY HERO SECTION
    // =========================================================
    communityHero: {
      wrapper: {
        mb: spacing.communityHero.wrapperMb,
      },

      imageFrame: {
        position: "relative",
        width: "100%",
        aspectRatio: spacing.communityHero.aspectRatio,
        overflow: "hidden",
        boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
      },

      image: {
        objectFit: colors.communityHero.imageFit,
        objectPosition: "center",
      },

      motion: {
        section: {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, ease: "easeOut" },
        },
      },
    },
    // =========================================================
    // COMMUNITY UNIQUE SECTION
    // =========================================================
    communityUnique: {
      // ---- Container ----
      container: {
        py: spacing.communityUnique.containerPy,
        overflow: "hidden",
      },

      // =========================================================
      // TOP SECTION
      // =========================================================
      topWrapper: {
        mb: spacing.communityUnique.topBoxMb,
      },
      topBox: {
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        p: spacing.communityUnique.topBoxP,
        borderRadius: spacing.communityUnique.topBoxRadius,
        background: colors.communityUnique.topBoxGradient,
        gap: spacing.communityUnique.topBoxGap,
        color: colors.communityUnique.topBoxText,
        width: "100%",
        border: colors.communityUnique.topBoxBorder,
        boxShadow: colors.communityUnique.topBoxShadow,
      },

      // ---- Left column ----
      leftCol: {
        flex: 1,
        textAlign: { xs: "center", sm: "left" },
        borderRadius: spacing.communityUnique.leftColRadius,
        p: spacing.communityUnique.leftColP,
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", sm: "flex-start" },
      },
      leftTitle: {
        ...typography.communityUnique.topTitle,
        mb: spacing.communityUnique.leftTitleMb,
      },
      leftBody: {
        ...typography.communityUnique.topBody,
      },
      leftImage: {
        width: "100%",
        maxWidth: spacing.communityUnique.leftImageMaxWidth,
        height: "auto",
        objectFit: "cover",
        mt: spacing.communityUnique.leftImageMt,
        borderRadius: spacing.communityUnique.leftImageRadius,
      },

      // ---- Right column (coaching points) ----
      rightCol: {
        flex: 1,
        border: colors.communityUnique.rightPanelBorder,
        borderRadius: spacing.communityUnique.rightColRadius,
        p: spacing.communityUnique.rightColP,
        display: "flex",
        flexDirection: "column",
        gap: spacing.communityUnique.rightColGap,
        backgroundColor: colors.communityUnique.rightPanelBg,
      },
      coachingCard: {
        background: colors.communityUnique.coachingCardGradient,
        borderRadius: spacing.communityUnique.coachingCardRadius,
        p: spacing.communityUnique.coachingCardP,
        boxShadow: colors.communityUnique.coachingCardShadow,
      },
      coachingCardTitle: {
        ...typography.communityUnique.coachingPointTitle,
        textAlign: { xs: "center", sm: "left" },
      },

      custom: {
        // ... other sections ...

        authenticRelatingHero: {
          // ---- Section wrapper ----
          section: {
            pt: spacing.authenticRelatingHero.sectionPt,
          },

          // =========================================================
          // HERO RED PANEL
          // =========================================================
          heroPanel: {
            position: "relative",
            borderRadius: colors.authenticRelatingHero.heroPanelRadius,
            background: colors.authenticRelatingHero.heroPanelBg,
            px: colors.authenticRelatingHero.heroPanelPx,
            pt: colors.authenticRelatingHero.heroPanelPt,
            pb: colors.authenticRelatingHero.heroPanelPb,
            textAlign: "center",
            mx: colors.authenticRelatingHero.heroPanelMx,
          },

          // ---- Floating oval logo ----
          logoWrapper: {
            position: "absolute",
            left: "50%",
            top: "0%",
            transform: "translate(-50%, -50%)",
            backgroundColor: colors.authenticRelatingHero.logoBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            border: colors.authenticRelatingHero.logoBorder,
            boxShadow: colors.authenticRelatingHero.logoShadow,
            width: colors.authenticRelatingHero.logoWidth,
            height: colors.authenticRelatingHero.logoHeight,
          },
          logoInner: {
            position: "relative",
            width: colors.authenticRelatingHero.logoInnerWidth,
            height: colors.authenticRelatingHero.logoInnerHeight,
          },

          // ---- Hero body paragraphs ----
          bodyPara: {
            ...typography.authenticRelatingHero.body,
            color: colors.authenticRelatingHero.bodyColor,
            maxWidth: { xs: "100%", sm: 600, md: 900, lg: 1024 },
            mx: "auto",
            mb: { xs: 2, md: 2.5 },
            px: { xs: 1, md: 2 },
          },

          // =========================================================
          // CORE OFFERINGS
          // =========================================================
          offeringsWrapper: {
            mt: spacing.authenticRelatingHero.offeringsMt,
          },
          offeringsPanel: {
            borderRadius: colors.authenticRelatingHero.offeringsPanelRadius,
            p: colors.authenticRelatingHero.offeringsPanelPadding,
            background: colors.authenticRelatingHero.offeringsPanelBg,
            boxShadow: colors.authenticRelatingHero.offeringsPanelShadow,
          },
          offeringsTitle: {
            ...typography.authenticRelatingHero.sectionTitle,
            color: colors.authenticRelatingHero.offeringsTitleColor,
            mb: { xs: 3, md: 4, lg: 5 },
          },
          offeringsGrid: {
            container: {
              spacing: spacing.authenticRelatingHero.cardsGridSpacing,
              justifyContent: "center",
            },
            item: {
              xs: 12, sm: 6, md: 4, lg: 4, xl: 4,
              sx: { display: "flex", justifyContent: "center" },
            },
          },
          offeringCard: {
            width: "100%",
            maxWidth: spacing.authenticRelatingHero.offeringCardMaxWidth,
            height: spacing.authenticRelatingHero.offeringCardHeight,
            borderRadius: spacing.authenticRelatingHero.offeringCardRadius,
            background: colors.authenticRelatingHero.offeringCardBg,
            color: colors.authenticRelatingHero.offeringCardText,
            textAlign: "center",
            boxShadow: colors.authenticRelatingHero.offeringCardShadow,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: colors.authenticRelatingHero.offeringCardBorder,
            p: 0,
            margin: "0 auto",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-6px) scale(1.02)",
              boxShadow: colors.authenticRelatingHero.offeringCardShadowHover,
            },
          },
          offeringCardContent: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            px: spacing.authenticRelatingHero.offeringCardPaddingX,
            py: spacing.authenticRelatingHero.offeringCardPaddingY,
          },
          offeringIcon: {
            width: spacing.authenticRelatingHero.offeringIconSize,
            height: spacing.authenticRelatingHero.offeringIconSize,
            mb: spacing.authenticRelatingHero.offeringIconMb,
            position: "relative",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.4s ease",
            ".MuiCard-root:hover &": {
              transform: "scale(1.15) rotate(3deg)",
            },
          },
          offeringCardTitle: {
            ...typography.authenticRelatingHero.offeringCardTitle,
            mb: spacing.authenticRelatingHero.offeringTitleMb,
            px: 1,
          },
          offeringCardDesc: {
            ...typography.authenticRelatingHero.offeringCardDesc,
            opacity: 0.9,
            px: 0.5,
            display: { xs: "block", sm: "-webkit-box" },
            WebkitLineClamp: { xs: "none", sm: 3, md: 3, lg: 3, xl: "none" },
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          },

          // =========================================================
          // SIGNATURE SPEAKING TOPICS
          // =========================================================
          topicsWrapper: {
            py: spacing.authenticRelatingHero.topicsPy,
          },
          topicsTitle: {
            ...typography.authenticRelatingHero.sectionTitle,
            color: "#1d1d1d",
            mb: { xs: 3, md: 4 },
          },
          topicsStack: {
            spacing: spacing.authenticRelatingHero.topicsStackSpacing,
          },
          topicsPaper: {
            p: spacing.authenticRelatingHero.topicsPaperPadding,
            borderRadius: spacing.authenticRelatingHero.topicsPaperRadius,
            border: colors.authenticRelatingHero.topicsPaperBorder,
            boxShadow: colors.authenticRelatingHero.topicsPaperShadow,
          },
          topicTitle: {
            ...typography.authenticRelatingHero.topicTitle,
            color: colors.authenticRelatingHero.topicsTitleColor,
            mb: spacing.authenticRelatingHero.topicsTitleMb,
            cursor: "pointer",
            "&:hover": { textDecoration: "underline" },
          },
          topicDesc: {
            ...typography.authenticRelatingHero.topicDesc,
            color: colors.authenticRelatingHero.topicsDescColor,
          },
        },
      },
      // =========================================================
      // AUTHENTIC RELATING HERO SECTION (Speaking & Media Kit)
      // =========================================================
      authenticRelatingHero: {
        // ---- Section wrapper ----
        section: {
          pt: spacing.authenticRelatingHero.sectionPt,
        },

        // =========================================================
        // HERO RED PANEL
        // =========================================================
        heroPanel: {
          position: "relative",
          borderRadius: colors.authenticRelatingHero.heroPanelRadius,
          background: colors.authenticRelatingHero.heroPanelBg,
          px: colors.authenticRelatingHero.heroPanelPx,
          pt: colors.authenticRelatingHero.heroPanelPt,
          pb: colors.authenticRelatingHero.heroPanelPb,
          textAlign: "center",
          mx: colors.authenticRelatingHero.heroPanelMx,
        },

        // ---- Floating oval logo ----
        logoWrapper: {
          position: "absolute",
          left: "50%",
          top: "0%",
          transform: "translate(-50%, -50%)",
          backgroundColor: colors.authenticRelatingHero.logoBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          border: colors.authenticRelatingHero.logoBorder,
          boxShadow: colors.authenticRelatingHero.logoShadow,
          width: colors.authenticRelatingHero.logoWidth,
          height: colors.authenticRelatingHero.logoHeight,
        },
        logoInner: {
          position: "relative",
          width: colors.authenticRelatingHero.logoInnerWidth,
          height: colors.authenticRelatingHero.logoInnerHeight,
        },

        // ---- Hero body paragraphs ----
        bodyPara: {
          ...typography.authenticRelatingHero.body,
          color: colors.authenticRelatingHero.bodyColor,
          maxWidth: { xs: "100%", sm: 600, md: 900, lg: 1024 },
          mx: "auto",
          mb: { xs: 2, md: 2.5 },
          px: { xs: 1, md: 2 },
        },

        // =========================================================
        // CORE OFFERINGS (BLUE PANEL)
        // =========================================================
        offeringsWrapper: {
          mt: spacing.authenticRelatingHero.offeringsMt,
        },
        offeringsPanel: {
          borderRadius: colors.authenticRelatingHero.offeringsPanelRadius,
          p: colors.authenticRelatingHero.offeringsPanelPadding,
          background: colors.authenticRelatingHero.offeringsPanelBg,
          boxShadow: colors.authenticRelatingHero.offeringsPanelShadow,
        },
        offeringsTitle: {
          ...typography.authenticRelatingHero.sectionTitle,
          color: colors.authenticRelatingHero.offeringsTitleColor,
          mb: { xs: 3, md: 4, lg: 5 },
        },

        // ---- Cards grid ----
        offeringsGrid: {
          container: {
            spacing: spacing.authenticRelatingHero.cardsGridSpacing,
            justifyContent: "center",
          },
          item: {
            xs: 12,
            sm: 6,
            md: 4,
            lg: 4,
            xl: 4,
            sx: { display: "flex", justifyContent: "center" },
          },
        },

        // ---- Individual offering card ----
        offeringCard: {
          width: "100%",
          maxWidth: spacing.authenticRelatingHero.offeringCardMaxWidth,
          height: spacing.authenticRelatingHero.offeringCardHeight,
          borderRadius: spacing.authenticRelatingHero.offeringCardRadius,
          background: colors.authenticRelatingHero.offeringCardBg,
          color: colors.authenticRelatingHero.offeringCardText,
          textAlign: "center",
          boxShadow: colors.authenticRelatingHero.offeringCardShadow,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: colors.authenticRelatingHero.offeringCardBorder,
          p: 0,
          margin: "0 auto",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-6px) scale(1.02)",
            boxShadow: colors.authenticRelatingHero.offeringCardShadowHover,
          },
        },
        offeringCardContent: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: spacing.authenticRelatingHero.offeringCardPaddingX,
          py: spacing.authenticRelatingHero.offeringCardPaddingY,
        },

        // ---- Card icon ----
        offeringIcon: {
          width: spacing.authenticRelatingHero.offeringIconSize,
          height: spacing.authenticRelatingHero.offeringIconSize,
          mb: spacing.authenticRelatingHero.offeringIconMb,
          position: "relative",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.4s ease",
          ".MuiCard-root:hover &": {
            transform: "scale(1.15) rotate(3deg)",
          },
        },

        // ---- Card title ----
        offeringCardTitle: {
          ...typography.authenticRelatingHero.offeringCardTitle,
          mb: spacing.authenticRelatingHero.offeringTitleMb,
          px: 1,
        },

        // ---- Card description ----
        offeringCardDesc: {
          ...typography.authenticRelatingHero.offeringCardDesc,
          opacity: 0.9,
          px: 0.5,
          display: { xs: "block", sm: "-webkit-box" },
          WebkitLineClamp: { xs: "none", sm: 3, md: 3, lg: 3, xl: "none" },
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },

        // =========================================================
        // SIGNATURE SPEAKING TOPICS
        // =========================================================
        topicsWrapper: {
          py: spacing.authenticRelatingHero.topicsPy,
        },
        topicsTitle: {
          ...typography.authenticRelatingHero.sectionTitle,
          color: "#1d1d1d",
          mb: { xs: 3, md: 4 },
        },
        topicsStack: {
          spacing: spacing.authenticRelatingHero.topicsStackSpacing,
        },
        topicsPaper: {
          p: spacing.authenticRelatingHero.topicsPaperPadding,
          borderRadius: spacing.authenticRelatingHero.topicsPaperRadius,
          border: colors.authenticRelatingHero.topicsPaperBorder,
          boxShadow: colors.authenticRelatingHero.topicsPaperShadow,
        },
        topicTitle: {
          ...typography.authenticRelatingHero.topicTitle,
          color: colors.authenticRelatingHero.topicsTitleColor,
          mb: spacing.authenticRelatingHero.topicsTitleMb,
          cursor: "pointer",
          "&:hover": { textDecoration: "underline" },
        },
        topicDesc: {
          ...typography.authenticRelatingHero.topicDesc,
          color: colors.authenticRelatingHero.topicsDescColor,
        },
      },
      // =========================================================
      // FOUNDER INTRO SECTION
      // =========================================================
      founderIntro: {
        // ---- Outer container ----
        container: {
          py: colors.founderIntro.containerPy,
        },

        // ---- Panel wrapper ----
        panel: {
          position: "relative",
          height: colors.founderIntro.panelHeight,
          borderRadius: colors.founderIntro.panelRadius,
          overflow: "hidden",
          backgroundImage: colors.founderIntro.panelBgImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: colors.founderIntro.panelPaddingX,
        },

        // ---- Overlay: red gradient ----
        overlayGradient: {
          position: "absolute",
          inset: 0,
          background: colors.founderIntro.overlayGradient,
          zIndex: 1,
          opacity: colors.founderIntro.overlayOpacity,
        },

        // ---- Overlay: group background ----
        overlayGroupBg: {
          position: "absolute",
          inset: 0,
          backgroundImage: colors.founderIntro.groupBgImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: colors.founderIntro.groupBgOpacity,
          zIndex: 0,
        },

        // ---- Content grid ----
        contentGrid: {
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: colors.founderIntro.gridColumns,
          gap: colors.founderIntro.gridGap,
          alignItems: "center",
        },

        // =========================================================
        // FOUNDER PHOTO (circle)
        // =========================================================
        photoWrapper: {
          width: colors.founderIntro.photoSize,
          height: colors.founderIntro.photoSize,
          background: colors.founderIntro.photoBg,
          borderRadius: "50%",
          boxShadow: colors.founderIntro.photoShadow,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: colors.founderIntro.photoMb,
          mt: colors.founderIntro.photoMt,
          position: "relative",
          overflow: "hidden",
        },

        // Inner (clipped) photo — desktop/tablet
        photoInner: {
          position: "relative",
          width: colors.founderIntro.photoInnerWidth,
          height: colors.founderIntro.photoInnerHeight,
          borderRadius: "50%",
          overflow: "hidden",
          marginTop: colors.founderIntro.photoInnerMarginTop,
        },

        // Inner photo — mobile (oversized for face framing)
        photoInnerMobile: {
          position: "relative",
          width: colors.founderIntro.photoMobileInnerWidth,
          height: colors.founderIntro.photoMobileInnerHeight,
          borderRadius: "50%",
          overflow: "hidden",
          marginTop: colors.founderIntro.photoMobileMarginTop,
          marginLeft: colors.founderIntro.photoMobileMarginLeft,
          marginRight: colors.founderIntro.photoMobileMarginRight,
        },

        // =========================================================
        // MOBILE FOUNDER BLOCK (photo + name + role)
        // =========================================================
        mobileFounderBlock: {
          textAlign: "center",
          display: { xs: "block", sm: "none" },
        },
        mobileFounderInner: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { xs: "100%", sm: "auto" },
        },

        // =========================================================
        // DESKTOP FOUNDER BLOCK (photo + signature + role)
        // =========================================================
        desktopFounderBlock: {
          textAlign: "center",
          display: { xs: "none", sm: "block" },
        },
        desktopFounderInner: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { xs: "100%", sm: "auto" },
        },

        // =========================================================
        // TEXT STYLES
        // =========================================================
        bodyPara: {
          ...typography.founderIntro.body,
          color: colors.founderIntro.textColor,
          mb: { xs: 2, md: 2.5 },
          maxWidth: {
            xs: "100%",
            sm: 720,
            md: 900,
          },
        },

        name: {
          ...typography.founderIntro.name,
          color: colors.founderIntro.textColor,
        },
        role: {
          ...typography.founderIntro.role,
          color: colors.founderIntro.textMuted,
        },

        signature: {
          ...typography.founderIntro.signature,
          color: colors.founderIntro.textColor,
          mt: { xs: 1, md: 1.5 },
        },
      },

      // =========================================================
      // MEET YOUR PEOPLE BANNER
      // =========================================================
      meetBanner: {
        position: "relative",
        height: spacing.communityUnique.meetHeight,
        borderRadius: spacing.communityUnique.meetRadius,
        overflow: "hidden",
        backgroundImage: `url('${colors.communityUnique.meetImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: spacing.communityUnique.meetPx,
        mb: spacing.communityUnique.meetMb,
      },
      meetOverlay: {
        position: "absolute",
        inset: 0,
        background: colors.communityUnique.meetOverlay,
        opacity: colors.communityUnique.meetOverlayOpacity,
      },
      meetContent: {
        position: "relative",
        zIndex: 1,
        maxWidth: spacing.communityUnique.meetContentMaxWidth,
      },
      meetTitle: {
        ...typography.communityUnique.meetTitle,
        mb: spacing.communityUnique.meetTitleMb,
        color: colors.communityUnique.meetText,
      },
      meetBody: {
        ...typography.communityUnique.meetBody,
        mb: spacing.communityUnique.meetBodyMb,
        color: colors.communityUnique.meetText,
        px: spacing.communityUnique.meetBodyPx,
      },
      buttonsStack: {
        display: "flex",
        flexDirection: "column",
        gap: spacing.communityUnique.buttonsStackGap,
        alignItems: "center",
        px: spacing.communityUnique.buttonsStackPx,
      },

      // ---- Primary button ----
      primaryButton: {
        width: "100%",
        maxWidth: spacing.communityUnique.primaryButtonMaxWidth,
        textAlign: "center",
        py: spacing.communityUnique.primaryButtonPy,
        px: spacing.communityUnique.primaryButtonPx,
        borderRadius: spacing.communityUnique.primaryButtonRadius,
        background: colors.communityUnique.primaryButtonGradient,
        border: colors.communityUnique.primaryButtonBorder,
        color: colors.communityUnique.primaryButtonText,
        ...typography.communityUnique.meetButton,
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
        },
      },

      // ---- Secondary button ----
      secondaryButton: {
        width: "100%",
        maxWidth: spacing.communityUnique.secondaryButtonMaxWidth,
        textAlign: "center",
        py: spacing.communityUnique.secondaryButtonPy,
        px: spacing.communityUnique.secondaryButtonPx,
        borderRadius: spacing.communityUnique.secondaryButtonRadius,
        background: colors.communityUnique.secondaryButtonGradient,
        border: colors.communityUnique.secondaryButtonBorder,
        color: colors.communityUnique.secondaryButtonText,
        ...typography.communityUnique.meetButton,
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
        },
      },
      meetOverlay: {
        position: "absolute",
        inset: 0,
        background: colors.communityUnique.meetOverlay,
        opacity: colors.communityUnique.meetOverlayOpacity,
      },
      meetContent: {
        position: "relative",
        zIndex: 1,
        maxWidth: spacing.communityUnique.meetContentMaxWidth,
      },
      meetTitle: {
        ...typography.communityUnique.meetTitle,
        mb: spacing.communityUnique.meetTitleMb,
        color: colors.communityUnique.meetText,
      },
      meetBody: {
        ...typography.communityUnique.meetBody,
        mb: spacing.communityUnique.meetBodyMb,
        color: colors.communityUnique.meetText,
        px: spacing.communityUnique.meetBodyPx,
      },
      buttonsStack: {
        display: "flex",
        flexDirection: "column",
        gap: spacing.communityUnique.buttonsStackGap,
        alignItems: "center",
        px: spacing.communityUnique.buttonsStackPx,
      },

      // ---- Primary button ----
      primaryButton: {
        width: "100%",
        maxWidth: spacing.communityUnique.primaryButtonMaxWidth,
        textAlign: "center",
        py: spacing.communityUnique.primaryButtonPy,
        px: spacing.communityUnique.primaryButtonPx,
        borderRadius: spacing.communityUnique.primaryButtonRadius,
        background: colors.communityUnique.primaryButtonGradient,
        border: colors.communityUnique.primaryButtonBorder,
        color: colors.communityUnique.primaryButtonText,
        ...typography.communityUnique.meetButton,
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
        },
      },

      // ---- Secondary button ----
      secondaryButton: {
        width: "100%",
        maxWidth: spacing.communityUnique.secondaryButtonMaxWidth,
        textAlign: "center",
        py: spacing.communityUnique.secondaryButtonPy,
        px: spacing.communityUnique.secondaryButtonPx,
        borderRadius: spacing.communityUnique.secondaryButtonRadius,
        background: colors.communityUnique.secondaryButtonGradient,
        color: colors.communityUnique.secondaryButtonText,
        ...typography.communityUnique.meetButton,
        cursor: "pointer",
        transition: "all 0.3s ease",
        position: "relative",
        border: "none",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: spacing.communityUnique.secondaryButtonRadius,
          padding: "2px",
          background: colors.communityUnique.secondaryButtonBorderGradient,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        },
        "&:hover": {
          transform: "scale(1.02)",
        },
      },

      // =========================================================
      // FINAL GRID
      // =========================================================
      finalGrid: {
        container: {
          spacing: spacing.communityUnique.finalGridSpacing,
          alignItems: "center",
          sx: { flexDirection: { xs: "column", sm: "row" } },
        },
      },
      finalImageCol: {
        display: "flex",
        justifyContent: { xs: "center", sm: "flex-start" },
        width: "100%",
      },
      finalImageCard: {
        width: spacing.communityUnique.finalImageCardWidth,
        maxWidth: spacing.communityUnique.finalImageCardMaxWidth,
        height: spacing.communityUnique.finalImageCardHeight,
        borderRadius: colors.communityUnique.finalImageRadius,
        overflow: "hidden",
        position: "relative",
        mx: { xs: "auto", sm: 0 },
      },
      finalImage: {
        objectFit: "cover",
      },
      finalImageOverlay: {
        position: "absolute",
        inset: 0,
        background: colors.communityUnique.finalImageOverlay,
      },
      finalTextCol: {
        textAlign: { xs: "center", sm: "left" },
      },
      finalTitle: {
        ...typography.communityUnique.finalTitle,
        mb: spacing.communityUnique.finalTitleMb,
        textAlign: { xs: "center", sm: "left" },
      },
      finalBody: {
        ...typography.communityUnique.finalBody,
        color: colors.communityUnique.finalBodyText,
        mb: spacing.communityUnique.finalBodyMb,
        maxWidth: spacing.communityUnique.finalBodyMaxWidth,
        textAlign: { xs: "center", sm: "left" },
        mx: { xs: "auto", sm: 0 },
      },

      // =========================================================
      // MOTION VARIANTS
      // =========================================================
      motion: {
        topWrapper: {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
        },
        leftCol: {
          initial: { opacity: 0, x: -40 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
        },
        rightCol: {
          initial: { opacity: 0, x: 40 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
        },
        title: {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
        },
        body: {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: 0.1 },
        },
        coachingPoint: (index) => ({
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: index * 0.1 },
        }),
        meetBanner: {
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { duration: 0.7 },
        },
        meetTitle: {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
        },
        meetBody: {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: 0.2 },
        },
        buttonsStack: {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
        },
        finalImage: {
          initial: { opacity: 0, x: -40 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
        },
        finalTitle: {
          initial: { opacity: 0, x: 40 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
        },
        finalBody: {
          initial: { opacity: 0, x: 40 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: 0.1 },
        },
      },
    },
    // =========================================================
    // COMMUNITY SECTION
    // =========================================================
    community: {
      // ---- Loading ----
      loading: { py: spacing.community.loadingPy, textAlign: "center" },
      loadingText: {
        ...typography.community.loadingText,
        color: colors.community.loadingText,
      },

      // ---- Outer wrapper ----
      outerWrapper: {},

      // ---- Container ----
      container: { mx: "auto", overflow: "hidden" },

      // ---- Sections wrapper ----
      sectionsWrapper: { pt: spacing.community.sectionsWrapperPt },

      // ---- Each dynamic section row ----
      sectionRow: {
        container: {
          alignItems: "stretch",
          columnSpacing: spacing.community.sectionRowColumnSpacing,
          rowSpacing: spacing.community.sectionRowRowSpacing,
        },
        mb: spacing.community.sectionRowMb,
      },

      // ---- Image side ----
      imageGridItem: { display: "flex" },
      imageCard: {
        width: "100%",
        height: spacing.community.imageHeight,
        borderRadius: spacing.community.imageRadius,
        overflow: "hidden",
        backgroundColor: colors.community.imagePlaceholderBg,
      },
      imageCardContent: { height: "100%", p: "0 !important" },
      imageElement: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      },

      // ---- Text side ----
      textGridItem: { display: "flex", alignItems: "center" },
      textBox: {
        width: "100%",
        px: spacing.community.textColumnPx,
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        gap: spacing.community.textColumnGap,
      },
      sectionTitle: {
        ...typography.community.sectionTitle,
        mb: spacing.community.titleMb,
      },
      sectionDescription: {
        ...typography.community.sectionDescription,
        color: colors.community.sectionDescriptionText,
      },

      // ---- Cards wrapper ----
      cardWrapper: {
        borderRadius: spacing.community.cardWrapperRadius,
        p: spacing.community.cardWrapperP,
        background: colors.community.cardWrapperGradient,
        boxShadow: colors.community.cardWrapperShadow,
      },
      cardWrapperHeading: {
        ...typography.community.headingTitle,
        textAlign: "center",
        color: colors.community.headingText,
        mb: spacing.community.cardWrapperHeadingMb,
      },
      cardsGrid: {
        container: {
          spacing: spacing.community.cardsGridSpacing,
          justifyContent: "center",
        },
      },

      // ---- Individual card ----
      card: {
        height: spacing.community.cardHeight,
        width: "100%",
        borderRadius: spacing.community.cardRadius,
        background: colors.community.cardGradient,
        color: colors.community.cardText,
        textAlign: "center",
        boxShadow: colors.community.cardShadow,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mx: "auto",
        p: 0,
      },
      cardContent: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: spacing.community.cardContentPx,
        py: spacing.community.cardContentPy,
      },
      cardIcon: {
        width: spacing.community.cardIconSize,
        height: spacing.community.cardIconSize,
        mb: spacing.community.cardIconMb,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      },
      cardIconImg: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
      },
      cardTitle: {
        ...typography.community.cardTitle,
        mb: spacing.community.cardTitleMb,
        textAlign: "center",
        px: 0.5,
      },
      cardDescription: {
        ...typography.community.cardDescription,
        opacity: 0.9,
        textAlign: "center",
        px: 0.5,
        display: { xs: "-webkit-box", sm: "block" },
        WebkitLineClamp: { xs: 3, sm: "none" },
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },

      // ---- Motion variants (identical numbers to original) ----
      motion: {
        container: {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
          },
        },
        fadeInUp: {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        },
        slideInLeft: {
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
        },
        slideInRight: {
          hidden: { opacity: 0, x: 40 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
        },
        cardHover: {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
          hover: {
            y: -10,
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeInOut" },
          },
        },
        title: {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
        },
        description: {
          initial: { opacity: 0, y: 15 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: 0.1 },
        },
        cardIcon: (index) => ({
          initial: { opacity: 0, scale: 0.8, rotate: -180 },
          whileInView: { opacity: 1, scale: 1, rotate: 0 },
          whileHover: {
            scale: 1.1,
            y: -6,
            rotate: 3,
            transition: { type: "spring", stiffness: 300, damping: 12 },
          },
          viewport: { once: true },
          transition: {
            duration: 0.6,
            delay: index * 0.1,
            type: "spring",
            stiffness: 150,
          },
        }),
        cardIconImg: (index) => ({
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          whileHover: {
            scale: 1.15,
            rotate: -3,
            filter: "drop-shadow(0px 6px 12px rgba(0,0,0,0.25))",
          },
          viewport: { once: true },
          transition: {
            duration: 0.4,
            delay: index * 0.1 + 0.2,
            type: "spring",
            stiffness: 300,
          },
        }),
        cardTitle: (index) => ({
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: index * 0.1 + 0.1 },
        }),
        cardDescription: (index) => ({
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: index * 0.1 + 0.2 },
        }),
      },
    },
    // =========================================================
    // RELATING CIRCLES SECTION
    // =========================================================
    relatingCircles: {
      // ---- Section ----
      section: {
        py: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },   // was { xs:4, sm:5, md:6, lg:7, xl:8 }
      },
      // ---- Grid ----
      grid: {
        spacing: spacing.relatingCircles.gridSpacing,
        alignItems: spacing.relatingCircles.gridAlignItems,
      },

      // ---- Text Column ----
      textColumn: {
        order: spacing.relatingCircles.textColumnOrder,
        display: "flex",
        justifyContent: { xs: "center", md: "flex-start" },
      },
      textBox: {
        maxWidth: spacing.relatingCircles.textBoxMaxWidth,
        width: "100%",
        textAlign: spacing.relatingCircles.textAlign,
      },

      // ---- Header ----
      header: {
        mb: 0,
        alignItems: { xs: "center", md: "flex-start" },
        textAlign: { xs: "center", md: "left" },
        "& .section-title": {
          fontFamily: typography.relatingCircles.title.fontFamily,
          fontWeight: typography.relatingCircles.title.fontWeight,
          fontSize: typography.relatingCircles.title.fontSize,
          lineHeight: typography.relatingCircles.title.lineHeight,
          letterSpacing: typography.relatingCircles.title.letterSpacing,
          color: "#1A1A2E",
        },
        "& .section-description": {
          fontFamily: typography.relatingCircles.description.fontFamily,
          fontWeight: typography.relatingCircles.description.fontWeight,
          fontSize: typography.relatingCircles.description.fontSize,
          lineHeight: typography.relatingCircles.description.lineHeight,
          letterSpacing: typography.relatingCircles.description.letterSpacing,
          color: "#444444",
        },
      },

      // ---- Image Column ----
      imageColumn: {
        order: spacing.relatingCircles.imageColumnOrder,
        display: "flex",
        justifyContent: spacing.relatingCircles.imageJustify,
      },
      imageMotionWrapper: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
      },

      // ---- Card ----
      card: {
        width: spacing.relatingCircles.cardWidth,
        maxWidth: spacing.relatingCircles.cardMaxWidth,
        height: spacing.relatingCircles.cardHeight,
        borderRadius: spacing.relatingCircles.cardBorderRadius,
        backgroundColor: spacing.relatingCircles.cardBackgroundColor,
        overflow: "hidden",
        position: "relative",
      },
      cardImageBox: {
        position: "relative",
        width: "100%",
        height: "100%",
      },
    },

    // =========================================================
    // ANCIENT ORIGINS SECTION
    // =========================================================
    // =========================================================
    // ANCIENT ORIGINS SECTION
    // =========================================================
    ancientOrigins: {
      // ---- Container ----
      container: {
        py: spacing.ancientOrigins.containerPy,
      },

      // ---- Header Banner ----
      headerWrapper: {
        background: colors.ancientOrigins.headerBackground,
        borderRadius: "16px",
        border: colors.ancientOrigins.headerBorder,
        boxShadow: colors.ancientOrigins.headerShadow,
        py: spacing.ancientOrigins.headerPy,
        mb: spacing.ancientOrigins.headerMb,
      },
      headerTitle: {
        fontFamily: typography.ancientOrigins.headerTitle.fontFamily,
        fontWeight: typography.ancientOrigins.headerTitle.fontWeight,
        fontSize: typography.ancientOrigins.headerTitle.fontSize,
        lineHeight: typography.ancientOrigins.headerTitle.lineHeight,
        letterSpacing: typography.ancientOrigins.headerTitle.letterSpacing,
        textAlign: typography.ancientOrigins.headerTitle.textAlign,
        color: colors.ancientOrigins.headerText,
      },

      // ---- Main Card ----
      card: {
        background: colors.ancientOrigins.cardBackground,
        borderRadius: { xs: "16px", sm: "20px", md: "24px", lg: "28px", xl: "32px" },
        pt: spacing.ancientOrigins.cardPt,
        pb: spacing.ancientOrigins.cardPb,
        px: spacing.ancientOrigins.cardPx,
        overflow: "hidden",
        border: colors.ancientOrigins.cardBorder,
        boxShadow: colors.ancientOrigins.cardShadow,
      },
      cardTitle: {
        fontFamily: typography.ancientOrigins.cardTitle.fontFamily,
        fontWeight: typography.ancientOrigins.cardTitle.fontWeight,
        fontSize: typography.ancientOrigins.cardTitle.fontSize,
        lineHeight: typography.ancientOrigins.cardTitle.lineHeight,
        letterSpacing: typography.ancientOrigins.cardTitle.letterSpacing,
        color: colors.ancientOrigins.cardTitleText,
        mb: spacing.ancientOrigins.cardTitleMb,
        textAlign: { xs: "center", sm: "left" },
      },

      // ---- sm+ oscillating rows ----
      rowsWrapper: {
        display: { xs: "none", sm: "flex" },
        flexDirection: "column",
        gap: spacing.ancientOrigins.rowsGap,
      },
      rowItems: {
        display: "flex",
        justifyContent: "center",
        gap: spacing.ancientOrigins.rowItemsGap,
      },
      rowMotion: {
        animateEven: { x: [0, 40, 0, -40, 0], y: [0, -15, 0, 15, 0] },
        animateOdd: { x: [0, -40, 0, 40, 0], y: [0, -15, 0, 15, 0] },
        transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
      },

      // ---- sm+ circle ----
      circle: {
        width: spacing.ancientOrigins.circleSize,
        height: spacing.ancientOrigins.circleSize,
        minWidth: spacing.ancientOrigins.circleSize,
        minHeight: spacing.ancientOrigins.circleSize,
        maxWidth: spacing.ancientOrigins.circleSize,
        maxHeight: spacing.ancientOrigins.circleSize,
        flexShrink: 0,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: spacing.ancientOrigins.circlePadding,
        background: colors.ancientOrigins.circleBackground,
        backdropFilter: colors.ancientOrigins.circleBackdropBlur,
        color: colors.ancientOrigins.circleText,
        lineHeight: 1.3,
        overflow: "hidden",
        boxSizing: "border-box",
      },
      circleContent: {
        textAlign: "left",
        width: "100%",
        maxHeight: "100%",
        overflow: "hidden",
      },
      circleTitle: {
        fontFamily: typography.ancientOrigins.circleTitle.fontFamily,
        fontWeight: typography.ancientOrigins.circleTitle.fontWeight,
        fontSize: typography.ancientOrigins.circleTitle.fontSize,
        lineHeight: typography.ancientOrigins.circleTitle.lineHeight,
        letterSpacing: typography.ancientOrigins.circleTitle.letterSpacing,
        mb: 0.5,
      },
      circleDescription: {
        fontFamily: typography.ancientOrigins.circleDescription.fontFamily,
        fontWeight: typography.ancientOrigins.circleDescription.fontWeight,
        fontSize: typography.ancientOrigins.circleDescription.fontSize,
        lineHeight: typography.ancientOrigins.circleDescription.lineHeight,
        letterSpacing: typography.ancientOrigins.circleDescription.letterSpacing,
      },
      xsCircle: {
        width: spacing.ancientOrigins.xsCircleSize,
        height: spacing.ancientOrigins.xsCircleSize,
        minWidth: spacing.ancientOrigins.xsCircleSize,
        minHeight: spacing.ancientOrigins.xsCircleSize,
        maxWidth: spacing.ancientOrigins.xsCircleSize,
        maxHeight: spacing.ancientOrigins.xsCircleSize,
        flexShrink: 0,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: spacing.ancientOrigins.xsCirclePadding,
        background: colors.ancientOrigins.circleBackground,
        backdropFilter: colors.ancientOrigins.circleBackdropBlurXs,
        color: colors.ancientOrigins.circleText,
        lineHeight: 1.3,
        overflow: "hidden",
        boxSizing: "border-box",
      },
      // ---- XS carousel wrapper ----
      xsCarouselWrapper: {
        display: { xs: "flex", sm: "none" },
        justifyContent: "center",
        alignItems: "center",
        minHeight: spacing.ancientOrigins.xsCarouselMinHeight,
        overflow: "hidden",
      },
      xsCarouselSlide: {
        display: "flex",
        gap: `${spacing.ancientOrigins.xsCarouselGap}px`,
      },
      xsCircle: {
        width: spacing.ancientOrigins.xsCircleSize,
        height: spacing.ancientOrigins.xsCircleSize,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: spacing.ancientOrigins.xsCirclePadding,
        background: colors.ancientOrigins.circleBackground,
        backdropFilter: colors.ancientOrigins.circleBackdropBlurXs,
        color: colors.ancientOrigins.circleText,
        lineHeight: 1.3,
        flexShrink: 0,
      },
      xsCircleTitle: {
        fontFamily: typography.ancientOrigins.xsCircleTitle.fontFamily,
        fontWeight: typography.ancientOrigins.xsCircleTitle.fontWeight,
        fontSize: typography.ancientOrigins.xsCircleTitle.fontSize,
        lineHeight: typography.ancientOrigins.xsCircleTitle.lineHeight,
        mb: 0.5,
      },
      xsCircleDescription: {
        fontFamily: typography.ancientOrigins.xsCircleDescription.fontFamily,
        fontWeight: typography.ancientOrigins.xsCircleDescription.fontWeight,
        fontSize: typography.ancientOrigins.xsCircleDescription.fontSize,
        lineHeight: typography.ancientOrigins.xsCircleDescription.lineHeight,
      },

      // ---- XS dot indicators ----
      dotsWrapper: {
        display: { xs: "flex", sm: "none" },
        justifyContent: "center",
        gap: 0.8,
        mt: 2,
      },
      dot: (isActive) => ({
        width: isActive ? 20 : 7,
        height: 7,
        borderRadius: 4,
        background: isActive
          ? colors.ancientOrigins.dotActive
          : colors.ancientOrigins.dotInactive,
        cursor: "pointer",
        transition: "all 0.3s ease",
      }),

      // ---- Static data ----
      rowConfig: spacing.ancientOrigins.rowConfig,
      borderColors: colors.ancientOrigins.borderColors,
      borderFallback: colors.ancientOrigins.borderFallback,
    },

    // =========================================================
    // WHY IT MATTERS SECTION
    // =========================================================
    whyItMatters: {
      section: {
        py: spacing.whyItMatters.sectionPy,
      },
      card: {
        position: "relative",
        height: spacing.whyItMatters.cardHeight,
        borderRadius: spacing.whyItMatters.cardRadius,
        overflow: "hidden",
        backgroundImage: "url('/relatingcircles/bgredrc.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: spacing.whyItMatters.cardPaddingX,
        border: colors.whyItMatters.cardBorder,
        boxShadow: colors.whyItMatters.cardShadow,
      },
      overlay: {
        position: "absolute",
        inset: 0,
        background: colors.whyItMatters.overlay,
        zIndex: 1,
      },
      content: {
        position: "relative",
        zIndex: 2,
        maxWidth: spacing.whyItMatters.contentMaxWidth,
      },
      title: {
        ...typography.whyItMatters.title,
        color: colors.whyItMatters.title,
        mb: spacing.whyItMatters.titleMb,
      },
      description: {
        ...typography.whyItMatters.description,
        color: colors.whyItMatters.description,
      },
    },

    // =========================================================
    // JOY LAB SECTION
    // =========================================================
    joyLab: {
      // ---- Outer wrapper ----
      container: {
        py: spacing.joyLab.containerPy,
        position: "relative",
        overflow: "hidden",
      },

      // ---- Spacer (for toggle buttons above heading) ----
      spacer: {
        height: spacing.joyLab.spacerHeight,
        mb: spacing.joyLab.spacerMb,
      },

      // ---- Heading block ----
      headingWrapper: {
        mb: spacing.joyLab.headingMb,
      },
      headingHeaderSx: {
        maxWidth: spacing.joyLab.headingMaxWidth,
        mx: "auto",
        "& .MuiTypography-root": {
          maxWidth: spacing.joyLab.headingSubtitleMaxWidth,
        },
        "& .MuiTypography-root:first-of-type": {
          maxWidth: "100%",
        },
      },

      // ---- Mobile list ----
      mobileList: {
        display: { xs: "flex", sm: "none" },
        flexDirection: "column",
        gap: spacing.joyLab.mobileListGap,
      },
      mobileItem: {
        display: "flex",
        flexDirection: "column",
        gap: spacing.joyLab.mobileItemGap,
      },
      mobileImageBox: {
        width: "100%",
        height: spacing.joyLab.mobileImageHeight,
        borderRadius: colors.joyLab.mobileImageRadius,
        overflow: "hidden",
        backgroundColor: colors.joyLab.mobileImageBg,
      },
      mobileCard: {
        width: spacing.joyLab.mobileCardWidth,
        mx: "auto",
        mt: spacing.joyLab.mobileCardMt,
        borderRadius: colors.joyLab.mobileCardRadius,
        p: spacing.joyLab.mobileCardPadding,
        color: colors.joyLab.mobileCardText,
        boxShadow: colors.joyLab.mobileCardShadow,
      },

      // ---- Desktop list ----
      desktopList: {
        display: { xs: "none", sm: "flex" },
        flexDirection: "column",
        gap: spacing.joyLab.desktopListGap,
      },
      desktopRow: (isEven) => ({
        position: "relative",
        display: "flex",
        alignItems: "center",
        flexDirection: isEven
          ? { xs: "column", sm: "row" }
          : { xs: "column-reverse", sm: "row-reverse" },
        height: spacing.joyLab.desktopRowHeight,
      }),
      desktopImageBox: (isEven) => ({
        width: spacing.joyLab.desktopImageWidth,
        height: "100%",
        borderRadius: colors.joyLab.desktopImageRadius,
        overflow: "hidden",
        ml: isEven ? 0 : { sm: "auto" },
      }),

      // ---- Desktop floating card (motion wrapper positions this) ----
      floatingWrapper: (isEven) => ({
        position: "absolute",
        top: spacing.joyLab.desktopCardTop,
        transform: "translateY(-50%)",
        left: isEven ? 0 : "auto",
        right: isEven ? "auto" : 0,
        zIndex: 2,
      }),
      desktopCard: {
        width: spacing.joyLab.desktopCardWidth,
        height: spacing.joyLab.desktopCardHeight,
        borderRadius: colors.joyLab.desktopCardRadius,
        p: spacing.joyLab.desktopCardPadding,
        color: colors.joyLab.desktopCardText,
        boxShadow: colors.joyLab.desktopCardShadow,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
      },
      desktopCardScroll: {
        overflowY: "auto",
        pr: 1,
        flex: 1,
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": { width: colors.joyLab.scrollWidth },
        "&::-webkit-scrollbar-thumb": {
          background: colors.joyLab.scrollThumb,
          borderRadius: "10px",
        },
      },

      // ---- Image (shared) ----
      image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },

      // ---- Titles ----
      cardTitleMobile: {
        ...typography.joyLab.cardTitle,
        color: colors.joyLab.cardTitle,
        mb: spacing.joyLab.cardTitleMb,
      },
      cardTitleDesktop: {
        ...typography.joyLab.cardTitleCompact,
        color: colors.joyLab.cardTitle,
        mb: spacing.joyLab.cardTitleMb,
      },

      // ---- Paragraph + bullet (rendered by renderDescription) ----
      paragraph: {
        ...typography.joyLab.paragraph,
        color: colors.joyLab.cardParagraph,
        opacity: colors.joyLab.cardDescriptionOpacity,
      },
      bulletText: {
        ...typography.joyLab.bullet,
        color: colors.joyLab.cardBullet,
      },
      bulletIcon: {
        fontSize: spacing.joyLab.bulletIconSize,
        mt: spacing.joyLab.bulletIconMt,
      },
      descStackSpacing: spacing.joyLab.descStackSpacing,
      bulletRowSpacing: spacing.joyLab.bulletRowSpacing,
    },
    // =========================================================
    // FRAMEWORK HERO SECTION
    // =========================================================
    frameworkHero: {
      section: {
        py: spacing.frameworkHero.sectionPy,
      },
      headerBox: {
        textAlign: 'center',
        mb: spacing.frameworkHero.headerMb,
      },
      title: {
        fontFamily: typography.frameworkHero.title.fontFamily,
        fontWeight: typography.frameworkHero.title.fontWeight,
        fontSize: typography.frameworkHero.title.fontSize,
        lineHeight: typography.frameworkHero.title.lineHeight,
        mb: spacing.frameworkHero.titleMb,
        color: colors.frameworkHero.title,
      },
      description: {
        fontFamily: typography.frameworkHero.description.fontFamily,
        fontWeight: typography.frameworkHero.description.fontWeight,
        fontSize: typography.frameworkHero.description.fontSize,
        lineHeight: typography.frameworkHero.description.lineHeight,
        mx: 'auto',
        color: colors.frameworkHero.description,
        maxWidth: spacing.frameworkHero.descriptionMaxWidth,
      },
      bodyTitle: {
        color: colors.frameworkHero.bodyTitle,
        fontFamily: typography.frameworkHero.bodyTitle.fontFamily,
        fontWeight: typography.frameworkHero.bodyTitle.fontWeight,
        fontSize: typography.frameworkHero.bodyTitle.fontSize,
        lineHeight: typography.frameworkHero.bodyTitle.lineHeight,
        mb: spacing.frameworkHero.bodyTitleMb,
      },
      author: {
        color: colors.frameworkHero.author,
        fontFamily: typography.frameworkHero.author.fontFamily,
        fontWeight: typography.frameworkHero.author.fontWeight,
        fontStyle: typography.frameworkHero.author.fontStyle,
        fontSize: typography.frameworkHero.author.fontSize,
        lineHeight: typography.frameworkHero.author.lineHeight,
        letterSpacing: '0%',
        mb: spacing.frameworkHero.authorMb,
      },
      body: {
        color: colors.frameworkHero.bodyText,
        fontFamily: typography.frameworkHero.body.fontFamily,
        fontWeight: typography.frameworkHero.body.fontWeight,
        fontSize: typography.frameworkHero.body.fontSize,
        lineHeight: typography.frameworkHero.body.lineHeight,
        '& strong': {
          fontFamily: typography.frameworkHero.bodyStrong.fontFamily,
          fontWeight: typography.frameworkHero.bodyStrong.fontWeight,
          fontSize: typography.frameworkHero.bodyStrong.fontSize,
          lineHeight: typography.frameworkHero.bodyStrong.lineHeight,
        },
      },
    },
    // =========================================================
    // FIVE DIMENSIONS PAGE
    // =========================================================
    fiveDimensions: {
      section: {
        pt: spacing.fiveDimensions.sectionPy,
        pb: 0,                                   // ← killed bottom padding
      },
      grid: {
        container: {
          alignItems: "stretch",
          columnSpacing: spacing.fiveDimensions.gridColumnSpacing,
          rowSpacing: spacing.fiveDimensions.gridRowSpacing,
        },
        sx: {
          mb: spacing.fiveDimensions.rowMb,
          "&:last-child": { mb: 0 },             // ← last row contributes no gap
        },
      },
      imageGridItem: {
        display: "flex",
      },
      imageBox: {
        width: "100%",
        height: spacing.fiveDimensions.imageHeight,
        borderRadius: colors.fiveDimensions.imageRadius,
        overflow: "hidden",
        backgroundColor: colors.fiveDimensions.imagePlaceholderBg,
      },
      image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      },
      textGridItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      textBox: {
        width: "100%",
        px: spacing.fiveDimensions.textPx,
        display: "flex",
        flexDirection: "column",
        gap: spacing.fiveDimensions.textGap,
        textAlign: "left",
      },
      title: {
        ...typography.fiveDimensions.title,
        color: colors.fiveDimensions.title,
        mb: spacing.fiveDimensions.titleMb,
      },
      description: {
        ...typography.fiveDimensions.description,
        color: colors.fiveDimensions.description,
      },
      quote: {
        ...typography.fiveDimensions.quote,
        color: colors.fiveDimensions.quote,
        pl: spacing.fiveDimensions.quotePl,
        borderLeft: `${colors.fiveDimensions.quoteBorderWidth} solid ${colors.fiveDimensions.quoteBorder}`,
        mt: spacing.fiveDimensions.quoteMt,
      },
    },

    // =========================================================
    // PRINCIPLES OF AUTHENTIC RELATING (page section)
    // =========================================================
    principlesOfAuthenticRelating: {
      // ---- Section wrapper ----
      section: {
        mb: spacing.principlesOfAuthenticRelating.sectionMb,
        backgroundColor: colors.principlesOfAuthenticRelating.sectionBg,
      },

      // ---- Header ----
      headerTitle: {
        ...typography.principlesOfAuthenticRelating.headerTitle,
        color: colors.principlesOfAuthenticRelating.title,
        mb: spacing.principlesOfAuthenticRelating.titleMb,
      },
      headerSubtitle: {
        ...typography.principlesOfAuthenticRelating.headerSubtitle,
        color: colors.principlesOfAuthenticRelating.subtitle,
        maxWidth: 1200,
        mx: "auto",
      },
      headerWrapper: {
        mb: spacing.principlesOfAuthenticRelating.headerMb,
      },

      // ---- Sections wrapper ----
      sectionsWrapper: {
        pt: spacing.principlesOfAuthenticRelating.sectionsPt,
      },

      // ---- Each row ----
      row: {
        mb: spacing.principlesOfAuthenticRelating.rowMb,
        columnSpacing: spacing.principlesOfAuthenticRelating.rowColumnSpacing,
        rowSpacing: spacing.principlesOfAuthenticRelating.rowRowSpacing,
      },

      // ---- Image side ----
      imageGridItem: {
        display: "flex",
      },
      imageCard: {
        width: "100%",
        height: spacing.principlesOfAuthenticRelating.imageHeight,
        borderRadius: spacing.principlesOfAuthenticRelating.imageRadius,
        overflow: "hidden",
        backgroundColor: colors.principlesOfAuthenticRelating.cardBg,
        boxShadow: colors.principlesOfAuthenticRelating.cardShadow,
      },
      imageCardContent: {
        height: "100%",
        p: "0 !important",
      },
      image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.5s ease",
      },

      // ---- Text side ----
      textGridItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      },
      textBox: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "left",
        gap: spacing.principlesOfAuthenticRelating.textGap,
        maxWidth: spacing.principlesOfAuthenticRelating.textMaxWidth,
        mx: "auto",
      },
      cardTitle: {
        ...typography.principlesOfAuthenticRelating.cardTitle,
        color: colors.principlesOfAuthenticRelating.body,
        mb: spacing.principlesOfAuthenticRelating.titleMb,
      },
      body: {
        ...typography.principlesOfAuthenticRelating.body,
        color: colors.principlesOfAuthenticRelating.body,
        textAlign: "left",
        "& p": { margin: "6px 0" },
      },
    },
    // =========================================================
    // AUTHENTIC RELATING UI
    // =========================================================
    authenticRelatingUI: {
      section: {
        pt: spacing.authenticRelatingUI.pagePt,
        overflow: "hidden",
      },

      // ---- Intro panel ----
      introPanel: {
        position: "relative",
        borderRadius: spacing.authenticRelatingUI.introRadius,
        background: colors.authenticRelatingUI.introBg,
        px: spacing.authenticRelatingUI.introPx,
        py: spacing.authenticRelatingUI.introPy,
        textAlign: "center",
      },
      introTitle: {
        ...typography.authenticRelatingUI.introTitle,
        color: colors.authenticRelatingUI.introTitle,
        mb: spacing.authenticRelatingUI.introTitleMb,
      },
      introTitleSpan: {
        ...typography.authenticRelatingUI.introTitleRegular,
      },
      introBody: {
        ...typography.authenticRelatingUI.introBody,
        color: colors.authenticRelatingUI.introBody,
        maxWidth: "1024px",
        mx: "auto",
      },

      // ---- Sections wrapper ----
      sectionsWrapper: {
        pt: spacing.authenticRelatingUI.sectionsPt,
      },

      // ---- Row ----
      row: {
        mb: spacing.authenticRelatingUI.rowMb,
        columnSpacing: spacing.authenticRelatingUI.rowColumnSpacing,
        rowSpacing: spacing.authenticRelatingUI.rowRowSpacing,
      },

      // ---- Image ----
      imageGridItem: {
        display: "flex",
      },
      imageBox: {
        width: "100%",
        height: spacing.authenticRelatingUI.imageHeight,
        borderRadius: spacing.authenticRelatingUI.imageRadius,
        overflow: "hidden",
        backgroundColor: colors.authenticRelatingUI.imagePlaceholderBg,
      },
      image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      },

      // ---- Text ----
      textGridItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      },
      textBox: {
        width: "100%",
        px: { xs: 0.5, sm: 1, md: 0 },
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        gap: spacing.authenticRelatingUI.textGap,
      },
      textTitle: {
        ...typography.authenticRelatingUI.sectionTitle,
        mb: spacing.authenticRelatingUI.titleMb,
      },
      textBody: {
        ...typography.authenticRelatingUI.sectionBody,
        color: colors.authenticRelatingUI.body,
        "& p": { margin: "6px 0" },
        "& p:first-of-type": { marginTop: 0 },
        "& p:last-of-type": { marginBottom: 0 },
        "& strong": { fontWeight: 600 },
      },
    },
    // =========================================================
    // COURSE INNER DETAIL PAGE
    // =========================================================
    courseInnerDetail: {
      // ---- Section wrapper ----
      section: {
        py: spacing.courseInnerDetail.sectionPy,
        overflow: "visible",
      },

      // ---- Page title ----
      pageTitle: {
        ...typography.courseInnerDetail.pageTitle,
        mb: spacing.courseInnerDetail.titleMb,
        textAlign: { xs: "center", sm: "left" },
      },

      // ---- Grid ----
      grid: {
        container: {
          spacing: spacing.courseInnerDetail.gridSpacing,
        },
        leftCol: spacing.courseInnerDetail.leftCol,
        rightCol: spacing.courseInnerDetail.rightCol,
      },

      // ---- Tabs ----
      tabsBox: {
        backgroundColor: colors.courseInnerDetail.tabsBg,
        borderBottom: colors.courseInnerDetail.tabsBorderBottom,
        mb: spacing.courseInnerDetail.tabsBoxMb,
        borderRadius: spacing.courseInnerDetail.tabsBoxRadius,
        overflow: "hidden",
      },
      tabs: {
        minHeight: spacing.courseInnerDetail.tabsMinHeight,
        gap: spacing.courseInnerDetail.tabGap,
        "& .MuiTab-root": {
          textTransform: "none",
          ...typography.courseInnerDetail.tab,
          color: colors.courseInnerDetail.tabsText,
          minHeight: spacing.courseInnerDetail.tabsMinHeight,
          px: spacing.courseInnerDetail.tabPx,
          py: spacing.courseInnerDetail.tabPy,
          minWidth: { xs: "calc(50% - 8px)", sm: "auto" },
          margin: spacing.courseInnerDetail.tabMarginX,
          "&:not(:last-of-type)": {
            marginRight: spacing.courseInnerDetail.tabGap,
          },
        },
        "& .Mui-selected": {
          color: colors.courseInnerDetail.tabsTextActive,
          ...typography.courseInnerDetail.tabActive,
        },
      },
      tabIndicator: {
        backgroundColor: colors.courseInnerDetail.tabsIndicator,
        height: { xs: 2, sm: 2.5, md: 3, lg: 3, xl: 3 },
      },

      // ---- Description block ----
      description: {
        mb: spacing.courseInnerDetail.descMb,
        scrollMarginTop: "20rem",
      },

      // ---- Divider ----
      divider: {
        mb: spacing.courseInnerDetail.dividerMb,
      },

      // ---- Instructor ----
      instructorHeader: {
        ...typography.courseInnerDetail.instructorHeader,
        mb: spacing.courseInnerDetail.instructorTitleMb,
      },
      instructorStack: {
        direction: { xs: "column", sm: "row" },
        spacing: spacing.courseInnerDetail.instructorStackSpacing,
        alignItems: { xs: "center", sm: "flex-start" },
        mb: spacing.courseInnerDetail.instructorStackMb,
        textAlign: { xs: "center", sm: "left" },
      },
      instructorImage: {
        width: spacing.courseInnerDetail.instructorImageSize,
        height: spacing.courseInnerDetail.instructorImageSize,
        backgroundColor: colors.courseInnerDetail.instructorImagePlaceholder,
        borderRadius: 2,
        flexShrink: 0,
      },
      instructorContent: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", sm: "flex-start" },
        textAlign: { xs: "center", sm: "left" },
      },
      instructorNameRow: {
        direction: "row",
        spacing: 1.5,
        alignItems: "center",
        mb: 0.5,
        width: "100%",
        justifyContent: { xs: "center", sm: "flex-start" },
      },
      instructorAccentBar: {
        width: spacing.courseInnerDetail.accentBarWidth,
        height: spacing.courseInnerDetail.accentBarHeight,
        backgroundColor: colors.courseInnerDetail.instructorAccentBar,
        borderRadius: 2,
      },
      instructorName: {
        ...typography.courseInnerDetail.instructorName,
      },
      instructorRole: {
        ...typography.courseInnerDetail.instructorRole,
        color: colors.courseInnerDetail.instructorRole,
      },

      // ---- Bullets ----
      bulletStack: {
        spacing: spacing.courseInnerDetail.bulletStackSpacing,
        mt: spacing.courseInnerDetail.bulletStackMt,
        width: "100%",
        alignItems: { xs: "center", sm: "flex-start" },
      },
      bulletRow: {
        direction: "row",
        spacing: spacing.courseInnerDetail.bulletRowSpacing,
        alignItems: "center",
        width: { xs: "100%", sm: "auto" },
        justifyContent: { xs: "center", sm: "flex-start" },
      },
      bulletDot: {
        width: spacing.courseInnerDetail.bulletDotSize,
        height: spacing.courseInnerDetail.bulletDotSize,
        borderRadius: "50%",
        backgroundColor: colors.courseInnerDetail.bulletDot,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: colors.courseInnerDetail.bulletDotText,
        fontSize: { xs: 14, sm: 15, md: 16, lg: 17, xl: 18 },
        fontWeight: 700,
        flexShrink: 0,
      },
      bulletText: {
        ...typography.courseInnerDetail.bulletText,
        color: colors.courseInnerDetail.bulletText,
        textAlign: { xs: "center", sm: "left" },
      },

      // ---- Sidebar wrapper ----
      sidebarWrapper: {
        position: { xs: "static", md: "sticky" },
        top: spacing.courseInnerDetail.sidebarStickyTop,
        alignSelf: "flex-start",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", sm: "center", md: "flex-start" },
      },

      // ---- Sidebar card ----
      sidebarCard: {
        borderRadius: spacing.courseInnerDetail.sidebarCardRadius,
        boxShadow: colors.courseInnerDetail.sidebarCardShadow,
        overflow: "hidden",
        maxWidth: spacing.courseInnerDetail.sidebarCardMaxWidth,
        mx: { xs: "auto", sm: "auto", md: 0 },
        width: "100%",
        backgroundColor: colors.courseInnerDetail.sidebarCardBg,
      },

      // ---- Price section ----
      priceSection: {
        backgroundColor: colors.courseInnerDetail.priceSectionBg,
        p: spacing.courseInnerDetail.priceSectionP,
      },
      priceLabel: {
        ...typography.courseInnerDetail.priceLabel,
        color: colors.courseInnerDetail.priceSectionLabel,
      },
      offerBadge: {
        backgroundColor: colors.courseInnerDetail.offerBadgeBg,
        px: 1.5,
        py: 0.5,
        borderRadius: 1,
        fontSize: 11,
        fontWeight: 600,
        color: colors.courseInnerDetail.offerBadgeText,
        border: colors.courseInnerDetail.offerBadgeBorder,
      },
      priceRow: {
        direction: "row",
        spacing: 1.5,
        alignItems: "center",
        mt: 1,
      },
      emiBadge: {
        fontSize: "0.75rem",
        backgroundColor: "rgba(255,255,255,0.2)",
        px: 2,
        py: 1,
        borderRadius: "4px",
      },
      priceValue: {
        ...typography.courseInnerDetail.priceValue,
        color: colors.courseInnerDetail.priceColor,
      },
      totalRecurring: {
        ...typography.courseInnerDetail.priceValue,
        color: colors.courseInnerDetail.totalRecurringColor,
      },

      // ---- Details section ----
      detailsSection: {
        p: spacing.courseInnerDetail.detailsP,
      },
      detailRow: {
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
        py: spacing.courseInnerDetail.detailRowPy,
      },
      detailRowBordered: {
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
        py: spacing.courseInnerDetail.detailRowPy,
        borderBottom: `1px solid ${colors.courseInnerDetail.detailDivider}`,
      },
      detailLeft: {
        direction: "row",
        spacing: 1,
        alignItems: "center",
      },
      detailIcon: {
        fontSize: 18,
        color: colors.courseInnerDetail.detailIcon,
      },
      detailLabel: {
        ...typography.courseInnerDetail.detailLabel,
        color: colors.courseInnerDetail.detailLabel,
      },
      detailValue: {
        ...typography.courseInnerDetail.detailLabel,
        color: colors.courseInnerDetail.detailLabel,
      },
      detailValueCapitalize: {
        ...typography.courseInnerDetail.detailLabel,
        color: colors.courseInnerDetail.detailLabel,
        textTransform: "capitalize",
      },

      // ---- CTA button ----
      ctaButton: {
        mt: spacing.courseInnerDetail.ctaMt,
        textTransform: "none",
        ...typography.courseInnerDetail.ctaButton,
        px: spacing.courseInnerDetail.ctaPx,
        height: spacing.courseInnerDetail.ctaHeight,
        borderRadius: spacing.courseInnerDetail.ctaRadius,
        color: colors.courseInnerDetail.ctaText,
        background: colors.courseInnerDetail.ctaBg,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: spacing.courseInnerDetail.ctaRadius,
          padding: "2px",
          background: colors.courseInnerDetail.ctaBorderGradient,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        },
        boxShadow: colors.courseInnerDetail.ctaShadow,
        "&:hover": {
          boxShadow: colors.courseInnerDetail.ctaBgHoverShadow,
        },
      },
    },

    // =========================================================
    // WHAT YOU WILL FIND INSIDE
    // =========================================================
    whatYouWillFindInside: {
      // ---- Section wrapper ----
      section: {
        pt: spacing.whatYouWillFindInside.sectionPt,
        pb: spacing.whatYouWillFindInside.sectionPb,
      },

      // ---- Top panel ----
      panel: {
        position: "relative",
        borderRadius: colors.whatYouWillFindInside.panelRadius,
        px: spacing.whatYouWillFindInside.panelPx,
        py: spacing.whatYouWillFindInside.panelPy,
        background: colors.whatYouWillFindInside.panelGradient,
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          padding: spacing.whatYouWillFindInside.panelBorderWidth,
          borderRadius: colors.whatYouWillFindInside.panelRadius,
          background: colors.whatYouWillFindInside.panelBorderGradient,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        },
      },

      // ---- Heading ----
      heading: {
        ...typography.whatYouWillFindInside.heading,
        textAlign: "center",
        color: colors.whatYouWillFindInside.heading,
        mb: spacing.whatYouWillFindInside.headingMb,
      },

      // ---- Cards grid ----
      cardsGrid: {
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr",
          md: "1fr 1fr",
        },
        gap: spacing.whatYouWillFindInside.cardsGap,
      },

      // ---- Individual info card ----
      card: {
        border: colors.whatYouWillFindInside.cardBorder,
        minHeight: spacing.whatYouWillFindInside.cardMinHeight,
        borderRadius: spacing.whatYouWillFindInside.cardRadius,
        px: spacing.whatYouWillFindInside.cardPx,
        py: spacing.whatYouWillFindInside.cardPy,
        textAlign: "center",
        background: colors.whatYouWillFindInside.cardBg,
        backdropFilter: "blur(6px)",
        transform: colors.whatYouWillFindInside.cardSkew,
        transition: "all 0.4s ease",
        "& > *": {
          transform: colors.whatYouWillFindInside.cardSkewChild,
          transition: "all 0.4s ease",
        },
        "&:hover": {
          transform: colors.whatYouWillFindInside.cardSkewHover,
          "& > *": {
            transform: "skewX(0deg)",
          },
        },
      },
      cardTitle: {
        ...typography.whatYouWillFindInside.cardTitle,
        color: colors.whatYouWillFindInside.cardText,
        mb: spacing.whatYouWillFindInside.cardTitleMb,
      },
      cardDescription: {
        ...typography.whatYouWillFindInside.cardDescription,
        color: colors.whatYouWillFindInside.cardText,
        opacity: 0.95,
      },

      // ---- CTA banner ----
      ctaBanner: {
        position: "relative",
        overflow: "hidden",
        background: colors.whatYouWillFindInside.ctaGradient,
        borderRadius: colors.whatYouWillFindInside.ctaRadius,
        p: spacing.whatYouWillFindInside.ctaP,
        mt: spacing.whatYouWillFindInside.ctaMt,
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          padding: spacing.whatYouWillFindInside.panelBorderWidth,
          borderRadius: spacing.whatYouWillFindInside.ctaBorderRadius,
          background: colors.whatYouWillFindInside.ctaBorderGradient,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        },
      },

      // ---- CTA inner layout ----
      ctaFlex: {
        display: "flex",
        minHeight: spacing.whatYouWillFindInside.ctaMinHeight,
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "center", sm: "flex-start", md: "center" },
        justifyContent: "space-between",
        gap: spacing.whatYouWillFindInside.ctaFlexGap,
        pt: spacing.whatYouWillFindInside.ctaFlexPt,
      },
      ctaLeft: {
        flex: 1,
        maxWidth: spacing.whatYouWillFindInside.ctaLeftMaxWidth,
        textAlign: { xs: "center", sm: "left" },
      },
      ctaTitle: {
        ...typography.whatYouWillFindInside.ctaTitle,
        color: colors.whatYouWillFindInside.ctaText,
        mb: spacing.whatYouWillFindInside.ctaTitleMb,
      },
      ctaBody: {
        ...typography.whatYouWillFindInside.ctaBody,
        color: colors.whatYouWillFindInside.ctaText,
        mb: spacing.whatYouWillFindInside.ctaBodyMb,
      },

      // ---- CTA right column (buttons) ----
      ctaRight: {
        flexShrink: 0,
        flexBasis: spacing.whatYouWillFindInside.ctaRightFlexBasis,
        maxWidth: spacing.whatYouWillFindInside.ctaRightMaxWidth,
        width: { xs: "100%", sm: "auto" },
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        "& > *": {
          width: "100%",
        },
      },
      ctaButtonStack: {
        spacing: spacing.whatYouWillFindInside.ctaBtnStackSpacing,
        sx: {
          width: "100%",
          "& > *": { width: "100%" },
        },
      },

      // ---- Buttons ----
      btnBase: {
        position: "relative",
        overflow: "hidden",
        py: spacing.whatYouWillFindInside.ctaBtnPy,
        fontWeight: typography.whatYouWillFindInside.ctaButton.fontWeight,
        borderRadius: spacing.whatYouWillFindInside.ctaBtnRadius,
        color: "#fff",
        border: "none",
      },
      btnGlass: {
        backgroundColor: colors.whatYouWillFindInside.btnGlassBg,
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: spacing.whatYouWillFindInside.ctaBtnRadius,
          padding: spacing.whatYouWillFindInside.ctaBtnBorderWidth,
          background: colors.whatYouWillFindInside.btnGlassBorderGradient,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        },
        "&:hover": {
          backgroundColor: colors.whatYouWillFindInside.btnGlassBgHover,
          transform: "translateY(-2px)",
        },
      },
      btnWorkshop: {
        background: colors.whatYouWillFindInside.btnWorkshopGradient,
        "&:hover": {
          background: colors.whatYouWillFindInside.btnWorkshopHover,
        },
      },
      btnCourse: {
        background: colors.whatYouWillFindInside.btnCourseGradient,
        "&:hover": {
          background: colors.whatYouWillFindInside.btnCourseHover,
        },
      },
    },
    // =========================================================
    // AUTHENTIC RELATING PAGE (Speaking & Media Kit)
    // =========================================================
    authenticRelatingPage: {
      // ---- Root ----
      root: {
        pt: spacing.authenticRelatingPage.rootPt,
      },

      // =========================================================
      // HERO
      // =========================================================
      heroPanel: {
        position: "relative",
        borderRadius: spacing.authenticRelatingPage.heroRadius,
        background: colors.authenticRelatingPage.heroGradient,
        px: spacing.authenticRelatingPage.heroPadding,
        pt: spacing.authenticRelatingPage.heroPt,
        pb: spacing.authenticRelatingPage.heroPb,
        textAlign: "center",
        mx: spacing.authenticRelatingPage.heroMx,
      },
      heroLogoWrapper: {
        position: "absolute",
        left: "50%",
        top: "0%",
        transform: "translate(-50%, -50%)",
        backgroundColor: colors.authenticRelatingPage.heroLogoBg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        border: colors.authenticRelatingPage.heroLogoBorder,
        boxShadow: colors.authenticRelatingPage.heroLogoShadow,
        width: spacing.authenticRelatingPage.heroLogoWidth,
        height: spacing.authenticRelatingPage.heroLogoHeight,
      },
      heroLogoInner: {
        position: "relative",
        width: spacing.authenticRelatingPage.heroLogoInnerWidth,
        height: spacing.authenticRelatingPage.heroLogoInnerHeight,
      },
      heroBody: {
        ...typography.authenticRelatingPage.heroBody,
        color: colors.authenticRelatingPage.heroText,
        maxWidth: spacing.authenticRelatingPage.heroBodyMaxWidth,
        mx: "auto",
        mb: spacing.authenticRelatingPage.heroBodyMb,
        px: spacing.authenticRelatingPage.heroBodyPx,
      },

      // =========================================================
      // CORE OFFERINGS
      // =========================================================
      offeringsWrapper: {
        mt: spacing.authenticRelatingPage.offeringsMt,
      },
      offeringsPanel: {
        borderRadius: spacing.authenticRelatingPage.offeringsRadius,
        p: spacing.authenticRelatingPage.offeringsPadding,
        background: colors.authenticRelatingPage.offeringsGradient,
        boxShadow: colors.authenticRelatingPage.offeringsShadow,
      },
      offeringsTitle: {
        ...typography.authenticRelatingPage.offeringsTitle,
        color: colors.authenticRelatingPage.offeringsTitle,
        mb: spacing.authenticRelatingPage.offeringsTitleMb,
      },
      offeringsGrid: {
        container: {
          spacing: spacing.authenticRelatingPage.offeringsGridSpacing,
          justifyContent: "center",
        },
        item: {
          xs: 12, sm: 6, md: 4, lg: 4, xl: 4,
          sx: { display: "flex", justifyContent: "center" },
        },
      },
      offeringCard: {
        width: "100%",
        maxWidth: spacing.authenticRelatingPage.offeringsCardMaxWidth,
        height: spacing.authenticRelatingPage.offeringsCardHeight,
        borderRadius: spacing.authenticRelatingPage.offeringsCardRadius,
        background: colors.authenticRelatingPage.cardGradient,
        color: colors.authenticRelatingPage.cardText,
        textAlign: "center",
        boxShadow: colors.authenticRelatingPage.cardShadow,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: colors.authenticRelatingPage.cardBorder,
        p: 0,
        margin: "0 auto",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px) scale(1.02)",
          boxShadow: colors.authenticRelatingPage.cardShadowHover,
        },
      },
      offeringCardContent: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: spacing.authenticRelatingPage.offeringsCardPadding.px,
        py: spacing.authenticRelatingPage.offeringsCardPadding.py,
      },
      offeringIcon: {
        width: spacing.authenticRelatingPage.offeringsIconSize,
        height: spacing.authenticRelatingPage.offeringsIconSize,
        mb: spacing.authenticRelatingPage.offeringsIconMb,
        position: "relative",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.4s ease",
        ".MuiCard-root:hover &": { transform: "scale(1.15) rotate(3deg)" },
      },
      offeringCardTitle: {
        ...typography.authenticRelatingPage.offeringCardTitle,
        mb: spacing.authenticRelatingPage.offeringsCardTitleMb,
        px: 1,
      },
      offeringCardDesc: {
        ...typography.authenticRelatingPage.offeringCardDesc,
        opacity: 0.9,
        px: spacing.authenticRelatingPage.offeringsCardDescPx,
        display: { xs: "block", sm: "-webkit-box" },
        WebkitLineClamp: { xs: "none", sm: 3, md: 3, lg: 3, xl: "none" },
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },

      // =========================================================
      // SIGNATURE TOPICS
      // =========================================================
      topicsWrapper: {
        py: spacing.authenticRelatingPage.topicsPy,
      },
      topicsTitle: {
        ...typography.authenticRelatingPage.topicsTitle,
        color: colors.authenticRelatingPage.topicsTitleColor,
        mb: spacing.authenticRelatingPage.topicsTitleMb,
      },
      topicsStack: {
        spacing: spacing.authenticRelatingPage.topicsStackSpacing,
      },
      topicsPaper: {
        p: spacing.authenticRelatingPage.topicsPaperPadding,
        borderRadius: spacing.authenticRelatingPage.topicsPaperRadius,
        border: colors.authenticRelatingPage.topicItemBorder,
        boxShadow: colors.authenticRelatingPage.topicItemShadow,
      },
      topicTitle: {
        ...typography.authenticRelatingPage.topicTitle,
        color: colors.authenticRelatingPage.topicItemTitleColor,
        mb: spacing.authenticRelatingPage.topicsItemTitleMb,
        cursor: "pointer",
        "&:hover": { textDecoration: "underline" },
      },
      topicDesc: {
        ...typography.authenticRelatingPage.topicDesc,
        color: colors.authenticRelatingPage.topicItemDescColor,
      },
    },
    // =========================================================
    // AUTHENTIC RELATING SECTION
    // =========================================================
    authenticRelatingSection: {
      // ---- Outer wrapper ----
      wrapper: {
        textAlign: "center",
      },

      // ---- Header ----
      header: {
        mb: { xs: 4, md: 6 },
      },
      title: {
        ...typography.authenticRelatingSection.title,
        color: colors.authenticRelatingSection.title,
        mb: spacing.authenticRelatingSection.titleMb,
      },
      subtitle: {
        ...typography.authenticRelatingSection.subtitle,
        color: colors.authenticRelatingSection.subtitle,
        maxWidth: spacing.authenticRelatingSection.headerMaxWidth,
        mx: "auto",
      },

      // ---- Two-column layout ----
      columns: {
        display: "flex",
        flexDirection: spacing.authenticRelatingSection.columnsFlexDir,
        gap: spacing.authenticRelatingSection.columnsGap,
        alignItems: "center",
        justifyContent: "center",
        mb: spacing.authenticRelatingSection.columnsMb,
      },

      // ---- Left image ----
      imageBox: {
        flex: { xs: "unset", sm: 1 },
        height: spacing.authenticRelatingSection.imageHeight,
        width: spacing.authenticRelatingSection.imageWidth,
        mx: { xs: "auto", sm: 0 },
        borderRadius: colors.authenticRelatingSection.imageRadius,
        overflow: "hidden",
        position: "relative",
      },
      imageInner: {
        position: "relative",
        width: "100%",
        height: "100%",
      },

      // ---- Right text ----
      textBox: {
        flex: 1,
        textAlign: { xs: "center", sm: "left" },
      },
      headingRight: {
        ...typography.authenticRelatingSection.headingRight,
        color: colors.authenticRelatingSection.headingRight,
        mb: spacing.authenticRelatingSection.headingMb,
      },
      paragraph: {
        ...typography.authenticRelatingSection.paragraph,
        color: colors.authenticRelatingSection.paragraph,
      },
    },
    // =========================================================
    // WAYS WE WORK SECTION
    // =========================================================
    waysWeWork: {
      // ---- Section wrapper ----
      section: {
        py: spacing.waysWeWork?.sectionPy || { xs: 4, sm: 6, md: 8 },
      },

      // ---- Header ----
      header: {
        textAlign: "center",
        mb: spacing.waysWeWork?.headerMb || { xs: 4, md: 6, lg: 8 },
      },
      title: {
        fontFamily: typography.waysWeWork?.title?.fontFamily || '"Red Hat Display", sans-serif',
        fontWeight: typography.waysWeWork?.title?.fontWeight || 700,
        fontSize: typography.waysWeWork?.title?.fontSize || { xs: 28, sm: 34, md: 40, lg: 44 },
        lineHeight: typography.waysWeWork?.title?.lineHeight || "100%",
        letterSpacing: typography.waysWeWork?.title?.letterSpacing || "0%",
        textAlign: "center",
        color: colors.waysWeWork?.title || "#1d1d1d",
        mb: spacing.waysWeWork?.titleMb || 1,
      },
      subtitle: {
        fontFamily: typography.waysWeWork?.subtitle?.fontFamily || '"Red Hat Display", sans-serif',
        fontWeight: typography.waysWeWork?.subtitle?.fontWeight || 400,
        fontSize: typography.waysWeWork?.subtitle?.fontSize || { xs: 14, sm: 15, md: 16 },
        lineHeight: typography.waysWeWork?.subtitle?.lineHeight || "28.8px",
        letterSpacing: typography.waysWeWork?.subtitle?.letterSpacing || "0%",
        textAlign: "center",
        color: colors.waysWeWork?.subtitle || "#555",
        mb: { xs: 4, md: 6, lg: 8 },
        mx: "auto",
      },

      // ---- Grid ----
      grid: {
        container: {
          spacing: spacing.waysWeWork?.gridSpacing || { xs: 3, sm: 3, md: 3, lg: 4 },
          justifyContent: "center",
          alignItems: "stretch",
        },
        item: {
          xs: 12,
          sm: 4,
          md: 4,
          display: "flex",
          justifyContent: "center",
        },
      },

      // ---- Card ----
      card: {
        // Base
        color: colors.waysWeWork?.cardText || "#ffffff",
        borderRadius: spacing.waysWeWork?.cardBorderRadius || 2,
        p: spacing.waysWeWork?.cardPadding || { xs: 2, sm: 1.5, md: 2.5, lg: 3 },
        width: "100%",
        maxWidth: spacing.waysWeWork?.cardMaxWidth || {
          xs: "100%",
          sm: 220,
          md: 320,
          lg: 430,
          xl: 490,
        },
        height: spacing.waysWeWork?.cardHeight || {
          xs: 260,
          sm: 200,
          md: 250,
          lg: 300,
          xl: 320,
        },
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        border: colors.waysWeWork?.cardBorder || "2px solid rgb(255, 255, 255)",
        transition: "all 0.3s ease-in-out",

        // Hover
        "&:hover": {
          transform: `translateY(${spacing.waysWeWork?.cardHoverTranslateY || -5}px)`,
          boxShadow: colors.waysWeWork?.cardShadowHover || "0 8px 20px rgba(0,0,0,0.15)",
        },
      },

      // ---- Icon wrapper ----
      iconWrapper: {
        width: spacing.waysWeWork?.iconSize || { xs: 70, sm: 50, md: 65, lg: 75, xl: 80 },
        height: spacing.waysWeWork?.iconSize || { xs: 70, sm: 50, md: 65, lg: 75, xl: 80 },
        mb: spacing.waysWeWork?.iconMb || { xs: 1.5, sm: 1, md: 1.5, lg: 2 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: colors.waysWeWork?.iconBorder || "2px solid rgba(255, 255, 255, 0.5)",
        borderRadius: spacing.waysWeWork?.iconBorderRadius || 2,
        padding: spacing.waysWeWork?.iconPadding || { xs: 1.5, sm: 1, md: 1.5 },
      },

      // ---- Icon image ----
      iconImage: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        filter: colors.waysWeWork?.iconFilter || "brightness(0) invert(1)",
      },

      // ---- Card title ----
      cardTitle: {
        fontFamily: typography.waysWeWork?.cardTitle?.fontFamily || '"Red Hat Display", sans-serif',
        fontWeight: typography.waysWeWork?.cardTitle?.fontWeight || 700,
        fontSize: typography.waysWeWork?.cardTitle?.fontSize || { xs: 16, sm: 12, md: 16, lg: 18, xl: 20 },
        lineHeight: typography.waysWeWork?.cardTitle?.lineHeight || 1.3,
        letterSpacing: typography.waysWeWork?.cardTitle?.letterSpacing || "0%",
        textAlign: "center",
        color: colors.waysWeWork?.cardText || "#ffffff",
        mb: spacing.waysWeWork?.titleMb || { xs: 1, sm: 0.5, md: 1 },
        px: { xs: 1, sm: 0.5 },
      },

      // ---- Card description ----
      cardDescription: {
        fontFamily: typography.waysWeWork?.cardDescription?.fontFamily || '"Red Hat Display", sans-serif',
        fontWeight: typography.waysWeWork?.cardDescription?.fontWeight || 300,
        fontSize: typography.waysWeWork?.cardDescription?.fontSize || { xs: 13, sm: 10, md: 13, lg: 16 },
        lineHeight: typography.waysWeWork?.cardDescription?.lineHeight || { xs: 1.5, sm: 1.3 },
        letterSpacing: typography.waysWeWork?.cardDescription?.letterSpacing || "0%",
        textAlign: "center",
        color: colors.waysWeWork?.cardText || "#ffffff",
        px: spacing.waysWeWork?.cardDescription?.px || { xs: 1.5, sm: 0.5 },
        maxWidth: spacing.waysWeWork?.cardDescription?.maxWidth || { xs: "280px" },
      },

      // ---- Motion variants ----
      motion: {
        card: {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: (index) => ({
            duration: 0.5,
            delay: index * (spacing.waysWeWork?.animationDelayStep || 0.15),
          }),
        },
        title: {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.6, ease: "easeOut" },
        },
        subtitle: {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
        },
      },

      // ---- Per-card gradients (accessed by index) ----
      cardGradients: colors.waysWeWork?.cards || [
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
    // =========================================================
    // ABOUT GUIDE SECTION
    // =========================================================
    aboutGuide: {
      // ---- Section wrapper (TOP & BOTTOM GAP) ----
      section: {
        py: spacing.aboutGuide?.sectionPy || { xs: 2, sm: 2, md: 1, lg: 1 },
      },

      // ---- Profile container ----
      profileContainer: {
        display: "flex",
        gap: spacing.aboutGuide?.profileGap || 5,
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "center", sm: "flex-start" },
      },

      // ---- Image column ----
      imageColumn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: { xs: "100%", sm: "auto" },
      },

      // ---- Image wrapper (outer circle) ----
      imageWrapper: {
        width: spacing.aboutGuide?.imageSize || {
          xs: 180,
          sm: 180,
          md: 220,
          lg: 300,
        },
        height: spacing.aboutGuide?.imageSize || {
          xs: 180,
          sm: 180,
          md: 220,
          lg: 300,
        },
        background: colors.aboutGuide?.imageCircleBg || "#53D2DB",
        borderRadius: "50%",
        boxShadow:
          colors.aboutGuide?.imageCircleShadow ||
          "0px 0px 50px 0px #00497F4D",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: spacing.aboutGuide?.profileImageGap || {
          xs: 1.5,
          sm: 2,
          lg: 2,
          xl: 3,
        },
        mt: { xs: 0, sm: 2 },
        position: "relative",
        overflow: "hidden",
      },

      // ---- Image inner container (desktop/tablet) ----
      imageInner: {
        position: "relative",
        width: spacing.aboutGuide?.imageInnerWidth || "95%",
        height: spacing.aboutGuide?.imageInnerHeight || "90%",
        borderRadius: "50%",
        overflow: "hidden",
        marginTop: spacing.aboutGuide?.imageInnerMarginTop || {
          xs: "13px",
          sm: "15px",
          md: "18px",
          lg: "25px",
          xl: "38.8px",
        },
        display: { xs: "none", sm: "block" },
      },

      // ---- Image inner container (mobile) ----
      imageInnerMobile: {
        position: "relative",
        width: "990%",
        height: "950%",
        borderRadius: "50%",
        overflow: "hidden",
        marginTop: "140px",
        marginLeft: "-30px",
        marginRight: "-20px",
        display: { xs: "block", sm: "none" },
      },

      // ---- Image element ----
      image: {
        objectFit: "contain",
        objectPosition: "center",
      },

      // ---- Right text column ----
      textColumn: {
        flex: 1,
        mt: spacing.aboutGuide?.textMarginTop || { xs: 2 },
        maxWidth: spacing.aboutGuide?.textMaxWidth || 720,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "left",
        justifyContent: "center",
      },

      // ---- Profile title ----
      profileTitle: {
        ...typography.aboutGuide?.profileTitle,
        color: colors.aboutGuide?.profileTitleColor || "#1d1d1d",
        mb: spacing.aboutGuide?.titleMb || 3,
      },

      // ---- Profile subtitle (name + role) ----
      profileSubtitle: {
        ...typography.aboutGuide?.profileSubtitle,
        color: colors.aboutGuide?.profileSubtitleColor || "#1d1d1d",
        mb: spacing.aboutGuide?.subtitleMb || 2,
      },
      profileName: {
        fontWeight: typography.aboutGuide?.profileName?.fontWeight || 700,
      },
      profileRole: {
        fontWeight: typography.aboutGuide?.profileRole?.fontWeight || 400,
      },

      // ---- Body paragraphs ----
      body: {
        ...typography.aboutGuide?.body,
        color: colors.aboutGuide?.bodyColor || "#555",
        mb: spacing.aboutGuide?.bodyMb || 2,
      },
      bodyBold: {
        fontWeight: typography.aboutGuide?.bodyBold?.fontWeight || 700,
        color: colors.aboutGuide?.bodyBoldColor || "#000",
        textDecoration: "underline",
        cursor: "pointer",
        fontSize: "inherit",
        lineHeight: "inherit",
        fontFamily: "inherit",
      },

      // =========================================================
      // CTA SECTION
      // =========================================================

      // inside theme.js (under custom.aboutGuide)
      ctaCard: {
        borderRadius: spacing.aboutGuide?.ctaCardRadius || "20px",
        px: spacing.aboutGuide?.ctaCardPx || { xs: 4, sm: 5, md: 12 },
        py: spacing.aboutGuide?.ctaCardPy || { xs: 4, sm: 5, md: 12 },
        background: colors.aboutGuide?.ctaCardBg,
        color: colors.aboutGuide?.ctaTextColor || "#fff",
        width: "100%",
        mx: "auto",
        my: spacing.aboutGuide?.ctaCardMy || { xs: 6, md: 8 },
        boxShadow: colors.aboutGuide?.ctaCardShadow || "0 10px 25px rgba(0,0,0,0.15)",
      },

      ctaBox: {
        border: {
          xs: colors.aboutGuide?.ctaBoxBorderXs || "1px solid rgba(255,255,255,0.7)",
          sm: colors.aboutGuide?.ctaBoxBorderSm || "2px solid rgba(255,255,255,0.7)",
        },
        borderRadius: spacing.aboutGuide?.ctaBoxRadius || { xs: 2, sm: 2, md: 2.5, lg: 3, xl: 2 },
        px: spacing.aboutGuide?.ctaBoxPx || { xs: 2, sm: 2, md: 3, lg: 6 },
        py: spacing.aboutGuide?.ctaBoxPy || { xs: 2, sm: 2, md: 3, lg: 6 },
        textAlign: "center",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        maxWidth: spacing.aboutGuide?.ctaBoxMaxWidth || { xs: 300, sm: "100%", md: 720 },
        mx: { xs: "auto", sm: 0 },
      },

      ctaButton: {
        ...typography.aboutGuide?.ctaButton,
        color: "#fff",
        py: spacing.aboutGuide?.ctaButtonPy || 1.5,
        px: spacing.aboutGuide?.ctaButtonPx || 6,
        borderRadius: spacing.aboutGuide?.ctaButtonRadius || "8px",
        mt: spacing.aboutGuide?.ctaButtonMt || 2,
        width: spacing.aboutGuide?.ctaButtonWidth || "70%",
        mx: "auto",
        background: colors.aboutGuide?.ctaButtonBg || "linear-gradient(100.86deg, #32D7E3 0%, #0C959F 100%)",
        position: "relative",
        overflow: "hidden",
        border: "none",
        transition: "all 0.3s ease",

        // Gradient Border
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "8px",
          padding: "2px",
          background: colors.aboutGuide?.ctaButtonBorderGradient || "linear-gradient(106deg, #FFFFFF 34%, rgba(255,255,255,0.1) 105%)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        },

        "&:hover": {
          background: colors.aboutGuide?.ctaButtonHoverBg || "linear-gradient(100.86deg, #28c9d4 0%, #0a7f87 100%)",
          boxShadow: colors.aboutGuide?.ctaButtonHoverShadow || "0 8px 20px rgba(0,0,0,0.25)",
        },
      },

      // ---- CTA grid ----
      ctaGrid: {
        container: {
          spacing: spacing.aboutGuide?.ctaGridSpacing || {
            xs: 3,
            sm: 3,
            md: 4,
            lg: 5,
            xl: 6,
          },
          alignItems: "center",
        },
      },

      // ---- CTA left column ----
      ctaTitle: {
        ...typography.aboutGuide?.ctaTitle,
        mb: spacing.aboutGuide?.ctaTitleMb || { xs: 2, md: 3 },
      },
      ctaSubtitle: {
        ...typography.aboutGuide?.ctaSubtitle,
        mb: spacing.aboutGuide?.ctaSubtitleMb || 1,
      },

      // ---- CTA right column (button box) ----
      ctaBox: {
        border: {
          xs:
            colors.aboutGuide?.ctaBoxBorderXs ||
            "1px solid rgba(255,255,255,0.7)",
          sm:
            colors.aboutGuide?.ctaBoxBorderSm ||
            "2px solid rgba(255,255,255,0.7)",
        },
        borderRadius: spacing.aboutGuide?.ctaBoxRadius || {
          xs: 2,
          sm: 2,
          md: 2.5,
          lg: 3,
          xl: 2,
        },
        px: spacing.aboutGuide?.ctaBoxPx || { xs: 2, sm: 2, md: 3, lg: 6 },
        py: spacing.aboutGuide?.ctaBoxPy || { xs: 2, sm: 2, md: 3, lg: 6 },
        textAlign: "center",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        maxWidth: spacing.aboutGuide?.ctaBoxMaxWidth || {
          xs: 300,
          sm: "100%",
          md: 720,
        },
        mx: { xs: "auto", sm: 0 },
      },

      // ---- CTA box title ----
      ctaBoxTitle: {
        ...typography.aboutGuide?.ctaBoxTitle,
        maxWidth: spacing.aboutGuide?.ctaBoxTitleMaxWidth || 300,
        mx: "auto",
        mb: spacing.aboutGuide?.ctaBoxTitleMb || { xs: 2, md: 3 },
      },

      // ---- CTA button ----
      ctaButton: {
        ...typography.aboutGuide?.ctaButton,
        color: "#fff",
        py: spacing.aboutGuide?.ctaButtonPy || 1.5,
        px: spacing.aboutGuide?.ctaButtonPx || 6,
        borderRadius: spacing.aboutGuide?.ctaButtonRadius || "8px",
        mt: spacing.aboutGuide?.ctaButtonMt || 2,
        width: spacing.aboutGuide?.ctaButtonWidth || "70%",
        mx: "auto",
        background:
          colors.aboutGuide?.ctaButtonBg ||
          "linear-gradient(100.86deg, #32D7E3 0%, #0C959F 100%)",
        position: "relative",
        overflow: "hidden",
        border: "none",
        transition: "all 0.3s ease",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "8px",
          padding: "2px",
          background:
            colors.aboutGuide?.ctaButtonBorderGradient ||
            "linear-gradient(106deg, #FFFFFF 34%, rgba(255,255,255,0.1) 105%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        },
        "&:hover": {
          background:
            colors.aboutGuide?.ctaButtonHoverBg ||
            "linear-gradient(100.86deg, #28c9d4 0%, #0a7f87 100%)",
          boxShadow:
            colors.aboutGuide?.ctaButtonHoverShadow ||
            "0 8px 20px rgba(0,0,0,0.25)",
        },
      },
    },
    // =========================================================
    // OUR APPROACH SECTION
    // =========================================================
    ourApproach: {
      // ---- Section wrapper ----
      section: {
        py: spacing.ourApproach?.sectionPy || { xs: 2 },
      },

      // =========================================================
      // HERO BANNER
      // =========================================================
      hero: {
        position: "relative",
        height:
          spacing.ourApproach?.heroHeight || { xs: 320, md: 540 },
        borderRadius: spacing.ourApproach?.heroBorderRadius || 5,
        overflow: "hidden",
        backgroundImage: `url('${colors.ourApproach?.heroImage || "/WhyItMattersToday.jpg"}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      },
      heroOverlay: {
        position: "absolute",
        inset: 0,
        background:
          colors.ourApproach?.heroOverlay ||
          "linear-gradient(135deg, rgba(149,196,255,0.7), rgba(8,126,223,0.7))",
        zIndex: 1,
      },
      heroContent: {
        position: "relative",
        zIndex: 2,
        maxWidth: spacing.ourApproach?.heroMaxWidth || 700,
      },
      heroTitle: {
        ...typography.ourApproach?.heroTitle,
        mb: spacing.ourApproach?.heroTitleMb || 2,
      },
      heroBody: {
        ...typography.ourApproach?.heroBody,
      },

      // =========================================================
      // HOW WE WORK SECTION
      // =========================================================
      howWeWorkWrapper: {
        pt: spacing.ourApproach?.howWeWorkPt || { xs: 6, md: 10 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      howWeWorkBox: {
        borderRadius: spacing.ourApproach?.howWeWorkRadius || "32px",
        howWeWorkCardBorder: "2px solid #FFFFFF",          // 👈 white border
        howWeWorkCardBorderHover: "2px solid #FFFFFF",     // 👈 stays white on hover
        p: spacing.ourApproach?.howWeWorkPadding || { xs: 3, sm: 3, md: 4 },
        background:
          colors.ourApproach?.howWeWorkBg ||
          "linear-gradient(135deg, #FF8A65 0%, #E64A19 100%)",
        boxShadow:
          colors.ourApproach?.howWeWorkShadow ||
          "0 14px 32px rgba(0,0,0,0.18)",
        width: "100%",
        maxWidth: { xs: "100%" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      },
      howWeWorkTitle: {
        ...typography.ourApproach?.howWeWorkTitle,
        pt: spacing.ourApproach?.howWeWorkTitlePt || { xs: 2, md: 5 },
        mb:
          spacing.ourApproach?.howWeWorkTitleMb || {
            xs: 4,
            md: 4,
          },
        width: "100%",
      },
      howWeWorkGrid: {
        container: {
          spacing:
            spacing.ourApproach?.howWeWorkGridSpacing || {
              xs: 2,
              sm: 2,
              md: 3,
            },
          justifyContent: "center",
        },
        item: {
          xs: 12,
          sm: 6,
          display: "flex",
          justifyContent: "center",
        },
      },
      howWeWorkCard: {
        height:
          spacing.ourApproach?.cardHeight || {
            xs: 220,
            sm: 200,
            md: 230,
            lg: 280,
            xl: 300,
          },
        width:
          spacing.ourApproach?.cardWidth || {
            xs: "100%",
            sm: "100%",
            md: "85%",
            lg: "85%",
            xl: "100%",
          },
        borderRadius: spacing.ourApproach?.cardRadius || "20px",
        border:
          colors.ourApproach?.howWeWorkCardBorder ||
          "1.5px solid rgba(255,255,255,0.6)",
        background:
          colors.ourApproach?.howWeWorkCardBg ||
          "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05))",
        backdropFilter: "blur(4px)",
        color: colors.ourApproach?.howWeWorkCardText || "#fff",
        p:
          spacing.ourApproach?.cardPadding || {
            xs: 2.5,
            sm: 2.5,
            md: 3.5,
          },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow:
            colors.ourApproach?.howWeWorkCardShadowHover ||
            "0 20px 40px rgba(0,0,0,0.25)",
          border:
            colors.ourApproach?.howWeWorkCardBorderHover ||
            "1.5px solid rgba(255,255,255,0.9)",
        },
      },
      howWeWorkCardTitle: {
        ...typography.ourApproach?.howWeWorkCardTitle,
        mb: spacing.ourApproach?.cardTitleMb || 2,
      },
      howWeWorkCardBody: {
        ...typography.ourApproach?.howWeWorkCardBody,
        opacity: 0.95,
      },

      // =========================================================
      // CORE TRAINING FOCUS AREAS
      // =========================================================
      coreWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        px: { xs: 2, md: 0 },
        py: { xs: 2 },
      },
      coreBox: {
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        p: spacing.ourApproach?.coreWrapperPadding || { xs: 3, md: 5 },
        my: spacing.ourApproach?.coreWrapperMy || 5,
        borderRadius: spacing.ourApproach?.coreWrapperRadius || 3,
        background:
          colors.ourApproach?.coreWrapperBg ||
          "linear-gradient(135deg, #FFC566, #F9A629)",
        gap: spacing.ourApproach?.coreWrapperGap || 5,
        color: colors.ourApproach?.coreTextColor || "#fff",
        width: "100%",
      },

      // Mobile title
      coreMobileTitleWrapper: {
        flex: 1,
        mb: { xs: 3, md: 0 },
        pb: spacing.ourApproach?.coreMobileTitlePb || { xs: 3, md: 0 },
        display: { xs: "block", sm: "none" },
        textAlign: "center",
      },
      coreMobileTitle: {
        ...typography.ourApproach?.coreTitleMobile,
        mb: 2,
      },
      coreMobileBody: {
        ...typography.ourApproach?.coreBodyMobile,
      },

      // Points list container
      pointsContainer: {
        flex: 1,
        border:
          colors.ourApproach?.pointsContainerBorder ||
          "2px solid rgba(255,255,255,0.8)",
        borderRadius: spacing.ourApproach?.pointsContainerRadius || 2,
        p: spacing.ourApproach?.pointsContainerPadding || 3,
        display: "flex",
        flexDirection: "column",
        gap: spacing.ourApproach?.pointsContainerGap || 2,
        backgroundColor:
          colors.ourApproach?.pointsContainerBg ||
          "rgba(255,255,255,0.1)",
      },
      pointCard: {
        background:
          colors.ourApproach?.pointCardBg ||
          "linear-gradient(135deg, #32D7E3, #0C959F)",
        borderRadius: spacing.ourApproach?.pointCardRadius || 2,
        p: spacing.ourApproach?.pointCardPadding || 2,
        boxShadow:
          colors.ourApproach?.pointCardShadow ||
          "0 4px 10px rgba(0,0,0,0.15)",
        color: colors.ourApproach?.pointCardText || "#fff",
        cursor: "pointer",
        transition: "all 0.2s ease",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow:
            colors.ourApproach?.pointCardShadowHover ||
            "0 8px 20px rgba(0,0,0,0.25)",
        },
      },
      pointTitle: {
        ...typography.ourApproach?.pointTitle,
      },
      pointBody: {
        ...typography.ourApproach?.pointBody,
        mt: spacing.ourApproach?.pointBodyMt || 0.5,
      },

      // Desktop title
      coreDesktopTitleWrapper: {
        flex: 1,
        mb: { xs: 3, md: 0 },
        display: { xs: "none", sm: "block" },
        borderRadius: 2,
        p: 3,
      },
      coreTitle: {
        ...typography.ourApproach?.coreTitle,
        mb: 2,
      },
      coreBody: {
        ...typography.ourApproach?.coreBody,
        mb: 5,
      },

      // Core image
      coreImageWrapper: {
        mt: spacing.ourApproach?.coreImageMt || 2,
        width: "100%",
        height:
          spacing.ourApproach?.coreImageHeight || {
            sm: 180,
            md: 560,
            lg: 600,
          },
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
      },
      coreImage: {
        objectFit: "cover",
      },
    },
    // =========================================================
    // AUTHENTIC RELATING HEADER SECTION
    // =========================================================
    authenticRelatingHeader: {
      // ---- Section wrapper (TOP & BOTTOM GAP) ----
      section: {
        textAlign: "center",
        overflow: "hidden",
        py: spacing.authenticRelatingHeader?.sectionPy || { xs: 4, md: 6 },
      },

      // ---- Main heading ----
      heading: {
        ...typography.authenticRelatingHeader?.heading,
        color:
          colors.authenticRelatingHeader?.headingColor || "#1d1d1d",
        mb: spacing.authenticRelatingHeader?.headingMb || 3,
      },

      // ---- Subheading ----
      subheading: {
        ...typography.authenticRelatingHeader?.subheading,
        color:
          colors.authenticRelatingHeader?.subheadingColor || "#555",
        mb: spacing.authenticRelatingHeader?.subheadingMb || 2,
      },

      // ---- Services line ----
      services: {
        ...typography.authenticRelatingHeader?.services,
        color:
          colors.authenticRelatingHeader?.servicesColor || "#1d1d1d",
      },

      // ---- Grid ----
      grid: {
        container: {
          spacing:
            spacing.authenticRelatingHeader?.gridSpacing || {
              xs: 2,
              sm: 3,
              md: 4,
            },
          alignItems: "center",
          justifyContent: "space-between",
        },
        my: spacing.authenticRelatingHeader?.gridMy || { xs: 4, md: 6 },
      },

      // ---- Mobile card wrapper ----
      mobileCardWrapper: {
        display: { xs: "flex", sm: "none" },
        justifyContent: "center",
        mb: spacing.authenticRelatingHeader?.mobileCardMb || 3,
      },

      // ---- Mobile card ----
      mobileCard: {
        borderRadius:
          spacing.authenticRelatingHeader?.mobileCardBorderRadius || "12px",
        backgroundColor:
          colors.authenticRelatingHeader?.cardBg || "#6d6c6c",
        width:
          spacing.authenticRelatingHeader?.mobileCardWidth || {
            xs: "280px",
          },
        height:
          spacing.authenticRelatingHeader?.mobileCardHeight || {
            xs: "170px",
          },
      },

      // ---- Image wrapper (shared) ----
      imageWrapper: {
        position: "relative",
        width: "100%",
        height: "100%",
      },

      // ---- Image element ----
      image: {
        objectFit: "cover",
      },

      // ---- Text column ----
      textColumn: {
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", sm: "flex-start" },
        textAlign: { xs: "center", sm: "left" },
        mx: "auto",
        pr:
          spacing.authenticRelatingHeader?.textColumnPaddingRight || {
            sm: 2,
            md: 3,
          },
      },

      // ---- Text column title ----
      textColumnTitle: {
        ...typography.authenticRelatingHeader?.textColumnTitle,
        color:
          colors.authenticRelatingHeader?.textColumnTitleColor || "#1d1d1d",
        mb: spacing.authenticRelatingHeader?.textColumnTitleMb || {
          xs: 1.5,
          md: 2,
        },
      },

      // ---- Text column body ----
      textColumnBody: {
        ...typography.authenticRelatingHeader?.textColumnBody,
        color:
          colors.authenticRelatingHeader?.textColumnBodyColor || "#444",
        mb: spacing.authenticRelatingHeader?.textColumnBodyMb || 2,
        maxWidth:
          spacing.authenticRelatingHeader?.textColumnBodyMaxWidth || {
            xs: "100%",
            sm: 400,
            md: 566,
          },
      },

      // ---- Desktop card wrapper ----
      desktopCardWrapper: {
        display: { xs: "none", sm: "flex" },
        justifyContent: "center",
        alignItems: "center",
      },

      // ---- Desktop card ----
      desktopCard: {
        borderRadius:
          spacing.authenticRelatingHeader?.desktopCardBorderRadius || "12px",
        backgroundColor:
          colors.authenticRelatingHeader?.cardBg || "#6d6c6c",
        overflow: "hidden",
        position: "relative",
        width:
          spacing.authenticRelatingHeader?.desktopCardWidth || {
            xs: "280px",
            sm: "300px",
            md: "420px",
            lg: "720px",
          },
        height:
          spacing.authenticRelatingHeader?.desktopCardHeight || {
            xs: "180px",
            sm: "320px",
            md: "520px",
          },
      },
    },
    // =========================================================
    // WHY AUTHENTIC RELATING SECTION
    // =========================================================
    whyAuthenticRelating: {
      // ---- Section wrapper (TOP & BOTTOM GAP) ----
      section: {
        pt: spacing.whyAuthenticRelating?.sectionPt || { xs: 6 },
      },

      // ---- Gradient wrapper ----
      wrapper: {
        borderRadius:
          spacing.whyAuthenticRelating?.wrapperRadius || "20px",
        p:
          spacing.whyAuthenticRelating?.wrapperPadding || {
            xs: 3,
            sm: 4,
            md: 6,
          },
        background:
          colors.whyAuthenticRelating?.gradientBg ||
          "linear-gradient(135deg, #FFD27D 0%, #FFB347 50%, #FFA726 100%)",
        boxShadow:
          colors.whyAuthenticRelating?.gradientShadow ||
          "0 12px 30px rgba(0,0,0,0.12)",
      },

      // ---- Heading ----
      heading: {
        ...typography.whyAuthenticRelating?.heading,
        color:
          colors.whyAuthenticRelating?.headingColor || "#fff",
        mb: spacing.whyAuthenticRelating?.headingMb || 1,
      },

      // ---- Subheading ----
      subheading: {
        ...typography.whyAuthenticRelating?.subheading,
        color:
          colors.whyAuthenticRelating?.subheadingColor ||
          "rgba(255,255,255,0.9)",
        maxWidth:
          spacing.whyAuthenticRelating?.subheadingMaxWidth || 720,
        mx: "auto",
        mb:
          spacing.whyAuthenticRelating?.subheadingMb || {
            xs: 2,
            md: 4,
          },
      },

      // ---- Cards grid ----
      cardsGrid: {
        container: {
          spacing:
            spacing.whyAuthenticRelating?.cardsGridSpacing || 2,
          justifyContent: "center",
        },
        item: {
          xs: 12,
          sm: 4,
          md: 4,
        },
      },

      // ---- Card ----
      card: {
        height:
          spacing.whyAuthenticRelating?.cardHeight || {
            xs: 200,
            sm: 210,
            md: 240,
            lg: 290,
            xl: 290,
          },
        width: "100%",
        borderRadius:
          spacing.whyAuthenticRelating?.cardBorderRadius || "18px",
        background:
          colors.whyAuthenticRelating?.cardBg ||
          "linear-gradient(135deg, #FF8A65 0%, #E53935 100%)",
        color:
          colors.whyAuthenticRelating?.cardTextColor || "#fff",
        textAlign: "center",
        boxShadow:
          colors.whyAuthenticRelating?.cardShadow ||
          "0 10px 20px rgba(0,0,0,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border:
          colors.whyAuthenticRelating?.cardBorder ||
          "1px solid rgba(255,255,255,0.35)",
        mx: "auto",
        p: 0,
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow:
            colors.whyAuthenticRelating?.cardShadowHover ||
            "0 20px 40px rgba(0,0,0,0.25)",
        },
      },


      // ---- Card content ----
      cardContent: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px:
          spacing.whyAuthenticRelating?.cardContentPx || {
            xs: 1,
            sm: 3,
            md: 3,
          },
        py:
          spacing.whyAuthenticRelating?.cardContentPy || {
            xs: 1.5,
            sm: 2.5,
            md: 3,
          },
      },

      // ---- Card icon ----
      cardIcon: {
        width:
          spacing.whyAuthenticRelating?.iconSize || {
            xs: 32,
            sm: 40,
            md: 68,
            lg: 70,
            xl: 72,
          },
        height:
          spacing.whyAuthenticRelating?.iconHeight || {
            xs: 32,
            sm: 30,
            md: 60,
            lg: 70,
            xl: 72,
          },
        mb:
          spacing.whyAuthenticRelating?.iconMb || {
            xs: 1,
            sm: 2.5,
            md: 3,
          },
        position: "relative",
        flexShrink: 0,
      },

      // ---- Card image ----
      cardImage: {
        objectFit: "contain",
      },

      // ---- Card title ----
      cardTitle: {
        ...typography.whyAuthenticRelating?.cardTitle,
        color:
          colors.whyAuthenticRelating?.cardTextColor || "#fff",
        mb: spacing.whyAuthenticRelating?.cardTitleMb || 1,
      },

      // ---- Card description ----
      cardDescription: {
        ...typography.whyAuthenticRelating?.cardDescription,
        color:
          colors.whyAuthenticRelating?.cardTextColor || "#fff",
        opacity: 0.9,
      },

      // ---- Split section ----
      splitSection: {
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap:
          spacing.whyAuthenticRelating?.splitGap || {
            xs: 4,
            md: 10,
          },
        alignItems: "center",
        justifyContent: "center",
        py:
          spacing.whyAuthenticRelating?.splitPy || {
            xs: 6,
            md: 10,
          },
      },

      // ---- Split image ----
      splitImage: {
        flex: { xs: "unset", sm: 1 },
        borderRadius: 2,
        width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
        mx: { xs: "auto", sm: 0 },
        height:
          spacing.whyAuthenticRelating?.splitImageHeight || {
            xs: "220px",
            sm: "490px",
            md: "420px",
            lg: "420px",
            xl: "460px",
          },
        position: "relative",
        overflow: "hidden",
      },

      // ---- Split image inner ----
      splitImageInner: {
        position: "relative",
        width: "100%",
        height: "100%",
      },

      // ---- Split image element ----
      splitImageElement: {
        objectFit: "cover",
      },

      // ---- Split text ----
      splitText: {
        flex: 1,
        textAlign: { xs: "center", sm: "left" },
        width: "100%",
      },

      // ---- Split grid item ----
      splitGridItem: {
        xs: 12,
        md: 6,
      },

      // ---- Split title ----
      splitTitle: {
        ...typography.whyAuthenticRelating?.splitTitle,
        color:
          colors.whyAuthenticRelating?.splitTitleColor || "#1d1d1d",
        textAlign: { xs: "center", sm: "left" },
        mb: spacing.whyAuthenticRelating?.splitTitleMb || 2,
      },

      // ---- Split body ----
      splitBody: {
        ...typography.whyAuthenticRelating?.splitBody,
        color:
          colors.whyAuthenticRelating?.splitBodyColor || "#555",
        mb: spacing.whyAuthenticRelating?.splitBodyMb || 3,
        textAlign: { xs: "center", sm: "left" },
      },

      // ---- Bullet stack ----
      bulletStack: {
        spacing:
          spacing.whyAuthenticRelating?.bulletStackSpacing || 2,
      },

      // ---- Bullet row ----
      bulletRow: {
        display: "flex",
        alignItems: "flex-start",
        gap: spacing.whyAuthenticRelating?.bulletGap || 1.5,
      },

      // ---- Bullet dot ----
      // theme.custom.realResults
      bulletDot: (color) => ({
        width: spacing.realResults?.bulletDotSize || 16,         // → 28
        height: spacing.realResults?.bulletDotSize || 16,        // → 28
        borderRadius: "50%",
        border: `${spacing.realResults?.bulletDotBorder || "3px"} solid ${color}`,  // → 4px
        mt: spacing.realResults?.bulletDotMt || "4px",           // → 2px
        flexShrink: 0,
      }),

      // ---- Bullet text ----
      bulletText: {
        ...typography.whyAuthenticRelating?.bulletText,
        color:
          colors.whyAuthenticRelating?.bulletTextColor || "#333",
        textAlign: { xs: "left", sm: "left" },
      },
    },
    // =========================================================
    // JOY LAB HIGHLIGHTS SECTION
    // =========================================================
    joyLabHighlights: {
      // ---- Outer orange panel ----
      panel: {
        position: "relative", // 👈 Required for the gradient border
        mx: "auto",
        my: spacing.joyLabHighlights.panelMy,
        p: spacing.joyLabHighlights.panelPadding,
        borderRadius: spacing.joyLabHighlights.panelRadius,
        background: colors.joyLabHighlights.panelGradient,
        backdropFilter: "blur(260px)",            // 👈 Added backdrop filter
        WebkitBackdropFilter: "blur(260px)",
        textAlign: { xs: "center", sm: "left" },

        // 👇 Main Card Gradient Border
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          padding: "2px", // 2px border
          background: "linear-gradient(105.94deg, #FFFFFF 2.2%, #ebe5e5 100%)",
          boxShadow: "0px 4px 7.3px 1px #0000001A", // 👈 Updated shadow
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
          zIndex: 1,
        },
      },

      // ---- Title pill ----
      pill: {
        maxWidth: spacing.joyLabHighlights.pillMaxWidth,
        mx: "auto",
        mb: spacing.joyLabHighlights.pillMb,
        py: spacing.joyLabHighlights.pillPy,
        px: spacing.joyLabHighlights.pillPx,
        borderRadius: spacing.joyLabHighlights.pillRadius,
        border: colors.joyLabHighlights.pillBorder,
        background: colors.joyLabHighlights.pillBg,
      },
      pillTitle: {
        ...typography.joyLabHighlights.title,
        lineHeight: spacing.joyLabHighlights.titleLineHeight,
        color: colors.joyLabHighlights.pillText,
        p: spacing.joyLabHighlights.titlePillPy,
      },

      // =========================================================
      // CARD ROW — CSS GRID (2 on xs/sm, 4 on md and up)
      // =========================================================
      row: {
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(4, 1fr)",
        },
        gap: spacing.joyLabHighlights.rowGap,
        width: "100%",
        maxWidth: spacing.joyLabHighlights.rowMaxWidth,
        mx: "auto",
        justifyContent: "center",
        alignItems: "stretch",
      },

      // ---- Individual card ----
      card: {
        position: "relative", // 👈 Required for the gradient border
        width: "100%",
        height: "100%",
        minHeight: spacing.joyLabHighlights.cardHeight,

        px: spacing.joyLabHighlights.cardPx,
        py: { xs: 2, md: 3 },
        borderRadius: spacing.joyLabHighlights.cardRadius,
        background: colors.joyLabHighlights.cardBg,
        border: "none", // 👈 Removed standard border in favor of ::before
        boxShadow: "0px 4px 7.3px 1px #0000001A", // 👈 Updated shadow
        backdropFilter: "blur(260px)",            // 👈 Added backdrop filter
        WebkitBackdropFilter: "blur(260px)",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",

        transform: {
          xs: "skewX(0deg)",
          md: spacing.joyLabHighlights.cardSkew?.md || "skewX(-6deg)",
        },
        transition: "all 0.4s ease",

        // 👇 Inner Card Gradient Border
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          padding: "2px", // 2px border
          background: "linear-gradient(105.94deg, #FFFFFF 2.2%, rgba(255, 255, 255, 0.2) 100%)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
          zIndex: 1,
        },

        // Skew straightens on hover
        "&:hover": {
          transform: "skewX(0deg)",
          boxShadow: colors.joyLabHighlights.cardShadowHover,
        },

        // Inner text is un-skewed
        "& > *": {
          position: "relative", // Ensures text sits above the ::before border
          zIndex: 2,
          transform: {
            xs: "skewX(0deg)",
            md: spacing.joyLabHighlights.cardSkewChild?.md || "skewX(6deg)",
          },
          transition: "all 0.4s ease",
        },
        "&:hover > *": {
          transform: "skewX(0deg)",
        },
      },
      cardText: {
        ...typography.joyLabHighlights.cardText,
        lineHeight: spacing.joyLabHighlights.cardTextLineHeight,
        color: colors.joyLabHighlights.cardText,
      },
    },
    // =========================================================
    // JOY LAB SECTION
    // =========================================================
    joyLab: {
      // ---- Outer wrapper ----
      container: {
        py: spacing.joyLab.containerPy,
        position: "relative",
        overflow: "hidden",
      },

      // ---- Spacer ----
      spacer: {
        height: spacing.joyLab.spacerHeight,
        mb: spacing.joyLab.spacerMb,
      },

      // ---- Heading block ----
      headingWrapper: {
        mb: spacing.joyLab.headingMb,
      },
      headingHeaderSx: {
        maxWidth: spacing.joyLab.headingMaxWidth,
        mx: "auto",
        "& .MuiTypography-root": {
          maxWidth: spacing.joyLab.headingSubtitleMaxWidth,
        },
        "& .MuiTypography-root:first-of-type": {
          maxWidth: "100%",
        },
      },

      // ---- Mobile list ----
      mobileList: {
        display: { xs: "flex", sm: "none" },
        flexDirection: "column",
        gap: spacing.joyLab.mobileListGap,
      },
      mobileItem: {
        display: "flex",
        flexDirection: "column",
        gap: spacing.joyLab.mobileItemGap,
      },
      mobileImageBox: {
        width: "100%",
        height: spacing.joyLab.mobileImageHeight,
        borderRadius: colors.joyLab.mobileImageRadius,
        overflow: "hidden",
        backgroundColor: colors.joyLab.mobileImageBg,
      },
      mobileCard: {
        width: spacing.joyLab.mobileCardWidth,
        mx: "auto",
        mt: spacing.joyLab.mobileCardMt,
        borderRadius: colors.joyLab.mobileCardRadius,
        p: spacing.joyLab.mobileCardPadding,
        color: colors.joyLab.mobileCardText,
        boxShadow: colors.joyLab.mobileCardShadow,
      },

      // ---- Desktop list ----
      desktopList: {
        display: { xs: "none", sm: "flex" },
        flexDirection: "column",
        gap: spacing.joyLab.desktopListGap,
      },
      desktopRow: (isEven) => ({
        position: "relative",
        display: "flex",
        alignItems: "center",
        flexDirection: isEven
          ? { xs: "column", sm: "row" }
          : { xs: "column-reverse", sm: "row-reverse" },
        height: spacing.joyLab.desktopRowHeight,
      }),

      // 👇 IMAGE BOX — now takes more width & height
      desktopImageBox: (isEven) => ({
        width: spacing.joyLab.desktopImageWidth,
        height: "100%",
        borderRadius: colors.joyLab.desktopImageRadius,
        overflow: "hidden",
        ml: isEven ? 0 : { sm: "auto" },
      }),

      // ---- Desktop floating card ----
      floatingWrapper: (isEven) => ({
        position: "absolute",
        top: spacing.joyLab.desktopCardTop,
        transform: "translateY(-50%)",
        left: isEven ? 0 : "auto",
        right: isEven ? "auto" : 0,
        zIndex: 2,
      }),
      desktopCard: {
        width: spacing.joyLab.desktopCardWidth,
        height: spacing.joyLab.desktopCardHeight,
        borderRadius: colors.joyLab.desktopCardRadius,
        p: spacing.joyLab.desktopCardPadding,
        color: colors.joyLab.desktopCardText,
        boxShadow: colors.joyLab.desktopCardShadow,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
      },
      desktopCardScroll: {
        overflowY: "auto",
        flex: 1,
        pr: 1,
        "&::-webkit-scrollbar": { width: "6px" },
        "&::-webkit-scrollbar-track": { background: "transparent" },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(255,255,255,0.4)",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "rgba(255,255,255,0.6)",
        },
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(255,255,255,0.4) transparent",
      },

      // ---- Image (shared) ----
      image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },

      // ---- Titles ----
      cardTitleMobile: {
        ...typography.joyLab.cardTitle,
        color: colors.joyLab.cardTitle,
        mb: spacing.joyLab.cardTitleMb,
      },
      cardTitleDesktop: {
        ...typography.joyLab.cardTitleCompact,
        color: colors.joyLab.cardTitle,
        mb: spacing.joyLab.cardTitleMb,
      },

      // ---- Paragraph + bullet ----
      paragraph: {
        ...typography.joyLab.paragraph,
        color: colors.joyLab.cardParagraph,
        opacity: colors.joyLab.cardDescriptionOpacity,
      },
      bulletText: {
        ...typography.joyLab.bullet,
        color: colors.joyLab.cardBullet,
      },
      bulletIcon: {
        fontSize: spacing.joyLab.bulletIconSize,
        mt: spacing.joyLab.bulletIconMt,
      },
      descStackSpacing: spacing.joyLab.descStackSpacing,
      bulletRowSpacing: spacing.joyLab.bulletRowSpacing,
    },
    // =========================================================
    // PLAYGROUND SECTION
    // =========================================================

    // =========================================================
    // PLAYGROUND SECTION
    // =========================================================
    playground: {
      // ---- Outer wrapper ----
      outer: {
        position: "relative",
        width: "100%",
        pt: spacing.playground.outerPt,
        pb: spacing.playground.outerPb,
        mb: spacing.playground.outerMb,
        display: "flex",
        justifyContent: "center",
        paddingBottom: "120px",
      },

      // ---- Grey background panel ----
      panel: {
        position: "absolute",
        top: spacing.playground.panelTop,
        bottom: "120px",
        width: "100%",
        borderRadius: spacing.playground.panelRadius,
        overflow: "hidden",
        backgroundImage: `linear-gradient(${colors.playground.greyPanelOverlay}, ${colors.playground.greyPanelOverlay}), url('${colors.playground.greyPanelImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      },

      motionWrapper: {
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      },

      // ---- Card styles ----
      // ---- Card styles ----
      card: {
        position: "relative",
        bottom: spacing.playground.cardBottom,
        width: spacing.playground.cardWidth,
        maxWidth: spacing.playground.cardMaxWidth,
        height: spacing.playground.cardHeight,
        p: spacing.playground.cardPadding,
        borderRadius: spacing.playground.cardRadius,
        background: colors.playground.cardGradient,   // ✅ new blue gradient
        color: colors.playground.cardText,
        textAlign: "center",
        boxShadow: colors.playground.cardShadow,
        border: colors.playground.cardBorder,         // ✅ 2px solid #FFFFFF
        mx: "auto",

        transition: "box-shadow 0.35s ease, transform 0.35s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 28px 60px rgba(0,0,0,0.25)",
        },
      },

      // ---- Title styles ----
      title: {
        ...typography.playground.title,
        color: colors.playground.titleColor,
        lineHeight: spacing.playground.titleLineHeight,
        mb: spacing.playground.titleMb,
        maxWidth: spacing.playground.titleMaxWidth,      // 👈 NEW
        mx: "auto",                                       // 👈 NEW
      },

      // ---- Description styles ----
      description: {
        ...typography.playground.description,
        color: colors.playground.descriptionColor,
        opacity: spacing.playground.descriptionOpacity,
        lineHeight: spacing.playground.descriptionLineHeight,
        maxWidth: spacing.playground.descriptionMaxWidth, // 👈 now responsive
        mx: "auto",
        mb: spacing.playground.descriptionMb,
      },

      // ---- Motion config ----
      motion: {
        panel: {
          initial: { opacity: 0, scale: 0.96 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true, amount: 0.3, margin: "0px 0px -100px 0px" },
          transition: { duration: 0.8, ease: "easeOut" },
        },
        cardWrapper: {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true, amount: 0.1 },
          transition: { duration: 0.4, ease: "easeOut" },
        },
      },

      variants: {
        cardContainer: {
          hidden: { opacity: 0, y: 40, scale: 0.97 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.7,
              ease: "easeOut",
              staggerChildren: 0.15,
              delayChildren: 0.2,
            },
          },
        },
        item: {
          hidden: { opacity: 0, y: 24 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        },
      },
    },
    // =========================================================
    // CONNECTION SECTION
    // =========================================================
    connectionSection: {
      // ---- Container ----
      container: {
        position: "relative",
        py: spacing.connectionSection.containerPy,
        overflow: "hidden",
      },

      // ---- Header wrapper ----
      headerWrapper: {
        position: "relative",
        mb: spacing.connectionSection.headerMb,
        px: spacing.connectionSection.headerPx,
      },
      headerCenterBox: {
        textAlign: "center",
        maxWidth: spacing.connectionSection.headerMaxWidth,
        mx: "auto",
      },
      headerTitle: {
        ...typography.connectionSection.headerTitle,
        color: colors.connectionSection.headerTitleColor,
        mb: spacing.connectionSection.headerTitleMb,
      },
      headerDescription: {
        ...typography.connectionSection.headerDescription,
        color: colors.connectionSection.headerDescriptionColor,
        maxWidth: spacing.connectionSection.headerDescMaxWidth,
        mx: "auto",
      },

      // ---- Toggle buttons ----
      toggleWrapper: {
        position: { xs: "static", md: "absolute", lg: "absolute" },
        top: { md: 0 },
        right: { md: 0 },
        display: "flex",
        flexDirection: { xs: "row", md: "column", lg: "column" },
        gap: 1,
        justifyContent: "center",
        alignItems: "center",
        mt: spacing.connectionSection.toggleStackMt,
      },
      toggleButton: (isActive) => ({
        minWidth: 80,
        ...typography.connectionSection.toggleButton,
        backgroundColor: isActive
          ? colors.connectionSection.toggleActiveBg
          : "transparent",
        color: isActive
          ? colors.connectionSection.toggleActiveText
          : colors.connectionSection.toggleInactiveText,
        borderColor: colors.connectionSection.toggleInactiveBorder,
        "&:hover": {
          backgroundColor: isActive
            ? colors.connectionSection.toggleActiveHoverBg
            : colors.connectionSection.toggleInactiveHoverBg,
        },
      }),

      // =========================================================
      // LIST VIEW
      // =========================================================
      listViewMobile: {
        display: { xs: "flex", sm: "none" },
        flexDirection: "column",
        gap: spacing.connectionSection.mobileListGap,
      },
      listViewDesktop: {
        display: { xs: "none", sm: "flex" },
        flexDirection: "column",
        gap: spacing.connectionSection.desktopListGap,
      },

      mobileItem: {
        display: "flex",
        flexDirection: "column",
        gap: 2,
      },
      mobileImageBox: {
        width: "100%",
        height: spacing.connectionSection.mobileImageHeight,
        borderRadius: "20px",
        overflow: "hidden",
        backgroundColor: colors.connectionSection.placeholderBg,
      },
      mobileImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
      mobileCard: (gradient) => ({
        width: spacing.connectionSection.mobileCardWidth,
        mx: "auto",
        mt: spacing.connectionSection.mobileCardMt,
        borderRadius: "20px",
        background: gradient,
        p: spacing.connectionSection.mobileCardPadding,
        color: colors.connectionSection.cardText,
        boxShadow: colors.connectionSection.shadowMobileCard,
      }),

      // ---- Desktop list row ----
      desktopRow: (isEven) => ({
        position: "relative",
        display: "flex",
        alignItems: "center",
        flexDirection: isEven
          ? { xs: "column", sm: "row" }
          : { xs: "column-reverse", sm: "row-reverse" },
        height: spacing.connectionSection.desktopRowHeight,
      }),
      desktopImageBox: (isEven) => ({
        width: spacing.connectionSection.desktopImageWidth,
        height: "100%",
        borderRadius: "20px",
        overflow: "hidden",
        ml: isEven ? 0 : { sm: "auto" },
      }),
      desktopImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
      desktopCardWrapper: (isEven) => ({
        position: "absolute",
        top: spacing.connectionSection.desktopCardTop,
        transform: "translateY(-50%)",
        left: isEven ? 0 : "auto",
        right: isEven ? "auto" : 0,
        zIndex: 2,
      }),
      desktopCard: (gradient) => ({
        width: spacing.connectionSection.desktopCardWidth,
        height: spacing.connectionSection.desktopCardHeight,
        borderRadius: "20px",
        background: gradient,
        p: spacing.connectionSection.desktopCardPadding,
        color: colors.connectionSection.cardText,
        boxShadow: colors.connectionSection.shadowListCard,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
      }),
      desktopCardScroll: {
        overflowY: "auto",
        pr: spacing.connectionSection.cardScrollPr,
        flex: 1,
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": {
          width: spacing.connectionSection.cardScrollbarWidth,
        },
        "&::-webkit-scrollbar-thumb": {
          background: colors.connectionSection.cardScrollThumb,
          borderRadius: "10px",
        },
      },

      // ---- Shared card text styles ----
      cardTitle: {
        ...typography.connectionSection.listCardTitle,
        mb: spacing.connectionSection.cardTitleMb,
      },
      cardSubtitle: {
        ...typography.connectionSection.listCardSubtitle,
        opacity: 0.9,
        mb: spacing.connectionSection.cardSubtitleMb,
      },
      cardDescription: {
        ...typography.connectionSection.listCardDescription,
        opacity: 0.85,
      },
      mobileCardTitle: {
        ...typography.connectionSection.mobileCardTitle,
      },
      mobileCardSubtitle: {
        ...typography.connectionSection.mobileCardSubtitle,
        opacity: 0.9,
        mb: 2,
      },
      mobileCardDescription: {
        ...typography.connectionSection.mobileCardDescription,
      },

      // ---- Buttons ----
      buttonStack: {
        direction: { xs: "column", sm: "row" },
        spacing: spacing.connectionSection.cardButtonStackSpacing,
        sx: { mt: spacing.connectionSection.cardButtonStackMt, alignSelf: "flex-start" },
      },
      readMoreButton: (buttonColor) => ({
        width: spacing.connectionSection.buttonWidthList,
        height: spacing.connectionSection.buttonHeight,
        px: spacing.connectionSection.buttonPx,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: spacing.connectionSection.buttonRadius,
        ...typography.connectionSection.cardButton,
        cursor: "pointer",
        whiteSpace: "nowrap",
        background: colors.connectionSection.readMoreBg,
        color: buttonColor,
        position: "relative",
        transition: "all 0.3s ease",
        border: "none",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: spacing.connectionSection.buttonRadius,
          padding: "2px",
          background: colors.connectionSection.buttonBorderGradient,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          zIndex: -1,
          pointerEvents: "none",
        },
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: colors.connectionSection.shadowButton,
        },
      }),
      eventsButton: {
        width: spacing.connectionSection.buttonWidthList,
        height: spacing.connectionSection.buttonHeight,
        px: spacing.connectionSection.buttonPx,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: spacing.connectionSection.buttonRadius,
        ...typography.connectionSection.cardButton,
        cursor: "pointer",
        whiteSpace: "nowrap",
        color: colors.connectionSection.cardText,
        background: colors.connectionSection.eventsBg,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        position: "relative",
        transition: "all 0.3s ease",
        border: "none",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: spacing.connectionSection.buttonRadius,
          padding: "2px",
          background: colors.connectionSection.buttonBorderGradient,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          zIndex: -1,
          pointerEvents: "none",
        },
        "&:hover": {
          background: colors.connectionSection.eventsHoverBg,
          boxShadow: colors.connectionSection.shadowButton,
        },
      },

      // ---- Load more sentinel ----
      loadMoreSentinel: {
        height: 20,
      },
      loadingMoreBox: {
        textAlign: "center",
        mt: 4,
      },

      // =========================================================
      // GRID VIEW
      // =========================================================
      gridWrapper: {
        py: spacing.connectionSection.gridPy,
      },
      gridContainer: {
        spacing: spacing.connectionSection.gridSpacing,
        justifyContent: "flex-start",
      },
      gridItem: {
        xs: 12,
        sm: 6,
        md: 4,
        display: "flex",
        justifyContent: "flex-start",
      },
      gridCard: {
        width: spacing.connectionSection.gridCardWidth,
        height: spacing.connectionSection.gridCardHeight,
        borderRadius: spacing.connectionSection.gridCardRadius,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      },
      gridCardMedia: {
        height: spacing.connectionSection.gridImageHeight,
        backgroundColor: colors.connectionSection.gridPlaceholderBg,
      },
      gridCardContent: (gradient) => ({
        background: gradient,
        p: spacing.connectionSection.gridContentPadding,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }),
      gridCardTitle: {
        ...typography.connectionSection.gridCardTitle,
        mb: spacing.connectionSection.gridTitleMb,
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
        color: colors.connectionSection.cardText,
      },
      gridCardDescription: {
        ...typography.connectionSection.gridCardDescription,
        mb: spacing.connectionSection.gridDescMb,
        display: "-webkit-box",
        WebkitLineClamp: 5,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
        flex: 1,
        color: colors.connectionSection.cardText,
        opacity: 0.9,
      },
      gridButtonStack: {
        direction: "row",
        spacing: spacing.connectionSection.gridButtonSpacing,
        sx: { width: "100%" },
      },
      gridReadMoreButton: (buttonColor) => ({
        flex: 1,
        height: spacing.connectionSection.gridButtonHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: spacing.connectionSection.gridButtonRadius,
        ...typography.connectionSection.gridButton,
        background: colors.connectionSection.readMoreBg,
        color: buttonColor,
        position: "relative",
        border: "none",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: spacing.connectionSection.gridButtonRadius,
          padding: "1.5px",
          background: colors.connectionSection.buttonBorderGradient,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          zIndex: -1,
        },
        "&:hover": {
          boxShadow: colors.connectionSection.shadowButtonSm,
        },
      }),
      gridEventsButton: {
        flex: 1,
        height: spacing.connectionSection.gridButtonHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: spacing.connectionSection.gridButtonRadius,
        ...typography.connectionSection.gridButton,
        color: colors.connectionSection.cardText,
        background: colors.connectionSection.eventsBg,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        position: "relative",
        border: "none",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: spacing.connectionSection.gridButtonRadius,
          padding: "1.5px",
          background: colors.connectionSection.buttonBorderGradient,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          zIndex: -1,
        },
        "&:hover": {
          background: colors.connectionSection.eventsHoverBg,
          boxShadow: colors.connectionSection.shadowButtonSm,
        },
      },

      // ---- Pagination ----
      paginationWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: spacing.connectionSection.paginationGap,
        mt: spacing.connectionSection.paginationMt,
        flexWrap: "wrap",
      },
      paginationNavButton: (isDisabled) => ({
        height: spacing.connectionSection.paginationBtnSize,
        px: 6,
        borderRadius: spacing.connectionSection.paginationBtnRadius,
        ...typography.connectionSection.paginationButton,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        ...(isDisabled
          ? {
            background: colors.connectionSection.paginationDisabledBg,
            color: colors.connectionSection.paginationDisabledText,
            cursor: "not-allowed",
          }
          : {
            color: colors.connectionSection.paginationActiveText,
            background: colors.connectionSection.paginationActiveBg,
            border: `1px solid ${colors.connectionSection.paginationActiveBorder}`,
            backdropFilter: "blur(80px)",
            boxShadow: "0px 3px 8px rgba(0,0,0,0.15)",
            "&:hover": {
              transform: "scale(1.05)",
              filter: "brightness(1.1)",
            },
          }),
      }),
      paginationNumbersWrapper: {
        display: "flex",
        gap: 3,
        flexWrap: "wrap",
        justifyContent: "center",
      },
      paginationPageButton: (isActive) => ({
        width: spacing.connectionSection.paginationBtnSize,
        height: spacing.connectionSection.paginationBtnSize,
        borderRadius: spacing.connectionSection.paginationPageRadius,
        ...typography.connectionSection.paginationButton,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        ...(isActive
          ? {
            color: colors.connectionSection.paginationActiveText,
            background: colors.connectionSection.paginationActiveBg,
            border: `1px solid ${colors.connectionSection.paginationActiveBorder}`,
            boxShadow: colors.connectionSection.paginationActiveShadow,
            transform: "scale(1.05)",
          }
          : {
            color: colors.connectionSection.paginationInactiveText,
            background: colors.connectionSection.paginationInactiveBg,
            backdropFilter: "blur(40px)",
            border: `1px solid ${colors.connectionSection.paginationInactiveBorder}`,
            "&:hover": {
              background: "#DBEAFE",
              transform: "scale(1.05)",
            },
          }),
      }),

      // ---- Motion config ----
      motion: {
        header: {
          initial: { opacity: 0, y: -20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.5, delay: 0.1 },
        },
        mobileImage: {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
        },
        mobileCard: {
          initial: { opacity: 0, y: 60 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: 0.1 },
        },
        desktopImage: (isEven) => ({
          initial: { opacity: 0, x: isEven ? -120 : 120 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.6 },
        }),
        desktopCard: (isEven) => ({
          initial: { opacity: 0, x: 0, scale: 0.95 },
          whileInView: {
            opacity: 1,
            x: isEven ? "130%" : "-130%",
            scale: 1,
          },
          viewport: { once: true, amount: 0.2 },
          transition: {
            duration: 0.8,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          },
        }),
        gridItem: (index) => ({
          initial: { opacity: 0, scale: 0.9 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true, amount: 0.1 },
          transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" },
        }),
        gridSection: {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true, amount: 0.1 },
          transition: { duration: 0.8 },
        },
        buttonHover: {
          whileHover: {
            scale: 1.05,
            y: -3,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          },
          whileTap: { scale: 0.95 },
        },
        gridButtonHover: {
          whileHover: {
            scale: 1.05,
            y: -2,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          },
          whileTap: { scale: 0.95 },
        },
      },
    },
    // =========================================================
    // REAL CONNECTION SECTION
    // =========================================================
    realConnection: {
      section: { py: { xs: 2, sm: 3, md: 4 }, overflow: "hidden" },
      container: {
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        gap: { xs: 3, sm: 4, md: 6 },
        alignItems: "center",
      },
      imageWrapper: {
        position: "relative",
        height: { xs: 220, sm: 400, md: 480, lg: 500 },
        width: "100%",
        maxWidth: { xs: "100%", sm: "100%" },
        mx: "auto",
      },
      imageInner: {
        position: "relative",
        width: "100%",
        height: { xs: 220, sm: 400, md: 480, lg: 500 },
        borderRadius: { xs: 3, md: 4 },
        overflow: "hidden",
        mx: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "inherit",
        transition: "transform 0.6s ease",
        "&:hover": { transform: "scale(1.03)" },
      },
      content: {
        textAlign: { xs: "center", sm: "left" },
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", sm: "flex-start" },
        width: "100%",
        px: { xs: 1, sm: 0 },
      },
      heading: {
        fontFamily: typography.realConnection.heading.fontFamily,
        fontWeight: typography.realConnection.heading.fontWeight,
        fontSize: typography.realConnection.heading.fontSize,
        lineHeight: typography.realConnection.heading.lineHeight,
        letterSpacing: typography.realConnection.heading.letterSpacing,
        color: colors.realConnection.heading,
        mb: { xs: 1.5, sm: 2, md: 2.5 },
        textAlign: { xs: "center", sm: "left" },
      },
      description: {
        fontFamily: typography.realConnection.description.fontFamily,
        fontWeight: typography.realConnection.description.fontWeight,
        fontSize: typography.realConnection.description.fontSize,
        lineHeight: typography.realConnection.description.lineHeight,
        letterSpacing: typography.realConnection.description.letterSpacing,
        color: colors.realConnection.text,
        maxWidth: { xs: "100%", sm: 480, md: 580 },
        mb: { xs: 2, sm: 2.5, md: 3 },
        textAlign: { xs: "center", sm: "left" },
      },
      bulletStack: {
        spacing: { xs: 1, sm: 1.5, md: 2 },
        mb: { xs: 2.5, sm: 4, md: 4 },
        sx: {
          width: "100%",
          alignItems: { xs: "flex-start", sm: "flex-start" },
        },
      },
      bulletRow: {
        direction: "row",
        spacing: { xs: 0.75, sm: 1.5, md: 1.5 },
        sx: {
          width: "100%",
          justifyContent: { xs: "flex-start", sm: "flex-start" },
        },
        alignItems: "flex-start",
      },
      bulletIcon: {
        color: colors.realConnection.bullet,
        fontSize: { xs: 16, sm: 12, md: 28 },
        mt: 0.25,
        flexShrink: 0,
      },
      bulletText: {
        fontFamily: typography.realConnection.bulletText.fontFamily,
        fontWeight: typography.realConnection.bulletText.fontWeight,
        fontSize: typography.realConnection.bulletText.fontSize,
        lineHeight: typography.realConnection.bulletText.lineHeight,
        letterSpacing: typography.realConnection.bulletText.letterSpacing,
        color: colors.realConnection.text,
        maxWidth: { xs: "100%", sm: 480, md: 580 },
        textAlign: { xs: "left", sm: "left" },
      },
      button: {
        textTransform: "none",
        fontFamily: typography.fonts.body,
        fontWeight: typography.weights.semibold,
        fontSize: { xs: "13px", sm: "12px", md: "13px" },
        px: { xs: 2.5, sm: 2, md: 4 },
        py: 0,
        height: { xs: "34px", sm: "32px", md: "38px" },
        minHeight: { xs: "34px", sm: "32px", md: "38px" },
        borderRadius: "10px",
        color: "#fff",
        background: colors.realConnection.buttonGradient,
        position: "relative",
        overflow: "hidden",
        border: "none",
        alignSelf: { xs: "center", sm: "flex-start" },
        minWidth: { xs: 140, sm: 10, md: 180 },
        width: { xs: "auto", sm: "auto" },
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "10px",
          padding: "2px",
          background: colors.connection.readMore.borderGradient,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        },
        "&:hover": {
          background: colors.realConnection.buttonHoverGradient,
          boxShadow: colors.connection.events.hoverBoxShadow,
          transform: "translateY(-2px)",
        },
      },
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: { fontFamily: typography.fonts.body },
        h1: { fontFamily: typography.fonts.heading },
        h2: { fontFamily: typography.fonts.heading },
        h3: {
          fontFamily: typography.fonts.heading,
          fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
        },
        h4: { fontFamily: typography.fonts.heading },
        h5: { fontFamily: typography.fonts.heading },
        h6: { fontFamily: typography.fonts.heading },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: typography.fonts.body,
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { fontFamily: typography.fonts.body },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: { "&:before": { display: "none" } },
      },
    },
  },
});

export default theme;