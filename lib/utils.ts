import { City } from '@/data/usa'
import { usaData } from '@/data/usa'

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

export function capitalizeWords(text: string): string {
  return text
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

export function getYear(): number {
  return new Date().getFullYear()
}

export function generateCityTitle(cityName: string): string {
  const year = getYear()
  return `Cost of Living in ${cityName} ${year} | CALCUFINTOR`
}

export function generateCityDescription(city: City): string {
  const hourly = city.livingWage.single.hourly
  const annual = city.livingWage.single.annual
  return `Living wage in ${city.name} is $${hourly}/hour ($${annual.toLocaleString()}/year). See full cost breakdown for rent, food, transport and more.`
}

export function generateCalculatorTitle(calcName: string): string {
  const year = getYear()
  return `${calcName} Calculator ${year} | CALCUFINTOR`
}

export function getCityBySlug(slug: string): City | undefined {
  return usaData.cities.find(city => city.id === slug)
}
