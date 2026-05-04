import Link from "next/link";
import TransitionLink from "./TransitionLink";
import Button from "./primitives/Button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md flex justify-between items-center px-6 md:px-12 py-5 border-b border-gray-300">
      <div className="text-lg font-black tracking-tighter uppercase">
        <img
          src="/ivLabsLogo.svg"
          alt="Innovation Lab Logo"
          className="h-8 w-auto scale-190"
        />
      </div>

      <div className="hidden md:flex gap-10 text-[14px] font-bold uppercase tracking-[2px]">
        <TransitionLink
          href="/"
          className="hover:text-primary transition-colors"
        >
          Home
        </TransitionLink>
        <TransitionLink
          href="/about"
          className="hover:text-primary transition-colors"
        >
          About
        </TransitionLink>
        <TransitionLink
          href="/events"
          className="hover:text-primary transition-colors"
        >
          Events
        </TransitionLink>
        <TransitionLink
          href="/communities"
          className="hover:text-primary transition-colors"
        >
          Communities
        </TransitionLink>
        <TransitionLink
          href="/contact"
          className="hover:text-primary transition-colors"
        >
          Contact
        </TransitionLink>
        <TransitionLink
          href="/company"
          className="hover:text-primary transition-colors"
        >
          Company
        </TransitionLink>
      </div>
      <button className="border border-gray-300 px-6 py-3"> login</button>
    </nav>
  );
}
