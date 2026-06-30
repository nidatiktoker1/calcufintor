'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { usaData } from '@/data/usa'

const COUNTRIES = [
  { id: 'usa', label: '🇺🇸 United States', href: '/countries/usa' },
  { id: 'canada', label: '🇨🇦 Canada', href: '/countries/canada' },
  { id: 'uk', label: '🇬🇧 United Kingdom', href: '/countries/uk' },
  { id: 'australia', label: '🇦🇺 Australia', href: '/countries/australia' },
]

const CALCULATORS = [
  { label: 'Living Wage', href: '/calculators/living-wage' },
  { label: 'Cost of Living', href: '/calculators/cost-of-living' },
  { label: 'Salary Comparison', href: '/calculators/salary-comparison' },
  { label: 'Tax Calculator', href: '/calculators/tax-calculator' },
  { label: 'Rent Affordability', href: '/calculators/rent-affordability' },
  { label: 'Hourly to Salary', href: '/calculators/hourly-to-salary' },
  { label: 'Savings Rate', href: '/calculators/savings-rate' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [calcOpen, setCalcOpen] = useState(false)
  const [countriesOpen, setCountriesOpen] = useState(false)

  const isActive = (href: string) =>
    pathname === href ? 'text-primary font-semibold' : 'text-gray-700'

  return (
    <nav role="navigation" className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary font-heading" aria-label="CALCUFINTOR home">
            CALCUFINTOR
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className={`hover:text-primary transition-colors text-sm ${isActive('/')}`}>Home</Link>
            <Link href="/blog" className={`hover:text-primary transition-colors text-sm ${isActive('/blog')}`}>Blog</Link>

            {/* Calculators dropdown */}
            <div className="relative" onMouseEnter={() => setCalcOpen(true)} onMouseLeave={() => setCalcOpen(false)}>
              <button className="text-gray-700 hover:text-primary transition-colors text-sm flex items-center gap-1">
                Calculators
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {calcOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50">
                  {CALCULATORS.map(c => (
                    <Link key={c.href} href={c.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors">
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Countries dropdown */}
            <div className="relative" onMouseEnter={() => setCountriesOpen(true)} onMouseLeave={() => setCountriesOpen(false)}>
              <button className="text-gray-700 hover:text-primary transition-colors text-sm flex items-center gap-1">
                Countries
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {countriesOpen && (
                <div className="absolute top-full right-0 mt-1 w-52 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50">
                  {COUNTRIES.map(c => (
                    <Link key={c.id} href={c.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors">
                      {c.label}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <p className="px-4 py-1 text-xs text-gray-400 font-semibold uppercase tracking-wider">US Cities</p>
                    {usaData.cities.slice(0, 5).map(city => (
                      <Link key={city.id} href={`/countries/usa/${city.id}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors">
                        {city.name}, {city.state}
                      </Link>
                    ))}
                    <Link href="/countries/usa" className="block px-4 py-2 text-sm text-primary font-medium hover:bg-blue-50 transition-colors">
                      View all 25 cities →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200 py-3 max-h-96 overflow-y-auto">
            <div className="flex flex-col gap-1">
              <Link href="/" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-blue-50 rounded-md text-sm">Home</Link>
              <Link href="/blog" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-blue-50 rounded-md text-sm">Blog</Link>

              <p className="px-4 py-1 text-xs text-gray-400 font-semibold uppercase tracking-wider mt-2">Calculators</p>
              {CALCULATORS.map(c => (
                <Link key={c.href} href={c.href} className="block px-6 py-2 text-sm text-gray-700 hover:text-primary hover:bg-blue-50 rounded-md">
                  {c.label}
                </Link>
              ))}

              <p className="px-4 py-1 text-xs text-gray-400 font-semibold uppercase tracking-wider mt-2">Countries</p>
              {COUNTRIES.map(c => (
                <Link key={c.id} href={c.href} className="block px-6 py-2 text-sm text-gray-700 hover:text-primary hover:bg-blue-50 rounded-md">
                  {c.label}
                </Link>
              ))}

              <p className="px-4 py-1 text-xs text-gray-400 font-semibold uppercase tracking-wider mt-2">US Cities</p>
              {usaData.cities.slice(0, 10).map(city => (
                <Link key={city.id} href={`/countries/usa/${city.id}`} className="block px-6 py-2 text-sm text-gray-700 hover:text-primary hover:bg-blue-50 rounded-md">
                  {city.name}, {city.state}
                </Link>
              ))}
              <Link href="/countries/usa" className="block px-6 py-2 text-sm text-primary font-medium hover:bg-blue-50 rounded-md">
                View all 25 cities →
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
