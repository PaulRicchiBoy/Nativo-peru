import { Hero, Tours, About,  Contact, Footer } from "@/components/sections";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Tours />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}