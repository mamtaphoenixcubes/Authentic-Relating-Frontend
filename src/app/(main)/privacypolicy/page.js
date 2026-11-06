'use client';

import { PrivacyPolicyHero } from "./PrivacyPolicyHero";
import { PrivacyPolicyPage } from "./PrivacyPolicyPage";



export default function PrivacyPolicy() {
  return (
    <div className='p-0 pb-10 min-h-screen'>
      <section>
        <PrivacyPolicyHero/>
        <PrivacyPolicyPage/>
      </section>
    </div>
  );
}