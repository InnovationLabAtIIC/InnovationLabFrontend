import Navbar from '@/components/NavBar';
import Hero from '@/components/Home-Pg-Hero';
import Carousel from '@/components/Crausel';
import Marquee from '@/components/Maruee';
import NewsSection from '@/components/NewsSection';
import OppositeScrollMotion from '@/components/Framer-Motion-Test';
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar /> 
      
      <Hero />
      
   
      <div className="overflow-hidden px-0 min-w-full">
        <Carousel />
      </div>

      <Marquee />

      <NewsSection />

<div className='w-full flex align-center justify-center'>
      <OppositeScrollMotion />
      </div>
      
      
       <section className="py-24 px-10 text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 text-[14px] tracking-[4px] font-bold uppercase mb-8">
            <span className="w-3 h-3 bg-cyan-400"></span>
            ABOUT INNOVATIONS LAB
            <span className="w-3 h-3 bg-cyan-400"></span>
        </div>
        <div className="text-[28px] md:text-[42px] font-semibold leading-tight text-gray-800">
          We believe in the <span className="text-cyan-400">architectural</span> sovereignty of the grid. 
          Our practice is dedicated to the reduction of noise, <span className="text-cyan-400">favoring</span> 
           structural honesty over <span className="text-cyan-400">decorative</span> distraction.
        </div>
      </section>
     
    </main>
  );
}