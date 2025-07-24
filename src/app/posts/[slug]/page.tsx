// src/app/posts/[slug]/page.tsx
import { Metadata } from 'next'
import { getPostBySlug, getPostSlugs, Post } from '@/lib/posts'

interface Props {
  // NOTE: Next 15 passes `params` as a Promise
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  return { title: post.meta.title }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post: Post = await getPostBySlug(slug)

  return (
    <article className="prose mx-auto py-8">
      <h1>{post.meta.title}</h1>
      <time className="text-gray-500">{post.meta.date}</time>
      {/* render the HTML content from remark */}
      <div
        className="mt-4"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}

// Tell Next.js which pages to pre-render
export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({ slug: slug.replace(/\.md$/, '') }))
}
