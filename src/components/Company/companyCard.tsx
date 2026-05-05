// components/ui/animated-presence-card.tsx

"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils/util"; // Assuming shadcn/ui's utility function

// Define the props for the component
interface CompanyCardProps {
  topText: string;
  imageUrl: string;
  companyName: string;
  companyDetails: string;
  internsCount: number;
  internsColor?: string;
  className?: string;
  disableTilt?: boolean;
}

export default function CompanyCard({
  topText,
  imageUrl,
  companyName,
  companyDetails,
  internsCount,
  className,
  disableTilt = false,
}: CompanyCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-150, 150], [10, -10]);
  const rotateY = useTransform(mouseX, [-200, 200], [-10, 10]);

  const springConfig = { damping: 20, stiffness: 150 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={disableTilt ? undefined : handleMouseMove}
      onMouseLeave={disableTilt ? undefined : handleMouseLeave}
      style={{
        rotateX: disableTilt ? 0 : springRotateX,
        rotateY: disableTilt ? 0 : springRotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className={cn(
        "group relative w-full overflow-hidden",
        "transition-all duration-300 ease-out",
        className,
      )}
    >
      <div style={{ transform: "translateZ(20px)" }} className="relative ">
        <div className="relative px-0 pt-0">
          <div className="absolute top-10 left-10 z-10 text-xs font-semibold uppercase tracking-widest text-white/90 mix-blend-difference">
            {topText}
          </div>
          <img
            src={imageUrl}
            alt="Digital Presence"
            className="h-64 w-full object-cover"
          />
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold leading-tight uppercase">
            {companyName}
          </h2>
          <p className="mt-2 text-md leading-snug text-black">
            {companyDetails}
          </p>
          <div className="mt-4 border-t border-gray-300" />
        </div>

        <div className="grid grid-cols-[1fr_auto] items-center gap-2 px-6 pb-6 pt-1">
          <span className="text-[12px] font-black uppercase tracking-[2.5px] leading-tight text-black">
            <span className="lg:hidden">
              INTERNSHIP
              <br />
              QUOTA
            </span>
            <span className="hidden lg:inline">INTERNSHIP QUOTA</span>
          </span>
          <span className="text-right text-md text-primary font-black uppercase leading-none  lg:whitespace-nowrap">
            {internsCount} INTERNS
          </span>
        </div>
      </div>
    </motion.div>
  );
}
