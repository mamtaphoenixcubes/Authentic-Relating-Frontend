'use client';

import { CommunityUnique } from "./CommunityUnique";
import { Community } from "./Community";
import { CommunityHero } from "./CommunityHero";


export default function CommunityPage() {
  return (
    <div className='bg-[#fff] p-0 pb-10 min-h-screen'>
        <section>
          <CommunityHero/>
          <Community/>
          <CommunityUnique/>
        </section>
    </div>
  );
}
