'use client';

import CoreValues from "./CoreValues";
import { MissingVisionHero } from "./MissingVisionHero";
import { MissingVisionpage } from "./MissingVisionpage";

export default function MissingVision() {
  return (
    <div className='p-0 pb-10 min-h-screen bg-[#ffffff]'>
        <section>
            <MissingVisionHero/>
            <MissingVisionpage/>
            <CoreValues/>
        </section>
    </div>
  );
}