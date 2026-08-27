const encoder = new TextEncoder()

async function getKey() {
  const secret = process.env.ADMIN_SESSION_SECRET
  if (!secret) {
    throw new Error('ADMIN_SESSION_SECRET is not configured')
  }
  return crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  )
}

function toHex(buffer) {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export async function signSession(expiresAt) {
  const key = await getKey()
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(String(expiresAt)))
  return `${expiresAt}.${toHex(signature)}`
}

export async function verifySession(cookieValue) {
  if (!cookieValue) return false
  const [expiresAtStr, signatureHex] = cookieValue.split('.')
  if (!expiresAtStr || !signatureHex) return false

  const expiresAt = Number(expiresAtStr)
  if (!Number.isFinite(expiresAt) || Date.now() > expiresAt) return false

  const expected = await signSession(expiresAt)
  return expected === cookieValue
}
