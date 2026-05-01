"use client";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import Carousel from "@/components/Crausel";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { useMemo } from "react";
import Marquee from "react-fast-marquee";
import { communityCards } from "@/lib/data/communities";
import Button from "@/components/primitives/Button";
// MoteText import removed (unused)

gsap.registerPlugin(ScrollTrigger);

const logos = [
  "https://logo-icons.com/cdn/shop/files/291-logo-1711991296.916.svg?v=1712759714",
  "https://logo-icons.com/cdn/shop/files/291-logo-1711991296.916.svg?v=1712759714",
  "https://logo-icons.com/cdn/shop/files/291-logo-1711991296.916.svg?v=1712759714",
  "https://logo-icons.com/cdn/shop/files/291-logo-1711991296.916.svg?v=1712759714",
  "https://logo-icons.com/cdn/shop/files/291-logo-1711991296.916.svg?v=1712759714",
];

const aboutImages = [
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80",
];

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

type GridProps = {
  rows?: number;
};

const GridWithPlus = ({ rows = 1 }: GridProps) => {
  const columnCount = 8;

  return (
    <div className="grid grid-cols-8">
      {Array.from({ length: rows * columnCount }).map((_, i) => (
        <div
          key={i}
          className="relative hover:bg-gray-50 h-28 md:h-48 aspect-square border border-gray-300 flex items-center justify-center bg-white "
        >
          <Image
            src={logos[i % logos.length]}
            alt={`logo-${i}`}
            width={120}
            height={48}
            className="max-h-12 object-contain grayscale transition-all duration-300 hover:grayscale-0"
          />
        </div>
      ))}
    </div>
  );
};

function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY1 = useSpring(useTransform(scrollYProgress, [0, 1], [80, -70]), {
    stiffness: 90,
    damping: 22,
  });
  const imageY2 = useSpring(useTransform(scrollYProgress, [0, 1], [-40, 55]), {
    stiffness: 90,
    damping: 22,
  });
  const imageY3 = useSpring(useTransform(scrollYProgress, [0, 1], [55, -55]), {
    stiffness: 90,
    damping: 22,
  });
  const imageY4 = useSpring(useTransform(scrollYProgress, [0, 1], [-70, 70]), {
    stiffness: 90,
    damping: 22,
  });

  return (
    <section
      ref={sectionRef}
      className="border-t border-gray-300 bg-white px-4 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto grid w-full gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-6">
          <h2 className="max-w-[10ch] text-[clamp(42px,8vw,64px)] font-black uppercase leading-[0.9] tracking-[-0.08em] text-neutral-900">
            AB<span className="text-cyan-400">O</span>UT US
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-black md:text-lg">
            Innovation Lab brings builders, thinkers, and creators into one
            working system. Teams prototype in public, test ideas quickly, and
            turn experiments into programs that people can actually join.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-5">
          <motion.img
            src={aboutImages[0]}
            alt="Community workshop"
            style={{ y: imageY1 }}
            className="h-56 w-full object-cover md:h-72"
          />
          <motion.img
            src={aboutImages[1]}
            alt="Creative team discussion"
            style={{ y: imageY2 }}
            className="mt-16 h-56 w-full object-cover md:h-72"
          />
          <motion.img
            src={aboutImages[2]}
            alt="Collaborative planning"
            style={{ y: imageY3 }}
            className="-mt-12 h-56 w-full object-cover md:h-72"
          />
          <motion.img
            src={aboutImages[3]}
            alt="Community research session"
            style={{ y: imageY4 }}
            className="mt-4 h-56 w-full object-cover md:h-72"
          />
        </div>
      </div>
    </section>
  );
}

