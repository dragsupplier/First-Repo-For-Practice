import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { Audiences } from '@/components/sections/Audiences'
import { CapabilityMarquee } from '@/components/sections/CapabilityMarquee'
import { Approach } from '@/components/sections/Approach'
import { Metrics } from '@/components/sections/Metrics'
import { SignatureMoment } from '@/components/sections/SignatureMoment'
import { Trust } from '@/components/sections/Trust'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink-950">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <CapabilityMarquee />
        <Audiences />
        <Approach />
        <Metrics />
        <SignatureMoment />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
