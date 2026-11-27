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

            const token = localStorage.getItem('token') || '';
            const [purchasedResult, dashboardResult] = await Promise.allSettled([
                axiosInstance.get(`/frontendApis/purchasedProducts/${userId}`),
                axiosInstance.get('/course-payments/my-learning-dashboard', {
                    headers: { Authorization: `Bearer ${token}` },
                }),
            ]);
            const purchasedProducts = purchasedResult.status === 'fulfilled'
                ? purchasedResult.value.data?.purchasedProducts || {}
                : {};
            const dashboardPayload = dashboardResult.status === 'fulfilled'
                ? dashboardResult.value.data
                : {};
            const dashboardCourses = Array.isArray(dashboardPayload?.courses)
                ? dashboardPayload.courses
                : Array.isArray(dashboardPayload?.enrollments)
                    ? dashboardPayload.enrollments
                    : [];
            const dashboardById = new Map(dashboardCourses.map((course) => [String(course.courseId || course._id || ''), course]));
            const dashboardBySlug = new Map(dashboardCourses.map((course) => [course.courseSlug, course]));
            const purchasedCourses = Array.isArray(purchasedProducts.course) ? purchasedProducts.course : [];
            const courses = purchasedCourses.map((course) => {
                const dashboardCourse = dashboardById.get(String(course._id || course.courseId || ''))
                    || dashboardBySlug.get(course.courseSlug || course.slug)
                    || {};
                return {
                    ...dashboardCourse,
                    ...course,
                    _id: course.courseId || dashboardCourse.courseId || course._id || dashboardCourse._id,
                    courseSlug: course.courseSlug || course.slug || dashboardCourse.courseSlug,
                    course_title: course.course_title || course.title || dashboardCourse.title,
                    heroImage: course.heroImage || dashboardCourse.thumbnailUrl,
                    thumbnailUrl: course.thumbnailUrl || dashboardCourse.thumbnailUrl,
                    resumeLessonId: dashboardCourse.lastAccessedLesson?.id
                        || dashboardCourse.lastAccessedLessonId
                        || course.resumeLessonId,
                };
            });
            const knownCourseIds = new Set(courses.map((course) => String(course._id || '')));
            dashboardCourses.forEach((course) => {
                const courseId = String(course.courseId || course._id || '');
                if (knownCourseIds.has(courseId)) return;
                knownCourseIds.add(courseId);
                courses.push({
                    ...course,
                    _id: course.courseId || course._id,
                    course_title: course.title || course.course_title,
                    heroImage: course.thumbnailUrl,
                    resumeLessonId: course.lastAccessedLesson?.id || course.lastAccessedLessonId,
                });
            });

            if (purchasedResult.status === 'rejected' && dashboardResult.status === 'rejected') {
                throw purchasedResult.reason;
            }
            setLibrary({
                books: Array.isArray(purchasedProducts.books) ? purchasedProducts.books : [],
                course: courses,
                events: Array.isArray(purchasedProducts.events) ? purchasedProducts.events : [],
            });

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

            case 'events':
                return library.events || [];

            default:

                return [

                    ...(library.books || []),

                    ...(library.course || []),

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
                        and manage events—
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
