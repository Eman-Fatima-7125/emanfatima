import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

const resend = new Resend(process.env.RESEND_API_KEY)

type ContactData = {
  name: string
  email: string
  phone?: string
  message: string
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is missing')
    }

    const body = (await request.json()) as ContactData

    const { name, email, phone, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      )
    }

    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',

      to: ['fatima.eman.7125@gmail.com'],

      replyTo: email,

      subject: `New Portfolio Contact Message from ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          ${
            phone
              ? `<p><strong>Phone:</strong> ${phone}</p>`
              : ''
          }

          <p><strong>Message:</strong></p>

          <p>
            ${message.replace(/\n/g, '<br />')}
          </p>
        </div>
      `,
    })

if (error) {
  console.error("RESEND ERROR DETAILS:", error)

  return NextResponse.json(
    {
      error: error.message,
    },
    {
      status: 500,
    }
  )
}

    return NextResponse.json(
      { success: true },
      { status: 200 }
    )

  } catch (error) {
    console.error('[contact]', error)

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'Unable to send message',
      },
      { status: 500 }
    )
  }
}
