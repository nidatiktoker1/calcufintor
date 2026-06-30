'use client'

import { useState } from 'react'
import { formatCurrency } from '@/lib/calculations'

const TAX_BRACKETS_2026 = [
  { min: 0, max: 11600, rate: 0.10 },
  { min: 11600, max: 47150, rate: 0.12 },
  { min: 47150, max: 100525, rate: 0.22 },
  { min: 100525, max: 191950, rate: 0.24 },
  { min: 191950, max: 243725, rate: 0.32 },
  { min: 243725, max: 609350, rate: 0.35 },
  { min: 609350, max: Infinity, rate: 0.37 },
]

const STANDARD_DEDUCTION = 14600 // 2026 single filer

function calculateFederalTax(income: number): number {
  const taxableIncome = Math.max(0, income - STANDARD_DEDUCTION)
  let tax = 0
  for (const bracket of TAX_BRACKETS_2026) {
    if (taxableIncome <= bracket.min) break
    const taxable = Math.min(taxableIncome, bracket.max) - bracket.min
    tax += taxable * bracket.rate
  }
  return Math.round(tax)
}

function calculateSSMedicare(income: number): number {
  const ss = Math.min(income, 168600) * 0.062
  const medicare = income * 0.0145
  return Math.round(ss + medicare)
}

function getEffectiveBracket(income: number): string {
  const taxableIncome = Math.max(0, income - STANDARD_DEDUCTION)
  for (let i = TAX_BRACKETS_2026.length - 1; i >= 0; i--) {
    if (taxableIncome > TAX_BRACKETS_2026[i].min) {
      return `${(TAX_BRACKETS_2026[i].rate * 100).toFixed(0)}%`
    }
  }
  return '10%'
}

export default function TaxCalc() {
  const [income, setIncome] = useState<string>('75000')
  const [filingStatus] = useState('single')

  const incomeNum = parseFloat(income) || 0
  const federalTax = calculateFederalTax(incomeNum)
  const ssMedicare = calculateSSMedicare(incomeNum)
  const totalTax = federalTax + ssMedicare
  const takeHome = incomeNum - totalTax
  const effectiveRate = incomeNum > 0 ? ((totalTax / incomeNum) * 100).toFixed(1) : '0.0'
  const marginalRate = getEffectiveBracket(incomeNum)

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h2 className="text-xl font-bold font-heading text-gray-900 mb-5">Federal Income Tax Calculator</h2>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="tax-income" className="block text-sm font-medium text-gray-700 mb-1">
            Annual Gross Income ($)
          </label>
          <input
            id="tax-income"
            type="number"
            value={income}
            onChange={e => setIncome(e.target.value)}
            placeholder="e.g. 75000"
            min="0"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Filing Status</label>
          <div className="border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 text-gray-700">
            Single (2026 standard deduction: {formatCurrency(STANDARD_DEDUCTION)})
          </div>
        </div>
      </div>

      {incomeNum > 0 && (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            <div className="bg-red-50 rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-red-600">{formatCurrency(federalTax)}</p>
              <p className="text-xs text-gray-500 mt-1">Federal Tax</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-orange-600">{formatCurrency(ssMedicare)}</p>
              <p className="text-xs text-gray-500 mt-1">SS + Medicare</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-primary">{effectiveRate}%</p>
              <p className="text-xs text-gray-500 mt-1">Effective Rate</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-green-600">{formatCurrency(takeHome)}</p>
              <p className="text-xs text-gray-500 mt-1">Take-Home/yr</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 text-sm space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Gross Income</span>
              <span className="font-semibold">{formatCurrency(incomeNum)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Standard Deduction</span>
              <span className="font-semibold text-green-600">−{formatCurrency(STANDARD_DEDUCTION)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Taxable Income</span>
              <span className="font-semibold">{formatCurrency(Math.max(0, incomeNum - STANDARD_DEDUCTION))}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Marginal Tax Bracket</span>
              <span className="font-semibold">{marginalRate}</span>
            </div>
            <div className="border-t border-gray-200 pt-2 flex justify-between">
              <span className="text-gray-600">Total Tax Burden</span>
              <span className="font-bold text-red-600">−{formatCurrency(totalTax)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold text-gray-900">Monthly Take-Home</span>
              <span className="font-bold text-green-600">{formatCurrency(Math.round(takeHome / 12))}</span>
            </div>
          </div>
        </div>
      )}
      {incomeNum === 0 && (
        <p className="text-gray-400 text-sm text-center py-4">Enter your income to calculate your tax burden</p>
      )}

      <p className="text-xs text-gray-400 mt-4">
        * Federal tax only. Does not include state/local taxes. Based on 2026 tax brackets for single filers.
      </p>
    </div>
  )
}
