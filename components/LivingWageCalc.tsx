'use client'

import { useState } from 'react'
import { usaData, City } from '@/data/usa'
import { formatCurrency, getFamilyTypeLabel } from '@/lib/calculations'

export default function LivingWageCalc() {
  const [cityId, setCityId] = useState<string>('new-york')
  const [familyType, setFamilyType] = useState<string>('single')

  const city: City | undefined = usaData.cities.find(c => c.id === cityId)
  const result = city?.livingWage[familyType as keyof typeof city.livingWage]

  const FAMILY_TYPES = ['single', 'coupleOneWorker', 'singleParent1Child']

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h2 className="text-xl font-bold font-heading text-gray-900 mb-5">Living Wage Calculator</h2>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="city-select" className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <select
            id="city-select"
            value={cityId}
            onChange={e => setCityId(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {usaData.cities.map(c => (
              <option key={c.id} value={c.id}>{c.name}, {c.state}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="family-type" className="block text-sm font-medium text-gray-700 mb-1">
            Family Type
          </label>
          <select
            id="family-type"
            value={familyType}
            onChange={e => setFamilyType(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {FAMILY_TYPES.map(ft => (
              <option key={ft} value={ft}>{getFamilyTypeLabel(ft)}</option>
            ))}
          </select>
        </div>
      </div>

      {result && city && (
        <div>
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-primary">${result.hourly}/hr</p>
              <p className="text-xs text-gray-500 mt-1">Hourly</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-primary">{formatCurrency(result.monthly)}</p>
              <p className="text-xs text-gray-500 mt-1">Monthly</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-primary">{formatCurrency(result.annual)}</p>
              <p className="text-xs text-gray-500 mt-1">Annual</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center">
            Living wage for <strong>{getFamilyTypeLabel(familyType)}</strong> in{' '}
            <strong>{city.name}</strong>
          </p>
        </div>
      )}
    </div>
  )
}
