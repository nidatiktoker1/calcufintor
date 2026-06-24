import { render, screen } from '@testing-library/react'
import CityCard from '@/components/CityCard'
import { City } from '@/data/usa'

const mockCity: City = {
  id: 'new-york',
  name: 'New York City',
  state: 'NY',
  population: 8336817,
  costIndex: 187,
  livingWage: {
    single: { hourly: 36.12, monthly: 6260, annual: 75120 },
    coupleOneWorker: { hourly: 72.24, monthly: 12520, annual: 150240 },
    singleParent1Child: { hourly: 65.50, monthly: 11353, annual: 136240 },
  },
  costs: {
    rent1br: 3500, rent2br: 4800, groceries: 600, transport: 127,
    utilities: 175, dining: 500, healthcare: 450, childcare: 2200, total: 5352,
  },
  vsNationalAvg: '+87%',
  rank: 1,
}

describe('CityCard', () => {
  it('renders city name', () => {
    render(<CityCard city={mockCity} />)
    expect(screen.getByText('New York City')).toBeInTheDocument()
  })

  it('renders state abbreviation', () => {
    render(<CityCard city={mockCity} />)
    expect(screen.getByText('NY')).toBeInTheDocument()
  })

  it('renders living wage hourly rate', () => {
    render(<CityCard city={mockCity} />)
    expect(screen.getByText('$36/hr')).toBeInTheDocument()
  })

  it('renders monthly costs', () => {
    render(<CityCard city={mockCity} />)
    expect(screen.getByText('$5,352/mo')).toBeInTheDocument()
  })

  it('renders cost index', () => {
    render(<CityCard city={mockCity} />)
    expect(screen.getByText('187')).toBeInTheDocument()
  })

  it('renders link to city page', () => {
    render(<CityCard city={mockCity} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/countries/usa/new-york')
  })

  it('shows vs national avg badge', () => {
    render(<CityCard city={mockCity} />)
    expect(screen.getByText('+87%')).toBeInTheDocument()
  })

  it('shows "View details" text', () => {
    render(<CityCard city={mockCity} />)
    expect(screen.getByText(/view details/i)).toBeInTheDocument()
  })
})
