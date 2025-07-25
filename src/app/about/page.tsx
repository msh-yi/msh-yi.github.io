// src/app/about/page.tsx
import { Metadata } from 'next'
import AboutContent from '@/components/AboutContent'
import BenzeneBackground from '@/components/BenzeneBackground'

export const metadata: Metadata = {
  title: 'About | Marcus Sak',
  description: 'Learn more about Marcus Sak, a chemistry researcher at Harvard University.',
}

export default function AboutPage() {
  return (
    <div className="relative bg-[#FEFCF3]">
      {/* Optional: Add a subtle background pattern or keep it clean */}
      <BenzeneBackground />
      <div className="relative z-20">
        <AboutContent />
      </div>
    </div>
  )
}