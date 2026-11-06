'use client';

import { FiveDimensionsHero } from "./FiveDimensionsHero";
import { FiveDimensionspage } from "./FiveDimensionspage";
import FrameworkHeroSection from "./FrameworkHeroSection";
import WhatYouWillFind from "./WhatYouWillFind";


export default function FiveDimensionsofAuthenticRelating() {
  return (
    <div className='bg-[#fff] p-0 pb-10 font-sans min-h-screen'>
        <section>
          <FiveDimensionsHero/>
          <FrameworkHeroSection/>
          <FiveDimensionspage/>
          <WhatYouWillFind/>
        </section>
    </div>
  );
}


