import { usaData } from '@/data/usa'

export function getNycChicagoContent() {
  const nyc = usaData.cities.find(c => c.id === 'new-york')!
  const chicago = usaData.cities.find(c => c.id === 'chicago')!

  return { nyc, chicago }
}
