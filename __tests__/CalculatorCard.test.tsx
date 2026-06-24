import { render, screen } from '@testing-library/react'
import CalculatorCard from '@/components/CalculatorCard'

const props = {
  title: 'Living Wage Calculator',
  description: 'Find out the minimum wage needed to live comfortably in any US city.',
  href: '/calculators/living-wage',
  icon: '💰',
  keywords: ['living wage', 'hourly wage', 'USA'],
}

describe('CalculatorCard', () => {
  it('renders the title', () => {
    render(<CalculatorCard {...props} />)
    expect(screen.getByText('Living Wage Calculator')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<CalculatorCard {...props} />)
    expect(screen.getByText(/minimum wage needed/i)).toBeInTheDocument()
  })

  it('renders the icon', () => {
    render(<CalculatorCard {...props} />)
    expect(screen.getByText('💰')).toBeInTheDocument()
  })

  it('links to the correct href', () => {
    render(<CalculatorCard {...props} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/calculators/living-wage')
  })

  it('renders all keywords as badges', () => {
    render(<CalculatorCard {...props} />)
    expect(screen.getByText('living wage')).toBeInTheDocument()
    expect(screen.getByText('hourly wage')).toBeInTheDocument()
    expect(screen.getByText('USA')).toBeInTheDocument()
  })

  it('shows "Open calculator" CTA text', () => {
    render(<CalculatorCard {...props} />)
    expect(screen.getByText(/open calculator/i)).toBeInTheDocument()
  })
})
