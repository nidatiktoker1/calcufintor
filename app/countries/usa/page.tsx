import type { Metadata } from 'next'
import CityCard from '@/components/CityCard'
import CityCompareTable from '@/components/CityCompareTable'
import Breadcrumb from '@/components/Breadcrumb'
import { usaData } from '@/data/usa'
import { formatCurrency } from '@/lib/calculations'

export const metadata: Metadata = {
  title: 'Living Wage in USA 2026 | CALCUFINTOR',
  description: `The US national living wage is $${usaData.country.livingWage.single.hourly}/hr for a single adult. Compare wages and cost of living across major US cities.`,
  alternates: { canonical: 'https://calcufintor.vercel.app/countries/usa' },
  openGraph: {
    title: 'Living Wage in USA 2026 | CALCUFINTOR',
    url: 'https://calcufintor.vercel.app/countries/usa',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Country',
  name: 'United States',
  url: 'https://calcufintor.vercel.app/countries/usa',
}

export default function USAPage() {
  const { country, cities } = usaData

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'United States' },
        ]} />
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-3">
          Living Wage in USA 2026
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl">
          National overview of living wages, minimum wages, and cost of living across major US cities.
        </p>

        {/* National stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
            <p className="text-2xl font-bold text-primary">${country.minWage}/hr</p>
            <p className="text-xs text-gray-500 mt-1">Federal Min. Wage</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
            <p className="text-2xl font-bold text-primary">${country.avgWage}/hr</p>
            <p className="text-xs text-gray-500 mt-1">Average Wage</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
            <p className="text-2xl font-bold text-primary">${country.livingWage.single.hourly}/hr</p>
            <p className="text-xs text-gray-500 mt-1">Living Wage (Single)</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
            <p className="text-2xl font-bold text-primary">{formatCurrency(country.livingWage.single.annual)}</p>
            <p className="text-xs text-gray-500 mt-1">Living Wage (Annual)</p>
          </div>
        </div>

        {/* City cards */}
        <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">Cities</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-10">
          {cities.map(city => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>

        {/* Comparison table */}
        <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">City Comparison Table</h2>
        <CityCompareTable cities={cities} />
      </div>
    </>
  )
}
