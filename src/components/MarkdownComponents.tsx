// src/components/MarkdownComponents.tsx
import { ReactNode } from 'react'

interface MarkdownComponentProps {
  children?: ReactNode
  [key: string]: any
}

export const MarkdownComponents = {
  h1: ({ children }: MarkdownComponentProps) => (
    <h1 className="text-4xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-200 pb-2 first:mt-0">
      {children}
    </h1>
  ),
  
  h2: ({ children }: MarkdownComponentProps) => (
    <h2 className="text-3xl font-bold text-slate-900 mt-10 mb-4 border-b border-slate-200 pb-2">
      {children}
    </h2>
  ),
  
  h3: ({ children }: MarkdownComponentProps) => (
    <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-3">
      {children}
    </h3>
  ),
  
  h4: ({ children }: MarkdownComponentProps) => (
    <h4 className="text-xl font-semibold text-slate-900 mt-6 mb-2">
      {children}
    </h4>
  ),
  
  p: ({ children }: MarkdownComponentProps) => (
    <p className="text-slate-700 leading-relaxed mb-6 text-lg">
      {children}
    </p>
  ),
  
  a: ({ href, children }: MarkdownComponentProps) => (
    <a 
      href={href} 
      className="text-amber-600 hover:text-amber-700 hover:underline transition-colors font-medium"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  
  strong: ({ children }: MarkdownComponentProps) => (
    <strong className="text-slate-900 font-semibold">{children}</strong>
  ),
  
  em: ({ children }: MarkdownComponentProps) => (
    <em className="text-slate-700 italic">{children}</em>
  ),
  
  code: ({ children, className }: MarkdownComponentProps) => {
    const isInline = !className
    if (isInline) {
      return (
        <code className="bg-slate-100 text-slate-800 px-2 py-1 rounded font-mono text-sm">
          {children}
        </code>
      )
    }
    return (
      <code className={`${className} text-sm`}>
        {children}
      </code>
    )
  },
  
  pre: ({ children }: MarkdownComponentProps) => (
    <pre className="bg-slate-900 text-slate-100 p-6 rounded-lg overflow-x-auto my-6 text-sm">
      {children}
    </pre>
  ),
  
  blockquote: ({ children }: MarkdownComponentProps) => (
    <blockquote className="border-l-4 border-amber-400 bg-amber-50 pl-6 py-4 my-6 italic text-amber-900 rounded-r">
      {children}
    </blockquote>
  ),
  
  ul: ({ children }: MarkdownComponentProps) => (
    <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-amber-500">
      {children}
    </ul>
  ),
  
  ol: ({ children }: MarkdownComponentProps) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2 marker:text-amber-500">
      {children}
    </ol>
  ),
  
  li: ({ children }: MarkdownComponentProps) => (
    <li className="text-slate-700 leading-relaxed">
      {children}
    </li>
  ),
  
  table: ({ children }: MarkdownComponentProps) => (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse border border-slate-300 text-sm">
        {children}
      </table>
    </div>
  ),
  
  thead: ({ children }: MarkdownComponentProps) => (
    <thead className="bg-slate-50">
      {children}
    </thead>
  ),
  
  tbody: ({ children }: MarkdownComponentProps) => (
    <tbody>
      {children}
    </tbody>
  ),
  
  th: ({ children }: MarkdownComponentProps) => (
    <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900">
      {children}
    </th>
  ),
  
  td: ({ children }: MarkdownComponentProps) => (
    <td className="border border-slate-300 px-4 py-3 text-slate-700">
      {children}
    </td>
  ),
  
  // Simplified image styling - no figure wrapper
  img: ({ src, alt }: MarkdownComponentProps) => (
    <span className="block my-8">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-auto rounded-lg"
      />
      {alt && (
        <span className="block text-sm text-slate-500 text-center mt-2 italic">
          {alt}
        </span>
      )}
    </span>
  ),
  
  hr: () => (
    <hr className="border-slate-300 my-12" />
  ),

  // Handle iframes - simplified without figure
  iframe: ({ src, width, height, id, ...props }: MarkdownComponentProps) => {
    // Special handling for your scaled-frame
    if (id === 'scaled-frame') {
      return (
        <span className="block my-8 transform scale-80 origin-top-left">
          <iframe
            src={src}
            width={width}
            height={height}
            id={id}
            className="rounded-lg"
            {...props}
          />
        </span>
      )
    }
    
    return (
      <span className="block my-8">
        <iframe
          src={src}
          width={width}
          height={height}
          className="w-full rounded-lg"
          {...props}
        />
      </span>
    )
  },

  // Handle styles - remove them
  style: () => null,

  // Handle mark tags properly
  mark: ({ children }: MarkdownComponentProps) => (
    <mark className="bg-amber-200 text-amber-900 px-2 py-1 rounded font-medium">
      {children}
    </mark>
  ),

  // Handle divs
  div: ({ id, className, children, ...props }: MarkdownComponentProps) => {
    // Special handling for your scaled-frame
    if (id === 'scaled-frame') {
      return (
        <span 
          id={id}
          className="block transform scale-80 origin-top-left my-8"
          {...props}
        >
          {children}
        </span>
      )
    }
    
    return (
      <div 
        className={`${className || ''}`}
        {...props}
      >
        {children}
      </div>
    )
  },
}