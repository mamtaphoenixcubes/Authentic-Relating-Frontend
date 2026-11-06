'use client';

import {
    Box,
    Typography,
    Button,
    TextField,
    Stack,
    IconButton,
    Link,
} from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

export default function Footer() {


    const footerLinks = [
  { label: "Cancellation Policy", href: "/cancellationpolicy" },
  { label: "Website Disclaimer", href: "/websitedisclaimer" },
  { label: "Terms & Conditions", href: "/termsandconditions" },
  { label: "Privacy Policy", href: "/privacypolicy" },
  { label: "Scholarship Opportunities", href: "/scholarshipOpportunities" },
  { label: "Authentic Relating Blog", href: "/authenticrelatingblog" },
];


    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: 'url(/footer.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                color: '#fff',
            }}
        >
            {/* Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.2))',
                }}
            />

            {/* Content */}
            <Box sx={{
                position: 'relative',
                zIndex: 2,
                px: { xs: 3, md: 8 },
                pt: 4,
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}>
                {/* Navbar */}

                {/* Heading */}
                <Typography
                    variant="h1"
                    sx={{
                        mt: 6,
                        fontWeight: 700,
                        fontSize: { xs: '3rem', md: '5rem', lg: '8rem' },
                    }}
                >
                    Authentic Relating
                </Typography>

                <Stack
                    direction={{ xs: 'column', sm: 'column', md: 'row' }}
                    spacing={{ xs: 1.5, sm: 2, md: 4 }}
                    alignItems={{ xs: 'flex-start', md: 'center' }}
                    mt={2}
                >
                    {footerLinks.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            underline="none"
                            sx={{ color: '#fff', fontWeight: 500 }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </Stack>

                {/* Social icons */}
                <Stack direction="row" spacing={1} mt={3}>
                    <IconButton sx={iconStyle}><InstagramIcon /></IconButton>
                    <IconButton sx={iconStyle}><XIcon /></IconButton>
                    <IconButton sx={iconStyle}><FacebookIcon /></IconButton>
                    <IconButton sx={iconStyle}><GitHubIcon /></IconButton>
                </Stack>

                {/* Spacer to push content to bottom */}
                <Box sx={{ flex: 1 }} />

                {/* Glass email box - positioned left bottom */}
                <Box
                    sx={{
                        maxWidth: 520,
                        p: { xs: 2.5, md: 3 },
                        borderRadius: 3,
                        background: "rgba(255, 255, 255, 0.18)",
                        backdropFilter: "blur(14px)",
                        WebkitBackdropFilter: "blur(14px)",
                        border: "1px solid rgba(255,255,255,0.25)",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                        mt: 'auto', // Push to bottom
                        mb: { xs: 3, md: 6 }, // Bottom margin
                        alignSelf: 'flex-start', // Align to left
                    }}
                >
                    {/* Text */}
                    <Typography
                        sx={{
                            color: "#fff",
                            fontSize: "0.95rem",
                            mb: 2,
                        }}
                    >
                        Come as you are – be seen, be heard, be met, and belong.
                    </Typography>

                    {/* Input + Button */}
                    <Stack direction="row" spacing={1}>
                        <TextField
                            placeholder="Your email address here"
                            size="small"
                            fullWidth
                            inputProps={{
                                spellCheck: false,
                                'data-ms-editor': 'false',
                            }}
                            sx={{
                                background: "rgba(255,255,255,0.25)",
                                borderRadius: 1.5,
                                input: { color: "#fff" },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "rgba(255,255,255,0.4)",
                                },
                            }}
                        />

                        <Button
                            variant="contained"
                            sx={{
                                px: 3,
                                backgroundColor: "#ffffff",
                                color: "#000",
                                fontWeight: 600,
                                borderRadius: 1.5,
                                textTransform: "none",
                                "&:hover": {
                                    backgroundColor: "#f0f0f0",
                                },
                            }}
                        >
                            Submit
                        </Button>
                    </Stack>

                    {/* Footer */}
                    <Typography
                        sx={{
                            mt: 1.5,
                            fontSize: "0.7rem",
                            color: "rgba(255,255,255,0.75)",
                        }}
                    >
                        © 2025 Authentic Relating. All rights reserved.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

const iconStyle = {
    backgroundColor: 'rgba(255,255,255,0.25)',
    color: '#fff',
    '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.4)',
    },
};