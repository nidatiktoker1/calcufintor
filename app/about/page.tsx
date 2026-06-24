import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'About CALCUFINTOR — USA Financial Calculators',
  description: 'Learn about CALCUFINTOR, the free USA financial calculator platform for living wage, cost of living, and salary comparison data.',
  alternates: { canonical: 'https://calcufintor.vercel.app/about' },
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      <h1 className="text-3xl font-bold font-heading text-gray-900 mb-6">About CALCUFINTOR</h1>
      <div className="prose text-gray-700 space-y-4">
        <p>
          CALCUFINTOR is a free, data-driven financial calculator platform built to help Americans
          make smarter financial decisions about where to live and work.
        </p>
        <p>
          We provide living wage calculators, cost of living comparisons, and salary tools for major
          US cities — all based on real, up-to-date data and transparent calculation methodologies.
        </p>
        <h2 className="text-2xl font-bold font-heading text-gray-900 mt-6">Our Data Sources</h2>
        <p>
          Our living wage data is based on the MIT Living Wage Calculator methodology, adjusted for
          current regional cost data. Cost indices are derived from Bureau of Labor Statistics data
          and regional economic surveys.
        </p>
        <h2 className="text-2xl font-bold font-heading text-gray-900 mt-6">Our Mission</h2>
        <p>
          Financial data should be free, transparent, and accessible. Whether you&apos;re a worker
          negotiating a salary, a family planning a move, or a policymaker understanding wage gaps —
          CALCUFINTOR gives you the numbers you need, free of charge.
        </p>
      </div>
    </div>
  )
}
