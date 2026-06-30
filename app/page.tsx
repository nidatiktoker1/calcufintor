import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import CityCard from '@/components/CityCard'
import CalculatorCard from '@/components/CalculatorCard'
import { usaData } from '@/data/usa'

export const metadata: Metadata = {
  title: 'USA Financial Calculators 2026 | CALCUFINTOR',
  description: 'Free living wage, cost of living, salary comparison, tax, rent affordability and savings rate calculators for the USA, Canada, UK and Australia.',
  alternates: { canonical: 'https://calcufintor.vercel.app' },
  openGraph: {
    title: 'USA Financial Calculators 2026 | CALCUFINTOR',
    description: 'Free financial calculators for the USA, Canada, UK and Australia.',
    url: 'https://calcufintor.vercel.app',
  },
}

const CALCULATORS = [
  { title: 'Living Wage Calculator', description: 'Find the minimum hourly wage needed to cover basic living expenses in any major US city, broken down by family type.', href: '/calculators/living-wage', icon: '💰', keywords: ['living wage', 'hourly wage', 'family budget'] },
  { title: 'Cost of Living Calculator', description: 'Compare the cost of living between US cities. See how your salary stacks up when you move from one city to another.', href: '/calculators/cost-of-living', icon: '🏙️', keywords: ['cost comparison', 'city vs city', 'relocation'] },
  { title: 'Salary Comparison Tool', description: 'Calculate the salary you need in a new city to maintain your current standard of living. Plan your relocation budget.', href: '/calculators/salary-comparison', icon: '📊', keywords: ['salary', 'relocation', 'pay adjustment'] },
  { title: 'Tax Calculator', description: 'Estimate your 2026 US federal income tax, effective tax rate, and monthly take-home pay instantly.', href: '/calculators/tax-calculator', icon: '🧾', keywords: ['federal tax', 'take-home pay', 'IRS brackets'] },
  { title: 'Rent Affordability', description: 'Find out how much rent you can afford and see which US cities match your budget using the 30% rule.', href: '/calculators/rent-affordability', icon: '🏠', keywords: ['rent', 'affordability', 'housing budget'] },
  { title: 'Hourly to Salary', description: 'Convert your hourly wage to annual, monthly, weekly, and daily pay. Adjust for any hours or weeks.', href: '/calculators/hourly-to-salary', icon: '⏰', keywords: ['hourly', 'annual salary', 'wage'] },
]

const COUNTRIES = [
  { flag: '🇺🇸', name: 'United States', href: '/countries/usa', cities: 25, currency: 'USD', livingWage: '$21.57/hr' },
  { flag: '🇨🇦', name: 'Canada', href: '/countries/canada', cities: 7, currency: 'CAD', livingWage: 'CA$22.50/hr' },
  { flag: '🇬🇧', name: 'United Kingdom', href: '/countries/uk', cities: 6, currency: 'GBP', livingWage: '£13.85/hr' },
  { flag: '🇦🇺', name: 'Australia', href: '/countries/australia', cities: 6, currency: 'AUD', livingWage: 'A$27.40/hr' },
]

const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CALCUFINTOR',
  url: 'https://calcufintor.vercel.app',
  description: 'Free financial calculators for USA, Canada, UK and Australia — living wage, cost of living, salary comparison and more.',
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }} />
      <HeroSection />

      {/* Calculators */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-2">7 Free Financial Calculators</h2>
          <p className="text-gray-600">Everything you need to understand your financial picture</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CALCULATORS.map(calc => <CalculatorCard key={calc.href} {...calc} />)}
        </div>
        <div className="text-center mt-6">
          <Link href="/calculators" className="text-primary font-medium hover:underline text-sm">
            View all 7 calculators →
          </Link>
        </div>
      </section>

      {/* Countries */}
      <section className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-2">4 Countries Covered</h2>
            <p className="text-gray-600">Living wage and cost of living data for the US, Canada, UK and Australia</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {COUNTRIES.map(country => (
              <Link key={country.href} href={country.href}>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-primary transition-all cursor-pointer text-center">
                  <div className="text-5xl mb-3">{country.flag}</div>
                  <h3 className="font-bold text-gray-900 font-heading mb-1">{country.name}</h3>
                  <p className="text-xs text-gray-500 mb-3">{country.cities} cities · {country.currency}</p>
                  <p className="text-sm font-semibold text-primary">Living wage: {country.livingWage}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Top US cities */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold font-heading text-gray-900 mb-1">Top US Cities</h3>
            <p className="text-gray-600 text-sm">25 cities with full cost of living data</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
            {usaData.cities.slice(0, 5).map(city => <CityCard key={city.id} city={city} />)}
          </div>
          <div className="text-center">
            <Link href="/countries/usa" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm">
              View all 25 US cities →
            </Link>
          </div>
        </div>
      </section>

      {/* SEO content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold font-heading text-gray-900 mb-6">About CALCUFINTOR</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            CALCUFINTOR provides free, data-driven financial calculators for 44 cities across the USA,
            Canada, UK, and Australia. Whether you&apos;re planning a relocation, negotiating a salary,
            or understanding how much you need to earn, our tools give you accurate insights fast.
          </p>
          <p>
            The US federal minimum wage is ${usaData.country.minWage}/hour, but the true living wage
            varies dramatically by city — from $17.60/hour in Memphis to $43.20/hour in San Francisco.
            Our calculators help you understand what wages really mean in the real world.
          </p>
          <p>
            All calculators are free, require no sign-up, and are updated regularly with the latest data.
          </p>
        </div>
      </section>
    </>
  )
}
