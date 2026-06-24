import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'CALCUFINTOR — USA Financial Calculators',
  description: 'Free living wage, cost of living, and salary comparison calculators for major US cities. Make smarter financial decisions with real data.',
  metadataBase: new URL('https://calcufintor.vercel.app'),
  openGraph: {
    siteName: 'CALCUFINTOR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 't1xiFNMYDWqTVy4n8G4rREKo4cwzXk60B_a930ND1QA',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
