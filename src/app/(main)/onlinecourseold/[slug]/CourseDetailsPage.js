'use client';
import React, { useEffect, useState } from 'react';
import CourseHeroBanner from './CourseHeroBanner';
import CourseInnerDetail from './CourseInnerDetail';
import DiscountBanner from './DiscountBanner';

const CourseDetailsPage = ({ slug }) => {
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    const getCourseBySlug = async (slug) => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/frontendApis/getCourseBySlug/${slug}`
            );

            const data = await res.json();

            return data?.course || null;
        } catch (error) {
            console.error("Error fetching course:", error);
            return null;
        }
    };

    useEffect(() => {
        if (!slug) return;

        const fetchCourse = async () => {
            setLoading(true);
            const data = await getCourseBySlug(slug);
            console.log(data, "hiiii");
            setCourse(data);
            setLoading(false);
        };

        fetchCourse();
    }, [slug]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div className="pb-10 min-h-screen">
            <CourseHeroBanner course={course} />
            <CourseInnerDetail course={course} />
            <DiscountBanner course={course} />
        </div>
    );
};

export default CourseDetailsPage;