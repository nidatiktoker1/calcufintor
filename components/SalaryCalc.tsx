'use client'

import { useState } from 'react'
import { usaData } from '@/data/usa'
import { salaryNeeded, formatCurrency, annualToMonthly, annualToHourly } from '@/lib/calculations'

export default function SalaryCalc() {
  const [fromCityId, setFromCityId] = useState('chicago')
  const [toCityId, setToCityId] = useState('new-york')
  const [currentSalary, setCurrentSalary] = useState<string>('75000')

  const fromCity = usaData.cities.find(c => c.id === fromCityId)
  const toCity = usaData.cities.find(c => c.id === toCityId)

  const salaryNum = parseFloat(currentSalary) || 0
  const needed =
    fromCity && toCity
      ? salaryNeeded(salaryNum, fromCity.costIndex, toCity.costIndex)
      : 0

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h2 className="text-xl font-bold font-heading text-gray-900 mb-5">Salary Comparison Tool</h2>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="salary-from-city" className="block text-sm font-medium text-gray-700 mb-1">
            Living In
          </label>
          <select
            id="salary-from-city"
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
          <label htmlFor="salary-to-city" className="block text-sm font-medium text-gray-700 mb-1">
            Moving To
          </label>
          <select
            id="salary-to-city"
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
        <label htmlFor="current-salary" className="block text-sm font-medium text-gray-700 mb-1">
          Your Current Salary ($)
        </label>
        <input
          id="current-salary"
          type="number"
          value={currentSalary}
          onChange={e => setCurrentSalary(e.target.value)}
          placeholder="e.g. 75000"
          min="0"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {salaryNum > 0 && fromCity && toCity && (
        <div>
          <p className="text-sm text-gray-600 mb-3">
            To maintain the same lifestyle moving from <strong>{fromCity.name}</strong> to{' '}
            <strong>{toCity.name}</strong>, you need:
          </p>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-primary">{formatCurrency(needed)}</p>
              <p className="text-xs text-gray-500 mt-1">Annual</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-primary">{formatCurrency(annualToMonthly(needed))}</p>
              <p className="text-xs text-gray-500 mt-1">Monthly</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-primary">${annualToHourly(needed)}/hr</p>
              <p className="text-xs text-gray-500 mt-1">Hourly</p>
            </div>
          </div>
        </div>
      )}

      {salaryNum === 0 && (
        <p className="text-gray-400 text-sm text-center py-4">Enter your salary to see what you need in the target city</p>
      )}
    </div>
  )
}
