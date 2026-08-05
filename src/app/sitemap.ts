import { MetadataRoute } from 'next'
import { posts } from '@/data/posts'
import { authors } from '@/data/authors'

// ─── SITEMAP-LASTMOD:START — gegenereerd door alpha1/scripts/sitemap_lastmod.py (niet met de hand bewerken)
// Per route de datum van de NIEUWSTE commit die inhoud onder src/app/<route>/ toevoegde of
// wijzigde. Handmatig bijwerken hoeft niet en mag niet — draai het script hierboven opnieuw.
// De vloot-gate `check_fleet_deploys.py --sitemap-lastmod` wordt rood zodra een route een
// nieuwere inhoud-commit draagt dan de datum hieronder; de oude regel 'bump manually' hield
// van 2026-04-01 tot 2026-08-05 niet, en dat kostte 210 URL's hun vers-signaal bij Google.
const STATIC_LASTMOD_BY_ROUTE: Record<string, string> = {
    '/gratis-scan': '2026-08-01',
    '/review-pakket': '2026-07-25',
    '/privacy': '2026-07-25',
    '/legal': '2026-07-25',
    '/algemene-voorwaarden': '2026-07-27',
}
const STATIC_LASTMOD_FALLBACK = '2026-08-01'
const STATIC_LASTMOD = new Date(`${STATIC_LASTMOD_FALLBACK}T00:00:00Z`)
const staticLastmod = (route: string): Date =>
    new Date(`${STATIC_LASTMOD_BY_ROUTE[route] ?? STATIC_LASTMOD_FALLBACK}T00:00:00Z`)
// ─── SITEMAP-LASTMOD:EIND

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.tafelai.nl'

    // Latest article date = proxy for "/ and /blog last changed"
    const latestPostDate = posts.length
        ? new Date(
            posts.reduce((max, p) => (new Date(p.date) > new Date(max) ? p.date : max), posts[0].date)
          )
        : STATIC_LASTMOD

    // Homepage + blog-index: vers zodra er een artikel bij komt — hetzelfde signaal als de 14 andere merken.
    const indexRoutes = ['/', '/blog'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: latestPostDate,
        changeFrequency: 'weekly' as const,
        priority: route === '/' ? 1 : 0.8,
    }))

    // Static routes — per route de datum van z'n nieuwste inhoud-commit (het blok bovenaan).
    const staticPages = [
        '/gratis-scan',
        '/review-pakket',
        '/privacy',
        '/legal',
        '/algemene-voorwaarden',
    ]
    const staticRoutes = staticPages.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: staticLastmod(route),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Dynamic blog post routes
    const blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    // Dynamic author routes
    const authorRoutes = authors.map((author) => ({
        url: `${baseUrl}/author/${author.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.4,
    }))

    return [...indexRoutes, ...staticRoutes, ...blogRoutes, ...authorRoutes]
}
