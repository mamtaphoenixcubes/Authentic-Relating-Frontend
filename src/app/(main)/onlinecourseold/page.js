'use client';

import DiscountBannerCourse from "./DiscountBannerCourse";
import CourseCard from "./CourseCard";
import { OnlineCourseHero } from "./OnlineCourseHero";

export default function OnlineCourse() {

  return (
    <div className='bg-[#fff] p-0 pb-10 font-sans min-h-screen'>
        <section>
            <OnlineCourseHero/>
            <CourseCard/>
            <DiscountBannerCourse/>
        </section>
    </div>
  );
}
