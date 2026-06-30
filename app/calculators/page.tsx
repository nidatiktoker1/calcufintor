import type { Metadata } from 'next'
import CalculatorCard from '@/components/CalculatorCard'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Financial Calculators USA 2026 | CALCUFINTOR',
  description: 'Free USA financial calculators: living wage, cost of living, salary comparison, tax, rent affordability, hourly to salary, and savings rate tools.',
  alternates: { canonical: 'https://calcufintor.vercel.app/calculators' },
  openGraph: { title: 'Financial Calculators USA 2026 | CALCUFINTOR', url: 'https://calcufintor.vercel.app/calculators' },
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
    description: 'Compare the cost of living between major US cities. Find out how much more or less you need in a new city.',
    href: '/calculators/cost-of-living',
    icon: '🏙️',
    keywords: ['cost comparison', 'relocation', 'city budget'],
  },
  {
    title: 'Salary Comparison Tool',
    description: 'Calculate the equivalent salary you need in any US city to maintain your current standard of living.',
    href: '/calculators/salary-comparison',
    icon: '📊',
    keywords: ['salary', 'pay', 'compensation'],
  },
  {
    title: 'Tax Calculator',
    description: 'Estimate your 2026 federal income tax, effective tax rate, take-home pay, and FICA taxes in seconds.',
    href: '/calculators/tax-calculator',
    icon: '🧾',
    keywords: ['income tax', 'federal tax', 'take-home pay'],
  },
  {
    title: 'Rent Affordability Calculator',
    description: 'Find out how much rent you can afford in any US city based on the 30% rule. See which cities fit your budget.',
    href: '/calculators/rent-affordability',
    icon: '🏠',
    keywords: ['rent', 'affordability', '30% rule'],
  },
  {
    title: 'Hourly to Salary',
    description: 'Convert any hourly wage to annual, monthly, weekly, and daily pay. Adjust hours per week and weeks per year.',
    href: '/calculators/hourly-to-salary',
    icon: '⏰',
    keywords: ['hourly rate', 'annual salary', 'wage conversion'],
  },
  {
    title: 'Savings Rate Calculator',
    description: 'Calculate your savings rate, monthly savings, and estimated years to retirement using the 4% rule.',
    href: '/calculators/savings-rate',
    icon: '📈',
    keywords: ['savings rate', 'FIRE', 'retirement'],
  },
]

export default function CalculatorsPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Calculators' }]} />
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-3">
          USA Financial Calculators 2026
        </h1>
        <p className="text-gray-600 mb-10 max-w-2xl">
          {CALCULATORS.length} free tools for understanding living costs, comparing cities, planning salaries, and building wealth.
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
