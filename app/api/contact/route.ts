// import { NextResponse } from 'next/server'
// import { validateContactPayload } from '@/lib/contact'
// import { sendContactEmail } from '@/lib/send-contact-email'

// export const runtime = 'nodejs'

// export async function POST(request: Request) {
//   try {
//     const body = await request.json()
//     const result = validateContactPayload(body)

//     if (!result.ok) {
//       return NextResponse.json({ error: result.error }, { status: 400 })
//     }

//     await sendContactEmail(result.data)

//     return NextResponse.json({ success: true })
//   } catch (error) {
//     console.error('[contact]', error)

//     const message =
//       error instanceof Error && error.message.includes('RESEND_API_KEY')
//         ? 'Email service is not configured yet.'
//         : 'Unable to send your message. Please try again later.'

//     return NextResponse.json({ error: message }, { status: 500 })
//   }
// }




import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

type ContactData = {
  name: string
  email: string
  phone?: string
  message: string
}

export async function sendContactEmail(data: ContactData) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is missing')
  }

  const { name, email, phone, message } = data

  const response = await resend.emails.send({
    // Keep this until you verify your own custom domain in Resend
    from: 'onboarding@resend.dev',

    // Your receiving email
    to: 'emantariq197@gmail.com',

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

  if (response.error) {
    throw new Error(response.error.message)
  }

  return response
}
