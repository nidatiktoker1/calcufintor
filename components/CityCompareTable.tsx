import { City } from '@/data/usa'
import { formatCurrency } from '@/lib/calculations'
import Link from 'next/link'

interface CityCompareTableProps {
  cities: City[]
}

export default function CityCompareTable({ cities }: CityCompareTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full text-sm">
        <thead className="bg-primary text-white">
          <tr>
            <th className="text-left px-4 py-3 font-semibold">City</th>
            <th className="text-right px-4 py-3 font-semibold">Living Wage/hr</th>
            <th className="text-right px-4 py-3 font-semibold hidden sm:table-cell">Monthly Total</th>
            <th className="text-right px-4 py-3 font-semibold hidden md:table-cell">1BR Rent</th>
            <th className="text-right px-4 py-3 font-semibold">vs Avg</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {cities.map((city, i) => (
            <tr key={city.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-4 py-3">
                <Link href={`/countries/usa/${city.id}`} className="font-medium text-primary hover:underline">
                  {city.name}
                </Link>
                <span className="text-gray-500 text-xs ml-1">{city.state}</span>
              </td>
              <td className="text-right px-4 py-3 font-semibold">
                {formatCurrency(city.livingWage.single.hourly)}/hr
              </td>
              <td className="text-right px-4 py-3 hidden sm:table-cell">
                {formatCurrency(city.costs.total)}/mo
              </td>
              <td className="text-right px-4 py-3 hidden md:table-cell">
                {formatCurrency(city.costs.rent1br)}/mo
              </td>
              <td className={`text-right px-4 py-3 font-semibold ${
                city.vsNationalAvg.startsWith('+') ? 'text-red-600' : 'text-green-600'
              }`}>
                {city.vsNationalAvg}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
