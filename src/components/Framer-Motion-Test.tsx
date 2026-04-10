"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function OppositeScrollMotion() {
  const sectionRef = useRef<HTMLDivElement>(null);

  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
// margin 200 px and the animation occurs

// doing it later if needed not rn

  });


  const leftRaw = useTransform(scrollYProgress, [0, 1], [0, -260]);  
  const rightRaw = useTransform(scrollYProgress, [0, 1], [0, 260]);  


  const leftX = useSpring(leftRaw, { stiffness: 120, damping: 20 });
  const rightX = useSpring(rightRaw, { stiffness: 120, damping: 20 });

  return (
    <section ref={sectionRef} style={{ height: "140vh", paddingTop: "20vh" }} className="text-5xl">
      <motion.div style={{ x: leftX, marginBottom: 24 }}>
        lorem Lorem ipsum dolor sit amet. LEFT LEFT LEFT LEFT
      </motion.div>

      <motion.div style={{ x: rightX }} className="text-5xl">
        lorem Lorem ipsum dolor sit amet. RIGHT RIGHT RIGHT RIGHT
      </motion.div>
    </section>
  );
}