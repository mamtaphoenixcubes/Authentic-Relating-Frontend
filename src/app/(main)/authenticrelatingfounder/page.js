'use client';

import AmitabhaProfile from "./AmitabhaProfile";
import { AuthenticRelatingFounderHero } from "./AuthenticRelatingFounderHero";

export default function AuthenticRelatingFounder() {
  return (
    <div className=' p-0 bg-[#ffff]'>
        <section>
          <AuthenticRelatingFounderHero/>
          <AmitabhaProfile/>
        </section>
    </div>
  );
}
