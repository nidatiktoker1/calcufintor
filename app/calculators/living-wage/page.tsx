import type { Metadata } from 'next'
import LivingWageCalc from '@/components/LivingWageCalc'
import CityCompareTable from '@/components/CityCompareTable'
import Breadcrumb from '@/components/Breadcrumb'
import { usaData } from '@/data/usa'

export const metadata: Metadata = {
  title: 'Living Wage Calculator USA 2026 | CALCUFINTOR',
  description: 'Calculate the living wage for any US city by family type. Compare hourly, monthly, and annual living wages across New York, LA, Chicago, Houston, Phoenix.',
  alternates: { canonical: 'https://calcufintor.vercel.app/calculators/living-wage' },
  openGraph: {
    title: 'Living Wage Calculator USA 2026 | CALCUFINTOR',
    url: 'https://calcufintor.vercel.app/calculators/living-wage',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Living Wage Calculator USA',
  url: 'https://calcufintor.vercel.app/calculators/living-wage',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  description: 'Calculate the living wage for US cities by family type',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function LivingWagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Calculators', href: '/calculators' },
          { label: 'Living Wage' },
        ]} />
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-3">
          Living Wage Calculator USA 2026
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Find the minimum hourly wage needed to cover basic living expenses for different family types in major US cities.
          Updated with {new Date().getFullYear()} cost data.
        </p>

        <div className="mb-10">
          <LivingWageCalc />
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">
            Living Wage by City — Quick Reference
          </h2>
          <CityCompareTable cities={usaData.cities} />
        </div>

        <div className="prose max-w-none text-gray-700">
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-3">What Is a Living Wage?</h2>
          <p className="mb-3">
            A living wage is the minimum income necessary for a worker to meet their basic needs — including
            housing, food, healthcare, transportation, and childcare. Unlike the federal minimum wage of
            ${usaData.country.minWage}/hour, a living wage reflects the actual cost of living in a specific location.
          </p>
          <p className="mb-3">
            The national average living wage for a single adult is approximately $
            {usaData.country.livingWage.single.hourly}/hour (${usaData.country.livingWage.single.annual.toLocaleString()}/year),
            but this varies dramatically by city. In New York City, a single adult needs over $36/hour —
            nearly 5x the federal minimum wage.
          </p>
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-3 mt-6">How We Calculate Living Wage</h2>
          <p>
            Our calculations are based on MIT&apos;s Living Wage framework, adjusted for current local
            cost-of-living data including rent, food, transportation, healthcare, and childcare costs.
            Wages are calculated for a standard 2,080 work hours per year (40 hours/week, 52 weeks).
          </p>
        </div>
      </div>
    </>
  )
}
