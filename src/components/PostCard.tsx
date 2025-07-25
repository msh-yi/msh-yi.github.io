// src/components/PostCard.tsx
import Link from 'next/link'
import { Post, formatDate } from '@/lib/posts' // Make sure formatDate is imported

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const { slug, meta } = post
  
  return (
    <Link href={`/posts/${slug}`}>
      <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
        <div>
          <h2 className="text-xl">{meta.title}</h2>
          <time className="text-sm text-gray-500">{formatDate(meta.date)}</time>
        </div>
      </div>
    </Link>
  )
}