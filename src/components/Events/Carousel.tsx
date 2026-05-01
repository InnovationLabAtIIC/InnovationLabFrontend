"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-screen h-[90vh] flex flex-col items-center justify-center">
      {/* Viewport */}
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        {/* Container */}
        <div className="flex h-full">
          {/* Slides */}
          <div className="flex-[0_0_100%] h-full bg-red-500 flex items-center justify-center text-white text-3xl">
            Slide 1
          </div>

          <div className="flex-[0_0_100%] h-full bg-blue-500 flex items-center justify-center text-white text-3xl">
            Slide 2
          </div>

          <div className="flex-[0_0_100%] h-full bg-green-500 flex items-center justify-center text-white text-3xl">
            Slide 3
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-10 flex gap-4">
        {/* <button
          onClick={scrollPrev}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Prev
        </button>

        <button
          onClick={scrollNext}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Next
        </button> */}
      </div>
    </div>
  );
}
