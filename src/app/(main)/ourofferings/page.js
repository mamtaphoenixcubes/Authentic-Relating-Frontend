'use client';


import ConnectionSection from "./ConnectionSection";
import { OurofferingsHero } from "./OurofferingsHero";

export default function Ourofferings() {
  return (
    <div className=' p-0 pb-10 font-sans min-h-screen'>
        <section>
            <OurofferingsHero/>
            <ConnectionSection/>
        </section>
    </div>
  );
}
