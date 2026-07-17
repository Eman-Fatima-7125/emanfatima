export type ContactPayload = {
  name: string
  email: string
  phone?: string
  message: string
  honeypot?: string
}

export type ContactValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string }

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactPayload(body: unknown): ContactValidationResult {
  if (!body || typeof body !== 'object') {
    return { ok: false, error: 'Invalid request body.' }
  }

  const { name, email, phone, message, honeypot } = body as Record<string, unknown>

  if (typeof honeypot === 'string' && honeypot.trim().length > 0) {
    return { ok: false, error: 'Invalid submission.' }
  }

  if (typeof name !== 'string' || name.trim().length < 2) {
    return { ok: false, error: 'Please enter your name (at least 2 characters).' }
  }

  if (typeof email !== 'string' || !EMAIL_PATTERN.test(email.trim())) {
    return { ok: false, error: 'Please enter a valid email address.' }
  }

  if (typeof message !== 'string' || message.trim().length < 10) {
    return { ok: false, error: 'Please enter a message (at least 10 characters).' }
  }

  if (phone !== undefined && phone !== null && typeof phone !== 'string') {
    return { ok: false, error: 'Phone number must be text.' }
  }

  const trimmedPhone = typeof phone === 'string' ? phone.trim() : ''

  return {
    ok: true,
    data: {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: trimmedPhone || undefined,
      message: message.trim(),
    },
  }
}
