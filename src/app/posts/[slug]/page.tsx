// src/app/posts/[slug]/page.tsx
import PostLayout from '@/components/PostLayout'
import { getPostBySlug, getPostSlugs, Post } from '@/lib/posts'
import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'
import type { Metadata } from 'next'

type Params = { params: { slug: string } }

// Tell Next which slugs to prerender
export async function generateStaticParams(): Promise<Params['params'][]> {
  return getPostSlugs().map((slug) => ({ slug: slug.replace(/\.md$/, '') }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  return {
    title: post.meta.title,
    description: `Read ${post.meta.title}`,
    openGraph: { title: post.meta.title },
  }
}

export default async function PostPage({ params }: Params) {
  // 1. load the raw MD + front-matter
  const { slug, meta, content: rawHtml } = await getPostBySlug(params.slug)

  // 2. If you need to re-run remark here instead of in lib, you'd do:
  // const processed = await remark().use(gfm).use(html).process(rawMarkdown)
  // const htmlString = processed.toString()

  // 3. Render via your PostLayout
  return (
    <PostLayout
      title={meta.title}
      date={meta.date}
      categories={[meta.category]}    // wrap your single category
      // you could also pass tags={meta.tags} if desired
    >
      {/* Dangerously inject the HTML you got back from remark-html */}
      <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
    </PostLayout>
  )
}
