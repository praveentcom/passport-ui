import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '../constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_CONFIG.baseUrl}/sitemap.xml`,
  }
}
