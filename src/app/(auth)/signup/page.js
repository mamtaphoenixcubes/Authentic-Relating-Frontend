'use client';

import { Suspense } from "react";
import SignUpPage from "./SignUpPage";

export default function Signup() {
  return (
    <div className='p-0 font-sans min-h-screen'>
      <section>
        <Suspense fallback={null}>
          <SignUpPage />
        </Suspense>
      </section>
    </div>
  );
}