// src/components/CVContent.tsx
'use client'

import { motion } from 'framer-motion'

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

export default function CVContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-5xl mx-auto px-6 pb-16"
    >
      {/* Header - Clean and Centered */}
      <motion.header variants={itemVariants} className="text-center mb-20">
        <h1 className="text-5xl font-light text-slate-900 mb-4">Marcus H. Sak</h1>
        <div className="flex justify-center gap-8 text-slate-600">
          <span>msak@g.harvard.edu</span>
        </div>
      </motion.header>

      {/* Education */}
      <motion.section variants={itemVariants} className="mb-20">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-2xl text-slate-900 font-semibold">Education</h2>
          </div>
          <div className="lg:col-span-4 space-y-10">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-xl font-medium text-slate-900">Harvard University</h3>
                <span className="text-amber-600 font-medium">2021–present</span>
              </div>
              <p className="text-slate-700 mb-1">Ph.D. Candidate, Chemistry and Chemical Biology</p>
              <p className="text-slate-600 text-sm">Expected May 2026 • Catalytic Principles for Selective Small-Molecule Catalysis</p>
            </div>
            
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-xl font-medium text-slate-900">Yale University</h3>
                <span className="text-amber-600 font-medium">2017–2021</span>
              </div>
              <p className="text-slate-700 mb-1">B.S./M.S. in Chemistry</p>
              <p className="text-slate-600 text-sm">Summa cum laude, Phi Beta Kappa • GPA: 3.98/4.00</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Research Experience */}
      <motion.section variants={itemVariants} className="mb-20">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-2xl text-slate-900 font-semibold">Research Experience</h2>
          </div>
          <div className="lg:col-span-4 space-y-10">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-xl font-medium text-slate-900">Merck & Co., Inc.</h3>
                <span className="text-amber-600 font-medium">2025–present</span>
              </div>
              <p className="text-slate-700 mb-1">Visiting Scientist, Process R&D Enabling Technologies</p>
              <p className="text-slate-600 text-sm">High-throughput and automated experimentation for combinatorial screening</p>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-xl font-medium text-slate-900">Harvard University</h3>
                <span className="text-amber-600 font-medium">2021–present</span>
              </div>
              <p className="text-slate-700 mb-1">Ph.D. Candidate, Chemistry and Chemical Biology</p>
              <p className="text-slate-600 text-sm">Advisor: Prof. Eric N. Jacobsen • Asymmetric catalysis of ionic pathways; screening for cooperative catalysis</p>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-xl font-medium text-slate-900">Yale University</h3>
                <span className="text-amber-600 font-medium">2018–2021</span>
              </div>
              <p className="text-slate-700 mb-1">Undergraduate Research Assistant</p>
              <p className="text-slate-600 text-sm">Advisor: Scott J. Miller • Peptide-catalyzed enantioselective reactions and mechanistic studies</p>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-xl font-medium text-slate-900">Justus-Liebig-Universität Giessen</h3>
                <span className="text-amber-600 font-medium">2019</span>
              </div>
              <p className="text-slate-700 mb-1">DAAD RISE Intern</p>
              <p className="text-slate-600 text-sm">Advisor: Peter R. Schreiner • Synthesis and computational studies of minimal mercaptocarbenes</p>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-xl font-medium text-slate-900">National University of Singapore</h3>
                <span className="text-amber-600 font-medium">2015–2016</span>
              </div>
              <p className="text-slate-700 mb-1">Research Intern</p>
              <p className="text-slate-600 text-sm">Advisor: Yixin Lu • Asymmetric phosphine catalysis</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Publications */}
      <motion.section variants={itemVariants} className="mb-20">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-2xl text-slate-900 font-semibold">Publications</h2>
          </div>
          <div className="lg:col-span-4">
            <ol className="space-y-6">
              <li className="text-slate-800 leading-relaxed">
                <span className="font-medium">Sak, M. H.; Liu, R. Y., Kwan, E. E.; Jacobsen, E. N.</span> Accelerating the discovery of multicatalytic cooperativity.{' '}
                <span className="text-slate-600 italic">Nature</span> <span className="font-medium">2025</span>, <span className="italic">633</span>, in press.
              </li>
              <li className="text-slate-800 leading-relaxed">
                <span className="font-medium">Sak, M. H.; Jacobsen, E. N.</span> Selective Noncovalent Catalysis with Small Molecules.{' '}
                <span className="text-slate-600 italic">Chem. Rev.</span> <span className="font-medium">2025</span>
              </li>
              
              <li className="text-slate-800 leading-relaxed">
                <span className="font-medium">Sak, M. H.*; Lovinger, G. J.*; Jacobsen, E. N.</span> Catalysis of An S<sub>N</sub>2 Pathway by Geometric Preorganization.{' '}
                <span className="text-slate-600 italic">Nature</span> <span className="font-medium">2024</span>, <span className="italic">632</span>, 1052.
              </li>
              
              <li className="text-slate-800 leading-relaxed">
                <span className="font-medium">Turek, A. K.; Sak, M. H.; Miller, S. J.</span> Kinetic Analysis of a Cysteine-Derived Thiyl-Catalyzed Asymmetric Vinylcyclopropane Cycloaddition Reflects Numerous Attractive Noncovalent Interactions.{' '}
                <span className="text-slate-600 italic">J. Am. Chem. Soc.</span> <span className="font-medium">2021</span>, <span className="italic">143</span>, 16173.
              </li>
              
              <li className="text-slate-800 leading-relaxed">
                <span className="font-medium">Chan, Y.-C.; Sak, M. H.; Frank, S. A.; Miller, S. J.</span> Tunable and Cooperative Catalysis for Enantioselective Pictet-Spengler Reaction with Varied Nitrogen-Containing Heterocyclic Carboxaldehydes.{' '}
                <span className="text-slate-600 italic">Angew. Chem. Int. Ed.</span> <span className="font-medium">2021</span>, <span className="italic">60</span>, 24573.
              </li>
              
              <li className="text-slate-800 leading-relaxed">
                <span className="font-medium">Coombs, G.; Sak, M. H.; Miller, S. J.</span> Peptide‐Catalyzed Fragment Couplings that Form Axially Chiral Non‐C<sub>2</sub>‐Symmetric Biaryls.{' '}
                <span className="text-slate-600 italic">Angew. Chem. Int. Ed.</span> <span className="font-medium">2020</span>, <span className="italic">59</span>, 2875.
              </li>
            </ol>
          </div>
        </div>
      </motion.section>

      {/* Presentations */}
      <motion.section variants={itemVariants} className="mb-20">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-2xl text-slate-900 font-semibold">Presentations</h2>
          </div>
          <div className="lg:col-span-4 space-y-4">
            <div className="text-slate-800 leading-relaxed">
              <span className="font-medium">Talk:</span> Catalytic Principles in Phosphonium Dealkylation towards P-Stereogenic Compounds.{' '}
              <span className="text-slate-600 italic">ACS DOC Graduate Research Symposium</span>, 2025, San Diego, CA
            </div>
            
            <div className="text-slate-800 leading-relaxed">
              <span className="font-medium">Talk:</span> Catalytic Principles in Phosphonium Dealkylation towards P-Stereogenic Compounds.{' '}
              <span className="text-slate-600 italic">Johnson & Johnson</span>, 2025, San Diego, CA
            </div>
            
            <div className="text-slate-800 leading-relaxed">
              <span className="font-medium">Talk:</span> Accelerating the Discovery of Cooperative Catalysis.{' '}
              <span className="text-slate-600 italic">Rowan Scientific</span>, 2025, Boston, MA
            </div>
            
            <div className="text-slate-800 leading-relaxed">
              <span className="font-medium">Poster:</span> Catalysis of An S<sub>N</sub>2 Pathway by Geometric Preorganization.{' '}
              <span className="text-slate-600 italic">Stereochemistry Gordon Research Conference</span>, 2024, Newport, RI
            </div>
            
            <div className="text-slate-800 leading-relaxed">
              <span className="font-medium">Poster:</span> Catalytic Enantioselective Arbuzov Reaction by Ion Pair Reorganization Towards Stereogenic-at-P(V) Compounds.{' '}
              <span className="text-slate-600 italic">Boston Symposium on Organic and Bioorganic Chemistry</span>, 2024, Boston, MA
            </div>
            
            <div className="text-slate-800 leading-relaxed">
              <span className="font-medium">Talk:</span> Catalytic Enantioselective Arbuzov Reaction by Ion Pair Reorganization.{' '}
              <span className="text-slate-600 italic">Harvard Chemistry & Chemical Biology Symposium</span>, 2023, Cambridge, MA
            </div>
          </div>
        </div>
      </motion.section>


      {/* Teaching Experience */}
      <motion.section variants={itemVariants} className="mb-20">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold text-slate-900">Teaching</h2>
          </div>
          <div className="lg:col-span-4 space-y-8">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-xl font-medium text-slate-900">Harvard University</h3>
                <span className="text-amber-600 font-medium">2022–2023</span>
              </div>
              <p className="text-slate-700 mb-2">Teaching Fellow</p>
              <div className="text-slate-600 text-sm space-y-1">
                <p>• CHEM 105 (Advanced Organic Chemistry)</p>
                <p>• CHEM 17 (Principles of Organic Chemistry), CHEM 20 (Organic Chemistry I)</p>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-xl font-medium text-slate-900">Yale University</h3>
                <span className="text-amber-600 font-medium">2018–2021</span>
              </div>
              <p className="text-slate-700 mb-2">Quantitative Reasoning/Science Peer Tutor</p>
              <p className="text-slate-600 text-sm">General Chemistry I/II, Organic Chemistry I, Physical Chemistry I/II</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Fellowships */}
      <motion.section variants={itemVariants} className="mb-20">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold text-slate-900">Fellowships</h2>
          </div>
          <div className="lg:col-span-4 space-y-6">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-medium text-slate-900">Industry-Sponsored Research Fellowship</h3>
                <span className="text-amber-600 font-medium">2024–2027</span>
              </div>
              <p className="text-slate-600 text-sm">Merck & Co., Inc.</p>
            </div>
            
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-medium text-slate-900">DAAD Research Internship in Science and Engineering (RISE)</h3>
                <span className="text-amber-600 font-medium">2019</span>
              </div>
              <p className="text-slate-600 text-sm">German Academic Exchange Service</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Honors and Awards */}
      <motion.section variants={itemVariants} className="mb-20">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold text-slate-900">Honors & Awards</h2>
          </div>
          <div className="lg:col-span-4 space-y-6">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-medium text-slate-900">Certificate of Distinction in Teaching</h3>
                <span className="text-amber-600 font-medium">2023</span>
              </div>
              <p className="text-slate-600 text-sm">Harvard University</p>
            </div>
            
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-medium text-slate-900">Exceptional Distinction in the Major</h3>
                <span className="text-amber-600 font-medium">2021</span>
              </div>
              <p className="text-slate-600 text-sm">Yale University • First award since 2015</p>
            </div>
            
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-medium text-slate-900">Werner Bergmann Prize for Outstanding Senior in Chemistry</h3>
                <span className="text-amber-600 font-medium">2021</span>
              </div>
              <p className="text-slate-600 text-sm">Yale University</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mentoring */}
      <motion.section variants={itemVariants} className="mb-20">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold text-slate-900">Mentoring</h2>
          </div>
          <div className="lg:col-span-4">
            <h3 className="text-lg font-medium text-slate-900 mb-4">Harvard University</h3>
            <div className="space-y-2 text-slate-700">
              <p>• John Rezk (Third-year graduate student, 2022–2025)</p>
              <p>• Frank Lee (Harvard College undergraduate, 2022–2025)</p>
              <p>• Maximilian Frank (Visiting Masters student, LMU Munich, 2025–present)</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Service */}
      <motion.section variants={itemVariants} className="mb-20">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold text-slate-900">Service</h2>
          </div>
          <div className="lg:col-span-4 space-y-8">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-medium text-slate-900">Chair, Gordon Research Seminar</h3>
                <span className="text-amber-600 font-medium">2024</span>
              </div>
              <p className="text-slate-600 text-sm">Managed finances, applications, and speaker program for Stereochemistry GRS</p>
            </div>
            
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-medium text-slate-900">STEM Professional, Letters to a Pre-Scientist</h3>
                <span className="text-amber-600 font-medium">2021–2022</span>
              </div>
              <p className="text-slate-600 text-sm">Exchanged letters with rural middle-schoolers about experiences in STEM</p>
            </div>
            
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-medium text-slate-900">Editor in Chief, Yale Scientific Magazine</h3>
                <span className="text-amber-600 font-medium">2020</span>
              </div>
              <div className="text-slate-600 text-sm space-y-1">
                <p>• Headed editorial and business operations for a national popular science publication</p>
                <p>• Performed science demonstrations for local middle- and high-schoolers</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}