import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import MarqueeSection from "@/components/MarqueeSection";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <Preloader />
      <ScrollAnimations />
      <CustomCursor />
      <Navbar />
      <Hero />
      <WorkSection />
      <AboutSection />
      <MarqueeSection />
      <Footer />
    </main>
  );
}
