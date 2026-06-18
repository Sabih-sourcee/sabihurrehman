import { useState } from 'react'
import { corePrinciples, curriculum, type CurriculumDay } from '../data/curriculum'
import { SectionHeader } from './LandingPage'

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 text-on-surface-variant transition-transform ${open ? 'rotate-180' : ''}`}
    >
      <path
        d="M5 8L10 13L15 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DayAccordion({ day }: { day: CurriculumDay }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-outline/80 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-surface-container-high/50"
        aria-expanded={open}
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-outline/80 bg-background text-label-lg text-on-surface-variant">
          {String(day.day).padStart(2, '0')}
        </span>
        <span className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className="text-label-sm text-on-surface-variant">
            Day {day.day}
          </span>
          <span className="text-title-lg text-on-surface">{day.title}</span>
        </span>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <ul className="flex flex-col gap-2.5 border-t border-outline/80 bg-background px-5 py-4 pl-[4.25rem]">
          {day.topics.map((topic) => (
            <li
              key={topic}
              className="relative pl-4 text-body-md text-pretty text-on-surface-variant before:absolute before:left-0 before:top-[0.55rem] before:h-1 before:w-1 before:rounded-full before:bg-outline-variant before:content-['']"
            >
              {topic}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function CurriculumSection() {
  return (
    <section id="curriculum" className="flex flex-col gap-7">
      <SectionHeader
        index="03"
        title="Curriculum"
        heading="14 days. Two modes. Ship something real."
      />

      <div className="flex flex-col gap-5">
        {curriculum.map((week) => (
          <div
            key={week.week}
            className="surface-card overflow-hidden"
          >
            <div className="border-b border-outline/80 bg-surface-container-high px-5 py-5">
              <p className="text-label-sm text-secondary">
                Week {week.week} — {week.mode}
              </p>
              <h3 className="mt-1.5 text-headline-md text-balance text-on-surface">
                {week.subtitle}
              </h3>
            </div>

            <div>
              {week.days.map((day) => (
                <DayAccordion key={day.day} day={day} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="surface-card p-6">
        <p className="text-label-sm text-on-surface-variant">
          Core principles — drill every day
        </p>
        <ul className="mt-5 flex flex-col gap-3.5">
          {corePrinciples.map((principle) => (
            <li
              key={principle}
              className="flex gap-3 text-body-lg text-pretty text-on-surface"
            >
              <span className="mt-0.5 shrink-0 text-secondary">→</span>
              <span>{principle}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
