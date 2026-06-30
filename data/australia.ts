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

export interface AustraliaCity {
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

export interface AustraliaCountryData {
  id: string
  name: string
  code: string
  currency: string
  symbol: string
  minWage: number
  avgWage: number
  livingWage: LivingWageByFamily
}

export interface AustraliaData {
  country: AustraliaCountryData
  cities: AustraliaCity[]
}

export const australiaData: AustraliaData = {
  country: {
    id: "australia",
    name: "Australia",
    code: "AU",
    currency: "AUD",
    symbol: "A$",
    minWage: 23.23,
    avgWage: 38.50,
    livingWage: {
      single: { hourly: 27.40, monthly: 4749, annual: 56992 },
      coupleOneWorker: { hourly: 46.20, monthly: 8008, annual: 96096 },
      singleParent1Child: { hourly: 49.80, monthly: 8632, annual: 103584 }
    }
  },
  cities: [
    {
      id: "sydney",
      name: "Sydney",
      state: "NSW",
      population: 5312000,
      costIndex: 178,
      livingWage: {
        single: { hourly: 42.10, monthly: 7297, annual: 87568 },
        coupleOneWorker: { hourly: 70.80, monthly: 12272, annual: 147264 },
        singleParent1Child: { hourly: 76.50, monthly: 13260, annual: 159120 }
      },
      costs: { rent1br: 2600, rent2br: 3600, groceries: 580, transport: 180, utilities: 200, dining: 520, healthcare: 100, childcare: 2000, total: 4180 },
      vsNationalAvg: "+78%",
      rank: 1
    },
    {
      id: "melbourne",
      name: "Melbourne",
      state: "VIC",
      population: 5078000,
      costIndex: 162,
      livingWage: {
        single: { hourly: 38.20, monthly: 6621, annual: 79456 },
        coupleOneWorker: { hourly: 64.50, monthly: 11180, annual: 134160 },
        singleParent1Child: { hourly: 70.10, monthly: 12150, annual: 145808 }
      },
      costs: { rent1br: 2200, rent2br: 3100, groceries: 540, transport: 164, utilities: 190, dining: 480, healthcare: 100, childcare: 1900, total: 3674 },
      vsNationalAvg: "+62%",
      rank: 2
    },
    {
      id: "brisbane",
      name: "Brisbane",
      state: "QLD",
      population: 2514000,
      costIndex: 128,
      livingWage: {
        single: { hourly: 30.10, monthly: 5217, annual: 62608 },
        coupleOneWorker: { hourly: 51.20, monthly: 8875, annual: 106496 },
        singleParent1Child: { hourly: 55.80, monthly: 9672, annual: 116064 }
      },
      costs: { rent1br: 1800, rent2br: 2500, groceries: 500, transport: 160, utilities: 180, dining: 420, healthcare: 100, childcare: 1700, total: 3160 },
      vsNationalAvg: "+28%",
      rank: 3
    },
    {
      id: "perth",
      name: "Perth",
      state: "WA",
      population: 2043000,
      costIndex: 118,
      livingWage: {
        single: { hourly: 27.80, monthly: 4819, annual: 57824 },
        coupleOneWorker: { hourly: 47.50, monthly: 8233, annual: 98800 },
        singleParent1Child: { hourly: 51.20, monthly: 8875, annual: 106496 }
      },
      costs: { rent1br: 1700, rent2br: 2300, groceries: 490, transport: 155, utilities: 185, dining: 400, healthcare: 100, childcare: 1600, total: 3030 },
      vsNationalAvg: "+18%",
      rank: 4
    },
    {
      id: "adelaide",
      name: "Adelaide",
      state: "SA",
      population: 1376000,
      costIndex: 105,
      livingWage: {
        single: { hourly: 24.80, monthly: 4299, annual: 51584 },
        coupleOneWorker: { hourly: 42.10, monthly: 7297, annual: 87568 },
        singleParent1Child: { hourly: 45.90, monthly: 7956, annual: 95472 }
      },
      costs: { rent1br: 1450, rent2br: 2000, groceries: 470, transport: 148, utilities: 175, dining: 380, healthcare: 100, childcare: 1500, total: 2723 },
      vsNationalAvg: "+5%",
      rank: 5
    },
    {
      id: "canberra",
      name: "Canberra",
      state: "ACT",
      population: 462213,
      costIndex: 135,
      livingWage: {
        single: { hourly: 31.90, monthly: 5529, annual: 66352 },
        coupleOneWorker: { hourly: 54.10, monthly: 9377, annual: 112528 },
        singleParent1Child: { hourly: 58.50, monthly: 10140, annual: 121680 }
      },
      costs: { rent1br: 2000, rent2br: 2700, groceries: 510, transport: 140, utilities: 190, dining: 430, healthcare: 100, childcare: 1800, total: 3370 },
      vsNationalAvg: "+35%",
      rank: 6
    }
  ]
}
