import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { Audiences } from '@/components/sections/Audiences'
import { CapabilityMarquee } from '@/components/sections/CapabilityMarquee'
import { SignatureMoment } from '@/components/sections/SignatureMoment'
import { Trust } from '@/components/sections/Trust'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink-950">
      <Header />
      <main>
        <Hero />
        <CapabilityMarquee />
        <Audiences />
        <SignatureMoment />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
