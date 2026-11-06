'use client';

import AncientOriginsSection from "./AncientOriginsSection";
import PowerOfCircle from "./PowerOfCircle";
import { RelatingCirclesHero } from "./RelatingCirclesHero";
import { RelatingCirclespage } from "./RelatingCirclespage";
import WhyItMatters from "./WhyItMatters";

export default function RelatingCircles() {
  return (
    <div className=' p-0 bg-[#ffff] min-h-screen'>
        <section>
            <RelatingCirclesHero/>
            <RelatingCirclespage/>
            <AncientOriginsSection/>
            <PowerOfCircle/>
            <WhyItMatters/>
        </section>
    </div>
  );
}
