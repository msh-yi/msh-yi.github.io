// src/components/PostNavigation.tsx
'use client'

import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

interface PostNavigationProps {
  section: string
}

export default function PostNavigation({ section }: PostNavigationProps) {
  const router = useRouter()

  const handleBack = () => {
    router.push('/chemistry')
  }

  return (
    <div className="mb-8">
      <button
        onClick={handleBack}
        className="group flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors duration-200"
      >
        <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
        <span className="text-base font-medium">Back to posts</span>
      </button>
    </div>
  )
}