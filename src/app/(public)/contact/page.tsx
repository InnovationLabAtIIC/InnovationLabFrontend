import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Carousel from "@/components/Crausel";
import Map from "@/components/Contacts/Map";
import { FadeIn, StaggerIn } from "@/components/Contacts/FadeIn";
import {
  ContactHeading,
  ContactHeroBox,
} from "@/components/Contacts/ContactAnimations";
import { ContactInfoCard } from "@/components/Contacts/ContactInfoCard";

export default function Contact() {
  return (
    <>
      <main className="min-h-screen text-[#181d22]">
        <Navbar />

        <section className="mx-auto w-full max-w-400 px-4 sm:px-6 lg:px-10 py-8 md:py-12">
          <ContactHeading />
          <ContactHeroBox />

          <div className="grid gap-4 lg:grid-cols-[1.35fr_1fr]">
            <FadeIn delay={0.08} y={26}>
              <form className="border border-[#d6dadf] p-6 md:p-10 shadow-lg shadow-black/10 hover:shadow-2xl hover:shadow-black/15 transition-shadow duration-300">
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
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#181d22] [transition-property:color,letter-spacing,transform] duration-300 ease-out group-hover:text-cyan-500 group-hover:tracking-[0.24em] group-hover:translate-x-0.5">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter identifier"
                      className="h-12 w-full border border-[#181d22] bg-white px-4 text-xs uppercase tracking-[0.12em] outline-none placeholder:text-[#b4b7ba] [transition-property:box-shadow] duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:border-r-transparent hover:border-t-transparent hover:border-b-cyan-400 hover:border-l-transparent"
                    />
                  </div>

                  <div className="group">
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#181d22] [transition-property:color,letter-spacing,transform] duration-300 ease-out group-hover:text-cyan-500 group-hover:tracking-[0.24em] group-hover:translate-x-0.5">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Address@protocol.sys"
                      className="h-12 w-full border border-[#181d22] bg-white px-4 text-xs uppercase tracking-[0.12em] outline-none placeholder:text-[#b4b7ba] [transition-property:box-shadow] duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:border-r-transparent hover:border-t-transparent hover:border-b-cyan-400 hover:border-l-transparent"
                    />
                  </div>
                </div>

                <div className="mt-4 group">
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#181d22] [transition-property:color,letter-spacing,transform] duration-300 ease-out group-hover:text-cyan-500 group-hover:tracking-[0.24em] group-hover:translate-x-0.5">
                    Title
                  </label>
                  <input
                    type="text"
                    defaultValue="Architectural Consultation"
                    className="w-full border border-[#181d22] bg-white px-4 py-3 text-xs uppercase tracking-[0.12em] outline-none placeholder:text-[#b4b7ba] [transition-property:box-shadow] duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:border-r-transparent hover:border-t-transparent hover:border-b-cyan-400 hover:border-l-transparent"
                  />
                </div>

                <div className="mt-4 group">
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#181d22] [transition-property:color,letter-spacing,transform] duration-300 ease-out group-hover:text-cyan-500 group-hover:tracking-[0.24em] group-hover:translate-x-0.5">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Define your vision..."
                    className="w-full resize-none border border-[#181d22] bg-white px-4 py-3 text-xs uppercase tracking-[0.12em] outline-none placeholder:text-[#b4b7ba] [transition-property:box-shadow] duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:border-r-transparent hover:border-t-transparent hover:border-b-cyan-400 hover:border-l-transparent"
                  />
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#8b8f93] transition-colors duration-300">
                    <span className="mr-2 inline-block h-2 w-2 bg-cyan-400 animate-pulse" />
                    Awaiting
                  </p>
                  <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center gap-2 border border-black bg-black px-10 text-[12px] font-extrabold uppercase tracking-[0.2em] text-white transition-all duration-300 ease-out hover:scale-95 hover:-translate-y-px hover:bg-white hover:text-black hover:shadow-lg hover:shadow-black/20 focus-visible:scale-95 focus-visible:-translate-y-px focus-visible:bg-white focus-visible:text-black focus-visible:shadow-lg focus-visible:shadow-black/20"
                  >
                    Send{" "}
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </button>
                </div>
              </form>
            </FadeIn>

            <FadeIn delay={0.15} y={30}>
              <div className="relative w-full h-full min-h-90 overflow-hidden border border-[#cfcfcf] bg-linear-to-b from-[#1a1a1a] to-[#0a0a0a]">
                <Map />
              </div>
            </FadeIn>
          </div>

          <StaggerIn
            className="mt-8 grid border border-[#d8d8d8] md:grid-cols-4"
            delayChildren={0.12}
            staggerChildren={0.09}
          >
            <ContactInfoCard
              title="Email"
              content="admin@neo-lab.sys"
              isBordered
            />
            <ContactInfoCard
              title="Phone"
              content="+44 (0) 20 7946 0142"
              isBordered
            />
            <ContactInfoCard
              title="Location"
              content="18 Brutal Wharf, E14 5SX, London"
              isBordered
            />
            <ContactInfoCard
              title="Uptime"
              content="09:00 - 21:00 GMT"
              isBordered={false}
            />
          </StaggerIn>
        </section>
      </main>
      <div className="overflow-hidden px-0 min-w-full">
        <Carousel />
      </div>
      <Footer />
    </>
  );
}
