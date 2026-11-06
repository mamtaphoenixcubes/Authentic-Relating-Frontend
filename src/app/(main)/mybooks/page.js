'use client';

import { Suspense } from "react";
import AboutAuthor from "./AboutAuthor";
import BookCard from "./BookCard";
import BookGrid from "./BookGrid";
import { MyBooksHero } from './MyBooksHero'

export default function MyBooks() {
  return (
    <div className=' p-0 pb-10 font-sans min-h-screen'>
      <section>
        <MyBooksHero />
        <Suspense fallback={null}>
          <BookGrid />
        </Suspense>
        <AboutAuthor />
        <BookCard />
      </section>
    </div>
  );
}
