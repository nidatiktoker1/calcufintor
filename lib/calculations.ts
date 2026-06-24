export function compareCities(fromCostIndex: number, toCostIndex: number, salary: number): number {
  return Math.round(salary * (toCostIndex / fromCostIndex))
}

export function salaryNeeded(currentSalary: number, fromIndex: number, toIndex: number): number {
  return Math.round(currentSalary * (toIndex / fromIndex))
}

export function hourlyToAnnual(hourly: number): number {
  return Math.round(hourly * 2080)
}

export function annualToMonthly(annual: number): number {
  return Math.round(annual / 12)
}

export function annualToHourly(annual: number): number {
  return Math.round((annual / 2080) * 100) / 100
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function getFamilyTypeLabel(familyType: string): string {
  switch (familyType) {
    case 'single':
      return 'Single Adult'
    case 'coupleOneWorker':
      return 'Couple (1 Working)'
    case 'singleParent1Child':
      return 'Single Parent, 1 Child'
    default:
      return 'Single Adult'
  }
}
