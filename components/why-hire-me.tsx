import { Lightbulb, Layers, Rocket, HeartHandshake } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Reveal, SectionHeading } from '@/components/reveal'

const REASONS = [
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    text: 'I enjoy converting ideas into practical technology solutions.',
  },
  {
    icon: Layers,
    title: 'Full Stack Understanding',
    text: 'Experience across frontend, databases, mobile apps, and embedded systems.',
  },
  {
    icon: Rocket,
    title: 'Fast Learner',
    text: 'Continuously improving skills and exploring emerging technologies.',
  },
  {
    icon: HeartHandshake,
    title: 'User Focused Development',
    text: 'Building solutions with usability and real-world impact in mind.',
  },
]

export function WhyHireMe() {
  return (
    <section className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Value"
            title="Why Work With Me?"
            description="What I bring to every project, team, and collaboration."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.08}>
              <Card className="glass glow-border h-full gap-3 p-6 text-center transition-transform duration-300 hover:-translate-y-1">
                <span className="glow-primary mx-auto grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <reason.icon className="size-6" aria-hidden />
                </span>
                <h3 className="font-semibold">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{reason.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
