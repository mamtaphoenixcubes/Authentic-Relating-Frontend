// src/app/_components/buttons/GlassButton.jsx
"use client";

import UnifiedButton from "./UnifiedButton";

export default function GlassButton({
  children,
  onClick,
  size = "medium",
  disabled = false,
  loading = false,
  fullWidth = false,
  sx = {},
  ...props
}) {
  return (
    <UnifiedButton
      onClick={onClick}
      variant="glass"
      size={size}
      disabled={disabled}
      loading={loading}
      fullWidth={fullWidth}
      sx={sx}
      {...props}
    >
      {children}
    </UnifiedButton>
  );
}