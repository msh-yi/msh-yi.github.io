// src/app/posts/layout.tsx
import { ReactNode } from 'react'
import ChemistryHeader from '@/components/ChemistryHeader'
import Footer from '@/components/Footer'

export default function PostsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <ChemistryHeader />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}