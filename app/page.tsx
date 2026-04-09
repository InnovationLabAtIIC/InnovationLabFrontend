import Navbar from '@/components/NavBar';
import Hero from '@/components/Home-Pg-Hero';
import Carousel from '@/components/Crausel';
import Marquee from '@/components/Maruee';


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar /> 
      
      <Hero />
      
   
      <div className="space-y-6 overflow-hidden">
        <Carousel />
       
        <Carousel /> 
      </div>

      <Marquee />
      
      
      
     
    </main>
  );
}