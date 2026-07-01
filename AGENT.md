# AGENT.md — CALCUFINTOR
## World's #1 Financial Calculator Hub — Full Roadmap & Status

---

## PROJECT IDENTITY

```
Name:       CALCUFINTOR
Tagline:    Calculate Your Financial Future, Everywhere
Mission:    Become the world's largest and highest-ranking financial calculator platform
URL:        calcufintor.vercel.app
GitHub:     github.com/nidatiktoker1/calcufintor
Stack:      Next.js 14 + TypeScript + Tailwind CSS
Deploy:     Vercel (auto-deploys on every git push)
Colors:     Blue #0066FF | Gold #FFB81C
Fonts:      Montserrat (headings) | Inter (body)
```

---

## CURRENT STATUS — AS OF PHASE 3 COMPLETE

```
✅ Phase 1 — DONE (live)
✅ Phase 2 — DONE (live)
✅ Phase 3 — DONE (live)
⏳ Phase 4 — Waiting 15 days for traffic data before starting
⏳ Phase 5 — Planned (architecture + global expansion)
⏳ Phase 6 — Planned (user features + real-time data)
⏳ Phase 7 — Planned (monetization at scale)
```

### Live Site Numbers Right Now
```
Pages:       76+ (all indexed via sitemap.xml)
Countries:   4 (USA, Canada, UK, Australia)
Cities:      44 (25 USA, 7 Canada, 6 UK, 6 Australia)
Calculators: 7
Blog Posts:  5
Tests:       184 (all passing, 100% green)
```

---

## WHAT HAS BEEN BUILT — PHASE BY PHASE

---

### PHASE 1 — MVP (COMPLETE ✅)

**Goal:** Build a functional USA-only financial calculator site with proper SEO foundations.

**What was built:**
- Next.js 14 App Router project with TypeScript strict mode
- 5 US cities: New York, Los Angeles, Chicago, Houston, Phoenix
- 3 calculators: Living Wage, Cost of Living, Salary Comparison
- 20 total pages
- Full SEO on every page: unique title, meta description, H1, canonical, OG tags, JSON-LD schema, breadcrumb
- Auto-generated sitemap.xml and robots.txt
- 101 Jest tests — all passing

**Files created:**
```
data/usa.ts
lib/calculations.ts
lib/utils.ts
components/Navigation.tsx
components/Footer.tsx
components/HeroSection.tsx
components/CityCard.tsx
components/CalculatorCard.tsx
components/LivingWageCalc.tsx
components/CostOfLivingCalc.tsx
components/SalaryCalc.tsx
components/CostBreakdown.tsx
components/CityCompareTable.tsx
components/Breadcrumb.tsx
app/page.tsx
app/layout.tsx
app/calculators/page.tsx
app/calculators/living-wage/page.tsx
app/calculators/cost-of-living/page.tsx
app/calculators/salary-comparison/page.tsx
app/countries/usa/page.tsx
app/countries/usa/[city]/page.tsx
app/about/page.tsx
app/privacy-policy/page.tsx
app/terms-of-service/page.tsx
app/sitemap.ts
app/robots.ts
```

**SEO implemented:**
- Title formula: "Cost of Living in {City} {Year} | CALCUFINTOR"
- Calculator formula: "{Calculator Name} Calculator {Year} | CALCUFINTOR"
- City schema (JSON-LD), WebApplication schema, BreadcrumbList schema

---

### PHASE 2 — CONTENT EXPANSION (COMPLETE ✅)

**Goal:** Multiply page count, add 3 new countries, 4 new calculators, dominate more keywords.

**What was built:**
- USA cities expanded from 5 → 25 (added Dallas, Seattle, Denver, Boston, Miami, Atlanta, San Francisco, Austin + more)
- 3 new countries added: Canada (7 cities), UK (6 cities), Australia (6 cities)
- 4 new calculators: Tax Calculator, Rent Affordability, Hourly to Salary, Savings Rate
- Navigation + Footer updated with all new content
- Sitemap updated with all new URLs
- 159 Jest tests — all passing (58 new tests)

