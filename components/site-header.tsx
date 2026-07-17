'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

const GITHUB_URL = 'https://github.com/Eman-Fatima-7125'
const LINKEDIN_URL = 'https://www.linkedin.com/in/eman-fatima-9975012b6/'
const RESUME_URL = 'https://eman-fatima-7125.github.io/Portfolio/'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={cn(
            'flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300',
            scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent',
          )}
        >
          <a href="#home" className="group flex items-center gap-2" aria-label="Eman Fatima home">
            <span className="glow-primary grid size-9 place-items-center rounded-xl bg-primary/10 font-mono text-lg font-bold text-gradient">
              EF
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <FaGithub className="size-4" aria-hidden />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <FaLinkedinIn className="size-4" aria-hidden />
            </a>
            <Button
              size="sm"
              nativeButton={false}
              className="hidden bg-primary font-medium text-primary-foreground hover:bg-primary/90 sm:inline-flex"
              render={
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                  <Download className="size-4" aria-hidden />
                  Resume
                </a>
              }
            />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="grid size-9 place-items-center rounded-lg border border-border text-foreground lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="glass-strong mt-2 flex flex-col gap-1 rounded-2xl p-3 lg:hidden"
              aria-label="Mobile"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <Button
                size="sm"
                nativeButton={false}
                className="mt-1 bg-primary text-primary-foreground hover:bg-primary/90"
                render={
                  <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                    <Download className="size-4" aria-hidden />
                    Download Resume
                  </a>
                }
              />
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
