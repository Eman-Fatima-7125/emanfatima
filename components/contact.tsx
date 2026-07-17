'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Reveal, SectionHeading } from '@/components/reveal'

const EMAIL = 'emantariq197@gmail.com'
const PHONE = '0330 5916492'
const LOCATION = 'Rawalpindi, Pakistan'
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Rawalpindi,Pakistan'

const CONTACT_DETAILS = [
  { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: 'Phone', value: PHONE, href: 'tel:+923305916492' },
  { icon: MapPin, label: 'Location', value: LOCATION, href: MAPS_URL },
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone') || undefined,
          message: data.get('message'),
          honeypot: data.get('_honey'),
        }),
      })

      const result = (await res.json()) as { error?: string }
      if (!res.ok) throw new Error(result.error ?? 'Request failed')

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's Build Something Amazing Together"
            description="Have a project in mind or just want to say hello? My inbox is always open."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex flex-col gap-4">
            {CONTACT_DETAILS.map((detail) => (
              <a
                key={detail.label}
                href={detail.href}
                target={detail.label === 'Location' ? '_blank' : undefined}
                rel={detail.label === 'Location' ? 'noopener noreferrer' : undefined}
                className="glass glow-border group flex items-center gap-4 rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <detail.icon className="size-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {detail.label}
                  </span>
                  <span className="block truncate font-medium">{detail.value}</span>
                </span>
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="glass glow-border p-6 sm:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                  <CheckCircle2 className="size-12 text-primary" aria-hidden />
                  <h3 className="text-lg font-semibold">Message sent!</h3>
                  <p className="max-w-sm text-sm text-muted-foreground">
                    Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-2 border-border bg-transparent"
                    onClick={() => setStatus('idle')}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input type="text" name="_honey" className="hidden" tabIndex={-1} aria-hidden />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" required placeholder="Your name" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="Optional" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-destructive" role="alert">
                      Something went wrong. Please try again or email me directly.
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === 'loading'}
                    className="glow-primary bg-primary font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="size-4 animate-spin" aria-hidden />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="size-4" aria-hidden />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
