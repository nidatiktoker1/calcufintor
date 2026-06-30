import type { Metadata } from 'next'
import HourlyToSalaryCalc from '@/components/HourlyToSalaryCalc'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Hourly to Salary Calculator 2026 | CALCUFINTOR',
  description: 'Convert your hourly wage to annual salary instantly. See daily, weekly, biweekly, monthly and yearly pay. Works for any hours per week or weeks per year.',
  alternates: { canonical: 'https://calcufintor.vercel.app/calculators/hourly-to-salary' },
  openGraph: {
    title: 'Hourly to Salary Calculator 2026 | CALCUFINTOR',
    url: 'https://calcufintor.vercel.app/calculators/hourly-to-salary',
  },
}

const COMMON_WAGES = [
  { hourly: 7.25, label: 'Federal Minimum Wage', annual: 15080 },
  { hourly: 15.00, label: '$15 Minimum Wage', annual: 31200 },
  { hourly: 21.57, label: 'US Living Wage (avg)', annual: 44866 },
  { hourly: 25.00, label: '$25/hr', annual: 52000 },
  { hourly: 36.12, label: 'NYC Living Wage', annual: 75120 },
  { hourly: 50.00, label: '$50/hr', annual: 104000 },
]

export default function HourlyToSalaryPage() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Calculators', href: '/calculators' },
          { label: 'Hourly to Salary' },
        ]} />
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-3">
          Hourly to Annual Salary Calculator 2026
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Convert your hourly wage to annual, monthly, weekly, bi-weekly, and daily pay.
          Adjust hours per week and weeks per year for accurate results.
        </p>

        <div className="mb-10">
          <HourlyToSalaryCalc />
        </div>

        {/* Quick reference table */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">Common Wage Reference (40 hrs/week)</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-4 py-3">Wage</th>
                  <th className="text-right px-4 py-3">Hourly</th>
                  <th className="text-right px-4 py-3">Monthly</th>
                  <th className="text-right px-4 py-3">Annual</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {COMMON_WAGES.map((w, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-gray-700">{w.label}</td>
                    <td className="text-right px-4 py-3 font-semibold">${w.hourly.toFixed(2)}</td>
                    <td className="text-right px-4 py-3">${Math.round(w.annual / 12).toLocaleString()}</td>
                    <td className="text-right px-4 py-3 font-bold text-primary">${w.annual.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-gray-700">
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-3">How to Convert Hourly to Annual Salary</h2>
          <p className="mb-3">
            The standard formula assumes 40 hours/week and 52 weeks/year = 2,080 working hours per year.
            Multiply your hourly rate by 2,080 to get your annual salary.
          </p>
          <p>
            For part-time workers or those with paid time off, adjust the hours per week or weeks per year
            in the calculator above for an accurate figure.
          </p>
        </div>
      </div>
    </>
  )
}
