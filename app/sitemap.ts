import { MetadataRoute } from 'next'
import { usaData } from '@/data/usa'

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = 'https://calcufintor.vercel.app'
  const now = new Date()

  const staticPages = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${BASE_URL}/calculators`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE_URL}/countries/usa`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE_URL}/calculators/living-wage`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/calculators/cost-of-living`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/calculators/salary-comparison`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.4 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.2 },
    { url: `${BASE_URL}/terms-of-service`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.2 },
  ]

  const cityPages = usaData.cities.map(city => ({
    url: `${BASE_URL}/countries/usa/${city.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...cityPages]
}
