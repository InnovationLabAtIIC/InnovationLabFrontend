"use client";

import React, { useState, useEffect, useRef } from "react";

export interface StoryItem {
  image: string;
  storyTeller: string;
  description: string;
}

interface StoriesProps {
  storiesData: StoryItem[];
}

// How many vh of scrolling to advance one story (lower = less effort)
const SCROLL_DISTANCE_VH = 70;

export default function Stories({ storiesData }: StoriesProps) {
  const numOfStories = storiesData.length;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [currentStory, setCurrentStory] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const stepPx = (SCROLL_DISTANCE_VH / 100) * vh;

      // How far the wrapper's top has scrolled past the viewport top
      const scrolledInto = -rect.top;

      if (scrolledInto <= 0) {
        setCurrentStory(0);
        return;
      }

      const maxScroll = (numOfStories - 1) * stepPx;

      if (scrolledInto >= maxScroll) {
        setCurrentStory(numOfStories - 1);
        return;
      }

      setCurrentStory(Math.floor(scrolledInto / stepPx));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set initial state on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [numOfStories]);

  return (
    <div
      ref={wrapperRef}
      className="relative z-0"
      style={{ height: `${100 + numOfStories * SCROLL_DISTANCE_VH}vh` }}
    >
      {/* Sticky container — pins while the wrapper scrolls behind it */}
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        {storiesData.map((story, i) => {
          const isActive = currentStory === i;
          const isPast = i < currentStory;
          const isImageOnLeft = i % 2 === 0;

          // Left half enters from below, exits upward
          const leftTrans = isActive
            ? "translateY(0)"
            : isPast
              ? "translateY(-100%)"
              : "translateY(100%)";

          // Right half enters from above, exits downward
          const rightTrans = isActive
            ? "translateY(0)"
            : isPast
              ? "translateY(100%)"
              : "translateY(-100%)";

          return (
            <div key={i} className="absolute inset-0">
              {/* Left Half */}
              <div
                className="absolute top-0 left-0 w-1/2 h-full transition-transform duration-1000"
                style={{ transform: leftTrans }}
              >
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: isImageOnLeft
                      ? `url(${story.image})`
                      : undefined,
                  }}
                >
                  <div className="flex flex-col items-center justify-center h-full text-black p-8">
                    {!isImageOnLeft && (
                      <>
                        <h2 className="mb-4 text-center text-3xl font-bold uppercase leading-tight">
                          {story.storyTeller}
                        </h2>
                        <p className="text-center text-lg leading-snug text-neutral-600">
                          {story.description}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Half */}
              <div
                className="absolute top-0 left-1/2 w-1/2 h-full transition-transform duration-1000"
                style={{ transform: rightTrans }}
              >
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: isImageOnLeft
                      ? undefined
                      : `url(${story.image})`,
                  }}
                >
                  <div className="flex flex-col items-center justify-center h-full text-black p-8">
                    {isImageOnLeft && (
                      <>
                        <h2 className="mb-4 text-center text-3xl font-bold uppercase leading-tight">
                          {story.storyTeller}
                        </h2>
                        <p className="text-center text-lg leading-snug text-neutral-600">
                          {story.description}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
