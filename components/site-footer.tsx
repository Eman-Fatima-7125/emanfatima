import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/Eman-Fatima-7125', icon: FaGithub },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/eman-fatima-9975012b6/',
    icon: FaLinkedinIn,
  },
  { label: 'Email', href: 'mailto:emantariq197@gmail.com', icon: Mail },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <span className="glow-primary grid size-10 place-items-center rounded-xl bg-primary/10 font-mono text-lg font-bold text-gradient">
              EF
            </span>
            <p className="mt-4 text-lg font-semibold">Eman Fatima</p>
            <p className="mt-1 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Computer Science Student | Frontend Developer | Technology Enthusiast
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Connect
            </h3>
            <div className="mt-4 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="grid size-10 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <social.icon className="size-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          &copy; 2026 Eman Fatima. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
