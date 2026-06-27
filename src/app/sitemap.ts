import type { MetadataRoute } from 'next'

const BASE = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://open-source-fully-local-version-desktop-app-manus-ai.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: BASE,                         lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/dashboard`,           lastModified: now, changeFrequency: 'daily',   priority: 0.9 },
    { url: `${BASE}/dashboard/summarize`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/dashboard/rephrase`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/dashboard/generate`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/dashboard/settings`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ]
}