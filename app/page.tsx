import { Hero, Tours, About, Testimonials, Contact, Footer } from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Tours />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
