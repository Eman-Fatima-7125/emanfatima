import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Reveal, SectionHeading } from '@/components/reveal'

const GITHUB_URL = 'https://github.com/Eman-Fatima-7125'

const PROJECTS = [
  {
  title: 'Hope Learn / Decision Making Module',
  description:
    'A Flutter-based educational therapy module designed to improve decision-making skills among children with autism through interactive learning activities.',
  image: '/projects/brightmind.png',
  tech: ['Flutter', 'Dart', 'Firebase', 'UI/UX'],
  github: 'https://github.com/Eman-Fatima-7125/HopeLearn',
  demo: 'https://github.com/Eman-Fatima-7125/HopeLearn',
},
  {
    title: 'Student Hub: E-Commerce Platform',
    description:
      'A web-based community platform allowing university entrepreneurs to showcase, market, and sell their products to fellow students.',
    image: '/projects/studenthub.png',
    tech: ['React', 'Supabase', 'Database'],
     github: 'https://github.com/Eman-Fatima-7125/Student-Hub',
  demo: 'https://github.com/Eman-Fatima-7125/Student-Hub',
  },
  {
    title: 'Console-Based Contact Management System (C)',
    description:
      'a console-based Contact Management System using C programming as an introductory software development project to strengthen fundamental programming and problem-solving skills.',
    image: '/projects/transport.png',
    tech: ['C Programming' , 'File Handling' , 'Data Structures' , 'Problem Solving' , 'Console Application Development'],
    github: 'https://github.com/Eman-Fatima-7125/Address-Book',
    demo: 'https://github.com/Eman-Fatima-7125/Address-Book',
    
  },
  {
    title: 'Google Maps Integrated Route Optimizer',
    description:
      'Implemented Dijkstra\u2019s Algorithm to calculate optimized routes using graph datasets, integrated with the Google Maps API.',
    image: '/projects/routeoptimizer.png',
    tech: ['Python', 'Algorithms', 'Google Maps API'],
    github: 'https://github.com/Eman-Fatima-7125/Visualizing-paths-and-interactive-maps',
    demo: 'https://github.com/Eman-Fatima-7125/Visualizing-paths-and-interactive-maps',
  },
  {
    title: 'Database Driven Courier Management System',
    description:
      'A Java desktop application built using OOP principles with a MySQL database integration for managing shipments and deliveries.',
    image: '/projects/courier.png',
    tech: ['Java', 'OOP', 'MySQL'],
    github: 'https://github.com/Eman-Fatima-7125/Courier-Management-System',
    demo: 'https://github.com/Eman-Fatima-7125/Courier-Management-System',
    
  },
  {
    title: 'Salon Website',
    description:
      'A responsive, conversion-focused business website designed for salon companies with an elegant modern aesthetic.',
    image: '/projects/salon.png',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    github: 'https://github.com/Eman-Fatima-7125/Faiza-s-Salon-Website',
    demo: 'https://eman-fatima-7125.github.io/Faiza-s-Salon-Website/',
  },
  {
    title: 'Event Management Website',
    description:
      'A responsive corporate event management website with schedules, listings, and a clean professional interface.',
    image: '/projects/event.png',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    github: 'https://github.com/Eman-Fatima-7125/Event-Management-',
    demo: 'https://eman-fatima-7125.github.io/Event-Management-/',
  },
]


export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Featured Projects"
            description="A selection of web, mobile, and embedded systems projects built to solve real problems."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.08}>
              <Card className="glass glow-border group flex h-full flex-col overflow-hidden p-0 transition-transform duration-300 hover:-translate-y-1.5">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col gap-4 p-5">
                  <div className="space-y-2">
                    <h3 className="text-balance font-semibold leading-snug">{project.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  <ul className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <li key={t}>
                        <Badge
                          variant="secondary"
                          className="border border-primary/20 bg-primary/10 text-xs font-normal text-primary"
                        >
                          {t}
                        </Badge>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex gap-2 pt-1">
                    <Button
                      size="sm"
                      variant="outline"
                      nativeButton={false}
                      className="flex-1 border-border bg-transparent hover:border-primary/50 hover:text-primary"
                      render={
                        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                          <FaGithub className="size-4" aria-hidden />
                          Code
                        </a>
                      }
                    />
                    <Button
                      size="sm"
                      nativeButton={false}
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                      render={
                        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="size-4" aria-hidden />
                          Demo
                        </a>
                      }
                    />
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
