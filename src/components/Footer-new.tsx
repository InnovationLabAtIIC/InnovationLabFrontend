"use client";

import Image from "next/image";
import Link from "next/link";
import {} from "lucide-react";
import useGutter from "@/hooks/useGutter";
import GridSystem from "./Events/GridSystem";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Lab", href: "/lab" },
  { label: "Events", href: "/events" },
];

const companyLinks = [
  { label: "Company", href: "/company" },
  { label: "Communities", href: "/communities" },
  { label: "Contact", href: "/contact" },
  { label: "Login", href: "/login" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: <></>,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: <></>,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com",
    icon: <></>,
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: <></>,
  },
];

export default function FooterNew() {
  const pad = useGutter();

  return (
    <footer className="relative overflow-hidden bg-[#191919] text-white">
      <div className="pointer-events-none -z-1 w-full">
        <GridSystem
          rows={8}
          cells={[
            { row: 0, col: 0, color: "#212121" },
            { row: 0, col: 1, color: "#212121" },
            { row: 0, col: 2, color: "#212121" },
            { row: 0, col: 3, color: "#212121" },
            { row: 0, col: 4, color: "#212121" },
            { row: 0, col: 5, color: "#212121" },
            { row: 0, col: 6, color: "#212121" },
            { row: 0, col: 7, color: "#212121" },
            { row: 0, col: 8, color: "#212121" },
            { row: 0, col: 9, color: "#212121" },
            { row: 0, col: 10, color: "#212121" },
            { row: 0, col: 11, color: "#212121" },
            { row: 0, col: 12, color: "#212121" },
            { row: 0, col: 13, color: "#212121" },
            { row: 0, col: 14, color: "#212121" },
            { row: 0, col: 15, color: "#212121" },
            { row: 7, col: 0, color: "#212121" },
            { row: 7, col: 1, color: "#212121" },
            { row: 7, col: 2, color: "#212121" },
            { row: 7, col: 3, color: "#212121" },
            { row: 7, col: 4, color: "#212121" },
            { row: 7, col: 5, color: "#212121" },
            { row: 7, col: 6, color: "#212121" },
            { row: 7, col: 7, color: "#212121" },
            { row: 7, col: 8, color: "#212121" },
            { row: 7, col: 9, color: "#212121" },
            { row: 7, col: 10, color: "#212121" },
            { row: 7, col: 11, color: "#212121" },
            { row: 7, col: 12, color: "#212121" },
            { row: 7, col: 13, color: "#212121" },
            { row: 7, col: 14, color: "#212121" },
            { row: 7, col: 15, color: "#212121" },
            { row: 1, col: 0, color: "#212121" },
            { row: 2, col: 0, color: "#212121" },
            { row: 3, col: 0, color: "#212121" },
            { row: 4, col: 0, color: "#212121" },
            { row: 5, col: 0, color: "#212121" },
            { row: 6, col: 0, color: "#212121" },
            { row: 1, col: 15, color: "#212121" },
            { row: 2, col: 15, color: "#212121" },
            { row: 3, col: 15, color: "#212121" },
            { row: 4, col: 15, color: "#212121" },
            { row: 5, col: 15, color: "#212121" },
            { row: 6, col: 15, color: "#212121" },
            { row: 7, col: 0, color: "#00FFFF" },
            { row: 6, col: 0, color: "#0F9AAA" },
            { row: 5, col: 1, color: "#023035" },
            { row: 7, col: 15, color: "#00E5FF" },
            { row: 7, col: 14, color: "#067582" },
            { row: 7, col: 13, color: "#023035" },
            { row: 6, col: 15, color: "#067582" },
            { row: 5, col: 15, color: "#023035" },
          ]}
        />
      </div>
      <div
        style={{ padding: pad * 2 }}
        className="absolute z-10 w-full top-0 left-0"
      >
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5 lg:col-span-2">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/ivLabsLogo.svg"
                alt="Innovation Lab logo"
                width={190}
                height={48}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <p className="max-w-[48ch] text-sm leading-7 text-zinc-300 md:text-base">
              Innovation Lab is where teams build ideas into real products.
              Explore our programs, events, and communities built to help people
              create, learn, and launch faster.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-0 border border-zinc-700 bg-zinc-900/70 text-zinc-200 transition-colors hover:border-cyan-400 hover:text-cyan-300"
                  >
                    {/* <Icon size={18} /> */}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-zinc-200">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-cyan-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
              Explore
            </h3>
            <ul className="space-y-3 text-sm text-zinc-200">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-cyan-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-12 flex w-full max-w-[1200px] flex-col gap-3 border-t border-zinc-800 pt-6 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Innovation Lab. All rights reserved.
          </p>
          <p>Built for people who ship ideas.</p>
        </div>
      </div>
    </footer>
  );
}
