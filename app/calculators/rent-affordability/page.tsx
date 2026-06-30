import type { Metadata } from 'next'
import RentAffordabilityCalc from '@/components/RentAffordabilityCalc'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Rent Affordability Calculator USA 2026 | CALCUFINTOR',
  description: 'Find out how much rent you can afford in any US city. Based on the 30% rule and 50/30/20 budget method. Compare affordability across 25 US cities.',
  alternates: { canonical: 'https://calcufintor.vercel.app/calculators/rent-affordability' },
  openGraph: {
    title: 'Rent Affordability Calculator USA 2026 | CALCUFINTOR',
    url: 'https://calcufintor.vercel.app/calculators/rent-affordability',
  },
}

export default function RentAffordabilityPage() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Calculators', href: '/calculators' },
          { label: 'Rent Affordability' },
        ]} />
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-3">
          Rent Affordability Calculator USA 2026
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl">
          How much rent can you afford? Enter your income and instantly see which US cities fit your budget
          based on the widely-used 30% rule.
        </p>

        <div className="mb-10">
          <RentAffordabilityCalc />
        </div>

        <div className="text-gray-700">
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-3">The 30% Rule Explained</h2>
          <p className="mb-3">
            The 30% rule says you should spend no more than 30% of your gross monthly income on rent.
            So if you earn $60,000/year ($5,000/month), your maximum rent should be $1,500/month.
          </p>
          <p className="mb-3">
            The 50/30/20 budget rule is an alternative: spend 50% of take-home on needs (rent + bills + food),
            30% on wants, and 20% on savings. In high-cost cities like San Francisco or New York, even the
            50% allocation may not cover rent alone.
          </p>
          <p>
            Many financial advisors now recommend the 25% rule in high-cost cities to leave more room
            for savings, emergencies, and other living costs.
          </p>
        </div>
      </div>
    </>
  )
}
