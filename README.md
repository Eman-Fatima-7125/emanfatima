# Eman Fatima Portfolio

Personal portfolio site built with Next.js, React, and Tailwind CSS.

## Features

- Responsive portfolio sections (hero, about, skills, projects, experience, certifications, contact)
- Contact form with server-side validation and email delivery via [Resend](https://resend.com)
- Vercel Analytics in production

## Local development

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Add your [Resend API key](https://resend.com/api-keys) to `.env.local`:

```env
RESEND_API_KEY=re_your_key_here
CONTACT_TO_EMAIL=emantariq197@gmail.com
```

4. Start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel (recommended)

This project uses Next.js API routes for the contact form, so it needs a server host like **Vercel** (GitHub Pages alone will not run the backend).

1. Push this repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Add these environment variables in **Project Settings → Environment Variables**:
   - `RESEND_API_KEY` — from [resend.com/api-keys](https://resend.com/api-keys)
   - `CONTACT_TO_EMAIL` — where form submissions are sent (e.g. `emantariq197@gmail.com`)
   - `NEXT_PUBLIC_SITE_URL` — your live URL (e.g. `https://your-portfolio.vercel.app`)
4. Deploy.

### Resend setup notes

- On the free tier without a custom domain, Resend sends from `onboarding@resend.dev` to the email address on your Resend account.
- For production with a custom domain, verify your domain at [resend.com/domains](https://resend.com/domains) and set:

```env
CONTACT_FROM_EMAIL=Portfolio <contact@yourdomain.com>
```

## API routes

| Route | Method | Description |
|-------|--------|-------------|
| `/api/contact` | POST | Accepts contact form submissions |
| `/api/health` | GET | Health check and email config status |

### Contact API example

```json
POST /api/contact
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "Optional",
  "message": "Hello, I'd like to work with you."
}
```

## Scripts

- `npm run dev` — start development server
- `npm run build` — production build
- `npm run start` — run production server locally
- `npm run lint` — run ESLint
