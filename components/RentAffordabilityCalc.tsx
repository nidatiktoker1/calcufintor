'use client'

import { useState } from 'react'
import { formatCurrency } from '@/lib/calculations'
import { usaData } from '@/data/usa'

export default function RentAffordabilityCalc() {
  const [income, setIncome] = useState<string>('60000')
  const [method, setMethod] = useState<'30percent' | '50-30-20'>('30percent')

  const incomeNum = parseFloat(income) || 0
  const monthlyIncome = incomeNum / 12

  const maxRent30 = Math.round(monthlyIncome * 0.30)
  const maxRent50 = Math.round(monthlyIncome * 0.50) // needs (rent + bills)
  const maxRentComfort = Math.round(monthlyIncome * 0.25)

  const affordable = usaData.cities.filter(c => c.costs.rent1br <= maxRent30)
  const stretch = usaData.cities.filter(c => c.costs.rent1br > maxRent30 && c.costs.rent1br <= maxRent30 * 1.3)
  const notAffordable = usaData.cities.filter(c => c.costs.rent1br > maxRent30 * 1.3)

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h2 className="text-xl font-bold font-heading text-gray-900 mb-5">Rent Affordability Calculator</h2>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="rent-income" className="block text-sm font-medium text-gray-700 mb-1">
            Annual Gross Income ($)
          </label>
          <input
            id="rent-income"
            type="number"
            value={income}
            onChange={e => setIncome(e.target.value)}
            placeholder="e.g. 60000"
            min="0"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Budget Rule</label>
          <div className="flex gap-2">
            <button
              onClick={() => setMethod('30percent')}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${method === '30percent' ? 'bg-primary text-white' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
            >
              30% Rule
            </button>
            <button
              onClick={() => setMethod('50-30-20')}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${method === '50-30-20' ? 'bg-primary text-white' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
            >
              50/30/20
            </button>
          </div>
        </div>
      </div>

      {incomeNum > 0 && (
        <div>
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-green-600">{formatCurrency(maxRentComfort)}</p>
              <p className="text-xs text-gray-500 mt-1">Comfortable (25%)</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-primary">{formatCurrency(maxRent30)}</p>
              <p className="text-xs text-gray-500 mt-1">Recommended (30%)</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-orange-600">{formatCurrency(Math.round(monthlyIncome * 0.40))}</p>
              <p className="text-xs text-gray-500 mt-1">Maximum (40%)</p>
            </div>
          </div>

          <h3 className="font-bold text-gray-900 mb-3">How US Cities Compare at {formatCurrency(incomeNum)}/year</h3>

          {affordable.length > 0 && (
            <div className="mb-4">
              <p className="text-sm font-semibold text-green-700 mb-2">✅ Affordable ({affordable.length} cities — 1BR under {formatCurrency(maxRent30)}/mo)</p>
              <div className="flex flex-wrap gap-2">
                {affordable.map(c => (
                  <span key={c.id} className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-200">
                    {c.name} — {formatCurrency(c.costs.rent1br)}/mo
                  </span>
                ))}
              </div>
            </div>
          )}

          {stretch.length > 0 && (
            <div className="mb-4">
              <p className="text-sm font-semibold text-yellow-700 mb-2">⚠️ Stretch ({stretch.length} cities — tight but possible)</p>
              <div className="flex flex-wrap gap-2">
                {stretch.map(c => (
                  <span key={c.id} className="text-xs bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full border border-yellow-200">
                    {c.name} — {formatCurrency(c.costs.rent1br)}/mo
                  </span>
                ))}
              </div>
            </div>
          )}

          {notAffordable.length > 0 && (
            <div>
              <p className="text-sm font-semibold text-red-700 mb-2">❌ Not Affordable ({notAffordable.length} cities)</p>
              <div className="flex flex-wrap gap-2">
                {notAffordable.map(c => (
                  <span key={c.id} className="text-xs bg-red-50 text-red-700 px-3 py-1 rounded-full border border-red-200">
                    {c.name} — {formatCurrency(c.costs.rent1br)}/mo
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {incomeNum === 0 && (
        <p className="text-gray-400 text-sm text-center py-4">Enter your income to see what you can afford</p>
      )}
    </div>
  )
}
