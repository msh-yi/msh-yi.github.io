// src/lib/posts.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PostMeta {
  title: string
  date: string | Date
  section: 'chemistry' | 'fun'
  category: 'publications' | 'literature' | 'blog'
  tags?: string[]
  featuredImage?: string
  excerpt?: string
  pdfUrl?: string
}

export interface Post {
  slug: string
  meta: PostMeta
  content: string // This will now be raw markdown instead of processed HTML
}

const postsDir = path.join(process.cwd(), 'content/posts')

export function getPostSlugs(): string[] {
  try {
    if (!fs.existsSync(postsDir)) {
      console.warn(`Posts directory does not exist: ${postsDir}`)
      return []
    }
    return fs.readdirSync(postsDir).filter(file => file.endsWith('.md'))
  } catch (error) {
    console.error('Error reading posts directory:', error)
    return []
  }
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Updated to return raw markdown content
export async function getPostBySlug(slug: string): Promise<Post> {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(postsDir, `${realSlug}.md`)
  const file = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(file)
  
  const meta = data as PostMeta
  
  // Return raw markdown content instead of processed HTML
  return {
    slug: realSlug,
    meta,
    content, // Raw markdown content
  }
}

// Updated to work with the new getPostBySlug
export async function getAllPosts(): Promise<Post[]> {
  const slugs = getPostSlugs()
  const posts = await Promise.all(slugs.map(s => getPostBySlug(s)))
  return posts.sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1))
}

export const getCategoryConfig = (category: string) => {
  const configs = {
    publications: { color: '#d97706', label: 'Publications' },
    literature: { color: '#059669', label: 'Literature' },
    blog: { color: '#7c3aed', label: 'Blog' }
  }
  return configs[category as keyof typeof configs] || configs.blog
}