**New files created:**
```
data/canada.ts
data/uk.ts
data/australia.ts
components/TaxCalc.tsx
components/RentAffordabilityCalc.tsx
components/HourlyToSalaryCalc.tsx
components/SavingsRateCalc.tsx
app/calculators/tax-calculator/page.tsx
app/calculators/rent-affordability/page.tsx
app/calculators/hourly-to-salary/page.tsx
app/calculators/savings-rate/page.tsx
app/countries/canada/page.tsx
app/countries/canada/[city]/page.tsx
app/countries/uk/page.tsx
app/countries/uk/[city]/page.tsx
app/countries/australia/page.tsx
app/countries/australia/[city]/page.tsx
```

**Files updated:**
```
data/usa.ts              — 5 → 25 cities
components/Navigation.tsx — added all new countries + calculators
components/Footer.tsx     — added all new links
app/sitemap.ts            — added all new URLs
app/page.tsx              — added countries section, 6 calculators shown
app/calculators/page.tsx  — updated to show all 7 calculators
```

---

### PHASE 3 — SEO & CONTENT DEPTH (COMPLETE ✅)

**Goal:** Add blog system, FAQ schema for rich snippets, internal linking, Google Search Console readiness.

**What was built:**
- Blog system with index page + 5 in-depth articles
- FAQPage JSON-LD schema on every article (eligible for Google FAQ rich results)
- Article JSON-LD schema with publishedDate + modifiedDate
- Every article links internally to relevant calculators and city pages
- "Related Articles" section on each post (2 related posts shown)
- "Latest Insights" section added to homepage
- Blog link added to Navigation and Footer
- Google Search Console verification slot added to layout.tsx
- 184 Jest tests — all passing (25 new tests)

**Blog posts published:**
```
/blog/cost-of-living-nyc-vs-chicago-2026
/blog/living-wage-by-state-2026
/blog/best-cities-for-remote-workers-cost-of-living-2026
/blog/how-much-salary-do-you-need-to-be-happy-2026
/blog/minimum-wage-vs-living-wage-2026-gap
```

**New files created:**
```
data/blog/posts.ts
data/blog/content-nyc-chicago.ts
components/blog/BlogCard.tsx
components/blog/FAQSection.tsx
app/blog/page.tsx
app/blog/[slug]/page.tsx
```

**Files updated:**
```
components/Navigation.tsx — Blog link added
components/Footer.tsx     — Blog link added
app/sitemap.ts            — Blog URLs added
app/page.tsx              — Latest Insights section added
app/layout.tsx            — Search Console verification slot added
```

---

## COMPLETE FILE STRUCTURE (CURRENT)

```
calcufintor/
├── __mocks__/
│   └── styleMock.js
├── __tests__/
│   ├── BlogCard.test.tsx
│   ├── CalculatorCard.test.tsx
│   ├── CityCard.test.tsx
│   ├── CostOfLivingCalc.test.tsx
│   ├── FAQSection.test.tsx
│   ├── Footer.test.tsx
│   ├── HourlyToSalaryCalc.test.tsx
│   ├── LivingWageCalc.test.tsx
│   ├── Navigation.test.tsx
│   ├── RentAffordabilityCalc.test.tsx
│   ├── SalaryCalc.test.tsx
│   ├── SavingsRateCalc.test.tsx
│   ├── TaxCalc.test.tsx
│   ├── blog.test.ts
│   ├── calculations.test.ts
│   ├── data.test.ts
│   └── utils.test.ts
├── app/
│   ├── about/page.tsx
│   ├── blog/
│   │   ├── [slug]/page.tsx
│   │   └── page.tsx
│   ├── calculators/
│   │   ├── [calculator]/page.tsx
│   │   ├── cost-of-living/page.tsx
│   │   ├── hourly-to-salary/page.tsx
│   │   ├── living-wage/page.tsx
│   │   ├── rent-affordability/page.tsx
│   │   ├── salary-comparison/page.tsx
│   │   ├── savings-rate/page.tsx
│   │   ├── tax-calculator/page.tsx
│   │   └── page.tsx
│   ├── countries/
│   │   ├── australia/[city]/page.tsx
│   │   ├── australia/page.tsx
│   │   ├── canada/[city]/page.tsx
│   │   ├── canada/page.tsx
│   │   ├── uk/[city]/page.tsx
│   │   ├── uk/page.tsx
│   │   ├── usa/[city]/page.tsx
│   │   └── usa/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── terms-of-service/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── blog/
│   │   ├── BlogCard.tsx
│   │   └── FAQSection.tsx
│   ├── Breadcrumb.tsx
│   ├── CalculatorCard.tsx
│   ├── CityCard.tsx
│   ├── CityCompareTable.tsx
│   ├── CostBreakdown.tsx
│   ├── CostOfLivingCalc.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── HourlyToSalaryCalc.tsx
│   ├── LivingWageCalc.tsx
│   ├── Navigation.tsx
│   ├── RentAffordabilityCalc.tsx
│   ├── SalaryCalc.tsx
│   ├── SavingsRateCalc.tsx
│   └── TaxCalc.tsx
├── data/
│   ├── blog/
│   │   ├── content-nyc-chicago.ts
│   │   └── posts.ts
│   ├── australia.ts
│   ├── canada.ts
│   ├── uk.ts
│   └── usa.ts
├── lib/
│   ├── calculations.ts
│   └── utils.ts
├── jest.config.js
├── jest.setup.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## SEO RULES — ENFORCED ON EVERY PAGE

```
Every page MUST have:
✅ Unique <title> — max 60 chars
✅ Unique meta description — max 160 chars
✅ One H1 per page — includes target keyword
✅ Canonical URL
✅ OG tags (title, description, url)
✅ JSON-LD schema (varies by page type)
✅ Breadcrumb component (visual + schema)

