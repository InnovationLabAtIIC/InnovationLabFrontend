import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Carousel from "@/components/Crausel";
import Map from "@/components/Map";
import { FadeIn, StaggerIn } from "@/components/FadeIn";
import { ContactHeading, ContactHeroBox } from "@/components/ContactAnimations";
import { ContactInfoCard } from "@/components/ContactInfoCard";

export default function Contact() {
  return (
    <>
      <main className="min-h-screen text-[#181d22]">
        <Navbar />

        <section className="mx-auto w-[92vw] max-w-375 py-8 md:py-12">
          <ContactHeading />

          <ContactHeroBox />

          <div className="grid gap-4 lg:grid-cols-[1.35fr_1fr]">
            <FadeIn delay={0.08} y={26}>
              <form className="border border-[#cfcfcf] p-6 md:p-10">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b8f93]">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter identifier"
                      className="h-12 w-full border border-[#9ca3aa] bg-transparent px-4 text-xs uppercase tracking-[0.12em] outline-none placeholder:text-[#b4b7ba] transition-all duration-200 hover:-translate-y-px hover:border-[#181d22] hover:bg-white/70 hover:text-cyan-500 hover:shadow-[0_8px_18px_rgba(24,29,34,0.12)] focus:border-cyan-400 focus:bg-white/80 focus:shadow-[0_8px_18px_rgba(34,211,238,0.2)]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b8f93]">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Address@protocol.sys"
                      className="h-12 w-full border border-[#9ca3aa] bg-transparent px-4 text-xs uppercase tracking-[0.12em] outline-none placeholder:text-[#b4b7ba] transition-all duration-200 hover:-translate-y-px hover:border-[#181d22] hover:bg-white/70 hover:text-cyan-500 hover:shadow-[0_8px_18px_rgba(24,29,34,0.12)] focus:border-cyan-400 focus:bg-white/80 focus:shadow-[0_8px_18px_rgba(34,211,238,0.2)]"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b8f93]">
                    Title
                  </label>
                  <input
                    type="text"
                    defaultValue="Architectural Consultation"
                    className="h-12 w-full border border-[#9ca3aa] bg-transparent px-4 text-xs uppercase tracking-[0.12em] outline-none transition-all duration-200 hover:-translate-y-px hover:border-[#181d22] hover:bg-white/70 hover:text-cyan-500 hover:shadow-[0_8px_18px_rgba(24,29,34,0.12)] focus:border-cyan-400 focus:bg-white/80 focus:shadow-[0_8px_18px_rgba(34,211,238,0.2)]"
                  />
                </div>

                <div className="mt-4">
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b8f93]">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Define your vision..."
                    className="w-full border border-[#9ca3aa] bg-transparent px-4 py-3 text-xs uppercase tracking-[0.12em] outline-none placeholder:text-[#b4b7ba] transition-all duration-200 hover:-translate-y-px hover:border-[#181d22] hover:bg-white/70 hover:text-cyan-500 hover:shadow-[0_8px_18px_rgba(24,29,34,0.12)] focus:border-cyan-400 focus:bg-white/80 focus:shadow-[0_8px_18px_rgba(34,211,238,0.2)]"
                  />
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#8b8f93]">
                    <span className="mr-2 inline-block h-2 w-2 bg-cyan-400" />
                    Awaiting
                  </p>
                  <button
                    type="submit"
                    className="bg-white text-ivBlack uppercase tracking-widest font-bold text-[0.68rem] px-5 py-3 whitespace-nowrap border border-ivBlack hover:bg-black hover:text-white transition-colors duration-100"
                  >
                    Send
                  </button>
                  {/* <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center gap-2 border border-ivBlack bg-white px-10 text-[11px] font-extrabold uppercase tracking-[0.2em] text-ivBlack transition-colors duration-100 hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white"
                  >
                    Send <span aria-hidden>→</span>
                  </button> */}
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
