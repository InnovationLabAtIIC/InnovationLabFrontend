import Navbar from "@/components/NavBar";
import PartnersGallery from "@/components/Partners/gallery";
import CompanyList from "@/components/Partners/companyList";
import type { CompanyListItem } from "@/components/Partners/companyList";

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
    // {
    //   id: 5,
    //   title: "City at Night",
    //   desc: "A vibrant urban landscape.",
    //   url: "https://images.unsplash.com/photo-1506606401543-2e73709cebb4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2l0eSUyMGF0JTIwTmlnaHR8ZW58MHx8MHx8fDA%3D?w=800&q=80",
    //   span: "md:row-span-1",
    // },
    // {
    //   id: 6,
    //   title: "Misty Lake",
    //   desc: "Morning fog over calm waters.",
    //   url: "https://images.unsplash.com/photo-1634023233766-0c16b151bfb0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWlzdHklMjBMYWtlfGVufDB8fDB8fHww?w=800&q=80",
    //   span: "md:col-span-2 md:row-span-1",
    // },
    // {
    //   id: 7,
    //   title: "City at Night",
    //   desc: "A vibrant urban landscape.",
    //   url: "https://images.unsplash.com/photo-1506606401543-2e73709cebb4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2l0eSUyMGF0JTIwTmlnaHR8ZW58MHx8MHx8fDA%3D?w=800&q=80",
    //   span: "md:row-span-1",
    // },
    // {
    //   id: 8,
    //   title: "Misty Lake",
    //   desc: "Morning fog over calm waters.",
    //   url: "https://images.unsplash.com/photo-1634023233766-0c16b151bfb0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWlzdHklMjBMYWtlfGVufDB8fDB8fHww?w=800&q=80",
    //   span: "md:col-span-2 md:row-span-1",
    // },
  ];

  const companies: CompanyListItem[] = [
    {
      companyName: "Aether Dynamics",
      companyDetails: "Building autonomous sensing systems for smart mobility and logistics.",
      internsCount: 6,
      imageUrl:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
    },
    {
      companyName: "Nexa BioLabs",
      companyDetails: "Applying machine learning to accelerate drug discovery and testing.",
      internsCount: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=900&q=80",
    },
    {
      companyName: "Forge Robotics",
      companyDetails: "Designing modular robots for manufacturing and warehouse automation.",
      internsCount: 8,
      imageUrl:
        "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=900&q=80",
    },
    {
      companyName: "Pulse Grid",
      companyDetails: "Creating energy analytics tools for efficient and resilient city grids.",
      internsCount: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&q=80",
    },
    {
      companyName: "Cloud Harbor",
      companyDetails: "Shipping secure cloud infrastructure for fast scaling startup teams.",
      internsCount: 7,
      imageUrl:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80",
    },
    {
      companyName: "Verde Materials",
      companyDetails: "Developing sustainable materials for low waste product engineering.",
      internsCount: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=80",
    },
  ];
  return (
    <>
      <Navbar />
      {/* Section: Heading (PARTNERS) */}
      {/* <h1 className="text-[clamp(40px,8vw,90px)] font-black leading-none tracking-tighter uppercase text-gap-2 ml-10 mb-10">
        P<span className="text-cyan-400">A</span>RTNERS
      </h1> */}
      {/*Section: Gallery*/}
      <div className="mx-10 antialiased">
        <PartnersGallery imageItems={galleryItems} />
      </div>
      <div className="mt-[144px]"></div>
      {/*Section: Company and Internship Offered */}
      <div className="mx-10 antialiased">
        <CompanyList companies={companies} />
      </div>
      {/*Section: Description*/}
      {/*Section: Stories*/}
      {/*Section: Dummy Section for scrolling */}
      <h1 className="text-[clamp(40px,8vw,90px)] font-black leading-none tracking-tighter uppercase text-gap-2 ml-10 mb-10 mt-[100rem]">
        P<span className="text-cyan-400">A</span>RTNERS
      </h1>
    </>
  );
}
