import { render, screen, fireEvent } from '@testing-library/react'
import HourlyToSalaryCalc from '@/components/HourlyToSalaryCalc'

describe('HourlyToSalaryCalc', () => {
  it('renders heading', () => {
    render(<HourlyToSalaryCalc />)
    expect(screen.getByText('Hourly to Salary Calculator')).toBeInTheDocument()
  })

  it('renders hourly rate input', () => {
    render(<HourlyToSalaryCalc />)
    expect(screen.getByLabelText(/hourly rate/i)).toBeInTheDocument()
  })

  it('renders hours per week input', () => {
    render(<HourlyToSalaryCalc />)
    expect(screen.getByLabelText(/hours per week/i)).toBeInTheDocument()
  })

  it('renders weeks per year input', () => {
    render(<HourlyToSalaryCalc />)
    expect(screen.getByLabelText(/weeks per year/i)).toBeInTheDocument()
  })

  it('calculates $25/hr at 40hrs/52wks = $52,000/year', () => {
    render(<HourlyToSalaryCalc />)
    expect(screen.getByText('$52,000')).toBeInTheDocument()
  })

  it('shows Annual Salary, Monthly, Bi-weekly labels', () => {
    render(<HourlyToSalaryCalc />)
    expect(screen.getByText('Annual Salary')).toBeInTheDocument()
    expect(screen.getByText('Monthly')).toBeInTheDocument()
    expect(screen.getByText('Bi-weekly')).toBeInTheDocument()
  })

  it('updates when hourly rate changes', () => {
    render(<HourlyToSalaryCalc />)
    const input = screen.getByLabelText(/hourly rate/i)
    fireEvent.change(input, { target: { value: '50' } })
    expect(screen.getByText('$104,000')).toBeInTheDocument()
  })

  it('shows total hours per year', () => {
    render(<HourlyToSalaryCalc />)
    expect(screen.getByText('2,080 hrs')).toBeInTheDocument()
  })

  it('shows prompt when rate is 0', () => {
    render(<HourlyToSalaryCalc />)
    const input = screen.getByLabelText(/hourly rate/i)
    fireEvent.change(input, { target: { value: '0' } })
    expect(screen.getByText(/enter your hourly rate/i)).toBeInTheDocument()
  })
})