function CommunitiesSection() {
  return (
    <section className="border-t border-gray-300 bg-white">
      <div className="line-bg w-full md:h-16 h-6"></div>
      <div className="mx-auto w-full px-4 pt-10 pb-16 md:px-8">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="">
            <h2 className="mt-3 text-[clamp(34px,6vw,72px)] font-black uppercase leading-[0.92] tracking-[-0.08em] text-neutral-900">
              C<span className="text-cyan-400">O</span>MMUNITIES
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {communityCards.map((community, index) => (
            <Link
              key={community.slug}
              href={`/communities/${community.slug}`}
              className="group overflow-hidden border border-gray-300 bg-white"
            >
              <div className="relative h-72 overflow-hidden">
                <motion.img
                  src={community.image}
                  alt={community.title}
                  initial={false}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="h-full w-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-transparent" />
                <div className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center border border-white/35 bg-white/12 text-xs font-extrabold uppercase tracking-[0.24em] text-white backdrop-blur-sm">
                  {index + 1}
                </div>
              </div>
              <div className="grid gap-4 p-5 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-cyan-500">
                    {community.id}
                  </p>
                  <h3 className="mt-3 text-3xl font-black uppercase tracking-[-0.05em] text-neutral-900">
                    {community.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-600">
                    {community.description}
                  </p>
                </div>
                <span className="text-2xl font-light text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="line-bg w-full md:h-16 h-6"></div>
    </section>
  );
}

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
            <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-cyan-600">
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
              <span className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-cyan-600">
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

function EventsSection() {
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

function CTASection() {
  return <section className="w-screen h-screen bg-white"></section>;
}

export const TestimonialSection = () => {
  return (
    <>
      <div className="line-bg w-full md:h-16 h-6"></div>
      <section className="flex flex-row bg-white overflow-hidden">
        <div className="border w-5/12 border-gray-300 aspect-square"></div>
        <div className="border w-7/12 border-gray-300 grid grid-rows-2">
          <div className="w-full h-full">
            <Marquee speed={30} gradient={false} direction="left">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div
                  key={i}
                  className="border border-gray-300 bg-white flex flex-col items-center justify-center p-4 aspect-square"
                >
                  <p className="text-4xl font-black uppercase  text-neutral-900 md:text-5xl">
                    “{`Testimonial ${i + 1}`}
                  </p>
                  <p className="mt-3 text-[11px] font-extrabold uppercase tracking-[0.24em] text-neutral-500">
                    Person {i + 1}, Role
                  </p>
                </div>
              ))}
            </Marquee>
          </div>
          {/* <Marquee
            className="w-6/12 h-full"
            speed={30}
            gradient={false}
            direction="down"
          ></Marquee> */}
        </div>
      </section>
      <div className="line-bg w-full md:h-16 h-6"></div>
    </>
  );
};

export default function Home() {
  const rows = 8;
  const cols = 24;

  const gridColors = useMemo(() => {
    return Array.from({ length: rows * cols }, () => {});
  }, []);

  return (
    <div className="min-h-screen w-full overflow-hidden line-bg px-2 md:px-8">
      <div className="w-full overflow-hidden border-x border-gray-300">
        <Navbar />
        <div className="w-full relative  overflow-hidden bg-white">
          <div
            className="grid w-full h-full overflow-hidden"
            style={{
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gridTemplateRows: `repeat(${rows}, 1fr)`,
            }}
          >
            {gridColors.map((color, i) => (
              <div
                key={i}
                className="w-full h-full aspect-square bg-white border border-gray-100 hover:bg-gray-50 duration-10"
              />
            ))}
          </div>
          <div className="w-full h-full absolute top-0 flex flex-col">
            <div className="">
              <h1 className="text-[11rem] font-bold -mt-12">
                INN<span className="text-cyan-400">O</span>VATI
                <span className="text-cyan-400">O</span>N LABS
              </h1>
            </div>
            <div className="mx-3">
              <h2 className="text-md max-w-2xl text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </h2>
            </div>
            <div className="mx-3 flex flex-row gap-5 mt-10">
              <Button>Explore the Lab</Button>
              <Button variant="outline">VIEW EVENTS</Button>
            </div>
          </div>
        </div>
        <Carousel />
        <div className="line-bg w-full md:h-16 h-6"></div>
        <div className="w-full h-auto">
          <div className="px-3 py-4 bg-white flex items-center justify-center border-t-1 border-gray-300">
            <h2 className="text-5xl font-semibold">
              <span className="text-cyan-400">O</span>UR PARTNERS
            </h2>
          </div>
          <Marquee speed={40} gradient={false}>
            <GridWithPlus rows={1} />
            <GridWithPlus rows={1} />
          </Marquee>
          <Marquee speed={40} delay={2} gradient={false}>
            <GridWithPlus rows={1} />
            <GridWithPlus rows={1} />
          </Marquee>
        </div>
        <div className="line-bg w-full md:h-16 h-6"></div>
        <AboutSection />
        <CommunitiesSection />
        <EventsSection />
        <TestimonialSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}
