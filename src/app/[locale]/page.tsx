import { Hero } from "@/components/Hero";
import { ProductDemo } from "@/components/ProductDemo";
import { HowItWorks } from "@/components/HowItWorks";
import { ExampleAnalysis } from "@/components/ExampleAnalysis";
import { WhyItMatters } from "@/components/WhyItMatters";
import { ComingSoon } from "@/components/ComingSoon";
import { FAQ } from "@/components/FAQ";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";
import {setRequestLocale} from 'next-intl/server';

export default async function Home({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Enable static rendering
  setRequestLocale(locale);

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
