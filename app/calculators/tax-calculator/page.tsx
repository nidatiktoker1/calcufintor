import type { Metadata } from 'next'
import TaxCalc from '@/components/TaxCalc'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Federal Income Tax Calculator USA 2026 | CALCUFINTOR',
  description: 'Calculate your 2026 US federal income tax, effective tax rate, and take-home pay. Based on official IRS 2026 tax brackets for single filers.',
  alternates: { canonical: 'https://calcufintor.vercel.app/calculators/tax-calculator' },
  openGraph: {
    title: 'Federal Income Tax Calculator USA 2026 | CALCUFINTOR',
    url: 'https://calcufintor.vercel.app/calculators/tax-calculator',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Federal Income Tax Calculator USA 2026',
  url: 'https://calcufintor.vercel.app/calculators/tax-calculator',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

const TAX_BRACKETS = [
  { rate: '10%', single: '$0 – $11,600' },
  { rate: '12%', single: '$11,600 – $47,150' },
  { rate: '22%', single: '$47,150 – $100,525' },
  { rate: '24%', single: '$100,525 – $191,950' },
  { rate: '32%', single: '$191,950 – $243,725' },
  { rate: '35%', single: '$243,725 – $609,350' },
  { rate: '37%', single: 'Over $609,350' },
]

export default function TaxCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Calculators', href: '/calculators' },
          { label: 'Tax Calculator' },
        ]} />
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-3">
          Federal Income Tax Calculator USA 2026
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Estimate your 2026 US federal income tax, effective tax rate, and monthly take-home pay.
          Includes Social Security and Medicare (FICA) taxes.
        </p>

        <div className="mb-10">
          <TaxCalc />
        </div>

        {/* Tax bracket table */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">2026 Federal Tax Brackets (Single Filers)</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-4 py-3">Tax Rate</th>
                  <th className="text-left px-4 py-3">Taxable Income Range (Single)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {TAX_BRACKETS.map((b, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-semibold text-primary">{b.rate}</td>
                    <td className="px-4 py-3 text-gray-700">{b.single}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-gray-700">
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-3">How Federal Tax Is Calculated</h2>
          <p className="mb-3">
            The US uses a progressive tax system — you only pay each rate on the income within that bracket.
            For example, if you earn $60,000, you pay 10% on the first $11,600, 12% on income between $11,600–$47,150,
            and 22% only on income above $47,150.
          </p>
          <p>
            This calculator also includes FICA taxes: 6.2% Social Security (up to $168,600) and 1.45% Medicare on all wages.
            State and local taxes vary by location and are not included here.
          </p>
        </div>
      </div>
    </>
  )
}
