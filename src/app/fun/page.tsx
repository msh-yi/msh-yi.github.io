// src/app/fun/page.tsx
import Link from 'next/link'
import { getAllPosts, Post } from '@/lib/posts'

export default async function FunPage(): Promise<React.JSX.Element> {
  const posts: Post[] = (await getAllPosts()).filter(
    (p) => p.meta.section === 'fun'
  )

  return (
    <main className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map(({ slug, meta }) => (
          <Link key={slug} href={`/posts/${slug}`}>
            <a className="block border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="p-4">
                <h2 className="text-xl">{meta.title}</h2>
                <time className="text-sm text-gray-500">{meta.date}</time>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </main>
  )
}
