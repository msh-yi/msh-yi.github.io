// src/components/CategoryFilter.tsx
'use client'

import { motion } from 'framer-motion'
import { getCategoryConfig } from '@/lib/utils'

type Category = 'all' | 'publications' | 'literature' | 'blog'

interface CategoryFilterProps {
  selectedCategory: Category
  onCategoryChange: (category: Category) => void
  postCounts: Record<Category, number>
}

export default function CategoryFilter({ 
  selectedCategory, 
  onCategoryChange, 
  postCounts 
}: CategoryFilterProps) {
  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'all' },
    { key: 'publications', label: 'publications' },
    { key: 'literature', label: 'literature' },
    { key: 'blog', label: 'blog' }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-36"
    >
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-gray-900 text-lg" style={{ fontWeight: 500 }}>
          filter posts
        </h3>
      </div>

      {/* Category buttons */}
      <div className="flex flex-col space-y-1">
        {categories.map(({ key, label }) => {
          const config = key !== 'all' ? getCategoryConfig(key) : null
          const isSelected = selectedCategory === key
          const count = postCounts[key]
          
          return (
            <motion.button
              key={key}
              onClick={() => onCategoryChange(key)}
              className={`
                relative px-0 py-3 text-base tracking-normal
                transition-all duration-200 text-left
                group
                ${isSelected 
                  ? 'text-gray-900' 
                  : 'text-gray-400 hover:text-gray-600'
                }
              `}
              style={{ fontWeight: 600 }}
            >
              {/* Left border line for selected state */}
              {isSelected && (
                <motion.div
                  layoutId="selectedLine"
                  className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
                  style={{ 
                    backgroundColor: config?.color || '#374151'
                  }}
                  initial={false}
                  transition={{ 
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                />
              )}
              
              <div className="relative z-10 ml-4 flex items-center justify-between">
                <span>{label}</span>
                <span className="text-sm">{count}</span>
              </div>
            </motion.button>
          )
        })}
      </div>
    </motion.div>
  )
}