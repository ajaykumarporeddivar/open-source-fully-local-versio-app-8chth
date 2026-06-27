import type { MetadataRoute } from 'next'

const BASE = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://open-source-fully-local-version-desktop-app-manus-ai.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/', '/_next/'] },
    sitemap: `${BASE}/sitemap.xml`,
  }
}