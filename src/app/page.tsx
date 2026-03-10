import { Hero } from "@/components/Hero";
import { ProductDemo } from "@/components/ProductDemo";
import { HowItWorks } from "@/components/HowItWorks";
import { ExampleAnalysis } from "@/components/ExampleAnalysis";
import { WhyItMatters } from "@/components/WhyItMatters";
import { ComingSoon } from "@/components/ComingSoon";
import { FAQ } from "@/components/FAQ";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ProductDemo />
      <HowItWorks />
      <ExampleAnalysis />
      <WhyItMatters />
      <ComingSoon />
      <FAQ />
      <Waitlist />
      <Footer />
    </main>
  );
}
