// src/app/layout.tsx
'use client'  // we need a client component to read the URL

import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* only show on non-home pages */}
        {!isHome && <Header />}

        <main className="flex-1">
          {children}
        </main>

        {!isHome && <Footer />}
      </body>
    </html>
  )
}
