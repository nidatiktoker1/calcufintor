import Link from 'next/link'
import { usaData } from '@/data/usa'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold font-heading text-primary mb-2">CALCUFINTOR</h3>
            <p className="text-gray-400 text-sm">Calculate Your Financial Future, Everywhere</p>
          </div>

          {/* Calculators */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-3">Calculators</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/calculators/living-wage" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Living Wage Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/cost-of-living" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cost of Living Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/salary-comparison" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Salary Comparison Tool
                </Link>
              </li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-3">Cities</h4>
            <ul className="space-y-2">
              {usaData.cities.map(city => (
                <li key={city.id}>
                  <Link
                    href={`/countries/usa/${city.id}`}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-sm">
            © {year} CALCUFINTOR. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
