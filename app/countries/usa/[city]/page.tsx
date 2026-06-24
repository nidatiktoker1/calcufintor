import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/components/Breadcrumb'
import CostBreakdown from '@/components/CostBreakdown'
import LivingWageCalc from '@/components/LivingWageCalc'
import { usaData } from '@/data/usa'
import { generateCityTitle, generateCityDescription } from '@/lib/utils'
import { formatCurrency } from '@/lib/calculations'

interface CityPageProps {
  params: { city: string }
}

export async function generateStaticParams() {
  return usaData.cities.map(city => ({ city: city.id }))
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const city = usaData.cities.find(c => c.id === params.city)
  if (!city) return {}
  return {
    title: generateCityTitle(city.name),
    description: generateCityDescription(city),
    alternates: { canonical: `https://calcufintor.vercel.app/countries/usa/${city.id}` },
    openGraph: {
      title: generateCityTitle(city.name),
      description: generateCityDescription(city),
      url: `https://calcufintor.vercel.app/countries/usa/${city.id}`,
    },
  }
}

export default function CityPage({ params }: CityPageProps) {
  const city = usaData.cities.find(c => c.id === params.city)
  if (!city) notFound()

  const year = new Date().getFullYear()

  const citySchema = {
    '@context': 'https://schema.org',
    '@type': 'City',
    name: city.name,
    url: `https://calcufintor.vercel.app/countries/usa/${city.id}`,
    description: generateCityDescription(city),
    containedInPlace: {
      '@type': 'Country',
      name: 'United States',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://calcufintor.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'USA', item: 'https://calcufintor.vercel.app/countries/usa' },
      { '@type': 'ListItem', position: 3, name: city.name, item: `https://calcufintor.vercel.app/countries/usa/${city.id}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'USA', href: '/countries/usa' },
          { label: city.name },
        ]} />

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-1">
              Cost of Living in {city.name} {year}
            </h1>
            <p className="text-gray-500">{city.name}, {city.state} · Population {city.population.toLocaleString()}</p>
          </div>
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${
            city.vsNationalAvg.startsWith('+') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
          }`}>
            {city.vsNationalAvg} vs national avg
          </div>
        </div>

        {/* Key stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <p className="text-xl font-bold text-primary">${city.livingWage.single.hourly}/hr</p>
            <p className="text-xs text-gray-500 mt-1">Living Wage (Single)</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <p className="text-xl font-bold text-primary">{formatCurrency(city.livingWage.single.annual)}</p>
            <p className="text-xs text-gray-500 mt-1">Annual Need</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <p className="text-xl font-bold text-primary">{formatCurrency(city.costs.rent1br)}/mo</p>
            <p className="text-xs text-gray-500 mt-1">1BR Rent</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <p className="text-xl font-bold text-primary">{city.costIndex}</p>
            <p className="text-xs text-gray-500 mt-1">Cost Index (US avg=100)</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Cost breakdown */}
          <CostBreakdown costs={city.costs} cityName={city.name} />

          {/* Living wage calculator pre-set to this city */}
          <div>
            <h2 className="text-xl font-bold font-heading text-gray-900 mb-4">
              Living Wage Calculator
            </h2>
            <LivingWageCalc />
          </div>
        </div>

        {/* Living wage by family type */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-10">
          <div className="bg-primary px-5 py-4">
            <h2 className="font-bold text-white font-heading">Living Wage by Family Type — {city.name}</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              { key: 'single', label: 'Single Adult' },
              { key: 'coupleOneWorker', label: 'Couple (1 Working)' },
              { key: 'singleParent1Child', label: 'Single Parent, 1 Child' },
            ].map(({ key, label }) => {
              const wages = city.livingWage[key as keyof typeof city.livingWage]
              return (
                <div key={key} className="grid grid-cols-4 px-5 py-3 text-sm">
                  <span className="text-gray-700 font-medium">{label}</span>
                  <span className="text-gray-900 font-semibold text-center">${wages.hourly}/hr</span>
                  <span className="text-gray-900 font-semibold text-center">{formatCurrency(wages.monthly)}/mo</span>
                  <span className="text-gray-900 font-semibold text-center">{formatCurrency(wages.annual)}/yr</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* SEO content */}
        <div className="text-gray-700">
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-3">
            Is {city.name} Affordable?
          </h2>
          <p className="mb-3">
            With a cost index of {city.costIndex} (where 100 = US average), {city.name} is{' '}
            {city.vsNationalAvg} more expensive than the national average. A single adult needs to earn
            at least ${city.livingWage.single.hourly}/hour (${city.livingWage.single.annual.toLocaleString()}/year)
            to cover basic living expenses.
          </p>
          <p>
            The average 1-bedroom apartment in {city.name} rents for {formatCurrency(city.costs.rent1br)}/month,
            and total estimated monthly expenses (excluding 2BR rent and childcare) come to approximately{' '}
            {formatCurrency(city.costs.total)}/month.
          </p>
        </div>
      </div>
    </>
  )
}
