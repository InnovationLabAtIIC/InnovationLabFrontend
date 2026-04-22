"use client"

import React from 'react';
import { cn } from '@/lib/utils/util'; // Assuming a `cn` utility for classnames
import CompanyCard from '@/components/Company/companyCard';

// Define the type for individual logo props
interface Logo {
  src?: string;
  alt?: string;
  imageUrl?: string;
  companyName?: string;
  companyDetails?: string;
  internsCount?: number;
}

interface SelectedCompany {
  imageUrl: string;
  companyName: string;
  companyDetails: string;
  internsCount: number;
}

// Define the props for the main component
interface MarqueeLogoScrollerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  logos: Logo[];
  speed?: 'normal' | 'slow' | 'fast';
}

/**
 * A responsive, self-contained, and infinitely scrolling marquee component.
 * It pauses on hover and uses shadcn/ui theme variables for styling.
 * This component includes its own CSS animation and does not require tailwind.config.js modifications.
 */
const MarqueeLogoScroller = React.forwardRef<HTMLDivElement, MarqueeLogoScrollerProps>(
  ({ title, description, logos, speed = 'normal', className, ...props }, ref) => {
    const [isPaused, setIsPaused] = React.useState(false);
    const [selectedCompany, setSelectedCompany] = React.useState<SelectedCompany | null>(null);

    React.useEffect(() => {
      if (!selectedCompany) return;

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setSelectedCompany(null);
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [selectedCompany]);

    // Map speed prop to animation duration
    const durationMap = {
      normal: '40s',
      slow: '80s',
      fast: '5s',
    };
    const animationDuration = durationMap[speed];

    return (
      <>
        {/* The @keyframes for the marquee animation are defined directly here for robustness. */}
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
        
        <section
          ref={ref}
          aria-label={title}
          className={cn(
            'm-0 w-full bg-background text-foreground border border-[#DFDFDF] overflow-hidden',
            className
          )}
          {...props}
        >
          {/* Header Section */}
          <div className="p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 lg:gap-8 pb-6 md:pb-8 border-b border-[#006875]">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-balance">
                {title}
              </h2>
              <p className="text-muted-foreground self-start lg:justify-self-end text-balance">
                {description}
              </p>
            </div>
          </div>

          {/* Marquee Section */}
          <div
            className="w-full overflow-hidden"
            style={{
              maskImage:
                'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
          >
            <div 
              className="flex w-max items-center gap-4 py-4 pr-4 transition-all duration-300 ease-in-out" 
              style={{
                animation: `marquee ${animationDuration} linear infinite`,
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              {/* Render logos twice to create a seamless loop */}
              {[...logos, ...logos].map((logo, index) => {
                const imageSrc = logo.src ?? logo.imageUrl;
                const imageAlt = logo.alt ?? logo.companyName ?? 'Company logo';

                if (!imageSrc) return null;

                const companyPayload: SelectedCompany = {
                  imageUrl: logo.imageUrl ?? imageSrc,
                  companyName: logo.companyName ?? imageAlt,
                  companyDetails: logo.companyDetails ?? 'Details coming soon.',
                  internsCount: logo.internsCount ?? 0,
                };

                return (
                  <div
                    key={index}
                    className="group relative h-24 w-40 shrink-0 flex items-center justify-center border border-[#DFDFDF] bg-white overflow-hidden cursor-pointer"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onClick={() => setSelectedCompany(companyPayload)}
                  >
                    {/* Single hover color overlay for all logos */}
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 bg-cyan-400/15" />
                    {/* Logo Image */}
                    <img
                      src={imageSrc}
                      alt={imageAlt}
                      className="relative h-3/4 w-auto object-contain"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {selectedCompany && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            onClick={() => setSelectedCompany(null)}
          >
            <div
              className="relative w-full max-w-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedCompany(null)}
                className="absolute -right-2 -top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#DFDFDF] bg-white text-sm font-semibold text-black shadow-sm hover:bg-[#F3F3F3]"
                aria-label="Close company details"
              >
                X
              </button>

              <CompanyCard
                topText="Partner"
                imageUrl={selectedCompany.imageUrl}
                companyName={selectedCompany.companyName}
                companyDetails={selectedCompany.companyDetails}
                internsCount={selectedCompany.internsCount}
                disableTilt={true}
                className="bg-white"
              />
            </div>
          </div>
        )}
      </>
    );
  }
);

MarqueeLogoScroller.displayName = 'MarqueeLogoScroller';

export { MarqueeLogoScroller };
