"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type ContactInfoCardProps = {
  title: string;
  content: string;
  isBordered?: boolean;
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ContactInfoCard({
  title,
  content,
  isBordered = true,
}: ContactInfoCardProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={itemVariants}
      className={`group relative p-6 cursor-pointer ${
        isBordered ? "border-b border-r border-[#d8d8d8] md:border-b-0" : ""
      }`}
      whileHover={
        reducedMotion
          ? undefined
          : {
              y: -4,
              transition: {
                duration: 0.4,
                ease: [0.34, 1.56, 0.64, 1],
              },
            }
      }
      transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {/* Animated background glow on hover */}
      <motion.div
        className="absolute inset-0 -z-10 bg-linear-to-br from-cyan-400/12 via-cyan-400/4 to-transparent rounded-lg opacity-0 pointer-events-none blur-xl"
        animate={reducedMotion ? { opacity: 0 } : undefined}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={
          reducedMotion
            ? undefined
            : {
                opacity: 1,
              }
        }
      />

      {/* Smooth border accent on hover */}
      <motion.div className="absolute top-0 left-0 h-0.5 w-0 bg-linear-to-r from-cyan-400 via-cyan-300 to-transparent group-hover:w-full transition-all duration-700 ease-out pointer-events-none" />

      {/* Card content with smooth entrance */}
      <motion.div className="relative z-10">
        <motion.h3
          className="mb-3 text-sm font-black uppercase tracking-tight text-[#181d22] transition-colors duration-400 group-hover:text-cyan-500"
          whileHover={
            reducedMotion
              ? undefined
              : {
                  letterSpacing: "0.08em",
                  x: 2,
                }
          }
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-xs uppercase tracking-[0.12em] text-[#60656a] transition-colors duration-400 group-hover:text-[#3a4044]"
          whileHover={
            reducedMotion
              ? undefined
              : {
                  letterSpacing: "0.16em",
                  x: 1,
                }
          }
          transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}
        >
          {content}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
