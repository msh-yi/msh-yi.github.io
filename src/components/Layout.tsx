// components/Layout.tsx
import Link from 'next/link'
import { ReactNode } from 'react'

type Props = { children: ReactNode }

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            msh-yi
          </Link>
          <div className="space-x-4">
            <Link href="/chemistry" className="hover:underline">
              Chemistry
            </Link>
            <Link href="/fun" className="hover:underline">
              Fun
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Marcus Sak. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
