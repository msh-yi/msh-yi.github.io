// src/components/AboutContent.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { 
  FaGithub, 
  FaGoogleScholar,
  FaOrcid,
  FaLinkedin,
  FaXTwitter 
} from 'react-icons/fa6'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

export default function AboutContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto px-6 py-16"
    >

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-12 items-start">
        
        {/* Headshot Column */}
        <motion.div variants={itemVariants} className="lg:col-span-1">
          <div className="relative">
            
            {/* Headshot */}
            <div className="relative bg-white rounded-2xl shadow-lg">
              <Image
                src="/images/headshot.png" // You'll need to add this to your public/images folder
                alt="Marcus Sak"
                width={400}
                height={400}
                className="w-full h-auto rounded-xl object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
        </motion.div>

        {/* Text Content Column */}
        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              I received my PhD from <a href="https://chemistry.harvard.edu/" className="text-amber-600 hover:text-amber-700 font-semibold">Harvard University</a>, where I worked in the <a href="https://jacobsengroup.sites.fas.harvard.edu/" className="text-amber-600 hover:text-amber-700 font-semibold">Jacobsen Group</a>.
            </p>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                My primary research interests in graduate school were the development of new catalytic reactions and understanding reaction mechanisms. I applied physical and computational tools, including operando NMR and IR spectroscopy as well as quantum-chemical computational modeling. I routinely use programming, data science tools, and mathematics to automate and enhance experimental design and data analysis.
            </p>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                In addition to research, I enjoy writing about science for a general audience and in the sociology of scientific research (see my blog posts). Also important for my happiness are <a href="https://bicarb.substack.com/" className="text-amber-600 hover:text-amber-700 font-semibold">eating and making food</a>.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                From 2017 to 2021 I was an undergraduate at Yale University, where I studied peptide-catalyzed reactions in the <a href="https://millerlab.yale.edu/" className="text-amber-600 hover:text-amber-700 font-semibold">Miller Group</a>. Prior to that I attended <a href="https://www.nushigh.edu.sg/" className="text-amber-600 hover:text-amber-700 font-semibold">high school</a> in Singapore after growing up in Penang, Malaysia.
            </p>
        
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}