/**
 * Dynamic Sitemap for Next.js App Router
 * --------------------------------------
 * This sitemap includes:
 *  1. Static pages like /, /about, /contact, /blogs
 *  2. Dynamic blogs (fetched from API) → only published ones
 *  3. Dynamic services (fetched from API) → only active ones
 *
 * For each entry:
 *  - Uses domain + slug for URL
 *  - Sets lastModified, changeFrequency, and priority for SEO hints
 *
 * Output is served automatically at: https://cst-website-one.vercel.app/sitemap.xml
 */

import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  //   const websiteUrl = "https://cst-website-one.vercel.app";
  const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  // 1. Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${websiteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${websiteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${websiteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${websiteUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // 2. Fetch blogs
  const blogsRes = await fetch(`${apiUrl}/api/v1/blogs/`, {
    next: { revalidate: 60 }, // ISR: revalidate sitemap every 60s
  });
  const blogsJson = await blogsRes.json();
  const blogs = blogsJson.data;

  // 3. Fetch services
  const servicesRes = await fetch(`${apiUrl}/api/v1/services/`, {
    next: { revalidate: 60 },
  });
  const servicesJson = await servicesRes.json();
  const services = servicesJson.data;

  // 4. Blogs sitemap entries (only published blogs)
  const dynamicBlogEntries: MetadataRoute.Sitemap = blogs
    .filter((b: any) => b.published)
    .map((b: any) => ({
      url: `${websiteUrl}/blogs/${b.slug}`,
      lastModified: new Date(b.updated_at),
      changeFrequency: "daily",
      priority: 0.7,
    }));

  // 5. Services sitemap entries (only active services)
  const dynamicServicesEntries: MetadataRoute.Sitemap = services
    .filter((s: any) => s.is_active)
    .map((s: any) => ({
      url: `${websiteUrl}/services/${s.slug}`,
      lastModified: new Date(s.updated_at),
      changeFrequency: "daily",
      priority: 0.7,
    }));

  return [...staticPages, ...dynamicBlogEntries, ...dynamicServicesEntries];
}
