import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md flex justify-between items-center px-6 md:px-12 py-5 border-b border-gray-50">
      <div className="text-lg font-black tracking-tighter uppercase">
        IV Lab
      </div>

      <div className="hidden md:flex gap-10 text-[14px] font-bold uppercase tracking-[2px]">
        <Link href="/" className="hover:text-cyan-500 transition-colors">Home</Link>
        <Link href="/lab" className="hover:text-cyan-500 transition-colors">Lab</Link>
        <Link href="/events" className="hover:text-cyan-500 transition-colors">Events</Link>
        <Link href="/about" className="hover:text-cyan-500 transition-colors">About</Link>
        <Link href="/contact" className="hover:text-cyan-500 transition-colors">Contact</Link>
      </div>

      <Link 
        href="/login" 
        className="bg-gray-100 hover:bg-gray-200 text-black px-7 py-2 rounded-sm text-[14px] font-bold uppercase tracking-widest transition-all"
      >
        DO SMTH
      </Link>
    </nav>
  );
}