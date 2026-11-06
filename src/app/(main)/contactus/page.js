'use client';

import { ContactHero } from "./ContactHero";
import ContactSection from "./ContactSection";
import { DeepenConnection } from "./DeepenConnection";
import { Joinourglobalcommunity } from "./Joinourglobalcommunity";
import ReachOutSection from "./ReachOutSection";

export default function ContactUs() {
  return (
    <div className=' p-0 pb-10 font-sans min-h-screen'>
        <section>
            <ContactHero/>
            <DeepenConnection/>
            <ContactSection/>
            <ReachOutSection/>
            <Joinourglobalcommunity/>
        </section>
    </div>
  );
}
