import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { communityCards } from "@/lib/data/communities";

const latestNews = [
  {
    code: "NEWS_01",
    title: "Cross-Community Build Sprint",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    details:
      "Coders and Inventors shipped a testable prototype during a 48-hour sprint.",
    status: "Published",
  },
  {
    code: "NEWS_02",
    title: "Creator Studio Release",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=800&q=80",
    details:
      "Creators launched a modular content pack for community events and updates.",
    status: "New",
  },
  {
    code: "NEWS_03",
    title: "Research Findings Bulletin",
    image:
      "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=800&q=80",
    details:
      "Researchers published trend insights from Q2 experiments and user studies.",
    status: "Updated",
  },
];

const events = [
  {
    name: "Code Relay Night",
    role: "Coders Community",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=700&q=80",
    note: "Collaborative challenge / optimization track",
  },
  {
    name: "Creator Open Studio",
    role: "Creators Community",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=700&q=80",
    note: "Visual storytelling / content lab",
  },
  {
    name: "Research Forum",
    role: "Researchers Community",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=700&q=80",
    note: "Data review / insights exchange",
  },
  {
    name: "Prototype Day",
    role: "Inventors Community",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80",
    note: "Build showcase / rapid testing",
  },
];

const newsFeed = [
  {
    date: "08.21.2026",
    level: "Community Update",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80",
    message:
      "Coders opened registrations for the next architecture deep-dive session",
    tags: "#coders #sessions",
  },
  {
    date: "08.19.2026",
    level: "Community Update",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=300&q=80",
    message:
      "Creators published a fresh toolkit for campaign production workflows",
    tags: "#creators #toolkit",
  },
  {
    date: "08.15.2026",
    level: "Community Update",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80",
    message:
      "Researchers released a public summary of current lab investigation tracks",
    tags: "#researchers #summary",
  },
  {
    date: "08.12.2026",
    level: "Community Update",
    image:
      "https://images.unsplash.com/photo-1580894894513-fafe8f65d5f3?auto=format&fit=crop&w=300&q=80",
    message: "Inventors announced the next cohort for prototype incubation",
    tags: "#inventors #incubation",
  },
];

