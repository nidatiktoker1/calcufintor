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
    { id: "new-york", name: "New York City", state: "NY", population: 8336817, costIndex: 187, livingWage: { single: { hourly: 36.12, monthly: 6260, annual: 75120 }, coupleOneWorker: { hourly: 72.24, monthly: 12520, annual: 150240 }, singleParent1Child: { hourly: 65.50, monthly: 11353, annual: 136240 } }, costs: { rent1br: 3500, rent2br: 4800, groceries: 600, transport: 127, utilities: 175, dining: 500, healthcare: 450, childcare: 2200, total: 5352 }, vsNationalAvg: "+87%", rank: 1 },
    { id: "los-angeles", name: "Los Angeles", state: "CA", population: 3979576, costIndex: 173, livingWage: { single: { hourly: 31.91, monthly: 5531, annual: 66370 }, coupleOneWorker: { hourly: 60.40, monthly: 10470, annual: 125620 }, singleParent1Child: { hourly: 58.22, monthly: 10092, annual: 121100 } }, costs: { rent1br: 2800, rent2br: 3900, groceries: 550, transport: 100, utilities: 160, dining: 450, healthcare: 430, childcare: 2000, total: 4060 }, vsNationalAvg: "+73%", rank: 2 },
    { id: "chicago", name: "Chicago", state: "IL", population: 2693976, costIndex: 107, livingWage: { single: { hourly: 22.83, monthly: 3957, annual: 47490 }, coupleOneWorker: { hourly: 45.66, monthly: 7915, annual: 94975 }, singleParent1Child: { hourly: 43.11, monthly: 7472, annual: 89668 } }, costs: { rent1br: 1800, rent2br: 2400, groceries: 450, transport: 105, utilities: 140, dining: 350, healthcare: 390, childcare: 1700, total: 2845 }, vsNationalAvg: "+7%", rank: 3 },
    { id: "houston", name: "Houston", state: "TX", population: 2304580, costIndex: 96, livingWage: { single: { hourly: 20.71, monthly: 3590, annual: 43080 }, coupleOneWorker: { hourly: 41.42, monthly: 7180, annual: 86165 }, singleParent1Child: { hourly: 38.90, monthly: 6743, annual: 80910 } }, costs: { rent1br: 1350, rent2br: 1850, groceries: 400, transport: 90, utilities: 160, dining: 300, healthcare: 360, childcare: 1500, total: 2300 }, vsNationalAvg: "-4%", rank: 4 },
    { id: "phoenix", name: "Phoenix", state: "AZ", population: 1608139, costIndex: 103, livingWage: { single: { hourly: 21.10, monthly: 3657, annual: 43890 }, coupleOneWorker: { hourly: 42.20, monthly: 7315, annual: 87745 }, singleParent1Child: { hourly: 39.80, monthly: 6899, annual: 82785 } }, costs: { rent1br: 1500, rent2br: 2000, groceries: 420, transport: 95, utilities: 165, dining: 320, healthcare: 380, childcare: 1600, total: 2500 }, vsNationalAvg: "+3%", rank: 5 },
    { id: "dallas", name: "Dallas", state: "TX", population: 1304379, costIndex: 101, livingWage: { single: { hourly: 21.30, monthly: 3692, annual: 44304 }, coupleOneWorker: { hourly: 42.60, monthly: 7384, annual: 88608 }, singleParent1Child: { hourly: 40.10, monthly: 6950, annual: 83408 } }, costs: { rent1br: 1450, rent2br: 1950, groceries: 410, transport: 92, utilities: 158, dining: 315, healthcare: 370, childcare: 1550, total: 2395 }, vsNationalAvg: "+1%", rank: 6 },
    { id: "san-antonio", name: "San Antonio", state: "TX", population: 1434625, costIndex: 91, livingWage: { single: { hourly: 19.50, monthly: 3380, annual: 40560 }, coupleOneWorker: { hourly: 39.00, monthly: 6760, annual: 81120 }, singleParent1Child: { hourly: 36.80, monthly: 6379, annual: 76544 } }, costs: { rent1br: 1200, rent2br: 1650, groceries: 390, transport: 85, utilities: 152, dining: 285, healthcare: 345, childcare: 1420, total: 2112 }, vsNationalAvg: "-9%", rank: 7 },
    { id: "san-diego", name: "San Diego", state: "CA", population: 1386932, costIndex: 158, livingWage: { single: { hourly: 30.20, monthly: 5235, annual: 62816 }, coupleOneWorker: { hourly: 57.80, monthly: 10019, annual: 120224 }, singleParent1Child: { hourly: 55.40, monthly: 9603, annual: 115232 } }, costs: { rent1br: 2500, rent2br: 3400, groceries: 530, transport: 96, utilities: 155, dining: 430, healthcare: 420, childcare: 1950, total: 3731 }, vsNationalAvg: "+58%", rank: 8 },
    { id: "seattle", name: "Seattle", state: "WA", population: 737255, costIndex: 165, livingWage: { single: { hourly: 31.50, monthly: 5460, annual: 65520 }, coupleOneWorker: { hourly: 59.80, monthly: 10365, annual: 124384 }, singleParent1Child: { hourly: 57.20, monthly: 9915, annual: 118976 } }, costs: { rent1br: 2600, rent2br: 3500, groceries: 545, transport: 112, utilities: 168, dining: 460, healthcare: 440, childcare: 2050, total: 3885 }, vsNationalAvg: "+65%", rank: 9 },
    { id: "denver", name: "Denver", state: "CO", population: 715522, costIndex: 128, livingWage: { single: { hourly: 25.80, monthly: 4472, annual: 53664 }, coupleOneWorker: { hourly: 49.20, monthly: 8528, annual: 102336 }, singleParent1Child: { hourly: 47.10, monthly: 8164, annual: 97968 } }, costs: { rent1br: 2000, rent2br: 2700, groceries: 480, transport: 99, utilities: 155, dining: 390, healthcare: 405, childcare: 1750, total: 3129 }, vsNationalAvg: "+28%", rank: 10 },
    { id: "boston", name: "Boston", state: "MA", population: 675647, costIndex: 162, livingWage: { single: { hourly: 31.20, monthly: 5408, annual: 64896 }, coupleOneWorker: { hourly: 59.10, monthly: 10244, annual: 122928 }, singleParent1Child: { hourly: 56.80, monthly: 9845, annual: 118144 } }, costs: { rent1br: 2700, rent2br: 3600, groceries: 555, transport: 90, utilities: 170, dining: 455, healthcare: 445, childcare: 2100, total: 4015 }, vsNationalAvg: "+62%", rank: 11 },
    { id: "miami", name: "Miami", state: "FL", population: 442241, costIndex: 140, livingWage: { single: { hourly: 28.10, monthly: 4870, annual: 58448 }, coupleOneWorker: { hourly: 53.40, monthly: 9256, annual: 111072 }, singleParent1Child: { hourly: 51.20, monthly: 8875, annual: 106496 } }, costs: { rent1br: 2300, rent2br: 3100, groceries: 500, transport: 98, utilities: 168, dining: 410, healthcare: 415, childcare: 1850, total: 3491 }, vsNationalAvg: "+40%", rank: 12 },
    { id: "atlanta", name: "Atlanta", state: "GA", population: 498715, costIndex: 112, livingWage: { single: { hourly: 23.50, monthly: 4073, annual: 48880 }, coupleOneWorker: { hourly: 44.80, monthly: 7765, annual: 93184 }, singleParent1Child: { hourly: 42.60, monthly: 7384, annual: 88608 } }, costs: { rent1br: 1750, rent2br: 2350, groceries: 445, transport: 96, utilities: 148, dining: 345, healthcare: 385, childcare: 1650, total: 2769 }, vsNationalAvg: "+12%", rank: 13 },
    { id: "minneapolis", name: "Minneapolis", state: "MN", population: 429954, costIndex: 110, livingWage: { single: { hourly: 23.10, monthly: 4004, annual: 48048 }, coupleOneWorker: { hourly: 44.20, monthly: 7661, annual: 91936 }, singleParent1Child: { hourly: 42.00, monthly: 7280, annual: 87360 } }, costs: { rent1br: 1700, rent2br: 2300, groceries: 455, transport: 98, utilities: 145, dining: 340, healthcare: 395, childcare: 1680, total: 2733 }, vsNationalAvg: "+10%", rank: 14 },
    { id: "portland", name: "Portland", state: "OR", population: 652503, costIndex: 130, livingWage: { single: { hourly: 26.20, monthly: 4541, annual: 54496 }, coupleOneWorker: { hourly: 49.80, monthly: 8632, annual: 103584 }, singleParent1Child: { hourly: 47.80, monthly: 8285, annual: 99424 } }, costs: { rent1br: 1950, rent2br: 2700, groceries: 490, transport: 100, utilities: 158, dining: 395, healthcare: 415, childcare: 1780, total: 3108 }, vsNationalAvg: "+30%", rank: 15 },
    { id: "detroit", name: "Detroit", state: "MI", population: 632464, costIndex: 82, livingWage: { single: { hourly: 18.10, monthly: 3137, annual: 37648 }, coupleOneWorker: { hourly: 36.20, monthly: 6275, annual: 75296 }, singleParent1Child: { hourly: 34.50, monthly: 5980, annual: 71760 } }, costs: { rent1br: 1050, rent2br: 1400, groceries: 380, transport: 80, utilities: 138, dining: 270, healthcare: 340, childcare: 1300, total: 2038 }, vsNationalAvg: "-18%", rank: 16 },
    { id: "las-vegas", name: "Las Vegas", state: "NV", population: 641903, costIndex: 108, livingWage: { single: { hourly: 22.90, monthly: 3969, annual: 47632 }, coupleOneWorker: { hourly: 43.50, monthly: 7540, annual: 90480 }, singleParent1Child: { hourly: 41.50, monthly: 7193, annual: 86320 } }, costs: { rent1br: 1700, rent2br: 2250, groceries: 430, transport: 94, utilities: 168, dining: 340, healthcare: 380, childcare: 1600, total: 2712 }, vsNationalAvg: "+8%", rank: 17 },
    { id: "nashville", name: "Nashville", state: "TN", population: 689447, costIndex: 109, livingWage: { single: { hourly: 23.00, monthly: 3987, annual: 47840 }, coupleOneWorker: { hourly: 43.80, monthly: 7592, annual: 91104 }, singleParent1Child: { hourly: 41.80, monthly: 7245, annual: 86944 } }, costs: { rent1br: 1750, rent2br: 2300, groceries: 435, transport: 94, utilities: 145, dining: 345, healthcare: 375, childcare: 1620, total: 2744 }, vsNationalAvg: "+9%", rank: 18 },
    { id: "austin", name: "Austin", state: "TX", population: 961855, costIndex: 120, livingWage: { single: { hourly: 24.40, monthly: 4229, annual: 50752 }, coupleOneWorker: { hourly: 46.50, monthly: 8060, annual: 96720 }, singleParent1Child: { hourly: 44.20, monthly: 7661, annual: 91936 } }, costs: { rent1br: 1900, rent2br: 2600, groceries: 460, transport: 98, utilities: 162, dining: 365, healthcare: 390, childcare: 1700, total: 2975 }, vsNationalAvg: "+20%", rank: 19 },
    { id: "san-francisco", name: "San Francisco", state: "CA", population: 873965, costIndex: 220, livingWage: { single: { hourly: 43.20, monthly: 7488, annual: 89856 }, coupleOneWorker: { hourly: 84.50, monthly: 14647, annual: 175760 }, singleParent1Child: { hourly: 80.10, monthly: 13884, annual: 166608 } }, costs: { rent1br: 3800, rent2br: 5200, groceries: 650, transport: 102, utilities: 190, dining: 560, healthcare: 480, childcare: 2400, total: 5782 }, vsNationalAvg: "+120%", rank: 20 },
    { id: "charlotte", name: "Charlotte", state: "NC", population: 874579, costIndex: 99, livingWage: { single: { hourly: 20.90, monthly: 3623, annual: 43472 }, coupleOneWorker: { hourly: 41.80, monthly: 7245, annual: 86944 }, singleParent1Child: { hourly: 39.60, monthly: 6864, annual: 82368 } }, costs: { rent1br: 1500, rent2br: 2000, groceries: 410, transport: 90, utilities: 148, dining: 305, healthcare: 360, childcare: 1520, total: 2413 }, vsNationalAvg: "-1%", rank: 21 },
    { id: "columbus", name: "Columbus", state: "OH", population: 905748, costIndex: 89, livingWage: { single: { hourly: 19.20, monthly: 3328, annual: 39936 }, coupleOneWorker: { hourly: 38.40, monthly: 6656, annual: 79872 }, singleParent1Child: { hourly: 36.50, monthly: 6327, annual: 75920 } }, costs: { rent1br: 1200, rent2br: 1650, groceries: 390, transport: 82, utilities: 138, dining: 280, healthcare: 345, childcare: 1380, total: 2090 }, vsNationalAvg: "-11%", rank: 22 },
    { id: "indianapolis", name: "Indianapolis", state: "IN", population: 887642, costIndex: 85, livingWage: { single: { hourly: 18.60, monthly: 3224, annual: 38688 }, coupleOneWorker: { hourly: 37.20, monthly: 6448, annual: 77376 }, singleParent1Child: { hourly: 35.40, monthly: 6136, annual: 73632 } }, costs: { rent1br: 1100, rent2br: 1500, groceries: 375, transport: 80, utilities: 132, dining: 270, healthcare: 335, childcare: 1300, total: 1892 }, vsNationalAvg: "-15%", rank: 23 },
    { id: "baltimore", name: "Baltimore", state: "MD", population: 585708, costIndex: 115, livingWage: { single: { hourly: 23.80, monthly: 4125, annual: 49504 }, coupleOneWorker: { hourly: 45.20, monthly: 7835, annual: 94016 }, singleParent1Child: { hourly: 43.10, monthly: 7472, annual: 89648 } }, costs: { rent1br: 1750, rent2br: 2300, groceries: 455, transport: 92, utilities: 148, dining: 350, healthcare: 395, childcare: 1700, total: 2790 }, vsNationalAvg: "+15%", rank: 24 },
    { id: "memphis", name: "Memphis", state: "TN", population: 633104, costIndex: 80, livingWage: { single: { hourly: 17.60, monthly: 3051, annual: 36608 }, coupleOneWorker: { hourly: 35.20, monthly: 6101, annual: 73216 }, singleParent1Child: { hourly: 33.50, monthly: 5807, annual: 69680 } }, costs: { rent1br: 1000, rent2br: 1350, groceries: 360, transport: 78, utilities: 130, dining: 255, healthcare: 325, childcare: 1250, total: 1948 }, vsNationalAvg: "-20%", rank: 25 }
  ]
}
