'use client';

import { AboutUsHero } from "./AboutUsHero";
import { AuthenticRelatingUI } from "./AuthenticRelatingUI";


export default function Aboutus() {
  return (
    <div className='bg-[#fff] pb-10 min-h-screen'>
        <section>
          <AboutUsHero/>
          <AuthenticRelatingUI/>
        </section>
    </div>
  );
}
