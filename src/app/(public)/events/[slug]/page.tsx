import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import PageLayout from "@/components/primitives/PageLayout";
import PageHeader from "@/components/primitives/PageHeader";
import { publicEventDetailText } from "@/constants/ui/public";
import { publicEventCards } from "@/lib/data/public/eventDetails";

type EventDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return publicEventCards.map((event) => ({ slug: event.slug }));
}

export default async function EventDetailPage({
  params,
}: EventDetailPageProps) {
  const { slug } = await params;

  const event = publicEventCards.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  const relatedEvents = publicEventCards.filter(
    (item) => item.slug !== event.slug && event.related.includes(item.slug),
  );

  return (
    <PageLayout>
      <Navbar />
      <PageHeader title={event.title} />

      <section className="mx-auto w-[94vw] max-w-7xl overflow-hidden border border-black/10 bg-neutral-100">
        <div className="relative h-[52vh] min-h-90 w-full md:h-[68vh]">
          <Image
            src={event.heroImage}
            alt={event.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,24,0.72)_0%,rgba(7,18,24,0.24)_58%,rgba(7,18,24,0.18)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <div className="max-w-3xl text-white">
              <span className="inline-flex bg-ivCyan px-2 py-1 text-[0.55rem] font-bold uppercase tracking-[0.2em] text-ivBlack">
                {event.eyebrow}
              </span>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/82 md:text-base">
                {event.about}
              </p>
              <Link
                href="/events"
                className="mt-6 inline-flex border border-white/60 bg-white px-5 py-3 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-black transition hover:var(--color-primary) hover:border-cyan-500"
              >
                {publicEventDetailText.backToEvents}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-[94vw] max-w-7xl gap-8 border-x border-b border-black/10 bg-white px-6 py-14 md:grid-cols-[0.9fr_1.1fr] md:px-10">
        <div>
          <h2 className="text-[clamp(30px,4.8vw,56px)] font-black uppercase tracking-[-0.03em]">
            {publicEventDetailText.overview}
          </h2>
          <div className="mt-3 h-1 w-24 bg-ivCyan" />
        </div>
        <div className="space-y-4">
          <p className="text-sm leading-relaxed text-ivGray-500 md:text-base">
            {event.about}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {event.focus.map((item) => (
              <span
                key={item}
                className="border border-black/10 bg-neutral-100 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-[94vw] max-w-7xl border-x border-b border-black/10 bg-neutral-100 px-6 py-14 md:px-10">
        <h2 className="text-[clamp(28px,4.5vw,52px)] font-black uppercase tracking-[-0.03em]">
          {publicEventDetailText.whatYouWillSee}
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {event.details.map((detail, index) => (
            <article
              key={detail}
              className={[
                "border border-black/10 p-5",
                index % 2 === 0
                  ? "bg-[linear-gradient(160deg,rgba(34,211,238,0.08),rgba(255,255,255,1)_55%)]"
                  : "bg-[linear-gradient(180deg,rgba(34,211,238,0.05),rgba(255,255,255,1)_45%)]",
              ].join(" ")}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ivCyan">
                {publicEventDetailText.detail} {index + 1}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ivGray-500">
                {detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[94vw] max-w-7xl border-x border-b border-black/10 bg-white px-6 py-14 md:px-10">
        <h2 className="text-[clamp(28px,4.5vw,52px)] font-black uppercase tracking-[-0.03em]">
          {publicEventDetailText.gallery}
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {event.gallery.map((image, index) => (
            <div
              key={image}
              className={[
                "relative overflow-hidden border border-black/10",
                index === 0 ? "col-span-2 row-span-2 min-h-80" : "min-h-40",
              ].join(" ")}
            >
              <Image
                src={image}
                alt={`${event.title} gallery ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[94vw] max-w-7xl border-x border-b border-black/10 bg-neutral-100 px-6 py-14 md:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-[clamp(28px,4.5vw,52px)] font-black uppercase tracking-[-0.03em]">
            {publicEventDetailText.relatedEvents}
          </h2>
          <Link
            href="/events"
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-ivCyan"
          >
            {publicEventDetailText.backToEvents}
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {relatedEvents.map((related) => (
            <Link
              key={related.slug}
              href={`/events/${related.slug}`}
              className="border border-black/10 bg-white px-4 py-5 text-sm font-extrabold uppercase tracking-[0.2em] transition-colors hover:bg-cyan-50"
            >
              {related.title}
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </PageLayout>
  );
}
