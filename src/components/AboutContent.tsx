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
              I'm a graduate student in chemistry at <a href="https://chemistry.harvard.edu/" className="text-amber-600 hover:text-amber-700 font-semibold">Harvard University</a> working in the <a href="https://jacobsengroup.sites.fas.harvard.edu/" className="text-amber-600 hover:text-amber-700 font-semibold">Jacobsen Group</a>.
            </p>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                My primary research interests are in developing new catalytic reactions and understanding the mechanistic underpinnings of catalysis. As a training physical organic chemist, I am interested in learning and applying physical and computational tools to study the mechanism of reactions. Such tools include operando NMR and IR spectroscopy as well as DFT and wavefunction-based computations. I also rely heavily on programming, data science tools, and mathematics to automate and simplify many aspect of research, including experimental design and data analysis.
            </p>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                In addition to chemistry, I'm also interested in scientific writing and the sociology of scientific research (see blog posts). I also <Link href="/fun" className="text-amber-600 hover:text-amber-700 font-semibold">bake</Link>, dabble in graphic design, and stay active by biking, ice skating, and playing tennis. I am passionate about Boston's bikeshare network, on which I recently exceeded 2,000 miles.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                From 2017 to 2021 I was an undergraduate at Yale University, where I studied peptide-catalyzed reactions in the <a href="https://millerlab.yale.edu/" className="text-amber-600 hover:text-amber-700 font-semibold">Miller Group</a>. Prior to that I attended high school in Singapore and was born and raised in Penang, Malaysia.
            </p>
        
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}