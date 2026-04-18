"use client";

import { Space_Grotesk } from "next/font/google";

import Navbar from "@/components/NavBar";
import News from "@/components/NewsSection";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function EventsPage() {
  return (
    <div className={`${spaceGrotesk.className} selection:bg-ivCyan selection:text-ivBlack`}>
      <Navbar />

      <section className="relative text-center py-20 overflow-hidden max-w-295 w-[94vw] mx-auto">
        <div className="flex items-center justify-center gap-4 uppercase tracking-[0.24em] text-[0.74rem] font-bold mb-4">
          <span className="w-3.5 h-3.5 bg-ivCyan" />
          Events Calendar
          <span className="w-3.5 h-3.5 bg-ivCyan" />
        </div>
        <h1 className="text-[clamp(2.2rem,8.5vw,5.6rem)] leading-[0.96] tracking-tighter uppercase font-extrabold">
          Innovate. Build. <span className="text-cyan-500">Showcase</span>.
          <br />
          With IV Lab.
        </h1>
        <p className="mt-4 max-w-[58ch] mx-auto text-ivGray-500 text-lg">
          Weekly hands-on sessions, mentor-led reviews, and public demos designed for students building real projects.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-10 max-w-4xl mx-auto text-left">
          {eventStats.map((stat) => (
            <div key={stat.label} className="border border-gray-200 bg-white px-4 py-5">
              <p className="text-3xl font-extrabold tracking-tight">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-ivGray-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="hidden sm:flex absolute left-5 bottom-0 gap-1 items-end">
          <span className="w-4 h-5.5 bg-ivCyan/50" />
          <span className="w-4 h-9.5 bg-ivCyan/80" />
          <span className="w-4 h-14.5 bg-ivCyan" />
        </div>
        <div className="hidden sm:block absolute right-5 bottom-0 w-23 h-23 bg-[radial-gradient(circle_at_24px_68px,theme(colors.ivCyan)_18px,transparent_19px),linear-gradient(135deg,transparent_49%,theme(colors.ivBlack)_50%)]" />
      </section>

      <News />

      <UpcomingEventsSection />
    </div>
  );
}

const eventStats = [
  { label: "sessions this month", value: "08" },
  { label: "average attendance", value: "120+" },
  { label: "mentor speakers", value: "18" },
];