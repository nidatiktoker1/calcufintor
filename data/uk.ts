export interface LivingWage {
  hourly: number
  monthly: number
  annual: number
}

export interface LivingWageByFamily {
  single: LivingWage
  coupleOneWorker: LivingWage
  singleParent1Child: LivingWage
}

export interface Costs {
  rent1br: number
  rent2br: number
  groceries: number
  transport: number
  utilities: number
  dining: number
  healthcare: number
  childcare: number
  total: number
}

export interface UKCity {
  id: string
  name: string
  region: string
  population: number
  costIndex: number
  livingWage: LivingWageByFamily
  costs: Costs
  vsNationalAvg: string
  rank: number
}

export interface UKCountryData {
  id: string
  name: string
  code: string
  currency: string
  symbol: string
  minWage: number
  avgWage: number
  livingWage: LivingWageByFamily
}

export interface UKData {
  country: UKCountryData
  cities: UKCity[]
}

export const ukData: UKData = {
  country: {
    id: "uk",
    name: "United Kingdom",
    code: "GB",
    currency: "GBP",
    symbol: "£",
    minWage: 11.44,
    avgWage: 17.20,
    livingWage: {
      single: { hourly: 13.85, monthly: 2401, annual: 28808 },
      coupleOneWorker: { hourly: 23.40, monthly: 4056, annual: 48672 },
      singleParent1Child: { hourly: 26.10, monthly: 4524, annual: 54288 }
    }
  },
  cities: [
    {
      id: "london",
      name: "London",
      region: "England",
      population: 8982000,
      costIndex: 198,
      livingWage: {
        single: { hourly: 26.90, monthly: 4663, annual: 55952 },
        coupleOneWorker: { hourly: 45.20, monthly: 7835, annual: 94016 },
        singleParent1Child: { hourly: 50.80, monthly: 8805, annual: 105664 }
      },
      costs: { rent1br: 2100, rent2br: 2900, groceries: 480, transport: 174, utilities: 180, dining: 500, healthcare: 0, childcare: 1800, total: 3434 },
      vsNationalAvg: "+98%",
      rank: 1
    },
    {
      id: "manchester",
      name: "Manchester",
      region: "England",
      population: 553230,
      costIndex: 118,
      livingWage: {
        single: { hourly: 16.20, monthly: 2808, annual: 33696 },
        coupleOneWorker: { hourly: 27.80, monthly: 4819, annual: 57824 },
        singleParent1Child: { hourly: 31.50, monthly: 5460, annual: 65520 }
      },
      costs: { rent1br: 1050, rent2br: 1450, groceries: 380, transport: 90, utilities: 150, dining: 350, healthcare: 0, childcare: 1200, total: 2020 },
      vsNationalAvg: "+18%",
      rank: 2
    },
    {
      id: "birmingham",
      name: "Birmingham",
      region: "England",
      population: 1141816,
      costIndex: 108,
      livingWage: {
        single: { hourly: 14.90, monthly: 2583, annual: 30992 },
        coupleOneWorker: { hourly: 25.40, monthly: 4403, annual: 52832 },
        singleParent1Child: { hourly: 28.90, monthly: 5009, annual: 60112 }
      },
      costs: { rent1br: 900, rent2br: 1250, groceries: 360, transport: 85, utilities: 145, dining: 320, healthcare: 0, childcare: 1100, total: 1810 },
      vsNationalAvg: "+8%",
      rank: 3
    },
    {
      id: "edinburgh",
      name: "Edinburgh",
      region: "Scotland",
      population: 524930,
      costIndex: 130,
      livingWage: {
        single: { hourly: 17.90, monthly: 3103, annual: 37232 },
        coupleOneWorker: { hourly: 30.20, monthly: 5235, annual: 62816 },
        singleParent1Child: { hourly: 34.10, monthly: 5910, annual: 70928 }
      },
      costs: { rent1br: 1200, rent2br: 1700, groceries: 400, transport: 62, utilities: 160, dining: 380, healthcare: 0, childcare: 1300, total: 2202 },
      vsNationalAvg: "+30%",
      rank: 4
    },
    {
      id: "bristol",
      name: "Bristol",
      region: "England",
      population: 472996,
      costIndex: 122,
      livingWage: {
        single: { hourly: 16.80, monthly: 2912, annual: 34944 },
        coupleOneWorker: { hourly: 28.50, monthly: 4940, annual: 59280 },
        singleParent1Child: { hourly: 32.20, monthly: 5581, annual: 66976 }
      },
      costs: { rent1br: 1150, rent2br: 1600, groceries: 390, transport: 88, utilities: 155, dining: 360, healthcare: 0, childcare: 1250, total: 2143 },
      vsNationalAvg: "+22%",
      rank: 5
    },
    {
      id: "leeds",
      name: "Leeds",
      region: "England",
      population: 812036,
      costIndex: 102,
      livingWage: {
        single: { hourly: 14.10, monthly: 2444, annual: 29328 },
        coupleOneWorker: { hourly: 24.20, monthly: 4195, annual: 50336 },
        singleParent1Child: { hourly: 27.60, monthly: 4784, annual: 57408 }
      },
      costs: { rent1br: 850, rent2br: 1150, groceries: 350, transport: 80, utilities: 140, dining: 300, healthcare: 0, childcare: 1050, total: 1720 },
      vsNationalAvg: "+2%",
      rank: 6
    }
  ]
}
