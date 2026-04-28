import type { MetadataRoute } from 'next';

import { nav } from '@/data/site';

const BASE_URL = 'https://hypnose-06-guylaine-demarle.fr';

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((item) => ({
    url: `${BASE_URL}${item.href === '/' ? '' : item.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: item.href === '/' ? 1.0 : 0.7,
  }));
}
