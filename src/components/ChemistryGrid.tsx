// src/components/ChemistryGrid.tsx
'use client'

import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Post } from '@/lib/utils'
import ChemistryTile from './ChemistryTile'
import CategoryFilter from './CategoryFilter'

type Category = 'all' | 'publications' | 'literature' | 'blog'

interface ChemistryGridProps {
  posts: Post[]
}

export default function ChemistryGrid({ posts }: ChemistryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  const [layoutStyle, setLayoutStyle] = useState<{
    containerStyle: React.CSSProperties
    sidebarStyle: React.CSSProperties
  }>({
    containerStyle: {},
    sidebarStyle: {}
  })

  // Filter posts by category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'all') return posts
    return posts.filter(p => p.meta.category === selectedCategory)
  }, [posts, selectedCategory])

  // Count per category
  const postCounts = useMemo(() => {
    const counts: Record<Category, number> = {
      all: posts.length,
      publications: 0,
      literature: 0,
      blog: 0,
    }
    posts.forEach(p => {
      const key = p.meta.category as Category
      if (key in counts) counts[key]++
    })
    return counts
  }, [posts])

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category)
  }

  useEffect(() => {
    const updateLayout = () => {
      const screenWidth = window.innerWidth
      
      // Hide sidebar on mobile/tablet
      if (screenWidth < 1024) { // lg breakpoint
        setLayoutStyle({
          containerStyle: {},
          sidebarStyle: { display: 'none' }
        })
        return
      }
      
      const containerMaxWidth = 1280 // max-w-screen-xl for main content
      const containerPadding = 16 // px-4 = 1rem = 16px
      const sidebarWidth = 192 // w-48 = 12rem = 192px
      const gap = 32 // 4rem gap between content and sidebar
      
      // Total visual content width (grid + gap + sidebar)
      const totalContentWidth = containerMaxWidth + gap + sidebarWidth
      
      // Center the entire visual content block
      const availableWidth = screenWidth - (containerPadding * 2)
      
      if (availableWidth >= totalContentWidth) {
        // Screen is large enough - center the entire content block
        const leftOffset = (screenWidth - totalContentWidth) / 2
        
        setLayoutStyle({
          containerStyle: {
            marginLeft: `${leftOffset - containerPadding}px`, // Adjust for the px-4 padding
            marginRight: 'auto',
            maxWidth: `${containerMaxWidth}px`,
            paddingRight: `${gap + sidebarWidth}px` // Reserve space for sidebar
          },
          sidebarStyle: {
            left: `${leftOffset + containerMaxWidth + gap}px`,
            right: 'auto',
            display: 'block'
          }
        })
      } else {
        // Screen is smaller - use standard centering with margin
        setLayoutStyle({
          containerStyle: {
            paddingRight: `${gap + sidebarWidth}px`
          },
          sidebarStyle: {
            right: `${containerPadding}px`,
            left: 'auto',
            display: 'block'
          }
        })
      }
    }

    updateLayout()
    window.addEventListener('resize', updateLayout)
    return () => window.removeEventListener('resize', updateLayout)
  }, [])

  return (
    /* Full‑width wrapper with side padding */
    <div className="w-screen px-4 relative">
      {/* Main content container with dynamic positioning */}
      <div 
        className="max-w-screen-xl mx-auto"
        style={layoutStyle.containerStyle}
      >
        
        {/* Mobile/Tablet Category Filter */}
        <div className="lg:hidden mb-8">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            postCounts={postCounts}
          />
        </div>

        {/* Main content */}
        <div>
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <p className="text-gray-500 text-lg mb-2">
                No {selectedCategory === 'all' ? '' : selectedCategory} posts found
              </p>
              <p className="text-gray-400 text-sm">
                {selectedCategory === 'all'
                  ? 'Check back soon for new content!'
                  : 'Try selecting a different category'}
              </p>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8"
              >
                {filteredPosts.map((post, i) => (
                  <ChemistryTile
                    key={`${post.slug}-${selectedCategory}`}
                    post={post}
                    index={i}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Fixed Sidebar */}
        <aside
          className="
            fixed
            top-1/2
            -translate-y-1/2
            w-48
            z-30
            hidden lg:block
          "
          style={layoutStyle.sidebarStyle}
        >
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            postCounts={postCounts}
          />
        </aside>

      </div>
    </div>
  )
}