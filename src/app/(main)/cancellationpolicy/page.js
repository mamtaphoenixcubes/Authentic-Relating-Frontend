'use client';

import { CancellationPolicyHero } from "./CancellationPolicyHero";
import CancellationPolicyPage from "./CancellationPolicyPage";


export default function CancellationPolicy() {
  return (
    <div className=' p-0 pb-10 min-h-screen'>
        <section>
            <CancellationPolicyHero/>
            <CancellationPolicyPage/>
        </section>
    </div>
  );
}
