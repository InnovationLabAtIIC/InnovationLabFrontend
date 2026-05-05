// components/ui/animated-presence-card.tsx

"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { cn } from "@/lib/utils/util" // Assuming shadcn/ui's utility function

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
  compact?: boolean;
}

export default function CompanyCard({
  topText,
  imageUrl,
  companyName,
  companyDetails,
  internsCount,
  internsColor = '#006875',
  className,
  disableTilt = false,
  compact = false,
}: CompanyCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values to track mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transform mouse position into rotation values
  const rotateX = useTransform(mouseY, [-150, 150], [10, -10]);
  const rotateY = useTransform(mouseX, [-200, 200], [-10, 10]);

  // Apply spring physics for smoother animations
  const springConfig = { damping: 20, stiffness: 150 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);


  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    // Update motion values relative to the center of the card
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    // Reset motion values on mouse leave
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
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className={cn(
        'group relative w-full overflow-hidden bg-card',
        'text-card-foreground transition-all duration-300 ease-out',
        className
      )}
    >
      <div style={{ transform: 'translateZ(20px)' }} className="relative h-full flex flex-col justify-between">
        {/* Image Section */}
        <div className={`relative ${compact ? 'px-4 pt-4' : 'px-6 pt-6'}`}>
          <div className={`absolute ${compact ? 'top-6 left-6' : 'top-10 left-10'} z-10 text-xs font-semibold uppercase tracking-widest text-white/90 mix-blend-difference`}>
            {topText}
          </div>
          <img
            src={imageUrl}
            alt="Digital Presence"
            className={`w-full object-cover ${compact ? 'h-[25vh] min-h-[120px]' : 'h-64'}`}
          />
        </div>

        {/* Content Section */}
        <div className={`flex-1 flex flex-col justify-center ${compact ? 'p-4' : 'p-6'}`}>
          <h2 className={`${compact ? 'text-[18px]' : 'text-[24px]'} font-bold leading-tight uppercase`}>
            {companyName}
          </h2>
          <p className={`mt-2 ${compact ? 'text-[12px]' : 'text-[14px]'} leading-snug text-[#515151]`}>
            {companyDetails}
          </p>
          <div className={`${compact ? 'mt-3' : 'mt-4'} border-t`} style={{ borderColor: internsColor }} />
        </div>

        {/* Footer Section */}
        <div className={`grid grid-cols-[1fr_auto] items-center gap-2 ${compact ? 'px-4 pb-4 pt-1' : 'px-6 pb-6 pt-1'}`}>
          <span className={`${compact ? 'text-[10px]' : 'text-[12px]'} font-black uppercase tracking-[2.5px] leading-tight text-black`}>
            <span className="lg:hidden">INTERNSHIP<br />QUOTA</span>
            <span className="hidden lg:inline">INTERNSHIP QUOTA</span>
          </span>
          <span
            className={`text-right ${compact ? 'text-[14px] sm:text-[16px] lg:text-[18px]' : 'text-[18px] sm:text-[20px] lg:text-[24px]'} font-black uppercase leading-none lg:whitespace-nowrap`}
            style={{ color: internsColor }}
          >
            {internsCount} INTERNS
          </span>
        </div>
      </div>
    </motion.div>
  );
}