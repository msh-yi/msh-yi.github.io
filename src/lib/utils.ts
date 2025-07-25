// src/lib/utils.ts
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
    content: string
  }
  
  // Helper function for category colors - CLIENT SAFE
  export const getCategoryConfig = (category: string) => {
    const configs = {
      publications: { color: '#d97706', label: 'publications' },
      literature: { color: '#059669', label: 'literature' },
      blog: { color: '#7c3aed', label: 'blog' }
    }
    return configs[category as keyof typeof configs] || configs.blog
  }
  
  // Date formatter - CLIENT SAFE
  export function formatDate(date: string | Date): string {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }