"use client";

import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { EmblaCarousel } from "@/components/Events/Carousel";

export default function EventsPage() {
  return (
    <div className="min-h-screen w-full overflow-hidden line-bg px-2 md:px-8">
      <div className="w-full overflow-hidden border-x border-gray-300">
        <Navbar />
        <section className="w-full px-0">
          <EmblaCarousel />
          <div className="w-full h-auto grid grid-row-2 grid-cols-2">
            <div className="border border-gray-300"></div>
            <div className="border border-gray-300"></div>
            <div className="border border-gray-300"></div>
            <div className="border border-gray-300"></div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
