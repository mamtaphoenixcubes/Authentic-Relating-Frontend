'use client';

import FAQ from "./FAQ";
import { FAQHero } from "./FAQHero";

export default function FAQs() {
  return (
    <div className=' p-0 pb-10 font-sans min-h-screen'>
        <section>
            <FAQHero/>
            <FAQ/>
        </section>
    </div>
  );
}
