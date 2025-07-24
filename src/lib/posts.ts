import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'      // ← new import

export interface PostMeta {
  title: string
  date: string
  section: 'chemistry' | 'fun'
  category: string
  tags?: string[]
}

export interface Post {
  slug: string
  meta: PostMeta
  content: string
}

const postsDir = path.join(process.cwd(), 'content/posts')

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDir)
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(postsDir, `${realSlug}.md`)
  const file = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(file)

  // Type-assert front-matter shape
  const meta = data as PostMeta

  const processed = await remark().use(gfm).use(html).process(content)
  return {
    slug: realSlug,
    meta,
    content: processed.toString(),
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getPostSlugs()
  const posts = await Promise.all(slugs.map(s => getPostBySlug(s)))
  return posts.sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1))
}
