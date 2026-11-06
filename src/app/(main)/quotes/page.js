'use client';

import CategorySection from "./CategorySection";
import { QuotesHero } from "./QuotesHero";


export default function Quotes() {
  return (
    <div className=' p-0 pb-10 min-h-screen'>
        <section>
            <QuotesHero/>
            <CategorySection/>
        </section>
    </div>
  );
}
