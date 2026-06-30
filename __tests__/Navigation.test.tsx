import { render, screen, fireEvent } from '@testing-library/react'
import Navigation from '@/components/Navigation'

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

describe('Navigation', () => {
  it('renders CALCUFINTOR logo', () => {
    render(<Navigation />)
    expect(screen.getByText('CALCUFINTOR')).toBeInTheDocument()
  })

  it('logo links to /', () => {
    render(<Navigation />)
    const logo = screen.getByRole('link', { name: /calcufintor home/i })
    expect(logo).toHaveAttribute('href', '/')
  })

  it('shows Calculators button in desktop nav', () => {
    render(<Navigation />)
    expect(screen.getByRole('button', { name: /calculators/i })).toBeInTheDocument()
  })

  it('shows Countries button in desktop nav', () => {
    render(<Navigation />)
    expect(screen.getByRole('button', { name: /countries/i })).toBeInTheDocument()
  })

  it('mobile menu is hidden by default', () => {
    render(<Navigation />)
    const hamburger = screen.getByRole('button', { name: /toggle mobile menu/i })
    expect(hamburger).toHaveAttribute('aria-expanded', 'false')
  })

  it('mobile menu opens on hamburger click', () => {
    render(<Navigation />)
    const hamburger = screen.getByRole('button', { name: /toggle mobile menu/i })
    fireEvent.click(hamburger)
    expect(hamburger).toHaveAttribute('aria-expanded', 'true')
  })

  it('shows city links after opening mobile menu', () => {
    render(<Navigation />)
    const hamburger = screen.getByRole('button', { name: /toggle mobile menu/i })
    fireEvent.click(hamburger)
    expect(screen.getAllByText(/New York City/i).length).toBeGreaterThan(0)
  })

  it('navigation has nav role for accessibility', () => {
    render(<Navigation />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
