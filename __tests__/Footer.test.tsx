import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

describe('Footer', () => {
  it('renders CALCUFINTOR name', () => {
    render(<Footer />)
    expect(screen.getByText('CALCUFINTOR')).toBeInTheDocument()
  })

  it('shows tagline', () => {
    render(<Footer />)
    expect(screen.getByText('Calculate Your Financial Future, Everywhere')).toBeInTheDocument()
  })

  it('shows all 3 calculator links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /living wage calculator/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /cost of living calculator/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /salary comparison tool/i })).toBeInTheDocument()
  })

  it('shows all 5 city links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /new york city/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /los angeles/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /chicago/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /houston/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /phoenix/i })).toBeInTheDocument()
  })

  it('shows privacy policy link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /privacy policy/i })).toBeInTheDocument()
  })

  it('shows terms of service link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /terms of service/i })).toBeInTheDocument()
  })

  it('shows copyright text with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`© ${year} CALCUFINTOR`))).toBeInTheDocument()
  })
})
