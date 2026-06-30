import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CityCompareTable from '@/components/CityCompareTable'
import { canadaData } from '@/data/canada'
import { formatCurrency } from '@/lib/calculations'

export const metadata: Metadata = {
  title: 'Living Wage in Canada 2026 | CALCUFINTOR',
  description: `Canada national living wage is CA$${canadaData.country.livingWage.single.hourly}/hr. Compare wages and cost of living across Toronto, Vancouver, Montreal, Calgary and more.`,
  alternates: { canonical: 'https://calcufintor.vercel.app/countries/canada' },
  openGraph: {
    title: 'Living Wage in Canada 2026 | CALCUFINTOR',
    url: 'https://calcufintor.vercel.app/countries/canada',
  },
}

export default function CanadaPage() {
  const { country, cities } = canadaData
  const year = new Date().getFullYear()

  // Adapt cities for the shared CityCompareTable (which expects City with state)
  const adaptedCities = cities.map(c => ({ ...c, state: c.province }))

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Canada' },
      ]} />

      <div className="flex items-center gap-3 mb-2">
        <span className="text-4xl">🇨🇦</span>
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900">
          Living Wage in Canada {year}
        </h1>
      </div>
      <p className="text-gray-600 mb-8 max-w-2xl">
        National overview of living wages and cost of living across major Canadian cities. All figures in Canadian dollars (CAD).
      </p>

      {/* National stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
          <p className="text-2xl font-bold text-primary">CA${country.minWage}/hr</p>
          <p className="text-xs text-gray-500 mt-1">Min. Wage (avg)</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
          <p className="text-2xl font-bold text-primary">CA${country.avgWage}/hr</p>
          <p className="text-xs text-gray-500 mt-1">Average Wage</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
          <p className="text-2xl font-bold text-primary">CA${country.livingWage.single.hourly}/hr</p>
          <p className="text-xs text-gray-500 mt-1">Living Wage (Single)</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
          <p className="text-2xl font-bold text-primary">CA${country.livingWage.single.annual.toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-1">Annual (Single)</p>
        </div>
      </div>

      {/* City grid */}
      <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">Major Canadian Cities</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
        {cities.map(city => (
          <Link key={city.id} href={`/countries/canada/${city.id}`}>
            <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-primary transition-all cursor-pointer h-full">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-gray-900 font-heading">{city.name}</h3>
                  <p className="text-gray-500 text-sm">{city.province}</p>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${city.vsNationalAvg.startsWith('+') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                  {city.vsNationalAvg}
                </span>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Living Wage</span>
                  <span className="font-semibold">CA${city.livingWage.single.hourly}/hr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Monthly Costs</span>
                  <span className="font-semibold">CA${city.costs.total.toLocaleString()}/mo</span>
                </div>
              </div>
              <p className="text-primary text-sm font-medium mt-3">View details →</p>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">City Comparison</h2>
      <CityCompareTable cities={adaptedCities as any} />
    </div>
  )
}
