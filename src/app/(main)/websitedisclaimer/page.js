'use client';

import { WebsiteDisclaimerHero } from "./WebsiteDisclaimerHero";
import { WebsiteDisclaimerPage } from "./WebsiteDisclaimerPage";


export default function WebsiteDisclaimer() {
  return (
    <div className=' p-0 pb-10 min-h-screen'>
        <section>
          <WebsiteDisclaimerHero/>
          <WebsiteDisclaimerPage/>
        </section>
    </div>
  );
}
