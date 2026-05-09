import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ContactForm } from "@/components/sections/ContactForm";
import { EmergencyBanner } from "@/components/sections/EmergencyBanner";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyUs } from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <main id="main-content">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <EmergencyBanner />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
