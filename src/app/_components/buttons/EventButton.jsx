// src/app/_components/buttons/EventButton.jsx
"use client";

import UnifiedButton from "./UnifiedButton";

export default function EventButton({
  children,
  onClick,
  variant = "default",
  size = "medium",
  disabled = false,
  loading = false,
  fullWidth = false,
  startIcon = null,
  endIcon = null,
  sx = {},
  ...props
}) {
  return (
    <UnifiedButton
      onClick={onClick}
      variant={variant}
      size={size}
      disabled={disabled}
      loading={loading}
      fullWidth={fullWidth}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={sx}
      {...props}
    >
      {children}
    </UnifiedButton>
  );
}