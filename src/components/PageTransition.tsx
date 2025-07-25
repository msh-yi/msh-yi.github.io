// src/components/PageTransition.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  const pageTransitions = {
    '/': {
      initial: { x: 0 },
      animate: { x: 0 },
      exit: { x: 0 } // Will be handled by the incoming page
    },
    '/chemistry': {
      initial: { x: '-100%' },
      animate: { x: 0 },
      exit: { x: 0 }
    },
    '/fun': {
      initial: { x: '100%' },
      animate: { x: 0 },
      exit: { x: 0 }
    }
  }

  const currentTransition = pageTransitions[pathname as keyof typeof pageTransitions] || {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  }

  return (
    <div className="relative overflow-hidden bg-white min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={currentTransition.initial}
          animate={currentTransition.animate}
          exit={currentTransition.exit}
          transition={{
            type: 'tween',
            ease: [0.22, 1, 0.36, 1],
            duration: 0.8
          }}
          className="w-full min-h-screen bg-white"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}