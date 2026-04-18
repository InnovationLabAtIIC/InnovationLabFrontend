"use client";
import React from "react";
import { motion } from "framer-motion";

const footerNavigation = {
  services: [
    "Editorial Design",
    "Brand Systems",
    "Digital Strategy",
    "Art Direction",
  ],
  company: ["Philosophy", "Projects", "Archive", "Careers"],
  resources: ["Newsroom", "White Papers", "Case Studies", "Documentation"],
  social: ["Instagram", "LinkedIn", "Threads", "Behance"],
};

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0a0a] text-white py-20 overflow-hidden">
      {/* Background Image/Overlay Placeholder */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url('/path-to-your-abstract-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'hue-rotate(45deg)'
        }}
      />

      <div className="relative z-10 max-w-290 w-[94vw] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-extrabold tracking-tighter uppercase mb-8"
            >
              Innovation Lab
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-gray-400 max-w-[32ch] leading-relaxed mb-10"
            >
              Leading the industry with high-contrast minimalist design and structural authority. 
              We strip away the unnecessary to reveal the essential.
            </motion.p>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black font-bold uppercase tracking-widest text-[0.7rem] px-8 py-4 transition-colors hover:bg-ivCyan"
            >
              Start an Inquiry
            </motion.button>
          </div>

          {/* Navigation Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerNavigation).map(([category, links], idx) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="flex flex-col gap-6"
              >
                <h4 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gray-500">
                  {category}
                </h4>
                <ul className="flex flex-col gap-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-[0.7rem] font-bold uppercase tracking-widest text-white hover:text-ivCyan transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}