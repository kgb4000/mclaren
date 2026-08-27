'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { signSession } from '../../lib/adminSession'

const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000
const COOKIE_NAME = 'admin_session'

export async function login(formData) {
  const password = formData.get('password')

  if (!process.env.ADMIN_PASSWORD || !process.env.ADMIN_SESSION_SECRET) {
    console.error(
      new Error('ADMIN_PASSWORD or ADMIN_SESSION_SECRET is not configured')
    )
    redirect('/admin/login?error=1')
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    redirect('/admin/login?error=1')
  }

  const expiresAt = Date.now() + SESSION_DURATION_MS
  const cookieValue = await signSession(expiresAt)
  const cookieStore = await cookies()

  cookieStore.set(COOKIE_NAME, cookieValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    expires: new Date(expiresAt),
  })

  redirect('/admin/analytics')
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete(COOKIE_NAME)
  redirect('/admin/login')
}
