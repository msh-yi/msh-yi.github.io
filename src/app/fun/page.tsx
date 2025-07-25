// src/app/fun/page.tsx
import Link from "next/link";
import { getAllPosts, Post, formatDate } from "@/lib/posts";

export default async function FunPage(): Promise<React.JSX.Element> {
  let posts: Post[] = [];

  try {
    const allPosts = await getAllPosts();
    posts = allPosts.filter((p) => p.meta.section === "fun");
  } catch (error) {
    console.error("Error loading posts:", error);
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Fun</h1>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No fun posts available yet.
          </p>
          <p className="text-gray-400 text-sm mt-2">Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map(({ slug, meta }) => (
            <Link
              key={slug}
              href={`/posts/${slug}`}
              className="block border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="p-4">
                <h2 className="text-xl">{meta.title}</h2>
                <time className="text-sm text-gray-500">
                  {formatDate(meta.date)}
                </time>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}