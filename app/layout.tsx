import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eman-fatima-7125.github.io/Portfolio/'

export const metadata: Metadata = {
  title: 'Eman Fatima | Frontend Developer | Computer Science Student',
  description:
    'Portfolio of Eman Fatima, a Computer Science student specializing in React, Flutter, web development, embedded systems, and innovative technology solutions.',
  generator: 'v0.app',
  metadataBase: new URL(siteUrl),
  keywords: [
    'Eman Fatima',
    'Frontend Developer',
    'React Developer',
    'Flutter Developer',
    'Computer Science Student',
    'Web Developer',
    'Embedded Systems',
    'Portfolio',
  ],
  authors: [{ name: 'Eman Fatima' }],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Eman Fatima | Frontend Developer | Computer Science Student',
    description:
      'Portfolio of Eman Fatima, a Computer Science student specializing in React, Flutter, web development, embedded systems, and innovative technology solutions.',
    siteName: 'Eman Fatima Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eman Fatima | Frontend Developer | Computer Science Student',
    description:
      'Portfolio of Eman Fatima, a Computer Science student specializing in React, Flutter, web development, embedded systems, and innovative technology solutions.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0f1e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
