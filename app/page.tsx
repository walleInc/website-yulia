import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Audience } from "@/components/Audience";
import { Method } from "@/components/Method";
import { Quote } from "@/components/Quote";
import { Reviews } from "@/components/Reviews";
import { PricingCTA } from "@/components/PricingCTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col pb-20 md:pb-0">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Audience />
        <Method />
        <Quote />
        <Reviews />
        <PricingCTA />
        <FAQ />
      </main>
      <Footer />
      <MobileStickyCta />
      <ScrollToTop />
    </div>
  );
}
