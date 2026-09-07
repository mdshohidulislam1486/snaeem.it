import { Background } from "@/components/Background";
import { Concerns } from "@/components/Concerns";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Nav } from "@/components/Nav";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Support } from "@/components/Support";

export default function Page() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Concerns />
        <Skills />
        <Process />
        <Support />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
