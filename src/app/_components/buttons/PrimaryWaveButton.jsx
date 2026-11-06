// src/app/_components/buttons/PrimaryWaveButton.jsx
"use client";

import UnifiedButton from "./UnifiedButton";

export default function PrimaryWaveButton({
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
      variant="wave"
      size="xlarge"
      disabled={disabled}
      loading={loading}
      sx={{
        width: {
          xs: "150px",
          sm: "195px",
          md: "200px",
          lg: "250px",
          xl: "260px",
        },
        minWidth: {
          xs: "150px",
          sm: "195px",
          md: "200px",
          lg: "250px",
          xl: "260px",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </UnifiedButton>
  );
}