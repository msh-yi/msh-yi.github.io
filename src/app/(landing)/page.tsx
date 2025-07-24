// src/app/(landing)/page.tsx

import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-coral py-4 text-center">
        <h1 className="text-3xl font-bold text-white">Marcus Sak</h1>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Side */}
        <Link
          href="/chemistry"
          className="flex-1 flex flex-col justify-center items-center bg-[#FF6F61] transition-transform hover:scale-[1.02]"
        >
          <h2 className="text-xs uppercase tracking-widest text-white mb-2">Chemistry</h2>
        </Link>

        {/* Right Side */}
        <Link
          href="/fun"
          className="flex-1 flex flex-col justify-center items-center bg-[#FDF1D5] transition-transform hover:scale-[1.02]"
        >
          <h2 className="text-xs uppercase tracking-widest text-[#FF6F61] mb-2">Fun</h2>
        </Link>
      </div>
    </div>
  );
}