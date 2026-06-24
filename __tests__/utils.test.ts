import {
  slugify,
  capitalizeWords,
  getYear,
  generateCityTitle,
  generateCityDescription,
  generateCalculatorTitle,
  getCityBySlug,
} from '@/lib/utils'
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

describe('slugify', () => {
  it('converts text to lowercase with hyphens', () => {
    expect(slugify('New York City')).toBe('new-york-city')
  })

  it('removes special characters', () => {
    expect(slugify('Los Angeles!')).toBe('los-angeles')
  })

  it('handles already-slugified strings', () => {
    expect(slugify('new-york')).toBe('new-york')
  })

  it('handles empty string', () => {
    expect(slugify('')).toBe('')
  })
})

describe('capitalizeWords', () => {
  it('capitalizes first letter of each word', () => {
    expect(capitalizeWords('new york city')).toBe('New York City')
  })

  it('handles single word', () => {
    expect(capitalizeWords('chicago')).toBe('Chicago')
  })

  it('lowercases uppercase input', () => {
    expect(capitalizeWords('LOS ANGELES')).toBe('Los Angeles')
  })
})

describe('getYear', () => {
  it('returns current year as a number', () => {
    const year = getYear()
    expect(typeof year).toBe('number')
    expect(year).toBeGreaterThanOrEqual(2025)
  })
})

describe('generateCityTitle', () => {
  it('generates correct title format', () => {
    const year = getYear()
    const title = generateCityTitle('New York City')
    expect(title).toBe(`Cost of Living in New York City ${year} | CALCUFINTOR`)
  })

  it('includes CALCUFINTOR brand name', () => {
    expect(generateCityTitle('Houston')).toContain('CALCUFINTOR')
  })

  it('includes the city name', () => {
    expect(generateCityTitle('Chicago')).toContain('Chicago')
  })
})

describe('generateCityDescription', () => {
  it('includes city name', () => {
    const desc = generateCityDescription(mockCity)
    expect(desc).toContain('New York City')
  })

  it('includes hourly rate', () => {
    const desc = generateCityDescription(mockCity)
    expect(desc).toContain('$36.12/hour')
  })

  it('includes annual salary', () => {
    const desc = generateCityDescription(mockCity)
    expect(desc).toContain('75,120')
  })
})

describe('generateCalculatorTitle', () => {
  it('generates correct title format', () => {
    const year = getYear()
    expect(generateCalculatorTitle('Living Wage')).toBe(`Living Wage Calculator ${year} | CALCUFINTOR`)
  })

  it('includes CALCUFINTOR brand', () => {
    expect(generateCalculatorTitle('Salary Comparison')).toContain('CALCUFINTOR')
  })
})

describe('getCityBySlug', () => {
  it('returns city for valid slug', () => {
    const city = getCityBySlug('new-york')
    expect(city).toBeDefined()
    expect(city?.name).toBe('New York City')
  })

  it('returns undefined for invalid slug', () => {
    const city = getCityBySlug('invalid-city')
    expect(city).toBeUndefined()
  })

  it('finds Houston by slug', () => {
    const city = getCityBySlug('houston')
    expect(city?.state).toBe('TX')
  })

  it('finds Phoenix by slug', () => {
    const city = getCityBySlug('phoenix')
    expect(city?.name).toBe('Phoenix')
  })
})
