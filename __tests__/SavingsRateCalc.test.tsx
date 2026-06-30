import { render, screen, fireEvent } from '@testing-library/react'
import SavingsRateCalc from '@/components/SavingsRateCalc'

describe('SavingsRateCalc', () => {
  it('renders heading', () => {
    render(<SavingsRateCalc />)
    expect(screen.getByText('Savings Rate Calculator')).toBeInTheDocument()
  })

  it('renders income input', () => {
    render(<SavingsRateCalc />)
    expect(screen.getByLabelText(/annual take-home income/i)).toBeInTheDocument()
  })

  it('renders expenses input', () => {
    render(<SavingsRateCalc />)
    expect(screen.getByLabelText(/annual expenses/i)).toBeInTheDocument()
  })

  it('calculates 30% savings rate for $60k income / $42k expenses', () => {
    render(<SavingsRateCalc />)
    expect(screen.getByText('30.0%')).toBeInTheDocument()
  })

  it('shows Savings Rate label', () => {
    render(<SavingsRateCalc />)
    expect(screen.getByText('Savings Rate')).toBeInTheDocument()
  })

  it('shows Annual Savings, Monthly Savings, Est. to Retire labels', () => {
    render(<SavingsRateCalc />)
    expect(screen.getByText('Annual Savings')).toBeInTheDocument()
    expect(screen.getByText('Monthly Savings')).toBeInTheDocument()
    expect(screen.getByText('Est. to Retire')).toBeInTheDocument()
  })

  it('shows Excellent rating for 50%+ savings rate', () => {
    render(<SavingsRateCalc />)
    const expInput = screen.getByLabelText(/annual expenses/i)
    fireEvent.change(expInput, { target: { value: '30000' } })
    expect(screen.getByText(/excellent/i)).toBeInTheDocument()
  })

  it('shows Needs Work rating for low savings rate', () => {
    render(<SavingsRateCalc />)
    const expInput = screen.getByLabelText(/annual expenses/i)
    fireEvent.change(expInput, { target: { value: '58000' } })
    expect(screen.getByText(/needs work/i)).toBeInTheDocument()
  })

  it('shows placeholder when income is 0', () => {
    render(<SavingsRateCalc />)
    const incomeInput = screen.getByLabelText(/annual take-home income/i)
    fireEvent.change(incomeInput, { target: { value: '0' } })
    expect(screen.getByText(/enter your income and expenses/i)).toBeInTheDocument()
  })

  it('shows retirement disclaimer note', () => {
    render(<SavingsRateCalc />)
    expect(screen.getByText(/4% safe withdrawal rate/i)).toBeInTheDocument()
  })
})
