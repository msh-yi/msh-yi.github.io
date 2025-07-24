// components/PostLayout.tsx
import { ReactNode } from "react";

export interface PostMeta {
  title: string;
  date?: string;
  categories?: string[]; // ← now this is an array of strings
  tags?: string[];
}

type Props = PostMeta & {
  children: ReactNode;
};

export default function PostLayout({
  title,
  date,
  categories,
  children,
}: Props) {
  return (
    <article className="prose prose-lg mx-auto py-8">
      {/* Title */}
      <h1>{title}</h1>

      {/* Date */}
      {date && (
        <time dateTime={date} className="text-sm text-gray-500 block mb-4">
          {new Date(date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      )}

      {/* Categories */}
      {categories?.length && (
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((cat, idx) => (
            <span
              key={`${cat}-${idx}`}
              className="px-2 py-1 text-xs bg-gray-200 rounded"
            >
              {cat}
            </span>
          ))}
        </div>
      )}

      <hr className="my-6" />

      {/* The post’s rendered HTML/MDX */}
      <div>{children}</div>
    </article>
  );
}
