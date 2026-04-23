import React from "react";
import StrategicPillarsCard, { type StrategicPillarSection } from "./StrategicPillarsCard";
import { cn } from "@/lib/utils/util";

type StrategicPillarsCardListProps = {
  items: StrategicPillarSection[];
};

const titleThemes = [
  {
    background: "bg-[#0f6f73]",
    text: "text-white",
  },
  {
    background: "bg-[#111417]",
    text: "text-cyan-400",
  },
];

export default function StrategicPillarsCardList({ items }: StrategicPillarsCardListProps) {
  const hasTwoSections = items.length === 2;

  return (
    <section className="mb-10 border-y-[3px] border-black">
      <div className={cn(hasTwoSections && "lg:min-h-screen") }>
        {items.map((section, index) => {
          const theme = titleThemes[index % titleThemes.length];

          return (
            <StrategicPillarsCard
              key={`${section.Section}-${section.title}`}
              section={section}
              titleBackgroundClassName={theme.background}
              titleTextClassName={theme.text}
              titleOnLeft={index % 2 === 0}
              className={cn(
                "border-black",
                index !== items.length - 1 && "border-b-[3px]",
                "lg:min-h-[50vh]",
              )}
            />
          );
        })}
      </div>
    </section>
  );
}
