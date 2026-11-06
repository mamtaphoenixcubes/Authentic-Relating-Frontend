"use client";

import { Box } from "@mui/material";

export default function Section({
  children,
  className = "",
  sx = {},
}) {
  return (
    <Box
      component="section"
      className={`site-section ${className}`}
      sx={{
        width: "100%",
        overflow: "hidden",
        ...sx, // any section can still override this if it truly needs more/less
      }}
    >
      {children}
    </Box>
  );
}