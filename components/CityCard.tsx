import Link from 'next/link'
import { City } from '@/data/usa'
import { formatCurrency } from '@/lib/calculations'

interface CityCardProps {
  city: City
}

export default function CityCard({ city }: CityCardProps) {
  return (
    <Link href={`/countries/usa/${city.id}`}>
      <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-primary transition-all cursor-pointer h-full">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-bold text-gray-900 font-heading text-lg">{city.name}</h3>
            <p className="text-gray-500 text-sm">{city.state}</p>
          </div>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
            city.vsNationalAvg.startsWith('+')
              ? 'bg-red-50 text-red-600'
              : 'bg-green-50 text-green-600'
          }`}>
            {city.vsNationalAvg}
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Living Wage</span>
            <span className="font-semibold text-gray-800">
              {formatCurrency(city.livingWage.single.hourly)}/hr
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Monthly Costs</span>
            <span className="font-semibold text-gray-800">
              {formatCurrency(city.costs.total)}/mo
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Cost Index</span>
            <span className="font-semibold text-gray-800">{city.costIndex}</span>
          </div>
        </div>

        <div className="mt-4 text-primary text-sm font-medium">
          View details →
        </div>
      </div>
    </Link>
  )
}
