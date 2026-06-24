import {
  compareCities,
  salaryNeeded,
  hourlyToAnnual,
  annualToMonthly,
  annualToHourly,
  formatCurrency,
  getFamilyTypeLabel,
} from '@/lib/calculations'

describe('compareCities', () => {
  it('calculates salary adjustment from NYC (187) to Chicago (107)', () => {
    const result = compareCities(187, 107, 100000)
    expect(result).toBe(57219)
  })

  it('returns same salary when both indices are equal (same city)', () => {
    const result = compareCities(100, 100, 75000)
    expect(result).toBe(75000)
  })

  it('increases salary when moving from low to high cost city', () => {
    const result = compareCities(96, 187, 50000)
    expect(result).toBeGreaterThan(50000)
  })

  it('decreases salary when moving from high to low cost city', () => {
    const result = compareCities(187, 96, 100000)
    expect(result).toBeLessThan(100000)
  })

  it('returns 0 for zero salary', () => {
    const result = compareCities(187, 107, 0)
    expect(result).toBe(0)
  })

  it('handles large salary values correctly', () => {
    const result = compareCities(100, 200, 1000000)
    expect(result).toBe(2000000)
  })
})

describe('salaryNeeded', () => {
  it('calculates salary needed to maintain lifestyle from Chicago to NYC', () => {
    const result = salaryNeeded(50000, 107, 187)
    expect(result).toBe(87383)
  })

  it('returns same salary when from and to indices are equal', () => {
    const result = salaryNeeded(60000, 107, 107)
    expect(result).toBe(60000)
  })

  it('returns 0 for zero current salary', () => {
    const result = salaryNeeded(0, 107, 187)
    expect(result).toBe(0)
  })
})

describe('hourlyToAnnual', () => {
  it('converts NYC living wage: 36.12/hr → ~75130', () => {
    const result = hourlyToAnnual(36.12)
    expect(result).toBe(75130)
  })

  it('converts $0/hr to $0/year', () => {
    expect(hourlyToAnnual(0)).toBe(0)
  })

  it('converts federal minimum wage 7.25 correctly', () => {
    expect(hourlyToAnnual(7.25)).toBe(15080)
  })

  it('uses 2080 work hours per year', () => {
    expect(hourlyToAnnual(10)).toBe(20800)
  })
})

describe('annualToMonthly', () => {
  it('converts $75,120/year → $6,260/month', () => {
    expect(annualToMonthly(75120)).toBe(6260)
  })

  it('converts $0 to $0', () => {
    expect(annualToMonthly(0)).toBe(0)
  })

  it('rounds correctly for non-divisible amounts', () => {
    expect(annualToMonthly(44866)).toBe(3739)
  })
})

describe('annualToHourly', () => {
  it('converts $75,120/year → $36.12/hour', () => {
    expect(annualToHourly(75120)).toBe(36.12)
  })

  it('converts $0/year → $0/hour', () => {
    expect(annualToHourly(0)).toBe(0)
  })

  it('rounds to 2 decimal places', () => {
    const result = annualToHourly(44866)
    expect(result.toString()).toMatch(/^\d+\.\d{1,2}$/)
  })
})

describe('formatCurrency', () => {
  it('formats 3500 as "$3,500"', () => {
    expect(formatCurrency(3500)).toBe('$3,500')
  })

  it('formats 0 as "$0"', () => {
    expect(formatCurrency(0)).toBe('$0')
  })

  it('formats large numbers with commas', () => {
    expect(formatCurrency(1000000)).toBe('$1,000,000')
  })

  it('formats 75120 as "$75,120"', () => {
    expect(formatCurrency(75120)).toBe('$75,120')
  })

  it('does not show decimal places', () => {
    const result = formatCurrency(3500)
    expect(result).not.toContain('.')
  })
})

describe('getFamilyTypeLabel', () => {
  it('returns "Single Adult" for "single"', () => {
    expect(getFamilyTypeLabel('single')).toBe('Single Adult')
  })

  it('returns "Couple (1 Working)" for "coupleOneWorker"', () => {
    expect(getFamilyTypeLabel('coupleOneWorker')).toBe('Couple (1 Working)')
  })

  it('returns "Single Parent, 1 Child" for "singleParent1Child"', () => {
    expect(getFamilyTypeLabel('singleParent1Child')).toBe('Single Parent, 1 Child')
  })

  it('returns "Single Adult" for unknown type', () => {
    expect(getFamilyTypeLabel('unknown')).toBe('Single Adult')
  })
})
