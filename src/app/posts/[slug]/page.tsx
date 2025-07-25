// src/app/posts/[slug]/page.tsx
import { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkUnwrapImages from 'remark-unwrap-images'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import { getPostBySlug, getPostSlugs, Post, formatDate } from '@/lib/posts'
import PostNavigation from '@/components/PostNavigation'
import { MarkdownComponents } from '@/components/MarkdownComponents'

// Import highlight.js styles
import 'highlight.js/styles/github-dark.css'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params
    const post = await getPostBySlug(slug)
    return { 
      title: `${post.meta.title} | Chemistry`,
      description: post.meta.excerpt || `Read ${post.meta.title} in the ${post.meta.category} section.`
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return { title: 'Post Not Found' }
  }
}

export default async function PostPage({ params }: Props) {
  try {
    const { slug } = await params
    const post: Post = await getPostBySlug(slug)

    return (
      <div className="relative min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <PostNavigation section={post.meta.section} />
          
          <article>
            <header className="mb-12">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
                  {post.meta.section}
                </span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                  {post.meta.category}
                </span>
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
                {post.meta.title}
              </h1>
              
              <time className="text-slate-500 text-lg font-medium">
                {formatDate(post.meta.date)}
              </time>
            </header>

            {/* ReactMarkdown with unwrap images plugin */}
            <ReactMarkdown
              components={MarkdownComponents}
              remarkPlugins={[remarkGfm, remarkUnwrapImages]}
              rehypePlugins={[rehypeRaw, rehypeHighlight]}
            >
              {post.content}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error loading post:', error)
    return (
      <div className="max-w-2xl mx-auto py-16 px-6 text-center">
        <PostNavigation section="chemistry" />
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Post Not Found</h1>
        <p className="text-slate-600 text-lg">
          Sorry, the post you're looking for doesn't exist or couldn't be loaded.
        </p>
      </div>
    )
  }
}

export async function generateStaticParams() {
  try {
    const slugs = getPostSlugs()
    return slugs.map((slug) => ({ slug: slug.replace(/\.md$/, '') }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}