// src/components/ChemistryFooter.tsx
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import { 
  FaGithub, 
  FaXTwitter, 
  FaLinkedin, 
  FaGoogleScholar,
  FaOrcid 
} from 'react-icons/fa6'

export default function ChemistryFooter() {
  return (
    <footer className="w-full bg-[#FEFCF3] mt-auto relative z-30">
      <div className="max-w-screen-xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          
          {/* Social Icons - Left side */}
          <div className="flex space-x-6">
            <a
              href="mailto:msak@g.harvard.edu"
              className="text-slate-400 hover:text-red-500 transition-colors duration-200"
              aria-label="Email"
            >
              <EnvelopeIcon className="h-6 w-6" />
            </a>
            
            <a
              href="https://github.com/msh-yi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            
            <a
              href="https://scholar.google.com/citations?user=d1w_uMAAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 transition-colors duration-200"
              aria-label="Google Scholar"
            >
              <FaGoogleScholar className="h-6 w-6" />
            </a>
            
            <a
              href="https://orcid.org/0000-0001-5691-4459"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green-500 transition-colors duration-200"
              aria-label="ORCID"
            >
              <FaOrcid className="h-6 w-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/marcus-sak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-700 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            
            <a
              href="https://x.com/msh_yi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 transition-colors duration-200"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright - Right side */}
          <div className="text-slate-600 text-sm font-medium">
            © {new Date().getFullYear()} Marcus Sak
          </div>
        </div>
      </div>
    </footer>
  )
}