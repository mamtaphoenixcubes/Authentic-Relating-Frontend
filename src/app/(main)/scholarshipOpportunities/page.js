'use client';

import { ScholarshipOpportunitiesHero } from "./ScholarshipOpportunitiesHero";
import Scholarship from "./Scholarship";


export default function ScholarshipOpportunities() {
  return (
    <div className=' p-0 pb-10 min-h-screen'>
        <section>
            <ScholarshipOpportunitiesHero/>
            <Scholarship/>
        </section>
    </div>
  );
}
