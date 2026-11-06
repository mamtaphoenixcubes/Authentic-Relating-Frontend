"use client";

import { Box } from "@mui/material";

export default function Card({
  children,
  className = "",
  sx = {},
  ...props
}) {
  return (
    <Box
      className={`card ${className}`}
      sx={sx}
      {...props}
    >
      {children}
    </Box>
  );
}