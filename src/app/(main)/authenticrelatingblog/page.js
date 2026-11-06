'use client';

import { AuthenticRelatingBlogHero } from "./AuthenticRelatingBlogHero";
import AuthenticRelatingBlogPage from "./AuthenticRelatingBlogPage";


export default function AuthenticRelatingBlog() {
  return (
    <div className=' p-0 pb-10 min-h-screen'>
        <section>
            <AuthenticRelatingBlogHero/>
            <AuthenticRelatingBlogPage/>
        </section>
    </div>
  );
}
