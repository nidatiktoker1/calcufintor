import Link from 'next/link'
import { usaData } from '@/data/usa'

const CALCULATORS = [
  { label: 'Living Wage', href: '/calculators/living-wage' },
  { label: 'Cost of Living', href: '/calculators/cost-of-living' },
  { label: 'Salary Comparison', href: '/calculators/salary-comparison' },
  { label: 'Tax Calculator', href: '/calculators/tax-calculator' },
  { label: 'Rent Affordability', href: '/calculators/rent-affordability' },
  { label: 'Hourly to Salary', href: '/calculators/hourly-to-salary' },
  { label: 'Savings Rate', href: '/calculators/savings-rate' },
]

const COUNTRIES = [
  { label: '🇺🇸 United States', href: '/countries/usa' },
  { label: '🇨🇦 Canada', href: '/countries/canada' },
  { label: '🇬🇧 United Kingdom', href: '/countries/uk' },
  { label: '🇦🇺 Australia', href: '/countries/australia' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold font-heading text-primary mb-2">CALCUFINTOR</h3>
            <p className="text-gray-400 text-sm mb-3">Calculate Your Financial Future, Everywhere</p>
            <p className="text-gray-500 text-xs">
              Free financial calculators for USA, Canada, UK, and Australia.
            </p>
          </div>

          {/* Calculators */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-3">Calculators</h4>
            <ul className="space-y-2">
              {CALCULATORS.map(c => (
                <li key={c.href}>
                  <Link href={c.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-3">Countries</h4>
            <ul className="space-y-2 mb-4">
              {COUNTRIES.map(c => (
                <li key={c.href}>
                  <Link href={c.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* US Cities */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-3">Popular US Cities</h4>
            <ul className="space-y-2">
              {usaData.cities.slice(0, 8).map(city => (
                <li key={city.id}>
                  <Link href={`/countries/usa/${city.id}`} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {city.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/countries/usa" className="text-primary hover:text-blue-300 text-sm transition-colors font-medium">
                  View all 25 cities →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-sm">© {year} CALCUFINTOR. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/about" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">About</Link>
            <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Privacy</Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
