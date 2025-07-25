// src/components/ChemistryTile.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { DocumentIcon } from '@heroicons/react/24/solid'
import { Post, getCategoryConfig, formatDate } from '@/lib/utils'

interface ChemistryTileProps {
  post: Post
  index: number
}

export default function ChemistryTile({ post, index }: ChemistryTileProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [showExcerpt, setShowExcerpt] = useState(false)
  
  const config = getCategoryConfig(post.meta.category)
  const isPdf = Boolean(post.meta.pdfUrl)
  const hasImage = Boolean(post.meta.featuredImage)
  
  const handleClick = (e: React.MouseEvent) => {
    if (isPdf && post.meta.pdfUrl) {
      e.preventDefault()
      window.open(post.meta.pdfUrl, '_blank')
    }
  }

  const TileContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="group relative bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 w-full aspect-square flex flex-col"
      style={{ 
        borderTop: `4px solid ${config.color}`,
      }}
      onMouseEnter={() => setShowExcerpt(true)}
      onMouseLeave={() => setShowExcerpt(false)}
      onClick={handleClick}
    >
      {/* Featured Image - Only render if image exists */}
      {hasImage && (
        <div className="relative w-full h-2/3 bg-gray-100">
          <Image
            src={post.meta.featuredImage!}
            alt={post.meta.title}
            fill
            className={`object-contain transition-all duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* PDF Icon */}
          {isPdf && (
            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5">
              <DocumentIcon className="w-4 h-4 text-zinc-800" />
            </div>
          )}
          
          {/* Excerpt Overlay - ACS Citation */}
          {post.meta.excerpt && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: showExcerpt ? 1 : 0,
              }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <div 
                className="text-white font-normal tracking-wide text-s text-center leading-relaxed citation-text"
                dangerouslySetInnerHTML={{ __html: post.meta.excerpt }}
              />
            </motion.div>
          )}
        </div>
      )}

      {/* Content - Dynamic layout based on image presence */}
      {hasImage ? (
        // Layout for tiles WITH images (original layout)
        <div className="p-4 h-1/3 flex flex-col justify-between">
          <h3 
            className="font-semibold text-base text-[#2d3748] leading-tight line-clamp-2 group-hover:text-gray-700 transition-colors"
            dangerouslySetInnerHTML={{ __html: post.meta.title }}
          />
          <div className="flex items-center justify-between mt-2">
            <time className="font-light text-sm text-gray-500">
              {formatDate(post.meta.date)}
            </time>
            <span 
              className="font-medium text-sm tracking-wide px-2 py-1 rounded"
              style={{ 
                backgroundColor: `${config.color}20`,
                color: config.color
              }}
            >
              {config.label}
            </span>
          </div>
        </div>
      ) : (
        // Layout for tiles WITHOUT images (vertically centered title)
        <div className="flex-1 flex flex-col relative">
          {/* PDF Icon for non-image tiles */}
          {isPdf && (
            <div className="absolute top-4 right-4 bg-gray-100 p-1.5 rounded z-10">
              <DocumentIcon className="w-4 h-4 text-zinc-800" />
            </div>
          )}

          {/* Centered title area */}
          <div className="flex-1 flex items-center justify-center p-6">
            <h3 
              className="font-semibold text-xl text-[#2d3748] leading-tight text-center group-hover:text-gray-700 transition-colors"
              dangerouslySetInnerHTML={{ __html: post.meta.title }}
            />
          </div>

          {/* Footer with date and category */}
          <div className="p-4 flex items-center justify-between border-t border-gray-100">
            <time className="font-light text-sm text-gray-500">
              {formatDate(post.meta.date)}
            </time>
            <span 
              className="font-medium text-sm tracking-wide px-2 py-1 rounded"
              style={{ 
                backgroundColor: `${config.color}20`,
                color: config.color
              }}
            >
              {config.label}
            </span>
          </div>
        </div>
      )}
    </motion.div>
  )

  return isPdf ? (
    <div className="cursor-pointer">
      {TileContent}
    </div>
  ) : (
    <Link href={`/posts/${post.slug}`} className="block">
      {TileContent}
    </Link>
  )
}