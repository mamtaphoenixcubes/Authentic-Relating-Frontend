"use client";

import {
    Box,
    IconButton,
    Typography,
    Tooltip,
    Slider,
    Stack,
    useMediaQuery,
    useTheme,
} from "@mui/material";

import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";

export default function PdfToolbar({
    page,
    totalPages,
    scale,
    onScaleChange,
    onPrev,
    onNext,
    fullscreen,
    onToggleFullscreen,
}) {

    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (

        <Box
            sx={{
                position: "sticky",
                top: 0,
                zIndex: 999,
                width: "100%",
                background:
                    "linear-gradient(98.48deg,#95C4FF 0%,#087EDF 100%)",
                backdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(255,255,255,.2)",
                boxShadow: "0 8px 30px rgba(0,0,0,.18)",
                px: { xs: 1.5, sm: 2.5, md: 3 },
                py: 1.5,
            }}
        >

            <Stack
                spacing={1.5}
            >

                {/* Row 1 */}

                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >

                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                    >

                        <Tooltip title="Previous">

                            <span>

                                <IconButton
                                    onClick={onPrev}
                                    disabled={page === 1}
                                    size={isMobile ? "small" : "medium"}
                                    sx={{
                                        color: "#fff",
                                        bgcolor: "rgba(255,255,255,.15)",
                                        "&:hover": {
                                            bgcolor: "rgba(255,255,255,.25)",
                                        },
                                    }}
                                >

                                    <NavigateBeforeIcon />

                                </IconButton>

                            </span>

                        </Tooltip>

                        <Typography
                            sx={{
                                color: "#fff",
                                fontWeight: 700,
                                fontSize: {
                                    xs: 14,
                                    sm: 15,
                                    md: 16,
                                },
                                minWidth: 70,
                                textAlign: "center",
                            }}
                        >
                            {page} / {totalPages}
                        </Typography>

                        <Tooltip title="Next">

                            <span>

                                <IconButton
                                    onClick={onNext}
                                    disabled={page === totalPages}
                                    size={isMobile ? "small" : "medium"}
                                    sx={{
                                        color: "#fff",
                                        bgcolor: "rgba(255,255,255,.15)",
                                        "&:hover": {
                                            bgcolor: "rgba(255,255,255,.25)",
                                        },
                                    }}
                                >

                                    <NavigateNextIcon />

                                </IconButton>

                            </span>

                        </Tooltip>

                    </Stack>

                    <Tooltip title="Fullscreen">

                        <IconButton
                            onClick={onToggleFullscreen}
                            size={isMobile ? "small" : "medium"}
                            sx={{
                                color: "#fff",
                                bgcolor: "rgba(255,255,255,.15)",
                                "&:hover": {
                                    bgcolor: "rgba(255,255,255,.25)",
                                },
                            }}
                        >

                            {fullscreen
                                ? <FullscreenExitIcon />
                                : <FullscreenIcon />
                            }

                        </IconButton>

                    </Tooltip>

                </Stack>

                {/* Row 2 */}

                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                >

                    <IconButton
                        size="small"
                        onClick={() =>
                            onScaleChange(
                                Math.max(scale - 0.1, 0.5)
                            )
                        }
                        sx={{
                            color: "#fff",
                        }}
                    >

                        <ZoomOutIcon />

                    </IconButton>

                    <Slider
                        min={0.5}
                        max={3}
                        step={0.1}
                        value={scale}
                        onChange={(e, value) =>
                            onScaleChange(value)
                        }
                        sx={{
                            flex: 1,
                            color: "#fff",

                            "& .MuiSlider-thumb": {
                                bgcolor: "#fff",
                            },

                            "& .MuiSlider-track": {
                                bgcolor: "#fff",
                            },

                            "& .MuiSlider-rail": {
                                bgcolor:
                                    "rgba(255,255,255,.3)",
                            },
                        }}
                    />

                    <IconButton
                        size="small"
                        onClick={() =>
                            onScaleChange(
                                Math.min(scale + 0.1, 3)
                            )
                        }
                        sx={{
                            color: "#fff",
                        }}
                    >

                        <ZoomInIcon />

                    </IconButton>

                    <Typography
                        sx={{
                            color: "#fff",
                            fontWeight: 700,
                            width: 55,
                            textAlign: "center",
                            fontSize: {
                                xs: 13,
                                sm: 14,
                            },
                        }}
                    >

                        {Math.round(scale * 100)}%

                    </Typography>

                </Stack>

            </Stack>

        </Box>

    );

}