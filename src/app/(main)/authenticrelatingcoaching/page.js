'use client';

import AboutGuide from "./AboutGuide";
import AuthenticRelatingCard from "./AuthenticRelatingCard";
import { AuthenticRelatingCoachingHero } from "./AuthenticRelatingCoachingHero";
import AuthenticRelatingSection from "./AuthenticRelatingSection";
import WaysWeWork from "./WaysWeWork";

export default function AuthenticRelatingCoaching() {
  return (
    <div className='bg-[#ffff] p-0 pb-10 min-h-screen'>
        <section>
          <AuthenticRelatingCoachingHero/>
          <AuthenticRelatingSection/>
          <AuthenticRelatingCard/>
          <WaysWeWork/>
          <AboutGuide/>
        </section>
    </div>
  );
}
