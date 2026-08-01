import CoreModules from "@/components/home/CoreModules";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <CoreModules />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
