import { render, screen } from '@testing-library/react'
import FAQSection from '@/components/blog/FAQSection'

const mockFaqs = [
  { question: 'What is a living wage?', answer: 'It is the minimum income needed for basic needs.' },
  { question: 'How is it calculated?', answer: 'Based on local rent, food, and transport costs.' },
]

describe('FAQSection', () => {
  it('renders the FAQ heading', () => {
    render(<FAQSection faqs={mockFaqs} />)
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
  })

  it('renders all FAQ questions', () => {
    render(<FAQSection faqs={mockFaqs} />)
    expect(screen.getByText('What is a living wage?')).toBeInTheDocument()
    expect(screen.getByText('How is it calculated?')).toBeInTheDocument()
  })

  it('renders all FAQ answers', () => {
    render(<FAQSection faqs={mockFaqs} />)
    expect(screen.getByText(/minimum income needed/i)).toBeInTheDocument()
    expect(screen.getByText(/local rent, food/i)).toBeInTheDocument()
  })

  it('renders one details element per FAQ', () => {
    render(<FAQSection faqs={mockFaqs} />)
    const details = document.querySelectorAll('details')
    expect(details).toHaveLength(2)
  })

  it('renders nothing extra when faqs array is empty', () => {
    render(<FAQSection faqs={[]} />)
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
    const details = document.querySelectorAll('details')
    expect(details).toHaveLength(0)
  })

  it('embeds FAQPage JSON-LD schema script', () => {
    const { container } = render(<FAQSection faqs={mockFaqs} />)
    const script = container.querySelector('script[type="application/ld+json"]')
    expect(script).toBeInTheDocument()
    expect(script?.innerHTML).toContain('FAQPage')
  })
})
