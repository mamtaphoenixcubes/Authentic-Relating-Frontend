'use client';

import { BlogHero } from './BlogHero';
import { BlogGrid } from './BlogGrid';

export default function BlogPage() {
  return (
    <div className=' p-0 pb-10 font-sans min-h-screen'>
        <section>
            <BlogHero/>
            <BlogGrid/>
        </section>
    </div>
  );
}
