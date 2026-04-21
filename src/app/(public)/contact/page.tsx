import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Carousel from "@/components/Crausel";
import Map from "@/components/Map";

export default function Contact() {
  return (
    <>
      <main className="min-h-screen bg-[#ececec] text-[#181d22]">
        <Navbar />

        <section className="mx-auto w-[92vw] max-w-375 py-8 md:py-12">
          <h1 className="mb-8 text-[clamp(48px,7vw,98px)] font-black uppercase leading-none tracking-tighter">
            C<span className="text-cyan-400">O</span>NTACT
          </h1>

          <div className="relative mb-10 h-32.5 w-full overflow-hidden border border-[#d7d7d7] bg-linear-to-r from-[#e988c8] via-[#dfbce9] to-[#f3a2a0] md:h-[190px]">
            <div className="absolute -left-10 top-4 h-28 w-28 rounded-full bg-white/20 blur-sm" />
            <div className="absolute right-16 top-8 h-24 w-52 rounded-full bg-white/15 blur-sm" />
            <div className="absolute left-1/3 top-0 h-full w-40 rotate-12 bg-white/10 blur-2xl" />
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] bg-size-[16px_16px]" />
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.35fr_1fr]">
            <form className="border border-[#cfcfcf] bg-[#efefef] p-6 md:p-10">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b8f93]">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter identifier"
                    className="h-12 w-full border border-[#9ca3aa] bg-transparent px-4 text-xs uppercase tracking-[0.12em] outline-none placeholder:text-[#b4b7ba] focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b8f93]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Address@protocol.sys"
                    className="h-12 w-full border border-[#9ca3aa] bg-transparent px-4 text-xs uppercase tracking-[0.12em] outline-none placeholder:text-[#b4b7ba] focus:border-cyan-400"
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
                  className="h-12 w-full border border-[#9ca3aa] bg-transparent px-4 text-xs uppercase tracking-[0.12em] outline-none focus:border-cyan-400"
                />
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b8f93]">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Define your vision..."
                  className="w-full border border-[#9ca3aa] bg-transparent px-4 py-3 text-xs uppercase tracking-[0.12em] outline-none placeholder:text-[#b4b7ba] focus:border-cyan-400"
                />
              </div>

              <div className="mt-8 flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#8b8f93]">
                  <span className="mr-2 inline-block h-2 w-2 bg-cyan-400" />
                  Awaiting
                </p>

                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 bg-[#181d22] px-10 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white transition hover:bg-cyan-400 hover:text-[#181d22]"
                >
                  Send <span aria-hidden>→</span>
                </button>
              </div>
            </form>
            <div className="relative min-h-90 overflow-hidden border border-[#cfcfcf] bg-black">
              <Map />
            </div>
          </div>

          <div className="mt-8 grid border border-[#d8d8d8] md:grid-cols-4">
            <div className="border-b border-r border-[#d8d8d8] p-6 md:border-b-0">
              <h3 className="mb-3 text-sm font-black uppercase">Email</h3>
              <p className="text-xs uppercase tracking-[0.12em] text-[#60656a]">
                admin@neo-lab.sys
              </p>
            </div>
            <div className="border-b border-r border-[#d8d8d8] p-6 md:border-b-0">
              <h3 className="mb-3 text-sm font-black uppercase">Phone</h3>
              <p className="text-xs uppercase tracking-[0.12em] text-[#60656a]">
                +44 (0) 20 7946 0142
              </p>
            </div>
            <div className="border-b border-r border-[#d8d8d8] p-6 md:border-b-0">
              <h3 className="mb-3 text-sm font-black uppercase">Location</h3>
              <p className="text-xs uppercase tracking-[0.12em] text-[#60656a]">
                18 Brutal Wharf, E14 5SX, London
              </p>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-sm font-black uppercase">Uptime</h3>
              <p className="text-xs uppercase tracking-[0.12em] text-[#60656a]">
                09:00 - 21:00 GMT
              </p>
            </div>
          </div>
        </section>
      </main>
      <div className="overflow-hidden px-0 min-w-full">
        <Carousel />
      </div>
      <Footer />
    </>
  );
}
