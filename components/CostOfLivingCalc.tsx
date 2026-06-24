'use client'

import { useState } from 'react'
import { usaData } from '@/data/usa'
import { compareCities, formatCurrency } from '@/lib/calculations'

export default function CostOfLivingCalc() {
  const [fromCityId, setFromCityId] = useState('houston')
  const [toCityId, setToCityId] = useState('new-york')
  const [salary, setSalary] = useState<string>('60000')

  const fromCity = usaData.cities.find(c => c.id === fromCityId)
  const toCity = usaData.cities.find(c => c.id === toCityId)

  const salaryNum = parseFloat(salary) || 0
  const equivalentSalary =
    fromCity && toCity
      ? compareCities(fromCity.costIndex, toCity.costIndex, salaryNum)
      : 0

  const diff = equivalentSalary - salaryNum
  const isHigher = diff > 0

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h2 className="text-xl font-bold font-heading text-gray-900 mb-5">Cost of Living Comparison</h2>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="from-city" className="block text-sm font-medium text-gray-700 mb-1">
            Current City
          </label>
          <select
            id="from-city"
            value={fromCityId}
            onChange={e => setFromCityId(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {usaData.cities.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="to-city" className="block text-sm font-medium text-gray-700 mb-1">
            Target City
          </label>
          <select
            id="to-city"
            value={toCityId}
            onChange={e => setToCityId(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {usaData.cities.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="salary-input" className="block text-sm font-medium text-gray-700 mb-1">
          Current Annual Salary ($)
        </label>
        <input
          id="salary-input"
          type="number"
          value={salary}
          onChange={e => setSalary(e.target.value)}
          placeholder="e.g. 60000"
          min="0"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {salaryNum > 0 && fromCity && toCity && (
        <div className="bg-blue-50 rounded-xl p-5">
          <p className="text-sm text-gray-600 mb-2">
            <strong>{formatCurrency(salaryNum)}</strong> in <strong>{fromCity.name}</strong> is equivalent to:
          </p>
          <p className="text-3xl font-bold text-primary mb-1">{formatCurrency(equivalentSalary)}</p>
          <p className="text-sm text-gray-600 mb-3">in <strong>{toCity.name}</strong></p>
          <div className={`inline-flex items-center gap-1 text-sm font-semibold px-3 py-1 rounded-full ${
            isHigher ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
          }`}>
            {isHigher ? '▲' : '▼'} {formatCurrency(Math.abs(diff))} {isHigher ? 'more' : 'less'} needed
          </div>
        </div>
      )}

      {salaryNum === 0 && (
        <p className="text-gray-400 text-sm text-center py-4">Enter a salary to see the comparison</p>
      )}
    </div>
  )
}
