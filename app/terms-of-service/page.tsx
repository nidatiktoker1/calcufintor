import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Terms of Service | CALCUFINTOR',
  description: 'Terms of service for CALCUFINTOR — USA financial calculators.',
  alternates: { canonical: 'https://calcufintor.vercel.app/terms-of-service' },
}

export default function TermsPage() {
  const year = new Date().getFullYear()
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]} />
      <h1 className="text-3xl font-bold font-heading text-gray-900 mb-6">Terms of Service</h1>
      <p className="text-gray-500 text-sm mb-6">Last updated: January {year}</p>
      <div className="space-y-4 text-gray-700">
        <p>
          By using CALCUFINTOR, you agree to these terms. Please read them carefully.
        </p>
        <h2 className="text-xl font-bold font-heading text-gray-900 mt-6">Use of Information</h2>
        <p>
          All data and calculations provided by CALCUFINTOR are for informational purposes only.
          Our figures are estimates based on publicly available data and should not be used as the
          sole basis for financial decisions. Always consult a qualified financial advisor.
        </p>
        <h2 className="text-xl font-bold font-heading text-gray-900 mt-6">Accuracy</h2>
        <p>
          We strive to keep our data accurate and up-to-date, but we make no guarantees about
          the accuracy, completeness, or timeliness of the information provided.
        </p>
        <h2 className="text-xl font-bold font-heading text-gray-900 mt-6">Intellectual Property</h2>
        <p>
          All content on CALCUFINTOR is owned by CALCUFINTOR and protected by copyright law.
          You may not reproduce or distribute content without permission.
        </p>
        <h2 className="text-xl font-bold font-heading text-gray-900 mt-6">Contact</h2>
        <p>Legal inquiries: legal@calcufintor.com</p>
      </div>
    </div>
  )
}
