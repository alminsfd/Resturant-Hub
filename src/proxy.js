import { NextResponse } from 'next/server'


export function proxy(request) {




     // Redirect to login page if not authenticated
     return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
     matcher: '/about/:path*',
}