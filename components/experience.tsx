import { Briefcase, Megaphone } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const EXPERIENCE = [
  {
    icon: Briefcase,
    role: 'Frontend Developer',
    org: 'Freelance & Local Clients',
    points: [
      'Designed responsive websites tailored to client branding',
      'Developed reusable, component-driven interfaces',
      'Improved user experience through thoughtful UI design',
      'Delivered business websites for local clients',
    ],
  },
  {
    icon: Megaphone,
    role: 'Marketing Intern',
    org: 'Eco Zindagi Pvt Ltd',
    points: [
      'Executed digital marketing activities',
      'Contributed to content strategy and planning',
      'Supported brand promotion campaigns',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Journey"
            title="Experience"
            description="Hands-on work across development and digital marketing."
          />
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative border-l border-border pl-8 sm:pl-10">
            {EXPERIENCE.map((item, i) => (
              <Reveal key={item.role} delay={i * 0.1}>
                <div className="relative pb-10 last:pb-0">
                  <span className="glow-primary absolute -left-[41px] grid size-8 place-items-center rounded-full bg-primary/15 text-primary sm:-left-[49px]">
                    <item.icon className="size-4" aria-hidden />
                  </span>
                  <div className="glass glow-border rounded-2xl p-6">
                    <h3 className="text-lg font-semibold">{item.role}</h3>
                    <p className="mt-0.5 font-mono text-sm text-primary">{item.org}</p>
                    <ul className="mt-4 space-y-2">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
