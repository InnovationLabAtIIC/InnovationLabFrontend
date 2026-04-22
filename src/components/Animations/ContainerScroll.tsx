"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
  className,
  contentClassName,
}: {
  titleComponent?: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.95, 1] : [1.02, 1];
  };

  // For tall content, complete the perspective animation earlier,
  // then keep the card stable for the remaining scroll distance.
  const settleProgress = isMobile ? 0.18 : 0.25;

  const rotateOutput = isMobile ? [8, 0, 0] : [20, 0, 0];
  const rotate = useTransform(scrollYProgress, [0, settleProgress, 1], rotateOutput);
  const scale = useTransform(scrollYProgress, [0, settleProgress, 1], [scaleDimensions()[0], 1, 1]);
  const translateOutput = isMobile ? [0, -20, -36] : [0, -70, -100];
  const translate = useTransform(scrollYProgress, [0, settleProgress, 1], translateOutput);

  return (
    <div
      className={`min-h-[60rem] md:h-[80rem] flex items-start md:items-center justify-center relative ${className ?? ""}`}
      ref={containerRef}
    >
      <div
        className="py-6 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        {titleComponent ? <Header translate={translate} titleComponent={titleComponent} /> : null}
        <Card rotate={rotate} scale={scale} className={contentClassName}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div w-full text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
  className,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className={`mt-6 md:-mt-12 w-full ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
};
