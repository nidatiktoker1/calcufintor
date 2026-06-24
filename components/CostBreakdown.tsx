import { Costs } from '@/data/usa'
import { formatCurrency } from '@/lib/calculations'

interface CostBreakdownProps {
  costs: Costs
  cityName: string
}

const COST_LABELS: Record<keyof Omit<Costs, 'total'>, string> = {
  rent1br: '1BR Apartment',
  rent2br: '2BR Apartment',
  groceries: 'Groceries',
  transport: 'Transportation',
  utilities: 'Utilities',
  dining: 'Dining Out',
  healthcare: 'Healthcare',
  childcare: 'Childcare',
}

const COST_ICONS: Record<keyof Omit<Costs, 'total'>, string> = {
  rent1br: '🏠',
  rent2br: '🏘️',
  groceries: '🛒',
  transport: '🚌',
  utilities: '💡',
  dining: '🍽️',
  healthcare: '🏥',
  childcare: '👶',
}

export default function CostBreakdown({ costs, cityName }: CostBreakdownProps) {
  const costKeys = Object.keys(COST_LABELS) as (keyof Omit<Costs, 'total'>)[]

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div className="bg-primary px-5 py-4">
        <h3 className="font-bold text-white font-heading">Monthly Cost Breakdown</h3>
        <p className="text-blue-100 text-sm">{cityName}</p>
      </div>
      <div className="divide-y divide-gray-100">
        {costKeys.map(key => (
          <div key={key} className="flex justify-between items-center px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">{COST_ICONS[key]}</span>
              <span className="text-sm text-gray-700">{COST_LABELS[key]}</span>
            </div>
            <span className="font-semibold text-gray-900 text-sm">{formatCurrency(costs[key])}/mo</span>
          </div>
        ))}
        <div className="flex justify-between items-center px-5 py-4 bg-gray-50">
          <span className="font-bold text-gray-900">Total (est.)</span>
          <span className="font-bold text-primary text-lg">{formatCurrency(costs.total)}/mo</span>
        </div>
      </div>
    </div>
  )
}
