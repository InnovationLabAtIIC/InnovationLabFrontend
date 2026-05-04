"use client";

import React, { Children, forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils/util";

type SmoothScrollProps = {
  children: ReactNode;
  className?: string;
  sectionClassName?: string;
};

const SmoothScroll = forwardRef<HTMLElement, SmoothScrollProps>(
  ({ children, className, sectionClassName }, ref) => {
    const sections = Children.toArray(children).filter(Boolean);
    const zClasses = ["z-10", "z-20", "z-30", "z-40", "z-50"];

    return (
      <section ref={ref} className={cn("relative", className)}>
        <article>
          {sections.map((section, index) => (
            <section
              key={index}
              className={cn(
                "sticky top-0 h-auto",
                sectionClassName,
                zClasses[index] || "z-0",
              )}
            >
              <div className="h-auto">{section}</div>
            </section>
          ))}
        </article>
      </section>
    );
  },
);

SmoothScroll.displayName = "SmoothScroll";

export default SmoothScroll;
