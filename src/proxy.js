import { NextResponse } from 'next/server'


export function proxy(request) {
     const { pathname } = request.nextUrl
     if (!pathname.startsWith("/api/feedback")) {
          return NextResponse.json({
               status: 404
          })
     }
     return NextResponse.next()


     // return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
     matcher: '/api/:path*',
}