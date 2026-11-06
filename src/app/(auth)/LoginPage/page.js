'use client';

import { Suspense } from "react";
import AuthPage from "./AuthPage";


export default function LoginPage() {
  return (
    <div className='p-0 font-sans min-h-screen'>
      <section>
        <Suspense fallback={null}>
          <AuthPage />
        </Suspense>
      </section>
    </div>
  );
}
