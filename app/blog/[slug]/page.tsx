import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/components/Breadcrumb'
import FAQSection from '@/components/blog/FAQSection'
import BlogCard from '@/components/blog/BlogCard'
import { getPostBySlug, getAllSlugs, getRelatedPosts } from '@/data/blog/posts'
import { usaData } from '@/data/usa'
import { formatCurrency, compareCities } from '@/lib/calculations'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://calcufintor.vercel.app/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://calcufintor.vercel.app/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
    },
  }
}

function renderArticleBody(slug: string) {
  switch (slug) {
    case 'cost-of-living-nyc-vs-chicago-2026': {
      const nyc = usaData.cities.find(c => c.id === 'new-york')!
      const chicago = usaData.cities.find(c => c.id === 'chicago')!
      const equivSalary = compareCities(chicago.costIndex, nyc.costIndex, 75000)

      return (
        <>
          <p>
            New York City and Chicago are both major US economic hubs, but the cost of living between
            them differs dramatically. NYC carries a cost index of {nyc.costIndex} compared to Chicago&apos;s{' '}
            {chicago.costIndex} — meaning everyday expenses in New York run roughly 75% higher.
          </p>

          <h2 className="text-2xl font-bold font-heading text-gray-900 mt-8 mb-3">Rent: The Biggest Gap</h2>
          <p>
            A 1-bedroom apartment in NYC averages {formatCurrency(nyc.costs.rent1br)}/month, compared to
            {' '}{formatCurrency(chicago.costs.rent1br)}/month in Chicago — nearly double. This single line
            item drives most of the overall cost difference between the two cities.
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 my-6">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-4 py-3">Expense</th>
                  <th className="text-right px-4 py-3">New York City</th>
                  <th className="text-right px-4 py-3">Chicago</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { label: '1BR Rent', nyc: nyc.costs.rent1br, chi: chicago.costs.rent1br },
                  { label: 'Groceries', nyc: nyc.costs.groceries, chi: chicago.costs.groceries },
                  { label: 'Transport', nyc: nyc.costs.transport, chi: chicago.costs.transport },
                  { label: 'Utilities', nyc: nyc.costs.utilities, chi: chicago.costs.utilities },
                  { label: 'Dining Out', nyc: nyc.costs.dining, chi: chicago.costs.dining },
                  { label: 'Healthcare', nyc: nyc.costs.healthcare, chi: chicago.costs.healthcare },
                ].map(row => (
                  <tr key={row.label} className="bg-white">
                    <td className="px-4 py-3 text-gray-700">{row.label}</td>
                    <td className="text-right px-4 py-3 font-semibold">{formatCurrency(row.nyc)}</td>
                    <td className="text-right px-4 py-3 font-semibold">{formatCurrency(row.chi)}</td>
                  </tr>
                ))}
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-bold text-gray-900">Total/month</td>
                  <td className="text-right px-4 py-3 font-bold text-primary">{formatCurrency(nyc.costs.total)}</td>
                  <td className="text-right px-4 py-3 font-bold text-primary">{formatCurrency(chicago.costs.total)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold font-heading text-gray-900 mt-8 mb-3">What Salary Do You Need?</h2>
          <p>
            If you earn $75,000 in Chicago and want to maintain the exact same lifestyle in New York City,
            you would need approximately <strong>{formatCurrency(equivSalary)}</strong> — a difference of{' '}
            {formatCurrency(equivSalary - 75000)} per year, just to break even on purchasing power.
          </p>

          <h2 className="text-2xl font-bold font-heading text-gray-900 mt-8 mb-3">Living Wage Comparison</h2>
          <p>
            For a single adult, the living wage in NYC is ${nyc.livingWage.single.hourly}/hour
            ({formatCurrency(nyc.livingWage.single.annual)}/year), while in Chicago it&apos;s
            ${chicago.livingWage.single.hourly}/hour ({formatCurrency(chicago.livingWage.single.annual)}/year).
            That&apos;s a gap of over {formatCurrency(nyc.livingWage.single.annual - chicago.livingWage.single.annual)} annually
            just to cover basic needs.
          </p>

          <h2 className="text-2xl font-bold font-heading text-gray-900 mt-8 mb-3">Bottom Line</h2>
          <p>
            Chicago offers significantly more purchasing power for the same salary, particularly when it
            comes to housing. NYC&apos;s higher wages in industries like finance and tech can offset this gap
            for some workers, but for most professions, Chicago provides a meaningfully lower cost of living
            without sacrificing access to a major US city&apos;s amenities and job market.
          </p>
        </>
      )
    }

    case 'living-wage-by-state-2026': {
      const sorted = [...usaData.cities].sort((a, b) => a.livingWage.single.hourly - b.livingWage.single.hourly)
      const lowest = sorted.slice(0, 5)
      const highest = sorted.slice(-5).reverse()

      return (
        <>
          <p>
            The US federal minimum wage has remained at $7.25/hour since 2009 — over 15 years without
            an increase. Meanwhile, the actual cost of covering basic needs (the &ldquo;living wage&rdquo;)
            has continued climbing in nearly every American city.
          </p>

          <h2 className="text-2xl font-bold font-heading text-gray-900 mt-8 mb-3">The 5 Most Expensive Cities (Living Wage)</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 my-6">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-4 py-3">City</th>
                  <th className="text-right px-4 py-3">Living Wage/hr</th>
                  <th className="text-right px-4 py-3">Annual</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {highest.map((c, i) => (
                  <tr key={c.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3">
                      <Link href={`/countries/usa/${c.id}`} className="text-primary hover:underline font-medium">{c.name}</Link>
                    </td>
                    <td className="text-right px-4 py-3 font-semibold">${c.livingWage.single.hourly}/hr</td>
                    <td className="text-right px-4 py-3 font-bold text-primary">{formatCurrency(c.livingWage.single.annual)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold font-heading text-gray-900 mt-8 mb-3">The 5 Most Affordable Cities (Living Wage)</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 my-6">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-4 py-3">City</th>
                  <th className="text-right px-4 py-3">Living Wage/hr</th>
                  <th className="text-right px-4 py-3">Annual</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {lowest.map((c, i) => (
                  <tr key={c.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3">
                      <Link href={`/countries/usa/${c.id}`} className="text-primary hover:underline font-medium">{c.name}</Link>
                    </td>
                    <td className="text-right px-4 py-3 font-semibold">${c.livingWage.single.hourly}/hr</td>
                    <td className="text-right px-4 py-3 font-bold text-primary">{formatCurrency(c.livingWage.single.annual)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold font-heading text-gray-900 mt-8 mb-3">Why the Gap Exists</h2>
          <p>
            Housing costs are the primary driver of living wage differences between cities. Cities with
            restrictive housing supply and high demand — like San Francisco and New York — see living
            wages 2-3x higher than cities with more housing availability like Memphis or Detroit.
          </p>

          <p className="mt-3">
            A minimum wage worker earning $7.25/hour working full-time (2,080 hours/year) earns just
            $15,080/year — below the living wage threshold in every single city in our dataset, often
            by a factor of 2-3x.
          </p>
        </>
      )
    }

    case 'best-cities-for-remote-workers-cost-of-living-2026': {
      const affordable = [...usaData.cities].sort((a, b) => a.costIndex - b.costIndex).slice(0, 6)

      return (
        <>
          <p>
            Remote work decoupled salary from location for millions of workers. If your paycheck doesn&apos;t
            change based on your zip code, the smartest financial move is living somewhere your dollar
            stretches furthest.
          </p>

          <h2 className="text-2xl font-bold font-heading text-gray-900 mt-8 mb-3">Top 6 Most Affordable Cities</h2>
          <div className="grid sm:grid-cols-2 gap-4 my-6">
            {affordable.map((c, i) => (
              <div key={c.id} className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <Link href={`/countries/usa/${c.id}`} className="font-bold text-gray-900 hover:text-primary">
                    #{i + 1} {c.name}
                  </Link>
                  <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full font-semibold">
                    Index {c.costIndex}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  1BR rent: {formatCurrency(c.costs.rent1br)}/mo · Living wage: ${c.livingWage.single.hourly}/hr
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold font-heading text-gray-900 mt-8 mb-3">The Math of Relocating</h2>
          <p>
            Imagine you earn $90,000/year remotely while living in New York City (cost index 187).
            If you relocate to Memphis (cost index 80), your effective purchasing power increases by
            roughly 134% — equivalent to a massive raise without changing employers.
          </p>

          <p className="mt-3">
            Use our <Link href="/calculators/rent-affordability" className="text-primary hover:underline">Rent Affordability Calculator</Link>{' '}
            to see exactly which cities fit your current budget, or the{' '}
            <Link href="/calculators/cost-of-living" className="text-primary hover:underline">Cost of Living Calculator</Link>{' '}
            to compare any two cities directly.
          </p>
        </>
      )
    }

    case 'how-much-salary-do-you-need-to-be-happy-2026': {
      const nyc = usaData.cities.find(c => c.id === 'new-york')!
      const houston = usaData.cities.find(c => c.id === 'houston')!

      return (
        <>
          <p>
            The famous 2010 Princeton study by Daniel Kahneman and Angus Deaton found that emotional
            wellbeing plateaued around $75,000/year. A 2023 follow-up by Matthew Killingsworth using
            real-time data found happiness actually continues rising well beyond that for most people —
            though the rate of increase does slow down.
          </p>

          <h2 className="text-2xl font-bold font-heading text-gray-900 mt-8 mb-3">The Catch: Location Matters Enormously</h2>
          <p>
            A flat dollar figure ignores cost of living. $75,000 in Houston (cost index {houston.costIndex})
            provides dramatically more purchasing power than $75,000 in New York City (cost index {nyc.costIndex}).
          </p>

          <div className="bg-blue-50 rounded-xl p-5 my-6">
            <p className="text-sm text-gray-700">
              <strong>Example:</strong> To get the same purchasing power as $75,000 in Houston, you would
              need approximately <strong>{formatCurrency(compareCities(houston.costIndex, nyc.costIndex, 75000))}</strong>{' '}
              in New York City.
            </p>
          </div>

          <h2 className="text-2xl font-bold font-heading text-gray-900 mt-8 mb-3">A More Useful Framework</h2>
          <p>
            Rather than chasing a fixed dollar number, consider your local living wage as a floor and your
            savings rate as the real metric of financial health. Someone earning $60,000 in a low-cost city
            with a 30% savings rate may have more genuine financial security than someone earning $150,000
            in a high-cost city with a 5% savings rate.
          </p>

          <p className="mt-3">
            Try our <Link href="/calculators/savings-rate" className="text-primary hover:underline">Savings Rate Calculator</Link>{' '}
            to see where you actually stand.
          </p>
        </>
      )
    }

    case 'minimum-wage-vs-living-wage-2026-gap': {
      return (
        <>
          <p>
            $7.25/hour. That&apos;s the US federal minimum wage — unchanged since July 24, 2009. A full-time
            worker earning minimum wage makes $15,080/year before taxes.
          </p>

          <h2 className="text-2xl font-bold font-heading text-gray-900 mt-8 mb-3">The Inflation-Adjusted Reality</h2>
          <p>
            $7.25 in 2009 had the purchasing power of roughly $10.50–$11.00 in 2026 dollars after accounting
            for cumulative inflation. The federal minimum wage has effectively lost over 30% of its real value
            since it was last set.
          </p>

          <h2 className="text-2xl font-bold font-heading text-gray-900 mt-8 mb-3">The Living Wage Gap</h2>
          <p>
            The national average living wage for a single adult is {formatCurrency(usaData.country.livingWage.single.annual)}/year
            (${usaData.country.livingWage.single.hourly}/hour) — nearly 3x the federal minimum wage. In expensive
            cities like San Francisco or New York, the gap exceeds 5x.
          </p>

          <div className="bg-red-50 rounded-xl p-5 my-6">
            <p className="text-sm text-gray-700">
              A minimum wage worker would need to work approximately{' '}
              <strong>{Math.round((usaData.country.livingWage.single.annual / 15080) * 40)} hours/week</strong>{' '}
              to earn the national average living wage — nearly 3x a standard full-time schedule.
            </p>
          </div>

          <h2 className="text-2xl font-bold font-heading text-gray-900 mt-8 mb-3">State Minimum Wages Have Filled Some of the Gap</h2>
          <p>
            While the federal rate is frozen, many states and cities have set their own higher minimums —
            some exceeding $17-23/hour. This explains why on-the-ground wages in cities like Seattle or
            Los Angeles often run well above the federal floor, even for entry-level positions.
          </p>
        </>
      )
    }

    default:
      return null
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const relatedPosts = getRelatedPosts(post.slug)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    author: { '@type': 'Organization', name: 'CALCUFINTOR' },
    publisher: { '@type': 'Organization', name: 'CALCUFINTOR' },
    mainEntityOfPage: `https://calcufintor.vercel.app/blog/${post.slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]} />

        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-3 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
          <span>Updated {new Date(post.updatedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          <span>·</span>
          <span>{post.readingTime} min read</span>
        </div>

        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed [&>p]:mb-4">
          {renderArticleBody(post.slug)}
        </div>

        {post.relatedCalculator && (
          <div className="bg-primary rounded-xl p-6 mt-8 text-center">
            <p className="text-white font-semibold mb-3">Want to run your own numbers?</p>
            <Link
              href={post.relatedCalculator}
              className="inline-block bg-white text-primary font-bold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Try the Calculator →
            </Link>
          </div>
        )}

        <FAQSection faqs={post.faqs} />

        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-5">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {relatedPosts.map(p => <BlogCard key={p.slug} post={p} />)}
            </div>
          </div>
        )}
      </article>
    </>
  )
}
