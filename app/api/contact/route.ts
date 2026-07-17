import { NextResponse } from 'next/server'
import { validateContactPayload } from '@/lib/contact'
import { sendContactEmail } from '@/lib/send-contact-email'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = validateContactPayload(body)

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 400 })
    }

    await sendContactEmail(result.data)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[contact]', error)

    const message =
      error instanceof Error && error.message.includes('RESEND_API_KEY')
        ? 'Email service is not configured yet.'
        : 'Unable to send your message. Please try again later.'

    return NextResponse.json({ error: message }, { status: 500 })
  }
}
