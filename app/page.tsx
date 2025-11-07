import Hero from "@/components/sections/Hero";
import AboutChallenge from "@/components/sections/AboutChallenge";
import TargetAudience from "@/components/sections/TargetAudience";
import ProgramFeatures from "@/components/sections/ProgramFeatures";
import Bonuses from "@/components/sections/Bonuses";
import Prizes from "@/components/sections/Prizes";
import AboutMariana from "@/components/sections/AboutMariana";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <AboutChallenge />
      <TargetAudience />
      <ProgramFeatures />
      <Bonuses />
      <Prizes />
      <Testimonials />
      <AboutMariana />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
