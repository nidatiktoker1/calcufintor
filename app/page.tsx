import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import CityCard from '@/components/CityCard'
import CalculatorCard from '@/components/CalculatorCard'
import { usaData } from '@/data/usa'

export const metadata: Metadata = {
  title: 'USA Financial Calculators 2026 | CALCUFINTOR',
  description: 'Free living wage, cost of living, and salary comparison calculators for New York, Los Angeles, Chicago, Houston, and Phoenix.',
  alternates: { canonical: 'https://calcufintor.vercel.app' },
  openGraph: {
    title: 'USA Financial Calculators 2026 | CALCUFINTOR',
    description: 'Calculate living wages, cost of living, and salary comparisons for major US cities.',
    url: 'https://calcufintor.vercel.app',
  },
}

const CALCULATORS = [
  {
    title: 'Living Wage Calculator',
    description: 'Find the minimum hourly wage needed to cover basic living expenses in any major US city, broken down by family type.',
    href: '/calculators/living-wage',
    icon: '💰',
    keywords: ['living wage', 'hourly wage', 'family budget'],
  },
  {
    title: 'Cost of Living Calculator',
    description: 'Compare the cost of living between US cities. See how your salary stacks up when you move from one city to another.',
    href: '/calculators/cost-of-living',
    icon: '🏙️',
    keywords: ['cost comparison', 'city vs city', 'relocation'],
  },
  {
    title: 'Salary Comparison Tool',
    description: 'Calculate the salary you need in a new city to maintain your current standard of living. Plan your relocation budget.',
    href: '/calculators/salary-comparison',
    icon: '📊',
    keywords: ['salary', 'relocation', 'pay adjustment'],
  },
]

const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CALCUFINTOR',
  url: 'https://calcufintor.vercel.app',
  description: 'USA Financial Calculators — living wage, cost of living, salary comparison',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://calcufintor.vercel.app/calculators?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <HeroSection />

      {/* Calculators section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-2">Financial Calculators</h2>
          <p className="text-gray-600">Free tools to plan your financial future in any US city</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CALCULATORS.map(calc => (
            <CalculatorCard key={calc.href} {...calc} />
          ))}
        </div>
      </section>

      {/* Cities section */}
      <section className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-2">Major US Cities</h2>
            <p className="text-gray-600">Explore cost of living data for top US cities</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {usaData.cities.map(city => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / SEO content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold font-heading text-gray-900 mb-6">
          About USA Financial Calculators
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            CALCUFINTOR provides free, data-driven financial calculators for major US cities. Whether
            you&apos;re planning a relocation, negotiating a salary, or budgeting for your family, our
            tools give you accurate insights based on real cost-of-living data.
          </p>
          <p>
            The federal minimum wage is currently ${usaData.country.minWage}/hour, but the true living wage
            varies dramatically by city. In New York City, a single adult needs over $36/hour to cover
            basic expenses — nearly 5x the federal minimum.
          </p>
          <p>
            Our calculators cover {usaData.cities.length} major US cities and are updated regularly
            with current data on rent, groceries, transportation, healthcare, and childcare costs.
          </p>
        </div>
      </section>
    </>
  )
}
