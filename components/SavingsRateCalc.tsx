'use client'

import { useState } from 'react'
import { formatCurrency } from '@/lib/calculations'

export default function SavingsRateCalc() {
  const [income, setIncome] = useState<string>('60000')
  const [expenses, setExpenses] = useState<string>('42000')

  const incomeNum = parseFloat(income) || 0
  const expensesNum = parseFloat(expenses) || 0
  const savings = Math.max(0, incomeNum - expensesNum)
  const savingsRate = incomeNum > 0 ? ((savings / incomeNum) * 100).toFixed(1) : '0.0'
  const monthlySavings = Math.round(savings / 12)

  // Years to retirement (25x rule / 4% withdrawal rate)
  const yearsToRetirement = savings > 0
    ? Math.ceil(
        Math.log(1 + (incomeNum * 25 * 0.07) / savings) / Math.log(1.07)
      )
    : null

  const getRating = (rate: number) => {
    if (rate >= 50) return { label: 'Excellent 🏆', color: 'text-green-600', bg: 'bg-green-50' }
    if (rate >= 30) return { label: 'Great 🌟', color: 'text-green-600', bg: 'bg-green-50' }
    if (rate >= 20) return { label: 'Good ✅', color: 'text-blue-600', bg: 'bg-blue-50' }
    if (rate >= 10) return { label: 'Fair ⚠️', color: 'text-yellow-600', bg: 'bg-yellow-50' }
    return { label: 'Needs Work ❌', color: 'text-red-600', bg: 'bg-red-50' }
  }

  const rating = getRating(parseFloat(savingsRate))

  const BENCHMARKS = [
    { rate: '10%', label: 'Minimum recommended' },
    { rate: '15%', label: '401(k) common target' },
    { rate: '20%', label: '50/30/20 rule' },
    { rate: '30%', label: 'Good financial health' },
    { rate: '50%+', label: 'FIRE movement goal' },
  ]

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h2 className="text-xl font-bold font-heading text-gray-900 mb-5">Savings Rate Calculator</h2>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="savings-income" className="block text-sm font-medium text-gray-700 mb-1">
            Annual Take-Home Income ($)
          </label>
          <input
            id="savings-income"
            type="number"
            value={income}
            onChange={e => setIncome(e.target.value)}
            placeholder="e.g. 60000"
            min="0"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="savings-expenses" className="block text-sm font-medium text-gray-700 mb-1">
            Annual Expenses ($)
          </label>
          <input
            id="savings-expenses"
            type="number"
            value={expenses}
            onChange={e => setExpenses(e.target.value)}
            placeholder="e.g. 42000"
            min="0"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {incomeNum > 0 && (
        <div>
          {/* Big savings rate display */}
          <div className={`${rating.bg} rounded-xl p-6 text-center mb-5`}>
            <p className="text-5xl font-bold text-primary mb-1">{savingsRate}%</p>
            <p className="text-lg font-semibold text-gray-700">Savings Rate</p>
            <p className={`text-sm font-bold mt-1 ${rating.color}`}>{rating.label}</p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-5">
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-gray-900">{formatCurrency(savings)}</p>
              <p className="text-xs text-gray-500 mt-1">Annual Savings</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-gray-900">{formatCurrency(monthlySavings)}</p>
              <p className="text-xs text-gray-500 mt-1">Monthly Savings</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-gray-900">
                {yearsToRetirement && yearsToRetirement > 0 && yearsToRetirement < 100
                  ? `~${yearsToRetirement} yrs`
                  : '—'}
              </p>
              <p className="text-xs text-gray-500 mt-1">Est. to Retire</p>
            </div>
          </div>

          {/* Breakdown bar */}
          <div className="mb-5">
            <div className="flex text-xs text-gray-500 justify-between mb-1">
              <span>Expenses ({(100 - parseFloat(savingsRate)).toFixed(1)}%)</span>
              <span>Savings ({savingsRate}%)</span>
            </div>
            <div className="h-4 rounded-full overflow-hidden bg-gray-200 flex">
              <div
                className="bg-red-400 h-full transition-all"
                style={{ width: `${Math.min(100, (expensesNum / incomeNum) * 100)}%` }}
              />
              <div
                className="bg-green-500 h-full transition-all"
                style={{ width: `${Math.min(100, parseFloat(savingsRate))}%` }}
              />
            </div>
          </div>

          <p className="text-xs text-gray-400">
            * Retirement estimate assumes 7% annual investment return and the 4% safe withdrawal rate (25x annual expenses needed).
          </p>
        </div>
      )}

      {incomeNum === 0 && (
        <p className="text-gray-400 text-sm text-center py-4">Enter your income and expenses to calculate your savings rate</p>
      )}
    </div>
  )
}
