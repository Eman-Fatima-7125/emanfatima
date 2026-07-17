import { Award } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Reveal, SectionHeading } from '@/components/reveal'

const CERTS = [
  {
    title: 'Meta Android Developer',
    subtitle: 'Professional Certificate',
    issuer: 'Meta',
  },
  {
    title: 'Meta React Native',
    subtitle: 'Specialization',
    issuer: 'Meta',
  },
  {
    title: 'Google Data Analytics',
    subtitle: 'Professional Certificate',
    issuer: 'Google',
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Credentials"
            title="Certifications"
            description="Industry-recognized programs completed to sharpen my craft."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.08}>
              <Card className="glass glow-border h-full gap-4 p-6 transition-transform duration-300 hover:-translate-y-1">
                <span className="glow-primary grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Award className="size-6" aria-hidden />
                </span>
                <div>
                  <h3 className="font-semibold leading-snug">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.subtitle}</p>
                </div>
                <p className="mt-auto font-mono text-xs uppercase tracking-widest text-secondary">
                  {cert.issuer}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
