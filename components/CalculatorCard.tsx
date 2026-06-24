import Link from 'next/link'

interface CalculatorCardProps {
  title: string
  description: string
  href: string
  icon: string
  keywords: string[]
}

export default function CalculatorCard({ title, description, href, icon, keywords }: CalculatorCardProps) {
  return (
    <Link href={href}>
      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-primary transition-all cursor-pointer h-full flex flex-col">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="font-bold text-gray-900 font-heading text-xl mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {keywords.map(kw => (
            <span key={kw} className="text-xs bg-blue-50 text-primary px-2 py-1 rounded-full">
              {kw}
            </span>
          ))}
        </div>
        <div className="text-primary text-sm font-medium">
          Open calculator →
        </div>
      </div>
    </Link>
  )
}
