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

  it('shows Living Wage calculator link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /living wage/i })).toBeInTheDocument()
  })

  it('shows all 4 country links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /united states/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /canada/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /united kingdom/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /australia/i })).toBeInTheDocument()
  })

  it('shows About link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /^about$/i })).toBeInTheDocument()
  })

  it('shows Privacy link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /privacy/i })).toBeInTheDocument()
  })

  it('shows Terms link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /terms/i })).toBeInTheDocument()
  })

  it('shows copyright text with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`© ${year} CALCUFINTOR`))).toBeInTheDocument()
  })
})
