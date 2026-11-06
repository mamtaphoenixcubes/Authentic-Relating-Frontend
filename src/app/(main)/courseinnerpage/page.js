'use client';

import DiscountBanner from './DiscountBanner';
import CourseHeroBanner from './CourseHeroBanner';
import CourseInnerDetail from './CourseInnerDetail';
import ManyMoreSessions from './ManyMoreSessions';

export default function CourseInnerpage() {
  return (
    <div className=' p-0 pb-10 font-sans min-h-screen'>
        <section>
            <CourseHeroBanner/>
            <CourseInnerDetail/>
            <DiscountBanner/>
            <ManyMoreSessions/>
        </section>
    </div>
  );
}
