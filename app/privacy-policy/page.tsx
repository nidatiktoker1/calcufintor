import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Privacy Policy | CALCUFINTOR',
  description: 'Privacy policy for CALCUFINTOR — USA financial calculators.',
  alternates: { canonical: 'https://calcufintor.vercel.app/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  const year = new Date().getFullYear()
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />
      <h1 className="text-3xl font-bold font-heading text-gray-900 mb-6">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-6">Last updated: January {year}</p>
      <div className="space-y-4 text-gray-700">
        <p>
          CALCUFINTOR (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy.
          This policy explains what information we collect and how we use it.
        </p>
        <h2 className="text-xl font-bold font-heading text-gray-900 mt-6">Information We Collect</h2>
        <p>
          CALCUFINTOR does not collect personal information. All calculator inputs (salary amounts,
          city selections, family types) are processed entirely in your browser and are never sent
          to our servers or stored.
        </p>
        <h2 className="text-xl font-bold font-heading text-gray-900 mt-6">Analytics</h2>
        <p>
          We may use privacy-respecting analytics to understand aggregate usage patterns. No personal
          data or IP addresses are stored.
        </p>
        <h2 className="text-xl font-bold font-heading text-gray-900 mt-6">Contact</h2>
        <p>
          For privacy questions, contact us at: privacy@calcufintor.com
        </p>
      </div>
    </div>
  )
}
