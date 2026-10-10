import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { Clarity } from '@/components/sections/clarity';
import { Toolkit } from '@/components/sections/toolkit';
import { AskFermor } from '@/components/sections/ask-fermor';
import { Forecast } from '@/components/sections/forecast';
import { Trust } from '@/components/sections/trust';
import { FinalCTA } from '@/components/sections/final-cta';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Clarity />
        <Toolkit />
        <AskFermor />
        <Forecast />
        <Trust />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
