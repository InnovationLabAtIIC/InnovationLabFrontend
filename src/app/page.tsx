import Navbar from '@/components/NavBar';
import Hero from '@/components/Home-Pg-Hero';
import Carousel from '@/components/Crausel';
import Marquee from '@/components/Maruee';
import NewsSection from '@/components/NewsSection';
import OppositeScrollMotion from '@/components/About-Extended';
import Footer from '@/components/Footer';
import EventsSection from '@/components/EventsSection';
import LearnMoreSection from '@/components/LearnMoreSection';

// trynna merge my branch to main

export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-white">
      <Navbar /> 
      
      <Hero />
      
   
      <div className="overflow-hidden px-0 min-w-full">
        <Carousel />
      </div>

      <Marquee />

      <NewsSection />

     
      
      
       <section className="py-24 px-10 text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 text-[14px] tracking-[4px] font-bold uppercase mb-8">
            <span className="w-3 h-3 bg-cyan-400"></span>
            ABOUT INNOVATIONS LAB
            <span className="w-3 h-3 bg-cyan-400"></span>
        </div>
        <div className="text-[28px] md:text-[42px] font-semibold leading-tight text-gray-800">
         we are Innovation Labbist lorem gg , Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit voluptates voluptatibus iure, vitae nesciunt dicta qui, quasi doloribus explicabo itaque alias ipsa quam non suscipit est ad aut at dolor?
        </div>
      </section>
       <div className="w-full flex items-center justify-center">
        <OppositeScrollMotion />
      </div>
     <EventsSection />
     <LearnMoreSection />
     <br />
    </main>
    <Footer />
    </>
  );
}