import Marquee from "react-fast-marquee";

const testimonialData = [
  {
    id: 1,
    quote: "Innovation Lab transformed our approach to product development.",
    author: "Sarah Chen",
    role: "Product Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    quote: "The collaborative environment here is unmatched in the industry.",
    author: "Michael Rodriguez",
    role: "Design Lead",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    quote: "Rapid prototyping became our competitive advantage.",
    author: "Emma Williams",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    quote: "Building with the lab's framework accelerated our timeline.",
    author: "James Park",
    role: "Engineering Manager",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    quote: "The community feedback loop is invaluable.",
    author: "Lisa Thompson",
    role: "UX Researcher",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    quote: "Ideas turn into products faster than ever.",
    author: "David Kumar",
    role: "Startup Founder",
    image:
      "https://images.unsplash.com/photo-1519085360771-9852ef158dba?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 7,
    quote: "The mentorship here changed our entire strategy.",
    author: "Amanda Brooks",
    role: "Brand Strategist",
    image:
      "https://images.unsplash.com/photo-1534308143481-c55f00be8e23?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 8,
    quote: "Real-world testing with actual users defines success.",
    author: "Christopher Lee",
    role: "Growth Lead",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 9,
    quote: "Collaboration across disciplines sparked innovation.",
    author: "Rachel Martinez",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 10,
    quote: "The network alone is worth the investment.",
    author: "Thomas Anderson",
    role: "Investor",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
];

export const TestimonialSection = () => {
  return (
    <>
      <div className="line-bg w-full md:h-16 h-6"></div>
      <section className="flex flex-row bg-white overflow-hidden">
        <div className="border w-5/12 border-gray-300 aspect-square bg-white flex flex-col items-center justify-center p-8 md:p-12">
          <div className="text-center space-y-4">
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-[-0.08em] text-neutral-900">
              TESTIMONIALS
            </h3>
            <p className="text-sm md:text-base text-neutral-600 max-w-xs">
              Hear from our community members about their experience with
              Innovation Lab.
            </p>
          </div>
        </div>
        <div className="border w-7/12 border-gray-300 grid grid-rows-2">
          <div className="w-full h-full overflow-hidden">
            <Marquee speed={30} gradient={false} direction="left" pauseOnHover>
              {testimonialData.slice(0, 5).map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="border border-gray-300 bg-white flex flex-col items-center justify-center p-6 w-96 aspect-square h-full relative group hover:bg-gray-50 transition-colors"
                >
                  <div className="text-center space-y-4 items-center flex flex-col">
                    <div className="w-12 h-12 bg-gray-200"></div>
                    <p className="text-lg md:text-xl font-black italic text-neutral-900 line-clamp-3">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="space-y-1">
                      <p className="text-sm font-black uppercase tracking-[-0.02em] text-neutral-900">
                        {testimonial.author}
                      </p>
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-neutral-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
          <div className="w-full h-full overflow-hidden">
            <Marquee speed={30} gradient={false} direction="right" pauseOnHover>
              {testimonialData.slice(5, 10).map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="border border-gray-300 bg-white flex flex-col items-center justify-center w-96 p-6 aspect-square h-full relative group hover:bg-gray-50 transition-colors"
                >
                  <div className="text-center space-y-4 items-center flex flex-col">
                    <div className="w-12 h-12 bg-gray-200"></div>
                    <p className="text-lg md:text-xl font-black italic text-neutral-900 line-clamp-3">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="space-y-1">
                      <p className="text-sm font-black uppercase tracking-[-0.02em] text-neutral-900">
                        {testimonial.author}
                      </p>
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-neutral-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
      <div className="line-bg w-full md:h-16 h-6"></div>
    </>
  );
};
