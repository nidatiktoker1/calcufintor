'use client'

import { useState } from 'react'
import { formatCurrency } from '@/lib/calculations'

export default function HourlyToSalaryCalc() {
  const [hourly, setHourly] = useState<string>('25')
  const [hoursPerWeek, setHoursPerWeek] = useState<string>('40')
  const [weeksPerYear, setWeeksPerYear] = useState<string>('52')

  const h = parseFloat(hourly) || 0
  const hrs = parseFloat(hoursPerWeek) || 40
  const wks = parseFloat(weeksPerYear) || 52

  const annual = Math.round(h * hrs * wks)
  const monthly = Math.round(annual / 12)
  const biweekly = Math.round(h * hrs * 2)
  const weekly = Math.round(h * hrs)
  const daily = Math.round(h * (hrs / 5))

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h2 className="text-xl font-bold font-heading text-gray-900 mb-5">Hourly to Salary Calculator</h2>

      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <div>
          <label htmlFor="hourly-rate" className="block text-sm font-medium text-gray-700 mb-1">
            Hourly Rate ($)
          </label>
          <input
            id="hourly-rate"
            type="number"
            value={hourly}
            onChange={e => setHourly(e.target.value)}
            placeholder="e.g. 25"
            min="0"
            step="0.01"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="hours-per-week" className="block text-sm font-medium text-gray-700 mb-1">
            Hours per Week
          </label>
          <input
            id="hours-per-week"
            type="number"
            value={hoursPerWeek}
            onChange={e => setHoursPerWeek(e.target.value)}
            min="1"
            max="80"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="weeks-per-year" className="block text-sm font-medium text-gray-700 mb-1">
            Weeks per Year
          </label>
          <input
            id="weeks-per-year"
            type="number"
            value={weeksPerYear}
            onChange={e => setWeeksPerYear(e.target.value)}
            min="1"
            max="52"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {h > 0 && (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
            <div className="bg-blue-50 rounded-xl p-4 text-center col-span-2 sm:col-span-1">
              <p className="text-2xl font-bold text-primary">{formatCurrency(annual)}</p>
              <p className="text-xs text-gray-500 mt-1">Annual Salary</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-primary">{formatCurrency(monthly)}</p>
              <p className="text-xs text-gray-500 mt-1">Monthly</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-primary">{formatCurrency(biweekly)}</p>
              <p className="text-xs text-gray-500 mt-1">Bi-weekly</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 text-sm space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Weekly Pay</span>
              <span className="font-semibold">{formatCurrency(weekly)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Daily Pay (5-day week)</span>
              <span className="font-semibold">{formatCurrency(daily)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Hourly Rate</span>
              <span className="font-semibold">${h.toFixed(2)}/hr</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Hours/Year</span>
              <span className="font-semibold">{(hrs * wks).toLocaleString()} hrs</span>
            </div>
          </div>
        </div>
      )}

      {h === 0 && (
        <p className="text-gray-400 text-sm text-center py-4">Enter your hourly rate to see your equivalent salary</p>
      )}
    </div>
  )
}
