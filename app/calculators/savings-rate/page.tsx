import type { Metadata } from 'next'
import SavingsRateCalc from '@/components/SavingsRateCalc'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Savings Rate Calculator 2026 | CALCUFINTOR',
  description: 'Calculate your personal savings rate, monthly savings, and estimated years to retirement. See how your savings rate compares to financial benchmarks.',
  alternates: { canonical: 'https://calcufintor.vercel.app/calculators/savings-rate' },
  openGraph: {
    title: 'Savings Rate Calculator 2026 | CALCUFINTOR',
    url: 'https://calcufintor.vercel.app/calculators/savings-rate',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Savings Rate Calculator',
  url: 'https://calcufintor.vercel.app/calculators/savings-rate',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

const BENCHMARKS = [
  { rate: '10%', label: 'Minimum recommended', description: 'Better than nothing, but retire at 65+' },
  { rate: '15%', label: 'Traditional advice', description: 'Common 401(k) contribution target' },
  { rate: '20%', label: '50/30/20 rule', description: 'Standard personal finance guideline' },
  { rate: '30%', label: 'Strong saver', description: 'Retire 5–10 years earlier than average' },
  { rate: '50%+', label: 'FIRE movement', description: 'Financial Independence, Retire Early (age 35–45)' },
]

export default function SavingsRatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Calculators', href: '/calculators' },
          { label: 'Savings Rate' },
        ]} />
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-3">
          Savings Rate Calculator 2026
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Find out what percentage of your income you&apos;re saving and how many years until you can retire.
          The single most powerful number in personal finance.
        </p>

        <div className="mb-10">
          <SavingsRateCalc />
        </div>

        {/* Benchmarks table */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">Savings Rate Benchmarks</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-4 py-3">Savings Rate</th>
                  <th className="text-left px-4 py-3">Label</th>
                  <th className="text-left px-4 py-3 hidden sm:table-cell">What It Means</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {BENCHMARKS.map((b, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-bold text-primary">{b.rate}</td>
                    <td className="px-4 py-3 font-semibold text-gray-800">{b.label}</td>
                    <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{b.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-gray-700 space-y-3">
          <h2 className="text-2xl font-bold font-heading text-gray-900">Why Your Savings Rate Matters More Than Income</h2>
          <p>
            A person earning $50,000 and saving 40% will retire far earlier than someone earning $150,000
            and saving 5%. Your savings rate — not your income — determines your financial timeline.
          </p>
          <p>
            The 25x rule (from the FIRE movement) states you need 25 times your annual expenses invested
            to retire safely. If you spend $40,000/year, you need $1,000,000 saved. At a 50% savings
            rate, you can reach this in roughly 17 years from zero.
          </p>
          <p>
            Use this calculator alongside our{' '}
            <a href="/calculators/cost-of-living" className="text-primary hover:underline">Cost of Living Calculator</a>{' '}
            to find cities where your money goes further — a key lever for increasing your savings rate.
          </p>
        </div>
      </div>
    </>
  )
}
