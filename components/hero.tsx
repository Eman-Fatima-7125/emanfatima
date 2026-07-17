'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CircleCheckBig, Database } from 'lucide-react'
import {
  SiReact,
  SiFlutter,
  SiJavascript,
  SiPython,
} from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

const ROLES = [
  'Computer Science Student',
  'Frontend Developer',
  'Flutter Developer',
  'Problem Solver',
  'Technology Enthusiast',
]

const BADGES = ['React Developer', 'Flutter Developer', 'Embedded Systems', 'Open Source Enthusiast']

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1600)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
          )
        },
        deleting ? 45 : 90,
      )
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words])

  return text
}

const FLOATING = [
  { icon: SiReact, label: 'React', className: 'left-[6%] top-[12%]', color: 'text-[#61DAFB]', delay: 0 },
  { icon: SiFlutter, label: 'Flutter', className: 'right-[8%] top-[6%]', color: 'text-[#54C5F8]', delay: 0.6 },
  { icon: SiJavascript, label: 'JavaScript', className: 'left-[2%] bottom-[24%]', color: 'text-[#F7DF1E]', delay: 1.1 },
  { icon: SiPython, label: 'Python', className: 'right-[4%] bottom-[30%]', color: 'text-[#3776AB]', delay: 0.3 },
  { icon: FaGithub, label: 'GitHub', className: 'right-[24%] bottom-[8%]', color: 'text-foreground', delay: 0.9 },
  { icon: Database, label: 'Database', className: 'left-[24%] top-[4%]', color: 'text-secondary', delay: 1.4 },
]

export function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-2 animate-pulse rounded-full bg-primary" aria-hidden />
            Available for freelance & full-time roles
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-gradient">Eman Fatima</span>
          </h1>

          <p className="mt-4 flex items-center gap-1 font-mono text-lg text-primary sm:text-xl">
            <span aria-live="polite">{typed}</span>
            <span className="inline-block h-6 w-[2px] animate-pulse bg-primary" aria-hidden />
          </p>

          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Computer Science undergraduate passionate about building responsive web applications,
            mobile applications, embedded systems, and technology solutions that solve real-world
            problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              nativeButton={false}
              className="glow-primary bg-primary font-medium text-primary-foreground hover:bg-primary/90"
              render={
                <a href="#projects">
                  View My Projects
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              }
            />
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="border-border bg-transparent font-medium hover:border-secondary/60 hover:text-secondary"
              render={<a href="#contact">Contact Me</a>}
            />
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {BADGES.map((badge) => (
              <li key={badge} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CircleCheckBig className="size-4 text-primary" aria-hidden />
                {badge}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-8 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="absolute inset-12 rounded-full bg-secondary/10 blur-3xl" aria-hidden />

          <div className="glass glow-border relative flex h-full w-full items-center justify-center rounded-[2rem] p-6">
            <div className="w-full max-w-xs rounded-xl border border-border bg-background/60 p-4 font-mono text-xs leading-relaxed shadow-xl">
              <div className="mb-3 flex gap-1.5" aria-hidden>
                <span className="size-2.5 rounded-full bg-secondary/70" />
                <span className="size-2.5 rounded-full bg-primary/70" />
                <span className="size-2.5 rounded-full bg-muted-foreground/40" />
              </div>
              <pre className="whitespace-pre-wrap text-muted-foreground">
                <span className="text-secondary">const</span>{' '}
                <span className="text-foreground">developer</span> = {'{'}
                {'\n'}  name: <span className="text-primary">&apos;Eman Fatima&apos;</span>,
                {'\n'}  stack: [<span className="text-primary">&apos;React&apos;</span>,{' '}
                <span className="text-primary">&apos;Flutter&apos;</span>],
                {'\n'}  passion: <span className="text-primary">&apos;building things&apos;</span>,
                {'\n'}  learning: <span className="text-secondary">true</span>,
                {'\n'}
                {'}'}
              </pre>
            </div>

            {FLOATING.map(({ icon: Icon, label, className, color, delay }) => (
              <motion.div
                key={label}
                className={`absolute ${className} glass grid size-12 place-items-center rounded-xl`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay }}
                aria-hidden
              >
                <Icon className={`size-6 ${color}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
