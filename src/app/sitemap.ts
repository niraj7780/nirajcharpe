import { MetadataRoute } from 'next';
import { websiteExamples } from '@/data/website-examples';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://niraj.dev';

  const baseRoutes = [
    '',
    '/websites',
    '/ai-tools',
    '/automation',
    '/process',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const websiteRoutes = websiteExamples.map((site) => ({
    url: `${baseUrl}/websites/${site.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...baseRoutes, ...websiteRoutes];
}
