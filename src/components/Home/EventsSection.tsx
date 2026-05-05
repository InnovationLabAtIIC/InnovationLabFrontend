import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const eventSlides = [
  {
    kicker: "01 / Summit",
    title: "Build Week Live",
    description:
      "A full-screen sprint of workshops, demos, and collaboration sessions that move ideas toward launch.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1800&q=80",
    meta: "Mentor reviews · Live prototyping · Community showcase",
  },
  {
    kicker: "02 / Studio",
    title: "Creator Night",
    description:
      "Visual storytelling, motion systems, and hands-on design critiques with the lab's creative teams.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1800&q=80",
    meta: "Brand systems · Motion lab · Portfolio feedback",
  },
  {
    kicker: "03 / Forum",
    title: "Research Exchange",
    description:
      "Evidence-led talks and findings shared across makers, engineers, and product teams in one space.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80",
    meta: "User studies · Data review · Discussion circles",
  },
  {
    kicker: "04 / Demo",
    title: "Prototype Showcase",
    description:
      "Large-format demos and public presentations with a cinematic horizontal scroll through every project.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1800&q=80",
    meta: "Open demo floor · Product launches · Networking",
  },
];

function EventSlide({
  slide,
  scrollYProgress,
  index,
}: {
  slide: (typeof eventSlides)[number];
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
}) {
  const imageY = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      index % 2 === 0 ? [90, -90] : [-70, 70],
    ),
    { stiffness: 80, damping: 20 },
  );

  return (
    <article className="event-slide flex h-screen w-screen shrink-0 items-stretch border-l border-neutral-200 bg-white text-neutral-900 first:border-l-0">
      <div className="grid w-full grid-cols-1 md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-between gap-10 px-6 py-8 md:px-12 md:py-12">
          <div className="space-y-5">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-primary">
              {slide.kicker}
            </p>
            <h3 className="max-w-[10ch] text-[clamp(42px,7vw,88px)] font-black uppercase leading-[0.9] tracking-[-0.08em]">
              {slide.title}
            </h3>
            <p className="max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg">
              {slide.description}
            </p>
          </div>

          <div className="grid gap-5 border-t border-neutral-200 pt-5 md:grid-cols-2 md:items-end">
            <p className="max-w-md text-sm leading-relaxed text-neutral-500">
              {slide.meta}
            </p>
            <div className="flex items-center gap-3 justify-start md:justify-end">
              <span className="inline-flex h-11 w-11 items-center justify-center border border-neutral-300 bg-neutral-50 text-sm font-extrabold text-neutral-900">
                0{index + 1}
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-primary">
                Horizontal scroll
              </span>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden border-t border-neutral-200 md:border-l md:border-t-0">
          <motion.img
            src={slide.image}
            alt={slide.title}
            style={{ y: imageY }}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-tr from-white/35 via-white/8 to-transparent" />
        </div>
      </div>
    </article>
  );
}

export function EventsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) {
      return;
    }

    const getScrollDistance = () => track.scrollWidth - window.innerWidth;

    const context = gsap.context(() => {
      gsap.fromTo(
        track,
        { x: 0 },
        {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getScrollDistance()}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        },
      );
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-neutral-100"
    >
      <motion.div
        ref={trackRef}
        className="flex h-screen w-max will-change-transform"
      >
        {eventSlides.map((slide, index) => (
          <EventSlide
            key={slide.title}
            slide={slide}
            scrollYProgress={scrollYProgress}
            index={index}
          />
        ))}
      </motion.div>
    </section>
  );
}
