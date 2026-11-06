// src/app/_components/buttons/OffreingButton.jsx
"use client";

import UnifiedButton from "./UnifiedButton";

export default function OffreingButton({
  children,
  onClick,
  disabled = false,
  loading = false,
  sx = {},
  ...props
}) {
  return (
    <UnifiedButton
      onClick={onClick}
      variant="offering"
      size="xlarge"
      disabled={disabled}
      loading={loading}
      sx={{
        width: {
          xs: "200px",
          sm: "210px",
          md: "220px",
          lg: "250px",
          xl: "255px",
        },
        minWidth: {
          xs: "200px",
          sm: "210px",
          md: "220px",
          lg: "250px",
          xl: "255px",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </UnifiedButton>
  );
}