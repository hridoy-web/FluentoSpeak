import CoreModules from "@/components/home/CoreModules";
import FAQSection from "@/components/home/FAQSection";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <CoreModules />
      <FAQSection />
    </div>
  );
}
