import { NextResponse } from 'next/server'
import { verifySession } from './lib/adminSession'

export const config = {
  matcher: ['/admin/:path*'],
}

export async function middleware(request) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/admin/login')) {
    return NextResponse.next()
  }

  const cookie = request.cookies.get('admin_session')?.value
  let isValid = false
  try {
    isValid = await verifySession(cookie)
  } catch {
    isValid = false
  }

  if (!isValid) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  return NextResponse.next()
}
