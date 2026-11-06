// src/app/_components/buttons/UnifiedButton.jsx
"use client";

import { Box, CircularProgress } from "@mui/material";
import { useButtonVariants } from "./useButtonVariants";

// =====================================================
// SIZE CONFIGURATIONS
// =====================================================
const sizeConfig = {
  small: {
    height: { xs: "36px", sm: "38px", md: "40px" },
    minWidth: { xs: "80px", sm: "90px", md: "100px" },
    padding: { xs: "8px 16px", sm: "10px 20px", md: "10px 24px" },
    fontSize: { xs: "11px", sm: "12px", md: "13px" },
    borderRadius: "8px",
    gap: "6px",
  },
  medium: {
    height: { xs: "42px", sm: "44px", md: "46px", lg: "48px" },
    minWidth: { xs: "100px", sm: "120px", md: "140px" },
    padding: { xs: "10px 20px", sm: "12px 24px", md: "12px 28px" },
    fontSize: { xs: "12px", sm: "13px", md: "14px", lg: "15px" },
    borderRadius: "10px",
    gap: "8px",
  },
  large: {
    height: { xs: "48px", sm: "52px", md: "56px", lg: "60px" },
    minWidth: { xs: "120px", sm: "140px", md: "160px" },
    padding: { xs: "12px 24px", sm: "14px 28px", md: "16px 32px" },
    fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "18px" },
    borderRadius: "12px",
    gap: "10px",
  },
  xlarge: {
    height: { xs: "50px", sm: "60px", md: "60px", lg: "65px", xl: "68px" },
    minWidth: { xs: "150px", sm: "180px", md: "200px", lg: "240px" },
    padding: { xs: "14px 28px", sm: "16px 32px", md: "18px 36px" },
    fontSize: { xs: "13px", sm: "18px", md: "18px", lg: "20px", xl: "20px" },
    borderRadius: { xs: "14px", sm: "15px", md: "16px" },
    gap: "8px",
  },
};

// =====================================================
// UNIFIED BUTTON COMPONENT
// =====================================================
export default function UnifiedButton({
  children,
  onClick,
  variant = "default", // 'default' | 'offering' | 'wave' | 'glass'
  size = "medium",     // 'small' | 'medium' | 'large' | 'xlarge'
  disabled = false,
  loading = false,
  fullWidth = false,
  startIcon = null,
  endIcon = null,
  sx = {},
  ...props
}) {
  const buttonVariants = useButtonVariants();
  const sizeStyles = sizeConfig[size] || sizeConfig.medium;
  const variantStyles = buttonVariants[variant] || buttonVariants.default;

  const isDisabled = disabled || loading;
  const isGlass = variant === "glass";

  // Font weight based on variant
  const fontWeight = isGlass
    ? 500
    : variant === "offering" || variant === "wave"
    ? 400
    : 600;

  return (
    <Box
      component="button"
      type="button"
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      sx={{
        // =====================================================
        // BASE STYLES
        // =====================================================
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: sizeStyles.gap,
        cursor: isDisabled ? "not-allowed" : "pointer",
        whiteSpace: "nowrap",
        outline: "none",
        overflow: "hidden",
        textDecoration: "none",
        textTransform: "none",
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: fontWeight,
        lineHeight: 1.2,
        transition: "all 0.3s ease",
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",

        // =====================================================
        // SIZE STYLES
        // =====================================================
        height: fullWidth ? "auto" : sizeStyles.height,
        minHeight: sizeStyles.height,
        width: fullWidth ? "100%" : "auto",
        minWidth: fullWidth ? "100%" : sizeStyles.minWidth,
        px: sizeStyles.padding,
        py: sizeStyles.padding,
        fontSize: sizeStyles.fontSize,
        borderRadius: sizeStyles.borderRadius,

        // =====================================================
        // VARIANT STYLES
        // =====================================================
        ...variantStyles,

        // =====================================================
        // DISABLED STATE
        // =====================================================
        ...(isDisabled && {
          opacity: 0.6,
          cursor: "not-allowed",
          pointerEvents: "none",
          "&:hover": {
            transform: "none !important",
            boxShadow: "none !important",
          },
          "&:active": {
            transform: "none !important",
            boxShadow: "none !important",
          },
        }),

        // =====================================================
        // CONTENT ABOVE EFFECTS
        // =====================================================
        "& > *": {
          position: "relative",
          zIndex: 4,
        },

        // =====================================================
        // CUSTOM OVERRIDES
        // =====================================================
        ...sx,
      }}
      {...props}
    >
      {/* Loading Spinner */}
      {loading && (
        <CircularProgress
          size={16}
          sx={{
            color: "#ffffff",
            position: "relative",
            zIndex: 5,
          }}
        />
      )}

      {/* Start Icon */}
      {!loading && startIcon && (
        <Box
          component="span"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 5,
          }}
        >
          {startIcon}
        </Box>
      )}

      {/* Button Text */}
      {children && (
        <Box
          component="span"
          sx={{
            position: "relative",
            zIndex: 5,
          }}
        >
          {children}
        </Box>
      )}

      {/* End Icon */}
      {!loading && endIcon && (
        <Box
          component="span"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 5,
          }}
        >
          {endIcon}
        </Box>
      )}
    </Box>
  );
}