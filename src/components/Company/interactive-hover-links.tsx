import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface InteractiveHoverTitleProps {
  title: string;
  imageSrc: string;
  imageHref?: string;
  className?: string;
  targetRef?: React.RefObject<HTMLElement | null>;
  imageOffsetX?: string;
  imageOffsetY?: string;
  imageClassName?: string;
}

export function InteractiveHoverTitle({
  title,
  imageSrc,
  imageHref,
  className,
  targetRef,
  imageOffsetX = "-20%",
  imageOffsetY = "-50%",
  imageClassName,
}: InteractiveHoverTitleProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["86%", "24%"]);

  const handleMouseMove = (e: MouseEvent | React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = targetRef?.current ?? ref.current;
    if (!target) return;
    const rect = target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  useEffect(() => {
    if (!targetRef?.current) return;
    const target = targetRef.current;

    const handleEnter = () => setIsHovered(true);
    const handleLeave = () => {
      setIsHovered(false);
      x.set(0);
      y.set(0);
    };

    const handleMove = (event: MouseEvent) => handleMouseMove(event);

    target.addEventListener("mouseenter", handleEnter);
    target.addEventListener("mouseleave", handleLeave);
    target.addEventListener("mousemove", handleMove);

    return () => {
      target.removeEventListener("mouseenter", handleEnter);
      target.removeEventListener("mouseleave", handleLeave);
      target.removeEventListener("mousemove", handleMove);
    };
  }, [targetRef]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={targetRef ? undefined : handleMouseMove}
      onMouseEnter={targetRef ? undefined : () => setIsHovered(true)}
      onMouseLeave={
        targetRef
          ? undefined
          : () => {
              setIsHovered(false);
              x.set(0);
              y.set(0);
            }
      }
      initial="initial"
      animate={isHovered ? "hover" : "initial"}
      className={`group relative inline-flex items-center ${className ?? ""}`}
    >
      <motion.span
        variants={{
          initial: { x: 0 },
          whileHover: { x: -8 },
        }}
        transition={{
          type: "spring",
          staggerChildren: 0.02,
          delayChildren: 0.05,
        }}
        className="relative z-10 block font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-foreground"
      >
        {title.split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={{
              initial: { x: 0 },
              whileHover: { x: 8 },
            }}
            transition={{ type: "spring" }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>

      <motion.img
        style={{
          top,
          left,
          translateX: imageOffsetX,
          translateY: imageOffsetY,
        }}
        variants={{
          initial: { scale: 0, rotate: "-10deg" },
          hover: { scale: 1, rotate: "8deg" },
        }}
        transition={{ type: "spring" }}
        src={imageSrc}
        className={`absolute z-50 h-20 w-28 rounded-lg object-cover shadow-lg md:h-32 md:w-44 ${imageClassName ?? ""}`}
        alt={title}
        onClick={(event) => {
          event.stopPropagation();
          if (imageHref) {
            window.open(imageHref, "_blank", "noopener,noreferrer");
          }
        }}
      />
    </motion.div>
  );
}