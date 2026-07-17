import type { ComponentType } from 'react'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiC,
  SiCplusplus,
  SiPython,
  SiMysql,
  SiSupabase,
  SiArduino,
  SiEspressif,
  SiGithub,
  SiGooglecolab,
  SiProteus,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import {
  Layout,
  Smartphone,
  Code2,
  Database,
  Cpu,
  Wrench,
  CircuitBoard,
  Radio,
  AudioWaveform,
  FileCode2,
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Reveal, SectionHeading } from '@/components/reveal'

type Skill = { name: string; icon: ComponentType<{ className?: string }>; color?: string }

const CATEGORIES: {
  title: string
  icon: ComponentType<{ className?: string }>
  skills: Skill[]
}[] = [
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: 'text-[#E34F26]' },
      { name: 'CSS3', icon: SiCss, color: 'text-[#1572B6]' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-[#F7DF1E]' },
      { name: 'React.js', icon: SiReact, color: 'text-[#61DAFB]' },
      { name: 'Bootstrap', icon: SiBootstrap, color: 'text-[#7952B3]' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
    ],
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: [
      { name: 'Flutter', icon: SiFlutter, color: 'text-[#54C5F8]' },
      { name: 'Dart', icon: SiDart, color: 'text-[#0175C2]' },
      { name: 'Firebase', icon: SiFirebase, color: 'text-[#FFCA28]' },
    ],
  },
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'C', icon: SiC, color: 'text-[#A8B9CC]' },
      { name: 'C++', icon: SiCplusplus, color: 'text-[#00599C]' },
      { name: 'Java', icon: FaJava, color: 'text-[#EA2D2E]' },
      { name: 'Python', icon: SiPython, color: 'text-[#3776AB]' },
      { name: 'SQL', icon: Database, color: 'text-primary' },
      { name: 'AVR C', icon: FileCode2, color: 'text-secondary' },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'MySQL', icon: SiMysql, color: 'text-[#4479A1]' },
      { name: 'Oracle', icon: Database, color: 'text-[#F80000]' },
      { name: 'Supabase', icon: SiSupabase, color: 'text-[#3ECF8E]' },
    ],
  },
  {
    title: 'Embedded Systems',
    icon: Cpu,
    skills: [
      { name: 'Arduino Uno', icon: SiArduino, color: 'text-[#00979D]' },
      { name: 'ESP32', icon: SiEspressif, color: 'text-[#E7352C]' },
      { name: 'ATmega32', icon: Cpu, color: 'text-primary' },
      { name: 'Proteus', icon: SiProteus, color: 'text-[#0098D8]' },
      { name: 'Sensors', icon: Radio, color: 'text-secondary' },
      { name: 'PWM', icon: AudioWaveform, color: 'text-primary' },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'GitHub', icon: SiGithub, color: 'text-foreground' },
      { name: 'VS Code', icon: Code2, color: 'text-[#007ACC]' },
      { name: 'Arduino IDE', icon: SiArduino, color: 'text-[#00979D]' },
      { name: 'Google Colab', icon: SiGooglecolab, color: 'text-[#F9AB00]' },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Tech Stack"
            title="Skills & Technologies"
            description="A versatile toolkit spanning frontend, mobile, embedded systems, and everything in between."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category, i) => (
            <Reveal key={category.title} delay={(i % 3) * 0.08}>
              <Card className="glass glow-border group h-full gap-4 p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <category.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li key={skill.name}>
                      <span className="flex items-center gap-2 rounded-lg border border-border bg-background/50 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">
                        <skill.icon className={`size-4 ${skill.color ?? 'text-primary'}`} />
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
