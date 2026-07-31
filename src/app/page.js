import CoreModules from "@/components/home/CoreModules";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <CoreModules />
    </div>
  );
}
