// src/app/chemistry/page.tsx
import { getAllPosts, Post } from "@/lib/posts"
import ChemistryGrid from "@/components/ChemistryGrid"
import BenzeneBackground from "@/components/BenzeneBackground"

export default async function ChemistryPage(): Promise<React.JSX.Element> {
  let posts: Post[] = []

  try {
    const allPosts = await getAllPosts()
    posts = allPosts.filter((p) => p.meta.section === "chemistry")
  } catch (error) {
    console.error("Error loading posts:", error)
  }

  return (
    <div className="relative bg-[#FEFCF3]">
      {/* Benzene background - fixed positioning */}
      <BenzeneBackground />

      {/* Main content with proper spacing */}
      <div className="relative z-20 pt-10 pb-20">
        {/* Introductory text */}
        <div className="max-w-4xl mx-auto px-6 mb-12 text-center">
          <p className="text-xl text-slate-700 font-medium leading-relaxed">
            A feed of my publications, literature analyses, and blog posts
          </p>
        </div>
        
        <ChemistryGrid posts={posts} />
      </div>
    </div>
  )
}