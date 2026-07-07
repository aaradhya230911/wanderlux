import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Destinations } from "@/components/sections/Destinations";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Packages } from "@/components/sections/Packages";
import { Gallery } from "@/components/sections/Gallery";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Destinations />
        <WhyChooseUs />
        <Testimonials />
        <Packages />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
