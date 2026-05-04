import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

const eventCards = [
  {
    slug: "spring-carnival",
    code: "EV_01",
    title: "Spring Carnival",
    eyebrow: "Featured Highlight",
    description:
      "A multi-sensory immersion into generative environments, creative systems, and live prototypes.",
    heroImage:
      "https://images.pexels.com/photos/36390048/pexels-photo-36390048.jpeg",
    about:
      "Spring Carnival is a public showcase for bold experiments across design, technology, and spatial storytelling. Teams bring concepts to life through immersive visuals, live demos, and collaborative feedback loops.",
    focus: ["Immersive Design", "Interactive Media", "Rapid Prototyping"],
    details: [
      "A live build showcase with rotating studio stations and guided walkthroughs.",
      "Open critique sessions for teams ready to refine ideas in public.",
      "A visual-first format that emphasizes atmosphere, iteration, and community exchange.",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    ],
    related: [
      "creative-systems-sprint",
      "urban-data-lab",
      "ai-interaction-sprint",
    ],
  },
  {
    slug: "creative-systems-sprint",
    code: "EV_02",
    title: "Creative Systems Sprint",
    eyebrow: "Studio Event",
    description:
      "Cross-discipline studio for designing interfaces, visuals, and interactive narratives.",
    heroImage:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80",
    about:
      "A fast-paced sprint focused on collaborative production. Participants shape visual systems, prototype experiences, and test presentation strategies together.",
    focus: ["Visual Systems", "Team Production", "Concept Development"],
    details: [
      "Studio-style collaboration with shared tools and visible work surfaces.",
      "Practical prompts that push ideas from concept to execution quickly.",
      "Ideal for teams that want to align on visuals, structure, and story.",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    ],
    related: [
      "spring-carnival",
      "future-city-assembly",
      "public-prototype-review",
    ],
  },
  {
    slug: "urban-data-lab",
    code: "EV_03",
    title: "Urban Data Lab",
    eyebrow: "Research Event",
    description:
      "Collaborative mapping of city signals to build practical, community-facing prototypes.",
    heroImage:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1600&q=80",
    about:
      "Urban Data Lab turns public data into actionable design objects. Sessions blend mapping, analysis, and visualization so teams can see their ideas more clearly.",
    focus: ["Data Visualization", "Community Research", "Systems Thinking"],
    details: [
      "Mapping sessions that surface patterns in infrastructure and behavior.",
      "Shared critique and visualization exercises to clarify the story behind data.",
      "A good fit for teams working on research-heavy or civic-minded projects.",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    ],
    related: [
      "spring-carnival",
      "creative-systems-sprint",
      "community-design-jam",
    ],
  },
  {
    slug: "xr-habitat-demo",
    code: "EV_04",
    title: "XR Habitat Demo",
    eyebrow: "Interactive Demo",
    description:
      "Immersive showcase of spatial ideas with rapid feedback from builders and visitors.",
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    about:
      "XR Habitat Demo highlights spatial experiences that bridge physical and digital design. Attendees move through a highly visual environment built for testing interaction, motion, and form.",
    focus: ["XR", "Spatial Interaction", "Immersive Storytelling"],
    details: [
      "A demo environment designed for walkthroughs, testing, and conversation.",
      "Built to help teams validate how space, interface, and movement work together.",
      "Focused on atmosphere and direct participant feedback.",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
    ],
    related: [
      "spring-carnival",
      "ai-interaction-sprint",
      "future-city-assembly",
    ],
  },
  {
    slug: "public-prototype-review",
    code: "EV_05",
    title: "Public Prototype Review",
    eyebrow: "Critique Session",
    description:
      "Open floor critique to refine concepts, improve clarity, and accelerate implementation.",
    heroImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
    about:
      "Public Prototype Review is where working ideas get sharpened. Teams present unfinished work, collect feedback, and identify the next iteration path in a public format.",
    focus: ["Review", "Iteration", "Feedback Loops"],
    details: [
      "Structured review spaces for fast feedback and visible progress.",
      "A practical format for teams preparing for launch or refinement.",
      "Encourages clear communication and honest critique.",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    ],
    related: [
      "spring-carnival",
      "community-design-jam",
      "creative-systems-sprint",
    ],
  },
  {
    slug: "community-design-jam",
    code: "EV_06",
    title: "Community Design Jam",
    eyebrow: "Co-Creation",
    description:
      "Image-first co-creation format where teams iterate live with mentors and peers.",
    heroImage:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80",
    about:
      "Community Design Jam blends mentoring, collaboration, and live image-led iterations. It is built to help teams move quickly while still keeping the human story visible.",
    focus: ["Co-Design", "Mentorship", "Live Iteration"],
    details: [
      "A workshop feel with shared tables, live screens, and active critique.",
      "Useful for early-stage ideas that need structure and momentum.",
      "Participants leave with clearer prototypes and sharper direction.",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    ],
    related: ["spring-carnival", "creative-systems-sprint", "urban-data-lab"],
  },
  {
    slug: "ai-interaction-sprint",
    code: "EV_07",
    title: "AI Interaction Sprint",
    eyebrow: "AI Systems",
    description:
      "Rapid experiments on conversational interfaces, agent behaviors, and assistive flows.",
    heroImage:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80",
    about:
      "AI Interaction Sprint explores how intelligent systems shape interface behavior, response patterns, and user confidence in live workflows.",
    focus: ["Agents", "Conversation Design", "Interaction Research"],
    details: [
      "Fast-turn design sessions for product teams experimenting with AI UX.",
      "Focuses on practical decisions around flow, tone, and guidance.",
      "Helps teams prototype interactions before committing to full builds.",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
    ],
    related: ["spring-carnival", "urban-data-lab", "future-city-assembly"],
  },
  {
    slug: "future-city-assembly",
    code: "EV_08",
    title: "Future City Assembly",
    eyebrow: "Vision Session",
    description:
      "Large-format visual review of speculative urban systems and implementation pathways.",
    heroImage:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80",
    about:
      "Future City Assembly is a presentation-heavy event where urban systems, speculative design, and practical engineering meet in one room.",
    focus: ["Urban Systems", "Speculative Design", "Strategy"],
    details: [
      "High-visibility presentations that make complex systems easier to see.",
      "Designed for teams shaping long-range narratives or city-scale experiments.",
      "Combines visual clarity with direct strategic discussion.",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    ],
    related: ["spring-carnival", "urban-data-lab", "public-prototype-review"],
  },
];

type EventDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return eventCards.map((event) => ({ slug: event.slug }));
}

export default async function EventDetailPage({
  params,
}: EventDetailPageProps) {
  const { slug } = await params;

  const event = eventCards.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  const relatedEvents = eventCards.filter(
    (item) => item.slug !== event.slug && event.related.includes(item.slug),
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-ivBlack">
        <section className="mx-auto w-[94vw] max-w-7xl pt-10 pb-8">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.28em] text-ivCyan">
            Event Detail
          </p>
          <h1 className="max-w-5xl text-[clamp(42px,10vw,108px)] font-black uppercase leading-[0.9] tracking-[-0.05em]">
            {event.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-ivGray-500 md:text-lg">
            {event.description}
          </p>
        </section>

        <section className="mx-auto w-[94vw] max-w-7xl overflow-hidden border border-black/10 bg-[#f4f4f2]">
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
                  className="mt-6 inline-flex border border-white/60 bg-white px-5 py-3 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-black transition hover:bg-cyan-500 hover:border-cyan-500"
                >
                  Back To Events
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-[94vw] max-w-7xl gap-8 border-x border-b border-black/10 bg-white px-6 py-14 md:grid-cols-[0.9fr_1.1fr] md:px-10">
          <div>
            <h2 className="text-[clamp(30px,4.8vw,56px)] font-black uppercase tracking-[-0.03em]">
              Overview
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
                  className="border border-black/10 bg-[#f4f4f2] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-[94vw] max-w-7xl border-x border-b border-black/10 bg-[#f4f4f2] px-6 py-14 md:px-10">
          <h2 className="text-[clamp(28px,4.5vw,52px)] font-black uppercase tracking-[-0.03em]">
            What You’ll See
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
                  Detail {index + 1}
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
            Gallery
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

        <section className="mx-auto w-[94vw] max-w-7xl border-x border-b border-black/10 bg-[#f4f4f2] px-6 py-14 md:px-10">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-[clamp(28px,4.5vw,52px)] font-black uppercase tracking-[-0.03em]">
              Related Events
            </h2>
            <Link
              href="/events"
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-ivCyan"
            >
              Back To Events
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
      </main>
      <Footer />
    </>
  );
}
