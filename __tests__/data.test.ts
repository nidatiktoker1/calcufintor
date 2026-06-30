import { usaData } from '@/data/usa'
import { canadaData } from '@/data/canada'
import { ukData } from '@/data/uk'
import { australiaData } from '@/data/australia'

describe('USA data', () => {
  it('has 25 cities', () => {
    expect(usaData.cities).toHaveLength(25)
  })

  it('every city has required fields', () => {
    usaData.cities.forEach(city => {
      expect(city.id).toBeTruthy()
      expect(city.name).toBeTruthy()
      expect(city.state).toBeTruthy()
      expect(city.costIndex).toBeGreaterThan(0)
      expect(city.livingWage.single.hourly).toBeGreaterThan(0)
      expect(city.costs.total).toBeGreaterThan(0)
    })
  })

  it('San Francisco has highest cost index', () => {
    const sf = usaData.cities.find(c => c.id === 'san-francisco')
    expect(sf?.costIndex).toBe(220)
  })

  it('Memphis has lowest cost index', () => {
    const memphis = usaData.cities.find(c => c.id === 'memphis')
    expect(memphis?.costIndex).toBe(80)
  })

  it('all cities have unique IDs', () => {
    const ids = usaData.cities.map(c => c.id)
    const unique = new Set(ids)
    expect(unique.size).toBe(ids.length)
  })
})

describe('Canada data', () => {
  it('has 7 cities', () => {
    expect(canadaData.cities).toHaveLength(7)
  })

  it('Toronto has highest cost index', () => {
    const toronto = canadaData.cities.find(c => c.id === 'toronto')
    expect(toronto).toBeDefined()
    expect(toronto!.rank).toBe(1)
  })

  it('every city has province field', () => {
    canadaData.cities.forEach(city => {
      expect(city.province).toBeTruthy()
    })
  })

  it('country uses CAD currency', () => {
    expect(canadaData.country.currency).toBe('CAD')
  })

  it('all cities have unique IDs', () => {
    const ids = canadaData.cities.map(c => c.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})

describe('UK data', () => {
  it('has 6 cities', () => {
    expect(ukData.cities).toHaveLength(6)
  })

  it('London has highest cost index', () => {
    const london = ukData.cities.find(c => c.id === 'london')
    expect(london?.costIndex).toBe(198)
  })

  it('healthcare is 0 for all UK cities (NHS)', () => {
    ukData.cities.forEach(city => {
      expect(city.costs.healthcare).toBe(0)
    })
  })

  it('country uses GBP currency', () => {
    expect(ukData.country.currency).toBe('GBP')
  })

  it('every city has region field', () => {
    ukData.cities.forEach(city => {
      expect(city.region).toBeTruthy()
    })
  })

  it('all cities have unique IDs', () => {
    const ids = ukData.cities.map(c => c.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})

describe('Australia data', () => {
  it('has 6 cities', () => {
    expect(australiaData.cities).toHaveLength(6)
  })

  it('Sydney has highest cost index', () => {
    const sydney = australiaData.cities.find(c => c.id === 'sydney')
    expect(sydney?.costIndex).toBe(178)
  })

  it('country has world-class minimum wage', () => {
    expect(australiaData.country.minWage).toBeGreaterThan(20)
  })

  it('country uses AUD currency', () => {
    expect(australiaData.country.currency).toBe('AUD')
  })

  it('every city has state field', () => {
    australiaData.cities.forEach(city => {
      expect(city.state).toBeTruthy()
    })
  })

  it('all cities have unique IDs', () => {
    const ids = australiaData.cities.map(c => c.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})
