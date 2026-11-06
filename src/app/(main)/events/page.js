// 'use client';

// import DiscountBanner from "./DiscountBanner";
// import { EventPageHero } from "./EventPageHero";
// import FeaturesSection from "./FeaturesSection";
// import RealConnectionSection from "./RealConnectionSection";
// import UpcomingEvents from "./UpcomingEvents";


// export default function Events() {
//   return (
//     <div className=' p-0 pb-10 font-sans min-h-screen'>
//         <section>
//             <EventPageHero/>
//             <RealConnectionSection/>
//             <FeaturesSection/>
//             <UpcomingEvents/>
//             <DiscountBanner/>
//         </section>
//     </div>
//   );
// }



'use client';

import { useRef } from "react";
import DiscountBanner from "./DiscountBanner";
import { EventPageHero } from "./EventPageHero";
import FeaturesSection from "./FeaturesSection";
import RealConnectionSection from "./RealConnectionSection";
import UpcomingEvents from "./UpcomingEvents";

export default function Events() {

  const upcomingRef = useRef(null);

  const handleScrollToUpcoming = () => {
  if (upcomingRef.current) {
    const yOffset = -100; // adjust based on header height
    const y =
      upcomingRef.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

  return (
    <div className="p-0 pb-10 font-sans min-h-screen">
      <section>
        <EventPageHero />
        <RealConnectionSection onViewEvents={handleScrollToUpcoming} />
        <FeaturesSection />

        {/* Attach ref here */}
        <div ref={upcomingRef}>
          <UpcomingEvents />
        </div>

        <DiscountBanner />
      </section>
    </div>
  );
}