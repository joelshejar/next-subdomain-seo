import { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap():Promise<MetadataRoute.Sitemap>{
  const headerList = headers();
  const subdomain = headerList.get("x-subdomain") || "";
  const baseUrl = `https://${subdomain}.joelrajesh.in`

  const response = await fetch(`${baseUrl}`)
  const productList = await response.json()

  const productEntries: MetadataRoute.Sitemap = productList.map(({id})=>({
    url:`${baseUrl}/${id}`
  }))

  return [
    ...productEntries,
  ]
}