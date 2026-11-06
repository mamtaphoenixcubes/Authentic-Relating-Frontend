'use client';

import { Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function EmptyLibrary({
    selectedTab,
}) {

    const router = useRouter();

    const getBrowseConfig = () => {

        switch (selectedTab) {

            case "books":
                return {
                    button: "Browse Books",
                    route: "/mybooks",
                };

            case "course":
                return {
                    button: "Browse Courses",
                    route: "/onlinecourse",
                };

            case "events":
                return {
                    button: "Browse Events",
                    route: "/events",
                };

            case "podcast":
                return {
                    button: "Browse Podcasts",
                    route: "/podcast",
                };

            default:
                return {
                    button: "Explore Collection",
                    route: "/",
                };

        }

    };

    const browse = getBrowseConfig();

    return (

        <Box
            sx={{
                py: 10,
                px: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                maxWidth: 650,
                mx: 'auto',
            }}
        >

            <Box
                sx={{
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    background:
                        'linear-gradient(98.48deg,#95C4FF 0%,#087EDF 100%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 54,
                    color: '#fff',
                    mb: 4,
                    boxShadow:
                        '0 12px 35px rgba(8,126,223,.25)',
                }}
            >
                📚
            </Box>

            <Typography
                fontWeight={700}
                fontSize={{
                    xs: 28,
                    md: 36,
                }}
                color="#1E293B"
                mb={2}
            >
                Your Library is Empty
            </Typography>

            <Typography
                sx={{
                    color: '#64748B',
                    fontSize: 16,
                    lineHeight: 1.9,
                    maxWidth: 550,
                    mb: 5,
                }}
            >
                Your purchased books, courses, podcasts and
                events will appear here automatically.

                <br /><br />

                Start exploring our collection and build your
                personal learning library.
            </Typography>

            <Button
                variant="contained"
                onClick={() => router.push(browse.route)}
                sx={{
                    px: 5,
                    py: 1.6,
                    borderRadius: '14px',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: 15,
                    background:
                        'linear-gradient(98.48deg,#95C4FF 0%,#087EDF 100%)',
                    boxShadow:
                        '0 8px 20px rgba(8,126,223,.25)',

                    '&:hover': {
                        opacity: .95,
                    },
                }}
            >
                {browse.button}
            </Button>

        </Box>

    );

}