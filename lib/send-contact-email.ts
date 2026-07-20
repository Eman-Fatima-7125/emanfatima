import { Resend } from 'resend'
import type { ContactPayload } from '@/lib/contact'

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured.')
  }
  return new Resend(apiKey)
}

function getContactConfig() {
  const to = process.env.CONTACT_TO_EMAIL ?? 'emantariq197@gmail.com'
  const from = process.env.CONTACT_FROM_EMAIL ?? 'Portfolio Contact <onboarding@resend.dev>'

  return { to, from }
}

export async function sendContactEmail(payload: ContactPayload) {
  const resend = getResendClient()
  const { to, from } = getContactConfig()

  const phoneLine = payload.phone ? `\nPhone: ${payload.phone}` : ''

  const { error } = await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: ['emantariq197@gmail.com'],
  replyTo: payload.email,
  subject: `Portfolio contact from ${payload.name}`,
  text: [
    `New message from your portfolio contact form`,
    '',
    `Name: ${payload.name}`,
    `Email: ${payload.email}${phoneLine}`,
    '',
    'Message:',
    payload.message,
  ].join('\n'),
  html: `
    <h2>New portfolio contact message</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    ${payload.phone ? `<p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>` : ''}
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-wrap;">${escapeHtml(payload.message)}</p>
  `.trim(),
})

  if (error) {
    throw new Error(error.message)
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}
