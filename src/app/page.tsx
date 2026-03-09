import { Hero } from "@/components/Hero";
import { ProductDemo } from "@/components/ProductDemo";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyItMatters } from "@/components/WhyItMatters";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ProductDemo />
      <HowItWorks />
      <WhyItMatters />
      <Waitlist />
      <Footer />
    </main>
  );
}
