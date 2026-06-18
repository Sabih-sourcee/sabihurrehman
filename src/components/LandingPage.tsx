import { useState, type FormEvent } from 'react'

function ExternalLinkIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-on-surface-variant transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path
        d="M5 15L15 5M15 5H8M15 5V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SectionHeader({
  index,
  title,
  heading,
}: {
  index: string
  title: string
  heading?: string
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-4">
        <span className="text-label-sm whitespace-nowrap text-on-surface-variant">
          {index} / {title}
        </span>
        <div className="h-px flex-1 bg-outline/80" />
      </div>
      {heading && (
        <h2 className="text-headline-lg text-on-surface">{heading}</h2>
      )}
    </div>
  )
}

export function AnnouncementBar() {
  return (
    <div className="border-b border-outline/80 bg-surface-container-low px-5 py-2.5 text-center sm:px-8 lg:px-12">
      <p className="text-label-lg text-on-surface-variant">
        Demo class registrations open — limited spots available
      </p>
    </div>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-outline/80 bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-[3.75rem] w-full max-w-content items-center justify-between px-5 sm:px-8 lg:px-12">
        <span className="text-title-lg text-on-surface">Sabih Ur Rehman</span>
        <a
          href="#book"
          className="rounded-lg bg-primary px-4 py-2 text-body-md font-semibold text-on-primary transition-opacity hover:opacity-90"
        >
          Register
        </a>
      </nav>
    </header>
  )
}

const PROFILE_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBMzrNQKU55lPXQ3rEW6aG8xVEYHMRpb2Xa-ooUK0OF9pocSoc5Osik1Vvn_Fd58YRIDpoPdnV7jnbFvAmkfD8wvC74H1g39Blt7YhQ1HjNRUOMDtQV77zIS16SjU6IhcR9-rHNQSLLnF0DGtJ7K6ahPMWMrBJujkhxRvCrF4rvfVrMptCf81abODfaPhjdSX1x2aEalETP2MEQO-E4hSZQLeDsCrC0xbC5mdBHDCo1dMZaafWV6sS-KDPJdzvYJs6--DmmammShAeG'

type FormStatus = 'idle' | 'sending' | 'success'

function BookingForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')

    window.setTimeout(() => {
      setStatus('success')
      window.setTimeout(() => {
        form.reset()
        setStatus('idle')
      }, 3000)
    }, 1500)
  }

  const inputClass =
    'h-11 w-full rounded-lg border border-outline/80 bg-background px-4 text-body-md text-on-surface placeholder:text-on-surface-variant/50 transition-colors focus:border-primary focus:outline-none focus:ring-0'

  const buttonLabel =
    status === 'sending'
      ? 'Sending…'
      : status === 'success'
        ? 'Done — check WhatsApp'
        : 'Book my demo seat'

  const buttonClass =
    status === 'success'
      ? 'rounded-lg bg-success py-3 text-body-lg font-semibold text-on-success transition-opacity disabled:opacity-70'
      : 'rounded-lg bg-accent py-3 text-body-lg font-semibold text-on-accent transition-opacity hover:opacity-90 disabled:opacity-70'

  const fieldClass = 'flex flex-col gap-1.5'

  return (
    <form
      className={`flex flex-col ${compact ? 'gap-3 md:gap-4' : 'gap-4'}`}
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:gap-3">
        <div className={fieldClass}>
          <label htmlFor="name" className="text-label-lg text-on-surface-variant">
            Naam
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            disabled={status !== 'idle'}
            placeholder="Apna full naam likhen"
            className={inputClass}
          />
        </div>

        <div className={fieldClass}>
          <label
            htmlFor="phone"
            className="text-label-lg text-on-surface-variant"
          >
            WhatsApp number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            disabled={status !== 'idle'}
            placeholder="03xx xxxxxxx"
            className={inputClass}
          />
        </div>
      </div>

      <div className={fieldClass}>
        <label
          htmlFor="status"
          className="text-label-lg text-on-surface-variant"
        >
          Current status
        </label>
        <select
          id="status"
          name="status"
          disabled={status !== 'idle'}
          className={inputClass}
        >
          <option>Student</option>
          <option>Job hunting</option>
          <option>Working professional</option>
          <option>Just VibeCoding</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={status !== 'idle'}
        className={buttonClass}
      >
        {buttonLabel}
      </button>
    </form>
  )
}

