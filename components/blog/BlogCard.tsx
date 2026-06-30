import Link from 'next/link'
import { BlogPost } from '@/data/blog/posts'

interface BlogCardProps {
  post: BlogPost
}

const CATEGORY_LABELS: Record<BlogPost['category'], { label: string; color: string }> = {
  comparison: { label: 'City Comparison', color: 'bg-blue-50 text-primary' },
  guide: { label: 'Guide', color: 'bg-green-50 text-green-700' },
  'data-report': { label: 'Data Report', color: 'bg-purple-50 text-purple-700' },
}

export default function BlogCard({ post }: BlogCardProps) {
  const cat = CATEGORY_LABELS[post.category]

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-primary transition-all cursor-pointer h-full flex flex-col">
        <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-full mb-3 w-fit ${cat.color}`}>
          {cat.label}
        </span>
        <h3 className="font-bold text-gray-900 font-heading text-lg mb-2 leading-snug">{post.title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-1">{post.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>{new Date(post.updatedDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
          <span>{post.readingTime} min read</span>
        </div>
      </article>
    </Link>
  )
}