export default function CommunitiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-ivBlack">
        <section className="mx-auto w-[94vw] max-w-7xl pt-10 pb-6">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.28em] text-ivCyan">
            Innovation Lab Network
          </p>
          <h1 className="text-[clamp(44px,11vw,124px)] font-black uppercase leading-[0.9] tracking-[-0.05em] text-ivBlack">
            Communities
          </h1>
        </section>

        <section className="mx-auto grid w-[94vw] max-w-7xl grid-cols-1 border border-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {communityCards.map((community) => (
            <Link
              key={community.slug}
              href={`/communities/${community.slug}`}
              className="group relative min-h-56 overflow-hidden border-b border-black/10 p-5 sm:border-r sm:last:border-r-0 lg:min-h-64 lg:border-b-0"
              style={{
                backgroundImage: `linear-gradient(160deg, rgba(255,255,255,0.92), rgba(228,238,242,0.78)), url(${community.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="relative z-10 flex h-full flex-col justify-between">
                <span className="text-[11px] font-extrabold tracking-[0.25em] text-ivCyan">
                  {community.id}
                </span>
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-tight text-ivBlack">
                    {community.title}
                  </h2>
                  <p className="mt-2 max-w-[24ch] text-sm text-ivGray-500">
                    {community.description}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-white/25 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-95" />
            </Link>
          ))}
        </section>

        <section className="mx-auto grid w-[94vw] max-w-7xl gap-8 border-x border-b border-black/10 bg-[#f4f4f2] px-6 py-14 md:grid-cols-2 md:px-10">
          <div>
            <h2 className="text-[clamp(32px,5vw,62px)] font-black uppercase tracking-[-0.03em] text-ivBlack">
              About
            </h2>
            <div className="mt-3 h-1 w-28 bg-ivCyan" />
          </div>
          <div className="space-y-10">
            <p className="text-[clamp(18px,2.8vw,34px)] font-semibold uppercase leading-[1.3] tracking-tight text-ivBlack">
              The communities ecosystem connects builders, thinkers, and makers
              into one shared innovation engine.
            </p>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-ivBlack">
                  Cross Collaboration
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ivGray-500">
                  Every community contributes unique capabilities to shared
                  projects and collective milestones.
                </p>
              </div>
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-ivBlack">
                  Open Participation
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ivGray-500">
                  Members can join events, contribute ideas, and publish
                  outcomes through a transparent process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-[94vw] max-w-7xl border-x border-b border-black/10 bg-[#f4f4f2] px-6 py-14 md:px-10">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-[clamp(30px,4.6vw,54px)] font-black uppercase tracking-[-0.03em] text-ivBlack">
              Latest News
            </h2>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-ivCyan">
              04 Communities Active
            </p>
          </div>
          <div className="grid gap-0 border border-black/10 bg-white sm:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((item) => (
              <article
                key={item.code}
                className="flex min-h-80 flex-col justify-between border-b border-r border-black/10 p-7 last:border-b-0 sm:last:border-b sm:nth-last-[-n+2]:border-b-0 lg:border-b-0"
              >
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-ivCyan">
                    {item.code}
                  </p>
                  <div className="relative mt-4 h-36 w-full overflow-hidden border border-black/10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-[30px] font-black uppercase leading-[1.02] tracking-[-0.02em] text-ivBlack">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-ivGray-500">
                    {item.details}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="inline-flex border border-ivCyan bg-cyan-100 px-2 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-ivBlack">
                    {item.status}
                  </span>
                  <span className="text-lg text-ivBlack/60">↗</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-[94vw] max-w-7xl border-x border-b border-black/10 bg-[#f4f4f2] px-6 py-14 text-ivBlack md:px-10">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-[clamp(30px,4.8vw,56px)] font-black uppercase tracking-[-0.03em]">
              Events
            </h2>
            <p className="mt-4 max-w-[54ch] text-sm leading-relaxed text-ivGray-500 md:text-base">
              Upcoming sessions, showcases, and community meetups across all
              four groups.
            </p>
          </div>

          <div className="grid grid-cols-1 border border-black/10 md:grid-cols-2 lg:grid-cols-3">
            {events.map((item, index) => (
              <article
                key={item.name}
                className="relative min-h-80 border-b border-r border-black/10 bg-white p-6"
                style={{
                  background:
                    index % 2 === 0
                      ? "linear-gradient(160deg, rgba(34,211,238,0.14), rgba(255,255,255,1) 58%)"
                      : "linear-gradient(180deg, rgba(34,211,238,0.08), rgba(255,255,255,1) 45%)",
                }}
              >
                <div className="relative h-40 w-full overflow-hidden border border-black/10">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-[28px] font-black uppercase leading-none tracking-tight">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.2em] text-ivCyan">
                    {item.role}
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-[0.15em] text-ivGray-500">
                    {item.note}
                  </p>
                </div>
              </article>
            ))}

            <Link
              href="/contact"
              className="flex min-h-80 items-center justify-center bg-ivCyan p-8 text-center transition-colors hover:bg-cyan-200"
            >
              <span className="text-2xl font-black uppercase tracking-tight text-ivBlack">
                Join Community →
              </span>
            </Link>
          </div>
        </section>

        <section className="mx-auto w-[94vw] max-w-7xl border-x border-b border-black/10 bg-white px-6 py-14 text-ivBlack md:px-10">
          <h2 className="text-[clamp(28px,4.5vw,52px)] font-black uppercase tracking-[-0.03em]">
            News
          </h2>
          <div className="mt-8 border border-black/10">
            {newsFeed.map((item) => (
              <article
                key={`${item.date}-${item.message}`}
                className="grid gap-4 border-b border-black/10 px-5 py-5 text-sm last:border-b-0 md:grid-cols-[84px_140px_140px_1fr_200px] md:items-center md:gap-6 md:px-7"
              >
                <div className="relative h-14 w-20 overflow-hidden border border-black/10">
                  <Image
                    src={item.image}
                    alt={item.level}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-ivCyan">
                  {item.date}
                </p>
                <p className="inline-flex max-w-max border border-black/15 px-2 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-ivBlack">
                  {item.level}
                </p>
                <p className="text-base font-bold uppercase tracking-tight text-ivBlack md:text-lg">
                  {item.message}
                </p>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-ivGray-500 md:text-right">
                  {item.tags}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-9 flex justify-center">
            <button className="border border-ivCyan px-8 py-3 text-xs font-extrabold uppercase tracking-[0.2em] text-ivCyan transition-colors hover:bg-ivCyan hover:text-ivBlack">
              Load More News
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
