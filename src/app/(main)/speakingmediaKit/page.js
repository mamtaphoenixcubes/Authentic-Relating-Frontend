'use client';

import { AuthenticRelating } from "./AuthenticRelating";
import FounderIntroSection from "./FounderIntroSection";
import { SpeakingMediaKitHero } from "./SpeakingMediaKitHero";



export default function SpeakingMediaKit() {
  return (
    <div className='bg-[#fff] p-0 pb-10 min-h-screen'>
        <section>
          <SpeakingMediaKitHero/>
          <AuthenticRelating/>
          <FounderIntroSection/>
        </section>
    </div>
  );
}
