import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import BlogCard from '@/components/blog/BlogCard'
import { blogPosts } from '@/data/blog/posts'

export const metadata: Metadata = {
  title: 'Financial Insights Blog 2026 | CALCUFINTOR',
  description: 'In-depth guides and data reports on cost of living, salary comparisons, and financial planning for major US cities. Updated regularly.',
  alternates: { canonical: 'https://calcufintor.vercel.app/blog' },
  openGraph: {
    title: 'Financial Insights Blog 2026 | CALCUFINTOR',
    url: 'https://calcufintor.vercel.app/blog',
  },
}

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort((a, b) =>
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
      <h1 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-3">
        Financial Insights & Data Reports
      </h1>
      <p className="text-gray-600 mb-10 max-w-2xl">
        In-depth guides, city comparisons, and data-driven reports on cost of living, wages, and financial planning.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map(post => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
