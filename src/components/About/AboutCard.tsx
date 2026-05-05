import * as React from "react";
import { cn } from "@/lib/utils/util";

interface AboutCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  title: string;
  category: string;
  onSave?: () => void;
}

const AboutCard = React.forwardRef<HTMLDivElement, AboutCardProps>(
  ({ className, imageUrl, title, category, onSave, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative block overflow-hidden bg-card text-card-foreground transition-all duration-300 ",
          className,
        )}
        {...props}
      >
        <a aria-label={title}>
          {/* Image container with aspect ratio */}
          <div className="aspect-square overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full border-black object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          {/* Card content */}
          <div className="p0 py-6">
            <h3 className="font-semibold text-xl truncate">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{category}</p>
          </div>
        </a>

        {/* Save button - appears on hover */}
        {/* <Button
          variant="accent"
          size="icon"
          className="absolute top-3 right-3 h-8 w-8 rounded-full opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100"
          onClick={handleSaveClick}
          aria-label="Save thing"
        >
          <Bookmark className="h-4 w-4" />
        </Button> */}
      </div>
    );
  },
);

AboutCard.displayName = "AboutCard";

export { AboutCard };