Title formulas:
- City page:       "Cost of Living in {City} {Year} | CALCUFINTOR"
- Calculator page: "{Calculator Name} Calculator {Year} | CALCUFINTOR"
- Country page:    "Living Wage in {Country} {Year} | CALCUFINTOR"
- Blog post:       Custom per post — includes target keyword

Schema types in use:
- WebSite (homepage)
- WebApplication (calculator pages)
- City (city pages)
- Country (country pages)
- Article (blog posts)
- FAQPage (blog posts — enables Google FAQ rich snippets)
- BreadcrumbList (all pages)
- CollectionPage (calculators index)
```

---

## CALCULATION FORMULAS

```typescript
// Cost of living comparison
compareCities(fromIndex, toIndex, salary) → salary * (toIndex / fromIndex)

// Salary needed in new city
salaryNeeded(salary, fromIndex, toIndex) → salary * (toIndex / fromIndex)

// Hourly to annual (2080 standard work hours)
hourlyToAnnual(hourly) → hourly * 2080

// Annual to monthly
annualToMonthly(annual) → annual / 12

// Annual to hourly
annualToHourly(annual) → annual / 2080

// Federal income tax (2026 brackets, single filer, standard deduction $14,600)
calculateFederalTax(income) → progressive bracket calculation

// FICA taxes (SS 6.2% up to $168,600 + Medicare 1.45%)
calculateSSMedicare(income) → (min(income, 168600) * 0.062) + (income * 0.0145)

// Rent affordability (30% rule)
maxRent(income) → (income / 12) * 0.30

// Savings rate
savingsRate(income, expenses) → ((income - expenses) / income) * 100
```

---

## TESTING RULES

```
Every component:   minimum 5 tests
Every calculator:  minimum 8 tests (including edge cases)
Every data file:   minimum 5 tests
Blog system:       minimum 10 tests

