'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { usaData } from '@/data/usa'

export default function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [citiesOpen, setCitiesOpen] = useState(false)

  const isActive = (href: string) =>
    pathname === href ? 'underline decoration-primary' : ''

  return (
    <nav
      role="navigation"
      className="sticky top-0 z-50 bg-white border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-primary font-heading"
            aria-label="CALCUFINTOR home"
          >
            CALCUFINTOR
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`text-gray-700 hover:text-primary transition-colors ${isActive('/')}`}
            >
              Home
            </Link>
            <Link
              href="/calculators"
              className={`text-gray-700 hover:text-primary transition-colors ${isActive('/calculators')}`}
            >
              Calculators
            </Link>
            <Link
              href="/countries/usa"
              className={`text-gray-700 hover:text-primary transition-colors ${isActive('/countries/usa')}`}
            >
              USA
            </Link>

            {/* Cities dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCitiesOpen(true)}
              onMouseLeave={() => setCitiesOpen(false)}
            >
              <button className="text-gray-700 hover:text-primary transition-colors flex items-center gap-1">
                Cities
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {citiesOpen && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50">
                  {usaData.cities.map(city => (
                    <Link
                      key={city.id}
                      href={`/countries/usa/${city.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                    >
                      {city.name}, {city.state}
                    </Link>
                  ))}
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
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200 py-3">
            <div className="flex flex-col gap-1">
              <Link href="/" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-blue-50 rounded-md">
                Home
              </Link>
              <Link href="/calculators" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-blue-50 rounded-md">
                Calculators
              </Link>
              <Link href="/countries/usa" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-blue-50 rounded-md">
                USA
              </Link>
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Cities
              </div>
              {usaData.cities.map(city => (
                <Link
                  key={city.id}
                  href={`/countries/usa/${city.id}`}
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-primary hover:bg-blue-50 rounded-md"
                >
                  {city.name}, {city.state}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
