import Button from "@/components/primitives/Button";
import Link from "next/link";

const barHeights = [
  "h-[64%]",
  "h-[88%]",
  "h-[22%]",
  "h-[55%]",
  "h-[44%]",
  "h-[66%]",
  "h-[77%]",
  "h-[33%]",
  "h-[11%]",
  "h-[99%]",
];

export function CTASection() {
  return (
    <section className="relative flex min-h-[75vh] w-full flex-col items-center justify-center overflow-hidden bg-linear-to-b from-white to-gray-50 px-4 py-20 md:min-h-screen md:py-32">
      <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center md:space-y-8">
        <h2 className="text-[clamp(2.4rem,13vw,6rem)] font-black uppercase tracking-[-0.08em] text-neutral-900">
          <span className="text-primary">J</span>OIN NOW
        </h2>
        <p className="mx-auto max-w-xl text-base leading-relaxed text-neutral-600 md:text-xl">
          We believe in the sovereignty of the grid. Our practice is dedicated
          to the reduction of noise.
        </p>
        <Link href="/contact">
          <Button>Become a Member</Button>
        </Link>
      </div>
      <div>
        <div className="absolute bottom-0 left-0 right-0 flex h-7/12 flex-row items-end justify-end overflow-hidden md:h-8/12">
          {barHeights.map((heightClass, i) => (
            <div
              key={i}
              className={`mb-1 flex flex-1 bg-linear-to-t from-cyan-500 to-white ${heightClass}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
