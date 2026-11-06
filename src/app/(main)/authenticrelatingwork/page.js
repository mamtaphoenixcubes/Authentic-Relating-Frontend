'use client';

import AuthenticRelatingHeader from "./AuthenticRelatingHeader";
import { AuthenticRelatingWorkHero } from "./AuthenticRelatingWorkHero";
import OurApproach from "./OurApproach";
import { RealResults } from "./RealResults";
import WhyAuthenticRelating from "./WhyAuthenticRelating";


export default function AuthenticRelatingWork() {
  return (
    <div className=' bg-[#ffff] p-0 pb-10 min-h-screen'>
        <section>
          <AuthenticRelatingWorkHero/>
          <AuthenticRelatingHeader/>
          <WhyAuthenticRelating/>
          <OurApproach/>
          <RealResults/>
        </section>
    </div>
  );
}
