'use client';

import { useEffect, useMemo, useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Chip,
    Stack,
    CircularProgress,
} from '@mui/material';

import axiosInstance from '@/lib/axios';


import LibraryGrid from './LibraryGrid';
import EmptyLibrary from './EmptyLibrary';
import { LibraryHero } from './LibraryHero';

export default function LibraryPage() {

    const [loading, setLoading] = useState(true);

    const [library, setLibrary] = useState({
        books: [],
        podcast: [],
        course: [],
        events: [],
    });

    const [selectedTab, setSelectedTab] = useState('all');

    const [userId, setUserId] = useState(null);

    useEffect(() => {

        try {

            const user = JSON.parse(localStorage.getItem('user'));

            setUserId(user?._id || user?.id);

        } catch {

        }

    }, []);

    useEffect(() => {

        if (!userId) return;

        fetchLibrary();

    }, [userId]);

    const fetchLibrary = async () => {

        try {

            setLoading(true);

            const res = await axiosInstance.get(
                `/frontendApis/purchasedProducts/${userId}`
            );

            setLibrary(
                res.data?.purchasedProducts || {
                    books: [],
                    podcast: [],
                    course: [],
                    events: [],
                }
            );

        } catch (err) {

            console.log(err);

        } finally {

            setLoading(false);

        }

    };

    const items = useMemo(() => {

        switch (selectedTab) {

            case 'books':
                return library.books || [];

            case 'course':
                return library.course || [];

            case 'podcast':
                return library.podcast || [];

            case 'events':
                return library.events || [];

            default:

                return [

                    ...(library.books || []),

                    ...(library.course || []),

                    ...(library.podcast || []),

                    ...(library.events || [])

                ];

        }

    }, [library, selectedTab]);

    const tabs = [

        {
            key: 'all',
            label: `All (${items.length})`,
        },

        {
            key: 'books',
            label: `Books (${library.books.length})`,
        },

        {
            key: 'course',
            label: `Courses (${library.course.length})`,
        },

        {
            key: 'podcast',
            label: `Podcasts (${library.podcast.length})`,
        },

        {
            key: 'events',
            label: `Events (${library.events.length})`,
        },

    ];

    return (

        <>

            <LibraryHero />

            <Container
                maxWidth="xl"
                sx={{
                    py: 7,
                }}
            >

                <Box
                    textAlign="center"
                    mb={6}
                >

                    <Typography
                        fontSize={{
                            xs: 28,
                            md: 42,
                        }}
                        fontWeight={700}
                        color="#1E293B"
                    >

                        Your Collection

                    </Typography>

                    <Typography
                        mt={2}
                        color="#64748B"
                        maxWidth={700}
                        mx="auto"
                        lineHeight={1.8}
                    >

                        Browse everything you've purchased.
                        Read books, continue courses,
                        access podcasts, and manage events—
                        all from one place.

                    </Typography>

                </Box>

                <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    flexWrap="wrap"
                    mb={6}
                >

                    {tabs.map((tab) => (

                        <Chip

                            key={tab.key}

                            label={tab.label}

                            clickable

                            onClick={() => setSelectedTab(tab.key)}

                            color={
                                selectedTab === tab.key
                                    ? 'primary'
                                    : 'default'
                            }

                            sx={{

                                px: 1,

                                py: 2.5,

                                borderRadius: 3,

                                fontWeight: 600,

                                transition: '.25s',

                                ...(selectedTab === tab.key
                                    ? {

                                        color: '#fff',

                                        background:
                                            'linear-gradient(98.48deg,#95C4FF 0%,#087EDF 100%)',

                                    }

                                    : {

                                        background: '#F8FAFC',

                                        border: '1px solid #E5E7EB',

                                    })

                            }}

                        />

                    ))}

                </Stack>

                {loading ? (

                    <Box
                        py={10}
                        display="flex"
                        justifyContent="center"
                    >

                        <CircularProgress />

                    </Box>

                ) : items.length === 0 ? (

                    <EmptyLibrary />

                ) : (

                    <LibraryGrid
                        items={items}
                        selectedTab={selectedTab}
                    />

                )}

            </Container>

        </>

    );

}