'use client';

import { Leadership } from "./Leadership";
import { LeadershipPageHero } from "./LeadershipPageHero";
import { WhoItsFor } from "./WhoItsFor";


export default function LeadershipPage() {
  return (
    <div className='bg-[#fff] p-0 pb-10 min-h-screen'>
        <section>
          <LeadershipPageHero/>
          <Leadership/>
          <WhoItsFor/>
        </section>
    </div>
  );
}
