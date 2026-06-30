import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { ukData } from '@/data/uk'

export const metadata: Metadata = {
  title: 'Living Wage in UK 2026 | CALCUFINTOR',
  description: `UK national living wage is £${ukData.country.livingWage.single.hourly}/hr. Compare wages and cost of living across London, Manchester, Birmingham, Edinburgh and more.`,
  alternates: { canonical: 'https://calcufintor.vercel.app/countries/uk' },
  openGraph: { title: 'Living Wage in UK 2026 | CALCUFINTOR', url: 'https://calcufintor.vercel.app/countries/uk' },
}

export default function UKPage() {
  const { country, cities } = ukData
  const year = new Date().getFullYear()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'United Kingdom' }]} />

      <div className="flex items-center gap-3 mb-2">
        <span className="text-4xl">🇬🇧</span>
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900">
          Living Wage in UK {year}
        </h1>
      </div>
      <p className="text-gray-600 mb-8 max-w-2xl">All figures in British Pounds (GBP). Healthcare costs are £0 due to NHS coverage.</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'National Min. Wage', value: `£${country.minWage}/hr` },
          { label: 'Average Wage', value: `£${country.avgWage}/hr` },
          { label: 'Living Wage (Single)', value: `£${country.livingWage.single.hourly}/hr` },
          { label: 'Annual (Single)', value: `£${country.livingWage.single.annual.toLocaleString()}` },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white border border-gray-200 rounded-xl p-5 text-center">
            <p className="text-2xl font-bold text-primary">{value}</p>
            <p className="text-xs text-gray-500 mt-1">{label}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">Major UK Cities</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {cities.map(city => (
          <Link key={city.id} href={`/countries/uk/${city.id}`}>
            <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-primary transition-all cursor-pointer h-full">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-gray-900 font-heading">{city.name}</h3>
                  <p className="text-gray-500 text-sm">{city.region}</p>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${city.vsNationalAvg.startsWith('+') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                  {city.vsNationalAvg}
                </span>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Living Wage</span>
                  <span className="font-semibold">£{city.livingWage.single.hourly}/hr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">1BR Rent</span>
                  <span className="font-semibold">£{city.costs.rent1br.toLocaleString()}/mo</span>
                </div>
              </div>
              <p className="text-primary text-sm font-medium mt-3">View details →</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Comparison table */}
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-primary text-white">
            <tr>
              <th className="text-left px-4 py-3">City</th>
              <th className="text-right px-4 py-3">Living Wage/hr</th>
              <th className="text-right px-4 py-3 hidden sm:table-cell">1BR Rent</th>
              <th className="text-right px-4 py-3">vs Avg</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {cities.map((city, i) => (
              <tr key={city.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3">
                  <Link href={`/countries/uk/${city.id}`} className="font-medium text-primary hover:underline">{city.name}</Link>
                  <span className="text-gray-500 text-xs ml-1">{city.region}</span>
                </td>
                <td className="text-right px-4 py-3 font-semibold">£{city.livingWage.single.hourly}/hr</td>
                <td className="text-right px-4 py-3 hidden sm:table-cell">£{city.costs.rent1br.toLocaleString()}/mo</td>
                <td className={`text-right px-4 py-3 font-semibold ${city.vsNationalAvg.startsWith('+') ? 'text-red-600' : 'text-green-600'}`}>{city.vsNationalAvg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
