import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const hostname = req.nextUrl.hostname
  const subdomain = hostname.split('.')[0]
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-subdomain', subdomain);
  return NextResponse.next(
    {
      request: {
        headers: requestHeaders,
      }
    }
  )
}

export const config = {
  matcher: '/:path*'
}