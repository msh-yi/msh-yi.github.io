// src/app/(landing)/page.tsx
'use client'

import LandingLayout from './layout'
import Link from "next/link"
import { ArrowLeftIcon, ArrowRightIcon, EnvelopeIcon } from "@heroicons/react/24/solid"

import { 
  FaGithub, 
  FaXTwitter, 
  FaLinkedin, 
  FaGoogleScholar,
  FaOrcid 
} from 'react-icons/fa6'

export default function LandingPage() {
  return (
    <LandingLayout>
      <div className="relative flex flex-col h-screen overflow-hidden">
        {/* 1) Title with underline - Deep charcoal for sophistication */}
        <div className="absolute top-20 inset-x-0 flex flex-col items-center z-20">
          <h1
            className="text-5xl font-bold text-[#2d3748] mb-4"
            style={{
              fontFamily: "miller-display, serif",
              fontWeight: 700,
              fontStyle: "normal",
            }}
          >
            Marcus Sak
          </h1>
          {/* Subtle underline */}
          <div className="w-70 h-0.5 bg-gradient-to-r from-transparent via-[#2d3748] to-transparent opacity-60"></div>
        </div>

        {/* 2) Wrapper - Warm cream to mint gradient */}
        <div
          className="relative flex flex-1"
          style={{
            background: "linear-gradient(-80deg, #fefcf7 50%, #f0fdfa 50%)"
          }}
        >

          {/* 4) Left panel (chemistry) */}
          <div className="flex-1 relative group">
            <Link
              href="/chemistry"
              className="h-full w-full flex flex-col justify-center items-center bg-transparent absolute inset-0 z-10"
            >
              <ArrowLeftIcon className="h-6 w-6 text-[#cbd5e1] group-hover:text-[#001a2e] absolute left-15 
                transition-all duration-200 ease-out 
                group-hover:scale-125 group-hover:-translate-x-1" />
              <h2
                className="text-3xl text-[#00356b] group-hover:text-[#001a2e] mb-2 
                  transition-all duration-300 ease-out delay-75
                  group-hover:scale-110 group-hover:font-extrabold"
                style={{
                  fontFamily: "neue-haas-grotesk-display, sans-serif",
                  fontWeight: 700,
                  fontStyle: "normal",
                }}
              >
                chemistry
              </h2>
            </Link>

            {/* Social Icons - positioned at bottom of left panel with higher z-index */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-6 z-50">
              <a
                href="mailto:msak@g.harvard.edu"
                className="text-[#cbd5e1] hover:text-[#ea4335] transition-colors duration-200"
              >
                <EnvelopeIcon className="h-7 w-7" />
              </a>
              <a
                href="https://github.com/msh-yi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cbd5e1] hover:text-[#333] transition-colors duration-200"
              >
                <FaGithub className="h-7 w-7" />
              </a>
              
              <a
                href="https://scholar.google.com/citations?user=d1w_uMAAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cbd5e1] hover:text-[#4285f4] transition-colors duration-200"
              >
                <FaGoogleScholar className="h-7 w-7" />
              </a>
              
              <a
                href="https://orcid.org/0000-0001-5691-4459"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cbd5e1] hover:text-[#a6ce39] transition-colors duration-200"
              >
                <FaOrcid className="h-7 w-7" />
              </a>

              <a
                href="https://www.linkedin.com/in/marcus-sak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cbd5e1] hover:text-[#0077b5] transition-colors duration-200"
              >
                <FaLinkedin className="h-7 w-7" />
              </a>
              
              <a
                href="https://x.com/msh_yi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cbd5e1] hover:text-[#333] transition-colors duration-200"
              >
                <FaXTwitter className="h-7 w-7" />
              </a>
            </div>
          </div>

          {/* 5) Right panel (fun) */}
          <Link
            href="/fun"
            className="flex-1 flex flex-col justify-center items-center bg-transparent group"
          >
            <ArrowRightIcon className="h-6 w-6 text-[#cbd5e1] group-hover:text-[#14a085] absolute right-15 
              transition-all duration-200 ease-out 
              group-hover:scale-125 group-hover:translate-x-1" />
            <h2
              className="text-3xl text-[#0d7377] group-hover:text-[#14a085] mb-2 
                transition-all duration-300 ease-out delay-75
                group-hover:scale-110 group-hover:font-extrabold"
              style={{
                fontFamily: "neue-haas-grotesk-display, sans-serif",
                fontWeight: 700,
                fontStyle: "normal",
              }}
            >
              fun
            </h2>
          </Link>
        </div>
      </div>
    </LandingLayout>
  )
}