Run before EVERY commit:
npm test        → must show 100% passing
npm run build   → must complete with zero errors
```

---

## QUALITY GATES — BEFORE EVERY GIT PUSH

```
[ ] npm test           — all tests pass (currently 184)
[ ] npm run build      — no TypeScript or build errors
[ ] npx tsc --noEmit   — zero type errors in app code
[ ] Check localhost:3000 — all pages load correctly
[ ] Check mobile 375px — no layout breaks
[ ] No console errors in browser
[ ] git add . && git commit -m "descriptive message" && git push
```

---

## THE NORTH STAR GOAL

> **CALCUFINTOR will be the #1 ranking, most comprehensive financial calculator
> platform on the internet — covering every country, every calculator type,
> in every language — with more pages, more depth, and more accuracy than
> any competitor worldwide.**

### What #1 Globally Means in Numbers:
```
Target: 300-500 pages
Target: 20+ calculator types
Target: 15+ countries
Target: 100+ cities worldwide
Target: 50+ blog articles
Target: Top 3 Google ranking for "living wage calculator", "cost of living calculator"
Target: 100,000 monthly visitors within 12 months
Target: $3,000-$10,000/month revenue from ads + affiliates
```

### Why This Is Achievable:
```
1. Programmatic SEO scales — one template = hundreds of pages
2. No competitor has ALL countries + ALL calculator types in one place
3. Financial data is evergreen — pages rank for years
4. Low competition in non-US markets (Canada, Australia, UK data is sparse)
5. Template engine (Phase 5) means adding a country = adding a data file (1 hour of work)
```

---

## FUTURE PHASES

---

### PHASE 4 — MONETIZATION
**Trigger:** Start after 15-day SEO waiting period + traffic data reviewed
**Goal:** First revenue from the site

```
Step 1: Review 15-day SEO tracker data
Step 2: Apply for Google AdSense (requires ~50 visits/day)
Step 3: Add affiliate links immediately (no traffic minimum):
        - YNAB / Mint on Savings Rate calculator
        - Job board affiliates (Indeed) on city pages
        - Moving services on Cost of Living calculator
Step 4: Add GDPR consent banner (required for UK/EU traffic)
```

**New files to create:**
```
components/ConsentBanner.tsx
components/AdSlot.tsx
lib/affiliates.ts
```

---

### PHASE 5 — TEMPLATE ENGINE + GLOBAL EXPANSION
**Trigger:** After Phase 4 is live
**Goal:** Scale to 300+ pages without 300x the work

**Architecture change — dynamic routing:**
```
BEFORE (Phase 1-3):
  app/calculators/living-wage/page.tsx    ← one file per calculator
  app/calculators/cost-of-living/page.tsx
  app/countries/usa/[city]/page.tsx       ← one folder per country

AFTER (Phase 5):
  app/calculators/[calc]/page.tsx         ← ALL calculators in one route
  app/countries/[country]/[city]/page.tsx ← ALL countries in one route
```

**New calculator types to add (20 total):**
```
Tier 1 (build first — highest search volume):
  - Mortgage Calculator
  - Retirement / 401k Calculator
  - Compound Interest Calculator
  - Net Worth Calculator
  - Debt Payoff Calculator
  - Inflation Calculator
  - Budget Planner (full monthly)
  - Paycheck Calculator (with all deductions)
  - Investment Return Calculator
  - Currency Converter

Tier 2 (build after Tier 1 is live):
  - Emergency Fund Calculator
  - Student Loan Calculator
  - Car Affordability Calculator
  - FIRE Number Calculator
  - Take-Home Pay by State Calculator
  - Cost of Raising a Child Calculator
  - Freelancer Rate Calculator
  - Tip Calculator
  - Break-Even Calculator
  - Wealth Building Calculator
```

**New countries to add (15 total):**
```
Tier 1 (English-speaking + high search volume):
  - India
  - Germany
  - France
  - Singapore
  - UAE (Dubai focus)
  - Ireland
  - New Zealand

Tier 2:
  - Japan
  - Spain
  - Netherlands
  - Switzerland
  - South Africa
  - Brazil
  - Mexico
  - Sweden
```

**Scale math:**
```
20 calculators × 15 countries = 300 calculator pages
15 countries × 8 cities avg   = 120 city pages
Blog articles scaled to 50+   = 50+ blog pages
Total target:                   470+ pages
```

---

### PHASE 6 — REAL DATA + USER FEATURES
**Goal:** Replace static data with live APIs, add user accounts

```
Real data sources:
  - BLS API (Bureau of Labor Statistics) — free, official US wage data
  - Census API — population + demographics
  - Numbeo API — real-time global cost of living (~$50/month)
  - ECB API — European wage data (free)

User features:
  - Save + share calculations (shareable URLs)
  - User accounts (Supabase auth)
  - Email alerts for cost of living updates
  - Monthly "Cost of Living Report" newsletter
