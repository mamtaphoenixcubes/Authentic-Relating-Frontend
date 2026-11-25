'use client';

import { usePathname } from 'next/navigation';
import { Toaster } from 'react-hot-toast';
import Footer from '../_components/layout/Footer';
import Header from '../_components/layout/Header';

export default function MainLayoutShell({ children }) {
  const pathname = usePathname();
  const isLmsRoute = pathname?.startsWith('/lms/');

  return (
    <div className="min-h-screen bg-white">
      {!isLmsRoute && <div className="overlay-header"><Header /></div>}
      {isLmsRoute ? children : <main>{children}</main>}
      {!isLmsRoute && <Footer />}
      <Toaster position="top-right" />
    </div>
  );
}

