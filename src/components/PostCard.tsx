// components/PostCard.tsx
import Link from 'next/link'
import { PostMeta } from '@/lib/posts'

export interface PostCardProps {
  slug: string
  meta: PostMeta
}

export function PostCard({ slug, meta }: PostCardProps): React.JSX.Element {
  return (
    <Link href={`/posts/${slug}`}>
      <div className="block border rounded-lg overflow-hidden hover:shadow-lg transition">
        <div className="p-4 space-y-2">
+         {/* Category badge */}
+         <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-200 rounded">
+           {meta.category}
+         </span>

          <h2 className="text-xl">{meta.title}</h2>
          <time className="text-sm text-gray-500">{meta.date}</time>
        </div>
      </div>
    </Link>
  )
}
