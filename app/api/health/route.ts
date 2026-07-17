import { NextResponse } from 'next/server'

export async function GET() {
  const emailConfigured = Boolean(process.env.RESEND_API_KEY)

  return NextResponse.json({
    status: 'ok',
    emailConfigured,
    timestamp: new Date().toISOString(),
  })
}
