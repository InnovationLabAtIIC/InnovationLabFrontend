"use client";

import Image from "next/image";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { EmblaCarousel } from "@/components/Events/Carousel";
import LearnMoreSection from "@/components/LearnMoreSection";

const events = [
  {
    code: "EV_01",
    title: "Material Futures Workshop",
    description:
      "Hands-on exploration of adaptive materials and low-energy prototyping pipelines.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
  },
  {
    code: "EV_02",
    title: "Creative Systems Sprint",
    description:
      "Cross-discipline studio for designing interfaces, visuals, and interactive narratives.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
  {
    code: "EV_03",
    title: "Urban Data Lab",
    description:
      "Collaborative mapping of city signals to build practical, community-facing prototypes.",
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=900&q=80",
  },
  {
    code: "EV_04",
    title: "XR Habitat Demo",
    description:
      "Immersive showcase of spatial ideas with rapid feedback from builders and visitors.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
  {
    code: "EV_05",
    title: "Public Prototype Review",
    description:
      "Open floor critique to refine concepts, improve clarity, and accelerate implementation.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
  },
  {
    code: "EV_06",
    title: "Community Design Jam",
    description:
      "Image-first co-creation format where teams iterate live with mentors and peers.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
  },
  {
    code: "EV_07",
    title: "AI Interaction Sprint",
    description:
      "Rapid experiments on conversational interfaces, agent behaviors, and assistive flows.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
  },
  {
    code: "EV_08",
    title: "Future City Assembly",
    description:
      "Large-format visual review of speculative urban systems and implementation pathways.",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen w-full overflow-hidden line-bg px-2 md:px-8">
      <div className="w-full overflow-hidden border-x border-gray-300">
        <Navbar />
        {/* 
        <h2 className="bg-white py-12 border-y border-gray-300 px-6 my-6 text-[clamp(34px,6vw,72px)] font-black uppercase leading-[0.92] tracking-[-0.08em] text-neutral-900">
          EV<span className="text-cyan-500">E</span>NTS
        </h2> */}

        <section className="w-full px-0">
          <EmblaCarousel />
        </section>

        <div className="line-bg w-full md:h-16 h-6"></div>

        <section className="flex flex-col bg-white">
          {events.slice(0, 4).map((event, index) => (
            <article
              key={`${event.code}-feature`}
              className={[
                "w-full border-y border-gray-300 flex items-center",
                index % 2 === 0
                  ? "flex-col md:flex-row"
                  : "flex-col md:flex-row-reverse",
              ].join(" ")}
            >
              <div className="relative w-full md:w-5/12 aspect-4/3 md:aspect-square">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="w-full md:w-7/12 p-6 md:p-10 gap-6 flex flex-col">
                <h4 className="mt-3 text-[clamp(28px,3.2vw,52px)] font-black uppercase leading-[0.95] text-ivBlack">
                  {event.title}
                </h4>
                <p className="mt-6 text-base md:text-lg text-gray-700 max-w-2xl leading-relaxed">
                  {event.description}
                </p>
              </div>
            </article>
          ))}
        </section>
        <div className="line-bg w-full md:h-16 h-6"></div>
        <LearnMoreSection />
        <Footer />
      </div>
    </div>
  );
}
