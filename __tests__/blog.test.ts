import { blogPosts, getPostBySlug, getAllSlugs, getRelatedPosts } from '@/data/blog/posts'

describe('blogPosts data', () => {
  it('has at least 5 posts', () => {
    expect(blogPosts.length).toBeGreaterThanOrEqual(5)
  })

  it('every post has a unique slug', () => {
    const slugs = blogPosts.map(p => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('every post has required SEO fields', () => {
    blogPosts.forEach(post => {
      expect(post.title).toBeTruthy()
      expect(post.metaTitle).toBeTruthy()
      expect(post.metaDescription).toBeTruthy()
      expect(post.metaDescription.length).toBeLessThanOrEqual(160)
    })
  })

  it('every post has at least 2 FAQs', () => {
    blogPosts.forEach(post => {
      expect(post.faqs.length).toBeGreaterThanOrEqual(2)
    })
  })

  it('every FAQ has a question and answer', () => {
    blogPosts.forEach(post => {
      post.faqs.forEach(faq => {
        expect(faq.question).toBeTruthy()
        expect(faq.answer).toBeTruthy()
      })
    })
  })

  it('every post has a valid category', () => {
    const validCategories = ['comparison', 'guide', 'data-report']
    blogPosts.forEach(post => {
      expect(validCategories).toContain(post.category)
    })
  })
})

describe('getPostBySlug', () => {
  it('returns the correct post for a valid slug', () => {
    const post = getPostBySlug('cost-of-living-nyc-vs-chicago-2026')
    expect(post).toBeDefined()
    expect(post?.title).toContain('New York City')
  })

  it('returns undefined for an invalid slug', () => {
    const post = getPostBySlug('does-not-exist')
    expect(post).toBeUndefined()
  })
})

describe('getAllSlugs', () => {
  it('returns an array of strings matching post count', () => {
    const slugs = getAllSlugs()
    expect(slugs).toHaveLength(blogPosts.length)
    slugs.forEach(slug => expect(typeof slug).toBe('string'))
  })
})

describe('getRelatedPosts', () => {
  it('excludes the current post from results', () => {
    const related = getRelatedPosts('cost-of-living-nyc-vs-chicago-2026')
    expect(related.find(p => p.slug === 'cost-of-living-nyc-vs-chicago-2026')).toBeUndefined()
  })

  it('respects the limit parameter', () => {
    const related = getRelatedPosts('living-wage-by-state-2026', 1)
    expect(related).toHaveLength(1)
  })

  it('defaults to 2 related posts', () => {
    const related = getRelatedPosts('living-wage-by-state-2026')
    expect(related).toHaveLength(2)
  })
})
