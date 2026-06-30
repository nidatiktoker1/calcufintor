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

export interface CanadaCity {
  id: string
  name: string
  province: string
  population: number
  costIndex: number
  livingWage: LivingWageByFamily
  costs: Costs
  vsNationalAvg: string
  rank: number
}

export interface CanadaCountryData {
  id: string
  name: string
  code: string
  currency: string
  symbol: string
  minWage: number
  avgWage: number
  livingWage: LivingWageByFamily
}

export interface CanadaData {
  country: CanadaCountryData
  cities: CanadaCity[]
}

export const canadaData: CanadaData = {
  country: {
    id: "canada",
    name: "Canada",
    code: "CA",
    currency: "CAD",
    symbol: "CA$",
    minWage: 17.30,
    avgWage: 32.50,
    livingWage: {
      single: { hourly: 22.50, monthly: 3900, annual: 46800 },
      coupleOneWorker: { hourly: 38.00, monthly: 6587, annual: 79040 },
      singleParent1Child: { hourly: 41.00, monthly: 7107, annual: 85280 }
    }
  },
  cities: [
    {
      id: "toronto",
      name: "Toronto",
      province: "ON",
      population: 2930000,
      costIndex: 168,
      livingWage: {
        single: { hourly: 33.40, monthly: 5789, annual: 69472 },
        coupleOneWorker: { hourly: 57.20, monthly: 9915, annual: 118976 },
        singleParent1Child: { hourly: 60.10, monthly: 10417, annual: 125008 }
      },
      costs: { rent1br: 2400, rent2br: 3200, groceries: 520, transport: 156, utilities: 160, dining: 420, healthcare: 80, childcare: 1900, total: 3736 },
      vsNationalAvg: "+68%",
      rank: 1
    },
    {
      id: "vancouver",
      name: "Vancouver",
      province: "BC",
      population: 675218,
      costIndex: 182,
      livingWage: {
        single: { hourly: 37.10, monthly: 6430, annual: 77168 },
        coupleOneWorker: { hourly: 62.50, monthly: 10833, annual: 130000 },
        singleParent1Child: { hourly: 65.80, monthly: 11405, annual: 136864 }
      },
      costs: { rent1br: 2800, rent2br: 3900, groceries: 560, transport: 100, utilities: 180, dining: 480, healthcare: 80, childcare: 2100, total: 4200 },
      vsNationalAvg: "+82%",
      rank: 2
    },
    {
      id: "montreal",
      name: "Montreal",
      province: "QC",
      population: 1762949,
      costIndex: 112,
      livingWage: {
        single: { hourly: 22.10, monthly: 3830, annual: 45968 },
        coupleOneWorker: { hourly: 38.50, monthly: 6673, annual: 80080 },
        singleParent1Child: { hourly: 42.00, monthly: 7280, annual: 87360 }
      },
      costs: { rent1br: 1550, rent2br: 2100, groceries: 480, transport: 97, utilities: 130, dining: 360, healthcare: 80, childcare: 900, total: 2697 },
      vsNationalAvg: "+12%",
      rank: 3
    },
    {
      id: "calgary",
      name: "Calgary",
      province: "AB",
      population: 1336000,
      costIndex: 119,
      livingWage: {
        single: { hourly: 23.80, monthly: 4125, annual: 49504 },
        coupleOneWorker: { hourly: 40.20, monthly: 6968, annual: 83616 },
        singleParent1Child: { hourly: 44.50, monthly: 7713, annual: 92560 }
      },
      costs: { rent1br: 1750, rent2br: 2350, groceries: 500, transport: 110, utilities: 170, dining: 380, healthcare: 80, childcare: 1600, total: 2990 },
      vsNationalAvg: "+19%",
      rank: 4
    },
    {
      id: "ottawa",
      name: "Ottawa",
      province: "ON",
      population: 1017449,
      costIndex: 108,
      livingWage: {
        single: { hourly: 21.50, monthly: 3727, annual: 44720 },
        coupleOneWorker: { hourly: 37.20, monthly: 6448, annual: 77376 },
        singleParent1Child: { hourly: 40.80, monthly: 7072, annual: 84864 }
      },
      costs: { rent1br: 1650, rent2br: 2200, groceries: 460, transport: 125, utilities: 145, dining: 340, healthcare: 80, childcare: 1500, total: 2800 },
      vsNationalAvg: "+8%",
      rank: 5
    },
    {
      id: "edmonton",
      name: "Edmonton",
      province: "AB",
      population: 981280,
      costIndex: 98,
      livingWage: {
        single: { hourly: 19.60, monthly: 3397, annual: 40768 },
        coupleOneWorker: { hourly: 34.50, monthly: 5980, annual: 71760 },
        singleParent1Child: { hourly: 38.20, monthly: 6621, annual: 79456 }
      },
      costs: { rent1br: 1400, rent2br: 1900, groceries: 440, transport: 100, utilities: 155, dining: 310, healthcare: 80, childcare: 1400, total: 2485 },
      vsNationalAvg: "-2%",
      rank: 6
    },
    {
      id: "winnipeg",
      name: "Winnipeg",
      province: "MB",
      population: 778489,
      costIndex: 88,
      livingWage: {
        single: { hourly: 18.10, monthly: 3137, annual: 37648 },
        coupleOneWorker: { hourly: 31.80, monthly: 5512, annual: 66144 },
        singleParent1Child: { hourly: 35.50, monthly: 6153, annual: 73840 }
      },
      costs: { rent1br: 1200, rent2br: 1650, groceries: 420, transport: 100, utilities: 150, dining: 280, healthcare: 80, childcare: 1200, total: 2230 },
      vsNationalAvg: "-12%",
      rank: 7
    }
  ]
}
