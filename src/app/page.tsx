"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import {
  AboutSection,
  CommunitiesSection,
  EventsSection,
  CTASection,
  TestimonialSection,
} from "@/components/Home";
import Hero from "@/components/Home/Hero";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-hidden line-bg px-2 md:px-8">
      <div className="w-full overflow-hidden border-x border-gray-300">
        <Navbar />
        <Hero />
        <div className="line-bg w-full md:h-16 h-6"></div>
        <AboutSection />
        <CommunitiesSection />
        <EventsSection />
        <TestimonialSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}
