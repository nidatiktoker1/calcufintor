import { render, screen, fireEvent } from '@testing-library/react'
import RentAffordabilityCalc from '@/components/RentAffordabilityCalc'

describe('RentAffordabilityCalc', () => {
  it('renders heading', () => {
    render(<RentAffordabilityCalc />)
    expect(screen.getByText('Rent Affordability Calculator')).toBeInTheDocument()
  })

  it('renders income input', () => {
    render(<RentAffordabilityCalc />)
    expect(screen.getByLabelText(/annual gross income/i)).toBeInTheDocument()
  })

  it('shows 30% Rule and 50/30/20 buttons', () => {
    render(<RentAffordabilityCalc />)
    expect(screen.getByText('30% Rule')).toBeInTheDocument()
    expect(screen.getByText('50/30/20')).toBeInTheDocument()
  })

  it('shows Comfortable, Recommended, Maximum labels', () => {
    render(<RentAffordabilityCalc />)
    expect(screen.getByText('Comfortable (25%)')).toBeInTheDocument()
    expect(screen.getByText('Recommended (30%)')).toBeInTheDocument()
    expect(screen.getByText('Maximum (40%)')).toBeInTheDocument()
  })

  it('shows placeholder when income is 0', () => {
    render(<RentAffordabilityCalc />)
    const input = screen.getByLabelText(/annual gross income/i)
    fireEvent.change(input, { target: { value: '0' } })
    expect(screen.getByText(/enter your income/i)).toBeInTheDocument()
  })

  it('shows Not Affordable cities for very low income', () => {
    render(<RentAffordabilityCalc />)
    const input = screen.getByLabelText(/annual gross income/i)
    fireEvent.change(input, { target: { value: '20000' } })
    expect(screen.getByText(/not affordable/i)).toBeInTheDocument()
  })

  it('shows How US Cities Compare heading', () => {
    render(<RentAffordabilityCalc />)
    expect(screen.getByText(/how us cities compare/i)).toBeInTheDocument()
  })

  it('50/30/20 button is clickable', () => {
    render(<RentAffordabilityCalc />)
    const btn = screen.getByText('50/30/20')
    fireEvent.click(btn)
    expect(btn).toBeInTheDocument()
  })
})
