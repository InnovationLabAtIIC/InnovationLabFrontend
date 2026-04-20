import React from "react";
import Navbar from "@/components/NavBar";
import AboutCardList from "@/components/About/AboutCardList";
import StrategicPillarsCardList from "@/components/About/StrategicPillarsCardList";
import Timeline from "@/components/About/Timeline";
import BentoGrid from "@/components/BentoGrid";

const aboutCards = [
  {
    title: "AER Duffle Pack 3",
    category: "Backpacks",
    imageUrl:
      "https://images.unsplash.com/photo-1621624959365-071359461b94?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJhY2twYWNrc3xlbnwwfHwwfHx8MA%3D%3D?w=500&q=80",
  },
  {
    title: "Minimalist Mechanical Watch",
    category: "Watches",
    imageUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
  },
  {
    title: "Wireless Charging Stand",
    category: "Tech Accessories",
    imageUrl:
      "https://images.unsplash.com/photo-1617975316514-69cd7e16c2a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2lyZWxlc3MlMjBDaGFyZ2luZyUyMFN0YW5kfGVufDB8fDB8fHww?w=500&q=80",
  },
  {
    title: "Artisan Ceramic Mug",
    category: "Home Goods",
    imageUrl:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&q=80",
  },
];
const strategicPillars = [
  {
    Section: "Section 01",
    title: "Mission",
    items: [
      {
        id: "01",
        title: "Cognition",
        description:
          "Dismantle the boundary between human intuition and synthetic logic.",
      },
      {
        id: "02",
        title: "Integrity",
        description:
          "Establish absolute algorithmic structural integrity in every build.",
      },
      {
        id: "03",
        title: "Sovereignty",
        description:
          "Architecting the sovereign layer of autonomous urban intelligence.",
      },
      {
        id: "04",
        title: "Friction",
        description:
          "Embracing the friction of progress to define the new architectural standard.",
      },
    ],
  },
  {
    Section: "Section 02",
    title: "Vision",
    items: [
      {
        id: "V_01",
        title: "Precision",
        description:
          "A future where every pixel of a city is a mathematical proof.",
      },
      {
        id: "V_02",
        title: "Adaptation",
        description:
          "Living structures that evolve in real-time with environmental loads.",
      },
      {
        id: "V_03",
        title: "Synthesis",
        description:
          "The seamless merger of biological habitat and digital substrate.",
      },
      {
        id: "V_04",
        title: "Expansion",
        description:
          "Global deployment of NEO-LAB structures across all physical frontiers.",
      },
    ],
  },
  // {
  //   Section: "Section 03",
  //   title: "Mission",
  //   items: [
  //     {
  //       id: "01",
  //       title: "Cognition",
  //       description:
  //         "Dismantle the boundary between human intuition and synthetic logic.",
  //     },
  //     {
  //       id: "02",
  //       title: "Integrity",
  //       description:
  //         "Establish absolute algorithmic structural integrity in every build.",
  //     },
  //     {
  //       id: "03",
  //       title: "Sovereignty",
  //       description:
  //         "Architecting the sovereign layer of autonomous urban intelligence.",
  //     },
  //     {
  //       id: "04",
  //       title: "Friction",
  //       description:
  //         "Embracing the friction of progress to define the new architectural standard.",
  //     },
  //   ],
  // },
  // {
  //   Section: "Section 04",
  //   title: "Mission",
  //   items: [
  //     {
  //       id: "01",
  //       title: "Cognition",
  //       description:
  //         "Dismantle the boundary between human intuition and synthetic logic.",
  //     },
  //     {
  //       id: "02",
  //       title: "Integrity",
  //       description:
  //         "Establish absolute algorithmic structural integrity in every build.",
  //     },
  //     {
  //       id: "03",
  //       title: "Sovereignty",
  //       description:
  //         "Architecting the sovereign layer of autonomous urban intelligence.",
  //     },
  //     {
  //       id: "04",
  //       title: "Friction",
  //       description:
  //         "Embracing the friction of progress to define the new architectural standard.",
  //     },
  //   ],
  // },
];

const timelineData = [
  {
    year: "2024",
    title: "Launch Phase",
    description:
      "Built and launched Aceternity UI and Aceternity UI Pro from scratch.",
    images: [
      "https://assets.aceternity.com/templates/startup-1.webp",
      // "https://assets.aceternity.com/templates/startup-2.webp",
      // "https://assets.aceternity.com/templates/startup-3.webp",
      // "https://assets.aceternity.com/templates/startup-4.webp",
    ],
  },
  {
    year: "2023",
    title: "Design Expansion",
    description:
      "Expanded component library with hero, features, and grid systems for faster delivery.",
    images: [
      "https://assets.aceternity.com/pro/hero-sections.png",
      // "https://assets.aceternity.com/features-section.png",
      // "https://assets.aceternity.com/pro/bento-grids.png",
    ],
  },
  {
    year: "2022",
    title: "Foundational Research",
    description:
      "Researched interaction patterns, created internal drafts, and validated layout direction.",
    images: ["https://assets.aceternity.com/features-section.png"],
  },
];
const galleryItems = [
  {
    id: 1,
    title: "Mountain Vista",
    desc: "Serenity above the clouds.",
    url: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Coastal Arch",
    desc: "Where the land meets the sea.",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 3,
    title: "Forest Canopy",
    desc: "Sunlight filtering through leaves.",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "Desert Dunes",
    desc: "Golden sands under the sun.",
    url: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800&q=80",
    span: "md:col-span-1 md:row-span-1",
  },
];

const About = () => {
  return (
    <>
      <Navbar />
      {/**Header at the top */}
      <h1 className="text-[clamp(40px,8vw,90px)] font-black leading-none tracking-tighter uppercase text-gap-2 ml-10 mb-10">
        A<span className="text-cyan-400">B</span>OUT
      </h1>
      {/**First Description */}
      <section className="py-2 px-10 text-justify max-w-8xl mx-auto">
        <div className="text-[22px] md:text-[32px]  leading-tight text-gray-800">
          we are
          <span className="text-cyan-400 font-semibold">Innovation</span>
          Labbist lorem gg , Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Odit voluptates voluptatibus iure, vitae{" "}
          <span className="text-cyan-400 font-semibold">nesciunt </span> dicta
          qui, quasi doloribus{" "}
          <span className="text-cyan-400 font-semibold">explicabo</span> itaque
          alias ipsa quam non suscipit est ad aut at{" "}
          <span className="text-cyan-400 font-semibold">dolor</span>?
        </div>
      </section>
      {/**Second Description */}
      <section className="py-8 px-10 text-justify max-w-8xl mx-auto">
        <div className="text-[22px] md:text-[32px] leading-tight text-gray-800">
          we are
          <span className="text-cyan-400 font-semibold">Innovation</span>
          Labbist lorem gg , Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Odit voluptates voluptatibus iure, vitae{" "}
          <span className="text-cyan-400 font-semibold">nesciunt </span> dicta
          qui, quasi doloribus{" "}
          <span className="text-cyan-400 font-semiold">explicabo</span> itaque
          alias ipsa quam non suscipit est ad aut at{" "}
          <span className="text-cyan-400 font-semibold">dolor</span>?
        </div>
      </section>
      {/**Features Card (Name TBD)*/}
      <AboutCardList items={aboutCards} />
      {/**Strategic Pillars Card */}
      <StrategicPillarsCardList items={strategicPillars} />
      <Timeline items={timelineData} />
      <div className="mx-10 mt-10 antialiased">
        <BentoGrid imageItems={galleryItems} />
      </div>
      <div className="mt-[100vh]"></div>
    </>
  );
};

export default About;
