import Link from 'next/link'

export default function HeroSection() {
  const year = new Date().getFullYear()

  return (
    <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
          🇺🇸 USA Financial Data {year}
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold font-heading mb-4 leading-tight">
          Calculate Your <span className="text-gold">Financial Future</span>, Everywhere
        </h1>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Free living wage calculators, cost of living comparisons, and salary tools for major US cities.
          Make smarter financial decisions — powered by real data.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/calculators"
            className="bg-gold text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Explore Calculators
          </Link>
          <Link
            href="/countries/usa"
            className="bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors"
          >
            View USA Data
          </Link>
        </div>
      </div>
    </section>
  )
}
