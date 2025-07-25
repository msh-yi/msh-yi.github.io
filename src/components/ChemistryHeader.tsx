// src/components/ChemistryHeader.tsx
"use client";

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

export default function ChemistryHeader() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [headerStyle, setHeaderStyle] = useState<React.CSSProperties>({})

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const updateHeaderLayout = () => {
      const screenWidth = window.innerWidth
      
      if (screenWidth < 1024) {
        // Mobile/tablet - use standard centering
        setHeaderStyle({
          width: "100%",
          marginLeft: "0",
          marginRight: "0",
          paddingLeft: "1rem",
          paddingRight: "1rem"
        })
        return
      }
      
      const containerMaxWidth = 1280
      const containerPadding = 16
      const sidebarWidth = 192
      const gap = 64
      const totalContentWidth = containerMaxWidth + gap + sidebarWidth
      const availableWidth = screenWidth - (containerPadding * 2)
      
      if (availableWidth >= totalContentWidth) {
        // Large screen - align with centered grid
        const leftOffset = (screenWidth - totalContentWidth) / 2
        
        setHeaderStyle({
          width: `${containerMaxWidth}px`,
          marginLeft: `${leftOffset}px`,
          marginRight: "auto",
          paddingLeft: "0",
          paddingRight: "0"
        })
      } else {
        // Medium screen - align with constrained grid
        setHeaderStyle({
          width: `${containerMaxWidth}px`,
          marginLeft: `${containerPadding}px`,
          marginRight: "auto",
          paddingLeft: "0",
          paddingRight: "0"
        })
      }
    }

    updateHeaderLayout()
    window.addEventListener('resize', updateHeaderLayout)
    return () => window.removeEventListener('resize', updateHeaderLayout)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {/* Static Header - no animation */}
      <header 
        className="w-full p-6 bg-[#FEFCF3] relative overflow-hidden sticky top-0 z-50"
      >
        <div 
          className="relative flex items-center"
          style={headerStyle}
        >
          <div className="flex-shrink-0">
            <Link href="/" className="block group">
              <h1
                className="text-3xl font-medium text-[#00356b] hover:text-[#1a202c] 
                  transition-all duration-100 ease-out"
                style={{
                  fontFamily: "miller-display, serif",
                  fontWeight: 550,
                  fontStyle: "normal",
                }}
              >
                Marcus Sak
              </h1>
            </Link>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <nav className="flex items-center space-x-12">
              <Link href="/about" className="group">
                <h2
                  className="text-xl text-[#00356b] hover:text-[#001a2e] 
                    transition-all duration-500 ease-out
                    hover:tracking-wide"
                  style={{
                    fontFamily: "neue-haas-grotesk-display, sans-serif",
                    fontWeight: 600,
                    fontStyle: "normal",
                  }}
                >
                  about
                </h2>
                <div className="h-0.5 w-0 bg-gradient-to-r from-[#00356b] to-[#001a2e] 
                  transition-all duration-500 ease-out group-hover:w-full mt-1"></div>
              </Link>

              <Link href="/cv" className="group">
                <h2
                  className="text-xl text-[#00356b] hover:text-[#001a2e] 
                    transition-all duration-500 ease-out
                    hover:tracking-wide"
                  style={{
                    fontFamily: "neue-haas-grotesk-display, sans-serif",
                    fontWeight: 600,
                    fontStyle: "normal",
                  }}
                >
                  cv
                </h2>
                <div className="h-0.5 w-0 bg-gradient-to-r from-[#00356b] to-[#001a2e] 
                  transition-all duration-500 ease-out group-hover:w-full mt-1"></div>
              </Link>

              <Link href="/contact" className="group">
                <h2
                  className="text-xl text-[#00356b] hover:text-[#001a2e] 
                    transition-all duration-500 ease-out
                    hover:tracking-wide"
                  style={{
                    fontFamily: "neue-haas-grotesk-display, sans-serif",
                    fontWeight: 600,
                    fontStyle: "normal",
                  }}
                >
                  contact
                </h2>
                <div className="h-0.5 w-0 bg-gradient-to-r from-[#00356b] to-[#001a2e] 
                  transition-all duration-500 ease-out group-hover:w-full mt-1"></div>
              </Link>
            </nav>
          </div>

          <div className="flex-shrink-0 ml-auto">
            <Link href="/fun" className="group relative">
              <h2
                className="text-xl text-[#0d7377] hover:text-[#14a085] 
                  transition-all duration-500 ease-out
                  hover:tracking-wide hover:scale-110 hover:rotate-3"
                style={{
                  fontFamily: "neue-haas-grotesk-display, sans-serif",
                  fontWeight: 600,
                  fontStyle: "normal",
                }}
              >
                fun
              </h2>
              <div className="absolute -top-1 -right-1 w-1.5 h-1.5 opacity-0 
                group-hover:opacity-100 transition-all duration-200 delay-100">
                <div className="w-full h-full bg-[#14a085] transform rotate-45"></div>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-[#00356b] hover:bg-[#001a2e] 
            text-white rounded-full shadow-lg transition-all duration-300 ease-out
            hover:scale-110 hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon className="w-4 h-4" />
        </button>
      )}
    </>
  )
}