import React from "react";
import StrategicPillarsCard, {
  type StrategicPillarSection,
} from "./StrategicPillarsCard";
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
    text: "text-primary",
  },
];

export default function StrategicPillarsCardList({
  items,
}: StrategicPillarsCardListProps) {
  const hasTwoSections = items.length === 2;

  return (
    <section className="mb-10 bg-white">
      <div className={cn(hasTwoSections && "lg:min-h-screen")}>
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
                index !== items.length - 1 && "border-b-1",
                "lg:min-h-[50vh]",
              )}
            />
          );
        })}
      </div>
    </section>
  );
}
