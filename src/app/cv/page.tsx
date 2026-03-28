// src/app/cv/page.tsx
import { Metadata } from 'next'
import CVContent from '@/components/CVContent'
import BenzeneBackground from '@/components/BenzeneBackground'
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'CV | Marcus Sak',
  description: 'Curriculum Vitae of Marcus Sak, chemistry researcher at Harvard University.',
}

export default function CVPage() {
  return (
    <div className="relative bg-[#FEFCF3]">
      {/* Benzene background */}
      <BenzeneBackground />
      
      <div className="relative z-20">
        {/* Download PDF Button */}
        <div className="max-w-4xl mx-auto px-6 pt-8">
          <div className="flex justify-end mb-8">
            <a
              href="/cv/Sak_CV_Feb_26.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#00356b] hover:bg-[#001a2e] text-white rounded-lg transition-colors duration-200 font-medium"
            >
              <DocumentArrowDownIcon className="w-5 h-5" />
              Download PDF
            </a>
          </div>
        </div>
        
        <CVContent />
      </div>
    </div>
  )
}