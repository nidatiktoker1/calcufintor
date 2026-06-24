import { render, screen, fireEvent } from '@testing-library/react'
import LivingWageCalc from '@/components/LivingWageCalc'

describe('LivingWageCalc', () => {
  it('renders the calculator heading', () => {
    render(<LivingWageCalc />)
    expect(screen.getByText('Living Wage Calculator')).toBeInTheDocument()
  })

  it('renders city select dropdown', () => {
    render(<LivingWageCalc />)
    expect(screen.getByLabelText(/city/i)).toBeInTheDocument()
  })

  it('renders family type dropdown', () => {
    render(<LivingWageCalc />)
    expect(screen.getByLabelText(/family type/i)).toBeInTheDocument()
  })

  it('shows default NYC living wage on load', () => {
    render(<LivingWageCalc />)
    expect(screen.getByText('$36.12/hr')).toBeInTheDocument()
  })

  it('shows Hourly, Monthly, Annual labels', () => {
    render(<LivingWageCalc />)
    expect(screen.getByText('Hourly')).toBeInTheDocument()
    expect(screen.getByText('Monthly')).toBeInTheDocument()
    expect(screen.getByText('Annual')).toBeInTheDocument()
  })

  it('updates result when city changes to Chicago', () => {
    render(<LivingWageCalc />)
    const citySelect = screen.getByLabelText(/city/i)
    fireEvent.change(citySelect, { target: { value: 'chicago' } })
    expect(screen.getByText('$22.83/hr')).toBeInTheDocument()
  })

  it('updates result when family type changes to Couple', () => {
    render(<LivingWageCalc />)
    const familySelect = screen.getByLabelText(/family type/i)
    fireEvent.change(familySelect, { target: { value: 'coupleOneWorker' } })
    expect(screen.getByText('$72.24/hr')).toBeInTheDocument()
  })

  it('shows all 5 cities in dropdown', () => {
    render(<LivingWageCalc />)
    const select = screen.getByLabelText(/city/i) as HTMLSelectElement
    const options = Array.from(select.options).map(o => o.value)
    expect(options).toContain('new-york')
    expect(options).toContain('los-angeles')
    expect(options).toContain('chicago')
    expect(options).toContain('houston')
    expect(options).toContain('phoenix')
  })
})
