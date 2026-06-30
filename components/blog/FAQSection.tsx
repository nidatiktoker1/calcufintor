import { FAQItem } from '@/data/blog/posts'

interface FAQSectionProps {
  faqs: FAQItem[]
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <div className="mt-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h2 className="text-2xl font-bold font-heading text-gray-900 mb-5">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="bg-white border border-gray-200 rounded-xl p-5 group">
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
              {faq.question}
              <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
