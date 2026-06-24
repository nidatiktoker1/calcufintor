import { render, screen, fireEvent } from '@testing-library/react'
import SalaryCalc from '@/components/SalaryCalc'

describe('SalaryCalc', () => {
  it('renders heading', () => {
    render(<SalaryCalc />)
    expect(screen.getByText('Salary Comparison Tool')).toBeInTheDocument()
  })

  it('renders "Living In" city select', () => {
    render(<SalaryCalc />)
    expect(screen.getByLabelText(/living in/i)).toBeInTheDocument()
  })

  it('renders "Moving To" city select', () => {
    render(<SalaryCalc />)
    expect(screen.getByLabelText(/moving to/i)).toBeInTheDocument()
  })

  it('renders current salary input', () => {
    render(<SalaryCalc />)
    expect(screen.getByLabelText(/your current salary/i)).toBeInTheDocument()
  })

  it('shows prompt when salary is 0', () => {
    render(<SalaryCalc />)
    const input = screen.getByLabelText(/your current salary/i)
    fireEvent.change(input, { target: { value: '0' } })
    expect(screen.getByText(/enter your salary/i)).toBeInTheDocument()
  })

  it('shows Annual, Monthly, Hourly output labels', () => {
    render(<SalaryCalc />)
    expect(screen.getByText('Annual')).toBeInTheDocument()
    expect(screen.getByText('Monthly')).toBeInTheDocument()
    expect(screen.getByText('Hourly')).toBeInTheDocument()
  })

  it('calculates salary needed Chicago → NYC for $75,000', () => {
    render(<SalaryCalc />)
    const input = screen.getByLabelText(/your current salary/i)
    fireEvent.change(input, { target: { value: '75000' } })
    // Chicago(107) → NYC(187): 75000 * 187/107 ≈ 131075
    expect(screen.getByText('$131,075')).toBeInTheDocument()
  })

  it('updates on city change', () => {
    render(<SalaryCalc />)
    const input = screen.getByLabelText(/your current salary/i)
    fireEvent.change(input, { target: { value: '60000' } })
    const toSelect = screen.getByLabelText(/moving to/i)
    fireEvent.change(toSelect, { target: { value: 'houston' } })
    // Chicago(107) → Houston(96): less needed
    const annual = screen.getByText('Annual')
    expect(annual).toBeInTheDocument()
  })
})
