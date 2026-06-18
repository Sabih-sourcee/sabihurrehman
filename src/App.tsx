import type { ReactNode } from 'react'
import { CurriculumSection } from './components/CurriculumSection'
import {
  AnnouncementBar,
  Footer,
  Header,
  HeroSection,
  WorkSection,
} from './components/LandingPage'
import { useReveal } from './hooks/useReveal'

function Reveal({ children }: { children: ReactNode }) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  )
}

function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />

      <main className="mx-auto flex w-full max-w-content flex-col px-5 pb-content pt-10 sm:px-8 lg:px-10">
        <Reveal>
          <HeroSection />
        </Reveal>
        <Reveal>
          <div className="section-divider">
            <WorkSection />
          </div>
        </Reveal>
        <Reveal>
          <div className="section-divider">
            <CurriculumSection />
          </div>
        </Reveal>
      </main>

      <Footer />
    </>
  )
}

export default App
