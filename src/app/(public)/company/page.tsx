"use client";

import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageLayout from "@/components/primitives/PageLayout";
import PageHeader from "@/components/primitives/PageHeader";
import BentoGrid from "@/components/BentoGrid";
import CompanyList from "@/components/Company/companyList";
import type { CompanyListItem } from "@/components/Company/companyList";
import { MarqueeLogoScroller } from "@/components/Company/MarqueeLogoScroller";
import Component from "@/components/Company/StickyScrollCompanyCard";
import Stories from "@/components/Company/stories";
import type { StoryItem } from "@/components/Company/stories";
import { ContainerScroll } from "@/components/Animations/ContainerScroll";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Partner() {
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

  const companies: CompanyListItem[] = [
    {
      companyName: "Aether Dynamics",
      companyDetails:
        "Building autonomous sensing systems for smart mobility and logistics.",
      internsCount: 6,
      imageUrl:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
    },
    {
      companyName: "Nexa BioLabs",
      companyDetails:
        "Applying machine learning to accelerate drug discovery and testing.",
      internsCount: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=900&q=80",
    },
    {
      companyName: "Forge Robotics",
      companyDetails:
        "Designing modular robots for manufacturing and warehouse automation.",
      internsCount: 8,
      imageUrl:
        "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=900&q=80",
    },
    {
      companyName: "Pulse Grid",
      companyDetails:
        "Creating energy analytics tools for efficient and resilient city grids.",
      internsCount: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&q=80",
    },
    {
      companyName: "Cloud Harbor",
      companyDetails:
        "Shipping secure cloud infrastructure for fast scaling startup teams.",
      internsCount: 7,
      imageUrl:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80",
    },
    {
      companyName: "Verde Materials",
      companyDetails:
        "Developing sustainable materials for low waste product engineering.",
      internsCount: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=80",
    },
    {
      companyName: "Vertex Health",
      companyDetails:
        "Building AI-powered diagnostics and remote patient monitoring tools.",
      internsCount: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80",
    },
    {
      companyName: "Orbit Fintech",
      companyDetails:
        "Developing secure payment rails and analytics for digital-first finance teams.",
      internsCount: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=900&q=80",
    },
    {
      companyName: "Vertex Health",
      companyDetails:
        "Building AI-powered diagnostics and remote patient monitoring tools.",
      internsCount: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80",
    },
    {
      companyName: "Orbit Fintech",
      companyDetails:
        "Developing secure payment rails and analytics for digital-first finance teams.",
      internsCount: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=900&q=80",
    },
    {
      companyName: "Vertex Health",
      companyDetails:
        "Building AI-powered diagnostics and remote patient monitoring tools.",
      internsCount: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80",
    },
    {
      companyName: "Orbit Fintech",
      companyDetails:
        "Developing secure payment rails and analytics for digital-first finance teams.",
      internsCount: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=900&q=80",
    },
  ];

  const featuredCompanies = companies.slice(0, 6);

  const storiesData: StoryItem[] = [
    {
      image:
        "https://images.unsplash.com/photo-1748968218568-a5eac621e65c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D",
      storyTeller: "Rakshak Sigdel",
      description: "Hold on to your mouse, things are about to get wild!",
    },
    {
      image:
        "https://zamin.uz/uploads/posts/2025-07/a6273368c2_cristiano-ronaldo-6.webp",
      storyTeller: "Cristiano Ronaldo",
      description: "Siuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu!",
    },
    {
      image:
        "https://wallpapers.com/images/featured/dexter-pictures-fe9qbtzm9bbv0xxj.jpg",
      storyTeller: "Dexter Morgan",
      description:
        "Tonight's the night. It's going to happen again and again. It has to happen.",
    },
    {
      image: "https://wallpapercave.com/wp/wp1932768.png",
      storyTeller: "Walter White",
      description: "Say my Name",
    },
    {
      image:
        "https://images.unsplash.com/photo-1742626157052-f5a373a727ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
      storyTeller: "Epic Finale",
      description: ":)",
    },
  ];
  return (
    <PageLayout>
      <PageHeader title="PARTNERS" />
      <div className="mx-ds-5 mt-36 antialiased">
        <BentoGrid imageItems={galleryItems} />
      </div>
      <div className="line-bg w-full md:h-16 h-6"></div>
      <div className="mt-ds-7"></div>
      <div className="flex flex-col overflow-visible md:overflow-hidden ">
        <ContainerScroll
          contentClassName="mt-0 md:-mt-12"
          titleComponent={
            <>
              <h1 className="mb-0 text-4xl font-semibold text-neutral-900">
                Companies Providing
                <br />
                <span className="text-h4 md:text-h1 font-bold mt-ds-1 leading-none">
                  Internships
                </span>
              </h1>
            </>
          }
        >
          <section className="mx-ds-5 -mt-ds-5 md:mt-0 antialiased">
            <CompanyList companies={featuredCompanies} />
          </section>
        </ContainerScroll>
      </div>
      {/*Section: Description*/}
      <section className="py-24 px-10 text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 text-[14px] tracking-[4px] font-bold uppercase mb-8">
          <span className="w-3 h-3 bg-cyan-400"></span>
          ABOUT OUR PARTNERS
          <span className="w-ds-2 h-ds-2 bg-accent rounded-ds-sm"></span>
        </div>
        <h2 className="text-h3 md:text-h2 font-semibold leading-tight text-neutral-900">
          we are Innovation Labbist lorem gg , Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Odit voluptates voluptatibus iure, vitae
          nesciunt dicta qui, quasi doloribus explicabo itaque alias ipsa quam
          non suscipit est ad aut at dolor?
        </h2>
      </section>
      {/*Section: Stories*/}
      <div className="mt-[20vh] w-full h-screen">
        <Stories storiesData={storiesData} />
      </div>
      <div className="mt-[350vh]"></div>
      <Footer />
    </PageLayout>
  );
}