export function HeroSection() {
  return (
    <section id="book">
      <div className="flex flex-col items-start gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start lg:gap-10 xl:grid-cols-[minmax(0,1fr)_24rem] xl:gap-14">
        <div className="flex w-full min-w-0 flex-col gap-6 lg:gap-7">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-outline/80 bg-surface-container">
              <img
                src={PROFILE_IMAGE}
                alt="Sabih Ur Rehman"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex min-w-0 flex-col gap-0.5 text-left">
              <span className="text-title-lg text-on-surface">
                Sabih Ur Rehman
              </span>
              <span className="text-label-lg text-on-surface-variant">
                VibeCoding instructor · @vibe_coder
              </span>
            </div>
          </div>

          <div className="flex max-w-xl flex-col gap-3 text-left">
            <h1 className="text-display-lg text-balance text-on-surface max-md:text-[1.75rem] max-md:leading-9">
              Coding seekh rahe ho? Ya sirf tutorials dekh rahe ho?
            </h1>
            <p className="text-body-lg text-pretty text-on-surface-variant">
              14-day live cohort. Week 1: Think Mode. Week 2: Build Mode. Real
              projects, AI-native stack, zero tutorial hell.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {['Think Mode', 'Build Mode', '14 days', 'Free demo'].map(
              (chip) => (
                <span
                  key={chip}
                  className="rounded-md border border-outline/80 bg-surface-container px-3 py-1.5 text-label-lg text-on-surface-variant"
                >
                  {chip}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="surface-card w-full min-w-0 p-5 lg:sticky lg:top-[4.75rem] lg:p-6">
          <div className="mb-5 flex flex-col gap-1.5">
            <p className="text-label-sm text-on-surface-variant">
              01 / Spot book karo
            </p>
            <h2 className="text-headline-md text-balance text-on-surface">
              Ek Zoom demo.{' '}
              <span className="text-secondary">Koi fees nahi.</span>
            </h2>
            <p className="text-body-md text-on-surface-variant">
              Apna spot secure karo for the next batch.
            </p>
          </div>
          <BookingForm compact />
        </div>
      </div>
    </section>
  )
}

const projects = [
  {
    tag: 'Portfolio',
    title: 'Personal portfolio',
    url: 'sabih-source.github.io/portfolio',
    href: 'https://sabih-source.github.io/portfolio',
    description: 'Projects, skills, and the full vibe check.',
  },
  {
    tag: 'Latest work',
    title: 'FounderBreif',
    url: 'founderbreif.vercel.app',
    href: 'https://founderbreif.vercel.app/',
    description: 'SaaS landing page — design system through deployment.',
    featured: true,
  },
  {
    tag: 'G.O.A.T',
    title: 'FactorLED',
    url: 'factorled.pk',
    href: 'https://factorled.pk',
    description: 'Industrial e-commerce client site, live in production.',
  },
]

export function WorkSection() {
  return (
    <section id="projects" className="flex flex-col gap-7">
      <SectionHeader
        index="02"
        title="Proof of work"
        heading="Jo maine banaya — aur jo tum banaoge."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.href}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex h-full flex-col gap-4 rounded-lg border bg-surface-container p-5 transition-colors hover:bg-surface-container-high ${
              project.featured
                ? 'border-secondary/25 hover:border-secondary/40'
                : 'border-outline/80'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <span
                className={`text-label-sm rounded-md px-2 py-1 ${
                  project.featured
                    ? 'bg-secondary/10 text-secondary'
                    : 'bg-surface-container-high text-on-surface-variant'
                }`}
              >
                {project.tag}
              </span>
              <ExternalLinkIcon />
            </div>

            <div className="mt-auto flex flex-col gap-1.5">
              <h3 className="text-title-lg text-on-surface">{project.title}</h3>
              <span className="text-label-lg text-on-surface-variant/90">
                {project.url}
              </span>
              <p className="text-body-md text-pretty text-on-surface-variant">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-outline/80 bg-surface-container-low py-12">
      <div className="mx-auto flex w-full max-w-content flex-col items-center gap-5 px-5 text-center sm:px-8 lg:px-12">
        <div className="flex flex-col gap-1">
          <div className="text-title-lg text-on-surface">Sabih Ur Rehman</div>
          <div className="text-label-sm normal-case tracking-normal text-on-surface-variant">
            VibeCoding instructor
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          <a
            href="#book"
            className="text-label-lg text-on-surface-variant transition-colors hover:text-on-surface"
          >
            Book demo
          </a>
          <a
            href="#projects"
            className="text-label-lg text-on-surface-variant transition-colors hover:text-on-surface"
          >
            Work
          </a>
          <a
            href="#curriculum"
            className="text-label-lg text-on-surface-variant transition-colors hover:text-on-surface"
          >
            Curriculum
          </a>
        </nav>

        <p className="text-body-md text-on-surface-variant">
          Built in public — chai optional.
        </p>
        <p className="text-label-sm text-on-surface-variant/70">
          © 2026 Sabih Ur Rehman
        </p>
      </div>
    </footer>
  )
}
