"use client";

import PageLayout from "@/components/primitives/PageLayout";
import PageHeader from "@/components/primitives/PageHeader";
import { ContactInfoCard } from "@/components/Contacts/ContactInfoCard";
import Carousel from "@/components/Carousel";
import { FadeIn, StaggerIn } from "@/components/Contacts/FadeIn";
import Map from "@/components/Contacts/Map";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <PageLayout>
      <PageHeader title="CONTACT US" />

      <div className="grid w-full border border-gray-300 bg-white">
        <div className="grid gap-4 lg:grid-cols-[1.35fr_1fr]">
          <FadeIn delay={0.08} y={26}>
            <form className="border border-gray-300 p-4 duration-300 sm:p-6 md:p-10">
              <div className="relative z-10 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Let&apos;s Start a Conversation
                </h2>
                <p className="text-gray-500 text-base leading-relaxed">
                  Share your vision and let&apos;s bring your ideas to life
                  together.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="group">
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#181d22]"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Enter identifier"
                    className="h-12 w-full border border-[#181d22] bg-white px-4 text-xs uppercase tracking-[0.12em] outline-none"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#181d22]"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Address@protocol.sys"
                    className="h-12 w-full border border-[#181d22] bg-white px-4 text-xs uppercase tracking-[0.12em] outline-none"
                  />
                </div>
              </div>

              <div className="mt-4 group">
                <label
                  htmlFor="contact-title"
                  className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#181d22]"
                >
                  Title
                </label>
                <input
                  id="contact-title"
                  type="text"
                  defaultValue="Architectural Consultation"
                  className="w-full border border-[#181d22] bg-white px-4 py-3 text-xs uppercase tracking-[0.12em] outline-none"
                />
              </div>

              <div className="mt-4 group">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#181d22]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Define your vision..."
                  className="w-full resize-none border border-[#181d22] bg-white px-4 py-3 text-xs uppercase tracking-[0.12em] outline-none"
                />
              </div>

              <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#8b8f93]">
                  <span className="mr-2 inline-block h-2 w-2 bg-cyan-400 animate-pulse" />
                  Awaiting
                </p>

                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 border border-black bg-black px-10 text-[12px] font-extrabold uppercase tracking-[0.2em] text-white sm:w-auto"
                >
                  Send
                  <span aria-hidden>→</span>
                </button>
              </div>
            </form>
          </FadeIn>

          <FadeIn delay={0.15} y={30}>
            <div className="relative h-full min-h-72 w-full overflow-hidden border border-[#cfcfcf] bg-linear-to-b from-[#1a1a1a] to-[#0a0a0a] md:min-h-90">
              <Map />
            </div>
          </FadeIn>
        </div>

        <StaggerIn
          className="grid border border-[#d8d8d8] md:grid-cols-4"
          delayChildren={0.12}
          staggerChildren={0.09}
        >
          <ContactInfoCard
            title="Email"
            content="admin@neo-lab.sys"
            Icon={Mail}
            isBordered
          />
          <ContactInfoCard
            title="Phone"
            content="+44 (0) 20 7946 0142"
            Icon={Phone}
            isBordered
          />
          <ContactInfoCard
            title="Location"
            content="18 Brutal Wharf, E14 5SX, London"
            Icon={MapPin}
            isBordered
          />
          <ContactInfoCard
            title="Uptime"
            content="09:00 - 21:00 GMT"
            Icon={Clock3}
            isBordered={false}
          />
        </StaggerIn>
      </div>

      <div className="overflow-hidden px-0 min-w-full">
        <Carousel />
      </div>
    </PageLayout>
  );
}
