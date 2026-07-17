import { GraduationCap, MapPin, Languages, Target } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Reveal, SectionHeading } from '@/components/reveal'

const CARDS = [
  {
    icon: GraduationCap,
    title: 'Education',
    lines: [
      'Bachelor\u2019s in Computer Science',
      'Fatima Jinnah Women University',
      '2023 \u2013 2027',
      'CGPA: 3.47 / 4.00',
    ],
  },
  {
    icon: MapPin,
    title: 'Location',
    lines: ['Rawalpindi, Pakistan'],
  },
  {
    icon: Languages,
    title: 'Languages',
    lines: ['English', 'Urdu'],
  },
  {
    icon: Target,
    title: 'Career Interests',
    lines: [
      'Frontend Development',
      'Software Engineering',
      'Educational Technology',
      'Community Platforms',
      'Interactive Applications',
    ],
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading eyebrow="Who I Am" title="About Me" />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Motivated and detail-oriented Computer Science undergraduate student with strong
              interest in web development, software engineering, embedded systems, and
              problem-solving. Experienced in designing responsive web applications, educational
              platforms, mobile applications, and hardware-based projects.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {CARDS.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.08}>
                <Card className="glass glow-border h-full gap-3 p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                      <card.icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="font-semibold">{card.title}</h3>
                  </div>
                  <ul className="space-y-1 text-sm leading-relaxed text-muted-foreground">
                    {card.lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
