"use client";

import Link from "next/link";

import Navbar from "@/components/NavBar";

const featuredEvent = {
  title: "SPRING CARNIVAL",
  tag: "FEATURED HIGHLIGHT",
  description:
    "A multi-sensory immersion into generative environments and metabolic structures. Limited capacity engagement.",
  date: "MAR 24 — APR 02",
  venue: "UB BLOCK",
  button: "JOIN NOW",
  image: "https://images.pexels.com/photos/36390048/pexels-photo-36390048.jpeg",
};

const latestEvents = [
  {
    number: "01",
    title: "PARAMETRIC CLAY 3D PRINTING",
    description: "Material exploration in the era of additive manufacturing and soil-based polymers.",
    date: "MAY 12",
    note: "8 SEATS REMAINING",
    mark: "pentagon",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80",
  },
  {
    number: "02",
    title: "NEURO-AESTHETIC MAPPING",
    description: "Biometric response testing for architectural spatial configurations and geometry.",
    date: "JUN 05",
    note: "WAIT LIST ONLY",
    mark: "triangle",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
  },
  {
    number: "03",
    title: "BRUTALIST WEB LOGIC",
    description: "UI/UX principles founded on honesty, transparency, and raw visual feedback loops.",
    date: "JUL 19",
    note: "OPEN ENROLLMENT",
    mark: "square",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  },
];

export default function EventsPage() {
  return (
    <div className="selection:bg-ivCyan selection:text-ivBlack">
      <Navbar />

      <section className="w-full bg-white px-4 pb-8 pt-5 md:px-8 md:pb-12 md:pt-6">
        <div className="w-full">
          <h1 className="text-[clamp(3rem,6vw,5.6rem)] font-black uppercase leading-[0.88] tracking-[-0.06em] text-ivBlack md:tracking-[-0.08em]">
            Events
          </h1>
        </div>
      </section>

      <section className="w-full px-0">
        <div className="w-full px-4 md:px-8">
          <div className="relative overflow-hidden bg-ivBlack">
            <img
              src={featuredEvent.image}
              alt={featuredEvent.title}
              className="h-108 w-full object-cover md:h-136"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,24,0.62)_0%,rgba(7,18,24,0.08)_58%,rgba(7,18,24,0.15)_100%)]" />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-4 md:p-8">
              <div className="max-w-136 text-white">
                <div className="mb-3 inline-flex bg-ivCyan px-2 py-1 text-[0.55rem] font-bold uppercase tracking-[0.2em] text-ivBlack">
                  {featuredEvent.tag}
                </div>
                <h2 className="max-w-[14ch] text-[clamp(2.4rem,5vw,4.75rem)] font-black uppercase leading-[0.88] tracking-[-0.08em] text-white">
                  {featuredEvent.title.split(" ").map((word, index) => (
                    <span key={`${word}-${index}`} className="block">
                      {word}
                    </span>
                  ))}
                </h2>
                <p className="mt-4 max-w-sm text-[0.75rem] leading-5 text-white/68 md:max-w-md">
                  {featuredEvent.description}
                </p>
              </div>

              <div className="hidden flex-col items-end gap-4 text-right md:flex">
                <div>
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-ivCyan">{featuredEvent.date}</p>
                  <p className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.24em] text-white/60">
                    {featuredEvent.venue}
                  </p>
                </div>
                <Link
                  href=""
                 
                  className="inline-flex px-6 py-3 text-[0.68rem] uppercase tracking-[0.24em] text-ivBlack transition  bg-cyan-500 hover:bg-white  text-black font-extrabold "
                >
                {featuredEvent.button}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 md:px-8 md:py-14">
        <div className="w-full">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-black uppercase tracking-[-0.06em] text-ivBlack">
              Latest Events
            </h2>
            
          </div>

          <div className="grid gap-0 border border-black/10 bg-white md:grid-cols-3">
            {latestEvents.map((event) => (
              <article key={event.title} className="border-b border-black/10 md:border-b-0 md:border-r last:border-r-0">
                <img src={event.image} alt={event.title} className="h-56 w-full object-cover" />
                <div className="px-4 py-3 md:px-5 md:py-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-[0.9rem] font-black uppercase tracking-[-0.04em] text-ivBlack">
                        {event.title}
                      </h3>
                      <p className="mt-1 text-[0.52rem] uppercase tracking-[0.28em] text-ivGray-500">
                        {event.description}
                      </p>
                    </div>
                    <span className="text-[0.55rem] uppercase tracking-[0.28em] text-ivGray-500">{event.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f4f4f2] px-4 py-14 md:px-8 md:py-20">
        <div className="w-full">
          <div className="mb-10 flex items-center justify-between gap-4">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.45em] text-ivCyan">All Events</p>
            <p className="hidden text-[0.55rem] uppercase tracking-[0.5em] text-ivGray-500 md:block">Chronological Index / 2026</p>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10">
            {latestEvents.map((event) => (
              <article
                key={event.title}
                  className="grid grid-cols-[auto_auto_auto_1fr_auto] items-center gap-4 py-6 md:gap-6 md:py-8"
              >
                <div className="min-w-[3.2rem] text-[clamp(2.4rem,4vw,4.3rem)] font-black leading-none tracking-[-0.08em] text-[#c8d5db] md:min-w-16">
                  {event.number}
                </div>

                <div className="flex h-11 w-11 items-center justify-center bg-ivBlack md:h-12 md:w-12">
                  {event.mark === "pentagon" ? (
                    <span className="h-4 w-4 bg-white [clip-path:polygon(50%_0%,92%_32%,76%_100%,24%_100%,8%_32%)]" />
                  ) : null}
                  {event.mark === "triangle" ? (
                    <span className="h-0 w-0 border-l-12 border-r-12 border-t-20 border-l-transparent border-r-transparent border-t-white" />
                  ) : null}
                  {event.mark === "square" ? <span className="h-5 w-5 bg-white" /> : null}
                </div>

                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-16 w-20 object-cover md:h-18 md:w-24"
                  />

                <div className="min-w-0">
                  <h3 className="text-[clamp(1.15rem,2vw,1.65rem)] font-black uppercase leading-[0.95] tracking-[-0.05em] text-ivBlack">
                    {event.title}
                  </h3>
                  <p className="mt-1 max-w-3xl text-[0.72rem] leading-5 text-ivGray-500 md:text-[0.82rem]">
                    {event.description}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-ivBlack md:text-[0.78rem]">
                    {event.date}
                  </p>
                  <p className="mt-1 text-[0.55rem] uppercase tracking-[0.24em] text-ivGray-500 md:text-[0.62rem]">
                    {event.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}