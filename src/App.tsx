import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { ClientsBar } from '@/components/sections/ClientsBar'
import { Audiences } from '@/components/sections/Audiences'
import { CapabilityMarquee } from '@/components/sections/CapabilityMarquee'
import { Industries } from '@/components/sections/Industries'
import { Approach } from '@/components/sections/Approach'
import { SignatureMoment } from '@/components/sections/SignatureMoment'
import { Trust } from '@/components/sections/Trust'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Header />
      <main>
        <Hero />
        <ClientsBar />
        <Audiences />
        <CapabilityMarquee />
        <Industries />
        <Approach />
        <SignatureMoment />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
