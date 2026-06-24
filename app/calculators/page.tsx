import type { Metadata } from 'next'
import CalculatorCard from '@/components/CalculatorCard'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Financial Calculators USA 2026 | CALCUFINTOR',
  description: 'Free USA financial calculators: living wage, cost of living comparison, and salary tools. Data for New York, LA, Chicago, Houston, Phoenix.',
  alternates: { canonical: 'https://calcufintor.vercel.app/calculators' },
  openGraph: {
    title: 'Financial Calculators USA 2026 | CALCUFINTOR',
    url: 'https://calcufintor.vercel.app/calculators',
  },
}

const CALCULATORS = [
  {
    title: 'Living Wage Calculator',
    description: 'Find the minimum hourly wage needed to cover basic living expenses for different family types in major US cities.',
    href: '/calculators/living-wage',
    icon: '💰',
    keywords: ['living wage', 'hourly wage', 'basic needs'],
  },
  {
    title: 'Cost of Living Calculator',
    description: 'Compare the cost of living between major US cities. Find out how much more (or less) you need in a new city.',
    href: '/calculators/cost-of-living',
    icon: '🏙️',
    keywords: ['cost comparison', 'relocation', 'city budget'],
  },
  {
    title: 'Salary Comparison Tool',
    description: 'Calculate the equivalent salary you need in any US city to maintain your current standard of living.',
    href: '/calculators/salary-comparison',
    icon: '📊',
    keywords: ['salary', 'pay', 'compensation adjustment'],
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'USA Financial Calculators',
  url: 'https://calcufintor.vercel.app/calculators',
  description: 'Living wage, cost of living, and salary comparison calculators for US cities',
}

export default function CalculatorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Calculators' },
        ]} />
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-3">
          USA Financial Calculators
        </h1>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Free tools for understanding living costs, comparing cities, and planning your salary in the United States.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CALCULATORS.map(calc => (
            <CalculatorCard key={calc.href} {...calc} />
          ))}
        </div>
      </div>
    </>
  )
}
