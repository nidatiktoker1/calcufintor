import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/components/Breadcrumb'
import CostBreakdown from '@/components/CostBreakdown'
import { australiaData } from '@/data/australia'

interface Props { params: { city: string } }

export async function generateStaticParams() {
  return australiaData.cities.map(c => ({ city: c.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = australiaData.cities.find(c => c.id === params.city)
  if (!city) return {}
  const year = new Date().getFullYear()
  return {
    title: `Cost of Living in ${city.name} ${year} | CALCUFINTOR`,
    description: `Living wage in ${city.name} is A$${city.livingWage.single.hourly}/hr (A$${city.livingWage.single.annual.toLocaleString()}/year). See rent, transport, and groceries breakdown.`,
    alternates: { canonical: `https://calcufintor.vercel.app/countries/australia/${city.id}` },
    openGraph: { url: `https://calcufintor.vercel.app/countries/australia/${city.id}` },
  }
}

export default function AustraliaCityPage({ params }: Props) {
  const city = australiaData.cities.find(c => c.id === params.city)
  if (!city) notFound()
  const year = new Date().getFullYear()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'City', name: city.name,
        url: `https://calcufintor.vercel.app/countries/australia/${city.id}`,
        containedInPlace: { '@type': 'Country', name: 'Australia' },
      }) }} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Australia', href: '/countries/australia' },
          { label: city.name },
        ]} />

        <div className="flex items-center gap-3 mb-1">
          <span className="text-3xl">🇦🇺</span>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900">
            Cost of Living in {city.name} {year}
          </h1>
        </div>
        <p className="text-gray-500 mb-6">{city.name}, {city.state} · Population {city.population.toLocaleString()}</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Living Wage (Single)', value: `A$${city.livingWage.single.hourly}/hr` },
            { label: 'Annual Need', value: `A$${city.livingWage.single.annual.toLocaleString()}` },
            { label: '1BR Rent', value: `A$${city.costs.rent1br.toLocaleString()}/mo` },
            { label: 'Cost Index', value: String(city.costIndex) },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-primary">{value}</p>
              <p className="text-xs text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          <CostBreakdown costs={city.costs} cityName={`${city.name} (AUD)`} />
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-primary px-5 py-4">
              <h2 className="font-bold text-white font-heading">Living Wage by Family Type</h2>
              <p className="text-blue-100 text-sm">{city.name} — all figures in A$</p>
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
                    <span className="text-gray-700 font-medium">{label}</span>
                    <span className="font-semibold text-center">A${w.hourly}/hr</span>
                    <span className="font-semibold text-center">A${w.monthly.toLocaleString()}/mo</span>
                    <span className="font-semibold text-center">A${w.annual.toLocaleString()}/yr</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="text-gray-700">
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-3">Is {city.name} Affordable?</h2>
          <p>
            With a cost index of {city.costIndex} (Australia avg = 100), {city.name} is {city.vsNationalAvg} the national average.
            A single adult needs A${city.livingWage.single.hourly}/hour minimum. Average 1BR rent is A${city.costs.rent1br.toLocaleString()}/month.
          </p>
        </div>
      </div>
    </>
  )
}
