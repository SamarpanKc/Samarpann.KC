import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ClientStrip from "./components/ClientStrip";
import WorkSection from "./components/WorkSection";
import PhilosophySection from "./components/PhilosophySection";
import ContactFooter from "./components/ContactFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ClientStrip />
        <WorkSection />
        <PhilosophySection />
      </main>
      <ContactFooter />
    </>
  );
}
