import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BentoGrid from "@/components/BentoGrid";
import CompanyList from "@/components/Company/companyList";
import type { CompanyListItem } from "@/components/Company/companyList";
import SphereImageGrid, { ImageData } from "@/components/Company/ImageSphere";

import Stories from "@/components/Company/stories";
import type { StoryItem } from "@/components/Company/stories";

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
  ];
  // Image data using project assets - duplicated to fill sphere better
  const BASE_IMAGES: Omit<ImageData, "id">[] = [
    {
      src: "https://images.unsplash.com/photo-1758178309498-036c3d7d73b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
      alt: "Image 1",
      title: "Mountain Landscape",
      description:
        "A beautiful landscape captured at golden hour with mountains in the background.",
    },
    {
      src: "https://images.unsplash.com/photo-1757647016230-d6b42abc6cc9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2072",
      alt: "Image 2",
      title: "Portrait Photography",
      description:
        "Stunning portrait photography showcasing natural lighting and composition.",
    },
    {
      src: "https://images.unsplash.com/photo-1757906447358-f2b2cb23d5d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
      alt: "Image 3",
      title: "Urban Architecture",
      description:
        "Modern architectural design featuring clean lines and geometric patterns.",
    },
    {
      src: "https://images.unsplash.com/photo-1742201877377-03d18a323c18?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1064",
      alt: "Image 4",
      title: "Nature Scene",
      description:
        "Peaceful nature scene with vibrant colors and natural beauty.",
    },
    {
      src: "https://images.unsplash.com/photo-1757081791153-3f48cd8c67ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
      alt: "Image 5",
      title: "Abstract Art",
      description:
        "Creative abstract composition with bold colors and unique patterns.",
    },
    {
      src: "https://images.unsplash.com/photo-1757626961383-be254afee9a0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
      alt: "Image 6",
      title: "Mountain Landscape",
      description:
        "A beautiful landscape captured at golden hour with mountains in the background.",
    },
    {
      src: "https://images.unsplash.com/photo-1756748371390-099e4e6683ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
      alt: "Image 7",
      title: "Portrait Photography",
      description:
        "Stunning portrait photography showcasing natural lighting and composition.",
    },
    {
      src: "https://images.unsplash.com/photo-1755884405235-5c0213aa3374?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
      alt: "Image 8",
      title: "Urban Architecture",
      description:
        "Modern architectural design featuring clean lines and geometric patterns.",
    },
    {
      src: "https://images.unsplash.com/photo-1757495404191-e94ed7e70046?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
      alt: "Image 9",
      title: "Nature Scene",
      description:
        "Peaceful nature scene with vibrant colors and natural beauty.",
    },
    {
      src: "https://images.unsplash.com/photo-1756197256528-f9e6fcb82b04?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1064",
      alt: "Image 10",
      title: "Abstract Art",
      description:
        "Creative abstract composition with bold colors and unique patterns.",
    },
    {
      src: "https://images.unsplash.com/photo-1534083220759-4c3c00112ea0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
      alt: "Image 11",
      title: "Abstract Art",
      description:
        "Creative abstract composition with bold colors and unique patterns.",
    },
    {
      src: "https://images.unsplash.com/photo-1755278338891-e8d8481ff087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674",
      alt: "Image 12",
      title: "Abstract Art",
      description:
        "Creative abstract composition with bold colors and unique patterns.",
    },
  ];

  // Generate more images by repeating the base set
  const IMAGES: ImageData[] = [];
  for (let i = 0; i < 60; i++) {
    const baseIndex = i % BASE_IMAGES.length;
    const baseImage = BASE_IMAGES[baseIndex];
    IMAGES.push({
      id: `img-${i + 1}`,
      ...baseImage,
      alt: `${baseImage.alt} (${Math.floor(i / BASE_IMAGES.length) + 1})`,
    });
  }

  // Component configuration - easily adjustable
  interface SphereConfig {
    containerSize: number;
    sphereRadius: number;
    dragSensitivity: number;
    momentumDecay: number;
    maxRotationSpeed: number;
    baseImageScale: number;
    hoverScale: number;
    perspective: number;
    autoRotate: boolean;
    autoRotateSpeed: number;
  }

  const CONFIG: SphereConfig = {
    containerSize: 600, // Container size in pixels
    sphereRadius: 200, // Virtual sphere radius (increased for better spacing)
    dragSensitivity: 0.8, // Mouse drag sensitivity (0.1 - 2.0)
    momentumDecay: 0.96, // How fast momentum fades (0.8 - 0.99)
    maxRotationSpeed: 10, // Maximum rotation speed (1 - 10)
    baseImageScale: 0.15, // Base image size (reduced to minimize overlap)
    hoverScale: 1.3, // Hover scale multiplier (1.0 - 2.0)
    perspective: 1000, // CSS perspective value (500 - 2000)
    autoRotate: true, // Enable/disable auto rotation
    autoRotateSpeed: 0.2, // Auto rotation speed (0.1 - 2.0, higher = faster)
  };

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
    <>
      <Navbar />
      {/* Section: Heading (PARTNERS) */}
      <h1 className="text-[clamp(40px,8vw,90px)] font-black leading-none tracking-tighter uppercase text-gap-2 ml-10 mb-10">
        P<span className="text-cyan-400">A</span>RTNERS
      </h1>
      {/*Section: Gallery*/}
      <div className="mx-10 antialiased">
        <BentoGrid imageItems={galleryItems} />
      </div>
      <div className="mt-[144px]"></div>
      {/*Section: Company and Internship Offered */}
      <section className="mx-10 antialiased">
        <CompanyList companies={companies} />
      </section>
      {/**Section: All Companies Rotating Sphere section */}
      <section className="w-full p-6 flex justify-center items-center min-h-screen">
        <SphereImageGrid images={IMAGES} {...CONFIG} />
      </section>
      {/*Section: Description*/}
      <section className="py-24 px-10 text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 text-[14px] tracking-[4px] font-bold uppercase mb-8">
          <span className="w-3 h-3 bg-cyan-400"></span>
          ABOUT OUR PARTNERS
          <span className="w-3 h-3 bg-cyan-400"></span>
        </div>
        <div className="text-[28px] md:text-[42px] font-semibold leading-tight text-gray-800">
          we are Innovation Labbist lorem gg , Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Odit voluptates voluptatibus iure, vitae
          nesciunt dicta qui, quasi doloribus explicabo itaque alias ipsa quam
          non suscipit est ad aut at dolor?
        </div>
      </section>

      {/*Section: Stories*/}
      <div className="w-full h-screen">
        <Stories storiesData={storiesData} />
      </div>
      {/**This is temporsry. Need a permanent fix for margin applied below */}
      <div className="mt-[350vh]"></div>
      <Footer />

      {/*DUMMY: Dummy Section for scrolling */}
      {/* <h1 className="text-[clamp(40px,8vw,90px)] font-black leading-none tracking-tighter uppercase text-gap-2 ml-10 mb-10 mt-[100rem]">
        P<span className="text-cyan-400">A</span>RTNERS
      </h1>
      <section className="py-24 px-10 text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 text-[14px] tracking-[4px] font-bold uppercase mb-8">
          <span className="w-3 h-3 bg-cyan-400"></span>
          ABOUT OUR PARTNERS
          <span className="w-3 h-3 bg-cyan-400"></span>
        </div>
        <div className="text-[28px] md:text-[42px] font-semibold leading-tight text-gray-800">
          we are Innovation Labbist lorem gg , Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Odit voluptates voluptatibus iure, vitae
          nesciunt dicta qui, quasi doloribus explicabo itaque alias ipsa quam
          non suscipit est ad aut at dolor?
        </div>
      </section> */}
    </>
  );
}
