import type { Metadata } from 'next'
import SalaryCalc from '@/components/SalaryCalc'
import CityCompareTable from '@/components/CityCompareTable'
import Breadcrumb from '@/components/Breadcrumb'
import { usaData } from '@/data/usa'

export const metadata: Metadata = {
  title: 'Salary Comparison Tool USA 2026 | CALCUFINTOR',
  description: 'Find out what salary you need in any US city to maintain your lifestyle. Compare pay between New York, Los Angeles, Chicago, Houston, and Phoenix.',
  alternates: { canonical: 'https://calcufintor.vercel.app/calculators/salary-comparison' },
  openGraph: {
    title: 'Salary Comparison Tool USA 2026 | CALCUFINTOR',
    url: 'https://calcufintor.vercel.app/calculators/salary-comparison',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Salary Comparison Tool USA',
  url: 'https://calcufintor.vercel.app/calculators/salary-comparison',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  description: 'Compare equivalent salaries across major US cities',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function SalaryComparisonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Calculators', href: '/calculators' },
          { label: 'Salary Comparison' },
        ]} />
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-3">
          Salary Comparison Tool USA 2026
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Planning a move? Find out exactly what salary you need in your destination city to maintain
          your current standard of living.
        </p>

        <div className="mb-10">
          <SalaryCalc />
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">
            City-by-City Cost Comparison
          </h2>
          <CityCompareTable cities={usaData.cities} />
        </div>

        <div className="text-gray-700">
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-3">About Salary Comparison</h2>
          <p className="mb-3">
            Moving from a low-cost city to a high-cost city without a pay raise is effectively a pay cut.
            Use this tool when negotiating a relocation package or evaluating a job offer in a new city.
          </p>
          <p>
            For example: a $75,000 salary in Chicago is equivalent to roughly $131,000 in New York City —
            a difference of over $56,000 per year. This tool helps make those numbers visible before you move.
          </p>
        </div>
      </div>
    </>
  )
}
