

import localFont from "next/font/local";
import { headers } from 'next/headers';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata() {
  const headersList = await headers(); 
  const subdomain = (headersList.get('x-subdomain') || 'default') as 'blog' | 'shop' | 'default'| 'nextsubdomainseo';
  const seoData: Record<string, { title: string; description: string }> = {
    blog: {
      title: "Joel's Blog - Tips & Tutorials",
      description: "Explore tutorials, coding tips, and tech insights.",
    },
    shop: {
      title: "Joel's Shop - Buy Amazing Tech",
      description: "Discover the best tech products curated for you.",
    },
    nextsubdomainseo: {
      title: "Joel's Shop - Buy Amazing Tech",
      description: "Discover the best tech products curated for you.",
    },
    default: {
      title: "Joel Rajesh's Website",
      description: "Welcome to Joel Rajesh's personal website.",
    },
  };

  return seoData[subdomain] || seoData.default;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
