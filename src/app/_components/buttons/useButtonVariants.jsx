// hooks/useButtonVariants.js
"use client";

import colors from "../../../theme/colors";

export const useButtonVariants = () => {
  const variants = {
    // =====================================================
    // DEFAULT BLUE GRADIENT BUTTON
    // =====================================================
    default: {
      background: colors.defaultButton.background,
      color: colors.defaultButton.textColor,
      border: "none",
      boxShadow: colors.defaultButton.boxShadow,
      
      "&::after": {
        content: '""',
        position: "absolute",
        inset: "2px",
        pointerEvents: "none",
      },

      "&:hover": {
        transform: "translateY(-2px)",
        background: colors.defaultButton.hoverBackground,
        boxShadow: colors.defaultButton.hoverShadow,
      },

      "&:active": {
        transform: "translateY(1px)",
        boxShadow: colors.defaultButton.activeShadow,
      },
    },

    // =====================================================
    // OFFERING GREEN BUTTON
    // =====================================================
    offering: {
      background: colors.offeringButton.background,
      color: colors.offeringButton.textColor,
      border: "none",
      boxShadow: colors.offeringButton.boxShadow,
      overflow: "hidden",

      "&::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        padding: "2.65px",
        borderRadius: "inherit",
        background: colors.offeringButton.borderGradient,
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        pointerEvents: "none",
        zIndex: 2,
      },

      "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: "-80%",
        width: "55%",
        height: "100%",
        background: `linear-gradient(110deg, transparent, ${colors.offeringButton.shine}, transparent)`,
        transform: "skewX(-20deg)",
        transition: "left 0.7s ease",
        pointerEvents: "none",
        zIndex: 3,
      },

      "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: colors.offeringButton.hoverShadow,
        "&::after": {
          left: "130%",
        },
      },

      "&:active": {
        transform: "scale(0.98)",
        boxShadow: colors.offeringButton.activeShadow,
      },
    },

    // =====================================================
    // WAVE PINK/CORAL BUTTON
    // =====================================================
    wave: {
      background: colors.primaryWaveButton.background,
      color: colors.primaryWaveButton.textColor,
      border: "none",
      boxShadow: colors.primaryWaveButton.boxShadow,
      overflow: "hidden",

      "&::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        padding: "2.65px",
        borderRadius: "inherit",
        background: colors.primaryWaveButton.borderGradient,
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        pointerEvents: "none",
        zIndex: 2,
      },

      "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: "-80%",
        width: "55%",
        height: "100%",
        background: `linear-gradient(110deg, transparent, ${colors.primaryWaveButton.shine}, transparent)`,
        transform: "skewX(-20deg)",
        transition: "left 0.7s ease",
        pointerEvents: "none",
        zIndex: 3,
      },

      "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: colors.primaryWaveButton.hoverShadow,
        "&::after": {
          left: "130%",
        },
      },

      "&:active": {
        transform: "scale(0.98)",
        boxShadow: colors.primaryWaveButton.activeShadow,
      },
    },

    // =====================================================
    // GLASS TRANSPARENT BUTTON
    // =====================================================
    glass: {
      background: colors.glassButton.background,
      color: colors.glassButton.textColor,
      border: `1px solid ${colors.glassButton.borderColor}`,
      boxShadow: colors.glassButton.boxShadow,
      backdropFilter: colors.glassButton.backdropBlur,
      WebkitBackdropFilter: colors.glassButton.backdropBlur,
      overflow: "hidden",

      "&::before": {
        content: '""',
        position: "absolute",
        inset: "-2px",
        borderRadius: "inherit",
        padding: "2px",
        background: colors.glassButton.borderGradient,
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        pointerEvents: "none",
        zIndex: 1,
      },

      "&:hover": {
        background: colors.glassButton.hoverBackground,
        border: `1px solid ${colors.glassButton.hoverBorderColor}`,
        boxShadow: colors.glassButton.hoverShadow,
      },

      "&:active": {
        transform: "scale(0.98)",
        boxShadow: colors.glassButton.activeShadow,
      },
    },
  };

  return variants;
};

export default useButtonVariants;