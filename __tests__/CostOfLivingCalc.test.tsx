import { render, screen, fireEvent } from '@testing-library/react'
import CostOfLivingCalc from '@/components/CostOfLivingCalc'

describe('CostOfLivingCalc', () => {
  it('renders heading', () => {
    render(<CostOfLivingCalc />)
    expect(screen.getByText('Cost of Living Comparison')).toBeInTheDocument()
  })

  it('renders current city select', () => {
    render(<CostOfLivingCalc />)
    expect(screen.getByLabelText(/current city/i)).toBeInTheDocument()
  })

  it('renders target city select', () => {
    render(<CostOfLivingCalc />)
    expect(screen.getByLabelText(/target city/i)).toBeInTheDocument()
  })

  it('renders salary input', () => {
    render(<CostOfLivingCalc />)
    expect(screen.getByLabelText(/current annual salary/i)).toBeInTheDocument()
  })

  it('shows placeholder prompt when salary is 0', () => {
    render(<CostOfLivingCalc />)
    const input = screen.getByLabelText(/salary/i)
    fireEvent.change(input, { target: { value: '0' } })
    expect(screen.getByText(/enter a salary/i)).toBeInTheDocument()
  })

  it('calculates and shows equivalent salary for Houston → NYC', () => {
    render(<CostOfLivingCalc />)
    const input = screen.getByLabelText(/salary/i)
    fireEvent.change(input, { target: { value: '60000' } })
    // Houston (96) → NYC (187): 60000 * 187/96 = 116875
    expect(screen.getByText('$116,875')).toBeInTheDocument()
  })

  it('shows "more needed" badge when target is more expensive', () => {
    render(<CostOfLivingCalc />)
    const input = screen.getByLabelText(/salary/i)
    fireEvent.change(input, { target: { value: '60000' } })
    expect(screen.getByText(/more needed/i)).toBeInTheDocument()
  })

  it('updates when cities are changed', () => {
    render(<CostOfLivingCalc />)
    const fromSelect = screen.getByLabelText(/current city/i)
    fireEvent.change(fromSelect, { target: { value: 'new-york' } })
    const input = screen.getByLabelText(/salary/i)
    fireEvent.change(input, { target: { value: '100000' } })
    // NYC → NYC: same amount
    const toSelect = screen.getByLabelText(/target city/i)
    fireEvent.change(toSelect, { target: { value: 'houston' } })
    expect(screen.getByText(/less needed/i)).toBeInTheDocument()
  })
})