```

**New dependencies:**
```
  supabase (auth + database)
  resend or mailchimp (email)
  swr (data fetching + caching)
```

---

### PHASE 7 — MULTILINGUAL + SCALE
**Goal:** Dominate non-English markets, hit 1M monthly visitors

```
Languages to add:
  - Spanish (targets Spain + Latin America simultaneously)
  - French (targets France + Canada French speakers)
  - German
  - Arabic (targets UAE + Saudi Arabia)
  - Hindi (targets India — 1.4B people)

Technical approach:
  - Next.js i18n routing (/es/, /fr/, /de/, etc.)
  - One content translation per language × all existing pages
  - 470 pages × 5 languages = 2,350+ total pages

At this scale, CALCUFINTOR becomes nearly impossible to compete with.
```

---

## 12-MONTH TRAFFIC + REVENUE ROADMAP

```
Month 1-2  (Phase 3 SEO kicks in):
  - 0 → 500 monthly visitors
  - 0 → 50 pages indexed
  - Revenue: $0 (building)

Month 3-4  (Phase 4 + first AdSense):
  - 500 → 5,000 monthly visitors
  - AdSense approval + first ad revenue
  - Revenue: $50-200/month

Month 5-6  (Phase 5 launches — 300+ pages live):
  - 5,000 → 20,000 monthly visitors
  - New calculator types drive new keyword rankings
  - Revenue: $200-800/month

Month 7-9  (Phase 6 — real data + user features):
  - 20,000 → 50,000 monthly visitors
  - Affiliate revenue + AdSense growing
  - Revenue: $800-2,000/month

Month 10-12  (Phase 7 — multilingual):
  - 50,000 → 150,000+ monthly visitors
  - Multiple income streams active
  - Revenue: $3,000-10,000/month
```

---

## HOW WE ACHIEVE #1 RANKING — THE STRATEGY

```
1. TOPICAL AUTHORITY
   Google rewards sites that cover a topic completely.
   More calculators + more countries + more blog content =
   Google sees CALCUFINTOR as THE authority on financial calculators.
   Competitors cover 1-3 countries. We will cover 15.

2. PROGRAMMATIC SEO AT SCALE
   Every new calculator × every country = new keyword rankings automatically.
   One Mortgage Calculator page = one ranking opportunity.
   Mortgage Calculator × 15 countries = 15 ranking opportunities.
   Mortgage Calculator × 15 countries × 8 cities = 120+ ranking opportunities.
   All from one template.

3. LONG-TAIL KEYWORD DOMINANCE
   "cost of living in singapore 2026" = low competition, clear intent.
   "mortgage calculator dubai" = low competition, high intent.
   We don't need to beat NerdWallet for "mortgage calculator" —
   we beat nobody-sites for 500 specific long-tail queries,
   which adds up to more traffic than one #1 ranking anyway.

4. CONTENT VELOCITY
   Template engine = new content without new development time.
   Adding Germany takes 1 hour (create data/germany.ts + push).
   At that speed, we out-publish every competitor.

5. INTERNAL LINKING MOAT
   76 pages now all link to each other.
   At 300+ pages, the internal link graph becomes so dense
   that Google's understanding of the site's authority compounds
   with every new page we add.
```

---

## DECISION LOG

```
2026-06 — Phase 1 built and deployed. 101 tests. 20 pages. USA only.
2026-06 — Phase 2 built and deployed. 159 tests. 76 pages. 4 countries.
2026-06 — Phase 3 built and deployed. 184 tests. Blog + FAQ schema added.
2026-06 — Decision: Wait 15 days for traffic data before Phase 4.
2026-06 — Decision: Build template engine FIRST in Phase 5, then scale both axes simultaneously.
2026-06 — North Star confirmed: #1 global financial calculator platform.
```

---

## CONTACT & ACCOUNTS

```
GitHub:         github.com/nidatiktoker1/calcufintor
Vercel:         calcufintor.vercel.app (auto-deploy on push)
Search Console: search.google.com/search-console
Email:          nidatiktoker1@gmail.com
```

---

*Last updated after Phase 3 completion. Next update: after 15-day SEO review + Phase 4 launch.*
