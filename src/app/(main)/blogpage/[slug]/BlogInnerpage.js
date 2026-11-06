'use client';

import BlogInnerHero from './BlogInnerHero';
import { RecommendationSection } from './RecommendationSection';

export default function BlogInnerpage({ data, relatedBlogs }) {
    return (
        <div className="p-0 pb-10 font-sans min-h-screen">
            <section>
                <BlogInnerHero data={data} />
                
                {/* Figma Divider Line */}
                <div 
                    style={{
                        width: '100%',
                        margin: '0 auto', // Centers the line
                        height: '0px', // Figma specifies 0px height, the border creates the visual line
                        borderTop: '1px solid #444444',
                        opacity: 1,
                    }} 
                />

                <RecommendationSection relatedBlogs={relatedBlogs} />
            </section>
        </div>
    );
}