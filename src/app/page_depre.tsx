// src/app/page.tsx
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div
      className="w-screen h-screen flex items-center justify-center"
      style={{ backgroundColor: '#FF6F61' }}  // “Coral” background
    >
      {/* white & yellow container */}
      <div className="flex w-full max-w-4xl h-[80vh] rounded-lg overflow-hidden shadow-xl">
        
        {/* —————— Left Panel —————— */}
        <Link
          href="/chemistry"
          className="flex-1 flex flex-col justify-center items-center bg-white transition-transform hover:scale-[1.02]"
        >
          <div className="text-center">
            <h2 className="text-xs uppercase tracking-widest text-[#FF6F61] mb-2">
              Work
            </h2>
            <p className="font-serif text-5xl">Chemistry</p>
          </div>
        </Link>

        {/* —————— Right Panel —————— */}
        <Link
          href="/fun"
          className="flex-1 flex flex-col justify-center items-center bg-[#FDF1D5] transition-transform hover:scale-[1.02]"
        >
          <div className="text-center">
            <h2 className="text-xs uppercase tracking-widest text-[#FF6F61] mb-2">
              Fun
            </h2>
            <p className="font-serif text-5xl">Fun</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
