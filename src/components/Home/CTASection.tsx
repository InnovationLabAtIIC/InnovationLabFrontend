import Button from "@/components/primitives/Button";

export function CTASection() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-hidden flex flex-col items-center justify-center px-4 py-24 md:py-32">
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-[-0.08em] text-neutral-900">
          <span className="text-cyan-500">J</span>OIN NOW
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-neutral-600 max-w-xl mx-auto">
          We believe in the sovereignty of the grid. Our practice is dedicated
          to the reduction of noise.
        </p>
        <Button>Become a Member</Button>
      </div>
      <div>
        <div className="absolute flex flex-row justify-end items-end bottom-0 left-0 right-0 h-8/12 md:h-8/12 overflow-hidden">
          {[64, 88, 22, 55, 44, 66, 77, 33, 11, 99].map((size, i) => (
            <div
              key={i}
              style={{ height: `${size}%` }}
              className="bg-gradient-to-t from-cyan-500 to-white mb-1 flex flex-1"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
