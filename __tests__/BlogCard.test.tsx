import { render, screen } from '@testing-library/react'
import BlogCard from '@/components/blog/BlogCard'
import { BlogPost } from '@/data/blog/posts'

const mockPost: BlogPost = {
  slug: 'test-post',
  title: 'Test Post Title',
  metaTitle: 'Test Post | CALCUFINTOR',
  metaDescription: 'A test post description.',
  excerpt: 'This is a short excerpt for the test post.',
  category: 'comparison',
  publishedDate: '2026-01-01',
  updatedDate: '2026-06-01',
  readingTime: 5,
  faqs: [],
}

describe('BlogCard', () => {
  it('renders the post title', () => {
    render(<BlogCard post={mockPost} />)
    expect(screen.getByText('Test Post Title')).toBeInTheDocument()
  })

  it('renders the excerpt', () => {
    render(<BlogCard post={mockPost} />)
    expect(screen.getByText(/short excerpt/i)).toBeInTheDocument()
  })

  it('links to the correct blog post URL', () => {
    render(<BlogCard post={mockPost} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/blog/test-post')
  })

  it('shows reading time', () => {
    render(<BlogCard post={mockPost} />)
    expect(screen.getByText('5 min read')).toBeInTheDocument()
  })

  it('shows category badge for comparison', () => {
    render(<BlogCard post={mockPost} />)
    expect(screen.getByText('City Comparison')).toBeInTheDocument()
  })

  it('shows correct badge for guide category', () => {
    render(<BlogCard post={{ ...mockPost, category: 'guide' }} />)
    expect(screen.getByText('Guide')).toBeInTheDocument()
  })

  it('shows correct badge for data-report category', () => {
    render(<BlogCard post={{ ...mockPost, category: 'data-report' }} />)
    expect(screen.getByText('Data Report')).toBeInTheDocument()
  })
})
