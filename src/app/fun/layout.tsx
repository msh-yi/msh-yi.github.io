// src/app/fun/layout.tsx

import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function FunLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto py-8">{children}</main>
      <Footer />
    </>
  )
}
