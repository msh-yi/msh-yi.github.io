// src/app/cv/layout.tsx
import { ReactNode } from 'react'
import ChemistryHeader from '@/components/ChemistryHeader'
import ChemistryFooter from '@/components/ChemistryFooter'

export default function CVLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEFCF3]">
      <ChemistryHeader />
      <main className="flex-1 w-full">
        {children}
      </main>
      <ChemistryFooter />
    </div>
  )
}