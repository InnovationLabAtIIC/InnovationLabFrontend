import React from "react";
import Navbar from "@/components/NavBar";
import AboutCardList from "@/components/About/AboutCardList";

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
    imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&q=80",
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
    </>
  );
};

export default About;
