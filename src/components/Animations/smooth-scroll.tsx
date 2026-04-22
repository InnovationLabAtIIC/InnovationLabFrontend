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

    return (
      <section ref={ref} className={cn("relative", className)}>
        <article>
          {sections.map((section, index) => (
            <section
              key={index}
              className={cn(
                "sticky top-0 min-h-screen",
                sectionClassName,
              )}
              style={{ zIndex: index + 1 }}
            >
              <div className="min-h-screen">{section}</div>
            </section>
          ))}
        </article>
      </section>
    );
  },
);

SmoothScroll.displayName = "SmoothScroll";

export default SmoothScroll;