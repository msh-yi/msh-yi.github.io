// src/app/layout.tsx
'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ygc3zlz.css" />
      </head>
      <body className="flex flex-col min-h-screen">
        {/* Only show header and footer on non-home (non-landing) pages */}
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}