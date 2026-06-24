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

export interface City {
  id: string
  name: string
  state: string
  population: number
  costIndex: number
  livingWage: LivingWageByFamily
  costs: Costs
  vsNationalAvg: string
  rank: number
}

export interface CountryData {
  id: string
  name: string
  code: string
  currency: string
  symbol: string
  minWage: number
  avgWage: number
  livingWage: LivingWageByFamily
}

export interface UsaData {
  country: CountryData
  cities: City[]
}

export const usaData: UsaData = {
  country: {
    id: "usa",
    name: "United States",
    code: "US",
    currency: "USD",
    symbol: "$",
    minWage: 7.25,
    avgWage: 28.01,
    livingWage: {
      single: { hourly: 21.57, monthly: 3739, annual: 44866 },
      coupleOneWorker: { hourly: 43.36, monthly: 7516, annual: 90147 },
      singleParent1Child: { hourly: 40.82, monthly: 7075, annual: 84913 }
    }
  },
  cities: [
    {
      id: "new-york",
      name: "New York City",
      state: "NY",
      population: 8336817,
      costIndex: 187,
      livingWage: {
        single: { hourly: 36.12, monthly: 6260, annual: 75120 },
        coupleOneWorker: { hourly: 72.24, monthly: 12520, annual: 150240 },
        singleParent1Child: { hourly: 65.50, monthly: 11353, annual: 136240 }
      },
      costs: { rent1br: 3500, rent2br: 4800, groceries: 600, transport: 127, utilities: 175, dining: 500, healthcare: 450, childcare: 2200, total: 5352 },
      vsNationalAvg: "+87%",
      rank: 1
    },
    {
      id: "los-angeles",
      name: "Los Angeles",
      state: "CA",
      population: 3979576,
      costIndex: 173,
      livingWage: {
        single: { hourly: 31.91, monthly: 5531, annual: 66370 },
        coupleOneWorker: { hourly: 60.40, monthly: 10470, annual: 125620 },
        singleParent1Child: { hourly: 58.22, monthly: 10092, annual: 121100 }
      },
      costs: { rent1br: 2800, rent2br: 3900, groceries: 550, transport: 100, utilities: 160, dining: 450, healthcare: 430, childcare: 2000, total: 4060 },
      vsNationalAvg: "+73%",
      rank: 2
    },
    {
      id: "chicago",
      name: "Chicago",
      state: "IL",
      population: 2693976,
      costIndex: 107,
      livingWage: {
        single: { hourly: 22.83, monthly: 3957, annual: 47490 },
        coupleOneWorker: { hourly: 45.66, monthly: 7915, annual: 94975 },
        singleParent1Child: { hourly: 43.11, monthly: 7472, annual: 89668 }
      },
      costs: { rent1br: 1800, rent2br: 2400, groceries: 450, transport: 105, utilities: 140, dining: 350, healthcare: 390, childcare: 1700, total: 2845 },
      vsNationalAvg: "+7%",
      rank: 3
    },
    {
      id: "houston",
      name: "Houston",
      state: "TX",
      population: 2304580,
      costIndex: 96,
      livingWage: {
        single: { hourly: 20.71, monthly: 3590, annual: 43080 },
        coupleOneWorker: { hourly: 41.42, monthly: 7180, annual: 86165 },
        singleParent1Child: { hourly: 38.90, monthly: 6743, annual: 80910 }
      },
      costs: { rent1br: 1350, rent2br: 1850, groceries: 400, transport: 90, utilities: 160, dining: 300, healthcare: 360, childcare: 1500, total: 2300 },
      vsNationalAvg: "-4%",
      rank: 4
    },
    {
      id: "phoenix",
      name: "Phoenix",
      state: "AZ",
      population: 1608139,
      costIndex: 103,
      livingWage: {
        single: { hourly: 21.10, monthly: 3657, annual: 43890 },
        coupleOneWorker: { hourly: 42.20, monthly: 7315, annual: 87745 },
        singleParent1Child: { hourly: 39.80, monthly: 6899, annual: 82785 }
      },
      costs: { rent1br: 1500, rent2br: 2000, groceries: 420, transport: 95, utilities: 165, dining: 320, healthcare: 380, childcare: 1600, total: 2500 },
      vsNationalAvg: "+3%",
      rank: 5
    }
  ]
}
