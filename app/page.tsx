import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
import { Certifications } from '@/components/certifications'
import { WhyHireMe } from '@/components/why-hire-me'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <WhyHireMe />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
