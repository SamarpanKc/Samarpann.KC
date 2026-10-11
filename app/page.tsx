import { CassetteScroller } from "@/components/layout/CassetteScroller";
import { RevealObserver } from "@/components/layout/RevealObserver";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Works } from "@/components/sections/Works";

export default function Home() {
  return (
    <>
      <main className="overflow-x-clip">
        <Hero />
        <Works />
        <About />
        <Services />
        <Process />
        <Experience />
        <Contact />
      </main>
      <CassetteScroller />
      <RevealObserver />
    </>
  );
}
