'use client';

import BlogInnerHero from './BlogInnerHero';
import { RecommendationSection } from './RecommendationSection';

export default function BlogInnerpage({ data, relatedBlogs }) {
    return (
        <div className="p-0 pb-10 font-sans min-h-screen">
            <section>
                <BlogInnerHero data={data} />
                <RecommendationSection relatedBlogs={relatedBlogs} />
            </section>
        </div>
    );
}