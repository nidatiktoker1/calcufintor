import { render, screen, fireEvent } from '@testing-library/react'
import TaxCalc from '@/components/TaxCalc'

describe('TaxCalc', () => {
  it('renders heading', () => {
    render(<TaxCalc />)
    expect(screen.getByText('Federal Income Tax Calculator')).toBeInTheDocument()
  })

  it('renders income input', () => {
    render(<TaxCalc />)
    expect(screen.getByLabelText(/annual gross income/i)).toBeInTheDocument()
  })

  it('shows placeholder when income is 0', () => {
    render(<TaxCalc />)
    const input = screen.getByLabelText(/annual gross income/i)
    fireEvent.change(input, { target: { value: '0' } })
    expect(screen.getByText(/enter your income/i)).toBeInTheDocument()
  })

  it('shows Federal Tax, SS + Medicare, Effective Rate, Take-Home labels', () => {
    render(<TaxCalc />)
    expect(screen.getByText('Federal Tax')).toBeInTheDocument()
    expect(screen.getByText('SS + Medicare')).toBeInTheDocument()
    expect(screen.getByText('Effective Rate')).toBeInTheDocument()
    expect(screen.getByText('Take-Home/yr')).toBeInTheDocument()
  })

  it('shows Marginal Tax Bracket label', () => {
    render(<TaxCalc />)
    expect(screen.getByText('Marginal Tax Bracket')).toBeInTheDocument()
  })

  it('shows take-home monthly row', () => {
    render(<TaxCalc />)
    expect(screen.getByText('Monthly Take-Home')).toBeInTheDocument()
  })

  it('updates when income changes', () => {
    render(<TaxCalc />)
    const input = screen.getByLabelText(/annual gross income/i)
    fireEvent.change(input, { target: { value: '100000' } })
    expect(screen.getByText('Taxable Income')).toBeInTheDocument()
  })

  it('shows disclaimer text', () => {
    render(<TaxCalc />)
    expect(screen.getByText(/federal tax only/i)).toBeInTheDocument()
  })
})
