import { headers } from "next/headers";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headerList = await headers(); 
  const subdomain = headerList.get("x-subdomain") || "default";
  const baseUrl = `https://${subdomain}.joelrajesh.in`;

  const sitemapData = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(),
    },
  ];

  return sitemapData;
}
