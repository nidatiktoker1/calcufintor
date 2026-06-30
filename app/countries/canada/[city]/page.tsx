import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/components/Breadcrumb'
import CostBreakdown from '@/components/CostBreakdown'
import { canadaData } from '@/data/canada'
import { formatCurrency } from '@/lib/calculations'

interface Props { params: { city: string } }

export async function generateStaticParams() {
  return canadaData.cities.map(c => ({ city: c.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = canadaData.cities.find(c => c.id === params.city)
  if (!city) return {}
  const year = new Date().getFullYear()
  return {
    title: `Cost of Living in ${city.name} ${year} | CALCUFINTOR`,
    description: `Living wage in ${city.name} is CA$${city.livingWage.single.hourly}/hr (CA$${city.livingWage.single.annual.toLocaleString()}/year). See full cost breakdown for rent, food, and transport.`,
    alternates: { canonical: `https://calcufintor.vercel.app/countries/canada/${city.id}` },
    openGraph: { url: `https://calcufintor.vercel.app/countries/canada/${city.id}` },
  }
}

export default function CanadaCityPage({ params }: Props) {
  const city = canadaData.cities.find(c => c.id === params.city)
  if (!city) notFound()
  const year = new Date().getFullYear()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'City',
    name: city.name,
    url: `https://calcufintor.vercel.app/countries/canada/${city.id}`,
    containedInPlace: { '@type': 'Country', name: 'Canada' },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://calcufintor.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'Canada', item: 'https://calcufintor.vercel.app/countries/canada' },
      { '@type': 'ListItem', position: 3, name: city.name, item: `https://calcufintor.vercel.app/countries/canada/${city.id}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Canada', href: '/countries/canada' },
          { label: city.name },
        ]} />

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🇨🇦</span>
              <h1 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900">
                Cost of Living in {city.name} {year}
              </h1>
            </div>
            <p className="text-gray-500">{city.name}, {city.province} · Population {city.population.toLocaleString()}</p>
          </div>
          <span className={`inline-flex px-4 py-2 rounded-full text-sm font-bold ${city.vsNationalAvg.startsWith('+') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
            {city.vsNationalAvg} vs national avg
          </span>
        </div>

        {/* Key stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Living Wage (Single)', value: `CA$${city.livingWage.single.hourly}/hr` },
            { label: 'Annual Need', value: `CA$${city.livingWage.single.annual.toLocaleString()}` },
            { label: '1BR Rent', value: `CA$${city.costs.rent1br.toLocaleString()}/mo` },
            { label: 'Cost Index', value: String(city.costIndex) },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-primary">{value}</p>
              <p className="text-xs text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          <CostBreakdown costs={city.costs} cityName={`${city.name} (CAD)`} />

          {/* Living wage table */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-primary px-5 py-4">
              <h2 className="font-bold text-white font-heading">Living Wage by Family Type</h2>
              <p className="text-blue-100 text-sm">{city.name} — all figures in CA$</p>
            </div>
            <div className="divide-y divide-gray-100">
              {[
                { key: 'single', label: 'Single Adult' },
                { key: 'coupleOneWorker', label: 'Couple (1 Working)' },
                { key: 'singleParent1Child', label: 'Single Parent, 1 Child' },
              ].map(({ key, label }) => {
                const w = city.livingWage[key as keyof typeof city.livingWage]
                return (
                  <div key={key} className="grid grid-cols-4 px-5 py-3 text-sm">
                    <span className="text-gray-700 font-medium col-span-1">{label}</span>
                    <span className="font-semibold text-center">CA${w.hourly}/hr</span>
                    <span className="font-semibold text-center">CA${w.monthly.toLocaleString()}/mo</span>
                    <span className="font-semibold text-center">CA${w.annual.toLocaleString()}/yr</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="text-gray-700">
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-3">Is {city.name} Affordable?</h2>
          <p className="mb-3">
            With a cost index of {city.costIndex} (Canada avg = 100), {city.name} is {city.vsNationalAvg} compared to the national average.
            A single adult needs at least CA${city.livingWage.single.hourly}/hour to cover basic expenses.
          </p>
          <p>
            The average 1-bedroom apartment rents for CA${city.costs.rent1br.toLocaleString()}/month.
            Total estimated monthly costs come to approximately CA${city.costs.total.toLocaleString()}/month.
          </p>
        </div>
      </div>
    </>
  )
}
