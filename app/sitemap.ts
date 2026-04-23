import type { MetadataRoute } from 'next';
import { SITE_URL } from './config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, priority: 1 },
    { url: `${SITE_URL}/podpis`, priority: 0.7 },
  ];
}
