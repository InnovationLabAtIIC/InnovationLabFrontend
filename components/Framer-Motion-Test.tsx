"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function OppositeScrollMotion() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Tracks scroll progress for this section only
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });


  const leftRaw = useTransform(scrollYProgress, [0, 1], [0, -220]);  // left
  const rightRaw = useTransform(scrollYProgress, [0, 1], [0, 220]);  // right


  const leftX = useSpring(leftRaw, { stiffness: 120, damping: 20 });
  const rightX = useSpring(rightRaw, { stiffness: 120, damping: 20 });

  return (
    <section ref={sectionRef} style={{ height: "140vh", paddingTop: "20vh" }}>
      <motion.div style={{ x: leftX, marginBottom: 24 }}>
        I move left on scroll
      </motion.div>

      <motion.div style={{ x: rightX }}>
        I move right on scroll
      </motion.div>
    </section>
  );
}