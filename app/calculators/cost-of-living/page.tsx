import type { Metadata } from 'next'
import CostOfLivingCalc from '@/components/CostOfLivingCalc'
import CityCompareTable from '@/components/CityCompareTable'
import Breadcrumb from '@/components/Breadcrumb'
import { usaData } from '@/data/usa'

export const metadata: Metadata = {
  title: 'Cost of Living Calculator USA 2026 | CALCUFINTOR',
  description: 'Compare cost of living between US cities. Find out how your salary adjusts when moving from New York, LA, Chicago, Houston, or Phoenix.',
  alternates: { canonical: 'https://calcufintor.vercel.app/calculators/cost-of-living' },
  openGraph: {
    title: 'Cost of Living Calculator USA 2026 | CALCUFINTOR',
    url: 'https://calcufintor.vercel.app/calculators/cost-of-living',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Cost of Living Calculator USA',
  url: 'https://calcufintor.vercel.app/calculators/cost-of-living',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  description: 'Compare cost of living between major US cities',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function CostOfLivingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Calculators', href: '/calculators' },
          { label: 'Cost of Living' },
        ]} />
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-3">
          Cost of Living Calculator USA 2026
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Compare the cost of living between major US cities. Enter your current salary to see how much you&apos;d
          need to maintain the same lifestyle in a new city.
        </p>

        <div className="mb-10">
          <CostOfLivingCalc />
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">
            City Cost Index Comparison
          </h2>
          <CityCompareTable cities={usaData.cities} />
        </div>

        <div className="text-gray-700">
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-3">How Cost of Living Is Calculated</h2>
          <p className="mb-3">
            Our cost of living index uses 100 as the national average. A city with an index of 187 (like New
            York City) costs 87% more than the national average, while Houston at 96 costs 4% less.
          </p>
          <p>
            The formula to compare cities is: <code className="bg-gray-100 px-1 rounded text-sm">
            Equivalent Salary = Current Salary × (Target City Index ÷ Current City Index)
            </code>
          </p>
        </div>
      </div>
    </>
  )
}
