import { MetadataRoute } from 'next'
import { usaData } from '@/data/usa'
import { canadaData } from '@/data/canada'
import { ukData } from '@/data/uk'
import { australiaData } from '@/data/australia'
import { blogPosts } from '@/data/blog/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE = 'https://calcufintor.vercel.app'
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/calculators`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    // Country overviews
    { url: `${BASE}/countries/usa`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/countries/canada`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/countries/uk`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/countries/australia`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    // Calculators
    { url: `${BASE}/calculators/living-wage`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/calculators/cost-of-living`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/calculators/salary-comparison`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/calculators/tax-calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/calculators/rent-affordability`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/calculators/hourly-to-salary`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/calculators/savings-rate`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Static pages
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/terms-of-service`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const usaCityPages: MetadataRoute.Sitemap = usaData.cities.map(city => ({
    url: `${BASE}/countries/usa/${city.id}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const canadaCityPages: MetadataRoute.Sitemap = canadaData.cities.map(city => ({
    url: `${BASE}/countries/canada/${city.id}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const ukCityPages: MetadataRoute.Sitemap = ukData.cities.map(city => ({
    url: `${BASE}/countries/uk/${city.id}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const australiaCityPages: MetadataRoute.Sitemap = australiaData.cities.map(city => ({
    url: `${BASE}/countries/australia/${city.id}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const blogPages: MetadataRoute.Sitemap = blogPosts.map(post => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    ...staticPages,
    ...usaCityPages,
    ...canadaCityPages,
    ...ukCityPages,
    ...australiaCityPages,
    ...blogPages,
  ]
}
